import ContentLoader from 'react-content-loader';

import './styles.css';

const MovieFilterLoaderPc = () => (
  <div className="movie-details-loader-desk">
    <ContentLoader
      speed={2}
      width={1120}
      height={200}
      viewBox="0 0 1120 200"
      backgroundColor="#6C6C6C"
      foregroundColor="#525252"
    >
      <rect x="0" y="0" rx="4" ry="4" width="1120" height="200" />
    </ContentLoader>
  </div>
);

export default MovieFilterLoaderPc;

