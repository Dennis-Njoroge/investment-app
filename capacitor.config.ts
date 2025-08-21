import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.dmt.investment',
  appName: 'Investment',
  webDir: 'dist',
  plugins: {
    LiveUpdates: {
      appId: 'ec1ec5f6',
      channel: 'production',
      autoUpdateMethod: 'background',
      maxVersions: 2
    }
  }
};

export default config;
