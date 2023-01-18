import { createSlice } from "@reduxjs/toolkit";

type Event = {
  year: number;
  month: number;
  title: string;
  event: string;
};

type Events = Event[];

const initialState: Events = [];

const eventsSlice = createSlice({
  name: "events",
  initialState,
  reducers: {},
});

export const eventsReducer = eventsSlice.reducer;
