import { FC, useState } from 'react';
import {
  Button,
  Drawer,
  IconButton,
  List,
  ListItem,
  Stack,
  useMediaQuery,
  useTheme,
} from '@mui/material';
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
  const theme = useTheme();
  const isUpSm = useMediaQuery(theme.breakpoints.up('sm'));

  const toggleDrawer = (value: boolean) => () => {
    open(value);
  };

  if (isUpSm) {
    return (
      <nav aria-label={label}>
        <Stack component={List} direction="row">
          {menu.map((item) => (
            <ListItem className={styles.menuItemButtonListItem} key={item.url}>
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
