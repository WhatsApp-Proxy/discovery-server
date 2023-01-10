import express from 'express';
import dotenv from 'dotenv';
import log from 'fancy-log';
import createError from 'http-errors';

import pingRouter from './routes/ping';
import proxyPinger from './util/proxyPinger';
import { TCPConfig } from './const/config';

const app = express();
dotenv.config();

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');
  next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/ping', pingRouter);

// declare a route with a response
app.get('/', (req, res) => {
  res.json({ serverVersion: process.env.npm_package_version });
});

app.use(function (_req, _res, next) {
  next(createError(404));
});

proxyPinger.ping();
setInterval(async () => {
  proxyPinger.ping();
}, TCPConfig.pingInterval);

// start the server
app.listen(process.env.PORT, () => {
  log(`server running : http://localhost:${process.env.PORT}`);
});
