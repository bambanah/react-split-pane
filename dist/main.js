var Kr = Object.defineProperty;
var Jr = (e, t, r) => t in e ? Kr(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var A = (e, t, r) => (Jr(e, typeof t != "symbol" ? t + "" : t, r), r);
import { jsx as oe } from "react/jsx-runtime";
import Q, { useRef as Qr, useDebugValue as Ot, createElement as en, useContext as tn, Component as dr, cloneElement as rn, PureComponent as nn } from "react";
function at(e) {
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function on(e, t, r) {
  var n = e[t];
  if (n && r.hasOwnProperty(t))
    for (var o = at(t), i = 0; i < n.length; ++i) {
      var s = n[i] + o;
      r[s] || (r[s] = r[t]);
    }
  return r;
}
function At(e, t, r, n, o) {
  for (var i = 0, s = e.length; i < s; ++i) {
    var a = e[i](t, r, n, o);
    if (a)
      return a;
  }
}
function Mt(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function sn(e, t) {
  if (Array.isArray(t))
    for (var r = 0, n = t.length; r < n; ++r)
      Mt(e, t[r]);
  else
    Mt(e, t);
}
function an(e) {
  return e instanceof Object && !Array.isArray(e);
}
function cn(e) {
  var t = e.prefixMap, r = e.plugins;
  return function n(o) {
    for (var i in o) {
      var s = o[i];
      if (an(s))
        o[i] = n(s);
      else if (Array.isArray(s)) {
        for (var a = [], c = 0, u = s.length; c < u; ++c) {
          var l = At(r, i, s[c], o, t);
          sn(a, l || s[c]);
        }
        a.length > 0 && (o[i] = a);
      } else {
        var d = At(r, i, s, o, t);
        d && (o[i] = d), o = on(t, i, o);
      }
    }
    return o;
  };
}
function fr(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function pr(e) {
  if (e.__esModule)
    return e;
  var t = e.default;
  if (typeof t == "function") {
    var r = function n() {
      return this instanceof n ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments);
    };
    r.prototype = t.prototype;
  } else
    r = {};
  return Object.defineProperty(r, "__esModule", { value: !0 }), Object.keys(e).forEach(function(n) {
    var o = Object.getOwnPropertyDescriptor(e, n);
    Object.defineProperty(r, n, o.get ? o : {
      enumerable: !0,
      get: function() {
        return e[n];
      }
    });
  }), r;
}
var hr = {};
function Re(e) {
  "@babel/helpers - typeof";
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Re = function(r) {
    return typeof r;
  } : Re = function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, Re(e);
}
function un(e) {
  return pn(e) || fn(e) || dn(e) || ln();
}
function ln() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function dn(e, t) {
  if (e) {
    if (typeof e == "string")
      return ct(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set")
      return Array.from(r);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return ct(e, t);
  }
}
function fn(e) {
  if (typeof Symbol < "u" && Symbol.iterator in Object(e))
    return Array.from(e);
}
function pn(e) {
  if (Array.isArray(e))
    return ct(e);
}
function ct(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
function Rt(e) {
  return e.filter(function(t, r) {
    return e.lastIndexOf(t) === r;
  });
}
function mr(e) {
  for (var t = 0, r = arguments.length <= 1 ? 0 : arguments.length - 1; t < r; ++t) {
    var n = t + 1 < 1 || arguments.length <= t + 1 ? void 0 : arguments[t + 1];
    for (var o in n) {
      var i = n[o], s = e[o];
      if (s && i) {
        if (Array.isArray(s)) {
          e[o] = Rt(s.concat(i));
          continue;
        }
        if (Array.isArray(i)) {
          e[o] = Rt([s].concat(un(i)));
          continue;
        }
        if (Re(i) === "object") {
          e[o] = mr({}, s, i);
          continue;
        }
      }
      e[o] = i;
    }
  }
  return e;
}
var hn = /-([a-z])/g, mn = /^Ms/g, Je = {};
function gn(e) {
  return e[1].toUpperCase();
}
function gr(e) {
  if (Je.hasOwnProperty(e))
    return Je[e];
  var t = e.replace(hn, gn).replace(mn, "ms");
  return Je[e] = t, t;
}
var yn = /[A-Z]/g, vn = /^ms-/, Qe = {};
function bn(e) {
  return "-" + e.toLowerCase();
}
function yr(e) {
  if (Qe.hasOwnProperty(e))
    return Qe[e];
  var t = e.replace(yn, bn);
  return Qe[e] = vn.test(t) ? "-" + t : t;
}
const Sn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: yr
}, Symbol.toStringTag, { value: "Module" }));
function Le(e) {
  return yr(e);
}
function vr(e, t) {
  return Le(e) + ":" + t;
}
function wn(e) {
  var t = "";
  for (var r in e) {
    var n = e[r];
    typeof n != "string" && typeof n != "number" || (t && (t += ";"), t += vr(r, n));
  }
  return t;
}
var xn = /^(Webkit|Moz|O|ms)/;
function kn(e) {
  return xn.test(e);
}
var Pn = /-webkit-|-moz-|-ms-/;
function yt(e) {
  return typeof e == "string" && Pn.test(e);
}
var be = {
  borderImageOutset: !0,
  borderImageSlice: !0,
  borderImageWidth: !0,
  fontWeight: !0,
  lineHeight: !0,
  opacity: !0,
  orphans: !0,
  tabSize: !0,
  widows: !0,
  zIndex: !0,
  zoom: !0,
  // SVG-related properties
  fillOpacity: !0,
  floodOpacity: !0,
  stopOpacity: !0,
  strokeDasharray: !0,
  strokeDashoffset: !0,
  strokeMiterlimit: !0,
  strokeOpacity: !0,
  strokeWidth: !0
}, It = ["animationIterationCount", "boxFlex", "boxFlexGroup", "boxOrdinalGroup", "columnCount", "flex", "flexGrow", "flexPositive", "flexShrink", "flexNegative", "flexOrder", "gridColumn", "gridColumnEnd", "gridColumnStart", "gridRow", "gridRowEnd", "gridRowStart", "lineClamp", "order"], $t = ["Webkit", "ms", "Moz", "O"];
function En(e, t) {
  return e + t.charAt(0).toUpperCase() + t.slice(1);
}
for (var et = 0, Cn = It.length; et < Cn; ++et) {
  var Dt = It[et];
  be[Dt] = !0;
  for (var tt = 0, zn = $t.length; tt < zn; ++tt)
    be[En($t[tt], Dt)] = !0;
}
for (var _n in be)
  be[Le(_n)] = !0;
function On(e) {
  return be.hasOwnProperty(e);
}
var An = /^(ms|Webkit|Moz|O)/;
function br(e) {
  var t = e.replace(An, "");
  return t.charAt(0).toLowerCase() + t.slice(1);
}
function Mn(e) {
  return br(gr(e));
}
function Rn(e, t) {
  return t.join(";" + Le(e) + ":");
}
var In = /(-ms-|-webkit-|-moz-|-o-)/g;
function $n(e) {
  return typeof e == "string" ? e.replace(In, "") : e;
}
const Dn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  assignStyle: mr,
  camelCaseProperty: gr,
  cssifyDeclaration: vr,
  cssifyObject: wn,
  hyphenateProperty: Le,
  isPrefixedProperty: kn,
  isPrefixedValue: yt,
  isUnitlessProperty: On,
  normalizeProperty: Mn,
  resolveArrayValue: Rn,
  unprefixProperty: br,
  unprefixValue: $n
}, Symbol.toStringTag, { value: "Module" })), Tn = /* @__PURE__ */ pr(Dn);
Object.defineProperty(hr, "__esModule", {
  value: !0
});
var Nn = hr.default = Ln, Wn = Tn, Bn = /cross-fade\(/g, jn = ["-webkit-", ""];
function Ln(e, t) {
  if (typeof t == "string" && !(0, Wn.isPrefixedValue)(t) && t.indexOf("cross-fade(") !== -1)
    return jn.map(function(r) {
      return t.replace(Bn, r + "cross-fade(");
    });
}
var Sr = {}, Se = {};
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = r;
  var t = /-webkit-|-moz-|-ms-/;
  function r(n) {
    return typeof n == "string" && t.test(n);
  }
})(Se);
const vt = /* @__PURE__ */ fr(Se);
Object.defineProperty(Sr, "__esModule", {
  value: !0
});
var Fn = Sr.default = Yn, Gn = Se, Un = Vn(Gn);
function Vn(e) {
  return e && e.__esModule ? e : { default: e };
}
var Hn = ["-webkit-", "-moz-", ""], Tt = /linear-gradient|radial-gradient|repeating-linear-gradient|repeating-radial-gradient/gi;
function Yn(e, t) {
  if (typeof t == "string" && !(0, Un.default)(t) && Tt.test(t))
    return Hn.map(function(r) {
      return t.replace(Tt, function(n) {
        return r + n;
      });
    });
}
var wr = {};
Object.defineProperty(wr, "__esModule", {
  value: !0
});
var qn = wr.default = Qn, Xn = Se, Zn = Kn(Xn);
function Kn(e) {
  return e && e.__esModule ? e : { default: e };
}
var Jn = ["-webkit-", ""];
function Qn(e, t) {
  if (typeof t == "string" && !(0, Zn.default)(t) && t.indexOf("image-set(") > -1)
    return Jn.map(function(r) {
      return t.replace(/image-set\(/g, r + "image-set(");
    });
}
var xr = {};
Object.defineProperty(xr, "__esModule", {
  value: !0
});
var eo = xr.default = oo, to = ["-webkit-", "-moz-", ""], ro = {
  maxHeight: !0,
  maxWidth: !0,
  width: !0,
  height: !0,
  columnWidth: !0,
  minWidth: !0,
  minHeight: !0
}, no = {
  "min-content": !0,
  "max-content": !0,
  "fill-available": !0,
  "fit-content": !0,
  "contain-floats": !0
};
function oo(e, t) {
  if (ro.hasOwnProperty(e) && no.hasOwnProperty(t))
    return to.map(function(r) {
      return r + t;
    });
}
var kr = {}, bt = {};
const io = /* @__PURE__ */ pr(Sn);
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = o;
  var t = io, r = n(t);
  function n(i) {
    return i && i.__esModule ? i : { default: i };
  }
  function o(i) {
    return (0, r.default)(i);
  }
})(bt);
const so = /* @__PURE__ */ fr(bt);
var St = {};
Object.defineProperty(St, "__esModule", {
  value: !0
});
St.default = ao;
function ao(e) {
  return e.charAt(0).toUpperCase() + e.slice(1);
}
Object.defineProperty(kr, "__esModule", {
  value: !0
});
var co = kr.default = vo, uo = bt, lo = wt(uo), fo = Se, po = wt(fo), ho = St, Nt = wt(ho);
function wt(e) {
  return e && e.__esModule ? e : { default: e };
}
var mo = {
  transition: !0,
  transitionProperty: !0,
  WebkitTransition: !0,
  WebkitTransitionProperty: !0,
  MozTransition: !0,
  MozTransitionProperty: !0
}, go = {
  Webkit: "-webkit-",
  Moz: "-moz-",
  ms: "-ms-"
};
function yo(e, t) {
  if ((0, po.default)(e))
    return e;
  for (var r = e.split(/,(?![^()]*(?:\([^()]*\))?\))/g), n = 0, o = r.length; n < o; ++n) {
    var i = r[n], s = [i];
    for (var a in t) {
      var c = (0, lo.default)(a);
      if (i.indexOf(c) > -1 && c !== "order")
        for (var u = t[a], l = 0, d = u.length; l < d; ++l)
          s.unshift(i.replace(c, go[u[l]] + c));
    }
    r[n] = s.join(",");
  }
  return r.join(",");
}
function vo(e, t, r, n) {
  if (typeof t == "string" && mo.hasOwnProperty(e)) {
    var o = yo(t, n), i = o.split(/,(?![^()]*(?:\([^()]*\))?\))/g).filter(function(a) {
      return !/-moz-|-ms-/.test(a);
    }).join(",");
    if (e.indexOf("Webkit") > -1)
      return i;
    var s = o.split(/,(?![^()]*(?:\([^()]*\))?\))/g).filter(function(a) {
      return !/-webkit-|-ms-/.test(a);
    }).join(",");
    return e.indexOf("Moz") > -1 ? s : (r["Webkit" + (0, Nt.default)(e)] = i, r["Moz" + (0, Nt.default)(e)] = s, o);
  }
}
var U = ["Webkit"], bo = ["Moz"], R = ["ms"], C = ["Webkit", "ms"], So = ["Webkit", "Moz", "ms"];
const wo = {
  plugins: [Nn, Fn, qn, eo, co],
  prefixMap: { appearance: So, textEmphasisPosition: C, textEmphasis: C, textEmphasisStyle: C, textEmphasisColor: C, boxDecorationBreak: C, maskImage: C, maskMode: C, maskRepeat: C, maskPosition: C, maskClip: C, maskOrigin: C, maskSize: C, maskComposite: C, mask: C, maskBorderSource: C, maskBorderMode: C, maskBorderSlice: C, maskBorderWidth: C, maskBorderOutset: C, maskBorderRepeat: C, maskBorder: C, maskType: C, userSelect: C, backdropFilter: U, clipPath: U, hyphens: C, textOrientation: U, tabSize: bo, wrapFlow: R, wrapThrough: R, wrapMargin: R, scrollSnapType: R, scrollSnapPointsX: R, scrollSnapPointsY: R, scrollSnapDestination: R, scrollSnapCoordinate: R, textSizeAdjust: ["ms", "Webkit"], flowInto: R, flowFrom: R, breakBefore: R, breakAfter: R, breakInside: R, regionFragment: R, fontKerning: U, textDecorationStyle: U, textDecorationSkip: U, textDecorationLine: U, textDecorationColor: U }
};
var xo = ["-webkit-", "-moz-", ""], ko = {
  "zoom-in": !0,
  "zoom-out": !0,
  grab: !0,
  grabbing: !0
};
function Po(e, t) {
  if (e === "cursor" && ko.hasOwnProperty(t))
    return xo.map(function(r) {
      return r + t;
    });
}
var Eo = /cross-fade\(/g, Co = ["-webkit-", ""];
function zo(e, t) {
  if (typeof t == "string" && !yt(t) && t.indexOf("cross-fade(") !== -1)
    return Co.map(function(r) {
      return t.replace(Eo, r + "cross-fade(");
    });
}
var _o = /filter\(/g, Oo = ["-webkit-", ""];
function Ao(e, t) {
  if (typeof t == "string" && !yt(t) && t.indexOf("filter(") !== -1)
    return Oo.map(function(r) {
      return t.replace(_o, r + "filter(");
    });
}
var Wt = {
  flex: ["-webkit-box", "-moz-box", "-ms-flexbox", "-webkit-flex", "flex"],
  "inline-flex": ["-webkit-inline-box", "-moz-inline-box", "-ms-inline-flexbox", "-webkit-inline-flex", "inline-flex"]
};
function Mo(e, t) {
  if (e === "display" && Wt.hasOwnProperty(t))
    return Wt[t];
}
var Ro = {
  "space-around": "justify",
  "space-between": "justify",
  "flex-start": "start",
  "flex-end": "end",
  "wrap-reverse": "multiple",
  wrap: "multiple"
}, Bt = {
  alignItems: "WebkitBoxAlign",
  justifyContent: "WebkitBoxPack",
  flexWrap: "WebkitBoxLines",
  flexGrow: "WebkitBoxFlex"
};
function Io(e, t, r) {
  e === "flexDirection" && typeof t == "string" && (t.indexOf("column") > -1 ? r.WebkitBoxOrient = "vertical" : r.WebkitBoxOrient = "horizontal", t.indexOf("reverse") > -1 ? r.WebkitBoxDirection = "reverse" : r.WebkitBoxDirection = "normal"), Bt.hasOwnProperty(e) && (r[Bt[e]] = Ro[t] || t);
}
var $o = ["-webkit-", "-moz-", ""], jt = /linear-gradient|radial-gradient|repeating-linear-gradient|repeating-radial-gradient/gi;
function Do(e, t) {
  if (typeof t == "string" && !vt(t) && jt.test(t))
    return $o.map(function(r) {
      return t.replace(jt, function(n) {
        return r + n;
      });
    });
}
var Ce = /* @__PURE__ */ function() {
  function e(t, r) {
    var n = [], o = !0, i = !1, s = void 0;
    try {
      for (var a = t[Symbol.iterator](), c; !(o = (c = a.next()).done) && (n.push(c.value), !(r && n.length === r)); o = !0)
        ;
    } catch (u) {
      i = !0, s = u;
    } finally {
      try {
        !o && a.return && a.return();
      } finally {
        if (i)
          throw s;
      }
    }
    return n;
  }
  return function(t, r) {
    if (Array.isArray(t))
      return t;
    if (Symbol.iterator in Object(t))
      return e(t, r);
    throw new TypeError("Invalid attempt to destructure non-iterable instance");
  };
}();
function V(e) {
  return typeof e == "number" && !isNaN(e);
}
function Lt(e) {
  return typeof e == "string" && e.includes("/");
}
var Ft = ["center", "end", "start", "stretch"], Gt = {
  "inline-grid": ["-ms-inline-grid", "inline-grid"],
  grid: ["-ms-grid", "grid"]
}, W = {
  alignSelf: function(t, r) {
    Ft.indexOf(t) > -1 && (r.msGridRowAlign = t);
  },
  gridColumn: function(t, r) {
    if (V(t))
      r.msGridColumn = t;
    else if (Lt(t)) {
      var n = t.split("/"), o = Ce(n, 2), i = o[0], s = o[1];
      W.gridColumnStart(+i, r);
      var a = s.split(/ ?span /), c = Ce(a, 2), u = c[0], l = c[1];
      u === "" ? W.gridColumnEnd(+i + +l, r) : W.gridColumnEnd(+s, r);
    } else
      W.gridColumnStart(t, r);
  },
  gridColumnEnd: function(t, r) {
    var n = r.msGridColumn;
    V(t) && V(n) && (r.msGridColumnSpan = t - n);
  },
  gridColumnStart: function(t, r) {
    V(t) && (r.msGridColumn = t);
  },
  gridRow: function(t, r) {
    if (V(t))
      r.msGridRow = t;
    else if (Lt(t)) {
      var n = t.split("/"), o = Ce(n, 2), i = o[0], s = o[1];
      W.gridRowStart(+i, r);
      var a = s.split(/ ?span /), c = Ce(a, 2), u = c[0], l = c[1];
      u === "" ? W.gridRowEnd(+i + +l, r) : W.gridRowEnd(+s, r);
    } else
      W.gridRowStart(t, r);
  },
  gridRowEnd: function(t, r) {
    var n = r.msGridRow;
    V(t) && V(n) && (r.msGridRowSpan = t - n);
  },
  gridRowStart: function(t, r) {
    V(t) && (r.msGridRow = t);
  },
  gridTemplateColumns: function(t, r) {
    r.msGridColumns = t;
  },
  gridTemplateRows: function(t, r) {
    r.msGridRows = t;
  },
  justifySelf: function(t, r) {
    Ft.indexOf(t) > -1 && (r.msGridColumnAlign = t);
  }
};
function To(e, t, r) {
  if (e === "display" && t in Gt)
    return Gt[t];
  if (e in W) {
    var n = W[e];
    n(t, r);
  }
}
var No = ["-webkit-", ""];
function Wo(e, t) {
  if (typeof t == "string" && !vt(t) && t.indexOf("image-set(") > -1)
    return No.map(function(r) {
      return t.replace(/image-set\(/g, r + "image-set(");
    });
}
var Ut = {
  marginBlockStart: ["WebkitMarginBefore"],
  marginBlockEnd: ["WebkitMarginAfter"],
  marginInlineStart: ["WebkitMarginStart", "MozMarginStart"],
  marginInlineEnd: ["WebkitMarginEnd", "MozMarginEnd"],
  paddingBlockStart: ["WebkitPaddingBefore"],
  paddingBlockEnd: ["WebkitPaddingAfter"],
  paddingInlineStart: ["WebkitPaddingStart", "MozPaddingStart"],
  paddingInlineEnd: ["WebkitPaddingEnd", "MozPaddingEnd"],
  borderBlockStart: ["WebkitBorderBefore"],
  borderBlockStartColor: ["WebkitBorderBeforeColor"],
  borderBlockStartStyle: ["WebkitBorderBeforeStyle"],
  borderBlockStartWidth: ["WebkitBorderBeforeWidth"],
  borderBlockEnd: ["WebkitBorderAfter"],
  borderBlockEndColor: ["WebkitBorderAfterColor"],
  borderBlockEndStyle: ["WebkitBorderAfterStyle"],
  borderBlockEndWidth: ["WebkitBorderAfterWidth"],
  borderInlineStart: ["WebkitBorderStart", "MozBorderStart"],
  borderInlineStartColor: ["WebkitBorderStartColor", "MozBorderStartColor"],
  borderInlineStartStyle: ["WebkitBorderStartStyle", "MozBorderStartStyle"],
  borderInlineStartWidth: ["WebkitBorderStartWidth", "MozBorderStartWidth"],
  borderInlineEnd: ["WebkitBorderEnd", "MozBorderEnd"],
  borderInlineEndColor: ["WebkitBorderEndColor", "MozBorderEndColor"],
  borderInlineEndStyle: ["WebkitBorderEndStyle", "MozBorderEndStyle"],
  borderInlineEndWidth: ["WebkitBorderEndWidth", "MozBorderEndWidth"]
};
function Bo(e, t, r) {
  if (Object.prototype.hasOwnProperty.call(Ut, e))
    for (var n = Ut[e], o = 0, i = n.length; o < i; ++o)
      r[n[o]] = t;
}
function jo(e, t) {
  if (e === "position" && t === "sticky")
    return ["-webkit-sticky", "sticky"];
}
var Lo = ["-webkit-", "-moz-", ""], Fo = {
  maxHeight: !0,
  maxWidth: !0,
  width: !0,
  height: !0,
  columnWidth: !0,
  minWidth: !0,
  minHeight: !0
}, Go = {
  "min-content": !0,
  "max-content": !0,
  "fill-available": !0,
  "fit-content": !0,
  "contain-floats": !0
};
function Uo(e, t) {
  if (Fo.hasOwnProperty(e) && Go.hasOwnProperty(t))
    return Lo.map(function(r) {
      return r + t;
    });
}
var Vo = {
  transition: !0,
  transitionProperty: !0,
  WebkitTransition: !0,
  WebkitTransitionProperty: !0,
  MozTransition: !0,
  MozTransitionProperty: !0
}, Ho = {
  Webkit: "-webkit-",
  Moz: "-moz-",
  ms: "-ms-"
};
function Yo(e, t) {
  if (vt(e))
    return e;
  for (var r = e.split(/,(?![^()]*(?:\([^()]*\))?\))/g), n = 0, o = r.length; n < o; ++n) {
    var i = r[n], s = [i];
    for (var a in t) {
      var c = so(a);
      if (i.indexOf(c) > -1 && c !== "order")
        for (var u = t[a], l = 0, d = u.length; l < d; ++l)
          s.unshift(i.replace(c, Ho[u[l]] + c));
    }
    r[n] = s.join(",");
  }
  return r.join(",");
}
function qo(e, t, r, n) {
  if (typeof t == "string" && Vo.hasOwnProperty(e)) {
    var o = Yo(t, n), i = o.split(/,(?![^()]*(?:\([^()]*\))?\))/g).filter(function(a) {
      return !/-moz-|-ms-/.test(a);
    }).join(",");
    if (e.indexOf("Webkit") > -1)
      return i;
    var s = o.split(/,(?![^()]*(?:\([^()]*\))?\))/g).filter(function(a) {
      return !/-webkit-|-ms-/.test(a);
    }).join(",");
    return e.indexOf("Moz") > -1 ? s : (r["Webkit" + at(e)] = i, r["Moz" + at(e)] = s, o);
  }
}
var Xo = [zo, Po, Ao, Io, Do, To, Wo, Bo, jo, Uo, qo, Mo], Zo = cn({
  prefixMap: wo.prefixMap,
  plugins: Xo
}), I = function() {
  return I = Object.assign || function(t) {
    for (var r, n = 1, o = arguments.length; n < o; n++) {
      r = arguments[n];
      for (var i in r)
        Object.prototype.hasOwnProperty.call(r, i) && (t[i] = r[i]);
    }
    return t;
  }, I.apply(this, arguments);
};
function ie(e, t, r) {
  if (r || arguments.length === 2)
    for (var n = 0, o = t.length, i; n < o; n++)
      (i || !(n in t)) && (i || (i = Array.prototype.slice.call(t, 0, n)), i[n] = t[n]);
  return e.concat(i || Array.prototype.slice.call(t));
}
function Ko(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r];
  };
}
var Jo = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, Qo = /* @__PURE__ */ Ko(
  function(e) {
    return Jo.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), E = "-ms-", ve = "-moz-", b = "-webkit-", Pr = "comm", Fe = "rule", xt = "decl", ei = "@import", Er = "@keyframes", ti = "@layer", Cr = Math.abs, kt = String.fromCharCode, ut = Object.assign;
function ri(e, t) {
  return O(e, 0) ^ 45 ? (((t << 2 ^ O(e, 0)) << 2 ^ O(e, 1)) << 2 ^ O(e, 2)) << 2 ^ O(e, 3) : 0;
}
function zr(e) {
  return e.trim();
}
function L(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function g(e, t, r) {
  return e.replace(t, r);
}
function Ie(e, t, r) {
  return e.indexOf(t, r);
}
function O(e, t) {
  return e.charCodeAt(t) | 0;
}
function se(e, t, r) {
  return e.slice(t, r);
}
function B(e) {
  return e.length;
}
function _r(e) {
  return e.length;
}
function ye(e, t) {
  return t.push(e), e;
}
function ni(e, t) {
  return e.map(t).join("");
}
function Vt(e, t) {
  return e.filter(function(r) {
    return !L(r, t);
  });
}
var Ge = 1, ae = 1, Or = 0, D = 0, z = 0, de = "";
function Ue(e, t, r, n, o, i, s, a) {
  return { value: e, root: t, parent: r, type: n, props: o, children: i, line: Ge, column: ae, length: s, return: "", siblings: a };
}
function H(e, t) {
  return ut(Ue("", null, null, "", null, null, 0, e.siblings), e, { length: -e.length }, t);
}
function ne(e) {
  for (; e.root; )
    e = H(e.root, { children: [e] });
  ye(e, e.siblings);
}
function oi() {
  return z;
}
function ii() {
  return z = D > 0 ? O(de, --D) : 0, ae--, z === 10 && (ae = 1, Ge--), z;
}
function N() {
  return z = D < Or ? O(de, D++) : 0, ae++, z === 10 && (ae = 1, Ge++), z;
}
function K() {
  return O(de, D);
}
function $e() {
  return D;
}
function Ve(e, t) {
  return se(de, e, t);
}
function lt(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function si(e) {
  return Ge = ae = 1, Or = B(de = e), D = 0, [];
}
function ai(e) {
  return de = "", e;
}
function rt(e) {
  return zr(Ve(D - 1, dt(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function ci(e) {
  for (; (z = K()) && z < 33; )
    N();
  return lt(e) > 2 || lt(z) > 3 ? "" : " ";
}
function ui(e, t) {
  for (; --t && N() && !(z < 48 || z > 102 || z > 57 && z < 65 || z > 70 && z < 97); )
    ;
  return Ve(e, $e() + (t < 6 && K() == 32 && N() == 32));
}
function dt(e) {
  for (; N(); )
    switch (z) {
      case e:
        return D;
      case 34:
      case 39:
        e !== 34 && e !== 39 && dt(z);
        break;
      case 40:
        e === 41 && dt(e);
        break;
      case 92:
        N();
        break;
    }
  return D;
}
function li(e, t) {
  for (; N() && e + z !== 57; )
    if (e + z === 84 && K() === 47)
      break;
  return "/*" + Ve(t, D - 1) + "*" + kt(e === 47 ? e : N());
}
function di(e) {
  for (; !lt(K()); )
    N();
  return Ve(e, D);
}
function fi(e) {
  return ai(De("", null, null, null, [""], e = si(e), 0, [0], e));
}
function De(e, t, r, n, o, i, s, a, c) {
  for (var u = 0, l = 0, d = s, f = 0, h = 0, y = 0, x = 1, _ = 1, k = 1, P = 0, S = "", w = o, v = i, m = n, p = S; _; )
    switch (y = P, P = N()) {
      case 40:
        if (y != 108 && O(p, d - 1) == 58) {
          Ie(p += g(rt(P), "&", "&\f"), "&\f", Cr(u ? a[u - 1] : 0)) != -1 && (k = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        p += rt(P);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        p += ci(y);
        break;
      case 92:
        p += ui($e() - 1, 7);
        continue;
      case 47:
        switch (K()) {
          case 42:
          case 47:
            ye(pi(li(N(), $e()), t, r, c), c);
            break;
          default:
            p += "/";
        }
        break;
      case 123 * x:
        a[u++] = B(p) * k;
      case 125 * x:
      case 59:
      case 0:
        switch (P) {
          case 0:
          case 125:
            _ = 0;
          case 59 + l:
            k == -1 && (p = g(p, /\f/g, "")), h > 0 && B(p) - d && ye(h > 32 ? Yt(p + ";", n, r, d - 1, c) : Yt(g(p, " ", "") + ";", n, r, d - 2, c), c);
            break;
          case 59:
            p += ";";
          default:
            if (ye(m = Ht(p, t, r, u, l, o, a, S, w = [], v = [], d, i), i), P === 123)
              if (l === 0)
                De(p, t, m, m, w, i, d, a, v);
              else
                switch (f === 99 && O(p, 3) === 110 ? 100 : f) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    De(e, m, m, n && ye(Ht(e, m, m, 0, 0, o, a, S, o, w = [], d, v), v), o, v, d, a, n ? w : v);
                    break;
                  default:
                    De(p, m, m, m, [""], v, 0, a, v);
                }
        }
        u = l = h = 0, x = k = 1, S = p = "", d = s;
        break;
      case 58:
        d = 1 + B(p), h = y;
      default:
        if (x < 1) {
          if (P == 123)
            --x;
          else if (P == 125 && x++ == 0 && ii() == 125)
            continue;
        }
        switch (p += kt(P), P * x) {
          case 38:
            k = l > 0 ? 1 : (p += "\f", -1);
            break;
          case 44:
            a[u++] = (B(p) - 1) * k, k = 1;
            break;
          case 64:
            K() === 45 && (p += rt(N())), f = K(), l = d = B(S = p += di($e())), P++;
            break;
          case 45:
            y === 45 && B(p) == 2 && (x = 0);
        }
    }
  return i;
}
function Ht(e, t, r, n, o, i, s, a, c, u, l, d) {
  for (var f = o - 1, h = o === 0 ? i : [""], y = _r(h), x = 0, _ = 0, k = 0; x < n; ++x)
    for (var P = 0, S = se(e, f + 1, f = Cr(_ = s[x])), w = e; P < y; ++P)
      (w = zr(_ > 0 ? h[P] + " " + S : g(S, /&\f/g, h[P]))) && (c[k++] = w);
  return Ue(e, t, r, o === 0 ? Fe : a, c, u, l, d);
}
function pi(e, t, r, n) {
  return Ue(e, t, r, Pr, kt(oi()), se(e, 2, -2), 0, n);
}
function Yt(e, t, r, n, o) {
  return Ue(e, t, r, xt, se(e, 0, n), se(e, n + 1, -1), n, o);
}
function Ar(e, t, r) {
  switch (ri(e, t)) {
    case 5103:
      return b + "print-" + e + e;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return b + e + e;
    case 4789:
      return ve + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return b + e + ve + e + E + e + e;
    case 5936:
      switch (O(e, t + 11)) {
        case 114:
          return b + e + E + g(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return b + e + E + g(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return b + e + E + g(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
    case 6828:
    case 4268:
    case 2903:
      return b + e + E + e + e;
    case 6165:
      return b + e + E + "flex-" + e + e;
    case 5187:
      return b + e + g(e, /(\w+).+(:[^]+)/, b + "box-$1$2" + E + "flex-$1$2") + e;
    case 5443:
      return b + e + E + "flex-item-" + g(e, /flex-|-self/g, "") + (L(e, /flex-|baseline/) ? "" : E + "grid-row-" + g(e, /flex-|-self/g, "")) + e;
    case 4675:
      return b + e + E + "flex-line-pack" + g(e, /align-content|flex-|-self/g, "") + e;
    case 5548:
      return b + e + E + g(e, "shrink", "negative") + e;
    case 5292:
      return b + e + E + g(e, "basis", "preferred-size") + e;
    case 6060:
      return b + "box-" + g(e, "-grow", "") + b + e + E + g(e, "grow", "positive") + e;
    case 4554:
      return b + g(e, /([^-])(transform)/g, "$1" + b + "$2") + e;
    case 6187:
      return g(g(g(e, /(zoom-|grab)/, b + "$1"), /(image-set)/, b + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return g(e, /(image-set\([^]*)/, b + "$1$`$1");
    case 4968:
      return g(g(e, /(.+:)(flex-)?(.*)/, b + "box-pack:$3" + E + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + b + e + e;
    case 4200:
      if (!L(e, /flex-|baseline/))
        return E + "grid-column-align" + se(e, t) + e;
      break;
    case 2592:
    case 3360:
      return E + g(e, "template-", "") + e;
    case 4384:
    case 3616:
      return r && r.some(function(n, o) {
        return t = o, L(n.props, /grid-\w+-end/);
      }) ? ~Ie(e + (r = r[t].value), "span", 0) ? e : E + g(e, "-start", "") + e + E + "grid-row-span:" + (~Ie(r, "span", 0) ? L(r, /\d+/) : +L(r, /\d+/) - +L(e, /\d+/)) + ";" : E + g(e, "-start", "") + e;
    case 4896:
    case 4128:
      return r && r.some(function(n) {
        return L(n.props, /grid-\w+-start/);
      }) ? e : E + g(g(e, "-end", "-span"), "span ", "") + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return g(e, /(.+)-inline(.+)/, b + "$1$2") + e;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (B(e) - 1 - t > 6)
        switch (O(e, t + 1)) {
          case 109:
            if (O(e, t + 4) !== 45)
              break;
          case 102:
            return g(e, /(.+:)(.+)-([^]+)/, "$1" + b + "$2-$3$1" + ve + (O(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
          case 115:
            return ~Ie(e, "stretch", 0) ? Ar(g(e, "stretch", "fill-available"), t, r) + e : e;
        }
      break;
    case 5152:
    case 5920:
      return g(e, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(n, o, i, s, a, c, u) {
        return E + o + ":" + i + u + (s ? E + o + "-span:" + (a ? c : +c - +i) + u : "") + e;
      });
    case 4949:
      if (O(e, t + 6) === 121)
        return g(e, ":", ":" + b) + e;
      break;
    case 6444:
      switch (O(e, O(e, 14) === 45 ? 18 : 11)) {
        case 120:
          return g(e, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + b + (O(e, 14) === 45 ? "inline-" : "") + "box$3$1" + b + "$2$3$1" + E + "$2box$3") + e;
        case 100:
          return g(e, ":", ":" + E) + e;
      }
      break;
    case 5719:
    case 2647:
    case 2135:
    case 3927:
    case 2391:
      return g(e, "scroll-", "scroll-snap-") + e;
  }
  return e;
}
function We(e, t) {
  for (var r = "", n = 0; n < e.length; n++)
    r += t(e[n], n, e, t) || "";
  return r;
}
function hi(e, t, r, n) {
  switch (e.type) {
    case ti:
      if (e.children.length)
        break;
    case ei:
    case xt:
      return e.return = e.return || e.value;
    case Pr:
      return "";
    case Er:
      return e.return = e.value + "{" + We(e.children, n) + "}";
    case Fe:
      if (!B(e.value = e.props.join(",")))
        return "";
  }
  return B(r = We(e.children, n)) ? e.return = e.value + "{" + r + "}" : "";
}
function mi(e) {
  var t = _r(e);
  return function(r, n, o, i) {
    for (var s = "", a = 0; a < t; a++)
      s += e[a](r, n, o, i) || "";
    return s;
  };
}
function gi(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
function yi(e, t, r, n) {
  if (e.length > -1 && !e.return)
    switch (e.type) {
      case xt:
        e.return = Ar(e.value, e.length, r);
        return;
      case Er:
        return We([H(e, { value: g(e.value, "@", "@" + b) })], n);
      case Fe:
        if (e.length)
          return ni(r = e.props, function(o) {
            switch (L(o, n = /(::plac\w+|:read-\w+)/)) {
              case ":read-only":
              case ":read-write":
                ne(H(e, { props: [g(o, /:(read-\w+)/, ":" + ve + "$1")] })), ne(H(e, { props: [o] })), ut(e, { props: Vt(r, n) });
                break;
              case "::placeholder":
                ne(H(e, { props: [g(o, /:(plac\w+)/, ":" + b + "input-$1")] })), ne(H(e, { props: [g(o, /:(plac\w+)/, ":" + ve + "$1")] })), ne(H(e, { props: [g(o, /:(plac\w+)/, E + "input-$1")] })), ne(H(e, { props: [o] })), ut(e, { props: Vt(r, n) });
                break;
            }
            return "";
          });
    }
}
var vi = {
  animationIterationCount: 1,
  aspectRatio: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
}, ee = typeof process < "u" && process.env !== void 0 && (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR) || "data-styled", Mr = "active", Rr = "data-styled-version", He = "6.1.11", Pt = `/*!sc*/
`, Et = typeof window < "u" && "HTMLElement" in window, bi = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && process.env !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? process.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && process.env.REACT_APP_SC_DISABLE_SPEEDY : typeof process < "u" && process.env !== void 0 && process.env.SC_DISABLE_SPEEDY !== void 0 && process.env.SC_DISABLE_SPEEDY !== "" ? process.env.SC_DISABLE_SPEEDY !== "false" && process.env.SC_DISABLE_SPEEDY : process.env.NODE_ENV !== "production"), qt = /invalid hook call/i, ze = /* @__PURE__ */ new Set(), Si = function(e, t) {
  if (process.env.NODE_ENV !== "production") {
    var r = t ? ' with the id of "'.concat(t, '"') : "", n = "The component ".concat(e).concat(r, ` has been created dynamically.
`) + `You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.`, o = console.error;
    try {
      var i = !0;
      console.error = function(s) {
        for (var a = [], c = 1; c < arguments.length; c++)
          a[c - 1] = arguments[c];
        qt.test(s) ? (i = !1, ze.delete(n)) : o.apply(void 0, ie([s], a, !1));
      }, Qr(), i && !ze.has(n) && (console.warn(n), ze.add(n));
    } catch (s) {
      qt.test(s.message) && ze.delete(n);
    } finally {
      console.error = o;
    }
  }
}, Ye = Object.freeze([]), ce = Object.freeze({});
function wi(e, t, r) {
  return r === void 0 && (r = ce), e.theme !== r.theme && e.theme || t || r.theme;
}
var ft = /* @__PURE__ */ new Set(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "u", "ul", "use", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"]), xi = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, ki = /(^-|-$)/g;
function Xt(e) {
  return e.replace(xi, "-").replace(ki, "");
}
var Pi = /(a)(d)/gi, _e = 52, Zt = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function pt(e) {
  var t, r = "";
  for (t = Math.abs(e); t > _e; t = t / _e | 0)
    r = Zt(t % _e) + r;
  return (Zt(t % _e) + r).replace(Pi, "$1-$2");
}
var nt, Ir = 5381, X = function(e, t) {
  for (var r = t.length; r; )
    e = 33 * e ^ t.charCodeAt(--r);
  return e;
}, $r = function(e) {
  return X(Ir, e);
};
function Ei(e) {
  return pt($r(e) >>> 0);
}
function Dr(e) {
  return process.env.NODE_ENV !== "production" && typeof e == "string" && e || e.displayName || e.name || "Component";
}
function ot(e) {
  return typeof e == "string" && (process.env.NODE_ENV === "production" || e.charAt(0) === e.charAt(0).toLowerCase());
}
var Tr = typeof Symbol == "function" && Symbol.for, Nr = Tr ? Symbol.for("react.memo") : 60115, Ci = Tr ? Symbol.for("react.forward_ref") : 60112, zi = { childContextTypes: !0, contextType: !0, contextTypes: !0, defaultProps: !0, displayName: !0, getDefaultProps: !0, getDerivedStateFromError: !0, getDerivedStateFromProps: !0, mixins: !0, propTypes: !0, type: !0 }, _i = { name: !0, length: !0, prototype: !0, caller: !0, callee: !0, arguments: !0, arity: !0 }, Wr = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 }, Oi = ((nt = {})[Ci] = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 }, nt[Nr] = Wr, nt);
function Kt(e) {
  return ("type" in (t = e) && t.type.$$typeof) === Nr ? Wr : "$$typeof" in e ? Oi[e.$$typeof] : zi;
  var t;
}
var Ai = Object.defineProperty, Mi = Object.getOwnPropertyNames, Jt = Object.getOwnPropertySymbols, Ri = Object.getOwnPropertyDescriptor, Ii = Object.getPrototypeOf, Qt = Object.prototype;
function Br(e, t, r) {
  if (typeof t != "string") {
    if (Qt) {
      var n = Ii(t);
      n && n !== Qt && Br(e, n, r);
    }
    var o = Mi(t);
    Jt && (o = o.concat(Jt(t)));
    for (var i = Kt(e), s = Kt(t), a = 0; a < o.length; ++a) {
      var c = o[a];
      if (!(c in _i || r && r[c] || s && c in s || i && c in i)) {
        var u = Ri(t, c);
        try {
          Ai(e, c, u);
        } catch {
        }
      }
    }
  }
  return e;
}
function ue(e) {
  return typeof e == "function";
}
function Ct(e) {
  return typeof e == "object" && "styledComponentId" in e;
}
function Z(e, t) {
  return e && t ? "".concat(e, " ").concat(t) : e || t || "";
}
function er(e, t) {
  if (e.length === 0)
    return "";
  for (var r = e[0], n = 1; n < e.length; n++)
    r += e[n];
  return r;
}
function le(e) {
  return e !== null && typeof e == "object" && e.constructor.name === Object.name && !("props" in e && e.$$typeof);
}
function ht(e, t, r) {
  if (r === void 0 && (r = !1), !r && !le(e) && !Array.isArray(e))
    return t;
  if (Array.isArray(t))
    for (var n = 0; n < t.length; n++)
      e[n] = ht(e[n], t[n]);
  else if (le(t))
    for (var n in t)
      e[n] = ht(e[n], t[n]);
  return e;
}
function zt(e, t) {
  Object.defineProperty(e, "toString", { value: t });
}
var $i = process.env.NODE_ENV !== "production" ? { 1: `Cannot create styled-component for component: %s.

`, 2: `Can't collect styles once you've consumed a \`ServerStyleSheet\`'s styles! \`ServerStyleSheet\` is a one off instance for each server-side render cycle.

- Are you trying to reuse it across renders?
- Are you accidentally calling collectStyles twice?

`, 3: `Streaming SSR is only supported in a Node.js environment; Please do not try to call this method in the browser.

`, 4: `The \`StyleSheetManager\` expects a valid target or sheet prop!

- Does this error occur on the client and is your target falsy?
- Does this error occur on the server and is the sheet falsy?

`, 5: `The clone method cannot be used on the client!

- Are you running in a client-like environment on the server?
- Are you trying to run SSR on the client?

`, 6: `Trying to insert a new style tag, but the given Node is unmounted!

- Are you using a custom target that isn't mounted?
- Does your document not have a valid head element?
- Have you accidentally removed a style tag manually?

`, 7: 'ThemeProvider: Please return an object from your "theme" prop function, e.g.\n\n```js\ntheme={() => ({})}\n```\n\n', 8: `ThemeProvider: Please make your "theme" prop an object.

`, 9: "Missing document `<head>`\n\n", 10: `Cannot find a StyleSheet instance. Usually this happens if there are multiple copies of styled-components loaded at once. Check out this issue for how to troubleshoot and fix the common cases where this situation can happen: https://github.com/styled-components/styled-components/issues/1941#issuecomment-417862021

`, 11: `_This error was replaced with a dev-time warning, it will be deleted for v4 final._ [createGlobalStyle] received children which will not be rendered. Please use the component without passing children elements.

`, 12: "It seems you are interpolating a keyframe declaration (%s) into an untagged string. This was supported in styled-components v3, but is not longer supported in v4 as keyframes are now injected on-demand. Please wrap your string in the css\\`\\` helper which ensures the styles are injected correctly. See https://www.styled-components.com/docs/api#css\n\n", 13: `%s is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.

`, 14: `ThemeProvider: "theme" prop is required.

`, 15: "A stylis plugin has been supplied that is not named. We need a name for each plugin to be able to prevent styling collisions between different stylis configurations within the same app. Before you pass your plugin to `<StyleSheetManager stylisPlugins={[]}>`, please make sure each plugin is uniquely-named, e.g.\n\n```js\nObject.defineProperty(importedPlugin, 'name', { value: 'some-unique-name' });\n```\n\n", 16: `Reached the limit of how many styled components may be created at group %s.
You may only create up to 1,073,741,824 components. If you're creating components dynamically,
as for instance in your render method then you may be running into this limitation.

`, 17: `CSSStyleSheet could not be found on HTMLStyleElement.
Has styled-components' style tag been unmounted or altered by another script?
`, 18: "ThemeProvider: Please make sure your useTheme hook is within a `<ThemeProvider>`" } : {};
function Di() {
  for (var e = [], t = 0; t < arguments.length; t++)
    e[t] = arguments[t];
  for (var r = e[0], n = [], o = 1, i = e.length; o < i; o += 1)
    n.push(e[o]);
  return n.forEach(function(s) {
    r = r.replace(/%[a-z]/, s);
  }), r;
}
function fe(e) {
  for (var t = [], r = 1; r < arguments.length; r++)
    t[r - 1] = arguments[r];
  return process.env.NODE_ENV === "production" ? new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e, " for more information.").concat(t.length > 0 ? " Args: ".concat(t.join(", ")) : "")) : new Error(Di.apply(void 0, ie([$i[e]], t, !1)).trim());
}
var Ti = function() {
  function e(t) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = t;
  }
  return e.prototype.indexOfGroup = function(t) {
    for (var r = 0, n = 0; n < t; n++)
      r += this.groupSizes[n];
    return r;
  }, e.prototype.insertRules = function(t, r) {
    if (t >= this.groupSizes.length) {
      for (var n = this.groupSizes, o = n.length, i = o; t >= i; )
        if ((i <<= 1) < 0)
          throw fe(16, "".concat(t));
      this.groupSizes = new Uint32Array(i), this.groupSizes.set(n), this.length = i;
      for (var s = o; s < i; s++)
        this.groupSizes[s] = 0;
    }
    for (var a = this.indexOfGroup(t + 1), c = (s = 0, r.length); s < c; s++)
      this.tag.insertRule(a, r[s]) && (this.groupSizes[t]++, a++);
  }, e.prototype.clearGroup = function(t) {
    if (t < this.length) {
      var r = this.groupSizes[t], n = this.indexOfGroup(t), o = n + r;
      this.groupSizes[t] = 0;
      for (var i = n; i < o; i++)
        this.tag.deleteRule(n);
    }
  }, e.prototype.getGroup = function(t) {
    var r = "";
    if (t >= this.length || this.groupSizes[t] === 0)
      return r;
    for (var n = this.groupSizes[t], o = this.indexOfGroup(t), i = o + n, s = o; s < i; s++)
      r += "".concat(this.tag.getRule(s)).concat(Pt);
    return r;
  }, e;
}(), Ni = 1 << 30, Te = /* @__PURE__ */ new Map(), Be = /* @__PURE__ */ new Map(), Ne = 1, Oe = function(e) {
  if (Te.has(e))
    return Te.get(e);
  for (; Be.has(Ne); )
    Ne++;
  var t = Ne++;
  if (process.env.NODE_ENV !== "production" && ((0 | t) < 0 || t > Ni))
    throw fe(16, "".concat(t));
  return Te.set(e, t), Be.set(t, e), t;
}, Wi = function(e, t) {
  Ne = t + 1, Te.set(e, t), Be.set(t, e);
}, Bi = "style[".concat(ee, "][").concat(Rr, '="').concat(He, '"]'), ji = new RegExp("^".concat(ee, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')), Li = function(e, t, r) {
  for (var n, o = r.split(","), i = 0, s = o.length; i < s; i++)
    (n = o[i]) && e.registerName(t, n);
}, Fi = function(e, t) {
  for (var r, n = ((r = t.textContent) !== null && r !== void 0 ? r : "").split(Pt), o = [], i = 0, s = n.length; i < s; i++) {
    var a = n[i].trim();
    if (a) {
      var c = a.match(ji);
      if (c) {
        var u = 0 | parseInt(c[1], 10), l = c[2];
        u !== 0 && (Wi(l, u), Li(e, l, c[3]), e.getTag().insertRules(u, o)), o.length = 0;
      } else
        o.push(a);
    }
  }
};
function Gi() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}
var jr = function(e) {
  var t = document.head, r = e || t, n = document.createElement("style"), o = function(a) {
    var c = Array.from(a.querySelectorAll("style[".concat(ee, "]")));
    return c[c.length - 1];
  }(r), i = o !== void 0 ? o.nextSibling : null;
  n.setAttribute(ee, Mr), n.setAttribute(Rr, He);
  var s = Gi();
  return s && n.setAttribute("nonce", s), r.insertBefore(n, i), n;
}, Ui = function() {
  function e(t) {
    this.element = jr(t), this.element.appendChild(document.createTextNode("")), this.sheet = function(r) {
      if (r.sheet)
        return r.sheet;
      for (var n = document.styleSheets, o = 0, i = n.length; o < i; o++) {
        var s = n[o];
        if (s.ownerNode === r)
          return s;
      }
      throw fe(17);
    }(this.element), this.length = 0;
  }
  return e.prototype.insertRule = function(t, r) {
    try {
      return this.sheet.insertRule(r, t), this.length++, !0;
    } catch {
      return !1;
    }
  }, e.prototype.deleteRule = function(t) {
    this.sheet.deleteRule(t), this.length--;
  }, e.prototype.getRule = function(t) {
    var r = this.sheet.cssRules[t];
    return r && r.cssText ? r.cssText : "";
  }, e;
}(), Vi = function() {
  function e(t) {
    this.element = jr(t), this.nodes = this.element.childNodes, this.length = 0;
  }
  return e.prototype.insertRule = function(t, r) {
    if (t <= this.length && t >= 0) {
      var n = document.createTextNode(r);
      return this.element.insertBefore(n, this.nodes[t] || null), this.length++, !0;
    }
    return !1;
  }, e.prototype.deleteRule = function(t) {
    this.element.removeChild(this.nodes[t]), this.length--;
  }, e.prototype.getRule = function(t) {
    return t < this.length ? this.nodes[t].textContent : "";
  }, e;
}(), Hi = function() {
  function e(t) {
    this.rules = [], this.length = 0;
  }
  return e.prototype.insertRule = function(t, r) {
    return t <= this.length && (this.rules.splice(t, 0, r), this.length++, !0);
  }, e.prototype.deleteRule = function(t) {
    this.rules.splice(t, 1), this.length--;
  }, e.prototype.getRule = function(t) {
    return t < this.length ? this.rules[t] : "";
  }, e;
}(), tr = Et, Yi = { isServer: !Et, useCSSOMInjection: !bi }, Lr = function() {
  function e(t, r, n) {
    t === void 0 && (t = ce), r === void 0 && (r = {});
    var o = this;
    this.options = I(I({}, Yi), t), this.gs = r, this.names = new Map(n), this.server = !!t.isServer, !this.server && Et && tr && (tr = !1, function(i) {
      for (var s = document.querySelectorAll(Bi), a = 0, c = s.length; a < c; a++) {
        var u = s[a];
        u && u.getAttribute(ee) !== Mr && (Fi(i, u), u.parentNode && u.parentNode.removeChild(u));
      }
    }(this)), zt(this, function() {
      return function(i) {
        for (var s = i.getTag(), a = s.length, c = "", u = function(d) {
          var f = function(k) {
            return Be.get(k);
          }(d);
          if (f === void 0)
            return "continue";
          var h = i.names.get(f), y = s.getGroup(d);
          if (h === void 0 || y.length === 0)
            return "continue";
          var x = "".concat(ee, ".g").concat(d, '[id="').concat(f, '"]'), _ = "";
          h !== void 0 && h.forEach(function(k) {
            k.length > 0 && (_ += "".concat(k, ","));
          }), c += "".concat(y).concat(x, '{content:"').concat(_, '"}').concat(Pt);
        }, l = 0; l < a; l++)
          u(l);
        return c;
      }(o);
    });
  }
  return e.registerId = function(t) {
    return Oe(t);
  }, e.prototype.reconstructWithOptions = function(t, r) {
    return r === void 0 && (r = !0), new e(I(I({}, this.options), t), this.gs, r && this.names || void 0);
  }, e.prototype.allocateGSInstance = function(t) {
    return this.gs[t] = (this.gs[t] || 0) + 1;
  }, e.prototype.getTag = function() {
    return this.tag || (this.tag = (t = function(r) {
      var n = r.useCSSOMInjection, o = r.target;
      return r.isServer ? new Hi(o) : n ? new Ui(o) : new Vi(o);
    }(this.options), new Ti(t)));
    var t;
  }, e.prototype.hasNameForId = function(t, r) {
    return this.names.has(t) && this.names.get(t).has(r);
  }, e.prototype.registerName = function(t, r) {
    if (Oe(t), this.names.has(t))
      this.names.get(t).add(r);
    else {
      var n = /* @__PURE__ */ new Set();
      n.add(r), this.names.set(t, n);
    }
  }, e.prototype.insertRules = function(t, r, n) {
    this.registerName(t, r), this.getTag().insertRules(Oe(t), n);
  }, e.prototype.clearNames = function(t) {
    this.names.has(t) && this.names.get(t).clear();
  }, e.prototype.clearRules = function(t) {
    this.getTag().clearGroup(Oe(t)), this.clearNames(t);
  }, e.prototype.clearTag = function() {
    this.tag = void 0;
  }, e;
}(), qi = /&/g, Xi = /^\s*\/\/.*$/gm;
function Fr(e, t) {
  return e.map(function(r) {
    return r.type === "rule" && (r.value = "".concat(t, " ").concat(r.value), r.value = r.value.replaceAll(",", ",".concat(t, " ")), r.props = r.props.map(function(n) {
      return "".concat(t, " ").concat(n);
    })), Array.isArray(r.children) && r.type !== "@keyframes" && (r.children = Fr(r.children, t)), r;
  });
}
function Zi(e) {
  var t, r, n, o = ce, i = o.options, s = i === void 0 ? ce : i, a = o.plugins, c = a === void 0 ? Ye : a, u = function(f, h, y) {
    return y.startsWith(r) && y.endsWith(r) && y.replaceAll(r, "").length > 0 ? ".".concat(t) : f;
  }, l = c.slice();
  l.push(function(f) {
    f.type === Fe && f.value.includes("&") && (f.props[0] = f.props[0].replace(qi, r).replace(n, u));
  }), s.prefix && l.push(yi), l.push(hi);
  var d = function(f, h, y, x) {
    h === void 0 && (h = ""), y === void 0 && (y = ""), x === void 0 && (x = "&"), t = x, r = h, n = new RegExp("\\".concat(r, "\\b"), "g");
    var _ = f.replace(Xi, ""), k = fi(y || h ? "".concat(y, " ").concat(h, " { ").concat(_, " }") : _);
    s.namespace && (k = Fr(k, s.namespace));
    var P = [];
    return We(k, mi(l.concat(gi(function(S) {
      return P.push(S);
    })))), P;
  };
  return d.hash = c.length ? c.reduce(function(f, h) {
    return h.name || fe(15), X(f, h.name);
  }, Ir).toString() : "", d;
}
var Ki = new Lr(), mt = Zi(), Gr = Q.createContext({ shouldForwardProp: void 0, styleSheet: Ki, stylis: mt });
Gr.Consumer;
Q.createContext(void 0);
function rr() {
  return tn(Gr);
}
var nr = function() {
  function e(t, r) {
    var n = this;
    this.inject = function(o, i) {
      i === void 0 && (i = mt);
      var s = n.name + i.hash;
      o.hasNameForId(n.id, s) || o.insertRules(n.id, s, i(n.rules, s, "@keyframes"));
    }, this.name = t, this.id = "sc-keyframes-".concat(t), this.rules = r, zt(this, function() {
      throw fe(12, String(n.name));
    });
  }
  return e.prototype.getName = function(t) {
    return t === void 0 && (t = mt), this.name + t.hash;
  }, e;
}(), Ji = function(e) {
  return e >= "A" && e <= "Z";
};
function or(e) {
  for (var t = "", r = 0; r < e.length; r++) {
    var n = e[r];
    if (r === 1 && n === "-" && e[0] === "-")
      return e;
    Ji(n) ? t += "-" + n.toLowerCase() : t += n;
  }
  return t.startsWith("ms-") ? "-" + t : t;
}
var Ur = function(e) {
  return e == null || e === !1 || e === "";
}, Vr = function(e) {
  var t, r, n = [];
  for (var o in e) {
    var i = e[o];
    e.hasOwnProperty(o) && !Ur(i) && (Array.isArray(i) && i.isCss || ue(i) ? n.push("".concat(or(o), ":"), i, ";") : le(i) ? n.push.apply(n, ie(ie(["".concat(o, " {")], Vr(i), !1), ["}"], !1)) : n.push("".concat(or(o), ": ").concat((t = o, (r = i) == null || typeof r == "boolean" || r === "" ? "" : typeof r != "number" || r === 0 || t in vi || t.startsWith("--") ? String(r).trim() : "".concat(r, "px")), ";")));
  }
  return n;
};
function J(e, t, r, n) {
  if (Ur(e))
    return [];
  if (Ct(e))
    return [".".concat(e.styledComponentId)];
  if (ue(e)) {
    if (!ue(i = e) || i.prototype && i.prototype.isReactComponent || !t)
      return [e];
    var o = e(t);
    return process.env.NODE_ENV === "production" || typeof o != "object" || Array.isArray(o) || o instanceof nr || le(o) || o === null || console.error("".concat(Dr(e), " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.")), J(o, t, r, n);
  }
  var i;
  return e instanceof nr ? r ? (e.inject(r, n), [e.getName(n)]) : [e] : le(e) ? Vr(e) : Array.isArray(e) ? Array.prototype.concat.apply(Ye, e.map(function(s) {
    return J(s, t, r, n);
  })) : [e.toString()];
}
function Qi(e) {
  for (var t = 0; t < e.length; t += 1) {
    var r = e[t];
    if (ue(r) && !Ct(r))
      return !1;
  }
  return !0;
}
var es = $r(He), ts = function() {
  function e(t, r, n) {
    this.rules = t, this.staticRulesId = "", this.isStatic = process.env.NODE_ENV === "production" && (n === void 0 || n.isStatic) && Qi(t), this.componentId = r, this.baseHash = X(es, r), this.baseStyle = n, Lr.registerId(r);
  }
  return e.prototype.generateAndInjectStyles = function(t, r, n) {
    var o = this.baseStyle ? this.baseStyle.generateAndInjectStyles(t, r, n) : "";
    if (this.isStatic && !n.hash)
      if (this.staticRulesId && r.hasNameForId(this.componentId, this.staticRulesId))
        o = Z(o, this.staticRulesId);
      else {
        var i = er(J(this.rules, t, r, n)), s = pt(X(this.baseHash, i) >>> 0);
        if (!r.hasNameForId(this.componentId, s)) {
          var a = n(i, ".".concat(s), void 0, this.componentId);
          r.insertRules(this.componentId, s, a);
        }
        o = Z(o, s), this.staticRulesId = s;
      }
    else {
      for (var c = X(this.baseHash, n.hash), u = "", l = 0; l < this.rules.length; l++) {
        var d = this.rules[l];
        if (typeof d == "string")
          u += d, process.env.NODE_ENV !== "production" && (c = X(c, d));
        else if (d) {
          var f = er(J(d, t, r, n));
          c = X(c, f + l), u += f;
        }
      }
      if (u) {
        var h = pt(c >>> 0);
        r.hasNameForId(this.componentId, h) || r.insertRules(this.componentId, h, n(u, ".".concat(h), void 0, this.componentId)), o = Z(o, h);
      }
    }
    return o;
  }, e;
}(), Hr = Q.createContext(void 0);
Hr.Consumer;
var it = {}, ir = /* @__PURE__ */ new Set();
function rs(e, t, r) {
  var n = Ct(e), o = e, i = !ot(e), s = t.attrs, a = s === void 0 ? Ye : s, c = t.componentId, u = c === void 0 ? function(w, v) {
    var m = typeof w != "string" ? "sc" : Xt(w);
    it[m] = (it[m] || 0) + 1;
    var p = "".concat(m, "-").concat(Ei(He + m + it[m]));
    return v ? "".concat(v, "-").concat(p) : p;
  }(t.displayName, t.parentComponentId) : c, l = t.displayName, d = l === void 0 ? function(w) {
    return ot(w) ? "styled.".concat(w) : "Styled(".concat(Dr(w), ")");
  }(e) : l, f = t.displayName && t.componentId ? "".concat(Xt(t.displayName), "-").concat(t.componentId) : t.componentId || u, h = n && o.attrs ? o.attrs.concat(a).filter(Boolean) : a, y = t.shouldForwardProp;
  if (n && o.shouldForwardProp) {
    var x = o.shouldForwardProp;
    if (t.shouldForwardProp) {
      var _ = t.shouldForwardProp;
      y = function(w, v) {
        return x(w, v) && _(w, v);
      };
    } else
      y = x;
  }
  var k = new ts(r, f, n ? o.componentStyle : void 0);
  function P(w, v) {
    return function(m, p, T) {
      var M = m.attrs, we = m.componentStyle, te = m.defaultProps, Y = m.foldedComponentIds, F = m.styledComponentId, xe = m.target, Xr = Q.useContext(Hr), Zr = rr(), qe = m.shouldForwardProp || Zr.shouldForwardProp;
      process.env.NODE_ENV !== "production" && Ot(F);
      var _t = wi(p, Xr, te) || ce, j = function(ke, ge, Pe) {
        for (var re, q = I(I({}, ge), { className: void 0, theme: Pe }), Ke = 0; Ke < ke.length; Ke += 1) {
          var Ee = ue(re = ke[Ke]) ? re(q) : re;
          for (var G in Ee)
            q[G] = G === "className" ? Z(q[G], Ee[G]) : G === "style" ? I(I({}, q[G]), Ee[G]) : Ee[G];
        }
        return ge.className && (q.className = Z(q.className, ge.className)), q;
      }(M, p, _t), he = j.as || xe, me = {};
      for (var $ in j)
        j[$] === void 0 || $[0] === "$" || $ === "as" || $ === "theme" && j.theme === _t || ($ === "forwardedAs" ? me.as = j.forwardedAs : qe && !qe($, he) || (me[$] = j[$], qe || process.env.NODE_ENV !== "development" || Qo($) || ir.has($) || !ft.has(he) || (ir.add($), console.warn('styled-components: it looks like an unknown prop "'.concat($, '" is being sent through to the DOM, which will likely trigger a React console error. If you would like automatic filtering of unknown props, you can opt-into that behavior via `<StyleSheetManager shouldForwardProp={...}>` (connect an API like `@emotion/is-prop-valid`) or consider using transient props (`$` prefix for automatic filtering.)')))));
      var Xe = function(ke, ge) {
        var Pe = rr(), re = ke.generateAndInjectStyles(ge, Pe.styleSheet, Pe.stylis);
        return process.env.NODE_ENV !== "production" && Ot(re), re;
      }(we, j);
      process.env.NODE_ENV !== "production" && m.warnTooManyClasses && m.warnTooManyClasses(Xe);
      var Ze = Z(Y, F);
      return Xe && (Ze += " " + Xe), j.className && (Ze += " " + j.className), me[ot(he) && !ft.has(he) ? "class" : "className"] = Ze, me.ref = T, en(he, me);
    }(S, w, v);
  }
  P.displayName = d;
  var S = Q.forwardRef(P);
  return S.attrs = h, S.componentStyle = k, S.displayName = d, S.shouldForwardProp = y, S.foldedComponentIds = n ? Z(o.foldedComponentIds, o.styledComponentId) : "", S.styledComponentId = f, S.target = n ? o.target : e, Object.defineProperty(S, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(w) {
    this._foldedDefaultProps = n ? function(v) {
      for (var m = [], p = 1; p < arguments.length; p++)
        m[p - 1] = arguments[p];
      for (var T = 0, M = m; T < M.length; T++)
        ht(v, M[T], !0);
      return v;
    }({}, o.defaultProps, w) : w;
  } }), process.env.NODE_ENV !== "production" && (Si(d, f), S.warnTooManyClasses = /* @__PURE__ */ function(w, v) {
    var m = {}, p = !1;
    return function(T) {
      if (!p && (m[T] = !0, Object.keys(m).length >= 200)) {
        var M = v ? ' with the id of "'.concat(v, '"') : "";
        console.warn("Over ".concat(200, " classes were generated for component ").concat(w).concat(M, `.
`) + `Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`), p = !0, m = {};
      }
    };
  }(d, f)), zt(S, function() {
    return ".".concat(S.styledComponentId);
  }), i && Br(S, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0 }), S;
}
function sr(e, t) {
  for (var r = [e[0]], n = 0, o = t.length; n < o; n += 1)
    r.push(t[n], e[n + 1]);
  return r;
}
var ar = function(e) {
  return Object.assign(e, { isCss: !0 });
};
function ns(e) {
  for (var t = [], r = 1; r < arguments.length; r++)
    t[r - 1] = arguments[r];
  if (ue(e) || le(e))
    return ar(J(sr(Ye, ie([e], t, !0))));
  var n = e;
  return t.length === 0 && n.length === 1 && typeof n[0] == "string" ? J(n) : ar(J(sr(n, t)));
}
function gt(e, t, r) {
  if (r === void 0 && (r = ce), !t)
    throw fe(1, t);
  var n = function(o) {
    for (var i = [], s = 1; s < arguments.length; s++)
      i[s - 1] = arguments[s];
    return e(t, r, ns.apply(void 0, ie([o], i, !1)));
  };
  return n.attrs = function(o) {
    return gt(e, t, I(I({}, r), { attrs: Array.prototype.concat(r.attrs, o).filter(Boolean) }));
  }, n.withConfig = function(o) {
    return gt(e, t, I(I({}, r), o));
  }, n;
}
var Yr = function(e) {
  return gt(rs, e);
}, pe = Yr;
ft.forEach(function(e) {
  pe[e] = Yr(e);
});
process.env.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`);
var Ae = "__sc-".concat(ee, "__");
process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "test" && typeof window < "u" && (window[Ae] || (window[Ae] = 0), window[Ae] === 1 && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window[Ae] += 1);
const qr = pe.div`
  background: #000;
  opacity: 0.2;
  z-index: 1;
  box-sizing: border-box;
  background-clip: padding-box;

  :hover {
    transition: all 2s ease;
  }
`, os = pe(qr)`
  height: 11px;
  margin: -5px 0;
  border-top: 5px solid rgba(255, 255, 255, 0);
  border-bottom: 5px solid rgba(255, 255, 255, 0);
  cursor: row-resize;
  width: 100%;

  :hover {
    border-top: 5px solid rgba(0, 0, 0, 0.5);
    border-bottom: 5px solid rgba(0, 0, 0, 0.5);
  }

  .disabled {
    cursor: not-allowed;
  }
  .disabled:hover {
    border-color: transparent;
  }
`, is = pe(qr)`
  width: 11px;
  margin: 0 -5px;
  border-left: 5px solid rgba(255, 255, 255, 0);
  border-right: 5px solid rgba(255, 255, 255, 0);
  cursor: col-resize;

  :hover {
    border-left: 5px solid rgba(0, 0, 0, 0.5);
    border-right: 5px solid rgba(0, 0, 0, 0.5);
  }
  .disabled {
    cursor: not-allowed;
  }
  .disabled:hover {
    border-color: transparent;
  }
`;
class ss extends dr {
  render() {
    const {
      index: t,
      split: r = "vertical",
      onClick: n = () => {
      },
      onDoubleClick: o = () => {
      },
      onMouseDown: i = () => {
      },
      onTouchEnd: s = () => {
      },
      onTouchStart: a = () => {
      }
    } = this.props, c = {
      ref: (u) => this.resizer = u,
      "data-attribute": r,
      "data-type": "Resizer",
      onMouseDown: (u) => i(u, t),
      onTouchStart: (u) => {
        u.preventDefault(), a(u, t);
      },
      onTouchEnd: (u) => {
        u.preventDefault(), s(u, t);
      },
      onClick: (u) => {
        n && (u.preventDefault(), n(u, t));
      },
      onDoubleClick: (u) => {
        o && (u.preventDefault(), o(u, t));
      }
    };
    return r === "vertical" ? /* @__PURE__ */ oe(is, { ...c }) : /* @__PURE__ */ oe(os, { ...c });
  }
}
const as = "1", cs = "0", us = "100%", ls = pe.div({
  display: "flex",
  height: "100%",
  flexDirection: "column",
  flex: 1,
  outline: "none",
  overflow: "hidden",
  userSelect: "text"
}), ds = pe.div({
  display: "flex",
  height: "100%",
  flexDirection: "row",
  flex: 1,
  outline: "none",
  overflow: "hidden",
  userSelect: "text"
});
function cr(e, t) {
  const r = e.match(/([0-9]+)([px|%]*)/);
  if (!r || r.length < 2)
    return;
  const n = r[1], o = r[2];
  return fs(parseInt(n), t, o);
}
function fs(e, t, r = "px") {
  switch (r) {
    case "%":
      return +(t * e / 100).toFixed(2);
    default:
      return +e;
  }
}
function Me(e) {
  return Q.Children.toArray(e).filter((t) => t);
}
function je(e) {
  return e.endsWith("px") ? "px" : e.endsWith("%") ? "%" : "ratio";
}
function st(e, t) {
  if (je(e) !== "%" || !t)
    return e;
  const r = e.search("%"), n = parseInt(e.slice(0, r)) / 100;
  return n === 0 ? e : `calc(${e} - ${t}px*${n})`;
}
function ur(e, t, r) {
  switch (t) {
    case "%":
      return `${(e / (r ?? 0) * 100).toFixed(2)}%`;
    case "px":
      return `${e.toFixed(2)}px`;
    case "ratio":
      return (e * 100).toFixed(0);
  }
}
class vs extends dr {
  constructor(r) {
    super(r);
    A(this, "splitPane");
    A(this, "paneElements");
    A(this, "resizerIndex");
    A(this, "dimensionsSnapshot");
    A(this, "startClientX");
    A(this, "startClientY");
    A(this, "onMouseDown", (r, n) => {
      r.button === 0 && (r.preventDefault(), this.onDown(n, r.clientX, r.clientY));
    });
    A(this, "onTouchStart", (r, n) => {
      r.preventDefault();
      const { clientX: o, clientY: i } = r.touches[0];
      this.onDown(n, o, i);
    });
    A(this, "onDown", (r, n, o) => {
      const { allowResize: i, onResizeStart: s } = this.props;
      i && (this.resizerIndex = r, this.dimensionsSnapshot = this.getDimensionsSnapshot(this.props), this.startClientX = n, this.startClientY = o, document.addEventListener("mousemove", this.onMouseMove), document.addEventListener("mouseup", this.onMouseUp), document.addEventListener("touchmove", this.onTouchMove), document.addEventListener("touchend", this.onMouseUp), document.addEventListener("touchcancel", this.onMouseUp), s && s());
    });
    A(this, "onMouseMove", (r) => {
      r.preventDefault(), this.onMove(r.clientX, r.clientY);
    });
    A(this, "onTouchMove", (r) => {
      r.preventDefault();
      const { clientX: n, clientY: o } = r.touches[0];
      this.onMove(n, o);
    });
    A(this, "onMouseUp", (r) => {
      r.preventDefault(), document.removeEventListener("mouseup", this.onMouseUp), document.removeEventListener("mousemove", this.onMouseMove), document.removeEventListener("touchmove", this.onTouchMove), document.removeEventListener("touchend", this.onMouseUp), document.addEventListener("touchcancel", this.onMouseUp), this.props.onResizeEnd && this.props.onResizeEnd(this.state.sizes);
    });
    A(this, "setPaneRef", (r, n) => {
      this.paneElements || (this.paneElements = []), this.paneElements[r] = n;
    });
    this.splitPane = Q.createRef(), this.paneElements = [], this.resizerIndex = -1, this.dimensionsSnapshot = null, this.startClientX = 0, this.startClientY = 0, this.state = {
      sizes: this.getPanePropSize(r)
    };
  }
  componentWillReceiveProps(r) {
    this.setState({ sizes: this.getPanePropSize(r) });
  }
  componentWillUnmount() {
    document.removeEventListener("mouseup", this.onMouseUp), document.removeEventListener("mousemove", this.onMouseMove), document.removeEventListener("touchmove", this.onTouchMove), document.removeEventListener("touchend", this.onMouseUp);
  }
  getDimensionsSnapshot(r) {
    var h;
    const n = r.split, o = this.getPaneDimensions(), i = (h = this.splitPane.current) == null ? void 0 : h.getBoundingClientRect();
    if (!i)
      return;
    const s = this.getPanePropMinMaxSize(r, "minSize"), a = this.getPanePropMinMaxSize(r, "maxSize"), c = this.getResizersSize(
      Me(this.props.children)
    ), u = n === "vertical" ? i.width - c : i.height - c, l = s.map((y) => cr(y, u)), d = a.map((y) => cr(y, u)), f = o.map(
      (y) => n === "vertical" ? y.width : y.height
    );
    return {
      resizersSize: c,
      paneDimensions: o,
      splitPaneSizePx: u,
      minSizesPx: l,
      maxSizesPx: d,
      sizesPx: f
    };
  }
  getPanePropSize(r) {
    return Me(r.children).map((n) => {
      const o = n.props.size || n.props.initialSize;
      return o === void 0 ? as : String(o);
    });
  }
  getPanePropMinMaxSize(r, n) {
    return Me(r.children).map((o) => {
      const i = o.props[n];
      return i === void 0 ? n === "maxSize" ? us : cs : i;
    });
  }
  getPaneDimensions() {
    return this.paneElements.filter((r) => r).map((r) => r.getBoundingClientRect());
  }
  getSizes() {
    return this.state.sizes;
  }
  onMove(r, n) {
    const { split: o, onChange: i } = this.props, s = this.resizerIndex, { sizesPx: a, minSizesPx: c, maxSizesPx: u, splitPaneSizePx: l, paneDimensions: d } = this.dimensionsSnapshot, f = o === "vertical" ? "width" : "height", h = d[s], y = d[s + 1], x = h[f] + y[f], _ = c[s], k = c[s + 1], P = Math.min(u[s], x), S = Math.min(u[s + 1], x), w = o === "vertical" ? this.startClientX - r : this.startClientY - n;
    let v = h[f] - w, m = y[f] + w, p = !1, T = !1;
    v < _ ? (v = _, p = !0) : v > P && (v = P, p = !0), m < k ? (m = k, T = !0) : m > S && (m = S, T = !0), p ? m = h[f] + y[f] - v : T && (v = h[f] + y[f] - m), a[s] = v, a[s + 1] = m;
    let M = this.getSizes().concat(), we;
    if ([v, m].forEach((te, Y) => {
      const F = je(M[s + Y]);
      F !== "ratio" ? M[s + Y] = ur(
        te,
        F,
        l
      ) : we = !0;
    }), we) {
      let te = 0, Y = 0;
      M = M.map((F, xe) => je(F) === "ratio" ? (te++, Y = xe, ur(a[xe], "ratio")) : F), te === 1 && (M[Y] = "1");
    }
    i == null || i(M), this.setState({
      sizes: M
    });
  }
  getResizersSize(r) {
    return (r.length - 1) * (this.props.resizerSize ?? 1);
  }
  render() {
    const { children: r, className: n, split: o } = this.props, i = Me(r), s = this.getSizes(), a = this.getResizersSize(i), c = i.reduce((l, d, f) => {
      let h;
      const y = f - 1, x = d.type === lr, _ = {
        index: f,
        "data-type": "Pane",
        split: o,
        key: `Pane-${f}`,
        setRef: this.setPaneRef,
        resizersSize: a,
        size: s[f]
      };
      if (x ? h = rn(d, _) : h = /* @__PURE__ */ oe(lr, { ..._, children: d }), l.length === 0)
        return [...l, h];
      {
        const k = /* @__PURE__ */ oe(
          ss,
          {
            index: y,
            split: o,
            onMouseDown: this.onMouseDown,
            onTouchStart: this.onTouchStart
          },
          `Resizer-${y}`
        );
        return [...l, k, h];
      }
    }, []);
    return /* @__PURE__ */ oe(
      o === "vertical" ? ds : ls,
      {
        className: n,
        "data-type": "SplitPane",
        "data-split": o,
        ref: this.splitPane,
        children: c
      }
    );
  }
}
function ps({
  split: e = "vertical",
  initialSize: t = "1",
  size: r,
  minSize: n = "0",
  maxSize: o = "100%",
  resizersSize: i = 1
}) {
  const s = r || t, a = e === "vertical", c = {
    minSize: a ? "minWidth" : "minHeight",
    maxSize: a ? "maxWidth" : "maxHeight",
    size: a ? "width" : "height"
  };
  let u = {
    display: "flex",
    outline: "none"
  };
  switch (u[c.minSize] = st(n, i), u[c.maxSize] = st(o, i), je(s.toString())) {
    case "ratio":
      u.flex = s;
      break;
    case "%":
    case "px":
      u.flexGrow = 0, u[c.size] = st(
        s.toString(),
        i
      );
      break;
  }
  return u;
}
class hs extends nn {
  constructor() {
    super(...arguments);
    A(this, "setRef", (r) => {
      var n, o;
      (o = (n = this.props).setRef) == null || o.call(n, this.props.index ?? 0, r);
    });
  }
  render() {
    const { children: r, className: n } = this.props, o = Zo(ps(this.props));
    return /* @__PURE__ */ oe("div", { className: n, style: o, ref: this.setRef, children: r });
  }
}
const lr = hs;
export {
  lr as Pane,
  ss as Resizer,
  vs as default
};
