import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "app/store";

type User = {
  name: string;
  birthday: string;
};

const initialState: User = {
  birthday: "",
  name: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, { payload }: PayloadAction<User>) => {
      state.name = payload.name;
      state.birthday = payload.birthday;
    },
  },
});

export const userSelector = (state: RootState) => state.user;

export const { setUser } = userSlice.actions;

export const userReducer = userSlice.reducer;
