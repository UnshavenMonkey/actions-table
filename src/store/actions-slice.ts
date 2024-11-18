import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {UserActionType} from "./types.ts";

type ActionsState = {
  actions: UserActionType[];
  filter: string;
}

const ACTIONS_INITIAL_STATE: ActionsState = {
  actions: [],
  filter: '',
};

export const actionsSlice = createSlice({
  name: 'actions',
  initialState: ACTIONS_INITIAL_STATE,
  reducers: {
    setActions: (state, action: PayloadAction<UserActionType[]>) => {
      const items = action.payload
      items.forEach(item => {
        const {action, action_created_at, username} = item
        state.actions = [{
          action_created_at: new Date(action_created_at).toLocaleString(),
          action,
          username
        }, ...state.actions]
      })
    },
    setFilter: (state, action: PayloadAction<string>) => {
      state.filter = action.payload;
    },
  }
})

export const actionsReducer = actionsSlice.reducer;

export const {setActions, setFilter} = actionsSlice.actions;
