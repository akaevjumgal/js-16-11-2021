import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "..";

export const counterValueSelector = createSelector(
  (state: RootState) => state.counterSlice,
  (counter) => counter.value,
)

export const baconsSelector = createSelector(
  (state: RootState) => state.counterSlice,
  ({ bacons, loading }) => ({ bacons, loading }),
)