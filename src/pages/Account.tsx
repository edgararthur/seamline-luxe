import React, { useState } from 'react';
import { Package, Heart, Settings, LogOut } from 'lucide-react';

const Account = () => {
  const [activeTab, setActiveTab] = useState('orders');

  const tabs = [
    { id: 'orders', label: 'My Orders', icon: Package },
    { id: 'wishlist', label: 'Wishlist', icon: Heart },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  // Mock user data
  const user = {
    name: 'Sarah Johnson',
    email: 'sarah.johnson@example.com',
    orders: [
      {
        id: 'ORD-001',
        date: '2024-02-20',
        status: 'Delivered',
        total: 129.97,
        items: [
          {
            name: 'Crystal Embellished Socks',
            quantity: 2,
            price: 49.99,
          },
          {
            name: 'Vintage Lace Collar',
            quantity: 1,
            price: 29.99,
          },
        ],
      },
      // Add more orders...
    ],
    wishlist: [
      {
        id: '1',
        name: 'Velvet Evening Cape',
        price: 149.99,
        image: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&q=80',
      },
      // Add more wishlist items...
    ],
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'orders':
        return (
          <div className="space-y-6">
            {user.orders.map((order) => (
              <div key={order.id} className="border rounded-lg p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-semibold">Order #{order.id}</h3>
                    <p className="text-sm text-gray-500">{order.date}</p>
                  </div>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                    {order.status}
                  </span>
                </div>
                <div className="space-y-4">
                  {order.items.map((item, index) => (
                    <div key={index} className="flex justify-between">
                      <div>
                        <p>{item.name}</p>
                        <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                      </div>
                      <p>${item.price.toFixed(2)}</p>
                    </div>
                  ))}
                </div>
                <div className="border-t mt-4 pt-4 flex justify-between">
                  <span className="font-semibold">Total</span>
                  <span className="font-semibold">${order.total.toFixed(2)}</span>
                </div>
              </div>
            ))}
          </div>
        );

      case 'wishlist':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {user.wishlist.map((item) => (
              <div key={item.id} className="border rounded-lg overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-semibold">{item.name}</h3>
                  <p className="text-gray-600">${item.price.toFixed(2)}</p>
                  <button className="mt-4 w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        );

      case 'settings':
        return (
          <div className="max-w-2xl">
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  defaultValue={user.name}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  defaultValue={user.email}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  New Password
                </label>
                <input
                  type="password"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200"
                />
              </div>
              <button className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800">
                Save Changes
              </button>
            </form>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold">My Account</h1>
        <button className="flex items-center text-gray-600 hover:text-gray-900">
          <LogOut size={20} className="mr-2" />
          Sign Out
        </button>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Sidebar */}
        <div className="md:w-64">
          <div className="space-y-2">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center px-4 py-2 rounded-lg ${
                    activeTab === tab.id
                      ? 'bg-black text-white'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <Icon size={20} className="mr-3" />
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default Account;