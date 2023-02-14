import { configureStore, combineReducers } from "@reduxjs/toolkit";
import AuthSlice from "./slices/auth.slice";
import { adminServerApi } from "../services/admin";
import { uploadServerApi } from "../services/upload";
import { setupListeners } from "@reduxjs/toolkit/query";

const loadState = () => {
  try {
    const serializedState = localStorage.getItem("state");
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (e) {
    return undefined;
  }
};

const peristedState = loadState();

const combinedReducers = combineReducers({
  auth: AuthSlice,
  [adminServerApi.reducerPath]: adminServerApi.reducer,
  [uploadServerApi.reducerPath]: uploadServerApi.reducer,
});

const rootReducer = (state: any, action: any) => {
  if (action.type === "signout/logout") {
    localStorage.removeItem("state");
    //window.location.reload();
    return combinedReducers(undefined, action);
  }
  return combinedReducers(state, action);
};

export const store = configureStore({
  preloadedState: peristedState,
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false,
    }).concat([adminServerApi.middleware, uploadServerApi.middleware]),
});

setupListeners(store.dispatch);

const saveState = (state: any) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("state", serializedState);
  } catch (e) {
    console.log("Store Error -->", e);
  }
};

store.subscribe(() => {
  saveState(store.getState());
});

export default store;
