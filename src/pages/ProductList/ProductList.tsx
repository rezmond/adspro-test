import { useCallback, type FC } from 'react';

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

type ProductListProps = { className?: string };

export const ProductList: FC<ProductListProps> = ({ className }) => {
  const isUpSm = useUpSm();
  const categories = useCategories();
  const productList = useProductList(categories.active);
  const priceConfig = { min: 10, max: 100 };

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
