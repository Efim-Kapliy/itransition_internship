export type BuildMode = 'production' | 'development';

export interface BuildEnv {
  mode: BuildMode;
  port: number;
}

export interface BuildPaths {
  entry: string;
  html: string;
  build: string;
}

export interface BuildOptions {
  mode: BuildMode;
  isDev: boolean;
  paths: BuildPaths;
  port: number;
}
