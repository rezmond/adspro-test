import { AppBar, Grid, Stack, Toolbar } from '@mui/material';
import { ReactNode, type FC } from 'react';

import { useUpSm } from '@/shared/hooks';

import { SearchInput } from '../SearchInput';
import { MainMenu } from '../MainMenu';

import styles from './PageLayout.module.css';

type PageLayoutProps = {
  className?: string;
  bottomToolbar?: ReactNode;
  children: ReactNode;
  asideContent?: ReactNode;
};

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
  children,
  asideContent,
}) => {
  const isUpSm = useUpSm();
  return (
    <Stack direction="column" gap={2}>
      <AppBar position="sticky" className={className}>
        <Toolbar className={styles.toolbar}>
          <MainMenu
            className={styles.mainMenu}
            label={mainMenuLabel}
            menu={menu}
          />
          <SearchInput className={styles.searchInput} />
        </Toolbar>
        {bottomToolbar}
      </AppBar>
      <Grid container direction="row" gap={2}>
        <Grid item flexGrow={1}>
          {children}
        </Grid>
        {isUpSm && (
          <Grid item className={styles.asideContent}>
            {asideContent}
          </Grid>
        )}
      </Grid>
    </Stack>
  );
};
