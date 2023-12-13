import { type FC } from 'react';
import { Box, CircularProgress, Typography } from '@mui/material';

import { Votes } from '../Votes';
import { ErrorMessage } from '../ErrorMessage';

import { useProduct } from './model';
import styles from './ProductDetails.module.css';

type ProductDetailsProps = {
  id: string;
};

export const ProductDetails: FC<ProductDetailsProps> = ({ id }) => {
  const productService = useProduct(id);

  if (productService.product.isLoading) {
    return <CircularProgress />;
  }

  if (productService.product.error) {
    return (
      <ErrorMessage
        title="The product could not be fetched."
        message={productService.product.error.message}
      />
    );
  }

  const product = productService.product.data!;

  return (
    <div className={styles.productDetails}>
      <Box className={styles.imageWrapper}>
        <img src={product.image} alt={product.title} className={styles.image} />
      </Box>
      <Typography component="h1">{product.title}</Typography>
      <Typography variant="body1">{product.description}</Typography>
      <Typography variant="body2">
        price{' '}
        <Typography variant="body1" component="b" fontWeight="fontWeightBold">
          {product.price}
        </Typography>
      </Typography>
      <Votes rating={product.rating} variant="body1" />
    </div>
  );
};
