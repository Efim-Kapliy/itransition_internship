import  path from 'path';
import { Configuration } from 'webpack';
import { BuildEnv, BuildPaths } from './config/build/types/config';
import { buildWebpackConfig } from './config/build/buildWebpackConfig';

export default (env: BuildEnv) => {

  const mode = env.mode || "development";
  const isDev = mode === 'development';
  const PORT = env.port || 3000;

  const paths: BuildPaths = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    build: path.resolve(__dirname, 'build'),
  };

  const config: Configuration = buildWebpackConfig({
    mode,
    isDev,
    port: PORT,
    paths,
  });


  return config;
}
