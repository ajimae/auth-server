import express from 'express'
import routes from 'src/routes/index';
import { config } from 'dotenv';

config()
const server = express();

server.use(express.json())
server.use(express.urlencoded({ extended: true }))

server.get('/', (req, res) => {
  res.json({
    status: 'success',
    message: 'welcome to authentication server...',
  })
})

server.use(routes)

const port = 8058;
server.listen(port, () => console.log('server listening on port ' + port))
