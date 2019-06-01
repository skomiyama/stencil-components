import { a as patchBrowser, b as bootstrapLazy } from './stencil-components-341a1b94.js';

patchBrowser().then(resourcesUrl => {
  return bootstrapLazy([["my-component",[[1,"my-component",{"first":[1],"middle":[1],"last":[1]}]]]], { resourcesUrl });
});
