import { ActionType, ChangeCity, FillingListOffers, ChangeSort, ChangeSortOrder, ChangeListOffersBySort, LoadOffers, RequireAuthorization, RequireLogout } from '../types/action';
import { AuthorizationStatus } from '../const';
import { Offers } from '../types/offer';

export const changeCity = (city: string): ChangeCity => ({
  type: ActionType.ChangeCity,
  payload: city,
});

export const fillingListOffers = (): FillingListOffers => ({
  type: ActionType.FillingListOffers,
});

export const changeSort = (): ChangeSort => ({
  type: ActionType.ChangeSort,
});

export const changeSortOrder = (sortOrder: string): ChangeSortOrder => ({
  type: ActionType.ChangeSortOrder,
  payload: sortOrder,
});

export const changeListOffersBySort = (): ChangeListOffersBySort => ({
  type: ActionType.ChangeListOffersBySort,
});

export const loadOffers = (offers: Offers): LoadOffers => ({
  type: ActionType.LoadOffers,
  payload: offers,
});

export const requireAuthorization = (authStatus: AuthorizationStatus): RequireAuthorization => ({
  type: ActionType.RequireAuthorization,
  payload: authStatus,
});

export const requireLogout = (): RequireLogout => ({
  type: ActionType.RequireLogout,
});
