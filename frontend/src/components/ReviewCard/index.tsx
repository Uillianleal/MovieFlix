import './styles.css';
import StarImage from '../../assets/images/star.png';

const ReviewCard = () => {
  return (
    <div className="review-card-container">
      <div className="content-container">
        <img className='img-star' src={StarImage} alt="star" />
        <h6>Maria Silva</h6>
      </div>
      <div className="review-card-content">
        <p>Gostei muito do filme. Foi muito bom mesmo. Pena que durou pouco.</p>
      </div>
    </div>
  );
};

export default ReviewCard;
