import { onMounted as je, openBlock as Ie, createElementBlock as He, renderSlot as qe } from "vue";
function me(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: Me } = Object.prototype, { getPrototypeOf: Z } = Object, I = ((e) => (t) => {
  const n = Me.call(t);
  return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), A = (e) => (e = e.toLowerCase(), (t) => I(t) === e), H = (e) => (t) => typeof t === e, { isArray: F } = Array, B = H("undefined");
function ze(e) {
  return e !== null && !B(e) && e.constructor !== null && !B(e.constructor) && R(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const ye = A("ArrayBuffer");
function Je(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && ye(e.buffer), t;
}
const $e = H("string"), R = H("function"), we = H("number"), q = (e) => e !== null && typeof e == "object", Ve = (e) => e === !0 || e === !1, L = (e) => {
  if (I(e) !== "object")
    return !1;
  const t = Z(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}, We = A("Date"), Ke = A("File"), ve = A("Blob"), Ge = A("FileList"), Xe = (e) => q(e) && R(e.pipe), Qe = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || R(e.append) && ((t = I(e)) === "formdata" || // detect form-data instance
  t === "object" && R(e.toString) && e.toString() === "[object FormData]"));
}, Ze = A("URLSearchParams"), Ye = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function _(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let r, s;
  if (typeof e != "object" && (e = [e]), F(e))
    for (r = 0, s = e.length; r < s; r++)
      t.call(null, e[r], r, e);
  else {
    const o = n ? Object.getOwnPropertyNames(e) : Object.keys(e), i = o.length;
    let u;
    for (r = 0; r < i; r++)
      u = o[r], t.call(null, e[u], u, e);
  }
}
function be(e, t) {
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length, s;
  for (; r-- > 0; )
    if (s = n[r], t === s.toLowerCase())
      return s;
  return null;
}
const Ee = (() => typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global)(), Se = (e) => !B(e) && e !== Ee;
function K() {
  const { caseless: e } = Se(this) && this || {}, t = {}, n = (r, s) => {
    const o = e && be(t, s) || s;
    L(t[o]) && L(r) ? t[o] = K(t[o], r) : L(r) ? t[o] = K({}, r) : F(r) ? t[o] = r.slice() : t[o] = r;
  };
  for (let r = 0, s = arguments.length; r < s; r++)
    arguments[r] && _(arguments[r], n);
  return t;
}
const et = (e, t, n, { allOwnKeys: r } = {}) => (_(t, (s, o) => {
  n && R(s) ? e[o] = me(s, n) : e[o] = s;
}, { allOwnKeys: r }), e), tt = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), nt = (e, t, n, r) => {
  e.prototype = Object.create(t.prototype, r), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), n && Object.assign(e.prototype, n);
}, rt = (e, t, n, r) => {
  let s, o, i;
  const u = {};
  if (t = t || {}, e == null)
    return t;
  do {
    for (s = Object.getOwnPropertyNames(e), o = s.length; o-- > 0; )
      i = s[o], (!r || r(i, e, t)) && !u[i] && (t[i] = e[i], u[i] = !0);
    e = n !== !1 && Z(e);
  } while (e && (!n || n(e, t)) && e !== Object.prototype);
  return t;
}, st = (e, t, n) => {
  e = String(e), (n === void 0 || n > e.length) && (n = e.length), n -= t.length;
  const r = e.indexOf(t, n);
  return r !== -1 && r === n;
}, ot = (e) => {
  if (!e)
    return null;
  if (F(e))
    return e;
  let t = e.length;
  if (!we(t))
    return null;
  const n = new Array(t);
  for (; t-- > 0; )
    n[t] = e[t];
  return n;
}, it = ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && Z(Uint8Array)), at = (e, t) => {
  const r = (e && e[Symbol.iterator]).call(e);
  let s;
  for (; (s = r.next()) && !s.done; ) {
    const o = s.value;
    t.call(e, o[0], o[1]);
  }
}, ct = (e, t) => {
  let n;
  const r = [];
  for (; (n = e.exec(t)) !== null; )
    r.push(n);
  return r;
}, ut = A("HTMLFormElement"), lt = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(n, r, s) {
    return r.toUpperCase() + s;
  }
), se = (({ hasOwnProperty: e }) => (t, n) => e.call(t, n))(Object.prototype), ft = A("RegExp"), Re = (e, t) => {
  const n = Object.getOwnPropertyDescriptors(e), r = {};
  _(n, (s, o) => {
    let i;
    (i = t(s, o, e)) !== !1 && (r[o] = i || s);
  }), Object.defineProperties(e, r);
}, dt = (e) => {
  Re(e, (t, n) => {
    if (R(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
      return !1;
    const r = e[n];
    if (R(r)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + n + "'");
      });
    }
  });
}, pt = (e, t) => {
  const n = {}, r = (s) => {
    s.forEach((o) => {
      n[o] = !0;
    });
  };
  return F(e) ? r(e) : r(String(e).split(t)), n;
}, ht = () => {
}, mt = (e, t) => (e = +e, Number.isFinite(e) ? e : t), J = "abcdefghijklmnopqrstuvwxyz", oe = "0123456789", Oe = {
  DIGIT: oe,
  ALPHA: J,
  ALPHA_DIGIT: J + J.toUpperCase() + oe
}, yt = (e = 16, t = Oe.ALPHA_DIGIT) => {
  let n = "";
  const { length: r } = t;
  for (; e--; )
    n += t[Math.random() * r | 0];
  return n;
};
function wt(e) {
  return !!(e && R(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator]);
}
const bt = (e) => {
  const t = new Array(10), n = (r, s) => {
    if (q(r)) {
      if (t.indexOf(r) >= 0)
        return;
      if (!("toJSON" in r)) {
        t[s] = r;
        const o = F(r) ? [] : {};
        return _(r, (i, u) => {
          const h = n(i, s + 1);
          !B(h) && (o[u] = h);
        }), t[s] = void 0, o;
      }
    }
    return r;
  };
  return n(e, 0);
}, Et = A("AsyncFunction"), St = (e) => e && (q(e) || R(e)) && R(e.then) && R(e.catch), a = {
  isArray: F,
  isArrayBuffer: ye,
  isBuffer: ze,
  isFormData: Qe,
  isArrayBufferView: Je,
  isString: $e,
  isNumber: we,
  isBoolean: Ve,
  isObject: q,
  isPlainObject: L,
  isUndefined: B,
  isDate: We,
  isFile: Ke,
  isBlob: ve,
  isRegExp: ft,
  isFunction: R,
  isStream: Xe,
  isURLSearchParams: Ze,
  isTypedArray: it,
  isFileList: Ge,
  forEach: _,
  merge: K,
  extend: et,
  trim: Ye,
  stripBOM: tt,
  inherits: nt,
  toFlatObject: rt,
  kindOf: I,
  kindOfTest: A,
  endsWith: st,
  toArray: ot,
  forEachEntry: at,
  matchAll: ct,
  isHTMLForm: ut,
  hasOwnProperty: se,
  hasOwnProp: se,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: Re,
  freezeMethods: dt,
  toObjectSet: pt,
  toCamelCase: lt,
  noop: ht,
  toFiniteNumber: mt,
  findKey: be,
  global: Ee,
  isContextDefined: Se,
  ALPHABET: Oe,
  generateString: yt,
  isSpecCompliantForm: wt,
  toJSONObject: bt,
  isAsyncFn: Et,
  isThenable: St
};
function m(e, t, n, r, s) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), n && (this.config = n), r && (this.request = r), s && (this.response = s);
}
a.inherits(m, Error, {
  toJSON: function() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: a.toJSONObject(this.config),
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    };
  }
});
const Ae = m.prototype, ge = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL"
  // eslint-disable-next-line func-names
].forEach((e) => {
  ge[e] = { value: e };
});
Object.defineProperties(m, ge);
Object.defineProperty(Ae, "isAxiosError", { value: !0 });
m.from = (e, t, n, r, s, o) => {
  const i = Object.create(Ae);
  return a.toFlatObject(e, i, function(h) {
    return h !== Error.prototype;
  }, (u) => u !== "isAxiosError"), m.call(i, e.message, t, n, r, s), i.cause = e, i.name = e.name, o && Object.assign(i, o), i;
};
const Rt = null;
function v(e) {
  return a.isPlainObject(e) || a.isArray(e);
}
function Te(e) {
  return a.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function ie(e, t, n) {
  return e ? e.concat(t).map(function(s, o) {
    return s = Te(s), !n && o ? "[" + s + "]" : s;
  }).join(n ? "." : "") : t;
}
function Ot(e) {
  return a.isArray(e) && !e.some(v);
}
const At = a.toFlatObject(a, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function M(e, t, n) {
  if (!a.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), n = a.toFlatObject(n, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(p, b) {
    return !a.isUndefined(b[p]);
  });
  const r = n.metaTokens, s = n.visitor || l, o = n.dots, i = n.indexes, h = (n.Blob || typeof Blob < "u" && Blob) && a.isSpecCompliantForm(t);
  if (!a.isFunction(s))
    throw new TypeError("visitor must be a function");
  function f(d) {
    if (d === null)
      return "";
    if (a.isDate(d))
      return d.toISOString();
    if (!h && a.isBlob(d))
      throw new m("Blob is not supported. Use a Buffer instead.");
    return a.isArrayBuffer(d) || a.isTypedArray(d) ? h && typeof Blob == "function" ? new Blob([d]) : Buffer.from(d) : d;
  }
  function l(d, p, b) {
    let S = d;
    if (d && !b && typeof d == "object") {
      if (a.endsWith(p, "{}"))
        p = r ? p : p.slice(0, -2), d = JSON.stringify(d);
      else if (a.isArray(d) && Ot(d) || (a.isFileList(d) || a.endsWith(p, "[]")) && (S = a.toArray(d)))
        return p = Te(p), S.forEach(function(x, Ue) {
          !(a.isUndefined(x) || x === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            i === !0 ? ie([p], Ue, o) : i === null ? p : p + "[]",
            f(x)
          );
        }), !1;
    }
    return v(d) ? !0 : (t.append(ie(b, p, o), f(d)), !1);
  }
  const c = [], y = Object.assign(At, {
    defaultVisitor: l,
    convertValue: f,
    isVisitable: v
  });
  function E(d, p) {
    if (!a.isUndefined(d)) {
      if (c.indexOf(d) !== -1)
        throw Error("Circular reference detected in " + p.join("."));
      c.push(d), a.forEach(d, function(S, T) {
        (!(a.isUndefined(S) || S === null) && s.call(
          t,
          S,
          a.isString(T) ? T.trim() : T,
          p,
          y
        )) === !0 && E(S, p ? p.concat(T) : [T]);
      }), c.pop();
    }
  }
  if (!a.isObject(e))
    throw new TypeError("data must be an object");
  return E(e), t;
}
function ae(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function(r) {
    return t[r];
  });
}
function Y(e, t) {
  this._pairs = [], e && M(e, this, t);
}
const xe = Y.prototype;
xe.append = function(t, n) {
  this._pairs.push([t, n]);
};
xe.toString = function(t) {
  const n = t ? function(r) {
    return t.call(this, r, ae);
  } : ae;
  return this._pairs.map(function(s) {
    return n(s[0]) + "=" + n(s[1]);
  }, "").join("&");
};
function gt(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function Ne(e, t, n) {
  if (!t)
    return e;
  const r = n && n.encode || gt, s = n && n.serialize;
  let o;
  if (s ? o = s(t, n) : o = a.isURLSearchParams(t) ? t.toString() : new Y(t, n).toString(r), o) {
    const i = e.indexOf("#");
    i !== -1 && (e = e.slice(0, i)), e += (e.indexOf("?") === -1 ? "?" : "&") + o;
  }
  return e;
}
class Tt {
  constructor() {
    this.handlers = [];
  }
  /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */
  use(t, n, r) {
    return this.handlers.push({
      fulfilled: t,
      rejected: n,
      synchronous: r ? r.synchronous : !1,
      runWhen: r ? r.runWhen : null
    }), this.handlers.length - 1;
  }
  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
   */
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
  }
  /**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */
  clear() {
    this.handlers && (this.handlers = []);
  }
  /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */
  forEach(t) {
    a.forEach(this.handlers, function(r) {
      r !== null && t(r);
    });
  }
}
const ce = Tt, Pe = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, xt = typeof URLSearchParams < "u" ? URLSearchParams : Y, Nt = typeof FormData < "u" ? FormData : null, Pt = typeof Blob < "u" ? Blob : null, Ft = {
  isBrowser: !0,
  classes: {
    URLSearchParams: xt,
    FormData: Nt,
    Blob: Pt
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, Fe = typeof window < "u" && typeof document < "u", Ct = ((e) => Fe && ["ReactNative", "NativeScript", "NS"].indexOf(e) < 0)(typeof navigator < "u" && navigator.product), Bt = (() => typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function")(), _t = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: Fe,
  hasStandardBrowserEnv: Ct,
  hasStandardBrowserWebWorkerEnv: Bt
}, Symbol.toStringTag, { value: "Module" })), O = {
  ..._t,
  ...Ft
};
function kt(e, t) {
  return M(e, new O.classes.URLSearchParams(), Object.assign({
    visitor: function(n, r, s, o) {
      return O.isNode && a.isBuffer(n) ? (this.append(r, n.toString("base64")), !1) : o.defaultVisitor.apply(this, arguments);
    }
  }, t));
}
function Lt(e) {
  return a.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function Dt(e) {
  const t = {}, n = Object.keys(e);
  let r;
  const s = n.length;
  let o;
  for (r = 0; r < s; r++)
    o = n[r], t[o] = e[o];
  return t;
}
function Ce(e) {
  function t(n, r, s, o) {
    let i = n[o++];
    const u = Number.isFinite(+i), h = o >= n.length;
    return i = !i && a.isArray(s) ? s.length : i, h ? (a.hasOwnProp(s, i) ? s[i] = [s[i], r] : s[i] = r, !u) : ((!s[i] || !a.isObject(s[i])) && (s[i] = []), t(n, r, s[i], o) && a.isArray(s[i]) && (s[i] = Dt(s[i])), !u);
  }
  if (a.isFormData(e) && a.isFunction(e.entries)) {
    const n = {};
    return a.forEachEntry(e, (r, s) => {
      t(Lt(r), s, n, 0);
    }), n;
  }
  return null;
}
function Ut(e, t, n) {
  if (a.isString(e))
    try {
      return (t || JSON.parse)(e), a.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError")
        throw r;
    }
  return (n || JSON.stringify)(e);
}
const ee = {
  transitional: Pe,
  adapter: ["xhr", "http"],
  transformRequest: [function(t, n) {
    const r = n.getContentType() || "", s = r.indexOf("application/json") > -1, o = a.isObject(t);
    if (o && a.isHTMLForm(t) && (t = new FormData(t)), a.isFormData(t))
      return s && s ? JSON.stringify(Ce(t)) : t;
    if (a.isArrayBuffer(t) || a.isBuffer(t) || a.isStream(t) || a.isFile(t) || a.isBlob(t))
      return t;
    if (a.isArrayBufferView(t))
      return t.buffer;
    if (a.isURLSearchParams(t))
      return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let u;
    if (o) {
      if (r.indexOf("application/x-www-form-urlencoded") > -1)
        return kt(t, this.formSerializer).toString();
      if ((u = a.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
        const h = this.env && this.env.FormData;
        return M(
          u ? { "files[]": t } : t,
          h && new h(),
          this.formSerializer
        );
      }
    }
    return o || s ? (n.setContentType("application/json", !1), Ut(t)) : t;
  }],
  transformResponse: [function(t) {
    const n = this.transitional || ee.transitional, r = n && n.forcedJSONParsing, s = this.responseType === "json";
    if (t && a.isString(t) && (r && !this.responseType || s)) {
      const i = !(n && n.silentJSONParsing) && s;
      try {
        return JSON.parse(t);
      } catch (u) {
        if (i)
          throw u.name === "SyntaxError" ? m.from(u, m.ERR_BAD_RESPONSE, this, null, this.response) : u;
      }
    }
    return t;
  }],
  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: O.classes.FormData,
    Blob: O.classes.Blob
  },
  validateStatus: function(t) {
    return t >= 200 && t < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0
    }
  }
};
a.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  ee.headers[e] = {};
});
const te = ee, jt = a.toObjectSet([
  "age",
  "authorization",
  "content-length",
  "content-type",
  "etag",
  "expires",
  "from",
  "host",
  "if-modified-since",
  "if-unmodified-since",
  "last-modified",
  "location",
  "max-forwards",
  "proxy-authorization",
  "referer",
  "retry-after",
  "user-agent"
]), It = (e) => {
  const t = {};
  let n, r, s;
  return e && e.split(`
`).forEach(function(i) {
    s = i.indexOf(":"), n = i.substring(0, s).trim().toLowerCase(), r = i.substring(s + 1).trim(), !(!n || t[n] && jt[n]) && (n === "set-cookie" ? t[n] ? t[n].push(r) : t[n] = [r] : t[n] = t[n] ? t[n] + ", " + r : r);
  }), t;
}, ue = Symbol("internals");
function C(e) {
  return e && String(e).trim().toLowerCase();
}
function D(e) {
  return e === !1 || e == null ? e : a.isArray(e) ? e.map(D) : String(e);
}
function Ht(e) {
  const t = /* @__PURE__ */ Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; r = n.exec(e); )
    t[r[1]] = r[2];
  return t;
}
const qt = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function $(e, t, n, r, s) {
  if (a.isFunction(r))
    return r.call(this, t, n);
  if (s && (t = n), !!a.isString(t)) {
    if (a.isString(r))
      return t.indexOf(r) !== -1;
    if (a.isRegExp(r))
      return r.test(t);
  }
}
function Mt(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function zt(e, t) {
  const n = a.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(e, r + n, {
      value: function(s, o, i) {
        return this[r].call(this, t, s, o, i);
      },
      configurable: !0
    });
  });
}
class z {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const s = this;
    function o(u, h, f) {
      const l = C(h);
      if (!l)
        throw new Error("header name must be a non-empty string");
      const c = a.findKey(s, l);
      (!c || s[c] === void 0 || f === !0 || f === void 0 && s[c] !== !1) && (s[c || h] = D(u));
    }
    const i = (u, h) => a.forEach(u, (f, l) => o(f, l, h));
    return a.isPlainObject(t) || t instanceof this.constructor ? i(t, n) : a.isString(t) && (t = t.trim()) && !qt(t) ? i(It(t), n) : t != null && o(n, t, r), this;
  }
  get(t, n) {
    if (t = C(t), t) {
      const r = a.findKey(this, t);
      if (r) {
        const s = this[r];
        if (!n)
          return s;
        if (n === !0)
          return Ht(s);
        if (a.isFunction(n))
          return n.call(this, s, r);
        if (a.isRegExp(n))
          return n.exec(s);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (t = C(t), t) {
      const r = a.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || $(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let s = !1;
    function o(i) {
      if (i = C(i), i) {
        const u = a.findKey(r, i);
        u && (!n || $(r, r[u], u, n)) && (delete r[u], s = !0);
      }
    }
    return a.isArray(t) ? t.forEach(o) : o(t), s;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length, s = !1;
    for (; r--; ) {
      const o = n[r];
      (!t || $(this, this[o], o, t, !0)) && (delete this[o], s = !0);
    }
    return s;
  }
  normalize(t) {
    const n = this, r = {};
    return a.forEach(this, (s, o) => {
      const i = a.findKey(r, o);
      if (i) {
        n[i] = D(s), delete n[o];
        return;
      }
      const u = t ? Mt(o) : String(o).trim();
      u !== o && delete n[o], n[u] = D(s), r[u] = !0;
    }), this;
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const n = /* @__PURE__ */ Object.create(null);
    return a.forEach(this, (r, s) => {
      r != null && r !== !1 && (n[s] = t && a.isArray(r) ? r.join(", ") : r);
    }), n;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, n]) => t + ": " + n).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...n) {
    const r = new this(t);
    return n.forEach((s) => r.set(s)), r;
  }
  static accessor(t) {
    const r = (this[ue] = this[ue] = {
      accessors: {}
    }).accessors, s = this.prototype;
    function o(i) {
      const u = C(i);
      r[u] || (zt(s, i), r[u] = !0);
    }
    return a.isArray(t) ? t.forEach(o) : o(t), this;
  }
}
z.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
a.reduceDescriptors(z.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(r) {
      this[n] = r;
    }
  };
});
a.freezeMethods(z);
const g = z;
function V(e, t) {
  const n = this || te, r = t || n, s = g.from(r.headers);
  let o = r.data;
  return a.forEach(e, function(u) {
    o = u.call(n, o, s.normalize(), t ? t.status : void 0);
  }), s.normalize(), o;
}
function Be(e) {
  return !!(e && e.__CANCEL__);
}
function k(e, t, n) {
  m.call(this, e ?? "canceled", m.ERR_CANCELED, t, n), this.name = "CanceledError";
}
a.inherits(k, m, {
  __CANCEL__: !0
});
function Jt(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status) ? e(n) : t(new m(
    "Request failed with status code " + n.status,
    [m.ERR_BAD_REQUEST, m.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],
    n.config,
    n.request,
    n
  ));
}
const $t = O.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(e, t, n, r, s, o) {
      const i = [e + "=" + encodeURIComponent(t)];
      a.isNumber(n) && i.push("expires=" + new Date(n).toGMTString()), a.isString(r) && i.push("path=" + r), a.isString(s) && i.push("domain=" + s), o === !0 && i.push("secure"), document.cookie = i.join("; ");
    },
    read(e) {
      const t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
      return t ? decodeURIComponent(t[3]) : null;
    },
    remove(e) {
      this.write(e, "", Date.now() - 864e5);
    }
  }
) : (
  // Non-standard browser env (web workers, react-native) lack needed support.
  {
    write() {
    },
    read() {
      return null;
    },
    remove() {
    }
  }
);
function Vt(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function Wt(e, t) {
  return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function _e(e, t) {
  return e && !Vt(t) ? Wt(e, t) : t;
}
const Kt = O.hasStandardBrowserEnv ? (
  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  function() {
    const t = /(msie|trident)/i.test(navigator.userAgent), n = document.createElement("a");
    let r;
    function s(o) {
      let i = o;
      return t && (n.setAttribute("href", i), i = n.href), n.setAttribute("href", i), {
        href: n.href,
        protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
        host: n.host,
        search: n.search ? n.search.replace(/^\?/, "") : "",
        hash: n.hash ? n.hash.replace(/^#/, "") : "",
        hostname: n.hostname,
        port: n.port,
        pathname: n.pathname.charAt(0) === "/" ? n.pathname : "/" + n.pathname
      };
    }
    return r = s(window.location.href), function(i) {
      const u = a.isString(i) ? s(i) : i;
      return u.protocol === r.protocol && u.host === r.host;
    };
  }()
) : (
  // Non standard browser envs (web workers, react-native) lack needed support.
  function() {
    return function() {
      return !0;
    };
  }()
);
function vt(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function Gt(e, t) {
  e = e || 10;
  const n = new Array(e), r = new Array(e);
  let s = 0, o = 0, i;
  return t = t !== void 0 ? t : 1e3, function(h) {
    const f = Date.now(), l = r[o];
    i || (i = f), n[s] = h, r[s] = f;
    let c = o, y = 0;
    for (; c !== s; )
      y += n[c++], c = c % e;
    if (s = (s + 1) % e, s === o && (o = (o + 1) % e), f - i < t)
      return;
    const E = l && f - l;
    return E ? Math.round(y * 1e3 / E) : void 0;
  };
}
function le(e, t) {
  let n = 0;
  const r = Gt(50, 250);
  return (s) => {
    const o = s.loaded, i = s.lengthComputable ? s.total : void 0, u = o - n, h = r(u), f = o <= i;
    n = o;
    const l = {
      loaded: o,
      total: i,
      progress: i ? o / i : void 0,
      bytes: u,
      rate: h || void 0,
      estimated: h && i && f ? (i - o) / h : void 0,
      event: s
    };
    l[t ? "download" : "upload"] = !0, e(l);
  };
}
const Xt = typeof XMLHttpRequest < "u", Qt = Xt && function(e) {
  return new Promise(function(n, r) {
    let s = e.data;
    const o = g.from(e.headers).normalize();
    let { responseType: i, withXSRFToken: u } = e, h;
    function f() {
      e.cancelToken && e.cancelToken.unsubscribe(h), e.signal && e.signal.removeEventListener("abort", h);
    }
    let l;
    if (a.isFormData(s)) {
      if (O.hasStandardBrowserEnv || O.hasStandardBrowserWebWorkerEnv)
        o.setContentType(!1);
      else if ((l = o.getContentType()) !== !1) {
        const [p, ...b] = l ? l.split(";").map((S) => S.trim()).filter(Boolean) : [];
        o.setContentType([p || "multipart/form-data", ...b].join("; "));
      }
    }
    let c = new XMLHttpRequest();
    if (e.auth) {
      const p = e.auth.username || "", b = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : "";
      o.set("Authorization", "Basic " + btoa(p + ":" + b));
    }
    const y = _e(e.baseURL, e.url);
    c.open(e.method.toUpperCase(), Ne(y, e.params, e.paramsSerializer), !0), c.timeout = e.timeout;
    function E() {
      if (!c)
        return;
      const p = g.from(
        "getAllResponseHeaders" in c && c.getAllResponseHeaders()
      ), S = {
        data: !i || i === "text" || i === "json" ? c.responseText : c.response,
        status: c.status,
        statusText: c.statusText,
        headers: p,
        config: e,
        request: c
      };
      Jt(function(x) {
        n(x), f();
      }, function(x) {
        r(x), f();
      }, S), c = null;
    }
    if ("onloadend" in c ? c.onloadend = E : c.onreadystatechange = function() {
      !c || c.readyState !== 4 || c.status === 0 && !(c.responseURL && c.responseURL.indexOf("file:") === 0) || setTimeout(E);
    }, c.onabort = function() {
      c && (r(new m("Request aborted", m.ECONNABORTED, e, c)), c = null);
    }, c.onerror = function() {
      r(new m("Network Error", m.ERR_NETWORK, e, c)), c = null;
    }, c.ontimeout = function() {
      let b = e.timeout ? "timeout of " + e.timeout + "ms exceeded" : "timeout exceeded";
      const S = e.transitional || Pe;
      e.timeoutErrorMessage && (b = e.timeoutErrorMessage), r(new m(
        b,
        S.clarifyTimeoutError ? m.ETIMEDOUT : m.ECONNABORTED,
        e,
        c
      )), c = null;
    }, O.hasStandardBrowserEnv && (u && a.isFunction(u) && (u = u(e)), u || u !== !1 && Kt(y))) {
      const p = e.xsrfHeaderName && e.xsrfCookieName && $t.read(e.xsrfCookieName);
      p && o.set(e.xsrfHeaderName, p);
    }
    s === void 0 && o.setContentType(null), "setRequestHeader" in c && a.forEach(o.toJSON(), function(b, S) {
      c.setRequestHeader(S, b);
    }), a.isUndefined(e.withCredentials) || (c.withCredentials = !!e.withCredentials), i && i !== "json" && (c.responseType = e.responseType), typeof e.onDownloadProgress == "function" && c.addEventListener("progress", le(e.onDownloadProgress, !0)), typeof e.onUploadProgress == "function" && c.upload && c.upload.addEventListener("progress", le(e.onUploadProgress)), (e.cancelToken || e.signal) && (h = (p) => {
      c && (r(!p || p.type ? new k(null, e, c) : p), c.abort(), c = null);
    }, e.cancelToken && e.cancelToken.subscribe(h), e.signal && (e.signal.aborted ? h() : e.signal.addEventListener("abort", h)));
    const d = vt(y);
    if (d && O.protocols.indexOf(d) === -1) {
      r(new m("Unsupported protocol " + d + ":", m.ERR_BAD_REQUEST, e));
      return;
    }
    c.send(s || null);
  });
}, G = {
  http: Rt,
  xhr: Qt
};
a.forEach(G, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const fe = (e) => `- ${e}`, Zt = (e) => a.isFunction(e) || e === null || e === !1, ke = {
  getAdapter: (e) => {
    e = a.isArray(e) ? e : [e];
    const { length: t } = e;
    let n, r;
    const s = {};
    for (let o = 0; o < t; o++) {
      n = e[o];
      let i;
      if (r = n, !Zt(n) && (r = G[(i = String(n)).toLowerCase()], r === void 0))
        throw new m(`Unknown adapter '${i}'`);
      if (r)
        break;
      s[i || "#" + o] = r;
    }
    if (!r) {
      const o = Object.entries(s).map(
        ([u, h]) => `adapter ${u} ` + (h === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let i = t ? o.length > 1 ? `since :
` + o.map(fe).join(`
`) : " " + fe(o[0]) : "as no adapter specified";
      throw new m(
        "There is no suitable adapter to dispatch the request " + i,
        "ERR_NOT_SUPPORT"
      );
    }
    return r;
  },
  adapters: G
};
function W(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new k(null, e);
}
function de(e) {
  return W(e), e.headers = g.from(e.headers), e.data = V.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), ke.getAdapter(e.adapter || te.adapter)(e).then(function(r) {
    return W(e), r.data = V.call(
      e,
      e.transformResponse,
      r
    ), r.headers = g.from(r.headers), r;
  }, function(r) {
    return Be(r) || (W(e), r && r.response && (r.response.data = V.call(
      e,
      e.transformResponse,
      r.response
    ), r.response.headers = g.from(r.response.headers))), Promise.reject(r);
  });
}
const pe = (e) => e instanceof g ? e.toJSON() : e;
function P(e, t) {
  t = t || {};
  const n = {};
  function r(f, l, c) {
    return a.isPlainObject(f) && a.isPlainObject(l) ? a.merge.call({ caseless: c }, f, l) : a.isPlainObject(l) ? a.merge({}, l) : a.isArray(l) ? l.slice() : l;
  }
  function s(f, l, c) {
    if (a.isUndefined(l)) {
      if (!a.isUndefined(f))
        return r(void 0, f, c);
    } else
      return r(f, l, c);
  }
  function o(f, l) {
    if (!a.isUndefined(l))
      return r(void 0, l);
  }
  function i(f, l) {
    if (a.isUndefined(l)) {
      if (!a.isUndefined(f))
        return r(void 0, f);
    } else
      return r(void 0, l);
  }
  function u(f, l, c) {
    if (c in t)
      return r(f, l);
    if (c in e)
      return r(void 0, f);
  }
  const h = {
    url: o,
    method: o,
    data: o,
    baseURL: i,
    transformRequest: i,
    transformResponse: i,
    paramsSerializer: i,
    timeout: i,
    timeoutMessage: i,
    withCredentials: i,
    withXSRFToken: i,
    adapter: i,
    responseType: i,
    xsrfCookieName: i,
    xsrfHeaderName: i,
    onUploadProgress: i,
    onDownloadProgress: i,
    decompress: i,
    maxContentLength: i,
    maxBodyLength: i,
    beforeRedirect: i,
    transport: i,
    httpAgent: i,
    httpsAgent: i,
    cancelToken: i,
    socketPath: i,
    responseEncoding: i,
    validateStatus: u,
    headers: (f, l) => s(pe(f), pe(l), !0)
  };
  return a.forEach(Object.keys(Object.assign({}, e, t)), function(l) {
    const c = h[l] || s, y = c(e[l], t[l], l);
    a.isUndefined(y) && c !== u || (n[l] = y);
  }), n;
}
const Le = "1.6.2", ne = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  ne[e] = function(r) {
    return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const he = {};
ne.transitional = function(t, n, r) {
  function s(o, i) {
    return "[Axios v" + Le + "] Transitional option '" + o + "'" + i + (r ? ". " + r : "");
  }
  return (o, i, u) => {
    if (t === !1)
      throw new m(
        s(i, " has been removed" + (n ? " in " + n : "")),
        m.ERR_DEPRECATED
      );
    return n && !he[i] && (he[i] = !0, console.warn(
      s(
        i,
        " has been deprecated since v" + n + " and will be removed in the near future"
      )
    )), t ? t(o, i, u) : !0;
  };
};
function Yt(e, t, n) {
  if (typeof e != "object")
    throw new m("options must be an object", m.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let s = r.length;
  for (; s-- > 0; ) {
    const o = r[s], i = t[o];
    if (i) {
      const u = e[o], h = u === void 0 || i(u, o, e);
      if (h !== !0)
        throw new m("option " + o + " must be " + h, m.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0)
      throw new m("Unknown option " + o, m.ERR_BAD_OPTION);
  }
}
const X = {
  assertOptions: Yt,
  validators: ne
}, N = X.validators;
class j {
  constructor(t) {
    this.defaults = t, this.interceptors = {
      request: new ce(),
      response: new ce()
    };
  }
  /**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */
  request(t, n) {
    typeof t == "string" ? (n = n || {}, n.url = t) : n = t || {}, n = P(this.defaults, n);
    const { transitional: r, paramsSerializer: s, headers: o } = n;
    r !== void 0 && X.assertOptions(r, {
      silentJSONParsing: N.transitional(N.boolean),
      forcedJSONParsing: N.transitional(N.boolean),
      clarifyTimeoutError: N.transitional(N.boolean)
    }, !1), s != null && (a.isFunction(s) ? n.paramsSerializer = {
      serialize: s
    } : X.assertOptions(s, {
      encode: N.function,
      serialize: N.function
    }, !0)), n.method = (n.method || this.defaults.method || "get").toLowerCase();
    let i = o && a.merge(
      o.common,
      o[n.method]
    );
    o && a.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (d) => {
        delete o[d];
      }
    ), n.headers = g.concat(i, o);
    const u = [];
    let h = !0;
    this.interceptors.request.forEach(function(p) {
      typeof p.runWhen == "function" && p.runWhen(n) === !1 || (h = h && p.synchronous, u.unshift(p.fulfilled, p.rejected));
    });
    const f = [];
    this.interceptors.response.forEach(function(p) {
      f.push(p.fulfilled, p.rejected);
    });
    let l, c = 0, y;
    if (!h) {
      const d = [de.bind(this), void 0];
      for (d.unshift.apply(d, u), d.push.apply(d, f), y = d.length, l = Promise.resolve(n); c < y; )
        l = l.then(d[c++], d[c++]);
      return l;
    }
    y = u.length;
    let E = n;
    for (c = 0; c < y; ) {
      const d = u[c++], p = u[c++];
      try {
        E = d(E);
      } catch (b) {
        p.call(this, b);
        break;
      }
    }
    try {
      l = de.call(this, E);
    } catch (d) {
      return Promise.reject(d);
    }
    for (c = 0, y = f.length; c < y; )
      l = l.then(f[c++], f[c++]);
    return l;
  }
  getUri(t) {
    t = P(this.defaults, t);
    const n = _e(t.baseURL, t.url);
    return Ne(n, t.params, t.paramsSerializer);
  }
}
a.forEach(["delete", "get", "head", "options"], function(t) {
  j.prototype[t] = function(n, r) {
    return this.request(P(r || {}, {
      method: t,
      url: n,
      data: (r || {}).data
    }));
  };
});
a.forEach(["post", "put", "patch"], function(t) {
  function n(r) {
    return function(o, i, u) {
      return this.request(P(u || {}, {
        method: t,
        headers: r ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: o,
        data: i
      }));
    };
  }
  j.prototype[t] = n(), j.prototype[t + "Form"] = n(!0);
});
const U = j;
class re {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let n;
    this.promise = new Promise(function(o) {
      n = o;
    });
    const r = this;
    this.promise.then((s) => {
      if (!r._listeners)
        return;
      let o = r._listeners.length;
      for (; o-- > 0; )
        r._listeners[o](s);
      r._listeners = null;
    }), this.promise.then = (s) => {
      let o;
      const i = new Promise((u) => {
        r.subscribe(u), o = u;
      }).then(s);
      return i.cancel = function() {
        r.unsubscribe(o);
      }, i;
    }, t(function(o, i, u) {
      r.reason || (r.reason = new k(o, i, u), n(r.reason));
    });
  }
  /**
   * Throws a `CanceledError` if cancellation has been requested.
   */
  throwIfRequested() {
    if (this.reason)
      throw this.reason;
  }
  /**
   * Subscribe to the cancel signal
   */
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : this._listeners = [t];
  }
  /**
   * Unsubscribe from the cancel signal
   */
  unsubscribe(t) {
    if (!this._listeners)
      return;
    const n = this._listeners.indexOf(t);
    n !== -1 && this._listeners.splice(n, 1);
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let t;
    return {
      token: new re(function(s) {
        t = s;
      }),
      cancel: t
    };
  }
}
const en = re;
function tn(e) {
  return function(n) {
    return e.apply(null, n);
  };
}
function nn(e) {
  return a.isObject(e) && e.isAxiosError === !0;
}
const Q = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511
};
Object.entries(Q).forEach(([e, t]) => {
  Q[t] = e;
});
const rn = Q;
function De(e) {
  const t = new U(e), n = me(U.prototype.request, t);
  return a.extend(n, U.prototype, t, { allOwnKeys: !0 }), a.extend(n, t, null, { allOwnKeys: !0 }), n.create = function(s) {
    return De(P(e, s));
  }, n;
}
const w = De(te);
w.Axios = U;
w.CanceledError = k;
w.CancelToken = en;
w.isCancel = Be;
w.VERSION = Le;
w.toFormData = M;
w.AxiosError = m;
w.Cancel = w.CanceledError;
w.all = function(t) {
  return Promise.all(t);
};
w.spread = tn;
w.isAxiosError = nn;
w.mergeConfig = P;
w.AxiosHeaders = g;
w.formToJSON = (e) => Ce(a.isHTMLForm(e) ? new FormData(e) : e);
w.getAdapter = ke.getAdapter;
w.HttpStatusCode = rn;
w.default = w;
const sn = w, an = {
  __name: "HFaceBookLogin",
  props: {
    appId: {
      type: String,
      required: !0
    },
    version: {
      type: String,
      default: "v18.0"
    },
    scope: {
      type: String,
      default: ""
    },
    fields: {
      type: String,
      default: ""
    }
  },
  emits: ["onSuccess", "onFailure"],
  setup(e, { emit: t }) {
    const n = e;
    je(() => {
      i(document, "script", "facebook-jssdk"), o();
    });
    const r = async () => {
      s();
    }, s = async () => {
      try {
        return n.appId ? (await i(document, "script", "facebook-jssdk"), await o(n.appId, n.version), window.FB.login(
          function(f) {
            return f.authResponse ? h(f) : t("onFailure");
          },
          { scope: n.scope }
        ), !1) : t("onFailure", "appId is required");
      } catch {
        return t("onFailure");
      }
    }, o = async () => {
      window.fbAsyncInit = function() {
        window.FB.init({
          appId: n.appId,
          cookie: !0,
          xfbml: !0,
          version: n.version
        }), window.FB.AppEvents.logPageView();
      };
    }, i = async (f, l, c) => {
      var y, E = f.getElementsByTagName(l)[0];
      f.getElementById(c) || (y = f.createElement(l), y.id = c, y.src = "https://connect.facebook.net/en_US/sdk.js", E.parentNode.insertBefore(y, E));
    }, u = async (f) => {
      const l = await sn.get(
        `https://graph.facebook.com/${n.version}/me?fields=${n.fields}&access_token=${f}`
      );
      return l == null ? void 0 : l.data;
    }, h = async (f) => {
      if (n.fields) {
        let l = {};
        return n.fields && (l = await u(f.authResponse.accessToken)), t("onSuccess", { ...f, authInfo: l });
      } else
        return t("onSuccess", { ...f });
    };
    return (f, l) => (Ie(), He("div", null, [
      qe(f.$slots, "default", { initFBLogin: r })
    ]));
  }
};
export {
  an as HFaceBookLogin
};
