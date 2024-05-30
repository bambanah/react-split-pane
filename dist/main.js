import { jsx as fe } from "react/jsx-runtime";
import te, { useRef as Pe, useDebugValue as jt, createElement as fn, useContext as ln, useState as Ft, useEffect as dn, cloneElement as pn } from "react";
function gt(e) {
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function hn(e, t, r) {
  var n = e[t];
  if (n && r.hasOwnProperty(t))
    for (var o = gt(t), i = 0; i < n.length; ++i) {
      var a = n[i] + o;
      r[a] || (r[a] = r[t]);
    }
  return r;
}
function Lt(e, t, r, n, o) {
  for (var i = 0, a = e.length; i < a; ++i) {
    var s = e[i](t, r, n, o);
    if (s)
      return s;
  }
}
function Gt(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function mn(e, t) {
  if (Array.isArray(t))
    for (var r = 0, n = t.length; r < n; ++r)
      Gt(e, t[r]);
  else
    Gt(e, t);
}
function gn(e) {
  return e instanceof Object && !Array.isArray(e);
}
function yn(e) {
  var t = e.prefixMap, r = e.plugins;
  return function n(o) {
    for (var i in o) {
      var a = o[i];
      if (gn(a))
        o[i] = n(a);
      else if (Array.isArray(a)) {
        for (var s = [], c = 0, u = a.length; c < u; ++c) {
          var f = Lt(r, i, a[c], o, t);
          mn(s, f || a[c]);
        }
        s.length > 0 && (o[i] = s);
      } else {
        var d = Lt(r, i, a, o, t);
        d && (o[i] = d), o = hn(t, i, o);
      }
    }
    return o;
  };
}
function kr(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function Pr(e) {
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
var Er = {};
function je(e) {
  "@babel/helpers - typeof";
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? je = function(r) {
    return typeof r;
  } : je = function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, je(e);
}
function vn(e) {
  return xn(e) || wn(e) || Sn(e) || bn();
}
function bn() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Sn(e, t) {
  if (e) {
    if (typeof e == "string")
      return yt(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set")
      return Array.from(r);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return yt(e, t);
  }
}
function wn(e) {
  if (typeof Symbol < "u" && Symbol.iterator in Object(e))
    return Array.from(e);
}
function xn(e) {
  if (Array.isArray(e))
    return yt(e);
}
function yt(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
function Vt(e) {
  return e.filter(function(t, r) {
    return e.lastIndexOf(t) === r;
  });
}
function _r(e) {
  for (var t = 0, r = arguments.length <= 1 ? 0 : arguments.length - 1; t < r; ++t) {
    var n = t + 1 < 1 || arguments.length <= t + 1 ? void 0 : arguments[t + 1];
    for (var o in n) {
      var i = n[o], a = e[o];
      if (a && i) {
        if (Array.isArray(a)) {
          e[o] = Vt(a.concat(i));
          continue;
        }
        if (Array.isArray(i)) {
          e[o] = Vt([a].concat(vn(i)));
          continue;
        }
        if (je(i) === "object") {
          e[o] = _r({}, a, i);
          continue;
        }
      }
      e[o] = i;
    }
  }
  return e;
}
var kn = /-([a-z])/g, Pn = /^Ms/g, st = {};
function En(e) {
  return e[1].toUpperCase();
}
function Cr(e) {
  if (st.hasOwnProperty(e))
    return st[e];
  var t = e.replace(kn, En).replace(Pn, "ms");
  return st[e] = t, t;
}
var _n = /[A-Z]/g, Cn = /^ms-/, ct = {};
function An(e) {
  return "-" + e.toLowerCase();
}
function Ar(e) {
  if (ct.hasOwnProperty(e))
    return ct[e];
  var t = e.replace(_n, An);
  return ct[e] = Cn.test(t) ? "-" + t : t;
}
const On = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ar
}, Symbol.toStringTag, { value: "Module" }));
function Xe(e) {
  return Ar(e);
}
function Or(e, t) {
  return Xe(e) + ":" + t;
}
function zn(e) {
  var t = "";
  for (var r in e) {
    var n = e[r];
    typeof n != "string" && typeof n != "number" || (t && (t += ";"), t += Or(r, n));
  }
  return t;
}
var Rn = /^(Webkit|Moz|O|ms)/;
function $n(e) {
  return Rn.test(e);
}
var In = /-webkit-|-moz-|-ms-/;
function _t(e) {
  return typeof e == "string" && In.test(e);
}
var Ce = {
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
}, Ht = ["animationIterationCount", "boxFlex", "boxFlexGroup", "boxOrdinalGroup", "columnCount", "flex", "flexGrow", "flexPositive", "flexShrink", "flexNegative", "flexOrder", "gridColumn", "gridColumnEnd", "gridColumnStart", "gridRow", "gridRowEnd", "gridRowStart", "lineClamp", "order"], Ut = ["Webkit", "ms", "Moz", "O"];
function Mn(e, t) {
  return e + t.charAt(0).toUpperCase() + t.slice(1);
}
for (var ut = 0, Nn = Ht.length; ut < Nn; ++ut) {
  var Yt = Ht[ut];
  Ce[Yt] = !0;
  for (var ft = 0, Tn = Ut.length; ft < Tn; ++ft)
    Ce[Mn(Ut[ft], Yt)] = !0;
}
for (var Dn in Ce)
  Ce[Xe(Dn)] = !0;
function Wn(e) {
  return Ce.hasOwnProperty(e);
}
var Bn = /^(ms|Webkit|Moz|O)/;
function zr(e) {
  var t = e.replace(Bn, "");
  return t.charAt(0).toLowerCase() + t.slice(1);
}
function jn(e) {
  return zr(Cr(e));
}
function Fn(e, t) {
  return t.join(";" + Xe(e) + ":");
}
var Ln = /(-ms-|-webkit-|-moz-|-o-)/g;
function Gn(e) {
  return typeof e == "string" ? e.replace(Ln, "") : e;
}
const Vn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  assignStyle: _r,
  camelCaseProperty: Cr,
  cssifyDeclaration: Or,
  cssifyObject: zn,
  hyphenateProperty: Xe,
  isPrefixedProperty: $n,
  isPrefixedValue: _t,
  isUnitlessProperty: Wn,
  normalizeProperty: jn,
  resolveArrayValue: Fn,
  unprefixProperty: zr,
  unprefixValue: Gn
}, Symbol.toStringTag, { value: "Module" })), Hn = /* @__PURE__ */ Pr(Vn);
Object.defineProperty(Er, "__esModule", {
  value: !0
});
var Un = Er.default = Zn, Yn = Hn, qn = /cross-fade\(/g, Xn = ["-webkit-", ""];
function Zn(e, t) {
  if (typeof t == "string" && !(0, Yn.isPrefixedValue)(t) && t.indexOf("cross-fade(") !== -1)
    return Xn.map(function(r) {
      return t.replace(qn, r + "cross-fade(");
    });
}
var Rr = {}, Ae = {};
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = r;
  var t = /-webkit-|-moz-|-ms-/;
  function r(n) {
    return typeof n == "string" && t.test(n);
  }
})(Ae);
const Ct = /* @__PURE__ */ kr(Ae);
Object.defineProperty(Rr, "__esModule", {
  value: !0
});
var Kn = Rr.default = ro, Jn = Ae, Qn = eo(Jn);
function eo(e) {
  return e && e.__esModule ? e : { default: e };
}
var to = ["-webkit-", "-moz-", ""], qt = /linear-gradient|radial-gradient|repeating-linear-gradient|repeating-radial-gradient/gi;
function ro(e, t) {
  if (typeof t == "string" && !(0, Qn.default)(t) && qt.test(t))
    return to.map(function(r) {
      return t.replace(qt, function(n) {
        return r + n;
      });
    });
}
var $r = {};
Object.defineProperty($r, "__esModule", {
  value: !0
});
var no = $r.default = co, oo = Ae, io = ao(oo);
function ao(e) {
  return e && e.__esModule ? e : { default: e };
}
var so = ["-webkit-", ""];
function co(e, t) {
  if (typeof t == "string" && !(0, io.default)(t) && t.indexOf("image-set(") > -1)
    return so.map(function(r) {
      return t.replace(/image-set\(/g, r + "image-set(");
    });
}
var Ir = {};
Object.defineProperty(Ir, "__esModule", {
  value: !0
});
var uo = Ir.default = ho, fo = ["-webkit-", "-moz-", ""], lo = {
  maxHeight: !0,
  maxWidth: !0,
  width: !0,
  height: !0,
  columnWidth: !0,
  minWidth: !0,
  minHeight: !0
}, po = {
  "min-content": !0,
  "max-content": !0,
  "fill-available": !0,
  "fit-content": !0,
  "contain-floats": !0
};
function ho(e, t) {
  if (lo.hasOwnProperty(e) && po.hasOwnProperty(t))
    return fo.map(function(r) {
      return r + t;
    });
}
var Mr = {}, At = {};
const mo = /* @__PURE__ */ Pr(On);
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = o;
  var t = mo, r = n(t);
  function n(i) {
    return i && i.__esModule ? i : { default: i };
  }
  function o(i) {
    return (0, r.default)(i);
  }
})(At);
const go = /* @__PURE__ */ kr(At);
var Ot = {};
Object.defineProperty(Ot, "__esModule", {
  value: !0
});
Ot.default = yo;
function yo(e) {
  return e.charAt(0).toUpperCase() + e.slice(1);
}
Object.defineProperty(Mr, "__esModule", {
  value: !0
});
var vo = Mr.default = Co, bo = At, So = zt(bo), wo = Ae, xo = zt(wo), ko = Ot, Xt = zt(ko);
function zt(e) {
  return e && e.__esModule ? e : { default: e };
}
var Po = {
  transition: !0,
  transitionProperty: !0,
  WebkitTransition: !0,
  WebkitTransitionProperty: !0,
  MozTransition: !0,
  MozTransitionProperty: !0
}, Eo = {
  Webkit: "-webkit-",
  Moz: "-moz-",
  ms: "-ms-"
};
function _o(e, t) {
  if ((0, xo.default)(e))
    return e;
  for (var r = e.split(/,(?![^()]*(?:\([^()]*\))?\))/g), n = 0, o = r.length; n < o; ++n) {
    var i = r[n], a = [i];
    for (var s in t) {
      var c = (0, So.default)(s);
      if (i.indexOf(c) > -1 && c !== "order")
        for (var u = t[s], f = 0, d = u.length; f < d; ++f)
          a.unshift(i.replace(c, Eo[u[f]] + c));
    }
    r[n] = a.join(",");
  }
  return r.join(",");
}
function Co(e, t, r, n) {
  if (typeof t == "string" && Po.hasOwnProperty(e)) {
    var o = _o(t, n), i = o.split(/,(?![^()]*(?:\([^()]*\))?\))/g).filter(function(s) {
      return !/-moz-|-ms-/.test(s);
    }).join(",");
    if (e.indexOf("Webkit") > -1)
      return i;
    var a = o.split(/,(?![^()]*(?:\([^()]*\))?\))/g).filter(function(s) {
      return !/-webkit-|-ms-/.test(s);
    }).join(",");
    return e.indexOf("Moz") > -1 ? a : (r["Webkit" + (0, Xt.default)(e)] = i, r["Moz" + (0, Xt.default)(e)] = a, o);
  }
}
var J = ["Webkit"], Ao = ["Moz"], D = ["ms"], O = ["Webkit", "ms"], Oo = ["Webkit", "Moz", "ms"];
const zo = {
  plugins: [Un, Kn, no, uo, vo],
  prefixMap: { appearance: Oo, textEmphasisPosition: O, textEmphasis: O, textEmphasisStyle: O, textEmphasisColor: O, boxDecorationBreak: O, maskImage: O, maskMode: O, maskRepeat: O, maskPosition: O, maskClip: O, maskOrigin: O, maskSize: O, maskComposite: O, mask: O, maskBorderSource: O, maskBorderMode: O, maskBorderSlice: O, maskBorderWidth: O, maskBorderOutset: O, maskBorderRepeat: O, maskBorder: O, maskType: O, userSelect: O, backdropFilter: J, clipPath: J, hyphens: O, textOrientation: J, tabSize: Ao, wrapFlow: D, wrapThrough: D, wrapMargin: D, scrollSnapType: D, scrollSnapPointsX: D, scrollSnapPointsY: D, scrollSnapDestination: D, scrollSnapCoordinate: D, textSizeAdjust: ["ms", "Webkit"], flowInto: D, flowFrom: D, breakBefore: D, breakAfter: D, breakInside: D, regionFragment: D, fontKerning: J, textDecorationStyle: J, textDecorationSkip: J, textDecorationLine: J, textDecorationColor: J }
};
var Ro = ["-webkit-", "-moz-", ""], $o = {
  "zoom-in": !0,
  "zoom-out": !0,
  grab: !0,
  grabbing: !0
};
function Io(e, t) {
  if (e === "cursor" && $o.hasOwnProperty(t))
    return Ro.map(function(r) {
      return r + t;
    });
}
var Mo = /cross-fade\(/g, No = ["-webkit-", ""];
function To(e, t) {
  if (typeof t == "string" && !_t(t) && t.indexOf("cross-fade(") !== -1)
    return No.map(function(r) {
      return t.replace(Mo, r + "cross-fade(");
    });
}
var Do = /filter\(/g, Wo = ["-webkit-", ""];
function Bo(e, t) {
  if (typeof t == "string" && !_t(t) && t.indexOf("filter(") !== -1)
    return Wo.map(function(r) {
      return t.replace(Do, r + "filter(");
    });
}
var Zt = {
  flex: ["-webkit-box", "-moz-box", "-ms-flexbox", "-webkit-flex", "flex"],
  "inline-flex": ["-webkit-inline-box", "-moz-inline-box", "-ms-inline-flexbox", "-webkit-inline-flex", "inline-flex"]
};
function jo(e, t) {
  if (e === "display" && Zt.hasOwnProperty(t))
    return Zt[t];
}
var Fo = {
  "space-around": "justify",
  "space-between": "justify",
  "flex-start": "start",
  "flex-end": "end",
  "wrap-reverse": "multiple",
  wrap: "multiple"
}, Kt = {
  alignItems: "WebkitBoxAlign",
  justifyContent: "WebkitBoxPack",
  flexWrap: "WebkitBoxLines",
  flexGrow: "WebkitBoxFlex"
};
function Lo(e, t, r) {
  e === "flexDirection" && typeof t == "string" && (t.indexOf("column") > -1 ? r.WebkitBoxOrient = "vertical" : r.WebkitBoxOrient = "horizontal", t.indexOf("reverse") > -1 ? r.WebkitBoxDirection = "reverse" : r.WebkitBoxDirection = "normal"), Kt.hasOwnProperty(e) && (r[Kt[e]] = Fo[t] || t);
}
var Go = ["-webkit-", "-moz-", ""], Jt = /linear-gradient|radial-gradient|repeating-linear-gradient|repeating-radial-gradient/gi;
function Vo(e, t) {
  if (typeof t == "string" && !Ct(t) && Jt.test(t))
    return Go.map(function(r) {
      return t.replace(Jt, function(n) {
        return r + n;
      });
    });
}
var Me = /* @__PURE__ */ function() {
  function e(t, r) {
    var n = [], o = !0, i = !1, a = void 0;
    try {
      for (var s = t[Symbol.iterator](), c; !(o = (c = s.next()).done) && (n.push(c.value), !(r && n.length === r)); o = !0)
        ;
    } catch (u) {
      i = !0, a = u;
    } finally {
      try {
        !o && s.return && s.return();
      } finally {
        if (i)
          throw a;
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
function Q(e) {
  return typeof e == "number" && !isNaN(e);
}
function Qt(e) {
  return typeof e == "string" && e.includes("/");
}
var er = ["center", "end", "start", "stretch"], tr = {
  "inline-grid": ["-ms-inline-grid", "inline-grid"],
  grid: ["-ms-grid", "grid"]
}, q = {
  alignSelf: function(t, r) {
    er.indexOf(t) > -1 && (r.msGridRowAlign = t);
  },
  gridColumn: function(t, r) {
    if (Q(t))
      r.msGridColumn = t;
    else if (Qt(t)) {
      var n = t.split("/"), o = Me(n, 2), i = o[0], a = o[1];
      q.gridColumnStart(+i, r);
      var s = a.split(/ ?span /), c = Me(s, 2), u = c[0], f = c[1];
      u === "" ? q.gridColumnEnd(+i + +f, r) : q.gridColumnEnd(+a, r);
    } else
      q.gridColumnStart(t, r);
  },
  gridColumnEnd: function(t, r) {
    var n = r.msGridColumn;
    Q(t) && Q(n) && (r.msGridColumnSpan = t - n);
  },
  gridColumnStart: function(t, r) {
    Q(t) && (r.msGridColumn = t);
  },
  gridRow: function(t, r) {
    if (Q(t))
      r.msGridRow = t;
    else if (Qt(t)) {
      var n = t.split("/"), o = Me(n, 2), i = o[0], a = o[1];
      q.gridRowStart(+i, r);
      var s = a.split(/ ?span /), c = Me(s, 2), u = c[0], f = c[1];
      u === "" ? q.gridRowEnd(+i + +f, r) : q.gridRowEnd(+a, r);
    } else
      q.gridRowStart(t, r);
  },
  gridRowEnd: function(t, r) {
    var n = r.msGridRow;
    Q(t) && Q(n) && (r.msGridRowSpan = t - n);
  },
  gridRowStart: function(t, r) {
    Q(t) && (r.msGridRow = t);
  },
  gridTemplateColumns: function(t, r) {
    r.msGridColumns = t;
  },
  gridTemplateRows: function(t, r) {
    r.msGridRows = t;
  },
  justifySelf: function(t, r) {
    er.indexOf(t) > -1 && (r.msGridColumnAlign = t);
  }
};
function Ho(e, t, r) {
  if (e === "display" && t in tr)
    return tr[t];
  if (e in q) {
    var n = q[e];
    n(t, r);
  }
}
var Uo = ["-webkit-", ""];
function Yo(e, t) {
  if (typeof t == "string" && !Ct(t) && t.indexOf("image-set(") > -1)
    return Uo.map(function(r) {
      return t.replace(/image-set\(/g, r + "image-set(");
    });
}
var rr = {
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
function qo(e, t, r) {
  if (Object.prototype.hasOwnProperty.call(rr, e))
    for (var n = rr[e], o = 0, i = n.length; o < i; ++o)
      r[n[o]] = t;
}
function Xo(e, t) {
  if (e === "position" && t === "sticky")
    return ["-webkit-sticky", "sticky"];
}
var Zo = ["-webkit-", "-moz-", ""], Ko = {
  maxHeight: !0,
  maxWidth: !0,
  width: !0,
  height: !0,
  columnWidth: !0,
  minWidth: !0,
  minHeight: !0
}, Jo = {
  "min-content": !0,
  "max-content": !0,
  "fill-available": !0,
  "fit-content": !0,
  "contain-floats": !0
};
function Qo(e, t) {
  if (Ko.hasOwnProperty(e) && Jo.hasOwnProperty(t))
    return Zo.map(function(r) {
      return r + t;
    });
}
var ei = {
  transition: !0,
  transitionProperty: !0,
  WebkitTransition: !0,
  WebkitTransitionProperty: !0,
  MozTransition: !0,
  MozTransitionProperty: !0
}, ti = {
  Webkit: "-webkit-",
  Moz: "-moz-",
  ms: "-ms-"
};
function ri(e, t) {
  if (Ct(e))
    return e;
  for (var r = e.split(/,(?![^()]*(?:\([^()]*\))?\))/g), n = 0, o = r.length; n < o; ++n) {
    var i = r[n], a = [i];
    for (var s in t) {
      var c = go(s);
      if (i.indexOf(c) > -1 && c !== "order")
        for (var u = t[s], f = 0, d = u.length; f < d; ++f)
          a.unshift(i.replace(c, ti[u[f]] + c));
    }
    r[n] = a.join(",");
  }
  return r.join(",");
}
function ni(e, t, r, n) {
  if (typeof t == "string" && ei.hasOwnProperty(e)) {
    var o = ri(t, n), i = o.split(/,(?![^()]*(?:\([^()]*\))?\))/g).filter(function(s) {
      return !/-moz-|-ms-/.test(s);
    }).join(",");
    if (e.indexOf("Webkit") > -1)
      return i;
    var a = o.split(/,(?![^()]*(?:\([^()]*\))?\))/g).filter(function(s) {
      return !/-webkit-|-ms-/.test(s);
    }).join(",");
    return e.indexOf("Moz") > -1 ? a : (r["Webkit" + gt(e)] = i, r["Moz" + gt(e)] = a, o);
  }
}
var oi = [To, Io, Bo, Lo, Vo, Ho, Yo, qo, Xo, Qo, ni, jo], ii = yn({
  prefixMap: zo.prefixMap,
  plugins: oi
});
function Ue(e) {
  return e.endsWith("px") ? "px" : e.endsWith("rem") ? "rem" : e.endsWith("em") ? "em" : e.endsWith("%") ? "%" : "ratio";
}
function lt(e, t) {
  if (Ue(e) !== "%" || !t)
    return e;
  const r = e.search("%"), n = parseInt(e.slice(0, r)) / 100;
  return n === 0 ? e : `calc(${e} - ${t}px*${n})`;
}
function nr(e, t) {
  const r = RegExp(/(\d+)(px|em|rem|%)?/).exec(e);
  if (!r)
    return 0;
  const n = r[1], o = r[2];
  return ai(parseInt(n), t, o);
}
function ai(e, t, r = "px") {
  switch (r) {
    case "%":
      return +(t * e / 100).toFixed(2);
    case "em":
      return +(e * 16).toFixed(2);
    case "rem":
      return +(e * 16).toFixed(2);
    default:
      return +e;
  }
}
function Ne(e) {
  return te.Children.toArray(e).filter((t) => t);
}
function or(e, t, r) {
  switch (t) {
    case "%":
      return `${(e / (r ?? 0) * 100).toFixed(2)}%`;
    case "px":
      return `${e.toFixed(2)}px`;
    case "em":
      return `${e.toFixed(2)}em`;
    case "rem":
      return `${e.toFixed(2)}rem`;
    case "ratio":
      return (e * 100).toFixed(0);
  }
}
function Nr(e) {
  var t, r, n = "";
  if (typeof e == "string" || typeof e == "number")
    n += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var o = e.length;
      for (t = 0; t < o; t++)
        e[t] && (r = Nr(e[t])) && (n && (n += " "), n += r);
    } else
      for (r in e)
        e[r] && (n && (n += " "), n += r);
  return n;
}
function Tr() {
  for (var e, t, r = 0, n = "", o = arguments.length; r < o; r++)
    (e = arguments[r]) && (t = Nr(e)) && (n && (n += " "), n += t);
  return n;
}
function si({
  split: e = "vertical",
  initialSize: t = "1",
  size: r,
  minSize: n = "0",
  maxSize: o = "100%",
  resizersSize: i = 1
}) {
  const a = r ?? t, s = e === "vertical", c = {
    minSize: s ? "minWidth" : "minHeight",
    maxSize: s ? "maxWidth" : "maxHeight",
    size: s ? "width" : "height"
  };
  let u = {
    display: "flex",
    outline: "none"
  };
  switch (u[c.minSize] = lt(n, i), u[c.maxSize] = lt(o, i), Ue(a.toString())) {
    case "ratio":
      u.flex = a;
      break;
    case "%":
    case "px":
      u.flexGrow = 0, u[c.size] = lt(
        a.toString(),
        i
      );
      break;
  }
  return u;
}
const ir = ({ children: e, className: t, setRef: r, index: n, ...o }) => {
  const i = ii(si({ children: e, ...o })), a = (s) => {
    !r || n === void 0 || r(n, s);
  };
  return /* @__PURE__ */ fe(
    "div",
    {
      className: Tr(t, "react-split-pane__Pane"),
      style: i,
      ref: a,
      children: e
    }
  );
};
var W = function() {
  return W = Object.assign || function(t) {
    for (var r, n = 1, o = arguments.length; n < o; n++) {
      r = arguments[n];
      for (var i in r)
        Object.prototype.hasOwnProperty.call(r, i) && (t[i] = r[i]);
    }
    return t;
  }, W.apply(this, arguments);
};
function le(e, t, r) {
  if (r || arguments.length === 2)
    for (var n = 0, o = t.length, i; n < o; n++)
      (i || !(n in t)) && (i || (i = Array.prototype.slice.call(t, 0, n)), i[n] = t[n]);
  return e.concat(i || Array.prototype.slice.call(t));
}
function ci(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r];
  };
}
var ui = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, fi = /* @__PURE__ */ ci(
  function(e) {
    return ui.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), _ = "-ms-", _e = "-moz-", b = "-webkit-", Dr = "comm", Ze = "rule", Rt = "decl", li = "@import", Wr = "@keyframes", di = "@layer", Br = Math.abs, $t = String.fromCharCode, vt = Object.assign;
function pi(e, t) {
  return M(e, 0) ^ 45 ? (((t << 2 ^ M(e, 0)) << 2 ^ M(e, 1)) << 2 ^ M(e, 2)) << 2 ^ M(e, 3) : 0;
}
function jr(e) {
  return e.trim();
}
function Z(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function h(e, t, r) {
  return e.replace(t, r);
}
function Fe(e, t, r) {
  return e.indexOf(t, r);
}
function M(e, t) {
  return e.charCodeAt(t) | 0;
}
function de(e, t, r) {
  return e.slice(t, r);
}
function X(e) {
  return e.length;
}
function Fr(e) {
  return e.length;
}
function Ee(e, t) {
  return t.push(e), e;
}
function hi(e, t) {
  return e.map(t).join("");
}
function ar(e, t) {
  return e.filter(function(r) {
    return !Z(r, t);
  });
}
var Ke = 1, pe = 1, Lr = 0, j = 0, I = 0, ye = "";
function Je(e, t, r, n, o, i, a, s) {
  return { value: e, root: t, parent: r, type: n, props: o, children: i, line: Ke, column: pe, length: a, return: "", siblings: s };
}
function ee(e, t) {
  return vt(Je("", null, null, "", null, null, 0, e.siblings), e, { length: -e.length }, t);
}
function ue(e) {
  for (; e.root; )
    e = ee(e.root, { children: [e] });
  Ee(e, e.siblings);
}
function mi() {
  return I;
}
function gi() {
  return I = j > 0 ? M(ye, --j) : 0, pe--, I === 10 && (pe = 1, Ke--), I;
}
function G() {
  return I = j < Lr ? M(ye, j++) : 0, pe++, I === 10 && (pe = 1, Ke++), I;
}
function ie() {
  return M(ye, j);
}
function Le() {
  return j;
}
function Qe(e, t) {
  return de(ye, e, t);
}
function bt(e) {
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
function yi(e) {
  return Ke = pe = 1, Lr = X(ye = e), j = 0, [];
}
function vi(e) {
  return ye = "", e;
}
function dt(e) {
  return jr(Qe(j - 1, St(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function bi(e) {
  for (; (I = ie()) && I < 33; )
    G();
  return bt(e) > 2 || bt(I) > 3 ? "" : " ";
}
function Si(e, t) {
  for (; --t && G() && !(I < 48 || I > 102 || I > 57 && I < 65 || I > 70 && I < 97); )
    ;
  return Qe(e, Le() + (t < 6 && ie() == 32 && G() == 32));
}
function St(e) {
  for (; G(); )
    switch (I) {
      case e:
        return j;
      case 34:
      case 39:
        e !== 34 && e !== 39 && St(I);
        break;
      case 40:
        e === 41 && St(e);
        break;
      case 92:
        G();
        break;
    }
  return j;
}
function wi(e, t) {
  for (; G() && e + I !== 57; )
    if (e + I === 84 && ie() === 47)
      break;
  return "/*" + Qe(t, j - 1) + "*" + $t(e === 47 ? e : G());
}
function xi(e) {
  for (; !bt(ie()); )
    G();
  return Qe(e, j);
}
function ki(e) {
  return vi(Ge("", null, null, null, [""], e = yi(e), 0, [0], e));
}
function Ge(e, t, r, n, o, i, a, s, c) {
  for (var u = 0, f = 0, d = a, y = 0, v = 0, P = 0, E = 1, T = 1, z = 1, C = 0, w = "", x = o, S = i, m = n, l = w; T; )
    switch (P = C, C = G()) {
      case 40:
        if (P != 108 && M(l, d - 1) == 58) {
          Fe(l += h(dt(C), "&", "&\f"), "&\f", Br(u ? s[u - 1] : 0)) != -1 && (z = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        l += dt(C);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        l += bi(P);
        break;
      case 92:
        l += Si(Le() - 1, 7);
        continue;
      case 47:
        switch (ie()) {
          case 42:
          case 47:
            Ee(Pi(wi(G(), Le()), t, r, c), c);
            break;
          default:
            l += "/";
        }
        break;
      case 123 * E:
        s[u++] = X(l) * z;
      case 125 * E:
      case 59:
      case 0:
        switch (C) {
          case 0:
          case 125:
            T = 0;
          case 59 + f:
            z == -1 && (l = h(l, /\f/g, "")), v > 0 && X(l) - d && Ee(v > 32 ? cr(l + ";", n, r, d - 1, c) : cr(h(l, " ", "") + ";", n, r, d - 2, c), c);
            break;
          case 59:
            l += ";";
          default:
            if (Ee(m = sr(l, t, r, u, f, o, s, w, x = [], S = [], d, i), i), C === 123)
              if (f === 0)
                Ge(l, t, m, m, x, i, d, s, S);
              else
                switch (y === 99 && M(l, 3) === 110 ? 100 : y) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Ge(e, m, m, n && Ee(sr(e, m, m, 0, 0, o, s, w, o, x = [], d, S), S), o, S, d, s, n ? x : S);
                    break;
                  default:
                    Ge(l, m, m, m, [""], S, 0, s, S);
                }
        }
        u = f = v = 0, E = z = 1, w = l = "", d = a;
        break;
      case 58:
        d = 1 + X(l), v = P;
      default:
        if (E < 1) {
          if (C == 123)
            --E;
          else if (C == 125 && E++ == 0 && gi() == 125)
            continue;
        }
        switch (l += $t(C), C * E) {
          case 38:
            z = f > 0 ? 1 : (l += "\f", -1);
            break;
          case 44:
            s[u++] = (X(l) - 1) * z, z = 1;
            break;
          case 64:
            ie() === 45 && (l += dt(G())), y = ie(), f = d = X(w = l += xi(Le())), C++;
            break;
          case 45:
            P === 45 && X(l) == 2 && (E = 0);
        }
    }
  return i;
}
function sr(e, t, r, n, o, i, a, s, c, u, f, d) {
  for (var y = o - 1, v = o === 0 ? i : [""], P = Fr(v), E = 0, T = 0, z = 0; E < n; ++E)
    for (var C = 0, w = de(e, y + 1, y = Br(T = a[E])), x = e; C < P; ++C)
      (x = jr(T > 0 ? v[C] + " " + w : h(w, /&\f/g, v[C]))) && (c[z++] = x);
  return Je(e, t, r, o === 0 ? Ze : s, c, u, f, d);
}
function Pi(e, t, r, n) {
  return Je(e, t, r, Dr, $t(mi()), de(e, 2, -2), 0, n);
}
function cr(e, t, r, n, o) {
  return Je(e, t, r, Rt, de(e, 0, n), de(e, n + 1, -1), n, o);
}
function Gr(e, t, r) {
  switch (pi(e, t)) {
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
      return _e + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return b + e + _e + e + _ + e + e;
    case 5936:
      switch (M(e, t + 11)) {
        case 114:
          return b + e + _ + h(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return b + e + _ + h(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return b + e + _ + h(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
    case 6828:
    case 4268:
    case 2903:
      return b + e + _ + e + e;
    case 6165:
      return b + e + _ + "flex-" + e + e;
    case 5187:
      return b + e + h(e, /(\w+).+(:[^]+)/, b + "box-$1$2" + _ + "flex-$1$2") + e;
    case 5443:
      return b + e + _ + "flex-item-" + h(e, /flex-|-self/g, "") + (Z(e, /flex-|baseline/) ? "" : _ + "grid-row-" + h(e, /flex-|-self/g, "")) + e;
    case 4675:
      return b + e + _ + "flex-line-pack" + h(e, /align-content|flex-|-self/g, "") + e;
    case 5548:
      return b + e + _ + h(e, "shrink", "negative") + e;
    case 5292:
      return b + e + _ + h(e, "basis", "preferred-size") + e;
    case 6060:
      return b + "box-" + h(e, "-grow", "") + b + e + _ + h(e, "grow", "positive") + e;
    case 4554:
      return b + h(e, /([^-])(transform)/g, "$1" + b + "$2") + e;
    case 6187:
      return h(h(h(e, /(zoom-|grab)/, b + "$1"), /(image-set)/, b + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return h(e, /(image-set\([^]*)/, b + "$1$`$1");
    case 4968:
      return h(h(e, /(.+:)(flex-)?(.*)/, b + "box-pack:$3" + _ + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + b + e + e;
    case 4200:
      if (!Z(e, /flex-|baseline/))
        return _ + "grid-column-align" + de(e, t) + e;
      break;
    case 2592:
    case 3360:
      return _ + h(e, "template-", "") + e;
    case 4384:
    case 3616:
      return r && r.some(function(n, o) {
        return t = o, Z(n.props, /grid-\w+-end/);
      }) ? ~Fe(e + (r = r[t].value), "span", 0) ? e : _ + h(e, "-start", "") + e + _ + "grid-row-span:" + (~Fe(r, "span", 0) ? Z(r, /\d+/) : +Z(r, /\d+/) - +Z(e, /\d+/)) + ";" : _ + h(e, "-start", "") + e;
    case 4896:
    case 4128:
      return r && r.some(function(n) {
        return Z(n.props, /grid-\w+-start/);
      }) ? e : _ + h(h(e, "-end", "-span"), "span ", "") + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return h(e, /(.+)-inline(.+)/, b + "$1$2") + e;
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
      if (X(e) - 1 - t > 6)
        switch (M(e, t + 1)) {
          case 109:
            if (M(e, t + 4) !== 45)
              break;
          case 102:
            return h(e, /(.+:)(.+)-([^]+)/, "$1" + b + "$2-$3$1" + _e + (M(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
          case 115:
            return ~Fe(e, "stretch", 0) ? Gr(h(e, "stretch", "fill-available"), t, r) + e : e;
        }
      break;
    case 5152:
    case 5920:
      return h(e, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(n, o, i, a, s, c, u) {
        return _ + o + ":" + i + u + (a ? _ + o + "-span:" + (s ? c : +c - +i) + u : "") + e;
      });
    case 4949:
      if (M(e, t + 6) === 121)
        return h(e, ":", ":" + b) + e;
      break;
    case 6444:
      switch (M(e, M(e, 14) === 45 ? 18 : 11)) {
        case 120:
          return h(e, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + b + (M(e, 14) === 45 ? "inline-" : "") + "box$3$1" + b + "$2$3$1" + _ + "$2box$3") + e;
        case 100:
          return h(e, ":", ":" + _) + e;
      }
      break;
    case 5719:
    case 2647:
    case 2135:
    case 3927:
    case 2391:
      return h(e, "scroll-", "scroll-snap-") + e;
  }
  return e;
}
function Ye(e, t) {
  for (var r = "", n = 0; n < e.length; n++)
    r += t(e[n], n, e, t) || "";
  return r;
}
function Ei(e, t, r, n) {
  switch (e.type) {
    case di:
      if (e.children.length)
        break;
    case li:
    case Rt:
      return e.return = e.return || e.value;
    case Dr:
      return "";
    case Wr:
      return e.return = e.value + "{" + Ye(e.children, n) + "}";
    case Ze:
      if (!X(e.value = e.props.join(",")))
        return "";
  }
  return X(r = Ye(e.children, n)) ? e.return = e.value + "{" + r + "}" : "";
}
function _i(e) {
  var t = Fr(e);
  return function(r, n, o, i) {
    for (var a = "", s = 0; s < t; s++)
      a += e[s](r, n, o, i) || "";
    return a;
  };
}
function Ci(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
function Ai(e, t, r, n) {
  if (e.length > -1 && !e.return)
    switch (e.type) {
      case Rt:
        e.return = Gr(e.value, e.length, r);
        return;
      case Wr:
        return Ye([ee(e, { value: h(e.value, "@", "@" + b) })], n);
      case Ze:
        if (e.length)
          return hi(r = e.props, function(o) {
            switch (Z(o, n = /(::plac\w+|:read-\w+)/)) {
              case ":read-only":
              case ":read-write":
                ue(ee(e, { props: [h(o, /:(read-\w+)/, ":" + _e + "$1")] })), ue(ee(e, { props: [o] })), vt(e, { props: ar(r, n) });
                break;
              case "::placeholder":
                ue(ee(e, { props: [h(o, /:(plac\w+)/, ":" + b + "input-$1")] })), ue(ee(e, { props: [h(o, /:(plac\w+)/, ":" + _e + "$1")] })), ue(ee(e, { props: [h(o, /:(plac\w+)/, _ + "input-$1")] })), ue(ee(e, { props: [o] })), vt(e, { props: ar(r, n) });
                break;
            }
            return "";
          });
    }
}
var Oi = {
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
}, se = typeof process < "u" && process.env !== void 0 && (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR) || "data-styled", Vr = "active", Hr = "data-styled-version", et = "6.1.11", It = `/*!sc*/
`, Mt = typeof window < "u" && "HTMLElement" in window, zi = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && process.env !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? process.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && process.env.REACT_APP_SC_DISABLE_SPEEDY : typeof process < "u" && process.env !== void 0 && process.env.SC_DISABLE_SPEEDY !== void 0 && process.env.SC_DISABLE_SPEEDY !== "" ? process.env.SC_DISABLE_SPEEDY !== "false" && process.env.SC_DISABLE_SPEEDY : process.env.NODE_ENV !== "production"), ur = /invalid hook call/i, Te = /* @__PURE__ */ new Set(), Ri = function(e, t) {
  if (process.env.NODE_ENV !== "production") {
    var r = t ? ' with the id of "'.concat(t, '"') : "", n = "The component ".concat(e).concat(r, ` has been created dynamically.
`) + `You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.`, o = console.error;
    try {
      var i = !0;
      console.error = function(a) {
        for (var s = [], c = 1; c < arguments.length; c++)
          s[c - 1] = arguments[c];
        ur.test(a) ? (i = !1, Te.delete(n)) : o.apply(void 0, le([a], s, !1));
      }, Pe(), i && !Te.has(n) && (console.warn(n), Te.add(n));
    } catch (a) {
      ur.test(a.message) && Te.delete(n);
    } finally {
      console.error = o;
    }
  }
}, tt = Object.freeze([]), he = Object.freeze({});
function $i(e, t, r) {
  return r === void 0 && (r = he), e.theme !== r.theme && e.theme || t || r.theme;
}
var wt = /* @__PURE__ */ new Set(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "u", "ul", "use", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"]), Ii = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, Mi = /(^-|-$)/g;
function fr(e) {
  return e.replace(Ii, "-").replace(Mi, "");
}
var Ni = /(a)(d)/gi, De = 52, lr = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function xt(e) {
  var t, r = "";
  for (t = Math.abs(e); t > De; t = t / De | 0)
    r = lr(t % De) + r;
  return (lr(t % De) + r).replace(Ni, "$1-$2");
}
var pt, Ur = 5381, ne = function(e, t) {
  for (var r = t.length; r; )
    e = 33 * e ^ t.charCodeAt(--r);
  return e;
}, Yr = function(e) {
  return ne(Ur, e);
};
function Ti(e) {
  return xt(Yr(e) >>> 0);
}
function qr(e) {
  return process.env.NODE_ENV !== "production" && typeof e == "string" && e || e.displayName || e.name || "Component";
}
function ht(e) {
  return typeof e == "string" && (process.env.NODE_ENV === "production" || e.charAt(0) === e.charAt(0).toLowerCase());
}
var Xr = typeof Symbol == "function" && Symbol.for, Zr = Xr ? Symbol.for("react.memo") : 60115, Di = Xr ? Symbol.for("react.forward_ref") : 60112, Wi = { childContextTypes: !0, contextType: !0, contextTypes: !0, defaultProps: !0, displayName: !0, getDefaultProps: !0, getDerivedStateFromError: !0, getDerivedStateFromProps: !0, mixins: !0, propTypes: !0, type: !0 }, Bi = { name: !0, length: !0, prototype: !0, caller: !0, callee: !0, arguments: !0, arity: !0 }, Kr = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 }, ji = ((pt = {})[Di] = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 }, pt[Zr] = Kr, pt);
function dr(e) {
  return ("type" in (t = e) && t.type.$$typeof) === Zr ? Kr : "$$typeof" in e ? ji[e.$$typeof] : Wi;
  var t;
}
var Fi = Object.defineProperty, Li = Object.getOwnPropertyNames, pr = Object.getOwnPropertySymbols, Gi = Object.getOwnPropertyDescriptor, Vi = Object.getPrototypeOf, hr = Object.prototype;
function Jr(e, t, r) {
  if (typeof t != "string") {
    if (hr) {
      var n = Vi(t);
      n && n !== hr && Jr(e, n, r);
    }
    var o = Li(t);
    pr && (o = o.concat(pr(t)));
    for (var i = dr(e), a = dr(t), s = 0; s < o.length; ++s) {
      var c = o[s];
      if (!(c in Bi || r && r[c] || a && c in a || i && c in i)) {
        var u = Gi(t, c);
        try {
          Fi(e, c, u);
        } catch {
        }
      }
    }
  }
  return e;
}
function me(e) {
  return typeof e == "function";
}
function Nt(e) {
  return typeof e == "object" && "styledComponentId" in e;
}
function oe(e, t) {
  return e && t ? "".concat(e, " ").concat(t) : e || t || "";
}
function mr(e, t) {
  if (e.length === 0)
    return "";
  for (var r = e[0], n = 1; n < e.length; n++)
    r += e[n];
  return r;
}
function ge(e) {
  return e !== null && typeof e == "object" && e.constructor.name === Object.name && !("props" in e && e.$$typeof);
}
function kt(e, t, r) {
  if (r === void 0 && (r = !1), !r && !ge(e) && !Array.isArray(e))
    return t;
  if (Array.isArray(t))
    for (var n = 0; n < t.length; n++)
      e[n] = kt(e[n], t[n]);
  else if (ge(t))
    for (var n in t)
      e[n] = kt(e[n], t[n]);
  return e;
}
function Tt(e, t) {
  Object.defineProperty(e, "toString", { value: t });
}
var Hi = process.env.NODE_ENV !== "production" ? { 1: `Cannot create styled-component for component: %s.

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
function Ui() {
  for (var e = [], t = 0; t < arguments.length; t++)
    e[t] = arguments[t];
  for (var r = e[0], n = [], o = 1, i = e.length; o < i; o += 1)
    n.push(e[o]);
  return n.forEach(function(a) {
    r = r.replace(/%[a-z]/, a);
  }), r;
}
function ve(e) {
  for (var t = [], r = 1; r < arguments.length; r++)
    t[r - 1] = arguments[r];
  return process.env.NODE_ENV === "production" ? new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e, " for more information.").concat(t.length > 0 ? " Args: ".concat(t.join(", ")) : "")) : new Error(Ui.apply(void 0, le([Hi[e]], t, !1)).trim());
}
var Yi = function() {
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
          throw ve(16, "".concat(t));
      this.groupSizes = new Uint32Array(i), this.groupSizes.set(n), this.length = i;
      for (var a = o; a < i; a++)
        this.groupSizes[a] = 0;
    }
    for (var s = this.indexOfGroup(t + 1), c = (a = 0, r.length); a < c; a++)
      this.tag.insertRule(s, r[a]) && (this.groupSizes[t]++, s++);
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
    for (var n = this.groupSizes[t], o = this.indexOfGroup(t), i = o + n, a = o; a < i; a++)
      r += "".concat(this.tag.getRule(a)).concat(It);
    return r;
  }, e;
}(), qi = 1 << 30, Ve = /* @__PURE__ */ new Map(), qe = /* @__PURE__ */ new Map(), He = 1, We = function(e) {
  if (Ve.has(e))
    return Ve.get(e);
  for (; qe.has(He); )
    He++;
  var t = He++;
  if (process.env.NODE_ENV !== "production" && ((0 | t) < 0 || t > qi))
    throw ve(16, "".concat(t));
  return Ve.set(e, t), qe.set(t, e), t;
}, Xi = function(e, t) {
  He = t + 1, Ve.set(e, t), qe.set(t, e);
}, Zi = "style[".concat(se, "][").concat(Hr, '="').concat(et, '"]'), Ki = new RegExp("^".concat(se, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')), Ji = function(e, t, r) {
  for (var n, o = r.split(","), i = 0, a = o.length; i < a; i++)
    (n = o[i]) && e.registerName(t, n);
}, Qi = function(e, t) {
  for (var r, n = ((r = t.textContent) !== null && r !== void 0 ? r : "").split(It), o = [], i = 0, a = n.length; i < a; i++) {
    var s = n[i].trim();
    if (s) {
      var c = s.match(Ki);
      if (c) {
        var u = 0 | parseInt(c[1], 10), f = c[2];
        u !== 0 && (Xi(f, u), Ji(e, f, c[3]), e.getTag().insertRules(u, o)), o.length = 0;
      } else
        o.push(s);
    }
  }
};
function ea() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}
var Qr = function(e) {
  var t = document.head, r = e || t, n = document.createElement("style"), o = function(s) {
    var c = Array.from(s.querySelectorAll("style[".concat(se, "]")));
    return c[c.length - 1];
  }(r), i = o !== void 0 ? o.nextSibling : null;
  n.setAttribute(se, Vr), n.setAttribute(Hr, et);
  var a = ea();
  return a && n.setAttribute("nonce", a), r.insertBefore(n, i), n;
}, ta = function() {
  function e(t) {
    this.element = Qr(t), this.element.appendChild(document.createTextNode("")), this.sheet = function(r) {
      if (r.sheet)
        return r.sheet;
      for (var n = document.styleSheets, o = 0, i = n.length; o < i; o++) {
        var a = n[o];
        if (a.ownerNode === r)
          return a;
      }
      throw ve(17);
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
}(), ra = function() {
  function e(t) {
    this.element = Qr(t), this.nodes = this.element.childNodes, this.length = 0;
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
}(), na = function() {
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
}(), gr = Mt, oa = { isServer: !Mt, useCSSOMInjection: !zi }, en = function() {
  function e(t, r, n) {
    t === void 0 && (t = he), r === void 0 && (r = {});
    var o = this;
    this.options = W(W({}, oa), t), this.gs = r, this.names = new Map(n), this.server = !!t.isServer, !this.server && Mt && gr && (gr = !1, function(i) {
      for (var a = document.querySelectorAll(Zi), s = 0, c = a.length; s < c; s++) {
        var u = a[s];
        u && u.getAttribute(se) !== Vr && (Qi(i, u), u.parentNode && u.parentNode.removeChild(u));
      }
    }(this)), Tt(this, function() {
      return function(i) {
        for (var a = i.getTag(), s = a.length, c = "", u = function(d) {
          var y = function(z) {
            return qe.get(z);
          }(d);
          if (y === void 0)
            return "continue";
          var v = i.names.get(y), P = a.getGroup(d);
          if (v === void 0 || P.length === 0)
            return "continue";
          var E = "".concat(se, ".g").concat(d, '[id="').concat(y, '"]'), T = "";
          v !== void 0 && v.forEach(function(z) {
            z.length > 0 && (T += "".concat(z, ","));
          }), c += "".concat(P).concat(E, '{content:"').concat(T, '"}').concat(It);
        }, f = 0; f < s; f++)
          u(f);
        return c;
      }(o);
    });
  }
  return e.registerId = function(t) {
    return We(t);
  }, e.prototype.reconstructWithOptions = function(t, r) {
    return r === void 0 && (r = !0), new e(W(W({}, this.options), t), this.gs, r && this.names || void 0);
  }, e.prototype.allocateGSInstance = function(t) {
    return this.gs[t] = (this.gs[t] || 0) + 1;
  }, e.prototype.getTag = function() {
    return this.tag || (this.tag = (t = function(r) {
      var n = r.useCSSOMInjection, o = r.target;
      return r.isServer ? new na(o) : n ? new ta(o) : new ra(o);
    }(this.options), new Yi(t)));
    var t;
  }, e.prototype.hasNameForId = function(t, r) {
    return this.names.has(t) && this.names.get(t).has(r);
  }, e.prototype.registerName = function(t, r) {
    if (We(t), this.names.has(t))
      this.names.get(t).add(r);
    else {
      var n = /* @__PURE__ */ new Set();
      n.add(r), this.names.set(t, n);
    }
  }, e.prototype.insertRules = function(t, r, n) {
    this.registerName(t, r), this.getTag().insertRules(We(t), n);
  }, e.prototype.clearNames = function(t) {
    this.names.has(t) && this.names.get(t).clear();
  }, e.prototype.clearRules = function(t) {
    this.getTag().clearGroup(We(t)), this.clearNames(t);
  }, e.prototype.clearTag = function() {
    this.tag = void 0;
  }, e;
}(), ia = /&/g, aa = /^\s*\/\/.*$/gm;
function tn(e, t) {
  return e.map(function(r) {
    return r.type === "rule" && (r.value = "".concat(t, " ").concat(r.value), r.value = r.value.replaceAll(",", ",".concat(t, " ")), r.props = r.props.map(function(n) {
      return "".concat(t, " ").concat(n);
    })), Array.isArray(r.children) && r.type !== "@keyframes" && (r.children = tn(r.children, t)), r;
  });
}
function sa(e) {
  var t, r, n, o = he, i = o.options, a = i === void 0 ? he : i, s = o.plugins, c = s === void 0 ? tt : s, u = function(y, v, P) {
    return P.startsWith(r) && P.endsWith(r) && P.replaceAll(r, "").length > 0 ? ".".concat(t) : y;
  }, f = c.slice();
  f.push(function(y) {
    y.type === Ze && y.value.includes("&") && (y.props[0] = y.props[0].replace(ia, r).replace(n, u));
  }), a.prefix && f.push(Ai), f.push(Ei);
  var d = function(y, v, P, E) {
    v === void 0 && (v = ""), P === void 0 && (P = ""), E === void 0 && (E = "&"), t = E, r = v, n = new RegExp("\\".concat(r, "\\b"), "g");
    var T = y.replace(aa, ""), z = ki(P || v ? "".concat(P, " ").concat(v, " { ").concat(T, " }") : T);
    a.namespace && (z = tn(z, a.namespace));
    var C = [];
    return Ye(z, _i(f.concat(Ci(function(w) {
      return C.push(w);
    })))), C;
  };
  return d.hash = c.length ? c.reduce(function(y, v) {
    return v.name || ve(15), ne(y, v.name);
  }, Ur).toString() : "", d;
}
var ca = new en(), Pt = sa(), rn = te.createContext({ shouldForwardProp: void 0, styleSheet: ca, stylis: Pt });
rn.Consumer;
te.createContext(void 0);
function yr() {
  return ln(rn);
}
var vr = function() {
  function e(t, r) {
    var n = this;
    this.inject = function(o, i) {
      i === void 0 && (i = Pt);
      var a = n.name + i.hash;
      o.hasNameForId(n.id, a) || o.insertRules(n.id, a, i(n.rules, a, "@keyframes"));
    }, this.name = t, this.id = "sc-keyframes-".concat(t), this.rules = r, Tt(this, function() {
      throw ve(12, String(n.name));
    });
  }
  return e.prototype.getName = function(t) {
    return t === void 0 && (t = Pt), this.name + t.hash;
  }, e;
}(), ua = function(e) {
  return e >= "A" && e <= "Z";
};
function br(e) {
  for (var t = "", r = 0; r < e.length; r++) {
    var n = e[r];
    if (r === 1 && n === "-" && e[0] === "-")
      return e;
    ua(n) ? t += "-" + n.toLowerCase() : t += n;
  }
  return t.startsWith("ms-") ? "-" + t : t;
}
var nn = function(e) {
  return e == null || e === !1 || e === "";
}, on = function(e) {
  var t, r, n = [];
  for (var o in e) {
    var i = e[o];
    e.hasOwnProperty(o) && !nn(i) && (Array.isArray(i) && i.isCss || me(i) ? n.push("".concat(br(o), ":"), i, ";") : ge(i) ? n.push.apply(n, le(le(["".concat(o, " {")], on(i), !1), ["}"], !1)) : n.push("".concat(br(o), ": ").concat((t = o, (r = i) == null || typeof r == "boolean" || r === "" ? "" : typeof r != "number" || r === 0 || t in Oi || t.startsWith("--") ? String(r).trim() : "".concat(r, "px")), ";")));
  }
  return n;
};
function ae(e, t, r, n) {
  if (nn(e))
    return [];
  if (Nt(e))
    return [".".concat(e.styledComponentId)];
  if (me(e)) {
    if (!me(i = e) || i.prototype && i.prototype.isReactComponent || !t)
      return [e];
    var o = e(t);
    return process.env.NODE_ENV === "production" || typeof o != "object" || Array.isArray(o) || o instanceof vr || ge(o) || o === null || console.error("".concat(qr(e), " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.")), ae(o, t, r, n);
  }
  var i;
  return e instanceof vr ? r ? (e.inject(r, n), [e.getName(n)]) : [e] : ge(e) ? on(e) : Array.isArray(e) ? Array.prototype.concat.apply(tt, e.map(function(a) {
    return ae(a, t, r, n);
  })) : [e.toString()];
}
function fa(e) {
  for (var t = 0; t < e.length; t += 1) {
    var r = e[t];
    if (me(r) && !Nt(r))
      return !1;
  }
  return !0;
}
var la = Yr(et), da = function() {
  function e(t, r, n) {
    this.rules = t, this.staticRulesId = "", this.isStatic = process.env.NODE_ENV === "production" && (n === void 0 || n.isStatic) && fa(t), this.componentId = r, this.baseHash = ne(la, r), this.baseStyle = n, en.registerId(r);
  }
  return e.prototype.generateAndInjectStyles = function(t, r, n) {
    var o = this.baseStyle ? this.baseStyle.generateAndInjectStyles(t, r, n) : "";
    if (this.isStatic && !n.hash)
      if (this.staticRulesId && r.hasNameForId(this.componentId, this.staticRulesId))
        o = oe(o, this.staticRulesId);
      else {
        var i = mr(ae(this.rules, t, r, n)), a = xt(ne(this.baseHash, i) >>> 0);
        if (!r.hasNameForId(this.componentId, a)) {
          var s = n(i, ".".concat(a), void 0, this.componentId);
          r.insertRules(this.componentId, a, s);
        }
        o = oe(o, a), this.staticRulesId = a;
      }
    else {
      for (var c = ne(this.baseHash, n.hash), u = "", f = 0; f < this.rules.length; f++) {
        var d = this.rules[f];
        if (typeof d == "string")
          u += d, process.env.NODE_ENV !== "production" && (c = ne(c, d));
        else if (d) {
          var y = mr(ae(d, t, r, n));
          c = ne(c, y + f), u += y;
        }
      }
      if (u) {
        var v = xt(c >>> 0);
        r.hasNameForId(this.componentId, v) || r.insertRules(this.componentId, v, n(u, ".".concat(v), void 0, this.componentId)), o = oe(o, v);
      }
    }
    return o;
  }, e;
}(), an = te.createContext(void 0);
an.Consumer;
var mt = {}, Sr = /* @__PURE__ */ new Set();
function pa(e, t, r) {
  var n = Nt(e), o = e, i = !ht(e), a = t.attrs, s = a === void 0 ? tt : a, c = t.componentId, u = c === void 0 ? function(x, S) {
    var m = typeof x != "string" ? "sc" : fr(x);
    mt[m] = (mt[m] || 0) + 1;
    var l = "".concat(m, "-").concat(Ti(et + m + mt[m]));
    return S ? "".concat(S, "-").concat(l) : l;
  }(t.displayName, t.parentComponentId) : c, f = t.displayName, d = f === void 0 ? function(x) {
    return ht(x) ? "styled.".concat(x) : "Styled(".concat(qr(x), ")");
  }(e) : f, y = t.displayName && t.componentId ? "".concat(fr(t.displayName), "-").concat(t.componentId) : t.componentId || u, v = n && o.attrs ? o.attrs.concat(s).filter(Boolean) : s, P = t.shouldForwardProp;
  if (n && o.shouldForwardProp) {
    var E = o.shouldForwardProp;
    if (t.shouldForwardProp) {
      var T = t.shouldForwardProp;
      P = function(x, S) {
        return E(x, S) && T(x, S);
      };
    } else
      P = E;
  }
  var z = new da(r, y, n ? o.componentStyle : void 0);
  function C(x, S) {
    return function(m, l, V) {
      var K = m.attrs, Oe = m.componentStyle, rt = m.defaultProps, nt = m.foldedComponentIds, Se = m.styledComponentId, ot = m.target, it = te.useContext(an), at = yr(), ze = m.shouldForwardProp || at.shouldForwardProp;
      process.env.NODE_ENV !== "production" && jt(Se);
      var p = $i(l, it, rt) || he, g = function(B, R, H) {
        for (var N, U = W(W({}, R), { className: void 0, theme: H }), we = 0; we < B.length; we += 1) {
          var ce = me(N = B[we]) ? N(U) : N;
          for (var Y in ce)
            U[Y] = Y === "className" ? oe(U[Y], ce[Y]) : Y === "style" ? W(W({}, U[Y]), ce[Y]) : ce[Y];
        }
        return R.className && (U.className = oe(U.className, R.className)), U;
      }(K, l, p), k = g.as || ot, $ = {};
      for (var A in g)
        g[A] === void 0 || A[0] === "$" || A === "as" || A === "theme" && g.theme === p || (A === "forwardedAs" ? $.as = g.forwardedAs : ze && !ze(A, k) || ($[A] = g[A], ze || process.env.NODE_ENV !== "development" || fi(A) || Sr.has(A) || !wt.has(k) || (Sr.add(A), console.warn('styled-components: it looks like an unknown prop "'.concat(A, '" is being sent through to the DOM, which will likely trigger a React console error. If you would like automatic filtering of unknown props, you can opt-into that behavior via `<StyleSheetManager shouldForwardProp={...}>` (connect an API like `@emotion/is-prop-valid`) or consider using transient props (`$` prefix for automatic filtering.)')))));
      var F = function(B, R) {
        var H = yr(), N = B.generateAndInjectStyles(R, H.styleSheet, H.stylis);
        return process.env.NODE_ENV !== "production" && jt(N), N;
      }(Oe, g);
      process.env.NODE_ENV !== "production" && m.warnTooManyClasses && m.warnTooManyClasses(F);
      var L = oe(nt, Se);
      return F && (L += " " + F), g.className && (L += " " + g.className), $[ht(k) && !wt.has(k) ? "class" : "className"] = L, $.ref = V, fn(k, $);
    }(w, x, S);
  }
  C.displayName = d;
  var w = te.forwardRef(C);
  return w.attrs = v, w.componentStyle = z, w.displayName = d, w.shouldForwardProp = P, w.foldedComponentIds = n ? oe(o.foldedComponentIds, o.styledComponentId) : "", w.styledComponentId = y, w.target = n ? o.target : e, Object.defineProperty(w, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(x) {
    this._foldedDefaultProps = n ? function(S) {
      for (var m = [], l = 1; l < arguments.length; l++)
        m[l - 1] = arguments[l];
      for (var V = 0, K = m; V < K.length; V++)
        kt(S, K[V], !0);
      return S;
    }({}, o.defaultProps, x) : x;
  } }), process.env.NODE_ENV !== "production" && (Ri(d, y), w.warnTooManyClasses = /* @__PURE__ */ function(x, S) {
    var m = {}, l = !1;
    return function(V) {
      if (!l && (m[V] = !0, Object.keys(m).length >= 200)) {
        var K = S ? ' with the id of "'.concat(S, '"') : "";
        console.warn("Over ".concat(200, " classes were generated for component ").concat(x).concat(K, `.
`) + `Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`), l = !0, m = {};
      }
    };
  }(d, y)), Tt(w, function() {
    return ".".concat(w.styledComponentId);
  }), i && Jr(w, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0 }), w;
}
function wr(e, t) {
  for (var r = [e[0]], n = 0, o = t.length; n < o; n += 1)
    r.push(t[n], e[n + 1]);
  return r;
}
var xr = function(e) {
  return Object.assign(e, { isCss: !0 });
};
function ha(e) {
  for (var t = [], r = 1; r < arguments.length; r++)
    t[r - 1] = arguments[r];
  if (me(e) || ge(e))
    return xr(ae(wr(tt, le([e], t, !0))));
  var n = e;
  return t.length === 0 && n.length === 1 && typeof n[0] == "string" ? ae(n) : xr(ae(wr(n, t)));
}
function Et(e, t, r) {
  if (r === void 0 && (r = he), !t)
    throw ve(1, t);
  var n = function(o) {
    for (var i = [], a = 1; a < arguments.length; a++)
      i[a - 1] = arguments[a];
    return e(t, r, ha.apply(void 0, le([o], i, !1)));
  };
  return n.attrs = function(o) {
    return Et(e, t, W(W({}, r), { attrs: Array.prototype.concat(r.attrs, o).filter(Boolean) }));
  }, n.withConfig = function(o) {
    return Et(e, t, W(W({}, r), o));
  }, n;
}
var sn = function(e) {
  return Et(pa, e);
}, be = sn;
wt.forEach(function(e) {
  be[e] = sn(e);
});
process.env.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`);
var Be = "__sc-".concat(se, "__");
process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "test" && typeof window < "u" && (window[Be] || (window[Be] = 0), window[Be] === 1 && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window[Be] += 1);
const cn = be.div`
  background: #000;
  opacity: 0.2;
  z-index: 1;
  box-sizing: border-box;
  background-clip: padding-box;

  :hover {
    transition: all 2s ease;
  }
`, ma = be(cn)`
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
`, ga = be(cn)`
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
`, ya = ({ index: e, split: t = "vertical", ...r }) => {
  const n = te.useRef(null), o = {
    "data-attribute": t,
    "data-type": "Resizer",
    ref: n,
    className: "react-split-pane__Resizer",
    ...r
  };
  return t === "vertical" ? /* @__PURE__ */ fe(ga, { ...o }) : /* @__PURE__ */ fe(ma, { ...o });
}, va = "1", ba = "0", Sa = "100%", wa = be.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  flex: 1;
  outline: none;
  overflow: hidden;
  user-select: text;
`, xa = be.div`
  display: flex;
  height: 100%;
  flex-direction: row;
  flex: 1;
  outline: none;
  overflow: hidden;
  user-select: text;
`, Ea = ({
  children: e,
  className: t,
  split: r = "vertical",
  allowResize: n = !0,
  onResizeStart: o,
  onResizeEnd: i,
  onChange: a,
  resizerSize: s = 1
}) => {
  const c = te.useRef(null), [u, f] = Ft([]), d = Pe(-1), y = Pe(), v = Pe(0), P = Pe(0), [E, T] = Ft(K(e));
  dn(() => {
    V();
  }, [c]);
  const z = (p, g) => {
    p.button === 0 && (p.preventDefault(), m(g, p.clientX, p.clientY));
  }, C = (p, g) => {
    p.preventDefault();
    const { clientX: k, clientY: $ } = p.touches[0];
    m(g, k, $);
  }, w = (p) => {
    p.preventDefault(), l(p.clientX, p.clientY);
  }, x = (p) => {
    p.preventDefault();
    const { clientX: g, clientY: k } = p.touches[0];
    l(g, k);
  }, S = (p) => {
    p.preventDefault(), document.removeEventListener("mouseup", S), document.removeEventListener("mousemove", w), document.removeEventListener("touchmove", x), document.removeEventListener("touchend", S), document.removeEventListener("touchcancel", S), i && i(E);
  }, m = (p, g, k) => {
    n && (d.current = p, V(), v.current = g, P.current = k, document.addEventListener("mousemove", w), document.addEventListener("mouseup", S), document.addEventListener("touchmove", x), document.addEventListener("touchend", S), document.addEventListener("touchcancel", S), o && o());
  };
  function l(p, g) {
    if (!y.current)
      return;
    const { sizesPx: k, minSizesPx: $, maxSizesPx: A, splitPaneSizePx: F, paneDimensions: L } = y.current, B = r === "vertical" ? "width" : "height", R = d.current, H = L[R], N = L[R + 1], U = H[B] + N[B], we = $[R], ce = $[R + 1], Y = Math.min(A[R], U), un = Math.min(
      A[R + 1],
      U
    ), Dt = r === "vertical" ? v.current - p : P.current - g;
    let Re = H[B] - Dt, $e = N[B] + Dt;
    if (Re < we || Re > Y || $e < ce || $e > un)
      return;
    k[R] = Re, k[R + 1] = $e;
    let re = E.concat(), Wt;
    if ([Re, $e].forEach((Ie, xe) => {
      const ke = Ue(re[R + xe]);
      ke !== "ratio" ? re[R + xe] = or(
        Ie,
        ke,
        F
      ) : Wt = !0;
    }), Wt) {
      let Ie = 0, xe = 0;
      re = re.map((ke, Bt) => Ue(ke) === "ratio" ? (Ie++, xe = Bt, or(k[Bt], "ratio")) : ke), Ie === 1 && (re[xe] = "1");
    }
    T(re), a == null || a(re);
  }
  function V() {
    var H;
    const p = rt(), g = (H = c.current) == null ? void 0 : H.getBoundingClientRect();
    if (!g)
      return;
    const k = Oe(e, "minSize"), $ = Oe(e, "maxSize"), A = Se(), F = r === "vertical" ? g.width - A : g.height - A, L = k.map((N) => nr(N, F)), B = $.map((N) => nr(N, F)), R = p.map(
      (N) => r === "vertical" ? N.width : N.height
    );
    y.current = {
      resizersSize: A,
      paneDimensions: p,
      splitPaneSizePx: F,
      minSizesPx: L,
      maxSizesPx: B,
      sizesPx: R
    };
  }
  function K(p) {
    return Ne(p).map((g) => {
      const k = g.props.size || g.props.initialSize;
      return k === void 0 ? va : String(k);
    });
  }
  function Oe(p, g) {
    return Ne(p).map((k) => {
      const $ = k.props[g];
      return $ === void 0 ? g === "maxSize" ? Sa : ba : $;
    });
  }
  function rt() {
    return u.filter((p) => p).map((p) => p.getBoundingClientRect());
  }
  const nt = (p, g) => {
    u || f([]), u[p] = g;
  };
  function Se() {
    return (Ne(e).length - 1) * (s ?? 1);
  }
  const ot = Ne(e), it = Se(), at = ot.reduce((p, g, k) => {
    let $;
    const A = k - 1, F = g.type === ir, L = {
      index: k,
      "data-type": "Pane",
      split: r,
      key: `Pane-${k}`,
      setRef: nt,
      resizersSize: it,
      size: E[k]
    };
    if (F ? $ = pn(g, L) : $ = /* @__PURE__ */ fe(ir, { ...L, children: g }), p.length === 0)
      return [...p, $];
    {
      const B = /* @__PURE__ */ fe(
        ya,
        {
          index: A,
          split: r,
          onMouseDownCapture: (R) => z(R, A),
          onTouchStart: (R) => C(R, A)
        },
        `Resizer-${A}`
      );
      return [...p, B, $];
    }
  }, []);
  return /* @__PURE__ */ fe(
    r === "vertical" ? xa : wa,
    {
      className: Tr(t, "react-split-pane__SplitPane"),
      "data-type": "SplitPane",
      "data-split": r,
      ref: c,
      children: at
    }
  );
};
export {
  ir as Pane,
  ya as Resizer,
  Ea as default
};
