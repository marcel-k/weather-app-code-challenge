interface AppConfig {
  apiKey: string;
  useMockData: boolean;
  weatherApiUrl: string;
  environment: 'development' | 'production';
}

// Make appConfig object globally available in TypeScript
declare const appConfig: AppConfig;