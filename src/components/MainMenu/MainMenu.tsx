import { FC, useState } from 'react';
import {
  Box,
  Button,
  Drawer,
  IconButton,
  List,
  ListItem,
  Stack,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

import { useUpSm } from '@/shared/hooks';
import { Url } from '@/shared/types';

import styles from './MainMenu.module.css';

const drawerClasses = {
  paper: styles.drawerPaper,
};

type Label = string;

type MenuItem = {
  url: Url;
  label: Label;
};

type MainMenuProps = {
  label: string;
  menu: MenuItem[];
  className?: string;
};

export const MainMenu: FC<MainMenuProps> = ({ label, menu, className }) => {
  const [isOpened, open] = useState(false);
  const isUpSm = useUpSm();

  const toggleDrawer = (value: boolean) => () => {
    open(value);
  };

  if (isUpSm) {
    return (
      <nav aria-label={label}>
        <Stack component={List} direction="row" gap={2} className={className}>
          {menu.map((item) => (
            <ListItem
              disablePadding
              className={styles.menuItemButtonListItem}
              key={item.url}
            >
              <Button fullWidth color="inherit" component={Link} to={item.url}>
                {item.label}
              </Button>
            </ListItem>
          ))}
        </Stack>
      </nav>
    );
  }

  return (
    <>
      <Box className={styles.menuButtonWrapper}>
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
      </Box>
      <Drawer
        classes={drawerClasses}
        anchor="right"
        open={isOpened}
        onClose={toggleDrawer(false)}
      >
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
      </Drawer>
    </>
  );
};
