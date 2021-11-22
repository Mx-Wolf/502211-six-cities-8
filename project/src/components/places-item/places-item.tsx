import { MouseEvent } from 'react';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { Offer } from '../../types/offer';

type PlacesItemProps = {
  place: Offer;
  listItemHoverHandler: (event: MouseEvent<HTMLLIElement>) => void;
};

function PlacesItem({ place, listItemHoverHandler }: PlacesItemProps): JSX.Element {
  const href = '#';
  return (
    <article className="cities__place-card place-card" onMouseEnter={listItemHoverHandler} title={place.title}>
      {place.isPremium === false ? null :
        <div className="place-card__mark">
          <span>Premium</span>
        </div>}

      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href={href}>
          <img className="place-card__image" src={place.previewImage} width="260" height="200" alt="Place" />
        </a>
      </div>

      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{place.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
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
            <span style={{ width: `${place.rating}` }} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>

        <h2 className="place-card__name">
          <Link to={`${AppRoute.Room}/${place.id}`}>{place.title}</Link>
        </h2>

        <p className="place-card__type">{place.type}</p>
      </div>
    </article>
  );
}

export default PlacesItem;
