import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.Edxly_FutureLearning',
  appName: 'Edxly_FutureLearning',
  webDir: 'dist',
  server: {
    androidScheme: 'https' // Ensure this matches your error screenshot
  }
};

export default config;