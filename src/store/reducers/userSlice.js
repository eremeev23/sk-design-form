import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  status: 'idle',
  user: {

  }
}

const citiesAPI = () => {
  axios
    .get('/api/cities.json')
    .then(response => response.data)
    .catch(error => console.log(error.status))
}

export const citiesRequest = createAsyncThunk(
  'citiesAPI',
  async () => {
    return citiesAPI();
  }
);

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action) {

    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(citiesRequest.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(citiesRequest.fulfilled, (state, action) => {
        state.status = 'idle';
        state.value += action.payload;
      });
  },
})

export const { setUser } = userSlice.actions;

export default userSlice.reducer