import { Review } from '../../types/review';
import ReviewCard from '../ReviewCard';
import './styles.css';

type Props = {
  reviews: Review[];
};

const ReviewListing = ({ reviews }: Props) => {
  return (
    <div className='review-listing-container'>
    <div className="base-card review-card-content-container">
      {reviews.map((obj) => (
        <ReviewCard review={obj} key={obj.id} />
      ))}
    </div>
    </div>
  );
};

export default ReviewListing;
