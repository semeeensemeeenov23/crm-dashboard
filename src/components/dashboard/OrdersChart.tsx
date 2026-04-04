import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { revenueData } from '../../data/mockData';

/* eslint-disable @typescript-eslint/no-explicit-any */
const CustomTooltip = ({ 
  active, 
  payload, 
  label 
}: { 
  active?: boolean; 
  payload?: Array<{ value: number; payload: any }>; 
  label?: string;
}) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white dark:bg-gray-800 p-3 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
        <p className="text-gray-600 dark:text-gray-400 text-sm mb-1">{label}</p>
        <p className="text-green-600 dark:text-green-400 font-semibold">
          Заказов: {payload[0]?.value}
        </p>
      </div>
    );
  }
  return null;
};

const OrdersChart: React.FC = () => {
  return (
    <div className="card p-6">
      <h3 className="text-lg font-semibold mb-4 dark:text-gray-100">Количество заказов</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={revenueData}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" className="dark:stroke-gray-700" />
          <XAxis dataKey="date" stroke="#6b7280" className="dark:stroke-gray-400" />
          <YAxis stroke="#6b7280" className="dark:stroke-gray-400" />
          <Tooltip content={<CustomTooltip />} />
          <Bar 
            dataKey="orders" 
            fill="#10b981" 
            radius={[4, 4, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default OrdersChart;