import { Filter as FilterIcon } from '@mui/icons-material';
import { Drawer, IconButton } from '@mui/material';
import { useState, type FC } from 'react';

import { FiltersContent, FiltersContentProps } from '../FiltersContent';
import { type Filter } from '../../types';

import styles from './FiltersMobile.module.css';

const drawerClasses = {
  paper: styles.drawerPaper,
};

type FiltersMobileProps = FiltersContentProps;

export const FiltersMobile: FC<FiltersMobileProps> = ({
  filterInit,
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
        <FilterIcon className={styles.filterToggleIcon} /> filter
      </IconButton>
      <Drawer
        classes={drawerClasses}
        anchor="right"
        open={isOpened}
        onClose={toggleDrawer(false)}
      >
        <FiltersContent
          filterInit={filterInit}
          priceConfig={priceConfig}
          onFilter={handleFilter}
        />
      </Drawer>
    </>
  );
};
