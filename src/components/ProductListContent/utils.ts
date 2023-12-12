import type { Product } from '@/components/Product';

export const findProductsMinMax = (products?: Product[]) =>
  products?.reduce(
    (acc, product) => ({
      min: Math.min(acc.min, product.price),
      max: Math.max(acc.max, product.price),
    }),
    {
      min: Infinity,
      max: 0,
    },
  ) || {
    min: 0,
    max: Infinity,
  };
