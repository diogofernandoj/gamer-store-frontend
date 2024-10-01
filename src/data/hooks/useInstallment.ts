import { CalculateInstallment } from "@/src/core";

export default function useInstallment(value: number, quantity?: number) {
  const installment = new CalculateInstallment().execute(value, quantity);
  return installment;
}
