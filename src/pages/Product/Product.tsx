import { type FC } from 'react';
import { useParams } from 'react-router-dom';

// import styles from './Product.module.css';

type ProductProps = {
  className?: string;
};

export const Product: FC<ProductProps> = () => {
  const params = useParams();
  return `Product Id: ${params.id}`;
};
