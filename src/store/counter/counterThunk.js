import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchBacons } from './counterApi';

export const getBaconsThunk = createAsyncThunk(
  'bacon/getAll',
  async () => {
    const bacons = await fetchBacons();

    return bacons;
  }
)