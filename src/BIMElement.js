const spinalCore = require("spinal-core-connectorjs");
const globalType = typeof window === "undefined" ? global : window;
const BIMForge = require("spinal-models-bim_forge");

import {
  Utilities
} from "../Utilities.js"

export default class BIMElement extends BIMForge.SpinalBIMObjectForge {
  constructor(_id, _name, _type, name = "BIMElement") {
    super(_id, _name, 0);
    if (FileSystem._sig_server) {
      this.add_attr({
        type: _type || "BimObject",
        externalId: ""
      });
    }

  }

  initExternalId() {
    Utilities.getExternalId(this.id.get()).then(_externalId => {
      this.externalId.set(_externalId)
    })
  }

  async initExternalIdAsync() {
    let _externalId = await Utilities.getExternalId(this.id.get())
    this.externalId.set(_externalId)
  }



  setName(_name) {
    this.name.set(_name)
  }

  toIfc() {
    return `${this.constructor.name}(${this.id.get()},${this.name.get()});`
  }

}

spinalCore.register_models([BIMElement])