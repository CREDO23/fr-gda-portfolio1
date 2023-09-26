import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "./api/auth";
import { storage } from "./webStorage";
import currentUser from "./slices/currentUser";
import {persistReducer,FLUSH,REHYDRATE,PAUSE,PERSIST,PURGE,REGISTER} from 'redux-persist'
import {combineReducers} from 'redux'

const persistConfig = {
  key: "root",
  storage,
};

const reducers = combineReducers({
  'currentUser': currentUser,
  [authApi.reducerPath]: authApi.reducer,
});

const persistedReducers = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(authApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
