import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  useTheme,
} from '@mui/material';
import { type FC } from 'react';
import classNames from 'classnames';
import { NavLink } from 'react-router-dom';

import { type Product } from '../ProductDetails';
import { Votes } from '../Votes';

import styles from './ProductCard.module.css';

type ProductCardProps = {
  className?: string;
  product: Product;
};

export const ProductCard: FC<ProductCardProps> = ({ className, product }) => {
  const theme = useTheme();
  return (
    <NavLink
      to={`/products/${product.id}`}
      className={classNames(styles.link, className)}
    >
      <Card component="article" title={product.title} className={styles.card}>
        <CardMedia
          component="img"
          height={theme.spacing(24)}
          image={product.image}
          className={styles.image}
          alt={product.title}
        />
        <CardContent className={styles.cardContent}>
          <Typography
            variant="body2"
            component="h3"
            className={styles.description}
          >
            {product.title}
          </Typography>
          <Typography variant="body2">
            price{' '}
            <Typography
              variant="body1"
              component="b"
              fontWeight="fontWeightBold"
            >
              {product.price}
            </Typography>
          </Typography>
          <Votes rating={product.rating} />
        </CardContent>
      </Card>
    </NavLink>
  );
};
