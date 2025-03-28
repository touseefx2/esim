import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '../store';

interface UserState {
  isGuest: boolean;
  userId: string | null;
  userName: string | null;
  userImage: string | null;
  email: string | null;
}

const initialState: UserState = {
  isGuest: true,
  userId: null,
  userName: null,
  userImage: null,
  email: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginAsGuest: state => {
      state.isGuest = true;
      state.userId = null;
      state.userName = null;
      state.userImage = null;
      state.email = null;
    },
    loginUser: (
      state,
      action: PayloadAction<{
        userId: string;
        email: string;
        userName: string;
        userImage?: string | null;
      }>,
    ) => {
      state.isGuest = false;
      state.userId = action.payload.userId;
      state.userName = action.payload.userName;
      state.userImage = action.payload.userImage || null;
      state.email = action.payload.email;
    },
    logout: state => {
      state.isGuest = true;
      state.userId = null;
      state.userName = null;
      state.userImage = null;
      state.email = null;
    },
  },
});

export const {loginAsGuest, loginUser, logout} = userSlice.actions;
export const selectUser = (state: RootState): UserState => state.user;

export default userSlice.reducer;
