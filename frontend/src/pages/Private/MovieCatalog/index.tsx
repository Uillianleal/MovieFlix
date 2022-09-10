import { AxiosRequestConfig } from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import MovieCard from '../../../components/MovieCard';
import { Movie } from '../../../types/movie';
import { SpringPage } from '../../../types/vendor/spring';
import { isAuthenticated } from '../../../util/auth';
import history from '../../../util/history';
import { requestBackend } from '../../../util/requests';
import './styles.css';

const MovieCatalog = () => {
  const [page, setPage] = useState<SpringPage<Movie>>();

  useEffect(() => {
    const config: AxiosRequestConfig = {
      method: 'GET',
      url: '/movies',
      withCredentials: true,
    };

    isAuthenticated()
      ? requestBackend(config).then((response) => {
          setPage(response.data);
        })
      : history.push('/');
  }, []);

  return (
    <div className="movie-container container">
      <div className="row">
        {page?.content.map((movie) => {
          return (
            <div className="col-sm-6 col-xl-3" key={movie.id}>
              <div className="movie-content-container">
                <Link to={`/movies/${movie.id}`}>
                  <MovieCard movie={movie} />
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MovieCatalog;
