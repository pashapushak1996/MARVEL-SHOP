/** Function which create image url */

const buildImagePath = (path: string, size: string, extension: string) => {
  return `${path}/${size}.${extension}`;
};

export { buildImagePath };
