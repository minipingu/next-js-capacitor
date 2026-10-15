import type { CapacitorConfig } from '@capacitor/cli';
import { localhostIp } from './localhost_ip';

const config: CapacitorConfig = {
  appId: 'com.next_js_capacitor',
  appName: 'Next JS Capacitor',
  webDir: 'out',
  server: {
    url: localhostIp,
    cleartext: true,
  },
  plugins: {
    StatusBar: {
      overlaysWebView: true,
    },
  },
};

export default config;
