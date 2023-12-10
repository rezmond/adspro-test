import {
  Experimental_CssVarsProvider,
  StyledEngineProvider,
} from '@mui/material/styles';
import { type ComponentProps, FC } from 'react';
import { GlobalStyles } from '@mui/material';

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
      <Experimental_CssVarsProvider theme={theme} {...props}>
        <GlobalStyles
          styles={{
            ':root': {
              '--spacing': theme.spacing(),
              '--border-radius': theme.shape.borderRadius,
            },
          }}
        />
        {children}
      </Experimental_CssVarsProvider>
    </StyledEngineProvider>
  );
};
