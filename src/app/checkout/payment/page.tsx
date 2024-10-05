"use client";

import CheckoutHeader from "@/src/components/checkout/checkout-header";
import DeliveryForm from "@/src/components/checkout/payment/delivery-form";
import PaymentMethodSelect from "@/src/components/checkout/payment/payment-method-select";
import PaymentOverview from "@/src/components/checkout/payment/payment-overview";
import useCart from "@/src/data/hooks/useCart";
import usePayment from "@/src/data/hooks/usePayment";

export default function CheckoutPaymentPage() {
  const { installment, itemsQuantity, totalAmount, fullTotalAmount } =
    useCart();
  const {
    delivery,
    paymentMethod,
    changeDelivery,
    changePaymentMethod,
    finishPurchase,
  } = usePayment();

  return (
    <div className="flex flex-col gap-7 container">
      <CheckoutHeader step="payment" />
      <div className="flex gap-5">
        <div className="flex-1 flex flex-col gap-5">
          <PaymentMethodSelect
            paymentMethod={paymentMethod}
            handlePaymentMethodClick={changePaymentMethod}
          />
          <DeliveryForm delivery={delivery} updateDelivery={changeDelivery} />
        </div>
        <PaymentOverview
          itemsQuantity={itemsQuantity}
          totalAmount={totalAmount}
          fullTotalAmount={fullTotalAmount}
          installment={installment}
          finishPurchase={finishPurchase}
          className="mt-12"
        />
      </div>
    </div>
  );
}
