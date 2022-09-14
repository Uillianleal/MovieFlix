import { AxiosRequestConfig } from 'axios';
import { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import MovieCard from '../../../components/MovieCard';
import MovieFilter, { movieFilterData } from '../../../components/MovieFilter';
import Pagination from '../../../components/Pagination';
import { Movie } from '../../../types/movie';
import { SpringPage } from '../../../types/vendor/spring';
import { requestBackend } from '../../../util/requests';
import MovieCardLoader from './MovieCardLoader';
import MovieCardLoaderMob from './MovieCardLoaderMob';
import './styles.css';

type ControlComponentData = {
  activePage: number;
  filterData: movieFilterData;
};

const MovieCatalog = () => {
  const [page, setPage] = useState<SpringPage<Movie>>();
  const [isLoading, setisLoading] = useState(false);

  const [controlComponentData, setControlComponentData] =
    useState<ControlComponentData>({
      activePage: 0,
      filterData: { genre: null },
    });

  const handlePageChange = (pageNumber: number) => {
    setControlComponentData({
      activePage: pageNumber,
      filterData: controlComponentData.filterData,
    });
  };

  const handleSubmitFilter = (data: movieFilterData) => {
    setControlComponentData({ activePage: 0, filterData: data });
  };

  const getMovie = useCallback(() => {
    const config: AxiosRequestConfig = {
      method: 'GET',
      url: '/movies',
      params: {
        page: controlComponentData.activePage,
        size: 4,
        genreId: controlComponentData.filterData.genre?.id,
      },
      withCredentials: true,
    };
    setisLoading(true);
    requestBackend(config)
      .then((response) => {
        setPage(response.data);
      })
      .finally(() => {
        setisLoading(false);
      });
  }, [controlComponentData]);

  useEffect(() => {
    getMovie();
  }, [getMovie]);

  return (
    <>
      <MovieFilter onSubmitFilter={handleSubmitFilter} />
      <div className="movie-container container">
        <div className="row">
          {isLoading ? (
            <>
              <MovieCardLoaderMob />
              <MovieCardLoader />
            </>
          ) : (
            page?.content.map((movie) => {
              return (
                <div className="col-sm-6 col-xl-3" key={movie.id}>
                  <div className="movie-content-container">
                    <Link to={`/movies/${movie.id}`}>
                      <MovieCard movie={movie} />
                    </Link>
                  </div>
                </div>
              );
            })
          )}
        </div>
        <div className="row">
          <Pagination
            pageCount={page ? page.totalPages : 0}
            range={3}
            onChange={handlePageChange}
          />
        </div>
      </div>
    </>
  );
};

export default MovieCatalog;
