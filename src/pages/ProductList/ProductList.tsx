import { type FC } from 'react';

import { PageLayout } from '@/components/PageLayout';
import { BottomToolbar } from '@/components/BottomToolbar';
import { FiltersDesktop } from '@/components/Filters';

type ProductListProps = { className?: string };

export const ProductList: FC<ProductListProps> = ({ className }) => (
  <PageLayout
    className={className}
    bottomToolbar={<BottomToolbar />}
    asideContent={
      <FiltersDesktop
        priceConfig={{ min: 10, max: 100 }}
        onFilter={(filter) => {
          console.log('filter:', filter);
        }}
      />
    }
  >
    {null}
  </PageLayout>
);
