import { RuleSetRule } from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BuildOptions } from './types/config';

export function buildLoaders({ isDev }: BuildOptions): RuleSetRule[] {
  const typescriptLoader = {
    test: /\.tsx?$/,
    use: [
      {
        loader: 'ts-loader',
      },
    ],
    exclude: /node_modules/,
  };

  const cssLoaderWithModules = {
    loader: 'css-loader',
    options: {
      modules: {
        auto: (resourcePath: string) => Boolean(resourcePath.includes('.module.')),
        localIdentName: isDev ? '[path][name]__[local]--[hash:base64:8]' : '[hash:base64:8]',
      },
    },
  };

  const styleLoaders = {
    test: /\.s[ac]ss$/i,
    use: [isDev ? 'style-loader' : MiniCssExtractPlugin.loader, cssLoaderWithModules, 'sass-loader'],
  };

  return [typescriptLoader, styleLoaders];
}
