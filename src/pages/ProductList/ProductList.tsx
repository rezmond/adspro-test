import { FC } from 'react';
import { AppBar, Box, Toolbar } from '@mui/material';

import { SearchInput } from '@/components/SearchInput';
import { BottomToolbar } from '@/components/BottomToolbar';
import { MainMenu } from '@/components/MainMenu';

import styles from './ProductList.module.css';

type ProductListProps = { className?: string };

const menu = [
  { url: '/profile', label: 'Профиль' },
  { url: '/basket', label: 'Корзина' },
  { url: '/settings', label: 'Настройки' },
  { url: '/logout', label: 'Выйти' },
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
