import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';

const DashPAges = () => {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 ml-64 p-6 bg-gray-100 min-h-screen">
        <Outlet />
      </main>
    </div>
  );
};

export default DashPAges;
