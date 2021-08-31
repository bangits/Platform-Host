import { registerApplication, start } from 'single-spa';
import { activeMfeFunctions } from './active-functions';

const microfrontends = Object.keys(activeMfeFunctions);

microfrontends.forEach((name) => {
  // Creating or getting the dom element for rendering application in it, which indicated in mfe

  const domElementGetterId = `application:${name}`;

  let elementForMfe = document.getElementById(domElementGetterId);

  if (!elementForMfe) {
    const microFrontendElement = document.createElement('div');
    microFrontendElement.setAttribute('id', domElementGetterId);

    elementForMfe = microFrontendElement;

    document.body.appendChild(elementForMfe);
  }

  registerApplication({
    name,
    app: () => System.import(name),
    activeWhen: activeMfeFunctions[name]
  });
});

System.import('@atom/design-system').then(() => start());
