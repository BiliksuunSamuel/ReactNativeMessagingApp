import {login_params} from './../../types/types';
import {userState} from './../../types/data';
import {createSlice} from '@reduxjs/toolkit';

//////////////

//////////////////////
const userSlice = createSlice({
  name: 'LoginSlice',
  initialState: userState,
  reducers: {
    UserLoading: (state) => {
      state.loading = true;
    },
    UserSuccess: (state, action) => {
      state.loading = false;
      state.user = action.payload;
    },
    UserFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

////////////////////
export const {UserLoading, UserSuccess, UserFail} = userSlice.actions;

export default userSlice.reducer;
