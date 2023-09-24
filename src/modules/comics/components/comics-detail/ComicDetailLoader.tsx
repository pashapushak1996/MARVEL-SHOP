import React from 'react';
import ContentLoader from 'react-content-loader';

export const ComicDetailLoader = () => (
  <ContentLoader
    speed={2}
    width={700}
    height={400}
    viewBox="0 0 700 400"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    {/* Cover */}
    <rect x="0" y="0" rx="5" ry="5" width="235" height="358" />

    {/* Info */}
    <rect x="250" y="0" rx="3" ry="3" width="450" height="30" />
    <rect x="250" y="40" rx="3" ry="3" width="250" height="10" />
    <rect x="250" y="60" rx="3" ry="3" width="350" height="10" />
    <rect x="250" y="80" rx="3" ry="3" width="400" height="10" />
    <rect x="250" y="100" rx="3" ry="3" width="200" height="10" />
  </ContentLoader>
);