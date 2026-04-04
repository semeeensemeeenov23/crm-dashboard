import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
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
        <p className="text-indigo-600 dark:text-indigo-400 font-semibold">
          Выручка: {payload[0]?.value?.toLocaleString()} ₽
        </p>
      </div>
    );
  }
  return null;
};

const RevenueChart: React.FC = () => {
  return (
    <div className="card p-6">
      <h3 className="text-lg font-semibold mb-4 dark:text-gray-100">Динамика выручки</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={revenueData}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" className="dark:stroke-gray-700" />
          <XAxis dataKey="date" stroke="#6b7280" className="dark:stroke-gray-400" />
          <YAxis stroke="#6b7280" className="dark:stroke-gray-400" />
          <Tooltip content={<CustomTooltip />} />
          <Line 
            type="monotone" 
            dataKey="revenue" 
            stroke="#4f46e5" 
            strokeWidth={2} 
            dot={{ fill: '#4f46e5', r: 4 }}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RevenueChart;