import { Router } from 'express'
import redisClient from 'src/clients/client';
import { signToken, verifyToken } from '../auth';

const router = Router();
router.post('/store/:key', async (req, res) => {
  const { key } = req.params;
  const value = req.query;

  await redisClient.setAsync(key, JSON.stringify(value));
  return res.status(201).json({
    status: 'success',
  });
})

router.get('/:key', async (req, res) => {
  const { key } = req.params
  const rawData = await redisClient.getAsync(key)
  return res.status(200).json({
    status: 'success',
    data: JSON.parse(rawData)
  });
})

router.post('/api/v1/login', (req, res) => {
  const { body } = req;
  // set the auth token to header
  const token = signToken(body)
  req.headers['authorization'] = `Bearer ${token}`
  return res.status(200).json({
    status: 'success',
    data: {
      email: body.email,
      token
    }
  })
})

function isValid(token) {
  return verifyToken(token)
}

router.get('/api/v1/dashboard', async (req, res) => {
  const token = req.headers && req.headers['authorization'].split(' ')[1]
  const { email, age } = isValid(token)
  return res.status(200).json({
    status: 'success',
    data: {
      email,
      age
    }
  })
})

export default router;
