'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const __chunk_1 = require('./stencil-components-738235af.js');

const defineCustomElements = (win, options) => {
  return __chunk_1.patchEsm().then(() => {
    __chunk_1.bootstrapLazy([["my-component_2.cjs",[[1,"my-component",{"first":[1],"middle":[1],"last":[1]}],[1,"timer-component",{"timeLeft":[32]}]]]], options);
  });
};

exports.defineCustomElements = defineCustomElements;
