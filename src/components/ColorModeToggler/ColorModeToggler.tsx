import { IconButton, useTheme } from '@mui/material';
import { useContext, type FC } from 'react';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

import { ColorModeContext, ToggleColorModeContext } from '@/shared/contexts';

export const ColorModeToggler: FC = () => {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);
  const toggleColorMode = useContext(ToggleColorModeContext);

  return (
    <IconButton
      title={`Toggle "${colorMode}" color mode`}
      onClick={toggleColorMode}
      color="inherit"
    >
      {theme.palette.mode === 'dark' ? (
        <Brightness7Icon />
      ) : (
        <Brightness4Icon />
      )}
    </IconButton>
  );
};
