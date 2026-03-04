// env.d.ts
declare namespace NodeJS {
  interface ProcessEnv {
    CLOSE_API_KEY: string;
    NODE_ENV: 'development' | 'production' | 'test';
  }
}