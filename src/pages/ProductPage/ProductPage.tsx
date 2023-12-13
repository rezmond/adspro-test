import { type FC } from 'react';
import { useParams } from 'react-router-dom';

import { ProductDetails } from '@/components/ProductDetails';
import { PageLayout } from '@/components/PageLayout';
import { BottomToolbar } from '@/components/BottomToolbar';
import { ColorModeToggler } from '@/components/ColorModeToggler';
type ProductPageProps = {
  className?: string;
};

export const ProductPage: FC<ProductPageProps> = () => {
  const params = useParams();
  return (
    <PageLayout
      bottomToolbar={
        <BottomToolbar>
          <ColorModeToggler />
        </BottomToolbar>
      }
    >
      <ProductDetails id={params.id!} />
    </PageLayout>
  );
};
