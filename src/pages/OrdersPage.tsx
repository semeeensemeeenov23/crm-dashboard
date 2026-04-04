import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { Order } from '../types';
import { Modal } from '../components/ui/Modal';
import { Search, Eye, Download } from 'lucide-react';

const OrdersPage: React.FC = () => {
  const orders = useSelector((state: RootState) => state.orders.orders);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

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
      new: '🟡 Новый',
      processing: '🔵 В обработке',
      delivered: '🟢 Доставлен',
      cancelled: '🔴 Отменен',
    };
    return texts[status as keyof typeof texts] || status;
  };

  const filteredOrders = orders.filter(order => {
    const matchesSearch = order.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         order.id.toString().includes(searchTerm);
    const matchesStatus = statusFilter === 'all' || order.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const exportToCSV = () => {
    const headers = ['ID', 'Клиент', 'Сумма', 'Статус', 'Дата'];
    const csvData = filteredOrders.map(order => [
      order.id,
      order.customer,
      order.amount,
      order.status,
      order.date,
    ]);
    const csvContent = [headers, ...csvData].map(row => row.join(',')).join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', 'orders.csv');
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="animate-fade-in">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Заказы</h1>
        <button
          onClick={exportToCSV}
          className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
        >
          <Download size={18} />
          Экспорт в CSV
        </button>
      </div>

      <div className="card p-6 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            <input
              type="text"
              placeholder="Поиск по клиенту или ID заказа..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-3 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="px-3 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option value="all">Все статусы</option>
            <option value="new">Новый</option>
            <option value="processing">В обработке</option>
            <option value="delivered">Доставлен</option>
            <option value="cancelled">Отменен</option>
          </select>
        </div>
      </div>

      <div className="card overflow-x-auto">
        <table className="w-full">
          <thead className="border-b dark:border-gray-700">
            <tr>
              <th className="text-left py-3 px-2">ID</th>
              <th className="text-left py-3 px-2">Клиент</th>
              <th className="text-left py-3 px-2">Сумма</th>
              <th className="text-left py-3 px-2">Статус</th>
              <th className="text-left py-3 px-2">Дата</th>
              <th className="text-left py-3 px-2">Действия</th>
            </tr>
          </thead>
          <tbody>
            {filteredOrders.map((order) => (
              <tr key={order.id} className="border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700">
                <td className="py-3 px-2">#{order.id}</td>
                <td className="py-3 px-2">{order.customer}</td>
                <td className="py-3 px-2">{order.amount.toLocaleString()} ₽</td>
                <td className="py-3 px-2">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(order.status)}`}>
                    {getStatusText(order.status)}
                  </span>
                </td>
                <td className="py-3 px-2">{order.date}</td>
                <td className="py-3 px-2">
                  <button
                    onClick={() => {
                      setSelectedOrder(order);
                      setIsModalOpen(true);
                    }}
                    className="text-indigo-600 hover:text-indigo-700 dark:text-indigo-400"
                  >
                    <Eye size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Детали заказа"
      >
        {selectedOrder && (
          <div className="space-y-3">
            <p><strong>ID заказа:</strong> #{selectedOrder.id}</p>
            <p><strong>Клиент:</strong> {selectedOrder.customer}</p>
            <p><strong>Сумма:</strong> {selectedOrder.amount.toLocaleString()} ₽</p>
            <p><strong>Статус:</strong> {getStatusText(selectedOrder.status)}</p>
            <p><strong>Дата:</strong> {selectedOrder.date}</p>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default OrdersPage;