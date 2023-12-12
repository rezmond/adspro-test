import useSWR from 'swr';
import { useCallback, useMemo, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';

import { API_HOST } from '@/config/api';
import { fetcher } from '@/shared/utils';

import { type Product } from '../Product';
import { type Category } from '../Categories';
import { type Filter } from '../Filters';

import { type ProductListService } from './types';
import { findProductsMinMax } from './utils';

const filterKey = 'filter';

const useFilter = (): readonly [
  active: Filter,
  setActive: (filter: Filter) => void,
] => {
  const [searchParams, setSearchParams] = useSearchParams();
  const setSearchParamsRef = useRef(setSearchParams);
  setSearchParamsRef.current = setSearchParams;

  const setCategory = useCallback((value: Filter) => {
    setSearchParamsRef.current((prev) => ({
      ...Object.fromEntries(prev.entries()),
      [filterKey]: JSON.stringify(value),
    }));
  }, []);

  const filter = JSON.parse(searchParams.get(filterKey) || 'null') || {
    rating: Infinity,
    price: Infinity,
  };
  return [filter, setCategory];
};

export const useProductList = (
  category: Category | null,
): ProductListService => {
  const [filter, setFilter] = useFilter();

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
    products: {
      ...products,
      isLoading: category === null || products.isLoading,
      data,
    },
    filter,
    priceConfig,
    setFilter,
  };
};
