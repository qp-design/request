export function getKey() {
  try {
    return process.env.REACT_APP_SESSION_KEY || '';
  } catch (err) {
    return 'saas-token';
  }
}

export function getTokenValueKey() {
  try {
    return process.env.REACT_APP_SESSION_VALUE_KEY || '';
  } catch (err) {
    return 'saas-token';
  }
}

export function getBaseUrl() {
  try {
    return process.env.REACT_APP_BASE_URL || '';
  } catch (err) {
    return '';
  }
}

export function getH5Platform() {
  try {
    return process.env.REACT_APP_PLAT_FORM || '';
  } catch (err) {
    return '';
  }
}

export function isMobileTerminal() {
  try {
    return process.env.NODE_PLATFORM === 'MOBILE_TERMINAL';
  } catch (err) {
    return '';
  }
}
