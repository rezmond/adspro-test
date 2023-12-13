import { type FC } from 'react';
import { Typography, type TypographyProps } from '@mui/material';
import { Star } from '@mui/icons-material';

import { Rating } from '../ProductDetails';

import styles from './Votes.module.css';

type VotesProps = {
  rating: Rating;
} & TypographyProps;

export const Votes: FC<VotesProps> = ({ rating, ...props }) => (
  <Typography variant="body2" color="text.secondary" {...props}>
    {rating.count} votes <Star className={styles.star} /> {rating.rate}
  </Typography>
);
