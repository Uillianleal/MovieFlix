
import ReviewForm from '../../../components/ReviewForm';
import ReviewListing from '../../../components/ReviewListing';
import './styles.css';

const MovieDetails = () => {
  return (
    <div className="Private-details-container">
      <div className='private-content'>
        <h1>Tela detalhaes do filmes id: 1</h1>
      </div>
      <div>
         <ReviewForm/>
      </div>
      <div>
        <ReviewListing/>
      </div>
    </div>
  );
};

export default MovieDetails;
