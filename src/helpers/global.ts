import { API_KEY, API_PRIVATE_KEY, BASE_URL } from '../constants/api.constant';
import { getHash } from '../services/cryptoMd5.service';

const buildImagePath = (path: string, size: string, extension: string) => {
  return `${path}/${size}.${extension}`;
};

const generateUrl = (endpoint: string, limit?: number, randomOffset?: boolean): string => {

  const url = `${BASE_URL}/v1/public/${endpoint}`;

  const ts = Date.now().toString();

  const hash = getHash(ts, API_PRIVATE_KEY, API_KEY);

  const offset = randomOffset ? Math.round(Math.random() * 1000) : '';

  let urlWithApiKey = `${url}?ts=${ts}&apikey=${API_KEY}&hash=${hash}`;

  if (limit) {
    urlWithApiKey += `&limit=${limit}`;
  }

  if (offset) {
    urlWithApiKey += `&offset=${offset}`;
  }

  return urlWithApiKey;
};

export { buildImagePath, generateUrl };
