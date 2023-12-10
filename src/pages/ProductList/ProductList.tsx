import { FC } from 'react';
import { AppBar, Box, Toolbar } from '@mui/material';

import { SearchInput } from '@/components/SearchInput';
import { BottomToolbar } from '@/components/BottomToolbar';
import { MainMenu } from '@/components/MainMenu';

import styles from './ProductList.module.css';

type ProductListProps = { className?: string };

const menu = [
  { url: '/one', label: 'one' },
  { url: '/two', label: 'two' },
  { url: '/three', label: 'three' },
];

const mainMenuLabel = 'Main navigation';

export const ProductList: FC<ProductListProps> = ({ className }) => (
  <AppBar className={className}>
    <Toolbar>
      <SearchInput className={styles.searchInput} />
      <Box className={styles.menuButtonWrapper}>
        <MainMenu label={mainMenuLabel} menu={menu} />
      </Box>
    </Toolbar>
    <BottomToolbar />
  </AppBar>
);
