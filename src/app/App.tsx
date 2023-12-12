import { RouterProvider } from 'react-router-dom';
import { SupportedColorScheme, useMediaQuery } from '@mui/material';
import { useCallback, useEffect, useState } from 'react';

import { ToggleColorModeContext, ColorModeContext } from '@/shared/contexts';

import { router } from './router';
import { CssVarsProvider } from './providers/CssVarsProvider';
import { theme } from './providers/theme';

import './styles.module.css';

export const App = () => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const [mode, setMode] = useState<SupportedColorScheme>(
    prefersDarkMode ? 'dark' : 'light',
  );

  const colorMode = useCallback(() => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-mui-color-scheme', mode);
  }, [mode]);

  return (
    <CssVarsProvider theme={theme}>
      <ToggleColorModeContext.Provider value={colorMode}>
        <ColorModeContext.Provider value={mode}>
          <RouterProvider router={router} />
        </ColorModeContext.Provider>
      </ToggleColorModeContext.Provider>
    </CssVarsProvider>
  );
};
