
import ReviewCard from '../ReviewCard';
import './styles.css';

const ReviewListing = () => {
  return (
    <div className="base-card review-listing-container">
      <div>
        <ReviewCard />
      </div>
      <div>
        <ReviewCard />
      </div>
    </div>
  );
};

export default ReviewListing;
