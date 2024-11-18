import {RootState} from "./store.ts";
import {createSelector} from "@reduxjs/toolkit";

export const selectActionsState = (state: RootState) => state.actions;

export const selectActions = createSelector(
  [selectActionsState],
  (actionsState) => actionsState.actions
);

export const selectFilter = createSelector(
  [selectActionsState],
  (actionsState) => actionsState.filter
);

