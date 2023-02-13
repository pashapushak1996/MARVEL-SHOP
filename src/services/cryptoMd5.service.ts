import MD5 from 'crypto-js/md5';

export const getHash = (ts: string, privateKey: string, publicKey: string) => {
  return MD5(ts + privateKey + publicKey).toString();
};

