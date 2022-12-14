import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UserState } from 'src/app/state/userState.state';
import { profileType } from 'src/app/enums/profile-type.enum';
import { SubscriptionsState } from 'src/app/state/subscriptionsState.state';
import { User } from 'src/app/models/user.model';

export const selectUserState = createFeatureSelector<UserState>('auth');

export const selectID = createSelector(selectUserState, (state) => state.id);

export const selectToken = createSelector(
  selectUserState,
  (state) => state.access_token
);

export const selectUsername = createSelector(
  selectUserState,
  (state) => state.username
);

export const selectProfileType = createSelector(
  selectUserState,
  (state) => state.profileType
);

export const selectUserData = createSelector(
  selectUsername,
  selectProfileType,
  selectID,
  (
    username: string | null,
    profileType: profileType | null,
    id: number | null
  ) => {
    return {
      username,
      profileType,
      id,
    };
  }
);

export const selectSubscriptionsState =
  createFeatureSelector<SubscriptionsState>('subscriptions');

export const selectSubscriptions = createSelector(
  selectSubscriptionsState,
  (state: SubscriptionsState) => {
    return state.ids
      .map((id: number | string) => state.entities[id])
      .filter((subscription: User | undefined) => subscription);
  }
);
