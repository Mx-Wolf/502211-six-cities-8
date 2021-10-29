import { Review } from '../../types/review';

type ReviewsItemProps = {
  review: Review;
  keyValue: string;
};

function ReviewsItem({ keyValue, review }: ReviewsItemProps): JSX.Element {
  return (
    <li key={keyValue} className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={review.userAvatar} width="54" height="54" alt="Reviews avatar" />
        </div>

        <span className="reviews__user-name">
          {review.userName}
        </span>
      </div>

      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{ width: `${review.rating}` }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>

        <p className="reviews__text">
          {review.text}
        </p>
        <time className="reviews__time" dateTime={review.dateAdd}>{review.dateAdd}</time>
      </div>
    </li>
  );
}

export default ReviewsItem;
