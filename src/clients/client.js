import redis from 'redis';
import { promisify } from 'util';

const client = redis.createClient(process.env.REDIS_URL);
const redisClient = {
  ...client,
  getAsync: promisify(client.get).bind(client),
  setAsync: promisify(client.set).bind(client),
  keysAsync: promisify(client.keys).bind(client)
};

export default redisClient;
