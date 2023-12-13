import { type FC } from 'react';
import { NavLink, useMatch } from 'react-router-dom';
import { Breadcrumbs as MuiBreadcrumbs, Link, Typography } from '@mui/material';

export const Breadcrumbs: FC = () => {
  const match = useMatch('/products');

  const isHome = Boolean(match);
  return (
    <MuiBreadcrumbs aria-label="breadcrumb">
      {isHome ? (
        <Typography>Home</Typography>
      ) : (
        <Link component={NavLink} to="/products">
          Home
        </Link>
      )}
    </MuiBreadcrumbs>
  );
};
