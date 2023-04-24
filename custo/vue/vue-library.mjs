import { defineComponent as e0, openBlock as W, createElementBlock as K, createStaticVNode as ae, createElementVNode as X, ref as L0, computed as hr, withDirectives as Xr, isRef as Yr, vModelText as Qr, unref as se, resolveComponent as vr, createBlock as A0, normalizeClass as S0, withCtx as g0, renderSlot as _0, createVNode as W0, watch as ft, createTextVNode as re, toDisplayString as ne, Transition as Jr, withModifiers as e1, createCommentVNode as Y0, onMounted as pr, useSlots as t1, Fragment as r1, renderList as n1 } from "vue";
import { useRouter as o1 } from "vue-router";
const i1 = e0({
  name: "IgntAddIcon"
}), n0 = (t, s) => {
  const n = t.__vccOpts || t;
  for (const [e, r] of s)
    n[e] = r;
  return n;
}, a1 = {
  width: "32",
  height: "32",
  viewBox: "0 0 32 32",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  style: { width: "1em", height: "1em" }
}, s1 = /* @__PURE__ */ ae('<circle cx="16" cy="16" r="15.5" stroke="currentColor"></circle><g clip-path="url(#clip0_721_8528)"><path d="M16 8.5L16 24.5" stroke="currentColor" stroke-miterlimit="10" stroke-linecap="square" stroke-linejoin="round"></path><path d="M24 16.5L8 16.5" stroke="currentColor" stroke-miterlimit="10" stroke-linecap="square" stroke-linejoin="round"></path></g><defs><clipPath id="clip0_721_8528"><rect width="16" height="16" fill="white" transform="translate(8 8.5)"></rect></clipPath></defs>', 3), c1 = [
  s1
];
function f1(t, s, n, e, r, i) {
  return W(), K("svg", a1, c1);
}
const Ji = /* @__PURE__ */ n0(i1, [["render", f1]]), l1 = e0({
  name: "IgntArrowIcon"
}), u1 = {
  width: "12",
  height: "12",
  viewBox: "0 -2 12 8",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  style: { width: "1em", height: "1em" }
}, x1 = /* @__PURE__ */ X("path", {
  d: "M6.0001 7.4001L0.600098 2.0001L2.0001 0.600098L6.0001 4.6001L10.0001 0.600098L11.4001 2.0001L6.0001 7.4001Z",
  fill: "currentColor"
}, null, -1), d1 = [
  x1
];
function h1(t, s, n, e, r, i) {
  return W(), K("svg", u1, d1);
}
const ea = /* @__PURE__ */ n0(l1, [["render", h1]]), v1 = e0({
  name: "IgntChevronDownIcon"
}), p1 = {
  width: "12",
  height: "8",
  viewBox: "0 0 12 8",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  style: { width: "1em", height: "1em" }
}, g1 = /* @__PURE__ */ X("path", {
  d: "M10 2L6 6L2 2",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-miterlimit": "10",
  "stroke-linecap": "square"
}, null, -1), _1 = [
  g1
];
function C1(t, s, n, e, r, i) {
  return W(), K("svg", p1, _1);
}
const ta = /* @__PURE__ */ n0(v1, [["render", C1]]), y1 = e0({
  name: "IgntChevronRightIcon"
}), w1 = {
  width: "12",
  height: "12",
  viewBox: "-2 0 8 12",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  style: { width: "1em", height: "1em" }
}, m1 = /* @__PURE__ */ X("path", {
  d: "M2.0001 11.4001L0.600098 10.0001L4.6001 6.0001L0.600098 2.0001L2.0001 0.600098L7.4001 6.0001L2.0001 11.4001Z",
  fill: "currentColor"
}, null, -1), b1 = [
  m1
];
function B1(t, s, n, e, r, i) {
  return W(), K("svg", w1, b1);
}
const ra = /* @__PURE__ */ n0(y1, [["render", B1]]), k1 = e0({
  name: "IgntClearIcon"
}), L1 = {
  width: "16",
  height: "16",
  viewBox: "0 0 16 16",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  style: { width: "1em", height: "1em" }
}, E1 = /* @__PURE__ */ X("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M8 16C12.4183 16 16 12.4182 16 8C16 3.5818 12.4183 0 8 0C3.58172 0 0 3.5818 0 8C0 12.4182 3.58172 16 8 16ZM11.5442 4.45588C11.8382 4.74977 11.8382 5.22656 11.5442 5.52068L9.06483 8L11.5442 10.4793C11.8382 10.7734 11.8382 11.2502 11.5442 11.5441C11.2501 11.8382 10.7734 11.8382 10.4793 11.5441L8 9.0648L5.52065 11.5441C5.22662 11.8382 4.74989 11.8382 4.45582 11.5441C4.16179 11.2502 4.16179 10.7734 4.45582 10.4793L6.93517 8L4.45582 5.52068C4.16179 5.22656 4.16179 4.74977 4.45582 4.45588C4.74986 4.16176 5.22659 4.16176 5.52065 4.45588L8 6.9352L10.4793 4.45588C10.7734 4.16176 11.2501 4.16176 11.5442 4.45588Z",
  fill: "currentColor"
}, null, -1), A1 = [
  E1
];
function S1(t, s, n, e, r, i) {
  return W(), K("svg", L1, A1);
}
const na = /* @__PURE__ */ n0(k1, [["render", S1]]), H1 = e0({
  name: "IgntCopyIcon"
}), I1 = {
  width: "16",
  height: "16",
  viewBox: "0 0 16 16",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  style: { width: "1em", height: "1em" }
}, $1 = /* @__PURE__ */ X("path", {
  d: "M12 1.33325H1.33331V11.9999H12V1.33325Z",
  stroke: "currentColor",
  "stroke-width": "1.2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, null, -1), R1 = /* @__PURE__ */ X("path", {
  d: "M12.7273 4H14.6667V14.6667H4V12.7273",
  stroke: "currentColor",
  "stroke-width": "1.2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, null, -1), N1 = [
  $1,
  R1
];
function P1(t, s, n, e, r, i) {
  return W(), K("svg", I1, N1);
}
const T1 = /* @__PURE__ */ n0(H1, [["render", P1]]), M1 = e0({
  name: "IgntDotsIcon"
}), D1 = {
  width: "40",
  height: "40",
  viewBox: "0 0 40 40",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  style: { width: "1em", height: "1em" }
}, F1 = /* @__PURE__ */ X("circle", {
  cx: "15",
  cy: "20",
  r: "1.5",
  fill: "currentColor"
}, null, -1), z1 = /* @__PURE__ */ X("circle", {
  cx: "20",
  cy: "20",
  r: "1.5",
  fill: "currentColor"
}, null, -1), O1 = /* @__PURE__ */ X("circle", {
  cx: "25",
  cy: "20",
  r: "1.5",
  fill: "currentColor"
}, null, -1), U1 = [
  F1,
  z1,
  O1
];
function q1(t, s, n, e, r, i) {
  return W(), K("svg", D1, U1);
}
const oa = /* @__PURE__ */ n0(M1, [["render", q1]]), V1 = e0({
  name: "IgntExternalArrowIcon"
}), W1 = {
  width: "10",
  height: "10",
  viewBox: "0 0 10 10",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  style: { width: "1em", height: "1em" }
}, G1 = /* @__PURE__ */ X("path", {
  d: "M1.79119 9.07955L8.3821 2.47727L8.37074 7.56818H9.60938V0.363636H2.41619L2.40483 1.59091H7.49574L0.90483 8.19318L1.79119 9.07955Z",
  fill: "currentColor"
}, null, -1), K1 = [
  G1
];
function j1(t, s, n, e, r, i) {
  return W(), K("svg", W1, K1);
}
const ia = /* @__PURE__ */ n0(V1, [["render", j1]]), Z1 = e0({
  name: "IgntFileIcon"
}), X1 = {
  width: "26",
  height: "26",
  viewBox: "5 5 31 31",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  style: { width: "1em", height: "1em" }
}, Y1 = /* @__PURE__ */ ae('<path d="M24.3334 16.3335H19.0001C18.6465 16.3335 18.3073 16.474 18.0573 16.724C17.8072 16.9741 17.6667 17.3132 17.6667 17.6668V28.3335C17.6667 28.6871 17.8072 29.0263 18.0573 29.2763C18.3073 29.5264 18.6465 29.6668 19.0001 29.6668H27.0001C27.3537 29.6668 27.6928 29.5264 27.9429 29.2763C28.1929 29.0263 28.3334 28.6871 28.3334 28.3335V20.3335L24.3334 16.3335Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M24.3333 16.3335V20.3335H28.3333" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M25.6666 23.6665H20.3333" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M25.6666 26.3335H20.3333" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M21.6666 21H20.9999H20.3333" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>', 5), Q1 = [
  Y1
];
function J1(t, s, n, e, r, i) {
  return W(), K("svg", X1, Q1);
}
const aa = /* @__PURE__ */ n0(Z1, [["render", J1]]), en = e0({
  name: "IgntKeplrIcon"
}), tn = {
  width: "49",
  height: "49",
  viewBox: "0 0 49 49",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  style: { width: "1em", height: "1em" }
}, rn = /* @__PURE__ */ ae('<path d="M44.16 0.5H3.84C1.71923 0.5 0 2.21923 0 4.34V44.66C0 46.7808 1.71923 48.5 3.84 48.5H44.16C46.2808 48.5 48 46.7808 48 44.66V4.34C48 2.21923 46.2808 0.5 44.16 0.5Z" fill="url(#paint0_radial_463_11054)"></path><path d="M44.16 0.5H3.84C1.71923 0.5 0 2.21923 0 4.34V44.66C0 46.7808 1.71923 48.5 3.84 48.5H44.16C46.2808 48.5 48 46.7808 48 44.66V4.34C48 2.21923 46.2808 0.5 44.16 0.5Z" fill="url(#paint1_radial_463_11054)" fill-opacity="0.57"></path><path d="M44.16 0.5H3.84C1.71923 0.5 0 2.21923 0 4.34V44.66C0 46.7808 1.71923 48.5 3.84 48.5H44.16C46.2808 48.5 48 46.7808 48 44.66V4.34C48 2.21923 46.2808 0.5 44.16 0.5Z" fill="url(#paint2_radial_463_11054)" fill-opacity="0.68"></path><path d="M44.16 0.5H3.84C1.71923 0.5 0 2.21923 0 4.34V44.66C0 46.7808 1.71923 48.5 3.84 48.5H44.16C46.2808 48.5 48 46.7808 48 44.66V4.34C48 2.21923 46.2808 0.5 44.16 0.5Z" fill="url(#paint3_radial_463_11054)" fill-opacity="0.08"></path><path d="M44.16 0.5H3.84C1.71923 0.5 0 2.21923 0 4.34V44.66C0 46.7808 1.71923 48.5 3.84 48.5H44.16C46.2808 48.5 48 46.7808 48 44.66V4.34C48 2.21923 46.2808 0.5 44.16 0.5Z" fill="url(#paint4_linear_463_11054)" fill-opacity="0.03"></path><path d="M16.896 41.3002V26.4202L30.96 41.3002H38.784V40.9162L22.608 23.9722L37.536 7.8922V7.7002H29.664L16.896 21.9082V7.7002H10.56V41.3002H16.896Z" fill="white"></path><defs><radialGradient id="paint0_radial_463_11054" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(-37.1557 23.4718) rotate(140.172) scale(82.5605 99.6279)"><stop stop-color="#2F80F2"></stop><stop offset="0.999657" stop-color="#A942B5"></stop></radialGradient><radialGradient id="paint1_radial_463_11054" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(-0.777489 1.2476) rotate(46.3208) scale(76.3717 80.0265)"><stop stop-color="#45F9DE"></stop><stop offset="1" stop-color="#A942B5" stop-opacity="0"></stop></radialGradient><radialGradient id="paint2_radial_463_11054" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(-47.52 -23.8545) rotate(180) scale(46.101 23.7402)"><stop stop-color="#E957C5"></stop><stop offset="1" stop-color="#A942B5" stop-opacity="0"></stop></radialGradient><radialGradient id="paint3_radial_463_11054" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(-42.8213 3.44693) rotate(119.938) scale(27.6729 41.487)"><stop stop-opacity="0.184878"></stop><stop offset="1" stop-color="#101010"></stop></radialGradient><linearGradient id="paint4_linear_463_11054" x1="45.234" y1="28.8037" x2="0" y2="0.5" gradientUnits="userSpaceOnUse"><stop stop-color="white" stop-opacity="0.184878"></stop><stop offset="1" stop-color="white"></stop></linearGradient></defs>', 7), nn = [
  rn
];
function on(t, s, n, e, r, i) {
  return W(), K("svg", tn, nn);
}
const sa = /* @__PURE__ */ n0(en, [["render", on]]);
const an = {}, sn = {
  class: "loading-spin",
  width: "32",
  height: "32",
  viewBox: "0 0 32 32",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  style: "width: 1em; height: 1em"
}, cn = /* @__PURE__ */ X("path", {
  d: "M30 16C30 8.26801 23.732 2 16 2C8.26801 2 2 8.26801 2 16C2 23.732 8.26801 30 16 30",
  stroke: "currentColor",
  "stroke-width": "4",
  "stroke-linecap": "round"
}, null, -1), fn = [
  cn
];
function ln(t, s) {
  return W(), K("svg", sn, fn);
}
const he = /* @__PURE__ */ n0(an, [["render", ln]]);
var G = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function un(t) {
  var s = t.default;
  if (typeof s == "function") {
    var n = function() {
      return s.apply(this, arguments);
    };
    n.prototype = s.prototype;
  } else
    n = {};
  return Object.defineProperty(n, "__esModule", { value: !0 }), Object.keys(t).forEach(function(e) {
    var r = Object.getOwnPropertyDescriptor(t, e);
    Object.defineProperty(n, e, r.get ? r : {
      enumerable: !0,
      get: function() {
        return t[e];
      }
    });
  }), n;
}
var gr = { exports: {} };
function xn(t) {
  throw new Error('Could not dynamically require "' + t + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var ve = { exports: {} };
const dn = {}, hn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: dn
}, Symbol.toStringTag, { value: "Module" })), vn = /* @__PURE__ */ un(hn);
var St;
function j() {
  return St || (St = 1, function(t, s) {
    (function(n, e) {
      t.exports = e();
    })(G, function() {
      var n = n || function(e, r) {
        var i;
        if (typeof window < "u" && window.crypto && (i = window.crypto), typeof self < "u" && self.crypto && (i = self.crypto), typeof globalThis < "u" && globalThis.crypto && (i = globalThis.crypto), !i && typeof window < "u" && window.msCrypto && (i = window.msCrypto), !i && typeof G < "u" && G.crypto && (i = G.crypto), !i && typeof xn == "function")
          try {
            i = vn;
          } catch {
          }
        var v = function() {
          if (i) {
            if (typeof i.getRandomValues == "function")
              try {
                return i.getRandomValues(new Uint32Array(1))[0];
              } catch {
              }
            if (typeof i.randomBytes == "function")
              try {
                return i.randomBytes(4).readInt32LE();
              } catch {
              }
          }
          throw new Error("Native crypto module could not be used to get secure random number.");
        }, c = Object.create || function() {
          function u() {
          }
          return function(w) {
            var b;
            return u.prototype = w, b = new u(), u.prototype = null, b;
          };
        }(), x = {}, f = x.lib = {}, d = f.Base = function() {
          return {
            extend: function(u) {
              var w = c(this);
              return u && w.mixIn(u), (!w.hasOwnProperty("init") || this.init === w.init) && (w.init = function() {
                w.$super.init.apply(this, arguments);
              }), w.init.prototype = w, w.$super = this, w;
            },
            create: function() {
              var u = this.extend();
              return u.init.apply(u, arguments), u;
            },
            init: function() {
            },
            mixIn: function(u) {
              for (var w in u)
                u.hasOwnProperty(w) && (this[w] = u[w]);
              u.hasOwnProperty("toString") && (this.toString = u.toString);
            },
            clone: function() {
              return this.init.prototype.extend(this);
            }
          };
        }(), E = f.WordArray = d.extend({
          init: function(u, w) {
            u = this.words = u || [], w != r ? this.sigBytes = w : this.sigBytes = u.length * 4;
          },
          toString: function(u) {
            return (u || C).stringify(this);
          },
          concat: function(u) {
            var w = this.words, b = u.words, N = this.sigBytes, $ = u.sigBytes;
            if (this.clamp(), N % 4)
              for (var P = 0; P < $; P++) {
                var o = b[P >>> 2] >>> 24 - P % 4 * 8 & 255;
                w[N + P >>> 2] |= o << 24 - (N + P) % 4 * 8;
              }
            else
              for (var l = 0; l < $; l += 4)
                w[N + l >>> 2] = b[l >>> 2];
            return this.sigBytes += $, this;
          },
          clamp: function() {
            var u = this.words, w = this.sigBytes;
            u[w >>> 2] &= 4294967295 << 32 - w % 4 * 8, u.length = e.ceil(w / 4);
          },
          clone: function() {
            var u = d.clone.call(this);
            return u.words = this.words.slice(0), u;
          },
          random: function(u) {
            for (var w = [], b = 0; b < u; b += 4)
              w.push(v());
            return new E.init(w, u);
          }
        }), p = x.enc = {}, C = p.Hex = {
          stringify: function(u) {
            for (var w = u.words, b = u.sigBytes, N = [], $ = 0; $ < b; $++) {
              var P = w[$ >>> 2] >>> 24 - $ % 4 * 8 & 255;
              N.push((P >>> 4).toString(16)), N.push((P & 15).toString(16));
            }
            return N.join("");
          },
          parse: function(u) {
            for (var w = u.length, b = [], N = 0; N < w; N += 2)
              b[N >>> 3] |= parseInt(u.substr(N, 2), 16) << 24 - N % 8 * 4;
            return new E.init(b, w / 2);
          }
        }, y = p.Latin1 = {
          stringify: function(u) {
            for (var w = u.words, b = u.sigBytes, N = [], $ = 0; $ < b; $++) {
              var P = w[$ >>> 2] >>> 24 - $ % 4 * 8 & 255;
              N.push(String.fromCharCode(P));
            }
            return N.join("");
          },
          parse: function(u) {
            for (var w = u.length, b = [], N = 0; N < w; N++)
              b[N >>> 2] |= (u.charCodeAt(N) & 255) << 24 - N % 4 * 8;
            return new E.init(b, w);
          }
        }, B = p.Utf8 = {
          stringify: function(u) {
            try {
              return decodeURIComponent(escape(y.stringify(u)));
            } catch {
              throw new Error("Malformed UTF-8 data");
            }
          },
          parse: function(u) {
            return y.parse(unescape(encodeURIComponent(u)));
          }
        }, A = f.BufferedBlockAlgorithm = d.extend({
          reset: function() {
            this._data = new E.init(), this._nDataBytes = 0;
          },
          _append: function(u) {
            typeof u == "string" && (u = B.parse(u)), this._data.concat(u), this._nDataBytes += u.sigBytes;
          },
          _process: function(u) {
            var w, b = this._data, N = b.words, $ = b.sigBytes, P = this.blockSize, o = P * 4, l = $ / o;
            u ? l = e.ceil(l) : l = e.max((l | 0) - this._minBufferSize, 0);
            var a = l * P, h = e.min(a * 4, $);
            if (a) {
              for (var g = 0; g < a; g += P)
                this._doProcessBlock(N, g);
              w = N.splice(0, a), b.sigBytes -= h;
            }
            return new E.init(w, h);
          },
          clone: function() {
            var u = d.clone.call(this);
            return u._data = this._data.clone(), u;
          },
          _minBufferSize: 0
        });
        f.Hasher = A.extend({
          cfg: d.extend(),
          init: function(u) {
            this.cfg = this.cfg.extend(u), this.reset();
          },
          reset: function() {
            A.reset.call(this), this._doReset();
          },
          update: function(u) {
            return this._append(u), this._process(), this;
          },
          finalize: function(u) {
            u && this._append(u);
            var w = this._doFinalize();
            return w;
          },
          blockSize: 16,
          _createHelper: function(u) {
            return function(w, b) {
              return new u.init(b).finalize(w);
            };
          },
          _createHmacHelper: function(u) {
            return function(w, b) {
              return new H.HMAC.init(u, b).finalize(w);
            };
          }
        });
        var H = x.algo = {};
        return x;
      }(Math);
      return n;
    });
  }(ve)), ve.exports;
}
var pe = { exports: {} }, Ht;
function ce() {
  return Ht || (Ht = 1, function(t, s) {
    (function(n, e) {
      t.exports = e(j());
    })(G, function(n) {
      return function(e) {
        var r = n, i = r.lib, v = i.Base, c = i.WordArray, x = r.x64 = {};
        x.Word = v.extend({
          init: function(f, d) {
            this.high = f, this.low = d;
          }
        }), x.WordArray = v.extend({
          init: function(f, d) {
            f = this.words = f || [], d != e ? this.sigBytes = d : this.sigBytes = f.length * 8;
          },
          toX32: function() {
            for (var f = this.words, d = f.length, E = [], p = 0; p < d; p++) {
              var C = f[p];
              E.push(C.high), E.push(C.low);
            }
            return c.create(E, this.sigBytes);
          },
          clone: function() {
            for (var f = v.clone.call(this), d = f.words = this.words.slice(0), E = d.length, p = 0; p < E; p++)
              d[p] = d[p].clone();
            return f;
          }
        });
      }(), n;
    });
  }(pe)), pe.exports;
}
var ge = { exports: {} }, It;
function pn() {
  return It || (It = 1, function(t, s) {
    (function(n, e) {
      t.exports = e(j());
    })(G, function(n) {
      return function() {
        if (typeof ArrayBuffer == "function") {
          var e = n, r = e.lib, i = r.WordArray, v = i.init, c = i.init = function(x) {
            if (x instanceof ArrayBuffer && (x = new Uint8Array(x)), (x instanceof Int8Array || typeof Uint8ClampedArray < "u" && x instanceof Uint8ClampedArray || x instanceof Int16Array || x instanceof Uint16Array || x instanceof Int32Array || x instanceof Uint32Array || x instanceof Float32Array || x instanceof Float64Array) && (x = new Uint8Array(x.buffer, x.byteOffset, x.byteLength)), x instanceof Uint8Array) {
              for (var f = x.byteLength, d = [], E = 0; E < f; E++)
                d[E >>> 2] |= x[E] << 24 - E % 4 * 8;
              v.call(this, d, f);
            } else
              v.apply(this, arguments);
          };
          c.prototype = i;
        }
      }(), n.lib.WordArray;
    });
  }(ge)), ge.exports;
}
var _e = { exports: {} }, $t;
function gn() {
  return $t || ($t = 1, function(t, s) {
    (function(n, e) {
      t.exports = e(j());
    })(G, function(n) {
      return function() {
        var e = n, r = e.lib, i = r.WordArray, v = e.enc;
        v.Utf16 = v.Utf16BE = {
          stringify: function(x) {
            for (var f = x.words, d = x.sigBytes, E = [], p = 0; p < d; p += 2) {
              var C = f[p >>> 2] >>> 16 - p % 4 * 8 & 65535;
              E.push(String.fromCharCode(C));
            }
            return E.join("");
          },
          parse: function(x) {
            for (var f = x.length, d = [], E = 0; E < f; E++)
              d[E >>> 1] |= x.charCodeAt(E) << 16 - E % 2 * 16;
            return i.create(d, f * 2);
          }
        }, v.Utf16LE = {
          stringify: function(x) {
            for (var f = x.words, d = x.sigBytes, E = [], p = 0; p < d; p += 2) {
              var C = c(f[p >>> 2] >>> 16 - p % 4 * 8 & 65535);
              E.push(String.fromCharCode(C));
            }
            return E.join("");
          },
          parse: function(x) {
            for (var f = x.length, d = [], E = 0; E < f; E++)
              d[E >>> 1] |= c(x.charCodeAt(E) << 16 - E % 2 * 16);
            return i.create(d, f * 2);
          }
        };
        function c(x) {
          return x << 8 & 4278255360 | x >>> 8 & 16711935;
        }
      }(), n.enc.Utf16;
    });
  }(_e)), _e.exports;
}
var Ce = { exports: {} }, Rt;
function D0() {
  return Rt || (Rt = 1, function(t, s) {
    (function(n, e) {
      t.exports = e(j());
    })(G, function(n) {
      return function() {
        var e = n, r = e.lib, i = r.WordArray, v = e.enc;
        v.Base64 = {
          stringify: function(x) {
            var f = x.words, d = x.sigBytes, E = this._map;
            x.clamp();
            for (var p = [], C = 0; C < d; C += 3)
              for (var y = f[C >>> 2] >>> 24 - C % 4 * 8 & 255, B = f[C + 1 >>> 2] >>> 24 - (C + 1) % 4 * 8 & 255, A = f[C + 2 >>> 2] >>> 24 - (C + 2) % 4 * 8 & 255, H = y << 16 | B << 8 | A, u = 0; u < 4 && C + u * 0.75 < d; u++)
                p.push(E.charAt(H >>> 6 * (3 - u) & 63));
            var w = E.charAt(64);
            if (w)
              for (; p.length % 4; )
                p.push(w);
            return p.join("");
          },
          parse: function(x) {
            var f = x.length, d = this._map, E = this._reverseMap;
            if (!E) {
              E = this._reverseMap = [];
              for (var p = 0; p < d.length; p++)
                E[d.charCodeAt(p)] = p;
            }
            var C = d.charAt(64);
            if (C) {
              var y = x.indexOf(C);
              y !== -1 && (f = y);
            }
            return c(x, f, E);
          },
          _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
        };
        function c(x, f, d) {
          for (var E = [], p = 0, C = 0; C < f; C++)
            if (C % 4) {
              var y = d[x.charCodeAt(C - 1)] << C % 4 * 2, B = d[x.charCodeAt(C)] >>> 6 - C % 4 * 2, A = y | B;
              E[p >>> 2] |= A << 24 - p % 4 * 8, p++;
            }
          return i.create(E, p);
        }
      }(), n.enc.Base64;
    });
  }(Ce)), Ce.exports;
}
var ye = { exports: {} }, Nt;
function _n() {
  return Nt || (Nt = 1, function(t, s) {
    (function(n, e) {
      t.exports = e(j());
    })(G, function(n) {
      return function() {
        var e = n, r = e.lib, i = r.WordArray, v = e.enc;
        v.Base64url = {
          stringify: function(x, f = !0) {
            var d = x.words, E = x.sigBytes, p = f ? this._safe_map : this._map;
            x.clamp();
            for (var C = [], y = 0; y < E; y += 3)
              for (var B = d[y >>> 2] >>> 24 - y % 4 * 8 & 255, A = d[y + 1 >>> 2] >>> 24 - (y + 1) % 4 * 8 & 255, H = d[y + 2 >>> 2] >>> 24 - (y + 2) % 4 * 8 & 255, u = B << 16 | A << 8 | H, w = 0; w < 4 && y + w * 0.75 < E; w++)
                C.push(p.charAt(u >>> 6 * (3 - w) & 63));
            var b = p.charAt(64);
            if (b)
              for (; C.length % 4; )
                C.push(b);
            return C.join("");
          },
          parse: function(x, f = !0) {
            var d = x.length, E = f ? this._safe_map : this._map, p = this._reverseMap;
            if (!p) {
              p = this._reverseMap = [];
              for (var C = 0; C < E.length; C++)
                p[E.charCodeAt(C)] = C;
            }
            var y = E.charAt(64);
            if (y) {
              var B = x.indexOf(y);
              B !== -1 && (d = B);
            }
            return c(x, d, p);
          },
          _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
          _safe_map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_"
        };
        function c(x, f, d) {
          for (var E = [], p = 0, C = 0; C < f; C++)
            if (C % 4) {
              var y = d[x.charCodeAt(C - 1)] << C % 4 * 2, B = d[x.charCodeAt(C)] >>> 6 - C % 4 * 2, A = y | B;
              E[p >>> 2] |= A << 24 - p % 4 * 8, p++;
            }
          return i.create(E, p);
        }
      }(), n.enc.Base64url;
    });
  }(ye)), ye.exports;
}
var we = { exports: {} }, Pt;
function F0() {
  return Pt || (Pt = 1, function(t, s) {
    (function(n, e) {
      t.exports = e(j());
    })(G, function(n) {
      return function(e) {
        var r = n, i = r.lib, v = i.WordArray, c = i.Hasher, x = r.algo, f = [];
        (function() {
          for (var B = 0; B < 64; B++)
            f[B] = e.abs(e.sin(B + 1)) * 4294967296 | 0;
        })();
        var d = x.MD5 = c.extend({
          _doReset: function() {
            this._hash = new v.init([
              1732584193,
              4023233417,
              2562383102,
              271733878
            ]);
          },
          _doProcessBlock: function(B, A) {
            for (var H = 0; H < 16; H++) {
              var u = A + H, w = B[u];
              B[u] = (w << 8 | w >>> 24) & 16711935 | (w << 24 | w >>> 8) & 4278255360;
            }
            var b = this._hash.words, N = B[A + 0], $ = B[A + 1], P = B[A + 2], o = B[A + 3], l = B[A + 4], a = B[A + 5], h = B[A + 6], g = B[A + 7], _ = B[A + 8], L = B[A + 9], m = B[A + 10], k = B[A + 11], I = B[A + 12], S = B[A + 13], T = B[A + 14], z = B[A + 15], R = b[0], M = b[1], F = b[2], D = b[3];
            R = E(R, M, F, D, N, 7, f[0]), D = E(D, R, M, F, $, 12, f[1]), F = E(F, D, R, M, P, 17, f[2]), M = E(M, F, D, R, o, 22, f[3]), R = E(R, M, F, D, l, 7, f[4]), D = E(D, R, M, F, a, 12, f[5]), F = E(F, D, R, M, h, 17, f[6]), M = E(M, F, D, R, g, 22, f[7]), R = E(R, M, F, D, _, 7, f[8]), D = E(D, R, M, F, L, 12, f[9]), F = E(F, D, R, M, m, 17, f[10]), M = E(M, F, D, R, k, 22, f[11]), R = E(R, M, F, D, I, 7, f[12]), D = E(D, R, M, F, S, 12, f[13]), F = E(F, D, R, M, T, 17, f[14]), M = E(M, F, D, R, z, 22, f[15]), R = p(R, M, F, D, $, 5, f[16]), D = p(D, R, M, F, h, 9, f[17]), F = p(F, D, R, M, k, 14, f[18]), M = p(M, F, D, R, N, 20, f[19]), R = p(R, M, F, D, a, 5, f[20]), D = p(D, R, M, F, m, 9, f[21]), F = p(F, D, R, M, z, 14, f[22]), M = p(M, F, D, R, l, 20, f[23]), R = p(R, M, F, D, L, 5, f[24]), D = p(D, R, M, F, T, 9, f[25]), F = p(F, D, R, M, o, 14, f[26]), M = p(M, F, D, R, _, 20, f[27]), R = p(R, M, F, D, S, 5, f[28]), D = p(D, R, M, F, P, 9, f[29]), F = p(F, D, R, M, g, 14, f[30]), M = p(M, F, D, R, I, 20, f[31]), R = C(R, M, F, D, a, 4, f[32]), D = C(D, R, M, F, _, 11, f[33]), F = C(F, D, R, M, k, 16, f[34]), M = C(M, F, D, R, T, 23, f[35]), R = C(R, M, F, D, $, 4, f[36]), D = C(D, R, M, F, l, 11, f[37]), F = C(F, D, R, M, g, 16, f[38]), M = C(M, F, D, R, m, 23, f[39]), R = C(R, M, F, D, S, 4, f[40]), D = C(D, R, M, F, N, 11, f[41]), F = C(F, D, R, M, o, 16, f[42]), M = C(M, F, D, R, h, 23, f[43]), R = C(R, M, F, D, L, 4, f[44]), D = C(D, R, M, F, I, 11, f[45]), F = C(F, D, R, M, z, 16, f[46]), M = C(M, F, D, R, P, 23, f[47]), R = y(R, M, F, D, N, 6, f[48]), D = y(D, R, M, F, g, 10, f[49]), F = y(F, D, R, M, T, 15, f[50]), M = y(M, F, D, R, a, 21, f[51]), R = y(R, M, F, D, I, 6, f[52]), D = y(D, R, M, F, o, 10, f[53]), F = y(F, D, R, M, m, 15, f[54]), M = y(M, F, D, R, $, 21, f[55]), R = y(R, M, F, D, _, 6, f[56]), D = y(D, R, M, F, z, 10, f[57]), F = y(F, D, R, M, h, 15, f[58]), M = y(M, F, D, R, S, 21, f[59]), R = y(R, M, F, D, l, 6, f[60]), D = y(D, R, M, F, k, 10, f[61]), F = y(F, D, R, M, P, 15, f[62]), M = y(M, F, D, R, L, 21, f[63]), b[0] = b[0] + R | 0, b[1] = b[1] + M | 0, b[2] = b[2] + F | 0, b[3] = b[3] + D | 0;
          },
          _doFinalize: function() {
            var B = this._data, A = B.words, H = this._nDataBytes * 8, u = B.sigBytes * 8;
            A[u >>> 5] |= 128 << 24 - u % 32;
            var w = e.floor(H / 4294967296), b = H;
            A[(u + 64 >>> 9 << 4) + 15] = (w << 8 | w >>> 24) & 16711935 | (w << 24 | w >>> 8) & 4278255360, A[(u + 64 >>> 9 << 4) + 14] = (b << 8 | b >>> 24) & 16711935 | (b << 24 | b >>> 8) & 4278255360, B.sigBytes = (A.length + 1) * 4, this._process();
            for (var N = this._hash, $ = N.words, P = 0; P < 4; P++) {
              var o = $[P];
              $[P] = (o << 8 | o >>> 24) & 16711935 | (o << 24 | o >>> 8) & 4278255360;
            }
            return N;
          },
          clone: function() {
            var B = c.clone.call(this);
            return B._hash = this._hash.clone(), B;
          }
        });
        function E(B, A, H, u, w, b, N) {
          var $ = B + (A & H | ~A & u) + w + N;
          return ($ << b | $ >>> 32 - b) + A;
        }
        function p(B, A, H, u, w, b, N) {
          var $ = B + (A & u | H & ~u) + w + N;
          return ($ << b | $ >>> 32 - b) + A;
        }
        function C(B, A, H, u, w, b, N) {
          var $ = B + (A ^ H ^ u) + w + N;
          return ($ << b | $ >>> 32 - b) + A;
        }
        function y(B, A, H, u, w, b, N) {
          var $ = B + (H ^ (A | ~u)) + w + N;
          return ($ << b | $ >>> 32 - b) + A;
        }
        r.MD5 = c._createHelper(d), r.HmacMD5 = c._createHmacHelper(d);
      }(Math), n.MD5;
    });
  }(we)), we.exports;
}
var me = { exports: {} }, Tt;
function lt() {
  return Tt || (Tt = 1, function(t, s) {
    (function(n, e) {
      t.exports = e(j());
    })(G, function(n) {
      return function() {
        var e = n, r = e.lib, i = r.WordArray, v = r.Hasher, c = e.algo, x = [], f = c.SHA1 = v.extend({
          _doReset: function() {
            this._hash = new i.init([
              1732584193,
              4023233417,
              2562383102,
              271733878,
              3285377520
            ]);
          },
          _doProcessBlock: function(d, E) {
            for (var p = this._hash.words, C = p[0], y = p[1], B = p[2], A = p[3], H = p[4], u = 0; u < 80; u++) {
              if (u < 16)
                x[u] = d[E + u] | 0;
              else {
                var w = x[u - 3] ^ x[u - 8] ^ x[u - 14] ^ x[u - 16];
                x[u] = w << 1 | w >>> 31;
              }
              var b = (C << 5 | C >>> 27) + H + x[u];
              u < 20 ? b += (y & B | ~y & A) + 1518500249 : u < 40 ? b += (y ^ B ^ A) + 1859775393 : u < 60 ? b += (y & B | y & A | B & A) - 1894007588 : b += (y ^ B ^ A) - 899497514, H = A, A = B, B = y << 30 | y >>> 2, y = C, C = b;
            }
            p[0] = p[0] + C | 0, p[1] = p[1] + y | 0, p[2] = p[2] + B | 0, p[3] = p[3] + A | 0, p[4] = p[4] + H | 0;
          },
          _doFinalize: function() {
            var d = this._data, E = d.words, p = this._nDataBytes * 8, C = d.sigBytes * 8;
            return E[C >>> 5] |= 128 << 24 - C % 32, E[(C + 64 >>> 9 << 4) + 14] = Math.floor(p / 4294967296), E[(C + 64 >>> 9 << 4) + 15] = p, d.sigBytes = E.length * 4, this._process(), this._hash;
          },
          clone: function() {
            var d = v.clone.call(this);
            return d._hash = this._hash.clone(), d;
          }
        });
        e.SHA1 = v._createHelper(f), e.HmacSHA1 = v._createHmacHelper(f);
      }(), n.SHA1;
    });
  }(me)), me.exports;
}
var be = { exports: {} }, Mt;
function _r() {
  return Mt || (Mt = 1, function(t, s) {
    (function(n, e) {
      t.exports = e(j());
    })(G, function(n) {
      return function(e) {
        var r = n, i = r.lib, v = i.WordArray, c = i.Hasher, x = r.algo, f = [], d = [];
        (function() {
          function C(H) {
            for (var u = e.sqrt(H), w = 2; w <= u; w++)
              if (!(H % w))
                return !1;
            return !0;
          }
          function y(H) {
            return (H - (H | 0)) * 4294967296 | 0;
          }
          for (var B = 2, A = 0; A < 64; )
            C(B) && (A < 8 && (f[A] = y(e.pow(B, 1 / 2))), d[A] = y(e.pow(B, 1 / 3)), A++), B++;
        })();
        var E = [], p = x.SHA256 = c.extend({
          _doReset: function() {
            this._hash = new v.init(f.slice(0));
          },
          _doProcessBlock: function(C, y) {
            for (var B = this._hash.words, A = B[0], H = B[1], u = B[2], w = B[3], b = B[4], N = B[5], $ = B[6], P = B[7], o = 0; o < 64; o++) {
              if (o < 16)
                E[o] = C[y + o] | 0;
              else {
                var l = E[o - 15], a = (l << 25 | l >>> 7) ^ (l << 14 | l >>> 18) ^ l >>> 3, h = E[o - 2], g = (h << 15 | h >>> 17) ^ (h << 13 | h >>> 19) ^ h >>> 10;
                E[o] = a + E[o - 7] + g + E[o - 16];
              }
              var _ = b & N ^ ~b & $, L = A & H ^ A & u ^ H & u, m = (A << 30 | A >>> 2) ^ (A << 19 | A >>> 13) ^ (A << 10 | A >>> 22), k = (b << 26 | b >>> 6) ^ (b << 21 | b >>> 11) ^ (b << 7 | b >>> 25), I = P + k + _ + d[o] + E[o], S = m + L;
              P = $, $ = N, N = b, b = w + I | 0, w = u, u = H, H = A, A = I + S | 0;
            }
            B[0] = B[0] + A | 0, B[1] = B[1] + H | 0, B[2] = B[2] + u | 0, B[3] = B[3] + w | 0, B[4] = B[4] + b | 0, B[5] = B[5] + N | 0, B[6] = B[6] + $ | 0, B[7] = B[7] + P | 0;
          },
          _doFinalize: function() {
            var C = this._data, y = C.words, B = this._nDataBytes * 8, A = C.sigBytes * 8;
            return y[A >>> 5] |= 128 << 24 - A % 32, y[(A + 64 >>> 9 << 4) + 14] = e.floor(B / 4294967296), y[(A + 64 >>> 9 << 4) + 15] = B, C.sigBytes = y.length * 4, this._process(), this._hash;
          },
          clone: function() {
            var C = c.clone.call(this);
            return C._hash = this._hash.clone(), C;
          }
        });
        r.SHA256 = c._createHelper(p), r.HmacSHA256 = c._createHmacHelper(p);
      }(Math), n.SHA256;
    });
  }(be)), be.exports;
}
var Be = { exports: {} }, Dt;
function Cn() {
  return Dt || (Dt = 1, function(t, s) {
    (function(n, e, r) {
      t.exports = e(j(), _r());
    })(G, function(n) {
      return function() {
        var e = n, r = e.lib, i = r.WordArray, v = e.algo, c = v.SHA256, x = v.SHA224 = c.extend({
          _doReset: function() {
            this._hash = new i.init([
              3238371032,
              914150663,
              812702999,
              4144912697,
              4290775857,
              1750603025,
              1694076839,
              3204075428
            ]);
          },
          _doFinalize: function() {
            var f = c._doFinalize.call(this);
            return f.sigBytes -= 4, f;
          }
        });
        e.SHA224 = c._createHelper(x), e.HmacSHA224 = c._createHmacHelper(x);
      }(), n.SHA224;
    });
  }(Be)), Be.exports;
}
var ke = { exports: {} }, Ft;
function Cr() {
  return Ft || (Ft = 1, function(t, s) {
    (function(n, e, r) {
      t.exports = e(j(), ce());
    })(G, function(n) {
      return function() {
        var e = n, r = e.lib, i = r.Hasher, v = e.x64, c = v.Word, x = v.WordArray, f = e.algo;
        function d() {
          return c.create.apply(c, arguments);
        }
        var E = [
          d(1116352408, 3609767458),
          d(1899447441, 602891725),
          d(3049323471, 3964484399),
          d(3921009573, 2173295548),
          d(961987163, 4081628472),
          d(1508970993, 3053834265),
          d(2453635748, 2937671579),
          d(2870763221, 3664609560),
          d(3624381080, 2734883394),
          d(310598401, 1164996542),
          d(607225278, 1323610764),
          d(1426881987, 3590304994),
          d(1925078388, 4068182383),
          d(2162078206, 991336113),
          d(2614888103, 633803317),
          d(3248222580, 3479774868),
          d(3835390401, 2666613458),
          d(4022224774, 944711139),
          d(264347078, 2341262773),
          d(604807628, 2007800933),
          d(770255983, 1495990901),
          d(1249150122, 1856431235),
          d(1555081692, 3175218132),
          d(1996064986, 2198950837),
          d(2554220882, 3999719339),
          d(2821834349, 766784016),
          d(2952996808, 2566594879),
          d(3210313671, 3203337956),
          d(3336571891, 1034457026),
          d(3584528711, 2466948901),
          d(113926993, 3758326383),
          d(338241895, 168717936),
          d(666307205, 1188179964),
          d(773529912, 1546045734),
          d(1294757372, 1522805485),
          d(1396182291, 2643833823),
          d(1695183700, 2343527390),
          d(1986661051, 1014477480),
          d(2177026350, 1206759142),
          d(2456956037, 344077627),
          d(2730485921, 1290863460),
          d(2820302411, 3158454273),
          d(3259730800, 3505952657),
          d(3345764771, 106217008),
          d(3516065817, 3606008344),
          d(3600352804, 1432725776),
          d(4094571909, 1467031594),
          d(275423344, 851169720),
          d(430227734, 3100823752),
          d(506948616, 1363258195),
          d(659060556, 3750685593),
          d(883997877, 3785050280),
          d(958139571, 3318307427),
          d(1322822218, 3812723403),
          d(1537002063, 2003034995),
          d(1747873779, 3602036899),
          d(1955562222, 1575990012),
          d(2024104815, 1125592928),
          d(2227730452, 2716904306),
          d(2361852424, 442776044),
          d(2428436474, 593698344),
          d(2756734187, 3733110249),
          d(3204031479, 2999351573),
          d(3329325298, 3815920427),
          d(3391569614, 3928383900),
          d(3515267271, 566280711),
          d(3940187606, 3454069534),
          d(4118630271, 4000239992),
          d(116418474, 1914138554),
          d(174292421, 2731055270),
          d(289380356, 3203993006),
          d(460393269, 320620315),
          d(685471733, 587496836),
          d(852142971, 1086792851),
          d(1017036298, 365543100),
          d(1126000580, 2618297676),
          d(1288033470, 3409855158),
          d(1501505948, 4234509866),
          d(1607167915, 987167468),
          d(1816402316, 1246189591)
        ], p = [];
        (function() {
          for (var y = 0; y < 80; y++)
            p[y] = d();
        })();
        var C = f.SHA512 = i.extend({
          _doReset: function() {
            this._hash = new x.init([
              new c.init(1779033703, 4089235720),
              new c.init(3144134277, 2227873595),
              new c.init(1013904242, 4271175723),
              new c.init(2773480762, 1595750129),
              new c.init(1359893119, 2917565137),
              new c.init(2600822924, 725511199),
              new c.init(528734635, 4215389547),
              new c.init(1541459225, 327033209)
            ]);
          },
          _doProcessBlock: function(y, B) {
            for (var A = this._hash.words, H = A[0], u = A[1], w = A[2], b = A[3], N = A[4], $ = A[5], P = A[6], o = A[7], l = H.high, a = H.low, h = u.high, g = u.low, _ = w.high, L = w.low, m = b.high, k = b.low, I = N.high, S = N.low, T = $.high, z = $.low, R = P.high, M = P.low, F = o.high, D = o.low, O = l, U = a, Z = h, q = g, y0 = _, v0 = L, i0 = m, x0 = k, J = I, Y = S, Q = T, z0 = z, Z0 = R, O0 = M, de = F, U0 = D, d0 = 0; d0 < 80; d0++) {
              var f0, m0, X0 = p[d0];
              if (d0 < 16)
                m0 = X0.high = y[B + d0 * 2] | 0, f0 = X0.low = y[B + d0 * 2 + 1] | 0;
              else {
                var gt = p[d0 - 15], I0 = gt.high, q0 = gt.low, Mr = (I0 >>> 1 | q0 << 31) ^ (I0 >>> 8 | q0 << 24) ^ I0 >>> 7, _t = (q0 >>> 1 | I0 << 31) ^ (q0 >>> 8 | I0 << 24) ^ (q0 >>> 7 | I0 << 25), Ct = p[d0 - 2], $0 = Ct.high, V0 = Ct.low, Dr = ($0 >>> 19 | V0 << 13) ^ ($0 << 3 | V0 >>> 29) ^ $0 >>> 6, yt = (V0 >>> 19 | $0 << 13) ^ (V0 << 3 | $0 >>> 29) ^ (V0 >>> 6 | $0 << 26), wt = p[d0 - 7], Fr = wt.high, zr = wt.low, mt = p[d0 - 16], Or = mt.high, bt = mt.low;
                f0 = _t + zr, m0 = Mr + Fr + (f0 >>> 0 < _t >>> 0 ? 1 : 0), f0 = f0 + yt, m0 = m0 + Dr + (f0 >>> 0 < yt >>> 0 ? 1 : 0), f0 = f0 + bt, m0 = m0 + Or + (f0 >>> 0 < bt >>> 0 ? 1 : 0), X0.high = m0, X0.low = f0;
              }
              var Ur = J & Q ^ ~J & Z0, Bt = Y & z0 ^ ~Y & O0, qr = O & Z ^ O & y0 ^ Z & y0, Vr = U & q ^ U & v0 ^ q & v0, Wr = (O >>> 28 | U << 4) ^ (O << 30 | U >>> 2) ^ (O << 25 | U >>> 7), kt = (U >>> 28 | O << 4) ^ (U << 30 | O >>> 2) ^ (U << 25 | O >>> 7), Gr = (J >>> 14 | Y << 18) ^ (J >>> 18 | Y << 14) ^ (J << 23 | Y >>> 9), Kr = (Y >>> 14 | J << 18) ^ (Y >>> 18 | J << 14) ^ (Y << 23 | J >>> 9), Lt = E[d0], jr = Lt.high, Et = Lt.low, s0 = U0 + Kr, b0 = de + Gr + (s0 >>> 0 < U0 >>> 0 ? 1 : 0), s0 = s0 + Bt, b0 = b0 + Ur + (s0 >>> 0 < Bt >>> 0 ? 1 : 0), s0 = s0 + Et, b0 = b0 + jr + (s0 >>> 0 < Et >>> 0 ? 1 : 0), s0 = s0 + f0, b0 = b0 + m0 + (s0 >>> 0 < f0 >>> 0 ? 1 : 0), At = kt + Vr, Zr = Wr + qr + (At >>> 0 < kt >>> 0 ? 1 : 0);
              de = Z0, U0 = O0, Z0 = Q, O0 = z0, Q = J, z0 = Y, Y = x0 + s0 | 0, J = i0 + b0 + (Y >>> 0 < x0 >>> 0 ? 1 : 0) | 0, i0 = y0, x0 = v0, y0 = Z, v0 = q, Z = O, q = U, U = s0 + At | 0, O = b0 + Zr + (U >>> 0 < s0 >>> 0 ? 1 : 0) | 0;
            }
            a = H.low = a + U, H.high = l + O + (a >>> 0 < U >>> 0 ? 1 : 0), g = u.low = g + q, u.high = h + Z + (g >>> 0 < q >>> 0 ? 1 : 0), L = w.low = L + v0, w.high = _ + y0 + (L >>> 0 < v0 >>> 0 ? 1 : 0), k = b.low = k + x0, b.high = m + i0 + (k >>> 0 < x0 >>> 0 ? 1 : 0), S = N.low = S + Y, N.high = I + J + (S >>> 0 < Y >>> 0 ? 1 : 0), z = $.low = z + z0, $.high = T + Q + (z >>> 0 < z0 >>> 0 ? 1 : 0), M = P.low = M + O0, P.high = R + Z0 + (M >>> 0 < O0 >>> 0 ? 1 : 0), D = o.low = D + U0, o.high = F + de + (D >>> 0 < U0 >>> 0 ? 1 : 0);
          },
          _doFinalize: function() {
            var y = this._data, B = y.words, A = this._nDataBytes * 8, H = y.sigBytes * 8;
            B[H >>> 5] |= 128 << 24 - H % 32, B[(H + 128 >>> 10 << 5) + 30] = Math.floor(A / 4294967296), B[(H + 128 >>> 10 << 5) + 31] = A, y.sigBytes = B.length * 4, this._process();
            var u = this._hash.toX32();
            return u;
          },
          clone: function() {
            var y = i.clone.call(this);
            return y._hash = this._hash.clone(), y;
          },
          blockSize: 1024 / 32
        });
        e.SHA512 = i._createHelper(C), e.HmacSHA512 = i._createHmacHelper(C);
      }(), n.SHA512;
    });
  }(ke)), ke.exports;
}
var Le = { exports: {} }, zt;
function yn() {
  return zt || (zt = 1, function(t, s) {
    (function(n, e, r) {
      t.exports = e(j(), ce(), Cr());
    })(G, function(n) {
      return function() {
        var e = n, r = e.x64, i = r.Word, v = r.WordArray, c = e.algo, x = c.SHA512, f = c.SHA384 = x.extend({
          _doReset: function() {
            this._hash = new v.init([
              new i.init(3418070365, 3238371032),
              new i.init(1654270250, 914150663),
              new i.init(2438529370, 812702999),
              new i.init(355462360, 4144912697),
              new i.init(1731405415, 4290775857),
              new i.init(2394180231, 1750603025),
              new i.init(3675008525, 1694076839),
              new i.init(1203062813, 3204075428)
            ]);
          },
          _doFinalize: function() {
            var d = x._doFinalize.call(this);
            return d.sigBytes -= 16, d;
          }
        });
        e.SHA384 = x._createHelper(f), e.HmacSHA384 = x._createHmacHelper(f);
      }(), n.SHA384;
    });
  }(Le)), Le.exports;
}
var Ee = { exports: {} }, Ot;
function wn() {
  return Ot || (Ot = 1, function(t, s) {
    (function(n, e, r) {
      t.exports = e(j(), ce());
    })(G, function(n) {
      return function(e) {
        var r = n, i = r.lib, v = i.WordArray, c = i.Hasher, x = r.x64, f = x.Word, d = r.algo, E = [], p = [], C = [];
        (function() {
          for (var A = 1, H = 0, u = 0; u < 24; u++) {
            E[A + 5 * H] = (u + 1) * (u + 2) / 2 % 64;
            var w = H % 5, b = (2 * A + 3 * H) % 5;
            A = w, H = b;
          }
          for (var A = 0; A < 5; A++)
            for (var H = 0; H < 5; H++)
              p[A + 5 * H] = H + (2 * A + 3 * H) % 5 * 5;
          for (var N = 1, $ = 0; $ < 24; $++) {
            for (var P = 0, o = 0, l = 0; l < 7; l++) {
              if (N & 1) {
                var a = (1 << l) - 1;
                a < 32 ? o ^= 1 << a : P ^= 1 << a - 32;
              }
              N & 128 ? N = N << 1 ^ 113 : N <<= 1;
            }
            C[$] = f.create(P, o);
          }
        })();
        var y = [];
        (function() {
          for (var A = 0; A < 25; A++)
            y[A] = f.create();
        })();
        var B = d.SHA3 = c.extend({
          cfg: c.cfg.extend({
            outputLength: 512
          }),
          _doReset: function() {
            for (var A = this._state = [], H = 0; H < 25; H++)
              A[H] = new f.init();
            this.blockSize = (1600 - 2 * this.cfg.outputLength) / 32;
          },
          _doProcessBlock: function(A, H) {
            for (var u = this._state, w = this.blockSize / 2, b = 0; b < w; b++) {
              var N = A[H + 2 * b], $ = A[H + 2 * b + 1];
              N = (N << 8 | N >>> 24) & 16711935 | (N << 24 | N >>> 8) & 4278255360, $ = ($ << 8 | $ >>> 24) & 16711935 | ($ << 24 | $ >>> 8) & 4278255360;
              var P = u[b];
              P.high ^= $, P.low ^= N;
            }
            for (var o = 0; o < 24; o++) {
              for (var l = 0; l < 5; l++) {
                for (var a = 0, h = 0, g = 0; g < 5; g++) {
                  var P = u[l + 5 * g];
                  a ^= P.high, h ^= P.low;
                }
                var _ = y[l];
                _.high = a, _.low = h;
              }
              for (var l = 0; l < 5; l++)
                for (var L = y[(l + 4) % 5], m = y[(l + 1) % 5], k = m.high, I = m.low, a = L.high ^ (k << 1 | I >>> 31), h = L.low ^ (I << 1 | k >>> 31), g = 0; g < 5; g++) {
                  var P = u[l + 5 * g];
                  P.high ^= a, P.low ^= h;
                }
              for (var S = 1; S < 25; S++) {
                var a, h, P = u[S], T = P.high, z = P.low, R = E[S];
                R < 32 ? (a = T << R | z >>> 32 - R, h = z << R | T >>> 32 - R) : (a = z << R - 32 | T >>> 64 - R, h = T << R - 32 | z >>> 64 - R);
                var M = y[p[S]];
                M.high = a, M.low = h;
              }
              var F = y[0], D = u[0];
              F.high = D.high, F.low = D.low;
              for (var l = 0; l < 5; l++)
                for (var g = 0; g < 5; g++) {
                  var S = l + 5 * g, P = u[S], O = y[S], U = y[(l + 1) % 5 + 5 * g], Z = y[(l + 2) % 5 + 5 * g];
                  P.high = O.high ^ ~U.high & Z.high, P.low = O.low ^ ~U.low & Z.low;
                }
              var P = u[0], q = C[o];
              P.high ^= q.high, P.low ^= q.low;
            }
          },
          _doFinalize: function() {
            var A = this._data, H = A.words;
            this._nDataBytes * 8;
            var u = A.sigBytes * 8, w = this.blockSize * 32;
            H[u >>> 5] |= 1 << 24 - u % 32, H[(e.ceil((u + 1) / w) * w >>> 5) - 1] |= 128, A.sigBytes = H.length * 4, this._process();
            for (var b = this._state, N = this.cfg.outputLength / 8, $ = N / 8, P = [], o = 0; o < $; o++) {
              var l = b[o], a = l.high, h = l.low;
              a = (a << 8 | a >>> 24) & 16711935 | (a << 24 | a >>> 8) & 4278255360, h = (h << 8 | h >>> 24) & 16711935 | (h << 24 | h >>> 8) & 4278255360, P.push(h), P.push(a);
            }
            return new v.init(P, N);
          },
          clone: function() {
            for (var A = c.clone.call(this), H = A._state = this._state.slice(0), u = 0; u < 25; u++)
              H[u] = H[u].clone();
            return A;
          }
        });
        r.SHA3 = c._createHelper(B), r.HmacSHA3 = c._createHmacHelper(B);
      }(Math), n.SHA3;
    });
  }(Ee)), Ee.exports;
}
var Ae = { exports: {} }, Ut;
function mn() {
  return Ut || (Ut = 1, function(t, s) {
    (function(n, e) {
      t.exports = e(j());
    })(G, function(n) {
      /** @preserve
      			(c) 2012 by Cédric Mesnil. All rights reserved.
      
      			Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
      
      			    - Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
      			    - Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
      
      			THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
      			*/
      return function(e) {
        var r = n, i = r.lib, v = i.WordArray, c = i.Hasher, x = r.algo, f = v.create([
          0,
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          10,
          11,
          12,
          13,
          14,
          15,
          7,
          4,
          13,
          1,
          10,
          6,
          15,
          3,
          12,
          0,
          9,
          5,
          2,
          14,
          11,
          8,
          3,
          10,
          14,
          4,
          9,
          15,
          8,
          1,
          2,
          7,
          0,
          6,
          13,
          11,
          5,
          12,
          1,
          9,
          11,
          10,
          0,
          8,
          12,
          4,
          13,
          3,
          7,
          15,
          14,
          5,
          6,
          2,
          4,
          0,
          5,
          9,
          7,
          12,
          2,
          10,
          14,
          1,
          3,
          8,
          11,
          6,
          15,
          13
        ]), d = v.create([
          5,
          14,
          7,
          0,
          9,
          2,
          11,
          4,
          13,
          6,
          15,
          8,
          1,
          10,
          3,
          12,
          6,
          11,
          3,
          7,
          0,
          13,
          5,
          10,
          14,
          15,
          8,
          12,
          4,
          9,
          1,
          2,
          15,
          5,
          1,
          3,
          7,
          14,
          6,
          9,
          11,
          8,
          12,
          2,
          10,
          0,
          4,
          13,
          8,
          6,
          4,
          1,
          3,
          11,
          15,
          0,
          5,
          12,
          2,
          13,
          9,
          7,
          10,
          14,
          12,
          15,
          10,
          4,
          1,
          5,
          8,
          7,
          6,
          2,
          13,
          14,
          0,
          3,
          9,
          11
        ]), E = v.create([
          11,
          14,
          15,
          12,
          5,
          8,
          7,
          9,
          11,
          13,
          14,
          15,
          6,
          7,
          9,
          8,
          7,
          6,
          8,
          13,
          11,
          9,
          7,
          15,
          7,
          12,
          15,
          9,
          11,
          7,
          13,
          12,
          11,
          13,
          6,
          7,
          14,
          9,
          13,
          15,
          14,
          8,
          13,
          6,
          5,
          12,
          7,
          5,
          11,
          12,
          14,
          15,
          14,
          15,
          9,
          8,
          9,
          14,
          5,
          6,
          8,
          6,
          5,
          12,
          9,
          15,
          5,
          11,
          6,
          8,
          13,
          12,
          5,
          12,
          13,
          14,
          11,
          8,
          5,
          6
        ]), p = v.create([
          8,
          9,
          9,
          11,
          13,
          15,
          15,
          5,
          7,
          7,
          8,
          11,
          14,
          14,
          12,
          6,
          9,
          13,
          15,
          7,
          12,
          8,
          9,
          11,
          7,
          7,
          12,
          7,
          6,
          15,
          13,
          11,
          9,
          7,
          15,
          11,
          8,
          6,
          6,
          14,
          12,
          13,
          5,
          14,
          13,
          13,
          7,
          5,
          15,
          5,
          8,
          11,
          14,
          14,
          6,
          14,
          6,
          9,
          12,
          9,
          12,
          5,
          15,
          8,
          8,
          5,
          12,
          9,
          12,
          5,
          14,
          6,
          8,
          13,
          6,
          5,
          15,
          13,
          11,
          11
        ]), C = v.create([0, 1518500249, 1859775393, 2400959708, 2840853838]), y = v.create([1352829926, 1548603684, 1836072691, 2053994217, 0]), B = x.RIPEMD160 = c.extend({
          _doReset: function() {
            this._hash = v.create([1732584193, 4023233417, 2562383102, 271733878, 3285377520]);
          },
          _doProcessBlock: function($, P) {
            for (var o = 0; o < 16; o++) {
              var l = P + o, a = $[l];
              $[l] = (a << 8 | a >>> 24) & 16711935 | (a << 24 | a >>> 8) & 4278255360;
            }
            var h = this._hash.words, g = C.words, _ = y.words, L = f.words, m = d.words, k = E.words, I = p.words, S, T, z, R, M, F, D, O, U, Z;
            F = S = h[0], D = T = h[1], O = z = h[2], U = R = h[3], Z = M = h[4];
            for (var q, o = 0; o < 80; o += 1)
              q = S + $[P + L[o]] | 0, o < 16 ? q += A(T, z, R) + g[0] : o < 32 ? q += H(T, z, R) + g[1] : o < 48 ? q += u(T, z, R) + g[2] : o < 64 ? q += w(T, z, R) + g[3] : q += b(T, z, R) + g[4], q = q | 0, q = N(q, k[o]), q = q + M | 0, S = M, M = R, R = N(z, 10), z = T, T = q, q = F + $[P + m[o]] | 0, o < 16 ? q += b(D, O, U) + _[0] : o < 32 ? q += w(D, O, U) + _[1] : o < 48 ? q += u(D, O, U) + _[2] : o < 64 ? q += H(D, O, U) + _[3] : q += A(D, O, U) + _[4], q = q | 0, q = N(q, I[o]), q = q + Z | 0, F = Z, Z = U, U = N(O, 10), O = D, D = q;
            q = h[1] + z + U | 0, h[1] = h[2] + R + Z | 0, h[2] = h[3] + M + F | 0, h[3] = h[4] + S + D | 0, h[4] = h[0] + T + O | 0, h[0] = q;
          },
          _doFinalize: function() {
            var $ = this._data, P = $.words, o = this._nDataBytes * 8, l = $.sigBytes * 8;
            P[l >>> 5] |= 128 << 24 - l % 32, P[(l + 64 >>> 9 << 4) + 14] = (o << 8 | o >>> 24) & 16711935 | (o << 24 | o >>> 8) & 4278255360, $.sigBytes = (P.length + 1) * 4, this._process();
            for (var a = this._hash, h = a.words, g = 0; g < 5; g++) {
              var _ = h[g];
              h[g] = (_ << 8 | _ >>> 24) & 16711935 | (_ << 24 | _ >>> 8) & 4278255360;
            }
            return a;
          },
          clone: function() {
            var $ = c.clone.call(this);
            return $._hash = this._hash.clone(), $;
          }
        });
        function A($, P, o) {
          return $ ^ P ^ o;
        }
        function H($, P, o) {
          return $ & P | ~$ & o;
        }
        function u($, P, o) {
          return ($ | ~P) ^ o;
        }
        function w($, P, o) {
          return $ & o | P & ~o;
        }
        function b($, P, o) {
          return $ ^ (P | ~o);
        }
        function N($, P) {
          return $ << P | $ >>> 32 - P;
        }
        r.RIPEMD160 = c._createHelper(B), r.HmacRIPEMD160 = c._createHmacHelper(B);
      }(), n.RIPEMD160;
    });
  }(Ae)), Ae.exports;
}
var Se = { exports: {} }, qt;
function ut() {
  return qt || (qt = 1, function(t, s) {
    (function(n, e) {
      t.exports = e(j());
    })(G, function(n) {
      (function() {
        var e = n, r = e.lib, i = r.Base, v = e.enc, c = v.Utf8, x = e.algo;
        x.HMAC = i.extend({
          init: function(f, d) {
            f = this._hasher = new f.init(), typeof d == "string" && (d = c.parse(d));
            var E = f.blockSize, p = E * 4;
            d.sigBytes > p && (d = f.finalize(d)), d.clamp();
            for (var C = this._oKey = d.clone(), y = this._iKey = d.clone(), B = C.words, A = y.words, H = 0; H < E; H++)
              B[H] ^= 1549556828, A[H] ^= 909522486;
            C.sigBytes = y.sigBytes = p, this.reset();
          },
          reset: function() {
            var f = this._hasher;
            f.reset(), f.update(this._iKey);
          },
          update: function(f) {
            return this._hasher.update(f), this;
          },
          finalize: function(f) {
            var d = this._hasher, E = d.finalize(f);
            d.reset();
            var p = d.finalize(this._oKey.clone().concat(E));
            return p;
          }
        });
      })();
    });
  }(Se)), Se.exports;
}
var He = { exports: {} }, Vt;
function bn() {
  return Vt || (Vt = 1, function(t, s) {
    (function(n, e, r) {
      t.exports = e(j(), lt(), ut());
    })(G, function(n) {
      return function() {
        var e = n, r = e.lib, i = r.Base, v = r.WordArray, c = e.algo, x = c.SHA1, f = c.HMAC, d = c.PBKDF2 = i.extend({
          cfg: i.extend({
            keySize: 128 / 32,
            hasher: x,
            iterations: 1
          }),
          init: function(E) {
            this.cfg = this.cfg.extend(E);
          },
          compute: function(E, p) {
            for (var C = this.cfg, y = f.create(C.hasher, E), B = v.create(), A = v.create([1]), H = B.words, u = A.words, w = C.keySize, b = C.iterations; H.length < w; ) {
              var N = y.update(p).finalize(A);
              y.reset();
              for (var $ = N.words, P = $.length, o = N, l = 1; l < b; l++) {
                o = y.finalize(o), y.reset();
                for (var a = o.words, h = 0; h < P; h++)
                  $[h] ^= a[h];
              }
              B.concat(N), u[0]++;
            }
            return B.sigBytes = w * 4, B;
          }
        });
        e.PBKDF2 = function(E, p, C) {
          return d.create(C).compute(E, p);
        };
      }(), n.PBKDF2;
    });
  }(He)), He.exports;
}
var Ie = { exports: {} }, Wt;
function H0() {
  return Wt || (Wt = 1, function(t, s) {
    (function(n, e, r) {
      t.exports = e(j(), lt(), ut());
    })(G, function(n) {
      return function() {
        var e = n, r = e.lib, i = r.Base, v = r.WordArray, c = e.algo, x = c.MD5, f = c.EvpKDF = i.extend({
          cfg: i.extend({
            keySize: 128 / 32,
            hasher: x,
            iterations: 1
          }),
          init: function(d) {
            this.cfg = this.cfg.extend(d);
          },
          compute: function(d, E) {
            for (var p, C = this.cfg, y = C.hasher.create(), B = v.create(), A = B.words, H = C.keySize, u = C.iterations; A.length < H; ) {
              p && y.update(p), p = y.update(d).finalize(E), y.reset();
              for (var w = 1; w < u; w++)
                p = y.finalize(p), y.reset();
              B.concat(p);
            }
            return B.sigBytes = H * 4, B;
          }
        });
        e.EvpKDF = function(d, E, p) {
          return f.create(p).compute(d, E);
        };
      }(), n.EvpKDF;
    });
  }(Ie)), Ie.exports;
}
var $e = { exports: {} }, Gt;
function o0() {
  return Gt || (Gt = 1, function(t, s) {
    (function(n, e, r) {
      t.exports = e(j(), H0());
    })(G, function(n) {
      n.lib.Cipher || function(e) {
        var r = n, i = r.lib, v = i.Base, c = i.WordArray, x = i.BufferedBlockAlgorithm, f = r.enc;
        f.Utf8;
        var d = f.Base64, E = r.algo, p = E.EvpKDF, C = i.Cipher = x.extend({
          cfg: v.extend(),
          createEncryptor: function(a, h) {
            return this.create(this._ENC_XFORM_MODE, a, h);
          },
          createDecryptor: function(a, h) {
            return this.create(this._DEC_XFORM_MODE, a, h);
          },
          init: function(a, h, g) {
            this.cfg = this.cfg.extend(g), this._xformMode = a, this._key = h, this.reset();
          },
          reset: function() {
            x.reset.call(this), this._doReset();
          },
          process: function(a) {
            return this._append(a), this._process();
          },
          finalize: function(a) {
            a && this._append(a);
            var h = this._doFinalize();
            return h;
          },
          keySize: 128 / 32,
          ivSize: 128 / 32,
          _ENC_XFORM_MODE: 1,
          _DEC_XFORM_MODE: 2,
          _createHelper: function() {
            function a(h) {
              return typeof h == "string" ? l : $;
            }
            return function(h) {
              return {
                encrypt: function(g, _, L) {
                  return a(_).encrypt(h, g, _, L);
                },
                decrypt: function(g, _, L) {
                  return a(_).decrypt(h, g, _, L);
                }
              };
            };
          }()
        });
        i.StreamCipher = C.extend({
          _doFinalize: function() {
            var a = this._process(!0);
            return a;
          },
          blockSize: 1
        });
        var y = r.mode = {}, B = i.BlockCipherMode = v.extend({
          createEncryptor: function(a, h) {
            return this.Encryptor.create(a, h);
          },
          createDecryptor: function(a, h) {
            return this.Decryptor.create(a, h);
          },
          init: function(a, h) {
            this._cipher = a, this._iv = h;
          }
        }), A = y.CBC = function() {
          var a = B.extend();
          a.Encryptor = a.extend({
            processBlock: function(g, _) {
              var L = this._cipher, m = L.blockSize;
              h.call(this, g, _, m), L.encryptBlock(g, _), this._prevBlock = g.slice(_, _ + m);
            }
          }), a.Decryptor = a.extend({
            processBlock: function(g, _) {
              var L = this._cipher, m = L.blockSize, k = g.slice(_, _ + m);
              L.decryptBlock(g, _), h.call(this, g, _, m), this._prevBlock = k;
            }
          });
          function h(g, _, L) {
            var m, k = this._iv;
            k ? (m = k, this._iv = e) : m = this._prevBlock;
            for (var I = 0; I < L; I++)
              g[_ + I] ^= m[I];
          }
          return a;
        }(), H = r.pad = {}, u = H.Pkcs7 = {
          pad: function(a, h) {
            for (var g = h * 4, _ = g - a.sigBytes % g, L = _ << 24 | _ << 16 | _ << 8 | _, m = [], k = 0; k < _; k += 4)
              m.push(L);
            var I = c.create(m, _);
            a.concat(I);
          },
          unpad: function(a) {
            var h = a.words[a.sigBytes - 1 >>> 2] & 255;
            a.sigBytes -= h;
          }
        };
        i.BlockCipher = C.extend({
          cfg: C.cfg.extend({
            mode: A,
            padding: u
          }),
          reset: function() {
            var a;
            C.reset.call(this);
            var h = this.cfg, g = h.iv, _ = h.mode;
            this._xformMode == this._ENC_XFORM_MODE ? a = _.createEncryptor : (a = _.createDecryptor, this._minBufferSize = 1), this._mode && this._mode.__creator == a ? this._mode.init(this, g && g.words) : (this._mode = a.call(_, this, g && g.words), this._mode.__creator = a);
          },
          _doProcessBlock: function(a, h) {
            this._mode.processBlock(a, h);
          },
          _doFinalize: function() {
            var a, h = this.cfg.padding;
            return this._xformMode == this._ENC_XFORM_MODE ? (h.pad(this._data, this.blockSize), a = this._process(!0)) : (a = this._process(!0), h.unpad(a)), a;
          },
          blockSize: 128 / 32
        });
        var w = i.CipherParams = v.extend({
          init: function(a) {
            this.mixIn(a);
          },
          toString: function(a) {
            return (a || this.formatter).stringify(this);
          }
        }), b = r.format = {}, N = b.OpenSSL = {
          stringify: function(a) {
            var h, g = a.ciphertext, _ = a.salt;
            return _ ? h = c.create([1398893684, 1701076831]).concat(_).concat(g) : h = g, h.toString(d);
          },
          parse: function(a) {
            var h, g = d.parse(a), _ = g.words;
            return _[0] == 1398893684 && _[1] == 1701076831 && (h = c.create(_.slice(2, 4)), _.splice(0, 4), g.sigBytes -= 16), w.create({ ciphertext: g, salt: h });
          }
        }, $ = i.SerializableCipher = v.extend({
          cfg: v.extend({
            format: N
          }),
          encrypt: function(a, h, g, _) {
            _ = this.cfg.extend(_);
            var L = a.createEncryptor(g, _), m = L.finalize(h), k = L.cfg;
            return w.create({
              ciphertext: m,
              key: g,
              iv: k.iv,
              algorithm: a,
              mode: k.mode,
              padding: k.padding,
              blockSize: a.blockSize,
              formatter: _.format
            });
          },
          decrypt: function(a, h, g, _) {
            _ = this.cfg.extend(_), h = this._parse(h, _.format);
            var L = a.createDecryptor(g, _).finalize(h.ciphertext);
            return L;
          },
          _parse: function(a, h) {
            return typeof a == "string" ? h.parse(a, this) : a;
          }
        }), P = r.kdf = {}, o = P.OpenSSL = {
          execute: function(a, h, g, _) {
            _ || (_ = c.random(64 / 8));
            var L = p.create({ keySize: h + g }).compute(a, _), m = c.create(L.words.slice(h), g * 4);
            return L.sigBytes = h * 4, w.create({ key: L, iv: m, salt: _ });
          }
        }, l = i.PasswordBasedCipher = $.extend({
          cfg: $.cfg.extend({
            kdf: o
          }),
          encrypt: function(a, h, g, _) {
            _ = this.cfg.extend(_);
            var L = _.kdf.execute(g, a.keySize, a.ivSize);
            _.iv = L.iv;
            var m = $.encrypt.call(this, a, h, L.key, _);
            return m.mixIn(L), m;
          },
          decrypt: function(a, h, g, _) {
            _ = this.cfg.extend(_), h = this._parse(h, _.format);
            var L = _.kdf.execute(g, a.keySize, a.ivSize, h.salt);
            _.iv = L.iv;
            var m = $.decrypt.call(this, a, h, L.key, _);
            return m;
          }
        });
      }();
    });
  }($e)), $e.exports;
}
var Re = { exports: {} }, Kt;
function Bn() {
  return Kt || (Kt = 1, function(t, s) {
    (function(n, e, r) {
      t.exports = e(j(), o0());
    })(G, function(n) {
      return n.mode.CFB = function() {
        var e = n.lib.BlockCipherMode.extend();
        e.Encryptor = e.extend({
          processBlock: function(i, v) {
            var c = this._cipher, x = c.blockSize;
            r.call(this, i, v, x, c), this._prevBlock = i.slice(v, v + x);
          }
        }), e.Decryptor = e.extend({
          processBlock: function(i, v) {
            var c = this._cipher, x = c.blockSize, f = i.slice(v, v + x);
            r.call(this, i, v, x, c), this._prevBlock = f;
          }
        });
        function r(i, v, c, x) {
          var f, d = this._iv;
          d ? (f = d.slice(0), this._iv = void 0) : f = this._prevBlock, x.encryptBlock(f, 0);
          for (var E = 0; E < c; E++)
            i[v + E] ^= f[E];
        }
        return e;
      }(), n.mode.CFB;
    });
  }(Re)), Re.exports;
}
var Ne = { exports: {} }, jt;
function kn() {
  return jt || (jt = 1, function(t, s) {
    (function(n, e, r) {
      t.exports = e(j(), o0());
    })(G, function(n) {
      return n.mode.CTR = function() {
        var e = n.lib.BlockCipherMode.extend(), r = e.Encryptor = e.extend({
          processBlock: function(i, v) {
            var c = this._cipher, x = c.blockSize, f = this._iv, d = this._counter;
            f && (d = this._counter = f.slice(0), this._iv = void 0);
            var E = d.slice(0);
            c.encryptBlock(E, 0), d[x - 1] = d[x - 1] + 1 | 0;
            for (var p = 0; p < x; p++)
              i[v + p] ^= E[p];
          }
        });
        return e.Decryptor = r, e;
      }(), n.mode.CTR;
    });
  }(Ne)), Ne.exports;
}
var Pe = { exports: {} }, Zt;
function Ln() {
  return Zt || (Zt = 1, function(t, s) {
    (function(n, e, r) {
      t.exports = e(j(), o0());
    })(G, function(n) {
      /** @preserve
       * Counter block mode compatible with  Dr Brian Gladman fileenc.c
       * derived from CryptoJS.mode.CTR
       * Jan Hruby jhruby.web@gmail.com
       */
      return n.mode.CTRGladman = function() {
        var e = n.lib.BlockCipherMode.extend();
        function r(c) {
          if ((c >> 24 & 255) === 255) {
            var x = c >> 16 & 255, f = c >> 8 & 255, d = c & 255;
            x === 255 ? (x = 0, f === 255 ? (f = 0, d === 255 ? d = 0 : ++d) : ++f) : ++x, c = 0, c += x << 16, c += f << 8, c += d;
          } else
            c += 1 << 24;
          return c;
        }
        function i(c) {
          return (c[0] = r(c[0])) === 0 && (c[1] = r(c[1])), c;
        }
        var v = e.Encryptor = e.extend({
          processBlock: function(c, x) {
            var f = this._cipher, d = f.blockSize, E = this._iv, p = this._counter;
            E && (p = this._counter = E.slice(0), this._iv = void 0), i(p);
            var C = p.slice(0);
            f.encryptBlock(C, 0);
            for (var y = 0; y < d; y++)
              c[x + y] ^= C[y];
          }
        });
        return e.Decryptor = v, e;
      }(), n.mode.CTRGladman;
    });
  }(Pe)), Pe.exports;
}
var Te = { exports: {} }, Xt;
function En() {
  return Xt || (Xt = 1, function(t, s) {
    (function(n, e, r) {
      t.exports = e(j(), o0());
    })(G, function(n) {
      return n.mode.OFB = function() {
        var e = n.lib.BlockCipherMode.extend(), r = e.Encryptor = e.extend({
          processBlock: function(i, v) {
            var c = this._cipher, x = c.blockSize, f = this._iv, d = this._keystream;
            f && (d = this._keystream = f.slice(0), this._iv = void 0), c.encryptBlock(d, 0);
            for (var E = 0; E < x; E++)
              i[v + E] ^= d[E];
          }
        });
        return e.Decryptor = r, e;
      }(), n.mode.OFB;
    });
  }(Te)), Te.exports;
}
var Me = { exports: {} }, Yt;
function An() {
  return Yt || (Yt = 1, function(t, s) {
    (function(n, e, r) {
      t.exports = e(j(), o0());
    })(G, function(n) {
      return n.mode.ECB = function() {
        var e = n.lib.BlockCipherMode.extend();
        return e.Encryptor = e.extend({
          processBlock: function(r, i) {
            this._cipher.encryptBlock(r, i);
          }
        }), e.Decryptor = e.extend({
          processBlock: function(r, i) {
            this._cipher.decryptBlock(r, i);
          }
        }), e;
      }(), n.mode.ECB;
    });
  }(Me)), Me.exports;
}
var De = { exports: {} }, Qt;
function Sn() {
  return Qt || (Qt = 1, function(t, s) {
    (function(n, e, r) {
      t.exports = e(j(), o0());
    })(G, function(n) {
      return n.pad.AnsiX923 = {
        pad: function(e, r) {
          var i = e.sigBytes, v = r * 4, c = v - i % v, x = i + c - 1;
          e.clamp(), e.words[x >>> 2] |= c << 24 - x % 4 * 8, e.sigBytes += c;
        },
        unpad: function(e) {
          var r = e.words[e.sigBytes - 1 >>> 2] & 255;
          e.sigBytes -= r;
        }
      }, n.pad.Ansix923;
    });
  }(De)), De.exports;
}
var Fe = { exports: {} }, Jt;
function Hn() {
  return Jt || (Jt = 1, function(t, s) {
    (function(n, e, r) {
      t.exports = e(j(), o0());
    })(G, function(n) {
      return n.pad.Iso10126 = {
        pad: function(e, r) {
          var i = r * 4, v = i - e.sigBytes % i;
          e.concat(n.lib.WordArray.random(v - 1)).concat(n.lib.WordArray.create([v << 24], 1));
        },
        unpad: function(e) {
          var r = e.words[e.sigBytes - 1 >>> 2] & 255;
          e.sigBytes -= r;
        }
      }, n.pad.Iso10126;
    });
  }(Fe)), Fe.exports;
}
var ze = { exports: {} }, er;
function In() {
  return er || (er = 1, function(t, s) {
    (function(n, e, r) {
      t.exports = e(j(), o0());
    })(G, function(n) {
      return n.pad.Iso97971 = {
        pad: function(e, r) {
          e.concat(n.lib.WordArray.create([2147483648], 1)), n.pad.ZeroPadding.pad(e, r);
        },
        unpad: function(e) {
          n.pad.ZeroPadding.unpad(e), e.sigBytes--;
        }
      }, n.pad.Iso97971;
    });
  }(ze)), ze.exports;
}
var Oe = { exports: {} }, tr;
function $n() {
  return tr || (tr = 1, function(t, s) {
    (function(n, e, r) {
      t.exports = e(j(), o0());
    })(G, function(n) {
      return n.pad.ZeroPadding = {
        pad: function(e, r) {
          var i = r * 4;
          e.clamp(), e.sigBytes += i - (e.sigBytes % i || i);
        },
        unpad: function(e) {
          for (var r = e.words, i = e.sigBytes - 1, i = e.sigBytes - 1; i >= 0; i--)
            if (r[i >>> 2] >>> 24 - i % 4 * 8 & 255) {
              e.sigBytes = i + 1;
              break;
            }
        }
      }, n.pad.ZeroPadding;
    });
  }(Oe)), Oe.exports;
}
var Ue = { exports: {} }, rr;
function Rn() {
  return rr || (rr = 1, function(t, s) {
    (function(n, e, r) {
      t.exports = e(j(), o0());
    })(G, function(n) {
      return n.pad.NoPadding = {
        pad: function() {
        },
        unpad: function() {
        }
      }, n.pad.NoPadding;
    });
  }(Ue)), Ue.exports;
}
var qe = { exports: {} }, nr;
function Nn() {
  return nr || (nr = 1, function(t, s) {
    (function(n, e, r) {
      t.exports = e(j(), o0());
    })(G, function(n) {
      return function(e) {
        var r = n, i = r.lib, v = i.CipherParams, c = r.enc, x = c.Hex, f = r.format;
        f.Hex = {
          stringify: function(d) {
            return d.ciphertext.toString(x);
          },
          parse: function(d) {
            var E = x.parse(d);
            return v.create({ ciphertext: E });
          }
        };
      }(), n.format.Hex;
    });
  }(qe)), qe.exports;
}
var Ve = { exports: {} }, or;
function Pn() {
  return or || (or = 1, function(t, s) {
    (function(n, e, r) {
      t.exports = e(j(), D0(), F0(), H0(), o0());
    })(G, function(n) {
      return function() {
        var e = n, r = e.lib, i = r.BlockCipher, v = e.algo, c = [], x = [], f = [], d = [], E = [], p = [], C = [], y = [], B = [], A = [];
        (function() {
          for (var w = [], b = 0; b < 256; b++)
            b < 128 ? w[b] = b << 1 : w[b] = b << 1 ^ 283;
          for (var N = 0, $ = 0, b = 0; b < 256; b++) {
            var P = $ ^ $ << 1 ^ $ << 2 ^ $ << 3 ^ $ << 4;
            P = P >>> 8 ^ P & 255 ^ 99, c[N] = P, x[P] = N;
            var o = w[N], l = w[o], a = w[l], h = w[P] * 257 ^ P * 16843008;
            f[N] = h << 24 | h >>> 8, d[N] = h << 16 | h >>> 16, E[N] = h << 8 | h >>> 24, p[N] = h;
            var h = a * 16843009 ^ l * 65537 ^ o * 257 ^ N * 16843008;
            C[P] = h << 24 | h >>> 8, y[P] = h << 16 | h >>> 16, B[P] = h << 8 | h >>> 24, A[P] = h, N ? (N = o ^ w[w[w[a ^ o]]], $ ^= w[w[$]]) : N = $ = 1;
          }
        })();
        var H = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54], u = v.AES = i.extend({
          _doReset: function() {
            var w;
            if (!(this._nRounds && this._keyPriorReset === this._key)) {
              for (var b = this._keyPriorReset = this._key, N = b.words, $ = b.sigBytes / 4, P = this._nRounds = $ + 6, o = (P + 1) * 4, l = this._keySchedule = [], a = 0; a < o; a++)
                a < $ ? l[a] = N[a] : (w = l[a - 1], a % $ ? $ > 6 && a % $ == 4 && (w = c[w >>> 24] << 24 | c[w >>> 16 & 255] << 16 | c[w >>> 8 & 255] << 8 | c[w & 255]) : (w = w << 8 | w >>> 24, w = c[w >>> 24] << 24 | c[w >>> 16 & 255] << 16 | c[w >>> 8 & 255] << 8 | c[w & 255], w ^= H[a / $ | 0] << 24), l[a] = l[a - $] ^ w);
              for (var h = this._invKeySchedule = [], g = 0; g < o; g++) {
                var a = o - g;
                if (g % 4)
                  var w = l[a];
                else
                  var w = l[a - 4];
                g < 4 || a <= 4 ? h[g] = w : h[g] = C[c[w >>> 24]] ^ y[c[w >>> 16 & 255]] ^ B[c[w >>> 8 & 255]] ^ A[c[w & 255]];
              }
            }
          },
          encryptBlock: function(w, b) {
            this._doCryptBlock(w, b, this._keySchedule, f, d, E, p, c);
          },
          decryptBlock: function(w, b) {
            var N = w[b + 1];
            w[b + 1] = w[b + 3], w[b + 3] = N, this._doCryptBlock(w, b, this._invKeySchedule, C, y, B, A, x);
            var N = w[b + 1];
            w[b + 1] = w[b + 3], w[b + 3] = N;
          },
          _doCryptBlock: function(w, b, N, $, P, o, l, a) {
            for (var h = this._nRounds, g = w[b] ^ N[0], _ = w[b + 1] ^ N[1], L = w[b + 2] ^ N[2], m = w[b + 3] ^ N[3], k = 4, I = 1; I < h; I++) {
              var S = $[g >>> 24] ^ P[_ >>> 16 & 255] ^ o[L >>> 8 & 255] ^ l[m & 255] ^ N[k++], T = $[_ >>> 24] ^ P[L >>> 16 & 255] ^ o[m >>> 8 & 255] ^ l[g & 255] ^ N[k++], z = $[L >>> 24] ^ P[m >>> 16 & 255] ^ o[g >>> 8 & 255] ^ l[_ & 255] ^ N[k++], R = $[m >>> 24] ^ P[g >>> 16 & 255] ^ o[_ >>> 8 & 255] ^ l[L & 255] ^ N[k++];
              g = S, _ = T, L = z, m = R;
            }
            var S = (a[g >>> 24] << 24 | a[_ >>> 16 & 255] << 16 | a[L >>> 8 & 255] << 8 | a[m & 255]) ^ N[k++], T = (a[_ >>> 24] << 24 | a[L >>> 16 & 255] << 16 | a[m >>> 8 & 255] << 8 | a[g & 255]) ^ N[k++], z = (a[L >>> 24] << 24 | a[m >>> 16 & 255] << 16 | a[g >>> 8 & 255] << 8 | a[_ & 255]) ^ N[k++], R = (a[m >>> 24] << 24 | a[g >>> 16 & 255] << 16 | a[_ >>> 8 & 255] << 8 | a[L & 255]) ^ N[k++];
            w[b] = S, w[b + 1] = T, w[b + 2] = z, w[b + 3] = R;
          },
          keySize: 256 / 32
        });
        e.AES = i._createHelper(u);
      }(), n.AES;
    });
  }(Ve)), Ve.exports;
}
var We = { exports: {} }, ir;
function Tn() {
  return ir || (ir = 1, function(t, s) {
    (function(n, e, r) {
      t.exports = e(j(), D0(), F0(), H0(), o0());
    })(G, function(n) {
      return function() {
        var e = n, r = e.lib, i = r.WordArray, v = r.BlockCipher, c = e.algo, x = [
          57,
          49,
          41,
          33,
          25,
          17,
          9,
          1,
          58,
          50,
          42,
          34,
          26,
          18,
          10,
          2,
          59,
          51,
          43,
          35,
          27,
          19,
          11,
          3,
          60,
          52,
          44,
          36,
          63,
          55,
          47,
          39,
          31,
          23,
          15,
          7,
          62,
          54,
          46,
          38,
          30,
          22,
          14,
          6,
          61,
          53,
          45,
          37,
          29,
          21,
          13,
          5,
          28,
          20,
          12,
          4
        ], f = [
          14,
          17,
          11,
          24,
          1,
          5,
          3,
          28,
          15,
          6,
          21,
          10,
          23,
          19,
          12,
          4,
          26,
          8,
          16,
          7,
          27,
          20,
          13,
          2,
          41,
          52,
          31,
          37,
          47,
          55,
          30,
          40,
          51,
          45,
          33,
          48,
          44,
          49,
          39,
          56,
          34,
          53,
          46,
          42,
          50,
          36,
          29,
          32
        ], d = [1, 2, 4, 6, 8, 10, 12, 14, 15, 17, 19, 21, 23, 25, 27, 28], E = [
          {
            0: 8421888,
            268435456: 32768,
            536870912: 8421378,
            805306368: 2,
            1073741824: 512,
            1342177280: 8421890,
            1610612736: 8389122,
            1879048192: 8388608,
            2147483648: 514,
            2415919104: 8389120,
            2684354560: 33280,
            2952790016: 8421376,
            3221225472: 32770,
            3489660928: 8388610,
            3758096384: 0,
            4026531840: 33282,
            134217728: 0,
            402653184: 8421890,
            671088640: 33282,
            939524096: 32768,
            1207959552: 8421888,
            1476395008: 512,
            1744830464: 8421378,
            2013265920: 2,
            2281701376: 8389120,
            2550136832: 33280,
            2818572288: 8421376,
            3087007744: 8389122,
            3355443200: 8388610,
            3623878656: 32770,
            3892314112: 514,
            4160749568: 8388608,
            1: 32768,
            268435457: 2,
            536870913: 8421888,
            805306369: 8388608,
            1073741825: 8421378,
            1342177281: 33280,
            1610612737: 512,
            1879048193: 8389122,
            2147483649: 8421890,
            2415919105: 8421376,
            2684354561: 8388610,
            2952790017: 33282,
            3221225473: 514,
            3489660929: 8389120,
            3758096385: 32770,
            4026531841: 0,
            134217729: 8421890,
            402653185: 8421376,
            671088641: 8388608,
            939524097: 512,
            1207959553: 32768,
            1476395009: 8388610,
            1744830465: 2,
            2013265921: 33282,
            2281701377: 32770,
            2550136833: 8389122,
            2818572289: 514,
            3087007745: 8421888,
            3355443201: 8389120,
            3623878657: 0,
            3892314113: 33280,
            4160749569: 8421378
          },
          {
            0: 1074282512,
            16777216: 16384,
            33554432: 524288,
            50331648: 1074266128,
            67108864: 1073741840,
            83886080: 1074282496,
            100663296: 1073758208,
            117440512: 16,
            134217728: 540672,
            150994944: 1073758224,
            167772160: 1073741824,
            184549376: 540688,
            201326592: 524304,
            218103808: 0,
            234881024: 16400,
            251658240: 1074266112,
            8388608: 1073758208,
            25165824: 540688,
            41943040: 16,
            58720256: 1073758224,
            75497472: 1074282512,
            92274688: 1073741824,
            109051904: 524288,
            125829120: 1074266128,
            142606336: 524304,
            159383552: 0,
            176160768: 16384,
            192937984: 1074266112,
            209715200: 1073741840,
            226492416: 540672,
            243269632: 1074282496,
            260046848: 16400,
            268435456: 0,
            285212672: 1074266128,
            301989888: 1073758224,
            318767104: 1074282496,
            335544320: 1074266112,
            352321536: 16,
            369098752: 540688,
            385875968: 16384,
            402653184: 16400,
            419430400: 524288,
            436207616: 524304,
            452984832: 1073741840,
            469762048: 540672,
            486539264: 1073758208,
            503316480: 1073741824,
            520093696: 1074282512,
            276824064: 540688,
            293601280: 524288,
            310378496: 1074266112,
            327155712: 16384,
            343932928: 1073758208,
            360710144: 1074282512,
            377487360: 16,
            394264576: 1073741824,
            411041792: 1074282496,
            427819008: 1073741840,
            444596224: 1073758224,
            461373440: 524304,
            478150656: 0,
            494927872: 16400,
            511705088: 1074266128,
            528482304: 540672
          },
          {
            0: 260,
            1048576: 0,
            2097152: 67109120,
            3145728: 65796,
            4194304: 65540,
            5242880: 67108868,
            6291456: 67174660,
            7340032: 67174400,
            8388608: 67108864,
            9437184: 67174656,
            10485760: 65792,
            11534336: 67174404,
            12582912: 67109124,
            13631488: 65536,
            14680064: 4,
            15728640: 256,
            524288: 67174656,
            1572864: 67174404,
            2621440: 0,
            3670016: 67109120,
            4718592: 67108868,
            5767168: 65536,
            6815744: 65540,
            7864320: 260,
            8912896: 4,
            9961472: 256,
            11010048: 67174400,
            12058624: 65796,
            13107200: 65792,
            14155776: 67109124,
            15204352: 67174660,
            16252928: 67108864,
            16777216: 67174656,
            17825792: 65540,
            18874368: 65536,
            19922944: 67109120,
            20971520: 256,
            22020096: 67174660,
            23068672: 67108868,
            24117248: 0,
            25165824: 67109124,
            26214400: 67108864,
            27262976: 4,
            28311552: 65792,
            29360128: 67174400,
            30408704: 260,
            31457280: 65796,
            32505856: 67174404,
            17301504: 67108864,
            18350080: 260,
            19398656: 67174656,
            20447232: 0,
            21495808: 65540,
            22544384: 67109120,
            23592960: 256,
            24641536: 67174404,
            25690112: 65536,
            26738688: 67174660,
            27787264: 65796,
            28835840: 67108868,
            29884416: 67109124,
            30932992: 67174400,
            31981568: 4,
            33030144: 65792
          },
          {
            0: 2151682048,
            65536: 2147487808,
            131072: 4198464,
            196608: 2151677952,
            262144: 0,
            327680: 4198400,
            393216: 2147483712,
            458752: 4194368,
            524288: 2147483648,
            589824: 4194304,
            655360: 64,
            720896: 2147487744,
            786432: 2151678016,
            851968: 4160,
            917504: 4096,
            983040: 2151682112,
            32768: 2147487808,
            98304: 64,
            163840: 2151678016,
            229376: 2147487744,
            294912: 4198400,
            360448: 2151682112,
            425984: 0,
            491520: 2151677952,
            557056: 4096,
            622592: 2151682048,
            688128: 4194304,
            753664: 4160,
            819200: 2147483648,
            884736: 4194368,
            950272: 4198464,
            1015808: 2147483712,
            1048576: 4194368,
            1114112: 4198400,
            1179648: 2147483712,
            1245184: 0,
            1310720: 4160,
            1376256: 2151678016,
            1441792: 2151682048,
            1507328: 2147487808,
            1572864: 2151682112,
            1638400: 2147483648,
            1703936: 2151677952,
            1769472: 4198464,
            1835008: 2147487744,
            1900544: 4194304,
            1966080: 64,
            2031616: 4096,
            1081344: 2151677952,
            1146880: 2151682112,
            1212416: 0,
            1277952: 4198400,
            1343488: 4194368,
            1409024: 2147483648,
            1474560: 2147487808,
            1540096: 64,
            1605632: 2147483712,
            1671168: 4096,
            1736704: 2147487744,
            1802240: 2151678016,
            1867776: 4160,
            1933312: 2151682048,
            1998848: 4194304,
            2064384: 4198464
          },
          {
            0: 128,
            4096: 17039360,
            8192: 262144,
            12288: 536870912,
            16384: 537133184,
            20480: 16777344,
            24576: 553648256,
            28672: 262272,
            32768: 16777216,
            36864: 537133056,
            40960: 536871040,
            45056: 553910400,
            49152: 553910272,
            53248: 0,
            57344: 17039488,
            61440: 553648128,
            2048: 17039488,
            6144: 553648256,
            10240: 128,
            14336: 17039360,
            18432: 262144,
            22528: 537133184,
            26624: 553910272,
            30720: 536870912,
            34816: 537133056,
            38912: 0,
            43008: 553910400,
            47104: 16777344,
            51200: 536871040,
            55296: 553648128,
            59392: 16777216,
            63488: 262272,
            65536: 262144,
            69632: 128,
            73728: 536870912,
            77824: 553648256,
            81920: 16777344,
            86016: 553910272,
            90112: 537133184,
            94208: 16777216,
            98304: 553910400,
            102400: 553648128,
            106496: 17039360,
            110592: 537133056,
            114688: 262272,
            118784: 536871040,
            122880: 0,
            126976: 17039488,
            67584: 553648256,
            71680: 16777216,
            75776: 17039360,
            79872: 537133184,
            83968: 536870912,
            88064: 17039488,
            92160: 128,
            96256: 553910272,
            100352: 262272,
            104448: 553910400,
            108544: 0,
            112640: 553648128,
            116736: 16777344,
            120832: 262144,
            124928: 537133056,
            129024: 536871040
          },
          {
            0: 268435464,
            256: 8192,
            512: 270532608,
            768: 270540808,
            1024: 268443648,
            1280: 2097152,
            1536: 2097160,
            1792: 268435456,
            2048: 0,
            2304: 268443656,
            2560: 2105344,
            2816: 8,
            3072: 270532616,
            3328: 2105352,
            3584: 8200,
            3840: 270540800,
            128: 270532608,
            384: 270540808,
            640: 8,
            896: 2097152,
            1152: 2105352,
            1408: 268435464,
            1664: 268443648,
            1920: 8200,
            2176: 2097160,
            2432: 8192,
            2688: 268443656,
            2944: 270532616,
            3200: 0,
            3456: 270540800,
            3712: 2105344,
            3968: 268435456,
            4096: 268443648,
            4352: 270532616,
            4608: 270540808,
            4864: 8200,
            5120: 2097152,
            5376: 268435456,
            5632: 268435464,
            5888: 2105344,
            6144: 2105352,
            6400: 0,
            6656: 8,
            6912: 270532608,
            7168: 8192,
            7424: 268443656,
            7680: 270540800,
            7936: 2097160,
            4224: 8,
            4480: 2105344,
            4736: 2097152,
            4992: 268435464,
            5248: 268443648,
            5504: 8200,
            5760: 270540808,
            6016: 270532608,
            6272: 270540800,
            6528: 270532616,
            6784: 8192,
            7040: 2105352,
            7296: 2097160,
            7552: 0,
            7808: 268435456,
            8064: 268443656
          },
          {
            0: 1048576,
            16: 33555457,
            32: 1024,
            48: 1049601,
            64: 34604033,
            80: 0,
            96: 1,
            112: 34603009,
            128: 33555456,
            144: 1048577,
            160: 33554433,
            176: 34604032,
            192: 34603008,
            208: 1025,
            224: 1049600,
            240: 33554432,
            8: 34603009,
            24: 0,
            40: 33555457,
            56: 34604032,
            72: 1048576,
            88: 33554433,
            104: 33554432,
            120: 1025,
            136: 1049601,
            152: 33555456,
            168: 34603008,
            184: 1048577,
            200: 1024,
            216: 34604033,
            232: 1,
            248: 1049600,
            256: 33554432,
            272: 1048576,
            288: 33555457,
            304: 34603009,
            320: 1048577,
            336: 33555456,
            352: 34604032,
            368: 1049601,
            384: 1025,
            400: 34604033,
            416: 1049600,
            432: 1,
            448: 0,
            464: 34603008,
            480: 33554433,
            496: 1024,
            264: 1049600,
            280: 33555457,
            296: 34603009,
            312: 1,
            328: 33554432,
            344: 1048576,
            360: 1025,
            376: 34604032,
            392: 33554433,
            408: 34603008,
            424: 0,
            440: 34604033,
            456: 1049601,
            472: 1024,
            488: 33555456,
            504: 1048577
          },
          {
            0: 134219808,
            1: 131072,
            2: 134217728,
            3: 32,
            4: 131104,
            5: 134350880,
            6: 134350848,
            7: 2048,
            8: 134348800,
            9: 134219776,
            10: 133120,
            11: 134348832,
            12: 2080,
            13: 0,
            14: 134217760,
            15: 133152,
            2147483648: 2048,
            2147483649: 134350880,
            2147483650: 134219808,
            2147483651: 134217728,
            2147483652: 134348800,
            2147483653: 133120,
            2147483654: 133152,
            2147483655: 32,
            2147483656: 134217760,
            2147483657: 2080,
            2147483658: 131104,
            2147483659: 134350848,
            2147483660: 0,
            2147483661: 134348832,
            2147483662: 134219776,
            2147483663: 131072,
            16: 133152,
            17: 134350848,
            18: 32,
            19: 2048,
            20: 134219776,
            21: 134217760,
            22: 134348832,
            23: 131072,
            24: 0,
            25: 131104,
            26: 134348800,
            27: 134219808,
            28: 134350880,
            29: 133120,
            30: 2080,
            31: 134217728,
            2147483664: 131072,
            2147483665: 2048,
            2147483666: 134348832,
            2147483667: 133152,
            2147483668: 32,
            2147483669: 134348800,
            2147483670: 134217728,
            2147483671: 134219808,
            2147483672: 134350880,
            2147483673: 134217760,
            2147483674: 134219776,
            2147483675: 0,
            2147483676: 133120,
            2147483677: 2080,
            2147483678: 131104,
            2147483679: 134350848
          }
        ], p = [
          4160749569,
          528482304,
          33030144,
          2064384,
          129024,
          8064,
          504,
          2147483679
        ], C = c.DES = v.extend({
          _doReset: function() {
            for (var H = this._key, u = H.words, w = [], b = 0; b < 56; b++) {
              var N = x[b] - 1;
              w[b] = u[N >>> 5] >>> 31 - N % 32 & 1;
            }
            for (var $ = this._subKeys = [], P = 0; P < 16; P++) {
              for (var o = $[P] = [], l = d[P], b = 0; b < 24; b++)
                o[b / 6 | 0] |= w[(f[b] - 1 + l) % 28] << 31 - b % 6, o[4 + (b / 6 | 0)] |= w[28 + (f[b + 24] - 1 + l) % 28] << 31 - b % 6;
              o[0] = o[0] << 1 | o[0] >>> 31;
              for (var b = 1; b < 7; b++)
                o[b] = o[b] >>> (b - 1) * 4 + 3;
              o[7] = o[7] << 5 | o[7] >>> 27;
            }
            for (var a = this._invSubKeys = [], b = 0; b < 16; b++)
              a[b] = $[15 - b];
          },
          encryptBlock: function(H, u) {
            this._doCryptBlock(H, u, this._subKeys);
          },
          decryptBlock: function(H, u) {
            this._doCryptBlock(H, u, this._invSubKeys);
          },
          _doCryptBlock: function(H, u, w) {
            this._lBlock = H[u], this._rBlock = H[u + 1], y.call(this, 4, 252645135), y.call(this, 16, 65535), B.call(this, 2, 858993459), B.call(this, 8, 16711935), y.call(this, 1, 1431655765);
            for (var b = 0; b < 16; b++) {
              for (var N = w[b], $ = this._lBlock, P = this._rBlock, o = 0, l = 0; l < 8; l++)
                o |= E[l][((P ^ N[l]) & p[l]) >>> 0];
              this._lBlock = P, this._rBlock = $ ^ o;
            }
            var a = this._lBlock;
            this._lBlock = this._rBlock, this._rBlock = a, y.call(this, 1, 1431655765), B.call(this, 8, 16711935), B.call(this, 2, 858993459), y.call(this, 16, 65535), y.call(this, 4, 252645135), H[u] = this._lBlock, H[u + 1] = this._rBlock;
          },
          keySize: 64 / 32,
          ivSize: 64 / 32,
          blockSize: 64 / 32
        });
        function y(H, u) {
          var w = (this._lBlock >>> H ^ this._rBlock) & u;
          this._rBlock ^= w, this._lBlock ^= w << H;
        }
        function B(H, u) {
          var w = (this._rBlock >>> H ^ this._lBlock) & u;
          this._lBlock ^= w, this._rBlock ^= w << H;
        }
        e.DES = v._createHelper(C);
        var A = c.TripleDES = v.extend({
          _doReset: function() {
            var H = this._key, u = H.words;
            if (u.length !== 2 && u.length !== 4 && u.length < 6)
              throw new Error("Invalid key length - 3DES requires the key length to be 64, 128, 192 or >192.");
            var w = u.slice(0, 2), b = u.length < 4 ? u.slice(0, 2) : u.slice(2, 4), N = u.length < 6 ? u.slice(0, 2) : u.slice(4, 6);
            this._des1 = C.createEncryptor(i.create(w)), this._des2 = C.createEncryptor(i.create(b)), this._des3 = C.createEncryptor(i.create(N));
          },
          encryptBlock: function(H, u) {
            this._des1.encryptBlock(H, u), this._des2.decryptBlock(H, u), this._des3.encryptBlock(H, u);
          },
          decryptBlock: function(H, u) {
            this._des3.decryptBlock(H, u), this._des2.encryptBlock(H, u), this._des1.decryptBlock(H, u);
          },
          keySize: 192 / 32,
          ivSize: 64 / 32,
          blockSize: 64 / 32
        });
        e.TripleDES = v._createHelper(A);
      }(), n.TripleDES;
    });
  }(We)), We.exports;
}
var Ge = { exports: {} }, ar;
function Mn() {
  return ar || (ar = 1, function(t, s) {
    (function(n, e, r) {
      t.exports = e(j(), D0(), F0(), H0(), o0());
    })(G, function(n) {
      return function() {
        var e = n, r = e.lib, i = r.StreamCipher, v = e.algo, c = v.RC4 = i.extend({
          _doReset: function() {
            for (var d = this._key, E = d.words, p = d.sigBytes, C = this._S = [], y = 0; y < 256; y++)
              C[y] = y;
            for (var y = 0, B = 0; y < 256; y++) {
              var A = y % p, H = E[A >>> 2] >>> 24 - A % 4 * 8 & 255;
              B = (B + C[y] + H) % 256;
              var u = C[y];
              C[y] = C[B], C[B] = u;
            }
            this._i = this._j = 0;
          },
          _doProcessBlock: function(d, E) {
            d[E] ^= x.call(this);
          },
          keySize: 256 / 32,
          ivSize: 0
        });
        function x() {
          for (var d = this._S, E = this._i, p = this._j, C = 0, y = 0; y < 4; y++) {
            E = (E + 1) % 256, p = (p + d[E]) % 256;
            var B = d[E];
            d[E] = d[p], d[p] = B, C |= d[(d[E] + d[p]) % 256] << 24 - y * 8;
          }
          return this._i = E, this._j = p, C;
        }
        e.RC4 = i._createHelper(c);
        var f = v.RC4Drop = c.extend({
          cfg: c.cfg.extend({
            drop: 192
          }),
          _doReset: function() {
            c._doReset.call(this);
            for (var d = this.cfg.drop; d > 0; d--)
              x.call(this);
          }
        });
        e.RC4Drop = i._createHelper(f);
      }(), n.RC4;
    });
  }(Ge)), Ge.exports;
}
var Ke = { exports: {} }, sr;
function Dn() {
  return sr || (sr = 1, function(t, s) {
    (function(n, e, r) {
      t.exports = e(j(), D0(), F0(), H0(), o0());
    })(G, function(n) {
      return function() {
        var e = n, r = e.lib, i = r.StreamCipher, v = e.algo, c = [], x = [], f = [], d = v.Rabbit = i.extend({
          _doReset: function() {
            for (var p = this._key.words, C = this.cfg.iv, y = 0; y < 4; y++)
              p[y] = (p[y] << 8 | p[y] >>> 24) & 16711935 | (p[y] << 24 | p[y] >>> 8) & 4278255360;
            var B = this._X = [
              p[0],
              p[3] << 16 | p[2] >>> 16,
              p[1],
              p[0] << 16 | p[3] >>> 16,
              p[2],
              p[1] << 16 | p[0] >>> 16,
              p[3],
              p[2] << 16 | p[1] >>> 16
            ], A = this._C = [
              p[2] << 16 | p[2] >>> 16,
              p[0] & 4294901760 | p[1] & 65535,
              p[3] << 16 | p[3] >>> 16,
              p[1] & 4294901760 | p[2] & 65535,
              p[0] << 16 | p[0] >>> 16,
              p[2] & 4294901760 | p[3] & 65535,
              p[1] << 16 | p[1] >>> 16,
              p[3] & 4294901760 | p[0] & 65535
            ];
            this._b = 0;
            for (var y = 0; y < 4; y++)
              E.call(this);
            for (var y = 0; y < 8; y++)
              A[y] ^= B[y + 4 & 7];
            if (C) {
              var H = C.words, u = H[0], w = H[1], b = (u << 8 | u >>> 24) & 16711935 | (u << 24 | u >>> 8) & 4278255360, N = (w << 8 | w >>> 24) & 16711935 | (w << 24 | w >>> 8) & 4278255360, $ = b >>> 16 | N & 4294901760, P = N << 16 | b & 65535;
              A[0] ^= b, A[1] ^= $, A[2] ^= N, A[3] ^= P, A[4] ^= b, A[5] ^= $, A[6] ^= N, A[7] ^= P;
              for (var y = 0; y < 4; y++)
                E.call(this);
            }
          },
          _doProcessBlock: function(p, C) {
            var y = this._X;
            E.call(this), c[0] = y[0] ^ y[5] >>> 16 ^ y[3] << 16, c[1] = y[2] ^ y[7] >>> 16 ^ y[5] << 16, c[2] = y[4] ^ y[1] >>> 16 ^ y[7] << 16, c[3] = y[6] ^ y[3] >>> 16 ^ y[1] << 16;
            for (var B = 0; B < 4; B++)
              c[B] = (c[B] << 8 | c[B] >>> 24) & 16711935 | (c[B] << 24 | c[B] >>> 8) & 4278255360, p[C + B] ^= c[B];
          },
          blockSize: 128 / 32,
          ivSize: 64 / 32
        });
        function E() {
          for (var p = this._X, C = this._C, y = 0; y < 8; y++)
            x[y] = C[y];
          C[0] = C[0] + 1295307597 + this._b | 0, C[1] = C[1] + 3545052371 + (C[0] >>> 0 < x[0] >>> 0 ? 1 : 0) | 0, C[2] = C[2] + 886263092 + (C[1] >>> 0 < x[1] >>> 0 ? 1 : 0) | 0, C[3] = C[3] + 1295307597 + (C[2] >>> 0 < x[2] >>> 0 ? 1 : 0) | 0, C[4] = C[4] + 3545052371 + (C[3] >>> 0 < x[3] >>> 0 ? 1 : 0) | 0, C[5] = C[5] + 886263092 + (C[4] >>> 0 < x[4] >>> 0 ? 1 : 0) | 0, C[6] = C[6] + 1295307597 + (C[5] >>> 0 < x[5] >>> 0 ? 1 : 0) | 0, C[7] = C[7] + 3545052371 + (C[6] >>> 0 < x[6] >>> 0 ? 1 : 0) | 0, this._b = C[7] >>> 0 < x[7] >>> 0 ? 1 : 0;
          for (var y = 0; y < 8; y++) {
            var B = p[y] + C[y], A = B & 65535, H = B >>> 16, u = ((A * A >>> 17) + A * H >>> 15) + H * H, w = ((B & 4294901760) * B | 0) + ((B & 65535) * B | 0);
            f[y] = u ^ w;
          }
          p[0] = f[0] + (f[7] << 16 | f[7] >>> 16) + (f[6] << 16 | f[6] >>> 16) | 0, p[1] = f[1] + (f[0] << 8 | f[0] >>> 24) + f[7] | 0, p[2] = f[2] + (f[1] << 16 | f[1] >>> 16) + (f[0] << 16 | f[0] >>> 16) | 0, p[3] = f[3] + (f[2] << 8 | f[2] >>> 24) + f[1] | 0, p[4] = f[4] + (f[3] << 16 | f[3] >>> 16) + (f[2] << 16 | f[2] >>> 16) | 0, p[5] = f[5] + (f[4] << 8 | f[4] >>> 24) + f[3] | 0, p[6] = f[6] + (f[5] << 16 | f[5] >>> 16) + (f[4] << 16 | f[4] >>> 16) | 0, p[7] = f[7] + (f[6] << 8 | f[6] >>> 24) + f[5] | 0;
        }
        e.Rabbit = i._createHelper(d);
      }(), n.Rabbit;
    });
  }(Ke)), Ke.exports;
}
var je = { exports: {} }, cr;
function Fn() {
  return cr || (cr = 1, function(t, s) {
    (function(n, e, r) {
      t.exports = e(j(), D0(), F0(), H0(), o0());
    })(G, function(n) {
      return function() {
        var e = n, r = e.lib, i = r.StreamCipher, v = e.algo, c = [], x = [], f = [], d = v.RabbitLegacy = i.extend({
          _doReset: function() {
            var p = this._key.words, C = this.cfg.iv, y = this._X = [
              p[0],
              p[3] << 16 | p[2] >>> 16,
              p[1],
              p[0] << 16 | p[3] >>> 16,
              p[2],
              p[1] << 16 | p[0] >>> 16,
              p[3],
              p[2] << 16 | p[1] >>> 16
            ], B = this._C = [
              p[2] << 16 | p[2] >>> 16,
              p[0] & 4294901760 | p[1] & 65535,
              p[3] << 16 | p[3] >>> 16,
              p[1] & 4294901760 | p[2] & 65535,
              p[0] << 16 | p[0] >>> 16,
              p[2] & 4294901760 | p[3] & 65535,
              p[1] << 16 | p[1] >>> 16,
              p[3] & 4294901760 | p[0] & 65535
            ];
            this._b = 0;
            for (var A = 0; A < 4; A++)
              E.call(this);
            for (var A = 0; A < 8; A++)
              B[A] ^= y[A + 4 & 7];
            if (C) {
              var H = C.words, u = H[0], w = H[1], b = (u << 8 | u >>> 24) & 16711935 | (u << 24 | u >>> 8) & 4278255360, N = (w << 8 | w >>> 24) & 16711935 | (w << 24 | w >>> 8) & 4278255360, $ = b >>> 16 | N & 4294901760, P = N << 16 | b & 65535;
              B[0] ^= b, B[1] ^= $, B[2] ^= N, B[3] ^= P, B[4] ^= b, B[5] ^= $, B[6] ^= N, B[7] ^= P;
              for (var A = 0; A < 4; A++)
                E.call(this);
            }
          },
          _doProcessBlock: function(p, C) {
            var y = this._X;
            E.call(this), c[0] = y[0] ^ y[5] >>> 16 ^ y[3] << 16, c[1] = y[2] ^ y[7] >>> 16 ^ y[5] << 16, c[2] = y[4] ^ y[1] >>> 16 ^ y[7] << 16, c[3] = y[6] ^ y[3] >>> 16 ^ y[1] << 16;
            for (var B = 0; B < 4; B++)
              c[B] = (c[B] << 8 | c[B] >>> 24) & 16711935 | (c[B] << 24 | c[B] >>> 8) & 4278255360, p[C + B] ^= c[B];
          },
          blockSize: 128 / 32,
          ivSize: 64 / 32
        });
        function E() {
          for (var p = this._X, C = this._C, y = 0; y < 8; y++)
            x[y] = C[y];
          C[0] = C[0] + 1295307597 + this._b | 0, C[1] = C[1] + 3545052371 + (C[0] >>> 0 < x[0] >>> 0 ? 1 : 0) | 0, C[2] = C[2] + 886263092 + (C[1] >>> 0 < x[1] >>> 0 ? 1 : 0) | 0, C[3] = C[3] + 1295307597 + (C[2] >>> 0 < x[2] >>> 0 ? 1 : 0) | 0, C[4] = C[4] + 3545052371 + (C[3] >>> 0 < x[3] >>> 0 ? 1 : 0) | 0, C[5] = C[5] + 886263092 + (C[4] >>> 0 < x[4] >>> 0 ? 1 : 0) | 0, C[6] = C[6] + 1295307597 + (C[5] >>> 0 < x[5] >>> 0 ? 1 : 0) | 0, C[7] = C[7] + 3545052371 + (C[6] >>> 0 < x[6] >>> 0 ? 1 : 0) | 0, this._b = C[7] >>> 0 < x[7] >>> 0 ? 1 : 0;
          for (var y = 0; y < 8; y++) {
            var B = p[y] + C[y], A = B & 65535, H = B >>> 16, u = ((A * A >>> 17) + A * H >>> 15) + H * H, w = ((B & 4294901760) * B | 0) + ((B & 65535) * B | 0);
            f[y] = u ^ w;
          }
          p[0] = f[0] + (f[7] << 16 | f[7] >>> 16) + (f[6] << 16 | f[6] >>> 16) | 0, p[1] = f[1] + (f[0] << 8 | f[0] >>> 24) + f[7] | 0, p[2] = f[2] + (f[1] << 16 | f[1] >>> 16) + (f[0] << 16 | f[0] >>> 16) | 0, p[3] = f[3] + (f[2] << 8 | f[2] >>> 24) + f[1] | 0, p[4] = f[4] + (f[3] << 16 | f[3] >>> 16) + (f[2] << 16 | f[2] >>> 16) | 0, p[5] = f[5] + (f[4] << 8 | f[4] >>> 24) + f[3] | 0, p[6] = f[6] + (f[5] << 16 | f[5] >>> 16) + (f[4] << 16 | f[4] >>> 16) | 0, p[7] = f[7] + (f[6] << 8 | f[6] >>> 24) + f[5] | 0;
        }
        e.RabbitLegacy = i._createHelper(d);
      }(), n.RabbitLegacy;
    });
  }(je)), je.exports;
}
(function(t, s) {
  (function(n, e, r) {
    t.exports = e(j(), ce(), pn(), gn(), D0(), _n(), F0(), lt(), _r(), Cn(), Cr(), yn(), wn(), mn(), ut(), bn(), H0(), o0(), Bn(), kn(), Ln(), En(), An(), Sn(), Hn(), In(), $n(), Rn(), Nn(), Pn(), Tn(), Mn(), Dn(), Fn());
  })(G, function(n) {
    return n;
  });
})(gr);
function zn(t) {
  for (var s = 5381, n = t.length; n; )
    s = s * 33 ^ t.charCodeAt(--n);
  return s >>> 0;
}
var On = zn;
const Un = (t, s, n) => [
  [t, s, n],
  [(t + 120) % 360, s, n],
  [(t + 240) % 360, s, n]
];
var qn = Un;
const Ze = (t, s, n) => (n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? t + (s - t) * 6 * n : n < 1 / 2 ? s : n < 2 / 3 ? t + (s - t) * (2 / 3 - n) * 6 : t), Vn = (t, s, n) => {
  let e, r, i;
  if (t = t / 360, s == 0)
    e = r = i = n;
  else {
    const v = n < 0.5 ? n * (1 + s) : n + s - n * s, c = 2 * n - v;
    e = Ze(c, v, t + 1 / 3), r = Ze(c, v, t), i = Ze(c, v, t - 1 / 3);
  }
  return [
    Math.max(0, Math.min(Math.round(e * 255), 255)),
    Math.max(0, Math.min(Math.round(r * 255), 255)),
    Math.max(0, Math.min(Math.round(i * 255), 255))
  ];
};
var Wn = Vn;
const Gn = On, Kn = qn, fr = Wn, jn = () => Math.floor(Math.random() * Date.now()), Zn = (t, s) => {
  const n = Gn(t), e = Kn(n % 360, 1, 0.5), r = fr(e[0][0], e[0][1], e[0][2]), i = fr(e[1][0], e[1][1], e[1][2]), v = `rgb(${r[0]}, ${r[1]}, ${r[2]})`, c = `rgb(${i[0]}, ${i[1]}, ${i[2]})`, x = jn();
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg ${s != null ? `width="${s}px" height="${s}px"` : ""} viewBox="0 0 80 80" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient x1="0%" y1="0%" x2="100%" y2="100%" id="${x}">
      <stop stop-color="${v}" offset="0%"></stop>
      <stop stop-color="${c}" offset="100%"></stop>
    </linearGradient>
  </defs>
  <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
    <rect id="Rectangle" fill="url(#${x})" x="0" y="0" width="80" height="80"></rect>
  </g>
</svg>`;
};
var Xn = Zn;
const Yn = ["innerHTML"], ca = /* @__PURE__ */ e0({
  __name: "IgntProfileIcon",
  props: {
    address: {
      type: String,
      default: "Demo Account"
    }
  },
  setup(t) {
    const s = t, n = () => Xn(gr.exports.MD5(s.address) + "", 64);
    return (e, r) => (W(), K("div", {
      class: "avatar",
      innerHTML: n()
    }, null, 8, Yn));
  }
});
const Qn = e0({
  name: "IgntSearchIcon"
}), Jn = { class: "search-icon" }, eo = {
  width: "15",
  height: "15",
  viewBox: "0 0 15 15",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  style: { width: "1em", height: "1em" }
}, to = /* @__PURE__ */ X("path", {
  d: "M6.5 12.5C9.81371 12.5 12.5 9.81371 12.5 6.5C12.5 3.18629 9.81371 0.5 6.5 0.5C3.18629 0.5 0.5 3.18629 0.5 6.5C0.5 9.81371 3.18629 12.5 6.5 12.5Z",
  stroke: "currentColor",
  "stroke-miterlimit": "10",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, null, -1), ro = /* @__PURE__ */ X("path", {
  d: "M14.5002 14.5002L10.7422 10.7422",
  stroke: "currentColor",
  "stroke-miterlimit": "10",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, null, -1), no = [
  to,
  ro
];
function oo(t, s, n, e, r, i) {
  return W(), K("span", Jn, [
    (W(), K("svg", eo, no))
  ]);
}
const fa = /* @__PURE__ */ n0(Qn, [["render", oo]]), io = e0({
  name: "IgntTimesIcon"
}), ao = {
  width: "16",
  height: "16",
  viewBox: "0 0 16 16",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  style: { width: "1em", height: "1em" }
}, so = /* @__PURE__ */ X("path", {
  d: "M15 1L1 15",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-miterlimit": "10",
  "stroke-linecap": "round"
}, null, -1), co = /* @__PURE__ */ X("path", {
  d: "M15 15L1 1",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-miterlimit": "10",
  "stroke-linecap": "round"
}, null, -1), fo = [
  so,
  co
];
function lo(t, s, n, e, r, i) {
  return W(), K("svg", ao, fo);
}
const uo = /* @__PURE__ */ n0(io, [["render", lo]]), xo = e0({
  name: "IgntTrashIcon"
}), ho = {
  width: "48",
  height: "48",
  viewBox: "0 0 48 48",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  style: { width: "1em", height: "1em" }
}, vo = /* @__PURE__ */ X("path", {
  d: "M6 12H10H42",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, null, -1), po = /* @__PURE__ */ X("path", {
  d: "M16 12V8C16 6.93913 16.4214 5.92172 17.1716 5.17157C17.9217 4.42143 18.9391 4 20 4H28C29.0609 4 30.0783 4.42143 30.8284 5.17157C31.5786 5.92172 32 6.93913 32 8V12M38 12V40C38 41.0609 37.5786 42.0783 36.8284 42.8284C36.0783 43.5786 35.0609 44 34 44H14C12.9391 44 11.9217 43.5786 11.1716 42.8284C10.4214 42.0783 10 41.0609 10 40V12H38Z",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, null, -1), go = /* @__PURE__ */ X("path", {
  d: "M20 22V34",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, null, -1), _o = /* @__PURE__ */ X("path", {
  d: "M28 22V34",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, null, -1), Co = [
  vo,
  po,
  go,
  _o
];
function yo(t, s, n, e, r, i) {
  return W(), K("svg", ho, Co);
}
const la = /* @__PURE__ */ n0(xo, [["render", yo]]), wo = e0({
  name: "IgntTxArrowIcon"
}), mo = {
  width: "16",
  height: "16",
  viewBox: "0 0 16 16",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  style: { width: "1em", height: "1em" }
}, bo = /* @__PURE__ */ X("path", {
  d: "M8 13V3",
  stroke: "currentColor",
  "stroke-width": "1.6",
  "stroke-miterlimit": "10",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, null, -1), Bo = /* @__PURE__ */ X("path", {
  d: "M4 6L8 2L12 6",
  stroke: "currentColor",
  "stroke-width": "1.6",
  "stroke-miterlimit": "10",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, null, -1), ko = [
  bo,
  Bo
];
function Lo(t, s, n, e, r, i) {
  return W(), K("svg", mo, ko);
}
const ua = /* @__PURE__ */ n0(wo, [["render", Lo]]), Eo = e0({
  name: "IgntWarningIcon"
}), Ao = {
  width: "48",
  height: "48",
  viewBox: "0 0 48 48",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  style: { width: "1em", height: "1em" }
}, So = /* @__PURE__ */ X("path", {
  d: "M24 36.5C24.5523 36.5 25 36.0523 25 35.5C25 34.9477 24.5523 34.5 24 34.5C23.4477 34.5 23 34.9477 23 35.5C23 36.0523 23.4477 36.5 24 36.5Z",
  fill: "currentColor"
}, null, -1), Ho = /* @__PURE__ */ X("path", {
  d: "M24 47C36.7025 47 47 36.7025 47 24C47 11.2975 36.7025 1 24 1C11.2975 1 1 11.2975 1 24C1 36.7025 11.2975 47 24 47Z",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, null, -1), Io = /* @__PURE__ */ X("path", {
  d: "M24 12V28",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, null, -1), $o = /* @__PURE__ */ X("path", {
  d: "M24 36.5C24.5523 36.5 25 36.0523 25 35.5C25 34.9477 24.5523 34.5 24 34.5C23.4477 34.5 23 34.9477 23 35.5C23 36.0523 23.4477 36.5 24 36.5Z",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, null, -1), Ro = [
  So,
  Ho,
  Io,
  $o
];
function No(t, s, n, e, r, i) {
  return W(), K("svg", Ao, Ro);
}
const xa = /* @__PURE__ */ n0(Eo, [["render", No]]);
var Po = /^-?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i, Xe = Math.ceil, p0 = Math.floor, a0 = "[BigNumber Error] ", lr = a0 + "Number primitive has more than 15 significant digits: ", h0 = 1e14, V = 14, Ye = 9007199254740991, Qe = [1, 10, 100, 1e3, 1e4, 1e5, 1e6, 1e7, 1e8, 1e9, 1e10, 1e11, 1e12, 1e13], B0 = 1e7, r0 = 1e9;
function yr(t) {
  var s, n, e, r = u.prototype = { constructor: u, toString: null, valueOf: null }, i = new u(1), v = 20, c = 4, x = -7, f = 21, d = -1e7, E = 1e7, p = !1, C = 1, y = 0, B = {
    prefix: "",
    groupSize: 3,
    secondaryGroupSize: 0,
    groupSeparator: ",",
    decimalSeparator: ".",
    fractionGroupSize: 0,
    fractionGroupSeparator: "\xA0",
    suffix: ""
  }, A = "0123456789abcdefghijklmnopqrstuvwxyz", H = !0;
  function u(o, l) {
    var a, h, g, _, L, m, k, I, S = this;
    if (!(S instanceof u))
      return new u(o, l);
    if (l == null) {
      if (o && o._isBigNumber === !0) {
        S.s = o.s, !o.c || o.e > E ? S.c = S.e = null : o.e < d ? S.c = [S.e = 0] : (S.e = o.e, S.c = o.c.slice());
        return;
      }
      if ((m = typeof o == "number") && o * 0 == 0) {
        if (S.s = 1 / o < 0 ? (o = -o, -1) : 1, o === ~~o) {
          for (_ = 0, L = o; L >= 10; L /= 10, _++)
            ;
          _ > E ? S.c = S.e = null : (S.e = _, S.c = [o]);
          return;
        }
        I = String(o);
      } else {
        if (!Po.test(I = String(o)))
          return e(S, I, m);
        S.s = I.charCodeAt(0) == 45 ? (I = I.slice(1), -1) : 1;
      }
      (_ = I.indexOf(".")) > -1 && (I = I.replace(".", "")), (L = I.search(/e/i)) > 0 ? (_ < 0 && (_ = L), _ += +I.slice(L + 1), I = I.substring(0, L)) : _ < 0 && (_ = I.length);
    } else {
      if (t0(l, 2, A.length, "Base"), l == 10 && H)
        return S = new u(o), $(S, v + S.e + 1, c);
      if (I = String(o), m = typeof o == "number") {
        if (o * 0 != 0)
          return e(S, I, m, l);
        if (S.s = 1 / o < 0 ? (I = I.slice(1), -1) : 1, u.DEBUG && I.replace(/^0\.0*|\./, "").length > 15)
          throw Error(lr + o);
      } else
        S.s = I.charCodeAt(0) === 45 ? (I = I.slice(1), -1) : 1;
      for (a = A.slice(0, l), _ = L = 0, k = I.length; L < k; L++)
        if (a.indexOf(h = I.charAt(L)) < 0) {
          if (h == ".") {
            if (L > _) {
              _ = k;
              continue;
            }
          } else if (!g && (I == I.toUpperCase() && (I = I.toLowerCase()) || I == I.toLowerCase() && (I = I.toUpperCase()))) {
            g = !0, L = -1, _ = 0;
            continue;
          }
          return e(S, String(o), m, l);
        }
      m = !1, I = n(I, l, 10, S.s), (_ = I.indexOf(".")) > -1 ? I = I.replace(".", "") : _ = I.length;
    }
    for (L = 0; I.charCodeAt(L) === 48; L++)
      ;
    for (k = I.length; I.charCodeAt(--k) === 48; )
      ;
    if (I = I.slice(L, ++k)) {
      if (k -= L, m && u.DEBUG && k > 15 && (o > Ye || o !== p0(o)))
        throw Error(lr + S.s * o);
      if ((_ = _ - L - 1) > E)
        S.c = S.e = null;
      else if (_ < d)
        S.c = [S.e = 0];
      else {
        if (S.e = _, S.c = [], L = (_ + 1) % V, _ < 0 && (L += V), L < k) {
          for (L && S.c.push(+I.slice(0, L)), k -= V; L < k; )
            S.c.push(+I.slice(L, L += V));
          L = V - (I = I.slice(L)).length;
        } else
          L -= k;
        for (; L--; I += "0")
          ;
        S.c.push(+I);
      }
    } else
      S.c = [S.e = 0];
  }
  u.clone = yr, u.ROUND_UP = 0, u.ROUND_DOWN = 1, u.ROUND_CEIL = 2, u.ROUND_FLOOR = 3, u.ROUND_HALF_UP = 4, u.ROUND_HALF_DOWN = 5, u.ROUND_HALF_EVEN = 6, u.ROUND_HALF_CEIL = 7, u.ROUND_HALF_FLOOR = 8, u.EUCLID = 9, u.config = u.set = function(o) {
    var l, a;
    if (o != null)
      if (typeof o == "object") {
        if (o.hasOwnProperty(l = "DECIMAL_PLACES") && (a = o[l], t0(a, 0, r0, l), v = a), o.hasOwnProperty(l = "ROUNDING_MODE") && (a = o[l], t0(a, 0, 8, l), c = a), o.hasOwnProperty(l = "EXPONENTIAL_AT") && (a = o[l], a && a.pop ? (t0(a[0], -r0, 0, l), t0(a[1], 0, r0, l), x = a[0], f = a[1]) : (t0(a, -r0, r0, l), x = -(f = a < 0 ? -a : a))), o.hasOwnProperty(l = "RANGE"))
          if (a = o[l], a && a.pop)
            t0(a[0], -r0, -1, l), t0(a[1], 1, r0, l), d = a[0], E = a[1];
          else if (t0(a, -r0, r0, l), a)
            d = -(E = a < 0 ? -a : a);
          else
            throw Error(a0 + l + " cannot be zero: " + a);
        if (o.hasOwnProperty(l = "CRYPTO"))
          if (a = o[l], a === !!a)
            if (a)
              if (typeof crypto < "u" && crypto && (crypto.getRandomValues || crypto.randomBytes))
                p = a;
              else
                throw p = !a, Error(a0 + "crypto unavailable");
            else
              p = a;
          else
            throw Error(a0 + l + " not true or false: " + a);
        if (o.hasOwnProperty(l = "MODULO_MODE") && (a = o[l], t0(a, 0, 9, l), C = a), o.hasOwnProperty(l = "POW_PRECISION") && (a = o[l], t0(a, 0, r0, l), y = a), o.hasOwnProperty(l = "FORMAT"))
          if (a = o[l], typeof a == "object")
            B = a;
          else
            throw Error(a0 + l + " not an object: " + a);
        if (o.hasOwnProperty(l = "ALPHABET"))
          if (a = o[l], typeof a == "string" && !/^.?$|[+\-.\s]|(.).*\1/.test(a))
            H = a.slice(0, 10) == "0123456789", A = a;
          else
            throw Error(a0 + l + " invalid: " + a);
      } else
        throw Error(a0 + "Object expected: " + o);
    return {
      DECIMAL_PLACES: v,
      ROUNDING_MODE: c,
      EXPONENTIAL_AT: [x, f],
      RANGE: [d, E],
      CRYPTO: p,
      MODULO_MODE: C,
      POW_PRECISION: y,
      FORMAT: B,
      ALPHABET: A
    };
  }, u.isBigNumber = function(o) {
    if (!o || o._isBigNumber !== !0)
      return !1;
    if (!u.DEBUG)
      return !0;
    var l, a, h = o.c, g = o.e, _ = o.s;
    e:
      if ({}.toString.call(h) == "[object Array]") {
        if ((_ === 1 || _ === -1) && g >= -r0 && g <= r0 && g === p0(g)) {
          if (h[0] === 0) {
            if (g === 0 && h.length === 1)
              return !0;
            break e;
          }
          if (l = (g + 1) % V, l < 1 && (l += V), String(h[0]).length == l) {
            for (l = 0; l < h.length; l++)
              if (a = h[l], a < 0 || a >= h0 || a !== p0(a))
                break e;
            if (a !== 0)
              return !0;
          }
        }
      } else if (h === null && g === null && (_ === null || _ === 1 || _ === -1))
        return !0;
    throw Error(a0 + "Invalid BigNumber: " + o);
  }, u.maximum = u.max = function() {
    return b(arguments, r.lt);
  }, u.minimum = u.min = function() {
    return b(arguments, r.gt);
  }, u.random = function() {
    var o = 9007199254740992, l = Math.random() * o & 2097151 ? function() {
      return p0(Math.random() * o);
    } : function() {
      return (Math.random() * 1073741824 | 0) * 8388608 + (Math.random() * 8388608 | 0);
    };
    return function(a) {
      var h, g, _, L, m, k = 0, I = [], S = new u(i);
      if (a == null ? a = v : t0(a, 0, r0), L = Xe(a / V), p)
        if (crypto.getRandomValues) {
          for (h = crypto.getRandomValues(new Uint32Array(L *= 2)); k < L; )
            m = h[k] * 131072 + (h[k + 1] >>> 11), m >= 9e15 ? (g = crypto.getRandomValues(new Uint32Array(2)), h[k] = g[0], h[k + 1] = g[1]) : (I.push(m % 1e14), k += 2);
          k = L / 2;
        } else if (crypto.randomBytes) {
          for (h = crypto.randomBytes(L *= 7); k < L; )
            m = (h[k] & 31) * 281474976710656 + h[k + 1] * 1099511627776 + h[k + 2] * 4294967296 + h[k + 3] * 16777216 + (h[k + 4] << 16) + (h[k + 5] << 8) + h[k + 6], m >= 9e15 ? crypto.randomBytes(7).copy(h, k) : (I.push(m % 1e14), k += 7);
          k = L / 7;
        } else
          throw p = !1, Error(a0 + "crypto unavailable");
      if (!p)
        for (; k < L; )
          m = l(), m < 9e15 && (I[k++] = m % 1e14);
      for (L = I[--k], a %= V, L && a && (m = Qe[V - a], I[k] = p0(L / m) * m); I[k] === 0; I.pop(), k--)
        ;
      if (k < 0)
        I = [_ = 0];
      else {
        for (_ = -1; I[0] === 0; I.splice(0, 1), _ -= V)
          ;
        for (k = 1, m = I[0]; m >= 10; m /= 10, k++)
          ;
        k < V && (_ -= V - k);
      }
      return S.e = _, S.c = I, S;
    };
  }(), u.sum = function() {
    for (var o = 1, l = arguments, a = new u(l[0]); o < l.length; )
      a = a.plus(l[o++]);
    return a;
  }, n = function() {
    var o = "0123456789";
    function l(a, h, g, _) {
      for (var L, m = [0], k, I = 0, S = a.length; I < S; ) {
        for (k = m.length; k--; m[k] *= h)
          ;
        for (m[0] += _.indexOf(a.charAt(I++)), L = 0; L < m.length; L++)
          m[L] > g - 1 && (m[L + 1] == null && (m[L + 1] = 0), m[L + 1] += m[L] / g | 0, m[L] %= g);
      }
      return m.reverse();
    }
    return function(a, h, g, _, L) {
      var m, k, I, S, T, z, R, M, F = a.indexOf("."), D = v, O = c;
      for (F >= 0 && (S = y, y = 0, a = a.replace(".", ""), M = new u(h), z = M.pow(a.length - F), y = S, M.c = l(
        w0(l0(z.c), z.e, "0"),
        10,
        g,
        o
      ), M.e = M.c.length), R = l(a, h, g, L ? (m = A, o) : (m = o, A)), I = S = R.length; R[--S] == 0; R.pop())
        ;
      if (!R[0])
        return m.charAt(0);
      if (F < 0 ? --I : (z.c = R, z.e = I, z.s = _, z = s(z, M, D, O, g), R = z.c, T = z.r, I = z.e), k = I + D + 1, F = R[k], S = g / 2, T = T || k < 0 || R[k + 1] != null, T = O < 4 ? (F != null || T) && (O == 0 || O == (z.s < 0 ? 3 : 2)) : F > S || F == S && (O == 4 || T || O == 6 && R[k - 1] & 1 || O == (z.s < 0 ? 8 : 7)), k < 1 || !R[0])
        a = T ? w0(m.charAt(1), -D, m.charAt(0)) : m.charAt(0);
      else {
        if (R.length = k, T)
          for (--g; ++R[--k] > g; )
            R[k] = 0, k || (++I, R = [1].concat(R));
        for (S = R.length; !R[--S]; )
          ;
        for (F = 0, a = ""; F <= S; a += m.charAt(R[F++]))
          ;
        a = w0(a, I, m.charAt(0));
      }
      return a;
    };
  }(), s = function() {
    function o(h, g, _) {
      var L, m, k, I, S = 0, T = h.length, z = g % B0, R = g / B0 | 0;
      for (h = h.slice(); T--; )
        k = h[T] % B0, I = h[T] / B0 | 0, L = R * k + I * z, m = z * k + L % B0 * B0 + S, S = (m / _ | 0) + (L / B0 | 0) + R * I, h[T] = m % _;
      return S && (h = [S].concat(h)), h;
    }
    function l(h, g, _, L) {
      var m, k;
      if (_ != L)
        k = _ > L ? 1 : -1;
      else
        for (m = k = 0; m < _; m++)
          if (h[m] != g[m]) {
            k = h[m] > g[m] ? 1 : -1;
            break;
          }
      return k;
    }
    function a(h, g, _, L) {
      for (var m = 0; _--; )
        h[_] -= m, m = h[_] < g[_] ? 1 : 0, h[_] = m * L + h[_] - g[_];
      for (; !h[0] && h.length > 1; h.splice(0, 1))
        ;
    }
    return function(h, g, _, L, m) {
      var k, I, S, T, z, R, M, F, D, O, U, Z, q, y0, v0, i0, x0, J = h.s == g.s ? 1 : -1, Y = h.c, Q = g.c;
      if (!Y || !Y[0] || !Q || !Q[0])
        return new u(
          !h.s || !g.s || (Y ? Q && Y[0] == Q[0] : !Q) ? NaN : Y && Y[0] == 0 || !Q ? J * 0 : J / 0
        );
      for (F = new u(J), D = F.c = [], I = h.e - g.e, J = _ + I + 1, m || (m = h0, I = u0(h.e / V) - u0(g.e / V), J = J / V | 0), S = 0; Q[S] == (Y[S] || 0); S++)
        ;
      if (Q[S] > (Y[S] || 0) && I--, J < 0)
        D.push(1), T = !0;
      else {
        for (y0 = Y.length, i0 = Q.length, S = 0, J += 2, z = p0(m / (Q[0] + 1)), z > 1 && (Q = o(Q, z, m), Y = o(Y, z, m), i0 = Q.length, y0 = Y.length), q = i0, O = Y.slice(0, i0), U = O.length; U < i0; O[U++] = 0)
          ;
        x0 = Q.slice(), x0 = [0].concat(x0), v0 = Q[0], Q[1] >= m / 2 && v0++;
        do {
          if (z = 0, k = l(Q, O, i0, U), k < 0) {
            if (Z = O[0], i0 != U && (Z = Z * m + (O[1] || 0)), z = p0(Z / v0), z > 1)
              for (z >= m && (z = m - 1), R = o(Q, z, m), M = R.length, U = O.length; l(R, O, M, U) == 1; )
                z--, a(R, i0 < M ? x0 : Q, M, m), M = R.length, k = 1;
            else
              z == 0 && (k = z = 1), R = Q.slice(), M = R.length;
            if (M < U && (R = [0].concat(R)), a(O, R, U, m), U = O.length, k == -1)
              for (; l(Q, O, i0, U) < 1; )
                z++, a(O, i0 < U ? x0 : Q, U, m), U = O.length;
          } else
            k === 0 && (z++, O = [0]);
          D[S++] = z, O[0] ? O[U++] = Y[q] || 0 : (O = [Y[q]], U = 1);
        } while ((q++ < y0 || O[0] != null) && J--);
        T = O[0] != null, D[0] || D.splice(0, 1);
      }
      if (m == h0) {
        for (S = 1, J = D[0]; J >= 10; J /= 10, S++)
          ;
        $(F, _ + (F.e = S + I * V - 1) + 1, L, T);
      } else
        F.e = I, F.r = +T;
      return F;
    };
  }();
  function w(o, l, a, h) {
    var g, _, L, m, k;
    if (a == null ? a = c : t0(a, 0, 8), !o.c)
      return o.toString();
    if (g = o.c[0], L = o.e, l == null)
      k = l0(o.c), k = h == 1 || h == 2 && (L <= x || L >= f) ? J0(k, L) : w0(k, L, "0");
    else if (o = $(new u(o), l, a), _ = o.e, k = l0(o.c), m = k.length, h == 1 || h == 2 && (l <= _ || _ <= x)) {
      for (; m < l; k += "0", m++)
        ;
      k = J0(k, _);
    } else if (l -= L, k = w0(k, _, "0"), _ + 1 > m) {
      if (--l > 0)
        for (k += "."; l--; k += "0")
          ;
    } else if (l += _ - m, l > 0)
      for (_ + 1 == m && (k += "."); l--; k += "0")
        ;
    return o.s < 0 && g ? "-" + k : k;
  }
  function b(o, l) {
    for (var a, h = 1, g = new u(o[0]); h < o.length; h++)
      if (a = new u(o[h]), a.s)
        l.call(g, a) && (g = a);
      else {
        g = a;
        break;
      }
    return g;
  }
  function N(o, l, a) {
    for (var h = 1, g = l.length; !l[--g]; l.pop())
      ;
    for (g = l[0]; g >= 10; g /= 10, h++)
      ;
    return (a = h + a * V - 1) > E ? o.c = o.e = null : a < d ? o.c = [o.e = 0] : (o.e = a, o.c = l), o;
  }
  e = function() {
    var o = /^(-?)0([xbo])(?=\w[\w.]*$)/i, l = /^([^.]+)\.$/, a = /^\.([^.]+)$/, h = /^-?(Infinity|NaN)$/, g = /^\s*\+(?=[\w.])|^\s+|\s+$/g;
    return function(_, L, m, k) {
      var I, S = m ? L : L.replace(g, "");
      if (h.test(S))
        _.s = isNaN(S) ? null : S < 0 ? -1 : 1;
      else {
        if (!m && (S = S.replace(o, function(T, z, R) {
          return I = (R = R.toLowerCase()) == "x" ? 16 : R == "b" ? 2 : 8, !k || k == I ? z : T;
        }), k && (I = k, S = S.replace(l, "$1").replace(a, "0.$1")), L != S))
          return new u(S, I);
        if (u.DEBUG)
          throw Error(a0 + "Not a" + (k ? " base " + k : "") + " number: " + L);
        _.s = null;
      }
      _.c = _.e = null;
    };
  }();
  function $(o, l, a, h) {
    var g, _, L, m, k, I, S, T = o.c, z = Qe;
    if (T) {
      e: {
        for (g = 1, m = T[0]; m >= 10; m /= 10, g++)
          ;
        if (_ = l - g, _ < 0)
          _ += V, L = l, k = T[I = 0], S = k / z[g - L - 1] % 10 | 0;
        else if (I = Xe((_ + 1) / V), I >= T.length)
          if (h) {
            for (; T.length <= I; T.push(0))
              ;
            k = S = 0, g = 1, _ %= V, L = _ - V + 1;
          } else
            break e;
        else {
          for (k = m = T[I], g = 1; m >= 10; m /= 10, g++)
            ;
          _ %= V, L = _ - V + g, S = L < 0 ? 0 : k / z[g - L - 1] % 10 | 0;
        }
        if (h = h || l < 0 || T[I + 1] != null || (L < 0 ? k : k % z[g - L - 1]), h = a < 4 ? (S || h) && (a == 0 || a == (o.s < 0 ? 3 : 2)) : S > 5 || S == 5 && (a == 4 || h || a == 6 && (_ > 0 ? L > 0 ? k / z[g - L] : 0 : T[I - 1]) % 10 & 1 || a == (o.s < 0 ? 8 : 7)), l < 1 || !T[0])
          return T.length = 0, h ? (l -= o.e + 1, T[0] = z[(V - l % V) % V], o.e = -l || 0) : T[0] = o.e = 0, o;
        if (_ == 0 ? (T.length = I, m = 1, I--) : (T.length = I + 1, m = z[V - _], T[I] = L > 0 ? p0(k / z[g - L] % z[L]) * m : 0), h)
          for (; ; )
            if (I == 0) {
              for (_ = 1, L = T[0]; L >= 10; L /= 10, _++)
                ;
              for (L = T[0] += m, m = 1; L >= 10; L /= 10, m++)
                ;
              _ != m && (o.e++, T[0] == h0 && (T[0] = 1));
              break;
            } else {
              if (T[I] += m, T[I] != h0)
                break;
              T[I--] = 0, m = 1;
            }
        for (_ = T.length; T[--_] === 0; T.pop())
          ;
      }
      o.e > E ? o.c = o.e = null : o.e < d && (o.c = [o.e = 0]);
    }
    return o;
  }
  function P(o) {
    var l, a = o.e;
    return a === null ? o.toString() : (l = l0(o.c), l = a <= x || a >= f ? J0(l, a) : w0(l, a, "0"), o.s < 0 ? "-" + l : l);
  }
  return r.absoluteValue = r.abs = function() {
    var o = new u(this);
    return o.s < 0 && (o.s = 1), o;
  }, r.comparedTo = function(o, l) {
    return R0(this, new u(o, l));
  }, r.decimalPlaces = r.dp = function(o, l) {
    var a, h, g, _ = this;
    if (o != null)
      return t0(o, 0, r0), l == null ? l = c : t0(l, 0, 8), $(new u(_), o + _.e + 1, l);
    if (!(a = _.c))
      return null;
    if (h = ((g = a.length - 1) - u0(this.e / V)) * V, g = a[g])
      for (; g % 10 == 0; g /= 10, h--)
        ;
    return h < 0 && (h = 0), h;
  }, r.dividedBy = r.div = function(o, l) {
    return s(this, new u(o, l), v, c);
  }, r.dividedToIntegerBy = r.idiv = function(o, l) {
    return s(this, new u(o, l), 0, 1);
  }, r.exponentiatedBy = r.pow = function(o, l) {
    var a, h, g, _, L, m, k, I, S, T = this;
    if (o = new u(o), o.c && !o.isInteger())
      throw Error(a0 + "Exponent not an integer: " + P(o));
    if (l != null && (l = new u(l)), m = o.e > 14, !T.c || !T.c[0] || T.c[0] == 1 && !T.e && T.c.length == 1 || !o.c || !o.c[0])
      return S = new u(Math.pow(+P(T), m ? 2 - Q0(o) : +P(o))), l ? S.mod(l) : S;
    if (k = o.s < 0, l) {
      if (l.c ? !l.c[0] : !l.s)
        return new u(NaN);
      h = !k && T.isInteger() && l.isInteger(), h && (T = T.mod(l));
    } else {
      if (o.e > 9 && (T.e > 0 || T.e < -1 || (T.e == 0 ? T.c[0] > 1 || m && T.c[1] >= 24e7 : T.c[0] < 8e13 || m && T.c[0] <= 9999975e7)))
        return _ = T.s < 0 && Q0(o) ? -0 : 0, T.e > -1 && (_ = 1 / _), new u(k ? 1 / _ : _);
      y && (_ = Xe(y / V + 2));
    }
    for (m ? (a = new u(0.5), k && (o.s = 1), I = Q0(o)) : (g = Math.abs(+P(o)), I = g % 2), S = new u(i); ; ) {
      if (I) {
        if (S = S.times(T), !S.c)
          break;
        _ ? S.c.length > _ && (S.c.length = _) : h && (S = S.mod(l));
      }
      if (g) {
        if (g = p0(g / 2), g === 0)
          break;
        I = g % 2;
      } else if (o = o.times(a), $(o, o.e + 1, 1), o.e > 14)
        I = Q0(o);
      else {
        if (g = +P(o), g === 0)
          break;
        I = g % 2;
      }
      T = T.times(T), _ ? T.c && T.c.length > _ && (T.c.length = _) : h && (T = T.mod(l));
    }
    return h ? S : (k && (S = i.div(S)), l ? S.mod(l) : _ ? $(S, y, c, L) : S);
  }, r.integerValue = function(o) {
    var l = new u(this);
    return o == null ? o = c : t0(o, 0, 8), $(l, l.e + 1, o);
  }, r.isEqualTo = r.eq = function(o, l) {
    return R0(this, new u(o, l)) === 0;
  }, r.isFinite = function() {
    return !!this.c;
  }, r.isGreaterThan = r.gt = function(o, l) {
    return R0(this, new u(o, l)) > 0;
  }, r.isGreaterThanOrEqualTo = r.gte = function(o, l) {
    return (l = R0(this, new u(o, l))) === 1 || l === 0;
  }, r.isInteger = function() {
    return !!this.c && u0(this.e / V) > this.c.length - 2;
  }, r.isLessThan = r.lt = function(o, l) {
    return R0(this, new u(o, l)) < 0;
  }, r.isLessThanOrEqualTo = r.lte = function(o, l) {
    return (l = R0(this, new u(o, l))) === -1 || l === 0;
  }, r.isNaN = function() {
    return !this.s;
  }, r.isNegative = function() {
    return this.s < 0;
  }, r.isPositive = function() {
    return this.s > 0;
  }, r.isZero = function() {
    return !!this.c && this.c[0] == 0;
  }, r.minus = function(o, l) {
    var a, h, g, _, L = this, m = L.s;
    if (o = new u(o, l), l = o.s, !m || !l)
      return new u(NaN);
    if (m != l)
      return o.s = -l, L.plus(o);
    var k = L.e / V, I = o.e / V, S = L.c, T = o.c;
    if (!k || !I) {
      if (!S || !T)
        return S ? (o.s = -l, o) : new u(T ? L : NaN);
      if (!S[0] || !T[0])
        return T[0] ? (o.s = -l, o) : new u(S[0] ? L : c == 3 ? -0 : 0);
    }
    if (k = u0(k), I = u0(I), S = S.slice(), m = k - I) {
      for ((_ = m < 0) ? (m = -m, g = S) : (I = k, g = T), g.reverse(), l = m; l--; g.push(0))
        ;
      g.reverse();
    } else
      for (h = (_ = (m = S.length) < (l = T.length)) ? m : l, m = l = 0; l < h; l++)
        if (S[l] != T[l]) {
          _ = S[l] < T[l];
          break;
        }
    if (_ && (g = S, S = T, T = g, o.s = -o.s), l = (h = T.length) - (a = S.length), l > 0)
      for (; l--; S[a++] = 0)
        ;
    for (l = h0 - 1; h > m; ) {
      if (S[--h] < T[h]) {
        for (a = h; a && !S[--a]; S[a] = l)
          ;
        --S[a], S[h] += h0;
      }
      S[h] -= T[h];
    }
    for (; S[0] == 0; S.splice(0, 1), --I)
      ;
    return S[0] ? N(o, S, I) : (o.s = c == 3 ? -1 : 1, o.c = [o.e = 0], o);
  }, r.modulo = r.mod = function(o, l) {
    var a, h, g = this;
    return o = new u(o, l), !g.c || !o.s || o.c && !o.c[0] ? new u(NaN) : !o.c || g.c && !g.c[0] ? new u(g) : (C == 9 ? (h = o.s, o.s = 1, a = s(g, o, 0, 3), o.s = h, a.s *= h) : a = s(g, o, 0, C), o = g.minus(a.times(o)), !o.c[0] && C == 1 && (o.s = g.s), o);
  }, r.multipliedBy = r.times = function(o, l) {
    var a, h, g, _, L, m, k, I, S, T, z, R, M, F, D, O = this, U = O.c, Z = (o = new u(o, l)).c;
    if (!U || !Z || !U[0] || !Z[0])
      return !O.s || !o.s || U && !U[0] && !Z || Z && !Z[0] && !U ? o.c = o.e = o.s = null : (o.s *= O.s, !U || !Z ? o.c = o.e = null : (o.c = [0], o.e = 0)), o;
    for (h = u0(O.e / V) + u0(o.e / V), o.s *= O.s, k = U.length, T = Z.length, k < T && (M = U, U = Z, Z = M, g = k, k = T, T = g), g = k + T, M = []; g--; M.push(0))
      ;
    for (F = h0, D = B0, g = T; --g >= 0; ) {
      for (a = 0, z = Z[g] % D, R = Z[g] / D | 0, L = k, _ = g + L; _ > g; )
        I = U[--L] % D, S = U[L] / D | 0, m = R * I + S * z, I = z * I + m % D * D + M[_] + a, a = (I / F | 0) + (m / D | 0) + R * S, M[_--] = I % F;
      M[_] = a;
    }
    return a ? ++h : M.splice(0, 1), N(o, M, h);
  }, r.negated = function() {
    var o = new u(this);
    return o.s = -o.s || null, o;
  }, r.plus = function(o, l) {
    var a, h = this, g = h.s;
    if (o = new u(o, l), l = o.s, !g || !l)
      return new u(NaN);
    if (g != l)
      return o.s = -l, h.minus(o);
    var _ = h.e / V, L = o.e / V, m = h.c, k = o.c;
    if (!_ || !L) {
      if (!m || !k)
        return new u(g / 0);
      if (!m[0] || !k[0])
        return k[0] ? o : new u(m[0] ? h : g * 0);
    }
    if (_ = u0(_), L = u0(L), m = m.slice(), g = _ - L) {
      for (g > 0 ? (L = _, a = k) : (g = -g, a = m), a.reverse(); g--; a.push(0))
        ;
      a.reverse();
    }
    for (g = m.length, l = k.length, g - l < 0 && (a = k, k = m, m = a, l = g), g = 0; l; )
      g = (m[--l] = m[l] + k[l] + g) / h0 | 0, m[l] = h0 === m[l] ? 0 : m[l] % h0;
    return g && (m = [g].concat(m), ++L), N(o, m, L);
  }, r.precision = r.sd = function(o, l) {
    var a, h, g, _ = this;
    if (o != null && o !== !!o)
      return t0(o, 1, r0), l == null ? l = c : t0(l, 0, 8), $(new u(_), o, l);
    if (!(a = _.c))
      return null;
    if (g = a.length - 1, h = g * V + 1, g = a[g]) {
      for (; g % 10 == 0; g /= 10, h--)
        ;
      for (g = a[0]; g >= 10; g /= 10, h++)
        ;
    }
    return o && _.e + 1 > h && (h = _.e + 1), h;
  }, r.shiftedBy = function(o) {
    return t0(o, -Ye, Ye), this.times("1e" + o);
  }, r.squareRoot = r.sqrt = function() {
    var o, l, a, h, g, _ = this, L = _.c, m = _.s, k = _.e, I = v + 4, S = new u("0.5");
    if (m !== 1 || !L || !L[0])
      return new u(!m || m < 0 && (!L || L[0]) ? NaN : L ? _ : 1 / 0);
    if (m = Math.sqrt(+P(_)), m == 0 || m == 1 / 0 ? (l = l0(L), (l.length + k) % 2 == 0 && (l += "0"), m = Math.sqrt(+l), k = u0((k + 1) / 2) - (k < 0 || k % 2), m == 1 / 0 ? l = "5e" + k : (l = m.toExponential(), l = l.slice(0, l.indexOf("e") + 1) + k), a = new u(l)) : a = new u(m + ""), a.c[0]) {
      for (k = a.e, m = k + I, m < 3 && (m = 0); ; )
        if (g = a, a = S.times(g.plus(s(_, g, I, 1))), l0(g.c).slice(0, m) === (l = l0(a.c)).slice(0, m))
          if (a.e < k && --m, l = l.slice(m - 3, m + 1), l == "9999" || !h && l == "4999") {
            if (!h && ($(g, g.e + v + 2, 0), g.times(g).eq(_))) {
              a = g;
              break;
            }
            I += 4, m += 4, h = 1;
          } else {
            (!+l || !+l.slice(1) && l.charAt(0) == "5") && ($(a, a.e + v + 2, 1), o = !a.times(a).eq(_));
            break;
          }
    }
    return $(a, a.e + v + 1, c, o);
  }, r.toExponential = function(o, l) {
    return o != null && (t0(o, 0, r0), o++), w(this, o, l, 1);
  }, r.toFixed = function(o, l) {
    return o != null && (t0(o, 0, r0), o = o + this.e + 1), w(this, o, l);
  }, r.toFormat = function(o, l, a) {
    var h, g = this;
    if (a == null)
      o != null && l && typeof l == "object" ? (a = l, l = null) : o && typeof o == "object" ? (a = o, o = l = null) : a = B;
    else if (typeof a != "object")
      throw Error(a0 + "Argument not an object: " + a);
    if (h = g.toFixed(o, l), g.c) {
      var _, L = h.split("."), m = +a.groupSize, k = +a.secondaryGroupSize, I = a.groupSeparator || "", S = L[0], T = L[1], z = g.s < 0, R = z ? S.slice(1) : S, M = R.length;
      if (k && (_ = m, m = k, k = _, M -= _), m > 0 && M > 0) {
        for (_ = M % m || m, S = R.substr(0, _); _ < M; _ += m)
          S += I + R.substr(_, m);
        k > 0 && (S += I + R.slice(_)), z && (S = "-" + S);
      }
      h = T ? S + (a.decimalSeparator || "") + ((k = +a.fractionGroupSize) ? T.replace(
        new RegExp("\\d{" + k + "}\\B", "g"),
        "$&" + (a.fractionGroupSeparator || "")
      ) : T) : S;
    }
    return (a.prefix || "") + h + (a.suffix || "");
  }, r.toFraction = function(o) {
    var l, a, h, g, _, L, m, k, I, S, T, z, R = this, M = R.c;
    if (o != null && (m = new u(o), !m.isInteger() && (m.c || m.s !== 1) || m.lt(i)))
      throw Error(a0 + "Argument " + (m.isInteger() ? "out of range: " : "not an integer: ") + P(m));
    if (!M)
      return new u(R);
    for (l = new u(i), I = a = new u(i), h = k = new u(i), z = l0(M), _ = l.e = z.length - R.e - 1, l.c[0] = Qe[(L = _ % V) < 0 ? V + L : L], o = !o || m.comparedTo(l) > 0 ? _ > 0 ? l : I : m, L = E, E = 1 / 0, m = new u(z), k.c[0] = 0; S = s(m, l, 0, 1), g = a.plus(S.times(h)), g.comparedTo(o) != 1; )
      a = h, h = g, I = k.plus(S.times(g = I)), k = g, l = m.minus(S.times(g = l)), m = g;
    return g = s(o.minus(a), h, 0, 1), k = k.plus(g.times(I)), a = a.plus(g.times(h)), k.s = I.s = R.s, _ = _ * 2, T = s(I, h, _, c).minus(R).abs().comparedTo(
      s(k, a, _, c).minus(R).abs()
    ) < 1 ? [I, h] : [k, a], E = L, T;
  }, r.toNumber = function() {
    return +P(this);
  }, r.toPrecision = function(o, l) {
    return o != null && t0(o, 1, r0), w(this, o, l, 2);
  }, r.toString = function(o) {
    var l, a = this, h = a.s, g = a.e;
    return g === null ? h ? (l = "Infinity", h < 0 && (l = "-" + l)) : l = "NaN" : (o == null ? l = g <= x || g >= f ? J0(l0(a.c), g) : w0(l0(a.c), g, "0") : o === 10 && H ? (a = $(new u(a), v + g + 1, c), l = w0(l0(a.c), a.e, "0")) : (t0(o, 2, A.length, "Base"), l = n(w0(l0(a.c), g, "0"), 10, o, h, !0)), h < 0 && a.c[0] && (l = "-" + l)), l;
  }, r.valueOf = r.toJSON = function() {
    return P(this);
  }, r._isBigNumber = !0, r[Symbol.toStringTag] = "BigNumber", r[Symbol.for("nodejs.util.inspect.custom")] = r.valueOf, t != null && u.set(t), u;
}
function u0(t) {
  var s = t | 0;
  return t > 0 || t === s ? s : s - 1;
}
function l0(t) {
  for (var s, n, e = 1, r = t.length, i = t[0] + ""; e < r; ) {
    for (s = t[e++] + "", n = V - s.length; n--; s = "0" + s)
      ;
    i += s;
  }
  for (r = i.length; i.charCodeAt(--r) === 48; )
    ;
  return i.slice(0, r + 1 || 1);
}
function R0(t, s) {
  var n, e, r = t.c, i = s.c, v = t.s, c = s.s, x = t.e, f = s.e;
  if (!v || !c)
    return null;
  if (n = r && !r[0], e = i && !i[0], n || e)
    return n ? e ? 0 : -c : v;
  if (v != c)
    return v;
  if (n = v < 0, e = x == f, !r || !i)
    return e ? 0 : !r ^ n ? 1 : -1;
  if (!e)
    return x > f ^ n ? 1 : -1;
  for (c = (x = r.length) < (f = i.length) ? x : f, v = 0; v < c; v++)
    if (r[v] != i[v])
      return r[v] > i[v] ^ n ? 1 : -1;
  return x == f ? 0 : x > f ^ n ? 1 : -1;
}
function t0(t, s, n, e) {
  if (t < s || t > n || t !== p0(t))
    throw Error(a0 + (e || "Argument") + (typeof t == "number" ? t < s || t > n ? " out of range: " : " not an integer: " : " not a primitive number: ") + String(t));
}
function Q0(t) {
  var s = t.c.length - 1;
  return u0(t.e / V) == s && t.c[s] % 2 != 0;
}
function J0(t, s) {
  return (t.length > 1 ? t.charAt(0) + "." + t.slice(1) : t) + (s < 0 ? "e" : "e+") + s;
}
function w0(t, s, n) {
  var e, r;
  if (s < 0) {
    for (r = n + "."; ++s; r += n)
      ;
    t = r + t;
  } else if (e = t.length, ++s > e) {
    for (r = n, s -= e; --s; r += n)
      ;
    t += r;
  } else
    s < e && (t = t.slice(0, s) + "." + t.slice(s));
  return t;
}
var To = yr();
const Mo = ["placeholder"], da = /* @__PURE__ */ e0({
  __name: "IgntAmountInput",
  props: {
    modelValue: {
      type: [String, Number],
      default: ""
    },
    maxDecimals: {
      type: Number,
      default: 0
    },
    placeholder: {
      type: String,
      default: "0"
    }
  },
  emits: ["update"],
  setup(t, { emit: s }) {
    const n = t;
    let e = L0(null), r = (v) => {
      let c = v;
      c = c.replace(",", "."), c = n.maxDecimals > 0 ? c : c.replace(".", ""), c = c.replace(/[^0-9.]/g, ""), c.startsWith(".") && (c = "0" + c), c.split("").filter((d) => d === ".").length > 1 && (c = c.replace(new RegExp("(?<=\\..*)\\.", "g"), ""));
      let [x, f] = c.split(".");
      return (f == null ? void 0 : f.length) > n.maxDecimals && (c = `${x}.${f.slice(0, n.maxDecimals)}`), c;
    }, i = hr({
      get: () => (n.modelValue || "").toString(),
      set: (v) => {
        if (!e.value)
          return;
        let c = v;
        for (; parseFloat(c) > Number.MAX_SAFE_INTEGER; )
          c = c.slice(0, -1);
        let x = r(c);
        s("update", new To(x));
        let f = e.value;
        f.value = x;
      }
    });
    return (v, c) => Xr((W(), K("input", {
      ref_key: "inputRef",
      ref: e,
      "onUpdate:modelValue": c[0] || (c[0] = (x) => Yr(i) ? i.value = x : i = x),
      placeholder: t.placeholder,
      type: "text",
      inputmode: "decimal",
      pattern: "^[0-9]*[.,]?[0-9]*$",
      autocomplete: "off",
      minlength: "1",
      spellcheck: "false"
    }, null, 8, Mo)), [
      [Qr, se(i)]
    ]);
  }
}), Do = { key: 0 }, Fo = {
  key: 1,
  class: "flex items-center justify-center"
}, zo = ["href", "disabled", "target"], Oo = { key: 0 }, Uo = {
  key: 1,
  class: "flex items-center justify-center"
}, qo = ["disabled"], Vo = { key: 0 }, Wo = {
  key: 1,
  class: "flex items-center justify-center"
}, ot = /* @__PURE__ */ e0({
  __name: "IgntButton",
  props: {
    busy: {
      type: Boolean,
      default: !1
    },
    link: {
      type: String
    },
    href: {
      type: String
    },
    target: {
      type: String
    },
    type: {
      type: String,
      default: () => "primary"
    },
    disabled: {
      type: Boolean,
      default: !1
    }
  },
  setup(t) {
    return (s, n) => {
      const e = vr("router-link");
      return t.link ? (W(), A0(e, {
        key: 0,
        to: t.link,
        class: S0(["font-normal text-md rounded-lg", {
          "bg-black border-black hover:scale-105 text-white-1000 hover:scale-105 px-5 h-12 border-2": t.type == "primary" && !t.busy && !t.disabled,
          "bg-white-1000 border-black hover:scale-105 text-black hover:scale-105 px-5 h-12 border-2": t.type == "secondary" && !t.busy && !t.disabled,
          "shadow-std text-center rounded-full text-sm font-medium mx-auto inset-x-0 p-2 hover:scale-105 hover:bg-gray-100": t.type == "plain" && !t.busy && !t.disabled,
          "bg-gray-300 border-gray-300 text-gray-600 px-5 h-12 border-2 opacity-50": t.type == "primary" && (t.busy || t.disabled),
          "bg-white-1000 border-gray-300 text-gray-300 px-5 h-12 border-2 opacity-50": t.type == "secondary" && (t.busy || t.disabled),
          "shadow-std text-center rounded-full text-sm text-gray-200 font-medium mx-auto inset-x-0 p-2 opacity-50": t.type == "plain" && (t.busy || t.disabled)
        }]),
        disabled: t.disabled || t.busy
      }, {
        default: g0(() => [
          t.busy ? (W(), K("div", Fo, [
            W0(he)
          ])) : (W(), K("span", Do, [
            _0(s.$slots, "default")
          ]))
        ]),
        _: 3
      }, 8, ["to", "class", "disabled"])) : t.href ? (W(), K("a", {
        key: 1,
        href: t.href,
        class: S0(["font-normal text-md rounded-lg", {
          "bg-black border-black hover:scale-105 text-white-1000 hover:scale-105 px-5 h-12 border-2": t.type == "primary" && !t.busy && !t.disabled,
          "bg-white-1000 border-black hover:scale-105 text-black hover:scale-105 px-5 h-12 border-2": t.type == "secondary" && !t.busy && !t.disabled,
          "shadow-std text-center rounded-full text-sm font-medium mx-auto inset-x-0 p-2 hover:scale-105 hover:bg-gray-100": t.type == "plain" && !t.busy && !t.disabled,
          "bg-gray-300 border-gray-300 text-gray-600 px-5 h-12 border-2 opacity-50": t.type == "primary" && (t.busy || t.disabled),
          "bg-white-1000 border-gray-300 text-gray-300 px-5 h-12 border-2 opacity-50": t.type == "secondary" && (t.busy || t.disabled),
          "shadow-std text-center rounded-full text-sm text-gray-200 font-medium mx-auto inset-x-0 p-2 opacity-50": t.type == "plain" && (t.busy || t.disabled)
        }]),
        disabled: t.disabled || t.busy,
        target: t.target
      }, [
        t.busy ? (W(), K("div", Uo, [
          W0(he)
        ])) : (W(), K("span", Oo, [
          _0(s.$slots, "default")
        ]))
      ], 10, zo)) : (W(), K("button", {
        key: 2,
        type: "button",
        class: S0(["font-normal text-md rounded-lg", {
          "bg-black border-black hover:scale-105 text-white-1000 hover:scale-105 px-5 h-12 border-2": t.type == "primary" && !t.busy && !t.disabled,
          "bg-white-1000 border-black hover:scale-105 text-black hover:scale-105 px-5 h-12 border-2": t.type == "secondary" && !t.busy && !t.disabled,
          "shadow-std text-center rounded-full text-sm font-medium mx-auto inset-x-0 p-2 hover:scale-105 hover:bg-gray-100": t.type == "plain" && !t.busy && !t.disabled,
          "bg-gray-300 border-gray-300 text-gray-600 px-5 h-12 border-2 opacity-50": t.type == "primary" && (t.busy || t.disabled),
          "bg-white-1000 border-gray-300 text-gray-300 px-5 h-12 border-2 opacity-50": t.type == "secondary" && (t.busy || t.disabled),
          "shadow-std text-center rounded-full text-sm text-gray-200 font-medium mx-auto inset-x-0 p-2 opacity-50": t.type == "plain" && (t.busy || t.disabled)
        }]),
        disabled: t.disabled || t.busy
      }, [
        t.busy ? (W(), K("div", Wo, [
          W0(he)
        ])) : (W(), K("span", Vo, [
          _0(s.$slots, "default")
        ]))
      ], 10, qo));
    };
  }
}), Go = {}, Ko = { class: "rounded-lg border border-gray-100 bg-white-1000" };
function jo(t, s) {
  return W(), K("div", Ko, [
    _0(t.$slots, "header"),
    _0(t.$slots, "default"),
    _0(t.$slots, "footer")
  ]);
}
const Zo = /* @__PURE__ */ n0(Go, [["render", jo]]), Xo = (t) => {
  const s = Boolean(navigator && "clipboard" in navigator), n = L0(!1);
  async function e(r) {
    s && (await navigator.clipboard.writeText(se(r)), n.value = !0, setTimeout(() => n.value = !1, (t == null ? void 0 : t.resetAfter) || 1e3));
  }
  return {
    isSupported: s,
    copy: e,
    hasCopied: n
  };
}, ha = /* @__PURE__ */ e0({
  __name: "IgntClipboard",
  props: {
    text: {
      type: String,
      default: () => ""
    }
  },
  setup(t) {
    const { copy: s } = Xo();
    return (n, e) => (W(), A0(ot, {
      onClick: e[0] || (e[0] = () => se(s)(t.text)),
      type: "plain"
    }, {
      default: g0(() => [
        W0(T1)
      ]),
      _: 1
    }));
  }
}), Yo = ["href"], va = /* @__PURE__ */ e0({
  __name: "IgntLink",
  props: {
    item: {
      type: Object,
      required: !0
    }
  },
  setup(t) {
    const s = t, n = o1(), e = L0(s.item), r = L0(!1);
    return ft(
      () => n.currentRoute.value.path,
      () => {
        e.value.to && e.value.to === n.currentRoute.value.path ? r.value = !0 : r.value = !1;
      }
    ), (i, v) => {
      const c = vr("RouterLink");
      return e.value.to ? (W(), A0(c, {
        key: 0,
        class: S0({ "opacity-50": !r.value }),
        activeClass: "opacity-100 font-medium",
        to: e.value.to
      }, {
        default: g0(() => [
          re(ne(e.value.label), 1)
        ]),
        _: 1
      }, 8, ["class", "to"])) : (W(), K("a", {
        key: 1,
        href: e.value.href
      }, ne(e.value.label), 9, Yo));
    };
  }
}), Qo = {}, Jo = { style: { display: "flex", "align-items": "center" } }, ei = /* @__PURE__ */ ae('<img src="/Electra5.png" alt="elcectra Logo"><span class="font-medium text-xxs text-black bg-gray-30 rounded-3xl px-2 py-1 ml-2.5"> Beta 1</span>', 2), ti = [
  ei
];
function ri(t, s) {
  return W(), K("div", Jo, ti);
}
const pa = /* @__PURE__ */ n0(Qo, [["render", ri]]), ni = { class: "text-center text-2xl font-semibold my-4 mb-6" }, oi = { class: "flex flex-col" }, ga = /* @__PURE__ */ e0({
  __name: "IgntModal",
  props: {
    visible: {
      type: Boolean,
      defaultsTo: !1
    },
    title: {
      type: String,
      defaultsTo: null
    },
    submitButton: {
      type: Boolean,
      defaultsTo: !0
    },
    closeIcon: {
      type: Boolean,
      defaultsTo: !0
    },
    cancelButton: {
      type: Boolean,
      defaultsTo: !0
    }
  },
  emits: ["close", "submit"],
  setup(t, { emit: s }) {
    const n = t, e = (r) => {
      r.key === "Escape" && s("close");
    };
    return ft(
      () => n.visible,
      (r) => {
        r ? document.addEventListener("keyup", e) : document.removeEventListener("keyup", e);
      }
    ), (r, i) => (W(), A0(Jr, { name: "modal-fade" }, {
      default: g0(() => [
        t.visible ? (W(), K("div", {
          key: 0,
          class: "fixed inset-0 flex justify-center items-center bg-gray-330 z-50",
          onClick: i[4] || (i[4] = (v) => s("close"))
        }, [
          X("div", {
            class: "shadow-std relative max-h-screen",
            role: "dialog",
            tabindex: "0",
            onClick: i[3] || (i[3] = e1(() => {
            }, ["stop"]))
          }, [
            W0(Zo, { class: "px-6 py-4 max-h-screen overflow-y-auto scroll-smooth" }, {
              header: g0(() => [
                _0(r.$slots, "header", {}, () => [
                  X("h3", ni, ne(t.title || "Default title"), 1)
                ])
              ]),
              default: g0(() => [
                _0(r.$slots, "body")
              ]),
              footer: g0(() => [
                _0(r.$slots, "footer", {}, () => [
                  X("div", oi, [
                    t.submitButton ? (W(), A0(ot, {
                      key: 0,
                      "aria-label": "Submit",
                      class: "mb-2",
                      type: "primary",
                      onClick: i[0] || (i[0] = (v) => s("submit"))
                    }, {
                      default: g0(() => [
                        re(" Save changes ")
                      ]),
                      _: 1
                    })) : Y0("", !0),
                    t.cancelButton ? (W(), A0(ot, {
                      key: 1,
                      "aria-label": "Close modal",
                      type: "secondary",
                      onClick: i[1] || (i[1] = (v) => s("close"))
                    }, {
                      default: g0(() => [
                        re(" Cancel ")
                      ]),
                      _: 1
                    })) : Y0("", !0)
                  ])
                ])
              ]),
              _: 3
            }),
            t.closeIcon ? (W(), A0(uo, {
              key: 0,
              class: "absolute right-8 top-10 cursor-pointer",
              onClick: i[2] || (i[2] = (v) => s("close"))
            }, {
              default: g0(() => [
                re(" Close ")
              ]),
              _: 1
            })) : Y0("", !0)
          ])
        ])) : Y0("", !0)
      ]),
      _: 3
    }));
  }
});
var ii = function() {
  return typeof Promise == "function" && Promise.prototype && Promise.prototype.then;
}, wr = {}, c0 = {};
let xt;
const ai = [
  0,
  26,
  44,
  70,
  100,
  134,
  172,
  196,
  242,
  292,
  346,
  404,
  466,
  532,
  581,
  655,
  733,
  815,
  901,
  991,
  1085,
  1156,
  1258,
  1364,
  1474,
  1588,
  1706,
  1828,
  1921,
  2051,
  2185,
  2323,
  2465,
  2611,
  2761,
  2876,
  3034,
  3196,
  3362,
  3532,
  3706
];
c0.getSymbolSize = function(s) {
  if (!s)
    throw new Error('"version" cannot be null or undefined');
  if (s < 1 || s > 40)
    throw new Error('"version" should be in range from 1 to 40');
  return s * 4 + 17;
};
c0.getSymbolTotalCodewords = function(s) {
  return ai[s];
};
c0.getBCHDigit = function(t) {
  let s = 0;
  for (; t !== 0; )
    s++, t >>>= 1;
  return s;
};
c0.setToSJISFunction = function(s) {
  if (typeof s != "function")
    throw new Error('"toSJISFunc" is not a valid function.');
  xt = s;
};
c0.isKanjiModeEnabled = function() {
  return typeof xt < "u";
};
c0.toSJIS = function(s) {
  return xt(s);
};
var fe = {};
(function(t) {
  t.L = { bit: 1 }, t.M = { bit: 0 }, t.Q = { bit: 3 }, t.H = { bit: 2 };
  function s(n) {
    if (typeof n != "string")
      throw new Error("Param is not a string");
    switch (n.toLowerCase()) {
      case "l":
      case "low":
        return t.L;
      case "m":
      case "medium":
        return t.M;
      case "q":
      case "quartile":
        return t.Q;
      case "h":
      case "high":
        return t.H;
      default:
        throw new Error("Unknown EC Level: " + n);
    }
  }
  t.isValid = function(e) {
    return e && typeof e.bit < "u" && e.bit >= 0 && e.bit < 4;
  }, t.from = function(e, r) {
    if (t.isValid(e))
      return e;
    try {
      return s(e);
    } catch {
      return r;
    }
  };
})(fe);
function mr() {
  this.buffer = [], this.length = 0;
}
mr.prototype = {
  get: function(t) {
    const s = Math.floor(t / 8);
    return (this.buffer[s] >>> 7 - t % 8 & 1) === 1;
  },
  put: function(t, s) {
    for (let n = 0; n < s; n++)
      this.putBit((t >>> s - n - 1 & 1) === 1);
  },
  getLengthInBits: function() {
    return this.length;
  },
  putBit: function(t) {
    const s = Math.floor(this.length / 8);
    this.buffer.length <= s && this.buffer.push(0), t && (this.buffer[s] |= 128 >>> this.length % 8), this.length++;
  }
};
var si = mr;
function j0(t) {
  if (!t || t < 1)
    throw new Error("BitMatrix size must be defined and greater than 0");
  this.size = t, this.data = new Uint8Array(t * t), this.reservedBit = new Uint8Array(t * t);
}
j0.prototype.set = function(t, s, n, e) {
  const r = t * this.size + s;
  this.data[r] = n, e && (this.reservedBit[r] = !0);
};
j0.prototype.get = function(t, s) {
  return this.data[t * this.size + s];
};
j0.prototype.xor = function(t, s, n) {
  this.data[t * this.size + s] ^= n;
};
j0.prototype.isReserved = function(t, s) {
  return this.reservedBit[t * this.size + s];
};
var ci = j0, br = {};
(function(t) {
  const s = c0.getSymbolSize;
  t.getRowColCoords = function(e) {
    if (e === 1)
      return [];
    const r = Math.floor(e / 7) + 2, i = s(e), v = i === 145 ? 26 : Math.ceil((i - 13) / (2 * r - 2)) * 2, c = [i - 7];
    for (let x = 1; x < r - 1; x++)
      c[x] = c[x - 1] - v;
    return c.push(6), c.reverse();
  }, t.getPositions = function(e) {
    const r = [], i = t.getRowColCoords(e), v = i.length;
    for (let c = 0; c < v; c++)
      for (let x = 0; x < v; x++)
        c === 0 && x === 0 || c === 0 && x === v - 1 || c === v - 1 && x === 0 || r.push([i[c], i[x]]);
    return r;
  };
})(br);
var Br = {};
const fi = c0.getSymbolSize, ur = 7;
Br.getPositions = function(s) {
  const n = fi(s);
  return [
    [0, 0],
    [n - ur, 0],
    [0, n - ur]
  ];
};
var kr = {};
(function(t) {
  t.Patterns = {
    PATTERN000: 0,
    PATTERN001: 1,
    PATTERN010: 2,
    PATTERN011: 3,
    PATTERN100: 4,
    PATTERN101: 5,
    PATTERN110: 6,
    PATTERN111: 7
  };
  const s = {
    N1: 3,
    N2: 3,
    N3: 40,
    N4: 10
  };
  t.isValid = function(r) {
    return r != null && r !== "" && !isNaN(r) && r >= 0 && r <= 7;
  }, t.from = function(r) {
    return t.isValid(r) ? parseInt(r, 10) : void 0;
  }, t.getPenaltyN1 = function(r) {
    const i = r.size;
    let v = 0, c = 0, x = 0, f = null, d = null;
    for (let E = 0; E < i; E++) {
      c = x = 0, f = d = null;
      for (let p = 0; p < i; p++) {
        let C = r.get(E, p);
        C === f ? c++ : (c >= 5 && (v += s.N1 + (c - 5)), f = C, c = 1), C = r.get(p, E), C === d ? x++ : (x >= 5 && (v += s.N1 + (x - 5)), d = C, x = 1);
      }
      c >= 5 && (v += s.N1 + (c - 5)), x >= 5 && (v += s.N1 + (x - 5));
    }
    return v;
  }, t.getPenaltyN2 = function(r) {
    const i = r.size;
    let v = 0;
    for (let c = 0; c < i - 1; c++)
      for (let x = 0; x < i - 1; x++) {
        const f = r.get(c, x) + r.get(c, x + 1) + r.get(c + 1, x) + r.get(c + 1, x + 1);
        (f === 4 || f === 0) && v++;
      }
    return v * s.N2;
  }, t.getPenaltyN3 = function(r) {
    const i = r.size;
    let v = 0, c = 0, x = 0;
    for (let f = 0; f < i; f++) {
      c = x = 0;
      for (let d = 0; d < i; d++)
        c = c << 1 & 2047 | r.get(f, d), d >= 10 && (c === 1488 || c === 93) && v++, x = x << 1 & 2047 | r.get(d, f), d >= 10 && (x === 1488 || x === 93) && v++;
    }
    return v * s.N3;
  }, t.getPenaltyN4 = function(r) {
    let i = 0;
    const v = r.data.length;
    for (let x = 0; x < v; x++)
      i += r.data[x];
    return Math.abs(Math.ceil(i * 100 / v / 5) - 10) * s.N4;
  };
  function n(e, r, i) {
    switch (e) {
      case t.Patterns.PATTERN000:
        return (r + i) % 2 === 0;
      case t.Patterns.PATTERN001:
        return r % 2 === 0;
      case t.Patterns.PATTERN010:
        return i % 3 === 0;
      case t.Patterns.PATTERN011:
        return (r + i) % 3 === 0;
      case t.Patterns.PATTERN100:
        return (Math.floor(r / 2) + Math.floor(i / 3)) % 2 === 0;
      case t.Patterns.PATTERN101:
        return r * i % 2 + r * i % 3 === 0;
      case t.Patterns.PATTERN110:
        return (r * i % 2 + r * i % 3) % 2 === 0;
      case t.Patterns.PATTERN111:
        return (r * i % 3 + (r + i) % 2) % 2 === 0;
      default:
        throw new Error("bad maskPattern:" + e);
    }
  }
  t.applyMask = function(r, i) {
    const v = i.size;
    for (let c = 0; c < v; c++)
      for (let x = 0; x < v; x++)
        i.isReserved(x, c) || i.xor(x, c, n(r, x, c));
  }, t.getBestMask = function(r, i) {
    const v = Object.keys(t.Patterns).length;
    let c = 0, x = 1 / 0;
    for (let f = 0; f < v; f++) {
      i(f), t.applyMask(f, r);
      const d = t.getPenaltyN1(r) + t.getPenaltyN2(r) + t.getPenaltyN3(r) + t.getPenaltyN4(r);
      t.applyMask(f, r), d < x && (x = d, c = f);
    }
    return c;
  };
})(kr);
var le = {};
const k0 = fe, ee = [
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  2,
  2,
  1,
  2,
  2,
  4,
  1,
  2,
  4,
  4,
  2,
  4,
  4,
  4,
  2,
  4,
  6,
  5,
  2,
  4,
  6,
  6,
  2,
  5,
  8,
  8,
  4,
  5,
  8,
  8,
  4,
  5,
  8,
  11,
  4,
  8,
  10,
  11,
  4,
  9,
  12,
  16,
  4,
  9,
  16,
  16,
  6,
  10,
  12,
  18,
  6,
  10,
  17,
  16,
  6,
  11,
  16,
  19,
  6,
  13,
  18,
  21,
  7,
  14,
  21,
  25,
  8,
  16,
  20,
  25,
  8,
  17,
  23,
  25,
  9,
  17,
  23,
  34,
  9,
  18,
  25,
  30,
  10,
  20,
  27,
  32,
  12,
  21,
  29,
  35,
  12,
  23,
  34,
  37,
  12,
  25,
  34,
  40,
  13,
  26,
  35,
  42,
  14,
  28,
  38,
  45,
  15,
  29,
  40,
  48,
  16,
  31,
  43,
  51,
  17,
  33,
  45,
  54,
  18,
  35,
  48,
  57,
  19,
  37,
  51,
  60,
  19,
  38,
  53,
  63,
  20,
  40,
  56,
  66,
  21,
  43,
  59,
  70,
  22,
  45,
  62,
  74,
  24,
  47,
  65,
  77,
  25,
  49,
  68,
  81
], te = [
  7,
  10,
  13,
  17,
  10,
  16,
  22,
  28,
  15,
  26,
  36,
  44,
  20,
  36,
  52,
  64,
  26,
  48,
  72,
  88,
  36,
  64,
  96,
  112,
  40,
  72,
  108,
  130,
  48,
  88,
  132,
  156,
  60,
  110,
  160,
  192,
  72,
  130,
  192,
  224,
  80,
  150,
  224,
  264,
  96,
  176,
  260,
  308,
  104,
  198,
  288,
  352,
  120,
  216,
  320,
  384,
  132,
  240,
  360,
  432,
  144,
  280,
  408,
  480,
  168,
  308,
  448,
  532,
  180,
  338,
  504,
  588,
  196,
  364,
  546,
  650,
  224,
  416,
  600,
  700,
  224,
  442,
  644,
  750,
  252,
  476,
  690,
  816,
  270,
  504,
  750,
  900,
  300,
  560,
  810,
  960,
  312,
  588,
  870,
  1050,
  336,
  644,
  952,
  1110,
  360,
  700,
  1020,
  1200,
  390,
  728,
  1050,
  1260,
  420,
  784,
  1140,
  1350,
  450,
  812,
  1200,
  1440,
  480,
  868,
  1290,
  1530,
  510,
  924,
  1350,
  1620,
  540,
  980,
  1440,
  1710,
  570,
  1036,
  1530,
  1800,
  570,
  1064,
  1590,
  1890,
  600,
  1120,
  1680,
  1980,
  630,
  1204,
  1770,
  2100,
  660,
  1260,
  1860,
  2220,
  720,
  1316,
  1950,
  2310,
  750,
  1372,
  2040,
  2430
];
le.getBlocksCount = function(s, n) {
  switch (n) {
    case k0.L:
      return ee[(s - 1) * 4 + 0];
    case k0.M:
      return ee[(s - 1) * 4 + 1];
    case k0.Q:
      return ee[(s - 1) * 4 + 2];
    case k0.H:
      return ee[(s - 1) * 4 + 3];
    default:
      return;
  }
};
le.getTotalCodewordsCount = function(s, n) {
  switch (n) {
    case k0.L:
      return te[(s - 1) * 4 + 0];
    case k0.M:
      return te[(s - 1) * 4 + 1];
    case k0.Q:
      return te[(s - 1) * 4 + 2];
    case k0.H:
      return te[(s - 1) * 4 + 3];
    default:
      return;
  }
};
var Lr = {}, ue = {};
const G0 = new Uint8Array(512), oe = new Uint8Array(256);
(function() {
  let s = 1;
  for (let n = 0; n < 255; n++)
    G0[n] = s, oe[s] = n, s <<= 1, s & 256 && (s ^= 285);
  for (let n = 255; n < 512; n++)
    G0[n] = G0[n - 255];
})();
ue.log = function(s) {
  if (s < 1)
    throw new Error("log(" + s + ")");
  return oe[s];
};
ue.exp = function(s) {
  return G0[s];
};
ue.mul = function(s, n) {
  return s === 0 || n === 0 ? 0 : G0[oe[s] + oe[n]];
};
(function(t) {
  const s = ue;
  t.mul = function(e, r) {
    const i = new Uint8Array(e.length + r.length - 1);
    for (let v = 0; v < e.length; v++)
      for (let c = 0; c < r.length; c++)
        i[v + c] ^= s.mul(e[v], r[c]);
    return i;
  }, t.mod = function(e, r) {
    let i = new Uint8Array(e);
    for (; i.length - r.length >= 0; ) {
      const v = i[0];
      for (let x = 0; x < r.length; x++)
        i[x] ^= s.mul(r[x], v);
      let c = 0;
      for (; c < i.length && i[c] === 0; )
        c++;
      i = i.slice(c);
    }
    return i;
  }, t.generateECPolynomial = function(e) {
    let r = new Uint8Array([1]);
    for (let i = 0; i < e; i++)
      r = t.mul(r, new Uint8Array([1, s.exp(i)]));
    return r;
  };
})(Lr);
const Er = Lr;
function dt(t) {
  this.genPoly = void 0, this.degree = t, this.degree && this.initialize(this.degree);
}
dt.prototype.initialize = function(s) {
  this.degree = s, this.genPoly = Er.generateECPolynomial(this.degree);
};
dt.prototype.encode = function(s) {
  if (!this.genPoly)
    throw new Error("Encoder not initialized");
  const n = new Uint8Array(s.length + this.degree);
  n.set(s);
  const e = Er.mod(n, this.genPoly), r = this.degree - e.length;
  if (r > 0) {
    const i = new Uint8Array(this.degree);
    return i.set(e, r), i;
  }
  return e;
};
var li = dt, Ar = {}, E0 = {}, ht = {};
ht.isValid = function(s) {
  return !isNaN(s) && s >= 1 && s <= 40;
};
var C0 = {};
const Sr = "[0-9]+", ui = "[A-Z $%*+\\-./:]+";
let K0 = "(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";
K0 = K0.replace(/u/g, "\\u");
const xi = "(?:(?![A-Z0-9 $%*+\\-./:]|" + K0 + `)(?:.|[\r
]))+`;
C0.KANJI = new RegExp(K0, "g");
C0.BYTE_KANJI = new RegExp("[^A-Z0-9 $%*+\\-./:]+", "g");
C0.BYTE = new RegExp(xi, "g");
C0.NUMERIC = new RegExp(Sr, "g");
C0.ALPHANUMERIC = new RegExp(ui, "g");
const di = new RegExp("^" + K0 + "$"), hi = new RegExp("^" + Sr + "$"), vi = new RegExp("^[A-Z0-9 $%*+\\-./:]+$");
C0.testKanji = function(s) {
  return di.test(s);
};
C0.testNumeric = function(s) {
  return hi.test(s);
};
C0.testAlphanumeric = function(s) {
  return vi.test(s);
};
(function(t) {
  const s = ht, n = C0;
  t.NUMERIC = {
    id: "Numeric",
    bit: 1 << 0,
    ccBits: [10, 12, 14]
  }, t.ALPHANUMERIC = {
    id: "Alphanumeric",
    bit: 1 << 1,
    ccBits: [9, 11, 13]
  }, t.BYTE = {
    id: "Byte",
    bit: 1 << 2,
    ccBits: [8, 16, 16]
  }, t.KANJI = {
    id: "Kanji",
    bit: 1 << 3,
    ccBits: [8, 10, 12]
  }, t.MIXED = {
    bit: -1
  }, t.getCharCountIndicator = function(i, v) {
    if (!i.ccBits)
      throw new Error("Invalid mode: " + i);
    if (!s.isValid(v))
      throw new Error("Invalid version: " + v);
    return v >= 1 && v < 10 ? i.ccBits[0] : v < 27 ? i.ccBits[1] : i.ccBits[2];
  }, t.getBestModeForData = function(i) {
    return n.testNumeric(i) ? t.NUMERIC : n.testAlphanumeric(i) ? t.ALPHANUMERIC : n.testKanji(i) ? t.KANJI : t.BYTE;
  }, t.toString = function(i) {
    if (i && i.id)
      return i.id;
    throw new Error("Invalid mode");
  }, t.isValid = function(i) {
    return i && i.bit && i.ccBits;
  };
  function e(r) {
    if (typeof r != "string")
      throw new Error("Param is not a string");
    switch (r.toLowerCase()) {
      case "numeric":
        return t.NUMERIC;
      case "alphanumeric":
        return t.ALPHANUMERIC;
      case "kanji":
        return t.KANJI;
      case "byte":
        return t.BYTE;
      default:
        throw new Error("Unknown mode: " + r);
    }
  }
  t.from = function(i, v) {
    if (t.isValid(i))
      return i;
    try {
      return e(i);
    } catch {
      return v;
    }
  };
})(E0);
(function(t) {
  const s = c0, n = le, e = fe, r = E0, i = ht, v = 1 << 12 | 1 << 11 | 1 << 10 | 1 << 9 | 1 << 8 | 1 << 5 | 1 << 2 | 1 << 0, c = s.getBCHDigit(v);
  function x(p, C, y) {
    for (let B = 1; B <= 40; B++)
      if (C <= t.getCapacity(B, y, p))
        return B;
  }
  function f(p, C) {
    return r.getCharCountIndicator(p, C) + 4;
  }
  function d(p, C) {
    let y = 0;
    return p.forEach(function(B) {
      const A = f(B.mode, C);
      y += A + B.getBitsLength();
    }), y;
  }
  function E(p, C) {
    for (let y = 1; y <= 40; y++)
      if (d(p, y) <= t.getCapacity(y, C, r.MIXED))
        return y;
  }
  t.from = function(C, y) {
    return i.isValid(C) ? parseInt(C, 10) : y;
  }, t.getCapacity = function(C, y, B) {
    if (!i.isValid(C))
      throw new Error("Invalid QR Code version");
    typeof B > "u" && (B = r.BYTE);
    const A = s.getSymbolTotalCodewords(C), H = n.getTotalCodewordsCount(C, y), u = (A - H) * 8;
    if (B === r.MIXED)
      return u;
    const w = u - f(B, C);
    switch (B) {
      case r.NUMERIC:
        return Math.floor(w / 10 * 3);
      case r.ALPHANUMERIC:
        return Math.floor(w / 11 * 2);
      case r.KANJI:
        return Math.floor(w / 13);
      case r.BYTE:
      default:
        return Math.floor(w / 8);
    }
  }, t.getBestVersionForData = function(C, y) {
    let B;
    const A = e.from(y, e.M);
    if (Array.isArray(C)) {
      if (C.length > 1)
        return E(C, A);
      if (C.length === 0)
        return 1;
      B = C[0];
    } else
      B = C;
    return x(B.mode, B.getLength(), A);
  }, t.getEncodedBits = function(C) {
    if (!i.isValid(C) || C < 7)
      throw new Error("Invalid QR Code version");
    let y = C << 12;
    for (; s.getBCHDigit(y) - c >= 0; )
      y ^= v << s.getBCHDigit(y) - c;
    return C << 12 | y;
  };
})(Ar);
var Hr = {};
const it = c0, Ir = 1 << 10 | 1 << 8 | 1 << 5 | 1 << 4 | 1 << 2 | 1 << 1 | 1 << 0, pi = 1 << 14 | 1 << 12 | 1 << 10 | 1 << 4 | 1 << 1, xr = it.getBCHDigit(Ir);
Hr.getEncodedBits = function(s, n) {
  const e = s.bit << 3 | n;
  let r = e << 10;
  for (; it.getBCHDigit(r) - xr >= 0; )
    r ^= Ir << it.getBCHDigit(r) - xr;
  return (e << 10 | r) ^ pi;
};
var $r = {};
const gi = E0;
function N0(t) {
  this.mode = gi.NUMERIC, this.data = t.toString();
}
N0.getBitsLength = function(s) {
  return 10 * Math.floor(s / 3) + (s % 3 ? s % 3 * 3 + 1 : 0);
};
N0.prototype.getLength = function() {
  return this.data.length;
};
N0.prototype.getBitsLength = function() {
  return N0.getBitsLength(this.data.length);
};
N0.prototype.write = function(s) {
  let n, e, r;
  for (n = 0; n + 3 <= this.data.length; n += 3)
    e = this.data.substr(n, 3), r = parseInt(e, 10), s.put(r, 10);
  const i = this.data.length - n;
  i > 0 && (e = this.data.substr(n), r = parseInt(e, 10), s.put(r, i * 3 + 1));
};
var _i = N0;
const Ci = E0, Je = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  " ",
  "$",
  "%",
  "*",
  "+",
  "-",
  ".",
  "/",
  ":"
];
function P0(t) {
  this.mode = Ci.ALPHANUMERIC, this.data = t;
}
P0.getBitsLength = function(s) {
  return 11 * Math.floor(s / 2) + 6 * (s % 2);
};
P0.prototype.getLength = function() {
  return this.data.length;
};
P0.prototype.getBitsLength = function() {
  return P0.getBitsLength(this.data.length);
};
P0.prototype.write = function(s) {
  let n;
  for (n = 0; n + 2 <= this.data.length; n += 2) {
    let e = Je.indexOf(this.data[n]) * 45;
    e += Je.indexOf(this.data[n + 1]), s.put(e, 11);
  }
  this.data.length % 2 && s.put(Je.indexOf(this.data[n]), 6);
};
var yi = P0, wi = function(s) {
  for (var n = [], e = s.length, r = 0; r < e; r++) {
    var i = s.charCodeAt(r);
    if (i >= 55296 && i <= 56319 && e > r + 1) {
      var v = s.charCodeAt(r + 1);
      v >= 56320 && v <= 57343 && (i = (i - 55296) * 1024 + v - 56320 + 65536, r += 1);
    }
    if (i < 128) {
      n.push(i);
      continue;
    }
    if (i < 2048) {
      n.push(i >> 6 | 192), n.push(i & 63 | 128);
      continue;
    }
    if (i < 55296 || i >= 57344 && i < 65536) {
      n.push(i >> 12 | 224), n.push(i >> 6 & 63 | 128), n.push(i & 63 | 128);
      continue;
    }
    if (i >= 65536 && i <= 1114111) {
      n.push(i >> 18 | 240), n.push(i >> 12 & 63 | 128), n.push(i >> 6 & 63 | 128), n.push(i & 63 | 128);
      continue;
    }
    n.push(239, 191, 189);
  }
  return new Uint8Array(n).buffer;
};
const mi = wi, bi = E0;
function T0(t) {
  this.mode = bi.BYTE, typeof t == "string" && (t = mi(t)), this.data = new Uint8Array(t);
}
T0.getBitsLength = function(s) {
  return s * 8;
};
T0.prototype.getLength = function() {
  return this.data.length;
};
T0.prototype.getBitsLength = function() {
  return T0.getBitsLength(this.data.length);
};
T0.prototype.write = function(t) {
  for (let s = 0, n = this.data.length; s < n; s++)
    t.put(this.data[s], 8);
};
var Bi = T0;
const ki = E0, Li = c0;
function M0(t) {
  this.mode = ki.KANJI, this.data = t;
}
M0.getBitsLength = function(s) {
  return s * 13;
};
M0.prototype.getLength = function() {
  return this.data.length;
};
M0.prototype.getBitsLength = function() {
  return M0.getBitsLength(this.data.length);
};
M0.prototype.write = function(t) {
  let s;
  for (s = 0; s < this.data.length; s++) {
    let n = Li.toSJIS(this.data[s]);
    if (n >= 33088 && n <= 40956)
      n -= 33088;
    else if (n >= 57408 && n <= 60351)
      n -= 49472;
    else
      throw new Error(
        "Invalid SJIS character: " + this.data[s] + `
Make sure your charset is UTF-8`
      );
    n = (n >>> 8 & 255) * 192 + (n & 255), t.put(n, 13);
  }
};
var Ei = M0, Rr = { exports: {} };
(function(t) {
  var s = {
    single_source_shortest_paths: function(n, e, r) {
      var i = {}, v = {};
      v[e] = 0;
      var c = s.PriorityQueue.make();
      c.push(e, 0);
      for (var x, f, d, E, p, C, y, B, A; !c.empty(); ) {
        x = c.pop(), f = x.value, E = x.cost, p = n[f] || {};
        for (d in p)
          p.hasOwnProperty(d) && (C = p[d], y = E + C, B = v[d], A = typeof v[d] > "u", (A || B > y) && (v[d] = y, c.push(d, y), i[d] = f));
      }
      if (typeof r < "u" && typeof v[r] > "u") {
        var H = ["Could not find a path from ", e, " to ", r, "."].join("");
        throw new Error(H);
      }
      return i;
    },
    extract_shortest_path_from_predecessor_list: function(n, e) {
      for (var r = [], i = e; i; )
        r.push(i), n[i], i = n[i];
      return r.reverse(), r;
    },
    find_path: function(n, e, r) {
      var i = s.single_source_shortest_paths(n, e, r);
      return s.extract_shortest_path_from_predecessor_list(
        i,
        r
      );
    },
    PriorityQueue: {
      make: function(n) {
        var e = s.PriorityQueue, r = {}, i;
        n = n || {};
        for (i in e)
          e.hasOwnProperty(i) && (r[i] = e[i]);
        return r.queue = [], r.sorter = n.sorter || e.default_sorter, r;
      },
      default_sorter: function(n, e) {
        return n.cost - e.cost;
      },
      push: function(n, e) {
        var r = { value: n, cost: e };
        this.queue.push(r), this.queue.sort(this.sorter);
      },
      pop: function() {
        return this.queue.shift();
      },
      empty: function() {
        return this.queue.length === 0;
      }
    }
  };
  t.exports = s;
})(Rr);
(function(t) {
  const s = E0, n = _i, e = yi, r = Bi, i = Ei, v = C0, c = c0, x = Rr.exports;
  function f(H) {
    return unescape(encodeURIComponent(H)).length;
  }
  function d(H, u, w) {
    const b = [];
    let N;
    for (; (N = H.exec(w)) !== null; )
      b.push({
        data: N[0],
        index: N.index,
        mode: u,
        length: N[0].length
      });
    return b;
  }
  function E(H) {
    const u = d(v.NUMERIC, s.NUMERIC, H), w = d(v.ALPHANUMERIC, s.ALPHANUMERIC, H);
    let b, N;
    return c.isKanjiModeEnabled() ? (b = d(v.BYTE, s.BYTE, H), N = d(v.KANJI, s.KANJI, H)) : (b = d(v.BYTE_KANJI, s.BYTE, H), N = []), u.concat(w, b, N).sort(function(P, o) {
      return P.index - o.index;
    }).map(function(P) {
      return {
        data: P.data,
        mode: P.mode,
        length: P.length
      };
    });
  }
  function p(H, u) {
    switch (u) {
      case s.NUMERIC:
        return n.getBitsLength(H);
      case s.ALPHANUMERIC:
        return e.getBitsLength(H);
      case s.KANJI:
        return i.getBitsLength(H);
      case s.BYTE:
        return r.getBitsLength(H);
    }
  }
  function C(H) {
    return H.reduce(function(u, w) {
      const b = u.length - 1 >= 0 ? u[u.length - 1] : null;
      return b && b.mode === w.mode ? (u[u.length - 1].data += w.data, u) : (u.push(w), u);
    }, []);
  }
  function y(H) {
    const u = [];
    for (let w = 0; w < H.length; w++) {
      const b = H[w];
      switch (b.mode) {
        case s.NUMERIC:
          u.push([
            b,
            { data: b.data, mode: s.ALPHANUMERIC, length: b.length },
            { data: b.data, mode: s.BYTE, length: b.length }
          ]);
          break;
        case s.ALPHANUMERIC:
          u.push([
            b,
            { data: b.data, mode: s.BYTE, length: b.length }
          ]);
          break;
        case s.KANJI:
          u.push([
            b,
            { data: b.data, mode: s.BYTE, length: f(b.data) }
          ]);
          break;
        case s.BYTE:
          u.push([
            { data: b.data, mode: s.BYTE, length: f(b.data) }
          ]);
      }
    }
    return u;
  }
  function B(H, u) {
    const w = {}, b = { start: {} };
    let N = ["start"];
    for (let $ = 0; $ < H.length; $++) {
      const P = H[$], o = [];
      for (let l = 0; l < P.length; l++) {
        const a = P[l], h = "" + $ + l;
        o.push(h), w[h] = { node: a, lastCount: 0 }, b[h] = {};
        for (let g = 0; g < N.length; g++) {
          const _ = N[g];
          w[_] && w[_].node.mode === a.mode ? (b[_][h] = p(w[_].lastCount + a.length, a.mode) - p(w[_].lastCount, a.mode), w[_].lastCount += a.length) : (w[_] && (w[_].lastCount = a.length), b[_][h] = p(a.length, a.mode) + 4 + s.getCharCountIndicator(a.mode, u));
        }
      }
      N = o;
    }
    for (let $ = 0; $ < N.length; $++)
      b[N[$]].end = 0;
    return { map: b, table: w };
  }
  function A(H, u) {
    let w;
    const b = s.getBestModeForData(H);
    if (w = s.from(u, b), w !== s.BYTE && w.bit < b.bit)
      throw new Error('"' + H + '" cannot be encoded with mode ' + s.toString(w) + `.
 Suggested mode is: ` + s.toString(b));
    switch (w === s.KANJI && !c.isKanjiModeEnabled() && (w = s.BYTE), w) {
      case s.NUMERIC:
        return new n(H);
      case s.ALPHANUMERIC:
        return new e(H);
      case s.KANJI:
        return new i(H);
      case s.BYTE:
        return new r(H);
    }
  }
  t.fromArray = function(u) {
    return u.reduce(function(w, b) {
      return typeof b == "string" ? w.push(A(b, null)) : b.data && w.push(A(b.data, b.mode)), w;
    }, []);
  }, t.fromString = function(u, w) {
    const b = E(u, c.isKanjiModeEnabled()), N = y(b), $ = B(N, w), P = x.find_path($.map, "start", "end"), o = [];
    for (let l = 1; l < P.length - 1; l++)
      o.push($.table[P[l]].node);
    return t.fromArray(C(o));
  }, t.rawSplit = function(u) {
    return t.fromArray(
      E(u, c.isKanjiModeEnabled())
    );
  };
})($r);
const xe = c0, et = fe, Ai = si, Si = ci, Hi = br, Ii = Br, at = kr, st = le, $i = li, ie = Ar, Ri = Hr, Ni = E0, tt = $r;
function Pi(t, s) {
  const n = t.size, e = Ii.getPositions(s);
  for (let r = 0; r < e.length; r++) {
    const i = e[r][0], v = e[r][1];
    for (let c = -1; c <= 7; c++)
      if (!(i + c <= -1 || n <= i + c))
        for (let x = -1; x <= 7; x++)
          v + x <= -1 || n <= v + x || (c >= 0 && c <= 6 && (x === 0 || x === 6) || x >= 0 && x <= 6 && (c === 0 || c === 6) || c >= 2 && c <= 4 && x >= 2 && x <= 4 ? t.set(i + c, v + x, !0, !0) : t.set(i + c, v + x, !1, !0));
  }
}
function Ti(t) {
  const s = t.size;
  for (let n = 8; n < s - 8; n++) {
    const e = n % 2 === 0;
    t.set(n, 6, e, !0), t.set(6, n, e, !0);
  }
}
function Mi(t, s) {
  const n = Hi.getPositions(s);
  for (let e = 0; e < n.length; e++) {
    const r = n[e][0], i = n[e][1];
    for (let v = -2; v <= 2; v++)
      for (let c = -2; c <= 2; c++)
        v === -2 || v === 2 || c === -2 || c === 2 || v === 0 && c === 0 ? t.set(r + v, i + c, !0, !0) : t.set(r + v, i + c, !1, !0);
  }
}
function Di(t, s) {
  const n = t.size, e = ie.getEncodedBits(s);
  let r, i, v;
  for (let c = 0; c < 18; c++)
    r = Math.floor(c / 3), i = c % 3 + n - 8 - 3, v = (e >> c & 1) === 1, t.set(r, i, v, !0), t.set(i, r, v, !0);
}
function rt(t, s, n) {
  const e = t.size, r = Ri.getEncodedBits(s, n);
  let i, v;
  for (i = 0; i < 15; i++)
    v = (r >> i & 1) === 1, i < 6 ? t.set(i, 8, v, !0) : i < 8 ? t.set(i + 1, 8, v, !0) : t.set(e - 15 + i, 8, v, !0), i < 8 ? t.set(8, e - i - 1, v, !0) : i < 9 ? t.set(8, 15 - i - 1 + 1, v, !0) : t.set(8, 15 - i - 1, v, !0);
  t.set(e - 8, 8, 1, !0);
}
function Fi(t, s) {
  const n = t.size;
  let e = -1, r = n - 1, i = 7, v = 0;
  for (let c = n - 1; c > 0; c -= 2)
    for (c === 6 && c--; ; ) {
      for (let x = 0; x < 2; x++)
        if (!t.isReserved(r, c - x)) {
          let f = !1;
          v < s.length && (f = (s[v] >>> i & 1) === 1), t.set(r, c - x, f), i--, i === -1 && (v++, i = 7);
        }
      if (r += e, r < 0 || n <= r) {
        r -= e, e = -e;
        break;
      }
    }
}
function zi(t, s, n) {
  const e = new Ai();
  n.forEach(function(x) {
    e.put(x.mode.bit, 4), e.put(x.getLength(), Ni.getCharCountIndicator(x.mode, t)), x.write(e);
  });
  const r = xe.getSymbolTotalCodewords(t), i = st.getTotalCodewordsCount(t, s), v = (r - i) * 8;
  for (e.getLengthInBits() + 4 <= v && e.put(0, 4); e.getLengthInBits() % 8 !== 0; )
    e.putBit(0);
  const c = (v - e.getLengthInBits()) / 8;
  for (let x = 0; x < c; x++)
    e.put(x % 2 ? 17 : 236, 8);
  return Oi(e, t, s);
}
function Oi(t, s, n) {
  const e = xe.getSymbolTotalCodewords(s), r = st.getTotalCodewordsCount(s, n), i = e - r, v = st.getBlocksCount(s, n), c = e % v, x = v - c, f = Math.floor(e / v), d = Math.floor(i / v), E = d + 1, p = f - d, C = new $i(p);
  let y = 0;
  const B = new Array(v), A = new Array(v);
  let H = 0;
  const u = new Uint8Array(t.buffer);
  for (let P = 0; P < v; P++) {
    const o = P < x ? d : E;
    B[P] = u.slice(y, y + o), A[P] = C.encode(B[P]), y += o, H = Math.max(H, o);
  }
  const w = new Uint8Array(e);
  let b = 0, N, $;
  for (N = 0; N < H; N++)
    for ($ = 0; $ < v; $++)
      N < B[$].length && (w[b++] = B[$][N]);
  for (N = 0; N < p; N++)
    for ($ = 0; $ < v; $++)
      w[b++] = A[$][N];
  return w;
}
function Ui(t, s, n, e) {
  let r;
  if (Array.isArray(t))
    r = tt.fromArray(t);
  else if (typeof t == "string") {
    let f = s;
    if (!f) {
      const d = tt.rawSplit(t);
      f = ie.getBestVersionForData(d, n);
    }
    r = tt.fromString(t, f || 40);
  } else
    throw new Error("Invalid data");
  const i = ie.getBestVersionForData(r, n);
  if (!i)
    throw new Error("The amount of data is too big to be stored in a QR Code");
  if (!s)
    s = i;
  else if (s < i)
    throw new Error(
      `
The chosen QR Code version cannot contain this amount of data.
Minimum version required to store current data is: ` + i + `.
`
    );
  const v = zi(s, n, r), c = xe.getSymbolSize(s), x = new Si(c);
  return Pi(x, s), Ti(x), Mi(x, s), rt(x, n, 0), s >= 7 && Di(x, s), Fi(x, v), isNaN(e) && (e = at.getBestMask(
    x,
    rt.bind(null, x, n)
  )), at.applyMask(e, x), rt(x, n, e), {
    modules: x,
    version: s,
    errorCorrectionLevel: n,
    maskPattern: e,
    segments: r
  };
}
wr.create = function(s, n) {
  if (typeof s > "u" || s === "")
    throw new Error("No input text");
  let e = et.M, r, i;
  return typeof n < "u" && (e = et.from(n.errorCorrectionLevel, et.M), r = ie.from(n.version), i = at.from(n.maskPattern), n.toSJISFunc && xe.setToSJISFunction(n.toSJISFunc)), Ui(s, r, e, i);
};
var Nr = {}, vt = {};
(function(t) {
  function s(n) {
    if (typeof n == "number" && (n = n.toString()), typeof n != "string")
      throw new Error("Color should be defined as hex string");
    let e = n.slice().replace("#", "").split("");
    if (e.length < 3 || e.length === 5 || e.length > 8)
      throw new Error("Invalid hex color: " + n);
    (e.length === 3 || e.length === 4) && (e = Array.prototype.concat.apply([], e.map(function(i) {
      return [i, i];
    }))), e.length === 6 && e.push("F", "F");
    const r = parseInt(e.join(""), 16);
    return {
      r: r >> 24 & 255,
      g: r >> 16 & 255,
      b: r >> 8 & 255,
      a: r & 255,
      hex: "#" + e.slice(0, 6).join("")
    };
  }
  t.getOptions = function(e) {
    e || (e = {}), e.color || (e.color = {});
    const r = typeof e.margin > "u" || e.margin === null || e.margin < 0 ? 4 : e.margin, i = e.width && e.width >= 21 ? e.width : void 0, v = e.scale || 4;
    return {
      width: i,
      scale: i ? 4 : v,
      margin: r,
      color: {
        dark: s(e.color.dark || "#000000ff"),
        light: s(e.color.light || "#ffffffff")
      },
      type: e.type,
      rendererOpts: e.rendererOpts || {}
    };
  }, t.getScale = function(e, r) {
    return r.width && r.width >= e + r.margin * 2 ? r.width / (e + r.margin * 2) : r.scale;
  }, t.getImageWidth = function(e, r) {
    const i = t.getScale(e, r);
    return Math.floor((e + r.margin * 2) * i);
  }, t.qrToImageData = function(e, r, i) {
    const v = r.modules.size, c = r.modules.data, x = t.getScale(v, i), f = Math.floor((v + i.margin * 2) * x), d = i.margin * x, E = [i.color.light, i.color.dark];
    for (let p = 0; p < f; p++)
      for (let C = 0; C < f; C++) {
        let y = (p * f + C) * 4, B = i.color.light;
        if (p >= d && C >= d && p < f - d && C < f - d) {
          const A = Math.floor((p - d) / x), H = Math.floor((C - d) / x);
          B = E[c[A * v + H] ? 1 : 0];
        }
        e[y++] = B.r, e[y++] = B.g, e[y++] = B.b, e[y] = B.a;
      }
  };
})(vt);
(function(t) {
  const s = vt;
  function n(r, i, v) {
    r.clearRect(0, 0, i.width, i.height), i.style || (i.style = {}), i.height = v, i.width = v, i.style.height = v + "px", i.style.width = v + "px";
  }
  function e() {
    try {
      return document.createElement("canvas");
    } catch {
      throw new Error("You need to specify a canvas element");
    }
  }
  t.render = function(i, v, c) {
    let x = c, f = v;
    typeof x > "u" && (!v || !v.getContext) && (x = v, v = void 0), v || (f = e()), x = s.getOptions(x);
    const d = s.getImageWidth(i.modules.size, x), E = f.getContext("2d"), p = E.createImageData(d, d);
    return s.qrToImageData(p.data, i, x), n(E, f, d), E.putImageData(p, 0, 0), f;
  }, t.renderToDataURL = function(i, v, c) {
    let x = c;
    typeof x > "u" && (!v || !v.getContext) && (x = v, v = void 0), x || (x = {});
    const f = t.render(i, v, x), d = x.type || "image/png", E = x.rendererOpts || {};
    return f.toDataURL(d, E.quality);
  };
})(Nr);
var Pr = {};
const qi = vt;
function dr(t, s) {
  const n = t.a / 255, e = s + '="' + t.hex + '"';
  return n < 1 ? e + " " + s + '-opacity="' + n.toFixed(2).slice(1) + '"' : e;
}
function nt(t, s, n) {
  let e = t + s;
  return typeof n < "u" && (e += " " + n), e;
}
function Vi(t, s, n) {
  let e = "", r = 0, i = !1, v = 0;
  for (let c = 0; c < t.length; c++) {
    const x = Math.floor(c % s), f = Math.floor(c / s);
    !x && !i && (i = !0), t[c] ? (v++, c > 0 && x > 0 && t[c - 1] || (e += i ? nt("M", x + n, 0.5 + f + n) : nt("m", r, 0), r = 0, i = !1), x + 1 < s && t[c + 1] || (e += nt("h", v), v = 0)) : r++;
  }
  return e;
}
Pr.render = function(s, n, e) {
  const r = qi.getOptions(n), i = s.modules.size, v = s.modules.data, c = i + r.margin * 2, x = r.color.light.a ? "<path " + dr(r.color.light, "fill") + ' d="M0 0h' + c + "v" + c + 'H0z"/>' : "", f = "<path " + dr(r.color.dark, "stroke") + ' d="' + Vi(v, i, r.margin) + '"/>', d = 'viewBox="0 0 ' + c + " " + c + '"', p = '<svg xmlns="http://www.w3.org/2000/svg" ' + (r.width ? 'width="' + r.width + '" height="' + r.width + '" ' : "") + d + ' shape-rendering="crispEdges">' + x + f + `</svg>
`;
  return typeof e == "function" && e(null, p), p;
};
const Wi = ii, ct = wr, Tr = Nr, Gi = Pr;
function pt(t, s, n, e, r) {
  const i = [].slice.call(arguments, 1), v = i.length, c = typeof i[v - 1] == "function";
  if (!c && !Wi())
    throw new Error("Callback required as last argument");
  if (c) {
    if (v < 2)
      throw new Error("Too few arguments provided");
    v === 2 ? (r = n, n = s, s = e = void 0) : v === 3 && (s.getContext && typeof r > "u" ? (r = e, e = void 0) : (r = e, e = n, n = s, s = void 0));
  } else {
    if (v < 1)
      throw new Error("Too few arguments provided");
    return v === 1 ? (n = s, s = e = void 0) : v === 2 && !s.getContext && (e = n, n = s, s = void 0), new Promise(function(x, f) {
      try {
        const d = ct.create(n, e);
        x(t(d, s, e));
      } catch (d) {
        f(d);
      }
    });
  }
  try {
    const x = ct.create(n, e);
    r(null, t(x, s, e));
  } catch (x) {
    r(x);
  }
}
ct.create;
var Ki = pt.bind(null, Tr.render);
pt.bind(null, Tr.renderToDataURL);
pt.bind(null, function(t, s, n) {
  return Gi.render(t, n);
});
const _a = /* @__PURE__ */ e0({
  __name: "IgntQRCode",
  props: {
    value: {
      type: String,
      default: ""
    },
    width: {
      type: Number,
      default: 100
    },
    background: {
      type: String,
      default: "#0000"
    },
    color: {
      type: String,
      default: "#000000ff"
    }
  },
  setup(t) {
    const s = t, n = L0(null), e = () => {
      const r = {
        margin: 0,
        width: s.width,
        color: {
          dark: s.color,
          light: s.background
        }
      };
      Ki(n.value, s.value, r);
    };
    return pr(e), ft(s, e), (r, i) => (W(), K("canvas", {
      ref_key: "canvas",
      ref: n,
      class: "qr-code"
    }, null, 512));
  }
}), ji = {
  class: "animate-spin",
  width: "32",
  height: "32",
  viewBox: "0 0 32 32",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  style: "width: 1em; height: 1em"
}, Zi = ["stroke-width"], Ca = /* @__PURE__ */ e0({
  __name: "IgntSpinner",
  props: {
    size: {
      type: Number,
      default: 32
    }
  },
  setup(t) {
    const s = t, n = hr(() => s.size > 32 ? 3 : 4);
    return (e, r) => (W(), K("svg", ji, [
      X("path", {
        d: "M30 16C30 8.26801 23.732 2 16 2C8.26801 2 2 8.26801 2 16C2 23.732 8.26801 30 16 30",
        stroke: "black",
        "stroke-width": se(n),
        "stroke-linecap": "round"
      }, null, 8, Zi)
    ]));
  }
});
const Xi = ["onClick"], ya = /* @__PURE__ */ e0({
  __name: "IgntTabs",
  props: {
    tabHeaderClasses: Array,
    tabLinkClasses: {
      type: Array,
      default: () => []
    },
    activeLinkClasses: {
      type: Array,
      default: () => []
    },
    inactiveLinkClasses: {
      type: Array,
      default: () => []
    },
    tabContentClasses: Array
  },
  setup(t) {
    const s = t1(), n = L0([]), e = L0(null), r = L0(0), i = (v) => {
      var c, x, f;
      r.value = v, Array.from((x = (c = e.value) == null ? void 0 : c.children) != null ? x : []).forEach(
        (d) => d.classList.remove("is-active")
      ), (f = e.value) == null || f.children[v].classList.add("is-active");
    };
    return pr(() => {
      s.default && (n.value = s.default().map((v) => {
        var c;
        return { title: (c = v.props) == null ? void 0 : c.tabTitle, content: v };
      })), i(r.value);
    }), (v, c) => (W(), K("div", null, [
      X("div", {
        class: S0(t.tabHeaderClasses)
      }, [
        (W(!0), K(r1, null, n1(n.value, (x, f) => (W(), K("a", {
          href: "javascript:void(0)",
          class: S0(
            r.value != f ? [...t.tabLinkClasses, ...t.inactiveLinkClasses] : [...t.tabLinkClasses, ...t.activeLinkClasses]
          ),
          key: f,
          onClick: () => {
            i(f);
          }
        }, ne(x.title), 11, Xi))), 128))
      ], 2),
      X("div", {
        class: S0(["tabsContent", t.tabContentClasses]),
        ref_key: "tabElement",
        ref: e
      }, [
        _0(v.$slots, "default")
      ], 2)
    ]));
  }
});
export {
  Ji as IgntAddIcon,
  da as IgntAmountInput,
  ea as IgntArrowIcon,
  ot as IgntButton,
  Zo as IgntCard,
  ta as IgntChevronDownIcon,
  ra as IgntChevronRightIcon,
  na as IgntClearIcon,
  ha as IgntClipboard,
  T1 as IgntCopyIcon,
  oa as IgntDotsIcon,
  ia as IgntExternalArrowIcon,
  aa as IgntFileIcon,
  sa as IgntKeplrIcon,
  va as IgntLink,
  he as IgntLoadingIcon,
  pa as IgntLogo,
  ga as IgntModal,
  ca as IgntProfileIcon,
  _a as IgntQRCode,
  fa as IgntSearchIcon,
  Ca as IgntSpinner,
  ya as IgntTabs,
  uo as IgntTimesIcon,
  la as IgntTrashIcon,
  ua as IgntTxArrowIcon,
  xa as IgntWarningIcon,
  Xo as useClipboard
};
