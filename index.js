const spinalCore = require("spinal-core-connectorjs");
const globalType = typeof window === "undefined" ? global : window;



import AbstractElement from './src/AbstractElement';
import BIMElement from './src/BIMElement';

export {
  AbstractElement,
  BIMElement
}