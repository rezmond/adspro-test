import { type FC } from 'react';
import { type SWRResponse } from 'swr';
import {
  CircularProgress,
  Container,
  Grid,
  List,
  ListItem,
  Typography,
} from '@mui/material';

import { Product } from '../ProductDetails';
import { ProductCard } from '../ProductCard';
import { VisuallyHidden } from '../VisuallyHidden';

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

  return (
    <Container>
      <VisuallyHidden>
        <h2>Product cards list</h2>
      </VisuallyHidden>
      <Grid
        container
        component={List}
        spacing={2}
        flexDirection="row"
        flexWrap="wrap"
      >
        {products.data?.map((product) => (
          <Grid
            key={product.id}
            item
            xs={12}
            sm={6}
            lg={12}
            component={ListItem}
            disablePadding
          >
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};
