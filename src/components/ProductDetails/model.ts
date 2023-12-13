import useSWR from 'swr';

import { API_HOST } from '@/config/api';
import { fetcher } from '@/shared/utils';

import { type ProductService, type Product } from './types';

export const useProduct = (id: string): ProductService => {
  const product = useSWR<Product>(() => `${API_HOST}products/${id}`, fetcher);

  return {
    product,
  };
};
