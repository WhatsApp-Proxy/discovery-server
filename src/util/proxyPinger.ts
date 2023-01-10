import { TCPConfig } from '../const/config';
import { tcpPingResultType, tcpPingType } from '../types/tcpPingType';

const nodejsTcpPing = require('nodejs-tcp-ping');
class ProxyPinger {
  lastPing: number | null = null;

  async ping() {
    const result: tcpPingResultType[] = await nodejsTcpPing.tcpPing({
      attempts: TCPConfig.attempts,
      host: process.env.PROXY_HOST,
      port: process.env.PROXY_PORT as unknown as number,
      timeout: TCPConfig.timeout,
    } as tcpPingType);

    this.lastPing = null;
    result.forEach((pingResult: tcpPingResultType) => {
      if (pingResult.ping) {
        this.lastPing = Math.floor(pingResult.ping);
      }
    });
  }
}

export default new ProxyPinger();
