import { AppBar, Box, Divider, Stack, Toolbar } from '@mui/material';
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
  { url: '/profile', label: 'Profile' },
  { url: '/basket', label: 'Basket' },
  { url: '/settings', label: 'Settings' },
  { url: '/logout', label: 'Log out' },
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
    <Stack direction="column" gap={2} className={styles.pageLayout}>
      <AppBar position="sticky" className={className}>
        <Toolbar className={styles.toolbar}>
          <SearchInput className={styles.searchInput} />
          <MainMenu
            className={styles.mainMenu}
            label={mainMenuLabel}
            menu={menu}
          />
        </Toolbar>
        {bottomToolbar}
      </AppBar>
      <Box className={styles.contentWrapper}>
        <Box component="main" className={styles.mainContent}>
          {children}
        </Box>
        {isUpSm && asideContent && (
          <>
            <Divider orientation="vertical" flexItem />
            <Box component="aside" className={styles.asideContent}>
              {asideContent}
            </Box>
          </>
        )}
      </Box>
    </Stack>
  );
};
