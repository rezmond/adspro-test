import {
  Button,
  CircularProgress,
  Menu,
  MenuItem,
  useTheme,
} from '@mui/material';
import { useState, type FC, useCallback, type MouseEvent } from 'react';

import { useCategories } from './categories';

type CategoriesProps = { className?: string };

const buttonId = 'category-toggler-id';
const menuId = 'category-menu-id';
const menuListProps = {
  'aria-labelledby': buttonId,
};

export const Categories: FC<CategoriesProps> = ({ className }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLButtonElement>(null);
  const theme = useTheme();
  const categories = useCategories();

  const handleOpenClick = useCallback((e: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(e.currentTarget);
  }, []);

  const handleClose = useCallback(() => {
    setAnchorEl(null);
  }, []);

  const handleMenuItemClick = (_: unknown, index: number) => {
    categories.setActive(categories.available[index]);
    handleClose();
  };

  const isOpen = Boolean(anchorEl);
  const areCategoriesLoading = categories.available === null;

  return (
    <>
      <Button
        id={buttonId}
        type="button"
        color="inherit"
        title={
          areCategoriesLoading
            ? 'Категории загружаются ...'
            : 'Выбрать категорию'
        }
        className={className}
        aria-controls={isOpen ? menuId : undefined}
        aria-haspopup="true"
        aria-expanded={isOpen ? 'true' : undefined}
        onClick={handleOpenClick}
      >
        {areCategoriesLoading ? (
          <CircularProgress size={theme.spacing(2)} color="inherit" />
        ) : (
          categories.active
        )}
      </Button>
      <Menu
        id={menuId}
        anchorEl={anchorEl}
        open={isOpen}
        onClose={handleClose}
        MenuListProps={menuListProps}
      >
        {categories.available?.map((category, index) => (
          <MenuItem
            key={category}
            onClick={(event) => handleMenuItemClick(event, index)}
          >
            {category}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};
