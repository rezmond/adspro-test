import { BuildOptions } from './types';

import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';

export const buildDevServer = (
  options: BuildOptions,
): DevServerConfiguration => ({
  port: options.port ?? 3000,
  open: true,
  historyApiFallback: true,
  hot: true,
});
