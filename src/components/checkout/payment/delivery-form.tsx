"use client";

import { DeliveryOrder } from "@gstore/core";

export interface DeliveryFormProps {
  delivery: Partial<DeliveryOrder>;
  updateDelivery: (delivery: Partial<DeliveryOrder>) => void;
  className?: string;
}

export default function DeliveryForm(props: DeliveryFormProps) {
  const { delivery, updateDelivery } = props;

  function inputHandle(atributo: string) {
    return (e: React.ChangeEvent<HTMLInputElement>) => {
      updateDelivery({ ...delivery, [atributo]: e.target.value });
    };
  }

  return (
    <div className={`flex flex-col gap-3 ${props.className ?? ""}`}>
      <span className="px-7 pb-2 text-xl font-bold text-white/70">
        Dados da Entrega
      </span>
      <div className="flex flex-col gap-5 bg-violet-dark/50 rounded-xl p-6">
        <input
          placeholder="Nome Completo"
          value={delivery.name}
          onChange={inputHandle("name")}
          className="input"
        />
        <div className="flex gap-5">
          <input
            placeholder="E-mail"
            value={delivery.email}
            onChange={inputHandle("email")}
            className="input flex-1"
          />
          <input
            placeholder="CPF"
            value={delivery.document}
            onChange={inputHandle("document")}
            className="input flex-1"
          />
        </div>
        <div className="flex gap-5">
          <input
            placeholder="Logradouro"
            value={delivery.street_address}
            onChange={inputHandle("street_address")}
            className="input flex-1"
          />
          <input
            placeholder="Complemento"
            value={delivery.complement}
            onChange={inputHandle("complement")}
            className="input"
          />
        </div>
        <div className="flex gap-5">
          <input
            placeholder="Cidade"
            value={delivery.city}
            onChange={inputHandle("city")}
            className="input flex-1"
          />
          <input
            placeholder="Estado"
            value={delivery.state}
            onChange={inputHandle("state")}
            className="input flex-1"
          />
        </div>
      </div>
    </div>
  );
}
