import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

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
    reserveRockets: (state, action) => {
      const rocketId = action.payload;
      state.data = state.data.map((rocket) => {
        if (rocketId === rocket.id) {
          rocket.reserved = true;
        }
        return rocket;
      });
    },
    cancelRockets: (state, action) => {
      const rocketId = action.payload;
      state.data = state.data.map((rocket) => {
        if (rocketId === rocket.id) {
          rocket.reserved = false;
        }
        return rocket;
      });
    }
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
export const { reserveRockets, cancelRockets } = RocketSlice.actions;
export default RocketSlice.reducer;
