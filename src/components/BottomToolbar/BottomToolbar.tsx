import { FC, ReactNode, useContext } from 'react';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { Box, IconButton, Toolbar, useTheme } from '@mui/material';
import classNames from 'classnames';

import { ColorModeContext, ToggleColorModeContext } from '@/shared/contexts';

import { Categories } from '../Categories';

import styles from './BottomToolbar.module.css';

type BottomToolbarProps = { className?: string; children?: ReactNode };

export const BottomToolbar: FC<BottomToolbarProps> = ({
  className,
  children,
}) => {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);
  const toggleColorMode = useContext(ToggleColorModeContext);
  return (
    <Toolbar className={classNames(styles.bottomToolbar, className)}>
      <Box className={styles.categoriesWrapper}>
        <Categories />
      </Box>
      <IconButton
        aria-label={`Toggle "${colorMode}" color mode`}
        onClick={toggleColorMode}
        color="inherit"
      >
        {theme.palette.mode === 'dark' ? (
          <Brightness7Icon />
        ) : (
          <Brightness4Icon />
        )}
      </IconButton>
      {children}
    </Toolbar>
  );
};
