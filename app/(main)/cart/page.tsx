"use client";
import useUserStore from "@/app/store/authStore";
import { Cart } from "@/backend/models/Cart";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle,} from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import { formatPrice } from "@/lib/utils";
import { ApiResponse } from "@/types";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { BadgeIndianRupee, CheckIcon, IndianRupee, Loader2, LucideIndianRupee, LucideReceiptIndianRupee, TrashIcon } from "lucide-react";
import Loader from "@/components/loader";
import { Input } from "@/components/ui/input";

const CartPage = () => {
  const [cart, setCart] = useState<Cart | null>(null);
  const [loading, setLoading] = useState(true);
  const [loading1, setLoading1] = useState(false);
  const [couponCode, setCouponCode] = useState<string>('');
  
  const { toast } = useToast();
  const user = useUserStore((state) => state.user);

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const response = await axios.get<ApiResponse>(`/api/addToCart/${user?.username}`);

        if (response.data.success && response.data.cart) {
          setCart(response.data.cart);
        } else {
          setCart(null);
        }
      } catch (error) {
        console.log("Error fetching cart:", error);
      } finally {
        setLoading(false);
      }
    };

    if (user?.username) {
      fetchCart();
    }
  }, [user?.username]);

  const removeFromCart = async (itemId: string) => {
    try {
      const response = await axios.delete<ApiResponse>(`/api/addToCart/${user?.username}`, {
        headers: {
          'Content-Type': 'application/json'
        },
        data: JSON.stringify({ itemId })
      });

      if (response.data.success && response.data.cart) {
        setCart(response.data.cart);
        toast({ title: "Process succeeded", description: "Item removed from cart." });
      } else {
        toast({ title: "Process Failed", description: "Failed to remove item from cart.", variant: "destructive" });
      }
    } catch (error) {
      console.log("Error removing item from cart:", error);
      toast({ title: "Process Failed", description: "Error removing item from cart.", variant: "destructive" });
    }
  };

  const handleCouponApply = async () => {
    // API call to apply coupon will go here
    try {
      const response = await axios.patch<ApiResponse>(`/api/addToCart/${user?.username}`, {
        couponCode: couponCode,
      });

      if (response.data.success && response.data.cart) {
        toast({ title: response.data.message, description: `Applied coupon: ${couponCode}` });
        setCart(response.data.cart);
      } else {
        toast({ title: "Process Failed", description: response.data.message, variant: "destructive" });
      }
    } catch (error) {
      console.log("Error removing item from cart:", error);
      toast({ title: "Process Failed", description: "Error removing item from cart.", variant: "destructive" });
    }

  };

  if (loading) return <Loader />

  const handleCheckout = async () => {
    if (!cart) return;
    setLoading1(true);

    try {
      const response = await axios.post<ApiResponse>('/api/checkout/stripe', {
        totalPrice: cart.totalPrice,
        gstPrice: cart.gstPrice, 
        currency: 'inr', 
        customerEmail: user?.email, 
        customerName: user?.username, 
        cartId: cart._id,
        userId: user?.id,
        items: cart.items,
      });

      if (response.data.success && response.data.sessionUrl) {
        window.location.href = response.data.sessionUrl;
      } else {
        toast({ title: "Checkout Failed", description: response.data.message || "Failed to initiate checkout.", variant: "destructive" });
      }
    } catch (error) {
      console.log("Checkout error:", error);
      toast({ title: "Checkout Failed", description: "Error during checkout process.", variant: "destructive" });
    } finally {
      setLoading1(false);
    }
  };

  return (
    <div className="flex flex-col gap-4 p-2 w-full md:p-4">
      <h3 className="text-h3-clamp text-center font-semibold">Cart</h3>
      <div className="w-full">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Index</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Label</TableHead>
              <TableHead>Quantity</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Remove</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {cart?.items?.slice().reverse().map((item, index) => (
              <TableRow key={index}>
                <TableCell>{index + 1}</TableCell>
                <TableCell className="font-medium">{item.name}</TableCell>
                <TableCell>{item.label}</TableCell>
                <TableCell>{item.quantity}</TableCell>
                <TableCell>{formatPrice(item.price)}</TableCell>
                <TableCell>
                  <div className="flex items-center cursor-pointer" onClick={() => removeFromCart(String(item._id))}>
                    <TrashIcon className="text-red-700 w-4 h-4 mr-2" /> Remove
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Pricing Breakdown */}
      <div className="grid gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Sub Total Price: 
            </CardTitle>
            <IndianRupee className='w-4 h-4 text-green-500'/>
          </CardHeader>
          <CardContent>
            <div className="text-h4-clamp font-semibold">{formatPrice(cart?.subTotalPrice ?? 0)}</div>
            <p className="text-xs text-muted-foreground">
              +20.1% from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              GST Applied: 
            </CardTitle>
            <BadgeIndianRupee className='w-4 h-4 text-green-500'/>
          </CardHeader>
          <CardContent>
            <div className="text-h4-clamp font-semibold">{formatPrice(cart?.gstPrice ?? 0)}</div>
            <p className="text-xs text-muted-foreground">
              +20.1% from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Discounted Value: 
            </CardTitle>
            <LucideIndianRupee className='w-4 h-4 text-green-500'/>
          </CardHeader>
          <CardContent>
            <div className="text-h4-clamp font-semibold">{formatPrice(cart?.discountPrice ?? 0)}</div>
            <p className="text-xs text-muted-foreground">
              +20.1% from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total Price: 
            </CardTitle>
            <LucideReceiptIndianRupee className='w-4 h-4 text-green-500'/>
          </CardHeader>
          <CardContent>
            <div className="text-h4-clamp font-semibold">{formatPrice(cart?.totalPrice ?? 0)}</div>
            <p className="text-xs text-muted-foreground">
              +20.1% from last month
            </p>
          </CardContent>
        </Card>

        {/* Coupon Code Input */}
      </div>

      {/* Checkout Button */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between mt-6">
        <div className="flex items-center gap-2 mt-4">
          <Input
            type="text"
            placeholder="Enter coupon code"
            name='couponCode'
            value={couponCode}
            disabled={!!cart?.couponCode}
            onChange={(e) => setCouponCode(e.target.value.toUpperCase())} 
          />
          <Button size='sm' variant='destructive' className='text-xs' disabled={!!cart?.couponCode} onClick={handleCouponApply}>Apply</Button>
        </div>
        {cart?.items && (
          <Button className="text-xs px-8 bg-green-500 rounded-full" size="sm" disabled={loading1} onClick={handleCheckout}>
            {loading1 ? (
              <>
                <Loader2 className="h-4 w-4 mr-2 animate-spin" /> Processing
              </>
            ) : (
              <>
                <CheckIcon className="mr-2 w-4 h-4" /> Checkout
              </>
            )}
          </Button>
        )}
      </div>
    </div>
  );
};

export default CartPage;
