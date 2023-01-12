import { RegisterServerType } from '../types/registerServerType';
import { DiscoveryServer } from '../const/config';
import axios from 'axios';
import log from 'fancy-log';
import { getPublicIP } from './getPublicIp';

export async function registerServer() {
  // post request to register server
  log(`Registering proxy...`);
  try {
    const response = await axios.post(`${DiscoveryServer}/server/register`, {
      ipAddress: process.env.PROXY_HOST ?? (await getPublicIP()),
      proxyPort: process.env.PROXY_PORT,
      discoveryPort: process.env.PORT,
      serverName: process.env.PROXY_NAME,
      country: process.env.PROXY_COUNTRY,
      key: process.env.DISCOVERY_KEY,
    } as unknown as RegisterServerType);

    console.log(response.data);
  } catch (e) {
    log(`Could not register server! Maybe the server is already registered, or your key is invalid!`);
  }
}
