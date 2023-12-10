import { FC } from 'react';
import { AppBar, Box, IconButton, Toolbar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

import { SearchInput } from '@/components/SearchInput';
import { BottomToolbar } from '@/components/BottomToolbar';

import styles from './ProductList.module.css';

type ProductListProps = { className?: string };

export const ProductList: FC<ProductListProps> = ({ className }) => (
  <AppBar className={className}>
    <Toolbar>
      <SearchInput className={styles.searchInput} />
      <Box className={styles.menuButtonWrapper}>
        <IconButton
          className={styles.menuButton}
          size="large"
          edge="end"
          color="inherit"
          aria-label="menu"
        >
          <MenuIcon />
        </IconButton>
      </Box>
    </Toolbar>
    <BottomToolbar />
  </AppBar>
);
