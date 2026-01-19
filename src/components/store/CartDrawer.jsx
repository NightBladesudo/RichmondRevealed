import React from 'react';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { X, Plus, Minus, ShoppingCart } from 'lucide-react';
import { base44 } from '@/api/base44Client';

export default function CartDrawer({ isOpen, onClose, cart, updateQuantity, removeItem }) {
  const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  const handleCheckout = async () => {
    try {
      const lineItems = cart.map(item => ({
        price_data: {
          currency: 'usd',
          product_data: {
            name: item.name,
            description: item.description,
            images: item.image_url ? [item.image_url] : [],
          },
          unit_amount: Math.round(item.price * 100),
        },
        quantity: item.quantity,
      }));

      await base44.stripe.checkout({
        line_items: lineItems,
        success_url: `${window.location.origin}${window.location.pathname}?success=true`,
        cancel_url: `${window.location.origin}${window.location.pathname}`,
      });
    } catch (error) {
      console.error('Checkout error:', error);
    }
  };

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent className="w-full sm:max-w-lg">
        <SheetHeader className="border-b pb-4">
          <SheetTitle className="font-display text-2xl text-[#1e3a5f] flex items-center gap-2">
            <ShoppingCart className="w-6 h-6" />
            Shopping Cart
          </SheetTitle>
        </SheetHeader>

        <div className="flex flex-col h-[calc(100%-80px)]">
          {cart.length === 0 ? (
            <div className="flex-1 flex items-center justify-center">
              <div className="text-center">
                <ShoppingCart className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-500">Your cart is empty</p>
              </div>
            </div>
          ) : (
            <>
              <div className="flex-1 overflow-y-auto py-6 space-y-4">
                {cart.map((item) => (
                  <div key={item.id} className="flex gap-4 bg-gray-50 rounded-lg p-4">
                    <img
                      src={item.image_url}
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold text-[#1e3a5f] mb-1">{item.name}</h3>
                      <p className="text-[#a63d2f] font-bold">${item.price.toFixed(2)}</p>
                      <div className="flex items-center gap-2 mt-2">
                        <Button
                          size="icon"
                          variant="outline"
                          className="h-7 w-7"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        >
                          <Minus className="w-3 h-3" />
                        </Button>
                        <span className="w-8 text-center font-medium">{item.quantity}</span>
                        <Button
                          size="icon"
                          variant="outline"
                          className="h-7 w-7"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        >
                          <Plus className="w-3 h-3" />
                        </Button>
                        <Button
                          size="icon"
                          variant="ghost"
                          className="h-7 w-7 ml-auto text-red-500 hover:text-red-600 hover:bg-red-50"
                          onClick={() => removeItem(item.id)}
                        >
                          <X className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t pt-4 space-y-4">
                <div className="flex justify-between items-center">
                  <span className="font-display text-lg text-[#1e3a5f]">Total</span>
                  <span className="font-display text-2xl font-bold text-[#a63d2f]">
                    ${total.toFixed(2)}
                  </span>
                </div>
                <Button
                  className="w-full bg-[#a63d2f] hover:bg-[#8b3426] text-white h-12 text-lg"
                  onClick={handleCheckout}
                >
                  Checkout with Stripe
                </Button>
              </div>
            </>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
}