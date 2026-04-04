import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { Order } from '../types';
import { mockOrders } from '../data/mockData';

interface OrdersState {
  orders: Order[];
}

const initialState: OrdersState = {
  orders: mockOrders as Order[],
};

const ordersSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    updateOrderStatus: (state, action: PayloadAction<{ id: number; status: Order['status'] }>) => {
      const order = state.orders.find(o => o.id === action.payload.id);
      if (order) {
        order.status = action.payload.status;
      }
    },
  },
});

export const { updateOrderStatus } = ordersSlice.actions;
export default ordersSlice.reducer;