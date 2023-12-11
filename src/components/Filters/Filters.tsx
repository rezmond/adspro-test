import { Filter as FilterIcon } from '@mui/icons-material';
import { Drawer, IconButton } from '@mui/material';
import { type FC, useState } from 'react';

import styles from './Filters.module.css';
import {
  FiltersContent,
  type FiltersContentProps,
} from './components/FiltersContent';
import { Filter } from './types';

const drawerClasses = {
  paper: styles.drawerPaper,
};

type FiltersProps = FiltersContentProps;

export const Filters: FC<FiltersProps> = ({ priceConfig, onFilter }) => {
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
