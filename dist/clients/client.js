"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _redis = _interopRequireDefault(require("redis"));

var _util = require("util");

const client = _redis.default.createClient(process.env.REDIS_URL);

const redisClient = { ...client,
  getAsync: (0, _util.promisify)(client.get).bind(client),
  setAsync: (0, _util.promisify)(client.set).bind(client),
  keysAsync: (0, _util.promisify)(client.keys).bind(client)
};
var _default = redisClient;
exports.default = _default;