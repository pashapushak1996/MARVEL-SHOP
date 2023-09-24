import React from 'react';
import ContentLoader from 'react-content-loader';

export const ComicCardLoader = () => (
  <ContentLoader
    speed={2}
    width={'100%'}
    height={400}
    viewBox="0 0 300 400"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    {/* Card Cover */}
    <rect x="0" y="0" rx="5" ry="5" width="100%" height="352" />

    {/* Card Info */}
    <rect x="0" y="360" rx="3" ry="3" width="60%" height="8" />
    <rect x="0" y="375" rx="3" ry="3" width="80%" height="6" />

    {/* Card Price */}
    <rect x="0" y="390" rx="3" ry="3" width="40%" height="8" />

    {/* Card Button */}
    <rect x="210" y="390" rx="3" ry="3" width="30%" height="8" />
  </ContentLoader>
);