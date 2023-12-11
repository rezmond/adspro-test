import { type FC } from 'react';

import { PageLayout } from '@/components/PageLayout';

type ProductListProps = { className?: string };

export const ProductList: FC<ProductListProps> = ({ className }) => (
  <PageLayout className={className} />
);
