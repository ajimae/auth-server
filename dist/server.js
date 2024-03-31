"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _express = _interopRequireDefault(require("express"));

var _client = _interopRequireDefault(require("./clients/client"));

const server = (0, _express.default)();
server.use(_express.default.json());
server.use(_express.default.urlencoded({
  extended: true
}));
server.get('/', (req, res) => {
  res.json({
    status: 'success',
    message: 'welcome to authentication server...'
  });
});
server.get('/store/:key', async (req, res) => {
  const {
    key
  } = req.params;
  const value = req.query;
  await _client.default.setAsync(key, JSON.stringify(value));
  return res.status(201).json({
    status: 'success'
  });
});
server.get('/:key', async (req, res) => {
  const {
    key
  } = req.params;
  const rawData = await _client.default.getAsync(key);
  return res.status(200).json({
    status: 'success',
    data: JSON.parse(rawData)
  });
});
const port = 8058;
server.listen(port, () => void 0);