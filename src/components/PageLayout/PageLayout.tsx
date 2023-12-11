import { AppBar, Toolbar } from '@mui/material';
import { ReactNode, type FC } from 'react';

import { SearchInput } from '../SearchInput';
import { MainMenu } from '../MainMenu';

import styles from './PageLayout.module.css';

type PageLayoutProps = { className?: string; bottomToolbar?: ReactNode };

const menu = [
  { url: '/profile', label: 'Профиль' },
  { url: '/basket', label: 'Корзина' },
  { url: '/settings', label: 'Настройки' },
  { url: '/logout', label: 'Выйти' },
];

const mainMenuLabel = 'Main navigation';

export const PageLayout: FC<PageLayoutProps> = ({
  className,
  bottomToolbar,
}) => (
  <AppBar className={className}>
    <Toolbar className={styles.toolbar}>
      <SearchInput className={styles.searchInput} />
      <MainMenu className={styles.mainMenu} label={mainMenuLabel} menu={menu} />
    </Toolbar>
    {bottomToolbar}
  </AppBar>
);
