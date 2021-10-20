import { Offer } from '../../types/offer';
import { useHistory } from 'react-router-dom';
import { AppRoute } from '../../const';

type ItemPlaceListProps = {
  offer: Offer;
};

function ItemPlaceList(props: ItemPlaceListProps): JSX.Element {
  const href = '#';
  const { offer } = props;
  const history = useHistory();

  return (
    <article className="cities__place-card place-card">
      <div className="place-card__mark">
        <span>{offer.mark}</span>
      </div>

      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href={href}>
          <img className="place-card__image" src={offer.firstImage} width="260" height="200" alt="Place" />
        </a>
      </div>

      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.priceValue}</b>
            <span className="place-card__price-text">&#47;&nbsp;{offer.priceText}</span>
          </div>

          <button className="place-card__bookmark-button button" type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark" />
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>

        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: '80%' }} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>

        <h2 className="place-card__name">
          <a onClick={() => history.push(AppRoute.Room)}>{offer.name}</a>
        </h2>

        <p className="place-card__type">{offer.type}</p>
      </div>
    </article>
  );
}

export default ItemPlaceList;
