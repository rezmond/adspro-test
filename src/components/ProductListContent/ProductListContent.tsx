import { type FC } from 'react';
import { type SWRResponse } from 'swr';
import { CircularProgress, Grid, List, ListItem } from '@mui/material';

import { Product } from '../ProductDetails';
import { ProductCard } from '../ProductCard';
import { VisuallyHidden } from '../VisuallyHidden';
import { ErrorMessage } from '../ErrorMessage';

type ProductListContentProps = {
  products: SWRResponse<Product[], Error, unknown>;
};

export const ProductListContent: FC<ProductListContentProps> = ({
  products,
}) => {
  if (products.isLoading) {
    return <CircularProgress />;
  }

  if (products.error) {
    return (
      <ErrorMessage
        title="The products could not be fetched."
        message={products.error.message}
      />
    );
  }

  return (
    <>
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
    </>
  );
};
