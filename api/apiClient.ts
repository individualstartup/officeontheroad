import { PublicApiApi } from './apis';
import { Configuration } from './runtime';

const CONFIGURATION = new Configuration({
  /*headers: { Authorization: 'Hash a5d37ad5-e231-43cc-be33-21721f159b91' },*/
  basePath: 'http://localhost:8080/services/frontend-service',
  /*basePath: 'https://www.caravano.cz/services/frontend-service',*/
});

export const apiClient = new PublicApiApi(CONFIGURATION);
