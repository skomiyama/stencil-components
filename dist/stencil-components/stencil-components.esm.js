import { a as patchBrowser, b as globals, c as bootstrapLazy } from './stencil-components-ea49fb3f.js';

patchBrowser().then(resourcesUrl => {
  globals();
  return bootstrapLazy([["my-component",[[1,"my-component",{"first":[1],"middle":[1],"last":[1]}]]],["timer-component",[[1,"timer-component",{"timeLeft":[32]}]]]], { resourcesUrl });
});
