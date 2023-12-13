import { type FC, ReactNode } from 'react';
import { Toolbar } from '@mui/material';
import classNames from 'classnames';

import styles from './BottomToolbar.module.css';

type BottomToolbarProps = { className?: string; children?: ReactNode };

export const BottomToolbar: FC<BottomToolbarProps> = ({
  className,
  children,
}) => {
  return (
    <Toolbar className={classNames(styles.bottomToolbar, className)}>
      {children}
    </Toolbar>
  );
};
