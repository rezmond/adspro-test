import { useCallback, useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import useSWR from 'swr';

import { API_HOST } from '@/config/api';
import { fetcher } from '@/shared/utils';

import type { Category, CategoryService, SetCategory } from './types';

const categoryKey = 'category';

const useActiveCategory = (): readonly [
  active: Category | null,
  setActive: SetCategory,
] => {
  const [searchParams, setSearchParams] = useSearchParams();
  const setSearchParamsRef = useRef(setSearchParams);
  setSearchParamsRef.current = setSearchParams;

  const setCategory = useCallback((value: Category) => {
    setSearchParamsRef.current({ [categoryKey]: value });
  }, []);

  const active = searchParams.get(categoryKey) || null;
  return [active, setCategory];
};

export const useCategories = (): CategoryService => {
  const [active, setActive] = useActiveCategory();
  const available = useSWR<Category[]>(
    `${API_HOST}products/categories`,
    fetcher,
  );

  useEffect(() => {
    if (!available.isLoading && !available.error && available.data) {
      setActive(available.data[0]);
    }
  }, [available.data, available.error, available.isLoading, setActive]);

  return { active, available, setActive };
};
