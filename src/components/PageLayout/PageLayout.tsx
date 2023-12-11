import { AppBar, Toolbar } from '@mui/material';
import { type FC } from 'react';

import { SearchInput } from '../SearchInput';
import { MainMenu } from '../MainMenu';
import { BottomToolbar } from '../BottomToolbar';

import styles from './PageLayout.module.css';

type PageLayoutProps = { className?: string };

const menu = [
  { url: '/profile', label: 'Профиль' },
  { url: '/basket', label: 'Корзина' },
  { url: '/settings', label: 'Настройки' },
  { url: '/logout', label: 'Выйти' },
];

const mainMenuLabel = 'Main navigation';

export const PageLayout: FC<PageLayoutProps> = ({ className }) => (
  <AppBar className={className}>
    <Toolbar className={styles.toolbar}>
      <SearchInput className={styles.searchInput} />
      <MainMenu className={styles.mainMenu} label={mainMenuLabel} menu={menu} />
    </Toolbar>
    <BottomToolbar />
  </AppBar>
);
