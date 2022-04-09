import { createSelector } from "@reduxjs/toolkit";

const rootSelector = (state) => state.productSlice;

export const selectAllProducts = createSelector(
    [rootSelector],
    (productSlice) => productSlice.products || []
);