import useSWR from 'swr';
import { useMemo, useState } from 'react';

import { API_HOST } from '@/config/api';
import { fetcher } from '@/shared/utils';

import { type Product } from '../Product';
import { type Category } from '../Categories';
import { type Filter } from '../Filters';

import { type ProductListService } from './types';
import { findProductsMinMax } from './utils';

export const useProductList = (
  category: Category | null,
): ProductListService => {
  const [filter, setFilter] = useState<Filter>({
    rating: Infinity,
    price: Infinity,
  });

  const products = useSWR<Product[]>(
    () => category && `${API_HOST}products/category/${category}`,
    fetcher,
  );

  const data = products.data?.filter(
    (product) =>
      product.price <= filter.price && product.rating.rate <= filter.rating,
  );

  const priceConfig = useMemo(
    () => findProductsMinMax(products.data),
    [products.data],
  );

  return {
    setFilter,
    products: {
      ...products,
      isLoading: category === null || products.isLoading,
      data,
    },
    priceConfig,
  };
};
