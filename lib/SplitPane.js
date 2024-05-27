"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.convertSizeToCssValue = convertSizeToCssValue;
exports["default"] = void 0;
exports.getUnit = getUnit;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _glamorous = _interopRequireDefault(require("glamorous"));
var _Resizer = _interopRequireDefault(require("./Resizer"));
var _Pane = _interopRequireDefault(require("./Pane"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
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
var DEFAULT_PANE_SIZE = '1';
var DEFAULT_PANE_MIN_SIZE = '0';
var DEFAULT_PANE_MAX_SIZE = '100%';
var ColumnStyle = _glamorous["default"].div({
  display: 'flex',
  height: '100%',
  flexDirection: 'column',
  flex: 1,
  outline: 'none',
  overflow: 'hidden',
  userSelect: 'text'
});
var RowStyle = _glamorous["default"].div({
  display: 'flex',
  height: '100%',
  flexDirection: 'row',
  flex: 1,
  outline: 'none',
  overflow: 'hidden',
  userSelect: 'text'
});
function convert(str, size) {
  var tokens = str.match(/([0-9]+)([px|%]*)/);
  var value = tokens[1];
  var unit = tokens[2];
  return toPx(value, unit, size);
}
function toPx(value) {
  var unit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'px';
  var size = arguments.length > 2 ? arguments[2] : undefined;
  switch (unit) {
    case '%':
      {
        return +(size * value / 100).toFixed(2);
      }
    default:
      {
        return +value;
      }
  }
}
function removeNullChildren(children) {
  return _react["default"].Children.toArray(children).filter(function (c) {
    return c;
  });
}
function getUnit(size) {
  if (size.endsWith('px')) {
    return 'px';
  }
  if (size.endsWith('%')) {
    return '%';
  }
  return 'ratio';
}
function convertSizeToCssValue(value, resizersSize) {
  if (getUnit(value) !== '%') {
    return value;
  }
  if (!resizersSize) {
    return value;
  }
  var idx = value.search('%');
  var percent = value.slice(0, idx) / 100;
  if (percent === 0) {
    return value;
  }
  return "calc(".concat(value, " - ").concat(resizersSize, "px*").concat(percent, ")");
}
function convertToUnit(size, unit, containerSize) {
  switch (unit) {
    case '%':
      return "".concat((size / containerSize * 100).toFixed(2), "%");
    case 'px':
      return "".concat(size.toFixed(2), "px");
    case 'ratio':
      return (size * 100).toFixed(0);
  }
}
var SplitPane = /*#__PURE__*/function (_Component) {
  function SplitPane(props) {
    var _this;
    _classCallCheck(this, SplitPane);
    _this = _callSuper(this, SplitPane, [props]);
    _defineProperty(_this, "onMouseDown", function (event, resizerIndex) {
      if (event.button !== 0) {
        return;
      }
      event.preventDefault();
      _this.onDown(resizerIndex, event.clientX, event.clientY);
    });
    _defineProperty(_this, "onTouchStart", function (event, resizerIndex) {
      event.preventDefault();
      var _event$touches$ = event.touches[0],
        clientX = _event$touches$.clientX,
        clientY = _event$touches$.clientY;
      _this.onDown(resizerIndex, clientX, clientY);
    });
    _defineProperty(_this, "onDown", function (resizerIndex, clientX, clientY) {
      var _this$props = _this.props,
        allowResize = _this$props.allowResize,
        onResizeStart = _this$props.onResizeStart,
        split = _this$props.split;
      if (!allowResize) {
        return;
      }
      _this.resizerIndex = resizerIndex;
      _this.dimensionsSnapshot = _this.getDimensionsSnapshot(_this.props);
      _this.startClientX = clientX;
      _this.startClientY = clientY;
      document.addEventListener('mousemove', _this.onMouseMove);
      document.addEventListener('mouseup', _this.onMouseUp);
      document.addEventListener('touchmove', _this.onTouchMove);
      document.addEventListener('touchend', _this.onMouseUp);
      document.addEventListener('touchcancel', _this.onMouseUp);
      if (onResizeStart) {
        onResizeStart();
      }
    });
    _defineProperty(_this, "onMouseMove", function (event) {
      event.preventDefault();
      _this.onMove(event.clientX, event.clientY);
    });
    _defineProperty(_this, "onTouchMove", function (event) {
      event.preventDefault();
      var _event$touches$2 = event.touches[0],
        clientX = _event$touches$2.clientX,
        clientY = _event$touches$2.clientY;
      _this.onMove(clientX, clientY);
    });
    _defineProperty(_this, "onMouseUp", function (event) {
      event.preventDefault();
      document.removeEventListener('mouseup', _this.onMouseUp);
      document.removeEventListener('mousemove', _this.onMouseMove);
      document.removeEventListener('touchmove', _this.onTouchMove);
      document.removeEventListener('touchend', _this.onMouseUp);
      document.addEventListener('touchcancel', _this.onMouseUp);
      if (_this.props.onResizeEnd) {
        _this.props.onResizeEnd(_this.state.sizes);
      }
    });
    _defineProperty(_this, "setPaneRef", function (idx, el) {
      if (!_this.paneElements) {
        _this.paneElements = [];
      }
      _this.paneElements[idx] = el;
    });
    _this.state = {
      sizes: _this.getPanePropSize(props)
    };
    return _this;
  }
  _inherits(SplitPane, _Component);
  return _createClass(SplitPane, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      this.setState({
        sizes: this.getPanePropSize(nextProps)
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.removeEventListener('mouseup', this.onMouseUp);
      document.removeEventListener('mousemove', this.onMouseMove);
      document.removeEventListener('touchmove', this.onTouchMove);
      document.removeEventListener('touchend', this.onMouseUp);
    }
  }, {
    key: "getDimensionsSnapshot",
    value: function getDimensionsSnapshot(props) {
      var split = props.split;
      var paneDimensions = this.getPaneDimensions();
      var splitPaneDimensions = this.splitPane.getBoundingClientRect();
      var minSizes = this.getPanePropMinMaxSize(props, 'minSize');
      var maxSizes = this.getPanePropMinMaxSize(props, 'maxSize');
      var resizersSize = this.getResizersSize(removeNullChildren(this.props.children));
      var splitPaneSizePx = split === 'vertical' ? splitPaneDimensions.width - resizersSize : splitPaneDimensions.height - resizersSize;
      var minSizesPx = minSizes.map(function (s) {
        return convert(s, splitPaneSizePx);
      });
      var maxSizesPx = maxSizes.map(function (s) {
        return convert(s, splitPaneSizePx);
      });
      var sizesPx = paneDimensions.map(function (d) {
        return split === 'vertical' ? d.width : d.height;
      });
      return {
        resizersSize: resizersSize,
        paneDimensions: paneDimensions,
        splitPaneSizePx: splitPaneSizePx,
        minSizesPx: minSizesPx,
        maxSizesPx: maxSizesPx,
        sizesPx: sizesPx
      };
    }
  }, {
    key: "getPanePropSize",
    value: function getPanePropSize(props) {
      return removeNullChildren(props.children).map(function (child) {
        var value = child.props['size'] || child.props['initialSize'];
        if (value === undefined) {
          return DEFAULT_PANE_SIZE;
        }
        return String(value);
      });
    }
  }, {
    key: "getPanePropMinMaxSize",
    value: function getPanePropMinMaxSize(props, key) {
      return removeNullChildren(props.children).map(function (child) {
        var value = child.props[key];
        if (value === undefined) {
          return key === 'maxSize' ? DEFAULT_PANE_MAX_SIZE : DEFAULT_PANE_MIN_SIZE;
        }
        return value;
      });
    }
  }, {
    key: "getPaneDimensions",
    value: function getPaneDimensions() {
      return this.paneElements.filter(function (el) {
        return el;
      }).map(function (el) {
        return el.getBoundingClientRect();
      });
    }
  }, {
    key: "getSizes",
    value: function getSizes() {
      return this.state.sizes;
    }
  }, {
    key: "onMove",
    value: function onMove(clientX, clientY) {
      var _this$props2 = this.props,
        split = _this$props2.split,
        onChange = _this$props2.onChange;
      var resizerIndex = this.resizerIndex;
      var _this$dimensionsSnaps = this.dimensionsSnapshot,
        sizesPx = _this$dimensionsSnaps.sizesPx,
        minSizesPx = _this$dimensionsSnaps.minSizesPx,
        maxSizesPx = _this$dimensionsSnaps.maxSizesPx,
        splitPaneSizePx = _this$dimensionsSnaps.splitPaneSizePx,
        paneDimensions = _this$dimensionsSnaps.paneDimensions;
      var sizeDim = split === 'vertical' ? 'width' : 'height';
      var primary = paneDimensions[resizerIndex];
      var secondary = paneDimensions[resizerIndex + 1];
      var maxSize = primary[sizeDim] + secondary[sizeDim];
      var primaryMinSizePx = minSizesPx[resizerIndex];
      var secondaryMinSizePx = minSizesPx[resizerIndex + 1];
      var primaryMaxSizePx = Math.min(maxSizesPx[resizerIndex], maxSize);
      var secondaryMaxSizePx = Math.min(maxSizesPx[resizerIndex + 1], maxSize);
      var moveOffset = split === 'vertical' ? this.startClientX - clientX : this.startClientY - clientY;
      var primarySizePx = primary[sizeDim] - moveOffset;
      var secondarySizePx = secondary[sizeDim] + moveOffset;
      var primaryHasReachedLimit = false;
      var secondaryHasReachedLimit = false;
      if (primarySizePx < primaryMinSizePx) {
        primarySizePx = primaryMinSizePx;
        primaryHasReachedLimit = true;
      } else if (primarySizePx > primaryMaxSizePx) {
        primarySizePx = primaryMaxSizePx;
        primaryHasReachedLimit = true;
      }
      if (secondarySizePx < secondaryMinSizePx) {
        secondarySizePx = secondaryMinSizePx;
        secondaryHasReachedLimit = true;
      } else if (secondarySizePx > secondaryMaxSizePx) {
        secondarySizePx = secondaryMaxSizePx;
        secondaryHasReachedLimit = true;
      }
      if (primaryHasReachedLimit) {
        secondarySizePx = primary[sizeDim] + secondary[sizeDim] - primarySizePx;
      } else if (secondaryHasReachedLimit) {
        primarySizePx = primary[sizeDim] + secondary[sizeDim] - secondarySizePx;
      }
      sizesPx[resizerIndex] = primarySizePx;
      sizesPx[resizerIndex + 1] = secondarySizePx;
      var sizes = this.getSizes().concat();
      var updateRatio;
      [primarySizePx, secondarySizePx].forEach(function (paneSize, idx) {
        var unit = getUnit(sizes[resizerIndex + idx]);
        if (unit !== 'ratio') {
          sizes[resizerIndex + idx] = convertToUnit(paneSize, unit, splitPaneSizePx);
        } else {
          updateRatio = true;
        }
      });
      if (updateRatio) {
        var ratioCount = 0;
        var lastRatioIdx;
        sizes = sizes.map(function (size, idx) {
          if (getUnit(size) === 'ratio') {
            ratioCount++;
            lastRatioIdx = idx;
            return convertToUnit(sizesPx[idx], 'ratio');
          }
          return size;
        });
        if (ratioCount === 1) {
          sizes[lastRatioIdx] = '1';
        }
      }
      onChange && onChange(sizes);
      this.setState({
        sizes: sizes
      });
    }
  }, {
    key: "getResizersSize",
    value: function getResizersSize(children) {
      return (children.length - 1) * this.props.resizerSize;
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      var _this$props3 = this.props,
        children = _this$props3.children,
        className = _this$props3.className,
        split = _this$props3.split;
      var notNullChildren = removeNullChildren(this.props.children);
      var sizes = this.getSizes();
      var resizersSize = this.getResizersSize(notNullChildren);
      var elements = notNullChildren.reduce(function (acc, child, idx) {
        var pane;
        var resizerIndex = idx - 1;
        var isPane = child.type === _Pane["default"];
        var paneProps = {
          index: idx,
          'data-type': 'Pane',
          split: split,
          key: "Pane-".concat(idx),
          innerRef: _this2.setPaneRef,
          resizersSize: resizersSize,
          size: sizes[idx]
        };
        if (isPane) {
          pane = /*#__PURE__*/(0, _react.cloneElement)(child, paneProps);
        } else {
          pane = /*#__PURE__*/_react["default"].createElement(_Pane["default"], paneProps, child);
        }
        if (acc.length === 0) {
          return [].concat(_toConsumableArray(acc), [pane]);
        } else {
          var resizer = /*#__PURE__*/_react["default"].createElement(_Resizer["default"], {
            index: resizerIndex,
            key: "Resizer-".concat(resizerIndex),
            split: split,
            onMouseDown: _this2.onMouseDown,
            onTouchStart: _this2.onTouchStart
          });
          return [].concat(_toConsumableArray(acc), [resizer, pane]);
        }
      }, []);
      var StyleComponent = split === 'vertical' ? RowStyle : ColumnStyle;
      return /*#__PURE__*/_react["default"].createElement(StyleComponent, {
        className: className,
        "data-type": "SplitPane",
        "data-split": split,
        innerRef: function innerRef(el) {
          _this2.splitPane = el;
        }
      }, elements);
    }
  }]);
}(_react.Component);
SplitPane.propTypes = {
  children: _propTypes["default"].arrayOf(_propTypes["default"].node).isRequired,
  className: _propTypes["default"].string,
  split: _propTypes["default"].oneOf(['vertical', 'horizontal']),
  resizerSize: _propTypes["default"].number,
  onChange: _propTypes["default"].func,
  onResizeStart: _propTypes["default"].func,
  onResizeEnd: _propTypes["default"].func
};
SplitPane.defaultProps = {
  split: 'vertical',
  resizerSize: 1,
  allowResize: true
};
var _default = exports["default"] = SplitPane;