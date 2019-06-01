import { c as patchEsm, b as bootstrapLazy } from './stencil-components-341a1b94.js';

const defineCustomElements = (win, options) => {
  return patchEsm().then(() => {
    bootstrapLazy([["my-component",[[1,"my-component",{"first":[1],"middle":[1],"last":[1]}]]]], options);
  });
};

export { defineCustomElements };
