// const startsWith = (pathname) => (location) => location.pathname.startsWith(pathname);
const alwaysShow = () => true;

// Object which contains when to render each microfrontend
export const activeMfeFunctions = {
  '@single-spa/welcome': alwaysShow
};
