import {configureStore} from '@reduxjs/toolkit';
import {actionsReducer} from "./actions-slice.ts";

export const store = configureStore({
  reducer: {
    actions: actionsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;