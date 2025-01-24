import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Package, ArrowRight } from 'lucide-react';

const OrderConfirmation = () => {
  // Mock order details
  const order = {
    id: 'ORD-2024-001',
    date: new Date().toLocaleDateString(),
    total: 109.97,
    items: [
      {
        id: '1',
        name: 'Crystal Embellished Socks',
        quantity: 2,
        price: 49.99,
        image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&q=80',
      },
    ],
    shipping: 9.99,
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
          <CheckCircle className="text-green-500" size={32} />
        </div>
        <h1 className="text-3xl font-bold mb-2">Order Confirmed!</h1>
        <p className="text-gray-600">
          Thank you for your purchase. We'll send you shipping confirmation soon.
        </p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="font-semibold">Order #{order.id}</h2>
            <p className="text-sm text-gray-500">Placed on {order.date}</p>
          </div>
          <Link
            to="/account"
            className="text-black hover:text-gray-600 flex items-center"
          >
            View Order <ArrowRight size={16} className="ml-2" />
          </Link>
        </div>

        <div className="space-y-4 mb-6">
          {order.items.map((item) => (
            <div key={item.id} className="flex items-center space-x-4">
              <img
                src={item.image}
                alt={item.name}
                className="w-16 h-16 object-cover rounded"
              />
              <div className="flex-1">
                <h3 className="font-medium">{item.name}</h3>
                <p className="text-sm text-gray-500">Quantity: {item.quantity}</p>
              </div>
              <p className="font-medium">
                ${(item.price * item.quantity).toFixed(2)}
              </p>
            </div>
          ))}
        </div>

        <div className="border-t pt-4">
          <div className="flex justify-between text-sm mb-2">
            <span>Subtotal</span>
            <span>${(order.total - order.shipping).toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-sm mb-2">
            <span>Shipping</span>
            <span>${order.shipping.toFixed(2)}</span>
          </div>
          <div className="flex justify-between font-semibold">
            <span>Total</span>
            <span>${order.total.toFixed(2)}</span>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 p-6 rounded-lg mb-8">
        <div className="flex items-center mb-4">
          <Package className="text-gray-600 mr-2" size={20} />
          <h2 className="font-semibold">Shipping Information</h2>
        </div>
        <p className="text-gray-600 mb-4">
          Your order will be processed and shipped within 1-2 business days. You'll
          receive a shipping confirmation email with tracking information once your
          order is on its way.
        </p>
        <div className="text-sm text-gray-500">
          <p>Estimated delivery: 3-5 business days</p>
        </div>
      </div>

      <div className="text-center space-y-4">
        <Link
          to="/shop"
          className="inline-block bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-800"
        >
          Continue Shopping
        </Link>
        <p className="text-sm text-gray-600">
          Need help? <Link to="/contact" className="text-black hover:underline">Contact us</Link>
        </p>
      </div>
    </div>
  );
};

export default OrderConfirmation;