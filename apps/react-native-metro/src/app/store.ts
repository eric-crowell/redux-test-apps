import type { ThunkAction, Action } from '@reduxjs/toolkit';
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice.js';
import { postApi } from './services/post.js';
import { timeApi } from './services/times.js';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    [postApi.reducerPath]: postApi.reducer,
    [timeApi.reducerPath]: timeApi.reducer,
  },
  middleware: (gDM) => gDM().concat(postApi.middleware, timeApi.middleware),
});

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
ReturnType,
RootState,
unknown,
Action<string>
>
