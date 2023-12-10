import { FC } from 'react';

import styles from './App.module.css';

type AppProps = {};

export const App: FC<AppProps> = ({}) => (
  <div className={styles.root}>Test</div>
);