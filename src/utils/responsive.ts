import { UAParser } from 'ua-parser-js';

/**
 * check mobile device in server
 */
export const isMobileDevice = () => {

  const device = new UAParser(global.navigator.userAgent || '').getDevice();
  return device.type === 'mobile';
};

