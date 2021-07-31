import { registerApplication, start } from 'single-spa';
import { constructApplications, constructLayoutEngine, constructRoutes } from 'single-spa-layout';
import microfrontendLayout from './microfrontend-layout.html';

// Construct microfrontend routes with single spa layout
const routes = constructRoutes(microfrontendLayout);

// Importing application with System JS and construct app
const applications = constructApplications({
  routes,
  loadApp({ name }) {
    return System.import(name);
  }
});

// Registered applications and routes and start the application
const layoutEngine = constructLayoutEngine({ routes, applications });

applications.forEach((app) => registerApplication({ ...app, customProps: null }));
layoutEngine.activate();

start();
