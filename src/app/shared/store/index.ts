/*
  Import createSelector from reselect to make selection of different parts of the state fast efficient
 */
import { createSelector } from 'reselect';
/*
  Import the store logger to log all the actions to the console
 */
import {storeLogger} from "ngrx-store-logger";

/*
 Import the layout state
 */

import * as fromLayout from "./layout/layout.reducer"
import * as fromUiState from "./uistate/uistate.reducer"
import * as fromAdminState from "./admin/admin.reducer"
//import * as fromGames from "./games/games.reducer"
import {compose} from "@ngrx/core";
import {combineReducers, State} from "@ngrx/store";
import {state} from "@angular/core";


export interface AppState {
  layout: fromLayout.State,
  //games: fromGames.State
  uistate: fromUiState.State,
  admin: fromAdminState.State

}

export const reducers = {
  layout: fromLayout.reducer,
  uistate: fromUiState.reducer,
  admin: fromAdminState.reducer
  //games: fromGames.reducer
};

// export const ActionReducerMap<object> = {
//   layout: fromLayout.reducer,
//   uistate: fromUiState.reducer,
//   admin: fromAdminState.reducer
//   //games: fromGames.reducer
// };


const developmentReducer:Function = compose(storeLogger(), combineReducers)(reducers);


export function metaReducer(state: any, action: any) {
  return developmentReducer(state, action);
}


/**
 * Layout selectors
 */


export const getLayoutState = (state: AppState) => state.layout;

export const getLayoutOpenedModalName = createSelector(getLayoutState , fromLayout.getOpenedModalName);
export const getLayoutLeftSidenavState = createSelector(getLayoutState, fromLayout.getLeftSidenavState);
export const getLayoutRightSidenavState = createSelector(getLayoutState, fromLayout.getRightSidenavState);
export const getLayoutRightExpandedState = createSelector(getLayoutState, fromLayout.getRightExpandedState);
export const getLayoutAlertsState = createSelector(getLayoutState, fromLayout.getAlerts);
export const getLayourRightContentState = createSelector(getLayoutState , fromLayout.getRightContentState);
/*
*/

export const getUiStateState = (state: AppState) => state.uistate;
export const getSelectedTableName = createSelector(getUiStateState , fromUiState.getSelectedTableName);
export const getSelectedItemId = createSelector(getUiStateState , fromUiState.getSelectedItemId);

export const getAdminState = (state: AppState) => state.admin;
export const getAdminSelectedTableName = createSelector(getAdminState , fromAdminState.getSelectedTableName);
export const getAdminSelectedItemId = createSelector(getAdminState , fromAdminState.getSelectedItemId);


/*
Games
 */

/*
export const getGamesState = (state: AppState) => state.games;

export const getGamesEntities = createSelector(getGamesState, fromGames.getEntities);

export const getGamesCount = createSelector(getGamesState, fromGames.getCount);

export const getGamesPage = createSelector(getGamesState, fromGames.getPage);

export const getGamesLoadingState = createSelector(getGamesState, fromGames.getLoadingState);
*/