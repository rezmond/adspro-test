import { type FC } from 'react';
import { CircularProgress, Typography, useTheme } from '@mui/material';

import { CategoryService } from '../../types';

type CategoriesButtonContentProps = {
  categories: CategoryService;
};

export const CategoriesButtonContent: FC<CategoriesButtonContentProps> = ({
  categories,
}) => {
  const theme = useTheme();

  if (categories.available.isLoading) {
    return <CircularProgress size={theme.spacing(2)} color="inherit" />;
  }

  if (categories.available.error) {
    return <Typography color="common.error">Something went wrong</Typography>;
  }

  return categories.active;
};
