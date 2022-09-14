import { AxiosRequestConfig } from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ReviewForm from '../../../components/ReviewForm';
import ReviewListing from '../../../components/ReviewListing';
import { Movie } from '../../../types/movie';
import { Review } from '../../../types/review';
import { hasAnyRoles } from '../../../util/auth';
import { requestBackend } from '../../../util/requests';
import MovieDetailsLoaderDesk from './MovieDetailsLoader';
import MovieDetailsLoaderMobile from './MovieDetailsLoaderMob';
import './styles.css';

type urlParams = {
  movieId: string;
};

const MovieDetails = () => {
  const { movieId } = useParams<urlParams>();
  const [movie, setMovie] = useState<Movie>();
  const [reviews, setReviews] = useState<Review[]>([]);
  const [isLoadingDetails, setIsLoadingDetails] = useState(false);
  const [isLoadingReviews, setIsLoadingReviews] = useState(false);

  useEffect(() => {
    const config: AxiosRequestConfig = {
      method: 'GET',
      url: `/movies/${movieId}`,
      withCredentials: true,
    };
    setIsLoadingDetails(true);
    requestBackend(config)
      .then((response) => {
        setMovie(response.data);
      })
      .finally(() => {
        setIsLoadingDetails(false);
      });
  }, [movieId]);

  useEffect(() => {
    const config: AxiosRequestConfig = {
      method: 'GET',
      url: `/movies/${movieId}/reviews`,
      withCredentials: true,
    };
    setIsLoadingReviews(true);
    requestBackend(config)
      .then((response) => {
        setReviews(response.data);
      })
      .finally(() => {
        setIsLoadingReviews(false);
      });
  }, [movieId]);

  const handleInsertReview = (review: Review) => {
    const clone = [...reviews];
    clone.push(review);
    setReviews(clone);
  };

  return (
    <div className="private-details-container container">
      {isLoadingDetails ? (
        <>
          <MovieDetailsLoaderMobile />
          <MovieDetailsLoaderDesk />
        </>
      ) : (
        <div className="base-card private-details-card">
          <div className="movie-details-img-container">
            <img src={movie?.imgUrl} alt={movie?.title} />
          </div>
          <div className="movie-details-container-left">
            <div className="movie-details-content-container ">
              <h5>{movie?.title}</h5>
              <h6>{movie?.year}</h6>
              <span>{movie?.subTitle}</span>
            </div>
            <div className="movie-details-content">
              <p>{movie?.synopsis}</p>
            </div>
          </div>
        </div>
      )}

      {isLoadingDetails ? (
        <MovieDetailsLoaderDesk />
      ) : (
        hasAnyRoles(['ROLE_MEMBER']) && (
          <div>
            <ReviewForm movieId={movieId} onInsertReview={handleInsertReview} />
          </div>
        )
      )}

      {isLoadingReviews ? (
        <>
          <MovieDetailsLoaderMobile />
          <MovieDetailsLoaderDesk />
        </>
      ) : (
        <ReviewListing reviews={reviews} />
      )}
    </div>
  );
};

export default MovieDetails;
