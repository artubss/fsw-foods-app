import { Decimal } from "@prisma/client/runtime/library";

export function decimalToNumber(decimal: Decimal | null | undefined): number {
  if (!decimal) return 0;
  return Number(decimal);
} 