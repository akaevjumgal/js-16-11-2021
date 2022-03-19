import { createSelector } from "@reduxjs/toolkit";

export const counterValueSelector = createSelector(
  (state) => state.counter,
  (counter) => counter.value,
)

export const baconsSelector = createSelector(
  (state) => state.counter,
  ({ bacons, loading }) => ({ bacons, loading }),
)