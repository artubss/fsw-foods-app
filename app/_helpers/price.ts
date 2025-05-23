import { Product } from "@prisma/client";

export const convertDecimalToNumber = (value: any): number => {
  return Number(value);
};

export const calculateProductTotalPrice = (product: Product): number => {
  if (product.discountPercentage === 0) {
    return convertDecimalToNumber(product.price);
  }

  const discount =
    convertDecimalToNumber(product.price) * (product.discountPercentage / 100);

  return convertDecimalToNumber(product.price) - discount;
};

export const formatCurrency = (value: number): string => {
  return `R$${Intl.NumberFormat("pt-BR", {
    currency: "BRL",
    minimumFractionDigits: 2,
  }).format(value)}`;
};
