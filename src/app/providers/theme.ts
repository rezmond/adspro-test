import { experimental_extendTheme as extendTheme } from '@mui/material';

export type Theme = ReturnType<typeof extendTheme>;

export const theme = extendTheme();
