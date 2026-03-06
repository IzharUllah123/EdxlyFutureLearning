import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.Edxly_FutureLearning',
  appName: 'Edxly_FutureLearning',
  webDir: 'dist',
  server: {
    url: 'https://edxly-future-learning-enzk.vercel.app',  // ← ADD THIS
    cleartext: true
  }
};

export default config;