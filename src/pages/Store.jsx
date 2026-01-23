import React, { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { base44 } from '@/api/base44Client';
import { motion } from 'framer-motion';
import { ShoppingBag, Filter, Tag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import CartDrawer from '../components/store/CartDrawer';
import { toast } from 'sonner';

const categories = ['All', 'Apparel', 'Accessories', 'Art', 'Home'];

export default function Store() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const { data: products = [], isLoading } = useQuery({
    queryKey: ['products'],
    queryFn: () => base44.entities.Product.list('-created_date', 50),
  });

  const filteredProducts = activeCategory === 'All' 
    ? products 
    : products.filter(p => p.category === activeCategory);

  // Check for successful payment
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('success') === 'true') {
      toast.success('Payment successful! Thank you for your purchase.');
      setCart([]);
      window.history.replaceState({}, '', window.location.pathname);
    }
  }, []);

  const addToCart = (product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    toast.success(`${product.name} added to cart`);
  };

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity <= 0) {
      setCart(prev => prev.filter(item => item.id !== productId));
    } else {
      setCart(prev =>
        prev.map(item =>
          item.id === productId ? { ...item, quantity: newQuantity } : item
        )
      );
    }
  };

  const removeItem = (productId) => {
    setCart(prev => prev.filter(item => item.id !== productId));
    toast.success('Item removed from cart');
  };

  const handleCheckout = async () => {
    // Check if running in iframe
    if (window.self !== window.top) {
      alert('Checkout is only available in the published app. Please open the app in a new tab to complete your purchase.');
      return;
    }

    try {
      const currentUrl = window.location.origin + window.location.pathname;
      const response = await base44.functions.invoke('createCheckout', {
        items: cart,
        successUrl: `${currentUrl}?success=true`,
        cancelUrl: `${currentUrl}?canceled=true`,
      });

      if (response.data.url) {
        window.location.href = response.data.url;
      }
    } catch (error) {
      console.error('Checkout error:', error);
      toast.error('Failed to start checkout. Please try again.');
    }
  };

  const cartItemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="relative h-[40vh] min-h-[350px] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://catalog.archives.gov/iiif/3/lz/stillpix/018-aa/RG-18-AA-129-91-ac.jpg/full/1920,/0/default.jpg)',
          }}
        >
          <div className="absolute inset-0 bg-[#1e3a5f]/75" />
        </div>
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center space-x-2 mb-4">
              <ShoppingBag className="w-5 h-5 text-[#c9a227]" />
              <span className="text-[#c9a227] font-medium uppercase tracking-wider text-sm">Show Your Pride</span>
            </div>
            <h1 className="font-display text-5xl md:text-6xl text-white font-bold mb-4">
              RVA Store
            </h1>
            <p className="text-xl text-gray-200 max-w-2xl">
              Celebrate Richmond with locally-designed merchandise that captures the spirit of our city.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-gray-50 border-b sticky top-20 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3 overflow-x-auto pb-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`inline-flex items-center justify-center px-4 py-3 font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 text-sm whitespace-nowrap ${
                    activeCategory === category
                      ? 'bg-[#a63d2f] text-white hover:bg-[#8b3426]'
                      : 'bg-white/90 backdrop-blur-sm text-[#1e3a5f] border border-gray-200 hover:bg-white hover:border-[#a63d2f]'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
            <Button
              onClick={() => setIsCartOpen(true)}
              className="relative bg-[#1e3a5f] hover:bg-[#2d4a6f] text-white flex-shrink-0 shadow-lg px-6 py-6 text-base font-semibold"
            >
              <ShoppingBag className="w-5 h-5 mr-2" />
              Cart
              {cartItemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-[#a63d2f] text-white text-xs font-bold rounded-full h-7 w-7 flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </Button>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {isLoading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="animate-pulse">
                  <div className="bg-gray-200 rounded-2xl aspect-square mb-4" />
                  <div className="h-5 bg-gray-200 rounded w-3/4 mb-2" />
                  <div className="h-4 bg-gray-200 rounded w-1/2" />
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {filteredProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="group"
                >
                  <div className="relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
                    <div className="aspect-square overflow-hidden">
                      <img
                        src={product.image_url}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1.5 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-[#1e3a5f]">
                        {product.category}
                      </span>
                    </div>
                    <div className="p-5">
                      <h3 className="font-display text-lg text-[#1e3a5f] font-semibold mb-1 group-hover:text-[#a63d2f] transition-colors">
                        {product.name}
                      </h3>
                      <p className="text-gray-500 text-sm mb-3 line-clamp-2">
                        {product.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-[#a63d2f] font-bold text-lg">
                          ${product.price?.toFixed(2)}
                        </span>
                        <Button
                          size="sm"
                          className="bg-[#1e3a5f] hover:bg-[#2d4a6f] text-white"
                          onClick={() => addToCart(product)}
                        >
                          <ShoppingBag className="w-4 h-4 mr-1" />
                          Add
                        </Button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {filteredProducts.length === 0 && !isLoading && (
            <div className="text-center py-16">
              <ShoppingBag className="w-12 h-12 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500">No products found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Promo Banner */}
      <section className="py-16 bg-[#a63d2f]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Tag className="w-10 h-10 text-white/80 mx-auto mb-4" />
            <h2 className="font-display text-3xl text-white font-bold mb-4">
              Free Shipping on Orders Over $50
            </h2>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              Show your Richmond pride! All proceeds support local artists and community initiatives.
            </p>
          </motion.div>
        </div>
      </section>

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        updateQuantity={updateQuantity}
        removeFromCart={removeItem}
        onCheckout={handleCheckout}
      />
    </div>
  );
}