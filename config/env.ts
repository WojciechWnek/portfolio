export const BASE_API_DOMAIN = process.env.BASE_API_DOMAIN ?? 'localhost:1337';
const API_SCHEME = BASE_API_DOMAIN.startsWith('localhost') ? 'http' : 'https';
export const BASE_URL = `${API_SCHEME}://${BASE_API_DOMAIN}/`;
export const BASE_API_URL = BASE_URL + 'api';
