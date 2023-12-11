import { type FC } from 'react';

import { PageLayout } from '@/components/PageLayout';
import { BottomToolbar } from '@/components/BottomToolbar';

type ProductListProps = { className?: string };

export const ProductList: FC<ProductListProps> = ({ className }) => (
  <PageLayout
    className={className}
    bottomToolbar={<BottomToolbar />}
    asideContent="test"
  >
    {null}
  </PageLayout>
);
