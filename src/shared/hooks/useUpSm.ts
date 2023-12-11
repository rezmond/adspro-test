import { useMediaQuery, useTheme } from '@mui/material';

export const useUpSm = () => {
  const theme = useTheme();
  return useMediaQuery(theme.breakpoints.up('sm'));
};
