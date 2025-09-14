"use client";

import { useState } from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";

// Dummy data (replace with real API data)
const customerData = [
  { name: "Active", value: 300 },
  { name: "Inactive", value: 100 },
];

const categoryData = [
  { name: "Fashion", value: 300 },
  { name: "Electronics", value: 200 },
  { name: "Home", value: 150 },
  { name: "sports", value: 100 },
];

const trafficData = [
  { date: "2025-09-01", users: 120 },
  { date: "2025-09-02", users: 200 },
  { date: "2025-09-03", users: 150 },
  { date: "2025-09-04", users: 300 },
  { date: "2025-09-05", users: 250 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

export default function AnalyticsPage() {
  const [dateRange, setDateRange] = useState("7d"); // simple filter

  return (
    <main className="p-6 bg-gray-100 min-h-screen">
      <div className="max-w-6xl mx-auto space-y-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Analytics Dashboard</h1>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center">
            <span className="text-gray-500">Total Users</span>
            <span className="text-2xl font-bold">500</span>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center">
            <span className="text-gray-500">Active Users</span>
            <span className="text-2xl font-bold">400</span>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center">
            <span className="text-gray-500">New Signups</span>
            <span className="text-2xl font-bold">120</span>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center">
            <span className="text-gray-500">Revenue</span>
            <span className="text-2xl font-bold">$15,000</span>
          </div>
        </div>

        {/* Date Filter */}
        <div className="flex justify-end mb-4">
          <select
            className="border rounded-lg px-3 py-1"
            value={dateRange}
            onChange={(e) => setDateRange(e.target.value)}
          >
            <option value="7d">Last 7 Days</option>
            <option value="30d">Last 30 Days</option>
            <option value="90d">Last 90 Days</option>
          </select>
        </div>

        {/* Traffic Line Chart */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">User Traffic</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={trafficData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="users" stroke="#0088FE" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Customers Pie Chart */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Customer Status</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={customerData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={100}
                label
              >
                {customerData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Categories Pie Chart */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Products by Category</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={categoryData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={100}
                label
              >
                {categoryData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </main>
  );
}
