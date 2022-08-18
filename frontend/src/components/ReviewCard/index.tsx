import './styles.css';
import StarImage from '../../assets/images/star.png';
import { Review } from '../../types/review';

type Props = {
  review: Review;
};

const ReviewCard = ({ review }: Props) => {
  return (
    <div className="review-card-container">
      <div className="content-container">
        <img className="img-star" src={StarImage} alt="star" />
        <h6>{review.user.name}</h6>
      </div>
      <div className="review-card-content">
        <p>{review.text}</p>
      </div>
    </div>
  );
};

export default ReviewCard;
