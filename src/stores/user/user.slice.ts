import { type PayloadAction, createSlice } from '@reduxjs/toolkit';

type UserState = {
  data: Array<{
    firstName: string;
    lastName: string;
    email: string;
    password: string;
  }>;
};

const initialState: UserState = {
  data: []
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addUser: (
      state,
      action: PayloadAction<{
        firstName: string;
        lastName: string;
        email: string;
        password: string;
      }>
    ) => {
      state.data.push({
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
        email: action.payload.email,
        password: action.payload.password
      });
    }
  }
});

export const { addUser } = userSlice.actions;

export default userSlice.reducer;
