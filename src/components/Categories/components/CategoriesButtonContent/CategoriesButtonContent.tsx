import { type FC } from 'react';
import { CircularProgress, useTheme } from '@mui/material';

import { ErrorMessage } from '@/components/ErrorMessage';

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
    return (
      <ErrorMessage
        title="The categories could not be fetched."
        message={categories.available.error.message}
      />
    );
  }

  return categories.active;
};
