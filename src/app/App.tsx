import { type FC } from 'react';
import { Stack } from '@mui/material';

import styles from './App.module.css';

export const App: FC = () => (
  <Stack direction="row" gap={1} className={styles.root}>
    <span>Test</span>
    <span>Page</span>
  </Stack>
);
