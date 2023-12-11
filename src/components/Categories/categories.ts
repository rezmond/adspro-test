import { useCallback, useEffect, useRef, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const CATEGORY_KEY = 'category';

type Category = string;
type SetCategory = (category: Category) => void;
interface CategoryService {
  active: Category | null;
  available: Category[];
  setActive: SetCategory;
}

const useActiveCategory = (): readonly [
  active: Category | null,
  setActive: SetCategory,
] => {
  const [searchParams, setSearchParams] = useSearchParams();
  const setSearchParamsRef = useRef(setSearchParams);
  setSearchParamsRef.current = setSearchParams;

  const setCategory = useCallback((value: Category) => {
    setSearchParamsRef.current({ [CATEGORY_KEY]: value });
  }, []);

  const active = searchParams.get(CATEGORY_KEY) || null;
  return [active, setCategory];
};

const __stabCategories = ['ololo', 'trololo', 'pish-pish'];

export const useCategories = (): CategoryService => {
  const [active, setActive] = useActiveCategory();
  const [available, setAvailable] = useState<null | Category[]>(null);

  useEffect(() => {
    setTimeout(() => {
      const fetchedAvailable = __stabCategories;
      setAvailable(fetchedAvailable);
    }, 1_000);
  }, [setAvailable]);

  useEffect(() => {
    if (available !== null) {
      setActive(available[0]);
    }
  }, [available, setActive]);

  return { active, available, setActive };
};
