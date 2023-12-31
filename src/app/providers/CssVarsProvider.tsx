import {
  Experimental_CssVarsProvider,
  StyledEngineProvider,
} from '@mui/material/styles';
import { type ComponentProps, FC } from 'react';
import { CssBaseline, GlobalStyles } from '@mui/material';

import type { Theme } from './theme';

type OriginalCssVarsProviderProps = ComponentProps<
  typeof Experimental_CssVarsProvider
>;
type CssVarsProviderProps = OriginalCssVarsProviderProps & {
  theme: Theme;
};

export const CssVarsProvider: FC<CssVarsProviderProps> = ({
  children,
  theme,
  ...props
}) => {
  return (
    <StyledEngineProvider injectFirst>
      <CssBaseline />
      <Experimental_CssVarsProvider theme={theme} {...props}>
        <GlobalStyles
          styles={{
            ':root': {
              '--spacing': theme.spacing(),
            },
          }}
        />
        {children}
      </Experimental_CssVarsProvider>
    </StyledEngineProvider>
  );
};
