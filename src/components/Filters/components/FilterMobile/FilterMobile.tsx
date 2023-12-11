import { Filter as FilterIcon } from '@mui/icons-material';
import { Drawer, IconButton } from '@mui/material';
import { useState, type FC } from 'react';

import { FiltersContent, FiltersContentProps } from '../FiltersContent';
import { type Filter } from '../../types';

import styles from './FilterMobile.module.css';

const drawerClasses = {
  paper: styles.drawerPaper,
};

type FilterMobileProps = FiltersContentProps;

export const FilterMobile: FC<FilterMobileProps> = ({
  priceConfig,
  onFilter,
}) => {
  const [isOpened, open] = useState(false);

  const toggleDrawer = (value: boolean) => () => {
    open(value);
  };

  const handleFilter = (filter: Filter) => {
    onFilter(filter);
    toggleDrawer(false)();
  };

  return (
    <>
      <IconButton
        size="small"
        edge="end"
        color="inherit"
        aria-label="menu"
        onClick={toggleDrawer(true)}
      >
        <FilterIcon /> filter
      </IconButton>
      <Drawer
        classes={drawerClasses}
        anchor="right"
        open={isOpened}
        onClose={toggleDrawer(false)}
      >
        <FiltersContent priceConfig={priceConfig} onFilter={handleFilter} />
      </Drawer>
    </>
  );
};
