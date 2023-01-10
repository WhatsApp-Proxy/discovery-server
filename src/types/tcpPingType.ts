export type tcpPingResultType = {
  ping: number | null;
  error: string | null;
};

export type tcpPingType = {
  attempts: number;
  host: string;
  port: number;
  timeout: number;
};
