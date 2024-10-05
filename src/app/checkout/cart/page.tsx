"use client";

import CartItem from "@/src/components/checkout/cart/cart-item";
import CartTotal from "@/src/components/checkout/cart/cart-total";
import EmptyCart from "@/src/components/checkout/cart/empty-cart";
import CheckoutHeader from "@/src/components/checkout/checkout-header";
import useCart from "@/src/data/hooks/useCart";
import { CartItem as ICartItem } from "@gstore/core";

export default function CartPage() {
  const {
    items,
    itemsQuantity,
    totalAmount,
    addItem,
    removeItem,
    removeProduct,
  } = useCart();

  return (
    <div className="flex flex-col gap-5 container">
      <CheckoutHeader step="cart" />
      <div className="flex flex-col gap-4">
        {items.length === 0 && <EmptyCart />}
        {items.map((item: ICartItem) => (
          <CartItem
            key={item.product.id}
            item={item}
            addItem={() => addItem(item.product)}
            removeItem={() => removeItem(item.product)}
            removeProduct={() => removeProduct(item.product)}
          />
        ))}
      </div>
      <CartTotal itemsQuantity={itemsQuantity} totalAmount={totalAmount} />
    </div>
  );
}
