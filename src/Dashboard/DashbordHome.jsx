import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const COLORS = ['#6366F1', '#10B981', '#F59E0B', '#EF4444', '#3B82F6', '#8B5CF6', '#EC4899', '#14B8A6'];

const DashboardHome = () => {
  const [cartData, setCartData] = useState([]);
  const [summary, setSummary] = useState({
    totalPrice: 0,
    totalItems: 0,
    uniqueUsers: 0,
    monthlySummary: {},
  });

  useEffect(() => {
    axios.get('/api/cart') // Replace with your API
      .then(res => {
        const data = res.data;
        setCartData(data);
        calculateSummary(data);
      })
      .catch(err => console.error(err));
  }, []);

  const calculateSummary = (data) => {
    const totalPrice = data.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const totalItems = data.reduce((sum, item) => sum + item.quantity, 0);
    const userSet = new Set(data.map(item => item.userEmail));
    
    const monthlySummary = {};
    data.forEach(item => {
      const month = new Date(item.createdAt).toLocaleString('default', { month: 'short', year: 'numeric' });
      if (!monthlySummary[month]) {
        monthlySummary[month] = {
          items: 0,
          price: 0,
        };
      }
      monthlySummary[month].items += item.quantity;
      monthlySummary[month].price += item.price * item.quantity;
    });

    setSummary({
      totalPrice,
      totalItems,
      uniqueUsers: userSet.size,
      monthlySummary,
    });
  };

  const pieChartData = Object.entries(summary.monthlySummary).map(([month, data]) => ({
    name: month,
    value: data.price,
  }));

  return (
    <div className="max-w-7xl mx-auto p-8 space-y-10 bg-white dark:bg-gray-900 rounded-lg shadow-lg">
      <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white flex items-center gap-2">
        📊 Dashboard Summary
      </h2>

      {/* Summary cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-indigo-50 dark:bg-indigo-900 p-6 rounded-xl shadow-md border border-indigo-200 dark:border-indigo-700">
          <h3 className="text-lg font-semibold text-indigo-700 dark:text-indigo-300 mb-2 flex items-center gap-2">💰 Total Price</h3>
          <p className="text-4xl font-bold text-indigo-900 dark:text-indigo-100">${summary.totalPrice.toFixed(2)}</p>
        </div>
        <div className="bg-emerald-50 dark:bg-emerald-900 p-6 rounded-xl shadow-md border border-emerald-200 dark:border-emerald-700">
          <h3 className="text-lg font-semibold text-emerald-700 dark:text-emerald-300 mb-2 flex items-center gap-2">👥 Unique Members</h3>
          <p className="text-4xl font-bold text-emerald-900 dark:text-emerald-100">{summary.uniqueUsers}</p>
        </div>
        <div className="bg-sky-50 dark:bg-sky-900 p-6 rounded-xl shadow-md border border-sky-200 dark:border-sky-700">
          <h3 className="text-lg font-semibold text-sky-700 dark:text-sky-300 mb-2 flex items-center gap-2">🛒 Total Cart Items</h3>
          <p className="text-4xl font-bold text-sky-900 dark:text-sky-100">{summary.totalItems}</p>
        </div>
      </div>

      {/* Monthly Breakdown */}
      <section>
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">📅 Monthly Breakdown</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {Object.entries(summary.monthlySummary).map(([month, data]) => (
            <div key={month} className="bg-gray-100 dark:bg-gray-800 p-5 rounded-lg shadow border border-gray-300 dark:border-gray-700">
              <h4 className="text-lg font-semibold text-gray-700 dark:text-gray-300">{month}</h4>
              <p className="text-gray-600 dark:text-gray-400">Items: <span className="font-semibold">{data.items}</span></p>
              <p className="text-gray-600 dark:text-gray-400">Total Price: <span className="font-semibold">${data.price.toFixed(2)}</span></p>
            </div>
          ))}
        </div>
      </section>

      {/* Pie Chart */}
      {pieChartData.length > 0 && (
        <section>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">📈 Price Distribution by Month (Pie Chart)</h3>
          <div className="w-full h-96">
            <ResponsiveContainer>
              <PieChart>
                <Pie
                  data={pieChartData}
                  cx="50%"
                  cy="50%"
                  outerRadius={130}
                  fill="#6366F1"
                  dataKey="value"
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  labelLine={false}
                >
                  {pieChartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => `$${value.toFixed(2)}`} />
                <Legend
                  verticalAlign="bottom"
                  height={36}
                  wrapperStyle={{ fontSize: '14px', fontWeight: '600' }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </section>
      )}
    </div>
  );
};

export default DashboardHome;
