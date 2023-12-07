"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * Based of https://github.com/axios/axios
 * Copyright (c) 2014-present Matt Zabriskie
 */
var CancelToken =
/*#__PURE__*/
function () {
  _createClass(CancelToken, null, [{
    key: "source",
    value: function source() {
      var cancel;
      var token = new CancelToken(function (c) {
        return cancel = c;
      });
      return {
        cancel: cancel,
        token: token
      };
    }
  }]);

  function CancelToken(executor) {
    _classCallCheck(this, CancelToken);

    executor(function cancel(message) {
      return;
    });
  }

  _createClass(CancelToken, [{
    key: "throwIfRequested",
    value: function throwIfRequested() {
      return;
    }
  }]);

  return CancelToken;
}();

exports["default"] = CancelToken;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2xpYi9jYW5jZWwvQ2FuY2VsVG9rZW4udHMiXSwibmFtZXMiOlsiQ2FuY2VsVG9rZW4iLCJjYW5jZWwiLCJ0b2tlbiIsImMiLCJleGVjdXRvciIsIm1lc3NhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFJQTs7OztJQUlxQkEsVzs7Ozs7NkJBQ0k7QUFDckIsVUFBSUMsTUFBSjtBQUNBLFVBQU1DLEtBQUssR0FBRyxJQUFJRixXQUFKLENBQWdCLFVBQUNHLENBQUQ7QUFBQSxlQUFRRixNQUFNLEdBQUdFLENBQWpCO0FBQUEsT0FBaEIsQ0FBZDtBQUVBLGFBQU87QUFDTEYsUUFBQUEsTUFBTSxFQUFOQSxNQURLO0FBRUxDLFFBQUFBLEtBQUssRUFBTEE7QUFGSyxPQUFQO0FBSUQ7OztBQUlELHVCQUFZRSxRQUFaLEVBQWtEO0FBQUE7O0FBQ2hEQSxJQUFBQSxRQUFRLENBQUMsU0FBU0gsTUFBVCxDQUFnQkksT0FBaEIsRUFBeUI7QUFDaEM7QUFDRCxLQUZPLENBQVI7QUFHRDs7Ozt1Q0FFeUI7QUFDeEI7QUFDRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENhbmNlbCB9IGZyb20gXCIuL0NhbmNlbFwiO1xuXG50eXBlIENhbmNlbGVyID0gKG1lc3NhZ2U/OiBzdHJpbmcpID0+IHZvaWQ7XG5cbi8qKlxuICogQmFzZWQgb2YgaHR0cHM6Ly9naXRodWIuY29tL2F4aW9zL2F4aW9zXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQtcHJlc2VudCBNYXR0IFphYnJpc2tpZVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYW5jZWxUb2tlbiB7XG4gIHB1YmxpYyBzdGF0aWMgc291cmNlKCkge1xuICAgIGxldCBjYW5jZWw6IENhbmNlbGVyO1xuICAgIGNvbnN0IHRva2VuID0gbmV3IENhbmNlbFRva2VuKChjKSA9PiAoY2FuY2VsID0gYykpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIGNhbmNlbCxcbiAgICAgIHRva2VuLFxuICAgIH07XG4gIH1cblxuICBwdWJsaWMgcHJvbWlzZTogUHJvbWlzZTxDYW5jZWw+O1xuXG4gIGNvbnN0cnVjdG9yKGV4ZWN1dG9yOiAoY2FuY2VsOiBDYW5jZWxlcikgPT4gdm9pZCkge1xuICAgIGV4ZWN1dG9yKGZ1bmN0aW9uIGNhbmNlbChtZXNzYWdlKSB7XG4gICAgICByZXR1cm47XG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgdGhyb3dJZlJlcXVlc3RlZCgpIHtcbiAgICByZXR1cm47XG4gIH1cbn1cbiJdfQ==