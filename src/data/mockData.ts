import type { User, DashboardStats } from '../types';

export const mockUsers: User[] = [
  { id: 1, name: 'Алексей Иванов', email: 'alex@mail.ru', role: 'admin', status: 'active', avatar: 'https://i.pravatar.cc/150?img=1', createdAt: '2026-01-10' },
  { id: 2, name: 'Мария Петрова', email: 'maria@mail.ru', role: 'manager', status: 'active', avatar: 'https://i.pravatar.cc/150?img=2', createdAt: '2026-01-12' },
  { id: 3, name: 'Дмитрий Сидоров', email: 'dima@mail.ru', role: 'user', status: 'blocked', avatar: 'https://i.pravatar.cc/150?img=3', createdAt: '2026-01-15' },
  { id: 4, name: 'Елена Смирнова', email: 'elena@mail.ru', role: 'manager', status: 'active', avatar: 'https://i.pravatar.cc/150?img=4', createdAt: '2026-01-18' },
  { id: 5, name: 'Павел Козлов', email: 'pavel@mail.ru', role: 'user', status: 'active', avatar: 'https://i.pravatar.cc/150?img=5', createdAt: '2026-01-20' },
  { id: 6, name: 'Анна Морозова', email: 'anna@mail.ru', role: 'user', status: 'active', avatar: 'https://i.pravatar.cc/150?img=6', createdAt: '2026-01-22' },
  { id: 7, name: 'Сергей Волков', email: 'sergey@mail.ru', role: 'user', status: 'blocked', avatar: 'https://i.pravatar.cc/150?img=7', createdAt: '2026-01-25' },
  { id: 8, name: 'Татьяна Соколова', email: 'tatiana@mail.ru', role: 'user', status: 'active', avatar: 'https://i.pravatar.cc/150?img=8', createdAt: '2026-01-28' },
];

export const mockOrders = [
  { id: 1001, customer: 'Алексей Иванов', amount: 2500, status: 'delivered' as const, date: '2026-03-20' },
  { id: 1002, customer: 'Мария Петрова', amount: 1200, status: 'processing' as const, date: '2026-03-21' },
  { id: 1003, customer: 'Дмитрий Сидоров', amount: 5000, status: 'new' as const, date: '2026-03-22' },
  { id: 1004, customer: 'Елена Смирнова', amount: 3500, status: 'processing' as const, date: '2026-03-22' },
  { id: 1005, customer: 'Павел Козлов', amount: 800, status: 'delivered' as const, date: '2026-03-21' },
  { id: 1006, customer: 'Анна Морозова', amount: 4200, status: 'new' as const, date: '2026-03-23' },
  { id: 1007, customer: 'Сергей Волков', amount: 1500, status: 'cancelled' as const, date: '2026-03-19' },
  { id: 1008, customer: 'Татьяна Соколова', amount: 2800, status: 'delivered' as const, date: '2026-03-18' },
  { id: 1009, customer: 'Алексей Иванов', amount: 6300, status: 'processing' as const, date: '2026-03-23' },
  { id: 1010, customer: 'Мария Петрова', amount: 950, status: 'delivered' as const, date: '2026-03-17' },
  { id: 1011, customer: 'Елена Смирнова', amount: 4700, status: 'new' as const, date: '2026-03-24' },
  { id: 1012, customer: 'Павел Козлов', amount: 2100, status: 'processing' as const, date: '2026-03-24' },
];

export const mockStats: DashboardStats = {
  revenue: 45230,
  revenueChange: 12,
  customers: 245,
  customersChange: 8,
  orders: 128,
  ordersChange: -3,
  rating: 4.8,
  ratingChange: 0.5,
};

export const revenueData = [
  { date: 'Пн', revenue: 5200, orders: 12 },
  { date: 'Вт', revenue: 6800, orders: 15 },
  { date: 'Ср', revenue: 4300, orders: 10 },
  { date: 'Чт', revenue: 8900, orders: 22 },
  { date: 'Пт', revenue: 12500, orders: 31 },
  { date: 'Сб', revenue: 7200, orders: 18 },
  { date: 'Вс', revenue: 4900, orders: 14 },
];