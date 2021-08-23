import {login_params} from './../../types/types';
import {loginState} from './../../types/data';
import {createAsyncThunk, createSlice, isDraft} from '@reduxjs/toolkit';
import handleLoginAPI from '../../services/UserLoginService';

//////////////
export const loginThunk = createAsyncThunk('user/login', async (data: any) => {
  try {
    const res = await handleLoginAPI(data);
    //console.log(res);
    return res;
  } catch (error) {
    return error;
  }
});

//////////////////////
const loginSlice = createSlice({
  name: 'LoginSlice',
  initialState: loginState,
  reducers: {
    LoginLoading: (state) => {
      state.loading = true;
    },
    LoginSuccess: (state, action) => {
      state.loading = false;
      state.user = action.payload;
    },
    LoginFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginThunk.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(loginThunk.fulfilled, (state, action) => {
      state.loading = false;
      if (action.payload?.status_code === 404) {
        state.error = action.payload?.message;
      } else {
        state.user = action.payload;
      }
    });
    builder.addCase(loginThunk.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message?.toString();
    });
  },
});

////////////////////
export const {LoginLoading, LoginSuccess, LoginFail} = loginSlice.actions;

export default loginSlice.reducer;
