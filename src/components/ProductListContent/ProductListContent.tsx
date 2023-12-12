import { type FC } from 'react';
import { type SWRResponse } from 'swr';
import { CircularProgress, Container, Typography } from '@mui/material';

import { Product } from '../Product';

type ProductListContentProps = {
  products: SWRResponse<Product[], unknown, unknown>;
};

export const ProductListContent: FC<ProductListContentProps> = ({
  products,
}) => {
  if (products.isLoading) {
    return <CircularProgress />;
  }

  if (products.error) {
    return <Typography color="error">Something went wrong</Typography>;
  }

  return <Container>{JSON.stringify(products.data)}</Container>;
};
