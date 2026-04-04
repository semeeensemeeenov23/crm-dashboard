import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { User } from '../types';
import { mockUsers } from '../data/mockData';

interface UsersState {
  users: User[];
}

const initialState: UsersState = {
  users: mockUsers,
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<Omit<User, 'id' | 'createdAt'>>) => {
      const newId = Math.max(...state.users.map(u => u.id), 0) + 1;
      const newUser: User = {
        ...action.payload,
        id: newId,
        createdAt: new Date().toISOString().split('T')[0],
      };
      state.users.push(newUser);
    },
    updateUser: (state, action: PayloadAction<User>) => {
      const index = state.users.findIndex(u => u.id === action.payload.id);
      if (index !== -1) {
        state.users[index] = action.payload;
      }
    },
    deleteUser: (state, action: PayloadAction<number>) => {
      state.users = state.users.filter(u => u.id !== action.payload);
    },
  },
});

export const { addUser, updateUser, deleteUser } = usersSlice.actions;
export default usersSlice.reducer;