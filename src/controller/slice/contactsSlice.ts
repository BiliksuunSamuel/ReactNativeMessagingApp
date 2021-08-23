import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import getContactsAPI from '../../services/ContactsServices';
import {contactsState} from '../../types/data';

export const contactsThunk = createAsyncThunk(
  'api/contacts',
  async (phone: string | undefined) => {
    const res = await getContactsAPI(phone);
    return res;
  },
);

////////
const contactSlice = createSlice({
  name: 'ContactsSlice',
  initialState: contactsState,
  reducers: {
    ContactsLoading: (state) => {
      state.loading = true;
    },
    ContactsSuccess: (state, action) => {
      state.loading = false;
      state.contacts = action.payload;
    },
    ContactsFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(contactsThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(contactsThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.contacts = action.payload;
      })
      .addCase(contactsThunk.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const {ContactsLoading, ContactsSuccess, ContactsFail} =
  contactSlice.actions;

export default contactSlice.reducer;
