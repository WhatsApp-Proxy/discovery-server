// add axios
import axios from 'axios';
import log from 'fancy-log';

export async function getPublicIP(): Promise<string> {
  log(`Getting public IP...`);
  const response = await axios.get('https://ip4.seeip.org/json');
  log(`Got public IP: ${response.data.ip}`);
  return response.data.ip;
}
