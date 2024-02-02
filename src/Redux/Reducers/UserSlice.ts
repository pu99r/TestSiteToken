import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as api from "../../Components/MainInfo/api";
import { UserState } from "../../Components/MainInfo/types/State";

const initialState: UserState = { data: [], pages: 0, error: "" };

export const UsersInit = createAsyncThunk(
  "users/init",
  async (args: {
    value: number;
    sort: string;
    half: boolean;
    string: string;
  }) => api.fetchUserList(args.value, args.sort, args.string)
);

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(UsersInit.fulfilled, (state, action) => {
        state.pages = action.payload.pages;
        state.error = "";
        if (action.meta.arg.half == true) {
          state.data = action.payload.data.slice(0, 10);
        } else {
          state.data = action.payload.data.slice(10);
        }
      })
      .addCase(UsersInit.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export default usersSlice.reducer;
