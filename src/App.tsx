import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Gallery from './pages/Gallery';
import Blog from './pages/Blog';
import About from './pages/About';
import Contact from './pages/Contact';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import Account from './pages/Account';
import Checkout from './pages/Checkout';
import OrderConfirmation from './pages/OrderConfirmation';
import { useAuthStore } from './store/autoStore';

// const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
//   const { user, loading } = useAuthStore();

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (!user) {
//     return <Navigate to="/auth" />;
//   }

//   return <>{children}</>;
// };

function App() {
  // const { setUser } = useAuthStore();

  // useEffect(() => {
  //   // Set initial user
  //   supabase.auth.getSession().then(({ data: { session } }) => {
  //     setUser(session?.user ?? null);
  //   });

  //   // Listen for auth changes
  //   const {
  //     data: { subscription },
  //   } = supabase.auth.onAuthStateChange((_event, session) => {
  //     setUser(session?.user ?? null);
  //   });

  //   return () => subscription.unsubscribe();
  // }, [setUser]);
  return (
    <Router>
      <div className="min-h-screen bg-blue-50">
        <Navbar />
        <main className="pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/account" element={<Account />} />
            <Route
              path="/checkout" element={<Checkout /> }
            />
            <Route
              path="/order-confirmation"
              element={
                  <OrderConfirmation />
              }
            />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;