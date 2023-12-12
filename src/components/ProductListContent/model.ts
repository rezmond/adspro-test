import useSWR from 'swr';

import { API_HOST } from '@/config/api';
import { fetcher } from '@/shared/utils';
import { Url } from '@/shared/types';

import { type Product } from '../Product';
import { type Category } from '../Categories';

import { type ProductListService } from './types';

const productsFetcher = (category: Category | null) => async (url: Url) => {
  if (category === null) {
    return [];
  }

  return fetcher(url);
};

export const useProductList = (
  category: Category | null,
): ProductListService => {
  const products = useSWR<Product[]>(
    `${API_HOST}products/category/${category}`,
    productsFetcher(category),
  );

  return {
    products: {
      ...products,
      isLoading: category === null || products.isLoading,
    },
  };
};
