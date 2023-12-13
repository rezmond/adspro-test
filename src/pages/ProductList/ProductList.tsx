import { useCallback, type FC } from 'react';
import { Box, CircularProgress } from '@mui/material';

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
import { Categories, useCategories } from '@/components/Categories';
import { ColorModeToggler } from '@/components/ColorModeToggler';
import { VisuallyHidden } from '@/components/VisuallyHidden';

import styles from './ProductList.module.css';

type ProductListProps = { className?: string };

export const ProductList: FC<ProductListProps> = ({ className }) => {
  const isUpSm = useUpSm();
  const categories = useCategories();
  const { products, priceConfig, filter, setFilter } = useProductList(
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
          <Box className={styles.categoriesWrapper}>
            <Categories />
          </Box>
          <ColorModeToggler />
          {!isUpSm &&
            (products.isLoading ? (
              <CircularProgress />
            ) : (
              <FiltersMobile
                key={categories.active}
                filterInit={filter}
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
            filterInit={filter}
            priceConfig={priceConfig}
            onFilter={handleFilter}
          />
        )
      }
    >
      <VisuallyHidden>
        <h1>Products</h1>
      </VisuallyHidden>
      <ProductListContent products={products} />
    </PageLayout>
  );
};
