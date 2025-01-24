import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CreditCard, Truck, MapPin, Shield, ArrowLeft, Check } from 'lucide-react';
import { useCartStore } from '../store/cartStore';

const Checkout = () => {
  const navigate = useNavigate();
  const { items, getTotal, clearCart } = useCartStore();
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    // Shipping Info
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    country: '',
    postalCode: '',
    // Payment Info
    cardNumber: '',
    cardName: '',
    expiry: '',
    cvv: '',
    // Delivery Method
    deliveryMethod: 'standard',
  });

  const subtotal = getTotal();
  const shipping = formData.deliveryMethod === 'express' ? 14.99 : 9.99;
  const total = subtotal + shipping;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Here you would typically:
      // 1. Validate the form data
      // 2. Process the payment
      // 3. Create the order in your database
      // 4. Send confirmation email
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Clear the cart
      clearCart();
      
      // Redirect to confirmation page
      navigate('/order-confirmation');
    } catch (error) {
      console.error('Checkout error:', error);
      alert('There was an error processing your order. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const isStepComplete = (stepNumber: number) => {
    switch (stepNumber) {
      case 1:
        return (
          formData.firstName &&
          formData.lastName &&
          formData.email &&
          formData.phone &&
          formData.address &&
          formData.city &&
          formData.country &&
          formData.postalCode
        );
      case 2:
        return formData.deliveryMethod;
      case 3:
        return (
          formData.cardNumber &&
          formData.cardName &&
          formData.expiry &&
          formData.cvv
        );
      default:
        return false;
    }
  };

  const renderStepIndicator = () => (
    <div className="flex items-center justify-center mb-8">
      {[1, 2, 3].map((number) => (
        <React.Fragment key={number}>
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center ${
              step === number
                ? 'bg-black text-white'
                : step > number
                ? 'bg-green-500 text-white'
                : 'bg-gray-200 text-gray-600'
            }`}
          >
            {step > number ? <Check size={16} /> : number}
          </div>
          {number < 3 && (
            <div
              className={`w-16 h-0.5 ${
                step > number ? 'bg-green-500' : 'bg-gray-200'
              }`}
            />
          )}
        </React.Fragment>
      ))}
    </div>
  );

  const renderShippingForm = () => (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            First Name
          </label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Last Name
          </label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200"
            required
          />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Phone
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200"
            required
          />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Address
        </label>
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleInputChange}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200"
          required
        />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            City
          </label>
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Country
          </label>
          <input
            type="text"
            name="country"
            value={formData.country}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200"
            required
          />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Postal Code
        </label>
        <input
          type="text"
          name="postalCode"
          value={formData.postalCode}
          onChange={handleInputChange}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200"
          required
        />
      </div>
    </div>
  );

  const renderDeliveryMethod = () => (
    <div className="space-y-4">
      <div
        className={`border rounded-lg p-4 cursor-pointer ${
          formData.deliveryMethod === 'standard'
            ? 'border-black bg-gray-50'
            : 'hover:border-gray-300'
        }`}
        onClick={() => handleInputChange({ target: { name: 'deliveryMethod', value: 'standard' } } as any)}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="mr-4">
              <Truck size={24} />
            </div>
            <div>
              <h3 className="font-medium">Standard Delivery</h3>
              <p className="text-sm text-gray-500">3-5 business days</p>
            </div>
          </div>
          <div className="font-medium">$9.99</div>
        </div>
      </div>
      <div
        className={`border rounded-lg p-4 cursor-pointer ${
          formData.deliveryMethod === 'express'
            ? 'border-black bg-gray-50'
            : 'hover:border-gray-300'
        }`}
        onClick={() => handleInputChange({ target: { name: 'deliveryMethod', value: 'express' } } as any)}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="mr-4">
              <Truck size={24} />
            </div>
            <div>
              <h3 className="font-medium">Express Delivery</h3>
              <p className="text-sm text-gray-500">1-2 business days</p>
            </div>
          </div>
          <div className="font-medium">$14.99</div>
        </div>
      </div>
    </div>
  );

  const renderPaymentForm = () => (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Card Number
        </label>
        <input
          type="text"
          name="cardNumber"
          value={formData.cardNumber}
          onChange={handleInputChange}
          placeholder="1234 5678 9012 3456"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Cardholder Name
        </label>
        <input
          type="text"
          name="cardName"
          value={formData.cardName}
          onChange={handleInputChange}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200"
          required
        />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Expiry Date
          </label>
          <input
            type="text"
            name="expiry"
            value={formData.expiry}
            onChange={handleInputChange}
            placeholder="MM/YY"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            CVV
          </label>
          <input
            type="text"
            name="cvv"
            value={formData.cvv}
            onChange={handleInputChange}
            placeholder="123"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200"
            required
          />
        </div>
      </div>
      <div className="flex items-center mt-4 text-sm text-gray-600">
        <Shield size={16} className="mr-2" />
        Your payment information is secure and encrypted
      </div>
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Checkout</h1>

        {renderStepIndicator()}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="md:col-span-2">
            <form onSubmit={handleSubmit}>
              {step === 1 && (
                <div>
                  <h2 className="text-xl font-semibold mb-4">Shipping Information</h2>
                  {renderShippingForm()}
                </div>
              )}

              {step === 2 && (
                <div>
                  <h2 className="text-xl font-semibold mb-4">Delivery Method</h2>
                  {renderDeliveryMethod()}
                </div>
              )}

              {step === 3 && (
                <div>
                  <h2 className="text-xl font-semibold mb-4">Payment Information</h2>
                  {renderPaymentForm()}
                </div>
              )}

              <div className="flex justify-between mt-8">
                {step > 1 && (
                  <button
                    type="button"
                    onClick={() => setStep(step - 1)}
                    className="flex items-center text-gray-600 hover:text-gray-900"
                  >
                    <ArrowLeft size={20} className="mr-2" />
                    Back
                  </button>
                )}
                {step < 3 ? (
                  <button
                    type="button"
                    onClick={() => setStep(step + 1)}
                    disabled={!isStepComplete(step)}
                    className="ml-auto bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Continue
                  </button>
                ) : (
                  <button
                    type="submit"
                    disabled={loading || !isStepComplete(step)}
                    className="ml-auto bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? 'Processing...' : 'Place Order'}
                  </button>
                )}
              </div>
            </form>
          </div>

          {/* Order Summary */}
          <div className="md:col-span-1">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
              <div className="space-y-4">
                {items.map(item => (
                  <div key={`${item.id}-${JSON.stringify(item.customization)}`} className="flex items-start">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded"
                    />
                    <div className="ml-4 flex-1">
                      <h3 className="font-medium">{item.name}</h3>
                      <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                      <p className="text-sm font-medium">${(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                  </div>
                ))}
                <div className="border-t pt-4">
                  <div className="flex justify-between text-sm mb-2">
                    <span>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Shipping</span>
                    <span>${shipping.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between font-semibold">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;