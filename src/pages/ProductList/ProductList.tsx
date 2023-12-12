import { useCallback, type FC } from 'react';
import { CircularProgress } from '@mui/material';

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
  const { products, priceConfig, setFilter } = useProductList(
    categories.active,
  );

  const handleFilter = useCallback(
    (filter: Filter) => {
      setFilter(filter);
    },
    [setFilter],
  );

  return (
    <PageLayout
      className={className}
      bottomToolbar={
        <BottomToolbar>
          {!isUpSm &&
            (products.isLoading ? (
              <CircularProgress />
            ) : (
              <FiltersMobile
                key={categories.active}
                priceConfig={priceConfig}
                onFilter={handleFilter}
              />
            ))}
        </BottomToolbar>
      }
      asideContent={
        products.isLoading ? (
          <CircularProgress />
        ) : (
          <FiltersDesktop
            key={categories.active}
            priceConfig={priceConfig}
            onFilter={handleFilter}
          />
        )
      }
    >
      <ProductListContent products={products} />
    </PageLayout>
  );
};
