import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Sidebar = () => {
  const location = useLocation();
  const { user } = useAuth();

  const isActive = (path) => location.pathname.startsWith(path);

  return (
    <aside className="w-64 min-h-screen bg-gray-800 text-white fixed">
      <div className="p-6 text-2xl font-bold border-b border-gray-700">
        Dashboard
      </div>
      <nav className="mt-6">
        <ul>
          <li>
            <Link
              to="/dashboard/userHome"
              className={`block px-6 py-3 rounded-l-full transition-colors ${isActive('/dashboard/userHome')
                ? 'bg-blue-600 font-semibold'
                : 'hover:bg-gray-700'
              }`}
            >
              Dashboard Home
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard/userProfile"
              className={`block px-6 py-3 rounded-l-full transition-colors ${isActive('/dashboard/userProfile')
                ? 'bg-blue-600 font-semibold'
                : 'hover:bg-gray-700'
              }`}
            >
              User Profile
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard/userAddProduct"
              className={`block px-6 py-3 rounded-l-full transition-colors ${isActive('/dashboard/userAddProduct')
                ? 'bg-blue-600 font-semibold'
                : 'hover:bg-gray-700'
              }`}
            >
              Add Product
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard/userProduct"
              className={`block px-6 py-3 rounded-l-full transition-colors ${isActive('/dashboard/userProduct')
                ? 'bg-blue-600 font-semibold'
                : 'hover:bg-gray-700'
              }`}
            >
              Product List
            </Link>
          </li>
          <li>
            <Link
              to={`/dashboard/productItem/${user?.email}`}
              className={`block px-6 py-3 rounded-l-full transition-colors ${isActive('/dashboard/productItem')
                ? 'bg-blue-600 font-semibold'
                : 'hover:bg-gray-700'
              }`}
            >
              Product Item
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
