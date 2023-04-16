export const queryStringToObject = (queryString: string) => Object.fromEntries(new URLSearchParams(queryString));

export const buildQueryString = (params: Record<string, any>): string => {
  const urlSearchParams = new URLSearchParams(params);
  return urlSearchParams.toString()
};