import { headers } from 'next/headers';
import { UAParser } from 'ua-parser-js';

/**
 * check mobile device in server
 */
export const isMobileDevice = () => {
  if (typeof process === 'undefined') {
    throw new Error('[Server method] you are importing a server-only module outside of server');
  }
  if(typeof window === 'undefined') {
    const { get } = headers();
    const ua = get('user-agent');
    // console.debug(ua);
    const device = new UAParser(ua || '').getDevice();
    return device.type === 'mobile';
  }else{
    const device = new UAParser(global.navigator.userAgent || '').getDevice();
    return device.type === 'mobile';
  }
  
};

/**
 * check mobile device in server
 */
export const gerServerDeviceInfo = () => {
  if (typeof process === 'undefined') {
    throw new Error('[Server method] you are importing a server-only module outside of server');
  }

  const { get } = headers();
  const ua = get('user-agent');

  // console.debug(ua);
  const parser = new UAParser(ua || '');

  return {
    browser: parser.getBrowser().name,
    isMobile: isMobileDevice(),
    os: parser.getOS().name,
  };
};
