import path from 'path';

import { Configuration, ProgressPlugin } from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';

import type { BuildOptions } from './types';

export const buildPlugins = ({
  isDev,
  paths,
}: BuildOptions): Configuration['plugins'] => {
  const plugins: Configuration['plugins'] = [
    new HtmlWebpackPlugin({
      template: paths.html,
      favicon: path.resolve(paths.public, 'favicon.ico'),
      publicPath: '/',
    }),
  ];

  if (isDev) {
    plugins.push(new ProgressPlugin());
    plugins.push(new ReactRefreshWebpackPlugin());
  } else {
    plugins.push(
      new MiniCssExtractPlugin({
        filename: 'css/[name].[contenthash:8].css',
        chunkFilename: 'css/[name].[contenthash:8].css',
      }),
    );
  }

  return plugins;
};
