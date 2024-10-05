/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { createContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import useLocalStorage from "../hooks/useLocalStorage";
import useAPI from "../hooks/useAPI";
import {
  CartItem,
  DeliveryOrder,
  Order,
  OrderItem,
  PaymentMethod,
  Status,
} from "@gstore/core";
import useCart from "../hooks/useCart";

export interface PaymentContextProps {
  paymentMethod: PaymentMethod;
  delivery: Partial<DeliveryOrder>;
  changePaymentMethod: (paymentMethod: PaymentMethod) => void;
  changeDelivery: (delivery: Partial<DeliveryOrder>) => void;
  finishPurchase: () => void;
}

const PaymentContext = createContext<PaymentContextProps>({} as any);

export function PaymentProvider(props: any) {
  const { httpPost } = useAPI();
  const { items, totalAmount, clearCart } = useCart();
  const { saveItem, getItem } = useLocalStorage();
  const router = useRouter();

  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>(
    PaymentMethod.PIX
  );
  const [delivery, setDelivery] = useState<Partial<DeliveryOrder>>({});

  function changePaymentMethod(paymentMethod: PaymentMethod) {
    saveItem("paymentMethod", paymentMethod);
    setPaymentMethod(paymentMethod);
  }

  function changeDelivery(delivery: Partial<DeliveryOrder>) {
    saveItem("delivery", delivery);
    setDelivery(delivery);
  }

  async function finishPurchase() {
    const order: Partial<Order> = {
      date: new Date(),
      payment_method: paymentMethod,
      total_amount: totalAmount,
      delivery: delivery as DeliveryOrder,
      status: Status.RECEIVED,
      items: items.map(
        (item: CartItem) =>
          ({
            product: item.product,
            quantity: item.quantity,
            unit_price: item.product.promotional_price,
          }) as OrderItem
      ),
    };

    await httpPost("/orders", order);
    clearCart();
    router.push("/checkout/success");
  }

  useEffect(() => {
    const delivery = getItem("delivery");
    const paymentMethod = getItem("paymentMethod");
    if (delivery) setDelivery(delivery);
    if (paymentMethod) setPaymentMethod(paymentMethod);
  }, [getItem]);

  return (
    <PaymentContext.Provider
      value={{
        delivery,
        paymentMethod,
        changeDelivery,
        changePaymentMethod,
        finishPurchase,
      }}
    >
      {props.children}
    </PaymentContext.Provider>
  );
}

export default PaymentContext;
