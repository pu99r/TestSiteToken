import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as api from "../../Components/MainInfo/api";
import { OperatiobState } from "../../Components/MainInfo/types/State";

const initialState: OperatiobState = { data: [], error: "" };

export const SpendInit = createAsyncThunk(
  "spend/init",
  async (args: { userId: string }) => api.fetcMoneySpend(args.userId)
);

const spendSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(SpendInit.fulfilled, (state, action) => {
        state.data = action.payload;
      })
      .addCase(SpendInit.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export default spendSlice.reducer;
