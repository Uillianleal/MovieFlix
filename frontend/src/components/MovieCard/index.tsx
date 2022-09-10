import { Movie } from '../../types/movie';
import './styles.css';

type Props = {
  movie: Movie;
};

const MovieCard = ({ movie }: Props) => {
  return (
    <div className="movie-cardd-container base-card">
      <div className="img-card-container">
        <img src={movie.imgUrl} alt={movie.title} />
      </div>
      <div className="movie-tittle-container">
        <h5>{movie.title}</h5>
        <h6>{movie.year}</h6>
        <p>{movie.subTitle}</p>
      </div>
    </div>
  );
};

export default MovieCard;
