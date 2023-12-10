import { FC, useState } from 'react';
import { Button, Drawer, IconButton, List, ListItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

import styles from './MainMenu.module.css';

const drawerClasses = {
  paper: styles.drawerPaper,
};

type Url = string;
type Label = string;

type MenuItem = {
  url: Url;
  label: Label;
};

type MainMenuProps = {
  label: string;
  menu: MenuItem[];
};

export const MainMenu: FC<MainMenuProps> = ({ label, menu }) => {
  const [isOpened, open] = useState(false);

  const toggleDrawer = (value: boolean) => () => {
    open(value);
  };

  const list = (
    <nav aria-label={label}>
      <List>
        {menu.map((item) => (
          <ListItem disablePadding key={item.url}>
            <Button
              className={styles.menuItemButton}
              fullWidth
              component={Link}
              to={item.url}
            >
              {item.label}
            </Button>
          </ListItem>
        ))}
      </List>
    </nav>
  );

  return (
    <>
      <IconButton
        className={styles.menuButton}
        size="large"
        edge="end"
        color="inherit"
        aria-label="menu"
        onClick={toggleDrawer(true)}
      >
        <MenuIcon />
      </IconButton>
      <Drawer
        classes={drawerClasses}
        anchor="right"
        open={isOpened}
        onClose={toggleDrawer(false)}
      >
        {list}
      </Drawer>
    </>
  );
};
