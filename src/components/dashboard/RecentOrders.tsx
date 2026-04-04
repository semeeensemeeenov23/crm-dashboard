import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { Eye } from 'lucide-react';

const RecentOrders: React.FC = () => {
  const orders = useSelector((state: RootState) => state.orders.orders);
  const recentOrders = [...orders].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).slice(0, 5);

  const getStatusColor = (status: string) => {
    const colors = {
      new: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200',
      processing: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
      delivered: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
      cancelled: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200',
    };
    return colors[status as keyof typeof colors] || colors.new;
  };

  const getStatusText = (status: string) => {
    const texts = {
      new: 'Новый',
      processing: 'В обработке',
      delivered: 'Доставлен',
      cancelled: 'Отменен',
    };
    return texts[status as keyof typeof texts] || status;
  };

  return (
    <div className="card p-6">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">Последние заказы</h3>
        <button className="text-indigo-600 hover:text-indigo-700 text-sm font-medium">
          Все заказы
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="border-b dark:border-gray-700">
            <tr>
              <th className="text-left py-3 px-2">ID</th>
              <th className="text-left py-3 px-2">Клиент</th>
              <th className="text-left py-3 px-2">Сумма</th>
              <th className="text-left py-3 px-2">Статус</th>
              <th className="text-left py-3 px-2">Действия</th>
            </tr>
          </thead>
          <tbody>
            {recentOrders.map((order) => (
              <tr key={order.id} className="border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700">
                <td className="py-3 px-2">#{order.id}</td>
                <td className="py-3 px-2">{order.customer}</td>
                <td className="py-3 px-2">{order.amount.toLocaleString()} ₽</td>
                <td className="py-3 px-2">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(order.status)}`}>
                    {getStatusText(order.status)}
                  </span>
                </td>
                <td className="py-3 px-2">
                  <button className="text-indigo-600 hover:text-indigo-700">
                    <Eye size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentOrders;