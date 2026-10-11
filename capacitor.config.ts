import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.next_js_capacitor',
  appName: 'Next JS Capacitor',
  webDir: 'out',
  server: {
    url: 'http://192.168.1.250:3000',
    cleartext: true,
  },
  plugins: {
    StatusBar: {
      overlaysWebView: true,
    },
  },
};

export default config;
