import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

/* eslint-disable comma-dangle */
/* eslint-disable no-param-reassign */
const initialState = {
  status: 'idle',
  error: null,
  data: [],
};

const baseUrl = 'https://api.spacexdata.com/v3/rockets';

export const fetchRockets = createAsyncThunk(
  'rocket/fetchRockets',
  async () => {
    const response = await axios.get(baseUrl);
    return response.data;
  }
);

const RocketSlice = createSlice({
  name: 'rocket',
  initialState,
  reducers: {
    updateActive(state, action) {
      state.data[action.payload - 1].active = !state.data[action.payload - 1].active;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchRockets.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchRockets.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = state.data.concat(action.payload);
      })
      .addCase(fetchRockets.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export const selectAllRockets = (state) => state.rockets;
export const { updateActive } = RocketSlice.actions;
export default RocketSlice.reducer;
