import { type FC } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { Breadcrumbs, Container, Link, Typography } from '@mui/material';

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
      <>
        <Breadcrumbs aria-label="breadcrumb">
          <Link component={NavLink} to="/products">
            Products
          </Link>
          <Typography color="text.primary">{params.id}</Typography>
        </Breadcrumbs>
        <ProductDetails id={params.id!} />
      </>
    </PageLayout>
  );
};
