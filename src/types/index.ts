export interface User {
  id: number;
  name: string;
  email: string;
  role: 'admin' | 'manager' | 'user';
  status: 'active' | 'blocked';
  avatar: string;
  createdAt: string;
}

export interface Order {
  id: number;
  customer: string;
  amount: number;
  status: 'new' | 'processing' | 'delivered' | 'cancelled';
  date: string;
}

export interface DashboardStats {
  revenue: number;
  revenueChange: number;
  customers: number;
  customersChange: number;
  orders: number;
  ordersChange: number;
  rating: number;
  ratingChange: number;
}

export interface RevenueData {
  date: string;
  revenue: number;
  orders: number;
}