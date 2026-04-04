import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { TrendingUp, TrendingDown } from 'lucide-react';

interface ForecastData {
  date: string;
  actual: number;
  predicted: number;
}

const SalesForecast: React.FC = () => {
  // Простое прогнозирование на основе скользящей средней
  const historicalData = [
    { date: 'Янв', revenue: 35000 },
    { date: 'Фев', revenue: 42000 },
    { date: 'Мар', revenue: 38000 },
    { date: 'Апр', revenue: 45000 },
    { date: 'Май', revenue: 52000 },
    { date: 'Июн', revenue: 49000 },
  ];

  const forecastData: ForecastData[] = historicalData.map((item, index) => ({
    date: item.date,
    actual: item.revenue,
    predicted: index < 3 ? item.revenue : item.revenue * 1.1, // Простой прогноз +10%
  }));

  const totalGrowth = ((forecastData[forecastData.length - 1].predicted - forecastData[0].actual) / forecastData[0].actual * 100).toFixed(1);

  return (
    <div className="card p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h3 className="text-lg font-semibold">Прогноз продаж</h3>
          <p className="text-sm text-gray-500 mt-1">Следующие 6 месяцев</p>
        </div>
        <div className={`flex items-center gap-2 ${Number(totalGrowth) >= 0 ? 'text-green-600' : 'text-red-600'}`}>
          {Number(totalGrowth) >= 0 ? <TrendingUp size={20} /> : <TrendingDown size={20} />}
          <span className="font-bold">{Math.abs(Number(totalGrowth))}% рост</span>
        </div>
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={forecastData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="actual" stroke="#4f46e5" strokeWidth={2} name="Факт" />
          <Line type="monotone" dataKey="predicted" stroke="#10b981" strokeWidth={2} strokeDasharray="5 5" name="Прогноз" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SalesForecast;