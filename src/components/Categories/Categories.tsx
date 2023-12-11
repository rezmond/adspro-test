import { Button, Menu, MenuItem } from '@mui/material';
import { useState, type FC, useCallback, type MouseEvent } from 'react';

import { useCategories } from './categories';
import { CategoriesButtonContent } from './components/CategoriesButtonContent';

type CategoriesProps = { className?: string };

const buttonId = 'category-toggler-id';
const menuId = 'category-menu-id';
const menuListProps = {
  'aria-labelledby': buttonId,
};

export const Categories: FC<CategoriesProps> = ({ className }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLButtonElement>(null);
  const categories = useCategories();

  const handleOpenClick = useCallback((e: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(e.currentTarget);
  }, []);

  const handleClose = useCallback(() => {
    setAnchorEl(null);
  }, []);

  const handleMenuItemClick = (_: unknown, index: number) => {
    categories.setActive(categories.available.data[index]);
    handleClose();
  };

  const isOpen = Boolean(anchorEl);

  return (
    <>
      <Button
        id={buttonId}
        type="button"
        color="inherit"
        title={
          categories.available.isLoading
            ? 'Категории загружаются ...'
            : 'Выбрать категорию'
        }
        className={className}
        aria-controls={isOpen ? menuId : undefined}
        aria-haspopup="true"
        aria-expanded={isOpen ? 'true' : undefined}
        onClick={handleOpenClick}
      >
        <CategoriesButtonContent categories={categories} />
      </Button>
      <Menu
        id={menuId}
        anchorEl={anchorEl}
        open={isOpen}
        onClose={handleClose}
        MenuListProps={menuListProps}
      >
        {categories.available.data?.map((category, index) => (
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
