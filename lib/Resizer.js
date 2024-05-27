"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3;
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
var Wrapper = _styledComponents["default"].div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  background: #000;\n  opacity: 0.2;\n  z-index: 1;\n  box-sizing: border-box;\n  background-clip: padding-box;\n\n  :hover {\n    transition: all 2s ease;\n  }\n"])));
var HorizontalWrapper = (0, _styledComponents["default"])(Wrapper)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  height: 11px;\n  margin: -5px 0;\n  border-top: 5px solid rgba(255, 255, 255, 0);\n  border-bottom: 5px solid rgba(255, 255, 255, 0);\n  cursor: row-resize;\n  width: 100%;\n\n  :hover {\n    border-top: 5px solid rgba(0, 0, 0, 0.5);\n    border-bottom: 5px solid rgba(0, 0, 0, 0.5);\n  }\n\n  .disabled {\n    cursor: not-allowed;\n  }\n  .disabled:hover {\n    border-color: transparent;\n  }\n"])));
var VerticalWrapper = (0, _styledComponents["default"])(Wrapper)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  width: 11px;\n  margin: 0 -5px;\n  border-left: 5px solid rgba(255, 255, 255, 0);\n  border-right: 5px solid rgba(255, 255, 255, 0);\n  cursor: col-resize;\n\n  :hover {\n    border-left: 5px solid rgba(0, 0, 0, 0.5);\n    border-right: 5px solid rgba(0, 0, 0, 0.5);\n  }\n  .disabled {\n    cursor: not-allowed;\n  }\n  .disabled:hover {\n    border-color: transparent;\n  }\n"])));
var Resizer = /*#__PURE__*/function (_Component) {
  function Resizer() {
    _classCallCheck(this, Resizer);
    return _callSuper(this, Resizer, arguments);
  }
  _inherits(Resizer, _Component);
  return _createClass(Resizer, [{
    key: "render",
    value: function render() {
      var _this = this;
      var _this$props = this.props,
        index = _this$props.index,
        _this$props$split = _this$props.split,
        split = _this$props$split === void 0 ? 'vertical' : _this$props$split,
        _this$props$onClick = _this$props.onClick,
        _onClick = _this$props$onClick === void 0 ? function () {} : _this$props$onClick,
        _this$props$onDoubleC = _this$props.onDoubleClick,
        _onDoubleClick = _this$props$onDoubleC === void 0 ? function () {} : _this$props$onDoubleC,
        _this$props$onMouseDo = _this$props.onMouseDown,
        _onMouseDown = _this$props$onMouseDo === void 0 ? function () {} : _this$props$onMouseDo,
        _this$props$onTouchEn = _this$props.onTouchEnd,
        _onTouchEnd = _this$props$onTouchEn === void 0 ? function () {} : _this$props$onTouchEn,
        _this$props$onTouchSt = _this$props.onTouchStart,
        _onTouchStart = _this$props$onTouchSt === void 0 ? function () {} : _this$props$onTouchSt;
      var props = {
        ref: function ref(_) {
          return _this.resizer = _;
        },
        'data-attribute': split,
        'data-type': 'Resizer',
        onMouseDown: function onMouseDown(event) {
          return _onMouseDown(event, index);
        },
        onTouchStart: function onTouchStart(event) {
          event.preventDefault();
          _onTouchStart(event, index);
        },
        onTouchEnd: function onTouchEnd(event) {
          event.preventDefault();
          _onTouchEnd(event, index);
        },
        onClick: function onClick(event) {
          if (_onClick) {
            event.preventDefault();
            _onClick(event, index);
          }
        },
        onDoubleClick: function onDoubleClick(event) {
          if (_onDoubleClick) {
            event.preventDefault();
            _onDoubleClick(event, index);
          }
        }
      };
      return split === 'vertical' ? /*#__PURE__*/_react["default"].createElement(VerticalWrapper, props) : /*#__PURE__*/_react["default"].createElement(HorizontalWrapper, props);
    }
  }]);
}(_react.Component);
var _default = exports["default"] = Resizer;