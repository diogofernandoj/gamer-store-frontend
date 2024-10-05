import { Coin } from "@gstore/core";
import { IconShoppingCart } from "@tabler/icons-react";
import Link from "next/link";

export interface CartTotalProps {
  itemsQuantity: number;
  totalAmount: number;
}

export default function CartTotal({
  itemsQuantity,
  totalAmount,
}: CartTotalProps) {
  return (
    <div className="flex justify-end items-center gap-7 bg-violet-dark h-24 rounded-xl px-7">
      <div className="flex flex-col">
        <span className="text-zinc-400">
          Total ({itemsQuantity} {itemsQuantity === 1 ? "item" : "itens"}):
        </span>
        <span className="text-emerald-500 text-2xl font-semibold">
          {Coin.format(totalAmount ?? 0)}
        </span>
      </div>
      <Link href="/checkout/pagamento" className="button bg-indigo-700">
        <IconShoppingCart size={20} />
        <span>Continuar</span>
      </Link>
    </div>
  );
}
