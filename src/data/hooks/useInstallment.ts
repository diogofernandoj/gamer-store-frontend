import { CalculateInstallment } from "@gstore/core";

export default function useInstallment(value: number, quantity?: number) {
  const installment = new CalculateInstallment().execute(value, quantity);
  return installment;
}
