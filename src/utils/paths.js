export const base = import.meta.env.BASE_URL.replace(/\/$/, '');
export const getUrl = (path) => path === '/' ? (base || '/') : `${base}${path}`;
