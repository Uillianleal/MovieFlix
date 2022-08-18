import { Review } from '../../types/review';
import ReviewCard from '../ReviewCard';
import './styles.css';

type Props = {
  reviews: Review[];
};

const ReviewListing = ({ reviews }: Props) => {
  return (
    <div className="base-card review-listing-container">
      {reviews.map((obj) => (
        <ReviewCard review={obj} key={obj.id} />
      ))}
    </div>
  );
};

export default ReviewListing;
