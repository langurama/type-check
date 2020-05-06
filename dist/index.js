"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  array: object => Array.isArray(object),
  asyncFunction: object => Object.prototype.toString.call(object) === '[object AsyncFunction]',
  bigint: object => typeof object === 'bigint',
  boolean: object => object === true || object === false,
  date: object => object instanceof Date,
  error: object => Object.prototype.toString.call(object) === '[object Error]',
  function: object => Object.prototype.toString.call(object) === '[object Function]',
  generatorFunction: object => Object.prototype.toString.call(object) === '[object GeneratorFunction]',
  nan: object => Number.isNaN(object),
  null: object => object === null,
  number: object => typeof object === 'number' && Number.isNaN(object) === false,
  object: object => typeof object === 'object' && object !== null && Array.isArray(object) === false && !(object instanceof Date) && Object.prototype.toString.call(object) === '[object Object]',
  promise: object => Object.prototype.toString.call(object) === '[object Promise]',
  string: object => typeof object === 'string',
  symbol: object => typeof object === 'symbol',
  undefined: object => object === undefined
};
exports.default = _default;
//# sourceMappingURL=index.js.map