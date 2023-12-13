import { type ReactNode, type FC } from 'react';

import styles from './VisuallyHidden.module.css';

type VisuallyHiddenProps = {
  children: ReactNode;
};

export const VisuallyHidden: FC<VisuallyHiddenProps> = ({ children }) => (
  <div className={styles.visuallyHidden}>{children}</div>
);
