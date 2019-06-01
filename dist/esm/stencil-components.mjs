import { a as patchBrowser, b as bootstrapLazy } from './stencil-components-4a70dd52.js';

patchBrowser().then(resourcesUrl => {
  return bootstrapLazy([["my-component_2",[[1,"my-component",{"first":[1],"middle":[1],"last":[1]}],[1,"timer-component",{"timeLeft":[32]}]]]], { resourcesUrl });
});
