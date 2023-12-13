import { type FC } from 'react';
import { Typography } from '@mui/material';

type ErrorMessageProps = { title: string; message: string };

export const ErrorMessage: FC<ErrorMessageProps> = ({ title, message }) => (
  <Typography color="error.main">
    <p>{title}</p>
    <p>Error: {message}</p>
  </Typography>
);
