import React from 'react';
import { DollarSign, Users, ShoppingBag, Star } from 'lucide-react';
import StatsCard from '../components/dashboard/StatsCard';
import RevenueChart from '../components/dashboard/RevenueChart';
import OrdersChart from '../components/dashboard/OrdersChart';
import RecentOrders from '../components/dashboard/RecentOrders';
import { mockStats } from '../data/mockData';

const DashboardPage: React.FC = () => {
  const stats = [
    {
      title: 'Выручка',
      value: `${mockStats.revenue.toLocaleString()} ₽`,
      change: mockStats.revenueChange,
      icon: <DollarSign size={24} className="text-white" />,
      color: 'bg-indigo-500',
    },
    {
      title: 'Клиенты',
      value: mockStats.customers,
      change: mockStats.customersChange,
      icon: <Users size={24} className="text-white" />,
      color: 'bg-green-500',
    },
    {
      title: 'Заказы',
      value: mockStats.orders,
      change: mockStats.ordersChange,
      icon: <ShoppingBag size={24} className="text-white" />,
      color: 'bg-blue-500',
    },
    {
      title: 'Рейтинг',
      value: mockStats.rating,
      change: mockStats.ratingChange,
      icon: <Star size={24} className="text-white" />,
      color: 'bg-yellow-500',
    },
  ];

  return (
    <div className="animate-fade-in">
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        {stats.map((stat, index) => (
          <StatsCard key={index} {...stat} />
        ))}
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <RevenueChart />
        <OrdersChart />
      </div>
      <RecentOrders />
    </div>
  );
};

export default DashboardPage;