import { RouterProvider } from 'react-router-dom';
import { SupportedColorScheme, useMediaQuery } from '@mui/material';
import { useCallback, useState } from 'react';

import { ToggleColorModeContext, ColorModeContext } from '@/shared/contexts';

import { router } from './router';
import { CssVarsProvider } from './providers/CssVarsProvider';
import { theme } from './providers/theme';

export const App = () => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const [mode, setMode] = useState<SupportedColorScheme>(
    prefersDarkMode ? 'dark' : 'light',
  );

  const colorMode = useCallback(() => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  }, []);

  return (
    <div data-mui-color-scheme={mode}>
      <CssVarsProvider theme={theme}>
        <ToggleColorModeContext.Provider value={colorMode}>
          <ColorModeContext.Provider value={mode}>
            <RouterProvider router={router} />
          </ColorModeContext.Provider>
        </ToggleColorModeContext.Provider>
      </CssVarsProvider>
    </div>
  );
};
