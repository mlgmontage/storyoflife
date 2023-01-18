import { configureStore } from "@reduxjs/toolkit";
import { eventsReducer } from "entities/events/model/events";
import { useSelector, useDispatch, TypedUseSelectorHook } from "react-redux";

export const store = configureStore({
  reducer: {
    events: eventsReducer,
  },
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
