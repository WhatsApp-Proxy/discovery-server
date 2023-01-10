import express, { Response, Request } from 'express';
import { PingType } from '../types/pingType';
import proxyPinger from '../util/proxyPinger';
const router = express.Router();

router.get('/', async function (req: Request, res: Response) {
  if (proxyPinger.lastPing === null) {
    res.json({ error: 'Proxy is not responding', data: null });
  }
  const pingData: PingType = {
    proxyName: process.env.PROXY_NAME,
    uptime: Math.floor(process.uptime()),
    internalPing: proxyPinger.lastPing,
  };
  res.json({ data: pingData, error: null });
});

export default router;
