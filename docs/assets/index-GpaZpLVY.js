var DM = Object.defineProperty;
var UM = (s, e, t) =>
  e in s
    ? DM(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t })
    : (s[e] = t);
var Qe = (s, e, t) => UM(s, typeof e != "symbol" ? e + "" : e, t);
(function () {
  const e = document.createElement("link").relList;
  if (e && e.supports && e.supports("modulepreload")) return;
  for (const a of document.querySelectorAll('link[rel="modulepreload"]')) i(a);
  new MutationObserver((a) => {
    for (const o of a)
      if (o.type === "childList")
        for (const c of o.addedNodes)
          c.tagName === "LINK" && c.rel === "modulepreload" && i(c);
  }).observe(document, { childList: !0, subtree: !0 });
  function t(a) {
    const o = {};
    return (
      a.integrity && (o.integrity = a.integrity),
      a.referrerPolicy && (o.referrerPolicy = a.referrerPolicy),
      a.crossOrigin === "use-credentials"
        ? (o.credentials = "include")
        : a.crossOrigin === "anonymous"
          ? (o.credentials = "omit")
          : (o.credentials = "same-origin"),
      o
    );
  }
  function i(a) {
    if (a.ep) return;
    a.ep = !0;
    const o = t(a);
    fetch(a.href, o);
  }
})();
/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */ const yu = "173",
  NM = 0,
  td = 1,
  FM = 2,
  ip = 1,
  OM = 2,
  Bi = 3,
  ur = 0,
  Dn = 1,
  zi = 2,
  lr = 0,
  gs = 1,
  nd = 2,
  id = 3,
  rd = 4,
  BM = 5,
  Pr = 100,
  zM = 101,
  GM = 102,
  HM = 103,
  VM = 104,
  kM = 200,
  WM = 201,
  XM = 202,
  qM = 203,
  Ic = 204,
  Dc = 205,
  YM = 206,
  ZM = 207,
  KM = 208,
  $M = 209,
  JM = 210,
  QM = 211,
  jM = 212,
  eS = 213,
  tS = 214,
  Uc = 0,
  Nc = 1,
  Fc = 2,
  Ss = 3,
  Oc = 4,
  Bc = 5,
  zc = 6,
  Gc = 7,
  rp = 0,
  nS = 1,
  iS = 2,
  cr = 0,
  rS = 1,
  sS = 2,
  aS = 3,
  oS = 4,
  lS = 5,
  cS = 6,
  uS = 7,
  sp = 300,
  Es = 301,
  ys = 302,
  Hc = 303,
  Vc = 304,
  zo = 306,
  kc = 1e3,
  Dr = 1001,
  Wc = 1002,
  di = 1003,
  fS = 1004,
  ro = 1005,
  xi = 1006,
  tc = 1007,
  Ur = 1008,
  Wi = 1009,
  ap = 1010,
  op = 1011,
  aa = 1012,
  Tu = 1013,
  Nr = 1014,
  Gi = 1015,
  oa = 1016,
  Au = 1017,
  wu = 1018,
  Ts = 1020,
  lp = 35902,
  cp = 1021,
  up = 1022,
  hi = 1023,
  fp = 1024,
  hp = 1025,
  vs = 1026,
  As = 1027,
  dp = 1028,
  bu = 1029,
  pp = 1030,
  Ru = 1031,
  Cu = 1033,
  Ro = 33776,
  Co = 33777,
  Po = 33778,
  Lo = 33779,
  Xc = 35840,
  qc = 35841,
  Yc = 35842,
  Zc = 35843,
  Kc = 36196,
  $c = 37492,
  Jc = 37496,
  Qc = 37808,
  jc = 37809,
  eu = 37810,
  tu = 37811,
  nu = 37812,
  iu = 37813,
  ru = 37814,
  su = 37815,
  au = 37816,
  ou = 37817,
  lu = 37818,
  cu = 37819,
  uu = 37820,
  fu = 37821,
  Io = 36492,
  hu = 36494,
  du = 36495,
  mp = 36283,
  pu = 36284,
  mu = 36285,
  _u = 36286,
  hS = 3200,
  dS = 3201,
  _p = 0,
  pS = 1,
  or = "",
  ei = "srgb",
  ws = "srgb-linear",
  Uo = "linear",
  Dt = "srgb",
  es = 7680,
  sd = 519,
  mS = 512,
  _S = 513,
  gS = 514,
  gp = 515,
  vS = 516,
  xS = 517,
  MS = 518,
  SS = 519,
  ad = 35044,
  od = "300 es",
  Hi = 2e3,
  No = 2001;
class Rs {
  addEventListener(e, t) {
    this._listeners === void 0 && (this._listeners = {});
    const i = this._listeners;
    i[e] === void 0 && (i[e] = []), i[e].indexOf(t) === -1 && i[e].push(t);
  }
  hasEventListener(e, t) {
    const i = this._listeners;
    return i === void 0 ? !1 : i[e] !== void 0 && i[e].indexOf(t) !== -1;
  }
  removeEventListener(e, t) {
    const i = this._listeners;
    if (i === void 0) return;
    const a = i[e];
    if (a !== void 0) {
      const o = a.indexOf(t);
      o !== -1 && a.splice(o, 1);
    }
  }
  dispatchEvent(e) {
    const t = this._listeners;
    if (t === void 0) return;
    const i = t[e.type];
    if (i !== void 0) {
      e.target = this;
      const a = i.slice(0);
      for (let o = 0, c = a.length; o < c; o++) a[o].call(this, e);
      e.target = null;
    }
  }
}
const mn = [
    "00",
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "0a",
    "0b",
    "0c",
    "0d",
    "0e",
    "0f",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "1a",
    "1b",
    "1c",
    "1d",
    "1e",
    "1f",
    "20",
    "21",
    "22",
    "23",
    "24",
    "25",
    "26",
    "27",
    "28",
    "29",
    "2a",
    "2b",
    "2c",
    "2d",
    "2e",
    "2f",
    "30",
    "31",
    "32",
    "33",
    "34",
    "35",
    "36",
    "37",
    "38",
    "39",
    "3a",
    "3b",
    "3c",
    "3d",
    "3e",
    "3f",
    "40",
    "41",
    "42",
    "43",
    "44",
    "45",
    "46",
    "47",
    "48",
    "49",
    "4a",
    "4b",
    "4c",
    "4d",
    "4e",
    "4f",
    "50",
    "51",
    "52",
    "53",
    "54",
    "55",
    "56",
    "57",
    "58",
    "59",
    "5a",
    "5b",
    "5c",
    "5d",
    "5e",
    "5f",
    "60",
    "61",
    "62",
    "63",
    "64",
    "65",
    "66",
    "67",
    "68",
    "69",
    "6a",
    "6b",
    "6c",
    "6d",
    "6e",
    "6f",
    "70",
    "71",
    "72",
    "73",
    "74",
    "75",
    "76",
    "77",
    "78",
    "79",
    "7a",
    "7b",
    "7c",
    "7d",
    "7e",
    "7f",
    "80",
    "81",
    "82",
    "83",
    "84",
    "85",
    "86",
    "87",
    "88",
    "89",
    "8a",
    "8b",
    "8c",
    "8d",
    "8e",
    "8f",
    "90",
    "91",
    "92",
    "93",
    "94",
    "95",
    "96",
    "97",
    "98",
    "99",
    "9a",
    "9b",
    "9c",
    "9d",
    "9e",
    "9f",
    "a0",
    "a1",
    "a2",
    "a3",
    "a4",
    "a5",
    "a6",
    "a7",
    "a8",
    "a9",
    "aa",
    "ab",
    "ac",
    "ad",
    "ae",
    "af",
    "b0",
    "b1",
    "b2",
    "b3",
    "b4",
    "b5",
    "b6",
    "b7",
    "b8",
    "b9",
    "ba",
    "bb",
    "bc",
    "bd",
    "be",
    "bf",
    "c0",
    "c1",
    "c2",
    "c3",
    "c4",
    "c5",
    "c6",
    "c7",
    "c8",
    "c9",
    "ca",
    "cb",
    "cc",
    "cd",
    "ce",
    "cf",
    "d0",
    "d1",
    "d2",
    "d3",
    "d4",
    "d5",
    "d6",
    "d7",
    "d8",
    "d9",
    "da",
    "db",
    "dc",
    "dd",
    "de",
    "df",
    "e0",
    "e1",
    "e2",
    "e3",
    "e4",
    "e5",
    "e6",
    "e7",
    "e8",
    "e9",
    "ea",
    "eb",
    "ec",
    "ed",
    "ee",
    "ef",
    "f0",
    "f1",
    "f2",
    "f3",
    "f4",
    "f5",
    "f6",
    "f7",
    "f8",
    "f9",
    "fa",
    "fb",
    "fc",
    "fd",
    "fe",
    "ff",
  ],
  nc = Math.PI / 180,
  gu = 180 / Math.PI;
function la() {
  const s = (Math.random() * 4294967295) | 0,
    e = (Math.random() * 4294967295) | 0,
    t = (Math.random() * 4294967295) | 0,
    i = (Math.random() * 4294967295) | 0;
  return (
    mn[s & 255] +
    mn[(s >> 8) & 255] +
    mn[(s >> 16) & 255] +
    mn[(s >> 24) & 255] +
    "-" +
    mn[e & 255] +
    mn[(e >> 8) & 255] +
    "-" +
    mn[((e >> 16) & 15) | 64] +
    mn[(e >> 24) & 255] +
    "-" +
    mn[(t & 63) | 128] +
    mn[(t >> 8) & 255] +
    "-" +
    mn[(t >> 16) & 255] +
    mn[(t >> 24) & 255] +
    mn[i & 255] +
    mn[(i >> 8) & 255] +
    mn[(i >> 16) & 255] +
    mn[(i >> 24) & 255]
  ).toLowerCase();
}
function Mt(s, e, t) {
  return Math.max(e, Math.min(t, s));
}
function ES(s, e) {
  return ((s % e) + e) % e;
}
function ic(s, e, t) {
  return (1 - t) * s + t * e;
}
function qs(s, e) {
  switch (e.constructor) {
    case Float32Array:
      return s;
    case Uint32Array:
      return s / 4294967295;
    case Uint16Array:
      return s / 65535;
    case Uint8Array:
      return s / 255;
    case Int32Array:
      return Math.max(s / 2147483647, -1);
    case Int16Array:
      return Math.max(s / 32767, -1);
    case Int8Array:
      return Math.max(s / 127, -1);
    default:
      throw new Error("Invalid component type.");
  }
}
function In(s, e) {
  switch (e.constructor) {
    case Float32Array:
      return s;
    case Uint32Array:
      return Math.round(s * 4294967295);
    case Uint16Array:
      return Math.round(s * 65535);
    case Uint8Array:
      return Math.round(s * 255);
    case Int32Array:
      return Math.round(s * 2147483647);
    case Int16Array:
      return Math.round(s * 32767);
    case Int8Array:
      return Math.round(s * 127);
    default:
      throw new Error("Invalid component type.");
  }
}
class He {
  constructor(e = 0, t = 0) {
    (He.prototype.isVector2 = !0), (this.x = e), (this.y = t);
  }
  get width() {
    return this.x;
  }
  set width(e) {
    this.x = e;
  }
  get height() {
    return this.y;
  }
  set height(e) {
    this.y = e;
  }
  set(e, t) {
    return (this.x = e), (this.y = t), this;
  }
  setScalar(e) {
    return (this.x = e), (this.y = e), this;
  }
  setX(e) {
    return (this.x = e), this;
  }
  setY(e) {
    return (this.y = e), this;
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y);
  }
  copy(e) {
    return (this.x = e.x), (this.y = e.y), this;
  }
  add(e) {
    return (this.x += e.x), (this.y += e.y), this;
  }
  addScalar(e) {
    return (this.x += e), (this.y += e), this;
  }
  addVectors(e, t) {
    return (this.x = e.x + t.x), (this.y = e.y + t.y), this;
  }
  addScaledVector(e, t) {
    return (this.x += e.x * t), (this.y += e.y * t), this;
  }
  sub(e) {
    return (this.x -= e.x), (this.y -= e.y), this;
  }
  subScalar(e) {
    return (this.x -= e), (this.y -= e), this;
  }
  subVectors(e, t) {
    return (this.x = e.x - t.x), (this.y = e.y - t.y), this;
  }
  multiply(e) {
    return (this.x *= e.x), (this.y *= e.y), this;
  }
  multiplyScalar(e) {
    return (this.x *= e), (this.y *= e), this;
  }
  divide(e) {
    return (this.x /= e.x), (this.y /= e.y), this;
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  applyMatrix3(e) {
    const t = this.x,
      i = this.y,
      a = e.elements;
    return (
      (this.x = a[0] * t + a[3] * i + a[6]),
      (this.y = a[1] * t + a[4] * i + a[7]),
      this
    );
  }
  min(e) {
    return (
      (this.x = Math.min(this.x, e.x)), (this.y = Math.min(this.y, e.y)), this
    );
  }
  max(e) {
    return (
      (this.x = Math.max(this.x, e.x)), (this.y = Math.max(this.y, e.y)), this
    );
  }
  clamp(e, t) {
    return (
      (this.x = Mt(this.x, e.x, t.x)), (this.y = Mt(this.y, e.y, t.y)), this
    );
  }
  clampScalar(e, t) {
    return (this.x = Mt(this.x, e, t)), (this.y = Mt(this.y, e, t)), this;
  }
  clampLength(e, t) {
    const i = this.length();
    return this.divideScalar(i || 1).multiplyScalar(Mt(i, e, t));
  }
  floor() {
    return (this.x = Math.floor(this.x)), (this.y = Math.floor(this.y)), this;
  }
  ceil() {
    return (this.x = Math.ceil(this.x)), (this.y = Math.ceil(this.y)), this;
  }
  round() {
    return (this.x = Math.round(this.x)), (this.y = Math.round(this.y)), this;
  }
  roundToZero() {
    return (this.x = Math.trunc(this.x)), (this.y = Math.trunc(this.y)), this;
  }
  negate() {
    return (this.x = -this.x), (this.y = -this.y), this;
  }
  dot(e) {
    return this.x * e.x + this.y * e.y;
  }
  cross(e) {
    return this.x * e.y - this.y * e.x;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  angle() {
    return Math.atan2(-this.y, -this.x) + Math.PI;
  }
  angleTo(e) {
    const t = Math.sqrt(this.lengthSq() * e.lengthSq());
    if (t === 0) return Math.PI / 2;
    const i = this.dot(e) / t;
    return Math.acos(Mt(i, -1, 1));
  }
  distanceTo(e) {
    return Math.sqrt(this.distanceToSquared(e));
  }
  distanceToSquared(e) {
    const t = this.x - e.x,
      i = this.y - e.y;
    return t * t + i * i;
  }
  manhattanDistanceTo(e) {
    return Math.abs(this.x - e.x) + Math.abs(this.y - e.y);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return (this.x += (e.x - this.x) * t), (this.y += (e.y - this.y) * t), this;
  }
  lerpVectors(e, t, i) {
    return (
      (this.x = e.x + (t.x - e.x) * i), (this.y = e.y + (t.y - e.y) * i), this
    );
  }
  equals(e) {
    return e.x === this.x && e.y === this.y;
  }
  fromArray(e, t = 0) {
    return (this.x = e[t]), (this.y = e[t + 1]), this;
  }
  toArray(e = [], t = 0) {
    return (e[t] = this.x), (e[t + 1] = this.y), e;
  }
  fromBufferAttribute(e, t) {
    return (this.x = e.getX(t)), (this.y = e.getY(t)), this;
  }
  rotateAround(e, t) {
    const i = Math.cos(t),
      a = Math.sin(t),
      o = this.x - e.x,
      c = this.y - e.y;
    return (this.x = o * i - c * a + e.x), (this.y = o * a + c * i + e.y), this;
  }
  random() {
    return (this.x = Math.random()), (this.y = Math.random()), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y;
  }
}
class st {
  constructor(e, t, i, a, o, c, u, d, h) {
    (st.prototype.isMatrix3 = !0),
      (this.elements = [1, 0, 0, 0, 1, 0, 0, 0, 1]),
      e !== void 0 && this.set(e, t, i, a, o, c, u, d, h);
  }
  set(e, t, i, a, o, c, u, d, h) {
    const p = this.elements;
    return (
      (p[0] = e),
      (p[1] = a),
      (p[2] = u),
      (p[3] = t),
      (p[4] = o),
      (p[5] = d),
      (p[6] = i),
      (p[7] = c),
      (p[8] = h),
      this
    );
  }
  identity() {
    return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1), this;
  }
  copy(e) {
    const t = this.elements,
      i = e.elements;
    return (
      (t[0] = i[0]),
      (t[1] = i[1]),
      (t[2] = i[2]),
      (t[3] = i[3]),
      (t[4] = i[4]),
      (t[5] = i[5]),
      (t[6] = i[6]),
      (t[7] = i[7]),
      (t[8] = i[8]),
      this
    );
  }
  extractBasis(e, t, i) {
    return (
      e.setFromMatrix3Column(this, 0),
      t.setFromMatrix3Column(this, 1),
      i.setFromMatrix3Column(this, 2),
      this
    );
  }
  setFromMatrix4(e) {
    const t = e.elements;
    return (
      this.set(t[0], t[4], t[8], t[1], t[5], t[9], t[2], t[6], t[10]), this
    );
  }
  multiply(e) {
    return this.multiplyMatrices(this, e);
  }
  premultiply(e) {
    return this.multiplyMatrices(e, this);
  }
  multiplyMatrices(e, t) {
    const i = e.elements,
      a = t.elements,
      o = this.elements,
      c = i[0],
      u = i[3],
      d = i[6],
      h = i[1],
      p = i[4],
      _ = i[7],
      g = i[2],
      M = i[5],
      T = i[8],
      C = a[0],
      v = a[3],
      m = a[6],
      P = a[1],
      L = a[4],
      b = a[7],
      z = a[2],
      N = a[5],
      U = a[8];
    return (
      (o[0] = c * C + u * P + d * z),
      (o[3] = c * v + u * L + d * N),
      (o[6] = c * m + u * b + d * U),
      (o[1] = h * C + p * P + _ * z),
      (o[4] = h * v + p * L + _ * N),
      (o[7] = h * m + p * b + _ * U),
      (o[2] = g * C + M * P + T * z),
      (o[5] = g * v + M * L + T * N),
      (o[8] = g * m + M * b + T * U),
      this
    );
  }
  multiplyScalar(e) {
    const t = this.elements;
    return (
      (t[0] *= e),
      (t[3] *= e),
      (t[6] *= e),
      (t[1] *= e),
      (t[4] *= e),
      (t[7] *= e),
      (t[2] *= e),
      (t[5] *= e),
      (t[8] *= e),
      this
    );
  }
  determinant() {
    const e = this.elements,
      t = e[0],
      i = e[1],
      a = e[2],
      o = e[3],
      c = e[4],
      u = e[5],
      d = e[6],
      h = e[7],
      p = e[8];
    return (
      t * c * p - t * u * h - i * o * p + i * u * d + a * o * h - a * c * d
    );
  }
  invert() {
    const e = this.elements,
      t = e[0],
      i = e[1],
      a = e[2],
      o = e[3],
      c = e[4],
      u = e[5],
      d = e[6],
      h = e[7],
      p = e[8],
      _ = p * c - u * h,
      g = u * d - p * o,
      M = h * o - c * d,
      T = t * _ + i * g + a * M;
    if (T === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
    const C = 1 / T;
    return (
      (e[0] = _ * C),
      (e[1] = (a * h - p * i) * C),
      (e[2] = (u * i - a * c) * C),
      (e[3] = g * C),
      (e[4] = (p * t - a * d) * C),
      (e[5] = (a * o - u * t) * C),
      (e[6] = M * C),
      (e[7] = (i * d - h * t) * C),
      (e[8] = (c * t - i * o) * C),
      this
    );
  }
  transpose() {
    let e;
    const t = this.elements;
    return (
      (e = t[1]),
      (t[1] = t[3]),
      (t[3] = e),
      (e = t[2]),
      (t[2] = t[6]),
      (t[6] = e),
      (e = t[5]),
      (t[5] = t[7]),
      (t[7] = e),
      this
    );
  }
  getNormalMatrix(e) {
    return this.setFromMatrix4(e).invert().transpose();
  }
  transposeIntoArray(e) {
    const t = this.elements;
    return (
      (e[0] = t[0]),
      (e[1] = t[3]),
      (e[2] = t[6]),
      (e[3] = t[1]),
      (e[4] = t[4]),
      (e[5] = t[7]),
      (e[6] = t[2]),
      (e[7] = t[5]),
      (e[8] = t[8]),
      this
    );
  }
  setUvTransform(e, t, i, a, o, c, u) {
    const d = Math.cos(o),
      h = Math.sin(o);
    return (
      this.set(
        i * d,
        i * h,
        -i * (d * c + h * u) + c + e,
        -a * h,
        a * d,
        -a * (-h * c + d * u) + u + t,
        0,
        0,
        1,
      ),
      this
    );
  }
  scale(e, t) {
    return this.premultiply(rc.makeScale(e, t)), this;
  }
  rotate(e) {
    return this.premultiply(rc.makeRotation(-e)), this;
  }
  translate(e, t) {
    return this.premultiply(rc.makeTranslation(e, t)), this;
  }
  makeTranslation(e, t) {
    return (
      e.isVector2
        ? this.set(1, 0, e.x, 0, 1, e.y, 0, 0, 1)
        : this.set(1, 0, e, 0, 1, t, 0, 0, 1),
      this
    );
  }
  makeRotation(e) {
    const t = Math.cos(e),
      i = Math.sin(e);
    return this.set(t, -i, 0, i, t, 0, 0, 0, 1), this;
  }
  makeScale(e, t) {
    return this.set(e, 0, 0, 0, t, 0, 0, 0, 1), this;
  }
  equals(e) {
    const t = this.elements,
      i = e.elements;
    for (let a = 0; a < 9; a++) if (t[a] !== i[a]) return !1;
    return !0;
  }
  fromArray(e, t = 0) {
    for (let i = 0; i < 9; i++) this.elements[i] = e[i + t];
    return this;
  }
  toArray(e = [], t = 0) {
    const i = this.elements;
    return (
      (e[t] = i[0]),
      (e[t + 1] = i[1]),
      (e[t + 2] = i[2]),
      (e[t + 3] = i[3]),
      (e[t + 4] = i[4]),
      (e[t + 5] = i[5]),
      (e[t + 6] = i[6]),
      (e[t + 7] = i[7]),
      (e[t + 8] = i[8]),
      e
    );
  }
  clone() {
    return new this.constructor().fromArray(this.elements);
  }
}
const rc = new st();
function vp(s) {
  for (let e = s.length - 1; e >= 0; --e) if (s[e] >= 65535) return !0;
  return !1;
}
function Fo(s) {
  return document.createElementNS("http://www.w3.org/1999/xhtml", s);
}
function yS() {
  const s = Fo("canvas");
  return (s.style.display = "block"), s;
}
const ld = {};
function ms(s) {
  s in ld || ((ld[s] = !0), console.warn(s));
}
function TS(s, e, t) {
  return new Promise(function (i, a) {
    function o() {
      switch (s.clientWaitSync(e, s.SYNC_FLUSH_COMMANDS_BIT, 0)) {
        case s.WAIT_FAILED:
          a();
          break;
        case s.TIMEOUT_EXPIRED:
          setTimeout(o, t);
          break;
        default:
          i();
      }
    }
    setTimeout(o, t);
  });
}
function AS(s) {
  const e = s.elements;
  (e[2] = 0.5 * e[2] + 0.5 * e[3]),
    (e[6] = 0.5 * e[6] + 0.5 * e[7]),
    (e[10] = 0.5 * e[10] + 0.5 * e[11]),
    (e[14] = 0.5 * e[14] + 0.5 * e[15]);
}
function wS(s) {
  const e = s.elements;
  e[11] === -1
    ? ((e[10] = -e[10] - 1), (e[14] = -e[14]))
    : ((e[10] = -e[10]), (e[14] = -e[14] + 1));
}
const cd = new st().set(
    0.4123908,
    0.3575843,
    0.1804808,
    0.212639,
    0.7151687,
    0.0721923,
    0.0193308,
    0.1191948,
    0.9505322,
  ),
  ud = new st().set(
    3.2409699,
    -1.5373832,
    -0.4986108,
    -0.9692436,
    1.8759675,
    0.0415551,
    0.0556301,
    -0.203977,
    1.0569715,
  );
function bS() {
  const s = {
      enabled: !0,
      workingColorSpace: ws,
      spaces: {},
      convert: function (a, o, c) {
        return (
          this.enabled === !1 ||
            o === c ||
            !o ||
            !c ||
            (this.spaces[o].transfer === Dt &&
              ((a.r = ki(a.r)), (a.g = ki(a.g)), (a.b = ki(a.b))),
            this.spaces[o].primaries !== this.spaces[c].primaries &&
              (a.applyMatrix3(this.spaces[o].toXYZ),
              a.applyMatrix3(this.spaces[c].fromXYZ)),
            this.spaces[c].transfer === Dt &&
              ((a.r = xs(a.r)), (a.g = xs(a.g)), (a.b = xs(a.b)))),
          a
        );
      },
      fromWorkingColorSpace: function (a, o) {
        return this.convert(a, this.workingColorSpace, o);
      },
      toWorkingColorSpace: function (a, o) {
        return this.convert(a, o, this.workingColorSpace);
      },
      getPrimaries: function (a) {
        return this.spaces[a].primaries;
      },
      getTransfer: function (a) {
        return a === or ? Uo : this.spaces[a].transfer;
      },
      getLuminanceCoefficients: function (a, o = this.workingColorSpace) {
        return a.fromArray(this.spaces[o].luminanceCoefficients);
      },
      define: function (a) {
        Object.assign(this.spaces, a);
      },
      _getMatrix: function (a, o, c) {
        return a.copy(this.spaces[o].toXYZ).multiply(this.spaces[c].fromXYZ);
      },
      _getDrawingBufferColorSpace: function (a) {
        return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace;
      },
      _getUnpackColorSpace: function (a = this.workingColorSpace) {
        return this.spaces[a].workingColorSpaceConfig.unpackColorSpace;
      },
    },
    e = [0.64, 0.33, 0.3, 0.6, 0.15, 0.06],
    t = [0.2126, 0.7152, 0.0722],
    i = [0.3127, 0.329];
  return (
    s.define({
      [ws]: {
        primaries: e,
        whitePoint: i,
        transfer: Uo,
        toXYZ: cd,
        fromXYZ: ud,
        luminanceCoefficients: t,
        workingColorSpaceConfig: { unpackColorSpace: ei },
        outputColorSpaceConfig: { drawingBufferColorSpace: ei },
      },
      [ei]: {
        primaries: e,
        whitePoint: i,
        transfer: Dt,
        toXYZ: cd,
        fromXYZ: ud,
        luminanceCoefficients: t,
        outputColorSpaceConfig: { drawingBufferColorSpace: ei },
      },
    }),
    s
  );
}
const Tt = bS();
function ki(s) {
  return s < 0.04045
    ? s * 0.0773993808
    : Math.pow(s * 0.9478672986 + 0.0521327014, 2.4);
}
function xs(s) {
  return s < 0.0031308 ? s * 12.92 : 1.055 * Math.pow(s, 0.41666) - 0.055;
}
let ts;
class RS {
  static getDataURL(e) {
    if (/^data:/i.test(e.src) || typeof HTMLCanvasElement > "u") return e.src;
    let t;
    if (e instanceof HTMLCanvasElement) t = e;
    else {
      ts === void 0 && (ts = Fo("canvas")),
        (ts.width = e.width),
        (ts.height = e.height);
      const i = ts.getContext("2d");
      e instanceof ImageData
        ? i.putImageData(e, 0, 0)
        : i.drawImage(e, 0, 0, e.width, e.height),
        (t = ts);
    }
    return t.toDataURL("image/png");
  }
  static sRGBToLinear(e) {
    if (
      (typeof HTMLImageElement < "u" && e instanceof HTMLImageElement) ||
      (typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement) ||
      (typeof ImageBitmap < "u" && e instanceof ImageBitmap)
    ) {
      const t = Fo("canvas");
      (t.width = e.width), (t.height = e.height);
      const i = t.getContext("2d");
      i.drawImage(e, 0, 0, e.width, e.height);
      const a = i.getImageData(0, 0, e.width, e.height),
        o = a.data;
      for (let c = 0; c < o.length; c++) o[c] = ki(o[c] / 255) * 255;
      return i.putImageData(a, 0, 0), t;
    } else if (e.data) {
      const t = e.data.slice(0);
      for (let i = 0; i < t.length; i++)
        t instanceof Uint8Array || t instanceof Uint8ClampedArray
          ? (t[i] = Math.floor(ki(t[i] / 255) * 255))
          : (t[i] = ki(t[i]));
      return { data: t, width: e.width, height: e.height };
    } else
      return (
        console.warn(
          "THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.",
        ),
        e
      );
  }
}
let CS = 0;
class xp {
  constructor(e = null) {
    (this.isSource = !0),
      Object.defineProperty(this, "id", { value: CS++ }),
      (this.uuid = la()),
      (this.data = e),
      (this.dataReady = !0),
      (this.version = 0);
  }
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    if (!t && e.images[this.uuid] !== void 0) return e.images[this.uuid];
    const i = { uuid: this.uuid, url: "" },
      a = this.data;
    if (a !== null) {
      let o;
      if (Array.isArray(a)) {
        o = [];
        for (let c = 0, u = a.length; c < u; c++)
          a[c].isDataTexture ? o.push(sc(a[c].image)) : o.push(sc(a[c]));
      } else o = sc(a);
      i.url = o;
    }
    return t || (e.images[this.uuid] = i), i;
  }
}
function sc(s) {
  return (typeof HTMLImageElement < "u" && s instanceof HTMLImageElement) ||
    (typeof HTMLCanvasElement < "u" && s instanceof HTMLCanvasElement) ||
    (typeof ImageBitmap < "u" && s instanceof ImageBitmap)
    ? RS.getDataURL(s)
    : s.data
      ? {
          data: Array.from(s.data),
          width: s.width,
          height: s.height,
          type: s.data.constructor.name,
        }
      : (console.warn("THREE.Texture: Unable to serialize Texture."), {});
}
let PS = 0;
class Un extends Rs {
  constructor(
    e = Un.DEFAULT_IMAGE,
    t = Un.DEFAULT_MAPPING,
    i = Dr,
    a = Dr,
    o = xi,
    c = Ur,
    u = hi,
    d = Wi,
    h = Un.DEFAULT_ANISOTROPY,
    p = or,
  ) {
    super(),
      (this.isTexture = !0),
      Object.defineProperty(this, "id", { value: PS++ }),
      (this.uuid = la()),
      (this.name = ""),
      (this.source = new xp(e)),
      (this.mipmaps = []),
      (this.mapping = t),
      (this.channel = 0),
      (this.wrapS = i),
      (this.wrapT = a),
      (this.magFilter = o),
      (this.minFilter = c),
      (this.anisotropy = h),
      (this.format = u),
      (this.internalFormat = null),
      (this.type = d),
      (this.offset = new He(0, 0)),
      (this.repeat = new He(1, 1)),
      (this.center = new He(0, 0)),
      (this.rotation = 0),
      (this.matrixAutoUpdate = !0),
      (this.matrix = new st()),
      (this.generateMipmaps = !0),
      (this.premultiplyAlpha = !1),
      (this.flipY = !0),
      (this.unpackAlignment = 4),
      (this.colorSpace = p),
      (this.userData = {}),
      (this.version = 0),
      (this.onUpdate = null),
      (this.renderTarget = null),
      (this.isRenderTargetTexture = !1),
      (this.pmremVersion = 0);
  }
  get image() {
    return this.source.data;
  }
  set image(e = null) {
    this.source.data = e;
  }
  updateMatrix() {
    this.matrix.setUvTransform(
      this.offset.x,
      this.offset.y,
      this.repeat.x,
      this.repeat.y,
      this.rotation,
      this.center.x,
      this.center.y,
    );
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return (
      (this.name = e.name),
      (this.source = e.source),
      (this.mipmaps = e.mipmaps.slice(0)),
      (this.mapping = e.mapping),
      (this.channel = e.channel),
      (this.wrapS = e.wrapS),
      (this.wrapT = e.wrapT),
      (this.magFilter = e.magFilter),
      (this.minFilter = e.minFilter),
      (this.anisotropy = e.anisotropy),
      (this.format = e.format),
      (this.internalFormat = e.internalFormat),
      (this.type = e.type),
      this.offset.copy(e.offset),
      this.repeat.copy(e.repeat),
      this.center.copy(e.center),
      (this.rotation = e.rotation),
      (this.matrixAutoUpdate = e.matrixAutoUpdate),
      this.matrix.copy(e.matrix),
      (this.generateMipmaps = e.generateMipmaps),
      (this.premultiplyAlpha = e.premultiplyAlpha),
      (this.flipY = e.flipY),
      (this.unpackAlignment = e.unpackAlignment),
      (this.colorSpace = e.colorSpace),
      (this.renderTarget = e.renderTarget),
      (this.isRenderTargetTexture = e.isRenderTargetTexture),
      (this.userData = JSON.parse(JSON.stringify(e.userData))),
      (this.needsUpdate = !0),
      this
    );
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    if (!t && e.textures[this.uuid] !== void 0) return e.textures[this.uuid];
    const i = {
      metadata: { version: 4.6, type: "Texture", generator: "Texture.toJSON" },
      uuid: this.uuid,
      name: this.name,
      image: this.source.toJSON(e).uuid,
      mapping: this.mapping,
      channel: this.channel,
      repeat: [this.repeat.x, this.repeat.y],
      offset: [this.offset.x, this.offset.y],
      center: [this.center.x, this.center.y],
      rotation: this.rotation,
      wrap: [this.wrapS, this.wrapT],
      format: this.format,
      internalFormat: this.internalFormat,
      type: this.type,
      colorSpace: this.colorSpace,
      minFilter: this.minFilter,
      magFilter: this.magFilter,
      anisotropy: this.anisotropy,
      flipY: this.flipY,
      generateMipmaps: this.generateMipmaps,
      premultiplyAlpha: this.premultiplyAlpha,
      unpackAlignment: this.unpackAlignment,
    };
    return (
      Object.keys(this.userData).length > 0 && (i.userData = this.userData),
      t || (e.textures[this.uuid] = i),
      i
    );
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  transformUv(e) {
    if (this.mapping !== sp) return e;
    if ((e.applyMatrix3(this.matrix), e.x < 0 || e.x > 1))
      switch (this.wrapS) {
        case kc:
          e.x = e.x - Math.floor(e.x);
          break;
        case Dr:
          e.x = e.x < 0 ? 0 : 1;
          break;
        case Wc:
          Math.abs(Math.floor(e.x) % 2) === 1
            ? (e.x = Math.ceil(e.x) - e.x)
            : (e.x = e.x - Math.floor(e.x));
          break;
      }
    if (e.y < 0 || e.y > 1)
      switch (this.wrapT) {
        case kc:
          e.y = e.y - Math.floor(e.y);
          break;
        case Dr:
          e.y = e.y < 0 ? 0 : 1;
          break;
        case Wc:
          Math.abs(Math.floor(e.y) % 2) === 1
            ? (e.y = Math.ceil(e.y) - e.y)
            : (e.y = e.y - Math.floor(e.y));
          break;
      }
    return this.flipY && (e.y = 1 - e.y), e;
  }
  set needsUpdate(e) {
    e === !0 && (this.version++, (this.source.needsUpdate = !0));
  }
  set needsPMREMUpdate(e) {
    e === !0 && this.pmremVersion++;
  }
}
Un.DEFAULT_IMAGE = null;
Un.DEFAULT_MAPPING = sp;
Un.DEFAULT_ANISOTROPY = 1;
class Zt {
  constructor(e = 0, t = 0, i = 0, a = 1) {
    (Zt.prototype.isVector4 = !0),
      (this.x = e),
      (this.y = t),
      (this.z = i),
      (this.w = a);
  }
  get width() {
    return this.z;
  }
  set width(e) {
    this.z = e;
  }
  get height() {
    return this.w;
  }
  set height(e) {
    this.w = e;
  }
  set(e, t, i, a) {
    return (this.x = e), (this.y = t), (this.z = i), (this.w = a), this;
  }
  setScalar(e) {
    return (this.x = e), (this.y = e), (this.z = e), (this.w = e), this;
  }
  setX(e) {
    return (this.x = e), this;
  }
  setY(e) {
    return (this.y = e), this;
  }
  setZ(e) {
    return (this.z = e), this;
  }
  setW(e) {
    return (this.w = e), this;
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      case 2:
        this.z = t;
        break;
      case 3:
        this.w = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      case 3:
        return this.w;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z, this.w);
  }
  copy(e) {
    return (
      (this.x = e.x),
      (this.y = e.y),
      (this.z = e.z),
      (this.w = e.w !== void 0 ? e.w : 1),
      this
    );
  }
  add(e) {
    return (
      (this.x += e.x), (this.y += e.y), (this.z += e.z), (this.w += e.w), this
    );
  }
  addScalar(e) {
    return (this.x += e), (this.y += e), (this.z += e), (this.w += e), this;
  }
  addVectors(e, t) {
    return (
      (this.x = e.x + t.x),
      (this.y = e.y + t.y),
      (this.z = e.z + t.z),
      (this.w = e.w + t.w),
      this
    );
  }
  addScaledVector(e, t) {
    return (
      (this.x += e.x * t),
      (this.y += e.y * t),
      (this.z += e.z * t),
      (this.w += e.w * t),
      this
    );
  }
  sub(e) {
    return (
      (this.x -= e.x), (this.y -= e.y), (this.z -= e.z), (this.w -= e.w), this
    );
  }
  subScalar(e) {
    return (this.x -= e), (this.y -= e), (this.z -= e), (this.w -= e), this;
  }
  subVectors(e, t) {
    return (
      (this.x = e.x - t.x),
      (this.y = e.y - t.y),
      (this.z = e.z - t.z),
      (this.w = e.w - t.w),
      this
    );
  }
  multiply(e) {
    return (
      (this.x *= e.x), (this.y *= e.y), (this.z *= e.z), (this.w *= e.w), this
    );
  }
  multiplyScalar(e) {
    return (this.x *= e), (this.y *= e), (this.z *= e), (this.w *= e), this;
  }
  applyMatrix4(e) {
    const t = this.x,
      i = this.y,
      a = this.z,
      o = this.w,
      c = e.elements;
    return (
      (this.x = c[0] * t + c[4] * i + c[8] * a + c[12] * o),
      (this.y = c[1] * t + c[5] * i + c[9] * a + c[13] * o),
      (this.z = c[2] * t + c[6] * i + c[10] * a + c[14] * o),
      (this.w = c[3] * t + c[7] * i + c[11] * a + c[15] * o),
      this
    );
  }
  divide(e) {
    return (
      (this.x /= e.x), (this.y /= e.y), (this.z /= e.z), (this.w /= e.w), this
    );
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  setAxisAngleFromQuaternion(e) {
    this.w = 2 * Math.acos(e.w);
    const t = Math.sqrt(1 - e.w * e.w);
    return (
      t < 1e-4
        ? ((this.x = 1), (this.y = 0), (this.z = 0))
        : ((this.x = e.x / t), (this.y = e.y / t), (this.z = e.z / t)),
      this
    );
  }
  setAxisAngleFromRotationMatrix(e) {
    let t, i, a, o;
    const d = e.elements,
      h = d[0],
      p = d[4],
      _ = d[8],
      g = d[1],
      M = d[5],
      T = d[9],
      C = d[2],
      v = d[6],
      m = d[10];
    if (
      Math.abs(p - g) < 0.01 &&
      Math.abs(_ - C) < 0.01 &&
      Math.abs(T - v) < 0.01
    ) {
      if (
        Math.abs(p + g) < 0.1 &&
        Math.abs(_ + C) < 0.1 &&
        Math.abs(T + v) < 0.1 &&
        Math.abs(h + M + m - 3) < 0.1
      )
        return this.set(1, 0, 0, 0), this;
      t = Math.PI;
      const L = (h + 1) / 2,
        b = (M + 1) / 2,
        z = (m + 1) / 2,
        N = (p + g) / 4,
        U = (_ + C) / 4,
        G = (T + v) / 4;
      return (
        L > b && L > z
          ? L < 0.01
            ? ((i = 0), (a = 0.707106781), (o = 0.707106781))
            : ((i = Math.sqrt(L)), (a = N / i), (o = U / i))
          : b > z
            ? b < 0.01
              ? ((i = 0.707106781), (a = 0), (o = 0.707106781))
              : ((a = Math.sqrt(b)), (i = N / a), (o = G / a))
            : z < 0.01
              ? ((i = 0.707106781), (a = 0.707106781), (o = 0))
              : ((o = Math.sqrt(z)), (i = U / o), (a = G / o)),
        this.set(i, a, o, t),
        this
      );
    }
    let P = Math.sqrt(
      (v - T) * (v - T) + (_ - C) * (_ - C) + (g - p) * (g - p),
    );
    return (
      Math.abs(P) < 0.001 && (P = 1),
      (this.x = (v - T) / P),
      (this.y = (_ - C) / P),
      (this.z = (g - p) / P),
      (this.w = Math.acos((h + M + m - 1) / 2)),
      this
    );
  }
  setFromMatrixPosition(e) {
    const t = e.elements;
    return (
      (this.x = t[12]),
      (this.y = t[13]),
      (this.z = t[14]),
      (this.w = t[15]),
      this
    );
  }
  min(e) {
    return (
      (this.x = Math.min(this.x, e.x)),
      (this.y = Math.min(this.y, e.y)),
      (this.z = Math.min(this.z, e.z)),
      (this.w = Math.min(this.w, e.w)),
      this
    );
  }
  max(e) {
    return (
      (this.x = Math.max(this.x, e.x)),
      (this.y = Math.max(this.y, e.y)),
      (this.z = Math.max(this.z, e.z)),
      (this.w = Math.max(this.w, e.w)),
      this
    );
  }
  clamp(e, t) {
    return (
      (this.x = Mt(this.x, e.x, t.x)),
      (this.y = Mt(this.y, e.y, t.y)),
      (this.z = Mt(this.z, e.z, t.z)),
      (this.w = Mt(this.w, e.w, t.w)),
      this
    );
  }
  clampScalar(e, t) {
    return (
      (this.x = Mt(this.x, e, t)),
      (this.y = Mt(this.y, e, t)),
      (this.z = Mt(this.z, e, t)),
      (this.w = Mt(this.w, e, t)),
      this
    );
  }
  clampLength(e, t) {
    const i = this.length();
    return this.divideScalar(i || 1).multiplyScalar(Mt(i, e, t));
  }
  floor() {
    return (
      (this.x = Math.floor(this.x)),
      (this.y = Math.floor(this.y)),
      (this.z = Math.floor(this.z)),
      (this.w = Math.floor(this.w)),
      this
    );
  }
  ceil() {
    return (
      (this.x = Math.ceil(this.x)),
      (this.y = Math.ceil(this.y)),
      (this.z = Math.ceil(this.z)),
      (this.w = Math.ceil(this.w)),
      this
    );
  }
  round() {
    return (
      (this.x = Math.round(this.x)),
      (this.y = Math.round(this.y)),
      (this.z = Math.round(this.z)),
      (this.w = Math.round(this.w)),
      this
    );
  }
  roundToZero() {
    return (
      (this.x = Math.trunc(this.x)),
      (this.y = Math.trunc(this.y)),
      (this.z = Math.trunc(this.z)),
      (this.w = Math.trunc(this.w)),
      this
    );
  }
  negate() {
    return (
      (this.x = -this.x),
      (this.y = -this.y),
      (this.z = -this.z),
      (this.w = -this.w),
      this
    );
  }
  dot(e) {
    return this.x * e.x + this.y * e.y + this.z * e.z + this.w * e.w;
  }
  lengthSq() {
    return (
      this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w
    );
  }
  length() {
    return Math.sqrt(
      this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w,
    );
  }
  manhattanLength() {
    return (
      Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w)
    );
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return (
      (this.x += (e.x - this.x) * t),
      (this.y += (e.y - this.y) * t),
      (this.z += (e.z - this.z) * t),
      (this.w += (e.w - this.w) * t),
      this
    );
  }
  lerpVectors(e, t, i) {
    return (
      (this.x = e.x + (t.x - e.x) * i),
      (this.y = e.y + (t.y - e.y) * i),
      (this.z = e.z + (t.z - e.z) * i),
      (this.w = e.w + (t.w - e.w) * i),
      this
    );
  }
  equals(e) {
    return e.x === this.x && e.y === this.y && e.z === this.z && e.w === this.w;
  }
  fromArray(e, t = 0) {
    return (
      (this.x = e[t]),
      (this.y = e[t + 1]),
      (this.z = e[t + 2]),
      (this.w = e[t + 3]),
      this
    );
  }
  toArray(e = [], t = 0) {
    return (
      (e[t] = this.x),
      (e[t + 1] = this.y),
      (e[t + 2] = this.z),
      (e[t + 3] = this.w),
      e
    );
  }
  fromBufferAttribute(e, t) {
    return (
      (this.x = e.getX(t)),
      (this.y = e.getY(t)),
      (this.z = e.getZ(t)),
      (this.w = e.getW(t)),
      this
    );
  }
  random() {
    return (
      (this.x = Math.random()),
      (this.y = Math.random()),
      (this.z = Math.random()),
      (this.w = Math.random()),
      this
    );
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z, yield this.w;
  }
}
class LS extends Rs {
  constructor(e = 1, t = 1, i = {}) {
    super(),
      (this.isRenderTarget = !0),
      (this.width = e),
      (this.height = t),
      (this.depth = 1),
      (this.scissor = new Zt(0, 0, e, t)),
      (this.scissorTest = !1),
      (this.viewport = new Zt(0, 0, e, t));
    const a = { width: e, height: t, depth: 1 };
    i = Object.assign(
      {
        generateMipmaps: !1,
        internalFormat: null,
        minFilter: xi,
        depthBuffer: !0,
        stencilBuffer: !1,
        resolveDepthBuffer: !0,
        resolveStencilBuffer: !0,
        depthTexture: null,
        samples: 0,
        count: 1,
      },
      i,
    );
    const o = new Un(
      a,
      i.mapping,
      i.wrapS,
      i.wrapT,
      i.magFilter,
      i.minFilter,
      i.format,
      i.type,
      i.anisotropy,
      i.colorSpace,
    );
    (o.flipY = !1),
      (o.generateMipmaps = i.generateMipmaps),
      (o.internalFormat = i.internalFormat),
      (this.textures = []);
    const c = i.count;
    for (let u = 0; u < c; u++)
      (this.textures[u] = o.clone()),
        (this.textures[u].isRenderTargetTexture = !0),
        (this.textures[u].renderTarget = this);
    (this.depthBuffer = i.depthBuffer),
      (this.stencilBuffer = i.stencilBuffer),
      (this.resolveDepthBuffer = i.resolveDepthBuffer),
      (this.resolveStencilBuffer = i.resolveStencilBuffer),
      (this._depthTexture = null),
      (this.depthTexture = i.depthTexture),
      (this.samples = i.samples);
  }
  get texture() {
    return this.textures[0];
  }
  set texture(e) {
    this.textures[0] = e;
  }
  set depthTexture(e) {
    this._depthTexture !== null && (this._depthTexture.renderTarget = null),
      e !== null && (e.renderTarget = this),
      (this._depthTexture = e);
  }
  get depthTexture() {
    return this._depthTexture;
  }
  setSize(e, t, i = 1) {
    if (this.width !== e || this.height !== t || this.depth !== i) {
      (this.width = e), (this.height = t), (this.depth = i);
      for (let a = 0, o = this.textures.length; a < o; a++)
        (this.textures[a].image.width = e),
          (this.textures[a].image.height = t),
          (this.textures[a].image.depth = i);
      this.dispose();
    }
    this.viewport.set(0, 0, e, t), this.scissor.set(0, 0, e, t);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    (this.width = e.width),
      (this.height = e.height),
      (this.depth = e.depth),
      this.scissor.copy(e.scissor),
      (this.scissorTest = e.scissorTest),
      this.viewport.copy(e.viewport),
      (this.textures.length = 0);
    for (let i = 0, a = e.textures.length; i < a; i++)
      (this.textures[i] = e.textures[i].clone()),
        (this.textures[i].isRenderTargetTexture = !0),
        (this.textures[i].renderTarget = this);
    const t = Object.assign({}, e.texture.image);
    return (
      (this.texture.source = new xp(t)),
      (this.depthBuffer = e.depthBuffer),
      (this.stencilBuffer = e.stencilBuffer),
      (this.resolveDepthBuffer = e.resolveDepthBuffer),
      (this.resolveStencilBuffer = e.resolveStencilBuffer),
      e.depthTexture !== null && (this.depthTexture = e.depthTexture.clone()),
      (this.samples = e.samples),
      this
    );
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
class Fr extends LS {
  constructor(e = 1, t = 1, i = {}) {
    super(e, t, i), (this.isWebGLRenderTarget = !0);
  }
}
class Mp extends Un {
  constructor(e = null, t = 1, i = 1, a = 1) {
    super(null),
      (this.isDataArrayTexture = !0),
      (this.image = { data: e, width: t, height: i, depth: a }),
      (this.magFilter = di),
      (this.minFilter = di),
      (this.wrapR = Dr),
      (this.generateMipmaps = !1),
      (this.flipY = !1),
      (this.unpackAlignment = 1),
      (this.layerUpdates = new Set());
  }
  addLayerUpdate(e) {
    this.layerUpdates.add(e);
  }
  clearLayerUpdates() {
    this.layerUpdates.clear();
  }
}
class IS extends Un {
  constructor(e = null, t = 1, i = 1, a = 1) {
    super(null),
      (this.isData3DTexture = !0),
      (this.image = { data: e, width: t, height: i, depth: a }),
      (this.magFilter = di),
      (this.minFilter = di),
      (this.wrapR = Dr),
      (this.generateMipmaps = !1),
      (this.flipY = !1),
      (this.unpackAlignment = 1);
  }
}
class ca {
  constructor(e = 0, t = 0, i = 0, a = 1) {
    (this.isQuaternion = !0),
      (this._x = e),
      (this._y = t),
      (this._z = i),
      (this._w = a);
  }
  static slerpFlat(e, t, i, a, o, c, u) {
    let d = i[a + 0],
      h = i[a + 1],
      p = i[a + 2],
      _ = i[a + 3];
    const g = o[c + 0],
      M = o[c + 1],
      T = o[c + 2],
      C = o[c + 3];
    if (u === 0) {
      (e[t + 0] = d), (e[t + 1] = h), (e[t + 2] = p), (e[t + 3] = _);
      return;
    }
    if (u === 1) {
      (e[t + 0] = g), (e[t + 1] = M), (e[t + 2] = T), (e[t + 3] = C);
      return;
    }
    if (_ !== C || d !== g || h !== M || p !== T) {
      let v = 1 - u;
      const m = d * g + h * M + p * T + _ * C,
        P = m >= 0 ? 1 : -1,
        L = 1 - m * m;
      if (L > Number.EPSILON) {
        const z = Math.sqrt(L),
          N = Math.atan2(z, m * P);
        (v = Math.sin(v * N) / z), (u = Math.sin(u * N) / z);
      }
      const b = u * P;
      if (
        ((d = d * v + g * b),
        (h = h * v + M * b),
        (p = p * v + T * b),
        (_ = _ * v + C * b),
        v === 1 - u)
      ) {
        const z = 1 / Math.sqrt(d * d + h * h + p * p + _ * _);
        (d *= z), (h *= z), (p *= z), (_ *= z);
      }
    }
    (e[t] = d), (e[t + 1] = h), (e[t + 2] = p), (e[t + 3] = _);
  }
  static multiplyQuaternionsFlat(e, t, i, a, o, c) {
    const u = i[a],
      d = i[a + 1],
      h = i[a + 2],
      p = i[a + 3],
      _ = o[c],
      g = o[c + 1],
      M = o[c + 2],
      T = o[c + 3];
    return (
      (e[t] = u * T + p * _ + d * M - h * g),
      (e[t + 1] = d * T + p * g + h * _ - u * M),
      (e[t + 2] = h * T + p * M + u * g - d * _),
      (e[t + 3] = p * T - u * _ - d * g - h * M),
      e
    );
  }
  get x() {
    return this._x;
  }
  set x(e) {
    (this._x = e), this._onChangeCallback();
  }
  get y() {
    return this._y;
  }
  set y(e) {
    (this._y = e), this._onChangeCallback();
  }
  get z() {
    return this._z;
  }
  set z(e) {
    (this._z = e), this._onChangeCallback();
  }
  get w() {
    return this._w;
  }
  set w(e) {
    (this._w = e), this._onChangeCallback();
  }
  set(e, t, i, a) {
    return (
      (this._x = e),
      (this._y = t),
      (this._z = i),
      (this._w = a),
      this._onChangeCallback(),
      this
    );
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._w);
  }
  copy(e) {
    return (
      (this._x = e.x),
      (this._y = e.y),
      (this._z = e.z),
      (this._w = e.w),
      this._onChangeCallback(),
      this
    );
  }
  setFromEuler(e, t = !0) {
    const i = e._x,
      a = e._y,
      o = e._z,
      c = e._order,
      u = Math.cos,
      d = Math.sin,
      h = u(i / 2),
      p = u(a / 2),
      _ = u(o / 2),
      g = d(i / 2),
      M = d(a / 2),
      T = d(o / 2);
    switch (c) {
      case "XYZ":
        (this._x = g * p * _ + h * M * T),
          (this._y = h * M * _ - g * p * T),
          (this._z = h * p * T + g * M * _),
          (this._w = h * p * _ - g * M * T);
        break;
      case "YXZ":
        (this._x = g * p * _ + h * M * T),
          (this._y = h * M * _ - g * p * T),
          (this._z = h * p * T - g * M * _),
          (this._w = h * p * _ + g * M * T);
        break;
      case "ZXY":
        (this._x = g * p * _ - h * M * T),
          (this._y = h * M * _ + g * p * T),
          (this._z = h * p * T + g * M * _),
          (this._w = h * p * _ - g * M * T);
        break;
      case "ZYX":
        (this._x = g * p * _ - h * M * T),
          (this._y = h * M * _ + g * p * T),
          (this._z = h * p * T - g * M * _),
          (this._w = h * p * _ + g * M * T);
        break;
      case "YZX":
        (this._x = g * p * _ + h * M * T),
          (this._y = h * M * _ + g * p * T),
          (this._z = h * p * T - g * M * _),
          (this._w = h * p * _ - g * M * T);
        break;
      case "XZY":
        (this._x = g * p * _ - h * M * T),
          (this._y = h * M * _ - g * p * T),
          (this._z = h * p * T + g * M * _),
          (this._w = h * p * _ + g * M * T);
        break;
      default:
        console.warn(
          "THREE.Quaternion: .setFromEuler() encountered an unknown order: " +
            c,
        );
    }
    return t === !0 && this._onChangeCallback(), this;
  }
  setFromAxisAngle(e, t) {
    const i = t / 2,
      a = Math.sin(i);
    return (
      (this._x = e.x * a),
      (this._y = e.y * a),
      (this._z = e.z * a),
      (this._w = Math.cos(i)),
      this._onChangeCallback(),
      this
    );
  }
  setFromRotationMatrix(e) {
    const t = e.elements,
      i = t[0],
      a = t[4],
      o = t[8],
      c = t[1],
      u = t[5],
      d = t[9],
      h = t[2],
      p = t[6],
      _ = t[10],
      g = i + u + _;
    if (g > 0) {
      const M = 0.5 / Math.sqrt(g + 1);
      (this._w = 0.25 / M),
        (this._x = (p - d) * M),
        (this._y = (o - h) * M),
        (this._z = (c - a) * M);
    } else if (i > u && i > _) {
      const M = 2 * Math.sqrt(1 + i - u - _);
      (this._w = (p - d) / M),
        (this._x = 0.25 * M),
        (this._y = (a + c) / M),
        (this._z = (o + h) / M);
    } else if (u > _) {
      const M = 2 * Math.sqrt(1 + u - i - _);
      (this._w = (o - h) / M),
        (this._x = (a + c) / M),
        (this._y = 0.25 * M),
        (this._z = (d + p) / M);
    } else {
      const M = 2 * Math.sqrt(1 + _ - i - u);
      (this._w = (c - a) / M),
        (this._x = (o + h) / M),
        (this._y = (d + p) / M),
        (this._z = 0.25 * M);
    }
    return this._onChangeCallback(), this;
  }
  setFromUnitVectors(e, t) {
    let i = e.dot(t) + 1;
    return (
      i < Number.EPSILON
        ? ((i = 0),
          Math.abs(e.x) > Math.abs(e.z)
            ? ((this._x = -e.y), (this._y = e.x), (this._z = 0), (this._w = i))
            : ((this._x = 0), (this._y = -e.z), (this._z = e.y), (this._w = i)))
        : ((this._x = e.y * t.z - e.z * t.y),
          (this._y = e.z * t.x - e.x * t.z),
          (this._z = e.x * t.y - e.y * t.x),
          (this._w = i)),
      this.normalize()
    );
  }
  angleTo(e) {
    return 2 * Math.acos(Math.abs(Mt(this.dot(e), -1, 1)));
  }
  rotateTowards(e, t) {
    const i = this.angleTo(e);
    if (i === 0) return this;
    const a = Math.min(1, t / i);
    return this.slerp(e, a), this;
  }
  identity() {
    return this.set(0, 0, 0, 1);
  }
  invert() {
    return this.conjugate();
  }
  conjugate() {
    return (
      (this._x *= -1),
      (this._y *= -1),
      (this._z *= -1),
      this._onChangeCallback(),
      this
    );
  }
  dot(e) {
    return this._x * e._x + this._y * e._y + this._z * e._z + this._w * e._w;
  }
  lengthSq() {
    return (
      this._x * this._x +
      this._y * this._y +
      this._z * this._z +
      this._w * this._w
    );
  }
  length() {
    return Math.sqrt(
      this._x * this._x +
        this._y * this._y +
        this._z * this._z +
        this._w * this._w,
    );
  }
  normalize() {
    let e = this.length();
    return (
      e === 0
        ? ((this._x = 0), (this._y = 0), (this._z = 0), (this._w = 1))
        : ((e = 1 / e),
          (this._x = this._x * e),
          (this._y = this._y * e),
          (this._z = this._z * e),
          (this._w = this._w * e)),
      this._onChangeCallback(),
      this
    );
  }
  multiply(e) {
    return this.multiplyQuaternions(this, e);
  }
  premultiply(e) {
    return this.multiplyQuaternions(e, this);
  }
  multiplyQuaternions(e, t) {
    const i = e._x,
      a = e._y,
      o = e._z,
      c = e._w,
      u = t._x,
      d = t._y,
      h = t._z,
      p = t._w;
    return (
      (this._x = i * p + c * u + a * h - o * d),
      (this._y = a * p + c * d + o * u - i * h),
      (this._z = o * p + c * h + i * d - a * u),
      (this._w = c * p - i * u - a * d - o * h),
      this._onChangeCallback(),
      this
    );
  }
  slerp(e, t) {
    if (t === 0) return this;
    if (t === 1) return this.copy(e);
    const i = this._x,
      a = this._y,
      o = this._z,
      c = this._w;
    let u = c * e._w + i * e._x + a * e._y + o * e._z;
    if (
      (u < 0
        ? ((this._w = -e._w),
          (this._x = -e._x),
          (this._y = -e._y),
          (this._z = -e._z),
          (u = -u))
        : this.copy(e),
      u >= 1)
    )
      return (this._w = c), (this._x = i), (this._y = a), (this._z = o), this;
    const d = 1 - u * u;
    if (d <= Number.EPSILON) {
      const M = 1 - t;
      return (
        (this._w = M * c + t * this._w),
        (this._x = M * i + t * this._x),
        (this._y = M * a + t * this._y),
        (this._z = M * o + t * this._z),
        this.normalize(),
        this
      );
    }
    const h = Math.sqrt(d),
      p = Math.atan2(h, u),
      _ = Math.sin((1 - t) * p) / h,
      g = Math.sin(t * p) / h;
    return (
      (this._w = c * _ + this._w * g),
      (this._x = i * _ + this._x * g),
      (this._y = a * _ + this._y * g),
      (this._z = o * _ + this._z * g),
      this._onChangeCallback(),
      this
    );
  }
  slerpQuaternions(e, t, i) {
    return this.copy(e).slerp(t, i);
  }
  random() {
    const e = 2 * Math.PI * Math.random(),
      t = 2 * Math.PI * Math.random(),
      i = Math.random(),
      a = Math.sqrt(1 - i),
      o = Math.sqrt(i);
    return this.set(
      a * Math.sin(e),
      a * Math.cos(e),
      o * Math.sin(t),
      o * Math.cos(t),
    );
  }
  equals(e) {
    return (
      e._x === this._x &&
      e._y === this._y &&
      e._z === this._z &&
      e._w === this._w
    );
  }
  fromArray(e, t = 0) {
    return (
      (this._x = e[t]),
      (this._y = e[t + 1]),
      (this._z = e[t + 2]),
      (this._w = e[t + 3]),
      this._onChangeCallback(),
      this
    );
  }
  toArray(e = [], t = 0) {
    return (
      (e[t] = this._x),
      (e[t + 1] = this._y),
      (e[t + 2] = this._z),
      (e[t + 3] = this._w),
      e
    );
  }
  fromBufferAttribute(e, t) {
    return (
      (this._x = e.getX(t)),
      (this._y = e.getY(t)),
      (this._z = e.getZ(t)),
      (this._w = e.getW(t)),
      this._onChangeCallback(),
      this
    );
  }
  toJSON() {
    return this.toArray();
  }
  _onChange(e) {
    return (this._onChangeCallback = e), this;
  }
  _onChangeCallback() {}
  *[Symbol.iterator]() {
    yield this._x, yield this._y, yield this._z, yield this._w;
  }
}
class W {
  constructor(e = 0, t = 0, i = 0) {
    (W.prototype.isVector3 = !0), (this.x = e), (this.y = t), (this.z = i);
  }
  set(e, t, i) {
    return (
      i === void 0 && (i = this.z),
      (this.x = e),
      (this.y = t),
      (this.z = i),
      this
    );
  }
  setScalar(e) {
    return (this.x = e), (this.y = e), (this.z = e), this;
  }
  setX(e) {
    return (this.x = e), this;
  }
  setY(e) {
    return (this.y = e), this;
  }
  setZ(e) {
    return (this.z = e), this;
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      case 2:
        this.z = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z);
  }
  copy(e) {
    return (this.x = e.x), (this.y = e.y), (this.z = e.z), this;
  }
  add(e) {
    return (this.x += e.x), (this.y += e.y), (this.z += e.z), this;
  }
  addScalar(e) {
    return (this.x += e), (this.y += e), (this.z += e), this;
  }
  addVectors(e, t) {
    return (
      (this.x = e.x + t.x), (this.y = e.y + t.y), (this.z = e.z + t.z), this
    );
  }
  addScaledVector(e, t) {
    return (this.x += e.x * t), (this.y += e.y * t), (this.z += e.z * t), this;
  }
  sub(e) {
    return (this.x -= e.x), (this.y -= e.y), (this.z -= e.z), this;
  }
  subScalar(e) {
    return (this.x -= e), (this.y -= e), (this.z -= e), this;
  }
  subVectors(e, t) {
    return (
      (this.x = e.x - t.x), (this.y = e.y - t.y), (this.z = e.z - t.z), this
    );
  }
  multiply(e) {
    return (this.x *= e.x), (this.y *= e.y), (this.z *= e.z), this;
  }
  multiplyScalar(e) {
    return (this.x *= e), (this.y *= e), (this.z *= e), this;
  }
  multiplyVectors(e, t) {
    return (
      (this.x = e.x * t.x), (this.y = e.y * t.y), (this.z = e.z * t.z), this
    );
  }
  applyEuler(e) {
    return this.applyQuaternion(fd.setFromEuler(e));
  }
  applyAxisAngle(e, t) {
    return this.applyQuaternion(fd.setFromAxisAngle(e, t));
  }
  applyMatrix3(e) {
    const t = this.x,
      i = this.y,
      a = this.z,
      o = e.elements;
    return (
      (this.x = o[0] * t + o[3] * i + o[6] * a),
      (this.y = o[1] * t + o[4] * i + o[7] * a),
      (this.z = o[2] * t + o[5] * i + o[8] * a),
      this
    );
  }
  applyNormalMatrix(e) {
    return this.applyMatrix3(e).normalize();
  }
  applyMatrix4(e) {
    const t = this.x,
      i = this.y,
      a = this.z,
      o = e.elements,
      c = 1 / (o[3] * t + o[7] * i + o[11] * a + o[15]);
    return (
      (this.x = (o[0] * t + o[4] * i + o[8] * a + o[12]) * c),
      (this.y = (o[1] * t + o[5] * i + o[9] * a + o[13]) * c),
      (this.z = (o[2] * t + o[6] * i + o[10] * a + o[14]) * c),
      this
    );
  }
  applyQuaternion(e) {
    const t = this.x,
      i = this.y,
      a = this.z,
      o = e.x,
      c = e.y,
      u = e.z,
      d = e.w,
      h = 2 * (c * a - u * i),
      p = 2 * (u * t - o * a),
      _ = 2 * (o * i - c * t);
    return (
      (this.x = t + d * h + c * _ - u * p),
      (this.y = i + d * p + u * h - o * _),
      (this.z = a + d * _ + o * p - c * h),
      this
    );
  }
  project(e) {
    return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(
      e.projectionMatrix,
    );
  }
  unproject(e) {
    return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(
      e.matrixWorld,
    );
  }
  transformDirection(e) {
    const t = this.x,
      i = this.y,
      a = this.z,
      o = e.elements;
    return (
      (this.x = o[0] * t + o[4] * i + o[8] * a),
      (this.y = o[1] * t + o[5] * i + o[9] * a),
      (this.z = o[2] * t + o[6] * i + o[10] * a),
      this.normalize()
    );
  }
  divide(e) {
    return (this.x /= e.x), (this.y /= e.y), (this.z /= e.z), this;
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  min(e) {
    return (
      (this.x = Math.min(this.x, e.x)),
      (this.y = Math.min(this.y, e.y)),
      (this.z = Math.min(this.z, e.z)),
      this
    );
  }
  max(e) {
    return (
      (this.x = Math.max(this.x, e.x)),
      (this.y = Math.max(this.y, e.y)),
      (this.z = Math.max(this.z, e.z)),
      this
    );
  }
  clamp(e, t) {
    return (
      (this.x = Mt(this.x, e.x, t.x)),
      (this.y = Mt(this.y, e.y, t.y)),
      (this.z = Mt(this.z, e.z, t.z)),
      this
    );
  }
  clampScalar(e, t) {
    return (
      (this.x = Mt(this.x, e, t)),
      (this.y = Mt(this.y, e, t)),
      (this.z = Mt(this.z, e, t)),
      this
    );
  }
  clampLength(e, t) {
    const i = this.length();
    return this.divideScalar(i || 1).multiplyScalar(Mt(i, e, t));
  }
  floor() {
    return (
      (this.x = Math.floor(this.x)),
      (this.y = Math.floor(this.y)),
      (this.z = Math.floor(this.z)),
      this
    );
  }
  ceil() {
    return (
      (this.x = Math.ceil(this.x)),
      (this.y = Math.ceil(this.y)),
      (this.z = Math.ceil(this.z)),
      this
    );
  }
  round() {
    return (
      (this.x = Math.round(this.x)),
      (this.y = Math.round(this.y)),
      (this.z = Math.round(this.z)),
      this
    );
  }
  roundToZero() {
    return (
      (this.x = Math.trunc(this.x)),
      (this.y = Math.trunc(this.y)),
      (this.z = Math.trunc(this.z)),
      this
    );
  }
  negate() {
    return (this.x = -this.x), (this.y = -this.y), (this.z = -this.z), this;
  }
  dot(e) {
    return this.x * e.x + this.y * e.y + this.z * e.z;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y + this.z * this.z;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return (
      (this.x += (e.x - this.x) * t),
      (this.y += (e.y - this.y) * t),
      (this.z += (e.z - this.z) * t),
      this
    );
  }
  lerpVectors(e, t, i) {
    return (
      (this.x = e.x + (t.x - e.x) * i),
      (this.y = e.y + (t.y - e.y) * i),
      (this.z = e.z + (t.z - e.z) * i),
      this
    );
  }
  cross(e) {
    return this.crossVectors(this, e);
  }
  crossVectors(e, t) {
    const i = e.x,
      a = e.y,
      o = e.z,
      c = t.x,
      u = t.y,
      d = t.z;
    return (
      (this.x = a * d - o * u),
      (this.y = o * c - i * d),
      (this.z = i * u - a * c),
      this
    );
  }
  projectOnVector(e) {
    const t = e.lengthSq();
    if (t === 0) return this.set(0, 0, 0);
    const i = e.dot(this) / t;
    return this.copy(e).multiplyScalar(i);
  }
  projectOnPlane(e) {
    return ac.copy(this).projectOnVector(e), this.sub(ac);
  }
  reflect(e) {
    return this.sub(ac.copy(e).multiplyScalar(2 * this.dot(e)));
  }
  angleTo(e) {
    const t = Math.sqrt(this.lengthSq() * e.lengthSq());
    if (t === 0) return Math.PI / 2;
    const i = this.dot(e) / t;
    return Math.acos(Mt(i, -1, 1));
  }
  distanceTo(e) {
    return Math.sqrt(this.distanceToSquared(e));
  }
  distanceToSquared(e) {
    const t = this.x - e.x,
      i = this.y - e.y,
      a = this.z - e.z;
    return t * t + i * i + a * a;
  }
  manhattanDistanceTo(e) {
    return (
      Math.abs(this.x - e.x) + Math.abs(this.y - e.y) + Math.abs(this.z - e.z)
    );
  }
  setFromSpherical(e) {
    return this.setFromSphericalCoords(e.radius, e.phi, e.theta);
  }
  setFromSphericalCoords(e, t, i) {
    const a = Math.sin(t) * e;
    return (
      (this.x = a * Math.sin(i)),
      (this.y = Math.cos(t) * e),
      (this.z = a * Math.cos(i)),
      this
    );
  }
  setFromCylindrical(e) {
    return this.setFromCylindricalCoords(e.radius, e.theta, e.y);
  }
  setFromCylindricalCoords(e, t, i) {
    return (
      (this.x = e * Math.sin(t)), (this.y = i), (this.z = e * Math.cos(t)), this
    );
  }
  setFromMatrixPosition(e) {
    const t = e.elements;
    return (this.x = t[12]), (this.y = t[13]), (this.z = t[14]), this;
  }
  setFromMatrixScale(e) {
    const t = this.setFromMatrixColumn(e, 0).length(),
      i = this.setFromMatrixColumn(e, 1).length(),
      a = this.setFromMatrixColumn(e, 2).length();
    return (this.x = t), (this.y = i), (this.z = a), this;
  }
  setFromMatrixColumn(e, t) {
    return this.fromArray(e.elements, t * 4);
  }
  setFromMatrix3Column(e, t) {
    return this.fromArray(e.elements, t * 3);
  }
  setFromEuler(e) {
    return (this.x = e._x), (this.y = e._y), (this.z = e._z), this;
  }
  setFromColor(e) {
    return (this.x = e.r), (this.y = e.g), (this.z = e.b), this;
  }
  equals(e) {
    return e.x === this.x && e.y === this.y && e.z === this.z;
  }
  fromArray(e, t = 0) {
    return (this.x = e[t]), (this.y = e[t + 1]), (this.z = e[t + 2]), this;
  }
  toArray(e = [], t = 0) {
    return (e[t] = this.x), (e[t + 1] = this.y), (e[t + 2] = this.z), e;
  }
  fromBufferAttribute(e, t) {
    return (
      (this.x = e.getX(t)), (this.y = e.getY(t)), (this.z = e.getZ(t)), this
    );
  }
  random() {
    return (
      (this.x = Math.random()),
      (this.y = Math.random()),
      (this.z = Math.random()),
      this
    );
  }
  randomDirection() {
    const e = Math.random() * Math.PI * 2,
      t = Math.random() * 2 - 1,
      i = Math.sqrt(1 - t * t);
    return (
      (this.x = i * Math.cos(e)), (this.y = t), (this.z = i * Math.sin(e)), this
    );
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z;
  }
}
const ac = new W(),
  fd = new ca();
class ua {
  constructor(
    e = new W(1 / 0, 1 / 0, 1 / 0),
    t = new W(-1 / 0, -1 / 0, -1 / 0),
  ) {
    (this.isBox3 = !0), (this.min = e), (this.max = t);
  }
  set(e, t) {
    return this.min.copy(e), this.max.copy(t), this;
  }
  setFromArray(e) {
    this.makeEmpty();
    for (let t = 0, i = e.length; t < i; t += 3)
      this.expandByPoint(li.fromArray(e, t));
    return this;
  }
  setFromBufferAttribute(e) {
    this.makeEmpty();
    for (let t = 0, i = e.count; t < i; t++)
      this.expandByPoint(li.fromBufferAttribute(e, t));
    return this;
  }
  setFromPoints(e) {
    this.makeEmpty();
    for (let t = 0, i = e.length; t < i; t++) this.expandByPoint(e[t]);
    return this;
  }
  setFromCenterAndSize(e, t) {
    const i = li.copy(t).multiplyScalar(0.5);
    return this.min.copy(e).sub(i), this.max.copy(e).add(i), this;
  }
  setFromObject(e, t = !1) {
    return this.makeEmpty(), this.expandByObject(e, t);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return this.min.copy(e.min), this.max.copy(e.max), this;
  }
  makeEmpty() {
    return (
      (this.min.x = this.min.y = this.min.z = 1 / 0),
      (this.max.x = this.max.y = this.max.z = -1 / 0),
      this
    );
  }
  isEmpty() {
    return (
      this.max.x < this.min.x ||
      this.max.y < this.min.y ||
      this.max.z < this.min.z
    );
  }
  getCenter(e) {
    return this.isEmpty()
      ? e.set(0, 0, 0)
      : e.addVectors(this.min, this.max).multiplyScalar(0.5);
  }
  getSize(e) {
    return this.isEmpty() ? e.set(0, 0, 0) : e.subVectors(this.max, this.min);
  }
  expandByPoint(e) {
    return this.min.min(e), this.max.max(e), this;
  }
  expandByVector(e) {
    return this.min.sub(e), this.max.add(e), this;
  }
  expandByScalar(e) {
    return this.min.addScalar(-e), this.max.addScalar(e), this;
  }
  expandByObject(e, t = !1) {
    e.updateWorldMatrix(!1, !1);
    const i = e.geometry;
    if (i !== void 0) {
      const o = i.getAttribute("position");
      if (t === !0 && o !== void 0 && e.isInstancedMesh !== !0)
        for (let c = 0, u = o.count; c < u; c++)
          e.isMesh === !0
            ? e.getVertexPosition(c, li)
            : li.fromBufferAttribute(o, c),
            li.applyMatrix4(e.matrixWorld),
            this.expandByPoint(li);
      else
        e.boundingBox !== void 0
          ? (e.boundingBox === null && e.computeBoundingBox(),
            so.copy(e.boundingBox))
          : (i.boundingBox === null && i.computeBoundingBox(),
            so.copy(i.boundingBox)),
          so.applyMatrix4(e.matrixWorld),
          this.union(so);
    }
    const a = e.children;
    for (let o = 0, c = a.length; o < c; o++) this.expandByObject(a[o], t);
    return this;
  }
  containsPoint(e) {
    return (
      e.x >= this.min.x &&
      e.x <= this.max.x &&
      e.y >= this.min.y &&
      e.y <= this.max.y &&
      e.z >= this.min.z &&
      e.z <= this.max.z
    );
  }
  containsBox(e) {
    return (
      this.min.x <= e.min.x &&
      e.max.x <= this.max.x &&
      this.min.y <= e.min.y &&
      e.max.y <= this.max.y &&
      this.min.z <= e.min.z &&
      e.max.z <= this.max.z
    );
  }
  getParameter(e, t) {
    return t.set(
      (e.x - this.min.x) / (this.max.x - this.min.x),
      (e.y - this.min.y) / (this.max.y - this.min.y),
      (e.z - this.min.z) / (this.max.z - this.min.z),
    );
  }
  intersectsBox(e) {
    return (
      e.max.x >= this.min.x &&
      e.min.x <= this.max.x &&
      e.max.y >= this.min.y &&
      e.min.y <= this.max.y &&
      e.max.z >= this.min.z &&
      e.min.z <= this.max.z
    );
  }
  intersectsSphere(e) {
    return (
      this.clampPoint(e.center, li),
      li.distanceToSquared(e.center) <= e.radius * e.radius
    );
  }
  intersectsPlane(e) {
    let t, i;
    return (
      e.normal.x > 0
        ? ((t = e.normal.x * this.min.x), (i = e.normal.x * this.max.x))
        : ((t = e.normal.x * this.max.x), (i = e.normal.x * this.min.x)),
      e.normal.y > 0
        ? ((t += e.normal.y * this.min.y), (i += e.normal.y * this.max.y))
        : ((t += e.normal.y * this.max.y), (i += e.normal.y * this.min.y)),
      e.normal.z > 0
        ? ((t += e.normal.z * this.min.z), (i += e.normal.z * this.max.z))
        : ((t += e.normal.z * this.max.z), (i += e.normal.z * this.min.z)),
      t <= -e.constant && i >= -e.constant
    );
  }
  intersectsTriangle(e) {
    if (this.isEmpty()) return !1;
    this.getCenter(Ys),
      ao.subVectors(this.max, Ys),
      ns.subVectors(e.a, Ys),
      is.subVectors(e.b, Ys),
      rs.subVectors(e.c, Ys),
      tr.subVectors(is, ns),
      nr.subVectors(rs, is),
      Er.subVectors(ns, rs);
    let t = [
      0,
      -tr.z,
      tr.y,
      0,
      -nr.z,
      nr.y,
      0,
      -Er.z,
      Er.y,
      tr.z,
      0,
      -tr.x,
      nr.z,
      0,
      -nr.x,
      Er.z,
      0,
      -Er.x,
      -tr.y,
      tr.x,
      0,
      -nr.y,
      nr.x,
      0,
      -Er.y,
      Er.x,
      0,
    ];
    return !oc(t, ns, is, rs, ao) ||
      ((t = [1, 0, 0, 0, 1, 0, 0, 0, 1]), !oc(t, ns, is, rs, ao))
      ? !1
      : (oo.crossVectors(tr, nr),
        (t = [oo.x, oo.y, oo.z]),
        oc(t, ns, is, rs, ao));
  }
  clampPoint(e, t) {
    return t.copy(e).clamp(this.min, this.max);
  }
  distanceToPoint(e) {
    return this.clampPoint(e, li).distanceTo(e);
  }
  getBoundingSphere(e) {
    return (
      this.isEmpty()
        ? e.makeEmpty()
        : (this.getCenter(e.center),
          (e.radius = this.getSize(li).length() * 0.5)),
      e
    );
  }
  intersect(e) {
    return (
      this.min.max(e.min),
      this.max.min(e.max),
      this.isEmpty() && this.makeEmpty(),
      this
    );
  }
  union(e) {
    return this.min.min(e.min), this.max.max(e.max), this;
  }
  applyMatrix4(e) {
    return this.isEmpty()
      ? this
      : (Di[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(e),
        Di[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(e),
        Di[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(e),
        Di[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(e),
        Di[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(e),
        Di[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(e),
        Di[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(e),
        Di[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(e),
        this.setFromPoints(Di),
        this);
  }
  translate(e) {
    return this.min.add(e), this.max.add(e), this;
  }
  equals(e) {
    return e.min.equals(this.min) && e.max.equals(this.max);
  }
}
const Di = [
    new W(),
    new W(),
    new W(),
    new W(),
    new W(),
    new W(),
    new W(),
    new W(),
  ],
  li = new W(),
  so = new ua(),
  ns = new W(),
  is = new W(),
  rs = new W(),
  tr = new W(),
  nr = new W(),
  Er = new W(),
  Ys = new W(),
  ao = new W(),
  oo = new W(),
  yr = new W();
function oc(s, e, t, i, a) {
  for (let o = 0, c = s.length - 3; o <= c; o += 3) {
    yr.fromArray(s, o);
    const u =
        a.x * Math.abs(yr.x) + a.y * Math.abs(yr.y) + a.z * Math.abs(yr.z),
      d = e.dot(yr),
      h = t.dot(yr),
      p = i.dot(yr);
    if (Math.max(-Math.max(d, h, p), Math.min(d, h, p)) > u) return !1;
  }
  return !0;
}
const DS = new ua(),
  Zs = new W(),
  lc = new W();
class Pu {
  constructor(e = new W(), t = -1) {
    (this.isSphere = !0), (this.center = e), (this.radius = t);
  }
  set(e, t) {
    return this.center.copy(e), (this.radius = t), this;
  }
  setFromPoints(e, t) {
    const i = this.center;
    t !== void 0 ? i.copy(t) : DS.setFromPoints(e).getCenter(i);
    let a = 0;
    for (let o = 0, c = e.length; o < c; o++)
      a = Math.max(a, i.distanceToSquared(e[o]));
    return (this.radius = Math.sqrt(a)), this;
  }
  copy(e) {
    return this.center.copy(e.center), (this.radius = e.radius), this;
  }
  isEmpty() {
    return this.radius < 0;
  }
  makeEmpty() {
    return this.center.set(0, 0, 0), (this.radius = -1), this;
  }
  containsPoint(e) {
    return e.distanceToSquared(this.center) <= this.radius * this.radius;
  }
  distanceToPoint(e) {
    return e.distanceTo(this.center) - this.radius;
  }
  intersectsSphere(e) {
    const t = this.radius + e.radius;
    return e.center.distanceToSquared(this.center) <= t * t;
  }
  intersectsBox(e) {
    return e.intersectsSphere(this);
  }
  intersectsPlane(e) {
    return Math.abs(e.distanceToPoint(this.center)) <= this.radius;
  }
  clampPoint(e, t) {
    const i = this.center.distanceToSquared(e);
    return (
      t.copy(e),
      i > this.radius * this.radius &&
        (t.sub(this.center).normalize(),
        t.multiplyScalar(this.radius).add(this.center)),
      t
    );
  }
  getBoundingBox(e) {
    return this.isEmpty()
      ? (e.makeEmpty(), e)
      : (e.set(this.center, this.center), e.expandByScalar(this.radius), e);
  }
  applyMatrix4(e) {
    return (
      this.center.applyMatrix4(e),
      (this.radius = this.radius * e.getMaxScaleOnAxis()),
      this
    );
  }
  translate(e) {
    return this.center.add(e), this;
  }
  expandByPoint(e) {
    if (this.isEmpty()) return this.center.copy(e), (this.radius = 0), this;
    Zs.subVectors(e, this.center);
    const t = Zs.lengthSq();
    if (t > this.radius * this.radius) {
      const i = Math.sqrt(t),
        a = (i - this.radius) * 0.5;
      this.center.addScaledVector(Zs, a / i), (this.radius += a);
    }
    return this;
  }
  union(e) {
    return e.isEmpty()
      ? this
      : this.isEmpty()
        ? (this.copy(e), this)
        : (this.center.equals(e.center) === !0
            ? (this.radius = Math.max(this.radius, e.radius))
            : (lc.subVectors(e.center, this.center).setLength(e.radius),
              this.expandByPoint(Zs.copy(e.center).add(lc)),
              this.expandByPoint(Zs.copy(e.center).sub(lc))),
          this);
  }
  equals(e) {
    return e.center.equals(this.center) && e.radius === this.radius;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const Ui = new W(),
  cc = new W(),
  lo = new W(),
  ir = new W(),
  uc = new W(),
  co = new W(),
  fc = new W();
class US {
  constructor(e = new W(), t = new W(0, 0, -1)) {
    (this.origin = e), (this.direction = t);
  }
  set(e, t) {
    return this.origin.copy(e), this.direction.copy(t), this;
  }
  copy(e) {
    return this.origin.copy(e.origin), this.direction.copy(e.direction), this;
  }
  at(e, t) {
    return t.copy(this.origin).addScaledVector(this.direction, e);
  }
  lookAt(e) {
    return this.direction.copy(e).sub(this.origin).normalize(), this;
  }
  recast(e) {
    return this.origin.copy(this.at(e, Ui)), this;
  }
  closestPointToPoint(e, t) {
    t.subVectors(e, this.origin);
    const i = t.dot(this.direction);
    return i < 0
      ? t.copy(this.origin)
      : t.copy(this.origin).addScaledVector(this.direction, i);
  }
  distanceToPoint(e) {
    return Math.sqrt(this.distanceSqToPoint(e));
  }
  distanceSqToPoint(e) {
    const t = Ui.subVectors(e, this.origin).dot(this.direction);
    return t < 0
      ? this.origin.distanceToSquared(e)
      : (Ui.copy(this.origin).addScaledVector(this.direction, t),
        Ui.distanceToSquared(e));
  }
  distanceSqToSegment(e, t, i, a) {
    cc.copy(e).add(t).multiplyScalar(0.5),
      lo.copy(t).sub(e).normalize(),
      ir.copy(this.origin).sub(cc);
    const o = e.distanceTo(t) * 0.5,
      c = -this.direction.dot(lo),
      u = ir.dot(this.direction),
      d = -ir.dot(lo),
      h = ir.lengthSq(),
      p = Math.abs(1 - c * c);
    let _, g, M, T;
    if (p > 0)
      if (((_ = c * d - u), (g = c * u - d), (T = o * p), _ >= 0))
        if (g >= -T)
          if (g <= T) {
            const C = 1 / p;
            (_ *= C),
              (g *= C),
              (M = _ * (_ + c * g + 2 * u) + g * (c * _ + g + 2 * d) + h);
          } else
            (g = o),
              (_ = Math.max(0, -(c * g + u))),
              (M = -_ * _ + g * (g + 2 * d) + h);
        else
          (g = -o),
            (_ = Math.max(0, -(c * g + u))),
            (M = -_ * _ + g * (g + 2 * d) + h);
      else
        g <= -T
          ? ((_ = Math.max(0, -(-c * o + u))),
            (g = _ > 0 ? -o : Math.min(Math.max(-o, -d), o)),
            (M = -_ * _ + g * (g + 2 * d) + h))
          : g <= T
            ? ((_ = 0),
              (g = Math.min(Math.max(-o, -d), o)),
              (M = g * (g + 2 * d) + h))
            : ((_ = Math.max(0, -(c * o + u))),
              (g = _ > 0 ? o : Math.min(Math.max(-o, -d), o)),
              (M = -_ * _ + g * (g + 2 * d) + h));
    else
      (g = c > 0 ? -o : o),
        (_ = Math.max(0, -(c * g + u))),
        (M = -_ * _ + g * (g + 2 * d) + h);
    return (
      i && i.copy(this.origin).addScaledVector(this.direction, _),
      a && a.copy(cc).addScaledVector(lo, g),
      M
    );
  }
  intersectSphere(e, t) {
    Ui.subVectors(e.center, this.origin);
    const i = Ui.dot(this.direction),
      a = Ui.dot(Ui) - i * i,
      o = e.radius * e.radius;
    if (a > o) return null;
    const c = Math.sqrt(o - a),
      u = i - c,
      d = i + c;
    return d < 0 ? null : u < 0 ? this.at(d, t) : this.at(u, t);
  }
  intersectsSphere(e) {
    return this.distanceSqToPoint(e.center) <= e.radius * e.radius;
  }
  distanceToPlane(e) {
    const t = e.normal.dot(this.direction);
    if (t === 0) return e.distanceToPoint(this.origin) === 0 ? 0 : null;
    const i = -(this.origin.dot(e.normal) + e.constant) / t;
    return i >= 0 ? i : null;
  }
  intersectPlane(e, t) {
    const i = this.distanceToPlane(e);
    return i === null ? null : this.at(i, t);
  }
  intersectsPlane(e) {
    const t = e.distanceToPoint(this.origin);
    return t === 0 || e.normal.dot(this.direction) * t < 0;
  }
  intersectBox(e, t) {
    let i, a, o, c, u, d;
    const h = 1 / this.direction.x,
      p = 1 / this.direction.y,
      _ = 1 / this.direction.z,
      g = this.origin;
    return (
      h >= 0
        ? ((i = (e.min.x - g.x) * h), (a = (e.max.x - g.x) * h))
        : ((i = (e.max.x - g.x) * h), (a = (e.min.x - g.x) * h)),
      p >= 0
        ? ((o = (e.min.y - g.y) * p), (c = (e.max.y - g.y) * p))
        : ((o = (e.max.y - g.y) * p), (c = (e.min.y - g.y) * p)),
      i > c ||
      o > a ||
      ((o > i || isNaN(i)) && (i = o),
      (c < a || isNaN(a)) && (a = c),
      _ >= 0
        ? ((u = (e.min.z - g.z) * _), (d = (e.max.z - g.z) * _))
        : ((u = (e.max.z - g.z) * _), (d = (e.min.z - g.z) * _)),
      i > d || u > a) ||
      ((u > i || i !== i) && (i = u), (d < a || a !== a) && (a = d), a < 0)
        ? null
        : this.at(i >= 0 ? i : a, t)
    );
  }
  intersectsBox(e) {
    return this.intersectBox(e, Ui) !== null;
  }
  intersectTriangle(e, t, i, a, o) {
    uc.subVectors(t, e), co.subVectors(i, e), fc.crossVectors(uc, co);
    let c = this.direction.dot(fc),
      u;
    if (c > 0) {
      if (a) return null;
      u = 1;
    } else if (c < 0) (u = -1), (c = -c);
    else return null;
    ir.subVectors(this.origin, e);
    const d = u * this.direction.dot(co.crossVectors(ir, co));
    if (d < 0) return null;
    const h = u * this.direction.dot(uc.cross(ir));
    if (h < 0 || d + h > c) return null;
    const p = -u * ir.dot(fc);
    return p < 0 ? null : this.at(p / c, o);
  }
  applyMatrix4(e) {
    return (
      this.origin.applyMatrix4(e), this.direction.transformDirection(e), this
    );
  }
  equals(e) {
    return e.origin.equals(this.origin) && e.direction.equals(this.direction);
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
class $t {
  constructor(e, t, i, a, o, c, u, d, h, p, _, g, M, T, C, v) {
    ($t.prototype.isMatrix4 = !0),
      (this.elements = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]),
      e !== void 0 && this.set(e, t, i, a, o, c, u, d, h, p, _, g, M, T, C, v);
  }
  set(e, t, i, a, o, c, u, d, h, p, _, g, M, T, C, v) {
    const m = this.elements;
    return (
      (m[0] = e),
      (m[4] = t),
      (m[8] = i),
      (m[12] = a),
      (m[1] = o),
      (m[5] = c),
      (m[9] = u),
      (m[13] = d),
      (m[2] = h),
      (m[6] = p),
      (m[10] = _),
      (m[14] = g),
      (m[3] = M),
      (m[7] = T),
      (m[11] = C),
      (m[15] = v),
      this
    );
  }
  identity() {
    return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
  }
  clone() {
    return new $t().fromArray(this.elements);
  }
  copy(e) {
    const t = this.elements,
      i = e.elements;
    return (
      (t[0] = i[0]),
      (t[1] = i[1]),
      (t[2] = i[2]),
      (t[3] = i[3]),
      (t[4] = i[4]),
      (t[5] = i[5]),
      (t[6] = i[6]),
      (t[7] = i[7]),
      (t[8] = i[8]),
      (t[9] = i[9]),
      (t[10] = i[10]),
      (t[11] = i[11]),
      (t[12] = i[12]),
      (t[13] = i[13]),
      (t[14] = i[14]),
      (t[15] = i[15]),
      this
    );
  }
  copyPosition(e) {
    const t = this.elements,
      i = e.elements;
    return (t[12] = i[12]), (t[13] = i[13]), (t[14] = i[14]), this;
  }
  setFromMatrix3(e) {
    const t = e.elements;
    return (
      this.set(
        t[0],
        t[3],
        t[6],
        0,
        t[1],
        t[4],
        t[7],
        0,
        t[2],
        t[5],
        t[8],
        0,
        0,
        0,
        0,
        1,
      ),
      this
    );
  }
  extractBasis(e, t, i) {
    return (
      e.setFromMatrixColumn(this, 0),
      t.setFromMatrixColumn(this, 1),
      i.setFromMatrixColumn(this, 2),
      this
    );
  }
  makeBasis(e, t, i) {
    return (
      this.set(
        e.x,
        t.x,
        i.x,
        0,
        e.y,
        t.y,
        i.y,
        0,
        e.z,
        t.z,
        i.z,
        0,
        0,
        0,
        0,
        1,
      ),
      this
    );
  }
  extractRotation(e) {
    const t = this.elements,
      i = e.elements,
      a = 1 / ss.setFromMatrixColumn(e, 0).length(),
      o = 1 / ss.setFromMatrixColumn(e, 1).length(),
      c = 1 / ss.setFromMatrixColumn(e, 2).length();
    return (
      (t[0] = i[0] * a),
      (t[1] = i[1] * a),
      (t[2] = i[2] * a),
      (t[3] = 0),
      (t[4] = i[4] * o),
      (t[5] = i[5] * o),
      (t[6] = i[6] * o),
      (t[7] = 0),
      (t[8] = i[8] * c),
      (t[9] = i[9] * c),
      (t[10] = i[10] * c),
      (t[11] = 0),
      (t[12] = 0),
      (t[13] = 0),
      (t[14] = 0),
      (t[15] = 1),
      this
    );
  }
  makeRotationFromEuler(e) {
    const t = this.elements,
      i = e.x,
      a = e.y,
      o = e.z,
      c = Math.cos(i),
      u = Math.sin(i),
      d = Math.cos(a),
      h = Math.sin(a),
      p = Math.cos(o),
      _ = Math.sin(o);
    if (e.order === "XYZ") {
      const g = c * p,
        M = c * _,
        T = u * p,
        C = u * _;
      (t[0] = d * p),
        (t[4] = -d * _),
        (t[8] = h),
        (t[1] = M + T * h),
        (t[5] = g - C * h),
        (t[9] = -u * d),
        (t[2] = C - g * h),
        (t[6] = T + M * h),
        (t[10] = c * d);
    } else if (e.order === "YXZ") {
      const g = d * p,
        M = d * _,
        T = h * p,
        C = h * _;
      (t[0] = g + C * u),
        (t[4] = T * u - M),
        (t[8] = c * h),
        (t[1] = c * _),
        (t[5] = c * p),
        (t[9] = -u),
        (t[2] = M * u - T),
        (t[6] = C + g * u),
        (t[10] = c * d);
    } else if (e.order === "ZXY") {
      const g = d * p,
        M = d * _,
        T = h * p,
        C = h * _;
      (t[0] = g - C * u),
        (t[4] = -c * _),
        (t[8] = T + M * u),
        (t[1] = M + T * u),
        (t[5] = c * p),
        (t[9] = C - g * u),
        (t[2] = -c * h),
        (t[6] = u),
        (t[10] = c * d);
    } else if (e.order === "ZYX") {
      const g = c * p,
        M = c * _,
        T = u * p,
        C = u * _;
      (t[0] = d * p),
        (t[4] = T * h - M),
        (t[8] = g * h + C),
        (t[1] = d * _),
        (t[5] = C * h + g),
        (t[9] = M * h - T),
        (t[2] = -h),
        (t[6] = u * d),
        (t[10] = c * d);
    } else if (e.order === "YZX") {
      const g = c * d,
        M = c * h,
        T = u * d,
        C = u * h;
      (t[0] = d * p),
        (t[4] = C - g * _),
        (t[8] = T * _ + M),
        (t[1] = _),
        (t[5] = c * p),
        (t[9] = -u * p),
        (t[2] = -h * p),
        (t[6] = M * _ + T),
        (t[10] = g - C * _);
    } else if (e.order === "XZY") {
      const g = c * d,
        M = c * h,
        T = u * d,
        C = u * h;
      (t[0] = d * p),
        (t[4] = -_),
        (t[8] = h * p),
        (t[1] = g * _ + C),
        (t[5] = c * p),
        (t[9] = M * _ - T),
        (t[2] = T * _ - M),
        (t[6] = u * p),
        (t[10] = C * _ + g);
    }
    return (
      (t[3] = 0),
      (t[7] = 0),
      (t[11] = 0),
      (t[12] = 0),
      (t[13] = 0),
      (t[14] = 0),
      (t[15] = 1),
      this
    );
  }
  makeRotationFromQuaternion(e) {
    return this.compose(NS, e, FS);
  }
  lookAt(e, t, i) {
    const a = this.elements;
    return (
      Vn.subVectors(e, t),
      Vn.lengthSq() === 0 && (Vn.z = 1),
      Vn.normalize(),
      rr.crossVectors(i, Vn),
      rr.lengthSq() === 0 &&
        (Math.abs(i.z) === 1 ? (Vn.x += 1e-4) : (Vn.z += 1e-4),
        Vn.normalize(),
        rr.crossVectors(i, Vn)),
      rr.normalize(),
      uo.crossVectors(Vn, rr),
      (a[0] = rr.x),
      (a[4] = uo.x),
      (a[8] = Vn.x),
      (a[1] = rr.y),
      (a[5] = uo.y),
      (a[9] = Vn.y),
      (a[2] = rr.z),
      (a[6] = uo.z),
      (a[10] = Vn.z),
      this
    );
  }
  multiply(e) {
    return this.multiplyMatrices(this, e);
  }
  premultiply(e) {
    return this.multiplyMatrices(e, this);
  }
  multiplyMatrices(e, t) {
    const i = e.elements,
      a = t.elements,
      o = this.elements,
      c = i[0],
      u = i[4],
      d = i[8],
      h = i[12],
      p = i[1],
      _ = i[5],
      g = i[9],
      M = i[13],
      T = i[2],
      C = i[6],
      v = i[10],
      m = i[14],
      P = i[3],
      L = i[7],
      b = i[11],
      z = i[15],
      N = a[0],
      U = a[4],
      G = a[8],
      R = a[12],
      y = a[1],
      B = a[5],
      Q = a[9],
      $ = a[13],
      ie = a[2],
      ue = a[6],
      ne = a[10],
      de = a[14],
      j = a[3],
      Ee = a[7],
      we = a[11],
      De = a[15];
    return (
      (o[0] = c * N + u * y + d * ie + h * j),
      (o[4] = c * U + u * B + d * ue + h * Ee),
      (o[8] = c * G + u * Q + d * ne + h * we),
      (o[12] = c * R + u * $ + d * de + h * De),
      (o[1] = p * N + _ * y + g * ie + M * j),
      (o[5] = p * U + _ * B + g * ue + M * Ee),
      (o[9] = p * G + _ * Q + g * ne + M * we),
      (o[13] = p * R + _ * $ + g * de + M * De),
      (o[2] = T * N + C * y + v * ie + m * j),
      (o[6] = T * U + C * B + v * ue + m * Ee),
      (o[10] = T * G + C * Q + v * ne + m * we),
      (o[14] = T * R + C * $ + v * de + m * De),
      (o[3] = P * N + L * y + b * ie + z * j),
      (o[7] = P * U + L * B + b * ue + z * Ee),
      (o[11] = P * G + L * Q + b * ne + z * we),
      (o[15] = P * R + L * $ + b * de + z * De),
      this
    );
  }
  multiplyScalar(e) {
    const t = this.elements;
    return (
      (t[0] *= e),
      (t[4] *= e),
      (t[8] *= e),
      (t[12] *= e),
      (t[1] *= e),
      (t[5] *= e),
      (t[9] *= e),
      (t[13] *= e),
      (t[2] *= e),
      (t[6] *= e),
      (t[10] *= e),
      (t[14] *= e),
      (t[3] *= e),
      (t[7] *= e),
      (t[11] *= e),
      (t[15] *= e),
      this
    );
  }
  determinant() {
    const e = this.elements,
      t = e[0],
      i = e[4],
      a = e[8],
      o = e[12],
      c = e[1],
      u = e[5],
      d = e[9],
      h = e[13],
      p = e[2],
      _ = e[6],
      g = e[10],
      M = e[14],
      T = e[3],
      C = e[7],
      v = e[11],
      m = e[15];
    return (
      T *
        (+o * d * _ -
          a * h * _ -
          o * u * g +
          i * h * g +
          a * u * M -
          i * d * M) +
      C *
        (+t * d * M -
          t * h * g +
          o * c * g -
          a * c * M +
          a * h * p -
          o * d * p) +
      v *
        (+t * h * _ -
          t * u * M -
          o * c * _ +
          i * c * M +
          o * u * p -
          i * h * p) +
      m *
        (-a * u * p - t * d * _ + t * u * g + a * c * _ - i * c * g + i * d * p)
    );
  }
  transpose() {
    const e = this.elements;
    let t;
    return (
      (t = e[1]),
      (e[1] = e[4]),
      (e[4] = t),
      (t = e[2]),
      (e[2] = e[8]),
      (e[8] = t),
      (t = e[6]),
      (e[6] = e[9]),
      (e[9] = t),
      (t = e[3]),
      (e[3] = e[12]),
      (e[12] = t),
      (t = e[7]),
      (e[7] = e[13]),
      (e[13] = t),
      (t = e[11]),
      (e[11] = e[14]),
      (e[14] = t),
      this
    );
  }
  setPosition(e, t, i) {
    const a = this.elements;
    return (
      e.isVector3
        ? ((a[12] = e.x), (a[13] = e.y), (a[14] = e.z))
        : ((a[12] = e), (a[13] = t), (a[14] = i)),
      this
    );
  }
  invert() {
    const e = this.elements,
      t = e[0],
      i = e[1],
      a = e[2],
      o = e[3],
      c = e[4],
      u = e[5],
      d = e[6],
      h = e[7],
      p = e[8],
      _ = e[9],
      g = e[10],
      M = e[11],
      T = e[12],
      C = e[13],
      v = e[14],
      m = e[15],
      P = _ * v * h - C * g * h + C * d * M - u * v * M - _ * d * m + u * g * m,
      L = T * g * h - p * v * h - T * d * M + c * v * M + p * d * m - c * g * m,
      b = p * C * h - T * _ * h + T * u * M - c * C * M - p * u * m + c * _ * m,
      z = T * _ * d - p * C * d - T * u * g + c * C * g + p * u * v - c * _ * v,
      N = t * P + i * L + a * b + o * z;
    if (N === 0)
      return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    const U = 1 / N;
    return (
      (e[0] = P * U),
      (e[1] =
        (C * g * o -
          _ * v * o -
          C * a * M +
          i * v * M +
          _ * a * m -
          i * g * m) *
        U),
      (e[2] =
        (u * v * o -
          C * d * o +
          C * a * h -
          i * v * h -
          u * a * m +
          i * d * m) *
        U),
      (e[3] =
        (_ * d * o -
          u * g * o -
          _ * a * h +
          i * g * h +
          u * a * M -
          i * d * M) *
        U),
      (e[4] = L * U),
      (e[5] =
        (p * v * o -
          T * g * o +
          T * a * M -
          t * v * M -
          p * a * m +
          t * g * m) *
        U),
      (e[6] =
        (T * d * o -
          c * v * o -
          T * a * h +
          t * v * h +
          c * a * m -
          t * d * m) *
        U),
      (e[7] =
        (c * g * o -
          p * d * o +
          p * a * h -
          t * g * h -
          c * a * M +
          t * d * M) *
        U),
      (e[8] = b * U),
      (e[9] =
        (T * _ * o -
          p * C * o -
          T * i * M +
          t * C * M +
          p * i * m -
          t * _ * m) *
        U),
      (e[10] =
        (c * C * o -
          T * u * o +
          T * i * h -
          t * C * h -
          c * i * m +
          t * u * m) *
        U),
      (e[11] =
        (p * u * o -
          c * _ * o -
          p * i * h +
          t * _ * h +
          c * i * M -
          t * u * M) *
        U),
      (e[12] = z * U),
      (e[13] =
        (p * C * a -
          T * _ * a +
          T * i * g -
          t * C * g -
          p * i * v +
          t * _ * v) *
        U),
      (e[14] =
        (T * u * a -
          c * C * a -
          T * i * d +
          t * C * d +
          c * i * v -
          t * u * v) *
        U),
      (e[15] =
        (c * _ * a -
          p * u * a +
          p * i * d -
          t * _ * d -
          c * i * g +
          t * u * g) *
        U),
      this
    );
  }
  scale(e) {
    const t = this.elements,
      i = e.x,
      a = e.y,
      o = e.z;
    return (
      (t[0] *= i),
      (t[4] *= a),
      (t[8] *= o),
      (t[1] *= i),
      (t[5] *= a),
      (t[9] *= o),
      (t[2] *= i),
      (t[6] *= a),
      (t[10] *= o),
      (t[3] *= i),
      (t[7] *= a),
      (t[11] *= o),
      this
    );
  }
  getMaxScaleOnAxis() {
    const e = this.elements,
      t = e[0] * e[0] + e[1] * e[1] + e[2] * e[2],
      i = e[4] * e[4] + e[5] * e[5] + e[6] * e[6],
      a = e[8] * e[8] + e[9] * e[9] + e[10] * e[10];
    return Math.sqrt(Math.max(t, i, a));
  }
  makeTranslation(e, t, i) {
    return (
      e.isVector3
        ? this.set(1, 0, 0, e.x, 0, 1, 0, e.y, 0, 0, 1, e.z, 0, 0, 0, 1)
        : this.set(1, 0, 0, e, 0, 1, 0, t, 0, 0, 1, i, 0, 0, 0, 1),
      this
    );
  }
  makeRotationX(e) {
    const t = Math.cos(e),
      i = Math.sin(e);
    return this.set(1, 0, 0, 0, 0, t, -i, 0, 0, i, t, 0, 0, 0, 0, 1), this;
  }
  makeRotationY(e) {
    const t = Math.cos(e),
      i = Math.sin(e);
    return this.set(t, 0, i, 0, 0, 1, 0, 0, -i, 0, t, 0, 0, 0, 0, 1), this;
  }
  makeRotationZ(e) {
    const t = Math.cos(e),
      i = Math.sin(e);
    return this.set(t, -i, 0, 0, i, t, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
  }
  makeRotationAxis(e, t) {
    const i = Math.cos(t),
      a = Math.sin(t),
      o = 1 - i,
      c = e.x,
      u = e.y,
      d = e.z,
      h = o * c,
      p = o * u;
    return (
      this.set(
        h * c + i,
        h * u - a * d,
        h * d + a * u,
        0,
        h * u + a * d,
        p * u + i,
        p * d - a * c,
        0,
        h * d - a * u,
        p * d + a * c,
        o * d * d + i,
        0,
        0,
        0,
        0,
        1,
      ),
      this
    );
  }
  makeScale(e, t, i) {
    return this.set(e, 0, 0, 0, 0, t, 0, 0, 0, 0, i, 0, 0, 0, 0, 1), this;
  }
  makeShear(e, t, i, a, o, c) {
    return this.set(1, i, o, 0, e, 1, c, 0, t, a, 1, 0, 0, 0, 0, 1), this;
  }
  compose(e, t, i) {
    const a = this.elements,
      o = t._x,
      c = t._y,
      u = t._z,
      d = t._w,
      h = o + o,
      p = c + c,
      _ = u + u,
      g = o * h,
      M = o * p,
      T = o * _,
      C = c * p,
      v = c * _,
      m = u * _,
      P = d * h,
      L = d * p,
      b = d * _,
      z = i.x,
      N = i.y,
      U = i.z;
    return (
      (a[0] = (1 - (C + m)) * z),
      (a[1] = (M + b) * z),
      (a[2] = (T - L) * z),
      (a[3] = 0),
      (a[4] = (M - b) * N),
      (a[5] = (1 - (g + m)) * N),
      (a[6] = (v + P) * N),
      (a[7] = 0),
      (a[8] = (T + L) * U),
      (a[9] = (v - P) * U),
      (a[10] = (1 - (g + C)) * U),
      (a[11] = 0),
      (a[12] = e.x),
      (a[13] = e.y),
      (a[14] = e.z),
      (a[15] = 1),
      this
    );
  }
  decompose(e, t, i) {
    const a = this.elements;
    let o = ss.set(a[0], a[1], a[2]).length();
    const c = ss.set(a[4], a[5], a[6]).length(),
      u = ss.set(a[8], a[9], a[10]).length();
    this.determinant() < 0 && (o = -o),
      (e.x = a[12]),
      (e.y = a[13]),
      (e.z = a[14]),
      ci.copy(this);
    const h = 1 / o,
      p = 1 / c,
      _ = 1 / u;
    return (
      (ci.elements[0] *= h),
      (ci.elements[1] *= h),
      (ci.elements[2] *= h),
      (ci.elements[4] *= p),
      (ci.elements[5] *= p),
      (ci.elements[6] *= p),
      (ci.elements[8] *= _),
      (ci.elements[9] *= _),
      (ci.elements[10] *= _),
      t.setFromRotationMatrix(ci),
      (i.x = o),
      (i.y = c),
      (i.z = u),
      this
    );
  }
  makePerspective(e, t, i, a, o, c, u = Hi) {
    const d = this.elements,
      h = (2 * o) / (t - e),
      p = (2 * o) / (i - a),
      _ = (t + e) / (t - e),
      g = (i + a) / (i - a);
    let M, T;
    if (u === Hi) (M = -(c + o) / (c - o)), (T = (-2 * c * o) / (c - o));
    else if (u === No) (M = -c / (c - o)), (T = (-c * o) / (c - o));
    else
      throw new Error(
        "THREE.Matrix4.makePerspective(): Invalid coordinate system: " + u,
      );
    return (
      (d[0] = h),
      (d[4] = 0),
      (d[8] = _),
      (d[12] = 0),
      (d[1] = 0),
      (d[5] = p),
      (d[9] = g),
      (d[13] = 0),
      (d[2] = 0),
      (d[6] = 0),
      (d[10] = M),
      (d[14] = T),
      (d[3] = 0),
      (d[7] = 0),
      (d[11] = -1),
      (d[15] = 0),
      this
    );
  }
  makeOrthographic(e, t, i, a, o, c, u = Hi) {
    const d = this.elements,
      h = 1 / (t - e),
      p = 1 / (i - a),
      _ = 1 / (c - o),
      g = (t + e) * h,
      M = (i + a) * p;
    let T, C;
    if (u === Hi) (T = (c + o) * _), (C = -2 * _);
    else if (u === No) (T = o * _), (C = -1 * _);
    else
      throw new Error(
        "THREE.Matrix4.makeOrthographic(): Invalid coordinate system: " + u,
      );
    return (
      (d[0] = 2 * h),
      (d[4] = 0),
      (d[8] = 0),
      (d[12] = -g),
      (d[1] = 0),
      (d[5] = 2 * p),
      (d[9] = 0),
      (d[13] = -M),
      (d[2] = 0),
      (d[6] = 0),
      (d[10] = C),
      (d[14] = -T),
      (d[3] = 0),
      (d[7] = 0),
      (d[11] = 0),
      (d[15] = 1),
      this
    );
  }
  equals(e) {
    const t = this.elements,
      i = e.elements;
    for (let a = 0; a < 16; a++) if (t[a] !== i[a]) return !1;
    return !0;
  }
  fromArray(e, t = 0) {
    for (let i = 0; i < 16; i++) this.elements[i] = e[i + t];
    return this;
  }
  toArray(e = [], t = 0) {
    const i = this.elements;
    return (
      (e[t] = i[0]),
      (e[t + 1] = i[1]),
      (e[t + 2] = i[2]),
      (e[t + 3] = i[3]),
      (e[t + 4] = i[4]),
      (e[t + 5] = i[5]),
      (e[t + 6] = i[6]),
      (e[t + 7] = i[7]),
      (e[t + 8] = i[8]),
      (e[t + 9] = i[9]),
      (e[t + 10] = i[10]),
      (e[t + 11] = i[11]),
      (e[t + 12] = i[12]),
      (e[t + 13] = i[13]),
      (e[t + 14] = i[14]),
      (e[t + 15] = i[15]),
      e
    );
  }
}
const ss = new W(),
  ci = new $t(),
  NS = new W(0, 0, 0),
  FS = new W(1, 1, 1),
  rr = new W(),
  uo = new W(),
  Vn = new W(),
  hd = new $t(),
  dd = new ca();
class Si {
  constructor(e = 0, t = 0, i = 0, a = Si.DEFAULT_ORDER) {
    (this.isEuler = !0),
      (this._x = e),
      (this._y = t),
      (this._z = i),
      (this._order = a);
  }
  get x() {
    return this._x;
  }
  set x(e) {
    (this._x = e), this._onChangeCallback();
  }
  get y() {
    return this._y;
  }
  set y(e) {
    (this._y = e), this._onChangeCallback();
  }
  get z() {
    return this._z;
  }
  set z(e) {
    (this._z = e), this._onChangeCallback();
  }
  get order() {
    return this._order;
  }
  set order(e) {
    (this._order = e), this._onChangeCallback();
  }
  set(e, t, i, a = this._order) {
    return (
      (this._x = e),
      (this._y = t),
      (this._z = i),
      (this._order = a),
      this._onChangeCallback(),
      this
    );
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._order);
  }
  copy(e) {
    return (
      (this._x = e._x),
      (this._y = e._y),
      (this._z = e._z),
      (this._order = e._order),
      this._onChangeCallback(),
      this
    );
  }
  setFromRotationMatrix(e, t = this._order, i = !0) {
    const a = e.elements,
      o = a[0],
      c = a[4],
      u = a[8],
      d = a[1],
      h = a[5],
      p = a[9],
      _ = a[2],
      g = a[6],
      M = a[10];
    switch (t) {
      case "XYZ":
        (this._y = Math.asin(Mt(u, -1, 1))),
          Math.abs(u) < 0.9999999
            ? ((this._x = Math.atan2(-p, M)), (this._z = Math.atan2(-c, o)))
            : ((this._x = Math.atan2(g, h)), (this._z = 0));
        break;
      case "YXZ":
        (this._x = Math.asin(-Mt(p, -1, 1))),
          Math.abs(p) < 0.9999999
            ? ((this._y = Math.atan2(u, M)), (this._z = Math.atan2(d, h)))
            : ((this._y = Math.atan2(-_, o)), (this._z = 0));
        break;
      case "ZXY":
        (this._x = Math.asin(Mt(g, -1, 1))),
          Math.abs(g) < 0.9999999
            ? ((this._y = Math.atan2(-_, M)), (this._z = Math.atan2(-c, h)))
            : ((this._y = 0), (this._z = Math.atan2(d, o)));
        break;
      case "ZYX":
        (this._y = Math.asin(-Mt(_, -1, 1))),
          Math.abs(_) < 0.9999999
            ? ((this._x = Math.atan2(g, M)), (this._z = Math.atan2(d, o)))
            : ((this._x = 0), (this._z = Math.atan2(-c, h)));
        break;
      case "YZX":
        (this._z = Math.asin(Mt(d, -1, 1))),
          Math.abs(d) < 0.9999999
            ? ((this._x = Math.atan2(-p, h)), (this._y = Math.atan2(-_, o)))
            : ((this._x = 0), (this._y = Math.atan2(u, M)));
        break;
      case "XZY":
        (this._z = Math.asin(-Mt(c, -1, 1))),
          Math.abs(c) < 0.9999999
            ? ((this._x = Math.atan2(g, h)), (this._y = Math.atan2(u, o)))
            : ((this._x = Math.atan2(-p, M)), (this._y = 0));
        break;
      default:
        console.warn(
          "THREE.Euler: .setFromRotationMatrix() encountered an unknown order: " +
            t,
        );
    }
    return (this._order = t), i === !0 && this._onChangeCallback(), this;
  }
  setFromQuaternion(e, t, i) {
    return (
      hd.makeRotationFromQuaternion(e), this.setFromRotationMatrix(hd, t, i)
    );
  }
  setFromVector3(e, t = this._order) {
    return this.set(e.x, e.y, e.z, t);
  }
  reorder(e) {
    return dd.setFromEuler(this), this.setFromQuaternion(dd, e);
  }
  equals(e) {
    return (
      e._x === this._x &&
      e._y === this._y &&
      e._z === this._z &&
      e._order === this._order
    );
  }
  fromArray(e) {
    return (
      (this._x = e[0]),
      (this._y = e[1]),
      (this._z = e[2]),
      e[3] !== void 0 && (this._order = e[3]),
      this._onChangeCallback(),
      this
    );
  }
  toArray(e = [], t = 0) {
    return (
      (e[t] = this._x),
      (e[t + 1] = this._y),
      (e[t + 2] = this._z),
      (e[t + 3] = this._order),
      e
    );
  }
  _onChange(e) {
    return (this._onChangeCallback = e), this;
  }
  _onChangeCallback() {}
  *[Symbol.iterator]() {
    yield this._x, yield this._y, yield this._z, yield this._order;
  }
}
Si.DEFAULT_ORDER = "XYZ";
class Sp {
  constructor() {
    this.mask = 1;
  }
  set(e) {
    this.mask = ((1 << e) | 0) >>> 0;
  }
  enable(e) {
    this.mask |= (1 << e) | 0;
  }
  enableAll() {
    this.mask = -1;
  }
  toggle(e) {
    this.mask ^= (1 << e) | 0;
  }
  disable(e) {
    this.mask &= ~((1 << e) | 0);
  }
  disableAll() {
    this.mask = 0;
  }
  test(e) {
    return (this.mask & e.mask) !== 0;
  }
  isEnabled(e) {
    return (this.mask & ((1 << e) | 0)) !== 0;
  }
}
let OS = 0;
const pd = new W(),
  as = new ca(),
  Ni = new $t(),
  fo = new W(),
  Ks = new W(),
  BS = new W(),
  zS = new ca(),
  md = new W(1, 0, 0),
  _d = new W(0, 1, 0),
  gd = new W(0, 0, 1),
  vd = { type: "added" },
  GS = { type: "removed" },
  os = { type: "childadded", child: null },
  hc = { type: "childremoved", child: null };
class An extends Rs {
  constructor() {
    super(),
      (this.isObject3D = !0),
      Object.defineProperty(this, "id", { value: OS++ }),
      (this.uuid = la()),
      (this.name = ""),
      (this.type = "Object3D"),
      (this.parent = null),
      (this.children = []),
      (this.up = An.DEFAULT_UP.clone());
    const e = new W(),
      t = new Si(),
      i = new ca(),
      a = new W(1, 1, 1);
    function o() {
      i.setFromEuler(t, !1);
    }
    function c() {
      t.setFromQuaternion(i, void 0, !1);
    }
    t._onChange(o),
      i._onChange(c),
      Object.defineProperties(this, {
        position: { configurable: !0, enumerable: !0, value: e },
        rotation: { configurable: !0, enumerable: !0, value: t },
        quaternion: { configurable: !0, enumerable: !0, value: i },
        scale: { configurable: !0, enumerable: !0, value: a },
        modelViewMatrix: { value: new $t() },
        normalMatrix: { value: new st() },
      }),
      (this.matrix = new $t()),
      (this.matrixWorld = new $t()),
      (this.matrixAutoUpdate = An.DEFAULT_MATRIX_AUTO_UPDATE),
      (this.matrixWorldAutoUpdate = An.DEFAULT_MATRIX_WORLD_AUTO_UPDATE),
      (this.matrixWorldNeedsUpdate = !1),
      (this.layers = new Sp()),
      (this.visible = !0),
      (this.castShadow = !1),
      (this.receiveShadow = !1),
      (this.frustumCulled = !0),
      (this.renderOrder = 0),
      (this.animations = []),
      (this.userData = {});
  }
  onBeforeShadow() {}
  onAfterShadow() {}
  onBeforeRender() {}
  onAfterRender() {}
  applyMatrix4(e) {
    this.matrixAutoUpdate && this.updateMatrix(),
      this.matrix.premultiply(e),
      this.matrix.decompose(this.position, this.quaternion, this.scale);
  }
  applyQuaternion(e) {
    return this.quaternion.premultiply(e), this;
  }
  setRotationFromAxisAngle(e, t) {
    this.quaternion.setFromAxisAngle(e, t);
  }
  setRotationFromEuler(e) {
    this.quaternion.setFromEuler(e, !0);
  }
  setRotationFromMatrix(e) {
    this.quaternion.setFromRotationMatrix(e);
  }
  setRotationFromQuaternion(e) {
    this.quaternion.copy(e);
  }
  rotateOnAxis(e, t) {
    return as.setFromAxisAngle(e, t), this.quaternion.multiply(as), this;
  }
  rotateOnWorldAxis(e, t) {
    return as.setFromAxisAngle(e, t), this.quaternion.premultiply(as), this;
  }
  rotateX(e) {
    return this.rotateOnAxis(md, e);
  }
  rotateY(e) {
    return this.rotateOnAxis(_d, e);
  }
  rotateZ(e) {
    return this.rotateOnAxis(gd, e);
  }
  translateOnAxis(e, t) {
    return (
      pd.copy(e).applyQuaternion(this.quaternion),
      this.position.add(pd.multiplyScalar(t)),
      this
    );
  }
  translateX(e) {
    return this.translateOnAxis(md, e);
  }
  translateY(e) {
    return this.translateOnAxis(_d, e);
  }
  translateZ(e) {
    return this.translateOnAxis(gd, e);
  }
  localToWorld(e) {
    return this.updateWorldMatrix(!0, !1), e.applyMatrix4(this.matrixWorld);
  }
  worldToLocal(e) {
    return (
      this.updateWorldMatrix(!0, !1),
      e.applyMatrix4(Ni.copy(this.matrixWorld).invert())
    );
  }
  lookAt(e, t, i) {
    e.isVector3 ? fo.copy(e) : fo.set(e, t, i);
    const a = this.parent;
    this.updateWorldMatrix(!0, !1),
      Ks.setFromMatrixPosition(this.matrixWorld),
      this.isCamera || this.isLight
        ? Ni.lookAt(Ks, fo, this.up)
        : Ni.lookAt(fo, Ks, this.up),
      this.quaternion.setFromRotationMatrix(Ni),
      a &&
        (Ni.extractRotation(a.matrixWorld),
        as.setFromRotationMatrix(Ni),
        this.quaternion.premultiply(as.invert()));
  }
  add(e) {
    if (arguments.length > 1) {
      for (let t = 0; t < arguments.length; t++) this.add(arguments[t]);
      return this;
    }
    return e === this
      ? (console.error(
          "THREE.Object3D.add: object can't be added as a child of itself.",
          e,
        ),
        this)
      : (e && e.isObject3D
          ? (e.removeFromParent(),
            (e.parent = this),
            this.children.push(e),
            e.dispatchEvent(vd),
            (os.child = e),
            this.dispatchEvent(os),
            (os.child = null))
          : console.error(
              "THREE.Object3D.add: object not an instance of THREE.Object3D.",
              e,
            ),
        this);
  }
  remove(e) {
    if (arguments.length > 1) {
      for (let i = 0; i < arguments.length; i++) this.remove(arguments[i]);
      return this;
    }
    const t = this.children.indexOf(e);
    return (
      t !== -1 &&
        ((e.parent = null),
        this.children.splice(t, 1),
        e.dispatchEvent(GS),
        (hc.child = e),
        this.dispatchEvent(hc),
        (hc.child = null)),
      this
    );
  }
  removeFromParent() {
    const e = this.parent;
    return e !== null && e.remove(this), this;
  }
  clear() {
    return this.remove(...this.children);
  }
  attach(e) {
    return (
      this.updateWorldMatrix(!0, !1),
      Ni.copy(this.matrixWorld).invert(),
      e.parent !== null &&
        (e.parent.updateWorldMatrix(!0, !1), Ni.multiply(e.parent.matrixWorld)),
      e.applyMatrix4(Ni),
      e.removeFromParent(),
      (e.parent = this),
      this.children.push(e),
      e.updateWorldMatrix(!1, !0),
      e.dispatchEvent(vd),
      (os.child = e),
      this.dispatchEvent(os),
      (os.child = null),
      this
    );
  }
  getObjectById(e) {
    return this.getObjectByProperty("id", e);
  }
  getObjectByName(e) {
    return this.getObjectByProperty("name", e);
  }
  getObjectByProperty(e, t) {
    if (this[e] === t) return this;
    for (let i = 0, a = this.children.length; i < a; i++) {
      const c = this.children[i].getObjectByProperty(e, t);
      if (c !== void 0) return c;
    }
  }
  getObjectsByProperty(e, t, i = []) {
    this[e] === t && i.push(this);
    const a = this.children;
    for (let o = 0, c = a.length; o < c; o++)
      a[o].getObjectsByProperty(e, t, i);
    return i;
  }
  getWorldPosition(e) {
    return (
      this.updateWorldMatrix(!0, !1), e.setFromMatrixPosition(this.matrixWorld)
    );
  }
  getWorldQuaternion(e) {
    return (
      this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(Ks, e, BS), e
    );
  }
  getWorldScale(e) {
    return (
      this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(Ks, zS, e), e
    );
  }
  getWorldDirection(e) {
    this.updateWorldMatrix(!0, !1);
    const t = this.matrixWorld.elements;
    return e.set(t[8], t[9], t[10]).normalize();
  }
  raycast() {}
  traverse(e) {
    e(this);
    const t = this.children;
    for (let i = 0, a = t.length; i < a; i++) t[i].traverse(e);
  }
  traverseVisible(e) {
    if (this.visible === !1) return;
    e(this);
    const t = this.children;
    for (let i = 0, a = t.length; i < a; i++) t[i].traverseVisible(e);
  }
  traverseAncestors(e) {
    const t = this.parent;
    t !== null && (e(t), t.traverseAncestors(e));
  }
  updateMatrix() {
    this.matrix.compose(this.position, this.quaternion, this.scale),
      (this.matrixWorldNeedsUpdate = !0);
  }
  updateMatrixWorld(e) {
    this.matrixAutoUpdate && this.updateMatrix(),
      (this.matrixWorldNeedsUpdate || e) &&
        (this.matrixWorldAutoUpdate === !0 &&
          (this.parent === null
            ? this.matrixWorld.copy(this.matrix)
            : this.matrixWorld.multiplyMatrices(
                this.parent.matrixWorld,
                this.matrix,
              )),
        (this.matrixWorldNeedsUpdate = !1),
        (e = !0));
    const t = this.children;
    for (let i = 0, a = t.length; i < a; i++) t[i].updateMatrixWorld(e);
  }
  updateWorldMatrix(e, t) {
    const i = this.parent;
    if (
      (e === !0 && i !== null && i.updateWorldMatrix(!0, !1),
      this.matrixAutoUpdate && this.updateMatrix(),
      this.matrixWorldAutoUpdate === !0 &&
        (this.parent === null
          ? this.matrixWorld.copy(this.matrix)
          : this.matrixWorld.multiplyMatrices(
              this.parent.matrixWorld,
              this.matrix,
            )),
      t === !0)
    ) {
      const a = this.children;
      for (let o = 0, c = a.length; o < c; o++) a[o].updateWorldMatrix(!1, !0);
    }
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string",
      i = {};
    t &&
      ((e = {
        geometries: {},
        materials: {},
        textures: {},
        images: {},
        shapes: {},
        skeletons: {},
        animations: {},
        nodes: {},
      }),
      (i.metadata = {
        version: 4.6,
        type: "Object",
        generator: "Object3D.toJSON",
      }));
    const a = {};
    (a.uuid = this.uuid),
      (a.type = this.type),
      this.name !== "" && (a.name = this.name),
      this.castShadow === !0 && (a.castShadow = !0),
      this.receiveShadow === !0 && (a.receiveShadow = !0),
      this.visible === !1 && (a.visible = !1),
      this.frustumCulled === !1 && (a.frustumCulled = !1),
      this.renderOrder !== 0 && (a.renderOrder = this.renderOrder),
      Object.keys(this.userData).length > 0 && (a.userData = this.userData),
      (a.layers = this.layers.mask),
      (a.matrix = this.matrix.toArray()),
      (a.up = this.up.toArray()),
      this.matrixAutoUpdate === !1 && (a.matrixAutoUpdate = !1),
      this.isInstancedMesh &&
        ((a.type = "InstancedMesh"),
        (a.count = this.count),
        (a.instanceMatrix = this.instanceMatrix.toJSON()),
        this.instanceColor !== null &&
          (a.instanceColor = this.instanceColor.toJSON())),
      this.isBatchedMesh &&
        ((a.type = "BatchedMesh"),
        (a.perObjectFrustumCulled = this.perObjectFrustumCulled),
        (a.sortObjects = this.sortObjects),
        (a.drawRanges = this._drawRanges),
        (a.reservedRanges = this._reservedRanges),
        (a.visibility = this._visibility),
        (a.active = this._active),
        (a.bounds = this._bounds.map((u) => ({
          boxInitialized: u.boxInitialized,
          boxMin: u.box.min.toArray(),
          boxMax: u.box.max.toArray(),
          sphereInitialized: u.sphereInitialized,
          sphereRadius: u.sphere.radius,
          sphereCenter: u.sphere.center.toArray(),
        }))),
        (a.maxInstanceCount = this._maxInstanceCount),
        (a.maxVertexCount = this._maxVertexCount),
        (a.maxIndexCount = this._maxIndexCount),
        (a.geometryInitialized = this._geometryInitialized),
        (a.geometryCount = this._geometryCount),
        (a.matricesTexture = this._matricesTexture.toJSON(e)),
        this._colorsTexture !== null &&
          (a.colorsTexture = this._colorsTexture.toJSON(e)),
        this.boundingSphere !== null &&
          (a.boundingSphere = {
            center: a.boundingSphere.center.toArray(),
            radius: a.boundingSphere.radius,
          }),
        this.boundingBox !== null &&
          (a.boundingBox = {
            min: a.boundingBox.min.toArray(),
            max: a.boundingBox.max.toArray(),
          }));
    function o(u, d) {
      return u[d.uuid] === void 0 && (u[d.uuid] = d.toJSON(e)), d.uuid;
    }
    if (this.isScene)
      this.background &&
        (this.background.isColor
          ? (a.background = this.background.toJSON())
          : this.background.isTexture &&
            (a.background = this.background.toJSON(e).uuid)),
        this.environment &&
          this.environment.isTexture &&
          this.environment.isRenderTargetTexture !== !0 &&
          (a.environment = this.environment.toJSON(e).uuid);
    else if (this.isMesh || this.isLine || this.isPoints) {
      a.geometry = o(e.geometries, this.geometry);
      const u = this.geometry.parameters;
      if (u !== void 0 && u.shapes !== void 0) {
        const d = u.shapes;
        if (Array.isArray(d))
          for (let h = 0, p = d.length; h < p; h++) {
            const _ = d[h];
            o(e.shapes, _);
          }
        else o(e.shapes, d);
      }
    }
    if (
      (this.isSkinnedMesh &&
        ((a.bindMode = this.bindMode),
        (a.bindMatrix = this.bindMatrix.toArray()),
        this.skeleton !== void 0 &&
          (o(e.skeletons, this.skeleton), (a.skeleton = this.skeleton.uuid))),
      this.material !== void 0)
    )
      if (Array.isArray(this.material)) {
        const u = [];
        for (let d = 0, h = this.material.length; d < h; d++)
          u.push(o(e.materials, this.material[d]));
        a.material = u;
      } else a.material = o(e.materials, this.material);
    if (this.children.length > 0) {
      a.children = [];
      for (let u = 0; u < this.children.length; u++)
        a.children.push(this.children[u].toJSON(e).object);
    }
    if (this.animations.length > 0) {
      a.animations = [];
      for (let u = 0; u < this.animations.length; u++) {
        const d = this.animations[u];
        a.animations.push(o(e.animations, d));
      }
    }
    if (t) {
      const u = c(e.geometries),
        d = c(e.materials),
        h = c(e.textures),
        p = c(e.images),
        _ = c(e.shapes),
        g = c(e.skeletons),
        M = c(e.animations),
        T = c(e.nodes);
      u.length > 0 && (i.geometries = u),
        d.length > 0 && (i.materials = d),
        h.length > 0 && (i.textures = h),
        p.length > 0 && (i.images = p),
        _.length > 0 && (i.shapes = _),
        g.length > 0 && (i.skeletons = g),
        M.length > 0 && (i.animations = M),
        T.length > 0 && (i.nodes = T);
    }
    return (i.object = a), i;
    function c(u) {
      const d = [];
      for (const h in u) {
        const p = u[h];
        delete p.metadata, d.push(p);
      }
      return d;
    }
  }
  clone(e) {
    return new this.constructor().copy(this, e);
  }
  copy(e, t = !0) {
    if (
      ((this.name = e.name),
      this.up.copy(e.up),
      this.position.copy(e.position),
      (this.rotation.order = e.rotation.order),
      this.quaternion.copy(e.quaternion),
      this.scale.copy(e.scale),
      this.matrix.copy(e.matrix),
      this.matrixWorld.copy(e.matrixWorld),
      (this.matrixAutoUpdate = e.matrixAutoUpdate),
      (this.matrixWorldAutoUpdate = e.matrixWorldAutoUpdate),
      (this.matrixWorldNeedsUpdate = e.matrixWorldNeedsUpdate),
      (this.layers.mask = e.layers.mask),
      (this.visible = e.visible),
      (this.castShadow = e.castShadow),
      (this.receiveShadow = e.receiveShadow),
      (this.frustumCulled = e.frustumCulled),
      (this.renderOrder = e.renderOrder),
      (this.animations = e.animations.slice()),
      (this.userData = JSON.parse(JSON.stringify(e.userData))),
      t === !0)
    )
      for (let i = 0; i < e.children.length; i++) {
        const a = e.children[i];
        this.add(a.clone());
      }
    return this;
  }
}
An.DEFAULT_UP = new W(0, 1, 0);
An.DEFAULT_MATRIX_AUTO_UPDATE = !0;
An.DEFAULT_MATRIX_WORLD_AUTO_UPDATE = !0;
const ui = new W(),
  Fi = new W(),
  dc = new W(),
  Oi = new W(),
  ls = new W(),
  cs = new W(),
  xd = new W(),
  pc = new W(),
  mc = new W(),
  _c = new W(),
  gc = new Zt(),
  vc = new Zt(),
  xc = new Zt();
class fi {
  constructor(e = new W(), t = new W(), i = new W()) {
    (this.a = e), (this.b = t), (this.c = i);
  }
  static getNormal(e, t, i, a) {
    a.subVectors(i, t), ui.subVectors(e, t), a.cross(ui);
    const o = a.lengthSq();
    return o > 0 ? a.multiplyScalar(1 / Math.sqrt(o)) : a.set(0, 0, 0);
  }
  static getBarycoord(e, t, i, a, o) {
    ui.subVectors(a, t), Fi.subVectors(i, t), dc.subVectors(e, t);
    const c = ui.dot(ui),
      u = ui.dot(Fi),
      d = ui.dot(dc),
      h = Fi.dot(Fi),
      p = Fi.dot(dc),
      _ = c * h - u * u;
    if (_ === 0) return o.set(0, 0, 0), null;
    const g = 1 / _,
      M = (h * d - u * p) * g,
      T = (c * p - u * d) * g;
    return o.set(1 - M - T, T, M);
  }
  static containsPoint(e, t, i, a) {
    return this.getBarycoord(e, t, i, a, Oi) === null
      ? !1
      : Oi.x >= 0 && Oi.y >= 0 && Oi.x + Oi.y <= 1;
  }
  static getInterpolation(e, t, i, a, o, c, u, d) {
    return this.getBarycoord(e, t, i, a, Oi) === null
      ? ((d.x = 0),
        (d.y = 0),
        "z" in d && (d.z = 0),
        "w" in d && (d.w = 0),
        null)
      : (d.setScalar(0),
        d.addScaledVector(o, Oi.x),
        d.addScaledVector(c, Oi.y),
        d.addScaledVector(u, Oi.z),
        d);
  }
  static getInterpolatedAttribute(e, t, i, a, o, c) {
    return (
      gc.setScalar(0),
      vc.setScalar(0),
      xc.setScalar(0),
      gc.fromBufferAttribute(e, t),
      vc.fromBufferAttribute(e, i),
      xc.fromBufferAttribute(e, a),
      c.setScalar(0),
      c.addScaledVector(gc, o.x),
      c.addScaledVector(vc, o.y),
      c.addScaledVector(xc, o.z),
      c
    );
  }
  static isFrontFacing(e, t, i, a) {
    return ui.subVectors(i, t), Fi.subVectors(e, t), ui.cross(Fi).dot(a) < 0;
  }
  set(e, t, i) {
    return this.a.copy(e), this.b.copy(t), this.c.copy(i), this;
  }
  setFromPointsAndIndices(e, t, i, a) {
    return this.a.copy(e[t]), this.b.copy(e[i]), this.c.copy(e[a]), this;
  }
  setFromAttributeAndIndices(e, t, i, a) {
    return (
      this.a.fromBufferAttribute(e, t),
      this.b.fromBufferAttribute(e, i),
      this.c.fromBufferAttribute(e, a),
      this
    );
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return this.a.copy(e.a), this.b.copy(e.b), this.c.copy(e.c), this;
  }
  getArea() {
    return (
      ui.subVectors(this.c, this.b),
      Fi.subVectors(this.a, this.b),
      ui.cross(Fi).length() * 0.5
    );
  }
  getMidpoint(e) {
    return e
      .addVectors(this.a, this.b)
      .add(this.c)
      .multiplyScalar(1 / 3);
  }
  getNormal(e) {
    return fi.getNormal(this.a, this.b, this.c, e);
  }
  getPlane(e) {
    return e.setFromCoplanarPoints(this.a, this.b, this.c);
  }
  getBarycoord(e, t) {
    return fi.getBarycoord(e, this.a, this.b, this.c, t);
  }
  getInterpolation(e, t, i, a, o) {
    return fi.getInterpolation(e, this.a, this.b, this.c, t, i, a, o);
  }
  containsPoint(e) {
    return fi.containsPoint(e, this.a, this.b, this.c);
  }
  isFrontFacing(e) {
    return fi.isFrontFacing(this.a, this.b, this.c, e);
  }
  intersectsBox(e) {
    return e.intersectsTriangle(this);
  }
  closestPointToPoint(e, t) {
    const i = this.a,
      a = this.b,
      o = this.c;
    let c, u;
    ls.subVectors(a, i), cs.subVectors(o, i), pc.subVectors(e, i);
    const d = ls.dot(pc),
      h = cs.dot(pc);
    if (d <= 0 && h <= 0) return t.copy(i);
    mc.subVectors(e, a);
    const p = ls.dot(mc),
      _ = cs.dot(mc);
    if (p >= 0 && _ <= p) return t.copy(a);
    const g = d * _ - p * h;
    if (g <= 0 && d >= 0 && p <= 0)
      return (c = d / (d - p)), t.copy(i).addScaledVector(ls, c);
    _c.subVectors(e, o);
    const M = ls.dot(_c),
      T = cs.dot(_c);
    if (T >= 0 && M <= T) return t.copy(o);
    const C = M * h - d * T;
    if (C <= 0 && h >= 0 && T <= 0)
      return (u = h / (h - T)), t.copy(i).addScaledVector(cs, u);
    const v = p * T - M * _;
    if (v <= 0 && _ - p >= 0 && M - T >= 0)
      return (
        xd.subVectors(o, a),
        (u = (_ - p) / (_ - p + (M - T))),
        t.copy(a).addScaledVector(xd, u)
      );
    const m = 1 / (v + C + g);
    return (
      (c = C * m),
      (u = g * m),
      t.copy(i).addScaledVector(ls, c).addScaledVector(cs, u)
    );
  }
  equals(e) {
    return e.a.equals(this.a) && e.b.equals(this.b) && e.c.equals(this.c);
  }
}
const Ep = {
    aliceblue: 15792383,
    antiquewhite: 16444375,
    aqua: 65535,
    aquamarine: 8388564,
    azure: 15794175,
    beige: 16119260,
    bisque: 16770244,
    black: 0,
    blanchedalmond: 16772045,
    blue: 255,
    blueviolet: 9055202,
    brown: 10824234,
    burlywood: 14596231,
    cadetblue: 6266528,
    chartreuse: 8388352,
    chocolate: 13789470,
    coral: 16744272,
    cornflowerblue: 6591981,
    cornsilk: 16775388,
    crimson: 14423100,
    cyan: 65535,
    darkblue: 139,
    darkcyan: 35723,
    darkgoldenrod: 12092939,
    darkgray: 11119017,
    darkgreen: 25600,
    darkgrey: 11119017,
    darkkhaki: 12433259,
    darkmagenta: 9109643,
    darkolivegreen: 5597999,
    darkorange: 16747520,
    darkorchid: 10040012,
    darkred: 9109504,
    darksalmon: 15308410,
    darkseagreen: 9419919,
    darkslateblue: 4734347,
    darkslategray: 3100495,
    darkslategrey: 3100495,
    darkturquoise: 52945,
    darkviolet: 9699539,
    deeppink: 16716947,
    deepskyblue: 49151,
    dimgray: 6908265,
    dimgrey: 6908265,
    dodgerblue: 2003199,
    firebrick: 11674146,
    floralwhite: 16775920,
    forestgreen: 2263842,
    fuchsia: 16711935,
    gainsboro: 14474460,
    ghostwhite: 16316671,
    gold: 16766720,
    goldenrod: 14329120,
    gray: 8421504,
    green: 32768,
    greenyellow: 11403055,
    grey: 8421504,
    honeydew: 15794160,
    hotpink: 16738740,
    indianred: 13458524,
    indigo: 4915330,
    ivory: 16777200,
    khaki: 15787660,
    lavender: 15132410,
    lavenderblush: 16773365,
    lawngreen: 8190976,
    lemonchiffon: 16775885,
    lightblue: 11393254,
    lightcoral: 15761536,
    lightcyan: 14745599,
    lightgoldenrodyellow: 16448210,
    lightgray: 13882323,
    lightgreen: 9498256,
    lightgrey: 13882323,
    lightpink: 16758465,
    lightsalmon: 16752762,
    lightseagreen: 2142890,
    lightskyblue: 8900346,
    lightslategray: 7833753,
    lightslategrey: 7833753,
    lightsteelblue: 11584734,
    lightyellow: 16777184,
    lime: 65280,
    limegreen: 3329330,
    linen: 16445670,
    magenta: 16711935,
    maroon: 8388608,
    mediumaquamarine: 6737322,
    mediumblue: 205,
    mediumorchid: 12211667,
    mediumpurple: 9662683,
    mediumseagreen: 3978097,
    mediumslateblue: 8087790,
    mediumspringgreen: 64154,
    mediumturquoise: 4772300,
    mediumvioletred: 13047173,
    midnightblue: 1644912,
    mintcream: 16121850,
    mistyrose: 16770273,
    moccasin: 16770229,
    navajowhite: 16768685,
    navy: 128,
    oldlace: 16643558,
    olive: 8421376,
    olivedrab: 7048739,
    orange: 16753920,
    orangered: 16729344,
    orchid: 14315734,
    palegoldenrod: 15657130,
    palegreen: 10025880,
    paleturquoise: 11529966,
    palevioletred: 14381203,
    papayawhip: 16773077,
    peachpuff: 16767673,
    peru: 13468991,
    pink: 16761035,
    plum: 14524637,
    powderblue: 11591910,
    purple: 8388736,
    rebeccapurple: 6697881,
    red: 16711680,
    rosybrown: 12357519,
    royalblue: 4286945,
    saddlebrown: 9127187,
    salmon: 16416882,
    sandybrown: 16032864,
    seagreen: 3050327,
    seashell: 16774638,
    sienna: 10506797,
    silver: 12632256,
    skyblue: 8900331,
    slateblue: 6970061,
    slategray: 7372944,
    slategrey: 7372944,
    snow: 16775930,
    springgreen: 65407,
    steelblue: 4620980,
    tan: 13808780,
    teal: 32896,
    thistle: 14204888,
    tomato: 16737095,
    turquoise: 4251856,
    violet: 15631086,
    wheat: 16113331,
    white: 16777215,
    whitesmoke: 16119285,
    yellow: 16776960,
    yellowgreen: 10145074,
  },
  sr = { h: 0, s: 0, l: 0 },
  ho = { h: 0, s: 0, l: 0 };
function Mc(s, e, t) {
  return (
    t < 0 && (t += 1),
    t > 1 && (t -= 1),
    t < 1 / 6
      ? s + (e - s) * 6 * t
      : t < 1 / 2
        ? e
        : t < 2 / 3
          ? s + (e - s) * 6 * (2 / 3 - t)
          : s
  );
}
class Fe {
  constructor(e, t, i) {
    return (
      (this.isColor = !0),
      (this.r = 1),
      (this.g = 1),
      (this.b = 1),
      this.set(e, t, i)
    );
  }
  set(e, t, i) {
    if (t === void 0 && i === void 0) {
      const a = e;
      a && a.isColor
        ? this.copy(a)
        : typeof a == "number"
          ? this.setHex(a)
          : typeof a == "string" && this.setStyle(a);
    } else this.setRGB(e, t, i);
    return this;
  }
  setScalar(e) {
    return (this.r = e), (this.g = e), (this.b = e), this;
  }
  setHex(e, t = ei) {
    return (
      (e = Math.floor(e)),
      (this.r = ((e >> 16) & 255) / 255),
      (this.g = ((e >> 8) & 255) / 255),
      (this.b = (e & 255) / 255),
      Tt.toWorkingColorSpace(this, t),
      this
    );
  }
  setRGB(e, t, i, a = Tt.workingColorSpace) {
    return (
      (this.r = e),
      (this.g = t),
      (this.b = i),
      Tt.toWorkingColorSpace(this, a),
      this
    );
  }
  setHSL(e, t, i, a = Tt.workingColorSpace) {
    if (((e = ES(e, 1)), (t = Mt(t, 0, 1)), (i = Mt(i, 0, 1)), t === 0))
      this.r = this.g = this.b = i;
    else {
      const o = i <= 0.5 ? i * (1 + t) : i + t - i * t,
        c = 2 * i - o;
      (this.r = Mc(c, o, e + 1 / 3)),
        (this.g = Mc(c, o, e)),
        (this.b = Mc(c, o, e - 1 / 3));
    }
    return Tt.toWorkingColorSpace(this, a), this;
  }
  setStyle(e, t = ei) {
    function i(o) {
      o !== void 0 &&
        parseFloat(o) < 1 &&
        console.warn(
          "THREE.Color: Alpha component of " + e + " will be ignored.",
        );
    }
    let a;
    if ((a = /^(\w+)\(([^\)]*)\)/.exec(e))) {
      let o;
      const c = a[1],
        u = a[2];
      switch (c) {
        case "rgb":
        case "rgba":
          if (
            (o =
              /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(
                u,
              ))
          )
            return (
              i(o[4]),
              this.setRGB(
                Math.min(255, parseInt(o[1], 10)) / 255,
                Math.min(255, parseInt(o[2], 10)) / 255,
                Math.min(255, parseInt(o[3], 10)) / 255,
                t,
              )
            );
          if (
            (o =
              /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(
                u,
              ))
          )
            return (
              i(o[4]),
              this.setRGB(
                Math.min(100, parseInt(o[1], 10)) / 100,
                Math.min(100, parseInt(o[2], 10)) / 100,
                Math.min(100, parseInt(o[3], 10)) / 100,
                t,
              )
            );
          break;
        case "hsl":
        case "hsla":
          if (
            (o =
              /^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(
                u,
              ))
          )
            return (
              i(o[4]),
              this.setHSL(
                parseFloat(o[1]) / 360,
                parseFloat(o[2]) / 100,
                parseFloat(o[3]) / 100,
                t,
              )
            );
          break;
        default:
          console.warn("THREE.Color: Unknown color model " + e);
      }
    } else if ((a = /^\#([A-Fa-f\d]+)$/.exec(e))) {
      const o = a[1],
        c = o.length;
      if (c === 3)
        return this.setRGB(
          parseInt(o.charAt(0), 16) / 15,
          parseInt(o.charAt(1), 16) / 15,
          parseInt(o.charAt(2), 16) / 15,
          t,
        );
      if (c === 6) return this.setHex(parseInt(o, 16), t);
      console.warn("THREE.Color: Invalid hex color " + e);
    } else if (e && e.length > 0) return this.setColorName(e, t);
    return this;
  }
  setColorName(e, t = ei) {
    const i = Ep[e.toLowerCase()];
    return (
      i !== void 0
        ? this.setHex(i, t)
        : console.warn("THREE.Color: Unknown color " + e),
      this
    );
  }
  clone() {
    return new this.constructor(this.r, this.g, this.b);
  }
  copy(e) {
    return (this.r = e.r), (this.g = e.g), (this.b = e.b), this;
  }
  copySRGBToLinear(e) {
    return (this.r = ki(e.r)), (this.g = ki(e.g)), (this.b = ki(e.b)), this;
  }
  copyLinearToSRGB(e) {
    return (this.r = xs(e.r)), (this.g = xs(e.g)), (this.b = xs(e.b)), this;
  }
  convertSRGBToLinear() {
    return this.copySRGBToLinear(this), this;
  }
  convertLinearToSRGB() {
    return this.copyLinearToSRGB(this), this;
  }
  getHex(e = ei) {
    return (
      Tt.fromWorkingColorSpace(_n.copy(this), e),
      Math.round(Mt(_n.r * 255, 0, 255)) * 65536 +
        Math.round(Mt(_n.g * 255, 0, 255)) * 256 +
        Math.round(Mt(_n.b * 255, 0, 255))
    );
  }
  getHexString(e = ei) {
    return ("000000" + this.getHex(e).toString(16)).slice(-6);
  }
  getHSL(e, t = Tt.workingColorSpace) {
    Tt.fromWorkingColorSpace(_n.copy(this), t);
    const i = _n.r,
      a = _n.g,
      o = _n.b,
      c = Math.max(i, a, o),
      u = Math.min(i, a, o);
    let d, h;
    const p = (u + c) / 2;
    if (u === c) (d = 0), (h = 0);
    else {
      const _ = c - u;
      switch (((h = p <= 0.5 ? _ / (c + u) : _ / (2 - c - u)), c)) {
        case i:
          d = (a - o) / _ + (a < o ? 6 : 0);
          break;
        case a:
          d = (o - i) / _ + 2;
          break;
        case o:
          d = (i - a) / _ + 4;
          break;
      }
      d /= 6;
    }
    return (e.h = d), (e.s = h), (e.l = p), e;
  }
  getRGB(e, t = Tt.workingColorSpace) {
    return (
      Tt.fromWorkingColorSpace(_n.copy(this), t),
      (e.r = _n.r),
      (e.g = _n.g),
      (e.b = _n.b),
      e
    );
  }
  getStyle(e = ei) {
    Tt.fromWorkingColorSpace(_n.copy(this), e);
    const t = _n.r,
      i = _n.g,
      a = _n.b;
    return e !== ei
      ? `color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${a.toFixed(3)})`
      : `rgb(${Math.round(t * 255)},${Math.round(i * 255)},${Math.round(a * 255)})`;
  }
  offsetHSL(e, t, i) {
    return this.getHSL(sr), this.setHSL(sr.h + e, sr.s + t, sr.l + i);
  }
  add(e) {
    return (this.r += e.r), (this.g += e.g), (this.b += e.b), this;
  }
  addColors(e, t) {
    return (
      (this.r = e.r + t.r), (this.g = e.g + t.g), (this.b = e.b + t.b), this
    );
  }
  addScalar(e) {
    return (this.r += e), (this.g += e), (this.b += e), this;
  }
  sub(e) {
    return (
      (this.r = Math.max(0, this.r - e.r)),
      (this.g = Math.max(0, this.g - e.g)),
      (this.b = Math.max(0, this.b - e.b)),
      this
    );
  }
  multiply(e) {
    return (this.r *= e.r), (this.g *= e.g), (this.b *= e.b), this;
  }
  multiplyScalar(e) {
    return (this.r *= e), (this.g *= e), (this.b *= e), this;
  }
  lerp(e, t) {
    return (
      (this.r += (e.r - this.r) * t),
      (this.g += (e.g - this.g) * t),
      (this.b += (e.b - this.b) * t),
      this
    );
  }
  lerpColors(e, t, i) {
    return (
      (this.r = e.r + (t.r - e.r) * i),
      (this.g = e.g + (t.g - e.g) * i),
      (this.b = e.b + (t.b - e.b) * i),
      this
    );
  }
  lerpHSL(e, t) {
    this.getHSL(sr), e.getHSL(ho);
    const i = ic(sr.h, ho.h, t),
      a = ic(sr.s, ho.s, t),
      o = ic(sr.l, ho.l, t);
    return this.setHSL(i, a, o), this;
  }
  setFromVector3(e) {
    return (this.r = e.x), (this.g = e.y), (this.b = e.z), this;
  }
  applyMatrix3(e) {
    const t = this.r,
      i = this.g,
      a = this.b,
      o = e.elements;
    return (
      (this.r = o[0] * t + o[3] * i + o[6] * a),
      (this.g = o[1] * t + o[4] * i + o[7] * a),
      (this.b = o[2] * t + o[5] * i + o[8] * a),
      this
    );
  }
  equals(e) {
    return e.r === this.r && e.g === this.g && e.b === this.b;
  }
  fromArray(e, t = 0) {
    return (this.r = e[t]), (this.g = e[t + 1]), (this.b = e[t + 2]), this;
  }
  toArray(e = [], t = 0) {
    return (e[t] = this.r), (e[t + 1] = this.g), (e[t + 2] = this.b), e;
  }
  fromBufferAttribute(e, t) {
    return (
      (this.r = e.getX(t)), (this.g = e.getY(t)), (this.b = e.getZ(t)), this
    );
  }
  toJSON() {
    return this.getHex();
  }
  *[Symbol.iterator]() {
    yield this.r, yield this.g, yield this.b;
  }
}
const _n = new Fe();
Fe.NAMES = Ep;
let HS = 0;
class fa extends Rs {
  constructor() {
    super(),
      (this.isMaterial = !0),
      Object.defineProperty(this, "id", { value: HS++ }),
      (this.uuid = la()),
      (this.name = ""),
      (this.type = "Material"),
      (this.blending = gs),
      (this.side = ur),
      (this.vertexColors = !1),
      (this.opacity = 1),
      (this.transparent = !1),
      (this.alphaHash = !1),
      (this.blendSrc = Ic),
      (this.blendDst = Dc),
      (this.blendEquation = Pr),
      (this.blendSrcAlpha = null),
      (this.blendDstAlpha = null),
      (this.blendEquationAlpha = null),
      (this.blendColor = new Fe(0, 0, 0)),
      (this.blendAlpha = 0),
      (this.depthFunc = Ss),
      (this.depthTest = !0),
      (this.depthWrite = !0),
      (this.stencilWriteMask = 255),
      (this.stencilFunc = sd),
      (this.stencilRef = 0),
      (this.stencilFuncMask = 255),
      (this.stencilFail = es),
      (this.stencilZFail = es),
      (this.stencilZPass = es),
      (this.stencilWrite = !1),
      (this.clippingPlanes = null),
      (this.clipIntersection = !1),
      (this.clipShadows = !1),
      (this.shadowSide = null),
      (this.colorWrite = !0),
      (this.precision = null),
      (this.polygonOffset = !1),
      (this.polygonOffsetFactor = 0),
      (this.polygonOffsetUnits = 0),
      (this.dithering = !1),
      (this.alphaToCoverage = !1),
      (this.premultipliedAlpha = !1),
      (this.forceSinglePass = !1),
      (this.visible = !0),
      (this.toneMapped = !0),
      (this.userData = {}),
      (this.version = 0),
      (this._alphaTest = 0);
  }
  get alphaTest() {
    return this._alphaTest;
  }
  set alphaTest(e) {
    this._alphaTest > 0 != e > 0 && this.version++, (this._alphaTest = e);
  }
  onBeforeRender() {}
  onBeforeCompile() {}
  customProgramCacheKey() {
    return this.onBeforeCompile.toString();
  }
  setValues(e) {
    if (e !== void 0)
      for (const t in e) {
        const i = e[t];
        if (i === void 0) {
          console.warn(
            `THREE.Material: parameter '${t}' has value of undefined.`,
          );
          continue;
        }
        const a = this[t];
        if (a === void 0) {
          console.warn(
            `THREE.Material: '${t}' is not a property of THREE.${this.type}.`,
          );
          continue;
        }
        a && a.isColor
          ? a.set(i)
          : a && a.isVector3 && i && i.isVector3
            ? a.copy(i)
            : (this[t] = i);
      }
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    t && (e = { textures: {}, images: {} });
    const i = {
      metadata: {
        version: 4.6,
        type: "Material",
        generator: "Material.toJSON",
      },
    };
    (i.uuid = this.uuid),
      (i.type = this.type),
      this.name !== "" && (i.name = this.name),
      this.color && this.color.isColor && (i.color = this.color.getHex()),
      this.roughness !== void 0 && (i.roughness = this.roughness),
      this.metalness !== void 0 && (i.metalness = this.metalness),
      this.sheen !== void 0 && (i.sheen = this.sheen),
      this.sheenColor &&
        this.sheenColor.isColor &&
        (i.sheenColor = this.sheenColor.getHex()),
      this.sheenRoughness !== void 0 &&
        (i.sheenRoughness = this.sheenRoughness),
      this.emissive &&
        this.emissive.isColor &&
        (i.emissive = this.emissive.getHex()),
      this.emissiveIntensity !== void 0 &&
        this.emissiveIntensity !== 1 &&
        (i.emissiveIntensity = this.emissiveIntensity),
      this.specular &&
        this.specular.isColor &&
        (i.specular = this.specular.getHex()),
      this.specularIntensity !== void 0 &&
        (i.specularIntensity = this.specularIntensity),
      this.specularColor &&
        this.specularColor.isColor &&
        (i.specularColor = this.specularColor.getHex()),
      this.shininess !== void 0 && (i.shininess = this.shininess),
      this.clearcoat !== void 0 && (i.clearcoat = this.clearcoat),
      this.clearcoatRoughness !== void 0 &&
        (i.clearcoatRoughness = this.clearcoatRoughness),
      this.clearcoatMap &&
        this.clearcoatMap.isTexture &&
        (i.clearcoatMap = this.clearcoatMap.toJSON(e).uuid),
      this.clearcoatRoughnessMap &&
        this.clearcoatRoughnessMap.isTexture &&
        (i.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(e).uuid),
      this.clearcoatNormalMap &&
        this.clearcoatNormalMap.isTexture &&
        ((i.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(e).uuid),
        (i.clearcoatNormalScale = this.clearcoatNormalScale.toArray())),
      this.dispersion !== void 0 && (i.dispersion = this.dispersion),
      this.iridescence !== void 0 && (i.iridescence = this.iridescence),
      this.iridescenceIOR !== void 0 &&
        (i.iridescenceIOR = this.iridescenceIOR),
      this.iridescenceThicknessRange !== void 0 &&
        (i.iridescenceThicknessRange = this.iridescenceThicknessRange),
      this.iridescenceMap &&
        this.iridescenceMap.isTexture &&
        (i.iridescenceMap = this.iridescenceMap.toJSON(e).uuid),
      this.iridescenceThicknessMap &&
        this.iridescenceThicknessMap.isTexture &&
        (i.iridescenceThicknessMap =
          this.iridescenceThicknessMap.toJSON(e).uuid),
      this.anisotropy !== void 0 && (i.anisotropy = this.anisotropy),
      this.anisotropyRotation !== void 0 &&
        (i.anisotropyRotation = this.anisotropyRotation),
      this.anisotropyMap &&
        this.anisotropyMap.isTexture &&
        (i.anisotropyMap = this.anisotropyMap.toJSON(e).uuid),
      this.map && this.map.isTexture && (i.map = this.map.toJSON(e).uuid),
      this.matcap &&
        this.matcap.isTexture &&
        (i.matcap = this.matcap.toJSON(e).uuid),
      this.alphaMap &&
        this.alphaMap.isTexture &&
        (i.alphaMap = this.alphaMap.toJSON(e).uuid),
      this.lightMap &&
        this.lightMap.isTexture &&
        ((i.lightMap = this.lightMap.toJSON(e).uuid),
        (i.lightMapIntensity = this.lightMapIntensity)),
      this.aoMap &&
        this.aoMap.isTexture &&
        ((i.aoMap = this.aoMap.toJSON(e).uuid),
        (i.aoMapIntensity = this.aoMapIntensity)),
      this.bumpMap &&
        this.bumpMap.isTexture &&
        ((i.bumpMap = this.bumpMap.toJSON(e).uuid),
        (i.bumpScale = this.bumpScale)),
      this.normalMap &&
        this.normalMap.isTexture &&
        ((i.normalMap = this.normalMap.toJSON(e).uuid),
        (i.normalMapType = this.normalMapType),
        (i.normalScale = this.normalScale.toArray())),
      this.displacementMap &&
        this.displacementMap.isTexture &&
        ((i.displacementMap = this.displacementMap.toJSON(e).uuid),
        (i.displacementScale = this.displacementScale),
        (i.displacementBias = this.displacementBias)),
      this.roughnessMap &&
        this.roughnessMap.isTexture &&
        (i.roughnessMap = this.roughnessMap.toJSON(e).uuid),
      this.metalnessMap &&
        this.metalnessMap.isTexture &&
        (i.metalnessMap = this.metalnessMap.toJSON(e).uuid),
      this.emissiveMap &&
        this.emissiveMap.isTexture &&
        (i.emissiveMap = this.emissiveMap.toJSON(e).uuid),
      this.specularMap &&
        this.specularMap.isTexture &&
        (i.specularMap = this.specularMap.toJSON(e).uuid),
      this.specularIntensityMap &&
        this.specularIntensityMap.isTexture &&
        (i.specularIntensityMap = this.specularIntensityMap.toJSON(e).uuid),
      this.specularColorMap &&
        this.specularColorMap.isTexture &&
        (i.specularColorMap = this.specularColorMap.toJSON(e).uuid),
      this.envMap &&
        this.envMap.isTexture &&
        ((i.envMap = this.envMap.toJSON(e).uuid),
        this.combine !== void 0 && (i.combine = this.combine)),
      this.envMapRotation !== void 0 &&
        (i.envMapRotation = this.envMapRotation.toArray()),
      this.envMapIntensity !== void 0 &&
        (i.envMapIntensity = this.envMapIntensity),
      this.reflectivity !== void 0 && (i.reflectivity = this.reflectivity),
      this.refractionRatio !== void 0 &&
        (i.refractionRatio = this.refractionRatio),
      this.gradientMap &&
        this.gradientMap.isTexture &&
        (i.gradientMap = this.gradientMap.toJSON(e).uuid),
      this.transmission !== void 0 && (i.transmission = this.transmission),
      this.transmissionMap &&
        this.transmissionMap.isTexture &&
        (i.transmissionMap = this.transmissionMap.toJSON(e).uuid),
      this.thickness !== void 0 && (i.thickness = this.thickness),
      this.thicknessMap &&
        this.thicknessMap.isTexture &&
        (i.thicknessMap = this.thicknessMap.toJSON(e).uuid),
      this.attenuationDistance !== void 0 &&
        this.attenuationDistance !== 1 / 0 &&
        (i.attenuationDistance = this.attenuationDistance),
      this.attenuationColor !== void 0 &&
        (i.attenuationColor = this.attenuationColor.getHex()),
      this.size !== void 0 && (i.size = this.size),
      this.shadowSide !== null && (i.shadowSide = this.shadowSide),
      this.sizeAttenuation !== void 0 &&
        (i.sizeAttenuation = this.sizeAttenuation),
      this.blending !== gs && (i.blending = this.blending),
      this.side !== ur && (i.side = this.side),
      this.vertexColors === !0 && (i.vertexColors = !0),
      this.opacity < 1 && (i.opacity = this.opacity),
      this.transparent === !0 && (i.transparent = !0),
      this.blendSrc !== Ic && (i.blendSrc = this.blendSrc),
      this.blendDst !== Dc && (i.blendDst = this.blendDst),
      this.blendEquation !== Pr && (i.blendEquation = this.blendEquation),
      this.blendSrcAlpha !== null && (i.blendSrcAlpha = this.blendSrcAlpha),
      this.blendDstAlpha !== null && (i.blendDstAlpha = this.blendDstAlpha),
      this.blendEquationAlpha !== null &&
        (i.blendEquationAlpha = this.blendEquationAlpha),
      this.blendColor &&
        this.blendColor.isColor &&
        (i.blendColor = this.blendColor.getHex()),
      this.blendAlpha !== 0 && (i.blendAlpha = this.blendAlpha),
      this.depthFunc !== Ss && (i.depthFunc = this.depthFunc),
      this.depthTest === !1 && (i.depthTest = this.depthTest),
      this.depthWrite === !1 && (i.depthWrite = this.depthWrite),
      this.colorWrite === !1 && (i.colorWrite = this.colorWrite),
      this.stencilWriteMask !== 255 &&
        (i.stencilWriteMask = this.stencilWriteMask),
      this.stencilFunc !== sd && (i.stencilFunc = this.stencilFunc),
      this.stencilRef !== 0 && (i.stencilRef = this.stencilRef),
      this.stencilFuncMask !== 255 &&
        (i.stencilFuncMask = this.stencilFuncMask),
      this.stencilFail !== es && (i.stencilFail = this.stencilFail),
      this.stencilZFail !== es && (i.stencilZFail = this.stencilZFail),
      this.stencilZPass !== es && (i.stencilZPass = this.stencilZPass),
      this.stencilWrite === !0 && (i.stencilWrite = this.stencilWrite),
      this.rotation !== void 0 &&
        this.rotation !== 0 &&
        (i.rotation = this.rotation),
      this.polygonOffset === !0 && (i.polygonOffset = !0),
      this.polygonOffsetFactor !== 0 &&
        (i.polygonOffsetFactor = this.polygonOffsetFactor),
      this.polygonOffsetUnits !== 0 &&
        (i.polygonOffsetUnits = this.polygonOffsetUnits),
      this.linewidth !== void 0 &&
        this.linewidth !== 1 &&
        (i.linewidth = this.linewidth),
      this.dashSize !== void 0 && (i.dashSize = this.dashSize),
      this.gapSize !== void 0 && (i.gapSize = this.gapSize),
      this.scale !== void 0 && (i.scale = this.scale),
      this.dithering === !0 && (i.dithering = !0),
      this.alphaTest > 0 && (i.alphaTest = this.alphaTest),
      this.alphaHash === !0 && (i.alphaHash = !0),
      this.alphaToCoverage === !0 && (i.alphaToCoverage = !0),
      this.premultipliedAlpha === !0 && (i.premultipliedAlpha = !0),
      this.forceSinglePass === !0 && (i.forceSinglePass = !0),
      this.wireframe === !0 && (i.wireframe = !0),
      this.wireframeLinewidth > 1 &&
        (i.wireframeLinewidth = this.wireframeLinewidth),
      this.wireframeLinecap !== "round" &&
        (i.wireframeLinecap = this.wireframeLinecap),
      this.wireframeLinejoin !== "round" &&
        (i.wireframeLinejoin = this.wireframeLinejoin),
      this.flatShading === !0 && (i.flatShading = !0),
      this.visible === !1 && (i.visible = !1),
      this.toneMapped === !1 && (i.toneMapped = !1),
      this.fog === !1 && (i.fog = !1),
      Object.keys(this.userData).length > 0 && (i.userData = this.userData);
    function a(o) {
      const c = [];
      for (const u in o) {
        const d = o[u];
        delete d.metadata, c.push(d);
      }
      return c;
    }
    if (t) {
      const o = a(e.textures),
        c = a(e.images);
      o.length > 0 && (i.textures = o), c.length > 0 && (i.images = c);
    }
    return i;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    (this.name = e.name),
      (this.blending = e.blending),
      (this.side = e.side),
      (this.vertexColors = e.vertexColors),
      (this.opacity = e.opacity),
      (this.transparent = e.transparent),
      (this.blendSrc = e.blendSrc),
      (this.blendDst = e.blendDst),
      (this.blendEquation = e.blendEquation),
      (this.blendSrcAlpha = e.blendSrcAlpha),
      (this.blendDstAlpha = e.blendDstAlpha),
      (this.blendEquationAlpha = e.blendEquationAlpha),
      this.blendColor.copy(e.blendColor),
      (this.blendAlpha = e.blendAlpha),
      (this.depthFunc = e.depthFunc),
      (this.depthTest = e.depthTest),
      (this.depthWrite = e.depthWrite),
      (this.stencilWriteMask = e.stencilWriteMask),
      (this.stencilFunc = e.stencilFunc),
      (this.stencilRef = e.stencilRef),
      (this.stencilFuncMask = e.stencilFuncMask),
      (this.stencilFail = e.stencilFail),
      (this.stencilZFail = e.stencilZFail),
      (this.stencilZPass = e.stencilZPass),
      (this.stencilWrite = e.stencilWrite);
    const t = e.clippingPlanes;
    let i = null;
    if (t !== null) {
      const a = t.length;
      i = new Array(a);
      for (let o = 0; o !== a; ++o) i[o] = t[o].clone();
    }
    return (
      (this.clippingPlanes = i),
      (this.clipIntersection = e.clipIntersection),
      (this.clipShadows = e.clipShadows),
      (this.shadowSide = e.shadowSide),
      (this.colorWrite = e.colorWrite),
      (this.precision = e.precision),
      (this.polygonOffset = e.polygonOffset),
      (this.polygonOffsetFactor = e.polygonOffsetFactor),
      (this.polygonOffsetUnits = e.polygonOffsetUnits),
      (this.dithering = e.dithering),
      (this.alphaTest = e.alphaTest),
      (this.alphaHash = e.alphaHash),
      (this.alphaToCoverage = e.alphaToCoverage),
      (this.premultipliedAlpha = e.premultipliedAlpha),
      (this.forceSinglePass = e.forceSinglePass),
      (this.visible = e.visible),
      (this.toneMapped = e.toneMapped),
      (this.userData = JSON.parse(JSON.stringify(e.userData))),
      this
    );
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
  onBuild() {
    console.warn("Material: onBuild() has been removed.");
  }
}
class gi extends fa {
  constructor(e) {
    super(),
      (this.isMeshBasicMaterial = !0),
      (this.type = "MeshBasicMaterial"),
      (this.color = new Fe(16777215)),
      (this.map = null),
      (this.lightMap = null),
      (this.lightMapIntensity = 1),
      (this.aoMap = null),
      (this.aoMapIntensity = 1),
      (this.specularMap = null),
      (this.alphaMap = null),
      (this.envMap = null),
      (this.envMapRotation = new Si()),
      (this.combine = rp),
      (this.reflectivity = 1),
      (this.refractionRatio = 0.98),
      (this.wireframe = !1),
      (this.wireframeLinewidth = 1),
      (this.wireframeLinecap = "round"),
      (this.wireframeLinejoin = "round"),
      (this.fog = !0),
      this.setValues(e);
  }
  copy(e) {
    return (
      super.copy(e),
      this.color.copy(e.color),
      (this.map = e.map),
      (this.lightMap = e.lightMap),
      (this.lightMapIntensity = e.lightMapIntensity),
      (this.aoMap = e.aoMap),
      (this.aoMapIntensity = e.aoMapIntensity),
      (this.specularMap = e.specularMap),
      (this.alphaMap = e.alphaMap),
      (this.envMap = e.envMap),
      this.envMapRotation.copy(e.envMapRotation),
      (this.combine = e.combine),
      (this.reflectivity = e.reflectivity),
      (this.refractionRatio = e.refractionRatio),
      (this.wireframe = e.wireframe),
      (this.wireframeLinewidth = e.wireframeLinewidth),
      (this.wireframeLinecap = e.wireframeLinecap),
      (this.wireframeLinejoin = e.wireframeLinejoin),
      (this.fog = e.fog),
      this
    );
  }
}
const Kt = new W(),
  po = new He();
let VS = 0;
class Mi {
  constructor(e, t, i = !1) {
    if (Array.isArray(e))
      throw new TypeError(
        "THREE.BufferAttribute: array should be a Typed Array.",
      );
    (this.isBufferAttribute = !0),
      Object.defineProperty(this, "id", { value: VS++ }),
      (this.name = ""),
      (this.array = e),
      (this.itemSize = t),
      (this.count = e !== void 0 ? e.length / t : 0),
      (this.normalized = i),
      (this.usage = ad),
      (this.updateRanges = []),
      (this.gpuType = Gi),
      (this.version = 0);
  }
  onUploadCallback() {}
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
  setUsage(e) {
    return (this.usage = e), this;
  }
  addUpdateRange(e, t) {
    this.updateRanges.push({ start: e, count: t });
  }
  clearUpdateRanges() {
    this.updateRanges.length = 0;
  }
  copy(e) {
    return (
      (this.name = e.name),
      (this.array = new e.array.constructor(e.array)),
      (this.itemSize = e.itemSize),
      (this.count = e.count),
      (this.normalized = e.normalized),
      (this.usage = e.usage),
      (this.gpuType = e.gpuType),
      this
    );
  }
  copyAt(e, t, i) {
    (e *= this.itemSize), (i *= t.itemSize);
    for (let a = 0, o = this.itemSize; a < o; a++)
      this.array[e + a] = t.array[i + a];
    return this;
  }
  copyArray(e) {
    return this.array.set(e), this;
  }
  applyMatrix3(e) {
    if (this.itemSize === 2)
      for (let t = 0, i = this.count; t < i; t++)
        po.fromBufferAttribute(this, t),
          po.applyMatrix3(e),
          this.setXY(t, po.x, po.y);
    else if (this.itemSize === 3)
      for (let t = 0, i = this.count; t < i; t++)
        Kt.fromBufferAttribute(this, t),
          Kt.applyMatrix3(e),
          this.setXYZ(t, Kt.x, Kt.y, Kt.z);
    return this;
  }
  applyMatrix4(e) {
    for (let t = 0, i = this.count; t < i; t++)
      Kt.fromBufferAttribute(this, t),
        Kt.applyMatrix4(e),
        this.setXYZ(t, Kt.x, Kt.y, Kt.z);
    return this;
  }
  applyNormalMatrix(e) {
    for (let t = 0, i = this.count; t < i; t++)
      Kt.fromBufferAttribute(this, t),
        Kt.applyNormalMatrix(e),
        this.setXYZ(t, Kt.x, Kt.y, Kt.z);
    return this;
  }
  transformDirection(e) {
    for (let t = 0, i = this.count; t < i; t++)
      Kt.fromBufferAttribute(this, t),
        Kt.transformDirection(e),
        this.setXYZ(t, Kt.x, Kt.y, Kt.z);
    return this;
  }
  set(e, t = 0) {
    return this.array.set(e, t), this;
  }
  getComponent(e, t) {
    let i = this.array[e * this.itemSize + t];
    return this.normalized && (i = qs(i, this.array)), i;
  }
  setComponent(e, t, i) {
    return (
      this.normalized && (i = In(i, this.array)),
      (this.array[e * this.itemSize + t] = i),
      this
    );
  }
  getX(e) {
    let t = this.array[e * this.itemSize];
    return this.normalized && (t = qs(t, this.array)), t;
  }
  setX(e, t) {
    return (
      this.normalized && (t = In(t, this.array)),
      (this.array[e * this.itemSize] = t),
      this
    );
  }
  getY(e) {
    let t = this.array[e * this.itemSize + 1];
    return this.normalized && (t = qs(t, this.array)), t;
  }
  setY(e, t) {
    return (
      this.normalized && (t = In(t, this.array)),
      (this.array[e * this.itemSize + 1] = t),
      this
    );
  }
  getZ(e) {
    let t = this.array[e * this.itemSize + 2];
    return this.normalized && (t = qs(t, this.array)), t;
  }
  setZ(e, t) {
    return (
      this.normalized && (t = In(t, this.array)),
      (this.array[e * this.itemSize + 2] = t),
      this
    );
  }
  getW(e) {
    let t = this.array[e * this.itemSize + 3];
    return this.normalized && (t = qs(t, this.array)), t;
  }
  setW(e, t) {
    return (
      this.normalized && (t = In(t, this.array)),
      (this.array[e * this.itemSize + 3] = t),
      this
    );
  }
  setXY(e, t, i) {
    return (
      (e *= this.itemSize),
      this.normalized && ((t = In(t, this.array)), (i = In(i, this.array))),
      (this.array[e + 0] = t),
      (this.array[e + 1] = i),
      this
    );
  }
  setXYZ(e, t, i, a) {
    return (
      (e *= this.itemSize),
      this.normalized &&
        ((t = In(t, this.array)),
        (i = In(i, this.array)),
        (a = In(a, this.array))),
      (this.array[e + 0] = t),
      (this.array[e + 1] = i),
      (this.array[e + 2] = a),
      this
    );
  }
  setXYZW(e, t, i, a, o) {
    return (
      (e *= this.itemSize),
      this.normalized &&
        ((t = In(t, this.array)),
        (i = In(i, this.array)),
        (a = In(a, this.array)),
        (o = In(o, this.array))),
      (this.array[e + 0] = t),
      (this.array[e + 1] = i),
      (this.array[e + 2] = a),
      (this.array[e + 3] = o),
      this
    );
  }
  onUpload(e) {
    return (this.onUploadCallback = e), this;
  }
  clone() {
    return new this.constructor(this.array, this.itemSize).copy(this);
  }
  toJSON() {
    const e = {
      itemSize: this.itemSize,
      type: this.array.constructor.name,
      array: Array.from(this.array),
      normalized: this.normalized,
    };
    return (
      this.name !== "" && (e.name = this.name),
      this.usage !== ad && (e.usage = this.usage),
      e
    );
  }
}
class yp extends Mi {
  constructor(e, t, i) {
    super(new Uint16Array(e), t, i);
  }
}
class Tp extends Mi {
  constructor(e, t, i) {
    super(new Uint32Array(e), t, i);
  }
}
class vn extends Mi {
  constructor(e, t, i) {
    super(new Float32Array(e), t, i);
  }
}
let kS = 0;
const Qn = new $t(),
  Sc = new An(),
  us = new W(),
  kn = new ua(),
  $s = new ua(),
  ln = new W();
class Ei extends Rs {
  constructor() {
    super(),
      (this.isBufferGeometry = !0),
      Object.defineProperty(this, "id", { value: kS++ }),
      (this.uuid = la()),
      (this.name = ""),
      (this.type = "BufferGeometry"),
      (this.index = null),
      (this.indirect = null),
      (this.attributes = {}),
      (this.morphAttributes = {}),
      (this.morphTargetsRelative = !1),
      (this.groups = []),
      (this.boundingBox = null),
      (this.boundingSphere = null),
      (this.drawRange = { start: 0, count: 1 / 0 }),
      (this.userData = {});
  }
  getIndex() {
    return this.index;
  }
  setIndex(e) {
    return (
      Array.isArray(e)
        ? (this.index = new (vp(e) ? Tp : yp)(e, 1))
        : (this.index = e),
      this
    );
  }
  setIndirect(e) {
    return (this.indirect = e), this;
  }
  getIndirect() {
    return this.indirect;
  }
  getAttribute(e) {
    return this.attributes[e];
  }
  setAttribute(e, t) {
    return (this.attributes[e] = t), this;
  }
  deleteAttribute(e) {
    return delete this.attributes[e], this;
  }
  hasAttribute(e) {
    return this.attributes[e] !== void 0;
  }
  addGroup(e, t, i = 0) {
    this.groups.push({ start: e, count: t, materialIndex: i });
  }
  clearGroups() {
    this.groups = [];
  }
  setDrawRange(e, t) {
    (this.drawRange.start = e), (this.drawRange.count = t);
  }
  applyMatrix4(e) {
    const t = this.attributes.position;
    t !== void 0 && (t.applyMatrix4(e), (t.needsUpdate = !0));
    const i = this.attributes.normal;
    if (i !== void 0) {
      const o = new st().getNormalMatrix(e);
      i.applyNormalMatrix(o), (i.needsUpdate = !0);
    }
    const a = this.attributes.tangent;
    return (
      a !== void 0 && (a.transformDirection(e), (a.needsUpdate = !0)),
      this.boundingBox !== null && this.computeBoundingBox(),
      this.boundingSphere !== null && this.computeBoundingSphere(),
      this
    );
  }
  applyQuaternion(e) {
    return Qn.makeRotationFromQuaternion(e), this.applyMatrix4(Qn), this;
  }
  rotateX(e) {
    return Qn.makeRotationX(e), this.applyMatrix4(Qn), this;
  }
  rotateY(e) {
    return Qn.makeRotationY(e), this.applyMatrix4(Qn), this;
  }
  rotateZ(e) {
    return Qn.makeRotationZ(e), this.applyMatrix4(Qn), this;
  }
  translate(e, t, i) {
    return Qn.makeTranslation(e, t, i), this.applyMatrix4(Qn), this;
  }
  scale(e, t, i) {
    return Qn.makeScale(e, t, i), this.applyMatrix4(Qn), this;
  }
  lookAt(e) {
    return Sc.lookAt(e), Sc.updateMatrix(), this.applyMatrix4(Sc.matrix), this;
  }
  center() {
    return (
      this.computeBoundingBox(),
      this.boundingBox.getCenter(us).negate(),
      this.translate(us.x, us.y, us.z),
      this
    );
  }
  setFromPoints(e) {
    const t = this.getAttribute("position");
    if (t === void 0) {
      const i = [];
      for (let a = 0, o = e.length; a < o; a++) {
        const c = e[a];
        i.push(c.x, c.y, c.z || 0);
      }
      this.setAttribute("position", new vn(i, 3));
    } else {
      const i = Math.min(e.length, t.count);
      for (let a = 0; a < i; a++) {
        const o = e[a];
        t.setXYZ(a, o.x, o.y, o.z || 0);
      }
      e.length > t.count &&
        console.warn(
          "THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.",
        ),
        (t.needsUpdate = !0);
    }
    return this;
  }
  computeBoundingBox() {
    this.boundingBox === null && (this.boundingBox = new ua());
    const e = this.attributes.position,
      t = this.morphAttributes.position;
    if (e && e.isGLBufferAttribute) {
      console.error(
        "THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",
        this,
      ),
        this.boundingBox.set(
          new W(-1 / 0, -1 / 0, -1 / 0),
          new W(1 / 0, 1 / 0, 1 / 0),
        );
      return;
    }
    if (e !== void 0) {
      if ((this.boundingBox.setFromBufferAttribute(e), t))
        for (let i = 0, a = t.length; i < a; i++) {
          const o = t[i];
          kn.setFromBufferAttribute(o),
            this.morphTargetsRelative
              ? (ln.addVectors(this.boundingBox.min, kn.min),
                this.boundingBox.expandByPoint(ln),
                ln.addVectors(this.boundingBox.max, kn.max),
                this.boundingBox.expandByPoint(ln))
              : (this.boundingBox.expandByPoint(kn.min),
                this.boundingBox.expandByPoint(kn.max));
        }
    } else this.boundingBox.makeEmpty();
    (isNaN(this.boundingBox.min.x) ||
      isNaN(this.boundingBox.min.y) ||
      isNaN(this.boundingBox.min.z)) &&
      console.error(
        'THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',
        this,
      );
  }
  computeBoundingSphere() {
    this.boundingSphere === null && (this.boundingSphere = new Pu());
    const e = this.attributes.position,
      t = this.morphAttributes.position;
    if (e && e.isGLBufferAttribute) {
      console.error(
        "THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",
        this,
      ),
        this.boundingSphere.set(new W(), 1 / 0);
      return;
    }
    if (e) {
      const i = this.boundingSphere.center;
      if ((kn.setFromBufferAttribute(e), t))
        for (let o = 0, c = t.length; o < c; o++) {
          const u = t[o];
          $s.setFromBufferAttribute(u),
            this.morphTargetsRelative
              ? (ln.addVectors(kn.min, $s.min),
                kn.expandByPoint(ln),
                ln.addVectors(kn.max, $s.max),
                kn.expandByPoint(ln))
              : (kn.expandByPoint($s.min), kn.expandByPoint($s.max));
        }
      kn.getCenter(i);
      let a = 0;
      for (let o = 0, c = e.count; o < c; o++)
        ln.fromBufferAttribute(e, o),
          (a = Math.max(a, i.distanceToSquared(ln)));
      if (t)
        for (let o = 0, c = t.length; o < c; o++) {
          const u = t[o],
            d = this.morphTargetsRelative;
          for (let h = 0, p = u.count; h < p; h++)
            ln.fromBufferAttribute(u, h),
              d && (us.fromBufferAttribute(e, h), ln.add(us)),
              (a = Math.max(a, i.distanceToSquared(ln)));
        }
      (this.boundingSphere.radius = Math.sqrt(a)),
        isNaN(this.boundingSphere.radius) &&
          console.error(
            'THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',
            this,
          );
    }
  }
  computeTangents() {
    const e = this.index,
      t = this.attributes;
    if (
      e === null ||
      t.position === void 0 ||
      t.normal === void 0 ||
      t.uv === void 0
    ) {
      console.error(
        "THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)",
      );
      return;
    }
    const i = t.position,
      a = t.normal,
      o = t.uv;
    this.hasAttribute("tangent") === !1 &&
      this.setAttribute("tangent", new Mi(new Float32Array(4 * i.count), 4));
    const c = this.getAttribute("tangent"),
      u = [],
      d = [];
    for (let G = 0; G < i.count; G++) (u[G] = new W()), (d[G] = new W());
    const h = new W(),
      p = new W(),
      _ = new W(),
      g = new He(),
      M = new He(),
      T = new He(),
      C = new W(),
      v = new W();
    function m(G, R, y) {
      h.fromBufferAttribute(i, G),
        p.fromBufferAttribute(i, R),
        _.fromBufferAttribute(i, y),
        g.fromBufferAttribute(o, G),
        M.fromBufferAttribute(o, R),
        T.fromBufferAttribute(o, y),
        p.sub(h),
        _.sub(h),
        M.sub(g),
        T.sub(g);
      const B = 1 / (M.x * T.y - T.x * M.y);
      isFinite(B) &&
        (C.copy(p)
          .multiplyScalar(T.y)
          .addScaledVector(_, -M.y)
          .multiplyScalar(B),
        v
          .copy(_)
          .multiplyScalar(M.x)
          .addScaledVector(p, -T.x)
          .multiplyScalar(B),
        u[G].add(C),
        u[R].add(C),
        u[y].add(C),
        d[G].add(v),
        d[R].add(v),
        d[y].add(v));
    }
    let P = this.groups;
    P.length === 0 && (P = [{ start: 0, count: e.count }]);
    for (let G = 0, R = P.length; G < R; ++G) {
      const y = P[G],
        B = y.start,
        Q = y.count;
      for (let $ = B, ie = B + Q; $ < ie; $ += 3)
        m(e.getX($ + 0), e.getX($ + 1), e.getX($ + 2));
    }
    const L = new W(),
      b = new W(),
      z = new W(),
      N = new W();
    function U(G) {
      z.fromBufferAttribute(a, G), N.copy(z);
      const R = u[G];
      L.copy(R),
        L.sub(z.multiplyScalar(z.dot(R))).normalize(),
        b.crossVectors(N, R);
      const B = b.dot(d[G]) < 0 ? -1 : 1;
      c.setXYZW(G, L.x, L.y, L.z, B);
    }
    for (let G = 0, R = P.length; G < R; ++G) {
      const y = P[G],
        B = y.start,
        Q = y.count;
      for (let $ = B, ie = B + Q; $ < ie; $ += 3)
        U(e.getX($ + 0)), U(e.getX($ + 1)), U(e.getX($ + 2));
    }
  }
  computeVertexNormals() {
    const e = this.index,
      t = this.getAttribute("position");
    if (t !== void 0) {
      let i = this.getAttribute("normal");
      if (i === void 0)
        (i = new Mi(new Float32Array(t.count * 3), 3)),
          this.setAttribute("normal", i);
      else for (let g = 0, M = i.count; g < M; g++) i.setXYZ(g, 0, 0, 0);
      const a = new W(),
        o = new W(),
        c = new W(),
        u = new W(),
        d = new W(),
        h = new W(),
        p = new W(),
        _ = new W();
      if (e)
        for (let g = 0, M = e.count; g < M; g += 3) {
          const T = e.getX(g + 0),
            C = e.getX(g + 1),
            v = e.getX(g + 2);
          a.fromBufferAttribute(t, T),
            o.fromBufferAttribute(t, C),
            c.fromBufferAttribute(t, v),
            p.subVectors(c, o),
            _.subVectors(a, o),
            p.cross(_),
            u.fromBufferAttribute(i, T),
            d.fromBufferAttribute(i, C),
            h.fromBufferAttribute(i, v),
            u.add(p),
            d.add(p),
            h.add(p),
            i.setXYZ(T, u.x, u.y, u.z),
            i.setXYZ(C, d.x, d.y, d.z),
            i.setXYZ(v, h.x, h.y, h.z);
        }
      else
        for (let g = 0, M = t.count; g < M; g += 3)
          a.fromBufferAttribute(t, g + 0),
            o.fromBufferAttribute(t, g + 1),
            c.fromBufferAttribute(t, g + 2),
            p.subVectors(c, o),
            _.subVectors(a, o),
            p.cross(_),
            i.setXYZ(g + 0, p.x, p.y, p.z),
            i.setXYZ(g + 1, p.x, p.y, p.z),
            i.setXYZ(g + 2, p.x, p.y, p.z);
      this.normalizeNormals(), (i.needsUpdate = !0);
    }
  }
  normalizeNormals() {
    const e = this.attributes.normal;
    for (let t = 0, i = e.count; t < i; t++)
      ln.fromBufferAttribute(e, t),
        ln.normalize(),
        e.setXYZ(t, ln.x, ln.y, ln.z);
  }
  toNonIndexed() {
    function e(u, d) {
      const h = u.array,
        p = u.itemSize,
        _ = u.normalized,
        g = new h.constructor(d.length * p);
      let M = 0,
        T = 0;
      for (let C = 0, v = d.length; C < v; C++) {
        u.isInterleavedBufferAttribute
          ? (M = d[C] * u.data.stride + u.offset)
          : (M = d[C] * p);
        for (let m = 0; m < p; m++) g[T++] = h[M++];
      }
      return new Mi(g, p, _);
    }
    if (this.index === null)
      return (
        console.warn(
          "THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.",
        ),
        this
      );
    const t = new Ei(),
      i = this.index.array,
      a = this.attributes;
    for (const u in a) {
      const d = a[u],
        h = e(d, i);
      t.setAttribute(u, h);
    }
    const o = this.morphAttributes;
    for (const u in o) {
      const d = [],
        h = o[u];
      for (let p = 0, _ = h.length; p < _; p++) {
        const g = h[p],
          M = e(g, i);
        d.push(M);
      }
      t.morphAttributes[u] = d;
    }
    t.morphTargetsRelative = this.morphTargetsRelative;
    const c = this.groups;
    for (let u = 0, d = c.length; u < d; u++) {
      const h = c[u];
      t.addGroup(h.start, h.count, h.materialIndex);
    }
    return t;
  }
  toJSON() {
    const e = {
      metadata: {
        version: 4.6,
        type: "BufferGeometry",
        generator: "BufferGeometry.toJSON",
      },
    };
    if (
      ((e.uuid = this.uuid),
      (e.type = this.type),
      this.name !== "" && (e.name = this.name),
      Object.keys(this.userData).length > 0 && (e.userData = this.userData),
      this.parameters !== void 0)
    ) {
      const d = this.parameters;
      for (const h in d) d[h] !== void 0 && (e[h] = d[h]);
      return e;
    }
    e.data = { attributes: {} };
    const t = this.index;
    t !== null &&
      (e.data.index = {
        type: t.array.constructor.name,
        array: Array.prototype.slice.call(t.array),
      });
    const i = this.attributes;
    for (const d in i) {
      const h = i[d];
      e.data.attributes[d] = h.toJSON(e.data);
    }
    const a = {};
    let o = !1;
    for (const d in this.morphAttributes) {
      const h = this.morphAttributes[d],
        p = [];
      for (let _ = 0, g = h.length; _ < g; _++) {
        const M = h[_];
        p.push(M.toJSON(e.data));
      }
      p.length > 0 && ((a[d] = p), (o = !0));
    }
    o &&
      ((e.data.morphAttributes = a),
      (e.data.morphTargetsRelative = this.morphTargetsRelative));
    const c = this.groups;
    c.length > 0 && (e.data.groups = JSON.parse(JSON.stringify(c)));
    const u = this.boundingSphere;
    return (
      u !== null &&
        (e.data.boundingSphere = {
          center: u.center.toArray(),
          radius: u.radius,
        }),
      e
    );
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    (this.index = null),
      (this.attributes = {}),
      (this.morphAttributes = {}),
      (this.groups = []),
      (this.boundingBox = null),
      (this.boundingSphere = null);
    const t = {};
    this.name = e.name;
    const i = e.index;
    i !== null && this.setIndex(i.clone(t));
    const a = e.attributes;
    for (const h in a) {
      const p = a[h];
      this.setAttribute(h, p.clone(t));
    }
    const o = e.morphAttributes;
    for (const h in o) {
      const p = [],
        _ = o[h];
      for (let g = 0, M = _.length; g < M; g++) p.push(_[g].clone(t));
      this.morphAttributes[h] = p;
    }
    this.morphTargetsRelative = e.morphTargetsRelative;
    const c = e.groups;
    for (let h = 0, p = c.length; h < p; h++) {
      const _ = c[h];
      this.addGroup(_.start, _.count, _.materialIndex);
    }
    const u = e.boundingBox;
    u !== null && (this.boundingBox = u.clone());
    const d = e.boundingSphere;
    return (
      d !== null && (this.boundingSphere = d.clone()),
      (this.drawRange.start = e.drawRange.start),
      (this.drawRange.count = e.drawRange.count),
      (this.userData = e.userData),
      this
    );
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
const Md = new $t(),
  Tr = new US(),
  mo = new Pu(),
  Sd = new W(),
  _o = new W(),
  go = new W(),
  vo = new W(),
  Ec = new W(),
  xo = new W(),
  Ed = new W(),
  Mo = new W();
class Tn extends An {
  constructor(e = new Ei(), t = new gi()) {
    super(),
      (this.isMesh = !0),
      (this.type = "Mesh"),
      (this.geometry = e),
      (this.material = t),
      this.updateMorphTargets();
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      e.morphTargetInfluences !== void 0 &&
        (this.morphTargetInfluences = e.morphTargetInfluences.slice()),
      e.morphTargetDictionary !== void 0 &&
        (this.morphTargetDictionary = Object.assign(
          {},
          e.morphTargetDictionary,
        )),
      (this.material = Array.isArray(e.material)
        ? e.material.slice()
        : e.material),
      (this.geometry = e.geometry),
      this
    );
  }
  updateMorphTargets() {
    const t = this.geometry.morphAttributes,
      i = Object.keys(t);
    if (i.length > 0) {
      const a = t[i[0]];
      if (a !== void 0) {
        (this.morphTargetInfluences = []), (this.morphTargetDictionary = {});
        for (let o = 0, c = a.length; o < c; o++) {
          const u = a[o].name || String(o);
          this.morphTargetInfluences.push(0),
            (this.morphTargetDictionary[u] = o);
        }
      }
    }
  }
  getVertexPosition(e, t) {
    const i = this.geometry,
      a = i.attributes.position,
      o = i.morphAttributes.position,
      c = i.morphTargetsRelative;
    t.fromBufferAttribute(a, e);
    const u = this.morphTargetInfluences;
    if (o && u) {
      xo.set(0, 0, 0);
      for (let d = 0, h = o.length; d < h; d++) {
        const p = u[d],
          _ = o[d];
        p !== 0 &&
          (Ec.fromBufferAttribute(_, e),
          c ? xo.addScaledVector(Ec, p) : xo.addScaledVector(Ec.sub(t), p));
      }
      t.add(xo);
    }
    return t;
  }
  raycast(e, t) {
    const i = this.geometry,
      a = this.material,
      o = this.matrixWorld;
    a !== void 0 &&
      (i.boundingSphere === null && i.computeBoundingSphere(),
      mo.copy(i.boundingSphere),
      mo.applyMatrix4(o),
      Tr.copy(e.ray).recast(e.near),
      !(
        mo.containsPoint(Tr.origin) === !1 &&
        (Tr.intersectSphere(mo, Sd) === null ||
          Tr.origin.distanceToSquared(Sd) > (e.far - e.near) ** 2)
      ) &&
        (Md.copy(o).invert(),
        Tr.copy(e.ray).applyMatrix4(Md),
        !(i.boundingBox !== null && Tr.intersectsBox(i.boundingBox) === !1) &&
          this._computeIntersections(e, t, Tr)));
  }
  _computeIntersections(e, t, i) {
    let a;
    const o = this.geometry,
      c = this.material,
      u = o.index,
      d = o.attributes.position,
      h = o.attributes.uv,
      p = o.attributes.uv1,
      _ = o.attributes.normal,
      g = o.groups,
      M = o.drawRange;
    if (u !== null)
      if (Array.isArray(c))
        for (let T = 0, C = g.length; T < C; T++) {
          const v = g[T],
            m = c[v.materialIndex],
            P = Math.max(v.start, M.start),
            L = Math.min(
              u.count,
              Math.min(v.start + v.count, M.start + M.count),
            );
          for (let b = P, z = L; b < z; b += 3) {
            const N = u.getX(b),
              U = u.getX(b + 1),
              G = u.getX(b + 2);
            (a = So(this, m, e, i, h, p, _, N, U, G)),
              a &&
                ((a.faceIndex = Math.floor(b / 3)),
                (a.face.materialIndex = v.materialIndex),
                t.push(a));
          }
        }
      else {
        const T = Math.max(0, M.start),
          C = Math.min(u.count, M.start + M.count);
        for (let v = T, m = C; v < m; v += 3) {
          const P = u.getX(v),
            L = u.getX(v + 1),
            b = u.getX(v + 2);
          (a = So(this, c, e, i, h, p, _, P, L, b)),
            a && ((a.faceIndex = Math.floor(v / 3)), t.push(a));
        }
      }
    else if (d !== void 0)
      if (Array.isArray(c))
        for (let T = 0, C = g.length; T < C; T++) {
          const v = g[T],
            m = c[v.materialIndex],
            P = Math.max(v.start, M.start),
            L = Math.min(
              d.count,
              Math.min(v.start + v.count, M.start + M.count),
            );
          for (let b = P, z = L; b < z; b += 3) {
            const N = b,
              U = b + 1,
              G = b + 2;
            (a = So(this, m, e, i, h, p, _, N, U, G)),
              a &&
                ((a.faceIndex = Math.floor(b / 3)),
                (a.face.materialIndex = v.materialIndex),
                t.push(a));
          }
        }
      else {
        const T = Math.max(0, M.start),
          C = Math.min(d.count, M.start + M.count);
        for (let v = T, m = C; v < m; v += 3) {
          const P = v,
            L = v + 1,
            b = v + 2;
          (a = So(this, c, e, i, h, p, _, P, L, b)),
            a && ((a.faceIndex = Math.floor(v / 3)), t.push(a));
        }
      }
  }
}
function WS(s, e, t, i, a, o, c, u) {
  let d;
  if (
    (e.side === Dn
      ? (d = i.intersectTriangle(c, o, a, !0, u))
      : (d = i.intersectTriangle(a, o, c, e.side === ur, u)),
    d === null)
  )
    return null;
  Mo.copy(u), Mo.applyMatrix4(s.matrixWorld);
  const h = t.ray.origin.distanceTo(Mo);
  return h < t.near || h > t.far
    ? null
    : { distance: h, point: Mo.clone(), object: s };
}
function So(s, e, t, i, a, o, c, u, d, h) {
  s.getVertexPosition(u, _o),
    s.getVertexPosition(d, go),
    s.getVertexPosition(h, vo);
  const p = WS(s, e, t, i, _o, go, vo, Ed);
  if (p) {
    const _ = new W();
    fi.getBarycoord(Ed, _o, go, vo, _),
      a && (p.uv = fi.getInterpolatedAttribute(a, u, d, h, _, new He())),
      o && (p.uv1 = fi.getInterpolatedAttribute(o, u, d, h, _, new He())),
      c &&
        ((p.normal = fi.getInterpolatedAttribute(c, u, d, h, _, new W())),
        p.normal.dot(i.direction) > 0 && p.normal.multiplyScalar(-1));
    const g = { a: u, b: d, c: h, normal: new W(), materialIndex: 0 };
    fi.getNormal(_o, go, vo, g.normal), (p.face = g), (p.barycoord = _);
  }
  return p;
}
class Or extends Ei {
  constructor(e = 1, t = 1, i = 1, a = 1, o = 1, c = 1) {
    super(),
      (this.type = "BoxGeometry"),
      (this.parameters = {
        width: e,
        height: t,
        depth: i,
        widthSegments: a,
        heightSegments: o,
        depthSegments: c,
      });
    const u = this;
    (a = Math.floor(a)), (o = Math.floor(o)), (c = Math.floor(c));
    const d = [],
      h = [],
      p = [],
      _ = [];
    let g = 0,
      M = 0;
    T("z", "y", "x", -1, -1, i, t, e, c, o, 0),
      T("z", "y", "x", 1, -1, i, t, -e, c, o, 1),
      T("x", "z", "y", 1, 1, e, i, t, a, c, 2),
      T("x", "z", "y", 1, -1, e, i, -t, a, c, 3),
      T("x", "y", "z", 1, -1, e, t, i, a, o, 4),
      T("x", "y", "z", -1, -1, e, t, -i, a, o, 5),
      this.setIndex(d),
      this.setAttribute("position", new vn(h, 3)),
      this.setAttribute("normal", new vn(p, 3)),
      this.setAttribute("uv", new vn(_, 2));
    function T(C, v, m, P, L, b, z, N, U, G, R) {
      const y = b / U,
        B = z / G,
        Q = b / 2,
        $ = z / 2,
        ie = N / 2,
        ue = U + 1,
        ne = G + 1;
      let de = 0,
        j = 0;
      const Ee = new W();
      for (let we = 0; we < ne; we++) {
        const De = we * B - $;
        for (let lt = 0; lt < ue; lt++) {
          const Ct = lt * y - Q;
          (Ee[C] = Ct * P),
            (Ee[v] = De * L),
            (Ee[m] = ie),
            h.push(Ee.x, Ee.y, Ee.z),
            (Ee[C] = 0),
            (Ee[v] = 0),
            (Ee[m] = N > 0 ? 1 : -1),
            p.push(Ee.x, Ee.y, Ee.z),
            _.push(lt / U),
            _.push(1 - we / G),
            (de += 1);
        }
      }
      for (let we = 0; we < G; we++)
        for (let De = 0; De < U; De++) {
          const lt = g + De + ue * we,
            Ct = g + De + ue * (we + 1),
            oe = g + (De + 1) + ue * (we + 1),
            _e = g + (De + 1) + ue * we;
          d.push(lt, Ct, _e), d.push(Ct, oe, _e), (j += 6);
        }
      u.addGroup(M, j, R), (M += j), (g += de);
    }
  }
  copy(e) {
    return (
      super.copy(e), (this.parameters = Object.assign({}, e.parameters)), this
    );
  }
  static fromJSON(e) {
    return new Or(
      e.width,
      e.height,
      e.depth,
      e.widthSegments,
      e.heightSegments,
      e.depthSegments,
    );
  }
}
function bs(s) {
  const e = {};
  for (const t in s) {
    e[t] = {};
    for (const i in s[t]) {
      const a = s[t][i];
      a &&
      (a.isColor ||
        a.isMatrix3 ||
        a.isMatrix4 ||
        a.isVector2 ||
        a.isVector3 ||
        a.isVector4 ||
        a.isTexture ||
        a.isQuaternion)
        ? a.isRenderTargetTexture
          ? (console.warn(
              "UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms().",
            ),
            (e[t][i] = null))
          : (e[t][i] = a.clone())
        : Array.isArray(a)
          ? (e[t][i] = a.slice())
          : (e[t][i] = a);
    }
  }
  return e;
}
function yn(s) {
  const e = {};
  for (let t = 0; t < s.length; t++) {
    const i = bs(s[t]);
    for (const a in i) e[a] = i[a];
  }
  return e;
}
function XS(s) {
  const e = [];
  for (let t = 0; t < s.length; t++) e.push(s[t].clone());
  return e;
}
function Ap(s) {
  const e = s.getRenderTarget();
  return e === null
    ? s.outputColorSpace
    : e.isXRRenderTarget === !0
      ? e.texture.colorSpace
      : Tt.workingColorSpace;
}
const qS = { clone: bs, merge: yn };
var YS = `void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,
  ZS = `void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;
class fr extends fa {
  constructor(e) {
    super(),
      (this.isShaderMaterial = !0),
      (this.type = "ShaderMaterial"),
      (this.defines = {}),
      (this.uniforms = {}),
      (this.uniformsGroups = []),
      (this.vertexShader = YS),
      (this.fragmentShader = ZS),
      (this.linewidth = 1),
      (this.wireframe = !1),
      (this.wireframeLinewidth = 1),
      (this.fog = !1),
      (this.lights = !1),
      (this.clipping = !1),
      (this.forceSinglePass = !0),
      (this.extensions = { clipCullDistance: !1, multiDraw: !1 }),
      (this.defaultAttributeValues = {
        color: [1, 1, 1],
        uv: [0, 0],
        uv1: [0, 0],
      }),
      (this.index0AttributeName = void 0),
      (this.uniformsNeedUpdate = !1),
      (this.glslVersion = null),
      e !== void 0 && this.setValues(e);
  }
  copy(e) {
    return (
      super.copy(e),
      (this.fragmentShader = e.fragmentShader),
      (this.vertexShader = e.vertexShader),
      (this.uniforms = bs(e.uniforms)),
      (this.uniformsGroups = XS(e.uniformsGroups)),
      (this.defines = Object.assign({}, e.defines)),
      (this.wireframe = e.wireframe),
      (this.wireframeLinewidth = e.wireframeLinewidth),
      (this.fog = e.fog),
      (this.lights = e.lights),
      (this.clipping = e.clipping),
      (this.extensions = Object.assign({}, e.extensions)),
      (this.glslVersion = e.glslVersion),
      this
    );
  }
  toJSON(e) {
    const t = super.toJSON(e);
    (t.glslVersion = this.glslVersion), (t.uniforms = {});
    for (const a in this.uniforms) {
      const c = this.uniforms[a].value;
      c && c.isTexture
        ? (t.uniforms[a] = { type: "t", value: c.toJSON(e).uuid })
        : c && c.isColor
          ? (t.uniforms[a] = { type: "c", value: c.getHex() })
          : c && c.isVector2
            ? (t.uniforms[a] = { type: "v2", value: c.toArray() })
            : c && c.isVector3
              ? (t.uniforms[a] = { type: "v3", value: c.toArray() })
              : c && c.isVector4
                ? (t.uniforms[a] = { type: "v4", value: c.toArray() })
                : c && c.isMatrix3
                  ? (t.uniforms[a] = { type: "m3", value: c.toArray() })
                  : c && c.isMatrix4
                    ? (t.uniforms[a] = { type: "m4", value: c.toArray() })
                    : (t.uniforms[a] = { value: c });
    }
    Object.keys(this.defines).length > 0 && (t.defines = this.defines),
      (t.vertexShader = this.vertexShader),
      (t.fragmentShader = this.fragmentShader),
      (t.lights = this.lights),
      (t.clipping = this.clipping);
    const i = {};
    for (const a in this.extensions) this.extensions[a] === !0 && (i[a] = !0);
    return Object.keys(i).length > 0 && (t.extensions = i), t;
  }
}
class wp extends An {
  constructor() {
    super(),
      (this.isCamera = !0),
      (this.type = "Camera"),
      (this.matrixWorldInverse = new $t()),
      (this.projectionMatrix = new $t()),
      (this.projectionMatrixInverse = new $t()),
      (this.coordinateSystem = Hi);
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      this.matrixWorldInverse.copy(e.matrixWorldInverse),
      this.projectionMatrix.copy(e.projectionMatrix),
      this.projectionMatrixInverse.copy(e.projectionMatrixInverse),
      (this.coordinateSystem = e.coordinateSystem),
      this
    );
  }
  getWorldDirection(e) {
    return super.getWorldDirection(e).negate();
  }
  updateMatrixWorld(e) {
    super.updateMatrixWorld(e),
      this.matrixWorldInverse.copy(this.matrixWorld).invert();
  }
  updateWorldMatrix(e, t) {
    super.updateWorldMatrix(e, t),
      this.matrixWorldInverse.copy(this.matrixWorld).invert();
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const ar = new W(),
  yd = new He(),
  Td = new He();
class ti extends wp {
  constructor(e = 50, t = 1, i = 0.1, a = 2e3) {
    super(),
      (this.isPerspectiveCamera = !0),
      (this.type = "PerspectiveCamera"),
      (this.fov = e),
      (this.zoom = 1),
      (this.near = i),
      (this.far = a),
      (this.focus = 10),
      (this.aspect = t),
      (this.view = null),
      (this.filmGauge = 35),
      (this.filmOffset = 0),
      this.updateProjectionMatrix();
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      (this.fov = e.fov),
      (this.zoom = e.zoom),
      (this.near = e.near),
      (this.far = e.far),
      (this.focus = e.focus),
      (this.aspect = e.aspect),
      (this.view = e.view === null ? null : Object.assign({}, e.view)),
      (this.filmGauge = e.filmGauge),
      (this.filmOffset = e.filmOffset),
      this
    );
  }
  setFocalLength(e) {
    const t = (0.5 * this.getFilmHeight()) / e;
    (this.fov = gu * 2 * Math.atan(t)), this.updateProjectionMatrix();
  }
  getFocalLength() {
    const e = Math.tan(nc * 0.5 * this.fov);
    return (0.5 * this.getFilmHeight()) / e;
  }
  getEffectiveFOV() {
    return gu * 2 * Math.atan(Math.tan(nc * 0.5 * this.fov) / this.zoom);
  }
  getFilmWidth() {
    return this.filmGauge * Math.min(this.aspect, 1);
  }
  getFilmHeight() {
    return this.filmGauge / Math.max(this.aspect, 1);
  }
  getViewBounds(e, t, i) {
    ar.set(-1, -1, 0.5).applyMatrix4(this.projectionMatrixInverse),
      t.set(ar.x, ar.y).multiplyScalar(-e / ar.z),
      ar.set(1, 1, 0.5).applyMatrix4(this.projectionMatrixInverse),
      i.set(ar.x, ar.y).multiplyScalar(-e / ar.z);
  }
  getViewSize(e, t) {
    return this.getViewBounds(e, yd, Td), t.subVectors(Td, yd);
  }
  setViewOffset(e, t, i, a, o, c) {
    (this.aspect = e / t),
      this.view === null &&
        (this.view = {
          enabled: !0,
          fullWidth: 1,
          fullHeight: 1,
          offsetX: 0,
          offsetY: 0,
          width: 1,
          height: 1,
        }),
      (this.view.enabled = !0),
      (this.view.fullWidth = e),
      (this.view.fullHeight = t),
      (this.view.offsetX = i),
      (this.view.offsetY = a),
      (this.view.width = o),
      (this.view.height = c),
      this.updateProjectionMatrix();
  }
  clearViewOffset() {
    this.view !== null && (this.view.enabled = !1),
      this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    const e = this.near;
    let t = (e * Math.tan(nc * 0.5 * this.fov)) / this.zoom,
      i = 2 * t,
      a = this.aspect * i,
      o = -0.5 * a;
    const c = this.view;
    if (this.view !== null && this.view.enabled) {
      const d = c.fullWidth,
        h = c.fullHeight;
      (o += (c.offsetX * a) / d),
        (t -= (c.offsetY * i) / h),
        (a *= c.width / d),
        (i *= c.height / h);
    }
    const u = this.filmOffset;
    u !== 0 && (o += (e * u) / this.getFilmWidth()),
      this.projectionMatrix.makePerspective(
        o,
        o + a,
        t,
        t - i,
        e,
        this.far,
        this.coordinateSystem,
      ),
      this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return (
      (t.object.fov = this.fov),
      (t.object.zoom = this.zoom),
      (t.object.near = this.near),
      (t.object.far = this.far),
      (t.object.focus = this.focus),
      (t.object.aspect = this.aspect),
      this.view !== null && (t.object.view = Object.assign({}, this.view)),
      (t.object.filmGauge = this.filmGauge),
      (t.object.filmOffset = this.filmOffset),
      t
    );
  }
}
const fs = -90,
  hs = 1;
class KS extends An {
  constructor(e, t, i) {
    super(),
      (this.type = "CubeCamera"),
      (this.renderTarget = i),
      (this.coordinateSystem = null),
      (this.activeMipmapLevel = 0);
    const a = new ti(fs, hs, e, t);
    (a.layers = this.layers), this.add(a);
    const o = new ti(fs, hs, e, t);
    (o.layers = this.layers), this.add(o);
    const c = new ti(fs, hs, e, t);
    (c.layers = this.layers), this.add(c);
    const u = new ti(fs, hs, e, t);
    (u.layers = this.layers), this.add(u);
    const d = new ti(fs, hs, e, t);
    (d.layers = this.layers), this.add(d);
    const h = new ti(fs, hs, e, t);
    (h.layers = this.layers), this.add(h);
  }
  updateCoordinateSystem() {
    const e = this.coordinateSystem,
      t = this.children.concat(),
      [i, a, o, c, u, d] = t;
    for (const h of t) this.remove(h);
    if (e === Hi)
      i.up.set(0, 1, 0),
        i.lookAt(1, 0, 0),
        a.up.set(0, 1, 0),
        a.lookAt(-1, 0, 0),
        o.up.set(0, 0, -1),
        o.lookAt(0, 1, 0),
        c.up.set(0, 0, 1),
        c.lookAt(0, -1, 0),
        u.up.set(0, 1, 0),
        u.lookAt(0, 0, 1),
        d.up.set(0, 1, 0),
        d.lookAt(0, 0, -1);
    else if (e === No)
      i.up.set(0, -1, 0),
        i.lookAt(-1, 0, 0),
        a.up.set(0, -1, 0),
        a.lookAt(1, 0, 0),
        o.up.set(0, 0, 1),
        o.lookAt(0, 1, 0),
        c.up.set(0, 0, -1),
        c.lookAt(0, -1, 0),
        u.up.set(0, -1, 0),
        u.lookAt(0, 0, 1),
        d.up.set(0, -1, 0),
        d.lookAt(0, 0, -1);
    else
      throw new Error(
        "THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: " +
          e,
      );
    for (const h of t) this.add(h), h.updateMatrixWorld();
  }
  update(e, t) {
    this.parent === null && this.updateMatrixWorld();
    const { renderTarget: i, activeMipmapLevel: a } = this;
    this.coordinateSystem !== e.coordinateSystem &&
      ((this.coordinateSystem = e.coordinateSystem),
      this.updateCoordinateSystem());
    const [o, c, u, d, h, p] = this.children,
      _ = e.getRenderTarget(),
      g = e.getActiveCubeFace(),
      M = e.getActiveMipmapLevel(),
      T = e.xr.enabled;
    e.xr.enabled = !1;
    const C = i.texture.generateMipmaps;
    (i.texture.generateMipmaps = !1),
      e.setRenderTarget(i, 0, a),
      e.render(t, o),
      e.setRenderTarget(i, 1, a),
      e.render(t, c),
      e.setRenderTarget(i, 2, a),
      e.render(t, u),
      e.setRenderTarget(i, 3, a),
      e.render(t, d),
      e.setRenderTarget(i, 4, a),
      e.render(t, h),
      (i.texture.generateMipmaps = C),
      e.setRenderTarget(i, 5, a),
      e.render(t, p),
      e.setRenderTarget(_, g, M),
      (e.xr.enabled = T),
      (i.texture.needsPMREMUpdate = !0);
  }
}
class bp extends Un {
  constructor(e, t, i, a, o, c, u, d, h, p) {
    (e = e !== void 0 ? e : []),
      (t = t !== void 0 ? t : Es),
      super(e, t, i, a, o, c, u, d, h, p),
      (this.isCubeTexture = !0),
      (this.flipY = !1);
  }
  get images() {
    return this.image;
  }
  set images(e) {
    this.image = e;
  }
}
class $S extends Fr {
  constructor(e = 1, t = {}) {
    super(e, e, t), (this.isWebGLCubeRenderTarget = !0);
    const i = { width: e, height: e, depth: 1 },
      a = [i, i, i, i, i, i];
    (this.texture = new bp(
      a,
      t.mapping,
      t.wrapS,
      t.wrapT,
      t.magFilter,
      t.minFilter,
      t.format,
      t.type,
      t.anisotropy,
      t.colorSpace,
    )),
      (this.texture.isRenderTargetTexture = !0),
      (this.texture.generateMipmaps =
        t.generateMipmaps !== void 0 ? t.generateMipmaps : !1),
      (this.texture.minFilter = t.minFilter !== void 0 ? t.minFilter : xi);
  }
  fromEquirectangularTexture(e, t) {
    (this.texture.type = t.type),
      (this.texture.colorSpace = t.colorSpace),
      (this.texture.generateMipmaps = t.generateMipmaps),
      (this.texture.minFilter = t.minFilter),
      (this.texture.magFilter = t.magFilter);
    const i = {
        uniforms: { tEquirect: { value: null } },
        vertexShader: `

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,
        fragmentShader: `

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`,
      },
      a = new Or(5, 5, 5),
      o = new fr({
        name: "CubemapFromEquirect",
        uniforms: bs(i.uniforms),
        vertexShader: i.vertexShader,
        fragmentShader: i.fragmentShader,
        side: Dn,
        blending: lr,
      });
    o.uniforms.tEquirect.value = t;
    const c = new Tn(a, o),
      u = t.minFilter;
    return (
      t.minFilter === Ur && (t.minFilter = xi),
      new KS(1, 10, this).update(e, c),
      (t.minFilter = u),
      c.geometry.dispose(),
      c.material.dispose(),
      this
    );
  }
  clear(e, t, i, a) {
    const o = e.getRenderTarget();
    for (let c = 0; c < 6; c++) e.setRenderTarget(this, c), e.clear(t, i, a);
    e.setRenderTarget(o);
  }
}
class Eo extends An {
  constructor() {
    super(), (this.isGroup = !0), (this.type = "Group");
  }
}
const JS = { type: "move" };
class yc {
  constructor() {
    (this._targetRay = null), (this._grip = null), (this._hand = null);
  }
  getHandSpace() {
    return (
      this._hand === null &&
        ((this._hand = new Eo()),
        (this._hand.matrixAutoUpdate = !1),
        (this._hand.visible = !1),
        (this._hand.joints = {}),
        (this._hand.inputState = { pinching: !1 })),
      this._hand
    );
  }
  getTargetRaySpace() {
    return (
      this._targetRay === null &&
        ((this._targetRay = new Eo()),
        (this._targetRay.matrixAutoUpdate = !1),
        (this._targetRay.visible = !1),
        (this._targetRay.hasLinearVelocity = !1),
        (this._targetRay.linearVelocity = new W()),
        (this._targetRay.hasAngularVelocity = !1),
        (this._targetRay.angularVelocity = new W())),
      this._targetRay
    );
  }
  getGripSpace() {
    return (
      this._grip === null &&
        ((this._grip = new Eo()),
        (this._grip.matrixAutoUpdate = !1),
        (this._grip.visible = !1),
        (this._grip.hasLinearVelocity = !1),
        (this._grip.linearVelocity = new W()),
        (this._grip.hasAngularVelocity = !1),
        (this._grip.angularVelocity = new W())),
      this._grip
    );
  }
  dispatchEvent(e) {
    return (
      this._targetRay !== null && this._targetRay.dispatchEvent(e),
      this._grip !== null && this._grip.dispatchEvent(e),
      this._hand !== null && this._hand.dispatchEvent(e),
      this
    );
  }
  connect(e) {
    if (e && e.hand) {
      const t = this._hand;
      if (t) for (const i of e.hand.values()) this._getHandJoint(t, i);
    }
    return this.dispatchEvent({ type: "connected", data: e }), this;
  }
  disconnect(e) {
    return (
      this.dispatchEvent({ type: "disconnected", data: e }),
      this._targetRay !== null && (this._targetRay.visible = !1),
      this._grip !== null && (this._grip.visible = !1),
      this._hand !== null && (this._hand.visible = !1),
      this
    );
  }
  update(e, t, i) {
    let a = null,
      o = null,
      c = null;
    const u = this._targetRay,
      d = this._grip,
      h = this._hand;
    if (e && t.session.visibilityState !== "visible-blurred") {
      if (h && e.hand) {
        c = !0;
        for (const C of e.hand.values()) {
          const v = t.getJointPose(C, i),
            m = this._getHandJoint(h, C);
          v !== null &&
            (m.matrix.fromArray(v.transform.matrix),
            m.matrix.decompose(m.position, m.rotation, m.scale),
            (m.matrixWorldNeedsUpdate = !0),
            (m.jointRadius = v.radius)),
            (m.visible = v !== null);
        }
        const p = h.joints["index-finger-tip"],
          _ = h.joints["thumb-tip"],
          g = p.position.distanceTo(_.position),
          M = 0.02,
          T = 0.005;
        h.inputState.pinching && g > M + T
          ? ((h.inputState.pinching = !1),
            this.dispatchEvent({
              type: "pinchend",
              handedness: e.handedness,
              target: this,
            }))
          : !h.inputState.pinching &&
            g <= M - T &&
            ((h.inputState.pinching = !0),
            this.dispatchEvent({
              type: "pinchstart",
              handedness: e.handedness,
              target: this,
            }));
      } else
        d !== null &&
          e.gripSpace &&
          ((o = t.getPose(e.gripSpace, i)),
          o !== null &&
            (d.matrix.fromArray(o.transform.matrix),
            d.matrix.decompose(d.position, d.rotation, d.scale),
            (d.matrixWorldNeedsUpdate = !0),
            o.linearVelocity
              ? ((d.hasLinearVelocity = !0),
                d.linearVelocity.copy(o.linearVelocity))
              : (d.hasLinearVelocity = !1),
            o.angularVelocity
              ? ((d.hasAngularVelocity = !0),
                d.angularVelocity.copy(o.angularVelocity))
              : (d.hasAngularVelocity = !1)));
      u !== null &&
        ((a = t.getPose(e.targetRaySpace, i)),
        a === null && o !== null && (a = o),
        a !== null &&
          (u.matrix.fromArray(a.transform.matrix),
          u.matrix.decompose(u.position, u.rotation, u.scale),
          (u.matrixWorldNeedsUpdate = !0),
          a.linearVelocity
            ? ((u.hasLinearVelocity = !0),
              u.linearVelocity.copy(a.linearVelocity))
            : (u.hasLinearVelocity = !1),
          a.angularVelocity
            ? ((u.hasAngularVelocity = !0),
              u.angularVelocity.copy(a.angularVelocity))
            : (u.hasAngularVelocity = !1),
          this.dispatchEvent(JS)));
    }
    return (
      u !== null && (u.visible = a !== null),
      d !== null && (d.visible = o !== null),
      h !== null && (h.visible = c !== null),
      this
    );
  }
  _getHandJoint(e, t) {
    if (e.joints[t.jointName] === void 0) {
      const i = new Eo();
      (i.matrixAutoUpdate = !1),
        (i.visible = !1),
        (e.joints[t.jointName] = i),
        e.add(i);
    }
    return e.joints[t.jointName];
  }
}
class QS extends An {
  constructor() {
    super(),
      (this.isScene = !0),
      (this.type = "Scene"),
      (this.background = null),
      (this.environment = null),
      (this.fog = null),
      (this.backgroundBlurriness = 0),
      (this.backgroundIntensity = 1),
      (this.backgroundRotation = new Si()),
      (this.environmentIntensity = 1),
      (this.environmentRotation = new Si()),
      (this.overrideMaterial = null),
      typeof __THREE_DEVTOOLS__ < "u" &&
        __THREE_DEVTOOLS__.dispatchEvent(
          new CustomEvent("observe", { detail: this }),
        );
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      e.background !== null && (this.background = e.background.clone()),
      e.environment !== null && (this.environment = e.environment.clone()),
      e.fog !== null && (this.fog = e.fog.clone()),
      (this.backgroundBlurriness = e.backgroundBlurriness),
      (this.backgroundIntensity = e.backgroundIntensity),
      this.backgroundRotation.copy(e.backgroundRotation),
      (this.environmentIntensity = e.environmentIntensity),
      this.environmentRotation.copy(e.environmentRotation),
      e.overrideMaterial !== null &&
        (this.overrideMaterial = e.overrideMaterial.clone()),
      (this.matrixAutoUpdate = e.matrixAutoUpdate),
      this
    );
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return (
      this.fog !== null && (t.object.fog = this.fog.toJSON()),
      this.backgroundBlurriness > 0 &&
        (t.object.backgroundBlurriness = this.backgroundBlurriness),
      this.backgroundIntensity !== 1 &&
        (t.object.backgroundIntensity = this.backgroundIntensity),
      (t.object.backgroundRotation = this.backgroundRotation.toArray()),
      this.environmentIntensity !== 1 &&
        (t.object.environmentIntensity = this.environmentIntensity),
      (t.object.environmentRotation = this.environmentRotation.toArray()),
      t
    );
  }
}
const Tc = new W(),
  jS = new W(),
  eE = new st();
class Rr {
  constructor(e = new W(1, 0, 0), t = 0) {
    (this.isPlane = !0), (this.normal = e), (this.constant = t);
  }
  set(e, t) {
    return this.normal.copy(e), (this.constant = t), this;
  }
  setComponents(e, t, i, a) {
    return this.normal.set(e, t, i), (this.constant = a), this;
  }
  setFromNormalAndCoplanarPoint(e, t) {
    return this.normal.copy(e), (this.constant = -t.dot(this.normal)), this;
  }
  setFromCoplanarPoints(e, t, i) {
    const a = Tc.subVectors(i, t).cross(jS.subVectors(e, t)).normalize();
    return this.setFromNormalAndCoplanarPoint(a, e), this;
  }
  copy(e) {
    return this.normal.copy(e.normal), (this.constant = e.constant), this;
  }
  normalize() {
    const e = 1 / this.normal.length();
    return this.normal.multiplyScalar(e), (this.constant *= e), this;
  }
  negate() {
    return (this.constant *= -1), this.normal.negate(), this;
  }
  distanceToPoint(e) {
    return this.normal.dot(e) + this.constant;
  }
  distanceToSphere(e) {
    return this.distanceToPoint(e.center) - e.radius;
  }
  projectPoint(e, t) {
    return t.copy(e).addScaledVector(this.normal, -this.distanceToPoint(e));
  }
  intersectLine(e, t) {
    const i = e.delta(Tc),
      a = this.normal.dot(i);
    if (a === 0)
      return this.distanceToPoint(e.start) === 0 ? t.copy(e.start) : null;
    const o = -(e.start.dot(this.normal) + this.constant) / a;
    return o < 0 || o > 1 ? null : t.copy(e.start).addScaledVector(i, o);
  }
  intersectsLine(e) {
    const t = this.distanceToPoint(e.start),
      i = this.distanceToPoint(e.end);
    return (t < 0 && i > 0) || (i < 0 && t > 0);
  }
  intersectsBox(e) {
    return e.intersectsPlane(this);
  }
  intersectsSphere(e) {
    return e.intersectsPlane(this);
  }
  coplanarPoint(e) {
    return e.copy(this.normal).multiplyScalar(-this.constant);
  }
  applyMatrix4(e, t) {
    const i = t || eE.getNormalMatrix(e),
      a = this.coplanarPoint(Tc).applyMatrix4(e),
      o = this.normal.applyMatrix3(i).normalize();
    return (this.constant = -a.dot(o)), this;
  }
  translate(e) {
    return (this.constant -= e.dot(this.normal)), this;
  }
  equals(e) {
    return e.normal.equals(this.normal) && e.constant === this.constant;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const Ar = new Pu(),
  yo = new W();
class Rp {
  constructor(
    e = new Rr(),
    t = new Rr(),
    i = new Rr(),
    a = new Rr(),
    o = new Rr(),
    c = new Rr(),
  ) {
    this.planes = [e, t, i, a, o, c];
  }
  set(e, t, i, a, o, c) {
    const u = this.planes;
    return (
      u[0].copy(e),
      u[1].copy(t),
      u[2].copy(i),
      u[3].copy(a),
      u[4].copy(o),
      u[5].copy(c),
      this
    );
  }
  copy(e) {
    const t = this.planes;
    for (let i = 0; i < 6; i++) t[i].copy(e.planes[i]);
    return this;
  }
  setFromProjectionMatrix(e, t = Hi) {
    const i = this.planes,
      a = e.elements,
      o = a[0],
      c = a[1],
      u = a[2],
      d = a[3],
      h = a[4],
      p = a[5],
      _ = a[6],
      g = a[7],
      M = a[8],
      T = a[9],
      C = a[10],
      v = a[11],
      m = a[12],
      P = a[13],
      L = a[14],
      b = a[15];
    if (
      (i[0].setComponents(d - o, g - h, v - M, b - m).normalize(),
      i[1].setComponents(d + o, g + h, v + M, b + m).normalize(),
      i[2].setComponents(d + c, g + p, v + T, b + P).normalize(),
      i[3].setComponents(d - c, g - p, v - T, b - P).normalize(),
      i[4].setComponents(d - u, g - _, v - C, b - L).normalize(),
      t === Hi)
    )
      i[5].setComponents(d + u, g + _, v + C, b + L).normalize();
    else if (t === No) i[5].setComponents(u, _, C, L).normalize();
    else
      throw new Error(
        "THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: " +
          t,
      );
    return this;
  }
  intersectsObject(e) {
    if (e.boundingSphere !== void 0)
      e.boundingSphere === null && e.computeBoundingSphere(),
        Ar.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);
    else {
      const t = e.geometry;
      t.boundingSphere === null && t.computeBoundingSphere(),
        Ar.copy(t.boundingSphere).applyMatrix4(e.matrixWorld);
    }
    return this.intersectsSphere(Ar);
  }
  intersectsSprite(e) {
    return (
      Ar.center.set(0, 0, 0),
      (Ar.radius = 0.7071067811865476),
      Ar.applyMatrix4(e.matrixWorld),
      this.intersectsSphere(Ar)
    );
  }
  intersectsSphere(e) {
    const t = this.planes,
      i = e.center,
      a = -e.radius;
    for (let o = 0; o < 6; o++) if (t[o].distanceToPoint(i) < a) return !1;
    return !0;
  }
  intersectsBox(e) {
    const t = this.planes;
    for (let i = 0; i < 6; i++) {
      const a = t[i];
      if (
        ((yo.x = a.normal.x > 0 ? e.max.x : e.min.x),
        (yo.y = a.normal.y > 0 ? e.max.y : e.min.y),
        (yo.z = a.normal.z > 0 ? e.max.z : e.min.z),
        a.distanceToPoint(yo) < 0)
      )
        return !1;
    }
    return !0;
  }
  containsPoint(e) {
    const t = this.planes;
    for (let i = 0; i < 6; i++) if (t[i].distanceToPoint(e) < 0) return !1;
    return !0;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
class Cp extends Un {
  constructor(e, t, i, a, o, c, u, d, h, p = vs) {
    if (p !== vs && p !== As)
      throw new Error(
        "DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat",
      );
    i === void 0 && p === vs && (i = Nr),
      i === void 0 && p === As && (i = Ts),
      super(null, a, o, c, u, d, p, i, h),
      (this.isDepthTexture = !0),
      (this.image = { width: e, height: t }),
      (this.magFilter = u !== void 0 ? u : di),
      (this.minFilter = d !== void 0 ? d : di),
      (this.flipY = !1),
      (this.generateMipmaps = !1),
      (this.compareFunction = null);
  }
  copy(e) {
    return super.copy(e), (this.compareFunction = e.compareFunction), this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return (
      this.compareFunction !== null &&
        (t.compareFunction = this.compareFunction),
      t
    );
  }
}
class Go extends Ei {
  constructor(
    e = 1,
    t = 1,
    i = 1,
    a = 32,
    o = 1,
    c = !1,
    u = 0,
    d = Math.PI * 2,
  ) {
    super(),
      (this.type = "CylinderGeometry"),
      (this.parameters = {
        radiusTop: e,
        radiusBottom: t,
        height: i,
        radialSegments: a,
        heightSegments: o,
        openEnded: c,
        thetaStart: u,
        thetaLength: d,
      });
    const h = this;
    (a = Math.floor(a)), (o = Math.floor(o));
    const p = [],
      _ = [],
      g = [],
      M = [];
    let T = 0;
    const C = [],
      v = i / 2;
    let m = 0;
    P(),
      c === !1 && (e > 0 && L(!0), t > 0 && L(!1)),
      this.setIndex(p),
      this.setAttribute("position", new vn(_, 3)),
      this.setAttribute("normal", new vn(g, 3)),
      this.setAttribute("uv", new vn(M, 2));
    function P() {
      const b = new W(),
        z = new W();
      let N = 0;
      const U = (t - e) / i;
      for (let G = 0; G <= o; G++) {
        const R = [],
          y = G / o,
          B = y * (t - e) + e;
        for (let Q = 0; Q <= a; Q++) {
          const $ = Q / a,
            ie = $ * d + u,
            ue = Math.sin(ie),
            ne = Math.cos(ie);
          (z.x = B * ue),
            (z.y = -y * i + v),
            (z.z = B * ne),
            _.push(z.x, z.y, z.z),
            b.set(ue, U, ne).normalize(),
            g.push(b.x, b.y, b.z),
            M.push($, 1 - y),
            R.push(T++);
        }
        C.push(R);
      }
      for (let G = 0; G < a; G++)
        for (let R = 0; R < o; R++) {
          const y = C[R][G],
            B = C[R + 1][G],
            Q = C[R + 1][G + 1],
            $ = C[R][G + 1];
          (e > 0 || R !== 0) && (p.push(y, B, $), (N += 3)),
            (t > 0 || R !== o - 1) && (p.push(B, Q, $), (N += 3));
        }
      h.addGroup(m, N, 0), (m += N);
    }
    function L(b) {
      const z = T,
        N = new He(),
        U = new W();
      let G = 0;
      const R = b === !0 ? e : t,
        y = b === !0 ? 1 : -1;
      for (let Q = 1; Q <= a; Q++)
        _.push(0, v * y, 0), g.push(0, y, 0), M.push(0.5, 0.5), T++;
      const B = T;
      for (let Q = 0; Q <= a; Q++) {
        const ie = (Q / a) * d + u,
          ue = Math.cos(ie),
          ne = Math.sin(ie);
        (U.x = R * ne),
          (U.y = v * y),
          (U.z = R * ue),
          _.push(U.x, U.y, U.z),
          g.push(0, y, 0),
          (N.x = ue * 0.5 + 0.5),
          (N.y = ne * 0.5 * y + 0.5),
          M.push(N.x, N.y),
          T++;
      }
      for (let Q = 0; Q < a; Q++) {
        const $ = z + Q,
          ie = B + Q;
        b === !0 ? p.push(ie, ie + 1, $) : p.push(ie + 1, ie, $), (G += 3);
      }
      h.addGroup(m, G, b === !0 ? 1 : 2), (m += G);
    }
  }
  copy(e) {
    return (
      super.copy(e), (this.parameters = Object.assign({}, e.parameters)), this
    );
  }
  static fromJSON(e) {
    return new Go(
      e.radiusTop,
      e.radiusBottom,
      e.height,
      e.radialSegments,
      e.heightSegments,
      e.openEnded,
      e.thetaStart,
      e.thetaLength,
    );
  }
}
class Lu extends Go {
  constructor(e = 1, t = 1, i = 32, a = 1, o = !1, c = 0, u = Math.PI * 2) {
    super(0, e, t, i, a, o, c, u),
      (this.type = "ConeGeometry"),
      (this.parameters = {
        radius: e,
        height: t,
        radialSegments: i,
        heightSegments: a,
        openEnded: o,
        thetaStart: c,
        thetaLength: u,
      });
  }
  static fromJSON(e) {
    return new Lu(
      e.radius,
      e.height,
      e.radialSegments,
      e.heightSegments,
      e.openEnded,
      e.thetaStart,
      e.thetaLength,
    );
  }
}
class Iu extends Ei {
  constructor(e = [], t = [], i = 1, a = 0) {
    super(),
      (this.type = "PolyhedronGeometry"),
      (this.parameters = { vertices: e, indices: t, radius: i, detail: a });
    const o = [],
      c = [];
    u(a),
      h(i),
      p(),
      this.setAttribute("position", new vn(o, 3)),
      this.setAttribute("normal", new vn(o.slice(), 3)),
      this.setAttribute("uv", new vn(c, 2)),
      a === 0 ? this.computeVertexNormals() : this.normalizeNormals();
    function u(P) {
      const L = new W(),
        b = new W(),
        z = new W();
      for (let N = 0; N < t.length; N += 3)
        M(t[N + 0], L), M(t[N + 1], b), M(t[N + 2], z), d(L, b, z, P);
    }
    function d(P, L, b, z) {
      const N = z + 1,
        U = [];
      for (let G = 0; G <= N; G++) {
        U[G] = [];
        const R = P.clone().lerp(b, G / N),
          y = L.clone().lerp(b, G / N),
          B = N - G;
        for (let Q = 0; Q <= B; Q++)
          Q === 0 && G === N
            ? (U[G][Q] = R)
            : (U[G][Q] = R.clone().lerp(y, Q / B));
      }
      for (let G = 0; G < N; G++)
        for (let R = 0; R < 2 * (N - G) - 1; R++) {
          const y = Math.floor(R / 2);
          R % 2 === 0
            ? (g(U[G][y + 1]), g(U[G + 1][y]), g(U[G][y]))
            : (g(U[G][y + 1]), g(U[G + 1][y + 1]), g(U[G + 1][y]));
        }
    }
    function h(P) {
      const L = new W();
      for (let b = 0; b < o.length; b += 3)
        (L.x = o[b + 0]),
          (L.y = o[b + 1]),
          (L.z = o[b + 2]),
          L.normalize().multiplyScalar(P),
          (o[b + 0] = L.x),
          (o[b + 1] = L.y),
          (o[b + 2] = L.z);
    }
    function p() {
      const P = new W();
      for (let L = 0; L < o.length; L += 3) {
        (P.x = o[L + 0]), (P.y = o[L + 1]), (P.z = o[L + 2]);
        const b = v(P) / 2 / Math.PI + 0.5,
          z = m(P) / Math.PI + 0.5;
        c.push(b, 1 - z);
      }
      T(), _();
    }
    function _() {
      for (let P = 0; P < c.length; P += 6) {
        const L = c[P + 0],
          b = c[P + 2],
          z = c[P + 4],
          N = Math.max(L, b, z),
          U = Math.min(L, b, z);
        N > 0.9 &&
          U < 0.1 &&
          (L < 0.2 && (c[P + 0] += 1),
          b < 0.2 && (c[P + 2] += 1),
          z < 0.2 && (c[P + 4] += 1));
      }
    }
    function g(P) {
      o.push(P.x, P.y, P.z);
    }
    function M(P, L) {
      const b = P * 3;
      (L.x = e[b + 0]), (L.y = e[b + 1]), (L.z = e[b + 2]);
    }
    function T() {
      const P = new W(),
        L = new W(),
        b = new W(),
        z = new W(),
        N = new He(),
        U = new He(),
        G = new He();
      for (let R = 0, y = 0; R < o.length; R += 9, y += 6) {
        P.set(o[R + 0], o[R + 1], o[R + 2]),
          L.set(o[R + 3], o[R + 4], o[R + 5]),
          b.set(o[R + 6], o[R + 7], o[R + 8]),
          N.set(c[y + 0], c[y + 1]),
          U.set(c[y + 2], c[y + 3]),
          G.set(c[y + 4], c[y + 5]),
          z.copy(P).add(L).add(b).divideScalar(3);
        const B = v(z);
        C(N, y + 0, P, B), C(U, y + 2, L, B), C(G, y + 4, b, B);
      }
    }
    function C(P, L, b, z) {
      z < 0 && P.x === 1 && (c[L] = P.x - 1),
        b.x === 0 && b.z === 0 && (c[L] = z / 2 / Math.PI + 0.5);
    }
    function v(P) {
      return Math.atan2(P.z, -P.x);
    }
    function m(P) {
      return Math.atan2(-P.y, Math.sqrt(P.x * P.x + P.z * P.z));
    }
  }
  copy(e) {
    return (
      super.copy(e), (this.parameters = Object.assign({}, e.parameters)), this
    );
  }
  static fromJSON(e) {
    return new Iu(e.vertices, e.indices, e.radius, e.details);
  }
}
class Du extends Iu {
  constructor(e = 1, t = 0) {
    const i = [1, 0, 0, -1, 0, 0, 0, 1, 0, 0, -1, 0, 0, 0, 1, 0, 0, -1],
      a = [
        0, 2, 4, 0, 4, 3, 0, 3, 5, 0, 5, 2, 1, 2, 5, 1, 5, 3, 1, 3, 4, 1, 4, 2,
      ];
    super(i, a, e, t),
      (this.type = "OctahedronGeometry"),
      (this.parameters = { radius: e, detail: t });
  }
  static fromJSON(e) {
    return new Du(e.radius, e.detail);
  }
}
class Ho extends Ei {
  constructor(e = 1, t = 1, i = 1, a = 1) {
    super(),
      (this.type = "PlaneGeometry"),
      (this.parameters = {
        width: e,
        height: t,
        widthSegments: i,
        heightSegments: a,
      });
    const o = e / 2,
      c = t / 2,
      u = Math.floor(i),
      d = Math.floor(a),
      h = u + 1,
      p = d + 1,
      _ = e / u,
      g = t / d,
      M = [],
      T = [],
      C = [],
      v = [];
    for (let m = 0; m < p; m++) {
      const P = m * g - c;
      for (let L = 0; L < h; L++) {
        const b = L * _ - o;
        T.push(b, -P, 0), C.push(0, 0, 1), v.push(L / u), v.push(1 - m / d);
      }
    }
    for (let m = 0; m < d; m++)
      for (let P = 0; P < u; P++) {
        const L = P + h * m,
          b = P + h * (m + 1),
          z = P + 1 + h * (m + 1),
          N = P + 1 + h * m;
        M.push(L, b, N), M.push(b, z, N);
      }
    this.setIndex(M),
      this.setAttribute("position", new vn(T, 3)),
      this.setAttribute("normal", new vn(C, 3)),
      this.setAttribute("uv", new vn(v, 2));
  }
  copy(e) {
    return (
      super.copy(e), (this.parameters = Object.assign({}, e.parameters)), this
    );
  }
  static fromJSON(e) {
    return new Ho(e.width, e.height, e.widthSegments, e.heightSegments);
  }
}
class Uu extends Ei {
  constructor(
    e = 1,
    t = 32,
    i = 16,
    a = 0,
    o = Math.PI * 2,
    c = 0,
    u = Math.PI,
  ) {
    super(),
      (this.type = "SphereGeometry"),
      (this.parameters = {
        radius: e,
        widthSegments: t,
        heightSegments: i,
        phiStart: a,
        phiLength: o,
        thetaStart: c,
        thetaLength: u,
      }),
      (t = Math.max(3, Math.floor(t))),
      (i = Math.max(2, Math.floor(i)));
    const d = Math.min(c + u, Math.PI);
    let h = 0;
    const p = [],
      _ = new W(),
      g = new W(),
      M = [],
      T = [],
      C = [],
      v = [];
    for (let m = 0; m <= i; m++) {
      const P = [],
        L = m / i;
      let b = 0;
      m === 0 && c === 0
        ? (b = 0.5 / t)
        : m === i && d === Math.PI && (b = -0.5 / t);
      for (let z = 0; z <= t; z++) {
        const N = z / t;
        (_.x = -e * Math.cos(a + N * o) * Math.sin(c + L * u)),
          (_.y = e * Math.cos(c + L * u)),
          (_.z = e * Math.sin(a + N * o) * Math.sin(c + L * u)),
          T.push(_.x, _.y, _.z),
          g.copy(_).normalize(),
          C.push(g.x, g.y, g.z),
          v.push(N + b, 1 - L),
          P.push(h++);
      }
      p.push(P);
    }
    for (let m = 0; m < i; m++)
      for (let P = 0; P < t; P++) {
        const L = p[m][P + 1],
          b = p[m][P],
          z = p[m + 1][P],
          N = p[m + 1][P + 1];
        (m !== 0 || c > 0) && M.push(L, b, N),
          (m !== i - 1 || d < Math.PI) && M.push(b, z, N);
      }
    this.setIndex(M),
      this.setAttribute("position", new vn(T, 3)),
      this.setAttribute("normal", new vn(C, 3)),
      this.setAttribute("uv", new vn(v, 2));
  }
  copy(e) {
    return (
      super.copy(e), (this.parameters = Object.assign({}, e.parameters)), this
    );
  }
  static fromJSON(e) {
    return new Uu(
      e.radius,
      e.widthSegments,
      e.heightSegments,
      e.phiStart,
      e.phiLength,
      e.thetaStart,
      e.thetaLength,
    );
  }
}
class ds extends fa {
  constructor(e) {
    super(),
      (this.isMeshStandardMaterial = !0),
      (this.type = "MeshStandardMaterial"),
      (this.defines = { STANDARD: "" }),
      (this.color = new Fe(16777215)),
      (this.roughness = 1),
      (this.metalness = 0),
      (this.map = null),
      (this.lightMap = null),
      (this.lightMapIntensity = 1),
      (this.aoMap = null),
      (this.aoMapIntensity = 1),
      (this.emissive = new Fe(0)),
      (this.emissiveIntensity = 1),
      (this.emissiveMap = null),
      (this.bumpMap = null),
      (this.bumpScale = 1),
      (this.normalMap = null),
      (this.normalMapType = _p),
      (this.normalScale = new He(1, 1)),
      (this.displacementMap = null),
      (this.displacementScale = 1),
      (this.displacementBias = 0),
      (this.roughnessMap = null),
      (this.metalnessMap = null),
      (this.alphaMap = null),
      (this.envMap = null),
      (this.envMapRotation = new Si()),
      (this.envMapIntensity = 1),
      (this.wireframe = !1),
      (this.wireframeLinewidth = 1),
      (this.wireframeLinecap = "round"),
      (this.wireframeLinejoin = "round"),
      (this.flatShading = !1),
      (this.fog = !0),
      this.setValues(e);
  }
  copy(e) {
    return (
      super.copy(e),
      (this.defines = { STANDARD: "" }),
      this.color.copy(e.color),
      (this.roughness = e.roughness),
      (this.metalness = e.metalness),
      (this.map = e.map),
      (this.lightMap = e.lightMap),
      (this.lightMapIntensity = e.lightMapIntensity),
      (this.aoMap = e.aoMap),
      (this.aoMapIntensity = e.aoMapIntensity),
      this.emissive.copy(e.emissive),
      (this.emissiveMap = e.emissiveMap),
      (this.emissiveIntensity = e.emissiveIntensity),
      (this.bumpMap = e.bumpMap),
      (this.bumpScale = e.bumpScale),
      (this.normalMap = e.normalMap),
      (this.normalMapType = e.normalMapType),
      this.normalScale.copy(e.normalScale),
      (this.displacementMap = e.displacementMap),
      (this.displacementScale = e.displacementScale),
      (this.displacementBias = e.displacementBias),
      (this.roughnessMap = e.roughnessMap),
      (this.metalnessMap = e.metalnessMap),
      (this.alphaMap = e.alphaMap),
      (this.envMap = e.envMap),
      this.envMapRotation.copy(e.envMapRotation),
      (this.envMapIntensity = e.envMapIntensity),
      (this.wireframe = e.wireframe),
      (this.wireframeLinewidth = e.wireframeLinewidth),
      (this.wireframeLinecap = e.wireframeLinecap),
      (this.wireframeLinejoin = e.wireframeLinejoin),
      (this.flatShading = e.flatShading),
      (this.fog = e.fog),
      this
    );
  }
}
class tE extends fa {
  constructor(e) {
    super(),
      (this.isMeshDepthMaterial = !0),
      (this.type = "MeshDepthMaterial"),
      (this.depthPacking = hS),
      (this.map = null),
      (this.alphaMap = null),
      (this.displacementMap = null),
      (this.displacementScale = 1),
      (this.displacementBias = 0),
      (this.wireframe = !1),
      (this.wireframeLinewidth = 1),
      this.setValues(e);
  }
  copy(e) {
    return (
      super.copy(e),
      (this.depthPacking = e.depthPacking),
      (this.map = e.map),
      (this.alphaMap = e.alphaMap),
      (this.displacementMap = e.displacementMap),
      (this.displacementScale = e.displacementScale),
      (this.displacementBias = e.displacementBias),
      (this.wireframe = e.wireframe),
      (this.wireframeLinewidth = e.wireframeLinewidth),
      this
    );
  }
}
class nE extends fa {
  constructor(e) {
    super(),
      (this.isMeshDistanceMaterial = !0),
      (this.type = "MeshDistanceMaterial"),
      (this.map = null),
      (this.alphaMap = null),
      (this.displacementMap = null),
      (this.displacementScale = 1),
      (this.displacementBias = 0),
      this.setValues(e);
  }
  copy(e) {
    return (
      super.copy(e),
      (this.map = e.map),
      (this.alphaMap = e.alphaMap),
      (this.displacementMap = e.displacementMap),
      (this.displacementScale = e.displacementScale),
      (this.displacementBias = e.displacementBias),
      this
    );
  }
}
class iE extends An {
  constructor(e, t = 1) {
    super(),
      (this.isLight = !0),
      (this.type = "Light"),
      (this.color = new Fe(e)),
      (this.intensity = t);
  }
  dispose() {}
  copy(e, t) {
    return (
      super.copy(e, t),
      this.color.copy(e.color),
      (this.intensity = e.intensity),
      this
    );
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return (
      (t.object.color = this.color.getHex()),
      (t.object.intensity = this.intensity),
      this.groundColor !== void 0 &&
        (t.object.groundColor = this.groundColor.getHex()),
      this.distance !== void 0 && (t.object.distance = this.distance),
      this.angle !== void 0 && (t.object.angle = this.angle),
      this.decay !== void 0 && (t.object.decay = this.decay),
      this.penumbra !== void 0 && (t.object.penumbra = this.penumbra),
      this.shadow !== void 0 && (t.object.shadow = this.shadow.toJSON()),
      this.target !== void 0 && (t.object.target = this.target.uuid),
      t
    );
  }
}
class rE extends iE {
  constructor(e, t, i) {
    super(e, i),
      (this.isHemisphereLight = !0),
      (this.type = "HemisphereLight"),
      this.position.copy(An.DEFAULT_UP),
      this.updateMatrix(),
      (this.groundColor = new Fe(t));
  }
  copy(e, t) {
    return super.copy(e, t), this.groundColor.copy(e.groundColor), this;
  }
}
class sE extends wp {
  constructor(e = -1, t = 1, i = 1, a = -1, o = 0.1, c = 2e3) {
    super(),
      (this.isOrthographicCamera = !0),
      (this.type = "OrthographicCamera"),
      (this.zoom = 1),
      (this.view = null),
      (this.left = e),
      (this.right = t),
      (this.top = i),
      (this.bottom = a),
      (this.near = o),
      (this.far = c),
      this.updateProjectionMatrix();
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      (this.left = e.left),
      (this.right = e.right),
      (this.top = e.top),
      (this.bottom = e.bottom),
      (this.near = e.near),
      (this.far = e.far),
      (this.zoom = e.zoom),
      (this.view = e.view === null ? null : Object.assign({}, e.view)),
      this
    );
  }
  setViewOffset(e, t, i, a, o, c) {
    this.view === null &&
      (this.view = {
        enabled: !0,
        fullWidth: 1,
        fullHeight: 1,
        offsetX: 0,
        offsetY: 0,
        width: 1,
        height: 1,
      }),
      (this.view.enabled = !0),
      (this.view.fullWidth = e),
      (this.view.fullHeight = t),
      (this.view.offsetX = i),
      (this.view.offsetY = a),
      (this.view.width = o),
      (this.view.height = c),
      this.updateProjectionMatrix();
  }
  clearViewOffset() {
    this.view !== null && (this.view.enabled = !1),
      this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    const e = (this.right - this.left) / (2 * this.zoom),
      t = (this.top - this.bottom) / (2 * this.zoom),
      i = (this.right + this.left) / 2,
      a = (this.top + this.bottom) / 2;
    let o = i - e,
      c = i + e,
      u = a + t,
      d = a - t;
    if (this.view !== null && this.view.enabled) {
      const h = (this.right - this.left) / this.view.fullWidth / this.zoom,
        p = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
      (o += h * this.view.offsetX),
        (c = o + h * this.view.width),
        (u -= p * this.view.offsetY),
        (d = u - p * this.view.height);
    }
    this.projectionMatrix.makeOrthographic(
      o,
      c,
      u,
      d,
      this.near,
      this.far,
      this.coordinateSystem,
    ),
      this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return (
      (t.object.zoom = this.zoom),
      (t.object.left = this.left),
      (t.object.right = this.right),
      (t.object.top = this.top),
      (t.object.bottom = this.bottom),
      (t.object.near = this.near),
      (t.object.far = this.far),
      this.view !== null && (t.object.view = Object.assign({}, this.view)),
      t
    );
  }
}
class aE extends ti {
  constructor(e = []) {
    super(), (this.isArrayCamera = !0), (this.cameras = e), (this.index = 0);
  }
}
function Ad(s, e, t, i) {
  const a = oE(i);
  switch (t) {
    case cp:
      return s * e;
    case fp:
      return s * e;
    case hp:
      return s * e * 2;
    case dp:
      return ((s * e) / a.components) * a.byteLength;
    case bu:
      return ((s * e) / a.components) * a.byteLength;
    case pp:
      return ((s * e * 2) / a.components) * a.byteLength;
    case Ru:
      return ((s * e * 2) / a.components) * a.byteLength;
    case up:
      return ((s * e * 3) / a.components) * a.byteLength;
    case hi:
      return ((s * e * 4) / a.components) * a.byteLength;
    case Cu:
      return ((s * e * 4) / a.components) * a.byteLength;
    case Ro:
    case Co:
      return Math.floor((s + 3) / 4) * Math.floor((e + 3) / 4) * 8;
    case Po:
    case Lo:
      return Math.floor((s + 3) / 4) * Math.floor((e + 3) / 4) * 16;
    case qc:
    case Zc:
      return (Math.max(s, 16) * Math.max(e, 8)) / 4;
    case Xc:
    case Yc:
      return (Math.max(s, 8) * Math.max(e, 8)) / 2;
    case Kc:
    case $c:
      return Math.floor((s + 3) / 4) * Math.floor((e + 3) / 4) * 8;
    case Jc:
      return Math.floor((s + 3) / 4) * Math.floor((e + 3) / 4) * 16;
    case Qc:
      return Math.floor((s + 3) / 4) * Math.floor((e + 3) / 4) * 16;
    case jc:
      return Math.floor((s + 4) / 5) * Math.floor((e + 3) / 4) * 16;
    case eu:
      return Math.floor((s + 4) / 5) * Math.floor((e + 4) / 5) * 16;
    case tu:
      return Math.floor((s + 5) / 6) * Math.floor((e + 4) / 5) * 16;
    case nu:
      return Math.floor((s + 5) / 6) * Math.floor((e + 5) / 6) * 16;
    case iu:
      return Math.floor((s + 7) / 8) * Math.floor((e + 4) / 5) * 16;
    case ru:
      return Math.floor((s + 7) / 8) * Math.floor((e + 5) / 6) * 16;
    case su:
      return Math.floor((s + 7) / 8) * Math.floor((e + 7) / 8) * 16;
    case au:
      return Math.floor((s + 9) / 10) * Math.floor((e + 4) / 5) * 16;
    case ou:
      return Math.floor((s + 9) / 10) * Math.floor((e + 5) / 6) * 16;
    case lu:
      return Math.floor((s + 9) / 10) * Math.floor((e + 7) / 8) * 16;
    case cu:
      return Math.floor((s + 9) / 10) * Math.floor((e + 9) / 10) * 16;
    case uu:
      return Math.floor((s + 11) / 12) * Math.floor((e + 9) / 10) * 16;
    case fu:
      return Math.floor((s + 11) / 12) * Math.floor((e + 11) / 12) * 16;
    case Io:
    case hu:
    case du:
      return Math.ceil(s / 4) * Math.ceil(e / 4) * 16;
    case mp:
    case pu:
      return Math.ceil(s / 4) * Math.ceil(e / 4) * 8;
    case mu:
    case _u:
      return Math.ceil(s / 4) * Math.ceil(e / 4) * 16;
  }
  throw new Error(`Unable to determine texture byte length for ${t} format.`);
}
function oE(s) {
  switch (s) {
    case Wi:
    case ap:
      return { byteLength: 1, components: 1 };
    case aa:
    case op:
    case oa:
      return { byteLength: 2, components: 1 };
    case Au:
    case wu:
      return { byteLength: 2, components: 4 };
    case Nr:
    case Tu:
    case Gi:
      return { byteLength: 4, components: 1 };
    case lp:
      return { byteLength: 4, components: 3 };
  }
  throw new Error(`Unknown texture type ${s}.`);
}
typeof __THREE_DEVTOOLS__ < "u" &&
  __THREE_DEVTOOLS__.dispatchEvent(
    new CustomEvent("register", { detail: { revision: yu } }),
  );
typeof window < "u" &&
  (window.__THREE__
    ? console.warn("WARNING: Multiple instances of Three.js being imported.")
    : (window.__THREE__ = yu));
/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */ function Pp() {
  let s = null,
    e = !1,
    t = null,
    i = null;
  function a(o, c) {
    t(o, c), (i = s.requestAnimationFrame(a));
  }
  return {
    start: function () {
      e !== !0 && t !== null && ((i = s.requestAnimationFrame(a)), (e = !0));
    },
    stop: function () {
      s.cancelAnimationFrame(i), (e = !1);
    },
    setAnimationLoop: function (o) {
      t = o;
    },
    setContext: function (o) {
      s = o;
    },
  };
}
function lE(s) {
  const e = new WeakMap();
  function t(u, d) {
    const h = u.array,
      p = u.usage,
      _ = h.byteLength,
      g = s.createBuffer();
    s.bindBuffer(d, g), s.bufferData(d, h, p), u.onUploadCallback();
    let M;
    if (h instanceof Float32Array) M = s.FLOAT;
    else if (h instanceof Uint16Array)
      u.isFloat16BufferAttribute ? (M = s.HALF_FLOAT) : (M = s.UNSIGNED_SHORT);
    else if (h instanceof Int16Array) M = s.SHORT;
    else if (h instanceof Uint32Array) M = s.UNSIGNED_INT;
    else if (h instanceof Int32Array) M = s.INT;
    else if (h instanceof Int8Array) M = s.BYTE;
    else if (h instanceof Uint8Array) M = s.UNSIGNED_BYTE;
    else if (h instanceof Uint8ClampedArray) M = s.UNSIGNED_BYTE;
    else
      throw new Error(
        "THREE.WebGLAttributes: Unsupported buffer data format: " + h,
      );
    return {
      buffer: g,
      type: M,
      bytesPerElement: h.BYTES_PER_ELEMENT,
      version: u.version,
      size: _,
    };
  }
  function i(u, d, h) {
    const p = d.array,
      _ = d.updateRanges;
    if ((s.bindBuffer(h, u), _.length === 0)) s.bufferSubData(h, 0, p);
    else {
      _.sort((M, T) => M.start - T.start);
      let g = 0;
      for (let M = 1; M < _.length; M++) {
        const T = _[g],
          C = _[M];
        C.start <= T.start + T.count + 1
          ? (T.count = Math.max(T.count, C.start + C.count - T.start))
          : (++g, (_[g] = C));
      }
      _.length = g + 1;
      for (let M = 0, T = _.length; M < T; M++) {
        const C = _[M];
        s.bufferSubData(h, C.start * p.BYTES_PER_ELEMENT, p, C.start, C.count);
      }
      d.clearUpdateRanges();
    }
    d.onUploadCallback();
  }
  function a(u) {
    return u.isInterleavedBufferAttribute && (u = u.data), e.get(u);
  }
  function o(u) {
    u.isInterleavedBufferAttribute && (u = u.data);
    const d = e.get(u);
    d && (s.deleteBuffer(d.buffer), e.delete(u));
  }
  function c(u, d) {
    if (
      (u.isInterleavedBufferAttribute && (u = u.data), u.isGLBufferAttribute)
    ) {
      const p = e.get(u);
      (!p || p.version < u.version) &&
        e.set(u, {
          buffer: u.buffer,
          type: u.type,
          bytesPerElement: u.elementSize,
          version: u.version,
        });
      return;
    }
    const h = e.get(u);
    if (h === void 0) e.set(u, t(u, d));
    else if (h.version < u.version) {
      if (h.size !== u.array.byteLength)
        throw new Error(
          "THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.",
        );
      i(h.buffer, u, d), (h.version = u.version);
    }
  }
  return { get: a, remove: o, update: c };
}
var cE = `#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,
  uE = `#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,
  fE = `#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,
  hE = `#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,
  dE = `#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,
  pE = `#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,
  mE = `#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,
  _E = `#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,
  gE = `#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,
  vE = `#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,
  xE = `vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,
  ME = `vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,
  SE = `float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,
  EE = `#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,
  yE = `#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,
  TE = `#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,
  AE = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,
  wE = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,
  bE = `#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,
  RE = `#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,
  CE = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,
  PE = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,
  LE = `#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,
  IE = `#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,
  DE = `#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,
  UE = `vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,
  NE = `#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,
  FE = `#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,
  OE = `#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,
  BE = `#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,
  zE = "gl_FragColor = linearToOutputTexel( gl_FragColor );",
  GE = `vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,
  HE = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,
  VE = `#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,
  kE = `#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,
  WE = `#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,
  XE = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,
  qE = `#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,
  YE = `#ifdef USE_FOG
	varying float vFogDepth;
#endif`,
  ZE = `#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,
  KE = `#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,
  $E = `#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,
  JE = `#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,
  QE = `LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,
  jE = `varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,
  ey = `uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,
  ty = `#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,
  ny = `ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,
  iy = `varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,
  ry = `BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,
  sy = `varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,
  ay = `PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,
  oy = `struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,
  ly = `
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,
  cy = `#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,
  uy = `#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,
  fy = `#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,
  hy = `#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,
  dy = `#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,
  py = `#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,
  my = `#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,
  _y = `#ifdef USE_MAP
	uniform sampler2D map;
#endif`,
  gy = `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,
  vy = `#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,
  xy = `float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,
  My = `#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,
  Sy = `#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,
  Ey = `#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,
  yy = `#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,
  Ty = `#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,
  Ay = `#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,
  wy = `float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,
  by = `#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,
  Ry = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,
  Cy = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,
  Py = `#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,
  Ly = `#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,
  Iy = `#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,
  Dy = `#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,
  Uy = `#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,
  Ny = `#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,
  Fy = `#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,
  Oy = `vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,
  By = `#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,
  zy = `vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,
  Gy = `#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,
  Hy = `#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,
  Vy = `float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,
  ky = `#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,
  Wy = `#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,
  Xy = `#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,
  qy = `#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,
  Yy = `float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,
  Zy = `#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,
  Ky = `#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,
  $y = `#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,
  Jy = `#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,
  Qy = `float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,
  jy = `#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,
  eT = `#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,
  tT = `#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,
  nT = `#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,
  iT = `#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,
  rT = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,
  sT = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,
  aT = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,
  oT = `#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;
const lT = `varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,
  cT = `uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,
  uT = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,
  fT = `#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,
  hT = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,
  dT = `uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,
  pT = `#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,
  mT = `#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,
  _T = `#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,
  gT = `#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,
  vT = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,
  xT = `uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,
  MT = `uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,
  ST = `uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,
  ET = `#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,
  yT = `uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
  TT = `#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,
  AT = `#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
  wT = `#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,
  bT = `#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
  RT = `#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,
  CT = `#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,
  PT = `#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,
  LT = `#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
  IT = `#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,
  DT = `#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
  UT = `#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,
  NT = `#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
  FT = `uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,
  OT = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,
  BT = `#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,
  zT = `uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,
  GT = `uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,
  HT = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,
  ot = {
    alphahash_fragment: cE,
    alphahash_pars_fragment: uE,
    alphamap_fragment: fE,
    alphamap_pars_fragment: hE,
    alphatest_fragment: dE,
    alphatest_pars_fragment: pE,
    aomap_fragment: mE,
    aomap_pars_fragment: _E,
    batching_pars_vertex: gE,
    batching_vertex: vE,
    begin_vertex: xE,
    beginnormal_vertex: ME,
    bsdfs: SE,
    iridescence_fragment: EE,
    bumpmap_pars_fragment: yE,
    clipping_planes_fragment: TE,
    clipping_planes_pars_fragment: AE,
    clipping_planes_pars_vertex: wE,
    clipping_planes_vertex: bE,
    color_fragment: RE,
    color_pars_fragment: CE,
    color_pars_vertex: PE,
    color_vertex: LE,
    common: IE,
    cube_uv_reflection_fragment: DE,
    defaultnormal_vertex: UE,
    displacementmap_pars_vertex: NE,
    displacementmap_vertex: FE,
    emissivemap_fragment: OE,
    emissivemap_pars_fragment: BE,
    colorspace_fragment: zE,
    colorspace_pars_fragment: GE,
    envmap_fragment: HE,
    envmap_common_pars_fragment: VE,
    envmap_pars_fragment: kE,
    envmap_pars_vertex: WE,
    envmap_physical_pars_fragment: ty,
    envmap_vertex: XE,
    fog_vertex: qE,
    fog_pars_vertex: YE,
    fog_fragment: ZE,
    fog_pars_fragment: KE,
    gradientmap_pars_fragment: $E,
    lightmap_pars_fragment: JE,
    lights_lambert_fragment: QE,
    lights_lambert_pars_fragment: jE,
    lights_pars_begin: ey,
    lights_toon_fragment: ny,
    lights_toon_pars_fragment: iy,
    lights_phong_fragment: ry,
    lights_phong_pars_fragment: sy,
    lights_physical_fragment: ay,
    lights_physical_pars_fragment: oy,
    lights_fragment_begin: ly,
    lights_fragment_maps: cy,
    lights_fragment_end: uy,
    logdepthbuf_fragment: fy,
    logdepthbuf_pars_fragment: hy,
    logdepthbuf_pars_vertex: dy,
    logdepthbuf_vertex: py,
    map_fragment: my,
    map_pars_fragment: _y,
    map_particle_fragment: gy,
    map_particle_pars_fragment: vy,
    metalnessmap_fragment: xy,
    metalnessmap_pars_fragment: My,
    morphinstance_vertex: Sy,
    morphcolor_vertex: Ey,
    morphnormal_vertex: yy,
    morphtarget_pars_vertex: Ty,
    morphtarget_vertex: Ay,
    normal_fragment_begin: wy,
    normal_fragment_maps: by,
    normal_pars_fragment: Ry,
    normal_pars_vertex: Cy,
    normal_vertex: Py,
    normalmap_pars_fragment: Ly,
    clearcoat_normal_fragment_begin: Iy,
    clearcoat_normal_fragment_maps: Dy,
    clearcoat_pars_fragment: Uy,
    iridescence_pars_fragment: Ny,
    opaque_fragment: Fy,
    packing: Oy,
    premultiplied_alpha_fragment: By,
    project_vertex: zy,
    dithering_fragment: Gy,
    dithering_pars_fragment: Hy,
    roughnessmap_fragment: Vy,
    roughnessmap_pars_fragment: ky,
    shadowmap_pars_fragment: Wy,
    shadowmap_pars_vertex: Xy,
    shadowmap_vertex: qy,
    shadowmask_pars_fragment: Yy,
    skinbase_vertex: Zy,
    skinning_pars_vertex: Ky,
    skinning_vertex: $y,
    skinnormal_vertex: Jy,
    specularmap_fragment: Qy,
    specularmap_pars_fragment: jy,
    tonemapping_fragment: eT,
    tonemapping_pars_fragment: tT,
    transmission_fragment: nT,
    transmission_pars_fragment: iT,
    uv_pars_fragment: rT,
    uv_pars_vertex: sT,
    uv_vertex: aT,
    worldpos_vertex: oT,
    background_vert: lT,
    background_frag: cT,
    backgroundCube_vert: uT,
    backgroundCube_frag: fT,
    cube_vert: hT,
    cube_frag: dT,
    depth_vert: pT,
    depth_frag: mT,
    distanceRGBA_vert: _T,
    distanceRGBA_frag: gT,
    equirect_vert: vT,
    equirect_frag: xT,
    linedashed_vert: MT,
    linedashed_frag: ST,
    meshbasic_vert: ET,
    meshbasic_frag: yT,
    meshlambert_vert: TT,
    meshlambert_frag: AT,
    meshmatcap_vert: wT,
    meshmatcap_frag: bT,
    meshnormal_vert: RT,
    meshnormal_frag: CT,
    meshphong_vert: PT,
    meshphong_frag: LT,
    meshphysical_vert: IT,
    meshphysical_frag: DT,
    meshtoon_vert: UT,
    meshtoon_frag: NT,
    points_vert: FT,
    points_frag: OT,
    shadow_vert: BT,
    shadow_frag: zT,
    sprite_vert: GT,
    sprite_frag: HT,
  },
  xe = {
    common: {
      diffuse: { value: new Fe(16777215) },
      opacity: { value: 1 },
      map: { value: null },
      mapTransform: { value: new st() },
      alphaMap: { value: null },
      alphaMapTransform: { value: new st() },
      alphaTest: { value: 0 },
    },
    specularmap: {
      specularMap: { value: null },
      specularMapTransform: { value: new st() },
    },
    envmap: {
      envMap: { value: null },
      envMapRotation: { value: new st() },
      flipEnvMap: { value: -1 },
      reflectivity: { value: 1 },
      ior: { value: 1.5 },
      refractionRatio: { value: 0.98 },
    },
    aomap: {
      aoMap: { value: null },
      aoMapIntensity: { value: 1 },
      aoMapTransform: { value: new st() },
    },
    lightmap: {
      lightMap: { value: null },
      lightMapIntensity: { value: 1 },
      lightMapTransform: { value: new st() },
    },
    bumpmap: {
      bumpMap: { value: null },
      bumpMapTransform: { value: new st() },
      bumpScale: { value: 1 },
    },
    normalmap: {
      normalMap: { value: null },
      normalMapTransform: { value: new st() },
      normalScale: { value: new He(1, 1) },
    },
    displacementmap: {
      displacementMap: { value: null },
      displacementMapTransform: { value: new st() },
      displacementScale: { value: 1 },
      displacementBias: { value: 0 },
    },
    emissivemap: {
      emissiveMap: { value: null },
      emissiveMapTransform: { value: new st() },
    },
    metalnessmap: {
      metalnessMap: { value: null },
      metalnessMapTransform: { value: new st() },
    },
    roughnessmap: {
      roughnessMap: { value: null },
      roughnessMapTransform: { value: new st() },
    },
    gradientmap: { gradientMap: { value: null } },
    fog: {
      fogDensity: { value: 25e-5 },
      fogNear: { value: 1 },
      fogFar: { value: 2e3 },
      fogColor: { value: new Fe(16777215) },
    },
    lights: {
      ambientLightColor: { value: [] },
      lightProbe: { value: [] },
      directionalLights: {
        value: [],
        properties: { direction: {}, color: {} },
      },
      directionalLightShadows: {
        value: [],
        properties: {
          shadowIntensity: 1,
          shadowBias: {},
          shadowNormalBias: {},
          shadowRadius: {},
          shadowMapSize: {},
        },
      },
      directionalShadowMap: { value: [] },
      directionalShadowMatrix: { value: [] },
      spotLights: {
        value: [],
        properties: {
          color: {},
          position: {},
          direction: {},
          distance: {},
          coneCos: {},
          penumbraCos: {},
          decay: {},
        },
      },
      spotLightShadows: {
        value: [],
        properties: {
          shadowIntensity: 1,
          shadowBias: {},
          shadowNormalBias: {},
          shadowRadius: {},
          shadowMapSize: {},
        },
      },
      spotLightMap: { value: [] },
      spotShadowMap: { value: [] },
      spotLightMatrix: { value: [] },
      pointLights: {
        value: [],
        properties: { color: {}, position: {}, decay: {}, distance: {} },
      },
      pointLightShadows: {
        value: [],
        properties: {
          shadowIntensity: 1,
          shadowBias: {},
          shadowNormalBias: {},
          shadowRadius: {},
          shadowMapSize: {},
          shadowCameraNear: {},
          shadowCameraFar: {},
        },
      },
      pointShadowMap: { value: [] },
      pointShadowMatrix: { value: [] },
      hemisphereLights: {
        value: [],
        properties: { direction: {}, skyColor: {}, groundColor: {} },
      },
      rectAreaLights: {
        value: [],
        properties: { color: {}, position: {}, width: {}, height: {} },
      },
      ltc_1: { value: null },
      ltc_2: { value: null },
    },
    points: {
      diffuse: { value: new Fe(16777215) },
      opacity: { value: 1 },
      size: { value: 1 },
      scale: { value: 1 },
      map: { value: null },
      alphaMap: { value: null },
      alphaMapTransform: { value: new st() },
      alphaTest: { value: 0 },
      uvTransform: { value: new st() },
    },
    sprite: {
      diffuse: { value: new Fe(16777215) },
      opacity: { value: 1 },
      center: { value: new He(0.5, 0.5) },
      rotation: { value: 0 },
      map: { value: null },
      mapTransform: { value: new st() },
      alphaMap: { value: null },
      alphaMapTransform: { value: new st() },
      alphaTest: { value: 0 },
    },
  },
  vi = {
    basic: {
      uniforms: yn([
        xe.common,
        xe.specularmap,
        xe.envmap,
        xe.aomap,
        xe.lightmap,
        xe.fog,
      ]),
      vertexShader: ot.meshbasic_vert,
      fragmentShader: ot.meshbasic_frag,
    },
    lambert: {
      uniforms: yn([
        xe.common,
        xe.specularmap,
        xe.envmap,
        xe.aomap,
        xe.lightmap,
        xe.emissivemap,
        xe.bumpmap,
        xe.normalmap,
        xe.displacementmap,
        xe.fog,
        xe.lights,
        { emissive: { value: new Fe(0) } },
      ]),
      vertexShader: ot.meshlambert_vert,
      fragmentShader: ot.meshlambert_frag,
    },
    phong: {
      uniforms: yn([
        xe.common,
        xe.specularmap,
        xe.envmap,
        xe.aomap,
        xe.lightmap,
        xe.emissivemap,
        xe.bumpmap,
        xe.normalmap,
        xe.displacementmap,
        xe.fog,
        xe.lights,
        {
          emissive: { value: new Fe(0) },
          specular: { value: new Fe(1118481) },
          shininess: { value: 30 },
        },
      ]),
      vertexShader: ot.meshphong_vert,
      fragmentShader: ot.meshphong_frag,
    },
    standard: {
      uniforms: yn([
        xe.common,
        xe.envmap,
        xe.aomap,
        xe.lightmap,
        xe.emissivemap,
        xe.bumpmap,
        xe.normalmap,
        xe.displacementmap,
        xe.roughnessmap,
        xe.metalnessmap,
        xe.fog,
        xe.lights,
        {
          emissive: { value: new Fe(0) },
          roughness: { value: 1 },
          metalness: { value: 0 },
          envMapIntensity: { value: 1 },
        },
      ]),
      vertexShader: ot.meshphysical_vert,
      fragmentShader: ot.meshphysical_frag,
    },
    toon: {
      uniforms: yn([
        xe.common,
        xe.aomap,
        xe.lightmap,
        xe.emissivemap,
        xe.bumpmap,
        xe.normalmap,
        xe.displacementmap,
        xe.gradientmap,
        xe.fog,
        xe.lights,
        { emissive: { value: new Fe(0) } },
      ]),
      vertexShader: ot.meshtoon_vert,
      fragmentShader: ot.meshtoon_frag,
    },
    matcap: {
      uniforms: yn([
        xe.common,
        xe.bumpmap,
        xe.normalmap,
        xe.displacementmap,
        xe.fog,
        { matcap: { value: null } },
      ]),
      vertexShader: ot.meshmatcap_vert,
      fragmentShader: ot.meshmatcap_frag,
    },
    points: {
      uniforms: yn([xe.points, xe.fog]),
      vertexShader: ot.points_vert,
      fragmentShader: ot.points_frag,
    },
    dashed: {
      uniforms: yn([
        xe.common,
        xe.fog,
        {
          scale: { value: 1 },
          dashSize: { value: 1 },
          totalSize: { value: 2 },
        },
      ]),
      vertexShader: ot.linedashed_vert,
      fragmentShader: ot.linedashed_frag,
    },
    depth: {
      uniforms: yn([xe.common, xe.displacementmap]),
      vertexShader: ot.depth_vert,
      fragmentShader: ot.depth_frag,
    },
    normal: {
      uniforms: yn([
        xe.common,
        xe.bumpmap,
        xe.normalmap,
        xe.displacementmap,
        { opacity: { value: 1 } },
      ]),
      vertexShader: ot.meshnormal_vert,
      fragmentShader: ot.meshnormal_frag,
    },
    sprite: {
      uniforms: yn([xe.sprite, xe.fog]),
      vertexShader: ot.sprite_vert,
      fragmentShader: ot.sprite_frag,
    },
    background: {
      uniforms: {
        uvTransform: { value: new st() },
        t2D: { value: null },
        backgroundIntensity: { value: 1 },
      },
      vertexShader: ot.background_vert,
      fragmentShader: ot.background_frag,
    },
    backgroundCube: {
      uniforms: {
        envMap: { value: null },
        flipEnvMap: { value: -1 },
        backgroundBlurriness: { value: 0 },
        backgroundIntensity: { value: 1 },
        backgroundRotation: { value: new st() },
      },
      vertexShader: ot.backgroundCube_vert,
      fragmentShader: ot.backgroundCube_frag,
    },
    cube: {
      uniforms: {
        tCube: { value: null },
        tFlip: { value: -1 },
        opacity: { value: 1 },
      },
      vertexShader: ot.cube_vert,
      fragmentShader: ot.cube_frag,
    },
    equirect: {
      uniforms: { tEquirect: { value: null } },
      vertexShader: ot.equirect_vert,
      fragmentShader: ot.equirect_frag,
    },
    distanceRGBA: {
      uniforms: yn([
        xe.common,
        xe.displacementmap,
        {
          referencePosition: { value: new W() },
          nearDistance: { value: 1 },
          farDistance: { value: 1e3 },
        },
      ]),
      vertexShader: ot.distanceRGBA_vert,
      fragmentShader: ot.distanceRGBA_frag,
    },
    shadow: {
      uniforms: yn([
        xe.lights,
        xe.fog,
        { color: { value: new Fe(0) }, opacity: { value: 1 } },
      ]),
      vertexShader: ot.shadow_vert,
      fragmentShader: ot.shadow_frag,
    },
  };
vi.physical = {
  uniforms: yn([
    vi.standard.uniforms,
    {
      clearcoat: { value: 0 },
      clearcoatMap: { value: null },
      clearcoatMapTransform: { value: new st() },
      clearcoatNormalMap: { value: null },
      clearcoatNormalMapTransform: { value: new st() },
      clearcoatNormalScale: { value: new He(1, 1) },
      clearcoatRoughness: { value: 0 },
      clearcoatRoughnessMap: { value: null },
      clearcoatRoughnessMapTransform: { value: new st() },
      dispersion: { value: 0 },
      iridescence: { value: 0 },
      iridescenceMap: { value: null },
      iridescenceMapTransform: { value: new st() },
      iridescenceIOR: { value: 1.3 },
      iridescenceThicknessMinimum: { value: 100 },
      iridescenceThicknessMaximum: { value: 400 },
      iridescenceThicknessMap: { value: null },
      iridescenceThicknessMapTransform: { value: new st() },
      sheen: { value: 0 },
      sheenColor: { value: new Fe(0) },
      sheenColorMap: { value: null },
      sheenColorMapTransform: { value: new st() },
      sheenRoughness: { value: 1 },
      sheenRoughnessMap: { value: null },
      sheenRoughnessMapTransform: { value: new st() },
      transmission: { value: 0 },
      transmissionMap: { value: null },
      transmissionMapTransform: { value: new st() },
      transmissionSamplerSize: { value: new He() },
      transmissionSamplerMap: { value: null },
      thickness: { value: 0 },
      thicknessMap: { value: null },
      thicknessMapTransform: { value: new st() },
      attenuationDistance: { value: 0 },
      attenuationColor: { value: new Fe(0) },
      specularColor: { value: new Fe(1, 1, 1) },
      specularColorMap: { value: null },
      specularColorMapTransform: { value: new st() },
      specularIntensity: { value: 1 },
      specularIntensityMap: { value: null },
      specularIntensityMapTransform: { value: new st() },
      anisotropyVector: { value: new He() },
      anisotropyMap: { value: null },
      anisotropyMapTransform: { value: new st() },
    },
  ]),
  vertexShader: ot.meshphysical_vert,
  fragmentShader: ot.meshphysical_frag,
};
const To = { r: 0, b: 0, g: 0 },
  wr = new Si(),
  VT = new $t();
function kT(s, e, t, i, a, o, c) {
  const u = new Fe(0);
  let d = o === !0 ? 0 : 1,
    h,
    p,
    _ = null,
    g = 0,
    M = null;
  function T(L) {
    let b = L.isScene === !0 ? L.background : null;
    return (
      b && b.isTexture && (b = (L.backgroundBlurriness > 0 ? t : e).get(b)), b
    );
  }
  function C(L) {
    let b = !1;
    const z = T(L);
    z === null ? m(u, d) : z && z.isColor && (m(z, 1), (b = !0));
    const N = s.xr.getEnvironmentBlendMode();
    N === "additive"
      ? i.buffers.color.setClear(0, 0, 0, 1, c)
      : N === "alpha-blend" && i.buffers.color.setClear(0, 0, 0, 0, c),
      (s.autoClear || b) &&
        (i.buffers.depth.setTest(!0),
        i.buffers.depth.setMask(!0),
        i.buffers.color.setMask(!0),
        s.clear(s.autoClearColor, s.autoClearDepth, s.autoClearStencil));
  }
  function v(L, b) {
    const z = T(b);
    z && (z.isCubeTexture || z.mapping === zo)
      ? (p === void 0 &&
          ((p = new Tn(
            new Or(1, 1, 1),
            new fr({
              name: "BackgroundCubeMaterial",
              uniforms: bs(vi.backgroundCube.uniforms),
              vertexShader: vi.backgroundCube.vertexShader,
              fragmentShader: vi.backgroundCube.fragmentShader,
              side: Dn,
              depthTest: !1,
              depthWrite: !1,
              fog: !1,
            }),
          )),
          p.geometry.deleteAttribute("normal"),
          p.geometry.deleteAttribute("uv"),
          (p.onBeforeRender = function (N, U, G) {
            this.matrixWorld.copyPosition(G.matrixWorld);
          }),
          Object.defineProperty(p.material, "envMap", {
            get: function () {
              return this.uniforms.envMap.value;
            },
          }),
          a.update(p)),
        wr.copy(b.backgroundRotation),
        (wr.x *= -1),
        (wr.y *= -1),
        (wr.z *= -1),
        z.isCubeTexture &&
          z.isRenderTargetTexture === !1 &&
          ((wr.y *= -1), (wr.z *= -1)),
        (p.material.uniforms.envMap.value = z),
        (p.material.uniforms.flipEnvMap.value =
          z.isCubeTexture && z.isRenderTargetTexture === !1 ? -1 : 1),
        (p.material.uniforms.backgroundBlurriness.value =
          b.backgroundBlurriness),
        (p.material.uniforms.backgroundIntensity.value = b.backgroundIntensity),
        p.material.uniforms.backgroundRotation.value.setFromMatrix4(
          VT.makeRotationFromEuler(wr),
        ),
        (p.material.toneMapped = Tt.getTransfer(z.colorSpace) !== Dt),
        (_ !== z || g !== z.version || M !== s.toneMapping) &&
          ((p.material.needsUpdate = !0),
          (_ = z),
          (g = z.version),
          (M = s.toneMapping)),
        p.layers.enableAll(),
        L.unshift(p, p.geometry, p.material, 0, 0, null))
      : z &&
        z.isTexture &&
        (h === void 0 &&
          ((h = new Tn(
            new Ho(2, 2),
            new fr({
              name: "BackgroundMaterial",
              uniforms: bs(vi.background.uniforms),
              vertexShader: vi.background.vertexShader,
              fragmentShader: vi.background.fragmentShader,
              side: ur,
              depthTest: !1,
              depthWrite: !1,
              fog: !1,
            }),
          )),
          h.geometry.deleteAttribute("normal"),
          Object.defineProperty(h.material, "map", {
            get: function () {
              return this.uniforms.t2D.value;
            },
          }),
          a.update(h)),
        (h.material.uniforms.t2D.value = z),
        (h.material.uniforms.backgroundIntensity.value = b.backgroundIntensity),
        (h.material.toneMapped = Tt.getTransfer(z.colorSpace) !== Dt),
        z.matrixAutoUpdate === !0 && z.updateMatrix(),
        h.material.uniforms.uvTransform.value.copy(z.matrix),
        (_ !== z || g !== z.version || M !== s.toneMapping) &&
          ((h.material.needsUpdate = !0),
          (_ = z),
          (g = z.version),
          (M = s.toneMapping)),
        h.layers.enableAll(),
        L.unshift(h, h.geometry, h.material, 0, 0, null));
  }
  function m(L, b) {
    L.getRGB(To, Ap(s)), i.buffers.color.setClear(To.r, To.g, To.b, b, c);
  }
  function P() {
    p !== void 0 && (p.geometry.dispose(), p.material.dispose(), (p = void 0)),
      h !== void 0 &&
        (h.geometry.dispose(), h.material.dispose(), (h = void 0));
  }
  return {
    getClearColor: function () {
      return u;
    },
    setClearColor: function (L, b = 1) {
      u.set(L), (d = b), m(u, d);
    },
    getClearAlpha: function () {
      return d;
    },
    setClearAlpha: function (L) {
      (d = L), m(u, d);
    },
    render: C,
    addToRenderList: v,
    dispose: P,
  };
}
function WT(s, e) {
  const t = s.getParameter(s.MAX_VERTEX_ATTRIBS),
    i = {},
    a = g(null);
  let o = a,
    c = !1;
  function u(y, B, Q, $, ie) {
    let ue = !1;
    const ne = _($, Q, B);
    o !== ne && ((o = ne), h(o.object)),
      (ue = M(y, $, Q, ie)),
      ue && T(y, $, Q, ie),
      ie !== null && e.update(ie, s.ELEMENT_ARRAY_BUFFER),
      (ue || c) &&
        ((c = !1),
        b(y, B, Q, $),
        ie !== null && s.bindBuffer(s.ELEMENT_ARRAY_BUFFER, e.get(ie).buffer));
  }
  function d() {
    return s.createVertexArray();
  }
  function h(y) {
    return s.bindVertexArray(y);
  }
  function p(y) {
    return s.deleteVertexArray(y);
  }
  function _(y, B, Q) {
    const $ = Q.wireframe === !0;
    let ie = i[y.id];
    ie === void 0 && ((ie = {}), (i[y.id] = ie));
    let ue = ie[B.id];
    ue === void 0 && ((ue = {}), (ie[B.id] = ue));
    let ne = ue[$];
    return ne === void 0 && ((ne = g(d())), (ue[$] = ne)), ne;
  }
  function g(y) {
    const B = [],
      Q = [],
      $ = [];
    for (let ie = 0; ie < t; ie++) (B[ie] = 0), (Q[ie] = 0), ($[ie] = 0);
    return {
      geometry: null,
      program: null,
      wireframe: !1,
      newAttributes: B,
      enabledAttributes: Q,
      attributeDivisors: $,
      object: y,
      attributes: {},
      index: null,
    };
  }
  function M(y, B, Q, $) {
    const ie = o.attributes,
      ue = B.attributes;
    let ne = 0;
    const de = Q.getAttributes();
    for (const j in de)
      if (de[j].location >= 0) {
        const we = ie[j];
        let De = ue[j];
        if (
          (De === void 0 &&
            (j === "instanceMatrix" &&
              y.instanceMatrix &&
              (De = y.instanceMatrix),
            j === "instanceColor" && y.instanceColor && (De = y.instanceColor)),
          we === void 0 || we.attribute !== De || (De && we.data !== De.data))
        )
          return !0;
        ne++;
      }
    return o.attributesNum !== ne || o.index !== $;
  }
  function T(y, B, Q, $) {
    const ie = {},
      ue = B.attributes;
    let ne = 0;
    const de = Q.getAttributes();
    for (const j in de)
      if (de[j].location >= 0) {
        let we = ue[j];
        we === void 0 &&
          (j === "instanceMatrix" &&
            y.instanceMatrix &&
            (we = y.instanceMatrix),
          j === "instanceColor" && y.instanceColor && (we = y.instanceColor));
        const De = {};
        (De.attribute = we),
          we && we.data && (De.data = we.data),
          (ie[j] = De),
          ne++;
      }
    (o.attributes = ie), (o.attributesNum = ne), (o.index = $);
  }
  function C() {
    const y = o.newAttributes;
    for (let B = 0, Q = y.length; B < Q; B++) y[B] = 0;
  }
  function v(y) {
    m(y, 0);
  }
  function m(y, B) {
    const Q = o.newAttributes,
      $ = o.enabledAttributes,
      ie = o.attributeDivisors;
    (Q[y] = 1),
      $[y] === 0 && (s.enableVertexAttribArray(y), ($[y] = 1)),
      ie[y] !== B && (s.vertexAttribDivisor(y, B), (ie[y] = B));
  }
  function P() {
    const y = o.newAttributes,
      B = o.enabledAttributes;
    for (let Q = 0, $ = B.length; Q < $; Q++)
      B[Q] !== y[Q] && (s.disableVertexAttribArray(Q), (B[Q] = 0));
  }
  function L(y, B, Q, $, ie, ue, ne) {
    ne === !0
      ? s.vertexAttribIPointer(y, B, Q, ie, ue)
      : s.vertexAttribPointer(y, B, Q, $, ie, ue);
  }
  function b(y, B, Q, $) {
    C();
    const ie = $.attributes,
      ue = Q.getAttributes(),
      ne = B.defaultAttributeValues;
    for (const de in ue) {
      const j = ue[de];
      if (j.location >= 0) {
        let Ee = ie[de];
        if (
          (Ee === void 0 &&
            (de === "instanceMatrix" &&
              y.instanceMatrix &&
              (Ee = y.instanceMatrix),
            de === "instanceColor" &&
              y.instanceColor &&
              (Ee = y.instanceColor)),
          Ee !== void 0)
        ) {
          const we = Ee.normalized,
            De = Ee.itemSize,
            lt = e.get(Ee);
          if (lt === void 0) continue;
          const Ct = lt.buffer,
            oe = lt.type,
            _e = lt.bytesPerElement,
            Ue = oe === s.INT || oe === s.UNSIGNED_INT || Ee.gpuType === Tu;
          if (Ee.isInterleavedBufferAttribute) {
            const ye = Ee.data,
              Ve = ye.stride,
              ft = Ee.offset;
            if (ye.isInstancedInterleavedBuffer) {
              for (let Ke = 0; Ke < j.locationSize; Ke++)
                m(j.location + Ke, ye.meshPerAttribute);
              y.isInstancedMesh !== !0 &&
                $._maxInstanceCount === void 0 &&
                ($._maxInstanceCount = ye.meshPerAttribute * ye.count);
            } else
              for (let Ke = 0; Ke < j.locationSize; Ke++) v(j.location + Ke);
            s.bindBuffer(s.ARRAY_BUFFER, Ct);
            for (let Ke = 0; Ke < j.locationSize; Ke++)
              L(
                j.location + Ke,
                De / j.locationSize,
                oe,
                we,
                Ve * _e,
                (ft + (De / j.locationSize) * Ke) * _e,
                Ue,
              );
          } else {
            if (Ee.isInstancedBufferAttribute) {
              for (let ye = 0; ye < j.locationSize; ye++)
                m(j.location + ye, Ee.meshPerAttribute);
              y.isInstancedMesh !== !0 &&
                $._maxInstanceCount === void 0 &&
                ($._maxInstanceCount = Ee.meshPerAttribute * Ee.count);
            } else
              for (let ye = 0; ye < j.locationSize; ye++) v(j.location + ye);
            s.bindBuffer(s.ARRAY_BUFFER, Ct);
            for (let ye = 0; ye < j.locationSize; ye++)
              L(
                j.location + ye,
                De / j.locationSize,
                oe,
                we,
                De * _e,
                (De / j.locationSize) * ye * _e,
                Ue,
              );
          }
        } else if (ne !== void 0) {
          const we = ne[de];
          if (we !== void 0)
            switch (we.length) {
              case 2:
                s.vertexAttrib2fv(j.location, we);
                break;
              case 3:
                s.vertexAttrib3fv(j.location, we);
                break;
              case 4:
                s.vertexAttrib4fv(j.location, we);
                break;
              default:
                s.vertexAttrib1fv(j.location, we);
            }
        }
      }
    }
    P();
  }
  function z() {
    G();
    for (const y in i) {
      const B = i[y];
      for (const Q in B) {
        const $ = B[Q];
        for (const ie in $) p($[ie].object), delete $[ie];
        delete B[Q];
      }
      delete i[y];
    }
  }
  function N(y) {
    if (i[y.id] === void 0) return;
    const B = i[y.id];
    for (const Q in B) {
      const $ = B[Q];
      for (const ie in $) p($[ie].object), delete $[ie];
      delete B[Q];
    }
    delete i[y.id];
  }
  function U(y) {
    for (const B in i) {
      const Q = i[B];
      if (Q[y.id] === void 0) continue;
      const $ = Q[y.id];
      for (const ie in $) p($[ie].object), delete $[ie];
      delete Q[y.id];
    }
  }
  function G() {
    R(), (c = !0), o !== a && ((o = a), h(o.object));
  }
  function R() {
    (a.geometry = null), (a.program = null), (a.wireframe = !1);
  }
  return {
    setup: u,
    reset: G,
    resetDefaultState: R,
    dispose: z,
    releaseStatesOfGeometry: N,
    releaseStatesOfProgram: U,
    initAttributes: C,
    enableAttribute: v,
    disableUnusedAttributes: P,
  };
}
function XT(s, e, t) {
  let i;
  function a(h) {
    i = h;
  }
  function o(h, p) {
    s.drawArrays(i, h, p), t.update(p, i, 1);
  }
  function c(h, p, _) {
    _ !== 0 && (s.drawArraysInstanced(i, h, p, _), t.update(p, i, _));
  }
  function u(h, p, _) {
    if (_ === 0) return;
    e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i, h, 0, p, 0, _);
    let M = 0;
    for (let T = 0; T < _; T++) M += p[T];
    t.update(M, i, 1);
  }
  function d(h, p, _, g) {
    if (_ === 0) return;
    const M = e.get("WEBGL_multi_draw");
    if (M === null) for (let T = 0; T < h.length; T++) c(h[T], p[T], g[T]);
    else {
      M.multiDrawArraysInstancedWEBGL(i, h, 0, p, 0, g, 0, _);
      let T = 0;
      for (let C = 0; C < _; C++) T += p[C] * g[C];
      t.update(T, i, 1);
    }
  }
  (this.setMode = a),
    (this.render = o),
    (this.renderInstances = c),
    (this.renderMultiDraw = u),
    (this.renderMultiDrawInstances = d);
}
function qT(s, e, t, i) {
  let a;
  function o() {
    if (a !== void 0) return a;
    if (e.has("EXT_texture_filter_anisotropic") === !0) {
      const U = e.get("EXT_texture_filter_anisotropic");
      a = s.getParameter(U.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
    } else a = 0;
    return a;
  }
  function c(U) {
    return !(
      U !== hi &&
      i.convert(U) !== s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT)
    );
  }
  function u(U) {
    const G =
      U === oa &&
      (e.has("EXT_color_buffer_half_float") || e.has("EXT_color_buffer_float"));
    return !(
      U !== Wi &&
      i.convert(U) !== s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE) &&
      U !== Gi &&
      !G
    );
  }
  function d(U) {
    if (U === "highp") {
      if (
        s.getShaderPrecisionFormat(s.VERTEX_SHADER, s.HIGH_FLOAT).precision >
          0 &&
        s.getShaderPrecisionFormat(s.FRAGMENT_SHADER, s.HIGH_FLOAT).precision >
          0
      )
        return "highp";
      U = "mediump";
    }
    return U === "mediump" &&
      s.getShaderPrecisionFormat(s.VERTEX_SHADER, s.MEDIUM_FLOAT).precision >
        0 &&
      s.getShaderPrecisionFormat(s.FRAGMENT_SHADER, s.MEDIUM_FLOAT).precision >
        0
      ? "mediump"
      : "lowp";
  }
  let h = t.precision !== void 0 ? t.precision : "highp";
  const p = d(h);
  p !== h &&
    (console.warn(
      "THREE.WebGLRenderer:",
      h,
      "not supported, using",
      p,
      "instead.",
    ),
    (h = p));
  const _ = t.logarithmicDepthBuffer === !0,
    g = t.reverseDepthBuffer === !0 && e.has("EXT_clip_control"),
    M = s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),
    T = s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),
    C = s.getParameter(s.MAX_TEXTURE_SIZE),
    v = s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),
    m = s.getParameter(s.MAX_VERTEX_ATTRIBS),
    P = s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),
    L = s.getParameter(s.MAX_VARYING_VECTORS),
    b = s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),
    z = T > 0,
    N = s.getParameter(s.MAX_SAMPLES);
  return {
    isWebGL2: !0,
    getMaxAnisotropy: o,
    getMaxPrecision: d,
    textureFormatReadable: c,
    textureTypeReadable: u,
    precision: h,
    logarithmicDepthBuffer: _,
    reverseDepthBuffer: g,
    maxTextures: M,
    maxVertexTextures: T,
    maxTextureSize: C,
    maxCubemapSize: v,
    maxAttributes: m,
    maxVertexUniforms: P,
    maxVaryings: L,
    maxFragmentUniforms: b,
    vertexTextures: z,
    maxSamples: N,
  };
}
function YT(s) {
  const e = this;
  let t = null,
    i = 0,
    a = !1,
    o = !1;
  const c = new Rr(),
    u = new st(),
    d = { value: null, needsUpdate: !1 };
  (this.uniform = d),
    (this.numPlanes = 0),
    (this.numIntersection = 0),
    (this.init = function (_, g) {
      const M = _.length !== 0 || g || i !== 0 || a;
      return (a = g), (i = _.length), M;
    }),
    (this.beginShadows = function () {
      (o = !0), p(null);
    }),
    (this.endShadows = function () {
      o = !1;
    }),
    (this.setGlobalState = function (_, g) {
      t = p(_, g, 0);
    }),
    (this.setState = function (_, g, M) {
      const T = _.clippingPlanes,
        C = _.clipIntersection,
        v = _.clipShadows,
        m = s.get(_);
      if (!a || T === null || T.length === 0 || (o && !v)) o ? p(null) : h();
      else {
        const P = o ? 0 : i,
          L = P * 4;
        let b = m.clippingState || null;
        (d.value = b), (b = p(T, g, L, M));
        for (let z = 0; z !== L; ++z) b[z] = t[z];
        (m.clippingState = b),
          (this.numIntersection = C ? this.numPlanes : 0),
          (this.numPlanes += P);
      }
    });
  function h() {
    d.value !== t && ((d.value = t), (d.needsUpdate = i > 0)),
      (e.numPlanes = i),
      (e.numIntersection = 0);
  }
  function p(_, g, M, T) {
    const C = _ !== null ? _.length : 0;
    let v = null;
    if (C !== 0) {
      if (((v = d.value), T !== !0 || v === null)) {
        const m = M + C * 4,
          P = g.matrixWorldInverse;
        u.getNormalMatrix(P),
          (v === null || v.length < m) && (v = new Float32Array(m));
        for (let L = 0, b = M; L !== C; ++L, b += 4)
          c.copy(_[L]).applyMatrix4(P, u),
            c.normal.toArray(v, b),
            (v[b + 3] = c.constant);
      }
      (d.value = v), (d.needsUpdate = !0);
    }
    return (e.numPlanes = C), (e.numIntersection = 0), v;
  }
}
function ZT(s) {
  let e = new WeakMap();
  function t(c, u) {
    return u === Hc ? (c.mapping = Es) : u === Vc && (c.mapping = ys), c;
  }
  function i(c) {
    if (c && c.isTexture) {
      const u = c.mapping;
      if (u === Hc || u === Vc)
        if (e.has(c)) {
          const d = e.get(c).texture;
          return t(d, c.mapping);
        } else {
          const d = c.image;
          if (d && d.height > 0) {
            const h = new $S(d.height);
            return (
              h.fromEquirectangularTexture(s, c),
              e.set(c, h),
              c.addEventListener("dispose", a),
              t(h.texture, c.mapping)
            );
          } else return null;
        }
    }
    return c;
  }
  function a(c) {
    const u = c.target;
    u.removeEventListener("dispose", a);
    const d = e.get(u);
    d !== void 0 && (e.delete(u), d.dispose());
  }
  function o() {
    e = new WeakMap();
  }
  return { get: i, dispose: o };
}
const _s = 4,
  wd = [0.125, 0.215, 0.35, 0.446, 0.526, 0.582],
  Lr = 20,
  Ac = new sE(),
  bd = new Fe();
let wc = null,
  bc = 0,
  Rc = 0,
  Cc = !1;
const Cr = (1 + Math.sqrt(5)) / 2,
  ps = 1 / Cr,
  Rd = [
    new W(-Cr, ps, 0),
    new W(Cr, ps, 0),
    new W(-ps, 0, Cr),
    new W(ps, 0, Cr),
    new W(0, Cr, -ps),
    new W(0, Cr, ps),
    new W(-1, 1, -1),
    new W(1, 1, -1),
    new W(-1, 1, 1),
    new W(1, 1, 1),
  ];
class Cd {
  constructor(e) {
    (this._renderer = e),
      (this._pingPongRenderTarget = null),
      (this._lodMax = 0),
      (this._cubeSize = 0),
      (this._lodPlanes = []),
      (this._sizeLods = []),
      (this._sigmas = []),
      (this._blurMaterial = null),
      (this._cubemapMaterial = null),
      (this._equirectMaterial = null),
      this._compileMaterial(this._blurMaterial);
  }
  fromScene(e, t = 0, i = 0.1, a = 100) {
    (wc = this._renderer.getRenderTarget()),
      (bc = this._renderer.getActiveCubeFace()),
      (Rc = this._renderer.getActiveMipmapLevel()),
      (Cc = this._renderer.xr.enabled),
      (this._renderer.xr.enabled = !1),
      this._setSize(256);
    const o = this._allocateTargets();
    return (
      (o.depthBuffer = !0),
      this._sceneToCubeUV(e, i, a, o),
      t > 0 && this._blur(o, 0, 0, t),
      this._applyPMREM(o),
      this._cleanup(o),
      o
    );
  }
  fromEquirectangular(e, t = null) {
    return this._fromTexture(e, t);
  }
  fromCubemap(e, t = null) {
    return this._fromTexture(e, t);
  }
  compileCubemapShader() {
    this._cubemapMaterial === null &&
      ((this._cubemapMaterial = Id()),
      this._compileMaterial(this._cubemapMaterial));
  }
  compileEquirectangularShader() {
    this._equirectMaterial === null &&
      ((this._equirectMaterial = Ld()),
      this._compileMaterial(this._equirectMaterial));
  }
  dispose() {
    this._dispose(),
      this._cubemapMaterial !== null && this._cubemapMaterial.dispose(),
      this._equirectMaterial !== null && this._equirectMaterial.dispose();
  }
  _setSize(e) {
    (this._lodMax = Math.floor(Math.log2(e))),
      (this._cubeSize = Math.pow(2, this._lodMax));
  }
  _dispose() {
    this._blurMaterial !== null && this._blurMaterial.dispose(),
      this._pingPongRenderTarget !== null &&
        this._pingPongRenderTarget.dispose();
    for (let e = 0; e < this._lodPlanes.length; e++)
      this._lodPlanes[e].dispose();
  }
  _cleanup(e) {
    this._renderer.setRenderTarget(wc, bc, Rc),
      (this._renderer.xr.enabled = Cc),
      (e.scissorTest = !1),
      Ao(e, 0, 0, e.width, e.height);
  }
  _fromTexture(e, t) {
    e.mapping === Es || e.mapping === ys
      ? this._setSize(
          e.image.length === 0
            ? 16
            : e.image[0].width || e.image[0].image.width,
        )
      : this._setSize(e.image.width / 4),
      (wc = this._renderer.getRenderTarget()),
      (bc = this._renderer.getActiveCubeFace()),
      (Rc = this._renderer.getActiveMipmapLevel()),
      (Cc = this._renderer.xr.enabled),
      (this._renderer.xr.enabled = !1);
    const i = t || this._allocateTargets();
    return (
      this._textureToCubeUV(e, i), this._applyPMREM(i), this._cleanup(i), i
    );
  }
  _allocateTargets() {
    const e = 3 * Math.max(this._cubeSize, 112),
      t = 4 * this._cubeSize,
      i = {
        magFilter: xi,
        minFilter: xi,
        generateMipmaps: !1,
        type: oa,
        format: hi,
        colorSpace: ws,
        depthBuffer: !1,
      },
      a = Pd(e, t, i);
    if (
      this._pingPongRenderTarget === null ||
      this._pingPongRenderTarget.width !== e ||
      this._pingPongRenderTarget.height !== t
    ) {
      this._pingPongRenderTarget !== null && this._dispose(),
        (this._pingPongRenderTarget = Pd(e, t, i));
      const { _lodMax: o } = this;
      ({
        sizeLods: this._sizeLods,
        lodPlanes: this._lodPlanes,
        sigmas: this._sigmas,
      } = KT(o)),
        (this._blurMaterial = $T(o, e, t));
    }
    return a;
  }
  _compileMaterial(e) {
    const t = new Tn(this._lodPlanes[0], e);
    this._renderer.compile(t, Ac);
  }
  _sceneToCubeUV(e, t, i, a) {
    const u = new ti(90, 1, t, i),
      d = [1, -1, 1, 1, 1, 1],
      h = [1, 1, 1, -1, -1, -1],
      p = this._renderer,
      _ = p.autoClear,
      g = p.toneMapping;
    p.getClearColor(bd), (p.toneMapping = cr), (p.autoClear = !1);
    const M = new gi({
        name: "PMREM.Background",
        side: Dn,
        depthWrite: !1,
        depthTest: !1,
      }),
      T = new Tn(new Or(), M);
    let C = !1;
    const v = e.background;
    v
      ? v.isColor && (M.color.copy(v), (e.background = null), (C = !0))
      : (M.color.copy(bd), (C = !0));
    for (let m = 0; m < 6; m++) {
      const P = m % 3;
      P === 0
        ? (u.up.set(0, d[m], 0), u.lookAt(h[m], 0, 0))
        : P === 1
          ? (u.up.set(0, 0, d[m]), u.lookAt(0, h[m], 0))
          : (u.up.set(0, d[m], 0), u.lookAt(0, 0, h[m]));
      const L = this._cubeSize;
      Ao(a, P * L, m > 2 ? L : 0, L, L),
        p.setRenderTarget(a),
        C && p.render(T, u),
        p.render(e, u);
    }
    T.geometry.dispose(),
      T.material.dispose(),
      (p.toneMapping = g),
      (p.autoClear = _),
      (e.background = v);
  }
  _textureToCubeUV(e, t) {
    const i = this._renderer,
      a = e.mapping === Es || e.mapping === ys;
    a
      ? (this._cubemapMaterial === null && (this._cubemapMaterial = Id()),
        (this._cubemapMaterial.uniforms.flipEnvMap.value =
          e.isRenderTargetTexture === !1 ? -1 : 1))
      : this._equirectMaterial === null && (this._equirectMaterial = Ld());
    const o = a ? this._cubemapMaterial : this._equirectMaterial,
      c = new Tn(this._lodPlanes[0], o),
      u = o.uniforms;
    u.envMap.value = e;
    const d = this._cubeSize;
    Ao(t, 0, 0, 3 * d, 2 * d), i.setRenderTarget(t), i.render(c, Ac);
  }
  _applyPMREM(e) {
    const t = this._renderer,
      i = t.autoClear;
    t.autoClear = !1;
    const a = this._lodPlanes.length;
    for (let o = 1; o < a; o++) {
      const c = Math.sqrt(
          this._sigmas[o] * this._sigmas[o] -
            this._sigmas[o - 1] * this._sigmas[o - 1],
        ),
        u = Rd[(a - o - 1) % Rd.length];
      this._blur(e, o - 1, o, c, u);
    }
    t.autoClear = i;
  }
  _blur(e, t, i, a, o) {
    const c = this._pingPongRenderTarget;
    this._halfBlur(e, c, t, i, a, "latitudinal", o),
      this._halfBlur(c, e, i, i, a, "longitudinal", o);
  }
  _halfBlur(e, t, i, a, o, c, u) {
    const d = this._renderer,
      h = this._blurMaterial;
    c !== "latitudinal" &&
      c !== "longitudinal" &&
      console.error(
        "blur direction must be either latitudinal or longitudinal!",
      );
    const p = 3,
      _ = new Tn(this._lodPlanes[a], h),
      g = h.uniforms,
      M = this._sizeLods[i] - 1,
      T = isFinite(o) ? Math.PI / (2 * M) : (2 * Math.PI) / (2 * Lr - 1),
      C = o / T,
      v = isFinite(o) ? 1 + Math.floor(p * C) : Lr;
    v > Lr &&
      console.warn(
        `sigmaRadians, ${o}, is too large and will clip, as it requested ${v} samples when the maximum is set to ${Lr}`,
      );
    const m = [];
    let P = 0;
    for (let U = 0; U < Lr; ++U) {
      const G = U / C,
        R = Math.exp((-G * G) / 2);
      m.push(R), U === 0 ? (P += R) : U < v && (P += 2 * R);
    }
    for (let U = 0; U < m.length; U++) m[U] = m[U] / P;
    (g.envMap.value = e.texture),
      (g.samples.value = v),
      (g.weights.value = m),
      (g.latitudinal.value = c === "latitudinal"),
      u && (g.poleAxis.value = u);
    const { _lodMax: L } = this;
    (g.dTheta.value = T), (g.mipInt.value = L - i);
    const b = this._sizeLods[a],
      z = 3 * b * (a > L - _s ? a - L + _s : 0),
      N = 4 * (this._cubeSize - b);
    Ao(t, z, N, 3 * b, 2 * b), d.setRenderTarget(t), d.render(_, Ac);
  }
}
function KT(s) {
  const e = [],
    t = [],
    i = [];
  let a = s;
  const o = s - _s + 1 + wd.length;
  for (let c = 0; c < o; c++) {
    const u = Math.pow(2, a);
    t.push(u);
    let d = 1 / u;
    c > s - _s ? (d = wd[c - s + _s - 1]) : c === 0 && (d = 0), i.push(d);
    const h = 1 / (u - 2),
      p = -h,
      _ = 1 + h,
      g = [p, p, _, p, _, _, p, p, _, _, p, _],
      M = 6,
      T = 6,
      C = 3,
      v = 2,
      m = 1,
      P = new Float32Array(C * T * M),
      L = new Float32Array(v * T * M),
      b = new Float32Array(m * T * M);
    for (let N = 0; N < M; N++) {
      const U = ((N % 3) * 2) / 3 - 1,
        G = N > 2 ? 0 : -1,
        R = [
          U,
          G,
          0,
          U + 2 / 3,
          G,
          0,
          U + 2 / 3,
          G + 1,
          0,
          U,
          G,
          0,
          U + 2 / 3,
          G + 1,
          0,
          U,
          G + 1,
          0,
        ];
      P.set(R, C * T * N), L.set(g, v * T * N);
      const y = [N, N, N, N, N, N];
      b.set(y, m * T * N);
    }
    const z = new Ei();
    z.setAttribute("position", new Mi(P, C)),
      z.setAttribute("uv", new Mi(L, v)),
      z.setAttribute("faceIndex", new Mi(b, m)),
      e.push(z),
      a > _s && a--;
  }
  return { lodPlanes: e, sizeLods: t, sigmas: i };
}
function Pd(s, e, t) {
  const i = new Fr(s, e, t);
  return (
    (i.texture.mapping = zo),
    (i.texture.name = "PMREM.cubeUv"),
    (i.scissorTest = !0),
    i
  );
}
function Ao(s, e, t, i, a) {
  s.viewport.set(e, t, i, a), s.scissor.set(e, t, i, a);
}
function $T(s, e, t) {
  const i = new Float32Array(Lr),
    a = new W(0, 1, 0);
  return new fr({
    name: "SphericalGaussianBlur",
    defines: {
      n: Lr,
      CUBEUV_TEXEL_WIDTH: 1 / e,
      CUBEUV_TEXEL_HEIGHT: 1 / t,
      CUBEUV_MAX_MIP: `${s}.0`,
    },
    uniforms: {
      envMap: { value: null },
      samples: { value: 1 },
      weights: { value: i },
      latitudinal: { value: !1 },
      dTheta: { value: 0 },
      mipInt: { value: 0 },
      poleAxis: { value: a },
    },
    vertexShader: Nu(),
    fragmentShader: `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,
    blending: lr,
    depthTest: !1,
    depthWrite: !1,
  });
}
function Ld() {
  return new fr({
    name: "EquirectangularToCubeUV",
    uniforms: { envMap: { value: null } },
    vertexShader: Nu(),
    fragmentShader: `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,
    blending: lr,
    depthTest: !1,
    depthWrite: !1,
  });
}
function Id() {
  return new fr({
    name: "CubemapToCubeUV",
    uniforms: { envMap: { value: null }, flipEnvMap: { value: -1 } },
    vertexShader: Nu(),
    fragmentShader: `

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,
    blending: lr,
    depthTest: !1,
    depthWrite: !1,
  });
}
function Nu() {
  return `

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`;
}
function JT(s) {
  let e = new WeakMap(),
    t = null;
  function i(u) {
    if (u && u.isTexture) {
      const d = u.mapping,
        h = d === Hc || d === Vc,
        p = d === Es || d === ys;
      if (h || p) {
        let _ = e.get(u);
        const g = _ !== void 0 ? _.texture.pmremVersion : 0;
        if (u.isRenderTargetTexture && u.pmremVersion !== g)
          return (
            t === null && (t = new Cd(s)),
            (_ = h ? t.fromEquirectangular(u, _) : t.fromCubemap(u, _)),
            (_.texture.pmremVersion = u.pmremVersion),
            e.set(u, _),
            _.texture
          );
        if (_ !== void 0) return _.texture;
        {
          const M = u.image;
          return (h && M && M.height > 0) || (p && M && a(M))
            ? (t === null && (t = new Cd(s)),
              (_ = h ? t.fromEquirectangular(u) : t.fromCubemap(u)),
              (_.texture.pmremVersion = u.pmremVersion),
              e.set(u, _),
              u.addEventListener("dispose", o),
              _.texture)
            : null;
        }
      }
    }
    return u;
  }
  function a(u) {
    let d = 0;
    const h = 6;
    for (let p = 0; p < h; p++) u[p] !== void 0 && d++;
    return d === h;
  }
  function o(u) {
    const d = u.target;
    d.removeEventListener("dispose", o);
    const h = e.get(d);
    h !== void 0 && (e.delete(d), h.dispose());
  }
  function c() {
    (e = new WeakMap()), t !== null && (t.dispose(), (t = null));
  }
  return { get: i, dispose: c };
}
function QT(s) {
  const e = {};
  function t(i) {
    if (e[i] !== void 0) return e[i];
    let a;
    switch (i) {
      case "WEBGL_depth_texture":
        a =
          s.getExtension("WEBGL_depth_texture") ||
          s.getExtension("MOZ_WEBGL_depth_texture") ||
          s.getExtension("WEBKIT_WEBGL_depth_texture");
        break;
      case "EXT_texture_filter_anisotropic":
        a =
          s.getExtension("EXT_texture_filter_anisotropic") ||
          s.getExtension("MOZ_EXT_texture_filter_anisotropic") ||
          s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
        break;
      case "WEBGL_compressed_texture_s3tc":
        a =
          s.getExtension("WEBGL_compressed_texture_s3tc") ||
          s.getExtension("MOZ_WEBGL_compressed_texture_s3tc") ||
          s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
        break;
      case "WEBGL_compressed_texture_pvrtc":
        a =
          s.getExtension("WEBGL_compressed_texture_pvrtc") ||
          s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
        break;
      default:
        a = s.getExtension(i);
    }
    return (e[i] = a), a;
  }
  return {
    has: function (i) {
      return t(i) !== null;
    },
    init: function () {
      t("EXT_color_buffer_float"),
        t("WEBGL_clip_cull_distance"),
        t("OES_texture_float_linear"),
        t("EXT_color_buffer_half_float"),
        t("WEBGL_multisampled_render_to_texture"),
        t("WEBGL_render_shared_exponent");
    },
    get: function (i) {
      const a = t(i);
      return (
        a === null &&
          ms("THREE.WebGLRenderer: " + i + " extension not supported."),
        a
      );
    },
  };
}
function jT(s, e, t, i) {
  const a = {},
    o = new WeakMap();
  function c(_) {
    const g = _.target;
    g.index !== null && e.remove(g.index);
    for (const T in g.attributes) e.remove(g.attributes[T]);
    g.removeEventListener("dispose", c), delete a[g.id];
    const M = o.get(g);
    M && (e.remove(M), o.delete(g)),
      i.releaseStatesOfGeometry(g),
      g.isInstancedBufferGeometry === !0 && delete g._maxInstanceCount,
      t.memory.geometries--;
  }
  function u(_, g) {
    return (
      a[g.id] === !0 ||
        (g.addEventListener("dispose", c),
        (a[g.id] = !0),
        t.memory.geometries++),
      g
    );
  }
  function d(_) {
    const g = _.attributes;
    for (const M in g) e.update(g[M], s.ARRAY_BUFFER);
  }
  function h(_) {
    const g = [],
      M = _.index,
      T = _.attributes.position;
    let C = 0;
    if (M !== null) {
      const P = M.array;
      C = M.version;
      for (let L = 0, b = P.length; L < b; L += 3) {
        const z = P[L + 0],
          N = P[L + 1],
          U = P[L + 2];
        g.push(z, N, N, U, U, z);
      }
    } else if (T !== void 0) {
      const P = T.array;
      C = T.version;
      for (let L = 0, b = P.length / 3 - 1; L < b; L += 3) {
        const z = L + 0,
          N = L + 1,
          U = L + 2;
        g.push(z, N, N, U, U, z);
      }
    } else return;
    const v = new (vp(g) ? Tp : yp)(g, 1);
    v.version = C;
    const m = o.get(_);
    m && e.remove(m), o.set(_, v);
  }
  function p(_) {
    const g = o.get(_);
    if (g) {
      const M = _.index;
      M !== null && g.version < M.version && h(_);
    } else h(_);
    return o.get(_);
  }
  return { get: u, update: d, getWireframeAttribute: p };
}
function eA(s, e, t) {
  let i;
  function a(g) {
    i = g;
  }
  let o, c;
  function u(g) {
    (o = g.type), (c = g.bytesPerElement);
  }
  function d(g, M) {
    s.drawElements(i, M, o, g * c), t.update(M, i, 1);
  }
  function h(g, M, T) {
    T !== 0 && (s.drawElementsInstanced(i, M, o, g * c, T), t.update(M, i, T));
  }
  function p(g, M, T) {
    if (T === 0) return;
    e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i, M, 0, o, g, 0, T);
    let v = 0;
    for (let m = 0; m < T; m++) v += M[m];
    t.update(v, i, 1);
  }
  function _(g, M, T, C) {
    if (T === 0) return;
    const v = e.get("WEBGL_multi_draw");
    if (v === null) for (let m = 0; m < g.length; m++) h(g[m] / c, M[m], C[m]);
    else {
      v.multiDrawElementsInstancedWEBGL(i, M, 0, o, g, 0, C, 0, T);
      let m = 0;
      for (let P = 0; P < T; P++) m += M[P] * C[P];
      t.update(m, i, 1);
    }
  }
  (this.setMode = a),
    (this.setIndex = u),
    (this.render = d),
    (this.renderInstances = h),
    (this.renderMultiDraw = p),
    (this.renderMultiDrawInstances = _);
}
function tA(s) {
  const e = { geometries: 0, textures: 0 },
    t = { frame: 0, calls: 0, triangles: 0, points: 0, lines: 0 };
  function i(o, c, u) {
    switch ((t.calls++, c)) {
      case s.TRIANGLES:
        t.triangles += u * (o / 3);
        break;
      case s.LINES:
        t.lines += u * (o / 2);
        break;
      case s.LINE_STRIP:
        t.lines += u * (o - 1);
        break;
      case s.LINE_LOOP:
        t.lines += u * o;
        break;
      case s.POINTS:
        t.points += u * o;
        break;
      default:
        console.error("THREE.WebGLInfo: Unknown draw mode:", c);
        break;
    }
  }
  function a() {
    (t.calls = 0), (t.triangles = 0), (t.points = 0), (t.lines = 0);
  }
  return {
    memory: e,
    render: t,
    programs: null,
    autoReset: !0,
    reset: a,
    update: i,
  };
}
function nA(s, e, t) {
  const i = new WeakMap(),
    a = new Zt();
  function o(c, u, d) {
    const h = c.morphTargetInfluences,
      p =
        u.morphAttributes.position ||
        u.morphAttributes.normal ||
        u.morphAttributes.color,
      _ = p !== void 0 ? p.length : 0;
    let g = i.get(u);
    if (g === void 0 || g.count !== _) {
      let y = function () {
        G.dispose(), i.delete(u), u.removeEventListener("dispose", y);
      };
      var M = y;
      g !== void 0 && g.texture.dispose();
      const T = u.morphAttributes.position !== void 0,
        C = u.morphAttributes.normal !== void 0,
        v = u.morphAttributes.color !== void 0,
        m = u.morphAttributes.position || [],
        P = u.morphAttributes.normal || [],
        L = u.morphAttributes.color || [];
      let b = 0;
      T === !0 && (b = 1), C === !0 && (b = 2), v === !0 && (b = 3);
      let z = u.attributes.position.count * b,
        N = 1;
      z > e.maxTextureSize &&
        ((N = Math.ceil(z / e.maxTextureSize)), (z = e.maxTextureSize));
      const U = new Float32Array(z * N * 4 * _),
        G = new Mp(U, z, N, _);
      (G.type = Gi), (G.needsUpdate = !0);
      const R = b * 4;
      for (let B = 0; B < _; B++) {
        const Q = m[B],
          $ = P[B],
          ie = L[B],
          ue = z * N * 4 * B;
        for (let ne = 0; ne < Q.count; ne++) {
          const de = ne * R;
          T === !0 &&
            (a.fromBufferAttribute(Q, ne),
            (U[ue + de + 0] = a.x),
            (U[ue + de + 1] = a.y),
            (U[ue + de + 2] = a.z),
            (U[ue + de + 3] = 0)),
            C === !0 &&
              (a.fromBufferAttribute($, ne),
              (U[ue + de + 4] = a.x),
              (U[ue + de + 5] = a.y),
              (U[ue + de + 6] = a.z),
              (U[ue + de + 7] = 0)),
            v === !0 &&
              (a.fromBufferAttribute(ie, ne),
              (U[ue + de + 8] = a.x),
              (U[ue + de + 9] = a.y),
              (U[ue + de + 10] = a.z),
              (U[ue + de + 11] = ie.itemSize === 4 ? a.w : 1));
        }
      }
      (g = { count: _, texture: G, size: new He(z, N) }),
        i.set(u, g),
        u.addEventListener("dispose", y);
    }
    if (c.isInstancedMesh === !0 && c.morphTexture !== null)
      d.getUniforms().setValue(s, "morphTexture", c.morphTexture, t);
    else {
      let T = 0;
      for (let v = 0; v < h.length; v++) T += h[v];
      const C = u.morphTargetsRelative ? 1 : 1 - T;
      d.getUniforms().setValue(s, "morphTargetBaseInfluence", C),
        d.getUniforms().setValue(s, "morphTargetInfluences", h);
    }
    d.getUniforms().setValue(s, "morphTargetsTexture", g.texture, t),
      d.getUniforms().setValue(s, "morphTargetsTextureSize", g.size);
  }
  return { update: o };
}
function iA(s, e, t, i) {
  let a = new WeakMap();
  function o(d) {
    const h = i.render.frame,
      p = d.geometry,
      _ = e.get(d, p);
    if (
      (a.get(_) !== h && (e.update(_), a.set(_, h)),
      d.isInstancedMesh &&
        (d.hasEventListener("dispose", u) === !1 &&
          d.addEventListener("dispose", u),
        a.get(d) !== h &&
          (t.update(d.instanceMatrix, s.ARRAY_BUFFER),
          d.instanceColor !== null && t.update(d.instanceColor, s.ARRAY_BUFFER),
          a.set(d, h))),
      d.isSkinnedMesh)
    ) {
      const g = d.skeleton;
      a.get(g) !== h && (g.update(), a.set(g, h));
    }
    return _;
  }
  function c() {
    a = new WeakMap();
  }
  function u(d) {
    const h = d.target;
    h.removeEventListener("dispose", u),
      t.remove(h.instanceMatrix),
      h.instanceColor !== null && t.remove(h.instanceColor);
  }
  return { update: o, dispose: c };
}
const Lp = new Un(),
  Dd = new Cp(1, 1),
  Ip = new Mp(),
  Dp = new IS(),
  Up = new bp(),
  Ud = [],
  Nd = [],
  Fd = new Float32Array(16),
  Od = new Float32Array(9),
  Bd = new Float32Array(4);
function Cs(s, e, t) {
  const i = s[0];
  if (i <= 0 || i > 0) return s;
  const a = e * t;
  let o = Ud[a];
  if ((o === void 0 && ((o = new Float32Array(a)), (Ud[a] = o)), e !== 0)) {
    i.toArray(o, 0);
    for (let c = 1, u = 0; c !== e; ++c) (u += t), s[c].toArray(o, u);
  }
  return o;
}
function tn(s, e) {
  if (s.length !== e.length) return !1;
  for (let t = 0, i = s.length; t < i; t++) if (s[t] !== e[t]) return !1;
  return !0;
}
function nn(s, e) {
  for (let t = 0, i = e.length; t < i; t++) s[t] = e[t];
}
function Vo(s, e) {
  let t = Nd[e];
  t === void 0 && ((t = new Int32Array(e)), (Nd[e] = t));
  for (let i = 0; i !== e; ++i) t[i] = s.allocateTextureUnit();
  return t;
}
function rA(s, e) {
  const t = this.cache;
  t[0] !== e && (s.uniform1f(this.addr, e), (t[0] = e));
}
function sA(s, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) &&
      (s.uniform2f(this.addr, e.x, e.y), (t[0] = e.x), (t[1] = e.y));
  else {
    if (tn(t, e)) return;
    s.uniform2fv(this.addr, e), nn(t, e);
  }
}
function aA(s, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) &&
      (s.uniform3f(this.addr, e.x, e.y, e.z),
      (t[0] = e.x),
      (t[1] = e.y),
      (t[2] = e.z));
  else if (e.r !== void 0)
    (t[0] !== e.r || t[1] !== e.g || t[2] !== e.b) &&
      (s.uniform3f(this.addr, e.r, e.g, e.b),
      (t[0] = e.r),
      (t[1] = e.g),
      (t[2] = e.b));
  else {
    if (tn(t, e)) return;
    s.uniform3fv(this.addr, e), nn(t, e);
  }
}
function oA(s, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) &&
      (s.uniform4f(this.addr, e.x, e.y, e.z, e.w),
      (t[0] = e.x),
      (t[1] = e.y),
      (t[2] = e.z),
      (t[3] = e.w));
  else {
    if (tn(t, e)) return;
    s.uniform4fv(this.addr, e), nn(t, e);
  }
}
function lA(s, e) {
  const t = this.cache,
    i = e.elements;
  if (i === void 0) {
    if (tn(t, e)) return;
    s.uniformMatrix2fv(this.addr, !1, e), nn(t, e);
  } else {
    if (tn(t, i)) return;
    Bd.set(i), s.uniformMatrix2fv(this.addr, !1, Bd), nn(t, i);
  }
}
function cA(s, e) {
  const t = this.cache,
    i = e.elements;
  if (i === void 0) {
    if (tn(t, e)) return;
    s.uniformMatrix3fv(this.addr, !1, e), nn(t, e);
  } else {
    if (tn(t, i)) return;
    Od.set(i), s.uniformMatrix3fv(this.addr, !1, Od), nn(t, i);
  }
}
function uA(s, e) {
  const t = this.cache,
    i = e.elements;
  if (i === void 0) {
    if (tn(t, e)) return;
    s.uniformMatrix4fv(this.addr, !1, e), nn(t, e);
  } else {
    if (tn(t, i)) return;
    Fd.set(i), s.uniformMatrix4fv(this.addr, !1, Fd), nn(t, i);
  }
}
function fA(s, e) {
  const t = this.cache;
  t[0] !== e && (s.uniform1i(this.addr, e), (t[0] = e));
}
function hA(s, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) &&
      (s.uniform2i(this.addr, e.x, e.y), (t[0] = e.x), (t[1] = e.y));
  else {
    if (tn(t, e)) return;
    s.uniform2iv(this.addr, e), nn(t, e);
  }
}
function dA(s, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) &&
      (s.uniform3i(this.addr, e.x, e.y, e.z),
      (t[0] = e.x),
      (t[1] = e.y),
      (t[2] = e.z));
  else {
    if (tn(t, e)) return;
    s.uniform3iv(this.addr, e), nn(t, e);
  }
}
function pA(s, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) &&
      (s.uniform4i(this.addr, e.x, e.y, e.z, e.w),
      (t[0] = e.x),
      (t[1] = e.y),
      (t[2] = e.z),
      (t[3] = e.w));
  else {
    if (tn(t, e)) return;
    s.uniform4iv(this.addr, e), nn(t, e);
  }
}
function mA(s, e) {
  const t = this.cache;
  t[0] !== e && (s.uniform1ui(this.addr, e), (t[0] = e));
}
function _A(s, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) &&
      (s.uniform2ui(this.addr, e.x, e.y), (t[0] = e.x), (t[1] = e.y));
  else {
    if (tn(t, e)) return;
    s.uniform2uiv(this.addr, e), nn(t, e);
  }
}
function gA(s, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) &&
      (s.uniform3ui(this.addr, e.x, e.y, e.z),
      (t[0] = e.x),
      (t[1] = e.y),
      (t[2] = e.z));
  else {
    if (tn(t, e)) return;
    s.uniform3uiv(this.addr, e), nn(t, e);
  }
}
function vA(s, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) &&
      (s.uniform4ui(this.addr, e.x, e.y, e.z, e.w),
      (t[0] = e.x),
      (t[1] = e.y),
      (t[2] = e.z),
      (t[3] = e.w));
  else {
    if (tn(t, e)) return;
    s.uniform4uiv(this.addr, e), nn(t, e);
  }
}
function xA(s, e, t) {
  const i = this.cache,
    a = t.allocateTextureUnit();
  i[0] !== a && (s.uniform1i(this.addr, a), (i[0] = a));
  let o;
  this.type === s.SAMPLER_2D_SHADOW
    ? ((Dd.compareFunction = gp), (o = Dd))
    : (o = Lp),
    t.setTexture2D(e || o, a);
}
function MA(s, e, t) {
  const i = this.cache,
    a = t.allocateTextureUnit();
  i[0] !== a && (s.uniform1i(this.addr, a), (i[0] = a)),
    t.setTexture3D(e || Dp, a);
}
function SA(s, e, t) {
  const i = this.cache,
    a = t.allocateTextureUnit();
  i[0] !== a && (s.uniform1i(this.addr, a), (i[0] = a)),
    t.setTextureCube(e || Up, a);
}
function EA(s, e, t) {
  const i = this.cache,
    a = t.allocateTextureUnit();
  i[0] !== a && (s.uniform1i(this.addr, a), (i[0] = a)),
    t.setTexture2DArray(e || Ip, a);
}
function yA(s) {
  switch (s) {
    case 5126:
      return rA;
    case 35664:
      return sA;
    case 35665:
      return aA;
    case 35666:
      return oA;
    case 35674:
      return lA;
    case 35675:
      return cA;
    case 35676:
      return uA;
    case 5124:
    case 35670:
      return fA;
    case 35667:
    case 35671:
      return hA;
    case 35668:
    case 35672:
      return dA;
    case 35669:
    case 35673:
      return pA;
    case 5125:
      return mA;
    case 36294:
      return _A;
    case 36295:
      return gA;
    case 36296:
      return vA;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return xA;
    case 35679:
    case 36299:
    case 36307:
      return MA;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return SA;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return EA;
  }
}
function TA(s, e) {
  s.uniform1fv(this.addr, e);
}
function AA(s, e) {
  const t = Cs(e, this.size, 2);
  s.uniform2fv(this.addr, t);
}
function wA(s, e) {
  const t = Cs(e, this.size, 3);
  s.uniform3fv(this.addr, t);
}
function bA(s, e) {
  const t = Cs(e, this.size, 4);
  s.uniform4fv(this.addr, t);
}
function RA(s, e) {
  const t = Cs(e, this.size, 4);
  s.uniformMatrix2fv(this.addr, !1, t);
}
function CA(s, e) {
  const t = Cs(e, this.size, 9);
  s.uniformMatrix3fv(this.addr, !1, t);
}
function PA(s, e) {
  const t = Cs(e, this.size, 16);
  s.uniformMatrix4fv(this.addr, !1, t);
}
function LA(s, e) {
  s.uniform1iv(this.addr, e);
}
function IA(s, e) {
  s.uniform2iv(this.addr, e);
}
function DA(s, e) {
  s.uniform3iv(this.addr, e);
}
function UA(s, e) {
  s.uniform4iv(this.addr, e);
}
function NA(s, e) {
  s.uniform1uiv(this.addr, e);
}
function FA(s, e) {
  s.uniform2uiv(this.addr, e);
}
function OA(s, e) {
  s.uniform3uiv(this.addr, e);
}
function BA(s, e) {
  s.uniform4uiv(this.addr, e);
}
function zA(s, e, t) {
  const i = this.cache,
    a = e.length,
    o = Vo(t, a);
  tn(i, o) || (s.uniform1iv(this.addr, o), nn(i, o));
  for (let c = 0; c !== a; ++c) t.setTexture2D(e[c] || Lp, o[c]);
}
function GA(s, e, t) {
  const i = this.cache,
    a = e.length,
    o = Vo(t, a);
  tn(i, o) || (s.uniform1iv(this.addr, o), nn(i, o));
  for (let c = 0; c !== a; ++c) t.setTexture3D(e[c] || Dp, o[c]);
}
function HA(s, e, t) {
  const i = this.cache,
    a = e.length,
    o = Vo(t, a);
  tn(i, o) || (s.uniform1iv(this.addr, o), nn(i, o));
  for (let c = 0; c !== a; ++c) t.setTextureCube(e[c] || Up, o[c]);
}
function VA(s, e, t) {
  const i = this.cache,
    a = e.length,
    o = Vo(t, a);
  tn(i, o) || (s.uniform1iv(this.addr, o), nn(i, o));
  for (let c = 0; c !== a; ++c) t.setTexture2DArray(e[c] || Ip, o[c]);
}
function kA(s) {
  switch (s) {
    case 5126:
      return TA;
    case 35664:
      return AA;
    case 35665:
      return wA;
    case 35666:
      return bA;
    case 35674:
      return RA;
    case 35675:
      return CA;
    case 35676:
      return PA;
    case 5124:
    case 35670:
      return LA;
    case 35667:
    case 35671:
      return IA;
    case 35668:
    case 35672:
      return DA;
    case 35669:
    case 35673:
      return UA;
    case 5125:
      return NA;
    case 36294:
      return FA;
    case 36295:
      return OA;
    case 36296:
      return BA;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return zA;
    case 35679:
    case 36299:
    case 36307:
      return GA;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return HA;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return VA;
  }
}
class WA {
  constructor(e, t, i) {
    (this.id = e),
      (this.addr = i),
      (this.cache = []),
      (this.type = t.type),
      (this.setValue = yA(t.type));
  }
}
class XA {
  constructor(e, t, i) {
    (this.id = e),
      (this.addr = i),
      (this.cache = []),
      (this.type = t.type),
      (this.size = t.size),
      (this.setValue = kA(t.type));
  }
}
class qA {
  constructor(e) {
    (this.id = e), (this.seq = []), (this.map = {});
  }
  setValue(e, t, i) {
    const a = this.seq;
    for (let o = 0, c = a.length; o !== c; ++o) {
      const u = a[o];
      u.setValue(e, t[u.id], i);
    }
  }
}
const Pc = /(\w+)(\])?(\[|\.)?/g;
function zd(s, e) {
  s.seq.push(e), (s.map[e.id] = e);
}
function YA(s, e, t) {
  const i = s.name,
    a = i.length;
  for (Pc.lastIndex = 0; ; ) {
    const o = Pc.exec(i),
      c = Pc.lastIndex;
    let u = o[1];
    const d = o[2] === "]",
      h = o[3];
    if ((d && (u = u | 0), h === void 0 || (h === "[" && c + 2 === a))) {
      zd(t, h === void 0 ? new WA(u, s, e) : new XA(u, s, e));
      break;
    } else {
      let _ = t.map[u];
      _ === void 0 && ((_ = new qA(u)), zd(t, _)), (t = _);
    }
  }
}
class Do {
  constructor(e, t) {
    (this.seq = []), (this.map = {});
    const i = e.getProgramParameter(t, e.ACTIVE_UNIFORMS);
    for (let a = 0; a < i; ++a) {
      const o = e.getActiveUniform(t, a),
        c = e.getUniformLocation(t, o.name);
      YA(o, c, this);
    }
  }
  setValue(e, t, i, a) {
    const o = this.map[t];
    o !== void 0 && o.setValue(e, i, a);
  }
  setOptional(e, t, i) {
    const a = t[i];
    a !== void 0 && this.setValue(e, i, a);
  }
  static upload(e, t, i, a) {
    for (let o = 0, c = t.length; o !== c; ++o) {
      const u = t[o],
        d = i[u.id];
      d.needsUpdate !== !1 && u.setValue(e, d.value, a);
    }
  }
  static seqWithValue(e, t) {
    const i = [];
    for (let a = 0, o = e.length; a !== o; ++a) {
      const c = e[a];
      c.id in t && i.push(c);
    }
    return i;
  }
}
function Gd(s, e, t) {
  const i = s.createShader(e);
  return s.shaderSource(i, t), s.compileShader(i), i;
}
const ZA = 37297;
let KA = 0;
function $A(s, e) {
  const t = s.split(`
`),
    i = [],
    a = Math.max(e - 6, 0),
    o = Math.min(e + 6, t.length);
  for (let c = a; c < o; c++) {
    const u = c + 1;
    i.push(`${u === e ? ">" : " "} ${u}: ${t[c]}`);
  }
  return i.join(`
`);
}
const Hd = new st();
function JA(s) {
  Tt._getMatrix(Hd, Tt.workingColorSpace, s);
  const e = `mat3( ${Hd.elements.map((t) => t.toFixed(4))} )`;
  switch (Tt.getTransfer(s)) {
    case Uo:
      return [e, "LinearTransferOETF"];
    case Dt:
      return [e, "sRGBTransferOETF"];
    default:
      return (
        console.warn("THREE.WebGLProgram: Unsupported color space: ", s),
        [e, "LinearTransferOETF"]
      );
  }
}
function Vd(s, e, t) {
  const i = s.getShaderParameter(e, s.COMPILE_STATUS),
    a = s.getShaderInfoLog(e).trim();
  if (i && a === "") return "";
  const o = /ERROR: 0:(\d+)/.exec(a);
  if (o) {
    const c = parseInt(o[1]);
    return (
      t.toUpperCase() +
      `

` +
      a +
      `

` +
      $A(s.getShaderSource(e), c)
    );
  } else return a;
}
function QA(s, e) {
  const t = JA(e);
  return [
    `vec4 ${s}( vec4 value ) {`,
    `	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,
    "}",
  ].join(`
`);
}
function jA(s, e) {
  let t;
  switch (e) {
    case rS:
      t = "Linear";
      break;
    case sS:
      t = "Reinhard";
      break;
    case aS:
      t = "Cineon";
      break;
    case oS:
      t = "ACESFilmic";
      break;
    case cS:
      t = "AgX";
      break;
    case uS:
      t = "Neutral";
      break;
    case lS:
      t = "Custom";
      break;
    default:
      console.warn("THREE.WebGLProgram: Unsupported toneMapping:", e),
        (t = "Linear");
  }
  return (
    "vec3 " + s + "( vec3 color ) { return " + t + "ToneMapping( color ); }"
  );
}
const wo = new W();
function ew() {
  Tt.getLuminanceCoefficients(wo);
  const s = wo.x.toFixed(4),
    e = wo.y.toFixed(4),
    t = wo.z.toFixed(4);
  return [
    "float luminance( const in vec3 rgb ) {",
    `	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,
    "	return dot( weights, rgb );",
    "}",
  ].join(`
`);
}
function tw(s) {
  return [
    s.extensionClipCullDistance
      ? "#extension GL_ANGLE_clip_cull_distance : require"
      : "",
    s.extensionMultiDraw ? "#extension GL_ANGLE_multi_draw : require" : "",
  ].filter(na).join(`
`);
}
function nw(s) {
  const e = [];
  for (const t in s) {
    const i = s[t];
    i !== !1 && e.push("#define " + t + " " + i);
  }
  return e.join(`
`);
}
function iw(s, e) {
  const t = {},
    i = s.getProgramParameter(e, s.ACTIVE_ATTRIBUTES);
  for (let a = 0; a < i; a++) {
    const o = s.getActiveAttrib(e, a),
      c = o.name;
    let u = 1;
    o.type === s.FLOAT_MAT2 && (u = 2),
      o.type === s.FLOAT_MAT3 && (u = 3),
      o.type === s.FLOAT_MAT4 && (u = 4),
      (t[c] = {
        type: o.type,
        location: s.getAttribLocation(e, c),
        locationSize: u,
      });
  }
  return t;
}
function na(s) {
  return s !== "";
}
function kd(s, e) {
  const t =
    e.numSpotLightShadows + e.numSpotLightMaps - e.numSpotLightShadowsWithMaps;
  return s
    .replace(/NUM_DIR_LIGHTS/g, e.numDirLights)
    .replace(/NUM_SPOT_LIGHTS/g, e.numSpotLights)
    .replace(/NUM_SPOT_LIGHT_MAPS/g, e.numSpotLightMaps)
    .replace(/NUM_SPOT_LIGHT_COORDS/g, t)
    .replace(/NUM_RECT_AREA_LIGHTS/g, e.numRectAreaLights)
    .replace(/NUM_POINT_LIGHTS/g, e.numPointLights)
    .replace(/NUM_HEMI_LIGHTS/g, e.numHemiLights)
    .replace(/NUM_DIR_LIGHT_SHADOWS/g, e.numDirLightShadows)
    .replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g, e.numSpotLightShadowsWithMaps)
    .replace(/NUM_SPOT_LIGHT_SHADOWS/g, e.numSpotLightShadows)
    .replace(/NUM_POINT_LIGHT_SHADOWS/g, e.numPointLightShadows);
}
function Wd(s, e) {
  return s
    .replace(/NUM_CLIPPING_PLANES/g, e.numClippingPlanes)
    .replace(
      /UNION_CLIPPING_PLANES/g,
      e.numClippingPlanes - e.numClipIntersection,
    );
}
const rw = /^[ \t]*#include +<([\w\d./]+)>/gm;
function vu(s) {
  return s.replace(rw, aw);
}
const sw = new Map();
function aw(s, e) {
  let t = ot[e];
  if (t === void 0) {
    const i = sw.get(e);
    if (i !== void 0)
      (t = ot[i]),
        console.warn(
          'THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',
          e,
          i,
        );
    else throw new Error("Can not resolve #include <" + e + ">");
  }
  return vu(t);
}
const ow =
  /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;
function Xd(s) {
  return s.replace(ow, lw);
}
function lw(s, e, t, i) {
  let a = "";
  for (let o = parseInt(e); o < parseInt(t); o++)
    a += i
      .replace(/\[\s*i\s*\]/g, "[ " + o + " ]")
      .replace(/UNROLLED_LOOP_INDEX/g, o);
  return a;
}
function qd(s) {
  let e = `precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;
  return (
    s.precision === "highp"
      ? (e += `
#define HIGH_PRECISION`)
      : s.precision === "mediump"
        ? (e += `
#define MEDIUM_PRECISION`)
        : s.precision === "lowp" &&
          (e += `
#define LOW_PRECISION`),
    e
  );
}
function cw(s) {
  let e = "SHADOWMAP_TYPE_BASIC";
  return (
    s.shadowMapType === ip
      ? (e = "SHADOWMAP_TYPE_PCF")
      : s.shadowMapType === OM
        ? (e = "SHADOWMAP_TYPE_PCF_SOFT")
        : s.shadowMapType === Bi && (e = "SHADOWMAP_TYPE_VSM"),
    e
  );
}
function uw(s) {
  let e = "ENVMAP_TYPE_CUBE";
  if (s.envMap)
    switch (s.envMapMode) {
      case Es:
      case ys:
        e = "ENVMAP_TYPE_CUBE";
        break;
      case zo:
        e = "ENVMAP_TYPE_CUBE_UV";
        break;
    }
  return e;
}
function fw(s) {
  let e = "ENVMAP_MODE_REFLECTION";
  if (s.envMap)
    switch (s.envMapMode) {
      case ys:
        e = "ENVMAP_MODE_REFRACTION";
        break;
    }
  return e;
}
function hw(s) {
  let e = "ENVMAP_BLENDING_NONE";
  if (s.envMap)
    switch (s.combine) {
      case rp:
        e = "ENVMAP_BLENDING_MULTIPLY";
        break;
      case nS:
        e = "ENVMAP_BLENDING_MIX";
        break;
      case iS:
        e = "ENVMAP_BLENDING_ADD";
        break;
    }
  return e;
}
function dw(s) {
  const e = s.envMapCubeUVHeight;
  if (e === null) return null;
  const t = Math.log2(e) - 2,
    i = 1 / e;
  return {
    texelWidth: 1 / (3 * Math.max(Math.pow(2, t), 7 * 16)),
    texelHeight: i,
    maxMip: t,
  };
}
function pw(s, e, t, i) {
  const a = s.getContext(),
    o = t.defines;
  let c = t.vertexShader,
    u = t.fragmentShader;
  const d = cw(t),
    h = uw(t),
    p = fw(t),
    _ = hw(t),
    g = dw(t),
    M = tw(t),
    T = nw(o),
    C = a.createProgram();
  let v,
    m,
    P = t.glslVersion
      ? "#version " +
        t.glslVersion +
        `
`
      : "";
  t.isRawShaderMaterial
    ? ((v = [
        "#define SHADER_TYPE " + t.shaderType,
        "#define SHADER_NAME " + t.shaderName,
        T,
      ].filter(na).join(`
`)),
      v.length > 0 &&
        (v += `
`),
      (m = [
        "#define SHADER_TYPE " + t.shaderType,
        "#define SHADER_NAME " + t.shaderName,
        T,
      ].filter(na).join(`
`)),
      m.length > 0 &&
        (m += `
`))
    : ((v = [
        qd(t),
        "#define SHADER_TYPE " + t.shaderType,
        "#define SHADER_NAME " + t.shaderName,
        T,
        t.extensionClipCullDistance ? "#define USE_CLIP_DISTANCE" : "",
        t.batching ? "#define USE_BATCHING" : "",
        t.batchingColor ? "#define USE_BATCHING_COLOR" : "",
        t.instancing ? "#define USE_INSTANCING" : "",
        t.instancingColor ? "#define USE_INSTANCING_COLOR" : "",
        t.instancingMorph ? "#define USE_INSTANCING_MORPH" : "",
        t.useFog && t.fog ? "#define USE_FOG" : "",
        t.useFog && t.fogExp2 ? "#define FOG_EXP2" : "",
        t.map ? "#define USE_MAP" : "",
        t.envMap ? "#define USE_ENVMAP" : "",
        t.envMap ? "#define " + p : "",
        t.lightMap ? "#define USE_LIGHTMAP" : "",
        t.aoMap ? "#define USE_AOMAP" : "",
        t.bumpMap ? "#define USE_BUMPMAP" : "",
        t.normalMap ? "#define USE_NORMALMAP" : "",
        t.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "",
        t.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "",
        t.displacementMap ? "#define USE_DISPLACEMENTMAP" : "",
        t.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
        t.anisotropy ? "#define USE_ANISOTROPY" : "",
        t.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "",
        t.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
        t.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
        t.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
        t.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "",
        t.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "",
        t.specularMap ? "#define USE_SPECULARMAP" : "",
        t.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "",
        t.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "",
        t.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
        t.metalnessMap ? "#define USE_METALNESSMAP" : "",
        t.alphaMap ? "#define USE_ALPHAMAP" : "",
        t.alphaHash ? "#define USE_ALPHAHASH" : "",
        t.transmission ? "#define USE_TRANSMISSION" : "",
        t.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
        t.thicknessMap ? "#define USE_THICKNESSMAP" : "",
        t.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "",
        t.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "",
        t.mapUv ? "#define MAP_UV " + t.mapUv : "",
        t.alphaMapUv ? "#define ALPHAMAP_UV " + t.alphaMapUv : "",
        t.lightMapUv ? "#define LIGHTMAP_UV " + t.lightMapUv : "",
        t.aoMapUv ? "#define AOMAP_UV " + t.aoMapUv : "",
        t.emissiveMapUv ? "#define EMISSIVEMAP_UV " + t.emissiveMapUv : "",
        t.bumpMapUv ? "#define BUMPMAP_UV " + t.bumpMapUv : "",
        t.normalMapUv ? "#define NORMALMAP_UV " + t.normalMapUv : "",
        t.displacementMapUv
          ? "#define DISPLACEMENTMAP_UV " + t.displacementMapUv
          : "",
        t.metalnessMapUv ? "#define METALNESSMAP_UV " + t.metalnessMapUv : "",
        t.roughnessMapUv ? "#define ROUGHNESSMAP_UV " + t.roughnessMapUv : "",
        t.anisotropyMapUv
          ? "#define ANISOTROPYMAP_UV " + t.anisotropyMapUv
          : "",
        t.clearcoatMapUv ? "#define CLEARCOATMAP_UV " + t.clearcoatMapUv : "",
        t.clearcoatNormalMapUv
          ? "#define CLEARCOAT_NORMALMAP_UV " + t.clearcoatNormalMapUv
          : "",
        t.clearcoatRoughnessMapUv
          ? "#define CLEARCOAT_ROUGHNESSMAP_UV " + t.clearcoatRoughnessMapUv
          : "",
        t.iridescenceMapUv
          ? "#define IRIDESCENCEMAP_UV " + t.iridescenceMapUv
          : "",
        t.iridescenceThicknessMapUv
          ? "#define IRIDESCENCE_THICKNESSMAP_UV " + t.iridescenceThicknessMapUv
          : "",
        t.sheenColorMapUv
          ? "#define SHEEN_COLORMAP_UV " + t.sheenColorMapUv
          : "",
        t.sheenRoughnessMapUv
          ? "#define SHEEN_ROUGHNESSMAP_UV " + t.sheenRoughnessMapUv
          : "",
        t.specularMapUv ? "#define SPECULARMAP_UV " + t.specularMapUv : "",
        t.specularColorMapUv
          ? "#define SPECULAR_COLORMAP_UV " + t.specularColorMapUv
          : "",
        t.specularIntensityMapUv
          ? "#define SPECULAR_INTENSITYMAP_UV " + t.specularIntensityMapUv
          : "",
        t.transmissionMapUv
          ? "#define TRANSMISSIONMAP_UV " + t.transmissionMapUv
          : "",
        t.thicknessMapUv ? "#define THICKNESSMAP_UV " + t.thicknessMapUv : "",
        t.vertexTangents && t.flatShading === !1 ? "#define USE_TANGENT" : "",
        t.vertexColors ? "#define USE_COLOR" : "",
        t.vertexAlphas ? "#define USE_COLOR_ALPHA" : "",
        t.vertexUv1s ? "#define USE_UV1" : "",
        t.vertexUv2s ? "#define USE_UV2" : "",
        t.vertexUv3s ? "#define USE_UV3" : "",
        t.pointsUvs ? "#define USE_POINTS_UV" : "",
        t.flatShading ? "#define FLAT_SHADED" : "",
        t.skinning ? "#define USE_SKINNING" : "",
        t.morphTargets ? "#define USE_MORPHTARGETS" : "",
        t.morphNormals && t.flatShading === !1
          ? "#define USE_MORPHNORMALS"
          : "",
        t.morphColors ? "#define USE_MORPHCOLORS" : "",
        t.morphTargetsCount > 0
          ? "#define MORPHTARGETS_TEXTURE_STRIDE " + t.morphTextureStride
          : "",
        t.morphTargetsCount > 0
          ? "#define MORPHTARGETS_COUNT " + t.morphTargetsCount
          : "",
        t.doubleSided ? "#define DOUBLE_SIDED" : "",
        t.flipSided ? "#define FLIP_SIDED" : "",
        t.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
        t.shadowMapEnabled ? "#define " + d : "",
        t.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "",
        t.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "",
        t.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "",
        t.reverseDepthBuffer ? "#define USE_REVERSEDEPTHBUF" : "",
        "uniform mat4 modelMatrix;",
        "uniform mat4 modelViewMatrix;",
        "uniform mat4 projectionMatrix;",
        "uniform mat4 viewMatrix;",
        "uniform mat3 normalMatrix;",
        "uniform vec3 cameraPosition;",
        "uniform bool isOrthographic;",
        "#ifdef USE_INSTANCING",
        "	attribute mat4 instanceMatrix;",
        "#endif",
        "#ifdef USE_INSTANCING_COLOR",
        "	attribute vec3 instanceColor;",
        "#endif",
        "#ifdef USE_INSTANCING_MORPH",
        "	uniform sampler2D morphTexture;",
        "#endif",
        "attribute vec3 position;",
        "attribute vec3 normal;",
        "attribute vec2 uv;",
        "#ifdef USE_UV1",
        "	attribute vec2 uv1;",
        "#endif",
        "#ifdef USE_UV2",
        "	attribute vec2 uv2;",
        "#endif",
        "#ifdef USE_UV3",
        "	attribute vec2 uv3;",
        "#endif",
        "#ifdef USE_TANGENT",
        "	attribute vec4 tangent;",
        "#endif",
        "#if defined( USE_COLOR_ALPHA )",
        "	attribute vec4 color;",
        "#elif defined( USE_COLOR )",
        "	attribute vec3 color;",
        "#endif",
        "#ifdef USE_SKINNING",
        "	attribute vec4 skinIndex;",
        "	attribute vec4 skinWeight;",
        "#endif",
        `
`,
      ].filter(na).join(`
`)),
      (m = [
        qd(t),
        "#define SHADER_TYPE " + t.shaderType,
        "#define SHADER_NAME " + t.shaderName,
        T,
        t.useFog && t.fog ? "#define USE_FOG" : "",
        t.useFog && t.fogExp2 ? "#define FOG_EXP2" : "",
        t.alphaToCoverage ? "#define ALPHA_TO_COVERAGE" : "",
        t.map ? "#define USE_MAP" : "",
        t.matcap ? "#define USE_MATCAP" : "",
        t.envMap ? "#define USE_ENVMAP" : "",
        t.envMap ? "#define " + h : "",
        t.envMap ? "#define " + p : "",
        t.envMap ? "#define " + _ : "",
        g ? "#define CUBEUV_TEXEL_WIDTH " + g.texelWidth : "",
        g ? "#define CUBEUV_TEXEL_HEIGHT " + g.texelHeight : "",
        g ? "#define CUBEUV_MAX_MIP " + g.maxMip + ".0" : "",
        t.lightMap ? "#define USE_LIGHTMAP" : "",
        t.aoMap ? "#define USE_AOMAP" : "",
        t.bumpMap ? "#define USE_BUMPMAP" : "",
        t.normalMap ? "#define USE_NORMALMAP" : "",
        t.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "",
        t.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "",
        t.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
        t.anisotropy ? "#define USE_ANISOTROPY" : "",
        t.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "",
        t.clearcoat ? "#define USE_CLEARCOAT" : "",
        t.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
        t.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
        t.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
        t.dispersion ? "#define USE_DISPERSION" : "",
        t.iridescence ? "#define USE_IRIDESCENCE" : "",
        t.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "",
        t.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "",
        t.specularMap ? "#define USE_SPECULARMAP" : "",
        t.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "",
        t.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "",
        t.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
        t.metalnessMap ? "#define USE_METALNESSMAP" : "",
        t.alphaMap ? "#define USE_ALPHAMAP" : "",
        t.alphaTest ? "#define USE_ALPHATEST" : "",
        t.alphaHash ? "#define USE_ALPHAHASH" : "",
        t.sheen ? "#define USE_SHEEN" : "",
        t.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "",
        t.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "",
        t.transmission ? "#define USE_TRANSMISSION" : "",
        t.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
        t.thicknessMap ? "#define USE_THICKNESSMAP" : "",
        t.vertexTangents && t.flatShading === !1 ? "#define USE_TANGENT" : "",
        t.vertexColors || t.instancingColor || t.batchingColor
          ? "#define USE_COLOR"
          : "",
        t.vertexAlphas ? "#define USE_COLOR_ALPHA" : "",
        t.vertexUv1s ? "#define USE_UV1" : "",
        t.vertexUv2s ? "#define USE_UV2" : "",
        t.vertexUv3s ? "#define USE_UV3" : "",
        t.pointsUvs ? "#define USE_POINTS_UV" : "",
        t.gradientMap ? "#define USE_GRADIENTMAP" : "",
        t.flatShading ? "#define FLAT_SHADED" : "",
        t.doubleSided ? "#define DOUBLE_SIDED" : "",
        t.flipSided ? "#define FLIP_SIDED" : "",
        t.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
        t.shadowMapEnabled ? "#define " + d : "",
        t.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "",
        t.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "",
        t.decodeVideoTexture ? "#define DECODE_VIDEO_TEXTURE" : "",
        t.decodeVideoTextureEmissive
          ? "#define DECODE_VIDEO_TEXTURE_EMISSIVE"
          : "",
        t.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "",
        t.reverseDepthBuffer ? "#define USE_REVERSEDEPTHBUF" : "",
        "uniform mat4 viewMatrix;",
        "uniform vec3 cameraPosition;",
        "uniform bool isOrthographic;",
        t.toneMapping !== cr ? "#define TONE_MAPPING" : "",
        t.toneMapping !== cr ? ot.tonemapping_pars_fragment : "",
        t.toneMapping !== cr ? jA("toneMapping", t.toneMapping) : "",
        t.dithering ? "#define DITHERING" : "",
        t.opaque ? "#define OPAQUE" : "",
        ot.colorspace_pars_fragment,
        QA("linearToOutputTexel", t.outputColorSpace),
        ew(),
        t.useDepthPacking ? "#define DEPTH_PACKING " + t.depthPacking : "",
        `
`,
      ].filter(na).join(`
`))),
    (c = vu(c)),
    (c = kd(c, t)),
    (c = Wd(c, t)),
    (u = vu(u)),
    (u = kd(u, t)),
    (u = Wd(u, t)),
    (c = Xd(c)),
    (u = Xd(u)),
    t.isRawShaderMaterial !== !0 &&
      ((P = `#version 300 es
`),
      (v =
        [
          M,
          "#define attribute in",
          "#define varying out",
          "#define texture2D texture",
        ].join(`
`) +
        `
` +
        v),
      (m =
        [
          "#define varying in",
          t.glslVersion === od
            ? ""
            : "layout(location = 0) out highp vec4 pc_fragColor;",
          t.glslVersion === od ? "" : "#define gl_FragColor pc_fragColor",
          "#define gl_FragDepthEXT gl_FragDepth",
          "#define texture2D texture",
          "#define textureCube texture",
          "#define texture2DProj textureProj",
          "#define texture2DLodEXT textureLod",
          "#define texture2DProjLodEXT textureProjLod",
          "#define textureCubeLodEXT textureLod",
          "#define texture2DGradEXT textureGrad",
          "#define texture2DProjGradEXT textureProjGrad",
          "#define textureCubeGradEXT textureGrad",
        ].join(`
`) +
        `
` +
        m));
  const L = P + v + c,
    b = P + m + u,
    z = Gd(a, a.VERTEX_SHADER, L),
    N = Gd(a, a.FRAGMENT_SHADER, b);
  a.attachShader(C, z),
    a.attachShader(C, N),
    t.index0AttributeName !== void 0
      ? a.bindAttribLocation(C, 0, t.index0AttributeName)
      : t.morphTargets === !0 && a.bindAttribLocation(C, 0, "position"),
    a.linkProgram(C);
  function U(B) {
    if (s.debug.checkShaderErrors) {
      const Q = a.getProgramInfoLog(C).trim(),
        $ = a.getShaderInfoLog(z).trim(),
        ie = a.getShaderInfoLog(N).trim();
      let ue = !0,
        ne = !0;
      if (a.getProgramParameter(C, a.LINK_STATUS) === !1)
        if (((ue = !1), typeof s.debug.onShaderError == "function"))
          s.debug.onShaderError(a, C, z, N);
        else {
          const de = Vd(a, z, "vertex"),
            j = Vd(a, N, "fragment");
          console.error(
            "THREE.WebGLProgram: Shader Error " +
              a.getError() +
              " - VALIDATE_STATUS " +
              a.getProgramParameter(C, a.VALIDATE_STATUS) +
              `

Material Name: ` +
              B.name +
              `
Material Type: ` +
              B.type +
              `

Program Info Log: ` +
              Q +
              `
` +
              de +
              `
` +
              j,
          );
        }
      else
        Q !== ""
          ? console.warn("THREE.WebGLProgram: Program Info Log:", Q)
          : ($ === "" || ie === "") && (ne = !1);
      ne &&
        (B.diagnostics = {
          runnable: ue,
          programLog: Q,
          vertexShader: { log: $, prefix: v },
          fragmentShader: { log: ie, prefix: m },
        });
    }
    a.deleteShader(z), a.deleteShader(N), (G = new Do(a, C)), (R = iw(a, C));
  }
  let G;
  this.getUniforms = function () {
    return G === void 0 && U(this), G;
  };
  let R;
  this.getAttributes = function () {
    return R === void 0 && U(this), R;
  };
  let y = t.rendererExtensionParallelShaderCompile === !1;
  return (
    (this.isReady = function () {
      return y === !1 && (y = a.getProgramParameter(C, ZA)), y;
    }),
    (this.destroy = function () {
      i.releaseStatesOfProgram(this),
        a.deleteProgram(C),
        (this.program = void 0);
    }),
    (this.type = t.shaderType),
    (this.name = t.shaderName),
    (this.id = KA++),
    (this.cacheKey = e),
    (this.usedTimes = 1),
    (this.program = C),
    (this.vertexShader = z),
    (this.fragmentShader = N),
    this
  );
}
let mw = 0;
class _w {
  constructor() {
    (this.shaderCache = new Map()), (this.materialCache = new Map());
  }
  update(e) {
    const t = e.vertexShader,
      i = e.fragmentShader,
      a = this._getShaderStage(t),
      o = this._getShaderStage(i),
      c = this._getShaderCacheForMaterial(e);
    return (
      c.has(a) === !1 && (c.add(a), a.usedTimes++),
      c.has(o) === !1 && (c.add(o), o.usedTimes++),
      this
    );
  }
  remove(e) {
    const t = this.materialCache.get(e);
    for (const i of t)
      i.usedTimes--, i.usedTimes === 0 && this.shaderCache.delete(i.code);
    return this.materialCache.delete(e), this;
  }
  getVertexShaderID(e) {
    return this._getShaderStage(e.vertexShader).id;
  }
  getFragmentShaderID(e) {
    return this._getShaderStage(e.fragmentShader).id;
  }
  dispose() {
    this.shaderCache.clear(), this.materialCache.clear();
  }
  _getShaderCacheForMaterial(e) {
    const t = this.materialCache;
    let i = t.get(e);
    return i === void 0 && ((i = new Set()), t.set(e, i)), i;
  }
  _getShaderStage(e) {
    const t = this.shaderCache;
    let i = t.get(e);
    return i === void 0 && ((i = new gw(e)), t.set(e, i)), i;
  }
}
class gw {
  constructor(e) {
    (this.id = mw++), (this.code = e), (this.usedTimes = 0);
  }
}
function vw(s, e, t, i, a, o, c) {
  const u = new Sp(),
    d = new _w(),
    h = new Set(),
    p = [],
    _ = a.logarithmicDepthBuffer,
    g = a.vertexTextures;
  let M = a.precision;
  const T = {
    MeshDepthMaterial: "depth",
    MeshDistanceMaterial: "distanceRGBA",
    MeshNormalMaterial: "normal",
    MeshBasicMaterial: "basic",
    MeshLambertMaterial: "lambert",
    MeshPhongMaterial: "phong",
    MeshToonMaterial: "toon",
    MeshStandardMaterial: "physical",
    MeshPhysicalMaterial: "physical",
    MeshMatcapMaterial: "matcap",
    LineBasicMaterial: "basic",
    LineDashedMaterial: "dashed",
    PointsMaterial: "points",
    ShadowMaterial: "shadow",
    SpriteMaterial: "sprite",
  };
  function C(R) {
    return h.add(R), R === 0 ? "uv" : `uv${R}`;
  }
  function v(R, y, B, Q, $) {
    const ie = Q.fog,
      ue = $.geometry,
      ne = R.isMeshStandardMaterial ? Q.environment : null,
      de = (R.isMeshStandardMaterial ? t : e).get(R.envMap || ne),
      j = de && de.mapping === zo ? de.image.height : null,
      Ee = T[R.type];
    R.precision !== null &&
      ((M = a.getMaxPrecision(R.precision)),
      M !== R.precision &&
        console.warn(
          "THREE.WebGLProgram.getParameters:",
          R.precision,
          "not supported, using",
          M,
          "instead.",
        ));
    const we =
        ue.morphAttributes.position ||
        ue.morphAttributes.normal ||
        ue.morphAttributes.color,
      De = we !== void 0 ? we.length : 0;
    let lt = 0;
    ue.morphAttributes.position !== void 0 && (lt = 1),
      ue.morphAttributes.normal !== void 0 && (lt = 2),
      ue.morphAttributes.color !== void 0 && (lt = 3);
    let Ct, oe, _e, Ue;
    if (Ee) {
      const At = vi[Ee];
      (Ct = At.vertexShader), (oe = At.fragmentShader);
    } else
      (Ct = R.vertexShader),
        (oe = R.fragmentShader),
        d.update(R),
        (_e = d.getVertexShaderID(R)),
        (Ue = d.getFragmentShaderID(R));
    const ye = s.getRenderTarget(),
      Ve = s.state.buffers.depth.getReversed(),
      ft = $.isInstancedMesh === !0,
      Ke = $.isBatchedMesh === !0,
      Ot = !!R.map,
      Lt = !!R.matcap,
      ht = !!de,
      F = !!R.aoMap,
      rn = !!R.lightMap,
      mt = !!R.bumpMap,
      je = !!R.normalMap,
      ze = !!R.displacementMap,
      Ut = !!R.emissiveMap,
      Oe = !!R.metalnessMap,
      I = !!R.roughnessMap,
      S = R.anisotropy > 0,
      Y = R.clearcoat > 0,
      ce = R.dispersion > 0,
      fe = R.iridescence > 0,
      se = R.sheen > 0,
      Ne = R.transmission > 0,
      ge = S && !!R.anisotropyMap,
      be = Y && !!R.clearcoatMap,
      dt = Y && !!R.clearcoatNormalMap,
      me = Y && !!R.clearcoatRoughnessMap,
      Ce = fe && !!R.iridescenceMap,
      We = fe && !!R.iridescenceThicknessMap,
      Ze = se && !!R.sheenColorMap,
      Pe = se && !!R.sheenRoughnessMap,
      ut = !!R.specularMap,
      et = !!R.specularColorMap,
      It = !!R.specularIntensityMap,
      H = Ne && !!R.transmissionMap,
      Me = Ne && !!R.thicknessMap,
      ee = !!R.gradientMap,
      le = !!R.alphaMap,
      Ae = R.alphaTest > 0,
      Te = !!R.alphaHash,
      nt = !!R.extensions;
    let Ht = cr;
    R.toneMapped &&
      (ye === null || ye.isXRRenderTarget === !0) &&
      (Ht = s.toneMapping);
    const Jt = {
      shaderID: Ee,
      shaderType: R.type,
      shaderName: R.name,
      vertexShader: Ct,
      fragmentShader: oe,
      defines: R.defines,
      customVertexShaderID: _e,
      customFragmentShaderID: Ue,
      isRawShaderMaterial: R.isRawShaderMaterial === !0,
      glslVersion: R.glslVersion,
      precision: M,
      batching: Ke,
      batchingColor: Ke && $._colorsTexture !== null,
      instancing: ft,
      instancingColor: ft && $.instanceColor !== null,
      instancingMorph: ft && $.morphTexture !== null,
      supportsVertexTextures: g,
      outputColorSpace:
        ye === null
          ? s.outputColorSpace
          : ye.isXRRenderTarget === !0
            ? ye.texture.colorSpace
            : ws,
      alphaToCoverage: !!R.alphaToCoverage,
      map: Ot,
      matcap: Lt,
      envMap: ht,
      envMapMode: ht && de.mapping,
      envMapCubeUVHeight: j,
      aoMap: F,
      lightMap: rn,
      bumpMap: mt,
      normalMap: je,
      displacementMap: g && ze,
      emissiveMap: Ut,
      normalMapObjectSpace: je && R.normalMapType === pS,
      normalMapTangentSpace: je && R.normalMapType === _p,
      metalnessMap: Oe,
      roughnessMap: I,
      anisotropy: S,
      anisotropyMap: ge,
      clearcoat: Y,
      clearcoatMap: be,
      clearcoatNormalMap: dt,
      clearcoatRoughnessMap: me,
      dispersion: ce,
      iridescence: fe,
      iridescenceMap: Ce,
      iridescenceThicknessMap: We,
      sheen: se,
      sheenColorMap: Ze,
      sheenRoughnessMap: Pe,
      specularMap: ut,
      specularColorMap: et,
      specularIntensityMap: It,
      transmission: Ne,
      transmissionMap: H,
      thicknessMap: Me,
      gradientMap: ee,
      opaque:
        R.transparent === !1 && R.blending === gs && R.alphaToCoverage === !1,
      alphaMap: le,
      alphaTest: Ae,
      alphaHash: Te,
      combine: R.combine,
      mapUv: Ot && C(R.map.channel),
      aoMapUv: F && C(R.aoMap.channel),
      lightMapUv: rn && C(R.lightMap.channel),
      bumpMapUv: mt && C(R.bumpMap.channel),
      normalMapUv: je && C(R.normalMap.channel),
      displacementMapUv: ze && C(R.displacementMap.channel),
      emissiveMapUv: Ut && C(R.emissiveMap.channel),
      metalnessMapUv: Oe && C(R.metalnessMap.channel),
      roughnessMapUv: I && C(R.roughnessMap.channel),
      anisotropyMapUv: ge && C(R.anisotropyMap.channel),
      clearcoatMapUv: be && C(R.clearcoatMap.channel),
      clearcoatNormalMapUv: dt && C(R.clearcoatNormalMap.channel),
      clearcoatRoughnessMapUv: me && C(R.clearcoatRoughnessMap.channel),
      iridescenceMapUv: Ce && C(R.iridescenceMap.channel),
      iridescenceThicknessMapUv: We && C(R.iridescenceThicknessMap.channel),
      sheenColorMapUv: Ze && C(R.sheenColorMap.channel),
      sheenRoughnessMapUv: Pe && C(R.sheenRoughnessMap.channel),
      specularMapUv: ut && C(R.specularMap.channel),
      specularColorMapUv: et && C(R.specularColorMap.channel),
      specularIntensityMapUv: It && C(R.specularIntensityMap.channel),
      transmissionMapUv: H && C(R.transmissionMap.channel),
      thicknessMapUv: Me && C(R.thicknessMap.channel),
      alphaMapUv: le && C(R.alphaMap.channel),
      vertexTangents: !!ue.attributes.tangent && (je || S),
      vertexColors: R.vertexColors,
      vertexAlphas:
        R.vertexColors === !0 &&
        !!ue.attributes.color &&
        ue.attributes.color.itemSize === 4,
      pointsUvs: $.isPoints === !0 && !!ue.attributes.uv && (Ot || le),
      fog: !!ie,
      useFog: R.fog === !0,
      fogExp2: !!ie && ie.isFogExp2,
      flatShading: R.flatShading === !0,
      sizeAttenuation: R.sizeAttenuation === !0,
      logarithmicDepthBuffer: _,
      reverseDepthBuffer: Ve,
      skinning: $.isSkinnedMesh === !0,
      morphTargets: ue.morphAttributes.position !== void 0,
      morphNormals: ue.morphAttributes.normal !== void 0,
      morphColors: ue.morphAttributes.color !== void 0,
      morphTargetsCount: De,
      morphTextureStride: lt,
      numDirLights: y.directional.length,
      numPointLights: y.point.length,
      numSpotLights: y.spot.length,
      numSpotLightMaps: y.spotLightMap.length,
      numRectAreaLights: y.rectArea.length,
      numHemiLights: y.hemi.length,
      numDirLightShadows: y.directionalShadowMap.length,
      numPointLightShadows: y.pointShadowMap.length,
      numSpotLightShadows: y.spotShadowMap.length,
      numSpotLightShadowsWithMaps: y.numSpotLightShadowsWithMaps,
      numLightProbes: y.numLightProbes,
      numClippingPlanes: c.numPlanes,
      numClipIntersection: c.numIntersection,
      dithering: R.dithering,
      shadowMapEnabled: s.shadowMap.enabled && B.length > 0,
      shadowMapType: s.shadowMap.type,
      toneMapping: Ht,
      decodeVideoTexture:
        Ot &&
        R.map.isVideoTexture === !0 &&
        Tt.getTransfer(R.map.colorSpace) === Dt,
      decodeVideoTextureEmissive:
        Ut &&
        R.emissiveMap.isVideoTexture === !0 &&
        Tt.getTransfer(R.emissiveMap.colorSpace) === Dt,
      premultipliedAlpha: R.premultipliedAlpha,
      doubleSided: R.side === zi,
      flipSided: R.side === Dn,
      useDepthPacking: R.depthPacking >= 0,
      depthPacking: R.depthPacking || 0,
      index0AttributeName: R.index0AttributeName,
      extensionClipCullDistance:
        nt &&
        R.extensions.clipCullDistance === !0 &&
        i.has("WEBGL_clip_cull_distance"),
      extensionMultiDraw:
        ((nt && R.extensions.multiDraw === !0) || Ke) &&
        i.has("WEBGL_multi_draw"),
      rendererExtensionParallelShaderCompile: i.has(
        "KHR_parallel_shader_compile",
      ),
      customProgramCacheKey: R.customProgramCacheKey(),
    };
    return (
      (Jt.vertexUv1s = h.has(1)),
      (Jt.vertexUv2s = h.has(2)),
      (Jt.vertexUv3s = h.has(3)),
      h.clear(),
      Jt
    );
  }
  function m(R) {
    const y = [];
    if (
      (R.shaderID
        ? y.push(R.shaderID)
        : (y.push(R.customVertexShaderID), y.push(R.customFragmentShaderID)),
      R.defines !== void 0)
    )
      for (const B in R.defines) y.push(B), y.push(R.defines[B]);
    return (
      R.isRawShaderMaterial === !1 &&
        (P(y, R), L(y, R), y.push(s.outputColorSpace)),
      y.push(R.customProgramCacheKey),
      y.join()
    );
  }
  function P(R, y) {
    R.push(y.precision),
      R.push(y.outputColorSpace),
      R.push(y.envMapMode),
      R.push(y.envMapCubeUVHeight),
      R.push(y.mapUv),
      R.push(y.alphaMapUv),
      R.push(y.lightMapUv),
      R.push(y.aoMapUv),
      R.push(y.bumpMapUv),
      R.push(y.normalMapUv),
      R.push(y.displacementMapUv),
      R.push(y.emissiveMapUv),
      R.push(y.metalnessMapUv),
      R.push(y.roughnessMapUv),
      R.push(y.anisotropyMapUv),
      R.push(y.clearcoatMapUv),
      R.push(y.clearcoatNormalMapUv),
      R.push(y.clearcoatRoughnessMapUv),
      R.push(y.iridescenceMapUv),
      R.push(y.iridescenceThicknessMapUv),
      R.push(y.sheenColorMapUv),
      R.push(y.sheenRoughnessMapUv),
      R.push(y.specularMapUv),
      R.push(y.specularColorMapUv),
      R.push(y.specularIntensityMapUv),
      R.push(y.transmissionMapUv),
      R.push(y.thicknessMapUv),
      R.push(y.combine),
      R.push(y.fogExp2),
      R.push(y.sizeAttenuation),
      R.push(y.morphTargetsCount),
      R.push(y.morphAttributeCount),
      R.push(y.numDirLights),
      R.push(y.numPointLights),
      R.push(y.numSpotLights),
      R.push(y.numSpotLightMaps),
      R.push(y.numHemiLights),
      R.push(y.numRectAreaLights),
      R.push(y.numDirLightShadows),
      R.push(y.numPointLightShadows),
      R.push(y.numSpotLightShadows),
      R.push(y.numSpotLightShadowsWithMaps),
      R.push(y.numLightProbes),
      R.push(y.shadowMapType),
      R.push(y.toneMapping),
      R.push(y.numClippingPlanes),
      R.push(y.numClipIntersection),
      R.push(y.depthPacking);
  }
  function L(R, y) {
    u.disableAll(),
      y.supportsVertexTextures && u.enable(0),
      y.instancing && u.enable(1),
      y.instancingColor && u.enable(2),
      y.instancingMorph && u.enable(3),
      y.matcap && u.enable(4),
      y.envMap && u.enable(5),
      y.normalMapObjectSpace && u.enable(6),
      y.normalMapTangentSpace && u.enable(7),
      y.clearcoat && u.enable(8),
      y.iridescence && u.enable(9),
      y.alphaTest && u.enable(10),
      y.vertexColors && u.enable(11),
      y.vertexAlphas && u.enable(12),
      y.vertexUv1s && u.enable(13),
      y.vertexUv2s && u.enable(14),
      y.vertexUv3s && u.enable(15),
      y.vertexTangents && u.enable(16),
      y.anisotropy && u.enable(17),
      y.alphaHash && u.enable(18),
      y.batching && u.enable(19),
      y.dispersion && u.enable(20),
      y.batchingColor && u.enable(21),
      R.push(u.mask),
      u.disableAll(),
      y.fog && u.enable(0),
      y.useFog && u.enable(1),
      y.flatShading && u.enable(2),
      y.logarithmicDepthBuffer && u.enable(3),
      y.reverseDepthBuffer && u.enable(4),
      y.skinning && u.enable(5),
      y.morphTargets && u.enable(6),
      y.morphNormals && u.enable(7),
      y.morphColors && u.enable(8),
      y.premultipliedAlpha && u.enable(9),
      y.shadowMapEnabled && u.enable(10),
      y.doubleSided && u.enable(11),
      y.flipSided && u.enable(12),
      y.useDepthPacking && u.enable(13),
      y.dithering && u.enable(14),
      y.transmission && u.enable(15),
      y.sheen && u.enable(16),
      y.opaque && u.enable(17),
      y.pointsUvs && u.enable(18),
      y.decodeVideoTexture && u.enable(19),
      y.decodeVideoTextureEmissive && u.enable(20),
      y.alphaToCoverage && u.enable(21),
      R.push(u.mask);
  }
  function b(R) {
    const y = T[R.type];
    let B;
    if (y) {
      const Q = vi[y];
      B = qS.clone(Q.uniforms);
    } else B = R.uniforms;
    return B;
  }
  function z(R, y) {
    let B;
    for (let Q = 0, $ = p.length; Q < $; Q++) {
      const ie = p[Q];
      if (ie.cacheKey === y) {
        (B = ie), ++B.usedTimes;
        break;
      }
    }
    return B === void 0 && ((B = new pw(s, y, R, o)), p.push(B)), B;
  }
  function N(R) {
    if (--R.usedTimes === 0) {
      const y = p.indexOf(R);
      (p[y] = p[p.length - 1]), p.pop(), R.destroy();
    }
  }
  function U(R) {
    d.remove(R);
  }
  function G() {
    d.dispose();
  }
  return {
    getParameters: v,
    getProgramCacheKey: m,
    getUniforms: b,
    acquireProgram: z,
    releaseProgram: N,
    releaseShaderCache: U,
    programs: p,
    dispose: G,
  };
}
function xw() {
  let s = new WeakMap();
  function e(c) {
    return s.has(c);
  }
  function t(c) {
    let u = s.get(c);
    return u === void 0 && ((u = {}), s.set(c, u)), u;
  }
  function i(c) {
    s.delete(c);
  }
  function a(c, u, d) {
    s.get(c)[u] = d;
  }
  function o() {
    s = new WeakMap();
  }
  return { has: e, get: t, remove: i, update: a, dispose: o };
}
function Mw(s, e) {
  return s.groupOrder !== e.groupOrder
    ? s.groupOrder - e.groupOrder
    : s.renderOrder !== e.renderOrder
      ? s.renderOrder - e.renderOrder
      : s.material.id !== e.material.id
        ? s.material.id - e.material.id
        : s.z !== e.z
          ? s.z - e.z
          : s.id - e.id;
}
function Yd(s, e) {
  return s.groupOrder !== e.groupOrder
    ? s.groupOrder - e.groupOrder
    : s.renderOrder !== e.renderOrder
      ? s.renderOrder - e.renderOrder
      : s.z !== e.z
        ? e.z - s.z
        : s.id - e.id;
}
function Zd() {
  const s = [];
  let e = 0;
  const t = [],
    i = [],
    a = [];
  function o() {
    (e = 0), (t.length = 0), (i.length = 0), (a.length = 0);
  }
  function c(_, g, M, T, C, v) {
    let m = s[e];
    return (
      m === void 0
        ? ((m = {
            id: _.id,
            object: _,
            geometry: g,
            material: M,
            groupOrder: T,
            renderOrder: _.renderOrder,
            z: C,
            group: v,
          }),
          (s[e] = m))
        : ((m.id = _.id),
          (m.object = _),
          (m.geometry = g),
          (m.material = M),
          (m.groupOrder = T),
          (m.renderOrder = _.renderOrder),
          (m.z = C),
          (m.group = v)),
      e++,
      m
    );
  }
  function u(_, g, M, T, C, v) {
    const m = c(_, g, M, T, C, v);
    M.transmission > 0
      ? i.push(m)
      : M.transparent === !0
        ? a.push(m)
        : t.push(m);
  }
  function d(_, g, M, T, C, v) {
    const m = c(_, g, M, T, C, v);
    M.transmission > 0
      ? i.unshift(m)
      : M.transparent === !0
        ? a.unshift(m)
        : t.unshift(m);
  }
  function h(_, g) {
    t.length > 1 && t.sort(_ || Mw),
      i.length > 1 && i.sort(g || Yd),
      a.length > 1 && a.sort(g || Yd);
  }
  function p() {
    for (let _ = e, g = s.length; _ < g; _++) {
      const M = s[_];
      if (M.id === null) break;
      (M.id = null),
        (M.object = null),
        (M.geometry = null),
        (M.material = null),
        (M.group = null);
    }
  }
  return {
    opaque: t,
    transmissive: i,
    transparent: a,
    init: o,
    push: u,
    unshift: d,
    finish: p,
    sort: h,
  };
}
function Sw() {
  let s = new WeakMap();
  function e(i, a) {
    const o = s.get(i);
    let c;
    return (
      o === void 0
        ? ((c = new Zd()), s.set(i, [c]))
        : a >= o.length
          ? ((c = new Zd()), o.push(c))
          : (c = o[a]),
      c
    );
  }
  function t() {
    s = new WeakMap();
  }
  return { get: e, dispose: t };
}
function Ew() {
  const s = {};
  return {
    get: function (e) {
      if (s[e.id] !== void 0) return s[e.id];
      let t;
      switch (e.type) {
        case "DirectionalLight":
          t = { direction: new W(), color: new Fe() };
          break;
        case "SpotLight":
          t = {
            position: new W(),
            direction: new W(),
            color: new Fe(),
            distance: 0,
            coneCos: 0,
            penumbraCos: 0,
            decay: 0,
          };
          break;
        case "PointLight":
          t = { position: new W(), color: new Fe(), distance: 0, decay: 0 };
          break;
        case "HemisphereLight":
          t = { direction: new W(), skyColor: new Fe(), groundColor: new Fe() };
          break;
        case "RectAreaLight":
          t = {
            color: new Fe(),
            position: new W(),
            halfWidth: new W(),
            halfHeight: new W(),
          };
          break;
      }
      return (s[e.id] = t), t;
    },
  };
}
function yw() {
  const s = {};
  return {
    get: function (e) {
      if (s[e.id] !== void 0) return s[e.id];
      let t;
      switch (e.type) {
        case "DirectionalLight":
          t = {
            shadowIntensity: 1,
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new He(),
          };
          break;
        case "SpotLight":
          t = {
            shadowIntensity: 1,
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new He(),
          };
          break;
        case "PointLight":
          t = {
            shadowIntensity: 1,
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new He(),
            shadowCameraNear: 1,
            shadowCameraFar: 1e3,
          };
          break;
      }
      return (s[e.id] = t), t;
    },
  };
}
let Tw = 0;
function Aw(s, e) {
  return (
    (e.castShadow ? 2 : 0) -
    (s.castShadow ? 2 : 0) +
    (e.map ? 1 : 0) -
    (s.map ? 1 : 0)
  );
}
function ww(s) {
  const e = new Ew(),
    t = yw(),
    i = {
      version: 0,
      hash: {
        directionalLength: -1,
        pointLength: -1,
        spotLength: -1,
        rectAreaLength: -1,
        hemiLength: -1,
        numDirectionalShadows: -1,
        numPointShadows: -1,
        numSpotShadows: -1,
        numSpotMaps: -1,
        numLightProbes: -1,
      },
      ambient: [0, 0, 0],
      probe: [],
      directional: [],
      directionalShadow: [],
      directionalShadowMap: [],
      directionalShadowMatrix: [],
      spot: [],
      spotLightMap: [],
      spotShadow: [],
      spotShadowMap: [],
      spotLightMatrix: [],
      rectArea: [],
      rectAreaLTC1: null,
      rectAreaLTC2: null,
      point: [],
      pointShadow: [],
      pointShadowMap: [],
      pointShadowMatrix: [],
      hemi: [],
      numSpotLightShadowsWithMaps: 0,
      numLightProbes: 0,
    };
  for (let h = 0; h < 9; h++) i.probe.push(new W());
  const a = new W(),
    o = new $t(),
    c = new $t();
  function u(h) {
    let p = 0,
      _ = 0,
      g = 0;
    for (let R = 0; R < 9; R++) i.probe[R].set(0, 0, 0);
    let M = 0,
      T = 0,
      C = 0,
      v = 0,
      m = 0,
      P = 0,
      L = 0,
      b = 0,
      z = 0,
      N = 0,
      U = 0;
    h.sort(Aw);
    for (let R = 0, y = h.length; R < y; R++) {
      const B = h[R],
        Q = B.color,
        $ = B.intensity,
        ie = B.distance,
        ue = B.shadow && B.shadow.map ? B.shadow.map.texture : null;
      if (B.isAmbientLight) (p += Q.r * $), (_ += Q.g * $), (g += Q.b * $);
      else if (B.isLightProbe) {
        for (let ne = 0; ne < 9; ne++)
          i.probe[ne].addScaledVector(B.sh.coefficients[ne], $);
        U++;
      } else if (B.isDirectionalLight) {
        const ne = e.get(B);
        if (
          (ne.color.copy(B.color).multiplyScalar(B.intensity), B.castShadow)
        ) {
          const de = B.shadow,
            j = t.get(B);
          (j.shadowIntensity = de.intensity),
            (j.shadowBias = de.bias),
            (j.shadowNormalBias = de.normalBias),
            (j.shadowRadius = de.radius),
            (j.shadowMapSize = de.mapSize),
            (i.directionalShadow[M] = j),
            (i.directionalShadowMap[M] = ue),
            (i.directionalShadowMatrix[M] = B.shadow.matrix),
            P++;
        }
        (i.directional[M] = ne), M++;
      } else if (B.isSpotLight) {
        const ne = e.get(B);
        ne.position.setFromMatrixPosition(B.matrixWorld),
          ne.color.copy(Q).multiplyScalar($),
          (ne.distance = ie),
          (ne.coneCos = Math.cos(B.angle)),
          (ne.penumbraCos = Math.cos(B.angle * (1 - B.penumbra))),
          (ne.decay = B.decay),
          (i.spot[C] = ne);
        const de = B.shadow;
        if (
          (B.map &&
            ((i.spotLightMap[z] = B.map),
            z++,
            de.updateMatrices(B),
            B.castShadow && N++),
          (i.spotLightMatrix[C] = de.matrix),
          B.castShadow)
        ) {
          const j = t.get(B);
          (j.shadowIntensity = de.intensity),
            (j.shadowBias = de.bias),
            (j.shadowNormalBias = de.normalBias),
            (j.shadowRadius = de.radius),
            (j.shadowMapSize = de.mapSize),
            (i.spotShadow[C] = j),
            (i.spotShadowMap[C] = ue),
            b++;
        }
        C++;
      } else if (B.isRectAreaLight) {
        const ne = e.get(B);
        ne.color.copy(Q).multiplyScalar($),
          ne.halfWidth.set(B.width * 0.5, 0, 0),
          ne.halfHeight.set(0, B.height * 0.5, 0),
          (i.rectArea[v] = ne),
          v++;
      } else if (B.isPointLight) {
        const ne = e.get(B);
        if (
          (ne.color.copy(B.color).multiplyScalar(B.intensity),
          (ne.distance = B.distance),
          (ne.decay = B.decay),
          B.castShadow)
        ) {
          const de = B.shadow,
            j = t.get(B);
          (j.shadowIntensity = de.intensity),
            (j.shadowBias = de.bias),
            (j.shadowNormalBias = de.normalBias),
            (j.shadowRadius = de.radius),
            (j.shadowMapSize = de.mapSize),
            (j.shadowCameraNear = de.camera.near),
            (j.shadowCameraFar = de.camera.far),
            (i.pointShadow[T] = j),
            (i.pointShadowMap[T] = ue),
            (i.pointShadowMatrix[T] = B.shadow.matrix),
            L++;
        }
        (i.point[T] = ne), T++;
      } else if (B.isHemisphereLight) {
        const ne = e.get(B);
        ne.skyColor.copy(B.color).multiplyScalar($),
          ne.groundColor.copy(B.groundColor).multiplyScalar($),
          (i.hemi[m] = ne),
          m++;
      }
    }
    v > 0 &&
      (s.has("OES_texture_float_linear") === !0
        ? ((i.rectAreaLTC1 = xe.LTC_FLOAT_1), (i.rectAreaLTC2 = xe.LTC_FLOAT_2))
        : ((i.rectAreaLTC1 = xe.LTC_HALF_1), (i.rectAreaLTC2 = xe.LTC_HALF_2))),
      (i.ambient[0] = p),
      (i.ambient[1] = _),
      (i.ambient[2] = g);
    const G = i.hash;
    (G.directionalLength !== M ||
      G.pointLength !== T ||
      G.spotLength !== C ||
      G.rectAreaLength !== v ||
      G.hemiLength !== m ||
      G.numDirectionalShadows !== P ||
      G.numPointShadows !== L ||
      G.numSpotShadows !== b ||
      G.numSpotMaps !== z ||
      G.numLightProbes !== U) &&
      ((i.directional.length = M),
      (i.spot.length = C),
      (i.rectArea.length = v),
      (i.point.length = T),
      (i.hemi.length = m),
      (i.directionalShadow.length = P),
      (i.directionalShadowMap.length = P),
      (i.pointShadow.length = L),
      (i.pointShadowMap.length = L),
      (i.spotShadow.length = b),
      (i.spotShadowMap.length = b),
      (i.directionalShadowMatrix.length = P),
      (i.pointShadowMatrix.length = L),
      (i.spotLightMatrix.length = b + z - N),
      (i.spotLightMap.length = z),
      (i.numSpotLightShadowsWithMaps = N),
      (i.numLightProbes = U),
      (G.directionalLength = M),
      (G.pointLength = T),
      (G.spotLength = C),
      (G.rectAreaLength = v),
      (G.hemiLength = m),
      (G.numDirectionalShadows = P),
      (G.numPointShadows = L),
      (G.numSpotShadows = b),
      (G.numSpotMaps = z),
      (G.numLightProbes = U),
      (i.version = Tw++));
  }
  function d(h, p) {
    let _ = 0,
      g = 0,
      M = 0,
      T = 0,
      C = 0;
    const v = p.matrixWorldInverse;
    for (let m = 0, P = h.length; m < P; m++) {
      const L = h[m];
      if (L.isDirectionalLight) {
        const b = i.directional[_];
        b.direction.setFromMatrixPosition(L.matrixWorld),
          a.setFromMatrixPosition(L.target.matrixWorld),
          b.direction.sub(a),
          b.direction.transformDirection(v),
          _++;
      } else if (L.isSpotLight) {
        const b = i.spot[M];
        b.position.setFromMatrixPosition(L.matrixWorld),
          b.position.applyMatrix4(v),
          b.direction.setFromMatrixPosition(L.matrixWorld),
          a.setFromMatrixPosition(L.target.matrixWorld),
          b.direction.sub(a),
          b.direction.transformDirection(v),
          M++;
      } else if (L.isRectAreaLight) {
        const b = i.rectArea[T];
        b.position.setFromMatrixPosition(L.matrixWorld),
          b.position.applyMatrix4(v),
          c.identity(),
          o.copy(L.matrixWorld),
          o.premultiply(v),
          c.extractRotation(o),
          b.halfWidth.set(L.width * 0.5, 0, 0),
          b.halfHeight.set(0, L.height * 0.5, 0),
          b.halfWidth.applyMatrix4(c),
          b.halfHeight.applyMatrix4(c),
          T++;
      } else if (L.isPointLight) {
        const b = i.point[g];
        b.position.setFromMatrixPosition(L.matrixWorld),
          b.position.applyMatrix4(v),
          g++;
      } else if (L.isHemisphereLight) {
        const b = i.hemi[C];
        b.direction.setFromMatrixPosition(L.matrixWorld),
          b.direction.transformDirection(v),
          C++;
      }
    }
  }
  return { setup: u, setupView: d, state: i };
}
function Kd(s) {
  const e = new ww(s),
    t = [],
    i = [];
  function a(p) {
    (h.camera = p), (t.length = 0), (i.length = 0);
  }
  function o(p) {
    t.push(p);
  }
  function c(p) {
    i.push(p);
  }
  function u() {
    e.setup(t);
  }
  function d(p) {
    e.setupView(t, p);
  }
  const h = {
    lightsArray: t,
    shadowsArray: i,
    camera: null,
    lights: e,
    transmissionRenderTarget: {},
  };
  return {
    init: a,
    state: h,
    setupLights: u,
    setupLightsView: d,
    pushLight: o,
    pushShadow: c,
  };
}
function bw(s) {
  let e = new WeakMap();
  function t(a, o = 0) {
    const c = e.get(a);
    let u;
    return (
      c === void 0
        ? ((u = new Kd(s)), e.set(a, [u]))
        : o >= c.length
          ? ((u = new Kd(s)), c.push(u))
          : (u = c[o]),
      u
    );
  }
  function i() {
    e = new WeakMap();
  }
  return { get: t, dispose: i };
}
const Rw = `void main() {
	gl_Position = vec4( position, 1.0 );
}`,
  Cw = `uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;
function Pw(s, e, t) {
  let i = new Rp();
  const a = new He(),
    o = new He(),
    c = new Zt(),
    u = new tE({ depthPacking: dS }),
    d = new nE(),
    h = {},
    p = t.maxTextureSize,
    _ = { [ur]: Dn, [Dn]: ur, [zi]: zi },
    g = new fr({
      defines: { VSM_SAMPLES: 8 },
      uniforms: {
        shadow_pass: { value: null },
        resolution: { value: new He() },
        radius: { value: 4 },
      },
      vertexShader: Rw,
      fragmentShader: Cw,
    }),
    M = g.clone();
  M.defines.HORIZONTAL_PASS = 1;
  const T = new Ei();
  T.setAttribute(
    "position",
    new Mi(new Float32Array([-1, -1, 0.5, 3, -1, 0.5, -1, 3, 0.5]), 3),
  );
  const C = new Tn(T, g),
    v = this;
  (this.enabled = !1),
    (this.autoUpdate = !0),
    (this.needsUpdate = !1),
    (this.type = ip);
  let m = this.type;
  this.render = function (N, U, G) {
    if (
      v.enabled === !1 ||
      (v.autoUpdate === !1 && v.needsUpdate === !1) ||
      N.length === 0
    )
      return;
    const R = s.getRenderTarget(),
      y = s.getActiveCubeFace(),
      B = s.getActiveMipmapLevel(),
      Q = s.state;
    Q.setBlending(lr),
      Q.buffers.color.setClear(1, 1, 1, 1),
      Q.buffers.depth.setTest(!0),
      Q.setScissorTest(!1);
    const $ = m !== Bi && this.type === Bi,
      ie = m === Bi && this.type !== Bi;
    for (let ue = 0, ne = N.length; ue < ne; ue++) {
      const de = N[ue],
        j = de.shadow;
      if (j === void 0) {
        console.warn("THREE.WebGLShadowMap:", de, "has no shadow.");
        continue;
      }
      if (j.autoUpdate === !1 && j.needsUpdate === !1) continue;
      a.copy(j.mapSize);
      const Ee = j.getFrameExtents();
      if (
        (a.multiply(Ee),
        o.copy(j.mapSize),
        (a.x > p || a.y > p) &&
          (a.x > p &&
            ((o.x = Math.floor(p / Ee.x)),
            (a.x = o.x * Ee.x),
            (j.mapSize.x = o.x)),
          a.y > p &&
            ((o.y = Math.floor(p / Ee.y)),
            (a.y = o.y * Ee.y),
            (j.mapSize.y = o.y))),
        j.map === null || $ === !0 || ie === !0)
      ) {
        const De = this.type !== Bi ? { minFilter: di, magFilter: di } : {};
        j.map !== null && j.map.dispose(),
          (j.map = new Fr(a.x, a.y, De)),
          (j.map.texture.name = de.name + ".shadowMap"),
          j.camera.updateProjectionMatrix();
      }
      s.setRenderTarget(j.map), s.clear();
      const we = j.getViewportCount();
      for (let De = 0; De < we; De++) {
        const lt = j.getViewport(De);
        c.set(o.x * lt.x, o.y * lt.y, o.x * lt.z, o.y * lt.w),
          Q.viewport(c),
          j.updateMatrices(de, De),
          (i = j.getFrustum()),
          b(U, G, j.camera, de, this.type);
      }
      j.isPointLightShadow !== !0 && this.type === Bi && P(j, G),
        (j.needsUpdate = !1);
    }
    (m = this.type), (v.needsUpdate = !1), s.setRenderTarget(R, y, B);
  };
  function P(N, U) {
    const G = e.update(C);
    g.defines.VSM_SAMPLES !== N.blurSamples &&
      ((g.defines.VSM_SAMPLES = N.blurSamples),
      (M.defines.VSM_SAMPLES = N.blurSamples),
      (g.needsUpdate = !0),
      (M.needsUpdate = !0)),
      N.mapPass === null && (N.mapPass = new Fr(a.x, a.y)),
      (g.uniforms.shadow_pass.value = N.map.texture),
      (g.uniforms.resolution.value = N.mapSize),
      (g.uniforms.radius.value = N.radius),
      s.setRenderTarget(N.mapPass),
      s.clear(),
      s.renderBufferDirect(U, null, G, g, C, null),
      (M.uniforms.shadow_pass.value = N.mapPass.texture),
      (M.uniforms.resolution.value = N.mapSize),
      (M.uniforms.radius.value = N.radius),
      s.setRenderTarget(N.map),
      s.clear(),
      s.renderBufferDirect(U, null, G, M, C, null);
  }
  function L(N, U, G, R) {
    let y = null;
    const B =
      G.isPointLight === !0 ? N.customDistanceMaterial : N.customDepthMaterial;
    if (B !== void 0) y = B;
    else if (
      ((y = G.isPointLight === !0 ? d : u),
      (s.localClippingEnabled &&
        U.clipShadows === !0 &&
        Array.isArray(U.clippingPlanes) &&
        U.clippingPlanes.length !== 0) ||
        (U.displacementMap && U.displacementScale !== 0) ||
        (U.alphaMap && U.alphaTest > 0) ||
        (U.map && U.alphaTest > 0))
    ) {
      const Q = y.uuid,
        $ = U.uuid;
      let ie = h[Q];
      ie === void 0 && ((ie = {}), (h[Q] = ie));
      let ue = ie[$];
      ue === void 0 &&
        ((ue = y.clone()), (ie[$] = ue), U.addEventListener("dispose", z)),
        (y = ue);
    }
    if (
      ((y.visible = U.visible),
      (y.wireframe = U.wireframe),
      R === Bi
        ? (y.side = U.shadowSide !== null ? U.shadowSide : U.side)
        : (y.side = U.shadowSide !== null ? U.shadowSide : _[U.side]),
      (y.alphaMap = U.alphaMap),
      (y.alphaTest = U.alphaTest),
      (y.map = U.map),
      (y.clipShadows = U.clipShadows),
      (y.clippingPlanes = U.clippingPlanes),
      (y.clipIntersection = U.clipIntersection),
      (y.displacementMap = U.displacementMap),
      (y.displacementScale = U.displacementScale),
      (y.displacementBias = U.displacementBias),
      (y.wireframeLinewidth = U.wireframeLinewidth),
      (y.linewidth = U.linewidth),
      G.isPointLight === !0 && y.isMeshDistanceMaterial === !0)
    ) {
      const Q = s.properties.get(y);
      Q.light = G;
    }
    return y;
  }
  function b(N, U, G, R, y) {
    if (N.visible === !1) return;
    if (
      N.layers.test(U.layers) &&
      (N.isMesh || N.isLine || N.isPoints) &&
      (N.castShadow || (N.receiveShadow && y === Bi)) &&
      (!N.frustumCulled || i.intersectsObject(N))
    ) {
      N.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse, N.matrixWorld);
      const $ = e.update(N),
        ie = N.material;
      if (Array.isArray(ie)) {
        const ue = $.groups;
        for (let ne = 0, de = ue.length; ne < de; ne++) {
          const j = ue[ne],
            Ee = ie[j.materialIndex];
          if (Ee && Ee.visible) {
            const we = L(N, Ee, R, y);
            N.onBeforeShadow(s, N, U, G, $, we, j),
              s.renderBufferDirect(G, null, $, we, N, j),
              N.onAfterShadow(s, N, U, G, $, we, j);
          }
        }
      } else if (ie.visible) {
        const ue = L(N, ie, R, y);
        N.onBeforeShadow(s, N, U, G, $, ue, null),
          s.renderBufferDirect(G, null, $, ue, N, null),
          N.onAfterShadow(s, N, U, G, $, ue, null);
      }
    }
    const Q = N.children;
    for (let $ = 0, ie = Q.length; $ < ie; $++) b(Q[$], U, G, R, y);
  }
  function z(N) {
    N.target.removeEventListener("dispose", z);
    for (const G in h) {
      const R = h[G],
        y = N.target.uuid;
      y in R && (R[y].dispose(), delete R[y]);
    }
  }
}
const Lw = {
  [Uc]: Nc,
  [Fc]: zc,
  [Oc]: Gc,
  [Ss]: Bc,
  [Nc]: Uc,
  [zc]: Fc,
  [Gc]: Oc,
  [Bc]: Ss,
};
function Iw(s, e) {
  function t() {
    let H = !1;
    const Me = new Zt();
    let ee = null;
    const le = new Zt(0, 0, 0, 0);
    return {
      setMask: function (Ae) {
        ee !== Ae && !H && (s.colorMask(Ae, Ae, Ae, Ae), (ee = Ae));
      },
      setLocked: function (Ae) {
        H = Ae;
      },
      setClear: function (Ae, Te, nt, Ht, Jt) {
        Jt === !0 && ((Ae *= Ht), (Te *= Ht), (nt *= Ht)),
          Me.set(Ae, Te, nt, Ht),
          le.equals(Me) === !1 && (s.clearColor(Ae, Te, nt, Ht), le.copy(Me));
      },
      reset: function () {
        (H = !1), (ee = null), le.set(-1, 0, 0, 0);
      },
    };
  }
  function i() {
    let H = !1,
      Me = !1,
      ee = null,
      le = null,
      Ae = null;
    return {
      setReversed: function (Te) {
        if (Me !== Te) {
          const nt = e.get("EXT_clip_control");
          Me
            ? nt.clipControlEXT(nt.LOWER_LEFT_EXT, nt.ZERO_TO_ONE_EXT)
            : nt.clipControlEXT(nt.LOWER_LEFT_EXT, nt.NEGATIVE_ONE_TO_ONE_EXT);
          const Ht = Ae;
          (Ae = null), this.setClear(Ht);
        }
        Me = Te;
      },
      getReversed: function () {
        return Me;
      },
      setTest: function (Te) {
        Te ? ye(s.DEPTH_TEST) : Ve(s.DEPTH_TEST);
      },
      setMask: function (Te) {
        ee !== Te && !H && (s.depthMask(Te), (ee = Te));
      },
      setFunc: function (Te) {
        if ((Me && (Te = Lw[Te]), le !== Te)) {
          switch (Te) {
            case Uc:
              s.depthFunc(s.NEVER);
              break;
            case Nc:
              s.depthFunc(s.ALWAYS);
              break;
            case Fc:
              s.depthFunc(s.LESS);
              break;
            case Ss:
              s.depthFunc(s.LEQUAL);
              break;
            case Oc:
              s.depthFunc(s.EQUAL);
              break;
            case Bc:
              s.depthFunc(s.GEQUAL);
              break;
            case zc:
              s.depthFunc(s.GREATER);
              break;
            case Gc:
              s.depthFunc(s.NOTEQUAL);
              break;
            default:
              s.depthFunc(s.LEQUAL);
          }
          le = Te;
        }
      },
      setLocked: function (Te) {
        H = Te;
      },
      setClear: function (Te) {
        Ae !== Te && (Me && (Te = 1 - Te), s.clearDepth(Te), (Ae = Te));
      },
      reset: function () {
        (H = !1), (ee = null), (le = null), (Ae = null), (Me = !1);
      },
    };
  }
  function a() {
    let H = !1,
      Me = null,
      ee = null,
      le = null,
      Ae = null,
      Te = null,
      nt = null,
      Ht = null,
      Jt = null;
    return {
      setTest: function (At) {
        H || (At ? ye(s.STENCIL_TEST) : Ve(s.STENCIL_TEST));
      },
      setMask: function (At) {
        Me !== At && !H && (s.stencilMask(At), (Me = At));
      },
      setFunc: function (At, Nn, ni) {
        (ee !== At || le !== Nn || Ae !== ni) &&
          (s.stencilFunc(At, Nn, ni), (ee = At), (le = Nn), (Ae = ni));
      },
      setOp: function (At, Nn, ni) {
        (Te !== At || nt !== Nn || Ht !== ni) &&
          (s.stencilOp(At, Nn, ni), (Te = At), (nt = Nn), (Ht = ni));
      },
      setLocked: function (At) {
        H = At;
      },
      setClear: function (At) {
        Jt !== At && (s.clearStencil(At), (Jt = At));
      },
      reset: function () {
        (H = !1),
          (Me = null),
          (ee = null),
          (le = null),
          (Ae = null),
          (Te = null),
          (nt = null),
          (Ht = null),
          (Jt = null);
      },
    };
  }
  const o = new t(),
    c = new i(),
    u = new a(),
    d = new WeakMap(),
    h = new WeakMap();
  let p = {},
    _ = {},
    g = new WeakMap(),
    M = [],
    T = null,
    C = !1,
    v = null,
    m = null,
    P = null,
    L = null,
    b = null,
    z = null,
    N = null,
    U = new Fe(0, 0, 0),
    G = 0,
    R = !1,
    y = null,
    B = null,
    Q = null,
    $ = null,
    ie = null;
  const ue = s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);
  let ne = !1,
    de = 0;
  const j = s.getParameter(s.VERSION);
  j.indexOf("WebGL") !== -1
    ? ((de = parseFloat(/^WebGL (\d)/.exec(j)[1])), (ne = de >= 1))
    : j.indexOf("OpenGL ES") !== -1 &&
      ((de = parseFloat(/^OpenGL ES (\d)/.exec(j)[1])), (ne = de >= 2));
  let Ee = null,
    we = {};
  const De = s.getParameter(s.SCISSOR_BOX),
    lt = s.getParameter(s.VIEWPORT),
    Ct = new Zt().fromArray(De),
    oe = new Zt().fromArray(lt);
  function _e(H, Me, ee, le) {
    const Ae = new Uint8Array(4),
      Te = s.createTexture();
    s.bindTexture(H, Te),
      s.texParameteri(H, s.TEXTURE_MIN_FILTER, s.NEAREST),
      s.texParameteri(H, s.TEXTURE_MAG_FILTER, s.NEAREST);
    for (let nt = 0; nt < ee; nt++)
      H === s.TEXTURE_3D || H === s.TEXTURE_2D_ARRAY
        ? s.texImage3D(Me, 0, s.RGBA, 1, 1, le, 0, s.RGBA, s.UNSIGNED_BYTE, Ae)
        : s.texImage2D(
            Me + nt,
            0,
            s.RGBA,
            1,
            1,
            0,
            s.RGBA,
            s.UNSIGNED_BYTE,
            Ae,
          );
    return Te;
  }
  const Ue = {};
  (Ue[s.TEXTURE_2D] = _e(s.TEXTURE_2D, s.TEXTURE_2D, 1)),
    (Ue[s.TEXTURE_CUBE_MAP] = _e(
      s.TEXTURE_CUBE_MAP,
      s.TEXTURE_CUBE_MAP_POSITIVE_X,
      6,
    )),
    (Ue[s.TEXTURE_2D_ARRAY] = _e(s.TEXTURE_2D_ARRAY, s.TEXTURE_2D_ARRAY, 1, 1)),
    (Ue[s.TEXTURE_3D] = _e(s.TEXTURE_3D, s.TEXTURE_3D, 1, 1)),
    o.setClear(0, 0, 0, 1),
    c.setClear(1),
    u.setClear(0),
    ye(s.DEPTH_TEST),
    c.setFunc(Ss),
    mt(!1),
    je(td),
    ye(s.CULL_FACE),
    F(lr);
  function ye(H) {
    p[H] !== !0 && (s.enable(H), (p[H] = !0));
  }
  function Ve(H) {
    p[H] !== !1 && (s.disable(H), (p[H] = !1));
  }
  function ft(H, Me) {
    return _[H] !== Me
      ? (s.bindFramebuffer(H, Me),
        (_[H] = Me),
        H === s.DRAW_FRAMEBUFFER && (_[s.FRAMEBUFFER] = Me),
        H === s.FRAMEBUFFER && (_[s.DRAW_FRAMEBUFFER] = Me),
        !0)
      : !1;
  }
  function Ke(H, Me) {
    let ee = M,
      le = !1;
    if (H) {
      (ee = g.get(Me)), ee === void 0 && ((ee = []), g.set(Me, ee));
      const Ae = H.textures;
      if (ee.length !== Ae.length || ee[0] !== s.COLOR_ATTACHMENT0) {
        for (let Te = 0, nt = Ae.length; Te < nt; Te++)
          ee[Te] = s.COLOR_ATTACHMENT0 + Te;
        (ee.length = Ae.length), (le = !0);
      }
    } else ee[0] !== s.BACK && ((ee[0] = s.BACK), (le = !0));
    le && s.drawBuffers(ee);
  }
  function Ot(H) {
    return T !== H ? (s.useProgram(H), (T = H), !0) : !1;
  }
  const Lt = {
    [Pr]: s.FUNC_ADD,
    [zM]: s.FUNC_SUBTRACT,
    [GM]: s.FUNC_REVERSE_SUBTRACT,
  };
  (Lt[HM] = s.MIN), (Lt[VM] = s.MAX);
  const ht = {
    [kM]: s.ZERO,
    [WM]: s.ONE,
    [XM]: s.SRC_COLOR,
    [Ic]: s.SRC_ALPHA,
    [JM]: s.SRC_ALPHA_SATURATE,
    [KM]: s.DST_COLOR,
    [YM]: s.DST_ALPHA,
    [qM]: s.ONE_MINUS_SRC_COLOR,
    [Dc]: s.ONE_MINUS_SRC_ALPHA,
    [$M]: s.ONE_MINUS_DST_COLOR,
    [ZM]: s.ONE_MINUS_DST_ALPHA,
    [QM]: s.CONSTANT_COLOR,
    [jM]: s.ONE_MINUS_CONSTANT_COLOR,
    [eS]: s.CONSTANT_ALPHA,
    [tS]: s.ONE_MINUS_CONSTANT_ALPHA,
  };
  function F(H, Me, ee, le, Ae, Te, nt, Ht, Jt, At) {
    if (H === lr) {
      C === !0 && (Ve(s.BLEND), (C = !1));
      return;
    }
    if ((C === !1 && (ye(s.BLEND), (C = !0)), H !== BM)) {
      if (H !== v || At !== R) {
        if (
          ((m !== Pr || b !== Pr) &&
            (s.blendEquation(s.FUNC_ADD), (m = Pr), (b = Pr)),
          At)
        )
          switch (H) {
            case gs:
              s.blendFuncSeparate(
                s.ONE,
                s.ONE_MINUS_SRC_ALPHA,
                s.ONE,
                s.ONE_MINUS_SRC_ALPHA,
              );
              break;
            case nd:
              s.blendFunc(s.ONE, s.ONE);
              break;
            case id:
              s.blendFuncSeparate(s.ZERO, s.ONE_MINUS_SRC_COLOR, s.ZERO, s.ONE);
              break;
            case rd:
              s.blendFuncSeparate(s.ZERO, s.SRC_COLOR, s.ZERO, s.SRC_ALPHA);
              break;
            default:
              console.error("THREE.WebGLState: Invalid blending: ", H);
              break;
          }
        else
          switch (H) {
            case gs:
              s.blendFuncSeparate(
                s.SRC_ALPHA,
                s.ONE_MINUS_SRC_ALPHA,
                s.ONE,
                s.ONE_MINUS_SRC_ALPHA,
              );
              break;
            case nd:
              s.blendFunc(s.SRC_ALPHA, s.ONE);
              break;
            case id:
              s.blendFuncSeparate(s.ZERO, s.ONE_MINUS_SRC_COLOR, s.ZERO, s.ONE);
              break;
            case rd:
              s.blendFunc(s.ZERO, s.SRC_COLOR);
              break;
            default:
              console.error("THREE.WebGLState: Invalid blending: ", H);
              break;
          }
        (P = null),
          (L = null),
          (z = null),
          (N = null),
          U.set(0, 0, 0),
          (G = 0),
          (v = H),
          (R = At);
      }
      return;
    }
    (Ae = Ae || Me),
      (Te = Te || ee),
      (nt = nt || le),
      (Me !== m || Ae !== b) &&
        (s.blendEquationSeparate(Lt[Me], Lt[Ae]), (m = Me), (b = Ae)),
      (ee !== P || le !== L || Te !== z || nt !== N) &&
        (s.blendFuncSeparate(ht[ee], ht[le], ht[Te], ht[nt]),
        (P = ee),
        (L = le),
        (z = Te),
        (N = nt)),
      (Ht.equals(U) === !1 || Jt !== G) &&
        (s.blendColor(Ht.r, Ht.g, Ht.b, Jt), U.copy(Ht), (G = Jt)),
      (v = H),
      (R = !1);
  }
  function rn(H, Me) {
    H.side === zi ? Ve(s.CULL_FACE) : ye(s.CULL_FACE);
    let ee = H.side === Dn;
    Me && (ee = !ee),
      mt(ee),
      H.blending === gs && H.transparent === !1
        ? F(lr)
        : F(
            H.blending,
            H.blendEquation,
            H.blendSrc,
            H.blendDst,
            H.blendEquationAlpha,
            H.blendSrcAlpha,
            H.blendDstAlpha,
            H.blendColor,
            H.blendAlpha,
            H.premultipliedAlpha,
          ),
      c.setFunc(H.depthFunc),
      c.setTest(H.depthTest),
      c.setMask(H.depthWrite),
      o.setMask(H.colorWrite);
    const le = H.stencilWrite;
    u.setTest(le),
      le &&
        (u.setMask(H.stencilWriteMask),
        u.setFunc(H.stencilFunc, H.stencilRef, H.stencilFuncMask),
        u.setOp(H.stencilFail, H.stencilZFail, H.stencilZPass)),
      Ut(H.polygonOffset, H.polygonOffsetFactor, H.polygonOffsetUnits),
      H.alphaToCoverage === !0
        ? ye(s.SAMPLE_ALPHA_TO_COVERAGE)
        : Ve(s.SAMPLE_ALPHA_TO_COVERAGE);
  }
  function mt(H) {
    y !== H && (H ? s.frontFace(s.CW) : s.frontFace(s.CCW), (y = H));
  }
  function je(H) {
    H !== NM
      ? (ye(s.CULL_FACE),
        H !== B &&
          (H === td
            ? s.cullFace(s.BACK)
            : H === FM
              ? s.cullFace(s.FRONT)
              : s.cullFace(s.FRONT_AND_BACK)))
      : Ve(s.CULL_FACE),
      (B = H);
  }
  function ze(H) {
    H !== Q && (ne && s.lineWidth(H), (Q = H));
  }
  function Ut(H, Me, ee) {
    H
      ? (ye(s.POLYGON_OFFSET_FILL),
        ($ !== Me || ie !== ee) &&
          (s.polygonOffset(Me, ee), ($ = Me), (ie = ee)))
      : Ve(s.POLYGON_OFFSET_FILL);
  }
  function Oe(H) {
    H ? ye(s.SCISSOR_TEST) : Ve(s.SCISSOR_TEST);
  }
  function I(H) {
    H === void 0 && (H = s.TEXTURE0 + ue - 1),
      Ee !== H && (s.activeTexture(H), (Ee = H));
  }
  function S(H, Me, ee) {
    ee === void 0 && (Ee === null ? (ee = s.TEXTURE0 + ue - 1) : (ee = Ee));
    let le = we[ee];
    le === void 0 && ((le = { type: void 0, texture: void 0 }), (we[ee] = le)),
      (le.type !== H || le.texture !== Me) &&
        (Ee !== ee && (s.activeTexture(ee), (Ee = ee)),
        s.bindTexture(H, Me || Ue[H]),
        (le.type = H),
        (le.texture = Me));
  }
  function Y() {
    const H = we[Ee];
    H !== void 0 &&
      H.type !== void 0 &&
      (s.bindTexture(H.type, null), (H.type = void 0), (H.texture = void 0));
  }
  function ce() {
    try {
      s.compressedTexImage2D.apply(s, arguments);
    } catch (H) {
      console.error("THREE.WebGLState:", H);
    }
  }
  function fe() {
    try {
      s.compressedTexImage3D.apply(s, arguments);
    } catch (H) {
      console.error("THREE.WebGLState:", H);
    }
  }
  function se() {
    try {
      s.texSubImage2D.apply(s, arguments);
    } catch (H) {
      console.error("THREE.WebGLState:", H);
    }
  }
  function Ne() {
    try {
      s.texSubImage3D.apply(s, arguments);
    } catch (H) {
      console.error("THREE.WebGLState:", H);
    }
  }
  function ge() {
    try {
      s.compressedTexSubImage2D.apply(s, arguments);
    } catch (H) {
      console.error("THREE.WebGLState:", H);
    }
  }
  function be() {
    try {
      s.compressedTexSubImage3D.apply(s, arguments);
    } catch (H) {
      console.error("THREE.WebGLState:", H);
    }
  }
  function dt() {
    try {
      s.texStorage2D.apply(s, arguments);
    } catch (H) {
      console.error("THREE.WebGLState:", H);
    }
  }
  function me() {
    try {
      s.texStorage3D.apply(s, arguments);
    } catch (H) {
      console.error("THREE.WebGLState:", H);
    }
  }
  function Ce() {
    try {
      s.texImage2D.apply(s, arguments);
    } catch (H) {
      console.error("THREE.WebGLState:", H);
    }
  }
  function We() {
    try {
      s.texImage3D.apply(s, arguments);
    } catch (H) {
      console.error("THREE.WebGLState:", H);
    }
  }
  function Ze(H) {
    Ct.equals(H) === !1 && (s.scissor(H.x, H.y, H.z, H.w), Ct.copy(H));
  }
  function Pe(H) {
    oe.equals(H) === !1 && (s.viewport(H.x, H.y, H.z, H.w), oe.copy(H));
  }
  function ut(H, Me) {
    let ee = h.get(Me);
    ee === void 0 && ((ee = new WeakMap()), h.set(Me, ee));
    let le = ee.get(H);
    le === void 0 && ((le = s.getUniformBlockIndex(Me, H.name)), ee.set(H, le));
  }
  function et(H, Me) {
    const le = h.get(Me).get(H);
    d.get(Me) !== le &&
      (s.uniformBlockBinding(Me, le, H.__bindingPointIndex), d.set(Me, le));
  }
  function It() {
    s.disable(s.BLEND),
      s.disable(s.CULL_FACE),
      s.disable(s.DEPTH_TEST),
      s.disable(s.POLYGON_OFFSET_FILL),
      s.disable(s.SCISSOR_TEST),
      s.disable(s.STENCIL_TEST),
      s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),
      s.blendEquation(s.FUNC_ADD),
      s.blendFunc(s.ONE, s.ZERO),
      s.blendFuncSeparate(s.ONE, s.ZERO, s.ONE, s.ZERO),
      s.blendColor(0, 0, 0, 0),
      s.colorMask(!0, !0, !0, !0),
      s.clearColor(0, 0, 0, 0),
      s.depthMask(!0),
      s.depthFunc(s.LESS),
      c.setReversed(!1),
      s.clearDepth(1),
      s.stencilMask(4294967295),
      s.stencilFunc(s.ALWAYS, 0, 4294967295),
      s.stencilOp(s.KEEP, s.KEEP, s.KEEP),
      s.clearStencil(0),
      s.cullFace(s.BACK),
      s.frontFace(s.CCW),
      s.polygonOffset(0, 0),
      s.activeTexture(s.TEXTURE0),
      s.bindFramebuffer(s.FRAMEBUFFER, null),
      s.bindFramebuffer(s.DRAW_FRAMEBUFFER, null),
      s.bindFramebuffer(s.READ_FRAMEBUFFER, null),
      s.useProgram(null),
      s.lineWidth(1),
      s.scissor(0, 0, s.canvas.width, s.canvas.height),
      s.viewport(0, 0, s.canvas.width, s.canvas.height),
      (p = {}),
      (Ee = null),
      (we = {}),
      (_ = {}),
      (g = new WeakMap()),
      (M = []),
      (T = null),
      (C = !1),
      (v = null),
      (m = null),
      (P = null),
      (L = null),
      (b = null),
      (z = null),
      (N = null),
      (U = new Fe(0, 0, 0)),
      (G = 0),
      (R = !1),
      (y = null),
      (B = null),
      (Q = null),
      ($ = null),
      (ie = null),
      Ct.set(0, 0, s.canvas.width, s.canvas.height),
      oe.set(0, 0, s.canvas.width, s.canvas.height),
      o.reset(),
      c.reset(),
      u.reset();
  }
  return {
    buffers: { color: o, depth: c, stencil: u },
    enable: ye,
    disable: Ve,
    bindFramebuffer: ft,
    drawBuffers: Ke,
    useProgram: Ot,
    setBlending: F,
    setMaterial: rn,
    setFlipSided: mt,
    setCullFace: je,
    setLineWidth: ze,
    setPolygonOffset: Ut,
    setScissorTest: Oe,
    activeTexture: I,
    bindTexture: S,
    unbindTexture: Y,
    compressedTexImage2D: ce,
    compressedTexImage3D: fe,
    texImage2D: Ce,
    texImage3D: We,
    updateUBOMapping: ut,
    uniformBlockBinding: et,
    texStorage2D: dt,
    texStorage3D: me,
    texSubImage2D: se,
    texSubImage3D: Ne,
    compressedTexSubImage2D: ge,
    compressedTexSubImage3D: be,
    scissor: Ze,
    viewport: Pe,
    reset: It,
  };
}
function Dw(s, e, t, i, a, o, c) {
  const u = e.has("WEBGL_multisampled_render_to_texture")
      ? e.get("WEBGL_multisampled_render_to_texture")
      : null,
    d =
      typeof navigator > "u" ? !1 : /OculusBrowser/g.test(navigator.userAgent),
    h = new He(),
    p = new WeakMap();
  let _;
  const g = new WeakMap();
  let M = !1;
  try {
    M =
      typeof OffscreenCanvas < "u" &&
      new OffscreenCanvas(1, 1).getContext("2d") !== null;
  } catch {}
  function T(I, S) {
    return M ? new OffscreenCanvas(I, S) : Fo("canvas");
  }
  function C(I, S, Y) {
    let ce = 1;
    const fe = Oe(I);
    if (
      ((fe.width > Y || fe.height > Y) &&
        (ce = Y / Math.max(fe.width, fe.height)),
      ce < 1)
    )
      if (
        (typeof HTMLImageElement < "u" && I instanceof HTMLImageElement) ||
        (typeof HTMLCanvasElement < "u" && I instanceof HTMLCanvasElement) ||
        (typeof ImageBitmap < "u" && I instanceof ImageBitmap) ||
        (typeof VideoFrame < "u" && I instanceof VideoFrame)
      ) {
        const se = Math.floor(ce * fe.width),
          Ne = Math.floor(ce * fe.height);
        _ === void 0 && (_ = T(se, Ne));
        const ge = S ? T(se, Ne) : _;
        return (
          (ge.width = se),
          (ge.height = Ne),
          ge.getContext("2d").drawImage(I, 0, 0, se, Ne),
          console.warn(
            "THREE.WebGLRenderer: Texture has been resized from (" +
              fe.width +
              "x" +
              fe.height +
              ") to (" +
              se +
              "x" +
              Ne +
              ").",
          ),
          ge
        );
      } else
        return (
          "data" in I &&
            console.warn(
              "THREE.WebGLRenderer: Image in DataTexture is too big (" +
                fe.width +
                "x" +
                fe.height +
                ").",
            ),
          I
        );
    return I;
  }
  function v(I) {
    return I.generateMipmaps;
  }
  function m(I) {
    s.generateMipmap(I);
  }
  function P(I) {
    return I.isWebGLCubeRenderTarget
      ? s.TEXTURE_CUBE_MAP
      : I.isWebGL3DRenderTarget
        ? s.TEXTURE_3D
        : I.isWebGLArrayRenderTarget || I.isCompressedArrayTexture
          ? s.TEXTURE_2D_ARRAY
          : s.TEXTURE_2D;
  }
  function L(I, S, Y, ce, fe = !1) {
    if (I !== null) {
      if (s[I] !== void 0) return s[I];
      console.warn(
        "THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '" +
          I +
          "'",
      );
    }
    let se = S;
    if (
      (S === s.RED &&
        (Y === s.FLOAT && (se = s.R32F),
        Y === s.HALF_FLOAT && (se = s.R16F),
        Y === s.UNSIGNED_BYTE && (se = s.R8)),
      S === s.RED_INTEGER &&
        (Y === s.UNSIGNED_BYTE && (se = s.R8UI),
        Y === s.UNSIGNED_SHORT && (se = s.R16UI),
        Y === s.UNSIGNED_INT && (se = s.R32UI),
        Y === s.BYTE && (se = s.R8I),
        Y === s.SHORT && (se = s.R16I),
        Y === s.INT && (se = s.R32I)),
      S === s.RG &&
        (Y === s.FLOAT && (se = s.RG32F),
        Y === s.HALF_FLOAT && (se = s.RG16F),
        Y === s.UNSIGNED_BYTE && (se = s.RG8)),
      S === s.RG_INTEGER &&
        (Y === s.UNSIGNED_BYTE && (se = s.RG8UI),
        Y === s.UNSIGNED_SHORT && (se = s.RG16UI),
        Y === s.UNSIGNED_INT && (se = s.RG32UI),
        Y === s.BYTE && (se = s.RG8I),
        Y === s.SHORT && (se = s.RG16I),
        Y === s.INT && (se = s.RG32I)),
      S === s.RGB_INTEGER &&
        (Y === s.UNSIGNED_BYTE && (se = s.RGB8UI),
        Y === s.UNSIGNED_SHORT && (se = s.RGB16UI),
        Y === s.UNSIGNED_INT && (se = s.RGB32UI),
        Y === s.BYTE && (se = s.RGB8I),
        Y === s.SHORT && (se = s.RGB16I),
        Y === s.INT && (se = s.RGB32I)),
      S === s.RGBA_INTEGER &&
        (Y === s.UNSIGNED_BYTE && (se = s.RGBA8UI),
        Y === s.UNSIGNED_SHORT && (se = s.RGBA16UI),
        Y === s.UNSIGNED_INT && (se = s.RGBA32UI),
        Y === s.BYTE && (se = s.RGBA8I),
        Y === s.SHORT && (se = s.RGBA16I),
        Y === s.INT && (se = s.RGBA32I)),
      S === s.RGB && Y === s.UNSIGNED_INT_5_9_9_9_REV && (se = s.RGB9_E5),
      S === s.RGBA)
    ) {
      const Ne = fe ? Uo : Tt.getTransfer(ce);
      Y === s.FLOAT && (se = s.RGBA32F),
        Y === s.HALF_FLOAT && (se = s.RGBA16F),
        Y === s.UNSIGNED_BYTE && (se = Ne === Dt ? s.SRGB8_ALPHA8 : s.RGBA8),
        Y === s.UNSIGNED_SHORT_4_4_4_4 && (se = s.RGBA4),
        Y === s.UNSIGNED_SHORT_5_5_5_1 && (se = s.RGB5_A1);
    }
    return (
      (se === s.R16F ||
        se === s.R32F ||
        se === s.RG16F ||
        se === s.RG32F ||
        se === s.RGBA16F ||
        se === s.RGBA32F) &&
        e.get("EXT_color_buffer_float"),
      se
    );
  }
  function b(I, S) {
    let Y;
    return (
      I
        ? S === null || S === Nr || S === Ts
          ? (Y = s.DEPTH24_STENCIL8)
          : S === Gi
            ? (Y = s.DEPTH32F_STENCIL8)
            : S === aa &&
              ((Y = s.DEPTH24_STENCIL8),
              console.warn(
                "DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.",
              ))
        : S === null || S === Nr || S === Ts
          ? (Y = s.DEPTH_COMPONENT24)
          : S === Gi
            ? (Y = s.DEPTH_COMPONENT32F)
            : S === aa && (Y = s.DEPTH_COMPONENT16),
      Y
    );
  }
  function z(I, S) {
    return v(I) === !0 ||
      (I.isFramebufferTexture && I.minFilter !== di && I.minFilter !== xi)
      ? Math.log2(Math.max(S.width, S.height)) + 1
      : I.mipmaps !== void 0 && I.mipmaps.length > 0
        ? I.mipmaps.length
        : I.isCompressedTexture && Array.isArray(I.image)
          ? S.mipmaps.length
          : 1;
  }
  function N(I) {
    const S = I.target;
    S.removeEventListener("dispose", N), G(S), S.isVideoTexture && p.delete(S);
  }
  function U(I) {
    const S = I.target;
    S.removeEventListener("dispose", U), y(S);
  }
  function G(I) {
    const S = i.get(I);
    if (S.__webglInit === void 0) return;
    const Y = I.source,
      ce = g.get(Y);
    if (ce) {
      const fe = ce[S.__cacheKey];
      fe.usedTimes--,
        fe.usedTimes === 0 && R(I),
        Object.keys(ce).length === 0 && g.delete(Y);
    }
    i.remove(I);
  }
  function R(I) {
    const S = i.get(I);
    s.deleteTexture(S.__webglTexture);
    const Y = I.source,
      ce = g.get(Y);
    delete ce[S.__cacheKey], c.memory.textures--;
  }
  function y(I) {
    const S = i.get(I);
    if (
      (I.depthTexture && (I.depthTexture.dispose(), i.remove(I.depthTexture)),
      I.isWebGLCubeRenderTarget)
    )
      for (let ce = 0; ce < 6; ce++) {
        if (Array.isArray(S.__webglFramebuffer[ce]))
          for (let fe = 0; fe < S.__webglFramebuffer[ce].length; fe++)
            s.deleteFramebuffer(S.__webglFramebuffer[ce][fe]);
        else s.deleteFramebuffer(S.__webglFramebuffer[ce]);
        S.__webglDepthbuffer && s.deleteRenderbuffer(S.__webglDepthbuffer[ce]);
      }
    else {
      if (Array.isArray(S.__webglFramebuffer))
        for (let ce = 0; ce < S.__webglFramebuffer.length; ce++)
          s.deleteFramebuffer(S.__webglFramebuffer[ce]);
      else s.deleteFramebuffer(S.__webglFramebuffer);
      if (
        (S.__webglDepthbuffer && s.deleteRenderbuffer(S.__webglDepthbuffer),
        S.__webglMultisampledFramebuffer &&
          s.deleteFramebuffer(S.__webglMultisampledFramebuffer),
        S.__webglColorRenderbuffer)
      )
        for (let ce = 0; ce < S.__webglColorRenderbuffer.length; ce++)
          S.__webglColorRenderbuffer[ce] &&
            s.deleteRenderbuffer(S.__webglColorRenderbuffer[ce]);
      S.__webglDepthRenderbuffer &&
        s.deleteRenderbuffer(S.__webglDepthRenderbuffer);
    }
    const Y = I.textures;
    for (let ce = 0, fe = Y.length; ce < fe; ce++) {
      const se = i.get(Y[ce]);
      se.__webglTexture &&
        (s.deleteTexture(se.__webglTexture), c.memory.textures--),
        i.remove(Y[ce]);
    }
    i.remove(I);
  }
  let B = 0;
  function Q() {
    B = 0;
  }
  function $() {
    const I = B;
    return (
      I >= a.maxTextures &&
        console.warn(
          "THREE.WebGLTextures: Trying to use " +
            I +
            " texture units while this GPU supports only " +
            a.maxTextures,
        ),
      (B += 1),
      I
    );
  }
  function ie(I) {
    const S = [];
    return (
      S.push(I.wrapS),
      S.push(I.wrapT),
      S.push(I.wrapR || 0),
      S.push(I.magFilter),
      S.push(I.minFilter),
      S.push(I.anisotropy),
      S.push(I.internalFormat),
      S.push(I.format),
      S.push(I.type),
      S.push(I.generateMipmaps),
      S.push(I.premultiplyAlpha),
      S.push(I.flipY),
      S.push(I.unpackAlignment),
      S.push(I.colorSpace),
      S.join()
    );
  }
  function ue(I, S) {
    const Y = i.get(I);
    if (
      (I.isVideoTexture && ze(I),
      I.isRenderTargetTexture === !1 &&
        I.version > 0 &&
        Y.__version !== I.version)
    ) {
      const ce = I.image;
      if (ce === null)
        console.warn(
          "THREE.WebGLRenderer: Texture marked for update but no image data found.",
        );
      else if (ce.complete === !1)
        console.warn(
          "THREE.WebGLRenderer: Texture marked for update but image is incomplete",
        );
      else {
        oe(Y, I, S);
        return;
      }
    }
    t.bindTexture(s.TEXTURE_2D, Y.__webglTexture, s.TEXTURE0 + S);
  }
  function ne(I, S) {
    const Y = i.get(I);
    if (I.version > 0 && Y.__version !== I.version) {
      oe(Y, I, S);
      return;
    }
    t.bindTexture(s.TEXTURE_2D_ARRAY, Y.__webglTexture, s.TEXTURE0 + S);
  }
  function de(I, S) {
    const Y = i.get(I);
    if (I.version > 0 && Y.__version !== I.version) {
      oe(Y, I, S);
      return;
    }
    t.bindTexture(s.TEXTURE_3D, Y.__webglTexture, s.TEXTURE0 + S);
  }
  function j(I, S) {
    const Y = i.get(I);
    if (I.version > 0 && Y.__version !== I.version) {
      _e(Y, I, S);
      return;
    }
    t.bindTexture(s.TEXTURE_CUBE_MAP, Y.__webglTexture, s.TEXTURE0 + S);
  }
  const Ee = { [kc]: s.REPEAT, [Dr]: s.CLAMP_TO_EDGE, [Wc]: s.MIRRORED_REPEAT },
    we = {
      [di]: s.NEAREST,
      [fS]: s.NEAREST_MIPMAP_NEAREST,
      [ro]: s.NEAREST_MIPMAP_LINEAR,
      [xi]: s.LINEAR,
      [tc]: s.LINEAR_MIPMAP_NEAREST,
      [Ur]: s.LINEAR_MIPMAP_LINEAR,
    },
    De = {
      [mS]: s.NEVER,
      [SS]: s.ALWAYS,
      [_S]: s.LESS,
      [gp]: s.LEQUAL,
      [gS]: s.EQUAL,
      [MS]: s.GEQUAL,
      [vS]: s.GREATER,
      [xS]: s.NOTEQUAL,
    };
  function lt(I, S) {
    if (
      (S.type === Gi &&
        e.has("OES_texture_float_linear") === !1 &&
        (S.magFilter === xi ||
          S.magFilter === tc ||
          S.magFilter === ro ||
          S.magFilter === Ur ||
          S.minFilter === xi ||
          S.minFilter === tc ||
          S.minFilter === ro ||
          S.minFilter === Ur) &&
        console.warn(
          "THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.",
        ),
      s.texParameteri(I, s.TEXTURE_WRAP_S, Ee[S.wrapS]),
      s.texParameteri(I, s.TEXTURE_WRAP_T, Ee[S.wrapT]),
      (I === s.TEXTURE_3D || I === s.TEXTURE_2D_ARRAY) &&
        s.texParameteri(I, s.TEXTURE_WRAP_R, Ee[S.wrapR]),
      s.texParameteri(I, s.TEXTURE_MAG_FILTER, we[S.magFilter]),
      s.texParameteri(I, s.TEXTURE_MIN_FILTER, we[S.minFilter]),
      S.compareFunction &&
        (s.texParameteri(I, s.TEXTURE_COMPARE_MODE, s.COMPARE_REF_TO_TEXTURE),
        s.texParameteri(I, s.TEXTURE_COMPARE_FUNC, De[S.compareFunction])),
      e.has("EXT_texture_filter_anisotropic") === !0)
    ) {
      if (
        S.magFilter === di ||
        (S.minFilter !== ro && S.minFilter !== Ur) ||
        (S.type === Gi && e.has("OES_texture_float_linear") === !1)
      )
        return;
      if (S.anisotropy > 1 || i.get(S).__currentAnisotropy) {
        const Y = e.get("EXT_texture_filter_anisotropic");
        s.texParameterf(
          I,
          Y.TEXTURE_MAX_ANISOTROPY_EXT,
          Math.min(S.anisotropy, a.getMaxAnisotropy()),
        ),
          (i.get(S).__currentAnisotropy = S.anisotropy);
      }
    }
  }
  function Ct(I, S) {
    let Y = !1;
    I.__webglInit === void 0 &&
      ((I.__webglInit = !0), S.addEventListener("dispose", N));
    const ce = S.source;
    let fe = g.get(ce);
    fe === void 0 && ((fe = {}), g.set(ce, fe));
    const se = ie(S);
    if (se !== I.__cacheKey) {
      fe[se] === void 0 &&
        ((fe[se] = { texture: s.createTexture(), usedTimes: 0 }),
        c.memory.textures++,
        (Y = !0)),
        fe[se].usedTimes++;
      const Ne = fe[I.__cacheKey];
      Ne !== void 0 &&
        (fe[I.__cacheKey].usedTimes--, Ne.usedTimes === 0 && R(S)),
        (I.__cacheKey = se),
        (I.__webglTexture = fe[se].texture);
    }
    return Y;
  }
  function oe(I, S, Y) {
    let ce = s.TEXTURE_2D;
    (S.isDataArrayTexture || S.isCompressedArrayTexture) &&
      (ce = s.TEXTURE_2D_ARRAY),
      S.isData3DTexture && (ce = s.TEXTURE_3D);
    const fe = Ct(I, S),
      se = S.source;
    t.bindTexture(ce, I.__webglTexture, s.TEXTURE0 + Y);
    const Ne = i.get(se);
    if (se.version !== Ne.__version || fe === !0) {
      t.activeTexture(s.TEXTURE0 + Y);
      const ge = Tt.getPrimaries(Tt.workingColorSpace),
        be = S.colorSpace === or ? null : Tt.getPrimaries(S.colorSpace),
        dt =
          S.colorSpace === or || ge === be ? s.NONE : s.BROWSER_DEFAULT_WEBGL;
      s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL, S.flipY),
        s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL, S.premultiplyAlpha),
        s.pixelStorei(s.UNPACK_ALIGNMENT, S.unpackAlignment),
        s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL, dt);
      let me = C(S.image, !1, a.maxTextureSize);
      me = Ut(S, me);
      const Ce = o.convert(S.format, S.colorSpace),
        We = o.convert(S.type);
      let Ze = L(S.internalFormat, Ce, We, S.colorSpace, S.isVideoTexture);
      lt(ce, S);
      let Pe;
      const ut = S.mipmaps,
        et = S.isVideoTexture !== !0,
        It = Ne.__version === void 0 || fe === !0,
        H = se.dataReady,
        Me = z(S, me);
      if (S.isDepthTexture)
        (Ze = b(S.format === As, S.type)),
          It &&
            (et
              ? t.texStorage2D(s.TEXTURE_2D, 1, Ze, me.width, me.height)
              : t.texImage2D(
                  s.TEXTURE_2D,
                  0,
                  Ze,
                  me.width,
                  me.height,
                  0,
                  Ce,
                  We,
                  null,
                ));
      else if (S.isDataTexture)
        if (ut.length > 0) {
          et &&
            It &&
            t.texStorage2D(s.TEXTURE_2D, Me, Ze, ut[0].width, ut[0].height);
          for (let ee = 0, le = ut.length; ee < le; ee++)
            (Pe = ut[ee]),
              et
                ? H &&
                  t.texSubImage2D(
                    s.TEXTURE_2D,
                    ee,
                    0,
                    0,
                    Pe.width,
                    Pe.height,
                    Ce,
                    We,
                    Pe.data,
                  )
                : t.texImage2D(
                    s.TEXTURE_2D,
                    ee,
                    Ze,
                    Pe.width,
                    Pe.height,
                    0,
                    Ce,
                    We,
                    Pe.data,
                  );
          S.generateMipmaps = !1;
        } else
          et
            ? (It && t.texStorage2D(s.TEXTURE_2D, Me, Ze, me.width, me.height),
              H &&
                t.texSubImage2D(
                  s.TEXTURE_2D,
                  0,
                  0,
                  0,
                  me.width,
                  me.height,
                  Ce,
                  We,
                  me.data,
                ))
            : t.texImage2D(
                s.TEXTURE_2D,
                0,
                Ze,
                me.width,
                me.height,
                0,
                Ce,
                We,
                me.data,
              );
      else if (S.isCompressedTexture)
        if (S.isCompressedArrayTexture) {
          et &&
            It &&
            t.texStorage3D(
              s.TEXTURE_2D_ARRAY,
              Me,
              Ze,
              ut[0].width,
              ut[0].height,
              me.depth,
            );
          for (let ee = 0, le = ut.length; ee < le; ee++)
            if (((Pe = ut[ee]), S.format !== hi))
              if (Ce !== null)
                if (et) {
                  if (H)
                    if (S.layerUpdates.size > 0) {
                      const Ae = Ad(Pe.width, Pe.height, S.format, S.type);
                      for (const Te of S.layerUpdates) {
                        const nt = Pe.data.subarray(
                          (Te * Ae) / Pe.data.BYTES_PER_ELEMENT,
                          ((Te + 1) * Ae) / Pe.data.BYTES_PER_ELEMENT,
                        );
                        t.compressedTexSubImage3D(
                          s.TEXTURE_2D_ARRAY,
                          ee,
                          0,
                          0,
                          Te,
                          Pe.width,
                          Pe.height,
                          1,
                          Ce,
                          nt,
                        );
                      }
                      S.clearLayerUpdates();
                    } else
                      t.compressedTexSubImage3D(
                        s.TEXTURE_2D_ARRAY,
                        ee,
                        0,
                        0,
                        0,
                        Pe.width,
                        Pe.height,
                        me.depth,
                        Ce,
                        Pe.data,
                      );
                } else
                  t.compressedTexImage3D(
                    s.TEXTURE_2D_ARRAY,
                    ee,
                    Ze,
                    Pe.width,
                    Pe.height,
                    me.depth,
                    0,
                    Pe.data,
                    0,
                    0,
                  );
              else
                console.warn(
                  "THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()",
                );
            else
              et
                ? H &&
                  t.texSubImage3D(
                    s.TEXTURE_2D_ARRAY,
                    ee,
                    0,
                    0,
                    0,
                    Pe.width,
                    Pe.height,
                    me.depth,
                    Ce,
                    We,
                    Pe.data,
                  )
                : t.texImage3D(
                    s.TEXTURE_2D_ARRAY,
                    ee,
                    Ze,
                    Pe.width,
                    Pe.height,
                    me.depth,
                    0,
                    Ce,
                    We,
                    Pe.data,
                  );
        } else {
          et &&
            It &&
            t.texStorage2D(s.TEXTURE_2D, Me, Ze, ut[0].width, ut[0].height);
          for (let ee = 0, le = ut.length; ee < le; ee++)
            (Pe = ut[ee]),
              S.format !== hi
                ? Ce !== null
                  ? et
                    ? H &&
                      t.compressedTexSubImage2D(
                        s.TEXTURE_2D,
                        ee,
                        0,
                        0,
                        Pe.width,
                        Pe.height,
                        Ce,
                        Pe.data,
                      )
                    : t.compressedTexImage2D(
                        s.TEXTURE_2D,
                        ee,
                        Ze,
                        Pe.width,
                        Pe.height,
                        0,
                        Pe.data,
                      )
                  : console.warn(
                      "THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()",
                    )
                : et
                  ? H &&
                    t.texSubImage2D(
                      s.TEXTURE_2D,
                      ee,
                      0,
                      0,
                      Pe.width,
                      Pe.height,
                      Ce,
                      We,
                      Pe.data,
                    )
                  : t.texImage2D(
                      s.TEXTURE_2D,
                      ee,
                      Ze,
                      Pe.width,
                      Pe.height,
                      0,
                      Ce,
                      We,
                      Pe.data,
                    );
        }
      else if (S.isDataArrayTexture)
        if (et) {
          if (
            (It &&
              t.texStorage3D(
                s.TEXTURE_2D_ARRAY,
                Me,
                Ze,
                me.width,
                me.height,
                me.depth,
              ),
            H)
          )
            if (S.layerUpdates.size > 0) {
              const ee = Ad(me.width, me.height, S.format, S.type);
              for (const le of S.layerUpdates) {
                const Ae = me.data.subarray(
                  (le * ee) / me.data.BYTES_PER_ELEMENT,
                  ((le + 1) * ee) / me.data.BYTES_PER_ELEMENT,
                );
                t.texSubImage3D(
                  s.TEXTURE_2D_ARRAY,
                  0,
                  0,
                  0,
                  le,
                  me.width,
                  me.height,
                  1,
                  Ce,
                  We,
                  Ae,
                );
              }
              S.clearLayerUpdates();
            } else
              t.texSubImage3D(
                s.TEXTURE_2D_ARRAY,
                0,
                0,
                0,
                0,
                me.width,
                me.height,
                me.depth,
                Ce,
                We,
                me.data,
              );
        } else
          t.texImage3D(
            s.TEXTURE_2D_ARRAY,
            0,
            Ze,
            me.width,
            me.height,
            me.depth,
            0,
            Ce,
            We,
            me.data,
          );
      else if (S.isData3DTexture)
        et
          ? (It &&
              t.texStorage3D(
                s.TEXTURE_3D,
                Me,
                Ze,
                me.width,
                me.height,
                me.depth,
              ),
            H &&
              t.texSubImage3D(
                s.TEXTURE_3D,
                0,
                0,
                0,
                0,
                me.width,
                me.height,
                me.depth,
                Ce,
                We,
                me.data,
              ))
          : t.texImage3D(
              s.TEXTURE_3D,
              0,
              Ze,
              me.width,
              me.height,
              me.depth,
              0,
              Ce,
              We,
              me.data,
            );
      else if (S.isFramebufferTexture) {
        if (It)
          if (et) t.texStorage2D(s.TEXTURE_2D, Me, Ze, me.width, me.height);
          else {
            let ee = me.width,
              le = me.height;
            for (let Ae = 0; Ae < Me; Ae++)
              t.texImage2D(s.TEXTURE_2D, Ae, Ze, ee, le, 0, Ce, We, null),
                (ee >>= 1),
                (le >>= 1);
          }
      } else if (ut.length > 0) {
        if (et && It) {
          const ee = Oe(ut[0]);
          t.texStorage2D(s.TEXTURE_2D, Me, Ze, ee.width, ee.height);
        }
        for (let ee = 0, le = ut.length; ee < le; ee++)
          (Pe = ut[ee]),
            et
              ? H && t.texSubImage2D(s.TEXTURE_2D, ee, 0, 0, Ce, We, Pe)
              : t.texImage2D(s.TEXTURE_2D, ee, Ze, Ce, We, Pe);
        S.generateMipmaps = !1;
      } else if (et) {
        if (It) {
          const ee = Oe(me);
          t.texStorage2D(s.TEXTURE_2D, Me, Ze, ee.width, ee.height);
        }
        H && t.texSubImage2D(s.TEXTURE_2D, 0, 0, 0, Ce, We, me);
      } else t.texImage2D(s.TEXTURE_2D, 0, Ze, Ce, We, me);
      v(S) && m(ce), (Ne.__version = se.version), S.onUpdate && S.onUpdate(S);
    }
    I.__version = S.version;
  }
  function _e(I, S, Y) {
    if (S.image.length !== 6) return;
    const ce = Ct(I, S),
      fe = S.source;
    t.bindTexture(s.TEXTURE_CUBE_MAP, I.__webglTexture, s.TEXTURE0 + Y);
    const se = i.get(fe);
    if (fe.version !== se.__version || ce === !0) {
      t.activeTexture(s.TEXTURE0 + Y);
      const Ne = Tt.getPrimaries(Tt.workingColorSpace),
        ge = S.colorSpace === or ? null : Tt.getPrimaries(S.colorSpace),
        be =
          S.colorSpace === or || Ne === ge ? s.NONE : s.BROWSER_DEFAULT_WEBGL;
      s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL, S.flipY),
        s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL, S.premultiplyAlpha),
        s.pixelStorei(s.UNPACK_ALIGNMENT, S.unpackAlignment),
        s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL, be);
      const dt = S.isCompressedTexture || S.image[0].isCompressedTexture,
        me = S.image[0] && S.image[0].isDataTexture,
        Ce = [];
      for (let le = 0; le < 6; le++)
        !dt && !me
          ? (Ce[le] = C(S.image[le], !0, a.maxCubemapSize))
          : (Ce[le] = me ? S.image[le].image : S.image[le]),
          (Ce[le] = Ut(S, Ce[le]));
      const We = Ce[0],
        Ze = o.convert(S.format, S.colorSpace),
        Pe = o.convert(S.type),
        ut = L(S.internalFormat, Ze, Pe, S.colorSpace),
        et = S.isVideoTexture !== !0,
        It = se.__version === void 0 || ce === !0,
        H = fe.dataReady;
      let Me = z(S, We);
      lt(s.TEXTURE_CUBE_MAP, S);
      let ee;
      if (dt) {
        et &&
          It &&
          t.texStorage2D(s.TEXTURE_CUBE_MAP, Me, ut, We.width, We.height);
        for (let le = 0; le < 6; le++) {
          ee = Ce[le].mipmaps;
          for (let Ae = 0; Ae < ee.length; Ae++) {
            const Te = ee[Ae];
            S.format !== hi
              ? Ze !== null
                ? et
                  ? H &&
                    t.compressedTexSubImage2D(
                      s.TEXTURE_CUBE_MAP_POSITIVE_X + le,
                      Ae,
                      0,
                      0,
                      Te.width,
                      Te.height,
                      Ze,
                      Te.data,
                    )
                  : t.compressedTexImage2D(
                      s.TEXTURE_CUBE_MAP_POSITIVE_X + le,
                      Ae,
                      ut,
                      Te.width,
                      Te.height,
                      0,
                      Te.data,
                    )
                : console.warn(
                    "THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()",
                  )
              : et
                ? H &&
                  t.texSubImage2D(
                    s.TEXTURE_CUBE_MAP_POSITIVE_X + le,
                    Ae,
                    0,
                    0,
                    Te.width,
                    Te.height,
                    Ze,
                    Pe,
                    Te.data,
                  )
                : t.texImage2D(
                    s.TEXTURE_CUBE_MAP_POSITIVE_X + le,
                    Ae,
                    ut,
                    Te.width,
                    Te.height,
                    0,
                    Ze,
                    Pe,
                    Te.data,
                  );
          }
        }
      } else {
        if (((ee = S.mipmaps), et && It)) {
          ee.length > 0 && Me++;
          const le = Oe(Ce[0]);
          t.texStorage2D(s.TEXTURE_CUBE_MAP, Me, ut, le.width, le.height);
        }
        for (let le = 0; le < 6; le++)
          if (me) {
            et
              ? H &&
                t.texSubImage2D(
                  s.TEXTURE_CUBE_MAP_POSITIVE_X + le,
                  0,
                  0,
                  0,
                  Ce[le].width,
                  Ce[le].height,
                  Ze,
                  Pe,
                  Ce[le].data,
                )
              : t.texImage2D(
                  s.TEXTURE_CUBE_MAP_POSITIVE_X + le,
                  0,
                  ut,
                  Ce[le].width,
                  Ce[le].height,
                  0,
                  Ze,
                  Pe,
                  Ce[le].data,
                );
            for (let Ae = 0; Ae < ee.length; Ae++) {
              const nt = ee[Ae].image[le].image;
              et
                ? H &&
                  t.texSubImage2D(
                    s.TEXTURE_CUBE_MAP_POSITIVE_X + le,
                    Ae + 1,
                    0,
                    0,
                    nt.width,
                    nt.height,
                    Ze,
                    Pe,
                    nt.data,
                  )
                : t.texImage2D(
                    s.TEXTURE_CUBE_MAP_POSITIVE_X + le,
                    Ae + 1,
                    ut,
                    nt.width,
                    nt.height,
                    0,
                    Ze,
                    Pe,
                    nt.data,
                  );
            }
          } else {
            et
              ? H &&
                t.texSubImage2D(
                  s.TEXTURE_CUBE_MAP_POSITIVE_X + le,
                  0,
                  0,
                  0,
                  Ze,
                  Pe,
                  Ce[le],
                )
              : t.texImage2D(
                  s.TEXTURE_CUBE_MAP_POSITIVE_X + le,
                  0,
                  ut,
                  Ze,
                  Pe,
                  Ce[le],
                );
            for (let Ae = 0; Ae < ee.length; Ae++) {
              const Te = ee[Ae];
              et
                ? H &&
                  t.texSubImage2D(
                    s.TEXTURE_CUBE_MAP_POSITIVE_X + le,
                    Ae + 1,
                    0,
                    0,
                    Ze,
                    Pe,
                    Te.image[le],
                  )
                : t.texImage2D(
                    s.TEXTURE_CUBE_MAP_POSITIVE_X + le,
                    Ae + 1,
                    ut,
                    Ze,
                    Pe,
                    Te.image[le],
                  );
            }
          }
      }
      v(S) && m(s.TEXTURE_CUBE_MAP),
        (se.__version = fe.version),
        S.onUpdate && S.onUpdate(S);
    }
    I.__version = S.version;
  }
  function Ue(I, S, Y, ce, fe, se) {
    const Ne = o.convert(Y.format, Y.colorSpace),
      ge = o.convert(Y.type),
      be = L(Y.internalFormat, Ne, ge, Y.colorSpace),
      dt = i.get(S),
      me = i.get(Y);
    if (((me.__renderTarget = S), !dt.__hasExternalTextures)) {
      const Ce = Math.max(1, S.width >> se),
        We = Math.max(1, S.height >> se);
      fe === s.TEXTURE_3D || fe === s.TEXTURE_2D_ARRAY
        ? t.texImage3D(fe, se, be, Ce, We, S.depth, 0, Ne, ge, null)
        : t.texImage2D(fe, se, be, Ce, We, 0, Ne, ge, null);
    }
    t.bindFramebuffer(s.FRAMEBUFFER, I),
      je(S)
        ? u.framebufferTexture2DMultisampleEXT(
            s.FRAMEBUFFER,
            ce,
            fe,
            me.__webglTexture,
            0,
            mt(S),
          )
        : (fe === s.TEXTURE_2D ||
            (fe >= s.TEXTURE_CUBE_MAP_POSITIVE_X &&
              fe <= s.TEXTURE_CUBE_MAP_NEGATIVE_Z)) &&
          s.framebufferTexture2D(s.FRAMEBUFFER, ce, fe, me.__webglTexture, se),
      t.bindFramebuffer(s.FRAMEBUFFER, null);
  }
  function ye(I, S, Y) {
    if ((s.bindRenderbuffer(s.RENDERBUFFER, I), S.depthBuffer)) {
      const ce = S.depthTexture,
        fe = ce && ce.isDepthTexture ? ce.type : null,
        se = b(S.stencilBuffer, fe),
        Ne = S.stencilBuffer ? s.DEPTH_STENCIL_ATTACHMENT : s.DEPTH_ATTACHMENT,
        ge = mt(S);
      je(S)
        ? u.renderbufferStorageMultisampleEXT(
            s.RENDERBUFFER,
            ge,
            se,
            S.width,
            S.height,
          )
        : Y
          ? s.renderbufferStorageMultisample(
              s.RENDERBUFFER,
              ge,
              se,
              S.width,
              S.height,
            )
          : s.renderbufferStorage(s.RENDERBUFFER, se, S.width, S.height),
        s.framebufferRenderbuffer(s.FRAMEBUFFER, Ne, s.RENDERBUFFER, I);
    } else {
      const ce = S.textures;
      for (let fe = 0; fe < ce.length; fe++) {
        const se = ce[fe],
          Ne = o.convert(se.format, se.colorSpace),
          ge = o.convert(se.type),
          be = L(se.internalFormat, Ne, ge, se.colorSpace),
          dt = mt(S);
        Y && je(S) === !1
          ? s.renderbufferStorageMultisample(
              s.RENDERBUFFER,
              dt,
              be,
              S.width,
              S.height,
            )
          : je(S)
            ? u.renderbufferStorageMultisampleEXT(
                s.RENDERBUFFER,
                dt,
                be,
                S.width,
                S.height,
              )
            : s.renderbufferStorage(s.RENDERBUFFER, be, S.width, S.height);
      }
    }
    s.bindRenderbuffer(s.RENDERBUFFER, null);
  }
  function Ve(I, S) {
    if (S && S.isWebGLCubeRenderTarget)
      throw new Error(
        "Depth Texture with cube render targets is not supported",
      );
    if (
      (t.bindFramebuffer(s.FRAMEBUFFER, I),
      !(S.depthTexture && S.depthTexture.isDepthTexture))
    )
      throw new Error(
        "renderTarget.depthTexture must be an instance of THREE.DepthTexture",
      );
    const ce = i.get(S.depthTexture);
    (ce.__renderTarget = S),
      (!ce.__webglTexture ||
        S.depthTexture.image.width !== S.width ||
        S.depthTexture.image.height !== S.height) &&
        ((S.depthTexture.image.width = S.width),
        (S.depthTexture.image.height = S.height),
        (S.depthTexture.needsUpdate = !0)),
      ue(S.depthTexture, 0);
    const fe = ce.__webglTexture,
      se = mt(S);
    if (S.depthTexture.format === vs)
      je(S)
        ? u.framebufferTexture2DMultisampleEXT(
            s.FRAMEBUFFER,
            s.DEPTH_ATTACHMENT,
            s.TEXTURE_2D,
            fe,
            0,
            se,
          )
        : s.framebufferTexture2D(
            s.FRAMEBUFFER,
            s.DEPTH_ATTACHMENT,
            s.TEXTURE_2D,
            fe,
            0,
          );
    else if (S.depthTexture.format === As)
      je(S)
        ? u.framebufferTexture2DMultisampleEXT(
            s.FRAMEBUFFER,
            s.DEPTH_STENCIL_ATTACHMENT,
            s.TEXTURE_2D,
            fe,
            0,
            se,
          )
        : s.framebufferTexture2D(
            s.FRAMEBUFFER,
            s.DEPTH_STENCIL_ATTACHMENT,
            s.TEXTURE_2D,
            fe,
            0,
          );
    else throw new Error("Unknown depthTexture format");
  }
  function ft(I) {
    const S = i.get(I),
      Y = I.isWebGLCubeRenderTarget === !0;
    if (S.__boundDepthTexture !== I.depthTexture) {
      const ce = I.depthTexture;
      if ((S.__depthDisposeCallback && S.__depthDisposeCallback(), ce)) {
        const fe = () => {
          delete S.__boundDepthTexture,
            delete S.__depthDisposeCallback,
            ce.removeEventListener("dispose", fe);
        };
        ce.addEventListener("dispose", fe), (S.__depthDisposeCallback = fe);
      }
      S.__boundDepthTexture = ce;
    }
    if (I.depthTexture && !S.__autoAllocateDepthBuffer) {
      if (Y)
        throw new Error(
          "target.depthTexture not supported in Cube render targets",
        );
      Ve(S.__webglFramebuffer, I);
    } else if (Y) {
      S.__webglDepthbuffer = [];
      for (let ce = 0; ce < 6; ce++)
        if (
          (t.bindFramebuffer(s.FRAMEBUFFER, S.__webglFramebuffer[ce]),
          S.__webglDepthbuffer[ce] === void 0)
        )
          (S.__webglDepthbuffer[ce] = s.createRenderbuffer()),
            ye(S.__webglDepthbuffer[ce], I, !1);
        else {
          const fe = I.stencilBuffer
              ? s.DEPTH_STENCIL_ATTACHMENT
              : s.DEPTH_ATTACHMENT,
            se = S.__webglDepthbuffer[ce];
          s.bindRenderbuffer(s.RENDERBUFFER, se),
            s.framebufferRenderbuffer(s.FRAMEBUFFER, fe, s.RENDERBUFFER, se);
        }
    } else if (
      (t.bindFramebuffer(s.FRAMEBUFFER, S.__webglFramebuffer),
      S.__webglDepthbuffer === void 0)
    )
      (S.__webglDepthbuffer = s.createRenderbuffer()),
        ye(S.__webglDepthbuffer, I, !1);
    else {
      const ce = I.stencilBuffer
          ? s.DEPTH_STENCIL_ATTACHMENT
          : s.DEPTH_ATTACHMENT,
        fe = S.__webglDepthbuffer;
      s.bindRenderbuffer(s.RENDERBUFFER, fe),
        s.framebufferRenderbuffer(s.FRAMEBUFFER, ce, s.RENDERBUFFER, fe);
    }
    t.bindFramebuffer(s.FRAMEBUFFER, null);
  }
  function Ke(I, S, Y) {
    const ce = i.get(I);
    S !== void 0 &&
      Ue(
        ce.__webglFramebuffer,
        I,
        I.texture,
        s.COLOR_ATTACHMENT0,
        s.TEXTURE_2D,
        0,
      ),
      Y !== void 0 && ft(I);
  }
  function Ot(I) {
    const S = I.texture,
      Y = i.get(I),
      ce = i.get(S);
    I.addEventListener("dispose", U);
    const fe = I.textures,
      se = I.isWebGLCubeRenderTarget === !0,
      Ne = fe.length > 1;
    if (
      (Ne ||
        (ce.__webglTexture === void 0 &&
          (ce.__webglTexture = s.createTexture()),
        (ce.__version = S.version),
        c.memory.textures++),
      se)
    ) {
      Y.__webglFramebuffer = [];
      for (let ge = 0; ge < 6; ge++)
        if (S.mipmaps && S.mipmaps.length > 0) {
          Y.__webglFramebuffer[ge] = [];
          for (let be = 0; be < S.mipmaps.length; be++)
            Y.__webglFramebuffer[ge][be] = s.createFramebuffer();
        } else Y.__webglFramebuffer[ge] = s.createFramebuffer();
    } else {
      if (S.mipmaps && S.mipmaps.length > 0) {
        Y.__webglFramebuffer = [];
        for (let ge = 0; ge < S.mipmaps.length; ge++)
          Y.__webglFramebuffer[ge] = s.createFramebuffer();
      } else Y.__webglFramebuffer = s.createFramebuffer();
      if (Ne)
        for (let ge = 0, be = fe.length; ge < be; ge++) {
          const dt = i.get(fe[ge]);
          dt.__webglTexture === void 0 &&
            ((dt.__webglTexture = s.createTexture()), c.memory.textures++);
        }
      if (I.samples > 0 && je(I) === !1) {
        (Y.__webglMultisampledFramebuffer = s.createFramebuffer()),
          (Y.__webglColorRenderbuffer = []),
          t.bindFramebuffer(s.FRAMEBUFFER, Y.__webglMultisampledFramebuffer);
        for (let ge = 0; ge < fe.length; ge++) {
          const be = fe[ge];
          (Y.__webglColorRenderbuffer[ge] = s.createRenderbuffer()),
            s.bindRenderbuffer(s.RENDERBUFFER, Y.__webglColorRenderbuffer[ge]);
          const dt = o.convert(be.format, be.colorSpace),
            me = o.convert(be.type),
            Ce = L(
              be.internalFormat,
              dt,
              me,
              be.colorSpace,
              I.isXRRenderTarget === !0,
            ),
            We = mt(I);
          s.renderbufferStorageMultisample(
            s.RENDERBUFFER,
            We,
            Ce,
            I.width,
            I.height,
          ),
            s.framebufferRenderbuffer(
              s.FRAMEBUFFER,
              s.COLOR_ATTACHMENT0 + ge,
              s.RENDERBUFFER,
              Y.__webglColorRenderbuffer[ge],
            );
        }
        s.bindRenderbuffer(s.RENDERBUFFER, null),
          I.depthBuffer &&
            ((Y.__webglDepthRenderbuffer = s.createRenderbuffer()),
            ye(Y.__webglDepthRenderbuffer, I, !0)),
          t.bindFramebuffer(s.FRAMEBUFFER, null);
      }
    }
    if (se) {
      t.bindTexture(s.TEXTURE_CUBE_MAP, ce.__webglTexture),
        lt(s.TEXTURE_CUBE_MAP, S);
      for (let ge = 0; ge < 6; ge++)
        if (S.mipmaps && S.mipmaps.length > 0)
          for (let be = 0; be < S.mipmaps.length; be++)
            Ue(
              Y.__webglFramebuffer[ge][be],
              I,
              S,
              s.COLOR_ATTACHMENT0,
              s.TEXTURE_CUBE_MAP_POSITIVE_X + ge,
              be,
            );
        else
          Ue(
            Y.__webglFramebuffer[ge],
            I,
            S,
            s.COLOR_ATTACHMENT0,
            s.TEXTURE_CUBE_MAP_POSITIVE_X + ge,
            0,
          );
      v(S) && m(s.TEXTURE_CUBE_MAP), t.unbindTexture();
    } else if (Ne) {
      for (let ge = 0, be = fe.length; ge < be; ge++) {
        const dt = fe[ge],
          me = i.get(dt);
        t.bindTexture(s.TEXTURE_2D, me.__webglTexture),
          lt(s.TEXTURE_2D, dt),
          Ue(
            Y.__webglFramebuffer,
            I,
            dt,
            s.COLOR_ATTACHMENT0 + ge,
            s.TEXTURE_2D,
            0,
          ),
          v(dt) && m(s.TEXTURE_2D);
      }
      t.unbindTexture();
    } else {
      let ge = s.TEXTURE_2D;
      if (
        ((I.isWebGL3DRenderTarget || I.isWebGLArrayRenderTarget) &&
          (ge = I.isWebGL3DRenderTarget ? s.TEXTURE_3D : s.TEXTURE_2D_ARRAY),
        t.bindTexture(ge, ce.__webglTexture),
        lt(ge, S),
        S.mipmaps && S.mipmaps.length > 0)
      )
        for (let be = 0; be < S.mipmaps.length; be++)
          Ue(Y.__webglFramebuffer[be], I, S, s.COLOR_ATTACHMENT0, ge, be);
      else Ue(Y.__webglFramebuffer, I, S, s.COLOR_ATTACHMENT0, ge, 0);
      v(S) && m(ge), t.unbindTexture();
    }
    I.depthBuffer && ft(I);
  }
  function Lt(I) {
    const S = I.textures;
    for (let Y = 0, ce = S.length; Y < ce; Y++) {
      const fe = S[Y];
      if (v(fe)) {
        const se = P(I),
          Ne = i.get(fe).__webglTexture;
        t.bindTexture(se, Ne), m(se), t.unbindTexture();
      }
    }
  }
  const ht = [],
    F = [];
  function rn(I) {
    if (I.samples > 0) {
      if (je(I) === !1) {
        const S = I.textures,
          Y = I.width,
          ce = I.height;
        let fe = s.COLOR_BUFFER_BIT;
        const se = I.stencilBuffer
            ? s.DEPTH_STENCIL_ATTACHMENT
            : s.DEPTH_ATTACHMENT,
          Ne = i.get(I),
          ge = S.length > 1;
        if (ge)
          for (let be = 0; be < S.length; be++)
            t.bindFramebuffer(s.FRAMEBUFFER, Ne.__webglMultisampledFramebuffer),
              s.framebufferRenderbuffer(
                s.FRAMEBUFFER,
                s.COLOR_ATTACHMENT0 + be,
                s.RENDERBUFFER,
                null,
              ),
              t.bindFramebuffer(s.FRAMEBUFFER, Ne.__webglFramebuffer),
              s.framebufferTexture2D(
                s.DRAW_FRAMEBUFFER,
                s.COLOR_ATTACHMENT0 + be,
                s.TEXTURE_2D,
                null,
                0,
              );
        t.bindFramebuffer(
          s.READ_FRAMEBUFFER,
          Ne.__webglMultisampledFramebuffer,
        ),
          t.bindFramebuffer(s.DRAW_FRAMEBUFFER, Ne.__webglFramebuffer);
        for (let be = 0; be < S.length; be++) {
          if (
            (I.resolveDepthBuffer &&
              (I.depthBuffer && (fe |= s.DEPTH_BUFFER_BIT),
              I.stencilBuffer &&
                I.resolveStencilBuffer &&
                (fe |= s.STENCIL_BUFFER_BIT)),
            ge)
          ) {
            s.framebufferRenderbuffer(
              s.READ_FRAMEBUFFER,
              s.COLOR_ATTACHMENT0,
              s.RENDERBUFFER,
              Ne.__webglColorRenderbuffer[be],
            );
            const dt = i.get(S[be]).__webglTexture;
            s.framebufferTexture2D(
              s.DRAW_FRAMEBUFFER,
              s.COLOR_ATTACHMENT0,
              s.TEXTURE_2D,
              dt,
              0,
            );
          }
          s.blitFramebuffer(0, 0, Y, ce, 0, 0, Y, ce, fe, s.NEAREST),
            d === !0 &&
              ((ht.length = 0),
              (F.length = 0),
              ht.push(s.COLOR_ATTACHMENT0 + be),
              I.depthBuffer &&
                I.resolveDepthBuffer === !1 &&
                (ht.push(se),
                F.push(se),
                s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER, F)),
              s.invalidateFramebuffer(s.READ_FRAMEBUFFER, ht));
        }
        if (
          (t.bindFramebuffer(s.READ_FRAMEBUFFER, null),
          t.bindFramebuffer(s.DRAW_FRAMEBUFFER, null),
          ge)
        )
          for (let be = 0; be < S.length; be++) {
            t.bindFramebuffer(s.FRAMEBUFFER, Ne.__webglMultisampledFramebuffer),
              s.framebufferRenderbuffer(
                s.FRAMEBUFFER,
                s.COLOR_ATTACHMENT0 + be,
                s.RENDERBUFFER,
                Ne.__webglColorRenderbuffer[be],
              );
            const dt = i.get(S[be]).__webglTexture;
            t.bindFramebuffer(s.FRAMEBUFFER, Ne.__webglFramebuffer),
              s.framebufferTexture2D(
                s.DRAW_FRAMEBUFFER,
                s.COLOR_ATTACHMENT0 + be,
                s.TEXTURE_2D,
                dt,
                0,
              );
          }
        t.bindFramebuffer(
          s.DRAW_FRAMEBUFFER,
          Ne.__webglMultisampledFramebuffer,
        );
      } else if (I.depthBuffer && I.resolveDepthBuffer === !1 && d) {
        const S = I.stencilBuffer
          ? s.DEPTH_STENCIL_ATTACHMENT
          : s.DEPTH_ATTACHMENT;
        s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER, [S]);
      }
    }
  }
  function mt(I) {
    return Math.min(a.maxSamples, I.samples);
  }
  function je(I) {
    const S = i.get(I);
    return (
      I.samples > 0 &&
      e.has("WEBGL_multisampled_render_to_texture") === !0 &&
      S.__useRenderToTexture !== !1
    );
  }
  function ze(I) {
    const S = c.render.frame;
    p.get(I) !== S && (p.set(I, S), I.update());
  }
  function Ut(I, S) {
    const Y = I.colorSpace,
      ce = I.format,
      fe = I.type;
    return (
      I.isCompressedTexture === !0 ||
        I.isVideoTexture === !0 ||
        (Y !== ws &&
          Y !== or &&
          (Tt.getTransfer(Y) === Dt
            ? (ce !== hi || fe !== Wi) &&
              console.warn(
                "THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.",
              )
            : console.error(
                "THREE.WebGLTextures: Unsupported texture color space:",
                Y,
              ))),
      S
    );
  }
  function Oe(I) {
    return (
      typeof HTMLImageElement < "u" && I instanceof HTMLImageElement
        ? ((h.width = I.naturalWidth || I.width),
          (h.height = I.naturalHeight || I.height))
        : typeof VideoFrame < "u" && I instanceof VideoFrame
          ? ((h.width = I.displayWidth), (h.height = I.displayHeight))
          : ((h.width = I.width), (h.height = I.height)),
      h
    );
  }
  (this.allocateTextureUnit = $),
    (this.resetTextureUnits = Q),
    (this.setTexture2D = ue),
    (this.setTexture2DArray = ne),
    (this.setTexture3D = de),
    (this.setTextureCube = j),
    (this.rebindTextures = Ke),
    (this.setupRenderTarget = Ot),
    (this.updateRenderTargetMipmap = Lt),
    (this.updateMultisampleRenderTarget = rn),
    (this.setupDepthRenderbuffer = ft),
    (this.setupFrameBufferTexture = Ue),
    (this.useMultisampledRTT = je);
}
function Uw(s, e) {
  function t(i, a = or) {
    let o;
    const c = Tt.getTransfer(a);
    if (i === Wi) return s.UNSIGNED_BYTE;
    if (i === Au) return s.UNSIGNED_SHORT_4_4_4_4;
    if (i === wu) return s.UNSIGNED_SHORT_5_5_5_1;
    if (i === lp) return s.UNSIGNED_INT_5_9_9_9_REV;
    if (i === ap) return s.BYTE;
    if (i === op) return s.SHORT;
    if (i === aa) return s.UNSIGNED_SHORT;
    if (i === Tu) return s.INT;
    if (i === Nr) return s.UNSIGNED_INT;
    if (i === Gi) return s.FLOAT;
    if (i === oa) return s.HALF_FLOAT;
    if (i === cp) return s.ALPHA;
    if (i === up) return s.RGB;
    if (i === hi) return s.RGBA;
    if (i === fp) return s.LUMINANCE;
    if (i === hp) return s.LUMINANCE_ALPHA;
    if (i === vs) return s.DEPTH_COMPONENT;
    if (i === As) return s.DEPTH_STENCIL;
    if (i === dp) return s.RED;
    if (i === bu) return s.RED_INTEGER;
    if (i === pp) return s.RG;
    if (i === Ru) return s.RG_INTEGER;
    if (i === Cu) return s.RGBA_INTEGER;
    if (i === Ro || i === Co || i === Po || i === Lo)
      if (c === Dt)
        if (((o = e.get("WEBGL_compressed_texture_s3tc_srgb")), o !== null)) {
          if (i === Ro) return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;
          if (i === Co) return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;
          if (i === Po) return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;
          if (i === Lo) return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT;
        } else return null;
      else if (((o = e.get("WEBGL_compressed_texture_s3tc")), o !== null)) {
        if (i === Ro) return o.COMPRESSED_RGB_S3TC_DXT1_EXT;
        if (i === Co) return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;
        if (i === Po) return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;
        if (i === Lo) return o.COMPRESSED_RGBA_S3TC_DXT5_EXT;
      } else return null;
    if (i === Xc || i === qc || i === Yc || i === Zc)
      if (((o = e.get("WEBGL_compressed_texture_pvrtc")), o !== null)) {
        if (i === Xc) return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
        if (i === qc) return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
        if (i === Yc) return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
        if (i === Zc) return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
      } else return null;
    if (i === Kc || i === $c || i === Jc)
      if (((o = e.get("WEBGL_compressed_texture_etc")), o !== null)) {
        if (i === Kc || i === $c)
          return c === Dt ? o.COMPRESSED_SRGB8_ETC2 : o.COMPRESSED_RGB8_ETC2;
        if (i === Jc)
          return c === Dt
            ? o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC
            : o.COMPRESSED_RGBA8_ETC2_EAC;
      } else return null;
    if (
      i === Qc ||
      i === jc ||
      i === eu ||
      i === tu ||
      i === nu ||
      i === iu ||
      i === ru ||
      i === su ||
      i === au ||
      i === ou ||
      i === lu ||
      i === cu ||
      i === uu ||
      i === fu
    )
      if (((o = e.get("WEBGL_compressed_texture_astc")), o !== null)) {
        if (i === Qc)
          return c === Dt
            ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR
            : o.COMPRESSED_RGBA_ASTC_4x4_KHR;
        if (i === jc)
          return c === Dt
            ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR
            : o.COMPRESSED_RGBA_ASTC_5x4_KHR;
        if (i === eu)
          return c === Dt
            ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR
            : o.COMPRESSED_RGBA_ASTC_5x5_KHR;
        if (i === tu)
          return c === Dt
            ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR
            : o.COMPRESSED_RGBA_ASTC_6x5_KHR;
        if (i === nu)
          return c === Dt
            ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR
            : o.COMPRESSED_RGBA_ASTC_6x6_KHR;
        if (i === iu)
          return c === Dt
            ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR
            : o.COMPRESSED_RGBA_ASTC_8x5_KHR;
        if (i === ru)
          return c === Dt
            ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR
            : o.COMPRESSED_RGBA_ASTC_8x6_KHR;
        if (i === su)
          return c === Dt
            ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR
            : o.COMPRESSED_RGBA_ASTC_8x8_KHR;
        if (i === au)
          return c === Dt
            ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR
            : o.COMPRESSED_RGBA_ASTC_10x5_KHR;
        if (i === ou)
          return c === Dt
            ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR
            : o.COMPRESSED_RGBA_ASTC_10x6_KHR;
        if (i === lu)
          return c === Dt
            ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR
            : o.COMPRESSED_RGBA_ASTC_10x8_KHR;
        if (i === cu)
          return c === Dt
            ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR
            : o.COMPRESSED_RGBA_ASTC_10x10_KHR;
        if (i === uu)
          return c === Dt
            ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR
            : o.COMPRESSED_RGBA_ASTC_12x10_KHR;
        if (i === fu)
          return c === Dt
            ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR
            : o.COMPRESSED_RGBA_ASTC_12x12_KHR;
      } else return null;
    if (i === Io || i === hu || i === du)
      if (((o = e.get("EXT_texture_compression_bptc")), o !== null)) {
        if (i === Io)
          return c === Dt
            ? o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT
            : o.COMPRESSED_RGBA_BPTC_UNORM_EXT;
        if (i === hu) return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;
        if (i === du) return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT;
      } else return null;
    if (i === mp || i === pu || i === mu || i === _u)
      if (((o = e.get("EXT_texture_compression_rgtc")), o !== null)) {
        if (i === Io) return o.COMPRESSED_RED_RGTC1_EXT;
        if (i === pu) return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;
        if (i === mu) return o.COMPRESSED_RED_GREEN_RGTC2_EXT;
        if (i === _u) return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT;
      } else return null;
    return i === Ts ? s.UNSIGNED_INT_24_8 : s[i] !== void 0 ? s[i] : null;
  }
  return { convert: t };
}
const Nw = `
void main() {

	gl_Position = vec4( position, 1.0 );

}`,
  Fw = `
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;
class Ow {
  constructor() {
    (this.texture = null),
      (this.mesh = null),
      (this.depthNear = 0),
      (this.depthFar = 0);
  }
  init(e, t, i) {
    if (this.texture === null) {
      const a = new Un(),
        o = e.properties.get(a);
      (o.__webglTexture = t.texture),
        (t.depthNear !== i.depthNear || t.depthFar !== i.depthFar) &&
          ((this.depthNear = t.depthNear), (this.depthFar = t.depthFar)),
        (this.texture = a);
    }
  }
  getMesh(e) {
    if (this.texture !== null && this.mesh === null) {
      const t = e.cameras[0].viewport,
        i = new fr({
          vertexShader: Nw,
          fragmentShader: Fw,
          uniforms: {
            depthColor: { value: this.texture },
            depthWidth: { value: t.z },
            depthHeight: { value: t.w },
          },
        });
      this.mesh = new Tn(new Ho(20, 20), i);
    }
    return this.mesh;
  }
  reset() {
    (this.texture = null), (this.mesh = null);
  }
  getDepthTexture() {
    return this.texture;
  }
}
class Bw extends Rs {
  constructor(e, t) {
    super();
    const i = this;
    let a = null,
      o = 1,
      c = null,
      u = "local-floor",
      d = 1,
      h = null,
      p = null,
      _ = null,
      g = null,
      M = null,
      T = null;
    const C = new Ow(),
      v = t.getContextAttributes();
    let m = null,
      P = null;
    const L = [],
      b = [],
      z = new He();
    let N = null;
    const U = new ti();
    U.viewport = new Zt();
    const G = new ti();
    G.viewport = new Zt();
    const R = [U, G],
      y = new aE();
    let B = null,
      Q = null;
    (this.cameraAutoUpdate = !0),
      (this.enabled = !1),
      (this.isPresenting = !1),
      (this.getController = function (oe) {
        let _e = L[oe];
        return (
          _e === void 0 && ((_e = new yc()), (L[oe] = _e)),
          _e.getTargetRaySpace()
        );
      }),
      (this.getControllerGrip = function (oe) {
        let _e = L[oe];
        return (
          _e === void 0 && ((_e = new yc()), (L[oe] = _e)), _e.getGripSpace()
        );
      }),
      (this.getHand = function (oe) {
        let _e = L[oe];
        return (
          _e === void 0 && ((_e = new yc()), (L[oe] = _e)), _e.getHandSpace()
        );
      });
    function $(oe) {
      const _e = b.indexOf(oe.inputSource);
      if (_e === -1) return;
      const Ue = L[_e];
      Ue !== void 0 &&
        (Ue.update(oe.inputSource, oe.frame, h || c),
        Ue.dispatchEvent({ type: oe.type, data: oe.inputSource }));
    }
    function ie() {
      a.removeEventListener("select", $),
        a.removeEventListener("selectstart", $),
        a.removeEventListener("selectend", $),
        a.removeEventListener("squeeze", $),
        a.removeEventListener("squeezestart", $),
        a.removeEventListener("squeezeend", $),
        a.removeEventListener("end", ie),
        a.removeEventListener("inputsourceschange", ue);
      for (let oe = 0; oe < L.length; oe++) {
        const _e = b[oe];
        _e !== null && ((b[oe] = null), L[oe].disconnect(_e));
      }
      (B = null),
        (Q = null),
        C.reset(),
        e.setRenderTarget(m),
        (M = null),
        (g = null),
        (_ = null),
        (a = null),
        (P = null),
        Ct.stop(),
        (i.isPresenting = !1),
        e.setPixelRatio(N),
        e.setSize(z.width, z.height, !1),
        i.dispatchEvent({ type: "sessionend" });
    }
    (this.setFramebufferScaleFactor = function (oe) {
      (o = oe),
        i.isPresenting === !0 &&
          console.warn(
            "THREE.WebXRManager: Cannot change framebuffer scale while presenting.",
          );
    }),
      (this.setReferenceSpaceType = function (oe) {
        (u = oe),
          i.isPresenting === !0 &&
            console.warn(
              "THREE.WebXRManager: Cannot change reference space type while presenting.",
            );
      }),
      (this.getReferenceSpace = function () {
        return h || c;
      }),
      (this.setReferenceSpace = function (oe) {
        h = oe;
      }),
      (this.getBaseLayer = function () {
        return g !== null ? g : M;
      }),
      (this.getBinding = function () {
        return _;
      }),
      (this.getFrame = function () {
        return T;
      }),
      (this.getSession = function () {
        return a;
      }),
      (this.setSession = async function (oe) {
        if (((a = oe), a !== null)) {
          if (
            ((m = e.getRenderTarget()),
            a.addEventListener("select", $),
            a.addEventListener("selectstart", $),
            a.addEventListener("selectend", $),
            a.addEventListener("squeeze", $),
            a.addEventListener("squeezestart", $),
            a.addEventListener("squeezeend", $),
            a.addEventListener("end", ie),
            a.addEventListener("inputsourceschange", ue),
            v.xrCompatible !== !0 && (await t.makeXRCompatible()),
            (N = e.getPixelRatio()),
            e.getSize(z),
            typeof XRWebGLBinding < "u" &&
              "createProjectionLayer" in XRWebGLBinding.prototype)
          ) {
            let Ue = null,
              ye = null,
              Ve = null;
            v.depth &&
              ((Ve = v.stencil ? t.DEPTH24_STENCIL8 : t.DEPTH_COMPONENT24),
              (Ue = v.stencil ? As : vs),
              (ye = v.stencil ? Ts : Nr));
            const ft = {
              colorFormat: t.RGBA8,
              depthFormat: Ve,
              scaleFactor: o,
            };
            (_ = new XRWebGLBinding(a, t)),
              (g = _.createProjectionLayer(ft)),
              a.updateRenderState({ layers: [g] }),
              e.setPixelRatio(1),
              e.setSize(g.textureWidth, g.textureHeight, !1),
              (P = new Fr(g.textureWidth, g.textureHeight, {
                format: hi,
                type: Wi,
                depthTexture: new Cp(
                  g.textureWidth,
                  g.textureHeight,
                  ye,
                  void 0,
                  void 0,
                  void 0,
                  void 0,
                  void 0,
                  void 0,
                  Ue,
                ),
                stencilBuffer: v.stencil,
                colorSpace: e.outputColorSpace,
                samples: v.antialias ? 4 : 0,
                resolveDepthBuffer: g.ignoreDepthValues === !1,
              }));
          } else {
            const Ue = {
              antialias: v.antialias,
              alpha: !0,
              depth: v.depth,
              stencil: v.stencil,
              framebufferScaleFactor: o,
            };
            (M = new XRWebGLLayer(a, t, Ue)),
              a.updateRenderState({ baseLayer: M }),
              e.setPixelRatio(1),
              e.setSize(M.framebufferWidth, M.framebufferHeight, !1),
              (P = new Fr(M.framebufferWidth, M.framebufferHeight, {
                format: hi,
                type: Wi,
                colorSpace: e.outputColorSpace,
                stencilBuffer: v.stencil,
              }));
          }
          (P.isXRRenderTarget = !0),
            this.setFoveation(d),
            (h = null),
            (c = await a.requestReferenceSpace(u)),
            Ct.setContext(a),
            Ct.start(),
            (i.isPresenting = !0),
            i.dispatchEvent({ type: "sessionstart" });
        }
      }),
      (this.getEnvironmentBlendMode = function () {
        if (a !== null) return a.environmentBlendMode;
      }),
      (this.getDepthTexture = function () {
        return C.getDepthTexture();
      });
    function ue(oe) {
      for (let _e = 0; _e < oe.removed.length; _e++) {
        const Ue = oe.removed[_e],
          ye = b.indexOf(Ue);
        ye >= 0 && ((b[ye] = null), L[ye].disconnect(Ue));
      }
      for (let _e = 0; _e < oe.added.length; _e++) {
        const Ue = oe.added[_e];
        let ye = b.indexOf(Ue);
        if (ye === -1) {
          for (let ft = 0; ft < L.length; ft++)
            if (ft >= b.length) {
              b.push(Ue), (ye = ft);
              break;
            } else if (b[ft] === null) {
              (b[ft] = Ue), (ye = ft);
              break;
            }
          if (ye === -1) break;
        }
        const Ve = L[ye];
        Ve && Ve.connect(Ue);
      }
    }
    const ne = new W(),
      de = new W();
    function j(oe, _e, Ue) {
      ne.setFromMatrixPosition(_e.matrixWorld),
        de.setFromMatrixPosition(Ue.matrixWorld);
      const ye = ne.distanceTo(de),
        Ve = _e.projectionMatrix.elements,
        ft = Ue.projectionMatrix.elements,
        Ke = Ve[14] / (Ve[10] - 1),
        Ot = Ve[14] / (Ve[10] + 1),
        Lt = (Ve[9] + 1) / Ve[5],
        ht = (Ve[9] - 1) / Ve[5],
        F = (Ve[8] - 1) / Ve[0],
        rn = (ft[8] + 1) / ft[0],
        mt = Ke * F,
        je = Ke * rn,
        ze = ye / (-F + rn),
        Ut = ze * -F;
      if (
        (_e.matrixWorld.decompose(oe.position, oe.quaternion, oe.scale),
        oe.translateX(Ut),
        oe.translateZ(ze),
        oe.matrixWorld.compose(oe.position, oe.quaternion, oe.scale),
        oe.matrixWorldInverse.copy(oe.matrixWorld).invert(),
        Ve[10] === -1)
      )
        oe.projectionMatrix.copy(_e.projectionMatrix),
          oe.projectionMatrixInverse.copy(_e.projectionMatrixInverse);
      else {
        const Oe = Ke + ze,
          I = Ot + ze,
          S = mt - Ut,
          Y = je + (ye - Ut),
          ce = ((Lt * Ot) / I) * Oe,
          fe = ((ht * Ot) / I) * Oe;
        oe.projectionMatrix.makePerspective(S, Y, ce, fe, Oe, I),
          oe.projectionMatrixInverse.copy(oe.projectionMatrix).invert();
      }
    }
    function Ee(oe, _e) {
      _e === null
        ? oe.matrixWorld.copy(oe.matrix)
        : oe.matrixWorld.multiplyMatrices(_e.matrixWorld, oe.matrix),
        oe.matrixWorldInverse.copy(oe.matrixWorld).invert();
    }
    this.updateCamera = function (oe) {
      if (a === null) return;
      let _e = oe.near,
        Ue = oe.far;
      C.texture !== null &&
        (C.depthNear > 0 && (_e = C.depthNear),
        C.depthFar > 0 && (Ue = C.depthFar)),
        (y.near = G.near = U.near = _e),
        (y.far = G.far = U.far = Ue),
        (B !== y.near || Q !== y.far) &&
          (a.updateRenderState({ depthNear: y.near, depthFar: y.far }),
          (B = y.near),
          (Q = y.far)),
        (U.layers.mask = oe.layers.mask | 2),
        (G.layers.mask = oe.layers.mask | 4),
        (y.layers.mask = U.layers.mask | G.layers.mask);
      const ye = oe.parent,
        Ve = y.cameras;
      Ee(y, ye);
      for (let ft = 0; ft < Ve.length; ft++) Ee(Ve[ft], ye);
      Ve.length === 2
        ? j(y, U, G)
        : y.projectionMatrix.copy(U.projectionMatrix),
        we(oe, y, ye);
    };
    function we(oe, _e, Ue) {
      Ue === null
        ? oe.matrix.copy(_e.matrixWorld)
        : (oe.matrix.copy(Ue.matrixWorld),
          oe.matrix.invert(),
          oe.matrix.multiply(_e.matrixWorld)),
        oe.matrix.decompose(oe.position, oe.quaternion, oe.scale),
        oe.updateMatrixWorld(!0),
        oe.projectionMatrix.copy(_e.projectionMatrix),
        oe.projectionMatrixInverse.copy(_e.projectionMatrixInverse),
        oe.isPerspectiveCamera &&
          ((oe.fov = gu * 2 * Math.atan(1 / oe.projectionMatrix.elements[5])),
          (oe.zoom = 1));
    }
    (this.getCamera = function () {
      return y;
    }),
      (this.getFoveation = function () {
        if (!(g === null && M === null)) return d;
      }),
      (this.setFoveation = function (oe) {
        (d = oe),
          g !== null && (g.fixedFoveation = oe),
          M !== null && M.fixedFoveation !== void 0 && (M.fixedFoveation = oe);
      }),
      (this.hasDepthSensing = function () {
        return C.texture !== null;
      }),
      (this.getDepthSensingMesh = function () {
        return C.getMesh(y);
      });
    let De = null;
    function lt(oe, _e) {
      if (((p = _e.getViewerPose(h || c)), (T = _e), p !== null)) {
        const Ue = p.views;
        M !== null &&
          (e.setRenderTargetFramebuffer(P, M.framebuffer),
          e.setRenderTarget(P));
        let ye = !1;
        Ue.length !== y.cameras.length && ((y.cameras.length = 0), (ye = !0));
        for (let Ke = 0; Ke < Ue.length; Ke++) {
          const Ot = Ue[Ke];
          let Lt = null;
          if (M !== null) Lt = M.getViewport(Ot);
          else {
            const F = _.getViewSubImage(g, Ot);
            (Lt = F.viewport),
              Ke === 0 &&
                (e.setRenderTargetTextures(
                  P,
                  F.colorTexture,
                  g.ignoreDepthValues ? void 0 : F.depthStencilTexture,
                ),
                e.setRenderTarget(P));
          }
          let ht = R[Ke];
          ht === void 0 &&
            ((ht = new ti()),
            ht.layers.enable(Ke),
            (ht.viewport = new Zt()),
            (R[Ke] = ht)),
            ht.matrix.fromArray(Ot.transform.matrix),
            ht.matrix.decompose(ht.position, ht.quaternion, ht.scale),
            ht.projectionMatrix.fromArray(Ot.projectionMatrix),
            ht.projectionMatrixInverse.copy(ht.projectionMatrix).invert(),
            ht.viewport.set(Lt.x, Lt.y, Lt.width, Lt.height),
            Ke === 0 &&
              (y.matrix.copy(ht.matrix),
              y.matrix.decompose(y.position, y.quaternion, y.scale)),
            ye === !0 && y.cameras.push(ht);
        }
        const Ve = a.enabledFeatures;
        if (
          Ve &&
          Ve.includes("depth-sensing") &&
          a.depthUsage == "gpu-optimized" &&
          _
        ) {
          const Ke = _.getDepthInformation(Ue[0]);
          Ke && Ke.isValid && Ke.texture && C.init(e, Ke, a.renderState);
        }
      }
      for (let Ue = 0; Ue < L.length; Ue++) {
        const ye = b[Ue],
          Ve = L[Ue];
        ye !== null && Ve !== void 0 && Ve.update(ye, _e, h || c);
      }
      De && De(oe, _e),
        _e.detectedPlanes &&
          i.dispatchEvent({ type: "planesdetected", data: _e }),
        (T = null);
    }
    const Ct = new Pp();
    Ct.setAnimationLoop(lt),
      (this.setAnimationLoop = function (oe) {
        De = oe;
      }),
      (this.dispose = function () {});
  }
}
const br = new Si(),
  zw = new $t();
function Gw(s, e) {
  function t(v, m) {
    v.matrixAutoUpdate === !0 && v.updateMatrix(), m.value.copy(v.matrix);
  }
  function i(v, m) {
    m.color.getRGB(v.fogColor.value, Ap(s)),
      m.isFog
        ? ((v.fogNear.value = m.near), (v.fogFar.value = m.far))
        : m.isFogExp2 && (v.fogDensity.value = m.density);
  }
  function a(v, m, P, L, b) {
    m.isMeshBasicMaterial || m.isMeshLambertMaterial
      ? o(v, m)
      : m.isMeshToonMaterial
        ? (o(v, m), _(v, m))
        : m.isMeshPhongMaterial
          ? (o(v, m), p(v, m))
          : m.isMeshStandardMaterial
            ? (o(v, m), g(v, m), m.isMeshPhysicalMaterial && M(v, m, b))
            : m.isMeshMatcapMaterial
              ? (o(v, m), T(v, m))
              : m.isMeshDepthMaterial
                ? o(v, m)
                : m.isMeshDistanceMaterial
                  ? (o(v, m), C(v, m))
                  : m.isMeshNormalMaterial
                    ? o(v, m)
                    : m.isLineBasicMaterial
                      ? (c(v, m), m.isLineDashedMaterial && u(v, m))
                      : m.isPointsMaterial
                        ? d(v, m, P, L)
                        : m.isSpriteMaterial
                          ? h(v, m)
                          : m.isShadowMaterial
                            ? (v.color.value.copy(m.color),
                              (v.opacity.value = m.opacity))
                            : m.isShaderMaterial && (m.uniformsNeedUpdate = !1);
  }
  function o(v, m) {
    (v.opacity.value = m.opacity),
      m.color && v.diffuse.value.copy(m.color),
      m.emissive &&
        v.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),
      m.map && ((v.map.value = m.map), t(m.map, v.mapTransform)),
      m.alphaMap &&
        ((v.alphaMap.value = m.alphaMap), t(m.alphaMap, v.alphaMapTransform)),
      m.bumpMap &&
        ((v.bumpMap.value = m.bumpMap),
        t(m.bumpMap, v.bumpMapTransform),
        (v.bumpScale.value = m.bumpScale),
        m.side === Dn && (v.bumpScale.value *= -1)),
      m.normalMap &&
        ((v.normalMap.value = m.normalMap),
        t(m.normalMap, v.normalMapTransform),
        v.normalScale.value.copy(m.normalScale),
        m.side === Dn && v.normalScale.value.negate()),
      m.displacementMap &&
        ((v.displacementMap.value = m.displacementMap),
        t(m.displacementMap, v.displacementMapTransform),
        (v.displacementScale.value = m.displacementScale),
        (v.displacementBias.value = m.displacementBias)),
      m.emissiveMap &&
        ((v.emissiveMap.value = m.emissiveMap),
        t(m.emissiveMap, v.emissiveMapTransform)),
      m.specularMap &&
        ((v.specularMap.value = m.specularMap),
        t(m.specularMap, v.specularMapTransform)),
      m.alphaTest > 0 && (v.alphaTest.value = m.alphaTest);
    const P = e.get(m),
      L = P.envMap,
      b = P.envMapRotation;
    L &&
      ((v.envMap.value = L),
      br.copy(b),
      (br.x *= -1),
      (br.y *= -1),
      (br.z *= -1),
      L.isCubeTexture &&
        L.isRenderTargetTexture === !1 &&
        ((br.y *= -1), (br.z *= -1)),
      v.envMapRotation.value.setFromMatrix4(zw.makeRotationFromEuler(br)),
      (v.flipEnvMap.value =
        L.isCubeTexture && L.isRenderTargetTexture === !1 ? -1 : 1),
      (v.reflectivity.value = m.reflectivity),
      (v.ior.value = m.ior),
      (v.refractionRatio.value = m.refractionRatio)),
      m.lightMap &&
        ((v.lightMap.value = m.lightMap),
        (v.lightMapIntensity.value = m.lightMapIntensity),
        t(m.lightMap, v.lightMapTransform)),
      m.aoMap &&
        ((v.aoMap.value = m.aoMap),
        (v.aoMapIntensity.value = m.aoMapIntensity),
        t(m.aoMap, v.aoMapTransform));
  }
  function c(v, m) {
    v.diffuse.value.copy(m.color),
      (v.opacity.value = m.opacity),
      m.map && ((v.map.value = m.map), t(m.map, v.mapTransform));
  }
  function u(v, m) {
    (v.dashSize.value = m.dashSize),
      (v.totalSize.value = m.dashSize + m.gapSize),
      (v.scale.value = m.scale);
  }
  function d(v, m, P, L) {
    v.diffuse.value.copy(m.color),
      (v.opacity.value = m.opacity),
      (v.size.value = m.size * P),
      (v.scale.value = L * 0.5),
      m.map && ((v.map.value = m.map), t(m.map, v.uvTransform)),
      m.alphaMap &&
        ((v.alphaMap.value = m.alphaMap), t(m.alphaMap, v.alphaMapTransform)),
      m.alphaTest > 0 && (v.alphaTest.value = m.alphaTest);
  }
  function h(v, m) {
    v.diffuse.value.copy(m.color),
      (v.opacity.value = m.opacity),
      (v.rotation.value = m.rotation),
      m.map && ((v.map.value = m.map), t(m.map, v.mapTransform)),
      m.alphaMap &&
        ((v.alphaMap.value = m.alphaMap), t(m.alphaMap, v.alphaMapTransform)),
      m.alphaTest > 0 && (v.alphaTest.value = m.alphaTest);
  }
  function p(v, m) {
    v.specular.value.copy(m.specular),
      (v.shininess.value = Math.max(m.shininess, 1e-4));
  }
  function _(v, m) {
    m.gradientMap && (v.gradientMap.value = m.gradientMap);
  }
  function g(v, m) {
    (v.metalness.value = m.metalness),
      m.metalnessMap &&
        ((v.metalnessMap.value = m.metalnessMap),
        t(m.metalnessMap, v.metalnessMapTransform)),
      (v.roughness.value = m.roughness),
      m.roughnessMap &&
        ((v.roughnessMap.value = m.roughnessMap),
        t(m.roughnessMap, v.roughnessMapTransform)),
      m.envMap && (v.envMapIntensity.value = m.envMapIntensity);
  }
  function M(v, m, P) {
    (v.ior.value = m.ior),
      m.sheen > 0 &&
        (v.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),
        (v.sheenRoughness.value = m.sheenRoughness),
        m.sheenColorMap &&
          ((v.sheenColorMap.value = m.sheenColorMap),
          t(m.sheenColorMap, v.sheenColorMapTransform)),
        m.sheenRoughnessMap &&
          ((v.sheenRoughnessMap.value = m.sheenRoughnessMap),
          t(m.sheenRoughnessMap, v.sheenRoughnessMapTransform))),
      m.clearcoat > 0 &&
        ((v.clearcoat.value = m.clearcoat),
        (v.clearcoatRoughness.value = m.clearcoatRoughness),
        m.clearcoatMap &&
          ((v.clearcoatMap.value = m.clearcoatMap),
          t(m.clearcoatMap, v.clearcoatMapTransform)),
        m.clearcoatRoughnessMap &&
          ((v.clearcoatRoughnessMap.value = m.clearcoatRoughnessMap),
          t(m.clearcoatRoughnessMap, v.clearcoatRoughnessMapTransform)),
        m.clearcoatNormalMap &&
          ((v.clearcoatNormalMap.value = m.clearcoatNormalMap),
          t(m.clearcoatNormalMap, v.clearcoatNormalMapTransform),
          v.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),
          m.side === Dn && v.clearcoatNormalScale.value.negate())),
      m.dispersion > 0 && (v.dispersion.value = m.dispersion),
      m.iridescence > 0 &&
        ((v.iridescence.value = m.iridescence),
        (v.iridescenceIOR.value = m.iridescenceIOR),
        (v.iridescenceThicknessMinimum.value = m.iridescenceThicknessRange[0]),
        (v.iridescenceThicknessMaximum.value = m.iridescenceThicknessRange[1]),
        m.iridescenceMap &&
          ((v.iridescenceMap.value = m.iridescenceMap),
          t(m.iridescenceMap, v.iridescenceMapTransform)),
        m.iridescenceThicknessMap &&
          ((v.iridescenceThicknessMap.value = m.iridescenceThicknessMap),
          t(m.iridescenceThicknessMap, v.iridescenceThicknessMapTransform))),
      m.transmission > 0 &&
        ((v.transmission.value = m.transmission),
        (v.transmissionSamplerMap.value = P.texture),
        v.transmissionSamplerSize.value.set(P.width, P.height),
        m.transmissionMap &&
          ((v.transmissionMap.value = m.transmissionMap),
          t(m.transmissionMap, v.transmissionMapTransform)),
        (v.thickness.value = m.thickness),
        m.thicknessMap &&
          ((v.thicknessMap.value = m.thicknessMap),
          t(m.thicknessMap, v.thicknessMapTransform)),
        (v.attenuationDistance.value = m.attenuationDistance),
        v.attenuationColor.value.copy(m.attenuationColor)),
      m.anisotropy > 0 &&
        (v.anisotropyVector.value.set(
          m.anisotropy * Math.cos(m.anisotropyRotation),
          m.anisotropy * Math.sin(m.anisotropyRotation),
        ),
        m.anisotropyMap &&
          ((v.anisotropyMap.value = m.anisotropyMap),
          t(m.anisotropyMap, v.anisotropyMapTransform))),
      (v.specularIntensity.value = m.specularIntensity),
      v.specularColor.value.copy(m.specularColor),
      m.specularColorMap &&
        ((v.specularColorMap.value = m.specularColorMap),
        t(m.specularColorMap, v.specularColorMapTransform)),
      m.specularIntensityMap &&
        ((v.specularIntensityMap.value = m.specularIntensityMap),
        t(m.specularIntensityMap, v.specularIntensityMapTransform));
  }
  function T(v, m) {
    m.matcap && (v.matcap.value = m.matcap);
  }
  function C(v, m) {
    const P = e.get(m).light;
    v.referencePosition.value.setFromMatrixPosition(P.matrixWorld),
      (v.nearDistance.value = P.shadow.camera.near),
      (v.farDistance.value = P.shadow.camera.far);
  }
  return { refreshFogUniforms: i, refreshMaterialUniforms: a };
}
function Hw(s, e, t, i) {
  let a = {},
    o = {},
    c = [];
  const u = s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);
  function d(P, L) {
    const b = L.program;
    i.uniformBlockBinding(P, b);
  }
  function h(P, L) {
    let b = a[P.id];
    b === void 0 &&
      (T(P), (b = p(P)), (a[P.id] = b), P.addEventListener("dispose", v));
    const z = L.program;
    i.updateUBOMapping(P, z);
    const N = e.render.frame;
    o[P.id] !== N && (g(P), (o[P.id] = N));
  }
  function p(P) {
    const L = _();
    P.__bindingPointIndex = L;
    const b = s.createBuffer(),
      z = P.__size,
      N = P.usage;
    return (
      s.bindBuffer(s.UNIFORM_BUFFER, b),
      s.bufferData(s.UNIFORM_BUFFER, z, N),
      s.bindBuffer(s.UNIFORM_BUFFER, null),
      s.bindBufferBase(s.UNIFORM_BUFFER, L, b),
      b
    );
  }
  function _() {
    for (let P = 0; P < u; P++) if (c.indexOf(P) === -1) return c.push(P), P;
    return (
      console.error(
        "THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached.",
      ),
      0
    );
  }
  function g(P) {
    const L = a[P.id],
      b = P.uniforms,
      z = P.__cache;
    s.bindBuffer(s.UNIFORM_BUFFER, L);
    for (let N = 0, U = b.length; N < U; N++) {
      const G = Array.isArray(b[N]) ? b[N] : [b[N]];
      for (let R = 0, y = G.length; R < y; R++) {
        const B = G[R];
        if (M(B, N, R, z) === !0) {
          const Q = B.__offset,
            $ = Array.isArray(B.value) ? B.value : [B.value];
          let ie = 0;
          for (let ue = 0; ue < $.length; ue++) {
            const ne = $[ue],
              de = C(ne);
            typeof ne == "number" || typeof ne == "boolean"
              ? ((B.__data[0] = ne),
                s.bufferSubData(s.UNIFORM_BUFFER, Q + ie, B.__data))
              : ne.isMatrix3
                ? ((B.__data[0] = ne.elements[0]),
                  (B.__data[1] = ne.elements[1]),
                  (B.__data[2] = ne.elements[2]),
                  (B.__data[3] = 0),
                  (B.__data[4] = ne.elements[3]),
                  (B.__data[5] = ne.elements[4]),
                  (B.__data[6] = ne.elements[5]),
                  (B.__data[7] = 0),
                  (B.__data[8] = ne.elements[6]),
                  (B.__data[9] = ne.elements[7]),
                  (B.__data[10] = ne.elements[8]),
                  (B.__data[11] = 0))
                : (ne.toArray(B.__data, ie),
                  (ie += de.storage / Float32Array.BYTES_PER_ELEMENT));
          }
          s.bufferSubData(s.UNIFORM_BUFFER, Q, B.__data);
        }
      }
    }
    s.bindBuffer(s.UNIFORM_BUFFER, null);
  }
  function M(P, L, b, z) {
    const N = P.value,
      U = L + "_" + b;
    if (z[U] === void 0)
      return (
        typeof N == "number" || typeof N == "boolean"
          ? (z[U] = N)
          : (z[U] = N.clone()),
        !0
      );
    {
      const G = z[U];
      if (typeof N == "number" || typeof N == "boolean") {
        if (G !== N) return (z[U] = N), !0;
      } else if (G.equals(N) === !1) return G.copy(N), !0;
    }
    return !1;
  }
  function T(P) {
    const L = P.uniforms;
    let b = 0;
    const z = 16;
    for (let U = 0, G = L.length; U < G; U++) {
      const R = Array.isArray(L[U]) ? L[U] : [L[U]];
      for (let y = 0, B = R.length; y < B; y++) {
        const Q = R[y],
          $ = Array.isArray(Q.value) ? Q.value : [Q.value];
        for (let ie = 0, ue = $.length; ie < ue; ie++) {
          const ne = $[ie],
            de = C(ne),
            j = b % z,
            Ee = j % de.boundary,
            we = j + Ee;
          (b += Ee),
            we !== 0 && z - we < de.storage && (b += z - we),
            (Q.__data = new Float32Array(
              de.storage / Float32Array.BYTES_PER_ELEMENT,
            )),
            (Q.__offset = b),
            (b += de.storage);
        }
      }
    }
    const N = b % z;
    return N > 0 && (b += z - N), (P.__size = b), (P.__cache = {}), this;
  }
  function C(P) {
    const L = { boundary: 0, storage: 0 };
    return (
      typeof P == "number" || typeof P == "boolean"
        ? ((L.boundary = 4), (L.storage = 4))
        : P.isVector2
          ? ((L.boundary = 8), (L.storage = 8))
          : P.isVector3 || P.isColor
            ? ((L.boundary = 16), (L.storage = 12))
            : P.isVector4
              ? ((L.boundary = 16), (L.storage = 16))
              : P.isMatrix3
                ? ((L.boundary = 48), (L.storage = 48))
                : P.isMatrix4
                  ? ((L.boundary = 64), (L.storage = 64))
                  : P.isTexture
                    ? console.warn(
                        "THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group.",
                      )
                    : console.warn(
                        "THREE.WebGLRenderer: Unsupported uniform value type.",
                        P,
                      ),
      L
    );
  }
  function v(P) {
    const L = P.target;
    L.removeEventListener("dispose", v);
    const b = c.indexOf(L.__bindingPointIndex);
    c.splice(b, 1), s.deleteBuffer(a[L.id]), delete a[L.id], delete o[L.id];
  }
  function m() {
    for (const P in a) s.deleteBuffer(a[P]);
    (c = []), (a = {}), (o = {});
  }
  return { bind: d, update: h, dispose: m };
}
class Vw {
  constructor(e = {}) {
    const {
      canvas: t = yS(),
      context: i = null,
      depth: a = !0,
      stencil: o = !1,
      alpha: c = !1,
      antialias: u = !1,
      premultipliedAlpha: d = !0,
      preserveDrawingBuffer: h = !1,
      powerPreference: p = "default",
      failIfMajorPerformanceCaveat: _ = !1,
      reverseDepthBuffer: g = !1,
    } = e;
    this.isWebGLRenderer = !0;
    let M;
    if (i !== null) {
      if (
        typeof WebGLRenderingContext < "u" &&
        i instanceof WebGLRenderingContext
      )
        throw new Error(
          "THREE.WebGLRenderer: WebGL 1 is not supported since r163.",
        );
      M = i.getContextAttributes().alpha;
    } else M = c;
    const T = new Uint32Array(4),
      C = new Int32Array(4);
    let v = null,
      m = null;
    const P = [],
      L = [];
    (this.domElement = t),
      (this.debug = { checkShaderErrors: !0, onShaderError: null }),
      (this.autoClear = !0),
      (this.autoClearColor = !0),
      (this.autoClearDepth = !0),
      (this.autoClearStencil = !0),
      (this.sortObjects = !0),
      (this.clippingPlanes = []),
      (this.localClippingEnabled = !1),
      (this._outputColorSpace = ei),
      (this.toneMapping = cr),
      (this.toneMappingExposure = 1);
    const b = this;
    let z = !1,
      N = 0,
      U = 0,
      G = null,
      R = -1,
      y = null;
    const B = new Zt(),
      Q = new Zt();
    let $ = null;
    const ie = new Fe(0);
    let ue = 0,
      ne = t.width,
      de = t.height,
      j = 1,
      Ee = null,
      we = null;
    const De = new Zt(0, 0, ne, de),
      lt = new Zt(0, 0, ne, de);
    let Ct = !1;
    const oe = new Rp();
    let _e = !1,
      Ue = !1;
    this.transmissionResolutionScale = 1;
    const ye = new $t(),
      Ve = new $t(),
      ft = new W(),
      Ke = new Zt(),
      Ot = {
        background: null,
        fog: null,
        environment: null,
        overrideMaterial: null,
        isScene: !0,
      };
    let Lt = !1;
    function ht() {
      return G === null ? j : 1;
    }
    let F = i;
    function rn(A, k) {
      return t.getContext(A, k);
    }
    try {
      const A = {
        alpha: !0,
        depth: a,
        stencil: o,
        antialias: u,
        premultipliedAlpha: d,
        preserveDrawingBuffer: h,
        powerPreference: p,
        failIfMajorPerformanceCaveat: _,
      };
      if (
        ("setAttribute" in t &&
          t.setAttribute("data-engine", `three.js r${yu}`),
        t.addEventListener("webglcontextlost", le, !1),
        t.addEventListener("webglcontextrestored", Ae, !1),
        t.addEventListener("webglcontextcreationerror", Te, !1),
        F === null)
      ) {
        const k = "webgl2";
        if (((F = rn(k, A)), F === null))
          throw rn(k)
            ? new Error(
                "Error creating WebGL context with your selected attributes.",
              )
            : new Error("Error creating WebGL context.");
      }
    } catch (A) {
      throw (console.error("THREE.WebGLRenderer: " + A.message), A);
    }
    let mt,
      je,
      ze,
      Ut,
      Oe,
      I,
      S,
      Y,
      ce,
      fe,
      se,
      Ne,
      ge,
      be,
      dt,
      me,
      Ce,
      We,
      Ze,
      Pe,
      ut,
      et,
      It,
      H;
    function Me() {
      (mt = new QT(F)),
        mt.init(),
        (et = new Uw(F, mt)),
        (je = new qT(F, mt, e, et)),
        (ze = new Iw(F, mt)),
        je.reverseDepthBuffer && g && ze.buffers.depth.setReversed(!0),
        (Ut = new tA(F)),
        (Oe = new xw()),
        (I = new Dw(F, mt, ze, Oe, je, et, Ut)),
        (S = new ZT(b)),
        (Y = new JT(b)),
        (ce = new lE(F)),
        (It = new WT(F, ce)),
        (fe = new jT(F, ce, Ut, It)),
        (se = new iA(F, fe, ce, Ut)),
        (Ze = new nA(F, je, I)),
        (me = new YT(Oe)),
        (Ne = new vw(b, S, Y, mt, je, It, me)),
        (ge = new Gw(b, Oe)),
        (be = new Sw()),
        (dt = new bw(mt)),
        (We = new kT(b, S, Y, ze, se, M, d)),
        (Ce = new Pw(b, se, je)),
        (H = new Hw(F, Ut, je, ze)),
        (Pe = new XT(F, mt, Ut)),
        (ut = new eA(F, mt, Ut)),
        (Ut.programs = Ne.programs),
        (b.capabilities = je),
        (b.extensions = mt),
        (b.properties = Oe),
        (b.renderLists = be),
        (b.shadowMap = Ce),
        (b.state = ze),
        (b.info = Ut);
    }
    Me();
    const ee = new Bw(b, F);
    (this.xr = ee),
      (this.getContext = function () {
        return F;
      }),
      (this.getContextAttributes = function () {
        return F.getContextAttributes();
      }),
      (this.forceContextLoss = function () {
        const A = mt.get("WEBGL_lose_context");
        A && A.loseContext();
      }),
      (this.forceContextRestore = function () {
        const A = mt.get("WEBGL_lose_context");
        A && A.restoreContext();
      }),
      (this.getPixelRatio = function () {
        return j;
      }),
      (this.setPixelRatio = function (A) {
        A !== void 0 && ((j = A), this.setSize(ne, de, !1));
      }),
      (this.getSize = function (A) {
        return A.set(ne, de);
      }),
      (this.setSize = function (A, k, Z = !0) {
        if (ee.isPresenting) {
          console.warn(
            "THREE.WebGLRenderer: Can't change size while VR device is presenting.",
          );
          return;
        }
        (ne = A),
          (de = k),
          (t.width = Math.floor(A * j)),
          (t.height = Math.floor(k * j)),
          Z === !0 && ((t.style.width = A + "px"), (t.style.height = k + "px")),
          this.setViewport(0, 0, A, k);
      }),
      (this.getDrawingBufferSize = function (A) {
        return A.set(ne * j, de * j).floor();
      }),
      (this.setDrawingBufferSize = function (A, k, Z) {
        (ne = A),
          (de = k),
          (j = Z),
          (t.width = Math.floor(A * Z)),
          (t.height = Math.floor(k * Z)),
          this.setViewport(0, 0, A, k);
      }),
      (this.getCurrentViewport = function (A) {
        return A.copy(B);
      }),
      (this.getViewport = function (A) {
        return A.copy(De);
      }),
      (this.setViewport = function (A, k, Z, K) {
        A.isVector4 ? De.set(A.x, A.y, A.z, A.w) : De.set(A, k, Z, K),
          ze.viewport(B.copy(De).multiplyScalar(j).round());
      }),
      (this.getScissor = function (A) {
        return A.copy(lt);
      }),
      (this.setScissor = function (A, k, Z, K) {
        A.isVector4 ? lt.set(A.x, A.y, A.z, A.w) : lt.set(A, k, Z, K),
          ze.scissor(Q.copy(lt).multiplyScalar(j).round());
      }),
      (this.getScissorTest = function () {
        return Ct;
      }),
      (this.setScissorTest = function (A) {
        ze.setScissorTest((Ct = A));
      }),
      (this.setOpaqueSort = function (A) {
        Ee = A;
      }),
      (this.setTransparentSort = function (A) {
        we = A;
      }),
      (this.getClearColor = function (A) {
        return A.copy(We.getClearColor());
      }),
      (this.setClearColor = function () {
        We.setClearColor.apply(We, arguments);
      }),
      (this.getClearAlpha = function () {
        return We.getClearAlpha();
      }),
      (this.setClearAlpha = function () {
        We.setClearAlpha.apply(We, arguments);
      }),
      (this.clear = function (A = !0, k = !0, Z = !0) {
        let K = 0;
        if (A) {
          let q = !1;
          if (G !== null) {
            const pe = G.texture.format;
            q = pe === Cu || pe === Ru || pe === bu;
          }
          if (q) {
            const pe = G.texture.type,
              Se =
                pe === Wi ||
                pe === Nr ||
                pe === aa ||
                pe === Ts ||
                pe === Au ||
                pe === wu,
              Re = We.getClearColor(),
              Ie = We.getClearAlpha(),
              $e = Re.r,
              Je = Re.g,
              ke = Re.b;
            Se
              ? ((T[0] = $e),
                (T[1] = Je),
                (T[2] = ke),
                (T[3] = Ie),
                F.clearBufferuiv(F.COLOR, 0, T))
              : ((C[0] = $e),
                (C[1] = Je),
                (C[2] = ke),
                (C[3] = Ie),
                F.clearBufferiv(F.COLOR, 0, C));
          } else K |= F.COLOR_BUFFER_BIT;
        }
        k && (K |= F.DEPTH_BUFFER_BIT),
          Z &&
            ((K |= F.STENCIL_BUFFER_BIT),
            this.state.buffers.stencil.setMask(4294967295)),
          F.clear(K);
      }),
      (this.clearColor = function () {
        this.clear(!0, !1, !1);
      }),
      (this.clearDepth = function () {
        this.clear(!1, !0, !1);
      }),
      (this.clearStencil = function () {
        this.clear(!1, !1, !0);
      }),
      (this.dispose = function () {
        t.removeEventListener("webglcontextlost", le, !1),
          t.removeEventListener("webglcontextrestored", Ae, !1),
          t.removeEventListener("webglcontextcreationerror", Te, !1),
          We.dispose(),
          be.dispose(),
          dt.dispose(),
          Oe.dispose(),
          S.dispose(),
          Y.dispose(),
          se.dispose(),
          It.dispose(),
          H.dispose(),
          Ne.dispose(),
          ee.dispose(),
          ee.removeEventListener("sessionstart", Br),
          ee.removeEventListener("sessionend", ha),
          ii.stop();
      });
    function le(A) {
      A.preventDefault(),
        console.log("THREE.WebGLRenderer: Context Lost."),
        (z = !0);
    }
    function Ae() {
      console.log("THREE.WebGLRenderer: Context Restored."), (z = !1);
      const A = Ut.autoReset,
        k = Ce.enabled,
        Z = Ce.autoUpdate,
        K = Ce.needsUpdate,
        q = Ce.type;
      Me(),
        (Ut.autoReset = A),
        (Ce.enabled = k),
        (Ce.autoUpdate = Z),
        (Ce.needsUpdate = K),
        (Ce.type = q);
    }
    function Te(A) {
      console.error(
        "THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",
        A.statusMessage,
      );
    }
    function nt(A) {
      const k = A.target;
      k.removeEventListener("dispose", nt), Ht(k);
    }
    function Ht(A) {
      Jt(A), Oe.remove(A);
    }
    function Jt(A) {
      const k = Oe.get(A).programs;
      k !== void 0 &&
        (k.forEach(function (Z) {
          Ne.releaseProgram(Z);
        }),
        A.isShaderMaterial && Ne.releaseShaderCache(A));
    }
    this.renderBufferDirect = function (A, k, Z, K, q, pe) {
      k === null && (k = Ot);
      const Se = q.isMesh && q.matrixWorld.determinant() < 0,
        Re = va(A, k, Z, K, q);
      ze.setMaterial(K, Se);
      let Ie = Z.index,
        $e = 1;
      if (K.wireframe === !0) {
        if (((Ie = fe.getWireframeAttribute(Z)), Ie === void 0)) return;
        $e = 2;
      }
      const Je = Z.drawRange,
        ke = Z.attributes.position;
      let gt = Je.start * $e,
        Et = (Je.start + Je.count) * $e;
      pe !== null &&
        ((gt = Math.max(gt, pe.start * $e)),
        (Et = Math.min(Et, (pe.start + pe.count) * $e))),
        Ie !== null
          ? ((gt = Math.max(gt, 0)), (Et = Math.min(Et, Ie.count)))
          : ke != null &&
            ((gt = Math.max(gt, 0)), (Et = Math.min(Et, ke.count)));
      const kt = Et - gt;
      if (kt < 0 || kt === 1 / 0) return;
      It.setup(q, K, Re, Z, Ie);
      let zt,
        vt = Pe;
      if (
        (Ie !== null && ((zt = ce.get(Ie)), (vt = ut), vt.setIndex(zt)),
        q.isMesh)
      )
        K.wireframe === !0
          ? (ze.setLineWidth(K.wireframeLinewidth * ht()), vt.setMode(F.LINES))
          : vt.setMode(F.TRIANGLES);
      else if (q.isLine) {
        let Ge = K.linewidth;
        Ge === void 0 && (Ge = 1),
          ze.setLineWidth(Ge * ht()),
          q.isLineSegments
            ? vt.setMode(F.LINES)
            : q.isLineLoop
              ? vt.setMode(F.LINE_LOOP)
              : vt.setMode(F.LINE_STRIP);
      } else
        q.isPoints
          ? vt.setMode(F.POINTS)
          : q.isSprite && vt.setMode(F.TRIANGLES);
      if (q.isBatchedMesh)
        if (q._multiDrawInstances !== null)
          vt.renderMultiDrawInstances(
            q._multiDrawStarts,
            q._multiDrawCounts,
            q._multiDrawCount,
            q._multiDrawInstances,
          );
        else if (mt.get("WEBGL_multi_draw"))
          vt.renderMultiDraw(
            q._multiDrawStarts,
            q._multiDrawCounts,
            q._multiDrawCount,
          );
        else {
          const Ge = q._multiDrawStarts,
            Qt = q._multiDrawCounts,
            St = q._multiDrawCount,
            fn = Ie ? ce.get(Ie).bytesPerElement : 1,
            yi = Oe.get(K).currentProgram.getUniforms();
          for (let xn = 0; xn < St; xn++)
            yi.setValue(F, "_gl_DrawID", xn), vt.render(Ge[xn] / fn, Qt[xn]);
        }
      else if (q.isInstancedMesh) vt.renderInstances(gt, kt, q.count);
      else if (Z.isInstancedBufferGeometry) {
        const Ge = Z._maxInstanceCount !== void 0 ? Z._maxInstanceCount : 1 / 0,
          Qt = Math.min(Z.instanceCount, Ge);
        vt.renderInstances(gt, kt, Qt);
      } else vt.render(gt, kt);
    };
    function At(A, k, Z) {
      A.transparent === !0 && A.side === zi && A.forceSinglePass === !1
        ? ((A.side = Dn),
          (A.needsUpdate = !0),
          Gr(A, k, Z),
          (A.side = ur),
          (A.needsUpdate = !0),
          Gr(A, k, Z),
          (A.side = zi))
        : Gr(A, k, Z);
    }
    (this.compile = function (A, k, Z = null) {
      Z === null && (Z = A),
        (m = dt.get(Z)),
        m.init(k),
        L.push(m),
        Z.traverseVisible(function (q) {
          q.isLight &&
            q.layers.test(k.layers) &&
            (m.pushLight(q), q.castShadow && m.pushShadow(q));
        }),
        A !== Z &&
          A.traverseVisible(function (q) {
            q.isLight &&
              q.layers.test(k.layers) &&
              (m.pushLight(q), q.castShadow && m.pushShadow(q));
          }),
        m.setupLights();
      const K = new Set();
      return (
        A.traverse(function (q) {
          if (!(q.isMesh || q.isPoints || q.isLine || q.isSprite)) return;
          const pe = q.material;
          if (pe)
            if (Array.isArray(pe))
              for (let Se = 0; Se < pe.length; Se++) {
                const Re = pe[Se];
                At(Re, Z, q), K.add(Re);
              }
            else At(pe, Z, q), K.add(pe);
        }),
        L.pop(),
        (m = null),
        K
      );
    }),
      (this.compileAsync = function (A, k, Z = null) {
        const K = this.compile(A, k, Z);
        return new Promise((q) => {
          function pe() {
            if (
              (K.forEach(function (Se) {
                Oe.get(Se).currentProgram.isReady() && K.delete(Se);
              }),
              K.size === 0)
            ) {
              q(A);
              return;
            }
            setTimeout(pe, 10);
          }
          mt.get("KHR_parallel_shader_compile") !== null
            ? pe()
            : setTimeout(pe, 10);
        });
      });
    let Nn = null;
    function ni(A) {
      Nn && Nn(A);
    }
    function Br() {
      ii.stop();
    }
    function ha() {
      ii.start();
    }
    const ii = new Pp();
    ii.setAnimationLoop(ni),
      typeof self < "u" && ii.setContext(self),
      (this.setAnimationLoop = function (A) {
        (Nn = A), ee.setAnimationLoop(A), A === null ? ii.stop() : ii.start();
      }),
      ee.addEventListener("sessionstart", Br),
      ee.addEventListener("sessionend", ha),
      (this.render = function (A, k) {
        if (k !== void 0 && k.isCamera !== !0) {
          console.error(
            "THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.",
          );
          return;
        }
        if (z === !0) return;
        if (
          (A.matrixWorldAutoUpdate === !0 && A.updateMatrixWorld(),
          k.parent === null &&
            k.matrixWorldAutoUpdate === !0 &&
            k.updateMatrixWorld(),
          ee.enabled === !0 &&
            ee.isPresenting === !0 &&
            (ee.cameraAutoUpdate === !0 && ee.updateCamera(k),
            (k = ee.getCamera())),
          A.isScene === !0 && A.onBeforeRender(b, A, k, G),
          (m = dt.get(A, L.length)),
          m.init(k),
          L.push(m),
          Ve.multiplyMatrices(k.projectionMatrix, k.matrixWorldInverse),
          oe.setFromProjectionMatrix(Ve),
          (Ue = this.localClippingEnabled),
          (_e = me.init(this.clippingPlanes, Ue)),
          (v = be.get(A, P.length)),
          v.init(),
          P.push(v),
          ee.enabled === !0 && ee.isPresenting === !0)
        ) {
          const pe = b.xr.getDepthSensingMesh();
          pe !== null && Ps(pe, k, -1 / 0, b.sortObjects);
        }
        Ps(A, k, 0, b.sortObjects),
          v.finish(),
          b.sortObjects === !0 && v.sort(Ee, we),
          (Lt =
            ee.enabled === !1 ||
            ee.isPresenting === !1 ||
            ee.hasDepthSensing() === !1),
          Lt && We.addToRenderList(v, A),
          this.info.render.frame++,
          _e === !0 && me.beginShadows();
        const Z = m.state.shadowsArray;
        Ce.render(Z, A, k),
          _e === !0 && me.endShadows(),
          this.info.autoReset === !0 && this.info.reset();
        const K = v.opaque,
          q = v.transmissive;
        if ((m.setupLights(), k.isArrayCamera)) {
          const pe = k.cameras;
          if (q.length > 0)
            for (let Se = 0, Re = pe.length; Se < Re; Se++) {
              const Ie = pe[Se];
              pa(K, q, A, Ie);
            }
          Lt && We.render(A);
          for (let Se = 0, Re = pe.length; Se < Re; Se++) {
            const Ie = pe[Se];
            da(v, A, Ie, Ie.viewport);
          }
        } else q.length > 0 && pa(K, q, A, k), Lt && We.render(A), da(v, A, k);
        G !== null &&
          U === 0 &&
          (I.updateMultisampleRenderTarget(G), I.updateRenderTargetMipmap(G)),
          A.isScene === !0 && A.onAfterRender(b, A, k),
          It.resetDefaultState(),
          (R = -1),
          (y = null),
          L.pop(),
          L.length > 0
            ? ((m = L[L.length - 1]),
              _e === !0 && me.setGlobalState(b.clippingPlanes, m.state.camera))
            : (m = null),
          P.pop(),
          P.length > 0 ? (v = P[P.length - 1]) : (v = null);
      });
    function Ps(A, k, Z, K) {
      if (A.visible === !1) return;
      if (A.layers.test(k.layers)) {
        if (A.isGroup) Z = A.renderOrder;
        else if (A.isLOD) A.autoUpdate === !0 && A.update(k);
        else if (A.isLight) m.pushLight(A), A.castShadow && m.pushShadow(A);
        else if (A.isSprite) {
          if (!A.frustumCulled || oe.intersectsSprite(A)) {
            K && Ke.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Ve);
            const Se = se.update(A),
              Re = A.material;
            Re.visible && v.push(A, Se, Re, Z, Ke.z, null);
          }
        } else if (
          (A.isMesh || A.isLine || A.isPoints) &&
          (!A.frustumCulled || oe.intersectsObject(A))
        ) {
          const Se = se.update(A),
            Re = A.material;
          if (
            (K &&
              (A.boundingSphere !== void 0
                ? (A.boundingSphere === null && A.computeBoundingSphere(),
                  Ke.copy(A.boundingSphere.center))
                : (Se.boundingSphere === null && Se.computeBoundingSphere(),
                  Ke.copy(Se.boundingSphere.center)),
              Ke.applyMatrix4(A.matrixWorld).applyMatrix4(Ve)),
            Array.isArray(Re))
          ) {
            const Ie = Se.groups;
            for (let $e = 0, Je = Ie.length; $e < Je; $e++) {
              const ke = Ie[$e],
                gt = Re[ke.materialIndex];
              gt && gt.visible && v.push(A, Se, gt, Z, Ke.z, ke);
            }
          } else Re.visible && v.push(A, Se, Re, Z, Ke.z, null);
        }
      }
      const pe = A.children;
      for (let Se = 0, Re = pe.length; Se < Re; Se++) Ps(pe[Se], k, Z, K);
    }
    function da(A, k, Z, K) {
      const q = A.opaque,
        pe = A.transmissive,
        Se = A.transparent;
      m.setupLightsView(Z),
        _e === !0 && me.setGlobalState(b.clippingPlanes, Z),
        K && ze.viewport(B.copy(K)),
        q.length > 0 && zr(q, k, Z),
        pe.length > 0 && zr(pe, k, Z),
        Se.length > 0 && zr(Se, k, Z),
        ze.buffers.depth.setTest(!0),
        ze.buffers.depth.setMask(!0),
        ze.buffers.color.setMask(!0),
        ze.setPolygonOffset(!1);
    }
    function pa(A, k, Z, K) {
      if ((Z.isScene === !0 ? Z.overrideMaterial : null) !== null) return;
      m.state.transmissionRenderTarget[K.id] === void 0 &&
        (m.state.transmissionRenderTarget[K.id] = new Fr(1, 1, {
          generateMipmaps: !0,
          type:
            mt.has("EXT_color_buffer_half_float") ||
            mt.has("EXT_color_buffer_float")
              ? oa
              : Wi,
          minFilter: Ur,
          samples: 4,
          stencilBuffer: o,
          resolveDepthBuffer: !1,
          resolveStencilBuffer: !1,
          colorSpace: Tt.workingColorSpace,
        }));
      const pe = m.state.transmissionRenderTarget[K.id],
        Se = K.viewport || B;
      pe.setSize(
        Se.z * b.transmissionResolutionScale,
        Se.w * b.transmissionResolutionScale,
      );
      const Re = b.getRenderTarget();
      b.setRenderTarget(pe),
        b.getClearColor(ie),
        (ue = b.getClearAlpha()),
        ue < 1 && b.setClearColor(16777215, 0.5),
        b.clear(),
        Lt && We.render(Z);
      const Ie = b.toneMapping;
      b.toneMapping = cr;
      const $e = K.viewport;
      if (
        (K.viewport !== void 0 && (K.viewport = void 0),
        m.setupLightsView(K),
        _e === !0 && me.setGlobalState(b.clippingPlanes, K),
        zr(A, Z, K),
        I.updateMultisampleRenderTarget(pe),
        I.updateRenderTargetMipmap(pe),
        mt.has("WEBGL_multisampled_render_to_texture") === !1)
      ) {
        let Je = !1;
        for (let ke = 0, gt = k.length; ke < gt; ke++) {
          const Et = k[ke],
            kt = Et.object,
            zt = Et.geometry,
            vt = Et.material,
            Ge = Et.group;
          if (vt.side === zi && kt.layers.test(K.layers)) {
            const Qt = vt.side;
            (vt.side = Dn),
              (vt.needsUpdate = !0),
              ma(kt, Z, K, zt, vt, Ge),
              (vt.side = Qt),
              (vt.needsUpdate = !0),
              (Je = !0);
          }
        }
        Je === !0 &&
          (I.updateMultisampleRenderTarget(pe), I.updateRenderTargetMipmap(pe));
      }
      b.setRenderTarget(Re),
        b.setClearColor(ie, ue),
        $e !== void 0 && (K.viewport = $e),
        (b.toneMapping = Ie);
    }
    function zr(A, k, Z) {
      const K = k.isScene === !0 ? k.overrideMaterial : null;
      for (let q = 0, pe = A.length; q < pe; q++) {
        const Se = A[q],
          Re = Se.object,
          Ie = Se.geometry,
          $e = K === null ? Se.material : K,
          Je = Se.group;
        Re.layers.test(Z.layers) && ma(Re, k, Z, Ie, $e, Je);
      }
    }
    function ma(A, k, Z, K, q, pe) {
      A.onBeforeRender(b, k, Z, K, q, pe),
        A.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse, A.matrixWorld),
        A.normalMatrix.getNormalMatrix(A.modelViewMatrix),
        q.onBeforeRender(b, k, Z, K, A, pe),
        q.transparent === !0 && q.side === zi && q.forceSinglePass === !1
          ? ((q.side = Dn),
            (q.needsUpdate = !0),
            b.renderBufferDirect(Z, k, K, q, A, pe),
            (q.side = ur),
            (q.needsUpdate = !0),
            b.renderBufferDirect(Z, k, K, q, A, pe),
            (q.side = zi))
          : b.renderBufferDirect(Z, k, K, q, A, pe),
        A.onAfterRender(b, k, Z, K, q, pe);
    }
    function Gr(A, k, Z) {
      k.isScene !== !0 && (k = Ot);
      const K = Oe.get(A),
        q = m.state.lights,
        pe = m.state.shadowsArray,
        Se = q.state.version,
        Re = Ne.getParameters(A, q.state, pe, k, Z),
        Ie = Ne.getProgramCacheKey(Re);
      let $e = K.programs;
      (K.environment = A.isMeshStandardMaterial ? k.environment : null),
        (K.fog = k.fog),
        (K.envMap = (A.isMeshStandardMaterial ? Y : S).get(
          A.envMap || K.environment,
        )),
        (K.envMapRotation =
          K.environment !== null && A.envMap === null
            ? k.environmentRotation
            : A.envMapRotation),
        $e === void 0 &&
          (A.addEventListener("dispose", nt),
          ($e = new Map()),
          (K.programs = $e));
      let Je = $e.get(Ie);
      if (Je !== void 0) {
        if (K.currentProgram === Je && K.lightsStateVersion === Se)
          return ga(A, Re), Je;
      } else
        (Re.uniforms = Ne.getUniforms(A)),
          A.onBeforeCompile(Re, b),
          (Je = Ne.acquireProgram(Re, Ie)),
          $e.set(Ie, Je),
          (K.uniforms = Re.uniforms);
      const ke = K.uniforms;
      return (
        ((!A.isShaderMaterial && !A.isRawShaderMaterial) ||
          A.clipping === !0) &&
          (ke.clippingPlanes = me.uniform),
        ga(A, Re),
        (K.needsLights = Xo(A)),
        (K.lightsStateVersion = Se),
        K.needsLights &&
          ((ke.ambientLightColor.value = q.state.ambient),
          (ke.lightProbe.value = q.state.probe),
          (ke.directionalLights.value = q.state.directional),
          (ke.directionalLightShadows.value = q.state.directionalShadow),
          (ke.spotLights.value = q.state.spot),
          (ke.spotLightShadows.value = q.state.spotShadow),
          (ke.rectAreaLights.value = q.state.rectArea),
          (ke.ltc_1.value = q.state.rectAreaLTC1),
          (ke.ltc_2.value = q.state.rectAreaLTC2),
          (ke.pointLights.value = q.state.point),
          (ke.pointLightShadows.value = q.state.pointShadow),
          (ke.hemisphereLights.value = q.state.hemi),
          (ke.directionalShadowMap.value = q.state.directionalShadowMap),
          (ke.directionalShadowMatrix.value = q.state.directionalShadowMatrix),
          (ke.spotShadowMap.value = q.state.spotShadowMap),
          (ke.spotLightMatrix.value = q.state.spotLightMatrix),
          (ke.spotLightMap.value = q.state.spotLightMap),
          (ke.pointShadowMap.value = q.state.pointShadowMap),
          (ke.pointShadowMatrix.value = q.state.pointShadowMatrix)),
        (K.currentProgram = Je),
        (K.uniformsList = null),
        Je
      );
    }
    function _a(A) {
      if (A.uniformsList === null) {
        const k = A.currentProgram.getUniforms();
        A.uniformsList = Do.seqWithValue(k.seq, A.uniforms);
      }
      return A.uniformsList;
    }
    function ga(A, k) {
      const Z = Oe.get(A);
      (Z.outputColorSpace = k.outputColorSpace),
        (Z.batching = k.batching),
        (Z.batchingColor = k.batchingColor),
        (Z.instancing = k.instancing),
        (Z.instancingColor = k.instancingColor),
        (Z.instancingMorph = k.instancingMorph),
        (Z.skinning = k.skinning),
        (Z.morphTargets = k.morphTargets),
        (Z.morphNormals = k.morphNormals),
        (Z.morphColors = k.morphColors),
        (Z.morphTargetsCount = k.morphTargetsCount),
        (Z.numClippingPlanes = k.numClippingPlanes),
        (Z.numIntersection = k.numClipIntersection),
        (Z.vertexAlphas = k.vertexAlphas),
        (Z.vertexTangents = k.vertexTangents),
        (Z.toneMapping = k.toneMapping);
    }
    function va(A, k, Z, K, q) {
      k.isScene !== !0 && (k = Ot), I.resetTextureUnits();
      const pe = k.fog,
        Se = K.isMeshStandardMaterial ? k.environment : null,
        Re =
          G === null
            ? b.outputColorSpace
            : G.isXRRenderTarget === !0
              ? G.texture.colorSpace
              : ws,
        Ie = (K.isMeshStandardMaterial ? Y : S).get(K.envMap || Se),
        $e =
          K.vertexColors === !0 &&
          !!Z.attributes.color &&
          Z.attributes.color.itemSize === 4,
        Je = !!Z.attributes.tangent && (!!K.normalMap || K.anisotropy > 0),
        ke = !!Z.morphAttributes.position,
        gt = !!Z.morphAttributes.normal,
        Et = !!Z.morphAttributes.color;
      let kt = cr;
      K.toneMapped &&
        (G === null || G.isXRRenderTarget === !0) &&
        (kt = b.toneMapping);
      const zt =
          Z.morphAttributes.position ||
          Z.morphAttributes.normal ||
          Z.morphAttributes.color,
        vt = zt !== void 0 ? zt.length : 0,
        Ge = Oe.get(K),
        Qt = m.state.lights;
      if (_e === !0 && (Ue === !0 || A !== y)) {
        const sn = A === y && K.id === R;
        me.setState(K, A, sn);
      }
      let St = !1;
      K.version === Ge.__version
        ? ((Ge.needsLights && Ge.lightsStateVersion !== Qt.state.version) ||
            Ge.outputColorSpace !== Re ||
            (q.isBatchedMesh && Ge.batching === !1) ||
            (!q.isBatchedMesh && Ge.batching === !0) ||
            (q.isBatchedMesh &&
              Ge.batchingColor === !0 &&
              q.colorTexture === null) ||
            (q.isBatchedMesh &&
              Ge.batchingColor === !1 &&
              q.colorTexture !== null) ||
            (q.isInstancedMesh && Ge.instancing === !1) ||
            (!q.isInstancedMesh && Ge.instancing === !0) ||
            (q.isSkinnedMesh && Ge.skinning === !1) ||
            (!q.isSkinnedMesh && Ge.skinning === !0) ||
            (q.isInstancedMesh &&
              Ge.instancingColor === !0 &&
              q.instanceColor === null) ||
            (q.isInstancedMesh &&
              Ge.instancingColor === !1 &&
              q.instanceColor !== null) ||
            (q.isInstancedMesh &&
              Ge.instancingMorph === !0 &&
              q.morphTexture === null) ||
            (q.isInstancedMesh &&
              Ge.instancingMorph === !1 &&
              q.morphTexture !== null) ||
            Ge.envMap !== Ie ||
            (K.fog === !0 && Ge.fog !== pe) ||
            (Ge.numClippingPlanes !== void 0 &&
              (Ge.numClippingPlanes !== me.numPlanes ||
                Ge.numIntersection !== me.numIntersection)) ||
            Ge.vertexAlphas !== $e ||
            Ge.vertexTangents !== Je ||
            Ge.morphTargets !== ke ||
            Ge.morphNormals !== gt ||
            Ge.morphColors !== Et ||
            Ge.toneMapping !== kt ||
            Ge.morphTargetsCount !== vt) &&
          (St = !0)
        : ((St = !0), (Ge.__version = K.version));
      let fn = Ge.currentProgram;
      St === !0 && (fn = Gr(K, k, q));
      let yi = !1,
        xn = !1,
        Xi = !1;
      const Nt = fn.getUniforms(),
        hn = Ge.uniforms;
      if (
        (ze.useProgram(fn.program) && ((yi = !0), (xn = !0), (Xi = !0)),
        K.id !== R && ((R = K.id), (xn = !0)),
        yi || y !== A)
      ) {
        ze.buffers.depth.getReversed()
          ? (ye.copy(A.projectionMatrix),
            AS(ye),
            wS(ye),
            Nt.setValue(F, "projectionMatrix", ye))
          : Nt.setValue(F, "projectionMatrix", A.projectionMatrix),
          Nt.setValue(F, "viewMatrix", A.matrixWorldInverse);
        const an = Nt.map.cameraPosition;
        an !== void 0 &&
          an.setValue(F, ft.setFromMatrixPosition(A.matrixWorld)),
          je.logarithmicDepthBuffer &&
            Nt.setValue(
              F,
              "logDepthBufFC",
              2 / (Math.log(A.far + 1) / Math.LN2),
            ),
          (K.isMeshPhongMaterial ||
            K.isMeshToonMaterial ||
            K.isMeshLambertMaterial ||
            K.isMeshBasicMaterial ||
            K.isMeshStandardMaterial ||
            K.isShaderMaterial) &&
            Nt.setValue(F, "isOrthographic", A.isOrthographicCamera === !0),
          y !== A && ((y = A), (xn = !0), (Xi = !0));
      }
      if (q.isSkinnedMesh) {
        Nt.setOptional(F, q, "bindMatrix"),
          Nt.setOptional(F, q, "bindMatrixInverse");
        const sn = q.skeleton;
        sn &&
          (sn.boneTexture === null && sn.computeBoneTexture(),
          Nt.setValue(F, "boneTexture", sn.boneTexture, I));
      }
      q.isBatchedMesh &&
        (Nt.setOptional(F, q, "batchingTexture"),
        Nt.setValue(F, "batchingTexture", q._matricesTexture, I),
        Nt.setOptional(F, q, "batchingIdTexture"),
        Nt.setValue(F, "batchingIdTexture", q._indirectTexture, I),
        Nt.setOptional(F, q, "batchingColorTexture"),
        q._colorsTexture !== null &&
          Nt.setValue(F, "batchingColorTexture", q._colorsTexture, I));
      const wn = Z.morphAttributes;
      if (
        ((wn.position !== void 0 ||
          wn.normal !== void 0 ||
          wn.color !== void 0) &&
          Ze.update(q, Z, fn),
        (xn || Ge.receiveShadow !== q.receiveShadow) &&
          ((Ge.receiveShadow = q.receiveShadow),
          Nt.setValue(F, "receiveShadow", q.receiveShadow)),
        K.isMeshGouraudMaterial &&
          K.envMap !== null &&
          ((hn.envMap.value = Ie),
          (hn.flipEnvMap.value =
            Ie.isCubeTexture && Ie.isRenderTargetTexture === !1 ? -1 : 1)),
        K.isMeshStandardMaterial &&
          K.envMap === null &&
          k.environment !== null &&
          (hn.envMapIntensity.value = k.environmentIntensity),
        xn &&
          (Nt.setValue(F, "toneMappingExposure", b.toneMappingExposure),
          Ge.needsLights && Wo(hn, Xi),
          pe && K.fog === !0 && ge.refreshFogUniforms(hn, pe),
          ge.refreshMaterialUniforms(
            hn,
            K,
            j,
            de,
            m.state.transmissionRenderTarget[A.id],
          ),
          Do.upload(F, _a(Ge), hn, I)),
        K.isShaderMaterial &&
          K.uniformsNeedUpdate === !0 &&
          (Do.upload(F, _a(Ge), hn, I), (K.uniformsNeedUpdate = !1)),
        K.isSpriteMaterial && Nt.setValue(F, "center", q.center),
        Nt.setValue(F, "modelViewMatrix", q.modelViewMatrix),
        Nt.setValue(F, "normalMatrix", q.normalMatrix),
        Nt.setValue(F, "modelMatrix", q.matrixWorld),
        K.isShaderMaterial || K.isRawShaderMaterial)
      ) {
        const sn = K.uniformsGroups;
        for (let an = 0, hr = sn.length; an < hr; an++) {
          const bn = sn[an];
          H.update(bn, fn), H.bind(bn, fn);
        }
      }
      return fn;
    }
    function Wo(A, k) {
      (A.ambientLightColor.needsUpdate = k),
        (A.lightProbe.needsUpdate = k),
        (A.directionalLights.needsUpdate = k),
        (A.directionalLightShadows.needsUpdate = k),
        (A.pointLights.needsUpdate = k),
        (A.pointLightShadows.needsUpdate = k),
        (A.spotLights.needsUpdate = k),
        (A.spotLightShadows.needsUpdate = k),
        (A.rectAreaLights.needsUpdate = k),
        (A.hemisphereLights.needsUpdate = k);
    }
    function Xo(A) {
      return (
        A.isMeshLambertMaterial ||
        A.isMeshToonMaterial ||
        A.isMeshPhongMaterial ||
        A.isMeshStandardMaterial ||
        A.isShadowMaterial ||
        (A.isShaderMaterial && A.lights === !0)
      );
    }
    (this.getActiveCubeFace = function () {
      return N;
    }),
      (this.getActiveMipmapLevel = function () {
        return U;
      }),
      (this.getRenderTarget = function () {
        return G;
      }),
      (this.setRenderTargetTextures = function (A, k, Z) {
        (Oe.get(A.texture).__webglTexture = k),
          (Oe.get(A.depthTexture).__webglTexture = Z);
        const K = Oe.get(A);
        (K.__hasExternalTextures = !0),
          (K.__autoAllocateDepthBuffer = Z === void 0),
          K.__autoAllocateDepthBuffer ||
            (mt.has("WEBGL_multisampled_render_to_texture") === !0 &&
              (console.warn(
                "THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided",
              ),
              (K.__useRenderToTexture = !1)));
      }),
      (this.setRenderTargetFramebuffer = function (A, k) {
        const Z = Oe.get(A);
        (Z.__webglFramebuffer = k), (Z.__useDefaultFramebuffer = k === void 0);
      });
    const qo = F.createFramebuffer();
    (this.setRenderTarget = function (A, k = 0, Z = 0) {
      (G = A), (N = k), (U = Z);
      let K = !0,
        q = null,
        pe = !1,
        Se = !1;
      if (A) {
        const Ie = Oe.get(A);
        if (Ie.__useDefaultFramebuffer !== void 0)
          ze.bindFramebuffer(F.FRAMEBUFFER, null), (K = !1);
        else if (Ie.__webglFramebuffer === void 0) I.setupRenderTarget(A);
        else if (Ie.__hasExternalTextures)
          I.rebindTextures(
            A,
            Oe.get(A.texture).__webglTexture,
            Oe.get(A.depthTexture).__webglTexture,
          );
        else if (A.depthBuffer) {
          const ke = A.depthTexture;
          if (Ie.__boundDepthTexture !== ke) {
            if (
              ke !== null &&
              Oe.has(ke) &&
              (A.width !== ke.image.width || A.height !== ke.image.height)
            )
              throw new Error(
                "WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.",
              );
            I.setupDepthRenderbuffer(A);
          }
        }
        const $e = A.texture;
        ($e.isData3DTexture ||
          $e.isDataArrayTexture ||
          $e.isCompressedArrayTexture) &&
          (Se = !0);
        const Je = Oe.get(A).__webglFramebuffer;
        A.isWebGLCubeRenderTarget
          ? (Array.isArray(Je[k]) ? (q = Je[k][Z]) : (q = Je[k]), (pe = !0))
          : A.samples > 0 && I.useMultisampledRTT(A) === !1
            ? (q = Oe.get(A).__webglMultisampledFramebuffer)
            : Array.isArray(Je)
              ? (q = Je[Z])
              : (q = Je),
          B.copy(A.viewport),
          Q.copy(A.scissor),
          ($ = A.scissorTest);
      } else
        B.copy(De).multiplyScalar(j).floor(),
          Q.copy(lt).multiplyScalar(j).floor(),
          ($ = Ct);
      if (
        (Z !== 0 && (q = qo),
        ze.bindFramebuffer(F.FRAMEBUFFER, q) && K && ze.drawBuffers(A, q),
        ze.viewport(B),
        ze.scissor(Q),
        ze.setScissorTest($),
        pe)
      ) {
        const Ie = Oe.get(A.texture);
        F.framebufferTexture2D(
          F.FRAMEBUFFER,
          F.COLOR_ATTACHMENT0,
          F.TEXTURE_CUBE_MAP_POSITIVE_X + k,
          Ie.__webglTexture,
          Z,
        );
      } else if (Se) {
        const Ie = Oe.get(A.texture),
          $e = k;
        F.framebufferTextureLayer(
          F.FRAMEBUFFER,
          F.COLOR_ATTACHMENT0,
          Ie.__webglTexture,
          Z,
          $e,
        );
      } else if (A !== null && Z !== 0) {
        const Ie = Oe.get(A.texture);
        F.framebufferTexture2D(
          F.FRAMEBUFFER,
          F.COLOR_ATTACHMENT0,
          F.TEXTURE_2D,
          Ie.__webglTexture,
          Z,
        );
      }
      R = -1;
    }),
      (this.readRenderTargetPixels = function (A, k, Z, K, q, pe, Se) {
        if (!(A && A.isWebGLRenderTarget)) {
          console.error(
            "THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.",
          );
          return;
        }
        let Re = Oe.get(A).__webglFramebuffer;
        if ((A.isWebGLCubeRenderTarget && Se !== void 0 && (Re = Re[Se]), Re)) {
          ze.bindFramebuffer(F.FRAMEBUFFER, Re);
          try {
            const Ie = A.texture,
              $e = Ie.format,
              Je = Ie.type;
            if (!je.textureFormatReadable($e)) {
              console.error(
                "THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.",
              );
              return;
            }
            if (!je.textureTypeReadable(Je)) {
              console.error(
                "THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.",
              );
              return;
            }
            k >= 0 &&
              k <= A.width - K &&
              Z >= 0 &&
              Z <= A.height - q &&
              F.readPixels(k, Z, K, q, et.convert($e), et.convert(Je), pe);
          } finally {
            const Ie = G !== null ? Oe.get(G).__webglFramebuffer : null;
            ze.bindFramebuffer(F.FRAMEBUFFER, Ie);
          }
        }
      }),
      (this.readRenderTargetPixelsAsync = async function (
        A,
        k,
        Z,
        K,
        q,
        pe,
        Se,
      ) {
        if (!(A && A.isWebGLRenderTarget))
          throw new Error(
            "THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.",
          );
        let Re = Oe.get(A).__webglFramebuffer;
        if ((A.isWebGLCubeRenderTarget && Se !== void 0 && (Re = Re[Se]), Re)) {
          const Ie = A.texture,
            $e = Ie.format,
            Je = Ie.type;
          if (!je.textureFormatReadable($e))
            throw new Error(
              "THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.",
            );
          if (!je.textureTypeReadable(Je))
            throw new Error(
              "THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.",
            );
          if (k >= 0 && k <= A.width - K && Z >= 0 && Z <= A.height - q) {
            ze.bindFramebuffer(F.FRAMEBUFFER, Re);
            const ke = F.createBuffer();
            F.bindBuffer(F.PIXEL_PACK_BUFFER, ke),
              F.bufferData(F.PIXEL_PACK_BUFFER, pe.byteLength, F.STREAM_READ),
              F.readPixels(k, Z, K, q, et.convert($e), et.convert(Je), 0);
            const gt = G !== null ? Oe.get(G).__webglFramebuffer : null;
            ze.bindFramebuffer(F.FRAMEBUFFER, gt);
            const Et = F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE, 0);
            return (
              F.flush(),
              await TS(F, Et, 4),
              F.bindBuffer(F.PIXEL_PACK_BUFFER, ke),
              F.getBufferSubData(F.PIXEL_PACK_BUFFER, 0, pe),
              F.deleteBuffer(ke),
              F.deleteSync(Et),
              pe
            );
          } else
            throw new Error(
              "THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.",
            );
        }
      }),
      (this.copyFramebufferToTexture = function (A, k = null, Z = 0) {
        A.isTexture !== !0 &&
          (ms(
            "WebGLRenderer: copyFramebufferToTexture function signature has changed.",
          ),
          (k = arguments[0] || null),
          (A = arguments[1]));
        const K = Math.pow(2, -Z),
          q = Math.floor(A.image.width * K),
          pe = Math.floor(A.image.height * K),
          Se = k !== null ? k.x : 0,
          Re = k !== null ? k.y : 0;
        I.setTexture2D(A, 0),
          F.copyTexSubImage2D(F.TEXTURE_2D, Z, 0, 0, Se, Re, q, pe),
          ze.unbindTexture();
      });
    const Yo = F.createFramebuffer(),
      Zo = F.createFramebuffer();
    (this.copyTextureToTexture = function (
      A,
      k,
      Z = null,
      K = null,
      q = 0,
      pe = null,
    ) {
      A.isTexture !== !0 &&
        (ms(
          "WebGLRenderer: copyTextureToTexture function signature has changed.",
        ),
        (K = arguments[0] || null),
        (A = arguments[1]),
        (k = arguments[2]),
        (pe = arguments[3] || 0),
        (Z = null)),
        pe === null &&
          (q !== 0
            ? (ms(
                "WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels.",
              ),
              (pe = q),
              (q = 0))
            : (pe = 0));
      let Se, Re, Ie, $e, Je, ke, gt, Et, kt;
      const zt = A.isCompressedTexture ? A.mipmaps[pe] : A.image;
      if (Z !== null)
        (Se = Z.max.x - Z.min.x),
          (Re = Z.max.y - Z.min.y),
          (Ie = Z.isBox3 ? Z.max.z - Z.min.z : 1),
          ($e = Z.min.x),
          (Je = Z.min.y),
          (ke = Z.isBox3 ? Z.min.z : 0);
      else {
        const wn = Math.pow(2, -q);
        (Se = Math.floor(zt.width * wn)),
          (Re = Math.floor(zt.height * wn)),
          A.isDataArrayTexture
            ? (Ie = zt.depth)
            : A.isData3DTexture
              ? (Ie = Math.floor(zt.depth * wn))
              : (Ie = 1),
          ($e = 0),
          (Je = 0),
          (ke = 0);
      }
      K !== null
        ? ((gt = K.x), (Et = K.y), (kt = K.z))
        : ((gt = 0), (Et = 0), (kt = 0));
      const vt = et.convert(k.format),
        Ge = et.convert(k.type);
      let Qt;
      k.isData3DTexture
        ? (I.setTexture3D(k, 0), (Qt = F.TEXTURE_3D))
        : k.isDataArrayTexture || k.isCompressedArrayTexture
          ? (I.setTexture2DArray(k, 0), (Qt = F.TEXTURE_2D_ARRAY))
          : (I.setTexture2D(k, 0), (Qt = F.TEXTURE_2D)),
        F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL, k.flipY),
        F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL, k.premultiplyAlpha),
        F.pixelStorei(F.UNPACK_ALIGNMENT, k.unpackAlignment);
      const St = F.getParameter(F.UNPACK_ROW_LENGTH),
        fn = F.getParameter(F.UNPACK_IMAGE_HEIGHT),
        yi = F.getParameter(F.UNPACK_SKIP_PIXELS),
        xn = F.getParameter(F.UNPACK_SKIP_ROWS),
        Xi = F.getParameter(F.UNPACK_SKIP_IMAGES);
      F.pixelStorei(F.UNPACK_ROW_LENGTH, zt.width),
        F.pixelStorei(F.UNPACK_IMAGE_HEIGHT, zt.height),
        F.pixelStorei(F.UNPACK_SKIP_PIXELS, $e),
        F.pixelStorei(F.UNPACK_SKIP_ROWS, Je),
        F.pixelStorei(F.UNPACK_SKIP_IMAGES, ke);
      const Nt = A.isDataArrayTexture || A.isData3DTexture,
        hn = k.isDataArrayTexture || k.isData3DTexture;
      if (A.isDepthTexture) {
        const wn = Oe.get(A),
          sn = Oe.get(k),
          an = Oe.get(wn.__renderTarget),
          hr = Oe.get(sn.__renderTarget);
        ze.bindFramebuffer(F.READ_FRAMEBUFFER, an.__webglFramebuffer),
          ze.bindFramebuffer(F.DRAW_FRAMEBUFFER, hr.__webglFramebuffer);
        for (let bn = 0; bn < Ie; bn++)
          Nt &&
            (F.framebufferTextureLayer(
              F.READ_FRAMEBUFFER,
              F.COLOR_ATTACHMENT0,
              Oe.get(A).__webglTexture,
              q,
              ke + bn,
            ),
            F.framebufferTextureLayer(
              F.DRAW_FRAMEBUFFER,
              F.COLOR_ATTACHMENT0,
              Oe.get(k).__webglTexture,
              pe,
              kt + bn,
            )),
            F.blitFramebuffer(
              $e,
              Je,
              Se,
              Re,
              gt,
              Et,
              Se,
              Re,
              F.DEPTH_BUFFER_BIT,
              F.NEAREST,
            );
        ze.bindFramebuffer(F.READ_FRAMEBUFFER, null),
          ze.bindFramebuffer(F.DRAW_FRAMEBUFFER, null);
      } else if (q !== 0 || A.isRenderTargetTexture || Oe.has(A)) {
        const wn = Oe.get(A),
          sn = Oe.get(k);
        ze.bindFramebuffer(F.READ_FRAMEBUFFER, Yo),
          ze.bindFramebuffer(F.DRAW_FRAMEBUFFER, Zo);
        for (let an = 0; an < Ie; an++)
          Nt
            ? F.framebufferTextureLayer(
                F.READ_FRAMEBUFFER,
                F.COLOR_ATTACHMENT0,
                wn.__webglTexture,
                q,
                ke + an,
              )
            : F.framebufferTexture2D(
                F.READ_FRAMEBUFFER,
                F.COLOR_ATTACHMENT0,
                F.TEXTURE_2D,
                wn.__webglTexture,
                q,
              ),
            hn
              ? F.framebufferTextureLayer(
                  F.DRAW_FRAMEBUFFER,
                  F.COLOR_ATTACHMENT0,
                  sn.__webglTexture,
                  pe,
                  kt + an,
                )
              : F.framebufferTexture2D(
                  F.DRAW_FRAMEBUFFER,
                  F.COLOR_ATTACHMENT0,
                  F.TEXTURE_2D,
                  sn.__webglTexture,
                  pe,
                ),
            q !== 0
              ? F.blitFramebuffer(
                  $e,
                  Je,
                  Se,
                  Re,
                  gt,
                  Et,
                  Se,
                  Re,
                  F.COLOR_BUFFER_BIT,
                  F.NEAREST,
                )
              : hn
                ? F.copyTexSubImage3D(Qt, pe, gt, Et, kt + an, $e, Je, Se, Re)
                : F.copyTexSubImage2D(Qt, pe, gt, Et, $e, Je, Se, Re);
        ze.bindFramebuffer(F.READ_FRAMEBUFFER, null),
          ze.bindFramebuffer(F.DRAW_FRAMEBUFFER, null);
      } else
        hn
          ? A.isDataTexture || A.isData3DTexture
            ? F.texSubImage3D(Qt, pe, gt, Et, kt, Se, Re, Ie, vt, Ge, zt.data)
            : k.isCompressedArrayTexture
              ? F.compressedTexSubImage3D(
                  Qt,
                  pe,
                  gt,
                  Et,
                  kt,
                  Se,
                  Re,
                  Ie,
                  vt,
                  zt.data,
                )
              : F.texSubImage3D(Qt, pe, gt, Et, kt, Se, Re, Ie, vt, Ge, zt)
          : A.isDataTexture
            ? F.texSubImage2D(F.TEXTURE_2D, pe, gt, Et, Se, Re, vt, Ge, zt.data)
            : A.isCompressedTexture
              ? F.compressedTexSubImage2D(
                  F.TEXTURE_2D,
                  pe,
                  gt,
                  Et,
                  zt.width,
                  zt.height,
                  vt,
                  zt.data,
                )
              : F.texSubImage2D(F.TEXTURE_2D, pe, gt, Et, Se, Re, vt, Ge, zt);
      F.pixelStorei(F.UNPACK_ROW_LENGTH, St),
        F.pixelStorei(F.UNPACK_IMAGE_HEIGHT, fn),
        F.pixelStorei(F.UNPACK_SKIP_PIXELS, yi),
        F.pixelStorei(F.UNPACK_SKIP_ROWS, xn),
        F.pixelStorei(F.UNPACK_SKIP_IMAGES, Xi),
        pe === 0 && k.generateMipmaps && F.generateMipmap(Qt),
        ze.unbindTexture();
    }),
      (this.copyTextureToTexture3D = function (
        A,
        k,
        Z = null,
        K = null,
        q = 0,
      ) {
        return (
          A.isTexture !== !0 &&
            (ms(
              "WebGLRenderer: copyTextureToTexture3D function signature has changed.",
            ),
            (Z = arguments[0] || null),
            (K = arguments[1] || null),
            (A = arguments[2]),
            (k = arguments[3]),
            (q = arguments[4] || 0)),
          ms(
            'WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.',
          ),
          this.copyTextureToTexture(A, k, Z, K, q)
        );
      }),
      (this.initRenderTarget = function (A) {
        Oe.get(A).__webglFramebuffer === void 0 && I.setupRenderTarget(A);
      }),
      (this.initTexture = function (A) {
        A.isCubeTexture
          ? I.setTextureCube(A, 0)
          : A.isData3DTexture
            ? I.setTexture3D(A, 0)
            : A.isDataArrayTexture || A.isCompressedArrayTexture
              ? I.setTexture2DArray(A, 0)
              : I.setTexture2D(A, 0),
          ze.unbindTexture();
      }),
      (this.resetState = function () {
        (N = 0), (U = 0), (G = null), ze.reset(), It.reset();
      }),
      typeof __THREE_DEVTOOLS__ < "u" &&
        __THREE_DEVTOOLS__.dispatchEvent(
          new CustomEvent("observe", { detail: this }),
        );
  }
  get coordinateSystem() {
    return Hi;
  }
  get outputColorSpace() {
    return this._outputColorSpace;
  }
  set outputColorSpace(e) {
    this._outputColorSpace = e;
    const t = this.getContext();
    (t.drawingBufferColorspace = Tt._getDrawingBufferColorSpace(e)),
      (t.unpackColorSpace = Tt._getUnpackColorSpace());
  }
}
const Rt = {
  LIGHT_GREEN: "#75a743",
  GREEN: "#468232",
  DARK_GREEN: "#25562e",
  DARK: "#202e37",
  RED: "#a53030",
  DIRT: "#4d2b32",
  BLUE: "#4f8fba",
  YELLOW: "#de9e41",
  WHITE: "#ebede9",
  ORANGE: "#da863e",
  PINK: "#df84a5",
  METAL: "#c7cfcc",
};
class Fu {
  constructor(e) {
    Qe(this, "mesh");
    Qe(this, "isAlive", !0);
    this.mesh = e.mesh;
  }
  update(e, t, i, a) {}
  graphics(e, t, i, a) {}
  kill() {
    this.isAlive = !1;
  }
}
class Vi {
  constructor(e) {
    Qe(this, "center");
    Qe(this, "parts");
    (this.center = e.center), (this.parts = e.parts), this.updateParts();
  }
  get position() {
    return this.center;
  }
  set position(e) {
    (this.center = e.clone()), this.updateParts();
  }
  updateParts() {
    for (const e of this.parts)
      e.mesh.position.set(
        this.center.x + e.offset.x,
        this.center.y + e.offset.y,
        this.center.z + e.offset.z,
      );
  }
}
const kw = {
  createGrid(s, e) {
    const t = [];
    for (let i = 0; i < s; i++) {
      t[i] = [];
      for (let a = 0; a < e; a++) {
        const o = { actors: [], isWalkable: !0 };
        t[i][a] = o;
      }
    }
    return t;
  },
};
class Ww {
  constructor(e) {
    Qe(this, "actorsGrid");
    Qe(this, "components", []);
    Qe(this, "camera");
    Qe(this, "scene");
    (this.actorsGrid = kw.createGrid(e.width, e.height)),
      (this.camera = e.camera ?? new ti()),
      (this.scene = e.scene ?? new QS());
  }
  onStart(e) {}
  onSwitch(e) {}
  addActor(e, t) {
    if (
      !(0 <= t.x && t.x < this.actorsGrid.length) &&
      !(0 <= t.y && t.y < this.actorsGrid[0].length)
    )
      throw new Error(`Position ${t.x},${t.y} is out of bounds`);
    this.actorsGrid[t.x][t.y].actors.push(e),
      e.mesh instanceof Vi
        ? e.mesh.parts.forEach((i) => this.scene.add(i.mesh))
        : this.scene.add(e.mesh);
  }
  addComponent(e) {
    this.components.push(e),
      e.mesh instanceof Vi
        ? e.mesh.parts.forEach((t) => this.scene.add(t.mesh))
        : this.scene.add(e.mesh);
  }
  update(e, t) {
    this.actorsGrid.forEach((o, c) => {
      o.forEach((u, d) => {
        const h = new He(c, d);
        u.actors.forEach((p) => p.update(e, t, this, h.clone()));
      });
    }),
      this.components.forEach((o) => o.update(e, t, this)),
      this.actorsGrid.map((o) =>
        o.map((c) => {
          const u = [],
            d = [];
          for (let h = 0; h < c.actors.length; h++) {
            const p = c.actors[h];
            p.isAlive ? u.push(p) : d.push(p);
          }
          d.forEach((h) => {
            h.mesh instanceof Vi
              ? h.mesh.parts.forEach((p) => this.scene.remove(p.mesh))
              : this.scene.remove(h.mesh);
          }),
            (c.actors = u);
        }),
      );
    const i = [],
      a = [];
    for (let o = 0; o < this.components.length; o++) {
      const c = this.components[o];
      c.isAlive ? i.push(c) : a.push(c);
    }
    a.forEach((o) => {
      o.mesh instanceof Vi
        ? o.mesh.parts.forEach((c) => this.scene.remove(c.mesh))
        : this.scene.remove(o.mesh);
    }),
      (this.components = i);
  }
  graphics(e, t) {
    this.actorsGrid.forEach((i, a) => {
      i.forEach((o, c) => {
        const u = new He(a, c);
        o.actors.forEach((d) => d.graphics(e, t, this, u.clone()));
      });
    }),
      this.components.forEach((i) => i.graphics(e, t, this));
  }
}
var Ms = function () {
  var s = 0,
    e = document.createElement("div");
  (e.style.cssText =
    "position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000"),
    e.addEventListener(
      "click",
      function (p) {
        p.preventDefault(), i(++s % e.children.length);
      },
      !1,
    );
  function t(p) {
    return e.appendChild(p.dom), p;
  }
  function i(p) {
    for (var _ = 0; _ < e.children.length; _++)
      e.children[_].style.display = _ === p ? "block" : "none";
    s = p;
  }
  var a = (performance || Date).now(),
    o = a,
    c = 0,
    u = t(new Ms.Panel("FPS", "#0ff", "#002")),
    d = t(new Ms.Panel("MS", "#0f0", "#020"));
  if (self.performance && self.performance.memory)
    var h = t(new Ms.Panel("MB", "#f08", "#201"));
  return (
    i(0),
    {
      REVISION: 16,
      dom: e,
      addPanel: t,
      showPanel: i,
      begin: function () {
        a = (performance || Date).now();
      },
      end: function () {
        c++;
        var p = (performance || Date).now();
        if (
          (d.update(p - a, 200),
          p >= o + 1e3 &&
            (u.update((c * 1e3) / (p - o), 100), (o = p), (c = 0), h))
        ) {
          var _ = performance.memory;
          h.update(_.usedJSHeapSize / 1048576, _.jsHeapSizeLimit / 1048576);
        }
        return p;
      },
      update: function () {
        a = this.end();
      },
      domElement: e,
      setMode: i,
    }
  );
};
Ms.Panel = function (s, e, t) {
  var i = 1 / 0,
    a = 0,
    o = Math.round,
    c = o(window.devicePixelRatio || 1),
    u = 80 * c,
    d = 48 * c,
    h = 3 * c,
    p = 2 * c,
    _ = 3 * c,
    g = 15 * c,
    M = 74 * c,
    T = 30 * c,
    C = document.createElement("canvas");
  (C.width = u), (C.height = d), (C.style.cssText = "width:80px;height:48px");
  var v = C.getContext("2d");
  return (
    (v.font = "bold " + 9 * c + "px Helvetica,Arial,sans-serif"),
    (v.textBaseline = "top"),
    (v.fillStyle = t),
    v.fillRect(0, 0, u, d),
    (v.fillStyle = e),
    v.fillText(s, h, p),
    v.fillRect(_, g, M, T),
    (v.fillStyle = t),
    (v.globalAlpha = 0.9),
    v.fillRect(_, g, M, T),
    {
      dom: C,
      update: function (m, P) {
        (i = Math.min(i, m)),
          (a = Math.max(a, m)),
          (v.fillStyle = t),
          (v.globalAlpha = 1),
          v.fillRect(0, 0, u, g),
          (v.fillStyle = e),
          v.fillText(o(m) + " " + s + " (" + o(i) + "-" + o(a) + ")", h, p),
          v.drawImage(C, _ + c, g, M - c, T, _, g, M - c, T),
          v.fillRect(_ + M - c, g, c, T),
          (v.fillStyle = t),
          (v.globalAlpha = 0.9),
          v.fillRect(_ + M - c, g, c, o((1 - m / P) * T));
      },
    }
  );
};
const Xw = "canvas";
class qw {
  constructor() {
    Qe(this, "wasPressedMap", new Map());
    Qe(this, "pressedMap", new Map());
    document.addEventListener("keydown", (e) => {
      this.wasPressedMap.set(e.key, !0), this.pressedMap.set(e.key, !0);
    }),
      document.addEventListener("keyup", (e) => {
        this.wasPressedMap.set(e.key, !1), this.pressedMap.set(e.key, !1);
      });
  }
  wasPressed(e) {
    const t = this.wasPressedMap.get(e) || !1;
    return t && this.wasPressedMap.set(e, !1), t;
  }
  isPressed(e) {
    return this.pressedMap.get(e) || !1;
  }
}
const Yw = new qw();
class Zw {
  constructor() {
    Qe(this, "renderer");
    Qe(this, "keyboardHandler");
    Qe(this, "isGameOver", !1);
    Qe(this, "lastUpdate", Date.now());
    Qe(this, "lastGraphics", Date.now());
    Qe(this, "stats", new Ms());
    Qe(this, "containers", new Map());
    Qe(this, "currentContainer");
    (this.renderer = new Vw()),
      this.renderer.setSize(800, 800),
      (this.renderer.domElement.id = Xw),
      document.body.appendChild(this.renderer.domElement),
      (this.keyboardHandler = Yw),
      (this.stats = new Ms()),
      document.body.appendChild(this.stats.dom);
  }
  addContainer(e, t) {
    if (this.containers.has(e))
      throw new Error(`A container with key "${e}" already exists`);
    this.containers.set(e, t), t.onStart(this);
  }
  setContainer(e) {
    if (!this.containers.has(e))
      throw new Error(`A container with key "${e}" does not exist`);
    (this.currentContainer = this.containers.get(e)),
      this.currentContainer.onSwitch(this);
  }
  start() {
    if (!this.currentContainer) throw new Error("No container selected");
    const e = () => {
      if (!this.isGameOver) {
        if (!this.currentContainer) throw new Error("No container selected");
        this.update(),
          this.graphics(),
          this.renderer.render(
            this.currentContainer.scene,
            this.currentContainer.camera,
          ),
          this.stats.update(),
          requestAnimationFrame(e);
      }
    };
    e();
  }
  update() {
    const e = Date.now(),
      t = e - this.lastUpdate;
    (this.lastUpdate = e),
      this.currentContainer && this.currentContainer.update(this, t);
  }
  graphics() {
    const e = Date.now(),
      t = e - this.lastGraphics;
    (this.lastGraphics = e),
      this.currentContainer && this.currentContainer.graphics(this, t);
  }
}
class ko {
  constructor(e) {
    Qe(this, "mesh");
    Qe(this, "isAlive", !0);
    this.mesh = e.mesh;
  }
  update(e, t, i) {}
  graphics(e, t, i) {}
  kill() {
    this.isAlive = !1;
  }
}
var bo =
    typeof globalThis < "u"
      ? globalThis
      : typeof window < "u"
        ? window
        : typeof global < "u"
          ? global
          : typeof self < "u"
            ? self
            : {},
  Lc = {},
  Js = {},
  ia = { exports: {} };
/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */ var Kw = ia.exports,
  $d;
function $w() {
  return (
    $d ||
      (($d = 1),
      (function (s, e) {
        (function () {
          var t,
            i = "4.17.21",
            a = 200,
            o =
              "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",
            c = "Expected a function",
            u = "Invalid `variable` option passed into `_.template`",
            d = "__lodash_hash_undefined__",
            h = 500,
            p = "__lodash_placeholder__",
            _ = 1,
            g = 2,
            M = 4,
            T = 1,
            C = 2,
            v = 1,
            m = 2,
            P = 4,
            L = 8,
            b = 16,
            z = 32,
            N = 64,
            U = 128,
            G = 256,
            R = 512,
            y = 30,
            B = "...",
            Q = 800,
            $ = 16,
            ie = 1,
            ue = 2,
            ne = 3,
            de = 1 / 0,
            j = 9007199254740991,
            Ee = 17976931348623157e292,
            we = NaN,
            De = 4294967295,
            lt = De - 1,
            Ct = De >>> 1,
            oe = [
              ["ary", U],
              ["bind", v],
              ["bindKey", m],
              ["curry", L],
              ["curryRight", b],
              ["flip", R],
              ["partial", z],
              ["partialRight", N],
              ["rearg", G],
            ],
            _e = "[object Arguments]",
            Ue = "[object Array]",
            ye = "[object AsyncFunction]",
            Ve = "[object Boolean]",
            ft = "[object Date]",
            Ke = "[object DOMException]",
            Ot = "[object Error]",
            Lt = "[object Function]",
            ht = "[object GeneratorFunction]",
            F = "[object Map]",
            rn = "[object Number]",
            mt = "[object Null]",
            je = "[object Object]",
            ze = "[object Promise]",
            Ut = "[object Proxy]",
            Oe = "[object RegExp]",
            I = "[object Set]",
            S = "[object String]",
            Y = "[object Symbol]",
            ce = "[object Undefined]",
            fe = "[object WeakMap]",
            se = "[object WeakSet]",
            Ne = "[object ArrayBuffer]",
            ge = "[object DataView]",
            be = "[object Float32Array]",
            dt = "[object Float64Array]",
            me = "[object Int8Array]",
            Ce = "[object Int16Array]",
            We = "[object Int32Array]",
            Ze = "[object Uint8Array]",
            Pe = "[object Uint8ClampedArray]",
            ut = "[object Uint16Array]",
            et = "[object Uint32Array]",
            It = /\b__p \+= '';/g,
            H = /\b(__p \+=) '' \+/g,
            Me = /(__e\(.*?\)|\b__t\)) \+\n'';/g,
            ee = /&(?:amp|lt|gt|quot|#39);/g,
            le = /[&<>"']/g,
            Ae = RegExp(ee.source),
            Te = RegExp(le.source),
            nt = /<%-([\s\S]+?)%>/g,
            Ht = /<%([\s\S]+?)%>/g,
            Jt = /<%=([\s\S]+?)%>/g,
            At = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
            Nn = /^\w*$/,
            ni =
              /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
            Br = /[\\^$.*+?()[\]{}|]/g,
            ha = RegExp(Br.source),
            ii = /^\s+/,
            Ps = /\s/,
            da = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,
            pa = /\{\n\/\* \[wrapped with (.+)\] \*/,
            zr = /,? & /,
            ma = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,
            Gr = /[()=,{}\[\]\/\s]/,
            _a = /\\(\\)?/g,
            ga = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,
            va = /\w*$/,
            Wo = /^[-+]0x[0-9a-f]+$/i,
            Xo = /^0b[01]+$/i,
            qo = /^\[object .+?Constructor\]$/,
            Yo = /^0o[0-7]+$/i,
            Zo = /^(?:0|[1-9]\d*)$/,
            A = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
            k = /($^)/,
            Z = /['\n\r\u2028\u2029\\]/g,
            K = "\\ud800-\\udfff",
            q = "\\u0300-\\u036f",
            pe = "\\ufe20-\\ufe2f",
            Se = "\\u20d0-\\u20ff",
            Re = q + pe + Se,
            Ie = "\\u2700-\\u27bf",
            $e = "a-z\\xdf-\\xf6\\xf8-\\xff",
            Je = "\\xac\\xb1\\xd7\\xf7",
            ke = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",
            gt = "\\u2000-\\u206f",
            Et =
              " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",
            kt = "A-Z\\xc0-\\xd6\\xd8-\\xde",
            zt = "\\ufe0e\\ufe0f",
            vt = Je + ke + gt + Et,
            Ge = "['’]",
            Qt = "[" + K + "]",
            St = "[" + vt + "]",
            fn = "[" + Re + "]",
            yi = "\\d+",
            xn = "[" + Ie + "]",
            Xi = "[" + $e + "]",
            Nt = "[^" + K + vt + yi + Ie + $e + kt + "]",
            hn = "\\ud83c[\\udffb-\\udfff]",
            wn = "(?:" + fn + "|" + hn + ")",
            sn = "[^" + K + "]",
            an = "(?:\\ud83c[\\udde6-\\uddff]){2}",
            hr = "[\\ud800-\\udbff][\\udc00-\\udfff]",
            bn = "[" + kt + "]",
            Gu = "\\u200d",
            Hu = "(?:" + Xi + "|" + Nt + ")",
            Fp = "(?:" + bn + "|" + Nt + ")",
            Vu = "(?:" + Ge + "(?:d|ll|m|re|s|t|ve))?",
            ku = "(?:" + Ge + "(?:D|LL|M|RE|S|T|VE))?",
            Wu = wn + "?",
            Xu = "[" + zt + "]?",
            Op =
              "(?:" +
              Gu +
              "(?:" +
              [sn, an, hr].join("|") +
              ")" +
              Xu +
              Wu +
              ")*",
            Bp = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",
            zp = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",
            qu = Xu + Wu + Op,
            Gp = "(?:" + [xn, an, hr].join("|") + ")" + qu,
            Hp = "(?:" + [sn + fn + "?", fn, an, hr, Qt].join("|") + ")",
            Vp = RegExp(Ge, "g"),
            kp = RegExp(fn, "g"),
            Ko = RegExp(hn + "(?=" + hn + ")|" + Hp + qu, "g"),
            Wp = RegExp(
              [
                bn +
                  "?" +
                  Xi +
                  "+" +
                  Vu +
                  "(?=" +
                  [St, bn, "$"].join("|") +
                  ")",
                Fp + "+" + ku + "(?=" + [St, bn + Hu, "$"].join("|") + ")",
                bn + "?" + Hu + "+" + Vu,
                bn + "+" + ku,
                zp,
                Bp,
                yi,
                Gp,
              ].join("|"),
              "g",
            ),
            Xp = RegExp("[" + Gu + K + Re + zt + "]"),
            qp =
              /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,
            Yp = [
              "Array",
              "Buffer",
              "DataView",
              "Date",
              "Error",
              "Float32Array",
              "Float64Array",
              "Function",
              "Int8Array",
              "Int16Array",
              "Int32Array",
              "Map",
              "Math",
              "Object",
              "Promise",
              "RegExp",
              "Set",
              "String",
              "Symbol",
              "TypeError",
              "Uint8Array",
              "Uint8ClampedArray",
              "Uint16Array",
              "Uint32Array",
              "WeakMap",
              "_",
              "clearTimeout",
              "isFinite",
              "parseInt",
              "setTimeout",
            ],
            Zp = -1,
            Gt = {};
          (Gt[be] =
            Gt[dt] =
            Gt[me] =
            Gt[Ce] =
            Gt[We] =
            Gt[Ze] =
            Gt[Pe] =
            Gt[ut] =
            Gt[et] =
              !0),
            (Gt[_e] =
              Gt[Ue] =
              Gt[Ne] =
              Gt[Ve] =
              Gt[ge] =
              Gt[ft] =
              Gt[Ot] =
              Gt[Lt] =
              Gt[F] =
              Gt[rn] =
              Gt[je] =
              Gt[Oe] =
              Gt[I] =
              Gt[S] =
              Gt[fe] =
                !1);
          var Bt = {};
          (Bt[_e] =
            Bt[Ue] =
            Bt[Ne] =
            Bt[ge] =
            Bt[Ve] =
            Bt[ft] =
            Bt[be] =
            Bt[dt] =
            Bt[me] =
            Bt[Ce] =
            Bt[We] =
            Bt[F] =
            Bt[rn] =
            Bt[je] =
            Bt[Oe] =
            Bt[I] =
            Bt[S] =
            Bt[Y] =
            Bt[Ze] =
            Bt[Pe] =
            Bt[ut] =
            Bt[et] =
              !0),
            (Bt[Ot] = Bt[Lt] = Bt[fe] = !1);
          var Kp = {
              À: "A",
              Á: "A",
              Â: "A",
              Ã: "A",
              Ä: "A",
              Å: "A",
              à: "a",
              á: "a",
              â: "a",
              ã: "a",
              ä: "a",
              å: "a",
              Ç: "C",
              ç: "c",
              Ð: "D",
              ð: "d",
              È: "E",
              É: "E",
              Ê: "E",
              Ë: "E",
              è: "e",
              é: "e",
              ê: "e",
              ë: "e",
              Ì: "I",
              Í: "I",
              Î: "I",
              Ï: "I",
              ì: "i",
              í: "i",
              î: "i",
              ï: "i",
              Ñ: "N",
              ñ: "n",
              Ò: "O",
              Ó: "O",
              Ô: "O",
              Õ: "O",
              Ö: "O",
              Ø: "O",
              ò: "o",
              ó: "o",
              ô: "o",
              õ: "o",
              ö: "o",
              ø: "o",
              Ù: "U",
              Ú: "U",
              Û: "U",
              Ü: "U",
              ù: "u",
              ú: "u",
              û: "u",
              ü: "u",
              Ý: "Y",
              ý: "y",
              ÿ: "y",
              Æ: "Ae",
              æ: "ae",
              Þ: "Th",
              þ: "th",
              ß: "ss",
              Ā: "A",
              Ă: "A",
              Ą: "A",
              ā: "a",
              ă: "a",
              ą: "a",
              Ć: "C",
              Ĉ: "C",
              Ċ: "C",
              Č: "C",
              ć: "c",
              ĉ: "c",
              ċ: "c",
              č: "c",
              Ď: "D",
              Đ: "D",
              ď: "d",
              đ: "d",
              Ē: "E",
              Ĕ: "E",
              Ė: "E",
              Ę: "E",
              Ě: "E",
              ē: "e",
              ĕ: "e",
              ė: "e",
              ę: "e",
              ě: "e",
              Ĝ: "G",
              Ğ: "G",
              Ġ: "G",
              Ģ: "G",
              ĝ: "g",
              ğ: "g",
              ġ: "g",
              ģ: "g",
              Ĥ: "H",
              Ħ: "H",
              ĥ: "h",
              ħ: "h",
              Ĩ: "I",
              Ī: "I",
              Ĭ: "I",
              Į: "I",
              İ: "I",
              ĩ: "i",
              ī: "i",
              ĭ: "i",
              į: "i",
              ı: "i",
              Ĵ: "J",
              ĵ: "j",
              Ķ: "K",
              ķ: "k",
              ĸ: "k",
              Ĺ: "L",
              Ļ: "L",
              Ľ: "L",
              Ŀ: "L",
              Ł: "L",
              ĺ: "l",
              ļ: "l",
              ľ: "l",
              ŀ: "l",
              ł: "l",
              Ń: "N",
              Ņ: "N",
              Ň: "N",
              Ŋ: "N",
              ń: "n",
              ņ: "n",
              ň: "n",
              ŋ: "n",
              Ō: "O",
              Ŏ: "O",
              Ő: "O",
              ō: "o",
              ŏ: "o",
              ő: "o",
              Ŕ: "R",
              Ŗ: "R",
              Ř: "R",
              ŕ: "r",
              ŗ: "r",
              ř: "r",
              Ś: "S",
              Ŝ: "S",
              Ş: "S",
              Š: "S",
              ś: "s",
              ŝ: "s",
              ş: "s",
              š: "s",
              Ţ: "T",
              Ť: "T",
              Ŧ: "T",
              ţ: "t",
              ť: "t",
              ŧ: "t",
              Ũ: "U",
              Ū: "U",
              Ŭ: "U",
              Ů: "U",
              Ű: "U",
              Ų: "U",
              ũ: "u",
              ū: "u",
              ŭ: "u",
              ů: "u",
              ű: "u",
              ų: "u",
              Ŵ: "W",
              ŵ: "w",
              Ŷ: "Y",
              ŷ: "y",
              Ÿ: "Y",
              Ź: "Z",
              Ż: "Z",
              Ž: "Z",
              ź: "z",
              ż: "z",
              ž: "z",
              Ĳ: "IJ",
              ĳ: "ij",
              Œ: "Oe",
              œ: "oe",
              ŉ: "'n",
              ſ: "s",
            },
            $p = {
              "&": "&amp;",
              "<": "&lt;",
              ">": "&gt;",
              '"': "&quot;",
              "'": "&#39;",
            },
            Jp = {
              "&amp;": "&",
              "&lt;": "<",
              "&gt;": ">",
              "&quot;": '"',
              "&#39;": "'",
            },
            Qp = {
              "\\": "\\",
              "'": "'",
              "\n": "n",
              "\r": "r",
              "\u2028": "u2028",
              "\u2029": "u2029",
            },
            jp = parseFloat,
            em = parseInt,
            Yu = typeof bo == "object" && bo && bo.Object === Object && bo,
            tm =
              typeof self == "object" && self && self.Object === Object && self,
            cn = Yu || tm || Function("return this")(),
            $o = e && !e.nodeType && e,
            dr = $o && !0 && s && !s.nodeType && s,
            Zu = dr && dr.exports === $o,
            Jo = Zu && Yu.process,
            Wn = (function () {
              try {
                var V = dr && dr.require && dr.require("util").types;
                return V || (Jo && Jo.binding && Jo.binding("util"));
              } catch {}
            })(),
            Ku = Wn && Wn.isArrayBuffer,
            $u = Wn && Wn.isDate,
            Ju = Wn && Wn.isMap,
            Qu = Wn && Wn.isRegExp,
            ju = Wn && Wn.isSet,
            ef = Wn && Wn.isTypedArray;
          function Fn(V, te, J) {
            switch (J.length) {
              case 0:
                return V.call(te);
              case 1:
                return V.call(te, J[0]);
              case 2:
                return V.call(te, J[0], J[1]);
              case 3:
                return V.call(te, J[0], J[1], J[2]);
            }
            return V.apply(te, J);
          }
          function nm(V, te, J, Le) {
            for (var tt = -1, wt = V == null ? 0 : V.length; ++tt < wt; ) {
              var jt = V[tt];
              te(Le, jt, J(jt), V);
            }
            return Le;
          }
          function Xn(V, te) {
            for (
              var J = -1, Le = V == null ? 0 : V.length;
              ++J < Le && te(V[J], J, V) !== !1;

            );
            return V;
          }
          function im(V, te) {
            for (
              var J = V == null ? 0 : V.length;
              J-- && te(V[J], J, V) !== !1;

            );
            return V;
          }
          function tf(V, te) {
            for (var J = -1, Le = V == null ? 0 : V.length; ++J < Le; )
              if (!te(V[J], J, V)) return !1;
            return !0;
          }
          function qi(V, te) {
            for (
              var J = -1, Le = V == null ? 0 : V.length, tt = 0, wt = [];
              ++J < Le;

            ) {
              var jt = V[J];
              te(jt, J, V) && (wt[tt++] = jt);
            }
            return wt;
          }
          function xa(V, te) {
            var J = V == null ? 0 : V.length;
            return !!J && Hr(V, te, 0) > -1;
          }
          function Qo(V, te, J) {
            for (var Le = -1, tt = V == null ? 0 : V.length; ++Le < tt; )
              if (J(te, V[Le])) return !0;
            return !1;
          }
          function Vt(V, te) {
            for (
              var J = -1, Le = V == null ? 0 : V.length, tt = Array(Le);
              ++J < Le;

            )
              tt[J] = te(V[J], J, V);
            return tt;
          }
          function Yi(V, te) {
            for (var J = -1, Le = te.length, tt = V.length; ++J < Le; )
              V[tt + J] = te[J];
            return V;
          }
          function jo(V, te, J, Le) {
            var tt = -1,
              wt = V == null ? 0 : V.length;
            for (Le && wt && (J = V[++tt]); ++tt < wt; )
              J = te(J, V[tt], tt, V);
            return J;
          }
          function rm(V, te, J, Le) {
            var tt = V == null ? 0 : V.length;
            for (Le && tt && (J = V[--tt]); tt--; ) J = te(J, V[tt], tt, V);
            return J;
          }
          function el(V, te) {
            for (var J = -1, Le = V == null ? 0 : V.length; ++J < Le; )
              if (te(V[J], J, V)) return !0;
            return !1;
          }
          var sm = tl("length");
          function am(V) {
            return V.split("");
          }
          function om(V) {
            return V.match(ma) || [];
          }
          function nf(V, te, J) {
            var Le;
            return (
              J(V, function (tt, wt, jt) {
                if (te(tt, wt, jt)) return (Le = wt), !1;
              }),
              Le
            );
          }
          function Ma(V, te, J, Le) {
            for (
              var tt = V.length, wt = J + (Le ? 1 : -1);
              Le ? wt-- : ++wt < tt;

            )
              if (te(V[wt], wt, V)) return wt;
            return -1;
          }
          function Hr(V, te, J) {
            return te === te ? xm(V, te, J) : Ma(V, rf, J);
          }
          function lm(V, te, J, Le) {
            for (var tt = J - 1, wt = V.length; ++tt < wt; )
              if (Le(V[tt], te)) return tt;
            return -1;
          }
          function rf(V) {
            return V !== V;
          }
          function sf(V, te) {
            var J = V == null ? 0 : V.length;
            return J ? il(V, te) / J : we;
          }
          function tl(V) {
            return function (te) {
              return te == null ? t : te[V];
            };
          }
          function nl(V) {
            return function (te) {
              return V == null ? t : V[te];
            };
          }
          function af(V, te, J, Le, tt) {
            return (
              tt(V, function (wt, jt, Ft) {
                J = Le ? ((Le = !1), wt) : te(J, wt, jt, Ft);
              }),
              J
            );
          }
          function cm(V, te) {
            var J = V.length;
            for (V.sort(te); J--; ) V[J] = V[J].value;
            return V;
          }
          function il(V, te) {
            for (var J, Le = -1, tt = V.length; ++Le < tt; ) {
              var wt = te(V[Le]);
              wt !== t && (J = J === t ? wt : J + wt);
            }
            return J;
          }
          function rl(V, te) {
            for (var J = -1, Le = Array(V); ++J < V; ) Le[J] = te(J);
            return Le;
          }
          function um(V, te) {
            return Vt(te, function (J) {
              return [J, V[J]];
            });
          }
          function of(V) {
            return V && V.slice(0, ff(V) + 1).replace(ii, "");
          }
          function On(V) {
            return function (te) {
              return V(te);
            };
          }
          function sl(V, te) {
            return Vt(te, function (J) {
              return V[J];
            });
          }
          function Ls(V, te) {
            return V.has(te);
          }
          function lf(V, te) {
            for (var J = -1, Le = V.length; ++J < Le && Hr(te, V[J], 0) > -1; );
            return J;
          }
          function cf(V, te) {
            for (var J = V.length; J-- && Hr(te, V[J], 0) > -1; );
            return J;
          }
          function fm(V, te) {
            for (var J = V.length, Le = 0; J--; ) V[J] === te && ++Le;
            return Le;
          }
          var hm = nl(Kp),
            dm = nl($p);
          function pm(V) {
            return "\\" + Qp[V];
          }
          function mm(V, te) {
            return V == null ? t : V[te];
          }
          function Vr(V) {
            return Xp.test(V);
          }
          function _m(V) {
            return qp.test(V);
          }
          function gm(V) {
            for (var te, J = []; !(te = V.next()).done; ) J.push(te.value);
            return J;
          }
          function al(V) {
            var te = -1,
              J = Array(V.size);
            return (
              V.forEach(function (Le, tt) {
                J[++te] = [tt, Le];
              }),
              J
            );
          }
          function uf(V, te) {
            return function (J) {
              return V(te(J));
            };
          }
          function Zi(V, te) {
            for (var J = -1, Le = V.length, tt = 0, wt = []; ++J < Le; ) {
              var jt = V[J];
              (jt === te || jt === p) && ((V[J] = p), (wt[tt++] = J));
            }
            return wt;
          }
          function Sa(V) {
            var te = -1,
              J = Array(V.size);
            return (
              V.forEach(function (Le) {
                J[++te] = Le;
              }),
              J
            );
          }
          function vm(V) {
            var te = -1,
              J = Array(V.size);
            return (
              V.forEach(function (Le) {
                J[++te] = [Le, Le];
              }),
              J
            );
          }
          function xm(V, te, J) {
            for (var Le = J - 1, tt = V.length; ++Le < tt; )
              if (V[Le] === te) return Le;
            return -1;
          }
          function Mm(V, te, J) {
            for (var Le = J + 1; Le--; ) if (V[Le] === te) return Le;
            return Le;
          }
          function kr(V) {
            return Vr(V) ? Em(V) : sm(V);
          }
          function ri(V) {
            return Vr(V) ? ym(V) : am(V);
          }
          function ff(V) {
            for (var te = V.length; te-- && Ps.test(V.charAt(te)); );
            return te;
          }
          var Sm = nl(Jp);
          function Em(V) {
            for (var te = (Ko.lastIndex = 0); Ko.test(V); ) ++te;
            return te;
          }
          function ym(V) {
            return V.match(Ko) || [];
          }
          function Tm(V) {
            return V.match(Wp) || [];
          }
          var Am = function V(te) {
              te =
                te == null ? cn : Wr.defaults(cn.Object(), te, Wr.pick(cn, Yp));
              var J = te.Array,
                Le = te.Date,
                tt = te.Error,
                wt = te.Function,
                jt = te.Math,
                Ft = te.Object,
                ol = te.RegExp,
                wm = te.String,
                qn = te.TypeError,
                Ea = J.prototype,
                bm = wt.prototype,
                Xr = Ft.prototype,
                ya = te["__core-js_shared__"],
                Ta = bm.toString,
                Pt = Xr.hasOwnProperty,
                Rm = 0,
                hf = (function () {
                  var n = /[^.]+$/.exec(
                    (ya && ya.keys && ya.keys.IE_PROTO) || "",
                  );
                  return n ? "Symbol(src)_1." + n : "";
                })(),
                Aa = Xr.toString,
                Cm = Ta.call(Ft),
                Pm = cn._,
                Lm = ol(
                  "^" +
                    Ta.call(Pt)
                      .replace(Br, "\\$&")
                      .replace(
                        /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                        "$1.*?",
                      ) +
                    "$",
                ),
                wa = Zu ? te.Buffer : t,
                Ki = te.Symbol,
                ba = te.Uint8Array,
                df = wa ? wa.allocUnsafe : t,
                Ra = uf(Ft.getPrototypeOf, Ft),
                pf = Ft.create,
                mf = Xr.propertyIsEnumerable,
                Ca = Ea.splice,
                _f = Ki ? Ki.isConcatSpreadable : t,
                Is = Ki ? Ki.iterator : t,
                pr = Ki ? Ki.toStringTag : t,
                Pa = (function () {
                  try {
                    var n = xr(Ft, "defineProperty");
                    return n({}, "", {}), n;
                  } catch {}
                })(),
                Im = te.clearTimeout !== cn.clearTimeout && te.clearTimeout,
                Dm = Le && Le.now !== cn.Date.now && Le.now,
                Um = te.setTimeout !== cn.setTimeout && te.setTimeout,
                La = jt.ceil,
                Ia = jt.floor,
                ll = Ft.getOwnPropertySymbols,
                Nm = wa ? wa.isBuffer : t,
                gf = te.isFinite,
                Fm = Ea.join,
                Om = uf(Ft.keys, Ft),
                en = jt.max,
                dn = jt.min,
                Bm = Le.now,
                zm = te.parseInt,
                vf = jt.random,
                Gm = Ea.reverse,
                cl = xr(te, "DataView"),
                Ds = xr(te, "Map"),
                ul = xr(te, "Promise"),
                qr = xr(te, "Set"),
                Us = xr(te, "WeakMap"),
                Ns = xr(Ft, "create"),
                Da = Us && new Us(),
                Yr = {},
                Hm = Mr(cl),
                Vm = Mr(Ds),
                km = Mr(ul),
                Wm = Mr(qr),
                Xm = Mr(Us),
                Ua = Ki ? Ki.prototype : t,
                Fs = Ua ? Ua.valueOf : t,
                xf = Ua ? Ua.toString : t;
              function E(n) {
                if (Xt(n) && !it(n) && !(n instanceof _t)) {
                  if (n instanceof Yn) return n;
                  if (Pt.call(n, "__wrapped__")) return Mh(n);
                }
                return new Yn(n);
              }
              var Zr = (function () {
                function n() {}
                return function (r) {
                  if (!Wt(r)) return {};
                  if (pf) return pf(r);
                  n.prototype = r;
                  var l = new n();
                  return (n.prototype = t), l;
                };
              })();
              function Na() {}
              function Yn(n, r) {
                (this.__wrapped__ = n),
                  (this.__actions__ = []),
                  (this.__chain__ = !!r),
                  (this.__index__ = 0),
                  (this.__values__ = t);
              }
              (E.templateSettings = {
                escape: nt,
                evaluate: Ht,
                interpolate: Jt,
                variable: "",
                imports: { _: E },
              }),
                (E.prototype = Na.prototype),
                (E.prototype.constructor = E),
                (Yn.prototype = Zr(Na.prototype)),
                (Yn.prototype.constructor = Yn);
              function _t(n) {
                (this.__wrapped__ = n),
                  (this.__actions__ = []),
                  (this.__dir__ = 1),
                  (this.__filtered__ = !1),
                  (this.__iteratees__ = []),
                  (this.__takeCount__ = De),
                  (this.__views__ = []);
              }
              function qm() {
                var n = new _t(this.__wrapped__);
                return (
                  (n.__actions__ = Rn(this.__actions__)),
                  (n.__dir__ = this.__dir__),
                  (n.__filtered__ = this.__filtered__),
                  (n.__iteratees__ = Rn(this.__iteratees__)),
                  (n.__takeCount__ = this.__takeCount__),
                  (n.__views__ = Rn(this.__views__)),
                  n
                );
              }
              function Ym() {
                if (this.__filtered__) {
                  var n = new _t(this);
                  (n.__dir__ = -1), (n.__filtered__ = !0);
                } else (n = this.clone()), (n.__dir__ *= -1);
                return n;
              }
              function Zm() {
                var n = this.__wrapped__.value(),
                  r = this.__dir__,
                  l = it(n),
                  f = r < 0,
                  x = l ? n.length : 0,
                  w = ag(0, x, this.__views__),
                  D = w.start,
                  O = w.end,
                  X = O - D,
                  re = f ? O : D - 1,
                  ae = this.__iteratees__,
                  he = ae.length,
                  ve = 0,
                  Be = dn(X, this.__takeCount__);
                if (!l || (!f && x == X && Be == X))
                  return kf(n, this.__actions__);
                var qe = [];
                e: for (; X-- && ve < Be; ) {
                  re += r;
                  for (var at = -1, Ye = n[re]; ++at < he; ) {
                    var pt = ae[at],
                      xt = pt.iteratee,
                      Gn = pt.type,
                      En = xt(Ye);
                    if (Gn == ue) Ye = En;
                    else if (!En) {
                      if (Gn == ie) continue e;
                      break e;
                    }
                  }
                  qe[ve++] = Ye;
                }
                return qe;
              }
              (_t.prototype = Zr(Na.prototype)),
                (_t.prototype.constructor = _t);
              function mr(n) {
                var r = -1,
                  l = n == null ? 0 : n.length;
                for (this.clear(); ++r < l; ) {
                  var f = n[r];
                  this.set(f[0], f[1]);
                }
              }
              function Km() {
                (this.__data__ = Ns ? Ns(null) : {}), (this.size = 0);
              }
              function $m(n) {
                var r = this.has(n) && delete this.__data__[n];
                return (this.size -= r ? 1 : 0), r;
              }
              function Jm(n) {
                var r = this.__data__;
                if (Ns) {
                  var l = r[n];
                  return l === d ? t : l;
                }
                return Pt.call(r, n) ? r[n] : t;
              }
              function Qm(n) {
                var r = this.__data__;
                return Ns ? r[n] !== t : Pt.call(r, n);
              }
              function jm(n, r) {
                var l = this.__data__;
                return (
                  (this.size += this.has(n) ? 0 : 1),
                  (l[n] = Ns && r === t ? d : r),
                  this
                );
              }
              (mr.prototype.clear = Km),
                (mr.prototype.delete = $m),
                (mr.prototype.get = Jm),
                (mr.prototype.has = Qm),
                (mr.prototype.set = jm);
              function Ti(n) {
                var r = -1,
                  l = n == null ? 0 : n.length;
                for (this.clear(); ++r < l; ) {
                  var f = n[r];
                  this.set(f[0], f[1]);
                }
              }
              function e_() {
                (this.__data__ = []), (this.size = 0);
              }
              function t_(n) {
                var r = this.__data__,
                  l = Fa(r, n);
                if (l < 0) return !1;
                var f = r.length - 1;
                return l == f ? r.pop() : Ca.call(r, l, 1), --this.size, !0;
              }
              function n_(n) {
                var r = this.__data__,
                  l = Fa(r, n);
                return l < 0 ? t : r[l][1];
              }
              function i_(n) {
                return Fa(this.__data__, n) > -1;
              }
              function r_(n, r) {
                var l = this.__data__,
                  f = Fa(l, n);
                return (
                  f < 0 ? (++this.size, l.push([n, r])) : (l[f][1] = r), this
                );
              }
              (Ti.prototype.clear = e_),
                (Ti.prototype.delete = t_),
                (Ti.prototype.get = n_),
                (Ti.prototype.has = i_),
                (Ti.prototype.set = r_);
              function Ai(n) {
                var r = -1,
                  l = n == null ? 0 : n.length;
                for (this.clear(); ++r < l; ) {
                  var f = n[r];
                  this.set(f[0], f[1]);
                }
              }
              function s_() {
                (this.size = 0),
                  (this.__data__ = {
                    hash: new mr(),
                    map: new (Ds || Ti)(),
                    string: new mr(),
                  });
              }
              function a_(n) {
                var r = Za(this, n).delete(n);
                return (this.size -= r ? 1 : 0), r;
              }
              function o_(n) {
                return Za(this, n).get(n);
              }
              function l_(n) {
                return Za(this, n).has(n);
              }
              function c_(n, r) {
                var l = Za(this, n),
                  f = l.size;
                return l.set(n, r), (this.size += l.size == f ? 0 : 1), this;
              }
              (Ai.prototype.clear = s_),
                (Ai.prototype.delete = a_),
                (Ai.prototype.get = o_),
                (Ai.prototype.has = l_),
                (Ai.prototype.set = c_);
              function _r(n) {
                var r = -1,
                  l = n == null ? 0 : n.length;
                for (this.__data__ = new Ai(); ++r < l; ) this.add(n[r]);
              }
              function u_(n) {
                return this.__data__.set(n, d), this;
              }
              function f_(n) {
                return this.__data__.has(n);
              }
              (_r.prototype.add = _r.prototype.push = u_),
                (_r.prototype.has = f_);
              function si(n) {
                var r = (this.__data__ = new Ti(n));
                this.size = r.size;
              }
              function h_() {
                (this.__data__ = new Ti()), (this.size = 0);
              }
              function d_(n) {
                var r = this.__data__,
                  l = r.delete(n);
                return (this.size = r.size), l;
              }
              function p_(n) {
                return this.__data__.get(n);
              }
              function m_(n) {
                return this.__data__.has(n);
              }
              function __(n, r) {
                var l = this.__data__;
                if (l instanceof Ti) {
                  var f = l.__data__;
                  if (!Ds || f.length < a - 1)
                    return f.push([n, r]), (this.size = ++l.size), this;
                  l = this.__data__ = new Ai(f);
                }
                return l.set(n, r), (this.size = l.size), this;
              }
              (si.prototype.clear = h_),
                (si.prototype.delete = d_),
                (si.prototype.get = p_),
                (si.prototype.has = m_),
                (si.prototype.set = __);
              function Mf(n, r) {
                var l = it(n),
                  f = !l && Sr(n),
                  x = !l && !f && er(n),
                  w = !l && !f && !x && Qr(n),
                  D = l || f || x || w,
                  O = D ? rl(n.length, wm) : [],
                  X = O.length;
                for (var re in n)
                  (r || Pt.call(n, re)) &&
                    !(
                      D &&
                      (re == "length" ||
                        (x && (re == "offset" || re == "parent")) ||
                        (w &&
                          (re == "buffer" ||
                            re == "byteLength" ||
                            re == "byteOffset")) ||
                        Ci(re, X))
                    ) &&
                    O.push(re);
                return O;
              }
              function Sf(n) {
                var r = n.length;
                return r ? n[Sl(0, r - 1)] : t;
              }
              function g_(n, r) {
                return Ka(Rn(n), gr(r, 0, n.length));
              }
              function v_(n) {
                return Ka(Rn(n));
              }
              function fl(n, r, l) {
                ((l !== t && !ai(n[r], l)) || (l === t && !(r in n))) &&
                  wi(n, r, l);
              }
              function Os(n, r, l) {
                var f = n[r];
                (!(Pt.call(n, r) && ai(f, l)) || (l === t && !(r in n))) &&
                  wi(n, r, l);
              }
              function Fa(n, r) {
                for (var l = n.length; l--; ) if (ai(n[l][0], r)) return l;
                return -1;
              }
              function x_(n, r, l, f) {
                return (
                  $i(n, function (x, w, D) {
                    r(f, x, l(x), D);
                  }),
                  f
                );
              }
              function Ef(n, r) {
                return n && mi(r, on(r), n);
              }
              function M_(n, r) {
                return n && mi(r, Pn(r), n);
              }
              function wi(n, r, l) {
                r == "__proto__" && Pa
                  ? Pa(n, r, {
                      configurable: !0,
                      enumerable: !0,
                      value: l,
                      writable: !0,
                    })
                  : (n[r] = l);
              }
              function hl(n, r) {
                for (
                  var l = -1, f = r.length, x = J(f), w = n == null;
                  ++l < f;

                )
                  x[l] = w ? t : ql(n, r[l]);
                return x;
              }
              function gr(n, r, l) {
                return (
                  n === n &&
                    (l !== t && (n = n <= l ? n : l),
                    r !== t && (n = n >= r ? n : r)),
                  n
                );
              }
              function Zn(n, r, l, f, x, w) {
                var D,
                  O = r & _,
                  X = r & g,
                  re = r & M;
                if ((l && (D = x ? l(n, f, x, w) : l(n)), D !== t)) return D;
                if (!Wt(n)) return n;
                var ae = it(n);
                if (ae) {
                  if (((D = lg(n)), !O)) return Rn(n, D);
                } else {
                  var he = pn(n),
                    ve = he == Lt || he == ht;
                  if (er(n)) return qf(n, O);
                  if (he == je || he == _e || (ve && !x)) {
                    if (((D = X || ve ? {} : fh(n)), !O))
                      return X ? J_(n, M_(D, n)) : $_(n, Ef(D, n));
                  } else {
                    if (!Bt[he]) return x ? n : {};
                    D = cg(n, he, O);
                  }
                }
                w || (w = new si());
                var Be = w.get(n);
                if (Be) return Be;
                w.set(n, D),
                  Gh(n)
                    ? n.forEach(function (Ye) {
                        D.add(Zn(Ye, r, l, Ye, n, w));
                      })
                    : Bh(n) &&
                      n.forEach(function (Ye, pt) {
                        D.set(pt, Zn(Ye, r, l, pt, n, w));
                      });
                var qe = re ? (X ? Il : Ll) : X ? Pn : on,
                  at = ae ? t : qe(n);
                return (
                  Xn(at || n, function (Ye, pt) {
                    at && ((pt = Ye), (Ye = n[pt])),
                      Os(D, pt, Zn(Ye, r, l, pt, n, w));
                  }),
                  D
                );
              }
              function S_(n) {
                var r = on(n);
                return function (l) {
                  return yf(l, n, r);
                };
              }
              function yf(n, r, l) {
                var f = l.length;
                if (n == null) return !f;
                for (n = Ft(n); f--; ) {
                  var x = l[f],
                    w = r[x],
                    D = n[x];
                  if ((D === t && !(x in n)) || !w(D)) return !1;
                }
                return !0;
              }
              function Tf(n, r, l) {
                if (typeof n != "function") throw new qn(c);
                return Ws(function () {
                  n.apply(t, l);
                }, r);
              }
              function Bs(n, r, l, f) {
                var x = -1,
                  w = xa,
                  D = !0,
                  O = n.length,
                  X = [],
                  re = r.length;
                if (!O) return X;
                l && (r = Vt(r, On(l))),
                  f
                    ? ((w = Qo), (D = !1))
                    : r.length >= a && ((w = Ls), (D = !1), (r = new _r(r)));
                e: for (; ++x < O; ) {
                  var ae = n[x],
                    he = l == null ? ae : l(ae);
                  if (((ae = f || ae !== 0 ? ae : 0), D && he === he)) {
                    for (var ve = re; ve--; ) if (r[ve] === he) continue e;
                    X.push(ae);
                  } else w(r, he, f) || X.push(ae);
                }
                return X;
              }
              var $i = Jf(pi),
                Af = Jf(pl, !0);
              function E_(n, r) {
                var l = !0;
                return (
                  $i(n, function (f, x, w) {
                    return (l = !!r(f, x, w)), l;
                  }),
                  l
                );
              }
              function Oa(n, r, l) {
                for (var f = -1, x = n.length; ++f < x; ) {
                  var w = n[f],
                    D = r(w);
                  if (D != null && (O === t ? D === D && !zn(D) : l(D, O)))
                    var O = D,
                      X = w;
                }
                return X;
              }
              function y_(n, r, l, f) {
                var x = n.length;
                for (
                  l = rt(l),
                    l < 0 && (l = -l > x ? 0 : x + l),
                    f = f === t || f > x ? x : rt(f),
                    f < 0 && (f += x),
                    f = l > f ? 0 : Vh(f);
                  l < f;

                )
                  n[l++] = r;
                return n;
              }
              function wf(n, r) {
                var l = [];
                return (
                  $i(n, function (f, x, w) {
                    r(f, x, w) && l.push(f);
                  }),
                  l
                );
              }
              function un(n, r, l, f, x) {
                var w = -1,
                  D = n.length;
                for (l || (l = fg), x || (x = []); ++w < D; ) {
                  var O = n[w];
                  r > 0 && l(O)
                    ? r > 1
                      ? un(O, r - 1, l, f, x)
                      : Yi(x, O)
                    : f || (x[x.length] = O);
                }
                return x;
              }
              var dl = Qf(),
                bf = Qf(!0);
              function pi(n, r) {
                return n && dl(n, r, on);
              }
              function pl(n, r) {
                return n && bf(n, r, on);
              }
              function Ba(n, r) {
                return qi(r, function (l) {
                  return Pi(n[l]);
                });
              }
              function vr(n, r) {
                r = Qi(r, n);
                for (var l = 0, f = r.length; n != null && l < f; )
                  n = n[_i(r[l++])];
                return l && l == f ? n : t;
              }
              function Rf(n, r, l) {
                var f = r(n);
                return it(n) ? f : Yi(f, l(n));
              }
              function Mn(n) {
                return n == null
                  ? n === t
                    ? ce
                    : mt
                  : pr && pr in Ft(n)
                    ? sg(n)
                    : vg(n);
              }
              function ml(n, r) {
                return n > r;
              }
              function T_(n, r) {
                return n != null && Pt.call(n, r);
              }
              function A_(n, r) {
                return n != null && r in Ft(n);
              }
              function w_(n, r, l) {
                return n >= dn(r, l) && n < en(r, l);
              }
              function _l(n, r, l) {
                for (
                  var f = l ? Qo : xa,
                    x = n[0].length,
                    w = n.length,
                    D = w,
                    O = J(w),
                    X = 1 / 0,
                    re = [];
                  D--;

                ) {
                  var ae = n[D];
                  D && r && (ae = Vt(ae, On(r))),
                    (X = dn(ae.length, X)),
                    (O[D] =
                      !l && (r || (x >= 120 && ae.length >= 120))
                        ? new _r(D && ae)
                        : t);
                }
                ae = n[0];
                var he = -1,
                  ve = O[0];
                e: for (; ++he < x && re.length < X; ) {
                  var Be = ae[he],
                    qe = r ? r(Be) : Be;
                  if (
                    ((Be = l || Be !== 0 ? Be : 0),
                    !(ve ? Ls(ve, qe) : f(re, qe, l)))
                  ) {
                    for (D = w; --D; ) {
                      var at = O[D];
                      if (!(at ? Ls(at, qe) : f(n[D], qe, l))) continue e;
                    }
                    ve && ve.push(qe), re.push(Be);
                  }
                }
                return re;
              }
              function b_(n, r, l, f) {
                return (
                  pi(n, function (x, w, D) {
                    r(f, l(x), w, D);
                  }),
                  f
                );
              }
              function zs(n, r, l) {
                (r = Qi(r, n)), (n = mh(n, r));
                var f = n == null ? n : n[_i($n(r))];
                return f == null ? t : Fn(f, n, l);
              }
              function Cf(n) {
                return Xt(n) && Mn(n) == _e;
              }
              function R_(n) {
                return Xt(n) && Mn(n) == Ne;
              }
              function C_(n) {
                return Xt(n) && Mn(n) == ft;
              }
              function Gs(n, r, l, f, x) {
                return n === r
                  ? !0
                  : n == null || r == null || (!Xt(n) && !Xt(r))
                    ? n !== n && r !== r
                    : P_(n, r, l, f, Gs, x);
              }
              function P_(n, r, l, f, x, w) {
                var D = it(n),
                  O = it(r),
                  X = D ? Ue : pn(n),
                  re = O ? Ue : pn(r);
                (X = X == _e ? je : X), (re = re == _e ? je : re);
                var ae = X == je,
                  he = re == je,
                  ve = X == re;
                if (ve && er(n)) {
                  if (!er(r)) return !1;
                  (D = !0), (ae = !1);
                }
                if (ve && !ae)
                  return (
                    w || (w = new si()),
                    D || Qr(n) ? lh(n, r, l, f, x, w) : ig(n, r, X, l, f, x, w)
                  );
                if (!(l & T)) {
                  var Be = ae && Pt.call(n, "__wrapped__"),
                    qe = he && Pt.call(r, "__wrapped__");
                  if (Be || qe) {
                    var at = Be ? n.value() : n,
                      Ye = qe ? r.value() : r;
                    return w || (w = new si()), x(at, Ye, l, f, w);
                  }
                }
                return ve ? (w || (w = new si()), rg(n, r, l, f, x, w)) : !1;
              }
              function L_(n) {
                return Xt(n) && pn(n) == F;
              }
              function gl(n, r, l, f) {
                var x = l.length,
                  w = x,
                  D = !f;
                if (n == null) return !w;
                for (n = Ft(n); x--; ) {
                  var O = l[x];
                  if (D && O[2] ? O[1] !== n[O[0]] : !(O[0] in n)) return !1;
                }
                for (; ++x < w; ) {
                  O = l[x];
                  var X = O[0],
                    re = n[X],
                    ae = O[1];
                  if (D && O[2]) {
                    if (re === t && !(X in n)) return !1;
                  } else {
                    var he = new si();
                    if (f) var ve = f(re, ae, X, n, r, he);
                    if (!(ve === t ? Gs(ae, re, T | C, f, he) : ve)) return !1;
                  }
                }
                return !0;
              }
              function Pf(n) {
                if (!Wt(n) || dg(n)) return !1;
                var r = Pi(n) ? Lm : qo;
                return r.test(Mr(n));
              }
              function I_(n) {
                return Xt(n) && Mn(n) == Oe;
              }
              function D_(n) {
                return Xt(n) && pn(n) == I;
              }
              function U_(n) {
                return Xt(n) && to(n.length) && !!Gt[Mn(n)];
              }
              function Lf(n) {
                return typeof n == "function"
                  ? n
                  : n == null
                    ? Ln
                    : typeof n == "object"
                      ? it(n)
                        ? Uf(n[0], n[1])
                        : Df(n)
                      : jh(n);
              }
              function vl(n) {
                if (!ks(n)) return Om(n);
                var r = [];
                for (var l in Ft(n))
                  Pt.call(n, l) && l != "constructor" && r.push(l);
                return r;
              }
              function N_(n) {
                if (!Wt(n)) return gg(n);
                var r = ks(n),
                  l = [];
                for (var f in n)
                  (f == "constructor" && (r || !Pt.call(n, f))) || l.push(f);
                return l;
              }
              function xl(n, r) {
                return n < r;
              }
              function If(n, r) {
                var l = -1,
                  f = Cn(n) ? J(n.length) : [];
                return (
                  $i(n, function (x, w, D) {
                    f[++l] = r(x, w, D);
                  }),
                  f
                );
              }
              function Df(n) {
                var r = Ul(n);
                return r.length == 1 && r[0][2]
                  ? dh(r[0][0], r[0][1])
                  : function (l) {
                      return l === n || gl(l, n, r);
                    };
              }
              function Uf(n, r) {
                return Fl(n) && hh(r)
                  ? dh(_i(n), r)
                  : function (l) {
                      var f = ql(l, n);
                      return f === t && f === r ? Yl(l, n) : Gs(r, f, T | C);
                    };
              }
              function za(n, r, l, f, x) {
                n !== r &&
                  dl(
                    r,
                    function (w, D) {
                      if ((x || (x = new si()), Wt(w)))
                        F_(n, r, D, l, za, f, x);
                      else {
                        var O = f ? f(Bl(n, D), w, D + "", n, r, x) : t;
                        O === t && (O = w), fl(n, D, O);
                      }
                    },
                    Pn,
                  );
              }
              function F_(n, r, l, f, x, w, D) {
                var O = Bl(n, l),
                  X = Bl(r, l),
                  re = D.get(X);
                if (re) {
                  fl(n, l, re);
                  return;
                }
                var ae = w ? w(O, X, l + "", n, r, D) : t,
                  he = ae === t;
                if (he) {
                  var ve = it(X),
                    Be = !ve && er(X),
                    qe = !ve && !Be && Qr(X);
                  (ae = X),
                    ve || Be || qe
                      ? it(O)
                        ? (ae = O)
                        : qt(O)
                          ? (ae = Rn(O))
                          : Be
                            ? ((he = !1), (ae = qf(X, !0)))
                            : qe
                              ? ((he = !1), (ae = Yf(X, !0)))
                              : (ae = [])
                      : Xs(X) || Sr(X)
                        ? ((ae = O),
                          Sr(O)
                            ? (ae = kh(O))
                            : (!Wt(O) || Pi(O)) && (ae = fh(X)))
                        : (he = !1);
                }
                he && (D.set(X, ae), x(ae, X, f, w, D), D.delete(X)),
                  fl(n, l, ae);
              }
              function Nf(n, r) {
                var l = n.length;
                if (l) return (r += r < 0 ? l : 0), Ci(r, l) ? n[r] : t;
              }
              function Ff(n, r, l) {
                r.length
                  ? (r = Vt(r, function (w) {
                      return it(w)
                        ? function (D) {
                            return vr(D, w.length === 1 ? w[0] : w);
                          }
                        : w;
                    }))
                  : (r = [Ln]);
                var f = -1;
                r = Vt(r, On(Xe()));
                var x = If(n, function (w, D, O) {
                  var X = Vt(r, function (re) {
                    return re(w);
                  });
                  return { criteria: X, index: ++f, value: w };
                });
                return cm(x, function (w, D) {
                  return K_(w, D, l);
                });
              }
              function O_(n, r) {
                return Of(n, r, function (l, f) {
                  return Yl(n, f);
                });
              }
              function Of(n, r, l) {
                for (var f = -1, x = r.length, w = {}; ++f < x; ) {
                  var D = r[f],
                    O = vr(n, D);
                  l(O, D) && Hs(w, Qi(D, n), O);
                }
                return w;
              }
              function B_(n) {
                return function (r) {
                  return vr(r, n);
                };
              }
              function Ml(n, r, l, f) {
                var x = f ? lm : Hr,
                  w = -1,
                  D = r.length,
                  O = n;
                for (n === r && (r = Rn(r)), l && (O = Vt(n, On(l))); ++w < D; )
                  for (
                    var X = 0, re = r[w], ae = l ? l(re) : re;
                    (X = x(O, ae, X, f)) > -1;

                  )
                    O !== n && Ca.call(O, X, 1), Ca.call(n, X, 1);
                return n;
              }
              function Bf(n, r) {
                for (var l = n ? r.length : 0, f = l - 1; l--; ) {
                  var x = r[l];
                  if (l == f || x !== w) {
                    var w = x;
                    Ci(x) ? Ca.call(n, x, 1) : Tl(n, x);
                  }
                }
                return n;
              }
              function Sl(n, r) {
                return n + Ia(vf() * (r - n + 1));
              }
              function z_(n, r, l, f) {
                for (
                  var x = -1, w = en(La((r - n) / (l || 1)), 0), D = J(w);
                  w--;

                )
                  (D[f ? w : ++x] = n), (n += l);
                return D;
              }
              function El(n, r) {
                var l = "";
                if (!n || r < 1 || r > j) return l;
                do r % 2 && (l += n), (r = Ia(r / 2)), r && (n += n);
                while (r);
                return l;
              }
              function ct(n, r) {
                return zl(ph(n, r, Ln), n + "");
              }
              function G_(n) {
                return Sf(jr(n));
              }
              function H_(n, r) {
                var l = jr(n);
                return Ka(l, gr(r, 0, l.length));
              }
              function Hs(n, r, l, f) {
                if (!Wt(n)) return n;
                r = Qi(r, n);
                for (
                  var x = -1, w = r.length, D = w - 1, O = n;
                  O != null && ++x < w;

                ) {
                  var X = _i(r[x]),
                    re = l;
                  if (
                    X === "__proto__" ||
                    X === "constructor" ||
                    X === "prototype"
                  )
                    return n;
                  if (x != D) {
                    var ae = O[X];
                    (re = f ? f(ae, X, O) : t),
                      re === t && (re = Wt(ae) ? ae : Ci(r[x + 1]) ? [] : {});
                  }
                  Os(O, X, re), (O = O[X]);
                }
                return n;
              }
              var zf = Da
                  ? function (n, r) {
                      return Da.set(n, r), n;
                    }
                  : Ln,
                V_ = Pa
                  ? function (n, r) {
                      return Pa(n, "toString", {
                        configurable: !0,
                        enumerable: !1,
                        value: Kl(r),
                        writable: !0,
                      });
                    }
                  : Ln;
              function k_(n) {
                return Ka(jr(n));
              }
              function Kn(n, r, l) {
                var f = -1,
                  x = n.length;
                r < 0 && (r = -r > x ? 0 : x + r),
                  (l = l > x ? x : l),
                  l < 0 && (l += x),
                  (x = r > l ? 0 : (l - r) >>> 0),
                  (r >>>= 0);
                for (var w = J(x); ++f < x; ) w[f] = n[f + r];
                return w;
              }
              function W_(n, r) {
                var l;
                return (
                  $i(n, function (f, x, w) {
                    return (l = r(f, x, w)), !l;
                  }),
                  !!l
                );
              }
              function Ga(n, r, l) {
                var f = 0,
                  x = n == null ? f : n.length;
                if (typeof r == "number" && r === r && x <= Ct) {
                  for (; f < x; ) {
                    var w = (f + x) >>> 1,
                      D = n[w];
                    D !== null && !zn(D) && (l ? D <= r : D < r)
                      ? (f = w + 1)
                      : (x = w);
                  }
                  return x;
                }
                return yl(n, r, Ln, l);
              }
              function yl(n, r, l, f) {
                var x = 0,
                  w = n == null ? 0 : n.length;
                if (w === 0) return 0;
                r = l(r);
                for (
                  var D = r !== r, O = r === null, X = zn(r), re = r === t;
                  x < w;

                ) {
                  var ae = Ia((x + w) / 2),
                    he = l(n[ae]),
                    ve = he !== t,
                    Be = he === null,
                    qe = he === he,
                    at = zn(he);
                  if (D) var Ye = f || qe;
                  else
                    re
                      ? (Ye = qe && (f || ve))
                      : O
                        ? (Ye = qe && ve && (f || !Be))
                        : X
                          ? (Ye = qe && ve && !Be && (f || !at))
                          : Be || at
                            ? (Ye = !1)
                            : (Ye = f ? he <= r : he < r);
                  Ye ? (x = ae + 1) : (w = ae);
                }
                return dn(w, lt);
              }
              function Gf(n, r) {
                for (var l = -1, f = n.length, x = 0, w = []; ++l < f; ) {
                  var D = n[l],
                    O = r ? r(D) : D;
                  if (!l || !ai(O, X)) {
                    var X = O;
                    w[x++] = D === 0 ? 0 : D;
                  }
                }
                return w;
              }
              function Hf(n) {
                return typeof n == "number" ? n : zn(n) ? we : +n;
              }
              function Bn(n) {
                if (typeof n == "string") return n;
                if (it(n)) return Vt(n, Bn) + "";
                if (zn(n)) return xf ? xf.call(n) : "";
                var r = n + "";
                return r == "0" && 1 / n == -1 / 0 ? "-0" : r;
              }
              function Ji(n, r, l) {
                var f = -1,
                  x = xa,
                  w = n.length,
                  D = !0,
                  O = [],
                  X = O;
                if (l) (D = !1), (x = Qo);
                else if (w >= a) {
                  var re = r ? null : tg(n);
                  if (re) return Sa(re);
                  (D = !1), (x = Ls), (X = new _r());
                } else X = r ? [] : O;
                e: for (; ++f < w; ) {
                  var ae = n[f],
                    he = r ? r(ae) : ae;
                  if (((ae = l || ae !== 0 ? ae : 0), D && he === he)) {
                    for (var ve = X.length; ve--; )
                      if (X[ve] === he) continue e;
                    r && X.push(he), O.push(ae);
                  } else x(X, he, l) || (X !== O && X.push(he), O.push(ae));
                }
                return O;
              }
              function Tl(n, r) {
                return (
                  (r = Qi(r, n)),
                  (n = mh(n, r)),
                  n == null || delete n[_i($n(r))]
                );
              }
              function Vf(n, r, l, f) {
                return Hs(n, r, l(vr(n, r)), f);
              }
              function Ha(n, r, l, f) {
                for (
                  var x = n.length, w = f ? x : -1;
                  (f ? w-- : ++w < x) && r(n[w], w, n);

                );
                return l
                  ? Kn(n, f ? 0 : w, f ? w + 1 : x)
                  : Kn(n, f ? w + 1 : 0, f ? x : w);
              }
              function kf(n, r) {
                var l = n;
                return (
                  l instanceof _t && (l = l.value()),
                  jo(
                    r,
                    function (f, x) {
                      return x.func.apply(x.thisArg, Yi([f], x.args));
                    },
                    l,
                  )
                );
              }
              function Al(n, r, l) {
                var f = n.length;
                if (f < 2) return f ? Ji(n[0]) : [];
                for (var x = -1, w = J(f); ++x < f; )
                  for (var D = n[x], O = -1; ++O < f; )
                    O != x && (w[x] = Bs(w[x] || D, n[O], r, l));
                return Ji(un(w, 1), r, l);
              }
              function Wf(n, r, l) {
                for (
                  var f = -1, x = n.length, w = r.length, D = {};
                  ++f < x;

                ) {
                  var O = f < w ? r[f] : t;
                  l(D, n[f], O);
                }
                return D;
              }
              function wl(n) {
                return qt(n) ? n : [];
              }
              function bl(n) {
                return typeof n == "function" ? n : Ln;
              }
              function Qi(n, r) {
                return it(n) ? n : Fl(n, r) ? [n] : xh(bt(n));
              }
              var X_ = ct;
              function ji(n, r, l) {
                var f = n.length;
                return (l = l === t ? f : l), !r && l >= f ? n : Kn(n, r, l);
              }
              var Xf =
                Im ||
                function (n) {
                  return cn.clearTimeout(n);
                };
              function qf(n, r) {
                if (r) return n.slice();
                var l = n.length,
                  f = df ? df(l) : new n.constructor(l);
                return n.copy(f), f;
              }
              function Rl(n) {
                var r = new n.constructor(n.byteLength);
                return new ba(r).set(new ba(n)), r;
              }
              function q_(n, r) {
                var l = r ? Rl(n.buffer) : n.buffer;
                return new n.constructor(l, n.byteOffset, n.byteLength);
              }
              function Y_(n) {
                var r = new n.constructor(n.source, va.exec(n));
                return (r.lastIndex = n.lastIndex), r;
              }
              function Z_(n) {
                return Fs ? Ft(Fs.call(n)) : {};
              }
              function Yf(n, r) {
                var l = r ? Rl(n.buffer) : n.buffer;
                return new n.constructor(l, n.byteOffset, n.length);
              }
              function Zf(n, r) {
                if (n !== r) {
                  var l = n !== t,
                    f = n === null,
                    x = n === n,
                    w = zn(n),
                    D = r !== t,
                    O = r === null,
                    X = r === r,
                    re = zn(r);
                  if (
                    (!O && !re && !w && n > r) ||
                    (w && D && X && !O && !re) ||
                    (f && D && X) ||
                    (!l && X) ||
                    !x
                  )
                    return 1;
                  if (
                    (!f && !w && !re && n < r) ||
                    (re && l && x && !f && !w) ||
                    (O && l && x) ||
                    (!D && x) ||
                    !X
                  )
                    return -1;
                }
                return 0;
              }
              function K_(n, r, l) {
                for (
                  var f = -1,
                    x = n.criteria,
                    w = r.criteria,
                    D = x.length,
                    O = l.length;
                  ++f < D;

                ) {
                  var X = Zf(x[f], w[f]);
                  if (X) {
                    if (f >= O) return X;
                    var re = l[f];
                    return X * (re == "desc" ? -1 : 1);
                  }
                }
                return n.index - r.index;
              }
              function Kf(n, r, l, f) {
                for (
                  var x = -1,
                    w = n.length,
                    D = l.length,
                    O = -1,
                    X = r.length,
                    re = en(w - D, 0),
                    ae = J(X + re),
                    he = !f;
                  ++O < X;

                )
                  ae[O] = r[O];
                for (; ++x < D; ) (he || x < w) && (ae[l[x]] = n[x]);
                for (; re--; ) ae[O++] = n[x++];
                return ae;
              }
              function $f(n, r, l, f) {
                for (
                  var x = -1,
                    w = n.length,
                    D = -1,
                    O = l.length,
                    X = -1,
                    re = r.length,
                    ae = en(w - O, 0),
                    he = J(ae + re),
                    ve = !f;
                  ++x < ae;

                )
                  he[x] = n[x];
                for (var Be = x; ++X < re; ) he[Be + X] = r[X];
                for (; ++D < O; ) (ve || x < w) && (he[Be + l[D]] = n[x++]);
                return he;
              }
              function Rn(n, r) {
                var l = -1,
                  f = n.length;
                for (r || (r = J(f)); ++l < f; ) r[l] = n[l];
                return r;
              }
              function mi(n, r, l, f) {
                var x = !l;
                l || (l = {});
                for (var w = -1, D = r.length; ++w < D; ) {
                  var O = r[w],
                    X = f ? f(l[O], n[O], O, l, n) : t;
                  X === t && (X = n[O]), x ? wi(l, O, X) : Os(l, O, X);
                }
                return l;
              }
              function $_(n, r) {
                return mi(n, Nl(n), r);
              }
              function J_(n, r) {
                return mi(n, ch(n), r);
              }
              function Va(n, r) {
                return function (l, f) {
                  var x = it(l) ? nm : x_,
                    w = r ? r() : {};
                  return x(l, n, Xe(f, 2), w);
                };
              }
              function Kr(n) {
                return ct(function (r, l) {
                  var f = -1,
                    x = l.length,
                    w = x > 1 ? l[x - 1] : t,
                    D = x > 2 ? l[2] : t;
                  for (
                    w = n.length > 3 && typeof w == "function" ? (x--, w) : t,
                      D && Sn(l[0], l[1], D) && ((w = x < 3 ? t : w), (x = 1)),
                      r = Ft(r);
                    ++f < x;

                  ) {
                    var O = l[f];
                    O && n(r, O, f, w);
                  }
                  return r;
                });
              }
              function Jf(n, r) {
                return function (l, f) {
                  if (l == null) return l;
                  if (!Cn(l)) return n(l, f);
                  for (
                    var x = l.length, w = r ? x : -1, D = Ft(l);
                    (r ? w-- : ++w < x) && f(D[w], w, D) !== !1;

                  );
                  return l;
                };
              }
              function Qf(n) {
                return function (r, l, f) {
                  for (var x = -1, w = Ft(r), D = f(r), O = D.length; O--; ) {
                    var X = D[n ? O : ++x];
                    if (l(w[X], X, w) === !1) break;
                  }
                  return r;
                };
              }
              function Q_(n, r, l) {
                var f = r & v,
                  x = Vs(n);
                function w() {
                  var D = this && this !== cn && this instanceof w ? x : n;
                  return D.apply(f ? l : this, arguments);
                }
                return w;
              }
              function jf(n) {
                return function (r) {
                  r = bt(r);
                  var l = Vr(r) ? ri(r) : t,
                    f = l ? l[0] : r.charAt(0),
                    x = l ? ji(l, 1).join("") : r.slice(1);
                  return f[n]() + x;
                };
              }
              function $r(n) {
                return function (r) {
                  return jo(Jh($h(r).replace(Vp, "")), n, "");
                };
              }
              function Vs(n) {
                return function () {
                  var r = arguments;
                  switch (r.length) {
                    case 0:
                      return new n();
                    case 1:
                      return new n(r[0]);
                    case 2:
                      return new n(r[0], r[1]);
                    case 3:
                      return new n(r[0], r[1], r[2]);
                    case 4:
                      return new n(r[0], r[1], r[2], r[3]);
                    case 5:
                      return new n(r[0], r[1], r[2], r[3], r[4]);
                    case 6:
                      return new n(r[0], r[1], r[2], r[3], r[4], r[5]);
                    case 7:
                      return new n(r[0], r[1], r[2], r[3], r[4], r[5], r[6]);
                  }
                  var l = Zr(n.prototype),
                    f = n.apply(l, r);
                  return Wt(f) ? f : l;
                };
              }
              function j_(n, r, l) {
                var f = Vs(n);
                function x() {
                  for (
                    var w = arguments.length, D = J(w), O = w, X = Jr(x);
                    O--;

                  )
                    D[O] = arguments[O];
                  var re =
                    w < 3 && D[0] !== X && D[w - 1] !== X ? [] : Zi(D, X);
                  if (((w -= re.length), w < l))
                    return rh(n, r, ka, x.placeholder, t, D, re, t, t, l - w);
                  var ae = this && this !== cn && this instanceof x ? f : n;
                  return Fn(ae, this, D);
                }
                return x;
              }
              function eh(n) {
                return function (r, l, f) {
                  var x = Ft(r);
                  if (!Cn(r)) {
                    var w = Xe(l, 3);
                    (r = on(r)),
                      (l = function (O) {
                        return w(x[O], O, x);
                      });
                  }
                  var D = n(r, l, f);
                  return D > -1 ? x[w ? r[D] : D] : t;
                };
              }
              function th(n) {
                return Ri(function (r) {
                  var l = r.length,
                    f = l,
                    x = Yn.prototype.thru;
                  for (n && r.reverse(); f--; ) {
                    var w = r[f];
                    if (typeof w != "function") throw new qn(c);
                    if (x && !D && Ya(w) == "wrapper") var D = new Yn([], !0);
                  }
                  for (f = D ? f : l; ++f < l; ) {
                    w = r[f];
                    var O = Ya(w),
                      X = O == "wrapper" ? Dl(w) : t;
                    X &&
                    Ol(X[0]) &&
                    X[1] == (U | L | z | G) &&
                    !X[4].length &&
                    X[9] == 1
                      ? (D = D[Ya(X[0])].apply(D, X[3]))
                      : (D = w.length == 1 && Ol(w) ? D[O]() : D.thru(w));
                  }
                  return function () {
                    var re = arguments,
                      ae = re[0];
                    if (D && re.length == 1 && it(ae))
                      return D.plant(ae).value();
                    for (
                      var he = 0, ve = l ? r[he].apply(this, re) : ae;
                      ++he < l;

                    )
                      ve = r[he].call(this, ve);
                    return ve;
                  };
                });
              }
              function ka(n, r, l, f, x, w, D, O, X, re) {
                var ae = r & U,
                  he = r & v,
                  ve = r & m,
                  Be = r & (L | b),
                  qe = r & R,
                  at = ve ? t : Vs(n);
                function Ye() {
                  for (var pt = arguments.length, xt = J(pt), Gn = pt; Gn--; )
                    xt[Gn] = arguments[Gn];
                  if (Be)
                    var En = Jr(Ye),
                      Hn = fm(xt, En);
                  if (
                    (f && (xt = Kf(xt, f, x, Be)),
                    w && (xt = $f(xt, w, D, Be)),
                    (pt -= Hn),
                    Be && pt < re)
                  ) {
                    var Yt = Zi(xt, En);
                    return rh(
                      n,
                      r,
                      ka,
                      Ye.placeholder,
                      l,
                      xt,
                      Yt,
                      O,
                      X,
                      re - pt,
                    );
                  }
                  var oi = he ? l : this,
                    Ii = ve ? oi[n] : n;
                  return (
                    (pt = xt.length),
                    O ? (xt = xg(xt, O)) : qe && pt > 1 && xt.reverse(),
                    ae && X < pt && (xt.length = X),
                    this &&
                      this !== cn &&
                      this instanceof Ye &&
                      (Ii = at || Vs(Ii)),
                    Ii.apply(oi, xt)
                  );
                }
                return Ye;
              }
              function nh(n, r) {
                return function (l, f) {
                  return b_(l, n, r(f), {});
                };
              }
              function Wa(n, r) {
                return function (l, f) {
                  var x;
                  if (l === t && f === t) return r;
                  if ((l !== t && (x = l), f !== t)) {
                    if (x === t) return f;
                    typeof l == "string" || typeof f == "string"
                      ? ((l = Bn(l)), (f = Bn(f)))
                      : ((l = Hf(l)), (f = Hf(f))),
                      (x = n(l, f));
                  }
                  return x;
                };
              }
              function Cl(n) {
                return Ri(function (r) {
                  return (
                    (r = Vt(r, On(Xe()))),
                    ct(function (l) {
                      var f = this;
                      return n(r, function (x) {
                        return Fn(x, f, l);
                      });
                    })
                  );
                });
              }
              function Xa(n, r) {
                r = r === t ? " " : Bn(r);
                var l = r.length;
                if (l < 2) return l ? El(r, n) : r;
                var f = El(r, La(n / kr(r)));
                return Vr(r) ? ji(ri(f), 0, n).join("") : f.slice(0, n);
              }
              function eg(n, r, l, f) {
                var x = r & v,
                  w = Vs(n);
                function D() {
                  for (
                    var O = -1,
                      X = arguments.length,
                      re = -1,
                      ae = f.length,
                      he = J(ae + X),
                      ve = this && this !== cn && this instanceof D ? w : n;
                    ++re < ae;

                  )
                    he[re] = f[re];
                  for (; X--; ) he[re++] = arguments[++O];
                  return Fn(ve, x ? l : this, he);
                }
                return D;
              }
              function ih(n) {
                return function (r, l, f) {
                  return (
                    f && typeof f != "number" && Sn(r, l, f) && (l = f = t),
                    (r = Li(r)),
                    l === t ? ((l = r), (r = 0)) : (l = Li(l)),
                    (f = f === t ? (r < l ? 1 : -1) : Li(f)),
                    z_(r, l, f, n)
                  );
                };
              }
              function qa(n) {
                return function (r, l) {
                  return (
                    (typeof r == "string" && typeof l == "string") ||
                      ((r = Jn(r)), (l = Jn(l))),
                    n(r, l)
                  );
                };
              }
              function rh(n, r, l, f, x, w, D, O, X, re) {
                var ae = r & L,
                  he = ae ? D : t,
                  ve = ae ? t : D,
                  Be = ae ? w : t,
                  qe = ae ? t : w;
                (r |= ae ? z : N), (r &= ~(ae ? N : z)), r & P || (r &= -4);
                var at = [n, r, x, Be, he, qe, ve, O, X, re],
                  Ye = l.apply(t, at);
                return Ol(n) && _h(Ye, at), (Ye.placeholder = f), gh(Ye, n, r);
              }
              function Pl(n) {
                var r = jt[n];
                return function (l, f) {
                  if (
                    ((l = Jn(l)),
                    (f = f == null ? 0 : dn(rt(f), 292)),
                    f && gf(l))
                  ) {
                    var x = (bt(l) + "e").split("e"),
                      w = r(x[0] + "e" + (+x[1] + f));
                    return (
                      (x = (bt(w) + "e").split("e")),
                      +(x[0] + "e" + (+x[1] - f))
                    );
                  }
                  return r(l);
                };
              }
              var tg =
                qr && 1 / Sa(new qr([, -0]))[1] == de
                  ? function (n) {
                      return new qr(n);
                    }
                  : Ql;
              function sh(n) {
                return function (r) {
                  var l = pn(r);
                  return l == F ? al(r) : l == I ? vm(r) : um(r, n(r));
                };
              }
              function bi(n, r, l, f, x, w, D, O) {
                var X = r & m;
                if (!X && typeof n != "function") throw new qn(c);
                var re = f ? f.length : 0;
                if (
                  (re || ((r &= -97), (f = x = t)),
                  (D = D === t ? D : en(rt(D), 0)),
                  (O = O === t ? O : rt(O)),
                  (re -= x ? x.length : 0),
                  r & N)
                ) {
                  var ae = f,
                    he = x;
                  f = x = t;
                }
                var ve = X ? t : Dl(n),
                  Be = [n, r, l, f, x, ae, he, w, D, O];
                if (
                  (ve && _g(Be, ve),
                  (n = Be[0]),
                  (r = Be[1]),
                  (l = Be[2]),
                  (f = Be[3]),
                  (x = Be[4]),
                  (O = Be[9] =
                    Be[9] === t ? (X ? 0 : n.length) : en(Be[9] - re, 0)),
                  !O && r & (L | b) && (r &= -25),
                  !r || r == v)
                )
                  var qe = Q_(n, r, l);
                else
                  r == L || r == b
                    ? (qe = j_(n, r, O))
                    : (r == z || r == (v | z)) && !x.length
                      ? (qe = eg(n, r, l, f))
                      : (qe = ka.apply(t, Be));
                var at = ve ? zf : _h;
                return gh(at(qe, Be), n, r);
              }
              function ah(n, r, l, f) {
                return n === t || (ai(n, Xr[l]) && !Pt.call(f, l)) ? r : n;
              }
              function oh(n, r, l, f, x, w) {
                return (
                  Wt(n) &&
                    Wt(r) &&
                    (w.set(r, n), za(n, r, t, oh, w), w.delete(r)),
                  n
                );
              }
              function ng(n) {
                return Xs(n) ? t : n;
              }
              function lh(n, r, l, f, x, w) {
                var D = l & T,
                  O = n.length,
                  X = r.length;
                if (O != X && !(D && X > O)) return !1;
                var re = w.get(n),
                  ae = w.get(r);
                if (re && ae) return re == r && ae == n;
                var he = -1,
                  ve = !0,
                  Be = l & C ? new _r() : t;
                for (w.set(n, r), w.set(r, n); ++he < O; ) {
                  var qe = n[he],
                    at = r[he];
                  if (f)
                    var Ye = D
                      ? f(at, qe, he, r, n, w)
                      : f(qe, at, he, n, r, w);
                  if (Ye !== t) {
                    if (Ye) continue;
                    ve = !1;
                    break;
                  }
                  if (Be) {
                    if (
                      !el(r, function (pt, xt) {
                        if (!Ls(Be, xt) && (qe === pt || x(qe, pt, l, f, w)))
                          return Be.push(xt);
                      })
                    ) {
                      ve = !1;
                      break;
                    }
                  } else if (!(qe === at || x(qe, at, l, f, w))) {
                    ve = !1;
                    break;
                  }
                }
                return w.delete(n), w.delete(r), ve;
              }
              function ig(n, r, l, f, x, w, D) {
                switch (l) {
                  case ge:
                    if (
                      n.byteLength != r.byteLength ||
                      n.byteOffset != r.byteOffset
                    )
                      return !1;
                    (n = n.buffer), (r = r.buffer);
                  case Ne:
                    return !(
                      n.byteLength != r.byteLength || !w(new ba(n), new ba(r))
                    );
                  case Ve:
                  case ft:
                  case rn:
                    return ai(+n, +r);
                  case Ot:
                    return n.name == r.name && n.message == r.message;
                  case Oe:
                  case S:
                    return n == r + "";
                  case F:
                    var O = al;
                  case I:
                    var X = f & T;
                    if ((O || (O = Sa), n.size != r.size && !X)) return !1;
                    var re = D.get(n);
                    if (re) return re == r;
                    (f |= C), D.set(n, r);
                    var ae = lh(O(n), O(r), f, x, w, D);
                    return D.delete(n), ae;
                  case Y:
                    if (Fs) return Fs.call(n) == Fs.call(r);
                }
                return !1;
              }
              function rg(n, r, l, f, x, w) {
                var D = l & T,
                  O = Ll(n),
                  X = O.length,
                  re = Ll(r),
                  ae = re.length;
                if (X != ae && !D) return !1;
                for (var he = X; he--; ) {
                  var ve = O[he];
                  if (!(D ? ve in r : Pt.call(r, ve))) return !1;
                }
                var Be = w.get(n),
                  qe = w.get(r);
                if (Be && qe) return Be == r && qe == n;
                var at = !0;
                w.set(n, r), w.set(r, n);
                for (var Ye = D; ++he < X; ) {
                  ve = O[he];
                  var pt = n[ve],
                    xt = r[ve];
                  if (f)
                    var Gn = D
                      ? f(xt, pt, ve, r, n, w)
                      : f(pt, xt, ve, n, r, w);
                  if (!(Gn === t ? pt === xt || x(pt, xt, l, f, w) : Gn)) {
                    at = !1;
                    break;
                  }
                  Ye || (Ye = ve == "constructor");
                }
                if (at && !Ye) {
                  var En = n.constructor,
                    Hn = r.constructor;
                  En != Hn &&
                    "constructor" in n &&
                    "constructor" in r &&
                    !(
                      typeof En == "function" &&
                      En instanceof En &&
                      typeof Hn == "function" &&
                      Hn instanceof Hn
                    ) &&
                    (at = !1);
                }
                return w.delete(n), w.delete(r), at;
              }
              function Ri(n) {
                return zl(ph(n, t, yh), n + "");
              }
              function Ll(n) {
                return Rf(n, on, Nl);
              }
              function Il(n) {
                return Rf(n, Pn, ch);
              }
              var Dl = Da
                ? function (n) {
                    return Da.get(n);
                  }
                : Ql;
              function Ya(n) {
                for (
                  var r = n.name + "",
                    l = Yr[r],
                    f = Pt.call(Yr, r) ? l.length : 0;
                  f--;

                ) {
                  var x = l[f],
                    w = x.func;
                  if (w == null || w == n) return x.name;
                }
                return r;
              }
              function Jr(n) {
                var r = Pt.call(E, "placeholder") ? E : n;
                return r.placeholder;
              }
              function Xe() {
                var n = E.iteratee || $l;
                return (
                  (n = n === $l ? Lf : n),
                  arguments.length ? n(arguments[0], arguments[1]) : n
                );
              }
              function Za(n, r) {
                var l = n.__data__;
                return hg(r)
                  ? l[typeof r == "string" ? "string" : "hash"]
                  : l.map;
              }
              function Ul(n) {
                for (var r = on(n), l = r.length; l--; ) {
                  var f = r[l],
                    x = n[f];
                  r[l] = [f, x, hh(x)];
                }
                return r;
              }
              function xr(n, r) {
                var l = mm(n, r);
                return Pf(l) ? l : t;
              }
              function sg(n) {
                var r = Pt.call(n, pr),
                  l = n[pr];
                try {
                  n[pr] = t;
                  var f = !0;
                } catch {}
                var x = Aa.call(n);
                return f && (r ? (n[pr] = l) : delete n[pr]), x;
              }
              var Nl = ll
                  ? function (n) {
                      return n == null
                        ? []
                        : ((n = Ft(n)),
                          qi(ll(n), function (r) {
                            return mf.call(n, r);
                          }));
                    }
                  : jl,
                ch = ll
                  ? function (n) {
                      for (var r = []; n; ) Yi(r, Nl(n)), (n = Ra(n));
                      return r;
                    }
                  : jl,
                pn = Mn;
              ((cl && pn(new cl(new ArrayBuffer(1))) != ge) ||
                (Ds && pn(new Ds()) != F) ||
                (ul && pn(ul.resolve()) != ze) ||
                (qr && pn(new qr()) != I) ||
                (Us && pn(new Us()) != fe)) &&
                (pn = function (n) {
                  var r = Mn(n),
                    l = r == je ? n.constructor : t,
                    f = l ? Mr(l) : "";
                  if (f)
                    switch (f) {
                      case Hm:
                        return ge;
                      case Vm:
                        return F;
                      case km:
                        return ze;
                      case Wm:
                        return I;
                      case Xm:
                        return fe;
                    }
                  return r;
                });
              function ag(n, r, l) {
                for (var f = -1, x = l.length; ++f < x; ) {
                  var w = l[f],
                    D = w.size;
                  switch (w.type) {
                    case "drop":
                      n += D;
                      break;
                    case "dropRight":
                      r -= D;
                      break;
                    case "take":
                      r = dn(r, n + D);
                      break;
                    case "takeRight":
                      n = en(n, r - D);
                      break;
                  }
                }
                return { start: n, end: r };
              }
              function og(n) {
                var r = n.match(pa);
                return r ? r[1].split(zr) : [];
              }
              function uh(n, r, l) {
                r = Qi(r, n);
                for (var f = -1, x = r.length, w = !1; ++f < x; ) {
                  var D = _i(r[f]);
                  if (!(w = n != null && l(n, D))) break;
                  n = n[D];
                }
                return w || ++f != x
                  ? w
                  : ((x = n == null ? 0 : n.length),
                    !!x && to(x) && Ci(D, x) && (it(n) || Sr(n)));
              }
              function lg(n) {
                var r = n.length,
                  l = new n.constructor(r);
                return (
                  r &&
                    typeof n[0] == "string" &&
                    Pt.call(n, "index") &&
                    ((l.index = n.index), (l.input = n.input)),
                  l
                );
              }
              function fh(n) {
                return typeof n.constructor == "function" && !ks(n)
                  ? Zr(Ra(n))
                  : {};
              }
              function cg(n, r, l) {
                var f = n.constructor;
                switch (r) {
                  case Ne:
                    return Rl(n);
                  case Ve:
                  case ft:
                    return new f(+n);
                  case ge:
                    return q_(n, l);
                  case be:
                  case dt:
                  case me:
                  case Ce:
                  case We:
                  case Ze:
                  case Pe:
                  case ut:
                  case et:
                    return Yf(n, l);
                  case F:
                    return new f();
                  case rn:
                  case S:
                    return new f(n);
                  case Oe:
                    return Y_(n);
                  case I:
                    return new f();
                  case Y:
                    return Z_(n);
                }
              }
              function ug(n, r) {
                var l = r.length;
                if (!l) return n;
                var f = l - 1;
                return (
                  (r[f] = (l > 1 ? "& " : "") + r[f]),
                  (r = r.join(l > 2 ? ", " : " ")),
                  n.replace(
                    da,
                    `{
/* [wrapped with ` +
                      r +
                      `] */
`,
                  )
                );
              }
              function fg(n) {
                return it(n) || Sr(n) || !!(_f && n && n[_f]);
              }
              function Ci(n, r) {
                var l = typeof n;
                return (
                  (r = r ?? j),
                  !!r &&
                    (l == "number" || (l != "symbol" && Zo.test(n))) &&
                    n > -1 &&
                    n % 1 == 0 &&
                    n < r
                );
              }
              function Sn(n, r, l) {
                if (!Wt(l)) return !1;
                var f = typeof r;
                return (
                  f == "number"
                    ? Cn(l) && Ci(r, l.length)
                    : f == "string" && r in l
                )
                  ? ai(l[r], n)
                  : !1;
              }
              function Fl(n, r) {
                if (it(n)) return !1;
                var l = typeof n;
                return l == "number" ||
                  l == "symbol" ||
                  l == "boolean" ||
                  n == null ||
                  zn(n)
                  ? !0
                  : Nn.test(n) || !At.test(n) || (r != null && n in Ft(r));
              }
              function hg(n) {
                var r = typeof n;
                return r == "string" ||
                  r == "number" ||
                  r == "symbol" ||
                  r == "boolean"
                  ? n !== "__proto__"
                  : n === null;
              }
              function Ol(n) {
                var r = Ya(n),
                  l = E[r];
                if (typeof l != "function" || !(r in _t.prototype)) return !1;
                if (n === l) return !0;
                var f = Dl(l);
                return !!f && n === f[0];
              }
              function dg(n) {
                return !!hf && hf in n;
              }
              var pg = ya ? Pi : ec;
              function ks(n) {
                var r = n && n.constructor,
                  l = (typeof r == "function" && r.prototype) || Xr;
                return n === l;
              }
              function hh(n) {
                return n === n && !Wt(n);
              }
              function dh(n, r) {
                return function (l) {
                  return l == null ? !1 : l[n] === r && (r !== t || n in Ft(l));
                };
              }
              function mg(n) {
                var r = ja(n, function (f) {
                    return l.size === h && l.clear(), f;
                  }),
                  l = r.cache;
                return r;
              }
              function _g(n, r) {
                var l = n[1],
                  f = r[1],
                  x = l | f,
                  w = x < (v | m | U),
                  D =
                    (f == U && l == L) ||
                    (f == U && l == G && n[7].length <= r[8]) ||
                    (f == (U | G) && r[7].length <= r[8] && l == L);
                if (!(w || D)) return n;
                f & v && ((n[2] = r[2]), (x |= l & v ? 0 : P));
                var O = r[3];
                if (O) {
                  var X = n[3];
                  (n[3] = X ? Kf(X, O, r[4]) : O),
                    (n[4] = X ? Zi(n[3], p) : r[4]);
                }
                return (
                  (O = r[5]),
                  O &&
                    ((X = n[5]),
                    (n[5] = X ? $f(X, O, r[6]) : O),
                    (n[6] = X ? Zi(n[5], p) : r[6])),
                  (O = r[7]),
                  O && (n[7] = O),
                  f & U && (n[8] = n[8] == null ? r[8] : dn(n[8], r[8])),
                  n[9] == null && (n[9] = r[9]),
                  (n[0] = r[0]),
                  (n[1] = x),
                  n
                );
              }
              function gg(n) {
                var r = [];
                if (n != null) for (var l in Ft(n)) r.push(l);
                return r;
              }
              function vg(n) {
                return Aa.call(n);
              }
              function ph(n, r, l) {
                return (
                  (r = en(r === t ? n.length - 1 : r, 0)),
                  function () {
                    for (
                      var f = arguments,
                        x = -1,
                        w = en(f.length - r, 0),
                        D = J(w);
                      ++x < w;

                    )
                      D[x] = f[r + x];
                    x = -1;
                    for (var O = J(r + 1); ++x < r; ) O[x] = f[x];
                    return (O[r] = l(D)), Fn(n, this, O);
                  }
                );
              }
              function mh(n, r) {
                return r.length < 2 ? n : vr(n, Kn(r, 0, -1));
              }
              function xg(n, r) {
                for (var l = n.length, f = dn(r.length, l), x = Rn(n); f--; ) {
                  var w = r[f];
                  n[f] = Ci(w, l) ? x[w] : t;
                }
                return n;
              }
              function Bl(n, r) {
                if (
                  !(r === "constructor" && typeof n[r] == "function") &&
                  r != "__proto__"
                )
                  return n[r];
              }
              var _h = vh(zf),
                Ws =
                  Um ||
                  function (n, r) {
                    return cn.setTimeout(n, r);
                  },
                zl = vh(V_);
              function gh(n, r, l) {
                var f = r + "";
                return zl(n, ug(f, Mg(og(f), l)));
              }
              function vh(n) {
                var r = 0,
                  l = 0;
                return function () {
                  var f = Bm(),
                    x = $ - (f - l);
                  if (((l = f), x > 0)) {
                    if (++r >= Q) return arguments[0];
                  } else r = 0;
                  return n.apply(t, arguments);
                };
              }
              function Ka(n, r) {
                var l = -1,
                  f = n.length,
                  x = f - 1;
                for (r = r === t ? f : r; ++l < r; ) {
                  var w = Sl(l, x),
                    D = n[w];
                  (n[w] = n[l]), (n[l] = D);
                }
                return (n.length = r), n;
              }
              var xh = mg(function (n) {
                var r = [];
                return (
                  n.charCodeAt(0) === 46 && r.push(""),
                  n.replace(ni, function (l, f, x, w) {
                    r.push(x ? w.replace(_a, "$1") : f || l);
                  }),
                  r
                );
              });
              function _i(n) {
                if (typeof n == "string" || zn(n)) return n;
                var r = n + "";
                return r == "0" && 1 / n == -1 / 0 ? "-0" : r;
              }
              function Mr(n) {
                if (n != null) {
                  try {
                    return Ta.call(n);
                  } catch {}
                  try {
                    return n + "";
                  } catch {}
                }
                return "";
              }
              function Mg(n, r) {
                return (
                  Xn(oe, function (l) {
                    var f = "_." + l[0];
                    r & l[1] && !xa(n, f) && n.push(f);
                  }),
                  n.sort()
                );
              }
              function Mh(n) {
                if (n instanceof _t) return n.clone();
                var r = new Yn(n.__wrapped__, n.__chain__);
                return (
                  (r.__actions__ = Rn(n.__actions__)),
                  (r.__index__ = n.__index__),
                  (r.__values__ = n.__values__),
                  r
                );
              }
              function Sg(n, r, l) {
                (l ? Sn(n, r, l) : r === t) ? (r = 1) : (r = en(rt(r), 0));
                var f = n == null ? 0 : n.length;
                if (!f || r < 1) return [];
                for (var x = 0, w = 0, D = J(La(f / r)); x < f; )
                  D[w++] = Kn(n, x, (x += r));
                return D;
              }
              function Eg(n) {
                for (
                  var r = -1, l = n == null ? 0 : n.length, f = 0, x = [];
                  ++r < l;

                ) {
                  var w = n[r];
                  w && (x[f++] = w);
                }
                return x;
              }
              function yg() {
                var n = arguments.length;
                if (!n) return [];
                for (var r = J(n - 1), l = arguments[0], f = n; f--; )
                  r[f - 1] = arguments[f];
                return Yi(it(l) ? Rn(l) : [l], un(r, 1));
              }
              var Tg = ct(function (n, r) {
                  return qt(n) ? Bs(n, un(r, 1, qt, !0)) : [];
                }),
                Ag = ct(function (n, r) {
                  var l = $n(r);
                  return (
                    qt(l) && (l = t),
                    qt(n) ? Bs(n, un(r, 1, qt, !0), Xe(l, 2)) : []
                  );
                }),
                wg = ct(function (n, r) {
                  var l = $n(r);
                  return (
                    qt(l) && (l = t), qt(n) ? Bs(n, un(r, 1, qt, !0), t, l) : []
                  );
                });
              function bg(n, r, l) {
                var f = n == null ? 0 : n.length;
                return f
                  ? ((r = l || r === t ? 1 : rt(r)), Kn(n, r < 0 ? 0 : r, f))
                  : [];
              }
              function Rg(n, r, l) {
                var f = n == null ? 0 : n.length;
                return f
                  ? ((r = l || r === t ? 1 : rt(r)),
                    (r = f - r),
                    Kn(n, 0, r < 0 ? 0 : r))
                  : [];
              }
              function Cg(n, r) {
                return n && n.length ? Ha(n, Xe(r, 3), !0, !0) : [];
              }
              function Pg(n, r) {
                return n && n.length ? Ha(n, Xe(r, 3), !0) : [];
              }
              function Lg(n, r, l, f) {
                var x = n == null ? 0 : n.length;
                return x
                  ? (l &&
                      typeof l != "number" &&
                      Sn(n, r, l) &&
                      ((l = 0), (f = x)),
                    y_(n, r, l, f))
                  : [];
              }
              function Sh(n, r, l) {
                var f = n == null ? 0 : n.length;
                if (!f) return -1;
                var x = l == null ? 0 : rt(l);
                return x < 0 && (x = en(f + x, 0)), Ma(n, Xe(r, 3), x);
              }
              function Eh(n, r, l) {
                var f = n == null ? 0 : n.length;
                if (!f) return -1;
                var x = f - 1;
                return (
                  l !== t &&
                    ((x = rt(l)), (x = l < 0 ? en(f + x, 0) : dn(x, f - 1))),
                  Ma(n, Xe(r, 3), x, !0)
                );
              }
              function yh(n) {
                var r = n == null ? 0 : n.length;
                return r ? un(n, 1) : [];
              }
              function Ig(n) {
                var r = n == null ? 0 : n.length;
                return r ? un(n, de) : [];
              }
              function Dg(n, r) {
                var l = n == null ? 0 : n.length;
                return l ? ((r = r === t ? 1 : rt(r)), un(n, r)) : [];
              }
              function Ug(n) {
                for (
                  var r = -1, l = n == null ? 0 : n.length, f = {};
                  ++r < l;

                ) {
                  var x = n[r];
                  f[x[0]] = x[1];
                }
                return f;
              }
              function Th(n) {
                return n && n.length ? n[0] : t;
              }
              function Ng(n, r, l) {
                var f = n == null ? 0 : n.length;
                if (!f) return -1;
                var x = l == null ? 0 : rt(l);
                return x < 0 && (x = en(f + x, 0)), Hr(n, r, x);
              }
              function Fg(n) {
                var r = n == null ? 0 : n.length;
                return r ? Kn(n, 0, -1) : [];
              }
              var Og = ct(function (n) {
                  var r = Vt(n, wl);
                  return r.length && r[0] === n[0] ? _l(r) : [];
                }),
                Bg = ct(function (n) {
                  var r = $n(n),
                    l = Vt(n, wl);
                  return (
                    r === $n(l) ? (r = t) : l.pop(),
                    l.length && l[0] === n[0] ? _l(l, Xe(r, 2)) : []
                  );
                }),
                zg = ct(function (n) {
                  var r = $n(n),
                    l = Vt(n, wl);
                  return (
                    (r = typeof r == "function" ? r : t),
                    r && l.pop(),
                    l.length && l[0] === n[0] ? _l(l, t, r) : []
                  );
                });
              function Gg(n, r) {
                return n == null ? "" : Fm.call(n, r);
              }
              function $n(n) {
                var r = n == null ? 0 : n.length;
                return r ? n[r - 1] : t;
              }
              function Hg(n, r, l) {
                var f = n == null ? 0 : n.length;
                if (!f) return -1;
                var x = f;
                return (
                  l !== t &&
                    ((x = rt(l)), (x = x < 0 ? en(f + x, 0) : dn(x, f - 1))),
                  r === r ? Mm(n, r, x) : Ma(n, rf, x, !0)
                );
              }
              function Vg(n, r) {
                return n && n.length ? Nf(n, rt(r)) : t;
              }
              var kg = ct(Ah);
              function Ah(n, r) {
                return n && n.length && r && r.length ? Ml(n, r) : n;
              }
              function Wg(n, r, l) {
                return n && n.length && r && r.length ? Ml(n, r, Xe(l, 2)) : n;
              }
              function Xg(n, r, l) {
                return n && n.length && r && r.length ? Ml(n, r, t, l) : n;
              }
              var qg = Ri(function (n, r) {
                var l = n == null ? 0 : n.length,
                  f = hl(n, r);
                return (
                  Bf(
                    n,
                    Vt(r, function (x) {
                      return Ci(x, l) ? +x : x;
                    }).sort(Zf),
                  ),
                  f
                );
              });
              function Yg(n, r) {
                var l = [];
                if (!(n && n.length)) return l;
                var f = -1,
                  x = [],
                  w = n.length;
                for (r = Xe(r, 3); ++f < w; ) {
                  var D = n[f];
                  r(D, f, n) && (l.push(D), x.push(f));
                }
                return Bf(n, x), l;
              }
              function Gl(n) {
                return n == null ? n : Gm.call(n);
              }
              function Zg(n, r, l) {
                var f = n == null ? 0 : n.length;
                return f
                  ? (l && typeof l != "number" && Sn(n, r, l)
                      ? ((r = 0), (l = f))
                      : ((r = r == null ? 0 : rt(r)),
                        (l = l === t ? f : rt(l))),
                    Kn(n, r, l))
                  : [];
              }
              function Kg(n, r) {
                return Ga(n, r);
              }
              function $g(n, r, l) {
                return yl(n, r, Xe(l, 2));
              }
              function Jg(n, r) {
                var l = n == null ? 0 : n.length;
                if (l) {
                  var f = Ga(n, r);
                  if (f < l && ai(n[f], r)) return f;
                }
                return -1;
              }
              function Qg(n, r) {
                return Ga(n, r, !0);
              }
              function jg(n, r, l) {
                return yl(n, r, Xe(l, 2), !0);
              }
              function e0(n, r) {
                var l = n == null ? 0 : n.length;
                if (l) {
                  var f = Ga(n, r, !0) - 1;
                  if (ai(n[f], r)) return f;
                }
                return -1;
              }
              function t0(n) {
                return n && n.length ? Gf(n) : [];
              }
              function n0(n, r) {
                return n && n.length ? Gf(n, Xe(r, 2)) : [];
              }
              function i0(n) {
                var r = n == null ? 0 : n.length;
                return r ? Kn(n, 1, r) : [];
              }
              function r0(n, r, l) {
                return n && n.length
                  ? ((r = l || r === t ? 1 : rt(r)), Kn(n, 0, r < 0 ? 0 : r))
                  : [];
              }
              function s0(n, r, l) {
                var f = n == null ? 0 : n.length;
                return f
                  ? ((r = l || r === t ? 1 : rt(r)),
                    (r = f - r),
                    Kn(n, r < 0 ? 0 : r, f))
                  : [];
              }
              function a0(n, r) {
                return n && n.length ? Ha(n, Xe(r, 3), !1, !0) : [];
              }
              function o0(n, r) {
                return n && n.length ? Ha(n, Xe(r, 3)) : [];
              }
              var l0 = ct(function (n) {
                  return Ji(un(n, 1, qt, !0));
                }),
                c0 = ct(function (n) {
                  var r = $n(n);
                  return qt(r) && (r = t), Ji(un(n, 1, qt, !0), Xe(r, 2));
                }),
                u0 = ct(function (n) {
                  var r = $n(n);
                  return (
                    (r = typeof r == "function" ? r : t),
                    Ji(un(n, 1, qt, !0), t, r)
                  );
                });
              function f0(n) {
                return n && n.length ? Ji(n) : [];
              }
              function h0(n, r) {
                return n && n.length ? Ji(n, Xe(r, 2)) : [];
              }
              function d0(n, r) {
                return (
                  (r = typeof r == "function" ? r : t),
                  n && n.length ? Ji(n, t, r) : []
                );
              }
              function Hl(n) {
                if (!(n && n.length)) return [];
                var r = 0;
                return (
                  (n = qi(n, function (l) {
                    if (qt(l)) return (r = en(l.length, r)), !0;
                  })),
                  rl(r, function (l) {
                    return Vt(n, tl(l));
                  })
                );
              }
              function wh(n, r) {
                if (!(n && n.length)) return [];
                var l = Hl(n);
                return r == null
                  ? l
                  : Vt(l, function (f) {
                      return Fn(r, t, f);
                    });
              }
              var p0 = ct(function (n, r) {
                  return qt(n) ? Bs(n, r) : [];
                }),
                m0 = ct(function (n) {
                  return Al(qi(n, qt));
                }),
                _0 = ct(function (n) {
                  var r = $n(n);
                  return qt(r) && (r = t), Al(qi(n, qt), Xe(r, 2));
                }),
                g0 = ct(function (n) {
                  var r = $n(n);
                  return (
                    (r = typeof r == "function" ? r : t), Al(qi(n, qt), t, r)
                  );
                }),
                v0 = ct(Hl);
              function x0(n, r) {
                return Wf(n || [], r || [], Os);
              }
              function M0(n, r) {
                return Wf(n || [], r || [], Hs);
              }
              var S0 = ct(function (n) {
                var r = n.length,
                  l = r > 1 ? n[r - 1] : t;
                return (
                  (l = typeof l == "function" ? (n.pop(), l) : t), wh(n, l)
                );
              });
              function bh(n) {
                var r = E(n);
                return (r.__chain__ = !0), r;
              }
              function E0(n, r) {
                return r(n), n;
              }
              function $a(n, r) {
                return r(n);
              }
              var y0 = Ri(function (n) {
                var r = n.length,
                  l = r ? n[0] : 0,
                  f = this.__wrapped__,
                  x = function (w) {
                    return hl(w, n);
                  };
                return r > 1 ||
                  this.__actions__.length ||
                  !(f instanceof _t) ||
                  !Ci(l)
                  ? this.thru(x)
                  : ((f = f.slice(l, +l + (r ? 1 : 0))),
                    f.__actions__.push({ func: $a, args: [x], thisArg: t }),
                    new Yn(f, this.__chain__).thru(function (w) {
                      return r && !w.length && w.push(t), w;
                    }));
              });
              function T0() {
                return bh(this);
              }
              function A0() {
                return new Yn(this.value(), this.__chain__);
              }
              function w0() {
                this.__values__ === t && (this.__values__ = Hh(this.value()));
                var n = this.__index__ >= this.__values__.length,
                  r = n ? t : this.__values__[this.__index__++];
                return { done: n, value: r };
              }
              function b0() {
                return this;
              }
              function R0(n) {
                for (var r, l = this; l instanceof Na; ) {
                  var f = Mh(l);
                  (f.__index__ = 0),
                    (f.__values__ = t),
                    r ? (x.__wrapped__ = f) : (r = f);
                  var x = f;
                  l = l.__wrapped__;
                }
                return (x.__wrapped__ = n), r;
              }
              function C0() {
                var n = this.__wrapped__;
                if (n instanceof _t) {
                  var r = n;
                  return (
                    this.__actions__.length && (r = new _t(this)),
                    (r = r.reverse()),
                    r.__actions__.push({ func: $a, args: [Gl], thisArg: t }),
                    new Yn(r, this.__chain__)
                  );
                }
                return this.thru(Gl);
              }
              function P0() {
                return kf(this.__wrapped__, this.__actions__);
              }
              var L0 = Va(function (n, r, l) {
                Pt.call(n, l) ? ++n[l] : wi(n, l, 1);
              });
              function I0(n, r, l) {
                var f = it(n) ? tf : E_;
                return l && Sn(n, r, l) && (r = t), f(n, Xe(r, 3));
              }
              function D0(n, r) {
                var l = it(n) ? qi : wf;
                return l(n, Xe(r, 3));
              }
              var U0 = eh(Sh),
                N0 = eh(Eh);
              function F0(n, r) {
                return un(Ja(n, r), 1);
              }
              function O0(n, r) {
                return un(Ja(n, r), de);
              }
              function B0(n, r, l) {
                return (l = l === t ? 1 : rt(l)), un(Ja(n, r), l);
              }
              function Rh(n, r) {
                var l = it(n) ? Xn : $i;
                return l(n, Xe(r, 3));
              }
              function Ch(n, r) {
                var l = it(n) ? im : Af;
                return l(n, Xe(r, 3));
              }
              var z0 = Va(function (n, r, l) {
                Pt.call(n, l) ? n[l].push(r) : wi(n, l, [r]);
              });
              function G0(n, r, l, f) {
                (n = Cn(n) ? n : jr(n)), (l = l && !f ? rt(l) : 0);
                var x = n.length;
                return (
                  l < 0 && (l = en(x + l, 0)),
                  no(n)
                    ? l <= x && n.indexOf(r, l) > -1
                    : !!x && Hr(n, r, l) > -1
                );
              }
              var H0 = ct(function (n, r, l) {
                  var f = -1,
                    x = typeof r == "function",
                    w = Cn(n) ? J(n.length) : [];
                  return (
                    $i(n, function (D) {
                      w[++f] = x ? Fn(r, D, l) : zs(D, r, l);
                    }),
                    w
                  );
                }),
                V0 = Va(function (n, r, l) {
                  wi(n, l, r);
                });
              function Ja(n, r) {
                var l = it(n) ? Vt : If;
                return l(n, Xe(r, 3));
              }
              function k0(n, r, l, f) {
                return n == null
                  ? []
                  : (it(r) || (r = r == null ? [] : [r]),
                    (l = f ? t : l),
                    it(l) || (l = l == null ? [] : [l]),
                    Ff(n, r, l));
              }
              var W0 = Va(
                function (n, r, l) {
                  n[l ? 0 : 1].push(r);
                },
                function () {
                  return [[], []];
                },
              );
              function X0(n, r, l) {
                var f = it(n) ? jo : af,
                  x = arguments.length < 3;
                return f(n, Xe(r, 4), l, x, $i);
              }
              function q0(n, r, l) {
                var f = it(n) ? rm : af,
                  x = arguments.length < 3;
                return f(n, Xe(r, 4), l, x, Af);
              }
              function Y0(n, r) {
                var l = it(n) ? qi : wf;
                return l(n, eo(Xe(r, 3)));
              }
              function Z0(n) {
                var r = it(n) ? Sf : G_;
                return r(n);
              }
              function K0(n, r, l) {
                (l ? Sn(n, r, l) : r === t) ? (r = 1) : (r = rt(r));
                var f = it(n) ? g_ : H_;
                return f(n, r);
              }
              function $0(n) {
                var r = it(n) ? v_ : k_;
                return r(n);
              }
              function J0(n) {
                if (n == null) return 0;
                if (Cn(n)) return no(n) ? kr(n) : n.length;
                var r = pn(n);
                return r == F || r == I ? n.size : vl(n).length;
              }
              function Q0(n, r, l) {
                var f = it(n) ? el : W_;
                return l && Sn(n, r, l) && (r = t), f(n, Xe(r, 3));
              }
              var j0 = ct(function (n, r) {
                  if (n == null) return [];
                  var l = r.length;
                  return (
                    l > 1 && Sn(n, r[0], r[1])
                      ? (r = [])
                      : l > 2 && Sn(r[0], r[1], r[2]) && (r = [r[0]]),
                    Ff(n, un(r, 1), [])
                  );
                }),
                Qa =
                  Dm ||
                  function () {
                    return cn.Date.now();
                  };
              function ev(n, r) {
                if (typeof r != "function") throw new qn(c);
                return (
                  (n = rt(n)),
                  function () {
                    if (--n < 1) return r.apply(this, arguments);
                  }
                );
              }
              function Ph(n, r, l) {
                return (
                  (r = l ? t : r),
                  (r = n && r == null ? n.length : r),
                  bi(n, U, t, t, t, t, r)
                );
              }
              function Lh(n, r) {
                var l;
                if (typeof r != "function") throw new qn(c);
                return (
                  (n = rt(n)),
                  function () {
                    return (
                      --n > 0 && (l = r.apply(this, arguments)),
                      n <= 1 && (r = t),
                      l
                    );
                  }
                );
              }
              var Vl = ct(function (n, r, l) {
                  var f = v;
                  if (l.length) {
                    var x = Zi(l, Jr(Vl));
                    f |= z;
                  }
                  return bi(n, f, r, l, x);
                }),
                Ih = ct(function (n, r, l) {
                  var f = v | m;
                  if (l.length) {
                    var x = Zi(l, Jr(Ih));
                    f |= z;
                  }
                  return bi(r, f, n, l, x);
                });
              function Dh(n, r, l) {
                r = l ? t : r;
                var f = bi(n, L, t, t, t, t, t, r);
                return (f.placeholder = Dh.placeholder), f;
              }
              function Uh(n, r, l) {
                r = l ? t : r;
                var f = bi(n, b, t, t, t, t, t, r);
                return (f.placeholder = Uh.placeholder), f;
              }
              function Nh(n, r, l) {
                var f,
                  x,
                  w,
                  D,
                  O,
                  X,
                  re = 0,
                  ae = !1,
                  he = !1,
                  ve = !0;
                if (typeof n != "function") throw new qn(c);
                (r = Jn(r) || 0),
                  Wt(l) &&
                    ((ae = !!l.leading),
                    (he = "maxWait" in l),
                    (w = he ? en(Jn(l.maxWait) || 0, r) : w),
                    (ve = "trailing" in l ? !!l.trailing : ve));
                function Be(Yt) {
                  var oi = f,
                    Ii = x;
                  return (f = x = t), (re = Yt), (D = n.apply(Ii, oi)), D;
                }
                function qe(Yt) {
                  return (re = Yt), (O = Ws(pt, r)), ae ? Be(Yt) : D;
                }
                function at(Yt) {
                  var oi = Yt - X,
                    Ii = Yt - re,
                    ed = r - oi;
                  return he ? dn(ed, w - Ii) : ed;
                }
                function Ye(Yt) {
                  var oi = Yt - X,
                    Ii = Yt - re;
                  return X === t || oi >= r || oi < 0 || (he && Ii >= w);
                }
                function pt() {
                  var Yt = Qa();
                  if (Ye(Yt)) return xt(Yt);
                  O = Ws(pt, at(Yt));
                }
                function xt(Yt) {
                  return (O = t), ve && f ? Be(Yt) : ((f = x = t), D);
                }
                function Gn() {
                  O !== t && Xf(O), (re = 0), (f = X = x = O = t);
                }
                function En() {
                  return O === t ? D : xt(Qa());
                }
                function Hn() {
                  var Yt = Qa(),
                    oi = Ye(Yt);
                  if (((f = arguments), (x = this), (X = Yt), oi)) {
                    if (O === t) return qe(X);
                    if (he) return Xf(O), (O = Ws(pt, r)), Be(X);
                  }
                  return O === t && (O = Ws(pt, r)), D;
                }
                return (Hn.cancel = Gn), (Hn.flush = En), Hn;
              }
              var tv = ct(function (n, r) {
                  return Tf(n, 1, r);
                }),
                nv = ct(function (n, r, l) {
                  return Tf(n, Jn(r) || 0, l);
                });
              function iv(n) {
                return bi(n, R);
              }
              function ja(n, r) {
                if (
                  typeof n != "function" ||
                  (r != null && typeof r != "function")
                )
                  throw new qn(c);
                var l = function () {
                  var f = arguments,
                    x = r ? r.apply(this, f) : f[0],
                    w = l.cache;
                  if (w.has(x)) return w.get(x);
                  var D = n.apply(this, f);
                  return (l.cache = w.set(x, D) || w), D;
                };
                return (l.cache = new (ja.Cache || Ai)()), l;
              }
              ja.Cache = Ai;
              function eo(n) {
                if (typeof n != "function") throw new qn(c);
                return function () {
                  var r = arguments;
                  switch (r.length) {
                    case 0:
                      return !n.call(this);
                    case 1:
                      return !n.call(this, r[0]);
                    case 2:
                      return !n.call(this, r[0], r[1]);
                    case 3:
                      return !n.call(this, r[0], r[1], r[2]);
                  }
                  return !n.apply(this, r);
                };
              }
              function rv(n) {
                return Lh(2, n);
              }
              var sv = X_(function (n, r) {
                  r =
                    r.length == 1 && it(r[0])
                      ? Vt(r[0], On(Xe()))
                      : Vt(un(r, 1), On(Xe()));
                  var l = r.length;
                  return ct(function (f) {
                    for (var x = -1, w = dn(f.length, l); ++x < w; )
                      f[x] = r[x].call(this, f[x]);
                    return Fn(n, this, f);
                  });
                }),
                kl = ct(function (n, r) {
                  var l = Zi(r, Jr(kl));
                  return bi(n, z, t, r, l);
                }),
                Fh = ct(function (n, r) {
                  var l = Zi(r, Jr(Fh));
                  return bi(n, N, t, r, l);
                }),
                av = Ri(function (n, r) {
                  return bi(n, G, t, t, t, r);
                });
              function ov(n, r) {
                if (typeof n != "function") throw new qn(c);
                return (r = r === t ? r : rt(r)), ct(n, r);
              }
              function lv(n, r) {
                if (typeof n != "function") throw new qn(c);
                return (
                  (r = r == null ? 0 : en(rt(r), 0)),
                  ct(function (l) {
                    var f = l[r],
                      x = ji(l, 0, r);
                    return f && Yi(x, f), Fn(n, this, x);
                  })
                );
              }
              function cv(n, r, l) {
                var f = !0,
                  x = !0;
                if (typeof n != "function") throw new qn(c);
                return (
                  Wt(l) &&
                    ((f = "leading" in l ? !!l.leading : f),
                    (x = "trailing" in l ? !!l.trailing : x)),
                  Nh(n, r, { leading: f, maxWait: r, trailing: x })
                );
              }
              function uv(n) {
                return Ph(n, 1);
              }
              function fv(n, r) {
                return kl(bl(r), n);
              }
              function hv() {
                if (!arguments.length) return [];
                var n = arguments[0];
                return it(n) ? n : [n];
              }
              function dv(n) {
                return Zn(n, M);
              }
              function pv(n, r) {
                return (r = typeof r == "function" ? r : t), Zn(n, M, r);
              }
              function mv(n) {
                return Zn(n, _ | M);
              }
              function _v(n, r) {
                return (r = typeof r == "function" ? r : t), Zn(n, _ | M, r);
              }
              function gv(n, r) {
                return r == null || yf(n, r, on(r));
              }
              function ai(n, r) {
                return n === r || (n !== n && r !== r);
              }
              var vv = qa(ml),
                xv = qa(function (n, r) {
                  return n >= r;
                }),
                Sr = Cf(
                  (function () {
                    return arguments;
                  })(),
                )
                  ? Cf
                  : function (n) {
                      return (
                        Xt(n) && Pt.call(n, "callee") && !mf.call(n, "callee")
                      );
                    },
                it = J.isArray,
                Mv = Ku ? On(Ku) : R_;
              function Cn(n) {
                return n != null && to(n.length) && !Pi(n);
              }
              function qt(n) {
                return Xt(n) && Cn(n);
              }
              function Sv(n) {
                return n === !0 || n === !1 || (Xt(n) && Mn(n) == Ve);
              }
              var er = Nm || ec,
                Ev = $u ? On($u) : C_;
              function yv(n) {
                return Xt(n) && n.nodeType === 1 && !Xs(n);
              }
              function Tv(n) {
                if (n == null) return !0;
                if (
                  Cn(n) &&
                  (it(n) ||
                    typeof n == "string" ||
                    typeof n.splice == "function" ||
                    er(n) ||
                    Qr(n) ||
                    Sr(n))
                )
                  return !n.length;
                var r = pn(n);
                if (r == F || r == I) return !n.size;
                if (ks(n)) return !vl(n).length;
                for (var l in n) if (Pt.call(n, l)) return !1;
                return !0;
              }
              function Av(n, r) {
                return Gs(n, r);
              }
              function wv(n, r, l) {
                l = typeof l == "function" ? l : t;
                var f = l ? l(n, r) : t;
                return f === t ? Gs(n, r, t, l) : !!f;
              }
              function Wl(n) {
                if (!Xt(n)) return !1;
                var r = Mn(n);
                return (
                  r == Ot ||
                  r == Ke ||
                  (typeof n.message == "string" &&
                    typeof n.name == "string" &&
                    !Xs(n))
                );
              }
              function bv(n) {
                return typeof n == "number" && gf(n);
              }
              function Pi(n) {
                if (!Wt(n)) return !1;
                var r = Mn(n);
                return r == Lt || r == ht || r == ye || r == Ut;
              }
              function Oh(n) {
                return typeof n == "number" && n == rt(n);
              }
              function to(n) {
                return typeof n == "number" && n > -1 && n % 1 == 0 && n <= j;
              }
              function Wt(n) {
                var r = typeof n;
                return n != null && (r == "object" || r == "function");
              }
              function Xt(n) {
                return n != null && typeof n == "object";
              }
              var Bh = Ju ? On(Ju) : L_;
              function Rv(n, r) {
                return n === r || gl(n, r, Ul(r));
              }
              function Cv(n, r, l) {
                return (l = typeof l == "function" ? l : t), gl(n, r, Ul(r), l);
              }
              function Pv(n) {
                return zh(n) && n != +n;
              }
              function Lv(n) {
                if (pg(n)) throw new tt(o);
                return Pf(n);
              }
              function Iv(n) {
                return n === null;
              }
              function Dv(n) {
                return n == null;
              }
              function zh(n) {
                return typeof n == "number" || (Xt(n) && Mn(n) == rn);
              }
              function Xs(n) {
                if (!Xt(n) || Mn(n) != je) return !1;
                var r = Ra(n);
                if (r === null) return !0;
                var l = Pt.call(r, "constructor") && r.constructor;
                return (
                  typeof l == "function" && l instanceof l && Ta.call(l) == Cm
                );
              }
              var Xl = Qu ? On(Qu) : I_;
              function Uv(n) {
                return Oh(n) && n >= -9007199254740991 && n <= j;
              }
              var Gh = ju ? On(ju) : D_;
              function no(n) {
                return typeof n == "string" || (!it(n) && Xt(n) && Mn(n) == S);
              }
              function zn(n) {
                return typeof n == "symbol" || (Xt(n) && Mn(n) == Y);
              }
              var Qr = ef ? On(ef) : U_;
              function Nv(n) {
                return n === t;
              }
              function Fv(n) {
                return Xt(n) && pn(n) == fe;
              }
              function Ov(n) {
                return Xt(n) && Mn(n) == se;
              }
              var Bv = qa(xl),
                zv = qa(function (n, r) {
                  return n <= r;
                });
              function Hh(n) {
                if (!n) return [];
                if (Cn(n)) return no(n) ? ri(n) : Rn(n);
                if (Is && n[Is]) return gm(n[Is]());
                var r = pn(n),
                  l = r == F ? al : r == I ? Sa : jr;
                return l(n);
              }
              function Li(n) {
                if (!n) return n === 0 ? n : 0;
                if (((n = Jn(n)), n === de || n === -1 / 0)) {
                  var r = n < 0 ? -1 : 1;
                  return r * Ee;
                }
                return n === n ? n : 0;
              }
              function rt(n) {
                var r = Li(n),
                  l = r % 1;
                return r === r ? (l ? r - l : r) : 0;
              }
              function Vh(n) {
                return n ? gr(rt(n), 0, De) : 0;
              }
              function Jn(n) {
                if (typeof n == "number") return n;
                if (zn(n)) return we;
                if (Wt(n)) {
                  var r = typeof n.valueOf == "function" ? n.valueOf() : n;
                  n = Wt(r) ? r + "" : r;
                }
                if (typeof n != "string") return n === 0 ? n : +n;
                n = of(n);
                var l = Xo.test(n);
                return l || Yo.test(n)
                  ? em(n.slice(2), l ? 2 : 8)
                  : Wo.test(n)
                    ? we
                    : +n;
              }
              function kh(n) {
                return mi(n, Pn(n));
              }
              function Gv(n) {
                return n ? gr(rt(n), -9007199254740991, j) : n === 0 ? n : 0;
              }
              function bt(n) {
                return n == null ? "" : Bn(n);
              }
              var Hv = Kr(function (n, r) {
                  if (ks(r) || Cn(r)) {
                    mi(r, on(r), n);
                    return;
                  }
                  for (var l in r) Pt.call(r, l) && Os(n, l, r[l]);
                }),
                Wh = Kr(function (n, r) {
                  mi(r, Pn(r), n);
                }),
                io = Kr(function (n, r, l, f) {
                  mi(r, Pn(r), n, f);
                }),
                Vv = Kr(function (n, r, l, f) {
                  mi(r, on(r), n, f);
                }),
                kv = Ri(hl);
              function Wv(n, r) {
                var l = Zr(n);
                return r == null ? l : Ef(l, r);
              }
              var Xv = ct(function (n, r) {
                  n = Ft(n);
                  var l = -1,
                    f = r.length,
                    x = f > 2 ? r[2] : t;
                  for (x && Sn(r[0], r[1], x) && (f = 1); ++l < f; )
                    for (
                      var w = r[l], D = Pn(w), O = -1, X = D.length;
                      ++O < X;

                    ) {
                      var re = D[O],
                        ae = n[re];
                      (ae === t || (ai(ae, Xr[re]) && !Pt.call(n, re))) &&
                        (n[re] = w[re]);
                    }
                  return n;
                }),
                qv = ct(function (n) {
                  return n.push(t, oh), Fn(Xh, t, n);
                });
              function Yv(n, r) {
                return nf(n, Xe(r, 3), pi);
              }
              function Zv(n, r) {
                return nf(n, Xe(r, 3), pl);
              }
              function Kv(n, r) {
                return n == null ? n : dl(n, Xe(r, 3), Pn);
              }
              function $v(n, r) {
                return n == null ? n : bf(n, Xe(r, 3), Pn);
              }
              function Jv(n, r) {
                return n && pi(n, Xe(r, 3));
              }
              function Qv(n, r) {
                return n && pl(n, Xe(r, 3));
              }
              function jv(n) {
                return n == null ? [] : Ba(n, on(n));
              }
              function ex(n) {
                return n == null ? [] : Ba(n, Pn(n));
              }
              function ql(n, r, l) {
                var f = n == null ? t : vr(n, r);
                return f === t ? l : f;
              }
              function tx(n, r) {
                return n != null && uh(n, r, T_);
              }
              function Yl(n, r) {
                return n != null && uh(n, r, A_);
              }
              var nx = nh(function (n, r, l) {
                  r != null &&
                    typeof r.toString != "function" &&
                    (r = Aa.call(r)),
                    (n[r] = l);
                }, Kl(Ln)),
                ix = nh(function (n, r, l) {
                  r != null &&
                    typeof r.toString != "function" &&
                    (r = Aa.call(r)),
                    Pt.call(n, r) ? n[r].push(l) : (n[r] = [l]);
                }, Xe),
                rx = ct(zs);
              function on(n) {
                return Cn(n) ? Mf(n) : vl(n);
              }
              function Pn(n) {
                return Cn(n) ? Mf(n, !0) : N_(n);
              }
              function sx(n, r) {
                var l = {};
                return (
                  (r = Xe(r, 3)),
                  pi(n, function (f, x, w) {
                    wi(l, r(f, x, w), f);
                  }),
                  l
                );
              }
              function ax(n, r) {
                var l = {};
                return (
                  (r = Xe(r, 3)),
                  pi(n, function (f, x, w) {
                    wi(l, x, r(f, x, w));
                  }),
                  l
                );
              }
              var ox = Kr(function (n, r, l) {
                  za(n, r, l);
                }),
                Xh = Kr(function (n, r, l, f) {
                  za(n, r, l, f);
                }),
                lx = Ri(function (n, r) {
                  var l = {};
                  if (n == null) return l;
                  var f = !1;
                  (r = Vt(r, function (w) {
                    return (w = Qi(w, n)), f || (f = w.length > 1), w;
                  })),
                    mi(n, Il(n), l),
                    f && (l = Zn(l, _ | g | M, ng));
                  for (var x = r.length; x--; ) Tl(l, r[x]);
                  return l;
                });
              function cx(n, r) {
                return qh(n, eo(Xe(r)));
              }
              var ux = Ri(function (n, r) {
                return n == null ? {} : O_(n, r);
              });
              function qh(n, r) {
                if (n == null) return {};
                var l = Vt(Il(n), function (f) {
                  return [f];
                });
                return (
                  (r = Xe(r)),
                  Of(n, l, function (f, x) {
                    return r(f, x[0]);
                  })
                );
              }
              function fx(n, r, l) {
                r = Qi(r, n);
                var f = -1,
                  x = r.length;
                for (x || ((x = 1), (n = t)); ++f < x; ) {
                  var w = n == null ? t : n[_i(r[f])];
                  w === t && ((f = x), (w = l)), (n = Pi(w) ? w.call(n) : w);
                }
                return n;
              }
              function hx(n, r, l) {
                return n == null ? n : Hs(n, r, l);
              }
              function dx(n, r, l, f) {
                return (
                  (f = typeof f == "function" ? f : t),
                  n == null ? n : Hs(n, r, l, f)
                );
              }
              var Yh = sh(on),
                Zh = sh(Pn);
              function px(n, r, l) {
                var f = it(n),
                  x = f || er(n) || Qr(n);
                if (((r = Xe(r, 4)), l == null)) {
                  var w = n && n.constructor;
                  x
                    ? (l = f ? new w() : [])
                    : Wt(n)
                      ? (l = Pi(w) ? Zr(Ra(n)) : {})
                      : (l = {});
                }
                return (
                  (x ? Xn : pi)(n, function (D, O, X) {
                    return r(l, D, O, X);
                  }),
                  l
                );
              }
              function mx(n, r) {
                return n == null ? !0 : Tl(n, r);
              }
              function _x(n, r, l) {
                return n == null ? n : Vf(n, r, bl(l));
              }
              function gx(n, r, l, f) {
                return (
                  (f = typeof f == "function" ? f : t),
                  n == null ? n : Vf(n, r, bl(l), f)
                );
              }
              function jr(n) {
                return n == null ? [] : sl(n, on(n));
              }
              function vx(n) {
                return n == null ? [] : sl(n, Pn(n));
              }
              function xx(n, r, l) {
                return (
                  l === t && ((l = r), (r = t)),
                  l !== t && ((l = Jn(l)), (l = l === l ? l : 0)),
                  r !== t && ((r = Jn(r)), (r = r === r ? r : 0)),
                  gr(Jn(n), r, l)
                );
              }
              function Mx(n, r, l) {
                return (
                  (r = Li(r)),
                  l === t ? ((l = r), (r = 0)) : (l = Li(l)),
                  (n = Jn(n)),
                  w_(n, r, l)
                );
              }
              function Sx(n, r, l) {
                if (
                  (l && typeof l != "boolean" && Sn(n, r, l) && (r = l = t),
                  l === t &&
                    (typeof r == "boolean"
                      ? ((l = r), (r = t))
                      : typeof n == "boolean" && ((l = n), (n = t))),
                  n === t && r === t
                    ? ((n = 0), (r = 1))
                    : ((n = Li(n)), r === t ? ((r = n), (n = 0)) : (r = Li(r))),
                  n > r)
                ) {
                  var f = n;
                  (n = r), (r = f);
                }
                if (l || n % 1 || r % 1) {
                  var x = vf();
                  return dn(
                    n + x * (r - n + jp("1e-" + ((x + "").length - 1))),
                    r,
                  );
                }
                return Sl(n, r);
              }
              var Ex = $r(function (n, r, l) {
                return (r = r.toLowerCase()), n + (l ? Kh(r) : r);
              });
              function Kh(n) {
                return Zl(bt(n).toLowerCase());
              }
              function $h(n) {
                return (n = bt(n)), n && n.replace(A, hm).replace(kp, "");
              }
              function yx(n, r, l) {
                (n = bt(n)), (r = Bn(r));
                var f = n.length;
                l = l === t ? f : gr(rt(l), 0, f);
                var x = l;
                return (l -= r.length), l >= 0 && n.slice(l, x) == r;
              }
              function Tx(n) {
                return (n = bt(n)), n && Te.test(n) ? n.replace(le, dm) : n;
              }
              function Ax(n) {
                return (n = bt(n)), n && ha.test(n) ? n.replace(Br, "\\$&") : n;
              }
              var wx = $r(function (n, r, l) {
                  return n + (l ? "-" : "") + r.toLowerCase();
                }),
                bx = $r(function (n, r, l) {
                  return n + (l ? " " : "") + r.toLowerCase();
                }),
                Rx = jf("toLowerCase");
              function Cx(n, r, l) {
                (n = bt(n)), (r = rt(r));
                var f = r ? kr(n) : 0;
                if (!r || f >= r) return n;
                var x = (r - f) / 2;
                return Xa(Ia(x), l) + n + Xa(La(x), l);
              }
              function Px(n, r, l) {
                (n = bt(n)), (r = rt(r));
                var f = r ? kr(n) : 0;
                return r && f < r ? n + Xa(r - f, l) : n;
              }
              function Lx(n, r, l) {
                (n = bt(n)), (r = rt(r));
                var f = r ? kr(n) : 0;
                return r && f < r ? Xa(r - f, l) + n : n;
              }
              function Ix(n, r, l) {
                return (
                  l || r == null ? (r = 0) : r && (r = +r),
                  zm(bt(n).replace(ii, ""), r || 0)
                );
              }
              function Dx(n, r, l) {
                return (
                  (l ? Sn(n, r, l) : r === t) ? (r = 1) : (r = rt(r)),
                  El(bt(n), r)
                );
              }
              function Ux() {
                var n = arguments,
                  r = bt(n[0]);
                return n.length < 3 ? r : r.replace(n[1], n[2]);
              }
              var Nx = $r(function (n, r, l) {
                return n + (l ? "_" : "") + r.toLowerCase();
              });
              function Fx(n, r, l) {
                return (
                  l && typeof l != "number" && Sn(n, r, l) && (r = l = t),
                  (l = l === t ? De : l >>> 0),
                  l
                    ? ((n = bt(n)),
                      n &&
                      (typeof r == "string" || (r != null && !Xl(r))) &&
                      ((r = Bn(r)), !r && Vr(n))
                        ? ji(ri(n), 0, l)
                        : n.split(r, l))
                    : []
                );
              }
              var Ox = $r(function (n, r, l) {
                return n + (l ? " " : "") + Zl(r);
              });
              function Bx(n, r, l) {
                return (
                  (n = bt(n)),
                  (l = l == null ? 0 : gr(rt(l), 0, n.length)),
                  (r = Bn(r)),
                  n.slice(l, l + r.length) == r
                );
              }
              function zx(n, r, l) {
                var f = E.templateSettings;
                l && Sn(n, r, l) && (r = t),
                  (n = bt(n)),
                  (r = io({}, r, f, ah));
                var x = io({}, r.imports, f.imports, ah),
                  w = on(x),
                  D = sl(x, w),
                  O,
                  X,
                  re = 0,
                  ae = r.interpolate || k,
                  he = "__p += '",
                  ve = ol(
                    (r.escape || k).source +
                      "|" +
                      ae.source +
                      "|" +
                      (ae === Jt ? ga : k).source +
                      "|" +
                      (r.evaluate || k).source +
                      "|$",
                    "g",
                  ),
                  Be =
                    "//# sourceURL=" +
                    (Pt.call(r, "sourceURL")
                      ? (r.sourceURL + "").replace(/\s/g, " ")
                      : "lodash.templateSources[" + ++Zp + "]") +
                    `
`;
                n.replace(ve, function (Ye, pt, xt, Gn, En, Hn) {
                  return (
                    xt || (xt = Gn),
                    (he += n.slice(re, Hn).replace(Z, pm)),
                    pt &&
                      ((O = !0),
                      (he +=
                        `' +
__e(` +
                        pt +
                        `) +
'`)),
                    En &&
                      ((X = !0),
                      (he +=
                        `';
` +
                        En +
                        `;
__p += '`)),
                    xt &&
                      (he +=
                        `' +
((__t = (` +
                        xt +
                        `)) == null ? '' : __t) +
'`),
                    (re = Hn + Ye.length),
                    Ye
                  );
                }),
                  (he += `';
`);
                var qe = Pt.call(r, "variable") && r.variable;
                if (!qe)
                  he =
                    `with (obj) {
` +
                    he +
                    `
}
`;
                else if (Gr.test(qe)) throw new tt(u);
                (he = (X ? he.replace(It, "") : he)
                  .replace(H, "$1")
                  .replace(Me, "$1;")),
                  (he =
                    "function(" +
                    (qe || "obj") +
                    `) {
` +
                    (qe
                      ? ""
                      : `obj || (obj = {});
`) +
                    "var __t, __p = ''" +
                    (O ? ", __e = _.escape" : "") +
                    (X
                      ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`
                      : `;
`) +
                    he +
                    `return __p
}`);
                var at = Qh(function () {
                  return wt(w, Be + "return " + he).apply(t, D);
                });
                if (((at.source = he), Wl(at))) throw at;
                return at;
              }
              function Gx(n) {
                return bt(n).toLowerCase();
              }
              function Hx(n) {
                return bt(n).toUpperCase();
              }
              function Vx(n, r, l) {
                if (((n = bt(n)), n && (l || r === t))) return of(n);
                if (!n || !(r = Bn(r))) return n;
                var f = ri(n),
                  x = ri(r),
                  w = lf(f, x),
                  D = cf(f, x) + 1;
                return ji(f, w, D).join("");
              }
              function kx(n, r, l) {
                if (((n = bt(n)), n && (l || r === t)))
                  return n.slice(0, ff(n) + 1);
                if (!n || !(r = Bn(r))) return n;
                var f = ri(n),
                  x = cf(f, ri(r)) + 1;
                return ji(f, 0, x).join("");
              }
              function Wx(n, r, l) {
                if (((n = bt(n)), n && (l || r === t)))
                  return n.replace(ii, "");
                if (!n || !(r = Bn(r))) return n;
                var f = ri(n),
                  x = lf(f, ri(r));
                return ji(f, x).join("");
              }
              function Xx(n, r) {
                var l = y,
                  f = B;
                if (Wt(r)) {
                  var x = "separator" in r ? r.separator : x;
                  (l = "length" in r ? rt(r.length) : l),
                    (f = "omission" in r ? Bn(r.omission) : f);
                }
                n = bt(n);
                var w = n.length;
                if (Vr(n)) {
                  var D = ri(n);
                  w = D.length;
                }
                if (l >= w) return n;
                var O = l - kr(f);
                if (O < 1) return f;
                var X = D ? ji(D, 0, O).join("") : n.slice(0, O);
                if (x === t) return X + f;
                if ((D && (O += X.length - O), Xl(x))) {
                  if (n.slice(O).search(x)) {
                    var re,
                      ae = X;
                    for (
                      x.global || (x = ol(x.source, bt(va.exec(x)) + "g")),
                        x.lastIndex = 0;
                      (re = x.exec(ae));

                    )
                      var he = re.index;
                    X = X.slice(0, he === t ? O : he);
                  }
                } else if (n.indexOf(Bn(x), O) != O) {
                  var ve = X.lastIndexOf(x);
                  ve > -1 && (X = X.slice(0, ve));
                }
                return X + f;
              }
              function qx(n) {
                return (n = bt(n)), n && Ae.test(n) ? n.replace(ee, Sm) : n;
              }
              var Yx = $r(function (n, r, l) {
                  return n + (l ? " " : "") + r.toUpperCase();
                }),
                Zl = jf("toUpperCase");
              function Jh(n, r, l) {
                return (
                  (n = bt(n)),
                  (r = l ? t : r),
                  r === t ? (_m(n) ? Tm(n) : om(n)) : n.match(r) || []
                );
              }
              var Qh = ct(function (n, r) {
                  try {
                    return Fn(n, t, r);
                  } catch (l) {
                    return Wl(l) ? l : new tt(l);
                  }
                }),
                Zx = Ri(function (n, r) {
                  return (
                    Xn(r, function (l) {
                      (l = _i(l)), wi(n, l, Vl(n[l], n));
                    }),
                    n
                  );
                });
              function Kx(n) {
                var r = n == null ? 0 : n.length,
                  l = Xe();
                return (
                  (n = r
                    ? Vt(n, function (f) {
                        if (typeof f[1] != "function") throw new qn(c);
                        return [l(f[0]), f[1]];
                      })
                    : []),
                  ct(function (f) {
                    for (var x = -1; ++x < r; ) {
                      var w = n[x];
                      if (Fn(w[0], this, f)) return Fn(w[1], this, f);
                    }
                  })
                );
              }
              function $x(n) {
                return S_(Zn(n, _));
              }
              function Kl(n) {
                return function () {
                  return n;
                };
              }
              function Jx(n, r) {
                return n == null || n !== n ? r : n;
              }
              var Qx = th(),
                jx = th(!0);
              function Ln(n) {
                return n;
              }
              function $l(n) {
                return Lf(typeof n == "function" ? n : Zn(n, _));
              }
              function eM(n) {
                return Df(Zn(n, _));
              }
              function tM(n, r) {
                return Uf(n, Zn(r, _));
              }
              var nM = ct(function (n, r) {
                  return function (l) {
                    return zs(l, n, r);
                  };
                }),
                iM = ct(function (n, r) {
                  return function (l) {
                    return zs(n, l, r);
                  };
                });
              function Jl(n, r, l) {
                var f = on(r),
                  x = Ba(r, f);
                l == null &&
                  !(Wt(r) && (x.length || !f.length)) &&
                  ((l = r), (r = n), (n = this), (x = Ba(r, on(r))));
                var w = !(Wt(l) && "chain" in l) || !!l.chain,
                  D = Pi(n);
                return (
                  Xn(x, function (O) {
                    var X = r[O];
                    (n[O] = X),
                      D &&
                        (n.prototype[O] = function () {
                          var re = this.__chain__;
                          if (w || re) {
                            var ae = n(this.__wrapped__),
                              he = (ae.__actions__ = Rn(this.__actions__));
                            return (
                              he.push({ func: X, args: arguments, thisArg: n }),
                              (ae.__chain__ = re),
                              ae
                            );
                          }
                          return X.apply(n, Yi([this.value()], arguments));
                        });
                  }),
                  n
                );
              }
              function rM() {
                return cn._ === this && (cn._ = Pm), this;
              }
              function Ql() {}
              function sM(n) {
                return (
                  (n = rt(n)),
                  ct(function (r) {
                    return Nf(r, n);
                  })
                );
              }
              var aM = Cl(Vt),
                oM = Cl(tf),
                lM = Cl(el);
              function jh(n) {
                return Fl(n) ? tl(_i(n)) : B_(n);
              }
              function cM(n) {
                return function (r) {
                  return n == null ? t : vr(n, r);
                };
              }
              var uM = ih(),
                fM = ih(!0);
              function jl() {
                return [];
              }
              function ec() {
                return !1;
              }
              function hM() {
                return {};
              }
              function dM() {
                return "";
              }
              function pM() {
                return !0;
              }
              function mM(n, r) {
                if (((n = rt(n)), n < 1 || n > j)) return [];
                var l = De,
                  f = dn(n, De);
                (r = Xe(r)), (n -= De);
                for (var x = rl(f, r); ++l < n; ) r(l);
                return x;
              }
              function _M(n) {
                return it(n) ? Vt(n, _i) : zn(n) ? [n] : Rn(xh(bt(n)));
              }
              function gM(n) {
                var r = ++Rm;
                return bt(n) + r;
              }
              var vM = Wa(function (n, r) {
                  return n + r;
                }, 0),
                xM = Pl("ceil"),
                MM = Wa(function (n, r) {
                  return n / r;
                }, 1),
                SM = Pl("floor");
              function EM(n) {
                return n && n.length ? Oa(n, Ln, ml) : t;
              }
              function yM(n, r) {
                return n && n.length ? Oa(n, Xe(r, 2), ml) : t;
              }
              function TM(n) {
                return sf(n, Ln);
              }
              function AM(n, r) {
                return sf(n, Xe(r, 2));
              }
              function wM(n) {
                return n && n.length ? Oa(n, Ln, xl) : t;
              }
              function bM(n, r) {
                return n && n.length ? Oa(n, Xe(r, 2), xl) : t;
              }
              var RM = Wa(function (n, r) {
                  return n * r;
                }, 1),
                CM = Pl("round"),
                PM = Wa(function (n, r) {
                  return n - r;
                }, 0);
              function LM(n) {
                return n && n.length ? il(n, Ln) : 0;
              }
              function IM(n, r) {
                return n && n.length ? il(n, Xe(r, 2)) : 0;
              }
              return (
                (E.after = ev),
                (E.ary = Ph),
                (E.assign = Hv),
                (E.assignIn = Wh),
                (E.assignInWith = io),
                (E.assignWith = Vv),
                (E.at = kv),
                (E.before = Lh),
                (E.bind = Vl),
                (E.bindAll = Zx),
                (E.bindKey = Ih),
                (E.castArray = hv),
                (E.chain = bh),
                (E.chunk = Sg),
                (E.compact = Eg),
                (E.concat = yg),
                (E.cond = Kx),
                (E.conforms = $x),
                (E.constant = Kl),
                (E.countBy = L0),
                (E.create = Wv),
                (E.curry = Dh),
                (E.curryRight = Uh),
                (E.debounce = Nh),
                (E.defaults = Xv),
                (E.defaultsDeep = qv),
                (E.defer = tv),
                (E.delay = nv),
                (E.difference = Tg),
                (E.differenceBy = Ag),
                (E.differenceWith = wg),
                (E.drop = bg),
                (E.dropRight = Rg),
                (E.dropRightWhile = Cg),
                (E.dropWhile = Pg),
                (E.fill = Lg),
                (E.filter = D0),
                (E.flatMap = F0),
                (E.flatMapDeep = O0),
                (E.flatMapDepth = B0),
                (E.flatten = yh),
                (E.flattenDeep = Ig),
                (E.flattenDepth = Dg),
                (E.flip = iv),
                (E.flow = Qx),
                (E.flowRight = jx),
                (E.fromPairs = Ug),
                (E.functions = jv),
                (E.functionsIn = ex),
                (E.groupBy = z0),
                (E.initial = Fg),
                (E.intersection = Og),
                (E.intersectionBy = Bg),
                (E.intersectionWith = zg),
                (E.invert = nx),
                (E.invertBy = ix),
                (E.invokeMap = H0),
                (E.iteratee = $l),
                (E.keyBy = V0),
                (E.keys = on),
                (E.keysIn = Pn),
                (E.map = Ja),
                (E.mapKeys = sx),
                (E.mapValues = ax),
                (E.matches = eM),
                (E.matchesProperty = tM),
                (E.memoize = ja),
                (E.merge = ox),
                (E.mergeWith = Xh),
                (E.method = nM),
                (E.methodOf = iM),
                (E.mixin = Jl),
                (E.negate = eo),
                (E.nthArg = sM),
                (E.omit = lx),
                (E.omitBy = cx),
                (E.once = rv),
                (E.orderBy = k0),
                (E.over = aM),
                (E.overArgs = sv),
                (E.overEvery = oM),
                (E.overSome = lM),
                (E.partial = kl),
                (E.partialRight = Fh),
                (E.partition = W0),
                (E.pick = ux),
                (E.pickBy = qh),
                (E.property = jh),
                (E.propertyOf = cM),
                (E.pull = kg),
                (E.pullAll = Ah),
                (E.pullAllBy = Wg),
                (E.pullAllWith = Xg),
                (E.pullAt = qg),
                (E.range = uM),
                (E.rangeRight = fM),
                (E.rearg = av),
                (E.reject = Y0),
                (E.remove = Yg),
                (E.rest = ov),
                (E.reverse = Gl),
                (E.sampleSize = K0),
                (E.set = hx),
                (E.setWith = dx),
                (E.shuffle = $0),
                (E.slice = Zg),
                (E.sortBy = j0),
                (E.sortedUniq = t0),
                (E.sortedUniqBy = n0),
                (E.split = Fx),
                (E.spread = lv),
                (E.tail = i0),
                (E.take = r0),
                (E.takeRight = s0),
                (E.takeRightWhile = a0),
                (E.takeWhile = o0),
                (E.tap = E0),
                (E.throttle = cv),
                (E.thru = $a),
                (E.toArray = Hh),
                (E.toPairs = Yh),
                (E.toPairsIn = Zh),
                (E.toPath = _M),
                (E.toPlainObject = kh),
                (E.transform = px),
                (E.unary = uv),
                (E.union = l0),
                (E.unionBy = c0),
                (E.unionWith = u0),
                (E.uniq = f0),
                (E.uniqBy = h0),
                (E.uniqWith = d0),
                (E.unset = mx),
                (E.unzip = Hl),
                (E.unzipWith = wh),
                (E.update = _x),
                (E.updateWith = gx),
                (E.values = jr),
                (E.valuesIn = vx),
                (E.without = p0),
                (E.words = Jh),
                (E.wrap = fv),
                (E.xor = m0),
                (E.xorBy = _0),
                (E.xorWith = g0),
                (E.zip = v0),
                (E.zipObject = x0),
                (E.zipObjectDeep = M0),
                (E.zipWith = S0),
                (E.entries = Yh),
                (E.entriesIn = Zh),
                (E.extend = Wh),
                (E.extendWith = io),
                Jl(E, E),
                (E.add = vM),
                (E.attempt = Qh),
                (E.camelCase = Ex),
                (E.capitalize = Kh),
                (E.ceil = xM),
                (E.clamp = xx),
                (E.clone = dv),
                (E.cloneDeep = mv),
                (E.cloneDeepWith = _v),
                (E.cloneWith = pv),
                (E.conformsTo = gv),
                (E.deburr = $h),
                (E.defaultTo = Jx),
                (E.divide = MM),
                (E.endsWith = yx),
                (E.eq = ai),
                (E.escape = Tx),
                (E.escapeRegExp = Ax),
                (E.every = I0),
                (E.find = U0),
                (E.findIndex = Sh),
                (E.findKey = Yv),
                (E.findLast = N0),
                (E.findLastIndex = Eh),
                (E.findLastKey = Zv),
                (E.floor = SM),
                (E.forEach = Rh),
                (E.forEachRight = Ch),
                (E.forIn = Kv),
                (E.forInRight = $v),
                (E.forOwn = Jv),
                (E.forOwnRight = Qv),
                (E.get = ql),
                (E.gt = vv),
                (E.gte = xv),
                (E.has = tx),
                (E.hasIn = Yl),
                (E.head = Th),
                (E.identity = Ln),
                (E.includes = G0),
                (E.indexOf = Ng),
                (E.inRange = Mx),
                (E.invoke = rx),
                (E.isArguments = Sr),
                (E.isArray = it),
                (E.isArrayBuffer = Mv),
                (E.isArrayLike = Cn),
                (E.isArrayLikeObject = qt),
                (E.isBoolean = Sv),
                (E.isBuffer = er),
                (E.isDate = Ev),
                (E.isElement = yv),
                (E.isEmpty = Tv),
                (E.isEqual = Av),
                (E.isEqualWith = wv),
                (E.isError = Wl),
                (E.isFinite = bv),
                (E.isFunction = Pi),
                (E.isInteger = Oh),
                (E.isLength = to),
                (E.isMap = Bh),
                (E.isMatch = Rv),
                (E.isMatchWith = Cv),
                (E.isNaN = Pv),
                (E.isNative = Lv),
                (E.isNil = Dv),
                (E.isNull = Iv),
                (E.isNumber = zh),
                (E.isObject = Wt),
                (E.isObjectLike = Xt),
                (E.isPlainObject = Xs),
                (E.isRegExp = Xl),
                (E.isSafeInteger = Uv),
                (E.isSet = Gh),
                (E.isString = no),
                (E.isSymbol = zn),
                (E.isTypedArray = Qr),
                (E.isUndefined = Nv),
                (E.isWeakMap = Fv),
                (E.isWeakSet = Ov),
                (E.join = Gg),
                (E.kebabCase = wx),
                (E.last = $n),
                (E.lastIndexOf = Hg),
                (E.lowerCase = bx),
                (E.lowerFirst = Rx),
                (E.lt = Bv),
                (E.lte = zv),
                (E.max = EM),
                (E.maxBy = yM),
                (E.mean = TM),
                (E.meanBy = AM),
                (E.min = wM),
                (E.minBy = bM),
                (E.stubArray = jl),
                (E.stubFalse = ec),
                (E.stubObject = hM),
                (E.stubString = dM),
                (E.stubTrue = pM),
                (E.multiply = RM),
                (E.nth = Vg),
                (E.noConflict = rM),
                (E.noop = Ql),
                (E.now = Qa),
                (E.pad = Cx),
                (E.padEnd = Px),
                (E.padStart = Lx),
                (E.parseInt = Ix),
                (E.random = Sx),
                (E.reduce = X0),
                (E.reduceRight = q0),
                (E.repeat = Dx),
                (E.replace = Ux),
                (E.result = fx),
                (E.round = CM),
                (E.runInContext = V),
                (E.sample = Z0),
                (E.size = J0),
                (E.snakeCase = Nx),
                (E.some = Q0),
                (E.sortedIndex = Kg),
                (E.sortedIndexBy = $g),
                (E.sortedIndexOf = Jg),
                (E.sortedLastIndex = Qg),
                (E.sortedLastIndexBy = jg),
                (E.sortedLastIndexOf = e0),
                (E.startCase = Ox),
                (E.startsWith = Bx),
                (E.subtract = PM),
                (E.sum = LM),
                (E.sumBy = IM),
                (E.template = zx),
                (E.times = mM),
                (E.toFinite = Li),
                (E.toInteger = rt),
                (E.toLength = Vh),
                (E.toLower = Gx),
                (E.toNumber = Jn),
                (E.toSafeInteger = Gv),
                (E.toString = bt),
                (E.toUpper = Hx),
                (E.trim = Vx),
                (E.trimEnd = kx),
                (E.trimStart = Wx),
                (E.truncate = Xx),
                (E.unescape = qx),
                (E.uniqueId = gM),
                (E.upperCase = Yx),
                (E.upperFirst = Zl),
                (E.each = Rh),
                (E.eachRight = Ch),
                (E.first = Th),
                Jl(
                  E,
                  (function () {
                    var n = {};
                    return (
                      pi(E, function (r, l) {
                        Pt.call(E.prototype, l) || (n[l] = r);
                      }),
                      n
                    );
                  })(),
                  { chain: !1 },
                ),
                (E.VERSION = i),
                Xn(
                  [
                    "bind",
                    "bindKey",
                    "curry",
                    "curryRight",
                    "partial",
                    "partialRight",
                  ],
                  function (n) {
                    E[n].placeholder = E;
                  },
                ),
                Xn(["drop", "take"], function (n, r) {
                  (_t.prototype[n] = function (l) {
                    l = l === t ? 1 : en(rt(l), 0);
                    var f =
                      this.__filtered__ && !r ? new _t(this) : this.clone();
                    return (
                      f.__filtered__
                        ? (f.__takeCount__ = dn(l, f.__takeCount__))
                        : f.__views__.push({
                            size: dn(l, De),
                            type: n + (f.__dir__ < 0 ? "Right" : ""),
                          }),
                      f
                    );
                  }),
                    (_t.prototype[n + "Right"] = function (l) {
                      return this.reverse()[n](l).reverse();
                    });
                }),
                Xn(["filter", "map", "takeWhile"], function (n, r) {
                  var l = r + 1,
                    f = l == ie || l == ne;
                  _t.prototype[n] = function (x) {
                    var w = this.clone();
                    return (
                      w.__iteratees__.push({ iteratee: Xe(x, 3), type: l }),
                      (w.__filtered__ = w.__filtered__ || f),
                      w
                    );
                  };
                }),
                Xn(["head", "last"], function (n, r) {
                  var l = "take" + (r ? "Right" : "");
                  _t.prototype[n] = function () {
                    return this[l](1).value()[0];
                  };
                }),
                Xn(["initial", "tail"], function (n, r) {
                  var l = "drop" + (r ? "" : "Right");
                  _t.prototype[n] = function () {
                    return this.__filtered__ ? new _t(this) : this[l](1);
                  };
                }),
                (_t.prototype.compact = function () {
                  return this.filter(Ln);
                }),
                (_t.prototype.find = function (n) {
                  return this.filter(n).head();
                }),
                (_t.prototype.findLast = function (n) {
                  return this.reverse().find(n);
                }),
                (_t.prototype.invokeMap = ct(function (n, r) {
                  return typeof n == "function"
                    ? new _t(this)
                    : this.map(function (l) {
                        return zs(l, n, r);
                      });
                })),
                (_t.prototype.reject = function (n) {
                  return this.filter(eo(Xe(n)));
                }),
                (_t.prototype.slice = function (n, r) {
                  n = rt(n);
                  var l = this;
                  return l.__filtered__ && (n > 0 || r < 0)
                    ? new _t(l)
                    : (n < 0 ? (l = l.takeRight(-n)) : n && (l = l.drop(n)),
                      r !== t &&
                        ((r = rt(r)),
                        (l = r < 0 ? l.dropRight(-r) : l.take(r - n))),
                      l);
                }),
                (_t.prototype.takeRightWhile = function (n) {
                  return this.reverse().takeWhile(n).reverse();
                }),
                (_t.prototype.toArray = function () {
                  return this.take(De);
                }),
                pi(_t.prototype, function (n, r) {
                  var l = /^(?:filter|find|map|reject)|While$/.test(r),
                    f = /^(?:head|last)$/.test(r),
                    x = E[f ? "take" + (r == "last" ? "Right" : "") : r],
                    w = f || /^find/.test(r);
                  x &&
                    (E.prototype[r] = function () {
                      var D = this.__wrapped__,
                        O = f ? [1] : arguments,
                        X = D instanceof _t,
                        re = O[0],
                        ae = X || it(D),
                        he = function (pt) {
                          var xt = x.apply(E, Yi([pt], O));
                          return f && ve ? xt[0] : xt;
                        };
                      ae &&
                        l &&
                        typeof re == "function" &&
                        re.length != 1 &&
                        (X = ae = !1);
                      var ve = this.__chain__,
                        Be = !!this.__actions__.length,
                        qe = w && !ve,
                        at = X && !Be;
                      if (!w && ae) {
                        D = at ? D : new _t(this);
                        var Ye = n.apply(D, O);
                        return (
                          Ye.__actions__.push({
                            func: $a,
                            args: [he],
                            thisArg: t,
                          }),
                          new Yn(Ye, ve)
                        );
                      }
                      return qe && at
                        ? n.apply(this, O)
                        : ((Ye = this.thru(he)),
                          qe ? (f ? Ye.value()[0] : Ye.value()) : Ye);
                    });
                }),
                Xn(
                  ["pop", "push", "shift", "sort", "splice", "unshift"],
                  function (n) {
                    var r = Ea[n],
                      l = /^(?:push|sort|unshift)$/.test(n) ? "tap" : "thru",
                      f = /^(?:pop|shift)$/.test(n);
                    E.prototype[n] = function () {
                      var x = arguments;
                      if (f && !this.__chain__) {
                        var w = this.value();
                        return r.apply(it(w) ? w : [], x);
                      }
                      return this[l](function (D) {
                        return r.apply(it(D) ? D : [], x);
                      });
                    };
                  },
                ),
                pi(_t.prototype, function (n, r) {
                  var l = E[r];
                  if (l) {
                    var f = l.name + "";
                    Pt.call(Yr, f) || (Yr[f] = []),
                      Yr[f].push({ name: r, func: l });
                  }
                }),
                (Yr[ka(t, m).name] = [{ name: "wrapper", func: t }]),
                (_t.prototype.clone = qm),
                (_t.prototype.reverse = Ym),
                (_t.prototype.value = Zm),
                (E.prototype.at = y0),
                (E.prototype.chain = T0),
                (E.prototype.commit = A0),
                (E.prototype.next = w0),
                (E.prototype.plant = R0),
                (E.prototype.reverse = C0),
                (E.prototype.toJSON =
                  E.prototype.valueOf =
                  E.prototype.value =
                    P0),
                (E.prototype.first = E.prototype.head),
                Is && (E.prototype[Is] = b0),
                E
              );
            },
            Wr = Am();
          dr ? (((dr.exports = Wr)._ = Wr), ($o._ = Wr)) : (cn._ = Wr);
        }).call(Kw);
      })(ia, ia.exports)),
    ia.exports
  );
}
var Qs = {},
  Jd;
function Jw() {
  if (Jd) return Qs;
  (Jd = 1),
    Object.defineProperty(Qs, "__esModule", { value: !0 }),
    (Qs.backtrace = void 0);
  function s(e, t, i) {
    const a = [];
    let o = i ? e : e.getParent();
    for (; o.getParent(); )
      a.push([o.position.x, o.position.y]), (o = o.getParent());
    return t && a.push([o.position.x, o.position.y]), a.reverse();
  }
  return (Qs.backtrace = s), Qs;
}
var js = {},
  Qd;
function Qw() {
  if (Qd) return js;
  (Qd = 1),
    Object.defineProperty(js, "__esModule", { value: !0 }),
    (js.calculateHeuristic = void 0);
  function s(e, t, i, a) {
    const o = Math.abs(i.x - t.x),
      c = Math.abs(i.y - t.y);
    switch (e) {
      case "Manhatten":
      case "Manhattan":
        return (o + c) * a;
      case "Euclidean":
        return Math.sqrt(o * o + c * c) * a;
      case "Chebyshev":
        return Math.max(o, c) * a;
      case "Octile":
        return (o + c - 0.58 * Math.min(o, c)) * a;
    }
  }
  return (js.calculateHeuristic = s), js;
}
var ea = {},
  ta = {},
  jd;
function jw() {
  if (jd) return ta;
  (jd = 1),
    Object.defineProperty(ta, "__esModule", { value: !0 }),
    (ta.Node = void 0);
  class s {
    constructor(t) {
      (this.id = t.id),
        (this.position = t.position),
        (this.hValue = 0),
        (this.gValue = 0),
        (this.fValue = 0),
        (this.parentNode = void 0),
        (this.isOnClosedList = !1),
        (this.isOnOpenList = !1),
        (this.isWalkable = t.walkable || !0);
    }
    calculateFValue() {
      this.fValue = this.gValue + this.hValue;
    }
    setGValue(t) {
      (this.gValue = t), this.calculateFValue();
    }
    setHValue(t) {
      (this.hValue = t), this.calculateFValue();
    }
    setFGHValuesToZero() {
      this.fValue = this.gValue = this.hValue = 0;
    }
    getFValue() {
      return this.fValue;
    }
    getGValue() {
      return this.gValue;
    }
    getHValue() {
      return this.hValue;
    }
    getParent() {
      return this.parentNode;
    }
    getIsOnClosedList() {
      return this.isOnClosedList;
    }
    getIsOnOpenList() {
      return this.isOnOpenList;
    }
    getIsWalkable() {
      return this.isWalkable;
    }
    setParent(t) {
      this.parentNode = t;
    }
    setIsOnClosedList(t) {
      this.isOnClosedList = t;
    }
    setIsOnOpenList(t) {
      this.isOnOpenList = t;
    }
    setIsWalkable(t) {
      this.isWalkable = t;
    }
  }
  return (ta.Node = s), ta;
}
var ep;
function Np() {
  if (ep) return ea;
  (ep = 1),
    Object.defineProperty(ea, "__esModule", { value: !0 }),
    (ea.Grid = void 0);
  const s = jw();
  class e {
    constructor(i) {
      i.width && i.height
        ? ((this.width = i.width),
          (this.height = i.height),
          (this.numberOfFields = this.width * this.height))
        : i.matrix &&
          ((this.width = i.matrix[0].length),
          (this.height = i.matrix.length),
          (this.numberOfFields = this.width * this.height)),
        (this.gridNodes = this.buildGridWithNodes(
          i.matrix || void 0,
          this.width,
          this.height,
          i.densityOfObstacles || 0,
        ));
    }
    buildGridWithNodes(i, a, o, c) {
      const u = [];
      let d = 0;
      for (let h = 0; h < o; h++) {
        u[h] = [];
        for (let p = 0; p < a; p++)
          (u[h][p] = new s.Node({ id: d, position: { x: p, y: h } })), d++;
      }
      if (i === void 0) {
        for (let h = 0; h < o; h++)
          for (let p = 0; p < a; p++)
            Math.floor(Math.random() * 10) + 1 > 10 - c
              ? u[h][p].setIsWalkable(!1)
              : u[h][p].setIsWalkable(!0);
        return u;
      }
      for (let h = 0; h < o; h++)
        for (let p = 0; p < a; p++) u[h][p].setIsWalkable(!i[h][p]);
      return u;
    }
    getNodeAt(i) {
      return this.gridNodes[i.y][i.x];
    }
    isWalkableAt(i) {
      return this.gridNodes[i.y][i.x].getIsWalkable();
    }
    isOnTheGrid(i) {
      return i.x >= 0 && i.x < this.width && i.y >= 0 && i.y < this.height;
    }
    getSurroundingNodes(i, a) {
      const o = [],
        c = i.x - 1,
        u = i.x + 1,
        d = i.y - 1,
        h = i.y + 1;
      for (let p = d; p <= h; p++)
        for (let _ = c; _ <= u; _++)
          (_ !== i.x || p !== i.y) &&
            this.isOnTheGrid({ x: _, y: p }) &&
            this.isWalkableAt({ x: _, y: p }) &&
            (a || _ == i.x || p == i.y) &&
            o.push(this.getNodeAt({ x: _, y: p }));
      return o;
    }
    setGrid(i) {
      this.gridNodes = i;
    }
    resetGrid() {
      for (let i = 0; i < this.gridNodes.length; i++)
        for (let a = 0; a < this.gridNodes[i].length; a++)
          this.gridNodes[i][a].setIsOnClosedList(!1),
            this.gridNodes[i][a].setIsOnOpenList(!1),
            this.gridNodes[i][a].setParent(void 0),
            this.gridNodes[i][a].setFGHValuesToZero();
    }
    getGridNodes() {
      return this.gridNodes;
    }
    clone() {
      const i = [];
      let a = 0;
      for (let o = 0; o < this.height; o++) {
        i[o] = [];
        for (let c = 0; c < this.width; c++)
          (i[o][c] = new s.Node({
            id: a,
            position: { x: c, y: o },
            walkable: this.gridNodes[o][c].getIsWalkable(),
          })),
            a++;
      }
      return i;
    }
  }
  return (ea.Grid = e), ea;
}
var tp;
function eb() {
  if (tp) return Js;
  (tp = 1),
    Object.defineProperty(Js, "__esModule", { value: !0 }),
    (Js.AStarFinder = void 0);
  const s = $w(),
    e = Jw(),
    t = Qw(),
    i = Np();
  class a {
    constructor(c) {
      (this.grid = new i.Grid({
        width: c.grid.width,
        height: c.grid.height,
        matrix: c.grid.matrix || void 0,
        densityOfObstacles: c.grid.densityOfObstacles || 0,
      })),
        (this.closedList = []),
        (this.openList = []),
        (this.diagonalAllowed =
          c.diagonalAllowed !== void 0 ? c.diagonalAllowed : !0),
        (this.heuristic = c.heuristic ? c.heuristic : "Manhattan"),
        (this.includeStartNode =
          c.includeStartNode !== void 0 ? c.includeStartNode : !0),
        (this.includeEndNode =
          c.includeEndNode !== void 0 ? c.includeEndNode : !0),
        (this.allowPathAsCloseAsPossible = c.allowPathAsCloseAsPossible || !1),
        (this.weight = c.weight || 1);
    }
    findPath(c, u) {
      (this.closedList = []), (this.openList = []), this.grid.resetGrid();
      const d = this.grid.getNodeAt(c),
        h = this.grid.getNodeAt(u);
      if (!this.grid.isWalkableAt(u) || !this.grid.isWalkableAt(c)) return [];
      d.setIsOnOpenList(!0), this.openList.push(d);
      for (let p = 0; p < this.grid.height; p++)
        for (let _ = 0; _ < this.grid.width; _++) {
          let g = this.grid.getNodeAt({ x: _, y: p });
          this.grid.isWalkableAt({ x: _, y: p })
            ? g.setHValue(
                (0, t.calculateHeuristic)(
                  this.heuristic,
                  g.position,
                  h.position,
                  this.weight,
                ),
              )
            : (g.setFGHValuesToZero(),
              g.setIsOnClosedList(!0),
              this.closedList.push(g));
        }
      for (; this.openList.length !== 0; ) {
        const p = (0, s.minBy)(this.openList, (g) => g.getFValue());
        if (
          (p.setIsOnOpenList(!1),
          (0, s.remove)(this.openList, p),
          p.setIsOnClosedList(!0),
          this.closedList.push(p),
          p === h)
        )
          return (0, e.backtrace)(
            h,
            this.includeStartNode,
            this.includeEndNode,
          );
        const _ = this.grid.getSurroundingNodes(
          p.position,
          this.diagonalAllowed,
        );
        for (let g in _) {
          const M = _[g];
          if (M.getIsOnClosedList()) continue;
          const T =
            p.getGValue() +
            (M.position.x !== p.position.x || M.position.y == p.position.y
              ? this.weight
              : this.weight * 1.41421);
          (!M.getIsOnOpenList() || T < M.getGValue()) &&
            (M.setGValue(T),
            M.setParent(p),
            M.getIsOnOpenList()
              ? M.setParent(p)
              : (M.setIsOnOpenList(!0), this.openList.push(M)));
        }
      }
      return this.allowPathAsCloseAsPossible
        ? (0, e.backtrace)(
            this.closedList[this.closedList.length - 1],
            this.includeStartNode,
            !1,
          )
        : [];
    }
    setHeuristic(c) {
      this.heuristic = c;
    }
    setWeight(c) {
      this.weight = c;
    }
    getGridClone() {
      return this.grid.clone();
    }
    getGrid() {
      return this.grid;
    }
  }
  return (Js.AStarFinder = a), Js;
}
var np;
function tb() {
  return (
    np ||
      ((np = 1),
      (function (s) {
        Object.defineProperty(s, "__esModule", { value: !0 }),
          (s.Grid = s.AStarFinder = void 0);
        var e = eb();
        Object.defineProperty(s, "AStarFinder", {
          enumerable: !0,
          get: function () {
            return e.AStarFinder;
          },
        });
        var t = Np();
        Object.defineProperty(s, "Grid", {
          enumerable: !0,
          get: function () {
            return t.Grid;
          },
        });
      })(Lc)),
    Lc
  );
}
var nb = tb();
const yt = { TILE_SIZE: 1 },
  jn = 4,
  gn = {
    createCube: (s) => {
      const e = (s == null ? void 0 : s.size) ?? 1,
        t = (s == null ? void 0 : s.color) ?? 65280,
        i = new Or(e, e, e, jn, jn, jn),
        a = { color: t },
        o = s != null && s.basicMaterial ? new gi(a) : new ds(a);
      return new Tn(i, o);
    },
    createBox: (s) => {
      const e = (s == null ? void 0 : s.width) ?? 1,
        t = (s == null ? void 0 : s.height) ?? 1,
        i = (s == null ? void 0 : s.depth) ?? 1,
        a = (s == null ? void 0 : s.color) ?? new Fe(Rt.RED),
        o = new Or(e, t, i, jn, jn, jn),
        c = { color: a },
        u = s != null && s.basicMaterial ? new gi(c) : new ds(c);
      return new Tn(o, u);
    },
    createCone: (s) => {
      const e = (s == null ? void 0 : s.radius) ?? 1,
        t = (s == null ? void 0 : s.height) ?? 1,
        i = (s == null ? void 0 : s.color) ?? new Fe(Rt.RED),
        a = new Lu(e, t, jn, jn),
        o = { color: i },
        c = s != null && s.basicMaterial ? new gi(o) : new ds(o);
      return new Tn(a, c);
    },
    createSphere: (s) => {
      const e = (s == null ? void 0 : s.radius) ?? 1,
        t = (s == null ? void 0 : s.color) ?? new Fe(Rt.RED),
        i = new Uu(e, jn, jn),
        a = { color: t },
        o = s != null && s.basicMaterial ? new gi(a) : new ds(a);
      return new Tn(i, o);
    },
    createCylinder: (s) => {
      const e = (s == null ? void 0 : s.radius) ?? 1,
        t = (s == null ? void 0 : s.height) ?? 1,
        i = (s == null ? void 0 : s.color) ?? new Fe(Rt.RED),
        a = new Go(e, e, t, jn * 2, jn),
        o = { color: i },
        c = s != null && s.basicMaterial ? new gi(o) : new ds(o);
      return new Tn(a, c);
    },
    createGem(s) {
      const e = (s == null ? void 0 : s.size) ?? 1,
        t = (s == null ? void 0 : s.color) ?? new Fe(Rt.RED),
        i = new Du(e, 0),
        a = { color: t },
        o = s != null && s.basicMaterial ? new gi(a) : new ds(a);
      return new Tn(i, o);
    },
  },
  Ou = {
    createSimpleGrid: (s) => {
      var o;
      const e = [];
      for (let c = 0; c < s.length; c++) {
        const u = [];
        for (let d = 0; d < s[c].length; d++)
          u.push(s[c][d].isWalkable ? 0 : 1);
        e.push(u);
      }
      const t = e.length,
        i = ((o = e[0]) == null ? void 0 : o.length) ?? 0;
      return Array.from({ length: i }, (c, u) =>
        Array.from({ length: t }, (d, h) => e[h][u]),
      );
    },
    getBoundedUncheckedNeighbors: (s, e, t) => {
      const i = [];
      return (
        s > 0 && i.push(new He(s - 1, e)),
        s < t.length - 1 && i.push(new He(s + 1, e)),
        e > 0 && i.push(new He(s, e - 1)),
        e < t[0].length - 1 && i.push(new He(s, e + 1)),
        i
      );
    },
    findClosestEnemy: (s, e, t) => {
      const i = new Set(),
        a = [e.clone()];
      i.add(`${e.x},${e.y}`);
      let o = 0;
      for (; o < a.length; ) {
        if (o > s.length * s[0].length * 2) return null;
        const u = a[o];
        o++;
        const d = Ou.getBoundedUncheckedNeighbors(u.x, u.y, s);
        for (const h of d) {
          if (!s[h.x][h.y].isWalkable) continue;
          const p = s[h.x][h.y].actors.find(
            (_) => _ instanceof Bu && _.battleSide !== t,
          );
          if (p) return { pos: u, enemy: p };
          i.has(`${h.x},${h.y}`) || (a.push(h), i.add(`${h.x},${h.y}`));
        }
      }
      return null;
    },
  };
class Bu extends Fu {
  constructor(t) {
    const i = yt.TILE_SIZE / 4,
      a = yt.TILE_SIZE,
      o = new W(t.pos.x, yt.TILE_SIZE / 2, t.pos.y),
      c = new Vi({
        center: o,
        parts: [
          {
            mesh: gn.createCylinder({
              radius: i,
              height: a,
              color: new Fe(Rt.RED),
            }),
            offset: new W(0, 0, 0),
          },
        ],
      });
    super({ mesh: c });
    Qe(this, "battleSide", Oo.ENEMY);
    Qe(this, "pos");
    Qe(this, "radius");
    Qe(this, "objective");
    (this.objective = t.objective), (this.pos = t.pos), (this.radius = i);
  }
  update(t, i, a, o) {
    super.update(t, i, a, o);
    const c = 0.01;
    if (!(this.pos.distanceTo(this.objective) < c))
      if (this.pos.distanceTo(o) < c) {
        this.pos = o;
        const u = Ou.createSimpleGrid(a.actorsGrid),
          h = new nb.AStarFinder({
            grid: { matrix: u },
            diagonalAllowed: !1,
          }).findPath(o, this.objective);
        if (h.length > 1) {
          const p = new He(h[1][0], h[1][1]);
          (a.actorsGrid[o.x][o.y].actors = a.actorsGrid[o.x][o.y].actors.filter(
            (_) => _ !== this,
          )),
            a.actorsGrid[p.x][p.y].actors.push(this);
        }
      } else {
        const d = i * 0.0015,
          h = o.clone().sub(this.pos).normalize();
        this.pos.add(h.clone().multiplyScalar(d));
      }
  }
  graphics() {
    this.mesh.position = new W(this.pos.x, this.mesh.position.y, this.pos.y);
  }
}
const Bo = class Bo extends ko {
  constructor({ position: t }) {
    const i = yt.TILE_SIZE / 64,
      a = Math.random(),
      o = gn.createSphere({
        radius: i,
        color:
          a < 0.33
            ? new Fe(Rt.ORANGE)
            : a < 0.66
              ? new Fe(Rt.YELLOW)
              : new Fe(Rt.RED),
      });
    o.position.set(t.x, t.y, t.z);
    super({ mesh: o });
    Qe(this, "ttl", 0);
    Qe(this, "position");
    Qe(this, "velocity");
    (this.position = t),
      (this.velocity = new W(
        Math.random() - 0.5,
        Math.random() - 0.5,
        Math.random() - 0.5,
      )
        .normalize()
        .multiplyScalar(5e-5));
  }
  update(t, i, a) {
    super.update(t, i, a),
      (this.velocity.y -= 1e-6 * i),
      (this.position = this.position.add(
        this.velocity.clone().multiplyScalar(i),
      )),
      (this.ttl += i),
      this.ttl > Bo.TTL && this.kill();
  }
  graphics() {
    this.mesh.position.set(this.position.x, this.position.y, this.position.z);
  }
};
Qe(Bo, "TTL", 1e3);
let xu = Bo;
const ra = class ra extends ko {
  constructor(t) {
    const i = yt.TILE_SIZE / 32;
    super({ mesh: gn.createSphere({ radius: i, color: new Fe(Rt.WHITE) }) });
    Qe(this, "battleSide");
    Qe(this, "position");
    Qe(this, "radius");
    Qe(this, "direction");
    Qe(this, "particleTimeout", 0);
    (this.battleSide = t.battleSide),
      (this.direction = t.direction),
      (this.position = t.position),
      (this.radius = i);
  }
  update(t, i, a) {
    var C, v;
    super.update(t, i, a);
    const c = 0.03 * i,
      u = this.direction.clone().normalize(),
      d = this.position.clone().add(new W(u.x * c, 0, u.y * c)),
      h = yt.TILE_SIZE / 4,
      p = this.position.distanceTo(d),
      _ = Math.max(1, Math.floor(p / h));
    for (let m = 0; m < _; m++) {
      const P = this.position.clone().add(new W(u.x * h, 0, u.y * h)),
        L = [
          new He(P.x - h, P.z - h),
          new He(P.x - h, P.z),
          new He(P.x - h, P.z + h),
          new He(P.x, P.z - h),
          new He(P.x, P.z),
          new He(P.x, P.z + h),
          new He(P.x + h, P.z - h),
          new He(P.x + h, P.z),
          new He(P.x + h, P.z + h),
        ].map((b) => new He(Math.floor(b.x), Math.floor(b.y)));
      for (const b of L) {
        const z = (C = a.actorsGrid[b.x]) == null ? void 0 : C[b.y];
        if (z) {
          for (const N of z.actors)
            if (
              N instanceof Bu &&
              N.battleSide !== this.battleSide &&
              N.pos.distanceTo(new He(this.position.x, this.position.z)) <
                this.radius + N.radius
            ) {
              N.kill();
              break;
            }
        }
      }
    }
    this.position.set(d.x, this.position.y, d.z);
    const g = a.actorsGrid.length,
      M = ((v = a.actorsGrid[0]) == null ? void 0 : v.length) ?? 0;
    (0 <= this.position.x &&
      this.position.x < g &&
      0 <= this.position.z &&
      this.position.z < M) ||
      this.kill(),
      (this.particleTimeout += i),
      this.particleTimeout > ra.PARTICLE_TIMEOUT &&
        (a.addComponent(new xu({ position: this.position.clone() })),
        (this.particleTimeout = this.particleTimeout % ra.PARTICLE_TIMEOUT));
  }
  graphics() {
    this.mesh.position.set(this.position.x, this.position.y, this.position.z);
  }
};
Qe(ra, "PARTICLE_TIMEOUT", 20);
let Mu = ra;
const sa = class sa extends Fu {
  constructor(t) {
    const i = new W(t.position.x, yt.TILE_SIZE, t.position.y),
      a = gn.createGem({ size: yt.TILE_SIZE / 4, color: new Fe(Rt.WHITE) }),
      o = new Vi({
        center: i,
        parts: [
          {
            mesh: gn.createBox({
              width: yt.TILE_SIZE,
              height: yt.TILE_SIZE / 2,
              depth: yt.TILE_SIZE,
              color: new Fe(Rt.DARK),
            }),
            offset: new W(0, (-1 * 3) / 4, 0),
          },
          {
            mesh: gn.createBox({
              width: (yt.TILE_SIZE * 3) / 4,
              height: yt.TILE_SIZE,
              depth: (yt.TILE_SIZE * 3) / 4,
              color: new Fe(Rt.METAL),
            }),
            offset: new W(0, 0, 0),
          },
          {
            mesh: gn.createBox({
              width: yt.TILE_SIZE,
              height: yt.TILE_SIZE / 2,
              depth: yt.TILE_SIZE,
              color: new Fe(Rt.DARK),
            }),
            offset: new W(0, (yt.TILE_SIZE * 3) / 4, 0),
          },
          { mesh: a, offset: new W(0, (yt.TILE_SIZE * 3) / 2, 0) },
        ],
      });
    super({ mesh: o });
    Qe(this, "gem");
    Qe(this, "position");
    Qe(this, "shootTimeout", 0);
    (this.gem = a), (this.position = t.position);
  }
  update(t, i, a, o) {
    super.update(t, i, a, o),
      this.gem.rotateX(i / 1e3),
      this.gem.rotateZ(i / 500);
    const c = this.shootTimeout + i;
    if (((this.shootTimeout = c % sa.SHOOT_TIMEOUT), c >= sa.SHOOT_TIMEOUT)) {
      const d = Ou.findClosestEnemy(
          a.actorsGrid,
          this.position.clone(),
          Oo.ALLY,
        ),
        h = d
          ? new He(
              d.enemy.mesh.position.x - this.position.x,
              d.enemy.mesh.position.z - this.position.y,
            ).normalize()
          : null;
      if (h !== null) {
        const p = new Mu({
          battleSide: Oo.ALLY,
          direction: h,
          position: new W(
            this.position.x,
            this.mesh.position.y,
            this.position.y,
          ),
        });
        a.addComponent(p);
      }
    }
  }
};
Qe(sa, "SHOOT_TIMEOUT", 1e3);
let Su = sa;
class ib extends Fu {
  constructor(t) {
    const i = (c) =>
        gn.createBox({
          width: c === "horizontal" ? yt.TILE_SIZE : yt.TILE_SIZE / 16,
          height: yt.TILE_SIZE / 16,
          depth: c === "vertical" ? yt.TILE_SIZE : yt.TILE_SIZE / 16,
          color: new Fe(Rt.RED),
        }),
      a = new W(t.pos.x, yt.TILE_SIZE / 16, t.pos.y),
      o = new Vi({
        center: a,
        parts: [
          {
            mesh: i("vertical"),
            offset: new W((yt.TILE_SIZE * 15) / 32, 0, 0),
          },
          { mesh: i("vertical"), offset: new W(-15 / 32, 0, 0) },
          {
            mesh: i("horizontal"),
            offset: new W(0, 0, (yt.TILE_SIZE * 15) / 32),
          },
          { mesh: i("horizontal"), offset: new W(0, 0, -15 / 32) },
        ],
      });
    super({ mesh: o });
    Qe(this, "pos");
    Qe(this, "canPlace", !1);
    Qe(this, "greenMaterial", new gi({ color: new Fe(Rt.LIGHT_GREEN) }));
    Qe(this, "redMaterial", new gi({ color: new Fe(Rt.RED) }));
    this.pos = t.pos;
  }
  update(t, i, a, o) {
    var d;
    super.update(t, i, a, o);
    let c = 0;
    t.keyboardHandler.wasPressed("ArrowUp")
      ? (c = -1)
      : t.keyboardHandler.wasPressed("ArrowDown") && (c = 1);
    let u = 0;
    if (
      (t.keyboardHandler.wasPressed("ArrowLeft")
        ? (u = -1)
        : t.keyboardHandler.wasPressed("ArrowRight") && (u = 1),
      u !== 0 || c !== 0)
    ) {
      const h = o.clone().add(new He(u, c));
      if (
        !(0 <= h.x && h.x < a.actorsGrid.length) ||
        !(
          0 <= h.y &&
          h.y < (((d = a.actorsGrid[0]) == null ? void 0 : d.length) ?? 0)
        )
      )
        return;
      (this.pos = h),
        (a.actorsGrid[o.x][o.y].actors = a.actorsGrid[o.x][o.y].actors.filter(
          (p) => p !== this,
        )),
        a.actorsGrid[this.pos.x][this.pos.y].actors.push(this);
    }
    if (
      ((this.canPlace =
        a.actorsGrid[o.x][o.y].isWalkable &&
        a.actorsGrid[o.x][o.y].actors.find((h) => h !== this) === void 0),
      this.canPlace && t.keyboardHandler.wasPressed("z"))
    ) {
      const h = new Su({ position: o.clone() });
      a.addActor(h, o.clone()), (a.actorsGrid[o.x][o.y].isWalkable = !1);
    } else if (this.canPlace && t.keyboardHandler.wasPressed("x")) {
      const h = new rb({
        position: new W(o.x, yt.TILE_SIZE / 2, o.y),
        size: yt.TILE_SIZE,
      });
      a.addActor(h, o.clone()), (a.actorsGrid[o.x][o.y].isWalkable = !1);
    }
  }
  graphics(t, i, a) {
    const o = 1 - Math.exp(-0.005 * i);
    (this.mesh.position = new W(
      this.mesh.position.x + (this.pos.x - this.mesh.position.x) * o,
      this.mesh.position.y,
      this.mesh.position.z + (this.pos.y - this.mesh.position.z) * o,
    )),
      a.camera.position.set(
        this.mesh.position.x + yt.TILE_SIZE * 2,
        this.mesh.position.y + yt.TILE_SIZE * 5,
        this.mesh.position.z + yt.TILE_SIZE * 8,
      ),
      a.camera.lookAt(this.mesh.position),
      this.canPlace
        ? this.mesh.parts.forEach((c) => (c.mesh.material = this.greenMaterial))
        : this.mesh.parts.forEach((c) => (c.mesh.material = this.redMaterial));
  }
}
class rb extends ko {
  constructor(e) {
    const t = new Vi({
      center: e.position,
      parts: [
        {
          mesh: gn.createBox({
            width: e.size,
            height: e.size / 4,
            depth: e.size,
            color: new Fe(Rt.DARK),
          }),
          offset: new W(0, (-e.size * 3) / 8, 0),
        },
        {
          mesh: gn.createBox({
            width: (e.size * 4) / 5,
            height: e.size / 2,
            depth: (e.size * 4) / 5,
            color: new Fe(Rt.WHITE),
          }),
          offset: new W(0, 0, 0),
        },
        {
          mesh: gn.createBox({
            width: e.size,
            height: e.size / 4,
            depth: e.size,
            color: new Fe(Rt.DARK),
          }),
          offset: new W(0, (e.size * 3) / 8, 0),
        },
      ],
    });
    super({ mesh: t });
  }
}
class sb extends ko {
  constructor(e) {
    const t = () => {
        const a = Math.floor(Math.random() * 2) + 2,
          o = Array.from({ length: a }, () =>
            gn.createCone({
              radius: e.size / 32,
              height: e.size / 4,
              color: new Fe(Rt.GREEN),
            }),
          ),
          c = 2;
        o.forEach((h) =>
          h.rotateOnAxis(
            new W(1, 0, 0),
            -Math.PI / (2 * c) + (Math.random() * Math.PI) / c,
          ),
        );
        const u = -e.size / 2 + Math.random() * e.size,
          d = -e.size / 2 + Math.random() * e.size;
        return o.map((h) => ({
          mesh: h,
          offset: new W(u, (e.size * 19) / 32, d),
        }));
      },
      i = () => {
        const a = gn.createCone({
            radius: e.size / 32,
            height: e.size / 2,
            color: new Fe(Rt.GREEN),
          }),
          o = gn.createSphere({
            radius: e.size / 32,
            color: Math.random() < 0.5 ? new Fe(Rt.PINK) : new Fe(Rt.YELLOW),
          }),
          c = -e.size / 2 + Math.random() * e.size,
          u = -e.size / 2 + Math.random() * e.size;
        return [
          { mesh: a, offset: new W(c, (e.size * 10) / 16, u) },
          { mesh: o, offset: new W(c, (e.size * 13) / 16, u) },
        ];
      };
    super({
      mesh: new Vi({
        center: e.position,
        parts: [
          {
            mesh: gn.createBox({
              width: e.size,
              height: e.size / 4,
              depth: e.size,
              color: e.color ?? new Fe(Rt.DARK_GREEN),
            }),
            offset: new W(0, (e.size * 3) / 8, 0),
          },
          {
            mesh: gn.createBox({
              width: e.size,
              height: (e.size * 3) / 4,
              depth: e.size,
              color: new Fe(Rt.DIRT),
            }),
            offset: new W(0, -e.size / 8, 0),
          },
          ...t(),
          ...t(),
          ...(Math.random() < 0.4 ? i() : []),
        ],
      }),
    });
  }
}
const ab = {
    buildWorldComponents: (s) => {
      const e = [];
      for (let t = 0; t < s.width; t++)
        for (let i = 0; i < s.height; i++)
          e.push(
            new sb({
              position: new W(t * s.tileSize, -s.tileSize / 2, i * s.tileSize),
              size: s.tileSize,
              color: new Fe(Rt.DARK_GREEN),
            }),
          );
      return e;
    },
  },
  Ir = class Ir extends Ww {
    constructor() {
      super({ width: 15, height: 15 });
      Qe(this, "spawnTimeout", 0);
    }
    onStart() {
      var c;
      const t = this.actorsGrid.length,
        i = ((c = this.actorsGrid[0]) == null ? void 0 : c.length) ?? 0;
      (this.scene.background = new Fe(Rt.BLUE)),
        this.scene.add(new rE(new Fe(Rt.WHITE), new Fe(Rt.DARK_GREEN), 6)),
        ab
          .buildWorldComponents({ width: t, height: i, tileSize: Ir.TILE_SIZE })
          .forEach((u) => this.addComponent(u));
      const o = new He(Math.floor(t / 2), Math.floor(i / 2));
      this.addActor(new ib({ pos: o }), o);
    }
    update(t, i) {
      super.update(t, i);
      const a = this.spawnTimeout + i,
        o = Math.floor(a / Ir.SPAWN_TIMEOUT);
      this.spawnTimeout = a % Ir.SPAWN_TIMEOUT;
      for (let c = 0; c < o; c++) {
        const u = new He(
            this.actorsGrid.length - 1,
            this.actorsGrid[0].length - 1,
          ),
          d = new Bu({ pos: u, objective: new He(0, 0) });
        this.addActor(d, u);
      }
    }
  };
Qe(Ir, "SPAWN_TIMEOUT", 3e3), Qe(Ir, "TILE_SIZE", 1);
let Eu = Ir;
var Oo = ((s) => ((s.ALLY = "ally"), (s.ENEMY = "enemy"), s))(Oo || {});
const zu = new Zw();
zu.addContainer("BF", new Eu());
zu.setContainer("BF");
zu.start();
