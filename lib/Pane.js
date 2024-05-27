"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Pane = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _static = _interopRequireDefault(require("inline-style-prefixer/static"));
var _SplitPane = require("./SplitPane");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function PaneStyle(_ref) {
  var split = _ref.split,
    initialSize = _ref.initialSize,
    size = _ref.size,
    minSize = _ref.minSize,
    maxSize = _ref.maxSize,
    resizersSize = _ref.resizersSize;
  var value = size || initialSize;
  var vertical = split === 'vertical';
  var styleProp = {
    minSize: vertical ? 'minWidth' : 'minHeight',
    maxSize: vertical ? 'maxWidth' : 'maxHeight',
    size: vertical ? 'width' : 'height'
  };
  var style = {
    display: 'flex',
    outline: 'none'
  };
  style[styleProp.minSize] = (0, _SplitPane.convertSizeToCssValue)(minSize, resizersSize);
  style[styleProp.maxSize] = (0, _SplitPane.convertSizeToCssValue)(maxSize, resizersSize);
  switch ((0, _SplitPane.getUnit)(value)) {
    case 'ratio':
      style.flex = value;
      break;
    case '%':
    case 'px':
      style.flexGrow = 0;
      style[styleProp.size] = (0, _SplitPane.convertSizeToCssValue)(value, resizersSize);
      break;
  }
  return style;
}
var Pane = exports.Pane = /*#__PURE__*/function (_PureComponent) {
  function Pane() {
    var _this;
    _classCallCheck(this, Pane);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _callSuper(this, Pane, [].concat(args));
    _defineProperty(_this, "setRef", function (element) {
      _this.props.innerRef(_this.props.index, element);
    });
    return _this;
  }
  _inherits(Pane, _PureComponent);
  return _createClass(Pane, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
        children = _this$props.children,
        className = _this$props.className;
      var prefixedStyle = (0, _static["default"])(PaneStyle(this.props));
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: className,
        style: prefixedStyle,
        ref: this.setRef
      }, children);
    }
  }]);
}(_react.PureComponent);
Pane.propTypes = {
  children: _propTypes["default"].node,
  innerRef: _propTypes["default"].func,
  index: _propTypes["default"].number,
  className: _propTypes["default"].string,
  initialSize: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
  minSize: _propTypes["default"].string,
  maxSize: _propTypes["default"].string
};
Pane.defaultProps = {
  initialSize: '1',
  split: 'vertical',
  minSize: '0',
  maxSize: '100%'
};