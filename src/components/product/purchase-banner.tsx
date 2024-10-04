"use client";

import { IconCreditCard, IconShoppingCart } from "@tabler/icons-react";
import { useRouter } from "next/navigation";
import { Coin, Product } from "@gstore/core";
import useInstallment from "@/src/data/hooks/useInstallment";

export interface PurchaseBannerProps {
  product: Product;
}

export default function PurchaseBanner({ product }: PurchaseBannerProps) {
  const router = useRouter();

  const installment = useInstallment(product.promotional_price);

  return (
    <div className="flex">
      <div className="flex flex-col border-r border-zinc-500 pr-5">
        <div className="line-through text-zinc-400">
          de {Coin.format(product?.base_price)}
        </div>
        <div className="text-2xl font-semibold">
          <span className="text-base text-zinc-300">por</span>{" "}
          <span className="text-emerald-500">
            {Coin.format(product.promotional_price)}
          </span>{" "}
          <span className="text-base text-zinc-300">à vista</span>
        </div>
      </div>
      <div className="flex-1 flex flex-col text-2xl font-semibold text-zinc-400 pl-5">
        <span className="text-base text-zinc-300">
          {installment.installment_quantity}x de
        </span>
        {Coin.format(installment.installment_price)}
      </div>
      <div className="flex gap-2 items-center">
        <button
          className="flex-1 button bg-pink-600"
          onClick={() => {}}
          // onClick={() => adicionarItem(product)}
        >
          <IconShoppingCart size={20} />
          <span>Adicionar</span>
        </button>
        <button
          className="flex-1 button bg-violet-700"
          onClick={() => {
            // adicionarItem(product)
            router.push("/checkout/payment");
          }}
        >
          <IconCreditCard size={20} />
          <span>Comprar</span>
        </button>
      </div>
    </div>
  );
}
