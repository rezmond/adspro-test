import path from 'path';

import { type Configuration } from 'webpack';

import { buildLoaders } from './config/build/buildLoaders';
import { buildPlugins } from './config/build/buildPlugings';
import { buildResolvers } from './config/build/buildResolvers';
import { buildDevServer } from './config/build/buildDevServer';
import { BuildOptions, BuildPaths } from './config/build/types';

type BuildMode = 'development' | 'production';

interface EnvVariables {
  mode?: BuildMode;
  analyzer?: boolean;
  port?: number;
}

export default (env: EnvVariables): Configuration => {
  const mode = env.mode || 'development';
  const paths: BuildPaths = {
    output: path.resolve(__dirname, 'build'),
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    public: path.resolve(__dirname, 'public'),
    src: path.resolve(__dirname, 'src'),
  };

  const options: BuildOptions = {
    port: env.port ?? 3000,
    isDev: mode === 'development',
    paths,
  };

  return {
    mode,
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    output: {
      path: path.resolve(__dirname, 'build'),
      filename: '[name].[contenthash].js',
      clean: true,
    },
    plugins: buildPlugins(options),
    module: {
      rules: buildLoaders(options),
    },
    resolve: buildResolvers(options),
    devtool: options.isDev ? 'eval-cheap-module-source-map' : 'source-map',
    devServer: options.isDev ? buildDevServer(options) : undefined,
  };
};
