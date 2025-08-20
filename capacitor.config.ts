import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.dmt.investment',
  appName: 'Investment',
  webDir: 'dist',
  plugins: {
    LiveUpdates: {
      appId: 'e05be400',
      channel: 'production',
      autoUpdateMethod: 'background',
      maxVersions: 2
    }
  }
};

export default config;
