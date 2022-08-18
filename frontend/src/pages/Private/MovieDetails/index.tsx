import { AxiosRequestConfig } from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ReviewForm from '../../../components/ReviewForm';
import ReviewListing from '../../../components/ReviewListing';
import { Review } from '../../../types/review';
import { hasAnyRoles } from '../../../util/auth';
import { requestBackend } from '../../../util/requests';
import './styles.css';

type urlParams = {
  movieId: string;
};

const MovieDetails = () => {
  const { movieId } = useParams<urlParams>();

  const [reviews, setReviews] = useState<Review[]>([]);

  useEffect(() => {
    const config: AxiosRequestConfig = {
      method: 'GET',
      url: `/movies/${movieId}/reviews`,
      withCredentials: true,
    };
    requestBackend(config).then((response) => {
      setReviews(response.data);
    });
  }, [movieId]);

  const handleInsertReview = (review: Review) => {
    const clone = [...reviews];
    clone.push(review);
    setReviews(clone);
  };

  return (
    <div className="Private-details-container">
      <div className="private-content">
        <h1>Tela detalhaes do filmes id: {movieId}</h1>
      </div>
      {hasAnyRoles(['ROLE_MEMBER']) && (
        <div>
          <ReviewForm movieId={movieId} onInsertReview={handleInsertReview} />
        </div>
      )}
      <ReviewListing reviews={reviews} />
    </div>
  );
};

export default MovieDetails;
