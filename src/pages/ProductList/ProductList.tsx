import { useCallback, type FC, useMemo } from 'react';

import { PageLayout } from '@/components/PageLayout';
import { BottomToolbar } from '@/components/BottomToolbar';
import {
  type Filter,
  FiltersDesktop,
  FiltersMobile,
} from '@/components/Filters';
import { useUpSm } from '@/shared/hooks';
import {
  ProductListContent,
  useProductList,
} from '@/components/ProductListContent';
import { useCategories } from '@/components/Categories';

import { findProductsMinMax } from './utils';

type ProductListProps = { className?: string };

export const ProductList: FC<ProductListProps> = ({ className }) => {
  const isUpSm = useUpSm();
  const categories = useCategories();
  const productList = useProductList(categories.active);
  const priceConfig = useMemo(
    () => findProductsMinMax(productList.products.data),
    [productList.products.data],
  );

  const handleFilter = useCallback((filter: Filter) => {
    console.log('filter:', filter);
  }, []);

  return (
    <PageLayout
      className={className}
      bottomToolbar={
        <BottomToolbar>
          {!isUpSm && (
            <FiltersMobile priceConfig={priceConfig} onFilter={handleFilter} />
          )}
        </BottomToolbar>
      }
      asideContent={
        <FiltersDesktop priceConfig={priceConfig} onFilter={handleFilter} />
      }
    >
      <ProductListContent products={productList.products} />
    </PageLayout>
  );
};
