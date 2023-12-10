import { FC } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { InputBase } from '@mui/material';
import classNames from 'classnames';

import styles from './SearchInput.module.css';

type SearchInputProps = { className?: string };

export const SearchInput: FC<SearchInputProps> = ({ className }) => (
  <div className={classNames(styles.root, className)}>
    <div className={styles.iconWrapper}>
      <SearchIcon></SearchIcon>
    </div>
    <InputBase
      className={styles.input}
      placeholder="Search…"
      inputProps={{ 'aria-label': 'search' }}
    />
  </div>
);
