"use client";

import { CalculateInstallment, Coin, Product } from "@/src/core";
import Link from "next/link";
import Image from "next/image";
import RatingReview from "../shared/rating-review";
import { IconShoppingCartPlus } from "@tabler/icons-react";

export default function ProductItem({ product }: { product: Product }) {
  const installment = new CalculateInstallment().execute(
    product.promotional_price,
    12,
    0.0167
  );

  return (
    <Link
      href={`/product/${product.id}`}
      className="flex flex-col bg-violet-dark border border-white/10 rounded-xl relative max-w-[350px]"
    >
      <div className="absolute flex justify-end top-2.5 right-2.5">
        <RatingReview rating={product.rating} />
      </div>
      <div className="w-full h-48 relative">
        <Image
          src={product.image}
          fill
          className="object-contain"
          alt="Imagem do Produto"
        />
      </div>
      <div className="flex-1 flex flex-col gap-3 p-5 border-t border-white/10">
        <span className="text-lg font-semibold">{product.name}</span>
        <div className="self-start text-sm border-b border-dashed">
          {product.specifications.highlight}
        </div>
        <div className="flex-1"></div>
        <div className="flex flex-col">
          <span className="text-sm text-gray-400 line-through">
            de {Coin.format(product.base_price)}
          </span>
          <span className="text-xl font-semibold text-emerald-400">
            por {Coin.format(product.promotional_price)}
          </span>
          <span className="text-zinc-400 text-xs">
            até {installment.installment_quantity}x de{" "}
            {Coin.format(installment.installment_price)}
          </span>
        </div>
        <button
          className="
                      flex justify-center items-center gap-2 h-8
                      bg-violet-700 hover:border-2 border-emerald-500 rounded-full
                    "
          onClick={(e) => {
            e.preventDefault();
            console.log("Adicionar ao carrinho");
            // adicionarItem(props.produto)
          }}
        >
          <IconShoppingCartPlus size={20} />
          <span>Adicionar</span>
        </button>
      </div>
    </Link>
  );
}
