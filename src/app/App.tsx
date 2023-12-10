import { RouterProvider } from 'react-router-dom';
import { SupportedColorScheme } from '@mui/material';

import { router } from './router';
import { CssVarsProvider } from './providers/CssVarsProvider';
import { theme } from './providers/theme';

const schemeColor: SupportedColorScheme = 'light';

export const App = () => (
  <div data-mui-color-scheme={schemeColor}>
    <CssVarsProvider theme={theme}>
      <RouterProvider router={router} />
    </CssVarsProvider>
  </div>
);
