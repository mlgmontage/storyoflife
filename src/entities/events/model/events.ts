import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "app/store";
import { useSelector } from "react-redux";

export type Event = {
  id: string;
  year: number;
  month: number;
  title: string;
  event: string;
};

type Events = Event[];

const initialState: Events = [
  { id: "1", year: 1997, month: 10, title: "Born", event: "Getting born" },
];

const eventsSlice = createSlice({
  name: "events",
  initialState,
  reducers: {
    create: (state, { payload }: PayloadAction<Event>) => {
      state.push(payload);
    },
    edit: (state, { payload }: PayloadAction<Event>) => {
      const id = state.findIndex((ev) => ev.id === payload.id);
      state[id] = payload;
    },
  },
});

export const eventsSelector = (state: RootState) => state.events;

export const useEvents = (year: number, month: number) =>
  useSelector(
    createSelector(eventsSelector, (events) =>
      events.filter((ev) => ev.year === year && ev.month === month)
    )
  );

export const useEvent = (id: string) =>
  useSelector(
    createSelector(eventsSelector, (events) =>
      events.find((ev) => ev.id === id)
    )
  );

export const { create, edit } = eventsSlice.actions;

export const eventsReducer = eventsSlice.reducer;
