"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Carbonbadge = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
var Carbonbadge = exports.Carbonbadge = function Carbonbadge(_ref) {
  var darkMode = _ref.darkMode;
  (0, _react.useEffect)(function () {
    var scriptSrc = "https://unpkg.com/website-carbon-badges@^1/b.min.js";
    var script = document.createElement("script");
    script.src = scriptSrc;
    script.defer = true;
    document.body.appendChild(script);
  }, []);
  return /*#__PURE__*/_react["default"].createElement("div", {
    id: "wcb",
    className: "wcb carbonbadge".concat(darkMode ? " wcb-d" : "")
  });
};
Carbonbadge.propTypes = {
  darkMode: _propTypes["default"].bool
};
Carbonbadge.defaultProps = {
  darkMode: false
};
