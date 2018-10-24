"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Utilities = require("../Utilities.js");

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

const spinalCore = require("spinal-core-connectorjs");
const globalType = typeof window === "undefined" ? global : window;
const BIMForge = require("spinal-models-bim_forge");

class BIMElement extends BIMForge.SpinalBIMObjectForge {
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
    _Utilities.Utilities.getExternalId(this.id.get()).then(_externalId => {
      this.externalId.set(_externalId);
    });
  }

  initExternalIdAsync() {
    var _this = this;

    return _asyncToGenerator(function* () {
      let _externalId = yield _Utilities.Utilities.getExternalId(_this.id.get());
      _this.externalId.set(_externalId);
    })();
  }

  setName(_name) {
    this.name.set(_name);
  }

  toIfc() {
    return `${this.constructor.name}(${this.id.get()},${this.name.get()});`;
  }

}

exports.default = BIMElement;
spinalCore.register_models([BIMElement]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9CSU1FbGVtZW50LmpzIl0sIm5hbWVzIjpbInNwaW5hbENvcmUiLCJyZXF1aXJlIiwiZ2xvYmFsVHlwZSIsIndpbmRvdyIsImdsb2JhbCIsIkJJTUZvcmdlIiwiQklNRWxlbWVudCIsIlNwaW5hbEJJTU9iamVjdEZvcmdlIiwiY29uc3RydWN0b3IiLCJfaWQiLCJfbmFtZSIsIl90eXBlIiwibmFtZSIsIkZpbGVTeXN0ZW0iLCJfc2lnX3NlcnZlciIsImFkZF9hdHRyIiwidHlwZSIsImV4dGVybmFsSWQiLCJpbml0RXh0ZXJuYWxJZCIsIlV0aWxpdGllcyIsImdldEV4dGVybmFsSWQiLCJpZCIsImdldCIsInRoZW4iLCJfZXh0ZXJuYWxJZCIsInNldCIsImluaXRFeHRlcm5hbElkQXN5bmMiLCJzZXROYW1lIiwidG9JZmMiLCJyZWdpc3Rlcl9tb2RlbHMiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUlBOzs7O0FBSkEsTUFBTUEsYUFBYUMsUUFBUSx5QkFBUixDQUFuQjtBQUNBLE1BQU1DLGFBQWEsT0FBT0MsTUFBUCxLQUFrQixXQUFsQixHQUFnQ0MsTUFBaEMsR0FBeUNELE1BQTVEO0FBQ0EsTUFBTUUsV0FBV0osUUFBUSx5QkFBUixDQUFqQjs7QUFNZSxNQUFNSyxVQUFOLFNBQXlCRCxTQUFTRSxvQkFBbEMsQ0FBdUQ7QUFDcEVDLGNBQVlDLEdBQVosRUFBaUJDLEtBQWpCLEVBQXdCQyxLQUF4QixFQUErQkMsT0FBTyxZQUF0QyxFQUFvRDtBQUNsRCxVQUFNSCxHQUFOLEVBQVdDLEtBQVgsRUFBa0IsQ0FBbEI7QUFDQSxRQUFJRyxXQUFXQyxXQUFmLEVBQTRCO0FBQzFCLFdBQUtDLFFBQUwsQ0FBYztBQUNaQyxjQUFNTCxTQUFTLFdBREg7QUFFWk0sb0JBQVk7QUFGQSxPQUFkO0FBSUQ7QUFFRjs7QUFFREMsbUJBQWlCO0FBQ2ZDLHlCQUFVQyxhQUFWLENBQXdCLEtBQUtDLEVBQUwsQ0FBUUMsR0FBUixFQUF4QixFQUF1Q0MsSUFBdkMsQ0FBNENDLGVBQWU7QUFDekQsV0FBS1AsVUFBTCxDQUFnQlEsR0FBaEIsQ0FBb0JELFdBQXBCO0FBQ0QsS0FGRDtBQUdEOztBQUVLRSxxQkFBTixHQUE0QjtBQUFBOztBQUFBO0FBQzFCLFVBQUlGLGNBQWMsTUFBTUwscUJBQVVDLGFBQVYsQ0FBd0IsTUFBS0MsRUFBTCxDQUFRQyxHQUFSLEVBQXhCLENBQXhCO0FBQ0EsWUFBS0wsVUFBTCxDQUFnQlEsR0FBaEIsQ0FBb0JELFdBQXBCO0FBRjBCO0FBRzNCOztBQUlERyxVQUFRakIsS0FBUixFQUFlO0FBQ2IsU0FBS0UsSUFBTCxDQUFVYSxHQUFWLENBQWNmLEtBQWQ7QUFDRDs7QUFFRGtCLFVBQVE7QUFDTixXQUFRLEdBQUUsS0FBS3BCLFdBQUwsQ0FBaUJJLElBQUssSUFBRyxLQUFLUyxFQUFMLENBQVFDLEdBQVIsRUFBYyxJQUFHLEtBQUtWLElBQUwsQ0FBVVUsR0FBVixFQUFnQixJQUFwRTtBQUNEOztBQS9CbUU7O2tCQUFqRGhCLFU7QUFtQ3JCTixXQUFXNkIsZUFBWCxDQUEyQixDQUFDdkIsVUFBRCxDQUEzQiIsImZpbGUiOiJCSU1FbGVtZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qgc3BpbmFsQ29yZSA9IHJlcXVpcmUoXCJzcGluYWwtY29yZS1jb25uZWN0b3Jqc1wiKTtcbmNvbnN0IGdsb2JhbFR5cGUgPSB0eXBlb2Ygd2luZG93ID09PSBcInVuZGVmaW5lZFwiID8gZ2xvYmFsIDogd2luZG93O1xuY29uc3QgQklNRm9yZ2UgPSByZXF1aXJlKFwic3BpbmFsLW1vZGVscy1iaW1fZm9yZ2VcIik7XG5cbmltcG9ydCB7XG4gIFV0aWxpdGllc1xufSBmcm9tIFwiLi4vVXRpbGl0aWVzLmpzXCJcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQklNRWxlbWVudCBleHRlbmRzIEJJTUZvcmdlLlNwaW5hbEJJTU9iamVjdEZvcmdlIHtcbiAgY29uc3RydWN0b3IoX2lkLCBfbmFtZSwgX3R5cGUsIG5hbWUgPSBcIkJJTUVsZW1lbnRcIikge1xuICAgIHN1cGVyKF9pZCwgX25hbWUsIDApO1xuICAgIGlmIChGaWxlU3lzdGVtLl9zaWdfc2VydmVyKSB7XG4gICAgICB0aGlzLmFkZF9hdHRyKHtcbiAgICAgICAgdHlwZTogX3R5cGUgfHwgXCJCaW1PYmplY3RcIixcbiAgICAgICAgZXh0ZXJuYWxJZDogXCJcIlxuICAgICAgfSk7XG4gICAgfVxuXG4gIH1cblxuICBpbml0RXh0ZXJuYWxJZCgpIHtcbiAgICBVdGlsaXRpZXMuZ2V0RXh0ZXJuYWxJZCh0aGlzLmlkLmdldCgpKS50aGVuKF9leHRlcm5hbElkID0+IHtcbiAgICAgIHRoaXMuZXh0ZXJuYWxJZC5zZXQoX2V4dGVybmFsSWQpXG4gICAgfSlcbiAgfVxuXG4gIGFzeW5jIGluaXRFeHRlcm5hbElkQXN5bmMoKSB7XG4gICAgbGV0IF9leHRlcm5hbElkID0gYXdhaXQgVXRpbGl0aWVzLmdldEV4dGVybmFsSWQodGhpcy5pZC5nZXQoKSlcbiAgICB0aGlzLmV4dGVybmFsSWQuc2V0KF9leHRlcm5hbElkKVxuICB9XG5cblxuXG4gIHNldE5hbWUoX25hbWUpIHtcbiAgICB0aGlzLm5hbWUuc2V0KF9uYW1lKVxuICB9XG5cbiAgdG9JZmMoKSB7XG4gICAgcmV0dXJuIGAke3RoaXMuY29uc3RydWN0b3IubmFtZX0oJHt0aGlzLmlkLmdldCgpfSwke3RoaXMubmFtZS5nZXQoKX0pO2BcbiAgfVxuXG59XG5cbnNwaW5hbENvcmUucmVnaXN0ZXJfbW9kZWxzKFtCSU1FbGVtZW50XSkiXX0=