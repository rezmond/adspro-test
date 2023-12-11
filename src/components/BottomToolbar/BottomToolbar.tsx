import { FC, useContext } from 'react';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { IconButton, Toolbar, useTheme } from '@mui/material';
import classNames from 'classnames';

import { ColorModeContext, ToggleColorModeContext } from '@/shared/contexts';
import { useUpSm } from '@/shared/hooks';

import { Categories } from '../Categories';
import { FilterMobile } from '../Filters';

import styles from './BottomToolbar.module.css';

type BottomToolbarProps = { className?: string };

export const BottomToolbar: FC<BottomToolbarProps> = ({ className }) => {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);
  const isUpSm = useUpSm();
  const toggleColorMode = useContext(ToggleColorModeContext);
  return (
    <Toolbar className={classNames(styles.bottomToolbar, className)}>
      <Categories />
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
      {!isUpSm && (
        <FilterMobile
          priceConfig={{ min: 10, max: 100 }}
          onFilter={(filter) => {
            console.log('filter:', filter);
          }}
        />
      )}
    </Toolbar>
  );
};
