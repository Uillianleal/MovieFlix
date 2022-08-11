import './styles.css';

const MovieCatalog = () => {
  return (
    <div className="movie-container">
      <h1>Tela listagem de filmes</h1>

      <div className="movie-content-container">
        <ul>
          <li>
            <a href="link">Acessar/movies/1</a>
          </li>
          <li>
            <a href="link">Acessar/movies/2</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MovieCatalog;
