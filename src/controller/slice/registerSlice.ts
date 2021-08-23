import {registerState} from './../../types/data';
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import handleRegisterAPI from '../../services/UserRegisterService';

export const registerThunk = createAsyncThunk(
  'api/register',
  async (data: any) => {
    try {
      const res = await handleRegisterAPI(data);
      return res;
    } catch (error) {
      return error;
    }
  },
);

const registerSlice = createSlice({
  name: 'RegisterSlice',
  initialState: registerState,
  reducers: {
    RegisterLoading: (state) => {
      state.loading = true;
    },
    RegisterSuccess: (state, action) => {
      state.loading = false;
      state.user = action.payload;
    },
    RegisterFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(registerThunk.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(registerThunk.fulfilled, (state, action) => {
      state.loading = false;
      if (action.payload?.status_code === 404) {
        state.error = action.payload?.message;
      } else {
        state.user = action.payload;
      }
    });
    builder.addCase(registerThunk.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message?.toString();
      console.log(action.error);
    });
  },
});

/////////////////////
export const {RegisterFail, RegisterSuccess, RegisterLoading} =
  registerSlice.actions;

export default registerSlice.reducer;
