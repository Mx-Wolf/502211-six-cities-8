import { ActionType, ChangeCity, ChangeSort, ChangeSortOrder, LoadOffers, RedirectToRoute, RequireAuthorization, RequireLogout, GetEmail, LoadReviews, LoadFavorites } from '../types/action';
import { AppRoute, AuthorizationStatus } from '../const';
import { Offers } from '../types/offer';
import { Reviews } from '../types/review';

export const changeCity = (city: string): ChangeCity => ({
  type: ActionType.ChangeCity,
  payload: city,
});

export const changeSort = (): ChangeSort => ({
  type: ActionType.ChangeSort,
});

export const changeSortOrder = (sortOrder: string): ChangeSortOrder => ({
  type: ActionType.ChangeSortOrder,
  payload: sortOrder,
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

export const redirectToRoute = (url: AppRoute): RedirectToRoute => ({
  type: ActionType.RedirectToRoute,
  payload: url,
});

export const getEmail = (email: string): GetEmail => ({
  type: ActionType.GetEmail,
  payload: email,
});

export const loadReviews = (reviews: Reviews): LoadReviews => ({
  type: ActionType.LoadReviews,
  payload: reviews,
});

export const loadFavorites = (offerId: string): LoadFavorites => ({
  type: ActionType.LoadFavorites,
  payload: offerId,
});
