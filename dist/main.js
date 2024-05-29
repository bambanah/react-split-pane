var On = Object.defineProperty;
var Cn = (e, t, r) => t in e ? On(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var ce = (e, t, r) => (Cn(e, typeof t != "symbol" ? t + "" : t, r), r);
import { jsx as xe } from "react/jsx-runtime";
import be, { useRef as Tn, useDebugValue as Ht, createElement as _n, useContext as Rn, Component as jr, cloneElement as An, PureComponent as zn } from "react";
function Mt(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function Br(e) {
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
var xt = { exports: {} }, Ne = { exports: {} }, W = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Xt;
function Mn() {
  if (Xt)
    return W;
  Xt = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, h = e ? Symbol.for("react.suspense") : 60113, y = e ? Symbol.for("react.suspense_list") : 60120, g = e ? Symbol.for("react.memo") : 60115, P = e ? Symbol.for("react.lazy") : 60116, b = e ? Symbol.for("react.block") : 60121, I = e ? Symbol.for("react.fundamental") : 60117, A = e ? Symbol.for("react.responder") : 60118, D = e ? Symbol.for("react.scope") : 60119;
  function x(f) {
    if (typeof f == "object" && f !== null) {
      var v = f.$$typeof;
      switch (v) {
        case t:
          switch (f = f.type, f) {
            case c:
            case u:
            case n:
            case i:
            case o:
            case h:
              return f;
            default:
              switch (f = f && f.$$typeof, f) {
                case s:
                case d:
                case P:
                case g:
                case a:
                  return f;
                default:
                  return v;
              }
          }
        case r:
          return v;
      }
    }
  }
  function E(f) {
    return x(f) === u;
  }
  return W.AsyncMode = c, W.ConcurrentMode = u, W.ContextConsumer = s, W.ContextProvider = a, W.Element = t, W.ForwardRef = d, W.Fragment = n, W.Lazy = P, W.Memo = g, W.Portal = r, W.Profiler = i, W.StrictMode = o, W.Suspense = h, W.isAsyncMode = function(f) {
    return E(f) || x(f) === c;
  }, W.isConcurrentMode = E, W.isContextConsumer = function(f) {
    return x(f) === s;
  }, W.isContextProvider = function(f) {
    return x(f) === a;
  }, W.isElement = function(f) {
    return typeof f == "object" && f !== null && f.$$typeof === t;
  }, W.isForwardRef = function(f) {
    return x(f) === d;
  }, W.isFragment = function(f) {
    return x(f) === n;
  }, W.isLazy = function(f) {
    return x(f) === P;
  }, W.isMemo = function(f) {
    return x(f) === g;
  }, W.isPortal = function(f) {
    return x(f) === r;
  }, W.isProfiler = function(f) {
    return x(f) === i;
  }, W.isStrictMode = function(f) {
    return x(f) === o;
  }, W.isSuspense = function(f) {
    return x(f) === h;
  }, W.isValidElementType = function(f) {
    return typeof f == "string" || typeof f == "function" || f === n || f === u || f === i || f === o || f === h || f === y || typeof f == "object" && f !== null && (f.$$typeof === P || f.$$typeof === g || f.$$typeof === a || f.$$typeof === s || f.$$typeof === d || f.$$typeof === I || f.$$typeof === A || f.$$typeof === D || f.$$typeof === b);
  }, W.typeOf = x, W;
}
var N = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Zt;
function In() {
  return Zt || (Zt = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, h = e ? Symbol.for("react.suspense") : 60113, y = e ? Symbol.for("react.suspense_list") : 60120, g = e ? Symbol.for("react.memo") : 60115, P = e ? Symbol.for("react.lazy") : 60116, b = e ? Symbol.for("react.block") : 60121, I = e ? Symbol.for("react.fundamental") : 60117, A = e ? Symbol.for("react.responder") : 60118, D = e ? Symbol.for("react.scope") : 60119;
    function x(p) {
      return typeof p == "string" || typeof p == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      p === n || p === u || p === i || p === o || p === h || p === y || typeof p == "object" && p !== null && (p.$$typeof === P || p.$$typeof === g || p.$$typeof === a || p.$$typeof === s || p.$$typeof === d || p.$$typeof === I || p.$$typeof === A || p.$$typeof === D || p.$$typeof === b);
    }
    function E(p) {
      if (typeof p == "object" && p !== null) {
        var ie = p.$$typeof;
        switch (ie) {
          case t:
            var We = p.type;
            switch (We) {
              case c:
              case u:
              case n:
              case i:
              case o:
              case h:
                return We;
              default:
                var Vt = We && We.$$typeof;
                switch (Vt) {
                  case s:
                  case d:
                  case P:
                  case g:
                  case a:
                    return Vt;
                  default:
                    return ie;
                }
            }
          case r:
            return ie;
        }
      }
    }
    var f = c, v = u, w = s, V = a, q = t, fe = d, ee = n, te = P, K = g, re = r, ze = i, J = o, ne = h, he = !1;
    function Z(p) {
      return he || (he = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), l(p) || E(p) === c;
    }
    function l(p) {
      return E(p) === u;
    }
    function m(p) {
      return E(p) === s;
    }
    function S(p) {
      return E(p) === a;
    }
    function T(p) {
      return typeof p == "object" && p !== null && p.$$typeof === t;
    }
    function k(p) {
      return E(p) === d;
    }
    function z(p) {
      return E(p) === n;
    }
    function O(p) {
      return E(p) === P;
    }
    function C(p) {
      return E(p) === g;
    }
    function R(p) {
      return E(p) === r;
    }
    function M(p) {
      return E(p) === i;
    }
    function $(p) {
      return E(p) === o;
    }
    function Y(p) {
      return E(p) === h;
    }
    N.AsyncMode = f, N.ConcurrentMode = v, N.ContextConsumer = w, N.ContextProvider = V, N.Element = q, N.ForwardRef = fe, N.Fragment = ee, N.Lazy = te, N.Memo = K, N.Portal = re, N.Profiler = ze, N.StrictMode = J, N.Suspense = ne, N.isAsyncMode = Z, N.isConcurrentMode = l, N.isContextConsumer = m, N.isContextProvider = S, N.isElement = T, N.isForwardRef = k, N.isFragment = z, N.isLazy = O, N.isMemo = C, N.isPortal = R, N.isProfiler = M, N.isStrictMode = $, N.isSuspense = Y, N.isValidElementType = x, N.typeOf = E;
  }()), N;
}
var Kt;
function Lr() {
  return Kt || (Kt = 1, process.env.NODE_ENV === "production" ? Ne.exports = Mn() : Ne.exports = In()), Ne.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var st, Jt;
function $n() {
  if (Jt)
    return st;
  Jt = 1;
  var e = Object.getOwnPropertySymbols, t = Object.prototype.hasOwnProperty, r = Object.prototype.propertyIsEnumerable;
  function n(i) {
    if (i == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(i);
  }
  function o() {
    try {
      if (!Object.assign)
        return !1;
      var i = new String("abc");
      if (i[5] = "de", Object.getOwnPropertyNames(i)[0] === "5")
        return !1;
      for (var a = {}, s = 0; s < 10; s++)
        a["_" + String.fromCharCode(s)] = s;
      var c = Object.getOwnPropertyNames(a).map(function(d) {
        return a[d];
      });
      if (c.join("") !== "0123456789")
        return !1;
      var u = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(d) {
        u[d] = d;
      }), Object.keys(Object.assign({}, u)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return st = o() ? Object.assign : function(i, a) {
    for (var s, c = n(i), u, d = 1; d < arguments.length; d++) {
      s = Object(arguments[d]);
      for (var h in s)
        t.call(s, h) && (c[h] = s[h]);
      if (e) {
        u = e(s);
        for (var y = 0; y < u.length; y++)
          r.call(s, u[y]) && (c[u[y]] = s[u[y]]);
      }
    }
    return c;
  }, st;
}
var ct, Qt;
function It() {
  if (Qt)
    return ct;
  Qt = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return ct = e, ct;
}
var ut, er;
function Fr() {
  return er || (er = 1, ut = Function.call.bind(Object.prototype.hasOwnProperty)), ut;
}
var ft, tr;
function Dn() {
  if (tr)
    return ft;
  tr = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = It(), r = {}, n = Fr();
    e = function(i) {
      var a = "Warning: " + i;
      typeof console < "u" && console.error(a);
      try {
        throw new Error(a);
      } catch {
      }
    };
  }
  function o(i, a, s, c, u) {
    if (process.env.NODE_ENV !== "production") {
      for (var d in i)
        if (n(i, d)) {
          var h;
          try {
            if (typeof i[d] != "function") {
              var y = Error(
                (c || "React class") + ": " + s + " type `" + d + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof i[d] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw y.name = "Invariant Violation", y;
            }
            h = i[d](a, d, c, s, null, t);
          } catch (P) {
            h = P;
          }
          if (h && !(h instanceof Error) && e(
            (c || "React class") + ": type specification of " + s + " `" + d + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof h + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), h instanceof Error && !(h.message in r)) {
            r[h.message] = !0;
            var g = u ? u() : "";
            e(
              "Failed " + s + " type: " + h.message + (g ?? "")
            );
          }
        }
    }
  }
  return o.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (r = {});
  }, ft = o, ft;
}
var lt, rr;
function Wn() {
  if (rr)
    return lt;
  rr = 1;
  var e = Lr(), t = $n(), r = It(), n = Fr(), o = Dn(), i = function() {
  };
  process.env.NODE_ENV !== "production" && (i = function(s) {
    var c = "Warning: " + s;
    typeof console < "u" && console.error(c);
    try {
      throw new Error(c);
    } catch {
    }
  });
  function a() {
    return null;
  }
  return lt = function(s, c) {
    var u = typeof Symbol == "function" && Symbol.iterator, d = "@@iterator";
    function h(l) {
      var m = l && (u && l[u] || l[d]);
      if (typeof m == "function")
        return m;
    }
    var y = "<<anonymous>>", g = {
      array: A("array"),
      bigint: A("bigint"),
      bool: A("boolean"),
      func: A("function"),
      number: A("number"),
      object: A("object"),
      string: A("string"),
      symbol: A("symbol"),
      any: D(),
      arrayOf: x,
      element: E(),
      elementType: f(),
      instanceOf: v,
      node: fe(),
      objectOf: V,
      oneOf: w,
      oneOfType: q,
      shape: te,
      exact: K
    };
    function P(l, m) {
      return l === m ? l !== 0 || 1 / l === 1 / m : l !== l && m !== m;
    }
    function b(l, m) {
      this.message = l, this.data = m && typeof m == "object" ? m : {}, this.stack = "";
    }
    b.prototype = Error.prototype;
    function I(l) {
      if (process.env.NODE_ENV !== "production")
        var m = {}, S = 0;
      function T(z, O, C, R, M, $, Y) {
        if (R = R || y, $ = $ || C, Y !== r) {
          if (c) {
            var p = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw p.name = "Invariant Violation", p;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var ie = R + ":" + C;
            !m[ie] && // Avoid spamming the console because they are often not actionable except for lib authors
            S < 3 && (i(
              "You are manually calling a React.PropTypes validation function for the `" + $ + "` prop on `" + R + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), m[ie] = !0, S++);
          }
        }
        return O[C] == null ? z ? O[C] === null ? new b("The " + M + " `" + $ + "` is marked as required " + ("in `" + R + "`, but its value is `null`.")) : new b("The " + M + " `" + $ + "` is marked as required in " + ("`" + R + "`, but its value is `undefined`.")) : null : l(O, C, R, M, $);
      }
      var k = T.bind(null, !1);
      return k.isRequired = T.bind(null, !0), k;
    }
    function A(l) {
      function m(S, T, k, z, O, C) {
        var R = S[T], M = J(R);
        if (M !== l) {
          var $ = ne(R);
          return new b(
            "Invalid " + z + " `" + O + "` of type " + ("`" + $ + "` supplied to `" + k + "`, expected ") + ("`" + l + "`."),
            { expectedType: l }
          );
        }
        return null;
      }
      return I(m);
    }
    function D() {
      return I(a);
    }
    function x(l) {
      function m(S, T, k, z, O) {
        if (typeof l != "function")
          return new b("Property `" + O + "` of component `" + k + "` has invalid PropType notation inside arrayOf.");
        var C = S[T];
        if (!Array.isArray(C)) {
          var R = J(C);
          return new b("Invalid " + z + " `" + O + "` of type " + ("`" + R + "` supplied to `" + k + "`, expected an array."));
        }
        for (var M = 0; M < C.length; M++) {
          var $ = l(C, M, k, z, O + "[" + M + "]", r);
          if ($ instanceof Error)
            return $;
        }
        return null;
      }
      return I(m);
    }
    function E() {
      function l(m, S, T, k, z) {
        var O = m[S];
        if (!s(O)) {
          var C = J(O);
          return new b("Invalid " + k + " `" + z + "` of type " + ("`" + C + "` supplied to `" + T + "`, expected a single ReactElement."));
        }
        return null;
      }
      return I(l);
    }
    function f() {
      function l(m, S, T, k, z) {
        var O = m[S];
        if (!e.isValidElementType(O)) {
          var C = J(O);
          return new b("Invalid " + k + " `" + z + "` of type " + ("`" + C + "` supplied to `" + T + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return I(l);
    }
    function v(l) {
      function m(S, T, k, z, O) {
        if (!(S[T] instanceof l)) {
          var C = l.name || y, R = Z(S[T]);
          return new b("Invalid " + z + " `" + O + "` of type " + ("`" + R + "` supplied to `" + k + "`, expected ") + ("instance of `" + C + "`."));
        }
        return null;
      }
      return I(m);
    }
    function w(l) {
      if (!Array.isArray(l))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? i(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : i("Invalid argument supplied to oneOf, expected an array.")), a;
      function m(S, T, k, z, O) {
        for (var C = S[T], R = 0; R < l.length; R++)
          if (P(C, l[R]))
            return null;
        var M = JSON.stringify(l, function(Y, p) {
          var ie = ne(p);
          return ie === "symbol" ? String(p) : p;
        });
        return new b("Invalid " + z + " `" + O + "` of value `" + String(C) + "` " + ("supplied to `" + k + "`, expected one of " + M + "."));
      }
      return I(m);
    }
    function V(l) {
      function m(S, T, k, z, O) {
        if (typeof l != "function")
          return new b("Property `" + O + "` of component `" + k + "` has invalid PropType notation inside objectOf.");
        var C = S[T], R = J(C);
        if (R !== "object")
          return new b("Invalid " + z + " `" + O + "` of type " + ("`" + R + "` supplied to `" + k + "`, expected an object."));
        for (var M in C)
          if (n(C, M)) {
            var $ = l(C, M, k, z, O + "." + M, r);
            if ($ instanceof Error)
              return $;
          }
        return null;
      }
      return I(m);
    }
    function q(l) {
      if (!Array.isArray(l))
        return process.env.NODE_ENV !== "production" && i("Invalid argument supplied to oneOfType, expected an instance of array."), a;
      for (var m = 0; m < l.length; m++) {
        var S = l[m];
        if (typeof S != "function")
          return i(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + he(S) + " at index " + m + "."
          ), a;
      }
      function T(k, z, O, C, R) {
        for (var M = [], $ = 0; $ < l.length; $++) {
          var Y = l[$], p = Y(k, z, O, C, R, r);
          if (p == null)
            return null;
          p.data && n(p.data, "expectedType") && M.push(p.data.expectedType);
        }
        var ie = M.length > 0 ? ", expected one of type [" + M.join(", ") + "]" : "";
        return new b("Invalid " + C + " `" + R + "` supplied to " + ("`" + O + "`" + ie + "."));
      }
      return I(T);
    }
    function fe() {
      function l(m, S, T, k, z) {
        return re(m[S]) ? null : new b("Invalid " + k + " `" + z + "` supplied to " + ("`" + T + "`, expected a ReactNode."));
      }
      return I(l);
    }
    function ee(l, m, S, T, k) {
      return new b(
        (l || "React class") + ": " + m + " type `" + S + "." + T + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + k + "`."
      );
    }
    function te(l) {
      function m(S, T, k, z, O) {
        var C = S[T], R = J(C);
        if (R !== "object")
          return new b("Invalid " + z + " `" + O + "` of type `" + R + "` " + ("supplied to `" + k + "`, expected `object`."));
        for (var M in l) {
          var $ = l[M];
          if (typeof $ != "function")
            return ee(k, z, O, M, ne($));
          var Y = $(C, M, k, z, O + "." + M, r);
          if (Y)
            return Y;
        }
        return null;
      }
      return I(m);
    }
    function K(l) {
      function m(S, T, k, z, O) {
        var C = S[T], R = J(C);
        if (R !== "object")
          return new b("Invalid " + z + " `" + O + "` of type `" + R + "` " + ("supplied to `" + k + "`, expected `object`."));
        var M = t({}, S[T], l);
        for (var $ in M) {
          var Y = l[$];
          if (n(l, $) && typeof Y != "function")
            return ee(k, z, O, $, ne(Y));
          if (!Y)
            return new b(
              "Invalid " + z + " `" + O + "` key `" + $ + "` supplied to `" + k + "`.\nBad object: " + JSON.stringify(S[T], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(l), null, "  ")
            );
          var p = Y(C, $, k, z, O + "." + $, r);
          if (p)
            return p;
        }
        return null;
      }
      return I(m);
    }
    function re(l) {
      switch (typeof l) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !l;
        case "object":
          if (Array.isArray(l))
            return l.every(re);
          if (l === null || s(l))
            return !0;
          var m = h(l);
          if (m) {
            var S = m.call(l), T;
            if (m !== l.entries) {
              for (; !(T = S.next()).done; )
                if (!re(T.value))
                  return !1;
            } else
              for (; !(T = S.next()).done; ) {
                var k = T.value;
                if (k && !re(k[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function ze(l, m) {
      return l === "symbol" ? !0 : m ? m["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && m instanceof Symbol : !1;
    }
    function J(l) {
      var m = typeof l;
      return Array.isArray(l) ? "array" : l instanceof RegExp ? "object" : ze(m, l) ? "symbol" : m;
    }
    function ne(l) {
      if (typeof l > "u" || l === null)
        return "" + l;
      var m = J(l);
      if (m === "object") {
        if (l instanceof Date)
          return "date";
        if (l instanceof RegExp)
          return "regexp";
      }
      return m;
    }
    function he(l) {
      var m = ne(l);
      switch (m) {
        case "array":
        case "object":
          return "an " + m;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + m;
        default:
          return m;
      }
    }
    function Z(l) {
      return !l.constructor || !l.constructor.name ? y : l.constructor.name;
    }
    return g.checkPropTypes = o, g.resetWarningCache = o.resetWarningCache, g.PropTypes = g, g;
  }, lt;
}
var dt, nr;
function Nn() {
  if (nr)
    return dt;
  nr = 1;
  var e = It();
  function t() {
  }
  function r() {
  }
  return r.resetWarningCache = t, dt = function() {
    function n(a, s, c, u, d, h) {
      if (h !== e) {
        var y = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw y.name = "Invariant Violation", y;
      }
    }
    n.isRequired = n;
    function o() {
      return n;
    }
    var i = {
      array: n,
      bigint: n,
      bool: n,
      func: n,
      number: n,
      object: n,
      string: n,
      symbol: n,
      any: n,
      arrayOf: o,
      element: n,
      elementType: n,
      instanceOf: o,
      node: n,
      objectOf: o,
      oneOf: o,
      oneOfType: o,
      shape: o,
      exact: o,
      checkPropTypes: r,
      resetWarningCache: t
    };
    return i.PropTypes = i, i;
  }, dt;
}
if (process.env.NODE_ENV !== "production") {
  var jn = Lr(), Bn = !0;
  xt.exports = Wn()(jn.isElement, Bn);
} else
  xt.exports = Nn()();
var Ln = xt.exports;
const U = /* @__PURE__ */ Mt(Ln);
function Et(e) {
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function Fn(e, t, r) {
  var n = e[t];
  if (n && r.hasOwnProperty(t))
    for (var o = Et(t), i = 0; i < n.length; ++i) {
      var a = n[i] + o;
      r[a] || (r[a] = r[t]);
    }
  return r;
}
function or(e, t, r, n, o) {
  for (var i = 0, a = e.length; i < a; ++i) {
    var s = e[i](t, r, n, o);
    if (s)
      return s;
  }
}
function ir(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function Yn(e, t) {
  if (Array.isArray(t))
    for (var r = 0, n = t.length; r < n; ++r)
      ir(e, t[r]);
  else
    ir(e, t);
}
function Un(e) {
  return e instanceof Object && !Array.isArray(e);
}
function qn(e) {
  var t = e.prefixMap, r = e.plugins;
  return function n(o) {
    for (var i in o) {
      var a = o[i];
      if (Un(a))
        o[i] = n(a);
      else if (Array.isArray(a)) {
        for (var s = [], c = 0, u = a.length; c < u; ++c) {
          var d = or(r, i, a[c], o, t);
          Yn(s, d || a[c]);
        }
        s.length > 0 && (o[i] = s);
      } else {
        var h = or(r, i, a, o, t);
        h && (o[i] = h), o = Fn(t, i, o);
      }
    }
    return o;
  };
}
var Yr = {};
function qe(e) {
  "@babel/helpers - typeof";
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? qe = function(r) {
    return typeof r;
  } : qe = function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, qe(e);
}
function Gn(e) {
  return Zn(e) || Xn(e) || Hn(e) || Vn();
}
function Vn() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Hn(e, t) {
  if (e) {
    if (typeof e == "string")
      return Pt(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set")
      return Array.from(r);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return Pt(e, t);
  }
}
function Xn(e) {
  if (typeof Symbol < "u" && Symbol.iterator in Object(e))
    return Array.from(e);
}
function Zn(e) {
  if (Array.isArray(e))
    return Pt(e);
}
function Pt(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
function ar(e) {
  return e.filter(function(t, r) {
    return e.lastIndexOf(t) === r;
  });
}
function Ur(e) {
  for (var t = 0, r = arguments.length <= 1 ? 0 : arguments.length - 1; t < r; ++t) {
    var n = t + 1 < 1 || arguments.length <= t + 1 ? void 0 : arguments[t + 1];
    for (var o in n) {
      var i = n[o], a = e[o];
      if (a && i) {
        if (Array.isArray(a)) {
          e[o] = ar(a.concat(i));
          continue;
        }
        if (Array.isArray(i)) {
          e[o] = ar([a].concat(Gn(i)));
          continue;
        }
        if (qe(i) === "object") {
          e[o] = Ur({}, a, i);
          continue;
        }
      }
      e[o] = i;
    }
  }
  return e;
}
var Kn = /-([a-z])/g, Jn = /^Ms/g, pt = {};
function Qn(e) {
  return e[1].toUpperCase();
}
function qr(e) {
  if (pt.hasOwnProperty(e))
    return pt[e];
  var t = e.replace(Kn, Qn).replace(Jn, "ms");
  return pt[e] = t, t;
}
var eo = /[A-Z]/g, to = /^ms-/, ht = {};
function ro(e) {
  return "-" + e.toLowerCase();
}
function Gr(e) {
  if (ht.hasOwnProperty(e))
    return ht[e];
  var t = e.replace(eo, ro);
  return ht[e] = to.test(t) ? "-" + t : t;
}
const no = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Gr
}, Symbol.toStringTag, { value: "Module" }));
function et(e) {
  return Gr(e);
}
function Vr(e, t) {
  return et(e) + ":" + t;
}
function oo(e) {
  var t = "";
  for (var r in e) {
    var n = e[r];
    typeof n != "string" && typeof n != "number" || (t && (t += ";"), t += Vr(r, n));
  }
  return t;
}
var io = /^(Webkit|Moz|O|ms)/;
function ao(e) {
  return io.test(e);
}
var so = /-webkit-|-moz-|-ms-/;
function $t(e) {
  return typeof e == "string" && so.test(e);
}
var $e = {
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
}, sr = ["animationIterationCount", "boxFlex", "boxFlexGroup", "boxOrdinalGroup", "columnCount", "flex", "flexGrow", "flexPositive", "flexShrink", "flexNegative", "flexOrder", "gridColumn", "gridColumnEnd", "gridColumnStart", "gridRow", "gridRowEnd", "gridRowStart", "lineClamp", "order"], cr = ["Webkit", "ms", "Moz", "O"];
function co(e, t) {
  return e + t.charAt(0).toUpperCase() + t.slice(1);
}
for (var mt = 0, uo = sr.length; mt < uo; ++mt) {
  var ur = sr[mt];
  $e[ur] = !0;
  for (var yt = 0, fo = cr.length; yt < fo; ++yt)
    $e[co(cr[yt], ur)] = !0;
}
for (var lo in $e)
  $e[et(lo)] = !0;
function po(e) {
  return $e.hasOwnProperty(e);
}
var ho = /^(ms|Webkit|Moz|O)/;
function Hr(e) {
  var t = e.replace(ho, "");
  return t.charAt(0).toLowerCase() + t.slice(1);
}
function mo(e) {
  return Hr(qr(e));
}
function yo(e, t) {
  return t.join(";" + et(e) + ":");
}
var go = /(-ms-|-webkit-|-moz-|-o-)/g;
function vo(e) {
  return typeof e == "string" ? e.replace(go, "") : e;
}
const bo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  assignStyle: Ur,
  camelCaseProperty: qr,
  cssifyDeclaration: Vr,
  cssifyObject: oo,
  hyphenateProperty: et,
  isPrefixedProperty: ao,
  isPrefixedValue: $t,
  isUnitlessProperty: po,
  normalizeProperty: mo,
  resolveArrayValue: yo,
  unprefixProperty: Hr,
  unprefixValue: vo
}, Symbol.toStringTag, { value: "Module" })), So = /* @__PURE__ */ Br(bo);
Object.defineProperty(Yr, "__esModule", {
  value: !0
});
var wo = Yr.default = ko, xo = So, Eo = /cross-fade\(/g, Po = ["-webkit-", ""];
function ko(e, t) {
  if (typeof t == "string" && !(0, xo.isPrefixedValue)(t) && t.indexOf("cross-fade(") !== -1)
    return Po.map(function(r) {
      return t.replace(Eo, r + "cross-fade(");
    });
}
var Xr = {}, De = {};
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = r;
  var t = /-webkit-|-moz-|-ms-/;
  function r(n) {
    return typeof n == "string" && t.test(n);
  }
})(De);
const Dt = /* @__PURE__ */ Mt(De);
Object.defineProperty(Xr, "__esModule", {
  value: !0
});
var Oo = Xr.default = Ao, Co = De, To = _o(Co);
function _o(e) {
  return e && e.__esModule ? e : { default: e };
}
var Ro = ["-webkit-", "-moz-", ""], fr = /linear-gradient|radial-gradient|repeating-linear-gradient|repeating-radial-gradient/gi;
function Ao(e, t) {
  if (typeof t == "string" && !(0, To.default)(t) && fr.test(t))
    return Ro.map(function(r) {
      return t.replace(fr, function(n) {
        return r + n;
      });
    });
}
var Zr = {};
Object.defineProperty(Zr, "__esModule", {
  value: !0
});
var zo = Zr.default = Wo, Mo = De, Io = $o(Mo);
function $o(e) {
  return e && e.__esModule ? e : { default: e };
}
var Do = ["-webkit-", ""];
function Wo(e, t) {
  if (typeof t == "string" && !(0, Io.default)(t) && t.indexOf("image-set(") > -1)
    return Do.map(function(r) {
      return t.replace(/image-set\(/g, r + "image-set(");
    });
}
var Kr = {};
Object.defineProperty(Kr, "__esModule", {
  value: !0
});
var No = Kr.default = Fo, jo = ["-webkit-", "-moz-", ""], Bo = {
  maxHeight: !0,
  maxWidth: !0,
  width: !0,
  height: !0,
  columnWidth: !0,
  minWidth: !0,
  minHeight: !0
}, Lo = {
  "min-content": !0,
  "max-content": !0,
  "fill-available": !0,
  "fit-content": !0,
  "contain-floats": !0
};
function Fo(e, t) {
  if (Bo.hasOwnProperty(e) && Lo.hasOwnProperty(t))
    return jo.map(function(r) {
      return r + t;
    });
}
var Jr = {}, Wt = {};
const Yo = /* @__PURE__ */ Br(no);
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = o;
  var t = Yo, r = n(t);
  function n(i) {
    return i && i.__esModule ? i : { default: i };
  }
  function o(i) {
    return (0, r.default)(i);
  }
})(Wt);
const Uo = /* @__PURE__ */ Mt(Wt);
var Nt = {};
Object.defineProperty(Nt, "__esModule", {
  value: !0
});
Nt.default = qo;
function qo(e) {
  return e.charAt(0).toUpperCase() + e.slice(1);
}
Object.defineProperty(Jr, "__esModule", {
  value: !0
});
var Go = Jr.default = ti, Vo = Wt, Ho = jt(Vo), Xo = De, Zo = jt(Xo), Ko = Nt, lr = jt(Ko);
function jt(e) {
  return e && e.__esModule ? e : { default: e };
}
var Jo = {
  transition: !0,
  transitionProperty: !0,
  WebkitTransition: !0,
  WebkitTransitionProperty: !0,
  MozTransition: !0,
  MozTransitionProperty: !0
}, Qo = {
  Webkit: "-webkit-",
  Moz: "-moz-",
  ms: "-ms-"
};
function ei(e, t) {
  if ((0, Zo.default)(e))
    return e;
  for (var r = e.split(/,(?![^()]*(?:\([^()]*\))?\))/g), n = 0, o = r.length; n < o; ++n) {
    var i = r[n], a = [i];
    for (var s in t) {
      var c = (0, Ho.default)(s);
      if (i.indexOf(c) > -1 && c !== "order")
        for (var u = t[s], d = 0, h = u.length; d < h; ++d)
          a.unshift(i.replace(c, Qo[u[d]] + c));
    }
    r[n] = a.join(",");
  }
  return r.join(",");
}
function ti(e, t, r, n) {
  if (typeof t == "string" && Jo.hasOwnProperty(e)) {
    var o = ei(t, n), i = o.split(/,(?![^()]*(?:\([^()]*\))?\))/g).filter(function(s) {
      return !/-moz-|-ms-/.test(s);
    }).join(",");
    if (e.indexOf("Webkit") > -1)
      return i;
    var a = o.split(/,(?![^()]*(?:\([^()]*\))?\))/g).filter(function(s) {
      return !/-webkit-|-ms-/.test(s);
    }).join(",");
    return e.indexOf("Moz") > -1 ? a : (r["Webkit" + (0, lr.default)(e)] = i, r["Moz" + (0, lr.default)(e)] = a, o);
  }
}
var le = ["Webkit"], ri = ["Moz"], H = ["ms"], L = ["Webkit", "ms"], ni = ["Webkit", "Moz", "ms"];
const oi = {
  plugins: [wo, Oo, zo, No, Go],
  prefixMap: { appearance: ni, textEmphasisPosition: L, textEmphasis: L, textEmphasisStyle: L, textEmphasisColor: L, boxDecorationBreak: L, maskImage: L, maskMode: L, maskRepeat: L, maskPosition: L, maskClip: L, maskOrigin: L, maskSize: L, maskComposite: L, mask: L, maskBorderSource: L, maskBorderMode: L, maskBorderSlice: L, maskBorderWidth: L, maskBorderOutset: L, maskBorderRepeat: L, maskBorder: L, maskType: L, userSelect: L, backdropFilter: le, clipPath: le, hyphens: L, textOrientation: le, tabSize: ri, wrapFlow: H, wrapThrough: H, wrapMargin: H, scrollSnapType: H, scrollSnapPointsX: H, scrollSnapPointsY: H, scrollSnapDestination: H, scrollSnapCoordinate: H, textSizeAdjust: ["ms", "Webkit"], flowInto: H, flowFrom: H, breakBefore: H, breakAfter: H, breakInside: H, regionFragment: H, fontKerning: le, textDecorationStyle: le, textDecorationSkip: le, textDecorationLine: le, textDecorationColor: le }
};
var ii = ["-webkit-", "-moz-", ""], ai = {
  "zoom-in": !0,
  "zoom-out": !0,
  grab: !0,
  grabbing: !0
};
function si(e, t) {
  if (e === "cursor" && ai.hasOwnProperty(t))
    return ii.map(function(r) {
      return r + t;
    });
}
var ci = /cross-fade\(/g, ui = ["-webkit-", ""];
function fi(e, t) {
  if (typeof t == "string" && !$t(t) && t.indexOf("cross-fade(") !== -1)
    return ui.map(function(r) {
      return t.replace(ci, r + "cross-fade(");
    });
}
var li = /filter\(/g, di = ["-webkit-", ""];
function pi(e, t) {
  if (typeof t == "string" && !$t(t) && t.indexOf("filter(") !== -1)
    return di.map(function(r) {
      return t.replace(li, r + "filter(");
    });
}
var dr = {
  flex: ["-webkit-box", "-moz-box", "-ms-flexbox", "-webkit-flex", "flex"],
  "inline-flex": ["-webkit-inline-box", "-moz-inline-box", "-ms-inline-flexbox", "-webkit-inline-flex", "inline-flex"]
};
function hi(e, t) {
  if (e === "display" && dr.hasOwnProperty(t))
    return dr[t];
}
var mi = {
  "space-around": "justify",
  "space-between": "justify",
  "flex-start": "start",
  "flex-end": "end",
  "wrap-reverse": "multiple",
  wrap: "multiple"
}, pr = {
  alignItems: "WebkitBoxAlign",
  justifyContent: "WebkitBoxPack",
  flexWrap: "WebkitBoxLines",
  flexGrow: "WebkitBoxFlex"
};
function yi(e, t, r) {
  e === "flexDirection" && typeof t == "string" && (t.indexOf("column") > -1 ? r.WebkitBoxOrient = "vertical" : r.WebkitBoxOrient = "horizontal", t.indexOf("reverse") > -1 ? r.WebkitBoxDirection = "reverse" : r.WebkitBoxDirection = "normal"), pr.hasOwnProperty(e) && (r[pr[e]] = mi[t] || t);
}
var gi = ["-webkit-", "-moz-", ""], hr = /linear-gradient|radial-gradient|repeating-linear-gradient|repeating-radial-gradient/gi;
function vi(e, t) {
  if (typeof t == "string" && !Dt(t) && hr.test(t))
    return gi.map(function(r) {
      return t.replace(hr, function(n) {
        return r + n;
      });
    });
}
var je = /* @__PURE__ */ function() {
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
function de(e) {
  return typeof e == "number" && !isNaN(e);
}
function mr(e) {
  return typeof e == "string" && e.includes("/");
}
var yr = ["center", "end", "start", "stretch"], gr = {
  "inline-grid": ["-ms-inline-grid", "inline-grid"],
  grid: ["-ms-grid", "grid"]
}, ae = {
  alignSelf: function(t, r) {
    yr.indexOf(t) > -1 && (r.msGridRowAlign = t);
  },
  gridColumn: function(t, r) {
    if (de(t))
      r.msGridColumn = t;
    else if (mr(t)) {
      var n = t.split("/"), o = je(n, 2), i = o[0], a = o[1];
      ae.gridColumnStart(+i, r);
      var s = a.split(/ ?span /), c = je(s, 2), u = c[0], d = c[1];
      u === "" ? ae.gridColumnEnd(+i + +d, r) : ae.gridColumnEnd(+a, r);
    } else
      ae.gridColumnStart(t, r);
  },
  gridColumnEnd: function(t, r) {
    var n = r.msGridColumn;
    de(t) && de(n) && (r.msGridColumnSpan = t - n);
  },
  gridColumnStart: function(t, r) {
    de(t) && (r.msGridColumn = t);
  },
  gridRow: function(t, r) {
    if (de(t))
      r.msGridRow = t;
    else if (mr(t)) {
      var n = t.split("/"), o = je(n, 2), i = o[0], a = o[1];
      ae.gridRowStart(+i, r);
      var s = a.split(/ ?span /), c = je(s, 2), u = c[0], d = c[1];
      u === "" ? ae.gridRowEnd(+i + +d, r) : ae.gridRowEnd(+a, r);
    } else
      ae.gridRowStart(t, r);
  },
  gridRowEnd: function(t, r) {
    var n = r.msGridRow;
    de(t) && de(n) && (r.msGridRowSpan = t - n);
  },
  gridRowStart: function(t, r) {
    de(t) && (r.msGridRow = t);
  },
  gridTemplateColumns: function(t, r) {
    r.msGridColumns = t;
  },
  gridTemplateRows: function(t, r) {
    r.msGridRows = t;
  },
  justifySelf: function(t, r) {
    yr.indexOf(t) > -1 && (r.msGridColumnAlign = t);
  }
};
function bi(e, t, r) {
  if (e === "display" && t in gr)
    return gr[t];
  if (e in ae) {
    var n = ae[e];
    n(t, r);
  }
}
var Si = ["-webkit-", ""];
function wi(e, t) {
  if (typeof t == "string" && !Dt(t) && t.indexOf("image-set(") > -1)
    return Si.map(function(r) {
      return t.replace(/image-set\(/g, r + "image-set(");
    });
}
var vr = {
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
function xi(e, t, r) {
  if (Object.prototype.hasOwnProperty.call(vr, e))
    for (var n = vr[e], o = 0, i = n.length; o < i; ++o)
      r[n[o]] = t;
}
function Ei(e, t) {
  if (e === "position" && t === "sticky")
    return ["-webkit-sticky", "sticky"];
}
var Pi = ["-webkit-", "-moz-", ""], ki = {
  maxHeight: !0,
  maxWidth: !0,
  width: !0,
  height: !0,
  columnWidth: !0,
  minWidth: !0,
  minHeight: !0
}, Oi = {
  "min-content": !0,
  "max-content": !0,
  "fill-available": !0,
  "fit-content": !0,
  "contain-floats": !0
};
function Ci(e, t) {
  if (ki.hasOwnProperty(e) && Oi.hasOwnProperty(t))
    return Pi.map(function(r) {
      return r + t;
    });
}
var Ti = {
  transition: !0,
  transitionProperty: !0,
  WebkitTransition: !0,
  WebkitTransitionProperty: !0,
  MozTransition: !0,
  MozTransitionProperty: !0
}, _i = {
  Webkit: "-webkit-",
  Moz: "-moz-",
  ms: "-ms-"
};
function Ri(e, t) {
  if (Dt(e))
    return e;
  for (var r = e.split(/,(?![^()]*(?:\([^()]*\))?\))/g), n = 0, o = r.length; n < o; ++n) {
    var i = r[n], a = [i];
    for (var s in t) {
      var c = Uo(s);
      if (i.indexOf(c) > -1 && c !== "order")
        for (var u = t[s], d = 0, h = u.length; d < h; ++d)
          a.unshift(i.replace(c, _i[u[d]] + c));
    }
    r[n] = a.join(",");
  }
  return r.join(",");
}
function Ai(e, t, r, n) {
  if (typeof t == "string" && Ti.hasOwnProperty(e)) {
    var o = Ri(t, n), i = o.split(/,(?![^()]*(?:\([^()]*\))?\))/g).filter(function(s) {
      return !/-moz-|-ms-/.test(s);
    }).join(",");
    if (e.indexOf("Webkit") > -1)
      return i;
    var a = o.split(/,(?![^()]*(?:\([^()]*\))?\))/g).filter(function(s) {
      return !/-webkit-|-ms-/.test(s);
    }).join(",");
    return e.indexOf("Moz") > -1 ? a : (r["Webkit" + Et(e)] = i, r["Moz" + Et(e)] = a, o);
  }
}
var zi = [fi, si, pi, yi, vi, bi, wi, xi, Ei, Ci, Ai, hi], Mi = qn({
  prefixMap: oi.prefixMap,
  plugins: zi
}), X = function() {
  return X = Object.assign || function(t) {
    for (var r, n = 1, o = arguments.length; n < o; n++) {
      r = arguments[n];
      for (var i in r)
        Object.prototype.hasOwnProperty.call(r, i) && (t[i] = r[i]);
    }
    return t;
  }, X.apply(this, arguments);
};
function Ee(e, t, r) {
  if (r || arguments.length === 2)
    for (var n = 0, o = t.length, i; n < o; n++)
      (i || !(n in t)) && (i || (i = Array.prototype.slice.call(t, 0, n)), i[n] = t[n]);
  return e.concat(i || Array.prototype.slice.call(t));
}
function Ii(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r];
  };
}
var $i = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, Di = /* @__PURE__ */ Ii(
  function(e) {
    return $i.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), B = "-ms-", Ie = "-moz-", j = "-webkit-", Qr = "comm", tt = "rule", Bt = "decl", Wi = "@import", en = "@keyframes", Ni = "@layer", tn = Math.abs, Lt = String.fromCharCode, kt = Object.assign;
function ji(e, t) {
  return G(e, 0) ^ 45 ? (((t << 2 ^ G(e, 0)) << 2 ^ G(e, 1)) << 2 ^ G(e, 2)) << 2 ^ G(e, 3) : 0;
}
function rn(e) {
  return e.trim();
}
function ue(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function _(e, t, r) {
  return e.replace(t, r);
}
function Ge(e, t, r) {
  return e.indexOf(t, r);
}
function G(e, t) {
  return e.charCodeAt(t) | 0;
}
function Pe(e, t, r) {
  return e.slice(t, r);
}
function se(e) {
  return e.length;
}
function nn(e) {
  return e.length;
}
function Me(e, t) {
  return t.push(e), e;
}
function Bi(e, t) {
  return e.map(t).join("");
}
function br(e, t) {
  return e.filter(function(r) {
    return !ue(r, t);
  });
}
var rt = 1, ke = 1, on = 0, Q = 0, F = 0, _e = "";
function nt(e, t, r, n, o, i, a, s) {
  return { value: e, root: t, parent: r, type: n, props: o, children: i, line: rt, column: ke, length: a, return: "", siblings: s };
}
function pe(e, t) {
  return kt(nt("", null, null, "", null, null, 0, e.siblings), e, { length: -e.length }, t);
}
function we(e) {
  for (; e.root; )
    e = pe(e.root, { children: [e] });
  Me(e, e.siblings);
}
function Li() {
  return F;
}
function Fi() {
  return F = Q > 0 ? G(_e, --Q) : 0, ke--, F === 10 && (ke = 1, rt--), F;
}
function oe() {
  return F = Q < on ? G(_e, Q++) : 0, ke++, F === 10 && (ke = 1, rt++), F;
}
function ge() {
  return G(_e, Q);
}
function Ve() {
  return Q;
}
function ot(e, t) {
  return Pe(_e, e, t);
}
function Ot(e) {
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
function Yi(e) {
  return rt = ke = 1, on = se(_e = e), Q = 0, [];
}
function Ui(e) {
  return _e = "", e;
}
function gt(e) {
  return rn(ot(Q - 1, Ct(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function qi(e) {
  for (; (F = ge()) && F < 33; )
    oe();
  return Ot(e) > 2 || Ot(F) > 3 ? "" : " ";
}
function Gi(e, t) {
  for (; --t && oe() && !(F < 48 || F > 102 || F > 57 && F < 65 || F > 70 && F < 97); )
    ;
  return ot(e, Ve() + (t < 6 && ge() == 32 && oe() == 32));
}
function Ct(e) {
  for (; oe(); )
    switch (F) {
      case e:
        return Q;
      case 34:
      case 39:
        e !== 34 && e !== 39 && Ct(F);
        break;
      case 40:
        e === 41 && Ct(e);
        break;
      case 92:
        oe();
        break;
    }
  return Q;
}
function Vi(e, t) {
  for (; oe() && e + F !== 57; )
    if (e + F === 84 && ge() === 47)
      break;
  return "/*" + ot(t, Q - 1) + "*" + Lt(e === 47 ? e : oe());
}
function Hi(e) {
  for (; !Ot(ge()); )
    oe();
  return ot(e, Q);
}
function Xi(e) {
  return Ui(He("", null, null, null, [""], e = Yi(e), 0, [0], e));
}
function He(e, t, r, n, o, i, a, s, c) {
  for (var u = 0, d = 0, h = a, y = 0, g = 0, P = 0, b = 1, I = 1, A = 1, D = 0, x = "", E = o, f = i, v = n, w = x; I; )
    switch (P = D, D = oe()) {
      case 40:
        if (P != 108 && G(w, h - 1) == 58) {
          Ge(w += _(gt(D), "&", "&\f"), "&\f", tn(u ? s[u - 1] : 0)) != -1 && (A = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        w += gt(D);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        w += qi(P);
        break;
      case 92:
        w += Gi(Ve() - 1, 7);
        continue;
      case 47:
        switch (ge()) {
          case 42:
          case 47:
            Me(Zi(Vi(oe(), Ve()), t, r, c), c);
            break;
          default:
            w += "/";
        }
        break;
      case 123 * b:
        s[u++] = se(w) * A;
      case 125 * b:
      case 59:
      case 0:
        switch (D) {
          case 0:
          case 125:
            I = 0;
          case 59 + d:
            A == -1 && (w = _(w, /\f/g, "")), g > 0 && se(w) - h && Me(g > 32 ? wr(w + ";", n, r, h - 1, c) : wr(_(w, " ", "") + ";", n, r, h - 2, c), c);
            break;
          case 59:
            w += ";";
          default:
            if (Me(v = Sr(w, t, r, u, d, o, s, x, E = [], f = [], h, i), i), D === 123)
              if (d === 0)
                He(w, t, v, v, E, i, h, s, f);
              else
                switch (y === 99 && G(w, 3) === 110 ? 100 : y) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    He(e, v, v, n && Me(Sr(e, v, v, 0, 0, o, s, x, o, E = [], h, f), f), o, f, h, s, n ? E : f);
                    break;
                  default:
                    He(w, v, v, v, [""], f, 0, s, f);
                }
        }
        u = d = g = 0, b = A = 1, x = w = "", h = a;
        break;
      case 58:
        h = 1 + se(w), g = P;
      default:
        if (b < 1) {
          if (D == 123)
            --b;
          else if (D == 125 && b++ == 0 && Fi() == 125)
            continue;
        }
        switch (w += Lt(D), D * b) {
          case 38:
            A = d > 0 ? 1 : (w += "\f", -1);
            break;
          case 44:
            s[u++] = (se(w) - 1) * A, A = 1;
            break;
          case 64:
            ge() === 45 && (w += gt(oe())), y = ge(), d = h = se(x = w += Hi(Ve())), D++;
            break;
          case 45:
            P === 45 && se(w) == 2 && (b = 0);
        }
    }
  return i;
}
function Sr(e, t, r, n, o, i, a, s, c, u, d, h) {
  for (var y = o - 1, g = o === 0 ? i : [""], P = nn(g), b = 0, I = 0, A = 0; b < n; ++b)
    for (var D = 0, x = Pe(e, y + 1, y = tn(I = a[b])), E = e; D < P; ++D)
      (E = rn(I > 0 ? g[D] + " " + x : _(x, /&\f/g, g[D]))) && (c[A++] = E);
  return nt(e, t, r, o === 0 ? tt : s, c, u, d, h);
}
function Zi(e, t, r, n) {
  return nt(e, t, r, Qr, Lt(Li()), Pe(e, 2, -2), 0, n);
}
function wr(e, t, r, n, o) {
  return nt(e, t, r, Bt, Pe(e, 0, n), Pe(e, n + 1, -1), n, o);
}
function an(e, t, r) {
  switch (ji(e, t)) {
    case 5103:
      return j + "print-" + e + e;
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
      return j + e + e;
    case 4789:
      return Ie + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return j + e + Ie + e + B + e + e;
    case 5936:
      switch (G(e, t + 11)) {
        case 114:
          return j + e + B + _(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return j + e + B + _(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return j + e + B + _(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
    case 6828:
    case 4268:
    case 2903:
      return j + e + B + e + e;
    case 6165:
      return j + e + B + "flex-" + e + e;
    case 5187:
      return j + e + _(e, /(\w+).+(:[^]+)/, j + "box-$1$2" + B + "flex-$1$2") + e;
    case 5443:
      return j + e + B + "flex-item-" + _(e, /flex-|-self/g, "") + (ue(e, /flex-|baseline/) ? "" : B + "grid-row-" + _(e, /flex-|-self/g, "")) + e;
    case 4675:
      return j + e + B + "flex-line-pack" + _(e, /align-content|flex-|-self/g, "") + e;
    case 5548:
      return j + e + B + _(e, "shrink", "negative") + e;
    case 5292:
      return j + e + B + _(e, "basis", "preferred-size") + e;
    case 6060:
      return j + "box-" + _(e, "-grow", "") + j + e + B + _(e, "grow", "positive") + e;
    case 4554:
      return j + _(e, /([^-])(transform)/g, "$1" + j + "$2") + e;
    case 6187:
      return _(_(_(e, /(zoom-|grab)/, j + "$1"), /(image-set)/, j + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return _(e, /(image-set\([^]*)/, j + "$1$`$1");
    case 4968:
      return _(_(e, /(.+:)(flex-)?(.*)/, j + "box-pack:$3" + B + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + j + e + e;
    case 4200:
      if (!ue(e, /flex-|baseline/))
        return B + "grid-column-align" + Pe(e, t) + e;
      break;
    case 2592:
    case 3360:
      return B + _(e, "template-", "") + e;
    case 4384:
    case 3616:
      return r && r.some(function(n, o) {
        return t = o, ue(n.props, /grid-\w+-end/);
      }) ? ~Ge(e + (r = r[t].value), "span", 0) ? e : B + _(e, "-start", "") + e + B + "grid-row-span:" + (~Ge(r, "span", 0) ? ue(r, /\d+/) : +ue(r, /\d+/) - +ue(e, /\d+/)) + ";" : B + _(e, "-start", "") + e;
    case 4896:
    case 4128:
      return r && r.some(function(n) {
        return ue(n.props, /grid-\w+-start/);
      }) ? e : B + _(_(e, "-end", "-span"), "span ", "") + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return _(e, /(.+)-inline(.+)/, j + "$1$2") + e;
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
      if (se(e) - 1 - t > 6)
        switch (G(e, t + 1)) {
          case 109:
            if (G(e, t + 4) !== 45)
              break;
          case 102:
            return _(e, /(.+:)(.+)-([^]+)/, "$1" + j + "$2-$3$1" + Ie + (G(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
          case 115:
            return ~Ge(e, "stretch", 0) ? an(_(e, "stretch", "fill-available"), t, r) + e : e;
        }
      break;
    case 5152:
    case 5920:
      return _(e, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(n, o, i, a, s, c, u) {
        return B + o + ":" + i + u + (a ? B + o + "-span:" + (s ? c : +c - +i) + u : "") + e;
      });
    case 4949:
      if (G(e, t + 6) === 121)
        return _(e, ":", ":" + j) + e;
      break;
    case 6444:
      switch (G(e, G(e, 14) === 45 ? 18 : 11)) {
        case 120:
          return _(e, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + j + (G(e, 14) === 45 ? "inline-" : "") + "box$3$1" + j + "$2$3$1" + B + "$2box$3") + e;
        case 100:
          return _(e, ":", ":" + B) + e;
      }
      break;
    case 5719:
    case 2647:
    case 2135:
    case 3927:
    case 2391:
      return _(e, "scroll-", "scroll-snap-") + e;
  }
  return e;
}
function Ke(e, t) {
  for (var r = "", n = 0; n < e.length; n++)
    r += t(e[n], n, e, t) || "";
  return r;
}
function Ki(e, t, r, n) {
  switch (e.type) {
    case Ni:
      if (e.children.length)
        break;
    case Wi:
    case Bt:
      return e.return = e.return || e.value;
    case Qr:
      return "";
    case en:
      return e.return = e.value + "{" + Ke(e.children, n) + "}";
    case tt:
      if (!se(e.value = e.props.join(",")))
        return "";
  }
  return se(r = Ke(e.children, n)) ? e.return = e.value + "{" + r + "}" : "";
}
function Ji(e) {
  var t = nn(e);
  return function(r, n, o, i) {
    for (var a = "", s = 0; s < t; s++)
      a += e[s](r, n, o, i) || "";
    return a;
  };
}
function Qi(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
function ea(e, t, r, n) {
  if (e.length > -1 && !e.return)
    switch (e.type) {
      case Bt:
        e.return = an(e.value, e.length, r);
        return;
      case en:
        return Ke([pe(e, { value: _(e.value, "@", "@" + j) })], n);
      case tt:
        if (e.length)
          return Bi(r = e.props, function(o) {
            switch (ue(o, n = /(::plac\w+|:read-\w+)/)) {
              case ":read-only":
              case ":read-write":
                we(pe(e, { props: [_(o, /:(read-\w+)/, ":" + Ie + "$1")] })), we(pe(e, { props: [o] })), kt(e, { props: br(r, n) });
                break;
              case "::placeholder":
                we(pe(e, { props: [_(o, /:(plac\w+)/, ":" + j + "input-$1")] })), we(pe(e, { props: [_(o, /:(plac\w+)/, ":" + Ie + "$1")] })), we(pe(e, { props: [_(o, /:(plac\w+)/, B + "input-$1")] })), we(pe(e, { props: [o] })), kt(e, { props: br(r, n) });
                break;
            }
            return "";
          });
    }
}
var ta = {
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
}, Se = typeof process < "u" && process.env !== void 0 && (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR) || "data-styled", sn = "active", cn = "data-styled-version", it = "6.1.11", Ft = `/*!sc*/
`, Yt = typeof window < "u" && "HTMLElement" in window, ra = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && process.env !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? process.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && process.env.REACT_APP_SC_DISABLE_SPEEDY : typeof process < "u" && process.env !== void 0 && process.env.SC_DISABLE_SPEEDY !== void 0 && process.env.SC_DISABLE_SPEEDY !== "" ? process.env.SC_DISABLE_SPEEDY !== "false" && process.env.SC_DISABLE_SPEEDY : process.env.NODE_ENV !== "production"), xr = /invalid hook call/i, Be = /* @__PURE__ */ new Set(), na = function(e, t) {
  if (process.env.NODE_ENV !== "production") {
    var r = t ? ' with the id of "'.concat(t, '"') : "", n = "The component ".concat(e).concat(r, ` has been created dynamically.
`) + `You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.`, o = console.error;
    try {
      var i = !0;
      console.error = function(a) {
        for (var s = [], c = 1; c < arguments.length; c++)
          s[c - 1] = arguments[c];
        xr.test(a) ? (i = !1, Be.delete(n)) : o.apply(void 0, Ee([a], s, !1));
      }, Tn(), i && !Be.has(n) && (console.warn(n), Be.add(n));
    } catch (a) {
      xr.test(a.message) && Be.delete(n);
    } finally {
      console.error = o;
    }
  }
}, at = Object.freeze([]), Oe = Object.freeze({});
function oa(e, t, r) {
  return r === void 0 && (r = Oe), e.theme !== r.theme && e.theme || t || r.theme;
}
var Tt = /* @__PURE__ */ new Set(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "u", "ul", "use", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"]), ia = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, aa = /(^-|-$)/g;
function Er(e) {
  return e.replace(ia, "-").replace(aa, "");
}
var sa = /(a)(d)/gi, Le = 52, Pr = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function _t(e) {
  var t, r = "";
  for (t = Math.abs(e); t > Le; t = t / Le | 0)
    r = Pr(t % Le) + r;
  return (Pr(t % Le) + r).replace(sa, "$1-$2");
}
var vt, un = 5381, me = function(e, t) {
  for (var r = t.length; r; )
    e = 33 * e ^ t.charCodeAt(--r);
  return e;
}, fn = function(e) {
  return me(un, e);
};
function ca(e) {
  return _t(fn(e) >>> 0);
}
function ln(e) {
  return process.env.NODE_ENV !== "production" && typeof e == "string" && e || e.displayName || e.name || "Component";
}
function bt(e) {
  return typeof e == "string" && (process.env.NODE_ENV === "production" || e.charAt(0) === e.charAt(0).toLowerCase());
}
var dn = typeof Symbol == "function" && Symbol.for, pn = dn ? Symbol.for("react.memo") : 60115, ua = dn ? Symbol.for("react.forward_ref") : 60112, fa = { childContextTypes: !0, contextType: !0, contextTypes: !0, defaultProps: !0, displayName: !0, getDefaultProps: !0, getDerivedStateFromError: !0, getDerivedStateFromProps: !0, mixins: !0, propTypes: !0, type: !0 }, la = { name: !0, length: !0, prototype: !0, caller: !0, callee: !0, arguments: !0, arity: !0 }, hn = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 }, da = ((vt = {})[ua] = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 }, vt[pn] = hn, vt);
function kr(e) {
  return ("type" in (t = e) && t.type.$$typeof) === pn ? hn : "$$typeof" in e ? da[e.$$typeof] : fa;
  var t;
}
var pa = Object.defineProperty, ha = Object.getOwnPropertyNames, Or = Object.getOwnPropertySymbols, ma = Object.getOwnPropertyDescriptor, ya = Object.getPrototypeOf, Cr = Object.prototype;
function mn(e, t, r) {
  if (typeof t != "string") {
    if (Cr) {
      var n = ya(t);
      n && n !== Cr && mn(e, n, r);
    }
    var o = ha(t);
    Or && (o = o.concat(Or(t)));
    for (var i = kr(e), a = kr(t), s = 0; s < o.length; ++s) {
      var c = o[s];
      if (!(c in la || r && r[c] || a && c in a || i && c in i)) {
        var u = ma(t, c);
        try {
          pa(e, c, u);
        } catch {
        }
      }
    }
  }
  return e;
}
function Ce(e) {
  return typeof e == "function";
}
function Ut(e) {
  return typeof e == "object" && "styledComponentId" in e;
}
function ye(e, t) {
  return e && t ? "".concat(e, " ").concat(t) : e || t || "";
}
function Tr(e, t) {
  if (e.length === 0)
    return "";
  for (var r = e[0], n = 1; n < e.length; n++)
    r += e[n];
  return r;
}
function Te(e) {
  return e !== null && typeof e == "object" && e.constructor.name === Object.name && !("props" in e && e.$$typeof);
}
function Rt(e, t, r) {
  if (r === void 0 && (r = !1), !r && !Te(e) && !Array.isArray(e))
    return t;
  if (Array.isArray(t))
    for (var n = 0; n < t.length; n++)
      e[n] = Rt(e[n], t[n]);
  else if (Te(t))
    for (var n in t)
      e[n] = Rt(e[n], t[n]);
  return e;
}
function qt(e, t) {
  Object.defineProperty(e, "toString", { value: t });
}
var ga = process.env.NODE_ENV !== "production" ? { 1: `Cannot create styled-component for component: %s.

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
function va() {
  for (var e = [], t = 0; t < arguments.length; t++)
    e[t] = arguments[t];
  for (var r = e[0], n = [], o = 1, i = e.length; o < i; o += 1)
    n.push(e[o]);
  return n.forEach(function(a) {
    r = r.replace(/%[a-z]/, a);
  }), r;
}
function Re(e) {
  for (var t = [], r = 1; r < arguments.length; r++)
    t[r - 1] = arguments[r];
  return process.env.NODE_ENV === "production" ? new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e, " for more information.").concat(t.length > 0 ? " Args: ".concat(t.join(", ")) : "")) : new Error(va.apply(void 0, Ee([ga[e]], t, !1)).trim());
}
var ba = function() {
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
          throw Re(16, "".concat(t));
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
      r += "".concat(this.tag.getRule(a)).concat(Ft);
    return r;
  }, e;
}(), Sa = 1 << 30, Xe = /* @__PURE__ */ new Map(), Je = /* @__PURE__ */ new Map(), Ze = 1, Fe = function(e) {
  if (Xe.has(e))
    return Xe.get(e);
  for (; Je.has(Ze); )
    Ze++;
  var t = Ze++;
  if (process.env.NODE_ENV !== "production" && ((0 | t) < 0 || t > Sa))
    throw Re(16, "".concat(t));
  return Xe.set(e, t), Je.set(t, e), t;
}, wa = function(e, t) {
  Ze = t + 1, Xe.set(e, t), Je.set(t, e);
}, xa = "style[".concat(Se, "][").concat(cn, '="').concat(it, '"]'), Ea = new RegExp("^".concat(Se, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')), Pa = function(e, t, r) {
  for (var n, o = r.split(","), i = 0, a = o.length; i < a; i++)
    (n = o[i]) && e.registerName(t, n);
}, ka = function(e, t) {
  for (var r, n = ((r = t.textContent) !== null && r !== void 0 ? r : "").split(Ft), o = [], i = 0, a = n.length; i < a; i++) {
    var s = n[i].trim();
    if (s) {
      var c = s.match(Ea);
      if (c) {
        var u = 0 | parseInt(c[1], 10), d = c[2];
        u !== 0 && (wa(d, u), Pa(e, d, c[3]), e.getTag().insertRules(u, o)), o.length = 0;
      } else
        o.push(s);
    }
  }
};
function Oa() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}
var yn = function(e) {
  var t = document.head, r = e || t, n = document.createElement("style"), o = function(s) {
    var c = Array.from(s.querySelectorAll("style[".concat(Se, "]")));
    return c[c.length - 1];
  }(r), i = o !== void 0 ? o.nextSibling : null;
  n.setAttribute(Se, sn), n.setAttribute(cn, it);
  var a = Oa();
  return a && n.setAttribute("nonce", a), r.insertBefore(n, i), n;
}, Ca = function() {
  function e(t) {
    this.element = yn(t), this.element.appendChild(document.createTextNode("")), this.sheet = function(r) {
      if (r.sheet)
        return r.sheet;
      for (var n = document.styleSheets, o = 0, i = n.length; o < i; o++) {
        var a = n[o];
        if (a.ownerNode === r)
          return a;
      }
      throw Re(17);
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
}(), Ta = function() {
  function e(t) {
    this.element = yn(t), this.nodes = this.element.childNodes, this.length = 0;
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
}(), _a = function() {
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
}(), _r = Yt, Ra = { isServer: !Yt, useCSSOMInjection: !ra }, gn = function() {
  function e(t, r, n) {
    t === void 0 && (t = Oe), r === void 0 && (r = {});
    var o = this;
    this.options = X(X({}, Ra), t), this.gs = r, this.names = new Map(n), this.server = !!t.isServer, !this.server && Yt && _r && (_r = !1, function(i) {
      for (var a = document.querySelectorAll(xa), s = 0, c = a.length; s < c; s++) {
        var u = a[s];
        u && u.getAttribute(Se) !== sn && (ka(i, u), u.parentNode && u.parentNode.removeChild(u));
      }
    }(this)), qt(this, function() {
      return function(i) {
        for (var a = i.getTag(), s = a.length, c = "", u = function(h) {
          var y = function(A) {
            return Je.get(A);
          }(h);
          if (y === void 0)
            return "continue";
          var g = i.names.get(y), P = a.getGroup(h);
          if (g === void 0 || P.length === 0)
            return "continue";
          var b = "".concat(Se, ".g").concat(h, '[id="').concat(y, '"]'), I = "";
          g !== void 0 && g.forEach(function(A) {
            A.length > 0 && (I += "".concat(A, ","));
          }), c += "".concat(P).concat(b, '{content:"').concat(I, '"}').concat(Ft);
        }, d = 0; d < s; d++)
          u(d);
        return c;
      }(o);
    });
  }
  return e.registerId = function(t) {
    return Fe(t);
  }, e.prototype.reconstructWithOptions = function(t, r) {
    return r === void 0 && (r = !0), new e(X(X({}, this.options), t), this.gs, r && this.names || void 0);
  }, e.prototype.allocateGSInstance = function(t) {
    return this.gs[t] = (this.gs[t] || 0) + 1;
  }, e.prototype.getTag = function() {
    return this.tag || (this.tag = (t = function(r) {
      var n = r.useCSSOMInjection, o = r.target;
      return r.isServer ? new _a(o) : n ? new Ca(o) : new Ta(o);
    }(this.options), new ba(t)));
    var t;
  }, e.prototype.hasNameForId = function(t, r) {
    return this.names.has(t) && this.names.get(t).has(r);
  }, e.prototype.registerName = function(t, r) {
    if (Fe(t), this.names.has(t))
      this.names.get(t).add(r);
    else {
      var n = /* @__PURE__ */ new Set();
      n.add(r), this.names.set(t, n);
    }
  }, e.prototype.insertRules = function(t, r, n) {
    this.registerName(t, r), this.getTag().insertRules(Fe(t), n);
  }, e.prototype.clearNames = function(t) {
    this.names.has(t) && this.names.get(t).clear();
  }, e.prototype.clearRules = function(t) {
    this.getTag().clearGroup(Fe(t)), this.clearNames(t);
  }, e.prototype.clearTag = function() {
    this.tag = void 0;
  }, e;
}(), Aa = /&/g, za = /^\s*\/\/.*$/gm;
function vn(e, t) {
  return e.map(function(r) {
    return r.type === "rule" && (r.value = "".concat(t, " ").concat(r.value), r.value = r.value.replaceAll(",", ",".concat(t, " ")), r.props = r.props.map(function(n) {
      return "".concat(t, " ").concat(n);
    })), Array.isArray(r.children) && r.type !== "@keyframes" && (r.children = vn(r.children, t)), r;
  });
}
function Ma(e) {
  var t, r, n, o = Oe, i = o.options, a = i === void 0 ? Oe : i, s = o.plugins, c = s === void 0 ? at : s, u = function(y, g, P) {
    return P.startsWith(r) && P.endsWith(r) && P.replaceAll(r, "").length > 0 ? ".".concat(t) : y;
  }, d = c.slice();
  d.push(function(y) {
    y.type === tt && y.value.includes("&") && (y.props[0] = y.props[0].replace(Aa, r).replace(n, u));
  }), a.prefix && d.push(ea), d.push(Ki);
  var h = function(y, g, P, b) {
    g === void 0 && (g = ""), P === void 0 && (P = ""), b === void 0 && (b = "&"), t = b, r = g, n = new RegExp("\\".concat(r, "\\b"), "g");
    var I = y.replace(za, ""), A = Xi(P || g ? "".concat(P, " ").concat(g, " { ").concat(I, " }") : I);
    a.namespace && (A = vn(A, a.namespace));
    var D = [];
    return Ke(A, Ji(d.concat(Qi(function(x) {
      return D.push(x);
    })))), D;
  };
  return h.hash = c.length ? c.reduce(function(y, g) {
    return g.name || Re(15), me(y, g.name);
  }, un).toString() : "", h;
}
var Ia = new gn(), At = Ma(), bn = be.createContext({ shouldForwardProp: void 0, styleSheet: Ia, stylis: At });
bn.Consumer;
be.createContext(void 0);
function Rr() {
  return Rn(bn);
}
var Ar = function() {
  function e(t, r) {
    var n = this;
    this.inject = function(o, i) {
      i === void 0 && (i = At);
      var a = n.name + i.hash;
      o.hasNameForId(n.id, a) || o.insertRules(n.id, a, i(n.rules, a, "@keyframes"));
    }, this.name = t, this.id = "sc-keyframes-".concat(t), this.rules = r, qt(this, function() {
      throw Re(12, String(n.name));
    });
  }
  return e.prototype.getName = function(t) {
    return t === void 0 && (t = At), this.name + t.hash;
  }, e;
}(), $a = function(e) {
  return e >= "A" && e <= "Z";
};
function zr(e) {
  for (var t = "", r = 0; r < e.length; r++) {
    var n = e[r];
    if (r === 1 && n === "-" && e[0] === "-")
      return e;
    $a(n) ? t += "-" + n.toLowerCase() : t += n;
  }
  return t.startsWith("ms-") ? "-" + t : t;
}
var Sn = function(e) {
  return e == null || e === !1 || e === "";
}, wn = function(e) {
  var t, r, n = [];
  for (var o in e) {
    var i = e[o];
    e.hasOwnProperty(o) && !Sn(i) && (Array.isArray(i) && i.isCss || Ce(i) ? n.push("".concat(zr(o), ":"), i, ";") : Te(i) ? n.push.apply(n, Ee(Ee(["".concat(o, " {")], wn(i), !1), ["}"], !1)) : n.push("".concat(zr(o), ": ").concat((t = o, (r = i) == null || typeof r == "boolean" || r === "" ? "" : typeof r != "number" || r === 0 || t in ta || t.startsWith("--") ? String(r).trim() : "".concat(r, "px")), ";")));
  }
  return n;
};
function ve(e, t, r, n) {
  if (Sn(e))
    return [];
  if (Ut(e))
    return [".".concat(e.styledComponentId)];
  if (Ce(e)) {
    if (!Ce(i = e) || i.prototype && i.prototype.isReactComponent || !t)
      return [e];
    var o = e(t);
    return process.env.NODE_ENV === "production" || typeof o != "object" || Array.isArray(o) || o instanceof Ar || Te(o) || o === null || console.error("".concat(ln(e), " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.")), ve(o, t, r, n);
  }
  var i;
  return e instanceof Ar ? r ? (e.inject(r, n), [e.getName(n)]) : [e] : Te(e) ? wn(e) : Array.isArray(e) ? Array.prototype.concat.apply(at, e.map(function(a) {
    return ve(a, t, r, n);
  })) : [e.toString()];
}
function Da(e) {
  for (var t = 0; t < e.length; t += 1) {
    var r = e[t];
    if (Ce(r) && !Ut(r))
      return !1;
  }
  return !0;
}
var Wa = fn(it), Na = function() {
  function e(t, r, n) {
    this.rules = t, this.staticRulesId = "", this.isStatic = process.env.NODE_ENV === "production" && (n === void 0 || n.isStatic) && Da(t), this.componentId = r, this.baseHash = me(Wa, r), this.baseStyle = n, gn.registerId(r);
  }
  return e.prototype.generateAndInjectStyles = function(t, r, n) {
    var o = this.baseStyle ? this.baseStyle.generateAndInjectStyles(t, r, n) : "";
    if (this.isStatic && !n.hash)
      if (this.staticRulesId && r.hasNameForId(this.componentId, this.staticRulesId))
        o = ye(o, this.staticRulesId);
      else {
        var i = Tr(ve(this.rules, t, r, n)), a = _t(me(this.baseHash, i) >>> 0);
        if (!r.hasNameForId(this.componentId, a)) {
          var s = n(i, ".".concat(a), void 0, this.componentId);
          r.insertRules(this.componentId, a, s);
        }
        o = ye(o, a), this.staticRulesId = a;
      }
    else {
      for (var c = me(this.baseHash, n.hash), u = "", d = 0; d < this.rules.length; d++) {
        var h = this.rules[d];
        if (typeof h == "string")
          u += h, process.env.NODE_ENV !== "production" && (c = me(c, h));
        else if (h) {
          var y = Tr(ve(h, t, r, n));
          c = me(c, y + d), u += y;
        }
      }
      if (u) {
        var g = _t(c >>> 0);
        r.hasNameForId(this.componentId, g) || r.insertRules(this.componentId, g, n(u, ".".concat(g), void 0, this.componentId)), o = ye(o, g);
      }
    }
    return o;
  }, e;
}(), xn = be.createContext(void 0);
xn.Consumer;
var St = {}, Mr = /* @__PURE__ */ new Set();
function ja(e, t, r) {
  var n = Ut(e), o = e, i = !bt(e), a = t.attrs, s = a === void 0 ? at : a, c = t.componentId, u = c === void 0 ? function(E, f) {
    var v = typeof E != "string" ? "sc" : Er(E);
    St[v] = (St[v] || 0) + 1;
    var w = "".concat(v, "-").concat(ca(it + v + St[v]));
    return f ? "".concat(f, "-").concat(w) : w;
  }(t.displayName, t.parentComponentId) : c, d = t.displayName, h = d === void 0 ? function(E) {
    return bt(E) ? "styled.".concat(E) : "Styled(".concat(ln(E), ")");
  }(e) : d, y = t.displayName && t.componentId ? "".concat(Er(t.displayName), "-").concat(t.componentId) : t.componentId || u, g = n && o.attrs ? o.attrs.concat(s).filter(Boolean) : s, P = t.shouldForwardProp;
  if (n && o.shouldForwardProp) {
    var b = o.shouldForwardProp;
    if (t.shouldForwardProp) {
      var I = t.shouldForwardProp;
      P = function(E, f) {
        return b(E, f) && I(E, f);
      };
    } else
      P = b;
  }
  var A = new Na(r, y, n ? o.componentStyle : void 0);
  function D(E, f) {
    return function(v, w, V) {
      var q = v.attrs, fe = v.componentStyle, ee = v.defaultProps, te = v.foldedComponentIds, K = v.styledComponentId, re = v.target, ze = be.useContext(xn), J = Rr(), ne = v.shouldForwardProp || J.shouldForwardProp;
      process.env.NODE_ENV !== "production" && Ht(K);
      var he = oa(w, ze, ee) || Oe, Z = function(z, O, C) {
        for (var R, M = X(X({}, O), { className: void 0, theme: C }), $ = 0; $ < z.length; $ += 1) {
          var Y = Ce(R = z[$]) ? R(M) : R;
          for (var p in Y)
            M[p] = p === "className" ? ye(M[p], Y[p]) : p === "style" ? X(X({}, M[p]), Y[p]) : Y[p];
        }
        return O.className && (M.className = ye(M.className, O.className)), M;
      }(q, w, he), l = Z.as || re, m = {};
      for (var S in Z)
        Z[S] === void 0 || S[0] === "$" || S === "as" || S === "theme" && Z.theme === he || (S === "forwardedAs" ? m.as = Z.forwardedAs : ne && !ne(S, l) || (m[S] = Z[S], ne || process.env.NODE_ENV !== "development" || Di(S) || Mr.has(S) || !Tt.has(l) || (Mr.add(S), console.warn('styled-components: it looks like an unknown prop "'.concat(S, '" is being sent through to the DOM, which will likely trigger a React console error. If you would like automatic filtering of unknown props, you can opt-into that behavior via `<StyleSheetManager shouldForwardProp={...}>` (connect an API like `@emotion/is-prop-valid`) or consider using transient props (`$` prefix for automatic filtering.)')))));
      var T = function(z, O) {
        var C = Rr(), R = z.generateAndInjectStyles(O, C.styleSheet, C.stylis);
        return process.env.NODE_ENV !== "production" && Ht(R), R;
      }(fe, Z);
      process.env.NODE_ENV !== "production" && v.warnTooManyClasses && v.warnTooManyClasses(T);
      var k = ye(te, K);
      return T && (k += " " + T), Z.className && (k += " " + Z.className), m[bt(l) && !Tt.has(l) ? "class" : "className"] = k, m.ref = V, _n(l, m);
    }(x, E, f);
  }
  D.displayName = h;
  var x = be.forwardRef(D);
  return x.attrs = g, x.componentStyle = A, x.displayName = h, x.shouldForwardProp = P, x.foldedComponentIds = n ? ye(o.foldedComponentIds, o.styledComponentId) : "", x.styledComponentId = y, x.target = n ? o.target : e, Object.defineProperty(x, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(E) {
    this._foldedDefaultProps = n ? function(f) {
      for (var v = [], w = 1; w < arguments.length; w++)
        v[w - 1] = arguments[w];
      for (var V = 0, q = v; V < q.length; V++)
        Rt(f, q[V], !0);
      return f;
    }({}, o.defaultProps, E) : E;
  } }), process.env.NODE_ENV !== "production" && (na(h, y), x.warnTooManyClasses = /* @__PURE__ */ function(E, f) {
    var v = {}, w = !1;
    return function(V) {
      if (!w && (v[V] = !0, Object.keys(v).length >= 200)) {
        var q = f ? ' with the id of "'.concat(f, '"') : "";
        console.warn("Over ".concat(200, " classes were generated for component ").concat(E).concat(q, `.
`) + `Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`), w = !0, v = {};
      }
    };
  }(h, y)), qt(x, function() {
    return ".".concat(x.styledComponentId);
  }), i && mn(x, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0 }), x;
}
function Ir(e, t) {
  for (var r = [e[0]], n = 0, o = t.length; n < o; n += 1)
    r.push(t[n], e[n + 1]);
  return r;
}
var $r = function(e) {
  return Object.assign(e, { isCss: !0 });
};
function Ba(e) {
  for (var t = [], r = 1; r < arguments.length; r++)
    t[r - 1] = arguments[r];
  if (Ce(e) || Te(e))
    return $r(ve(Ir(at, Ee([e], t, !0))));
  var n = e;
  return t.length === 0 && n.length === 1 && typeof n[0] == "string" ? ve(n) : $r(ve(Ir(n, t)));
}
function zt(e, t, r) {
  if (r === void 0 && (r = Oe), !t)
    throw Re(1, t);
  var n = function(o) {
    for (var i = [], a = 1; a < arguments.length; a++)
      i[a - 1] = arguments[a];
    return e(t, r, Ba.apply(void 0, Ee([o], i, !1)));
  };
  return n.attrs = function(o) {
    return zt(e, t, X(X({}, r), { attrs: Array.prototype.concat(r.attrs, o).filter(Boolean) }));
  }, n.withConfig = function(o) {
    return zt(e, t, X(X({}, r), o));
  }, n;
}
var En = function(e) {
  return zt(ja, e);
}, Ae = En;
Tt.forEach(function(e) {
  Ae[e] = En(e);
});
process.env.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`);
var Ye = "__sc-".concat(Se, "__");
process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "test" && typeof window < "u" && (window[Ye] || (window[Ye] = 0), window[Ye] === 1 && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window[Ye] += 1);
const Pn = Ae.div`
  background: #000;
  opacity: 0.2;
  z-index: 1;
  box-sizing: border-box;
  background-clip: padding-box;

  :hover {
    transition: all 2s ease;
  }
`, La = Ae(Pn)`
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
`, Fa = Ae(Pn)`
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
class Ya extends jr {
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
      onTouchEnd: a = () => {
      },
      onTouchStart: s = () => {
      }
    } = this.props, c = {
      ref: (u) => this.resizer = u,
      "data-attribute": r,
      "data-type": "Resizer",
      onMouseDown: (u) => i(u, t),
      onTouchStart: (u) => {
        u.preventDefault(), s(u, t);
      },
      onTouchEnd: (u) => {
        u.preventDefault(), a(u, t);
      },
      onClick: (u) => {
        n && (u.preventDefault(), n(u, t));
      },
      onDoubleClick: (u) => {
        o && (u.preventDefault(), o(u, t));
      }
    };
    return r === "vertical" ? /* @__PURE__ */ xe(Fa, { ...c }) : /* @__PURE__ */ xe(La, { ...c });
  }
}
const Ua = "1", qa = "0", Ga = "100%", Va = Ae.div({
  display: "flex",
  height: "100%",
  flexDirection: "column",
  flex: 1,
  outline: "none",
  overflow: "hidden",
  userSelect: "text"
}), Ha = Ae.div({
  display: "flex",
  height: "100%",
  flexDirection: "row",
  flex: 1,
  outline: "none",
  overflow: "hidden",
  userSelect: "text"
});
function Dr(e, t) {
  const r = e.match(/([0-9]+)([px|%]*)/), n = r[1], o = r[2];
  return Xa(n, t, o);
}
function Xa(e, t, r = "px") {
  switch (r) {
    case "%":
      return +(t * e / 100).toFixed(2);
    default:
      return +e;
  }
}
function Ue(e) {
  return be.Children.toArray(e).filter((t) => t);
}
function Qe(e) {
  return e.endsWith("px") ? "px" : e.endsWith("%") ? "%" : "ratio";
}
function wt(e, t) {
  if (Qe(e) !== "%" || !t)
    return e;
  const r = e.search("%"), n = e.slice(0, r) / 100;
  return n === 0 ? e : `calc(${e} - ${t}px*${n})`;
}
function Wr(e, t, r) {
  switch (t) {
    case "%":
      return `${(e / r * 100).toFixed(2)}%`;
    case "px":
      return `${e.toFixed(2)}px`;
    case "ratio":
      return (e * 100).toFixed(0);
  }
}
class kn extends jr {
  constructor(r) {
    super(r);
    ce(this, "onMouseDown", (r, n) => {
      r.button === 0 && (r.preventDefault(), this.onDown(n, r.clientX, r.clientY));
    });
    ce(this, "onTouchStart", (r, n) => {
      r.preventDefault();
      const { clientX: o, clientY: i } = r.touches[0];
      this.onDown(n, o, i);
    });
    ce(this, "onDown", (r, n, o) => {
      const { allowResize: i, onResizeStart: a, split: s } = this.props;
      i && (this.resizerIndex = r, this.dimensionsSnapshot = this.getDimensionsSnapshot(this.props), this.startClientX = n, this.startClientY = o, document.addEventListener("mousemove", this.onMouseMove), document.addEventListener("mouseup", this.onMouseUp), document.addEventListener("touchmove", this.onTouchMove), document.addEventListener("touchend", this.onMouseUp), document.addEventListener("touchcancel", this.onMouseUp), a && a());
    });
    ce(this, "onMouseMove", (r) => {
      r.preventDefault(), this.onMove(r.clientX, r.clientY);
    });
    ce(this, "onTouchMove", (r) => {
      r.preventDefault();
      const { clientX: n, clientY: o } = r.touches[0];
      this.onMove(n, o);
    });
    ce(this, "onMouseUp", (r) => {
      r.preventDefault(), document.removeEventListener("mouseup", this.onMouseUp), document.removeEventListener("mousemove", this.onMouseMove), document.removeEventListener("touchmove", this.onTouchMove), document.removeEventListener("touchend", this.onMouseUp), document.addEventListener("touchcancel", this.onMouseUp), this.props.onResizeEnd && this.props.onResizeEnd(this.state.sizes);
    });
    ce(this, "setPaneRef", (r, n) => {
      this.paneElements || (this.paneElements = []), this.paneElements[r] = n;
    });
    this.splitPane = be.createRef(), this.state = {
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
    const n = r.split, o = this.getPaneDimensions(), i = this.splitPane.current.getBoundingClientRect(), a = this.getPanePropMinMaxSize(r, "minSize"), s = this.getPanePropMinMaxSize(r, "maxSize"), c = this.getResizersSize(
      Ue(this.props.children)
    ), u = n === "vertical" ? i.width - c : i.height - c, d = a.map((g) => Dr(g, u)), h = s.map((g) => Dr(g, u)), y = o.map(
      (g) => n === "vertical" ? g.width : g.height
    );
    return {
      resizersSize: c,
      paneDimensions: o,
      splitPaneSizePx: u,
      minSizesPx: d,
      maxSizesPx: h,
      sizesPx: y
    };
  }
  getPanePropSize(r) {
    return Ue(r.children).map((n) => {
      const o = n.props.size || n.props.initialSize;
      return o === void 0 ? Ua : String(o);
    });
  }
  getPanePropMinMaxSize(r, n) {
    return Ue(r.children).map((o) => {
      const i = o.props[n];
      return i === void 0 ? n === "maxSize" ? Ga : qa : i;
    });
  }
  getPaneDimensions() {
    return this.paneElements.filter((r) => r).map((r) => r.getBoundingClientRect());
  }
  getSizes() {
    return this.state.sizes;
  }
  onMove(r, n) {
    const { split: o, onChange: i } = this.props, a = this.resizerIndex, { sizesPx: s, minSizesPx: c, maxSizesPx: u, splitPaneSizePx: d, paneDimensions: h } = this.dimensionsSnapshot, y = o === "vertical" ? "width" : "height", g = h[a], P = h[a + 1], b = g[y] + P[y], I = c[a], A = c[a + 1], D = Math.min(u[a], b), x = Math.min(u[a + 1], b), E = o === "vertical" ? this.startClientX - r : this.startClientY - n;
    let f = g[y] - E, v = P[y] + E, w = !1, V = !1;
    f < I ? (f = I, w = !0) : f > D && (f = D, w = !0), v < A ? (v = A, V = !0) : v > x && (v = x, V = !0), w ? v = g[y] + P[y] - f : V && (f = g[y] + P[y] - v), s[a] = f, s[a + 1] = v;
    let q = this.getSizes().concat(), fe;
    if ([f, v].forEach((ee, te) => {
      const K = Qe(q[a + te]);
      K !== "ratio" ? q[a + te] = Wr(
        ee,
        K,
        d
      ) : fe = !0;
    }), fe) {
      let ee = 0, te;
      q = q.map((K, re) => Qe(K) === "ratio" ? (ee++, te = re, Wr(s[re], "ratio")) : K), ee === 1 && (q[te] = "1");
    }
    i == null || i(q), this.setState({
      sizes: q
    });
  }
  getResizersSize(r) {
    return (r.length - 1) * this.props.resizerSize;
  }
  render() {
    const { children: r, className: n, split: o } = this.props, i = Ue(r), a = this.getSizes(), s = this.getResizersSize(i), c = i.reduce((d, h, y) => {
      let g;
      const P = y - 1, b = h.type === Nr, I = {
        index: y,
        "data-type": "Pane",
        split: o,
        key: `Pane-${y}`,
        setRef: this.setPaneRef,
        resizersSize: s,
        size: a[y]
      };
      if (b ? g = An(h, I) : g = /* @__PURE__ */ xe(Nr, { ...I, children: h }), d.length === 0)
        return [...d, g];
      {
        const A = /* @__PURE__ */ xe(
          Ya,
          {
            index: P,
            split: o,
            onMouseDown: this.onMouseDown,
            onTouchStart: this.onTouchStart
          },
          `Resizer-${P}`
        );
        return [...d, A, g];
      }
    }, []);
    return /* @__PURE__ */ xe(
      o === "vertical" ? Ha : Va,
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
kn.propTypes = {
  children: U.arrayOf(U.node),
  className: U.string,
  split: U.oneOf(["vertical", "horizontal"]),
  resizerSize: U.number,
  onChange: U.func,
  onResizeStart: U.func,
  onResizeEnd: U.func,
  allowResize: U.bool
};
kn.defaultProps = {
  split: "vertical",
  resizerSize: 1,
  allowResize: !0
};
function Za({
  split: e,
  initialSize: t,
  size: r,
  minSize: n,
  maxSize: o,
  resizersSize: i
}) {
  const a = r || t, s = e === "vertical", c = {
    minSize: s ? "minWidth" : "minHeight",
    maxSize: s ? "maxWidth" : "maxHeight",
    size: s ? "width" : "height"
  };
  let u = {
    display: "flex",
    outline: "none"
  };
  switch (u[c.minSize] = wt(n, i), u[c.maxSize] = wt(o, i), Qe(a)) {
    case "ratio":
      u.flex = a;
      break;
    case "%":
    case "px":
      u.flexGrow = 0, u[c.size] = wt(a, i);
      break;
  }
  return u;
}
class Gt extends zn {
  constructor() {
    super(...arguments);
    ce(this, "setRef", (r) => {
      this.props.setRef(this.props.index, r);
    });
  }
  render() {
    const { children: r, className: n } = this.props, o = Mi(Za(this.props));
    return /* @__PURE__ */ xe("div", { className: n, style: o, ref: this.setRef, children: r });
  }
}
Gt.propTypes = {
  children: U.node,
  setRef: U.func,
  index: U.number,
  className: U.string,
  initialSize: U.oneOfType([U.string, U.number]),
  minSize: U.string,
  maxSize: U.string,
  split: U.oneOf(["vertical", "horizontal"])
};
Gt.defaultProps = {
  initialSize: "1",
  split: "vertical",
  minSize: "0",
  maxSize: "100%"
};
const Nr = Gt;
export {
  Nr as Pane,
  Ya as Resizer,
  kn as default
};
