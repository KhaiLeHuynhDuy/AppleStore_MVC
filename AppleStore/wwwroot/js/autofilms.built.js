﻿!function () {
    return function e(t, i, n) {
        function r(s, a) {
            if (!i[s]) {
                if (!t[s]) {
                    var l = "function" == typeof require && require;
                    if (!a && l)
                        return l(s, !0);
                    if (o)
                        return o(s, !0);
                    var c = new Error("Cannot find module '" + s + "'");
                    throw c.code = "MODULE_NOT_FOUND",
                    c
                }
                var u = i[s] = {
                    exports: {}
                };
                t[s][0].call(u.exports, function (e) {
                    return r(t[s][1][e] || e)
                }, u, u.exports, e, t, i, n)
            }
            return i[s].exports
        }
        for (var o = "function" == typeof require && require, s = 0; s < n.length; s++)
            r(n[s]);
        return r
    }
}()({
    1: [function (e, t, i) {
        t.exports = {
            major: 6,
            minor: 10,
            patch: 0,
            prerelease: null,
            toString: function () {
                return "6.10.0 (13d6bca)"
            },
            toArray: function () {
                return [6, 10, 0]
            }
        }
    }
        , {}],
    2: [function (e, t, i) {
        "use strict";
        t.exports = function (e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var i = 0, n = new Array(t); i < t; i++)
                n[i] = e[i];
            return n
        }
            ,
            t.exports.__esModule = !0,
            t.exports.default = t.exports
    }
        , {}],
    3: [function (e, t, i) {
        "use strict";
        var n = e("./arrayLikeToArray.js");
        t.exports = function (e) {
            if (Array.isArray(e))
                return n(e)
        }
            ,
            t.exports.__esModule = !0,
            t.exports.default = t.exports
    }
        , {
        "./arrayLikeToArray.js": 2
    }],
    4: [function (e, t, i) {
        "use strict";
        t.exports = function (e) {
            if (void 0 === e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }
            ,
            t.exports.__esModule = !0,
            t.exports.default = t.exports
    }
        , {}],
    5: [function (e, t, i) {
        "use strict";
        t.exports = function (e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
            ,
            t.exports.__esModule = !0,
            t.exports.default = t.exports
    }
        , {}],
    6: [function (e, t, i) {
        "use strict";
        var n = e("./toPropertyKey.js");
        function r(e, t) {
            for (var i = 0; i < t.length; i++) {
                var r = t[i];
                r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value" in r && (r.writable = !0),
                    Object.defineProperty(e, n(r.key), r)
            }
        }
        t.exports = function (e, t, i) {
            return t && r(e.prototype, t),
                i && r(e, i),
                Object.defineProperty(e, "prototype", {
                    writable: !1
                }),
                e
        }
            ,
            t.exports.__esModule = !0,
            t.exports.default = t.exports
    }
        , {
        "./toPropertyKey.js": 18
    }],
    7: [function (e, t, i) {
        "use strict";
        var n = e("./superPropBase.js");
        function r() {
            return "undefined" != typeof Reflect && Reflect.get ? (t.exports = r = Reflect.get.bind(),
                t.exports.__esModule = !0,
                t.exports.default = t.exports) : (t.exports = r = function (e, t, i) {
                    var r = n(e, t);
                    if (r) {
                        var o = Object.getOwnPropertyDescriptor(r, t);
                        return o.get ? o.get.call(arguments.length < 3 ? e : i) : o.value
                    }
                }
                    ,
                    t.exports.__esModule = !0,
                    t.exports.default = t.exports),
                r.apply(this, arguments)
        }
        t.exports = r,
            t.exports.__esModule = !0,
            t.exports.default = t.exports
    }
        , {
        "./superPropBase.js": 15
    }],
    8: [function (e, t, i) {
        "use strict";
        function n(e) {
            return t.exports = n = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
                ,
                t.exports.__esModule = !0,
                t.exports.default = t.exports,
                n(e)
        }
        t.exports = n,
            t.exports.__esModule = !0,
            t.exports.default = t.exports
    }
        , {}],
    9: [function (e, t, i) {
        "use strict";
        var n = e("./setPrototypeOf.js");
        t.exports = function (e, t) {
            if ("function" != typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }),
                Object.defineProperty(e, "prototype", {
                    writable: !1
                }),
                t && n(e, t)
        }
            ,
            t.exports.__esModule = !0,
            t.exports.default = t.exports
    }
        , {
        "./setPrototypeOf.js": 14
    }],
    10: [function (e, t, i) {
        "use strict";
        t.exports = function (e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
            ,
            t.exports.__esModule = !0,
            t.exports.default = t.exports
    }
        , {}],
    11: [function (e, t, i) {
        "use strict";
        t.exports = function (e) {
            if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"])
                return Array.from(e)
        }
            ,
            t.exports.__esModule = !0,
            t.exports.default = t.exports
    }
        , {}],
    12: [function (e, t, i) {
        "use strict";
        t.exports = function () {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }
            ,
            t.exports.__esModule = !0,
            t.exports.default = t.exports
    }
        , {}],
    13: [function (e, t, i) {
        "use strict";
        var n = e("./typeof.js").default
            , r = e("./assertThisInitialized.js");
        t.exports = function (e, t) {
            if (t && ("object" === n(t) || "function" == typeof t))
                return t;
            if (void 0 !== t)
                throw new TypeError("Derived constructors may only return object or undefined");
            return r(e)
        }
            ,
            t.exports.__esModule = !0,
            t.exports.default = t.exports
    }
        , {
        "./assertThisInitialized.js": 4,
        "./typeof.js": 19
    }],
    14: [function (e, t, i) {
        "use strict";
        function n(e, i) {
            return t.exports = n = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
                return e.__proto__ = t,
                    e
            }
                ,
                t.exports.__esModule = !0,
                t.exports.default = t.exports,
                n(e, i)
        }
        t.exports = n,
            t.exports.__esModule = !0,
            t.exports.default = t.exports
    }
        , {}],
    15: [function (e, t, i) {
        "use strict";
        var n = e("./getPrototypeOf.js");
        t.exports = function (e, t) {
            for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = n(e));)
                ;
            return e
        }
            ,
            t.exports.__esModule = !0,
            t.exports.default = t.exports
    }
        , {
        "./getPrototypeOf.js": 8
    }],
    16: [function (e, t, i) {
        "use strict";
        var n = e("./arrayWithoutHoles.js")
            , r = e("./iterableToArray.js")
            , o = e("./unsupportedIterableToArray.js")
            , s = e("./nonIterableSpread.js");
        t.exports = function (e) {
            return n(e) || r(e) || o(e) || s()
        }
            ,
            t.exports.__esModule = !0,
            t.exports.default = t.exports
    }
        , {
        "./arrayWithoutHoles.js": 3,
        "./iterableToArray.js": 11,
        "./nonIterableSpread.js": 12,
        "./unsupportedIterableToArray.js": 20
    }],
    17: [function (e, t, i) {
        "use strict";
        var n = e("./typeof.js").default;
        t.exports = function (e, t) {
            if ("object" != n(e) || !e)
                return e;
            var i = e[Symbol.toPrimitive];
            if (void 0 !== i) {
                var r = i.call(e, t || "default");
                if ("object" != n(r))
                    return r;
                throw new TypeError("@@toPrimitive must return a primitive value.")
            }
            return ("string" === t ? String : Number)(e)
        }
            ,
            t.exports.__esModule = !0,
            t.exports.default = t.exports
    }
        , {
        "./typeof.js": 19
    }],
    18: [function (e, t, i) {
        "use strict";
        var n = e("./typeof.js").default
            , r = e("./toPrimitive.js");
        t.exports = function (e) {
            var t = r(e, "string");
            return "symbol" == n(t) ? t : String(t)
        }
            ,
            t.exports.__esModule = !0,
            t.exports.default = t.exports
    }
        , {
        "./toPrimitive.js": 17,
        "./typeof.js": 19
    }],
    19: [function (e, t, i) {
        "use strict";
        function n(e) {
            "@babel/helpers - typeof";
            return t.exports = n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            }
                : function (e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }
                ,
                t.exports.__esModule = !0,
                t.exports.default = t.exports,
                n(e)
        }
        t.exports = n,
            t.exports.__esModule = !0,
            t.exports.default = t.exports
    }
        , {}],
    20: [function (e, t, i) {
        "use strict";
        var n = e("./arrayLikeToArray.js");
        t.exports = function (e, t) {
            if (e) {
                if ("string" == typeof e)
                    return n(e, t);
                var i = Object.prototype.toString.call(e).slice(8, -1);
                return "Object" === i && e.constructor && (i = e.constructor.name),
                    "Map" === i || "Set" === i ? Array.from(e) : "Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? n(e, t) : void 0
            }
        }
            ,
            t.exports.__esModule = !0,
            t.exports.default = t.exports
    }
        , {
        "./arrayLikeToArray.js": 2
    }],
    21: [function (e, t, i) {
        "use strict";
        var n = e("./helpers/TabManager")
            , r = e("./helpers/hideSiblingElements")
            , o = e("./helpers/showSiblingElements")
            , s = function (e, t) {
                t = t || {},
                    this._tabbables = null,
                    this._excludeHidden = t.excludeHidden,
                    this._firstTabbableElement = t.firstFocusElement,
                    this._lastTabbableElement = null,
                    this._relatedTarget = null,
                    this.el = e,
                    this._handleOnFocus = this._handleOnFocus.bind(this)
            }
            , a = s.prototype;
        a.start = function (e) {
            this.updateTabbables(),
                r(this.el, null, this._excludeHidden);
            var t = document.activeElement;
            this._firstTabbableElement ? this.el.contains(document.activeElement) || e || (this._firstTabbableElement.focus(),
                t = this._firstTabbableElement) : console.warn("this._firstTabbableElement is null, CircularTab needs at least one tabbable element."),
                this._relatedTarget = t,
                document.addEventListener("focus", this._handleOnFocus, !0)
        }
            ,
            a.stop = function () {
                o(this.el),
                    document.removeEventListener("focus", this._handleOnFocus, !0)
            }
            ,
            a.updateTabbables = function () {
                this._tabbables = n.getTabbableElements(this.el, this._excludeHidden),
                    this._firstTabbableElement = this._firstTabbableElement || this._tabbables[0],
                    this._lastTabbableElement = this._tabbables[this._tabbables.length - 1]
            }
            ,
            a._handleOnFocus = function (e) {
                if (this.el.contains(e.target))
                    this._relatedTarget = e.target;
                else {
                    if (e.preventDefault(),
                        this.updateTabbables(),
                        this._relatedTarget === this._lastTabbableElement || null === this._relatedTarget)
                        return this._firstTabbableElement.focus(),
                            void (this._relatedTarget = this._firstTabbableElement);
                    if (this._relatedTarget === this._firstTabbableElement && this._lastTabbableElement)
                        return this._lastTabbableElement.focus(),
                            void (this._relatedTarget = this._lastTabbableElement)
                }
            }
            ,
            a.destroy = function () {
                this.stop(),
                    this.el = null,
                    this._tabbables = null,
                    this._firstTabbableElement = null,
                    this._lastTabbableElement = null,
                    this._relatedTarget = null,
                    this._handleOnFocus = null
            }
            ,
            t.exports = s
    }
        , {
        "./helpers/TabManager": 22,
        "./helpers/hideSiblingElements": 24,
        "./helpers/showSiblingElements": 27
    }],
    22: [function (e, t, i) {
        "use strict";
        var n = e("./../maps/focusableElement")
            , r = function () {
                this.focusableSelectors = n.selectors
            }
            , o = r.prototype;
        o.isFocusableElement = function (e, t, i) {
            return !(t && !this._isDisplayed(e)) && (n.nodeName[e.nodeName] ? !e.disabled : !e.contentEditable || (i = i || parseFloat(e.getAttribute("tabindex")),
                !isNaN(i)))
        }
            ,
            o.isTabbableElement = function (e, t) {
                if (t && !this._isDisplayed(e))
                    return !1;
                var i = e.getAttribute("tabindex");
                return i = parseFloat(i),
                    isNaN(i) ? this.isFocusableElement(e, t, i) : i >= 0
            }
            ,
            o._isDisplayed = function (e) {
                var t = e.getBoundingClientRect();
                return (0 !== t.top || 0 !== t.left || 0 !== t.width || 0 !== t.height) && "hidden" !== window.getComputedStyle(e).visibility
            }
            ,
            o.getTabbableElements = function (e, t) {
                for (var i = e.querySelectorAll(this.focusableSelectors), n = i.length, r = [], o = 0; o < n; o++)
                    this.isTabbableElement(i[o], t) && r.push(i[o]);
                return r
            }
            ,
            o.getFocusableElements = function (e, t) {
                for (var i = e.querySelectorAll(this.focusableSelectors), n = i.length, r = [], o = 0; o < n; o++)
                    this.isFocusableElement(i[o], t) && r.push(i[o]);
                return r
            }
            ,
            t.exports = new r
    }
        , {
        "./../maps/focusableElement": 29
    }],
    23: [function (e, t, i) {
        "use strict";
        var n = e("./../maps/ariaMap")
            , r = e("./TabManager")
            , o = function (e, t) {
                var i = e.getAttribute("data-original-" + t);
                i || (i = e.getAttribute(t) || "",
                    e.setAttribute("data-original-" + t, i))
            };
        t.exports = function (e, t) {
            if (r.isFocusableElement(e, t))
                o(e, "tabindex"),
                    e.setAttribute("tabindex", "-1");
            else
                for (var i = r.getTabbableElements(e, t), s = i.length; s--;)
                    o(i[s], "tabindex"),
                        i[s].setAttribute("tabindex", "-1");
            o(e, n.HIDDEN),
                e.setAttribute(n.HIDDEN, "true")
        }
    }
        , {
        "./../maps/ariaMap": 28,
        "./TabManager": 22
    }],
    24: [function (e, t, i) {
        "use strict";
        var n = e("./hide");
        t.exports = function e(t, i, r) {
            i = i || document.body;
            for (var o = t, s = t; o = o.previousElementSibling;)
                n(o, r);
            for (; s = s.nextElementSibling;)
                n(s, r);
            t.parentElement && t.parentElement !== i && e(t.parentElement, i, r)
        }
    }
        , {
        "./hide": 23
    }],
    25: [function (e, t, i) {
        "use strict";
        t.exports = function (e, t) {
            var i;
            i = e instanceof NodeList ? e : [].concat(e),
                t = Array.isArray(t) ? t : [].concat(t),
                i.forEach(function (e) {
                    t.forEach(function (t) {
                        e.removeAttribute(t)
                    })
                })
        }
    }
        , {}],
    26: [function (e, t, i) {
        "use strict";
        var n = e("./removeAttributes")
            , r = e("./../maps/ariaMap")
            , o = "data-original-"
            , s = function (e, t) {
                var i = e.getAttribute(o + t);
                null !== i && ("" === i ? n(e, t) : e.setAttribute(t, i),
                    n(e, o + t))
            };
        t.exports = function (e) {
            s(e, "tabindex"),
                s(e, r.HIDDEN);
            for (var t = e.querySelectorAll("[".concat(o + "tabindex", "]")), i = t.length; i--;)
                s(t[i], "tabindex")
        }
    }
        , {
        "./../maps/ariaMap": 28,
        "./removeAttributes": 25
    }],
    27: [function (e, t, i) {
        "use strict";
        var n = e("./show");
        t.exports = function e(t, i) {
            i = i || document.body;
            for (var r = t, o = t; r = r.previousElementSibling;)
                n(r);
            for (; o = o.nextElementSibling;)
                n(o);
            t.parentElement && t.parentElement !== i && e(t.parentElement, i)
        }
    }
        , {
        "./show": 26
    }],
    28: [function (e, t, i) {
        "use strict";
        t.exports = {
            AUTOCOMPLETE: "aria-autocomplete",
            CHECKED: "aria-checked",
            DISABLED: "aria-disabled",
            EXPANDED: "aria-expanded",
            HASPOPUP: "aria-haspopup",
            HIDDEN: "aria-hidden",
            INVALID: "aria-invalid",
            LABEL: "aria-label",
            LEVEL: "aria-level",
            MULTILINE: "aria-multiline",
            MULTISELECTABLE: "aria-multiselectable",
            ORIENTATION: "aria-orientation",
            PRESSED: "aria-pressed",
            READONLY: "aria-readonly",
            REQUIRED: "aria-required",
            SELECTED: "aria-selected",
            SORT: "aria-sort",
            VALUEMAX: "aria-valuemax",
            VALUEMIN: "aria-valuemin",
            VALUENOW: "aria-valuenow",
            VALUETEXT: "aria-valuetext",
            ATOMIC: "aria-atomic",
            BUSY: "aria-busy",
            LIVE: "aria-live",
            RELEVANT: "aria-relevant",
            DROPEFFECT: "aria-dropeffect",
            GRABBED: "aria-grabbed",
            ACTIVEDESCENDANT: "aria-activedescendant",
            CONTROLS: "aria-controls",
            DESCRIBEDBY: "aria-describedby",
            FLOWTO: "aria-flowto",
            LABELLEDBY: "aria-labelledby",
            OWNS: "aria-owns",
            POSINSET: "aria-posinset",
            SETSIZE: "aria-setsize"
        }
    }
        , {}],
    29: [function (e, t, i) {
        "use strict";
        t.exports = {
            selectors: ["iframe", "input", "select", "textarea", "button", "optgroup", "option", "menuitem", "fieldset", "object", "a[href]", "[tabindex]", "[contenteditable]"].join(","),
            nodeName: {
                IFRAME: "iframe",
                INPUT: "input",
                SELECT: "select",
                TEXTAREA: "textarea",
                BUTTON: "button",
                OPTGROUP: "optgroup",
                OPTION: "option",
                MENUITEM: "menuitem",
                FIELDSET: "fieldset",
                OBJECT: "object",
                A: "a"
            }
        }
    }
        , {}],
    30: [function (e, t, i) {
        "use strict";
        var n = !1
            , r = {};
        "undefined" != typeof window && (r = window || self);
        try {
            n = !!r.localStorage.getItem("f7c9180f-5c45-47b4-8de4-428015f096c0")
        } catch (e) { }
        t.exports = n
    }
        , {}],
    31: [function (e, t, i) {
        "use strict";
        var n = e("@babel/runtime/helpers/interopRequireDefault")(e("@babel/runtime/helpers/typeof"))
            , r = e("../enabled");
        t.exports = function (e) {
            return function () {
                if (r && "object" === (0,
                    n.default)(window.console) && "function" == typeof console[e])
                    return console[e].apply(console, Array.prototype.slice.call(arguments, 0))
            }
        }
    }
        , {
        "../enabled": 30,
        "@babel/runtime/helpers/interopRequireDefault": 10,
        "@babel/runtime/helpers/typeof": 19
    }],
    32: [function (e, t, i) {
        "use strict";
        t.exports = e("./internal/expose")("log")
    }
        , {
        "./internal/expose": 31
    }],
    33: [function (e, t, i) {
        "use strict";
        t.exports = {
            DOMEmitter: e("./ac-dom-emitter/DOMEmitter")
        }
    }
        , {
        "./ac-dom-emitter/DOMEmitter": 34
    }],
    34: [function (e, t, i) {
        "use strict";
        var n, r = e("@babel/runtime/helpers/interopRequireDefault")(e("@babel/runtime/helpers/typeof")), o = e("ac-event-emitter").EventEmitter, s = e("./DOMEmitterEvent"), a = {
            addEventListener: e("@marcom/ac-dom-events/addEventListener"),
            removeEventListener: e("@marcom/ac-dom-events/removeEventListener"),
            dispatchEvent: e("@marcom/ac-dom-events/dispatchEvent")
        }, l = {
            querySelectorAll: e("@marcom/ac-dom-traversal/querySelectorAll"),
            matchesSelector: e("@marcom/ac-dom-traversal/matchesSelector")
        };
        function c(e) {
            null !== e && (this.el = e,
                this._bindings = {},
                this._delegateFuncs = {},
                this._eventEmitter = new o)
        }
        (n = c.prototype).on = function () {
            return this._normalizeArgumentsAndCall(Array.prototype.slice.call(arguments, 0), this._on),
                this
        }
            ,
            n.once = function () {
                return this._normalizeArgumentsAndCall(Array.prototype.slice.call(arguments, 0), this._once),
                    this
            }
            ,
            n.off = function () {
                return this._normalizeArgumentsAndCall(Array.prototype.slice.call(arguments, 0), this._off),
                    this
            }
            ,
            n.has = function (e, t, i, n) {
                var r, o;
                return "string" == typeof t ? (r = t,
                    o = i) : (o = t,
                        n = i),
                    r ? this._getDelegateFuncBindingIdx(e, r, o, n, !0) > -1 : !(!this._eventEmitter || !this._eventEmitter.has.apply(this._eventEmitter, arguments))
            }
            ,
            n.trigger = function (e, t, i, n) {
                e = this._parseEventNames(e);
                var r, o, s, a = (e = this._cleanStringData(e)).length;
                for ("string" == typeof t ? (r = this._cleanStringData(t),
                    o = i) : (o = t,
                        i),
                    s = 0; s < a; s++)
                    this._triggerDOMEvents(e[s], o, r);
                return this
            }
            ,
            n.emitterTrigger = function (e, t, i) {
                if (!this._eventEmitter)
                    return this;
                e = this._parseEventNames(e),
                    e = this._cleanStringData(e),
                    t = new s(t, this);
                var n, r = e.length;
                for (n = 0; n < r; n++)
                    this._eventEmitter.trigger(e[n], t, i);
                return this
            }
            ,
            n.propagateTo = function (e, t) {
                return this._eventEmitter.propagateTo(e, t),
                    this
            }
            ,
            n.stopPropagatingTo = function (e) {
                return this._eventEmitter.stopPropagatingTo(e),
                    this
            }
            ,
            n.stopImmediatePropagation = function () {
                return this._eventEmitter.stopImmediatePropagation(),
                    this
            }
            ,
            n.destroy = function () {
                var e;
                for (e in this._triggerInternalEvent("willdestroy"),
                    this.off(),
                    this)
                    this.hasOwnProperty(e) && (this[e] = null)
            }
            ,
            n._parseEventNames = function (e) {
                return e ? e.split(" ") : [e]
            }
            ,
            n._onListenerEvent = function (e, t) {
                var i = new s(t, this);
                this._eventEmitter.trigger(e, i, !1)
            }
            ,
            n._setListener = function (e) {
                this._bindings[e] = this._onListenerEvent.bind(this, e),
                    a.addEventListener(this.el, e, this._bindings[e])
            }
            ,
            n._removeListener = function (e) {
                a.removeEventListener(this.el, e, this._bindings[e]),
                    this._bindings[e] = null
            }
            ,
            n._triggerInternalEvent = function (e, t) {
                this.emitterTrigger("dom-emitter:" + e, t)
            }
            ,
            n._normalizeArgumentsAndCall = function (e, t) {
                var i = {};
                if (0 !== e.length) {
                    if ("string" == typeof e[0] || null === e[0])
                        return e = this._cleanStringData(e),
                            i.events = e[0],
                            "string" == typeof e[1] ? (i.delegateQuery = e[1],
                                i.callback = e[2],
                                i.context = e[3]) : (i.callback = e[1],
                                    i.context = e[2]),
                            void t.call(this, i);
                    var n, r, o = e[0];
                    for (n in o)
                        o.hasOwnProperty(n) && (i = {},
                            r = this._cleanStringData(n.split(":")),
                            i.events = r[0],
                            i.delegateQuery = r[1],
                            i.callback = o[n],
                            i.context = e[1],
                            t.call(this, i))
                } else
                    t.call(this, i)
            }
            ,
            n._registerDelegateFunc = function (e, t, i, n, r) {
                var o = this._delegateFunc.bind(this, e, t, i, r);
                return this._delegateFuncs[t] = this._delegateFuncs[t] || {},
                    this._delegateFuncs[t][e] = this._delegateFuncs[t][e] || [],
                    this._delegateFuncs[t][e].push({
                        func: n,
                        context: r,
                        delegateFunc: o
                    }),
                    o
            }
            ,
            n._cleanStringData = function (e) {
                var t = !1;
                "string" == typeof e && (e = [e],
                    t = !0);
                var i, n, r, o = [], s = e.length;
                for (i = 0; i < s; i++) {
                    if ("string" == typeof (n = e[i])) {
                        if ("" === n || " " === n)
                            continue;
                        for (r = n.length; " " === n[0];)
                            n = n.slice(1, r),
                                r--;
                        for (; " " === n[r - 1];)
                            n = n.slice(0, r - 1),
                                r--
                    }
                    o.push(n)
                }
                return t ? o[0] : o
            }
            ,
            n._unregisterDelegateFunc = function (e, t, i, n) {
                if (this._delegateFuncs[t] && this._delegateFuncs[t][e]) {
                    var r, o = this._getDelegateFuncBindingIdx(e, t, i, n);
                    return o > -1 && (r = this._delegateFuncs[t][e][o].delegateFunc,
                        this._delegateFuncs[t][e].splice(o, 1),
                        0 === this._delegateFuncs[t][e].length && (this._delegateFuncs[t][e] = null)),
                        r
                }
            }
            ,
            n._unregisterDelegateFuncs = function (e, t) {
                var i;
                if (this._delegateFuncs[t] && (null === e || this._delegateFuncs[t][e]))
                    if (null !== e)
                        this._unbindDelegateFunc(e, t);
                    else
                        for (i in this._delegateFuncs[t])
                            this._delegateFuncs[t].hasOwnProperty(i) && this._unbindDelegateFunc(i, t)
            }
            ,
            n._unbindDelegateFunc = function (e, t) {
                for (var i, n, r = 0; this._delegateFuncs[t][e] && this._delegateFuncs[t][e][r];)
                    i = this._delegateFuncs[t][e][r],
                        n = this._delegateFuncs[t][e][r].length,
                        this._off({
                            events: e,
                            delegateQuery: t,
                            callback: i.func,
                            context: i.context
                        }),
                        this._delegateFuncs[t][e] && n === this._delegateFuncs[t][e].length && r++;
                i = n = null
            }
            ,
            n._unregisterDelegateFuncsByEvent = function (e) {
                var t;
                for (t in this._delegateFuncs)
                    this._delegateFuncs.hasOwnProperty(t) && this._unregisterDelegateFuncs(e, t)
            }
            ,
            n._delegateFunc = function (e, t, i, n, o) {
                if (this._targetHasDelegateAncestor(o.target, t)) {
                    var s = Array.prototype.slice.call(arguments, 0)
                        , a = s.slice(4, s.length);
                    n = n || window,
                        "object" === (0,
                            r.default)(o.detail) && (a[0] = o.detail),
                        i.apply(n, a)
                }
            }
            ,
            n._targetHasDelegateAncestor = function (e, t) {
                for (var i = e; i && i !== this.el && i !== document.documentElement;) {
                    if (l.matchesSelector(i, t))
                        return !0;
                    i = i.parentNode
                }
                return !1
            }
            ,
            n._on = function (e) {
                var t = e.events
                    , i = e.callback
                    , n = e.delegateQuery
                    , r = e.context
                    , o = e.unboundCallback || i;
                (t = this._parseEventNames(t)).forEach(function (e, t, i, n, r) {
                    this.has(r) || this._setListener(r),
                        "string" == typeof n && (e = this._registerDelegateFunc(r, n, e, t, i)),
                        this._triggerInternalEvent("willon", {
                            evt: r,
                            callback: e,
                            context: i,
                            delegateQuery: n
                        }),
                        this._eventEmitter.on(r, e, i),
                        this._triggerInternalEvent("didon", {
                            evt: r,
                            callback: e,
                            context: i,
                            delegateQuery: n
                        })
                }
                    .bind(this, i, o, r, n)),
                    t = i = o = n = r = null
            }
            ,
            n._off = function (e) {
                var t = e.events
                    , i = e.callback
                    , n = e.delegateQuery
                    , r = e.context
                    , o = e.unboundCallback || i;
                if (void 0 !== t)
                    (t = this._parseEventNames(t)).forEach(function (e, t, i, n, r) {
                        ("string" != typeof n || "function" != typeof t || (e = this._unregisterDelegateFunc(r, n, t, i))) && ("string" != typeof n || void 0 !== e ? "string" == typeof r && void 0 === e && (this._unregisterDelegateFuncsByEvent(r),
                            "string" == typeof n) || (this._triggerInternalEvent("willoff", {
                                evt: r,
                                callback: e,
                                context: i,
                                delegateQuery: n
                            }),
                                this._eventEmitter.off(r, e, i),
                                this._triggerInternalEvent("didoff", {
                                    evt: r,
                                    callback: e,
                                    context: i,
                                    delegateQuery: n
                                }),
                                this.has(r) || this._removeListener(r)) : this._unregisterDelegateFuncs(r, n))
                    }
                        .bind(this, i, o, r, n)),
                        t = i = o = n = r = null;
                else {
                    var s;
                    for (s in this._eventEmitter.off(),
                        this._bindings)
                        this._bindings.hasOwnProperty(s) && this._removeListener(s);
                    for (s in this._delegateFuncs)
                        this._delegateFuncs.hasOwnProperty(s) && (this._delegateFuncs[s] = null)
                }
            }
            ,
            n._once = function (e) {
                var t = e.events
                    , i = e.callback
                    , n = e.delegateQuery
                    , r = e.context;
                (t = this._parseEventNames(t)).forEach(function (e, t, i, n) {
                    if ("string" == typeof i)
                        return this._handleDelegateOnce(n, e, t, i);
                    this.has(n) || this._setListener(n),
                        this._triggerInternalEvent("willonce", {
                            evt: n,
                            callback: e,
                            context: t,
                            delegateQuery: i
                        }),
                        this._eventEmitter.once.call(this, n, e, t),
                        this._triggerInternalEvent("didonce", {
                            evt: n,
                            callback: e,
                            context: t,
                            delegateQuery: i
                        })
                }
                    .bind(this, i, r, n)),
                    t = i = n = r = null
            }
            ,
            n._handleDelegateOnce = function (e, t, i, n) {
                return this._triggerInternalEvent("willonce", {
                    evt: e,
                    callback: t,
                    context: i,
                    delegateQuery: n
                }),
                    this._on({
                        events: e,
                        context: i,
                        delegateQuery: n,
                        callback: this._getDelegateOnceCallback.bind(this, e, t, i, n),
                        unboundCallback: t
                    }),
                    this._triggerInternalEvent("didonce", {
                        evt: e,
                        callback: t,
                        context: i,
                        delegateQuery: n
                    }),
                    this
            }
            ,
            n._getDelegateOnceCallback = function (e, t, i, n) {
                var r = Array.prototype.slice.call(arguments, 0)
                    , o = r.slice(4, r.length);
                t.apply(i, o),
                    this._off({
                        events: e,
                        delegateQuery: n,
                        callback: t,
                        context: i
                    })
            }
            ,
            n._getDelegateFuncBindingIdx = function (e, t, i, n, r) {
                var o = -1;
                if (this._delegateFuncs[t] && this._delegateFuncs[t][e]) {
                    var s, a, l = this._delegateFuncs[t][e].length;
                    for (s = 0; s < l; s++)
                        if (a = this._delegateFuncs[t][e][s],
                            r && void 0 === i && (i = a.func),
                            a.func === i && a.context === n) {
                            o = s;
                            break
                        }
                }
                return o
            }
            ,
            n._triggerDOMEvents = function (e, t, i) {
                var n = [this.el];
                i && (n = l.querySelectorAll(i, this.el));
                var r, o = n.length;
                for (r = 0; r < o; r++)
                    a.dispatchEvent(n[r], e, {
                        bubbles: !0,
                        cancelable: !0,
                        detail: t
                    })
            }
            ,
            t.exports = c
    }
        , {
        "./DOMEmitterEvent": 35,
        "@babel/runtime/helpers/interopRequireDefault": 10,
        "@babel/runtime/helpers/typeof": 19,
        "@marcom/ac-dom-events/addEventListener": 36,
        "@marcom/ac-dom-events/dispatchEvent": 37,
        "@marcom/ac-dom-events/removeEventListener": 40,
        "@marcom/ac-dom-traversal/matchesSelector": 62,
        "@marcom/ac-dom-traversal/querySelectorAll": 63,
        "ac-event-emitter": 134
    }],
    35: [function (e, t, i) {
        "use strict";
        var n, r = e("@babel/runtime/helpers/interopRequireDefault")(e("@babel/runtime/helpers/typeof")), o = {
            preventDefault: e("@marcom/ac-dom-events/preventDefault"),
            stopPropagation: e("@marcom/ac-dom-events/stopPropagation"),
            target: e("@marcom/ac-dom-events/target")
        }, s = function (e, t) {
            this._domEmitter = t,
                this.originalEvent = e || {},
                this._originalTarget = o.target(this.originalEvent),
                this.target = this._originalTarget || this._domEmitter.el,
                this.currentTarget = this._domEmitter.el,
                this.timeStamp = this.originalEvent.timeStamp || Date.now(),
                this._isDOMEvent(this.originalEvent) ? "object" === (0,
                    r.default)(this.originalEvent.detail) && (this.data = this.originalEvent.detail) : e && (this.data = this.originalEvent,
                        this.originalEvent = {})
        };
        (n = s.prototype).preventDefault = function () {
            o.preventDefault(this.originalEvent)
        }
            ,
            n.stopPropagation = function () {
                o.stopPropagation(this.originalEvent)
            }
            ,
            n.stopImmediatePropagation = function () {
                this.originalEvent.stopImmediatePropagation && this.originalEvent.stopImmediatePropagation(),
                    this._domEmitter.stopImmediatePropagation()
            }
            ,
            n._isDOMEvent = function (e) {
                return !!(this._originalTarget || "undefined" !== document.createEvent && "undefined" != typeof CustomEvent && e instanceof CustomEvent)
            }
            ,
            t.exports = s
    }
        , {
        "@babel/runtime/helpers/interopRequireDefault": 10,
        "@babel/runtime/helpers/typeof": 19,
        "@marcom/ac-dom-events/preventDefault": 39,
        "@marcom/ac-dom-events/stopPropagation": 43,
        "@marcom/ac-dom-events/target": 44
    }],
    36: [function (e, t, i) {
        "use strict";
        var n = e("./utils/addEventListener")
            , r = e("./shared/getEventType");
        t.exports = function (e, t, i, o) {
            return t = r(e, t),
                n(e, t, i, o)
        }
    }
        , {
        "./shared/getEventType": 41,
        "./utils/addEventListener": 45
    }],
    37: [function (e, t, i) {
        "use strict";
        var n = e("./utils/dispatchEvent")
            , r = e("./shared/getEventType");
        t.exports = function (e, t, i) {
            return t = r(e, t),
                n(e, t, i)
        }
    }
        , {
        "./shared/getEventType": 41,
        "./utils/dispatchEvent": 46
    }],
    38: [function (e, t, i) {
        "use strict";
        t.exports = {
            addEventListener: e("./addEventListener"),
            dispatchEvent: e("./dispatchEvent"),
            preventDefault: e("./preventDefault"),
            removeEventListener: e("./removeEventListener"),
            stop: e("./stop"),
            stopPropagation: e("./stopPropagation"),
            target: e("./target")
        }
    }
        , {
        "./addEventListener": 36,
        "./dispatchEvent": 37,
        "./preventDefault": 39,
        "./removeEventListener": 40,
        "./stop": 42,
        "./stopPropagation": 43,
        "./target": 44
    }],
    39: [function (e, t, i) {
        "use strict";
        t.exports = function (e) {
            (e = e || window.event).preventDefault ? e.preventDefault() : e.returnValue = !1
        }
    }
        , {}],
    40: [function (e, t, i) {
        "use strict";
        var n = e("./utils/removeEventListener")
            , r = e("./shared/getEventType");
        t.exports = function (e, t, i, o) {
            return t = r(e, t),
                n(e, t, i, o)
        }
    }
        , {
        "./shared/getEventType": 41,
        "./utils/removeEventListener": 47
    }],
    41: [function (e, t, i) {
        "use strict";
        var n = e("@marcom/ac-prefixer/getEventType");
        t.exports = function (e, t) {
            var i;
            return i = "tagName" in e ? e.tagName : e === window ? "window" : "document",
                n(t, i) || t
        }
    }
        , {
        "@marcom/ac-prefixer/getEventType": 110
    }],
    42: [function (e, t, i) {
        "use strict";
        var n = e("./stopPropagation")
            , r = e("./preventDefault");
        t.exports = function (e) {
            e = e || window.event,
                n(e),
                r(e),
                e.stopped = !0,
                e.returnValue = !1
        }
    }
        , {
        "./preventDefault": 39,
        "./stopPropagation": 43
    }],
    43: [function (e, t, i) {
        "use strict";
        t.exports = function (e) {
            (e = e || window.event).stopPropagation ? e.stopPropagation() : e.cancelBubble = !0
        }
    }
        , {}],
    44: [function (e, t, i) {
        "use strict";
        t.exports = function (e) {
            return void 0 !== (e = e || window.event).target ? e.target : e.srcElement
        }
    }
        , {}],
    45: [function (e, t, i) {
        "use strict";
        t.exports = function (e, t, i, n) {
            return e.addEventListener ? e.addEventListener(t, i, !!n) : e.attachEvent("on" + t, i),
                e
        }
    }
        , {}],
    46: [function (e, t, i) {
        "use strict";
        e("@marcom/ac-polyfills/CustomEvent"),
            t.exports = function (e, t, i) {
                var n;
                return e.dispatchEvent ? (n = i ? new CustomEvent(t, i) : new CustomEvent(t),
                    e.dispatchEvent(n)) : (n = document.createEventObject(),
                        i && "detail" in i && (n.detail = i.detail),
                        e.fireEvent("on" + t, n)),
                    e
            }
    }
        , {
        "@marcom/ac-polyfills/CustomEvent": 109
    }],
    47: [function (e, t, i) {
        "use strict";
        t.exports = function (e, t, i, n) {
            return e.removeEventListener ? e.removeEventListener(t, i, !!n) : e.detachEvent("on" + t, i),
                e
        }
    }
        , {}],
    48: [function (e, t, i) {
        "use strict";
        t.exports = function (e) {
            return !(!e || !e.nodeType)
        }
    }
        , {}],
    49: [function (e, t, i) {
        "use strict";
        t.exports = 8
    }
        , {}],
    50: [function (e, t, i) {
        "use strict";
        t.exports = 11
    }
        , {}],
    51: [function (e, t, i) {
        "use strict";
        t.exports = 9
    }
        , {}],
    52: [function (e, t, i) {
        "use strict";
        t.exports = 1
    }
        , {}],
    53: [function (e, t, i) {
        "use strict";
        t.exports = 3
    }
        , {}],
    54: [function (e, t, i) {
        "use strict";
        var n = e("../isNode");
        t.exports = function (e, t) {
            return !!n(e) && ("number" == typeof t ? e.nodeType === t : -1 !== t.indexOf(e.nodeType))
        }
    }
        , {
        "../isNode": 58
    }],
    55: [function (e, t, i) {
        "use strict";
        var n = e("./isNodeType")
            , r = e("../COMMENT_NODE")
            , o = e("../DOCUMENT_FRAGMENT_NODE")
            , s = e("../ELEMENT_NODE")
            , a = e("../TEXT_NODE")
            , l = [s, a, r, o]
            , c = [s, a, r]
            , u = [s, o];
        t.exports = {
            parentNode: function (e, t, i, r) {
                if (r = r || "target",
                    (e || t) && !n(e, u))
                    throw new TypeError(i + ": " + r + " must be an Element, or Document Fragment")
            },
            childNode: function (e, t, i, r) {
                if (r = r || "target",
                    (e || t) && !n(e, c))
                    throw new TypeError(i + ": " + r + " must be an Element, TextNode, or Comment")
            },
            insertNode: function (e, t, i, r) {
                if (r = r || "node",
                    (e || t) && !n(e, l))
                    throw new TypeError(i + ": " + r + " must be an Element, TextNode, Comment, or Document Fragment")
            },
            hasParentNode: function (e, t, i) {
                if (i = i || "target",
                    !e.parentNode)
                    throw new TypeError(t + ": " + i + " must have a parentNode")
            }
        }
    }
        , {
        "../COMMENT_NODE": 49,
        "../DOCUMENT_FRAGMENT_NODE": 50,
        "../ELEMENT_NODE": 52,
        "../TEXT_NODE": 53,
        "./isNodeType": 54
    }],
    56: [function (e, t, i) {
        "use strict";
        var n = e("./internal/isNodeType")
            , r = e("./DOCUMENT_FRAGMENT_NODE");
        t.exports = function (e) {
            return n(e, r)
        }
    }
        , {
        "./DOCUMENT_FRAGMENT_NODE": 50,
        "./internal/isNodeType": 54
    }],
    57: [function (e, t, i) {
        "use strict";
        var n = e("./internal/isNodeType")
            , r = e("./ELEMENT_NODE");
        t.exports = function (e) {
            return n(e, r)
        }
    }
        , {
        "./ELEMENT_NODE": 52,
        "./internal/isNodeType": 54
    }],
    58: [function (e, t, i) {
        "use strict";
        t.exports = function (e) {
            return !(!e || !e.nodeType)
        }
    }
        , {}],
    59: [function (e, t, i) {
        "use strict";
        var n = e("./internal/validate");
        t.exports = function (e) {
            return n.childNode(e, !0, "remove"),
                e.parentNode ? e.parentNode.removeChild(e) : e
        }
    }
        , {
        "./internal/validate": 55
    }],
    60: [function (e, t, i) {
        "use strict";
        var n;
        t.exports = window.Element ? (n = Element.prototype).matches || n.matchesSelector || n.webkitMatchesSelector || n.mozMatchesSelector || n.msMatchesSelector || n.oMatchesSelector : null
    }
        , {}],
    61: [function (e, t, i) {
        "use strict";
        e("@marcom/ac-polyfills/Array/prototype.indexOf");
        var n = e("@marcom/ac-dom-nodes/isNode")
            , r = e("@marcom/ac-dom-nodes/COMMENT_NODE")
            , o = e("@marcom/ac-dom-nodes/DOCUMENT_FRAGMENT_NODE")
            , s = e("@marcom/ac-dom-nodes/DOCUMENT_NODE")
            , a = e("@marcom/ac-dom-nodes/ELEMENT_NODE")
            , l = function (e, t) {
                return !!n(e) && ("number" == typeof t ? e.nodeType === t : -1 !== t.indexOf(e.nodeType))
            }
            , c = [a, s, o]
            , u = [a, e("@marcom/ac-dom-nodes/TEXT_NODE"), r];
        t.exports = {
            parentNode: function (e, t, i, n) {
                if (n = n || "node",
                    (e || t) && !l(e, c))
                    throw new TypeError(i + ": " + n + " must be an Element, Document, or Document Fragment")
            },
            childNode: function (e, t, i, n) {
                if (n = n || "node",
                    (e || t) && !l(e, u))
                    throw new TypeError(i + ": " + n + " must be an Element, TextNode, or Comment")
            },
            selector: function (e, t, i, n) {
                if (n = n || "selector",
                    (e || t) && "string" != typeof e)
                    throw new TypeError(i + ": " + n + " must be a string")
            }
        }
    }
        , {
        "@marcom/ac-dom-nodes/COMMENT_NODE": 49,
        "@marcom/ac-dom-nodes/DOCUMENT_FRAGMENT_NODE": 50,
        "@marcom/ac-dom-nodes/DOCUMENT_NODE": 51,
        "@marcom/ac-dom-nodes/ELEMENT_NODE": 52,
        "@marcom/ac-dom-nodes/TEXT_NODE": 53,
        "@marcom/ac-dom-nodes/isNode": 58,
        "@marcom/ac-polyfills/Array/prototype.indexOf": 107
    }],
    62: [function (e, t, i) {
        "use strict";
        var n = e("@marcom/ac-dom-nodes/isElement")
            , r = e("./internal/validate")
            , o = e("./internal/nativeMatches")
            , s = e("./shims/matchesSelector");
        t.exports = function (e, t) {
            return r.selector(t, !0, "matchesSelector"),
                !!n(e) && (o ? o.call(e, t) : s(e, t))
        }
    }
        , {
        "./internal/nativeMatches": 60,
        "./internal/validate": 61,
        "./shims/matchesSelector": 64,
        "@marcom/ac-dom-nodes/isElement": 57
    }],
    63: [function (e, t, i) {
        "use strict";
        e("@marcom/ac-polyfills/Array/prototype.slice");
        var n = e("./internal/validate")
            , r = e("./shims/querySelectorAll")
            , o = "querySelectorAll" in document;
        t.exports = function (e, t) {
            return t = t || document,
                n.parentNode(t, !0, "querySelectorAll", "context"),
                n.selector(e, !0, "querySelectorAll"),
                o ? Array.prototype.slice.call(t.querySelectorAll(e)) : r(e, t)
        }
    }
        , {
        "./internal/validate": 61,
        "./shims/querySelectorAll": 65,
        "@marcom/ac-polyfills/Array/prototype.slice": 108
    }],
    64: [function (e, t, i) {
        "use strict";
        var n = e("../querySelectorAll");
        t.exports = function (e, t) {
            var i, r = e.parentNode || document, o = n(t, r);
            for (i = 0; i < o.length; i++)
                if (o[i] === e)
                    return !0;
            return !1
        }
    }
        , {
        "../querySelectorAll": 63
    }],
    65: [function (e, t, i) {
        "use strict";
        e("@marcom/ac-polyfills/Array/prototype.indexOf");
        var n = e("@marcom/ac-dom-nodes/isElement")
            , r = e("@marcom/ac-dom-nodes/isDocumentFragment")
            , o = e("@marcom/ac-dom-nodes/remove")
            , s = function (e, t) {
                var i;
                if (t === document)
                    return !0;
                for (i = e; (i = i.parentNode) && n(i);)
                    if (i === t)
                        return !0;
                return !1
            }
            , a = function (e) {
                "recalc" in e ? e.recalc(!1) : document.recalc(!1),
                    window.scrollBy(0, 0)
            };
        t.exports = function (e, t) {
            var i, n = document.createElement("style"), l = "_ac_qsa_" + (Math.random() + "").slice(-6), c = [];
            for (t = t || document,
                document[l] = [],
                r(t) ? t.appendChild(n) : document.documentElement.firstChild.appendChild(n),
                n.styleSheet.cssText = "*{display:recalc;}" + e + '{ac-qsa:expression(document["' + l + '"] && document["' + l + '"].push(this));}',
                a(t); document[l].length;)
                (i = document[l].shift()).style.removeAttribute("ac-qsa"),
                    -1 === c.indexOf(i) && s(i, t) && c.push(i);
            return document[l] = null,
                o(n),
                a(t),
                c
        }
    }
        , {
        "@marcom/ac-dom-nodes/isDocumentFragment": 56,
        "@marcom/ac-dom-nodes/isElement": 57,
        "@marcom/ac-dom-nodes/remove": 59,
        "@marcom/ac-polyfills/Array/prototype.indexOf": 107
    }],
    66: [function (e, t, i) {
        "use strict";
        t.exports = {
            EventEmitterMicro: e("./ac-event-emitter-micro/EventEmitterMicro")
        }
    }
        , {
        "./ac-event-emitter-micro/EventEmitterMicro": 67
    }],
    67: [function (e, t, i) {
        "use strict";
        function n() {
            this._events = {}
        }
        var r = n.prototype;
        r.on = function (e, t) {
            return this._events[e] = this._events[e] || [],
                this._events[e].unshift(t),
                t
        }
            ,
            r.once = function (e, t) {
                var i = this;
                return this.on(e, function n(r) {
                    i.off(e, n),
                        void 0 !== r ? t(r) : t()
                })
            }
            ,
            r.off = function (e, t) {
                if (this.has(e)) {
                    if (1 === arguments.length)
                        return this._events[e] = null,
                            void delete this._events[e];
                    var i = this._events[e].indexOf(t);
                    -1 !== i && this._events[e].splice(i, 1)
                }
            }
            ,
            r.trigger = function (e, t) {
                if (this.has(e))
                    for (var i = this._events[e].length - 1; i >= 0; i--)
                        void 0 !== t ? this._events[e][i](t) : this._events[e][i]()
            }
            ,
            r.has = function (e) {
                return e in this._events != !1 && 0 !== this._events[e].length
            }
            ,
            r.destroy = function () {
                for (var e in this._events)
                    this._events[e] = null;
                this._events = null
            }
            ,
            t.exports = n
    }
        , {}],
    68: [function (e, t, i) {
        "use strict";
        t.exports.EventEmitter = e("./ac-event-emitter/EventEmitter")
    }
        , {
        "./ac-event-emitter/EventEmitter": 69
    }],
    69: [function (e, t, i) {
        "use strict";
        var n = e("@babel/runtime/helpers/interopRequireDefault")(e("@babel/runtime/helpers/typeof"))
            , r = "EventEmitter:propagation"
            , o = function (e) {
                e && (this.context = e)
            }
            , s = o.prototype
            , a = function () {
                return this.hasOwnProperty("_events") || "object" === (0,
                    n.default)(this._events) || (this._events = {}),
                    this._events
            }
            , l = function (e, t) {
                var i = e[0]
                    , r = e[1]
                    , o = e[2];
                if ("string" != typeof i && "object" !== (0,
                    n.default)(i) || null === i || Array.isArray(i))
                    throw new TypeError("Expecting event name to be a string or object.");
                if ("string" == typeof i && !r)
                    throw new Error("Expecting a callback function to be provided.");
                if (r && "function" != typeof r) {
                    if ("object" !== (0,
                        n.default)(i) || "object" !== (0,
                            n.default)(r))
                        throw new TypeError("Expecting callback to be a function.");
                    o = r
                }
                if ("object" === (0,
                    n.default)(i))
                    for (var s in i)
                        t.call(this, s, i[s], o);
                "string" == typeof i && (i = i.split(" ")).forEach(function (e) {
                    t.call(this, e, r, o)
                }, this)
            }
            , c = function (e, t) {
                var i, n, r;
                if ((i = a.call(this)[e]) && 0 !== i.length)
                    for (i = i.slice(),
                        this._stoppedImmediatePropagation = !1,
                        n = 0,
                        r = i.length; n < r && (!this._stoppedImmediatePropagation && !t(i[n], n)); n++)
                        ;
            }
            , u = function (e, t, i) {
                var n = -1;
                c.call(this, t, function (e, t) {
                    if (e.callback === i)
                        return n = t,
                            !0
                }),
                    -1 !== n && e[t].splice(n, 1)
            };
        s.on = function () {
            var e = a.call(this);
            return l.call(this, arguments, function (t, i, n) {
                e[t] = e[t] || (e[t] = []),
                    e[t].push({
                        callback: i,
                        context: n
                    })
            }),
                this
        }
            ,
            s.once = function () {
                return l.call(this, arguments, function (e, t, i) {
                    this.on(e, function n(r) {
                        t.call(i || this, r),
                            this.off(e, n)
                    }, this)
                }),
                    this
            }
            ,
            s.off = function (e, t) {
                var i = a.call(this);
                if (0 === arguments.length)
                    this._events = {};
                else if (!e || "string" != typeof e && "object" !== (0,
                    n.default)(e) || Array.isArray(e))
                    throw new TypeError("Expecting event name to be a string or object.");
                if ("object" === (0,
                    n.default)(e))
                    for (var r in e)
                        u.call(this, i, r, e[r]);
                if ("string" == typeof e) {
                    var o = e.split(" ");
                    1 === o.length ? t ? u.call(this, i, e, t) : i[e] = [] : o.forEach(function (e) {
                        i[e] = []
                    })
                }
                return this
            }
            ,
            s.trigger = function (e, t, i) {
                if (!e)
                    throw new Error("trigger method requires an event name");
                if ("string" != typeof e)
                    throw new TypeError("Expecting event names to be a string.");
                if (i && "boolean" != typeof i)
                    throw new TypeError("Expecting doNotPropagate to be a boolean.");
                return (e = e.split(" ")).forEach(function (e) {
                    c.call(this, e, function (e) {
                        e.callback.call(e.context || this.context || this, t)
                    }
                        .bind(this)),
                        i || c.call(this, r, function (i) {
                            var n = e;
                            i.prefix && (n = i.prefix + n),
                                i.emitter.trigger(n, t)
                        })
                }, this),
                    this
            }
            ,
            s.propagateTo = function (e, t) {
                var i = a.call(this);
                i[r] || (this._events[r] = []),
                    i[r].push({
                        emitter: e,
                        prefix: t
                    })
            }
            ,
            s.stopPropagatingTo = function (e) {
                var t = a.call(this);
                if (e) {
                    var i, n = t[r], o = n.length;
                    for (i = 0; i < o; i++)
                        if (n[i].emitter === e) {
                            n.splice(i, 1);
                            break
                        }
                } else
                    t[r] = []
            }
            ,
            s.stopImmediatePropagation = function () {
                this._stoppedImmediatePropagation = !0
            }
            ,
            s.has = function (e, t, i) {
                var n = a.call(this)
                    , r = n[e];
                if (0 === arguments.length)
                    return Object.keys(n);
                if (!r)
                    return !1;
                if (!t)
                    return r.length > 0;
                for (var o = 0, s = r.length; o < s; o++) {
                    var l = r[o];
                    if (i && t && l.context === i && l.callback === t)
                        return !0;
                    if (t && !i && l.callback === t)
                        return !0
                }
                return !1
            }
            ,
            t.exports = o
    }
        , {
        "@babel/runtime/helpers/interopRequireDefault": 10,
        "@babel/runtime/helpers/typeof": 19
    }],
    70: [function (e, t, i) {
        "use strict";
        var n = e("@babel/runtime/helpers/interopRequireDefault")
            , r = n(e("@babel/runtime/helpers/classCallCheck"))
            , o = n(e("@babel/runtime/helpers/createClass"))
            , s = n(e("@babel/runtime/helpers/possibleConstructorReturn"))
            , a = n(e("@babel/runtime/helpers/assertThisInitialized"))
            , l = n(e("@babel/runtime/helpers/get"))
            , c = n(e("@babel/runtime/helpers/getPrototypeOf"))
            , u = n(e("@babel/runtime/helpers/inherits"));
        function h(e, t, i) {
            return t = (0,
                c.default)(t),
                (0,
                    s.default)(e, function () {
                        try {
                            var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () { }))
                        } catch (e) { }
                        return function () {
                            return !!e
                        }()
                    }() ? Reflect.construct(t, i || [], (0,
                        c.default)(e).constructor) : t.apply(e, i))
        }
        var d = e("@marcom/ac-event-emitter-micro/EventEmitterMicro")
            , p = e("./internal/KeyEvent")
            , f = "keydown"
            , m = "keyup"
            , _ = function (e) {
                function t(e) {
                    var i;
                    return (0,
                        r.default)(this, t),
                        (i = h(this, t))._keysDown = {},
                        i._DOMKeyDown = i._DOMKeyDown.bind((0,
                            a.default)(i)),
                        i._DOMKeyUp = i._DOMKeyUp.bind((0,
                            a.default)(i)),
                        i._context = e || document,
                        i._context.addEventListener(f, i._DOMKeyDown, !0),
                        i._context.addEventListener(m, i._DOMKeyUp, !0),
                        i
                }
                return (0,
                    u.default)(t, e),
                    (0,
                        o.default)(t, [{
                            key: "onDown",
                            value: function (e, t) {
                                return this.on(f + ":" + e, t)
                            }
                        }, {
                            key: "onceDown",
                            value: function (e, t) {
                                return this.once(f + ":" + e, t)
                            }
                        }, {
                            key: "offDown",
                            value: function (e, t) {
                                return this.off(f + ":" + e, t)
                            }
                        }, {
                            key: "onUp",
                            value: function (e, t) {
                                return this.on(m + ":" + e, t)
                            }
                        }, {
                            key: "onceUp",
                            value: function (e, t) {
                                return this.once(m + ":" + e, t)
                            }
                        }, {
                            key: "offUp",
                            value: function (e, t) {
                                return this.off(m + ":" + e, t)
                            }
                        }, {
                            key: "isDown",
                            value: function (e) {
                                return e += "",
                                    this._keysDown[e] || !1
                            }
                        }, {
                            key: "isUp",
                            value: function (e) {
                                return !this.isDown(e)
                            }
                        }, {
                            key: "destroy",
                            value: function () {
                                return this._context.removeEventListener(f, this._DOMKeyDown, !0),
                                    this._context.removeEventListener(m, this._DOMKeyUp, !0),
                                    this._keysDown = null,
                                    this._context = null,
                                    (0,
                                        l.default)((0,
                                            c.default)(t.prototype), "destroy", this).call(this),
                                    this
                            }
                        }, {
                            key: "_DOMKeyDown",
                            value: function (e) {
                                var t = this._normalizeKeyboardEvent(e)
                                    , i = t.keyCode += "";
                                this._trackKeyDown(i),
                                    this.trigger(f + ":" + i, t)
                            }
                        }, {
                            key: "_DOMKeyUp",
                            value: function (e) {
                                var t = this._normalizeKeyboardEvent(e)
                                    , i = t.keyCode += "";
                                this._trackKeyUp(i),
                                    this.trigger(m + ":" + i, t)
                            }
                        }, {
                            key: "_normalizeKeyboardEvent",
                            value: function (e) {
                                return new p(e)
                            }
                        }, {
                            key: "_trackKeyUp",
                            value: function (e) {
                                this._keysDown[e] && (this._keysDown[e] = !1)
                            }
                        }, {
                            key: "_trackKeyDown",
                            value: function (e) {
                                this._keysDown[e] || (this._keysDown[e] = !0)
                            }
                        }]),
                    t
            }(d);
        t.exports = _
    }
        , {
        "./internal/KeyEvent": 72,
        "@babel/runtime/helpers/assertThisInitialized": 4,
        "@babel/runtime/helpers/classCallCheck": 5,
        "@babel/runtime/helpers/createClass": 6,
        "@babel/runtime/helpers/get": 7,
        "@babel/runtime/helpers/getPrototypeOf": 8,
        "@babel/runtime/helpers/inherits": 9,
        "@babel/runtime/helpers/interopRequireDefault": 10,
        "@babel/runtime/helpers/possibleConstructorReturn": 13,
        "@marcom/ac-event-emitter-micro/EventEmitterMicro": 67
    }],
    71: [function (e, t, i) {
        "use strict";
        var n = e("./Keyboard");
        t.exports = new n
    }
        , {
        "./Keyboard": 70
    }],
    72: [function (e, t, i) {
        "use strict";
        var n = e("@babel/runtime/helpers/interopRequireDefault")
            , r = n(e("@babel/runtime/helpers/classCallCheck"))
            , o = n(e("@babel/runtime/helpers/createClass"))
            , s = e("./keyCodeMap.js")
            , a = ["keyLocation", "keyIdentifier"]
            , l = "keyCode"
            , c = function () {
                function e(t) {
                    for (var i in (0,
                        r.default)(this, e),
                        this.originalEvent = t,
                        t)
                        -1 === a.indexOf(i) && "function" != typeof t[i] && (this[i] = t[i]);
                    this[l] || (this[l] = this._getKeyCode()),
                        this.location = void 0 !== this.originalEvent.location ? this.originalEvent.location : this.originalEvent.keyLocation
                }
                return (0,
                    o.default)(e, [{
                        key: "preventDefault",
                        value: function () {
                            if ("function" == typeof this.originalEvent.preventDefault)
                                return this.originalEvent.preventDefault();
                            this.originalEvent.returnValue = !1
                        }
                    }, {
                        key: "stopPropagation",
                        value: function () {
                            return this.originalEvent.stopPropagation()
                        }
                    }, {
                        key: "_getKeyCode",
                        value: function () {
                            return s[this.code] || -1
                        }
                    }]),
                    e
            }();
        t.exports = c
    }
        , {
        "./keyCodeMap.js": 73,
        "@babel/runtime/helpers/classCallCheck": 5,
        "@babel/runtime/helpers/createClass": 6,
        "@babel/runtime/helpers/interopRequireDefault": 10
    }],
    73: [function (e, t, i) {
        "use strict";
        t.exports = {
            Backspace: 8,
            Tab: 9,
            Enter: 13,
            NumpadEnter: 13,
            ShiftLeft: 16,
            ShiftRight: 16,
            ControlLeft: 17,
            ControlRight: 17,
            AltLeft: 18,
            AltRight: 18,
            CapsLock: 20,
            Escape: 27,
            PageUp: 33,
            PageDown: 34,
            End: 35,
            Home: 36,
            ArrowLeft: 37,
            ArrowUp: 38,
            ArrowRight: 39,
            ArrowDown: 40,
            Delete: 46,
            Digit0: 48,
            Digit1: 49,
            Digit2: 50,
            Digit3: 51,
            Digit4: 52,
            Digit5: 53,
            Digit6: 54,
            Digit7: 55,
            Digit8: 56,
            Digit9: 57,
            KeyA: 65,
            KeyB: 66,
            KeyC: 67,
            KeyD: 68,
            KeyE: 69,
            KeyF: 70,
            KeyG: 71,
            KeyH: 72,
            KeyI: 73,
            KeyJ: 74,
            KeyK: 75,
            KeyL: 76,
            KeyM: 77,
            KeyN: 78,
            KeyO: 79,
            KeyP: 80,
            KeyQ: 81,
            KeyR: 82,
            KeyS: 83,
            KeyT: 84,
            KeyU: 85,
            KeyV: 86,
            KeyW: 87,
            KeyX: 88,
            KeyY: 89,
            KeyZ: 90,
            Numpad0: 96,
            Numpad1: 97,
            Numpad2: 98,
            Numpad3: 99,
            Numpad4: 100,
            Numpad5: 101,
            Numpad6: 102,
            Numpad7: 103,
            Numpad8: 104,
            Numpad9: 105,
            NumpadMultiply: 106,
            NumpadAdd: 107,
            NumpadSubtract: 109,
            NumpadDecimal: 110,
            NumpadDivide: 111,
            NumpadEqual: 187,
            Backquote: 192,
            BracketLeft: 219,
            BracketRight: 221,
            Backslash: 220,
            Semicolon: 186,
            Quote: 222,
            Space: 32,
            Equal: 187,
            Comma: 188,
            Minus: 189,
            Period: 190,
            Slash: 191
        }
    }
        , {}],
    74: [function (e, t, i) {
        "use strict";
        t.exports = {
            BACKSPACE: 8,
            TAB: 9,
            ENTER: 13,
            SHIFT: 16,
            CONTROL: 17,
            ALT: 18,
            COMMAND: 91,
            CAPSLOCK: 20,
            ESCAPE: 27,
            PAGE_UP: 33,
            PAGE_DOWN: 34,
            END: 35,
            HOME: 36,
            ARROW_LEFT: 37,
            ARROW_UP: 38,
            ARROW_RIGHT: 39,
            ARROW_DOWN: 40,
            DELETE: 46,
            ZERO: 48,
            ONE: 49,
            TWO: 50,
            THREE: 51,
            FOUR: 52,
            FIVE: 53,
            SIX: 54,
            SEVEN: 55,
            EIGHT: 56,
            NINE: 57,
            A: 65,
            B: 66,
            C: 67,
            D: 68,
            E: 69,
            F: 70,
            G: 71,
            H: 72,
            I: 73,
            J: 74,
            K: 75,
            L: 76,
            M: 77,
            N: 78,
            O: 79,
            P: 80,
            Q: 81,
            R: 82,
            S: 83,
            T: 84,
            U: 85,
            V: 86,
            W: 87,
            X: 88,
            Y: 89,
            Z: 90,
            NUMPAD_ZERO: 96,
            NUMPAD_ONE: 97,
            NUMPAD_TWO: 98,
            NUMPAD_THREE: 99,
            NUMPAD_FOUR: 100,
            NUMPAD_FIVE: 101,
            NUMPAD_SIX: 102,
            NUMPAD_SEVEN: 103,
            NUMPAD_EIGHT: 104,
            NUMPAD_NINE: 105,
            NUMPAD_ASTERISK: 106,
            NUMPAD_PLUS: 107,
            NUMPAD_DASH: 109,
            NUMPAD_DOT: 110,
            NUMPAD_SLASH: 111,
            NUMPAD_EQUALS: 187,
            TICK: 192,
            LEFT_BRACKET: 219,
            RIGHT_BRACKET: 221,
            BACKSLASH: 220,
            SEMICOLON: 186,
            APOSTROPHE: 222,
            SPACEBAR: 32,
            CLEAR: 12,
            COMMA: 188,
            DOT: 190,
            SLASH: 191
        }
    }
        , {}],
    75: [function (e, t, i) {
        "use strict";
        var n = e("@babel/runtime/helpers/interopRequireDefault");
        Object.defineProperty(i, "__esModule", {
            value: !0
        }),
            i.default = void 0;
        var r = n(e("@babel/runtime/helpers/classCallCheck"))
            , o = n(e("@babel/runtime/helpers/createClass"))
            , s = n(e("@babel/runtime/helpers/possibleConstructorReturn"))
            , a = n(e("@babel/runtime/helpers/getPrototypeOf"))
            , l = n(e("@babel/runtime/helpers/assertThisInitialized"))
            , c = n(e("@babel/runtime/helpers/inherits"))
            , u = n(e("@marcom/ac-event-emitter-micro/src/ac-event-emitter-micro/EventEmitterMicro"))
            , h = n(e("@marcom/ac-dom-nodes/isNode"))
            , d = n(e("./Model"))
            , p = n(e("./mixins/Setup"))
            , f = n(e("./mixins/Elements"))
            , m = n(e("./mixins/AutoMount"));
        function _(e, t, i) {
            return t = (0,
                a.default)(t),
                (0,
                    s.default)(e, function () {
                        try {
                            var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () { }))
                        } catch (e) { }
                        return function () {
                            return !!e
                        }()
                    }() ? Reflect.construct(t, i || [], (0,
                        a.default)(e).constructor) : t.apply(e, i))
        }
        var v = ["beforeCreate", "created", "beforeMount", "mounted", "onWillOpen", "onOpen", "onWillClose", "onClose", "onResizeImmediate", "onBreakpointChange", "onResizeDebounced", "destroy"]
            , b = {
                attributes: {}
            }
            , y = function (e) {
                function t(e) {
                    var i, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : b;
                    return (0,
                        r.default)(this, t),
                        (i = _(this, t, [n])).elements = {},
                        i.elements.content = e,
                        i.options = n,
                        i.opened = !1,
                        i.model = Object.assign({}, JSON.parse(JSON.stringify(d.default))),
                        i.templates = {},
                        v.forEach(function (e) {
                            i[e] = function () {
                                for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
                                    n[r] = arguments[r];
                                i["__".concat(e)] && i["__".concat(e)].forEach(function (e) {
                                    return e.apply((0,
                                        l.default)(i), n)
                                })
                            }
                        }),
                        i._bindEvents(),
                        ["beforeCreate", "created", "beforeMount"].forEach(function (e) {
                            return i[e](n)
                        }),
                        i
                }
                return (0,
                    c.default)(t, e),
                    (0,
                        o.default)(t, [{
                            key: "appendContent",
                            value: function (e, t) {
                                (0,
                                    h.default)(e) && (t = t && (0,
                                        h.default)(t) ? t : this.elements.contentContainer).appendChild(e)
                            }
                        }, {
                            key: "removeContent",
                            value: function (e) {
                                e ? (this.elements.container.contains(e) && e.remove(),
                                    this.trigger(this.model.Events.CONTENT_REMOVED)) : this._emptyContent()
                            }
                        }, {
                            key: "scrollToModalTop",
                            value: function () {
                                this.elements.container.scrollTop = 0
                            }
                        }, {
                            key: "_emptyContent",
                            value: function () {
                                this.elements.contentContainer.innerHTML = ""
                            }
                        }, {
                            key: "_bindEvents",
                            value: function () {
                                this.on(this.model.Events.WILLOPEN, this.onWillOpen),
                                    this.on(this.model.Events.OPEN, this.onOpen),
                                    this.on(this.model.Events.WILLCLOSE, this.onWillClose),
                                    this.on(this.model.Events.CLOSE, this.onClose)
                            }
                        }, {
                            key: "_releaseEvents",
                            value: function () {
                                this.off(this.model.Events.WILLOPEN, this.onWillOpen),
                                    this.off(this.model.Events.OPEN, this.onOpen),
                                    this.off(this.model.Events.WILLCLOSE, this.onwillClose),
                                    this.off(this.model.Events.CLOSE, this.onClose)
                            }
                        }], [{
                            key: "withMixins",
                            value: function () {
                                for (var e = function (e) {
                                    function t() {
                                        return (0,
                                            r.default)(this, t),
                                            _(this, t, arguments)
                                    }
                                    return (0,
                                        c.default)(t, e),
                                        (0,
                                            o.default)(t)
                                }(t), i = e.prototype, n = arguments.length, s = new Array(n), a = 0; a < n; a++)
                                    s[a] = arguments[a];
                                return [p.default].concat(s, [m.default, f.default]).forEach(function (e) {
                                    for (var t in e)
                                        v.includes(t) ? (i["__".concat(t)] = i["__".concat(t)] || [],
                                            i["__".concat(t)].push(e[t])) : i[t] = e[t]
                                }),
                                    e
                            }
                        }]),
                    t
            }(u.default);
        i.default = y
    }
        , {
        "./Model": 76,
        "./mixins/AutoMount": 78,
        "./mixins/Elements": 82,
        "./mixins/Setup": 92,
        "@babel/runtime/helpers/assertThisInitialized": 4,
        "@babel/runtime/helpers/classCallCheck": 5,
        "@babel/runtime/helpers/createClass": 6,
        "@babel/runtime/helpers/getPrototypeOf": 8,
        "@babel/runtime/helpers/inherits": 9,
        "@babel/runtime/helpers/interopRequireDefault": 10,
        "@babel/runtime/helpers/possibleConstructorReturn": 13,
        "@marcom/ac-dom-nodes/isNode": 48,
        "@marcom/ac-event-emitter-micro/src/ac-event-emitter-micro/EventEmitterMicro": 67
    }],
    76: [function (e, t, i) {
        "use strict";
        var n = e("@babel/runtime/helpers/interopRequireDefault");
        Object.defineProperty(i, "__esModule", {
            value: !0
        }),
            i.default = void 0;
        var r = n(e("@marcom/ac-keyboard/keyMap"))
            , o = n(e("./templates/Standard"))
            , s = n(e("./templates/CloseButton"));
        i.default = {
            PageOverlay: {
                ClassNames: ["modal-page-overlay"]
            },
            FullBleed: {
                ClassNames: ["modal-full-bleed"]
            },
            Animating: {
                Container: {
                    ClassNames: ["modal-animating"]
                }
            },
            Open: {
                Document: {
                    ClassNames: ["has-modal"]
                },
                Container: {
                    ClassNames: ["modal-open"]
                }
            },
            Close: {
                Selector: "[data-modal-close]"
            },
            Elements: {
                container: {
                    Attributes: {
                        class: "modal"
                    },
                    Template: o.default
                },
                contentContainer: {
                    Selector: "[data-modal-element-content-container]"
                },
                closeButton: {
                    Attributes: {
                        class: "modal-close-button",
                        "data-modal-close": "",
                        "aria-label": "Close"
                    },
                    ParentSelector: "[data-modal-close-button-parent]",
                    Template: s.default
                },
                closeIcon: {
                    Attributes: {
                        class: "modal-close-icon",
                        "data-modal-close": ""
                    }
                }
            },
            DialogRole: {
                Selector: "[data-modal-element-overlay]",
                Attributes: {
                    "aria-modal": "true",
                    role: "dialog",
                    tabindex: "-1",
                    "aria-hidden": "true"
                }
            },
            Keyboard: {
                close: {
                    keys: [r.default.ESCAPE]
                },
                open: {
                    keys: []
                }
            },
            Events: {
                CONTENT_APPENDED: "contentappended",
                RENDERED: "rendered",
                WILLOPEN: "willopen",
                OPEN: "open",
                WILLCLOSE: "willclose",
                CLOSE: "close",
                CONTENT_REMOVED: "contentremoved"
            }
        }
    }
        , {
        "./templates/CloseButton": 93,
        "./templates/Standard": 94,
        "@babel/runtime/helpers/interopRequireDefault": 10,
        "@marcom/ac-keyboard/keyMap": 74
    }],
    77: [function (e, t, i) {
        "use strict";
        Object.defineProperty(i, "__esModule", {
            value: !0
        }),
            i.default = void 0;
        i.default = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.12,10l4.07-4.06a1.5,1.5,0,1,0-2.11-2.12L10,7.88,5.94,3.81A1.5,1.5,0,1,0,3.82,5.93L7.88,10,3.81,14.06a1.5,1.5,0,0,0,0,2.12,1.51,1.51,0,0,0,2.13,0L10,12.12l4.06,4.07a1.45,1.45,0,0,0,1.06.44,1.5,1.5,0,0,0,1.06-2.56Z"/></svg>'
    }
        , {}],
    78: [function (e, t, i) {
        "use strict";
        Object.defineProperty(i, "__esModule", {
            value: !0
        }),
            i.default = void 0;
        i.default = {
            created: function () {
                this.options.gum || this._isVue || (this.anim ? (this.anim.on(this.anim.model.PageEvents.ON_RESIZE_IMMEDIATE, this.onResizeImmediate),
                    this.anim.on(this.anim.model.PageEvents.ON_RESIZE_DEBOUNCED, this.onResizeDebounced),
                    this.anim.on(this.anim.model.PageEvents.ON_BREAKPOINT_CHANGE, this.onBreakpointChange)) : (window.addEventListener("resize", this.onResizeImmediate),
                        this.viewportEmitterMicro.on(this.viewportEmitterMicro.CHANGE_EVENTS.VIEWPORT, this.onBreakpointChange)),
                    this._mountedRaf = requestAnimationFrame(this.mounted))
            },
            onResizeImmediate: function () {
                this.anim || (window.clearTimeout(this._resizeTimeout),
                    this._resizeTimeout = window.setTimeout(this.onResizeDebounced, 250))
            },
            destroy: function () {
                cancelAnimationFrame(this._mountedRaf),
                    this.anim ? (this.anim.off(this.anim.model.PageEvents.ON_RESIZE_IMMEDIATE, this.onResizeImmediate),
                        this.anim.off(this.anim.model.PageEvents.ON_RESIZE_DEBOUNCED, this.onResizeDebounced),
                        this.anim.off(this.anim.model.PageEvents.ON_BREAKPOINT_CHANGE, this.onBreakpointChange)) : (window.removeEventListener("resize", this.onResizeImmediate),
                            this.viewportEmitterMicro.off(this.viewportEmitterMicro.CHANGE_EVENTS.VIEWPORT, this.onBreakpointChange))
            }
        }
    }
        , {}],
    79: [function (e, t, i) {
        "use strict";
        var n = e("@babel/runtime/helpers/interopRequireDefault");
        Object.defineProperty(i, "__esModule", {
            value: !0
        }),
            i.default = void 0;
        var r = n(e("@babel/runtime/helpers/toConsumableArray"));
        i.default = {
            created: function () {
                this.close = this.close.bind(this)
            },
            onWillOpen: function () {
                var e;
                this._attachCloseEvents(),
                    (e = this.elements.container.classList).add.apply(e, (0,
                        r.default)(this.model.Animating.Container.ClassNames))
            },
            onOpen: function () {
                var e;
                (e = this.elements.container.classList).remove.apply(e, (0,
                    r.default)(this.model.Animating.Container.ClassNames))
            },
            onWillClose: function () {
                var e, t, i;
                this._removeCloseEvents(),
                    (e = document.documentElement.classList).remove.apply(e, (0,
                        r.default)(this.model.Open.Document.ClassNames)),
                    (t = this.elements.container.classList).remove.apply(t, (0,
                        r.default)(this.model.Open.Container.ClassNames)),
                    (i = this.elements.container.classList).add.apply(i, (0,
                        r.default)(this.model.Animating.Container.ClassNames))
            },
            onClose: function () {
                var e;
                (e = this.elements.container.classList).remove.apply(e, (0,
                    r.default)(this.model.Animating.Container.ClassNames))
            },
            mounted: function () {
                this.close.elements = Array.from(document.querySelectorAll(this.model.Close.Selector))
            },
            destroy: function () {
                this.close()
            },
            close: function (e) {
                var t = this;
                if (this.opened && (!e || "click" !== e.type || this.close.elements.includes(e.target))) {
                    var i = function e(i, n) {
                        (n || i && i.target === i.currentTarget) && (t.trigger(t.model.Events.CLOSE),
                            t.elements.container.removeEventListener("animationend", e),
                            t.elements.container.removeEventListener("animationcancel", e),
                            t.elements.container.removeEventListener("transitionend", e),
                            t.elements.container.removeEventListener("transitioncancel", e))
                    };
                    this.trigger(this.model.Events.WILLCLOSE),
                        this.elements.container.getAnimations().length ? (this.elements.container.addEventListener("animationend", i),
                            this.elements.container.addEventListener("animationcancel", i),
                            this.elements.container.addEventListener("transitionend", i),
                            this.elements.container.addEventListener("transitioncancel", i)) : i(null, !0)
                }
            },
            _removeCloseEvents: function () {
                this.elements.container && this.elements.container.removeEventListener("click", this.close)
            },
            _attachCloseEvents: function () {
                this.elements.container && this.elements.container.addEventListener("click", this.close)
            }
        }
    }
        , {
        "@babel/runtime/helpers/interopRequireDefault": 10,
        "@babel/runtime/helpers/toConsumableArray": 16
    }],
    80: [function (e, t, i) {
        "use strict";
        Object.defineProperty(i, "__esModule", {
            value: !0
        }),
            i.default = void 0;
        var n = e("./Mixins");
        i.default = [n.Close, n.CloseButton]
    }
        , {
        "./Mixins": 87
    }],
    81: [function (e, t, i) {
        "use strict";
        Object.defineProperty(i, "__esModule", {
            value: !0
        }),
            i.default = void 0;
        i.default = {
            created: function () {
                this.onCloseButtonClick = this.onCloseButtonClick.bind(this)
            },
            beforeMount: function () {
                this._setCloseAriaLabel(),
                    this.appendCloseButton()
            },
            mounted: function () {
                this.elements.closeButton.addEventListener("click", this.onCloseButtonClick)
            },
            destroy: function () {
                this.elements.closeButton.removeEventListener("click", this.onCloseButtonClick)
            },
            appendCloseButton: function () {
                (this.elements.container.querySelector(this.model.Elements.closeButton.ParentSelector) || this.elements.container).appendChild(this.elements.closeButton)
            },
            onCloseButtonClick: function (e) {
                this.close(e)
            },
            _setCloseAriaLabel: function () {
                if (this.elements.content && this.elements.content.dataset.modalCloseLabel) {
                    var e = this.elements.content.dataset.modalCloseLabel;
                    this.elements.closeButton.setAttribute("aria-label", e)
                }
            }
        }
    }
        , {}],
    82: [function (e, t, i) {
        "use strict";
        var n = e("@babel/runtime/helpers/interopRequireDefault");
        Object.defineProperty(i, "__esModule", {
            value: !0
        }),
            i.default = void 0;
        var r = n(e("@babel/runtime/helpers/toConsumableArray"));
        i.default = {
            created: function () {
                this._createModalElements()
            },
            beforeMount: function () {
                this._setDialogAriaLabel(),
                    this.appendModalElements()
            },
            destroy: function () {
                for (var e in document.body.removeChild(this.elements.container),
                    this._releaseEvents(),
                    this)
                    Object.prototype.hasOwnProperty.call(this, e) && (this[e] = null)
            },
            getModalElementKey: function (e) {
                var t;
                for (var i in e.dataset)
                    if (i.includes("modalElement")) {
                        var n = i.substring("modalElement".length);
                        t = n[0].toLowerCase() + n.slice(1)
                    }
                return t
            },
            appendContentElement: function () {
                this.appendContent(this.elements.content, this.elements.contentContainer),
                    this.trigger(this.model.Events.CONTENT_APPENDED)
            },
            appendModalElements: function () {
                document.body.appendChild(this.elements.container),
                    this.trigger(this.model.Events.RENDERED)
            },
            _createModalElements: function () {
                for (var e in this._createTemplates(),
                    this._createElementsFromTemplate(),
                    this.templates)
                    this._setChildElements(this.elements[e]);
                this._setDialogRoleElement(),
                    this._setElementAttributes(),
                    this.appendContentElement()
            },
            _createTemplates: function () {
                for (var e in this.model.Elements) {
                    var t = this.model.Elements[e].Template;
                    t && !this.templates[e] && (this.templates[e] = t)
                }
            },
            _createElementsFromTemplate: function () {
                for (var e in this.templates)
                    this.elements[e] = (new DOMParser).parseFromString(this.templates[e], "text/html").body.childNodes[0]
            },
            _setChildElements: function (e) {
                var t = this;
                (0,
                    r.default)(e.children).forEach(function (e) {
                        t.getModalElementKey(e) && (t.elements[t.getModalElementKey(e)] = e),
                            t._setChildElements(e)
                    })
            },
            _setDialogRoleElement: function () {
                for (var e in this.dialogRoleElement || (this.dialogRoleElement = this.elements.container.querySelector(this.model.DialogRole.Selector) || this.elements.container),
                    this.model.DialogRole.Attributes)
                    this.dialogRoleElement.setAttribute(e, this.model.DialogRole.Attributes[e])
            },
            _setElementAttributes: function () {
                var e = {}
                    , t = {};
                for (var i in this.model.Elements)
                    this.model.Elements[i].Attributes && (e[i] = this.model.Elements[i].Attributes);
                for (var n in e)
                    for (var r in t[n] = Object.assign({}, e[n], this.options.attributes[n]),
                        this.options.attributes)
                        "undefined" !== t[r] && (t[r] = Object.assign({}, e[r], this.options.attributes[r]));
                for (var o in t)
                    for (var s in t[o]) {
                        var a = t[o][s];
                        if (!this.elements[o])
                            return;
                        switch (s) {
                            case "class":
                                Array.isArray(a) && (a = a.join(" ")),
                                    this.elements[o].className = "".concat(this.elements[o].className, " ").concat(a).trim();
                                break;
                            default:
                                this.elements[o].setAttribute(s, a)
                        }
                    }
            },
            _setDialogAriaLabel: function () {
                if (this.elements.content && this.elements.content.dataset.modalDialogLabel) {
                    var e = this.elements.content.dataset.modalDialogLabel;
                    this.dialogRoleElement.setAttribute("aria-label", e)
                } else
                    this.dialogRoleElement.hasAttribute("aria-label") || this.dialogRoleElement.hasAttribute("aria-labelledby") || this.dialogRoleElement.setAttribute("aria-label", "Modal")
            }
        }
    }
        , {
        "@babel/runtime/helpers/interopRequireDefault": 10,
        "@babel/runtime/helpers/toConsumableArray": 16
    }],
    83: [function (e, t, i) {
        "use strict";
        var n = e("@babel/runtime/helpers/interopRequireDefault");
        Object.defineProperty(i, "__esModule", {
            value: !0
        }),
            i.default = void 0;
        var r = n(e("@marcom/ac-accessibility/CircularTab"))
            , o = n(e("@marcom/ac-accessibility/helpers/TabManager"));
        i.default = {
            created: function () {
                this.scrollToModalTop = this.scrollToModalTop.bind(this)
            },
            mounted: function () {
                o.default.getTabbableElements(this.dialogRoleElement).length && (this._circularTab = new r.default(this.dialogRoleElement))
            },
            onOpen: function () {
                this._giveModalFocus()
            },
            onWillClose: function () {
                this._removeModalFocus()
            },
            destroy: function () {
                clearTimeout(this._focusTimeout),
                    this._removeModalFocus(),
                    this._circularTab && this._circularTab.destroy()
            },
            _giveModalFocus: function () {
                var e = this;
                this.dialogRoleElement.removeAttribute("aria-hidden"),
                    this.elements.container.classList.add("modal-touch-lock"),
                    this._activeElement = document.activeElement,
                    this._circularTab && this._circularTab.start(!0),
                    this.elements.container.addEventListener("scroll", this.scrollToModalTop),
                    this._focusTimeout = setTimeout(function () {
                        e.dialogRoleElement.focus({
                            preventScroll: !0
                        }),
                            requestAnimationFrame(function () {
                                e.elements.container.removeEventListener("scroll", e.scrollToModalTop),
                                    e.elements.container.classList.remove("modal-touch-lock")
                            })
                    }, 300)
            },
            _removeModalFocus: function () {
                this._circularTab && this._circularTab.stop(),
                    this.dialogRoleElement.setAttribute("aria-hidden", "true"),
                    this.elements.container.removeEventListener("scroll", this.scrollToModalTop),
                    this._activeElement && (this._activeElement.focus(),
                        this._activeElement = null)
            }
        }
    }
        , {
        "@babel/runtime/helpers/interopRequireDefault": 10,
        "@marcom/ac-accessibility/CircularTab": 21,
        "@marcom/ac-accessibility/helpers/TabManager": 22
    }],
    84: [function (e, t, i) {
        "use strict";
        var n = e("@babel/runtime/helpers/interopRequireDefault");
        Object.defineProperty(i, "__esModule", {
            value: !0
        }),
            i.default = void 0;
        var r = n(e("@babel/runtime/helpers/toConsumableArray"));
        i.default = {
            beforeCreate: function () {
                this.model.Open.Document.ClassNames.push("has-modal-full-bleed")
            },
            beforeMount: function () {
                var e;
                (e = this.elements.container.classList).add.apply(e, (0,
                    r.default)(this.model.FullBleed.ClassNames))
            },
            destroy: function () {
                var e;
                (e = this.elements.container.classList).remove.apply(e, (0,
                    r.default)(this.model.FullBleed.ClassNames))
            }
        }
    }
        , {
        "@babel/runtime/helpers/interopRequireDefault": 10,
        "@babel/runtime/helpers/toConsumableArray": 16
    }],
    85: [function (e, t, i) {
        "use strict";
        var n = e("@babel/runtime/helpers/interopRequireDefault");
        Object.defineProperty(i, "__esModule", {
            value: !0
        }),
            i.default = void 0;
        var r = n(e("@babel/runtime/helpers/toConsumableArray"))
            , o = e("./Mixins");
        i.default = [].concat((0,
            r.default)(o.CloseBundle), [o.Focus, o.Keyboard, o.Open, o.FullBleed, o.ScrollPosition])
    }
        , {
        "./Mixins": 87,
        "@babel/runtime/helpers/interopRequireDefault": 10,
        "@babel/runtime/helpers/toConsumableArray": 16
    }],
    86: [function (e, t, i) {
        "use strict";
        var n = e("@marcom/ac-keyboard");
        t.exports = {
            beforeCreate: function () {
                this._keysToOpen = this.model.Keyboard.open.keys,
                    this._keysToClose = this.model.Keyboard.close.keys,
                    this._enabledKeysToOpen = [],
                    this._enabledKeysToClose = []
            },
            onWillOpen: function () {
                this._keysToOpen.forEach(this.disableKeyToOpen, this),
                    this._keysToClose.forEach(this.enableKeyToClose, this)
            },
            onWillClose: function () {
                this._keysToOpen.forEach(this.enableKeyToOpen, this),
                    this._keysToClose.forEach(this.disableKeyToClose, this)
            },
            destroy: function () {
                this._keysToOpen.forEach(this.disableKeyToOpen, this),
                    this._keysToClose.forEach(this.disableKeyToClose, this)
            },
            addKeyToOpen: function (e) {
                -1 === this._keysToOpen.indexOf(e) && (this._keysToOpen.push(e),
                    this.enableKeyToOpen(e))
            },
            addKeyToClose: function (e) {
                -1 === this._keysToClose.indexOf(e) && (this._keysToClose.push(e),
                    this.enableKeyToClose(e))
            },
            removeKeyToOpen: function (e) {
                var t = this._keysToOpen.indexOf(e);
                -1 !== t && (this._keysToOpen.splice(t, 1),
                    this.disableKeyToOpen(e))
            },
            removeAllKeysToOpen: function () {
                this._keysToOpen.forEach(this.disableKeyToOpen, this),
                    this._keysToOpen.splice(0, this._keysToOpen.length)
            },
            removeKeyToClose: function (e) {
                var t = this._keysToClose.indexOf(e);
                -1 !== t && (this._keysToClose.splice(t, 1),
                    this.disableKeyToClose(e))
            },
            removeAllKeysToClose: function () {
                this._keysToClose.forEach(this.disableKeyToClose, this),
                    this._keysToClose.splice(0, this._keysToClose.length)
            },
            enableKeyToOpen: function (e) {
                -1 === this._enabledKeysToOpen.indexOf(e) && (n.onUp(e, this.open, this),
                    this._enabledKeysToOpen.push(e))
            },
            enableKeyToClose: function (e) {
                -1 === this._enabledKeysToClose.indexOf(e) && (n.onUp(e, this.close, this),
                    this._enabledKeysToClose.push(e))
            },
            disableKeyToOpen: function (e) {
                var t = this._enabledKeysToOpen.indexOf(e);
                -1 !== t && (n.offUp(e, this.open, this),
                    this._enabledKeysToOpen.splice(t, 1))
            },
            disableKeyToClose: function (e) {
                var t = this._enabledKeysToClose.indexOf(e);
                -1 !== t && (n.offUp(e, this.close, this),
                    this._enabledKeysToClose.splice(t, 1))
            }
        }
    }
        , {
        "@marcom/ac-keyboard": 71
    }],
    87: [function (e, t, i) {
        "use strict";
        var n = e("@babel/runtime/helpers/interopRequireDefault");
        Object.defineProperty(i, "__esModule", {
            value: !0
        }),
            Object.defineProperty(i, "Close", {
                enumerable: !0,
                get: function () {
                    return r.default
                }
            }),
            Object.defineProperty(i, "CloseBundle", {
                enumerable: !0,
                get: function () {
                    return d.default
                }
            }),
            Object.defineProperty(i, "CloseButton", {
                enumerable: !0,
                get: function () {
                    return o.default
                }
            }),
            Object.defineProperty(i, "Focus", {
                enumerable: !0,
                get: function () {
                    return s.default
                }
            }),
            Object.defineProperty(i, "FullBleed", {
                enumerable: !0,
                get: function () {
                    return a.default
                }
            }),
            Object.defineProperty(i, "FullBleedBundle", {
                enumerable: !0,
                get: function () {
                    return p.default
                }
            }),
            Object.defineProperty(i, "Keyboard", {
                enumerable: !0,
                get: function () {
                    return l.default
                }
            }),
            Object.defineProperty(i, "Open", {
                enumerable: !0,
                get: function () {
                    return c.default
                }
            }),
            Object.defineProperty(i, "PageOverlay", {
                enumerable: !0,
                get: function () {
                    return u.default
                }
            }),
            Object.defineProperty(i, "PageOverlayBundle", {
                enumerable: !0,
                get: function () {
                    return f.default
                }
            }),
            Object.defineProperty(i, "ScrollPosition", {
                enumerable: !0,
                get: function () {
                    return h.default
                }
            });
        var r = n(e("./Close"))
            , o = n(e("./CloseButton"))
            , s = n(e("./Focus"))
            , a = n(e("./FullBleed"))
            , l = n(e("./Keyboard"))
            , c = n(e("./Open"))
            , u = n(e("./PageOverlay"))
            , h = n(e("./ScrollPosition"))
            , d = n(e("./CloseBundle"))
            , p = n(e("./FullBleedBundle"))
            , f = n(e("./PageOverlayBundle"))
    }
        , {
        "./Close": 79,
        "./CloseBundle": 80,
        "./CloseButton": 81,
        "./Focus": 83,
        "./FullBleed": 84,
        "./FullBleedBundle": 85,
        "./Keyboard": 86,
        "./Open": 88,
        "./PageOverlay": 89,
        "./PageOverlayBundle": 90,
        "./ScrollPosition": 91,
        "@babel/runtime/helpers/interopRequireDefault": 10
    }],
    88: [function (e, t, i) {
        "use strict";
        var n = e("@babel/runtime/helpers/interopRequireDefault");
        Object.defineProperty(i, "__esModule", {
            value: !0
        }),
            i.default = void 0;
        var r = n(e("@babel/runtime/helpers/toConsumableArray"));
        i.default = {
            created: function () {
                this.open = this.open.bind(this)
            },
            onWillOpen: function () {
                var e, t;
                (e = document.documentElement.classList).add.apply(e, (0,
                    r.default)(this.model.Open.Document.ClassNames)),
                    (t = this.elements.container.classList).add.apply(t, (0,
                        r.default)(this.model.Open.Container.ClassNames)),
                    this.scrollToModalTop()
            },
            open: function () {
                this.opened || (this.trigger(this.model.Events.WILLOPEN),
                    this.trigger(this.model.Events.OPEN))
            }
        }
    }
        , {
        "@babel/runtime/helpers/interopRequireDefault": 10,
        "@babel/runtime/helpers/toConsumableArray": 16
    }],
    89: [function (e, t, i) {
        "use strict";
        var n = e("@babel/runtime/helpers/interopRequireDefault");
        Object.defineProperty(i, "__esModule", {
            value: !0
        }),
            i.default = void 0;
        var r = n(e("@babel/runtime/helpers/toConsumableArray"));
        i.default = {
            beforeCreate: function () {
                this.model.Open.Document.ClassNames.push("has-modal-page-overlay"),
                    this._scrollBarWidth = 0
            },
            beforeMount: function () {
                var e;
                (e = this.elements.container.classList).add.apply(e, (0,
                    r.default)(this.model.PageOverlay.ClassNames))
            },
            mounted: function () {
                this._saveScrollBarWidth()
            },
            onResizeDebounced: function () {
                this.opened || this._saveScrollBarWidth()
            },
            onWillOpen: function () {
                document.documentElement.style.setProperty("--modal-scrollbar-buffer", this._scrollBarWidth)
            },
            onClose: function () {
                document.documentElement.style.removeProperty("--modal-scrollbar-buffer")
            },
            destroy: function () {
                var e;
                (e = this.elements.container.classList).remove.apply(e, (0,
                    r.default)(this.model.PageOverlay.ClassNames))
            },
            _saveScrollBarWidth: function () {
                this._scrollBarWidth = "".concat(window.innerWidth - document.body.clientWidth, "px")
            }
        }
    }
        , {
        "@babel/runtime/helpers/interopRequireDefault": 10,
        "@babel/runtime/helpers/toConsumableArray": 16
    }],
    90: [function (e, t, i) {
        "use strict";
        var n = e("@babel/runtime/helpers/interopRequireDefault");
        Object.defineProperty(i, "__esModule", {
            value: !0
        }),
            i.default = void 0;
        var r = n(e("@babel/runtime/helpers/toConsumableArray"))
            , o = e("./Mixins");
        i.default = [].concat((0,
            r.default)(o.CloseBundle), [o.Focus, o.Keyboard, o.Open, o.PageOverlay, o.ScrollPosition])
    }
        , {
        "./Mixins": 87,
        "@babel/runtime/helpers/interopRequireDefault": 10,
        "@babel/runtime/helpers/toConsumableArray": 16
    }],
    91: [function (e, t, i) {
        "use strict";
        Object.defineProperty(i, "__esModule", {
            value: !0
        }),
            i.default = void 0;
        i.default = {
            created: function () {
                this._scrollX = 0,
                    this._scrollY = 0
            },
            onWillOpen: function () {
                this._saveScrollPosition()
            },
            onClose: function () {
                this._restoreScrollPosition()
            },
            _saveScrollPosition: function () {
                this._scrollX = document.documentElement.scrollLeft,
                    this._scrollY = document.documentElement.scrollTop
            },
            _restoreScrollPosition: function () {
                window.scrollTo(this._scrollX, this._scrollY)
            }
        }
    }
        , {}],
    92: [function (e, t, i) {
        "use strict";
        var n = e("@babel/runtime/helpers/interopRequireDefault");
        Object.defineProperty(i, "__esModule", {
            value: !0
        }),
            i.default = void 0;
        var r = n(e("@marcom/viewport-emitter-micro"));
        i.default = {
            beforeCreate: function () {
                document.body._animInfo ? (this.anim = document.body._animInfo.group.anim,
                    this._setViewport(this.anim.model.pageMetrics)) : (this.viewportEmitterMicro = new r.default,
                        this.viewportEmitterMicro.CHANGE_EVENTS = r.default.CHANGE_EVENTS,
                        this._setViewport(this.viewportEmitterMicro))
            },
            onBreakpointChange: function (e) {
                this._setViewport(e),
                    this._setPreviousViewport(e)
            },
            onOpen: function () {
                this.opened = !0
            },
            onClose: function () {
                this.opened = !1
            },
            _setViewport: function (e) {
                this._viewport = this.anim ? this._getValidViewport(e.breakpoint) : this._getValidViewport(e.viewport)
            },
            _setPreviousViewport: function (e) {
                this._previousViewport = this.anim ? this._getValidViewport(e.previousBreakpoint) : this._getValidViewport(e.oldViewport)
            },
            _getValidViewport: function (e) {
                var t = {
                    X: "L",
                    L: "L",
                    M: "M",
                    S: "S"
                };
                if (!Object.keys(t).includes(e))
                    throw "The viewport ".concat(e, " is not valid. Valid viewports are: ").concat(Object.keys(t));
                return t[e] || ""
            }
        }
    }
        , {
        "@babel/runtime/helpers/interopRequireDefault": 10,
        "@marcom/viewport-emitter-micro": 133
    }],
    93: [function (e, t, i) {
        "use strict";
        var n = e("@babel/runtime/helpers/interopRequireDefault");
        Object.defineProperty(i, "__esModule", {
            value: !0
        }),
            i.default = void 0;
        var r = n(e("../assets/CloseSvg.js"));
        i.default = "<button data-modal-element-close-button>\n\t<span data-modal-element-close-icon>".concat(r.default, "</span>\n</button>")
    }
        , {
        "../assets/CloseSvg.js": 77,
        "@babel/runtime/helpers/interopRequireDefault": 10
    }],
    94: [function (e, t, i) {
        "use strict";
        Object.defineProperty(i, "__esModule", {
            value: !0
        }),
            i.default = void 0;
        i.default = '<div class="modal" data-modal-element-container data-modal-close>\n\t<div class="modal-overlay-container" data-modal-element-overlay-container data-modal-close>\n\t\t<div class="modal-overlay" data-modal-element-overlay data-modal-close-button-parent>\n\t\t\t<div class="modal-content-container" data-modal-element-content-container></div>\n\t\t</div>\n\t</div>\n</div>'
    }
        , {}],
    95: [function (e, t, i) {
        "use strict";
        t.exports = {
            clone: e("./clone"),
            create: e("./create"),
            defaults: e("./defaults"),
            extend: e("./extend"),
            getPrototypeOf: e("./getPrototypeOf"),
            isDate: e("./isDate"),
            isEmpty: e("./isEmpty"),
            isRegExp: e("./isRegExp"),
            toQueryParameters: e("./toQueryParameters")
        }
    }
        , {
        "./clone": 96,
        "./create": 97,
        "./defaults": 98,
        "./extend": 99,
        "./getPrototypeOf": 100,
        "./isDate": 101,
        "./isEmpty": 102,
        "./isRegExp": 103,
        "./toQueryParameters": 104
    }],
    96: [function (e, t, i) {
        "use strict";
        var n = e("@babel/runtime/helpers/interopRequireDefault")(e("@babel/runtime/helpers/typeof"));
        e("@marcom/ac-polyfills/Array/isArray");
        var r = e("./extend")
            , o = Object.prototype.hasOwnProperty;
        t.exports = function (e, t) {
            return t ? function e(t, i) {
                var r;
                for (r in i)
                    o.call(i, r) && (null === i[r] ? t[r] = null : "object" === (0,
                        n.default)(i[r]) ? (t[r] = Array.isArray(i[r]) ? [] : {},
                            e(t[r], i[r])) : t[r] = i[r]);
                return t
            }({}, e) : r({}, e)
        }
    }
        , {
        "./extend": 99,
        "@babel/runtime/helpers/interopRequireDefault": 10,
        "@babel/runtime/helpers/typeof": 19,
        "@marcom/ac-polyfills/Array/isArray": 105
    }],
    97: [function (e, t, i) {
        "use strict";
        var n = e("@babel/runtime/helpers/interopRequireDefault")(e("@babel/runtime/helpers/typeof"))
            , r = function () { };
        t.exports = function (e) {
            if (arguments.length > 1)
                throw new Error("Second argument not supported");
            if (null === e || "object" !== (0,
                n.default)(e))
                throw new TypeError("Object prototype may only be an Object.");
            return "function" == typeof Object.create ? Object.create(e) : (r.prototype = e,
                new r)
        }
    }
        , {
        "@babel/runtime/helpers/interopRequireDefault": 10,
        "@babel/runtime/helpers/typeof": 19
    }],
    98: [function (e, t, i) {
        "use strict";
        var n = e("@babel/runtime/helpers/interopRequireDefault")(e("@babel/runtime/helpers/typeof"))
            , r = e("./extend");
        t.exports = function (e, t) {
            if ("object" !== (0,
                n.default)(e))
                throw new TypeError("defaults: must provide a defaults object");
            if (t = t || {},
                "object" !== (0,
                    n.default)(t))
                throw new TypeError("defaults: options must be a typeof object");
            return r({}, e, t)
        }
    }
        , {
        "./extend": 99,
        "@babel/runtime/helpers/interopRequireDefault": 10,
        "@babel/runtime/helpers/typeof": 19
    }],
    99: [function (e, t, i) {
        "use strict";
        e("@marcom/ac-polyfills/Array/prototype.forEach");
        var n = Object.prototype.hasOwnProperty;
        t.exports = function () {
            var e, t;
            return e = arguments.length < 2 ? [{}, arguments[0]] : [].slice.call(arguments),
                t = e.shift(),
                e.forEach(function (e) {
                    if (null != e)
                        for (var i in e)
                            n.call(e, i) && (t[i] = e[i])
                }),
                t
        }
    }
        , {
        "@marcom/ac-polyfills/Array/prototype.forEach": 106
    }],
    100: [function (e, t, i) {
        "use strict";
        var n = e("@babel/runtime/helpers/interopRequireDefault")(e("@babel/runtime/helpers/typeof"))
            , r = Object.prototype.hasOwnProperty;
        t.exports = function (e) {
            if (Object.getPrototypeOf)
                return Object.getPrototypeOf(e);
            if ("object" !== (0,
                n.default)(e))
                throw new Error("Requested prototype of a value that is not an object.");
            if ("object" === (0,
                n.default)(this.__proto__))
                return e.__proto__;
            var t, i = e.constructor;
            if (r.call(e, "constructor")) {
                if (t = i,
                    !delete e.constructor)
                    return null;
                i = e.constructor,
                    e.constructor = t
            }
            return i ? i.prototype : null
        }
    }
        , {
        "@babel/runtime/helpers/interopRequireDefault": 10,
        "@babel/runtime/helpers/typeof": 19
    }],
    101: [function (e, t, i) {
        "use strict";
        t.exports = function (e) {
            return "[object Date]" === Object.prototype.toString.call(e)
        }
    }
        , {}],
    102: [function (e, t, i) {
        "use strict";
        var n = e("@babel/runtime/helpers/interopRequireDefault")(e("@babel/runtime/helpers/typeof"))
            , r = Object.prototype.hasOwnProperty;
        t.exports = function (e) {
            var t;
            if ("object" !== (0,
                n.default)(e))
                throw new TypeError("ac-base.Object.isEmpty : Invalid parameter - expected object");
            for (t in e)
                if (r.call(e, t))
                    return !1;
            return !0
        }
    }
        , {
        "@babel/runtime/helpers/interopRequireDefault": 10,
        "@babel/runtime/helpers/typeof": 19
    }],
    103: [function (e, t, i) {
        "use strict";
        t.exports = function (e) {
            return !!window.RegExp && e instanceof RegExp
        }
    }
        , {}],
    104: [function (e, t, i) {
        "use strict";
        var n = e("@babel/runtime/helpers/interopRequireDefault")(e("@babel/runtime/helpers/typeof"))
            , r = e("@marcom/ac-url/joinSearchParams");
        t.exports = function (e) {
            if ("object" !== (0,
                n.default)(e))
                throw new TypeError("toQueryParameters error: argument is not an object");
            return r(e, !1)
        }
    }
        , {
        "@babel/runtime/helpers/interopRequireDefault": 10,
        "@babel/runtime/helpers/typeof": 19,
        "@marcom/ac-url/joinSearchParams": 121
    }],
    105: [function (e, t, i) {
        "use strict";
        Array.isArray || (Array.isArray = function (e) {
            return "[object Array]" === Object.prototype.toString.call(e)
        }
        )
    }
        , {}],
    106: [function (e, t, i) {
        "use strict";
        Array.prototype.forEach || (Array.prototype.forEach = function (e, t) {
            var i, n, r = Object(this);
            if ("function" != typeof e)
                throw new TypeError("No function object passed to forEach.");
            var o = this.length;
            for (i = 0; i < o; i += 1)
                n = r[i],
                    e.call(t, n, i, r)
        }
        )
    }
        , {}],
    107: [function (e, t, i) {
        "use strict";
        Array.prototype.indexOf || (Array.prototype.indexOf = function (e, t) {
            var i = t || 0
                , n = 0;
            if (i < 0 && (i = this.length + t - 1) < 0)
                throw "Wrapped past beginning of array while looking up a negative start index.";
            for (n = 0; n < this.length; n++)
                if (this[n] === e)
                    return n;
            return -1
        }
        )
    }
        , {}],
    108: [function (e, t, i) {
        "use strict";
        !function () {
            var e = Array.prototype.slice;
            try {
                e.call(document.documentElement)
            } catch (t) {
                Array.prototype.slice = function (t, i) {
                    if (i = void 0 !== i ? i : this.length,
                        "[object Array]" === Object.prototype.toString.call(this))
                        return e.call(this, t, i);
                    var n, r, o = [], s = this.length, a = t || 0;
                    a = a >= 0 ? a : s + a;
                    var l = i || s;
                    if (i < 0 && (l = s + i),
                        (r = l - a) > 0)
                        if (o = new Array(r),
                            this.charAt)
                            for (n = 0; n < r; n++)
                                o[n] = this.charAt(a + n);
                        else
                            for (n = 0; n < r; n++)
                                o[n] = this[a + n];
                    return o
                }
            }
        }()
    }
        , {}],
    109: [function (e, t, i) {
        "use strict";
        if (document.createEvent)
            try {
                new window.CustomEvent("click")
            } catch (e) {
                window.CustomEvent = function () {
                    function e(e, t) {
                        t = t || {
                            bubbles: !1,
                            cancelable: !1,
                            detail: void 0
                        };
                        var i = document.createEvent("CustomEvent");
                        return i.initCustomEvent(e, t.bubbles, t.cancelable, t.detail),
                            i
                    }
                    return e.prototype = window.Event.prototype,
                        e
                }()
            }
    }
        , {}],
    110: [function (e, t, i) {
        "use strict";
        var n = e("./utils/eventTypeAvailable")
            , r = e("./shared/camelCasedEventTypes")
            , o = e("./shared/windowFallbackEventTypes")
            , s = e("./shared/prefixHelper")
            , a = {};
        t.exports = function e(t, i) {
            var l, c, u;
            if (i = i || "div",
                t = t.toLowerCase(),
                i in a || (a[i] = {}),
                t in (c = a[i]))
                return c[t];
            if (n(t, i))
                return c[t] = t;
            if (t in r)
                for (u = 0; u < r[t].length; u++)
                    if (l = r[t][u],
                        n(l.toLowerCase(), i))
                        return c[t] = l;
            for (u = 0; u < s.evt.length; u++)
                if (l = s.evt[u] + t,
                    n(l, i))
                    return s.reduce(u),
                        c[t] = l;
            return "window" !== i && o.indexOf(t) ? c[t] = e(t, "window") : c[t] = !1
        }
    }
        , {
        "./shared/camelCasedEventTypes": 111,
        "./shared/prefixHelper": 112,
        "./shared/windowFallbackEventTypes": 113,
        "./utils/eventTypeAvailable": 114
    }],
    111: [function (e, t, i) {
        "use strict";
        t.exports = {
            transitionend: ["webkitTransitionEnd", "MSTransitionEnd"],
            animationstart: ["webkitAnimationStart", "MSAnimationStart"],
            animationend: ["webkitAnimationEnd", "MSAnimationEnd"],
            animationiteration: ["webkitAnimationIteration", "MSAnimationIteration"],
            fullscreenchange: ["MSFullscreenChange"],
            fullscreenerror: ["MSFullscreenError"]
        }
    }
        , {}],
    112: [function (e, t, i) {
        "use strict";
        var n = ["-webkit-", "-moz-", "-ms-"]
            , r = ["Webkit", "Moz", "ms"]
            , o = ["webkit", "moz", "ms"]
            , s = function () {
                this.initialize()
            }
            , a = s.prototype;
        a.initialize = function () {
            this.reduced = !1,
                this.css = n,
                this.dom = r,
                this.evt = o
        }
            ,
            a.reduce = function (e) {
                this.reduced || (this.reduced = !0,
                    this.css = [this.css[e]],
                    this.dom = [this.dom[e]],
                    this.evt = [this.evt[e]])
            }
            ,
            t.exports = new s
    }
        , {}],
    113: [function (e, t, i) {
        "use strict";
        t.exports = ["transitionend", "animationstart", "animationend", "animationiteration"]
    }
        , {}],
    114: [function (e, t, i) {
        "use strict";
        var n = {
            window: window,
            document: document
        };
        t.exports = function (e, t) {
            var i;
            return e = "on" + e,
                t in n || (n[t] = document.createElement(t)),
                e in (i = n[t]) || "setAttribute" in i && (i.setAttribute(e, "return;"),
                    "function" == typeof i[e])
        }
    }
        , {}],
    115: [function (e, t, i) {
        "use strict";
        t.exports = {
            Router: e("./ac-router/Router"),
            History: e("./ac-router/History"),
            Routes: e("@marcom/ac-routes").Routes,
            Route: e("@marcom/ac-routes").Route
        }
    }
        , {
        "./ac-router/History": 116,
        "./ac-router/Router": 117,
        "@marcom/ac-routes": 118
    }],
    116: [function (e, t, i) {
        "use strict";
        var n = e("@marcom/ac-object").create
            , r = e("@marcom/ac-dom-events")
            , o = e("@marcom/ac-event-emitter").EventEmitter;
        function s(e) {
            e = e || {},
                this.history = window.history,
                this.rootStripper = /^\/+|\/+$/g,
                this.root = e.root || "/",
                this.root = ("/" + this.root + "/").replace(this.rootStripper, "/");
            var t = "boolean" != typeof e.resolveInitialHash || e.resolveInitialHash;
            this._pushState = "boolean" != typeof e.pushState || e.pushState,
                this._hashChange = e.hashChange || !1,
                this._setUpdateVars(t),
                e.autoStart && this.start()
        }
        var a = s.prototype = n(o.prototype);
        a._isRoot = function (e) {
            return ("/" + e + "/").replace(this.rootStripper, "/") === this.root
        }
            ,
            a._isPushStateSupported = function () {
                return this.history && this.history.pushState
            }
            ,
            a._isHashChangeSupported = function () {
                return "onhashchange" in window
            }
            ,
            a._setUpdateVars = function (e) {
                if (this._pushState && this._isPushStateSupported())
                    e && this._hashChange && -1 !== window.location.href.indexOf("#") && this.history.pushState({}, document.title, window.location.href.replace("#", "")),
                        this._hashChange = !1;
                else {
                    if (e && this._pushState && this._hashChange && window.location.href.indexOf("#") < 0) {
                        window.location.origin || (window.location.origin = window.location.protocol + "//" + window.location.hostname,
                            window.location.origin += window.location.port ? ":" + window.location.port : "");
                        var t = window.location.href.substr(window.location.origin.length + this.root.length);
                        if (t.length)
                            return void (window.location = window.location.origin + this.root + "#" + t)
                    }
                    this._hashChange && !this._isHashChangeSupported() && (this._interval = 50,
                        this._iframe = document.createElement('<iframe src="javascript:0" tabindex="-1" style="display:none;">'),
                        this._iframe = document.body.appendChild(this._iframe).contentWindow,
                        this._iframe.document.open().close()),
                        this._pushState = !1
                }
            }
            ,
            a._checkUrl = function () {
                var e = this._iframe.location.hash.substr(1);
                0 === e.length && (e = "/"),
                    this.fragment() !== e && (window.location.hash = "#" + e,
                        this._ignoreHashChange = !1,
                        this._handleHashChange())
            }
            ,
            a._handlePopState = function (e) {
                this.trigger("popstate", {
                    fragment: this.fragment()
                })
            }
            ,
            a._handleHashChange = function (e) {
                this._ignoreHashChange ? this._ignoreHashChange = !1 : this.trigger("popstate", {
                    fragment: this.fragment()
                })
            }
            ,
            a.canUpdate = function () {
                return this._pushState || this._hashChange
            }
            ,
            a.start = function () {
                return this.started || !this._pushState && !this._hashChange || (this.started = !0,
                    this._pushState ? (this._handlePopState = this._handlePopState.bind(this),
                        r.addEventListener(window, "popstate", this._handlePopState)) : this._hashChange && (this._isHashChangeSupported() ? (this._handleHashChange = this._handleHashChange.bind(this),
                            r.addEventListener(window, "hashchange", this._handleHashChange)) : (this._iframe.location.hash = this.fragment(),
                                this._checkUrl = this._checkUrl.bind(this),
                                this._checkUrlInterval = setInterval(this._checkUrl, this._interval)))),
                    this.started || !1
            }
            ,
            a.stop = function () {
                this.started && (this.started = !1,
                    this._pushState ? r.removeEventListener(window, "popstate", this._handlePopState) : this._hashChange && (this._isHashChangeSupported() ? r.removeEventListener(window, "hashchange", this._handleHashChange) : this._checkUrlInterval && (clearInterval(this._checkUrlInterval),
                        this._checkUrlInterval = null)))
            }
            ,
            a.navigate = function (e, t) {
                if (!this.started || !this.canUpdate())
                    return !1;
                t = t || {};
                var i = ((this._isRoot(e) ? "" : this.root) + e).replace(/([^:])(\/\/)/g, "$1/");
                return this._pushState ? this.history.pushState(t, document.title, i) : this._hashChange && (this._ignoreHashChange = !0,
                    window.location.hash = "#" + e,
                    this._isHashChangeSupported() || (this._iframe.document.open().close(),
                        this._iframe.location.hash = "#" + e)),
                    !0
            }
            ,
            a.fragment = function () {
                var e = "";
                return this._pushState ? e = window.location.pathname.substr(this.root.length) : this._hashChange && (e = window.location.hash.substr(1)),
                    "" === e ? "/" : e
            }
            ,
            t.exports = s
    }
        , {
        "@marcom/ac-dom-events": 38,
        "@marcom/ac-event-emitter": 68,
        "@marcom/ac-object": 95
    }],
    117: [function (e, t, i) {
        "use strict";
        var n = e("@marcom/ac-object").create
            , r = e("@marcom/ac-dom-emitter").DOMEmitter
            , o = e("./History")
            , s = (e("@marcom/ac-routes").Route,
                e("@marcom/ac-routes").Routes);
        function a(e) {
            e = e || {},
                this._intercept = e.intercept || "[data-route]",
                this._interceptAttribute = e.attribute || "href",
                this._handleTrigger = this._handleTrigger.bind(this),
                this.intercept(this._intercept),
                this.history = e.history || new o({
                    root: e.root,
                    autoStart: e.autoStart,
                    pushState: e.pushState,
                    hashChange: e.hashChange,
                    resolveInitialHash: e.resolveInitialHash
                }),
                s.call(this, e.routes),
                e.autoStart && (this.history.started || this.history.start(),
                    this.start())
        }
        var l = a.prototype = n(s.prototype);
        l._handleTrigger = function (e) {
            if (this.started) {
                var t = e.target.getAttribute(this._interceptAttribute);
                t && (/^(http|https):\/\/+/.exec(t) && "href" === this._interceptAttribute && (t = t.substr(t.indexOf(this.history.root) + this.history.root.length) || "/"),
                    this.navigate(t) && e.preventDefault())
            }
        }
            ,
            l._handlePopstate = function (e) {
                this.navigate(e.fragment, !0)
            }
            ,
            l.start = function () {
                this.started || (this.started = !0,
                    this.history.start(),
                    this._handlePopstate = this._handlePopstate.bind(this),
                    this.history.on("popstate", this._handlePopstate),
                    this.navigate(this.history.fragment(), !0))
            }
            ,
            l.stop = function () {
                this.started && (this.started = !1,
                    this.history.stop(),
                    this.history.off("popstate", this._handlePopstate))
            }
            ,
            l.navigate = function (e, t) {
                return this.history.fragment() !== e || t ? !(e && !t && !this.history.navigate(e)) && (this.match(e),
                    !0) : this.history.canUpdate()
            }
            ,
            l.intercept = function (e, t) {
                new r(t || document.body).on("click", e, this._handleTrigger)
            }
            ,
            t.exports = a
    }
        , {
        "./History": 116,
        "@marcom/ac-dom-emitter": 33,
        "@marcom/ac-object": 95,
        "@marcom/ac-routes": 118
    }],
    118: [function (e, t, i) {
        "use strict";
        t.exports = {
            Routes: e("./ac-routes/Routes"),
            Route: e("./ac-routes/Route")
        }
    }
        , {
        "./ac-routes/Route": 119,
        "./ac-routes/Routes": 120
    }],
    119: [function (e, t, i) {
        "use strict";
        function n(e, t, i, n, r) {
            if (this.path = e,
                this.callback = t,
                this.context = i,
                this.greedy = n || !1,
                this.priority = r || 0,
                "number" != typeof this.priority)
                throw new Error("Priority must be a Number.");
            this.identifierPattern = "([a-zA-Z0-9\\-\\_]+)",
                this.tokensRe = new RegExp(":" + this.identifierPattern, "g"),
                this.matcher = this._createRouteMatcher(e)
        }
        var r = n.prototype;
        r._createRouteMatcher = function (e) {
            if (e && e.exec)
                return {
                    pattern: e
                };
            if ("/" === e)
                return {
                    pattern: /^\/$/
                };
            if ("string" != typeof e)
                throw new Error("path must be either a string or regex");
            var t = this._extractRouteTokens(e)
                , i = e.replace(this.tokensRe, this.identifierPattern);
            return {
                pattern: new RegExp(i, "g"),
                routeTokens: t
            }
        }
            ,
            r._extractRouteTokens = function (e) {
                var t = e.replace(this.tokensRe, ":" + this.identifierPattern)
                    , i = new RegExp(t, "g").exec(e);
                return i = i && i.length > 1 ? i.slice(1) : null
            }
            ,
            r.match = function (e) {
                this.matcher.pattern.lastIndex = 0;
                var t = this.matcher.pattern.exec(e);
                if (t) {
                    var i = t.length ? t.slice(1) : []
                        , n = this.callback;
                    if (n && "function" == typeof n)
                        return n.apply(this.context || this, i),
                            !0
                }
                return !1
            }
            ,
            t.exports = n
    }
        , {}],
    120: [function (e, t, i) {
        "use strict";
        var n = e("@babel/runtime/helpers/interopRequireDefault")(e("@babel/runtime/helpers/typeof"))
            , r = e("./Route");
        function o(e) {
            this._routes = {},
                e && this.addRoutes(e)
        }
        var s = o.prototype;
        s._getIndex = function (e, t, i) {
            if (void 0 !== this._routes[e])
                for (var n = this._routes[e].length; --n > -1;)
                    if (this._routes[e][n].callback === t && this._routes[e][n].context === i)
                        return n;
            return -1
        }
            ,
            s.match = function (e) {
                var t, i;
                for (t in this._routes)
                    for (i = this._routes[t].length; --i > -1 && (!this._routes[t][i].match(e) || !this._routes[t][i].greedy);)
                        ;
            }
            ,
            s.add = function (e) {
                if (void 0 === this._routes[e.path])
                    this._routes[e.path] = [e];
                else if (!this.get(e.path, e.callback, e.context)) {
                    var t, i = this._routes[e.path].length;
                    if (i > 0)
                        for (t = 0; t < i; ++t)
                            if (this._routes[e.path][t].priority > e.priority)
                                return this._routes[e.path].splice(t, 0, e),
                                    e;
                    this._routes[e.path].push(e)
                }
                return e
            }
            ,
            s.remove = function (e) {
                var t = this._getIndex(e.path, e.callback, e.context);
                return t > -1 && (this._routes[e.path].splice(t, 1),
                    e)
            }
            ,
            s.get = function (e, t, i) {
                var n = this._getIndex(e, t, i);
                return n > -1 && this._routes[e][n]
            }
            ,
            s.createRoute = function (e, t, i, n, o) {
                var s = new r(e, t, i, n, o);
                return this.add(s),
                    s
            }
            ,
            s.addRoutes = function (e) {
                if (!(e instanceof Array))
                    throw new Error("routes must be an Array.");
                var t, i, r = e.length;
                for (t = 0; t < r; ++t)
                    (i = e[t]) && "object" === (0,
                        n.default)(i) && this.add(i)
            }
            ,
            s.removeRoutes = function (e) {
                if (!(e instanceof Array))
                    throw new Error("routes must be an Array.");
                var t, i, r = e.length;
                for (t = 0; t < r; ++t)
                    (i = e[t]) && "object" === (0,
                        n.default)(i) && this.remove(i)
            }
            ,
            s.getRoutes = function (e) {
                return void 0 === this._routes[e] ? [] : this._routes[e]
            }
            ,
            t.exports = o
    }
        , {
        "./Route": 119,
        "@babel/runtime/helpers/interopRequireDefault": 10,
        "@babel/runtime/helpers/typeof": 19
    }],
    121: [function (e, t, i) {
        "use strict";
        t.exports = function (e, t) {
            var i = "";
            if (e) {
                var n = Object.keys(e)
                    , r = n.length - 1;
                n.forEach(function (t, n) {
                    var o = e[t]
                        , s = (t = t.trim()) + (o = null === (o = o && "string" == typeof o ? o.trim() : o) ? "" : "=" + o) + (n === r ? "" : "&");
                    i = i ? i.concat(s) : s
                })
            }
            return i && !1 !== t ? "?" + i : i
        }
    }
        , {}],
    122: [function (e, t, i) {
        "use strict";
        t.exports = {
            getWindow: function () {
                return window
            },
            getDocument: function () {
                return document
            },
            getNavigator: function () {
                return navigator
            }
        }
    }
        , {}],
    123: [function (e, t, i) {
        "use strict";
        var n = e("@marcom/useragent-detect").os
            , r = e("./touchAvailable").original
            , o = e("./helpers/globals")
            , s = e("@marcom/function-utils/once");
        function a() {
            var e = o.getWindow();
            return !r() && !e.orientation || n.windows
        }
        t.exports = s(a),
            t.exports.original = a
    }
        , {
        "./helpers/globals": 122,
        "./touchAvailable": 127,
        "@marcom/function-utils/once": 128,
        "@marcom/useragent-detect": 132
    }],
    124: [function (e, t, i) {
        "use strict";
        var n = e("./isDesktop").original
            , r = e("./isTablet").original
            , o = e("@marcom/function-utils/once");
        function s() {
            return !n() && !r()
        }
        t.exports = o(s),
            t.exports.original = s
    }
        , {
        "./isDesktop": 123,
        "./isTablet": 126,
        "@marcom/function-utils/once": 128
    }],
    125: [function (e, t, i) {
        "use strict";
        var n = e("./helpers/globals");
        t.exports = function () {
            var e = n.getWindow();
            return "devicePixelRatio" in e && e.devicePixelRatio >= 1.5
        }
    }
        , {
        "./helpers/globals": 122
    }],
    126: [function (e, t, i) {
        "use strict";
        var n = e("./isDesktop").original
            , r = e("./helpers/globals")
            , o = e("@marcom/function-utils/once")
            , s = 600;
        function a() {
            var e = r.getWindow()
                , t = e.screen.width;
            return e.orientation && e.screen.height < t && (t = e.screen.height),
                !n() && t >= s
        }
        t.exports = o(a),
            t.exports.original = a
    }
        , {
        "./helpers/globals": 122,
        "./isDesktop": 123,
        "@marcom/function-utils/once": 128
    }],
    127: [function (e, t, i) {
        "use strict";
        var n = e("./helpers/globals")
            , r = e("@marcom/function-utils/once");
        function o() {
            var e = n.getWindow()
                , t = n.getDocument()
                , i = n.getNavigator();
            return !!("ontouchstart" in e || e.DocumentTouch && t instanceof e.DocumentTouch || i.maxTouchPoints > 0 || i.msMaxTouchPoints > 0)
        }
        t.exports = r(o),
            t.exports.original = o
    }
        , {
        "./helpers/globals": 122,
        "@marcom/function-utils/once": 128
    }],
    128: [function (e, t, i) {
        "use strict";
        t.exports = function (e) {
            var t;
            return function () {
                return void 0 === t && (t = e.apply(this, arguments)),
                    t
            }
        }
    }
        , {}],
    129: [function (e, t, i) {
        "use strict";
        t.exports = function (e) {
            var t = {};
            for (var i in e)
                t[i] = e[i].reduce(function (e, t) {
                    return e[t.name] = !1,
                        e
                }, {
                    version: {
                        string: "",
                        major: 0,
                        minor: 0,
                        patch: 0,
                        documentMode: !1
                    }
                });
            return t
        }
    }
        , {}],
    130: [function (e, t, i) {
        "use strict";
        t.exports = {
            browser: [{
                name: "edge",
                userAgent: "Edge",
                version: ["rv", "Edge"],
                test: function (e) {
                    return e.ua.indexOf("Edge") > -1 || "Mozilla/5.0 (Windows NT 10.0; Win64; x64)" === e.ua
                }
            }, {
                name: "edgeChromium",
                userAgent: "Edge",
                version: ["rv", "Edg"],
                test: function (e) {
                    return e.ua.indexOf("Edg") > -1 && -1 === e.ua.indexOf("Edge")
                }
            }, {
                name: "chrome",
                userAgent: "Chrome"
            }, {
                name: "firefox",
                test: function (e) {
                    return e.ua.indexOf("Firefox") > -1 && -1 === e.ua.indexOf("Opera")
                },
                version: "Firefox"
            }, {
                name: "android",
                userAgent: "Android"
            }, {
                name: "safari",
                test: function (e) {
                    return e.ua.indexOf("Safari") > -1 && e.vendor.indexOf("Apple") > -1
                },
                version: "Version"
            }, {
                name: "ie",
                test: function (e) {
                    return e.ua.indexOf("IE") > -1 || e.ua.indexOf("Trident") > -1
                },
                version: ["MSIE", "rv"],
                parseDocumentMode: function () {
                    var e = !1;
                    return document.documentMode && (e = parseInt(document.documentMode, 10)),
                        e
                }
            }, {
                name: "opera",
                userAgent: "Opera",
                version: ["Version", "Opera"]
            }, {
                name: "samsung",
                userAgent: "SamsungBrowser"
            }],
            os: [{
                name: "windows",
                test: function (e) {
                    return e.ua.indexOf("Windows") > -1
                },
                version: "Windows NT"
            }, {
                name: "osx",
                userAgent: "Mac",
                test: function (e) {
                    return e.ua.indexOf("Macintosh") > -1
                }
            }, {
                name: "ios",
                test: function (e) {
                    return e.ua.indexOf("iPhone") > -1 || e.ua.indexOf("iPad") > -1
                },
                version: ["iPhone OS", "CPU OS"]
            }, {
                name: "linux",
                userAgent: "Linux",
                test: function (e) {
                    return (e.ua.indexOf("Linux") > -1 || e.platform.indexOf("Linux") > -1) && -1 === e.ua.indexOf("Android")
                }
            }, {
                name: "fireos",
                test: function (e) {
                    return e.ua.indexOf("Firefox") > -1 && e.ua.indexOf("Mobile") > -1
                },
                version: "rv"
            }, {
                name: "android",
                userAgent: "Android",
                test: function (e) {
                    return e.ua.indexOf("Android") > -1
                }
            }, {
                name: "chromeos",
                userAgent: "CrOS"
            }]
        }
    }
        , {}],
    131: [function (e, t, i) {
        "use strict";
        var n = e("./defaults")
            , r = e("./dictionary");
        function o(e, t) {
            if ("function" == typeof e.parseVersion)
                return e.parseVersion(t);
            var i, n = e.version || e.userAgent;
            "string" == typeof n && (n = [n]);
            for (var r, o = n.length, s = 0; s < o; s++)
                if ((r = t.match((i = n[s],
                    new RegExp(i + "[a-zA-Z\\s/:]+([0-9_.]+)", "i")))) && r.length > 1)
                    return r[1].replace(/_/g, ".");
            return !1
        }
        function s(e, t, i) {
            for (var n, r, s = e.length, a = 0; a < s; a++)
                if ("function" == typeof e[a].test ? !0 === e[a].test(i) && (n = e[a].name) : i.ua.indexOf(e[a].userAgent) > -1 && (n = e[a].name),
                    n) {
                    if (t[n] = !0,
                        "string" == typeof (r = o(e[a], i.ua))) {
                        var l = r.split(".");
                        t.version.string = r,
                            l && l.length > 0 && (t.version.major = parseInt(l[0] || 0),
                                t.version.minor = parseInt(l[1] || 0),
                                t.version.patch = parseInt(l[2] || 0))
                    } else
                        "edge" === n && (t.version.string = "12.0.0",
                            t.version.major = "12",
                            t.version.minor = "0",
                            t.version.patch = "0");
                    return "function" == typeof e[a].parseDocumentMode && (t.version.documentMode = e[a].parseDocumentMode()),
                        t
                }
            return t
        }
        t.exports = function (e) {
            var t = {}
                , i = n(r);
            return t.browser = s(r.browser, i.browser, e),
                t.os = s(r.os, i.os, e),
                t
        }
    }
        , {
        "./defaults": 129,
        "./dictionary": 130
    }],
    132: [function (e, t, i) {
        "use strict";
        var n = "undefined" != typeof window ? window.navigator : {
            userAgent: "",
            platform: "",
            vendor: ""
        }
            , r = {
                ua: n.userAgent,
                platform: n.platform,
                vendor: n.vendor
            };
        t.exports = e("./parseUserAgent")(r)
    }
        , {
        "./parseUserAgent": 131
    }],
    133: [function (e, t, i) {
        "use strict";
        var n = e("@babel/runtime/helpers/interopRequireDefault")
            , r = n(e("@babel/runtime/helpers/classCallCheck"))
            , o = n(e("@babel/runtime/helpers/createClass"))
            , s = n(e("@babel/runtime/helpers/possibleConstructorReturn"))
            , a = n(e("@babel/runtime/helpers/assertThisInitialized"))
            , l = n(e("@babel/runtime/helpers/get"))
            , c = n(e("@babel/runtime/helpers/getPrototypeOf"))
            , u = n(e("@babel/runtime/helpers/inherits"));
        function h(e, t, i) {
            return t = (0,
                c.default)(t),
                (0,
                    s.default)(e, function () {
                        try {
                            var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () { }))
                        } catch (e) { }
                        return function () {
                            return !!e
                        }()
                    }() ? Reflect.construct(t, i || [], (0,
                        c.default)(e).constructor) : t.apply(e, i))
        }
        var d = [{
            name: "S",
            mediaQuery: "only screen and (max-width: 734px)"
        }, {
            name: "M",
            mediaQuery: "only screen and (min-width: 735px) and (max-width: 1068px)"
        }, {
            name: "L",
            mediaQuery: "only screen and (min-width: 1069px) and (max-width: 1440px)"
        }, {
            name: "X",
            mediaQuery: "only screen and (min-width: 1441px)"
        }]
            , p = "only screen and (-webkit-min-device-pixel-ratio: 1.5), screen and (min-resolution: 1.5dppx), screen and (min-resolution: 144dpi)"
            , f = "only screen and (orientation: portrait)"
            , m = function (e) {
                function t() {
                    var e, i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return (0,
                        r.default)(this, t),
                        (e = h(this, t)).BREAKPOINTS = i.breakpoints || d,
                        e._setupProperties(),
                        e._onRetinaChange = e._onRetinaChange.bind((0,
                            a.default)(e)),
                        e._onOrientationChange = e._onOrientationChange.bind((0,
                            a.default)(e)),
                        e.listenersAdded = {
                            orientation: !1,
                            retina: !1,
                            viewport: !1
                        },
                        e
                }
                return (0,
                    u.default)(t, e),
                    (0,
                        o.default)(t, [{
                            key: "on",
                            value: function () {
                                this._setupListeners(arguments[0]),
                                    (0,
                                        l.default)((0,
                                            c.default)(t.prototype), "on", this).apply(this, arguments)
                            }
                        }, {
                            key: "_onRetinaChange",
                            value: function () {
                                this.trigger(t.CHANGE_EVENTS.RETINA, this)
                            }
                        }, {
                            key: "_onOrientationChange",
                            value: function () {
                                this.trigger(t.CHANGE_EVENTS.ORIENTATION, this)
                            }
                        }, {
                            key: "_setupProperties",
                            value: function () {
                                Object.defineProperty(this, "retina", {
                                    get: function () {
                                        return window.matchMedia(p).matches
                                    }
                                }),
                                    Object.defineProperty(this, "orientation", {
                                        get: function () {
                                            return window.matchMedia(f).matches ? "portrait" : "landscape"
                                        }
                                    }),
                                    this.viewport = this.getBreakpoint()
                            }
                        }, {
                            key: "_setupListeners",
                            value: function (e) {
                                var i = this;
                                if (e !== t.CHANGE_EVENTS.RETINA || this.listenersAdded.retina || (window.matchMedia(p).addListener(this._onRetinaChange),
                                    this.listenersAdded.retina = !0),
                                    e !== t.CHANGE_EVENTS.ORIENTATION || this.listenersAdded.orientation || (window.matchMedia(f).addListener(this._onOrientationChange),
                                        this.listenersAdded.orientation = !0),
                                    e === t.CHANGE_EVENTS.VIEWPORT && !this.listenersAdded.viewport) {
                                    for (var n = function () {
                                        var e = i.BREAKPOINTS[r];
                                        window.matchMedia(e.mediaQuery).addListener(function (n) {
                                            n.matches && (i.oldViewport = i.viewport,
                                                i.viewport = e.name,
                                                i.trigger(t.CHANGE_EVENTS.VIEWPORT, i))
                                        })
                                    }, r = 0; r < this.BREAKPOINTS.length; r++)
                                        n();
                                    this.listenersAdded.viewport = !0
                                }
                            }
                        }, {
                            key: "getBreakpoint",
                            value: function () {
                                for (var e = 0; e < this.BREAKPOINTS.length; e++) {
                                    var t = this.BREAKPOINTS[e];
                                    if (window.matchMedia(t.mediaQuery).matches)
                                        return t.name
                                }
                            }
                        }], [{
                            key: "CHANGE_EVENTS",
                            get: function () {
                                return {
                                    ORIENTATION: "change:orientation",
                                    RETINA: "change:retina",
                                    VIEWPORT: "change:viewport"
                                }
                            }
                        }]),
                    t
            }(e("@marcom/ac-event-emitter-micro").EventEmitterMicro);
        t.exports = m
    }
        , {
        "@babel/runtime/helpers/assertThisInitialized": 4,
        "@babel/runtime/helpers/classCallCheck": 5,
        "@babel/runtime/helpers/createClass": 6,
        "@babel/runtime/helpers/get": 7,
        "@babel/runtime/helpers/getPrototypeOf": 8,
        "@babel/runtime/helpers/inherits": 9,
        "@babel/runtime/helpers/interopRequireDefault": 10,
        "@babel/runtime/helpers/possibleConstructorReturn": 13,
        "@marcom/ac-event-emitter-micro": 66
    }],
    134: [function (e, t, i) {
        arguments[4][68][0].apply(i, arguments)
    }
        , {
        "./ac-event-emitter/EventEmitter": 135,
        dup: 68
    }],
    135: [function (e, t, i) {
        arguments[4][69][0].apply(i, arguments)
    }
        , {
        "@babel/runtime/helpers/interopRequireDefault": 10,
        "@babel/runtime/helpers/typeof": 19,
        dup: 69
    }],
    136: [function (e, t, i) {
        "use strict";
        var n, r = "data-films-modal-link", o = "data-films-inline-target", s = e("./factory/createFilms"), a = !0;
        t.exports = function e(t, i) {
            if (!(this instanceof e) && a)
                return a = !1,
                    n = setTimeout(e, 1),
                    function (t, i) {
                        return clearTimeout(n),
                            new e(t, i)
                    }
                    ;
            t = t || document;
            var l, c = Array.prototype.slice.call(t.querySelectorAll("[" + r + "]")), u = Array.prototype.slice.call(t.querySelectorAll("[" + o + "]"));
            if (c.length)
                l = s(c, Object.assign(i || {}, {
                    modal: !0
                }));
            else if (u.length) {
                for (var h = {}, d = 0, p = u.length; d < p; d++) {
                    var f = u[d]
                        , m = f.getAttribute(o);
                    h[m] || (h[m] = []),
                        h[m].push(f)
                }
                for (var _ in h)
                    Object.prototype.hasOwnProperty.call(h, _) && (l = s(h[_], Object.assign(i || {}, {
                        targetElement: t.querySelector("#" + _)
                    })))
            }
            return l
        }()
    }
        , {
        "./factory/createFilms": 141
    }],
    137: [function (e, t, i) {
        "use strict";
        var n;
        try {
            n = e("@marcom/ac-analytics")
        } catch (e) { }
        var r = e("@marcom/useragent-detect").browser
            , o = r.ie || r.edge
            , s = e("@marcom/ac-video/event-emitter-shim/EventEmitterShim")
            , a = function (e, t, i) {
                if (i) {
                    s.prototype.once.apply(this, [e, function () {
                        t.apply(i, arguments)
                    }
                    ])
                } else
                    s.prototype.once.apply(this, arguments)
            };
        function l(e, t, i) {
            this.player = e,
                this.sources = {},
                this.currentStubPlayer = null,
                this.playerType = "",
                this.videoType = "",
                this.options = t,
                i && this._bindAnchors(i)
        }
        var c = l.prototype;
        c._bindAnchors = function (e) {
            for (var t = 0, i = e.length; t < i; t++)
                this._bindAnchorForAnalytics(e[t])
        }
            ,
            c.activate = function () {
                this._onPlay = this._onPlay.bind(this),
                    this._onEnded = this._onEnded.bind(this),
                    this._onTimeupdate = this._onTimeupdate.bind(this),
                    this._onTexttrackshow = this._onTexttrackshow.bind(this),
                    this._onLoadStart = this._onLoadStart.bind(this),
                    this.setCurrentStubPlayer = this.setCurrentStubPlayer.bind(this),
                    this._onPlayPromiseResolved = this._onPlayPromiseResolved.bind(this),
                    o ? this.player.on("playing", this._onPlay) : this.player.on("play", this._onPlay),
                    this.player.on("ended", this._onEnded),
                    this.player.on("loadstart", this._onLoadStart),
                    this.player.on("timeupdate", this._onTimeupdate),
                    this.player.on("texttrackshow", this._onTexttrackshow),
                    this.player.on("PlayPromiseResolved", this._onPlayPromiseResolved),
                    this.player.on("durationchange", this.setCurrentStubPlayer)
            }
            ,
            c.deactivate = function () {
                o ? this.player.off("playing", this._onPlay) : this.player.off("play", this._onPlay),
                    this.player.off("ended", this._onEnded),
                    this.player.off("timeupdate", this._onTimeupdate),
                    this.player.off("texttrackshow", this._onTexttrackshow),
                    this.player.off("durationchange", this.setCurrentStubPlayer),
                    this.player.off("PlayPromiseResolved", this._onPlayPromiseResolved)
            }
            ,
            c._bindAnchorForAnalytics = function (e) {
                var t;
                if (e) {
                    if (this.sources[e.id])
                        return;
                    t = this._createStubPlayer(e),
                        e.getAttribute("data-" + this.options.dataAttribute) || (t.videoId = e.id),
                        this.sources[e.id] = {
                            stubPlayer: t,
                            observer: this._createObserver(t)
                        }
                }
            }
            ,
            c.addSourceObject = c._bindAnchorForAnalytics,
            c.setCurrentStubPlayer = function () {
                var e, t = this.player.el.getAttribute("data-" + this.options.dataAttribute), i = this._getCurrentSourceObject(t);
                i && i.stubPlayer && (this.currentStubPlayer = i.stubPlayer,
                    this.playerType = "html5",
                    (e = this.player.getCurrentSrc()) && (this.videoType = e.split(".").pop()))
            }
            ,
            c.destroy = function () {
                this.deactivate(),
                    this.player = null,
                    this.sources = null,
                    this.currentStubPlayer = null,
                    this.options = null
            }
            ,
            c._onPlay = function () {
                this.setCurrentStubPlayer(),
                    this._started || (this._proxyEvent("play"),
                        this._started = !0)
            }
            ,
            c._onPlayPromiseResolved = function () {
                this.setCurrentStubPlayer(),
                    this._proxyEvent("PlayPromiseResolved")
            }
            ,
            c._onLoadStart = function () {
                this._started = !1
            }
            ,
            c._onEnded = function () {
                this._started = !1,
                    this._proxyEvent("ended")
            }
            ,
            c._onTimeupdate = function () {
                this._proxyEvent("timeupdate"),
                    this._started && 0 === this.player.getCurrentTime() && this.player.getPaused() && (this._started = !1)
            }
            ,
            c._onTexttrackshow = function () {
                this._proxyEvent("captions-enabled")
            }
            ,
            c._getSourceObjectBySrcObjId = function (e) {
                return this.sources[e] || null
            }
            ,
            c._getCurrentSourceObject = function (e) {
                var t;
                return e && (t = this._getSourceObjectBySrcObjId(e)),
                    t
            }
            ,
            c._createStubPlayer = function (e) {
                var t = new s;
                return t.once = a,
                    t.el = e,
                    t.VERSION = this.player.VERSION,
                    t
            }
            ,
            c._getEventData = function () {
                return {
                    currentTime: this.player.getCurrentTime(),
                    playerType: this.playerType || "html5",
                    videoType: this.videoType || null
                }
            }
            ,
            c._createObserver = function (e) {
                var t;
                return n && n.observer && n.observer.Video && (t = new n.observer.Video(e, {
                    dataAttribute: this.options.dataAttribute
                })),
                    t
            }
            ,
            c._proxyEvent = function (e) {
                this.currentStubPlayer && this.currentStubPlayer.trigger(e, this._getEventData())
            }
            ,
            t.exports = l
    }
        , {
        "@marcom/ac-analytics": "@marcom/ac-analytics",
        "@marcom/ac-video/event-emitter-shim/EventEmitterShim": 334,
        "@marcom/useragent-detect": 132
    }],
    138: [function (e, t, i) {
        "use strict";
        var n = e("../windowload/windowLoad")
            , r = e("@marcom/useragent-detect")
            , o = e("@marcom/feature-detect/touchAvailable")()
            , s = r.os.ios || r.os.android || r.os.osx && o;
        t.exports = function (e, t, i, r) {
            var o = {
                click: function (i) {
                    i.preventDefault(),
                        t(e)
                },
                TriggerAnchor: function () {
                    t(e)
                }
            };
            return Object.keys(o).forEach(function (t) {
                e.addEventListener(t, o[t])
            }),
                r && e.id && r.createRoute(e.id, function () {
                    n(function () {
                        t(e, !s)
                    })
                }),
            {
                detatch: function () {
                    Object.keys(o).forEach(function (t) {
                        e.removeEventListener(t, o[t])
                    })
                }
            }
        }
    }
        , {
        "../windowload/windowLoad": 148,
        "@marcom/feature-detect/touchAvailable": 127,
        "@marcom/useragent-detect": 132
    }],
    139: [function (e, t, i) {
        "use strict";
        var n = e("@marcom/ac-router").Router
            , r = e("@marcom/ac-video/player/factory/createShareablePlayer")
            , o = e("@marcom/ac-video/optimizeVideoUrl")
            , s = e("@marcom/useragent-detect")
            , a = e("./bindAnchor")
            , l = e("./createClickHandler")
            , c = e("./createModalLink")
            , u = e("./createHandheldModalLink")
            , h = e("./createInlineLink")
            , d = e("@marcom/feature-detect/isHandheld")()
            , p = s.os.ios
            , f = {
                controls: !0,
                urlOptimizer: o
            };
        t.exports = function (e, t) {
            t = t || {},
                t = Object.assign({}, f, t);
            var i, o = !1;
            e.forEach(function (e) {
                e.hasAttribute("data-films-options") && (!1 !== JSON.parse(e.getAttribute("data-films-options")).closeOnEnd || t.closeOnEnd || (t.closeOnEnd = !1));
                -1 !== e.href.indexOf(".m3u8") && (o = !0)
            }),
                t.maxWidth || (t.maxWidth = 1280),
                t.hls = void 0 !== t.hls ? t.hls : o;
            var s, m = r(t);
            i = new n({
                hashChange: !0,
                pushState: !1
            });
            var _ = (s = !t.modal || d && p && !t.threesixty ? t.modal ? u(m, document.body, t) : h(m, t) : c(m, t)).play.bind(s)
                , v = l({
                    player: m,
                    playHandler: _,
                    attr: "data-" + t.dataAttribute
                })
                , b = new Map;
            e.forEach(function (e) {
                b.set(e, a(e, v, _, i))
            });
            var y = function (e, t) {
                e.detatch(),
                    b.delete(t)
            };
            return i.start(),
            {
                play: function (t) {
                    for (var i = 0, n = e.length; i < n; i++)
                        e[i].id !== t && e[i] !== t || _(e[i].href)
                },
                player: m,
                modalVideo: s.modal,
                destroy: function () {
                    b.forEach(y),
                        s.destroy()
                }
            }
        }
    }
        , {
        "./bindAnchor": 138,
        "./createClickHandler": 140,
        "./createHandheldModalLink": 142,
        "./createInlineLink": 143,
        "./createModalLink": 144,
        "@marcom/ac-router": 115,
        "@marcom/ac-video/optimizeVideoUrl": 335,
        "@marcom/ac-video/player/factory/createShareablePlayer": 341,
        "@marcom/feature-detect/isHandheld": 124,
        "@marcom/useragent-detect": 132
    }],
    140: [function (e, t, i) {
        "use strict";
        var n = e("@marcom/feature-detect/isRetina");
        t.exports = function (e) {
            return function (t, i) {
                var r = null;
                Array.from(document.querySelectorAll(".theme-dark")).find(function (t) {
                    return t.contains(e.player.el)
                }) && (r = n() ? "/ac/ac-video-posterframe/4.0/~/images/home/ac_video_poster_dark_960x540_2x.jpg" : "/ac/ac-video-posterframe/4.0/~/images/home/ac_video_poster_dark_960x540.jpg");
                var o, s = t.getAttribute("data-films-options");
                (o = s ? JSON.parse(s) : null) && o.endState && o.endState.items.forEach(function (e) {
                    if (e.url && 0 === e.url.indexOf("#")) {
                        var t = document.querySelector(e.url);
                        e.onclick = function () {
                            t.dispatchEvent(new CustomEvent("TriggerAnchor"))
                        }
                    }
                }),
                    o || (o = {}),
                    o.poster || (o.poster = r);
                var a = t.getAttribute("data-films-modal-label") || o && o.modalLabel || e.player.options.modalLabel || "Video Player";
                e.player.el.setAttribute(e.attr, t.getAttribute(e.attr) || t.id),
                    e.playHandler(t.href, o, i, a)
            }
        }
    }
        , {
        "@marcom/feature-detect/isRetina": 125
    }],
    141: [function (e, t, i) {
        "use strict";
        var n = e("./bindAnchors")
            , r = e("../analytics/AnalyticsTranslator")
            , o = {
                dataAttribute: "analytics-video-id",
                analytics: !0
            }
            , s = e("@marcom/ac-console/log")
            , a = e("../../../.versionfile");
        s("@marcom/ac-films version: ".concat(a.toString())),
            t.exports = function (e, t) {
                t = t || {},
                    t = Object.assign({}, o, t);
                var i = n(e, t);
                t.analytics && new r(i.player, t, e).activate();
                return i
            }
    }
        , {
        "../../../.versionfile": 1,
        "../analytics/AnalyticsTranslator": 137,
        "./bindAnchors": 139,
        "@marcom/ac-console/log": 32
    }],
    142: [function (e, t, i) {
        "use strict";
        t.exports = function (e, t, i) {
            e.el.classList.add("ac-films-handheld-player");
            return t.appendChild(e.el),
            {
                play: function (i, n, r) {
                    var o = function () {
                        e.isPictureInPicture() || (e.getPaused() || e.pause(),
                            e.el.classList.remove("player-fullscreen"))
                    };
                    e.el.classList.add("player-fullscreen"),
                        e.once("ended", o),
                        e.once("exitfullscreen", o);
                    var s = t.getAttribute("data-films-options");
                    s && (n = Object.assign({}, n, JSON.parse(s))),
                        e.load(i, null, 0, Object.assign({
                            maxWidth: window.innerWidth
                        }, n)),
                        !1 !== r && e.play()
                },
                player: e,
                destroy: function () {
                    e.destroy()
                }
            }
        }
    }
        , {}],
    143: [function (e, t, i) {
        "use strict";
        t.exports = function (e, t) {
            var i = t.targetElement
                , n = function (t, i) {
                    e.load(t, null, 0, i),
                        e.play()
                };
            return t.playHandler = n,
                i && i.appendChild(e.el),
            {
                play: n,
                player: e,
                destroy: function () {
                    e.destroy()
                }
            }
        }
    }
        , {}],
    144: [function (e, t, i) {
        "use strict";
        var n = e("@babel/runtime/helpers/interopRequireDefault")(e("@babel/runtime/helpers/toConsumableArray"))
            , r = e("@marcom/useragent-detect")
            , o = e("@marcom/feature-detect/touchAvailable")()
            , s = e("@marcom/ac-modal").default
            , a = e("@marcom/ac-modal/mixins/Mixins").FullBleedBundle
            , l = s.withMixins.apply(s, (0,
                n.default)(a))
            , c = r.os.ios || r.os.android || r.os.osx && o
            , u = e("./link/ModalLink");
        t.exports = function (e, t) {
            t = t || {};
            var i = document.createElement("div");
            i.classList.add("ac-player-container"),
                c && i.classList.add("ac-films-modal-mobile");
            var n = function (e) {
                return new l(e, {
                    attributes: {
                        container: {
                            class: "modal-fixed-height"
                        }
                    }
                })
            }(i);
            return i.appendChild(e.el),
                n.elements.container.classList.add("ac-modal-video"),
                new u({
                    player: e,
                    modal: n,
                    closeOnEnd: t.closeOnEnd
                })
        }
    }
        , {
        "./link/ModalLink": 145,
        "@babel/runtime/helpers/interopRequireDefault": 10,
        "@babel/runtime/helpers/toConsumableArray": 16,
        "@marcom/ac-modal": 75,
        "@marcom/ac-modal/mixins/Mixins": 87,
        "@marcom/feature-detect/touchAvailable": 127,
        "@marcom/useragent-detect": 132
    }],
    145: [function (e, t, i) {
        "use strict";
        var n = /_([0-9]+)x([0-9]+)/
            , r = e("../../resize/ResizeHandler")
            , o = e("@marcom/ac-video/utils/urlOptimizer/19X9AssetSizes")
            , s = function (e) {
                this.modal = e.modal,
                    this.player = e.player,
                    this._resizeHandler = new r({
                        player: this.player,
                        modal: this.modal
                    }),
                    this._closeOnEnd = void 0 === e.closeOnEnd || e.closeOnEnd,
                    this._ended = !1,
                    this._pauseTime = 0,
                    this._playing = !1,
                    this._initialize()
            }
            , a = s.prototype;
        a._initialize = function () {
            this._bindMethods(),
                this.player.on("ended", this._onEnded),
                this.player.on("pause", this._onPaused),
                this.modal.on("open", this._onOpen),
                this.player.supportsPictureInPicture() && this.player.on("pictureinpicture:change", this._onPipModeChanged)
        }
            ,
            a._bindMethods = function () {
                this._onEnded = this._onEnded.bind(this),
                    this._onPipModeChanged = this._onPipModeChanged.bind(this),
                    this._onPaused = this._onPaused.bind(this),
                    this._onModalWillClose = this._onModalWillClose.bind(this),
                    this._onOpen = this._onOpen.bind(this)
            }
            ,
            a._onOpen = function () {
                this.player.refreshSize()
            }
            ,
            a._onPaused = function () {
                this._pauseTime = Date.now()
            }
            ,
            a._onEnded = function () {
                this._ended = !0,
                    !this.player.isPictureInPicture() && this._closeOnEnd ? this.modal.close() : this.player.isPictureInPicture() && (this.player.setPictureInPicture(!1),
                        this.modal.elements.container.classList.remove("ac-modal-video-pip"),
                        this._closeOnEnd || (this.modal.open(),
                            this._bindWillClose()))
            }
            ,
            a._onPipModeChanged = function () {
                this._ended || (this.player.isPictureInPicture() && this._isModalOpen() ? (this._unBindWillClose(),
                    this.modal.elements.container.classList.add("ac-modal-video-pip"),
                    this.modal.close()) : this._isModalOpen() || (this.modal.elements.container.classList.remove("ac-modal-video-pip"),
                        !this._pauseTime || Date.now() - this._pauseTime > 400 ? (this._bindWillClose(),
                            this.modal.open()) : this._resetVideo()))
            }
            ,
            a._resetVideo = function () {
                this.player.pause(),
                    this.player.setCurrentTime(0)
            }
            ,
            a._onModalWillClose = function () {
                this._unBindWillClose(),
                    this._resetVideo(),
                    this.player.setPictureInPicture(!1),
                    this.modal.elements.container.classList.remove("ac-modal-video-pip")
            }
            ,
            a._clearAspectRatio = function () {
                this.player.el.parentElement.classList.remove("ac-video-cinematic-aspect-ratio"),
                    this.player.el.parentElement.classList.remove("ac-video-square-aspect-ratio"),
                    this.player.el.parentElement.classList.remove("ac-video-vertical-aspect-ratio"),
                    this.player.el.parentElement.classList.remove("ac-video-19x9-aspect-ratio"),
                    this.player.el.parentElement.classList.remove("ac-video-9x19-aspect-ratio")
            }
            ,
            a._set19X9Mode = function () {
                this.player.el.parentElement.classList.add("ac-video-19x9-aspect-ratio")
            }
            ,
            a._set9X19Mode = function () {
                this.player.el.parentElement.classList.add("ac-video-9x19-aspect-ratio")
            }
            ,
            a._setCinematicMode = function () {
                this.player.el.parentElement.classList.add("ac-video-cinematic-aspect-ratio")
            }
            ,
            a._setSquareVideo = function () {
                this.player.el.parentElement.classList.add("ac-video-square-aspect-ratio")
            }
            ,
            a._setVerticalVideo = function () {
                this.player.el.parentElement.classList.add("ac-video-vertical-aspect-ratio")
            }
            ,
            a._resetPiPVideo = function () {
                var e = this.player.getVisibleTextTracks();
                e.forEach(function (e) {
                    e.mode = "hidden"
                }),
                    this._resetVideo(),
                    e.forEach(function (e) {
                        e.mode = "showing"
                    })
            }
            ,
            a.play = function (e, t, i, r) {
                if (this._ended = !1,
                    this._clearAspectRatio(),
                    e.match("-tft-"))
                    this._setCinematicMode();
                else if (n.test(e)) {
                    var s = parseInt(RegExp.$1, 10)
                        , a = parseInt(RegExp.$2, 10);
                    l = {
                        width: s,
                        height: a
                    },
                        o.find(function (e) {
                            return e.width === l.width && (e.height = l.height) || e.width === l.height && (e.height = l.width)
                        }) ? a > s ? this._set9X19Mode(!0) : this._set19X9Mode(!0) : a > s ? this._setVerticalVideo(!0) : a === s && this._setSquareVideo(!0)
                }
                var l;
                this.modal.elements.container.setAttribute("aria-label", r),
                    this.player.load(e, null, 0, Object.assign({}, t, {
                        maxWidth: window.innerWidth
                    })),
                    this.player.isPictureInPicture() ? this._resetPiPVideo() : (this.modal.open(),
                        this._bindWillClose()),
                    !1 !== i && this.player.play()
            }
            ,
            a._bindWillClose = function () {
                this.modal.on("willclose", this._onModalWillClose)
            }
            ,
            a._unBindWillClose = function () {
                this.modal.off("willclose", this._onModalWillClose)
            }
            ,
            a._isModalOpen = function () {
                return document.documentElement.classList.contains("has-modal")
            }
            ,
            a.destroy = function () {
                this.player.off("ended", this._onEnded),
                    this.player.off("paused", this._onPaused),
                    this.player.off("pictureinpicture:change", this._onPipModeChanged),
                    this._unBindWillClose(),
                    this._resizeHandler.destroy(),
                    this.modal.destroy(),
                    this.player.destroy()
            }
            ,
            t.exports = s
    }
        , {
        "../../resize/ResizeHandler": 147,
        "@marcom/ac-video/utils/urlOptimizer/19X9AssetSizes": 421
    }],
    146: [function (e, t, i) {
        "use strict";
        e("../AutoFilms")()
    }
        , {
        "../AutoFilms": 136
    }],
    147: [function (e, t, i) {
        "use strict";
        var n = /_([0-9]+)x([0-9]+)/
            , r = e("@marcom/useragent-detect")
            , o = e("@marcom/feature-detect/touchAvailable")()
            , s = r.os.ios || r.os.android || r.os.osx && o;
        function a(e) {
            this._modal = e.modal,
                this._player = e.player,
                this._mediaElement = e.player.getMediaElement(),
                this._posterEl = this._player.el.querySelector(".ac-video-poster img"),
                this._playerContainer = this._player.el.parentElement,
                this._bindMethods(),
                this._addEventListeners(),
                this._calcAspectRatio()
        }
        var l = a.prototype;
        l._bindMethods = function () {
            this._onLoadStart = this._onLoadStart.bind(this),
                this._onResize = this._onResize.bind(this),
                this._fullScreenChange = this._fullScreenChange.bind(this),
                this._calcAspectRatio = this._calcAspectRatio.bind(this),
                this._addResizeListeners = this._addResizeListeners.bind(this),
                this._removeResizeListeners = this._removeResizeListeners.bind(this),
                this._onModalOpen = this._onModalOpen.bind(this)
        }
            ,
            l._addEventListeners = function () {
                this._posterEl && this._posterEl.addEventListener("load", this._calcAspectRatio),
                    this._modal.on("willopen", this._addResizeListeners),
                    this._modal.on("open", this._onModalOpen),
                    this._modal.on("close", this._removeResizeListeners)
            }
            ,
            l._onModalOpen = function () {
                this._loadStarted && (this._onResize(),
                    this._player.el.style.display = "",
                    this._player.el.style.opacity = "")
            }
            ,
            l._addResizeListeners = function () {
                this._mediaElement = this._player.getMediaElement(),
                    this._player.el.style.display = "block",
                    this._player.el.style.opacity = 0,
                    window.addEventListener("resize", this._onResize),
                    window.addEventListener("orientationchange", this._onResize),
                    this._player.on("loadstart", this._onLoadStart),
                    this._player.on("loadeddata", this._calcAspectRatio),
                    this._player.on("fullscreen:change", this._fullScreenChange),
                    this._player.on("fullscreen:willenter", this._fullScreenChange),
                    this._calcAspectRatio()
            }
            ,
            l._removeResizeListeners = function () {
                this._onResize(),
                    window.removeEventListener("resize", this._onResize),
                    window.removeEventListener("orientationchange", this._onResize),
                    this._player.off("loadstart", this._onLoadStart),
                    this._player.off("loadeddata", this._calcAspectRatio),
                    this._player.off("fullscreen:change", this._fullScreenChange)
            }
            ,
            l._removeEventListeners = function () {
                this._removeResizeListeners(),
                    this._modal.off("willopen", this._addResizeListeners),
                    this._modal.off("open", this._onModalOpen),
                    this._modal.off("close", this._removeResizeListeners),
                    this._posterEl && this._posterEl.removeEventListener("load", this._calcAspectRatio)
            }
            ,
            l._onLoadStart = function () {
                this._mediaElement = this._player.getMediaElement(),
                    this._loadStarted = !1,
                    requestAnimationFrame(function () {
                        this._loadStarted = !0,
                            this._onModalOpen()
                    }
                        .bind(this)),
                    this._calcAspectRatio()
            }
            ,
            l._calcAspectRatio = function () {
                this._aspectRatio = this._player.getMediaWidth() / this._player.getMediaHeight(),
                    (isNaN(this._aspectRatio) || this._aspectRatio <= 0) && this._player.getCurrentSrc() && n.test(this._player.getCurrentSrc()) && (this._aspectRatio = parseInt(RegExp.$1, 10) / parseInt(RegExp.$2, 10)),
                    (isNaN(this._aspectRatio) || this._aspectRatio <= 0) && this._posterEl && (this._aspectRatio = this._posterEl.naturalWidth / this._posterEl.naturalHeight),
                    this._onResize()
            }
            ,
            l._fullScreenChange = function (e) {
                if (e && "enter" === e.type)
                    return clearTimeout(this._fullScreenChangeTimeout),
                        void (this._fullScreenChangeTimeout = setTimeout(function () {
                            this._isFullScreen = !0,
                                this._onResize()
                        }
                            .bind(this), 60));
                this._isFullScreen = this._player.isFullscreen(),
                    this._onResize()
            }
            ,
            l.destroy = function () {
                clearTimeout(this._fullScreenChangeTimeout),
                    this._removeEventListeners()
            }
            ,
            l._onResize = function () {
                var e = this._aspectRatio;
                if (isNaN(e))
                    return this._mediaElement.style.width = "",
                        void (this._mediaElement.style.height = "");
                var t = window.innerWidth
                    , i = window.innerHeight
                    , n = t / i;
                if (this._mediaElement.readyState < 1) {
                    var r = parseInt(getComputedStyle(this._playerContainer).maxWidth.replace("px", ""))
                        , o = r / e
                        , a = s ? parseInt(getComputedStyle(this._player.el).maxHeight.replace("px", "")) : o
                        , l = parseInt(getComputedStyle(this._player.el).margin.replace("px", ""));
                    (o > i || a && o > a) && (r = (a || i) * e - 2 * l,
                        o = Math.min(r / e, i)),
                        (r > t || r > o * e) && (r = (o = Math.min(t / e, i)) * e),
                        l && (o = (r -= 2 * l) / e),
                        this._mediaElement.style.width = r + "px",
                        this._mediaElement.style.height = Math.min(o, i) + "px"
                } else
                    this._mediaElement.style.width = "",
                        this._mediaElement.style.height = "";
                n > e && !this._isFullScreen ? this._playerContainer.parentElement.classList.add("center-horizontal") : this._playerContainer.parentElement.classList.remove("center-horizontal"),
                    this._player.refreshSize()
            }
            ,
            t.exports = a
    }
        , {
        "@marcom/feature-detect/touchAvailable": 127,
        "@marcom/useragent-detect": 132
    }],
    148: [function (e, t, i) {
        "use strict";
        var n = !1;
        window.addEventListener("load", function () {
            n = !0
        }),
            t.exports = function (e) {
                n ? e() : window.addEventListener("load", e)
            }
    }
        , {}],
    149: [function (e, t, i) {
        "use strict";
        t.exports = {
            major: 4,
            minor: 9,
            patch: 0,
            prerelease: null,
            toString: function () {
                return "4.9.0 (d8859afa)"
            },
            toArray: function () {
                return [4, 9, 0]
            }
        }
    }
        , {}],
    150: [function (e, t, i) {
        arguments[4][4][0].apply(i, arguments)
    }
        , {
        dup: 4
    }],
    151: [function (e, t, i) {
        "use strict";
        function n(e, t, i, n, r, o, s) {
            try {
                var a = e[o](s)
                    , l = a.value
            } catch (e) {
                return void i(e)
            }
            a.done ? t(l) : Promise.resolve(l).then(n, r)
        }
        t.exports = function (e) {
            return function () {
                var t = this
                    , i = arguments;
                return new Promise(function (r, o) {
                    var s = e.apply(t, i);
                    function a(e) {
                        n(s, r, o, a, l, "next", e)
                    }
                    function l(e) {
                        n(s, r, o, a, l, "throw", e)
                    }
                    a(void 0)
                }
                )
            }
        }
            ,
            t.exports.__esModule = !0,
            t.exports.default = t.exports
    }
        , {}],
    152: [function (e, t, i) {
        arguments[4][5][0].apply(i, arguments)
    }
        , {
        dup: 5
    }],
    153: [function (e, t, i) {
        arguments[4][6][0].apply(i, arguments)
    }
        , {
        "./toPropertyKey.js": 163,
        dup: 6
    }],
    154: [function (e, t, i) {
        arguments[4][7][0].apply(i, arguments)
    }
        , {
        "./superPropBase.js": 161,
        dup: 7
    }],
    155: [function (e, t, i) {
        arguments[4][8][0].apply(i, arguments)
    }
        , {
        dup: 8
    }],
    156: [function (e, t, i) {
        arguments[4][9][0].apply(i, arguments)
    }
        , {
        "./setPrototypeOf.js": 160,
        dup: 9
    }],
    157: [function (e, t, i) {
        arguments[4][10][0].apply(i, arguments)
    }
        , {
        dup: 10
    }],
    158: [function (e, t, i) {
        arguments[4][13][0].apply(i, arguments)
    }
        , {
        "./assertThisInitialized.js": 150,
        "./typeof.js": 164,
        dup: 13
    }],
    159: [function (e, t, i) {
        "use strict";
        var n = e("./typeof.js").default;
        function r() {
            t.exports = r = function () {
                return e
            }
                ,
                t.exports.__esModule = !0,
                t.exports.default = t.exports;
            var e = {}
                , i = Object.prototype
                , o = i.hasOwnProperty
                , s = Object.defineProperty || function (e, t, i) {
                    e[t] = i.value
                }
                , a = "function" == typeof Symbol ? Symbol : {}
                , l = a.iterator || "@@iterator"
                , c = a.asyncIterator || "@@asyncIterator"
                , u = a.toStringTag || "@@toStringTag";
            function h(e, t, i) {
                return Object.defineProperty(e, t, {
                    value: i,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }),
                    e[t]
            }
            try {
                h({}, "")
            } catch (e) {
                h = function (e, t, i) {
                    return e[t] = i
                }
            }
            function d(e, t, i, n) {
                var r = t && t.prototype instanceof m ? t : m
                    , o = Object.create(r.prototype)
                    , a = new S(n || []);
                return s(o, "_invoke", {
                    value: function (e, t, i) {
                        var n = "suspendedStart";
                        return function (r, o) {
                            if ("executing" === n)
                                throw new Error("Generator is already running");
                            if ("completed" === n) {
                                if ("throw" === r)
                                    throw o;
                                return A()
                            }
                            for (i.method = r,
                                i.arg = o; ;) {
                                var s = i.delegate;
                                if (s) {
                                    var a = x(s, i);
                                    if (a) {
                                        if (a === f)
                                            continue;
                                        return a
                                    }
                                }
                                if ("next" === i.method)
                                    i.sent = i._sent = i.arg;
                                else if ("throw" === i.method) {
                                    if ("suspendedStart" === n)
                                        throw n = "completed",
                                        i.arg;
                                    i.dispatchException(i.arg)
                                } else
                                    "return" === i.method && i.abrupt("return", i.arg);
                                n = "executing";
                                var l = p(e, t, i);
                                if ("normal" === l.type) {
                                    if (n = i.done ? "completed" : "suspendedYield",
                                        l.arg === f)
                                        continue;
                                    return {
                                        value: l.arg,
                                        done: i.done
                                    }
                                }
                                "throw" === l.type && (n = "completed",
                                    i.method = "throw",
                                    i.arg = l.arg)
                            }
                        }
                    }(e, i, a)
                }),
                    o
            }
            function p(e, t, i) {
                try {
                    return {
                        type: "normal",
                        arg: e.call(t, i)
                    }
                } catch (e) {
                    return {
                        type: "throw",
                        arg: e
                    }
                }
            }
            e.wrap = d;
            var f = {};
            function m() { }
            function _() { }
            function v() { }
            var b = {};
            h(b, l, function () {
                return this
            });
            var y = Object.getPrototypeOf
                , g = y && y(y(O([])));
            g && g !== i && o.call(g, l) && (b = g);
            var E = v.prototype = m.prototype = Object.create(b);
            function w(e) {
                ["next", "throw", "return"].forEach(function (t) {
                    h(e, t, function (e) {
                        return this._invoke(t, e)
                    })
                })
            }
            function k(e, t) {
                var i;
                s(this, "_invoke", {
                    value: function (r, s) {
                        function a() {
                            return new t(function (i, a) {
                                !function i(r, s, a, l) {
                                    var c = p(e[r], e, s);
                                    if ("throw" !== c.type) {
                                        var u = c.arg
                                            , h = u.value;
                                        return h && "object" == n(h) && o.call(h, "__await") ? t.resolve(h.__await).then(function (e) {
                                            i("next", e, a, l)
                                        }, function (e) {
                                            i("throw", e, a, l)
                                        }) : t.resolve(h).then(function (e) {
                                            u.value = e,
                                                a(u)
                                        }, function (e) {
                                            return i("throw", e, a, l)
                                        })
                                    }
                                    l(c.arg)
                                }(r, s, i, a)
                            }
                            )
                        }
                        return i = i ? i.then(a, a) : a()
                    }
                })
            }
            function x(e, t) {
                var i = t.method
                    , n = e.iterator[i];
                if (void 0 === n)
                    return t.delegate = null,
                        "throw" === i && e.iterator.return && (t.method = "return",
                            t.arg = void 0,
                            x(e, t),
                            "throw" === t.method) || "return" !== i && (t.method = "throw",
                                t.arg = new TypeError("The iterator does not provide a '" + i + "' method")),
                        f;
                var r = p(n, e.iterator, t.arg);
                if ("throw" === r.type)
                    return t.method = "throw",
                        t.arg = r.arg,
                        t.delegate = null,
                        f;
                var o = r.arg;
                return o ? o.done ? (t[e.resultName] = o.value,
                    t.next = e.nextLoc,
                    "return" !== t.method && (t.method = "next",
                        t.arg = void 0),
                    t.delegate = null,
                    f) : o : (t.method = "throw",
                        t.arg = new TypeError("iterator result is not an object"),
                        t.delegate = null,
                        f)
            }
            function C(e) {
                var t = {
                    tryLoc: e[0]
                };
                1 in e && (t.catchLoc = e[1]),
                    2 in e && (t.finallyLoc = e[2],
                        t.afterLoc = e[3]),
                    this.tryEntries.push(t)
            }
            function T(e) {
                var t = e.completion || {};
                t.type = "normal",
                    delete t.arg,
                    e.completion = t
            }
            function S(e) {
                this.tryEntries = [{
                    tryLoc: "root"
                }],
                    e.forEach(C, this),
                    this.reset(!0)
            }
            function O(e) {
                if (e) {
                    var t = e[l];
                    if (t)
                        return t.call(e);
                    if ("function" == typeof e.next)
                        return e;
                    if (!isNaN(e.length)) {
                        var i = -1
                            , n = function t() {
                                for (; ++i < e.length;)
                                    if (o.call(e, i))
                                        return t.value = e[i],
                                            t.done = !1,
                                            t;
                                return t.value = void 0,
                                    t.done = !0,
                                    t
                            };
                        return n.next = n
                    }
                }
                return {
                    next: A
                }
            }
            function A() {
                return {
                    value: void 0,
                    done: !0
                }
            }
            return _.prototype = v,
                s(E, "constructor", {
                    value: v,
                    configurable: !0
                }),
                s(v, "constructor", {
                    value: _,
                    configurable: !0
                }),
                _.displayName = h(v, u, "GeneratorFunction"),
                e.isGeneratorFunction = function (e) {
                    var t = "function" == typeof e && e.constructor;
                    return !!t && (t === _ || "GeneratorFunction" === (t.displayName || t.name))
                }
                ,
                e.mark = function (e) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(e, v) : (e.__proto__ = v,
                        h(e, u, "GeneratorFunction")),
                        e.prototype = Object.create(E),
                        e
                }
                ,
                e.awrap = function (e) {
                    return {
                        __await: e
                    }
                }
                ,
                w(k.prototype),
                h(k.prototype, c, function () {
                    return this
                }),
                e.AsyncIterator = k,
                e.async = function (t, i, n, r, o) {
                    void 0 === o && (o = Promise);
                    var s = new k(d(t, i, n, r), o);
                    return e.isGeneratorFunction(i) ? s : s.next().then(function (e) {
                        return e.done ? e.value : s.next()
                    })
                }
                ,
                w(E),
                h(E, u, "Generator"),
                h(E, l, function () {
                    return this
                }),
                h(E, "toString", function () {
                    return "[object Generator]"
                }),
                e.keys = function (e) {
                    var t = Object(e)
                        , i = [];
                    for (var n in t)
                        i.push(n);
                    return i.reverse(),
                        function e() {
                            for (; i.length;) {
                                var n = i.pop();
                                if (n in t)
                                    return e.value = n,
                                        e.done = !1,
                                        e
                            }
                            return e.done = !0,
                                e
                        }
                }
                ,
                e.values = O,
                S.prototype = {
                    constructor: S,
                    reset: function (e) {
                        if (this.prev = 0,
                            this.next = 0,
                            this.sent = this._sent = void 0,
                            this.done = !1,
                            this.delegate = null,
                            this.method = "next",
                            this.arg = void 0,
                            this.tryEntries.forEach(T),
                            !e)
                            for (var t in this)
                                "t" === t.charAt(0) && o.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = void 0)
                    },
                    stop: function () {
                        this.done = !0;
                        var e = this.tryEntries[0].completion;
                        if ("throw" === e.type)
                            throw e.arg;
                        return this.rval
                    },
                    dispatchException: function (e) {
                        if (this.done)
                            throw e;
                        var t = this;
                        function i(i, n) {
                            return s.type = "throw",
                                s.arg = e,
                                t.next = i,
                                n && (t.method = "next",
                                    t.arg = void 0),
                                !!n
                        }
                        for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                            var r = this.tryEntries[n]
                                , s = r.completion;
                            if ("root" === r.tryLoc)
                                return i("end");
                            if (r.tryLoc <= this.prev) {
                                var a = o.call(r, "catchLoc")
                                    , l = o.call(r, "finallyLoc");
                                if (a && l) {
                                    if (this.prev < r.catchLoc)
                                        return i(r.catchLoc, !0);
                                    if (this.prev < r.finallyLoc)
                                        return i(r.finallyLoc)
                                } else if (a) {
                                    if (this.prev < r.catchLoc)
                                        return i(r.catchLoc, !0)
                                } else {
                                    if (!l)
                                        throw new Error("try statement without catch or finally");
                                    if (this.prev < r.finallyLoc)
                                        return i(r.finallyLoc)
                                }
                            }
                        }
                    },
                    abrupt: function (e, t) {
                        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                            var n = this.tryEntries[i];
                            if (n.tryLoc <= this.prev && o.call(n, "finallyLoc") && this.prev < n.finallyLoc) {
                                var r = n;
                                break
                            }
                        }
                        r && ("break" === e || "continue" === e) && r.tryLoc <= t && t <= r.finallyLoc && (r = null);
                        var s = r ? r.completion : {};
                        return s.type = e,
                            s.arg = t,
                            r ? (this.method = "next",
                                this.next = r.finallyLoc,
                                f) : this.complete(s)
                    },
                    complete: function (e, t) {
                        if ("throw" === e.type)
                            throw e.arg;
                        return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg,
                            this.method = "return",
                            this.next = "end") : "normal" === e.type && t && (this.next = t),
                            f
                    },
                    finish: function (e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var i = this.tryEntries[t];
                            if (i.finallyLoc === e)
                                return this.complete(i.completion, i.afterLoc),
                                    T(i),
                                    f
                        }
                    },
                    catch: function (e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var i = this.tryEntries[t];
                            if (i.tryLoc === e) {
                                var n = i.completion;
                                if ("throw" === n.type) {
                                    var r = n.arg;
                                    T(i)
                                }
                                return r
                            }
                        }
                        throw new Error("illegal catch attempt")
                    },
                    delegateYield: function (e, t, i) {
                        return this.delegate = {
                            iterator: O(e),
                            resultName: t,
                            nextLoc: i
                        },
                            "next" === this.method && (this.arg = void 0),
                            f
                    }
                },
                e
        }
        t.exports = r,
            t.exports.__esModule = !0,
            t.exports.default = t.exports
    }
        , {
        "./typeof.js": 164
    }],
    160: [function (e, t, i) {
        arguments[4][14][0].apply(i, arguments)
    }
        , {
        dup: 14
    }],
    161: [function (e, t, i) {
        arguments[4][15][0].apply(i, arguments)
    }
        , {
        "./getPrototypeOf.js": 155,
        dup: 15
    }],
    162: [function (e, t, i) {
        "use strict";
        var n = e("./typeof.js").default;
        t.exports = function (e, t) {
            if ("object" !== n(e) || null === e)
                return e;
            var i = e[Symbol.toPrimitive];
            if (void 0 !== i) {
                var r = i.call(e, t || "default");
                if ("object" !== n(r))
                    return r;
                throw new TypeError("@@toPrimitive must return a primitive value.")
            }
            return ("string" === t ? String : Number)(e)
        }
            ,
            t.exports.__esModule = !0,
            t.exports.default = t.exports
    }
        , {
        "./typeof.js": 164
    }],
    163: [function (e, t, i) {
        "use strict";
        var n = e("./typeof.js").default
            , r = e("./toPrimitive.js");
        t.exports = function (e) {
            var t = r(e, "string");
            return "symbol" === n(t) ? t : String(t)
        }
            ,
            t.exports.__esModule = !0,
            t.exports.default = t.exports
    }
        , {
        "./toPrimitive.js": 162,
        "./typeof.js": 164
    }],
    164: [function (e, t, i) {
        "use strict";
        function n(e) {
            "@babel/helpers - typeof";
            return t.exports = n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            }
                : function (e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }
                ,
                t.exports.__esModule = !0,
                t.exports.default = t.exports,
                n(e)
        }
        t.exports = n,
            t.exports.__esModule = !0,
            t.exports.default = t.exports
    }
        , {}],
    165: [function (e, t, i) {
        "use strict";
        var n = e("@babel/runtime/helpers/interopRequireDefault")(e("@babel/runtime/helpers/typeof"))
            , r = e("../helpers/regeneratorRuntime")();
        t.exports = r;
        try {
            regeneratorRuntime = r
        } catch (e) {
            "object" === ("undefined" == typeof globalThis ? "undefined" : (0,
                n.default)(globalThis)) ? globalThis.regeneratorRuntime = r : Function("r", "regeneratorRuntime = r")(r)
        }
    }
        , {
        "../helpers/regeneratorRuntime": 159,
        "@babel/runtime/helpers/interopRequireDefault": 157,
        "@babel/runtime/helpers/typeof": 164
    }],
    166: [function (e, t, i) {
        "use strict";
        t.exports = {
            majorVersionNumber: "3.x"
        }
    }
        , {}],
    167: [function (e, t, i) {
        "use strict";
        var n, r = e("@marcom/ac-event-emitter-micro").EventEmitterMicro, o = e("./sharedRAFExecutorInstance"), s = e("./sharedRAFEmitterIDGeneratorInstance");
        function a(e) {
            e = e || {},
                r.call(this),
                this.id = s.getNewID(),
                this.executor = e.executor || o,
                this._reset(),
                this._willRun = !1,
                this._didDestroy = !1
        }
        (n = a.prototype = Object.create(r.prototype)).run = function () {
            return this._willRun || (this._willRun = !0),
                this._subscribe()
        }
            ,
            n.cancel = function () {
                this._unsubscribe(),
                    this._willRun && (this._willRun = !1),
                    this._reset()
            }
            ,
            n.destroy = function () {
                var e = this.willRun();
                return this.cancel(),
                    this.executor = null,
                    r.prototype.destroy.call(this),
                    this._didDestroy = !0,
                    e
            }
            ,
            n.willRun = function () {
                return this._willRun
            }
            ,
            n.isRunning = function () {
                return this._isRunning
            }
            ,
            n._subscribe = function () {
                return this.executor.subscribe(this)
            }
            ,
            n._unsubscribe = function () {
                return this.executor.unsubscribe(this)
            }
            ,
            n._onAnimationFrameStart = function (e) {
                this._isRunning = !0,
                    this._willRun = !1,
                    this._didEmitFrameData || (this._didEmitFrameData = !0,
                        this.trigger("start", e))
            }
            ,
            n._onAnimationFrameEnd = function (e) {
                this._willRun || (this.trigger("stop", e),
                    this._reset())
            }
            ,
            n._reset = function () {
                this._didEmitFrameData = !1,
                    this._isRunning = !1
            }
            ,
            t.exports = a
    }
        , {
        "./sharedRAFEmitterIDGeneratorInstance": 173,
        "./sharedRAFExecutorInstance": 174,
        "@marcom/ac-event-emitter-micro": 229
    }],
    168: [function (e, t, i) {
        "use strict";
        var n, r = e("@marcom/ac-event-emitter-micro/EventEmitterMicro");
        function o(e) {
            e = e || {},
                this._reset(),
                this.updatePhases(),
                this.eventEmitter = new r,
                this._willRun = !1,
                this._totalSubscribeCount = -1;
            var t = null
                , i = null;
            "undefined" != typeof window ? (t = window.requestAnimationFrame,
                i = window.cancelAnimationFrame) : t = i = function () { }
                ,
                this._requestAnimationFrame = t,
                this._cancelAnimationFrame = i,
                this._boundOnAnimationFrame = this._onAnimationFrame.bind(this),
                this._boundOnExternalAnimationFrame = this._onExternalAnimationFrame.bind(this)
        }
        (n = o.prototype).frameRequestedPhase = "requested",
            n.startPhase = "start",
            n.runPhases = ["update", "external", "draw"],
            n.endPhase = "end",
            n.disabledPhase = "disabled",
            n.beforePhaseEventPrefix = "before:",
            n.afterPhaseEventPrefix = "after:",
            n.subscribe = function (e, t) {
                return this._totalSubscribeCount++,
                    this._nextFrameSubscribers[e.id] || (t ? this._nextFrameSubscribersOrder.unshift(e.id) : this._nextFrameSubscribersOrder.push(e.id),
                        this._nextFrameSubscribers[e.id] = e,
                        this._nextFrameSubscriberArrayLength++,
                        this._nextFrameSubscriberCount++,
                        this._run()),
                    this._totalSubscribeCount
            }
            ,
            n.subscribeImmediate = function (e, t) {
                return this._totalSubscribeCount++,
                    this._subscribers[e.id] || (t ? this._subscribersOrder.splice(this._currentSubscriberIndex + 1, 0, e.id) : this._subscribersOrder.unshift(e.id),
                        this._subscribers[e.id] = e,
                        this._subscriberArrayLength++,
                        this._subscriberCount++),
                    this._totalSubscribeCount
            }
            ,
            n.unsubscribe = function (e) {
                return !!this._nextFrameSubscribers[e.id] && (this._nextFrameSubscribers[e.id] = null,
                    this._nextFrameSubscriberCount--,
                    0 === this._nextFrameSubscriberCount && this._cancel(),
                    !0)
            }
            ,
            n.getSubscribeID = function () {
                return this._totalSubscribeCount += 1
            }
            ,
            n.destroy = function () {
                var e = this._cancel();
                return this.eventEmitter.destroy(),
                    this.eventEmitter = null,
                    this.phases = null,
                    this._subscribers = null,
                    this._subscribersOrder = null,
                    this._nextFrameSubscribers = null,
                    this._nextFrameSubscribersOrder = null,
                    this._rafData = null,
                    this._boundOnAnimationFrame = null,
                    this._onExternalAnimationFrame = null,
                    e
            }
            ,
            n.useExternalAnimationFrame = function (e) {
                if ("boolean" == typeof e) {
                    var t = this._isUsingExternalAnimationFrame;
                    return e && this._animationFrame && (this._cancelAnimationFrame.call(window, this._animationFrame),
                        this._animationFrame = null),
                        !this._willRun || e || this._animationFrame || (this._animationFrame = this._requestAnimationFrame.call(window, this._boundOnAnimationFrame)),
                        this._isUsingExternalAnimationFrame = e,
                        e ? this._boundOnExternalAnimationFrame : t || !1
                }
            }
            ,
            n.updatePhases = function () {
                this.phases || (this.phases = []),
                    this.phases.length = 0,
                    this.phases.push(this.frameRequestedPhase),
                    this.phases.push(this.startPhase),
                    Array.prototype.push.apply(this.phases, this.runPhases),
                    this.phases.push(this.endPhase),
                    this._runPhasesLength = this.runPhases.length,
                    this._phasesLength = this.phases.length
            }
            ,
            n._run = function () {
                if (!this._willRun)
                    return this._willRun = !0,
                        0 === this.lastFrameTime && (this.lastFrameTime = performance.now()),
                        this._animationFrameActive = !0,
                        this._isUsingExternalAnimationFrame || (this._animationFrame = this._requestAnimationFrame.call(window, this._boundOnAnimationFrame)),
                        this.phase === this.disabledPhase && (this.phaseIndex = 0,
                            this.phase = this.phases[this.phaseIndex]),
                        !0
            }
            ,
            n._cancel = function () {
                var e = !1;
                return this._animationFrameActive && (this._animationFrame && (this._cancelAnimationFrame.call(window, this._animationFrame),
                    this._animationFrame = null),
                    this._animationFrameActive = !1,
                    this._willRun = !1,
                    e = !0),
                    this._isRunning || this._reset(),
                    e
            }
            ,
            n._onAnimationFrame = function (e) {
                for (this._subscribers = this._nextFrameSubscribers,
                    this._subscribersOrder = this._nextFrameSubscribersOrder,
                    this._subscriberArrayLength = this._nextFrameSubscriberArrayLength,
                    this._subscriberCount = this._nextFrameSubscriberCount,
                    this._nextFrameSubscribers = {},
                    this._nextFrameSubscribersOrder = [],
                    this._nextFrameSubscriberArrayLength = 0,
                    this._nextFrameSubscriberCount = 0,
                    this.phaseIndex = 0,
                    this.phase = this.phases[this.phaseIndex],
                    this._isRunning = !0,
                    this._willRun = !1,
                    this._didRequestNextRAF = !1,
                    this._rafData.delta = e - this.lastFrameTime,
                    this.lastFrameTime = e,
                    this._rafData.fps = 0,
                    this._rafData.delta >= 1e3 && (this._rafData.delta = 0),
                    0 !== this._rafData.delta && (this._rafData.fps = 1e3 / this._rafData.delta),
                    this._rafData.time = e,
                    this._rafData.naturalFps = this._rafData.fps,
                    this._rafData.timeNow = Date.now(),
                    this.phaseIndex++,
                    this.phase = this.phases[this.phaseIndex],
                    this.eventEmitter.trigger(this.beforePhaseEventPrefix + this.phase),
                    this._currentSubscriberIndex = 0; this._currentSubscriberIndex < this._subscriberArrayLength; this._currentSubscriberIndex++)
                    null !== this._subscribers[this._subscribersOrder[this._currentSubscriberIndex]] && !1 === this._subscribers[this._subscribersOrder[this._currentSubscriberIndex]]._didDestroy && this._subscribers[this._subscribersOrder[this._currentSubscriberIndex]]._onAnimationFrameStart(this._rafData);
                for (this.eventEmitter.trigger(this.afterPhaseEventPrefix + this.phase),
                    this._runPhaseIndex = 0; this._runPhaseIndex < this._runPhasesLength; this._runPhaseIndex++) {
                    for (this.phaseIndex++,
                        this.phase = this.phases[this.phaseIndex],
                        this.eventEmitter.trigger(this.beforePhaseEventPrefix + this.phase),
                        this._currentSubscriberIndex = 0; this._currentSubscriberIndex < this._subscriberArrayLength; this._currentSubscriberIndex++)
                        null !== this._subscribers[this._subscribersOrder[this._currentSubscriberIndex]] && !1 === this._subscribers[this._subscribersOrder[this._currentSubscriberIndex]]._didDestroy && this._subscribers[this._subscribersOrder[this._currentSubscriberIndex]].trigger(this.phase, this._rafData);
                    this.eventEmitter.trigger(this.afterPhaseEventPrefix + this.phase)
                }
                for (this.phaseIndex++,
                    this.phase = this.phases[this.phaseIndex],
                    this.eventEmitter.trigger(this.beforePhaseEventPrefix + this.phase),
                    this._currentSubscriberIndex = 0; this._currentSubscriberIndex < this._subscriberArrayLength; this._currentSubscriberIndex++)
                    null !== this._subscribers[this._subscribersOrder[this._currentSubscriberIndex]] && !1 === this._subscribers[this._subscribersOrder[this._currentSubscriberIndex]]._didDestroy && this._subscribers[this._subscribersOrder[this._currentSubscriberIndex]]._onAnimationFrameEnd(this._rafData);
                this.eventEmitter.trigger(this.afterPhaseEventPrefix + this.phase),
                    this._willRun ? (this.phaseIndex = 0,
                        this.phaseIndex = this.phases[this.phaseIndex]) : this._reset()
            }
            ,
            n._onExternalAnimationFrame = function (e) {
                this._isUsingExternalAnimationFrame && this._onAnimationFrame(e)
            }
            ,
            n._reset = function () {
                this._rafData || (this._rafData = {}),
                    this._rafData.time = 0,
                    this._rafData.delta = 0,
                    this._rafData.fps = 0,
                    this._rafData.naturalFps = 0,
                    this._rafData.timeNow = 0,
                    this._subscribers = {},
                    this._subscribersOrder = [],
                    this._currentSubscriberIndex = -1,
                    this._subscriberArrayLength = 0,
                    this._subscriberCount = 0,
                    this._nextFrameSubscribers = {},
                    this._nextFrameSubscribersOrder = [],
                    this._nextFrameSubscriberArrayLength = 0,
                    this._nextFrameSubscriberCount = 0,
                    this._didEmitFrameData = !1,
                    this._animationFrame = null,
                    this._animationFrameActive = !1,
                    this._isRunning = !1,
                    this._shouldReset = !1,
                    this.lastFrameTime = 0,
                    this._runPhaseIndex = -1,
                    this.phaseIndex = -1,
                    this.phase = this.disabledPhase
            }
            ,
            t.exports = o
    }
        , {
        "@marcom/ac-event-emitter-micro/EventEmitterMicro": 230
    }],
    169: [function (e, t, i) {
        "use strict";
        var n = e("./SingleCallRAFEmitter")
            , r = function (e) {
                this.phase = e,
                    this.rafEmitter = new n,
                    this._cachePhaseIndex(),
                    this.requestAnimationFrame = this.requestAnimationFrame.bind(this),
                    this.cancelAnimationFrame = this.cancelAnimationFrame.bind(this),
                    this._onBeforeRAFExecutorStart = this._onBeforeRAFExecutorStart.bind(this),
                    this._onBeforeRAFExecutorPhase = this._onBeforeRAFExecutorPhase.bind(this),
                    this._onAfterRAFExecutorPhase = this._onAfterRAFExecutorPhase.bind(this),
                    this.rafEmitter.on(this.phase, this._onRAFExecuted.bind(this)),
                    this.rafEmitter.executor.eventEmitter.on("before:start", this._onBeforeRAFExecutorStart),
                    this.rafEmitter.executor.eventEmitter.on("before:" + this.phase, this._onBeforeRAFExecutorPhase),
                    this.rafEmitter.executor.eventEmitter.on("after:" + this.phase, this._onAfterRAFExecutorPhase),
                    this._frameCallbacks = [],
                    this._currentFrameCallbacks = [],
                    this._nextFrameCallbacks = [],
                    this._phaseActive = !1,
                    this._currentFrameID = -1,
                    this._cancelFrameIdx = -1,
                    this._frameCallbackLength = 0,
                    this._currentFrameCallbacksLength = 0,
                    this._nextFrameCallbacksLength = 0,
                    this._frameCallbackIteration = 0
            }
            , o = r.prototype;
        o.requestAnimationFrame = function (e, t) {
            return !0 === t && this.rafEmitter.executor.phaseIndex > 0 && this.rafEmitter.executor.phaseIndex <= this.phaseIndex ? this._phaseActive ? (this._currentFrameID = this.rafEmitter.executor.subscribeImmediate(this.rafEmitter, !0),
                this._frameCallbacks.push(this._currentFrameID, e),
                this._frameCallbackLength += 2) : (this._currentFrameID = this.rafEmitter.executor.subscribeImmediate(this.rafEmitter, !1),
                    this._currentFrameCallbacks.push(this._currentFrameID, e),
                    this._currentFrameCallbacksLength += 2) : (this._currentFrameID = this.rafEmitter.run(),
                        this._nextFrameCallbacks.push(this._currentFrameID, e),
                        this._nextFrameCallbacksLength += 2),
                this._currentFrameID
        }
            ,
            o.cancelAnimationFrame = function (e) {
                this._cancelFrameIdx = this._nextFrameCallbacks.indexOf(e),
                    this._cancelFrameIdx > -1 ? this._cancelNextAnimationFrame() : (this._cancelFrameIdx = this._currentFrameCallbacks.indexOf(e),
                        this._cancelFrameIdx > -1 ? this._cancelCurrentAnimationFrame() : (this._cancelFrameIdx = this._frameCallbacks.indexOf(e),
                            this._cancelFrameIdx > -1 && this._cancelRunningAnimationFrame()))
            }
            ,
            o._onRAFExecuted = function (e) {
                for (this._frameCallbackIteration = 0; this._frameCallbackIteration < this._frameCallbackLength; this._frameCallbackIteration += 2)
                    this._frameCallbacks[this._frameCallbackIteration + 1](e.time, e);
                this._frameCallbacks.length = 0,
                    this._frameCallbackLength = 0
            }
            ,
            o._onBeforeRAFExecutorStart = function () {
                Array.prototype.push.apply(this._currentFrameCallbacks, this._nextFrameCallbacks.splice(0, this._nextFrameCallbacksLength)),
                    this._currentFrameCallbacksLength = this._nextFrameCallbacksLength,
                    this._nextFrameCallbacks.length = 0,
                    this._nextFrameCallbacksLength = 0
            }
            ,
            o._onBeforeRAFExecutorPhase = function () {
                this._phaseActive = !0,
                    Array.prototype.push.apply(this._frameCallbacks, this._currentFrameCallbacks.splice(0, this._currentFrameCallbacksLength)),
                    this._frameCallbackLength = this._currentFrameCallbacksLength,
                    this._currentFrameCallbacks.length = 0,
                    this._currentFrameCallbacksLength = 0
            }
            ,
            o._onAfterRAFExecutorPhase = function () {
                this._phaseActive = !1
            }
            ,
            o._cachePhaseIndex = function () {
                this.phaseIndex = this.rafEmitter.executor.phases.indexOf(this.phase)
            }
            ,
            o._cancelRunningAnimationFrame = function () {
                this._frameCallbacks.splice(this._cancelFrameIdx, 2),
                    this._frameCallbackLength -= 2
            }
            ,
            o._cancelCurrentAnimationFrame = function () {
                this._currentFrameCallbacks.splice(this._cancelFrameIdx, 2),
                    this._currentFrameCallbacksLength -= 2
            }
            ,
            o._cancelNextAnimationFrame = function () {
                this._nextFrameCallbacks.splice(this._cancelFrameIdx, 2),
                    this._nextFrameCallbacksLength -= 2,
                    0 === this._nextFrameCallbacksLength && this.rafEmitter.cancel()
            }
            ,
            t.exports = r
    }
        , {
        "./SingleCallRAFEmitter": 171
    }],
    170: [function (e, t, i) {
        "use strict";
        var n = e("./RAFInterface")
            , r = function () {
                this.events = {}
            }
            , o = r.prototype;
        o.requestAnimationFrame = function (e) {
            return this.events[e] || (this.events[e] = new n(e)),
                this.events[e].requestAnimationFrame
        }
            ,
            o.cancelAnimationFrame = function (e) {
                return this.events[e] || (this.events[e] = new n(e)),
                    this.events[e].cancelAnimationFrame
            }
            ,
            t.exports = new r
    }
        , {
        "./RAFInterface": 169
    }],
    171: [function (e, t, i) {
        "use strict";
        var n = e("./RAFEmitter")
            , r = function (e) {
                n.call(this, e)
            };
        (r.prototype = Object.create(n.prototype))._subscribe = function () {
            return this.executor.subscribe(this, !0)
        }
            ,
            t.exports = r
    }
        , {
        "./RAFEmitter": 167
    }],
    172: [function (e, t, i) {
        "use strict";
        var n = e("./RAFInterfaceController");
        t.exports = n.cancelAnimationFrame("update")
    }
        , {
        "./RAFInterfaceController": 170
    }],
    173: [function (e, t, i) {
        "use strict";
        var n = e("@marcom/ac-shared-instance").SharedInstance
            , r = e("../.release-info.js").majorVersionNumber
            , o = function () {
                this._currentID = 0
            };
        o.prototype.getNewID = function () {
            return this._currentID++,
                "raf:" + this._currentID
        }
            ,
            t.exports = n.share("@marcom/ac-raf-emitter/sharedRAFEmitterIDGeneratorInstance", r, o)
    }
        , {
        "../.release-info.js": 166,
        "@marcom/ac-shared-instance": 278
    }],
    174: [function (e, t, i) {
        "use strict";
        var n = e("@marcom/ac-shared-instance").SharedInstance
            , r = e("../.release-info.js").majorVersionNumber
            , o = e("./RAFExecutor");
        t.exports = n.share("@marcom/ac-raf-emitter/sharedRAFExecutorInstance", r, o)
    }
        , {
        "../.release-info.js": 166,
        "./RAFExecutor": 168,
        "@marcom/ac-shared-instance": 278
    }],
    175: [function (e, t, i) {
        "use strict";
        var n = e("./RAFInterfaceController");
        t.exports = n.requestAnimationFrame("update")
    }
        , {
        "./RAFInterfaceController": 170
    }],
    176: [function (e, t, i) {
        "use strict";
        var n = e("@babel/runtime/helpers/interopRequireDefault")
            , r = n(e("@babel/runtime/regenerator"))
            , o = n(e("@babel/runtime/helpers/asyncToGenerator"))
            , s = n(e("@babel/runtime/helpers/classCallCheck"))
            , a = n(e("@babel/runtime/helpers/createClass"))
            , l = n(e("@babel/runtime/helpers/possibleConstructorReturn"))
            , c = n(e("@babel/runtime/helpers/get"))
            , u = n(e("@babel/runtime/helpers/getPrototypeOf"))
            , h = n(e("@babel/runtime/helpers/inherits"));
        function d(e, t, i) {
            return t = (0,
                u.default)(t),
                (0,
                    l.default)(e, function () {
                        try {
                            var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () { }))
                        } catch (e) { }
                        return function () {
                            return !!e
                        }()
                    }() ? Reflect.construct(t, i || [], (0,
                        u.default)(e).constructor) : t.apply(e, i))
        }
        e("./utils/vector3FromLatLon");
        var p = e("@marcom/ac-raf-emitter/update")
            , f = e("@marcom/ac-raf-emitter/cancelUpdate")
            , m = e("./controls/PointerControls")
            , _ = e("./controls/OrientationControls")
            , v = e("@marcom/ac-event-emitter-micro/EventEmitterMicro")
            , b = e("@marcom/ac-easing/src/ac-easing/createBezier")
            , y = e("./renderers/SphericalRenderer")
            , g = e("./utils/simpleTimer")
            , E = e("./utils/inverseLongitude")
            , w = e("./controls/ArrowControls")
            , k = e("./utils/map")
            , x = e("@marcom/ac-feature/webGLAvailable")()
            , C = e("./utils/loadScript")
            , T = e("@marcom/useragent-detect").os.ios
            , S = 80
            , O = 1.25
            , A = {
                slow: 80,
                fast: 120
            }
            , P = b(.25, .1, 0, 1)
            , L = b(.1, .15, 0, 1)
            , D = .001
            , M = .999
            , R = 1600
            , I = 1600
            , F = 12
            , j = "/ac/libs/three/92/three.min.js"
            , N = function (e) {
                function t(e) {
                    var i;
                    (0,
                        s.default)(this, t),
                        (i = d(this, t)).el = e.el,
                        x || setTimeout(function () {
                            i.trigger("error")
                        }),
                        i._textureSrc = e.src,
                        e.video ? i._videoElement = e.video : e.src instanceof HTMLVideoElement ? i._videoElement = e.src : i._textureSrc && (i._textureSrc.endsWith(".mp4") || i._textureSrc.endsWith(".m3u8") || i._textureSrc.endsWith(".webm")) && (i._videoElement = document.createElement("video")),
                        i._flat = e.flat,
                        i._maxLat = e.maxLat || S,
                        i._pointerControls = new m({
                            el: e.mouseTarget || i.el
                        }),
                        i.arrowControls = new w,
                        i._easing = e.easing || P,
                        i._sineEasing = e.sineEasing || L,
                        i._mapMinValue = void 0 !== e.mapMinValue ? e.mapMinValue : D,
                        i._mapMaxValue = e.mapMaxValue || M,
                        i._rotationDuration = e.rotationDuration || R,
                        T && (i._orientationControls = new _),
                        i._panVelocity = Object.assign({}, e.panVelocity || A),
                        i._overshootMultiplier = e.overshootMultiplier || O,
                        i._oscillationDuration = e.ocillationDuration || I,
                        i._oscillationDistance = e.ocillationDistance || F,
                        i._bindMethods();
                    var n = window.THREE ? Promise.resolve() : C(e.threeUrl || j);
                    return i._cachedPos = {
                        lat: 0,
                        lon: 0
                    },
                        n.then(function () {
                            i._attach(),
                                i.refreshSize()
                        }),
                        i
                }
                return (0,
                    h.default)(t, e),
                    (0,
                        a.default)(t, [{
                            key: "_bindMethods",
                            value: function () {
                                this._onPlaying = this._onPlaying.bind(this),
                                    this._onLoadedMetadata = this._onLoadedMetadata.bind(this),
                                    this._videoElement && (this._videoElement.addEventListener("playing", this._onPlaying),
                                        this._videoElement.addEventListener("loadedmetadata", this._onLoadedMetadata))
                            }
                        }, {
                            key: "_attach",
                            value: function () {
                                this._distance = 50;
                                var e = {
                                    lat: 0,
                                    lon: 0
                                };
                                this._cachedPos = e,
                                    this._pointerControls.position = e,
                                    this._orientationControls && (this._orientationControls.position = e);
                                var t = y;
                                this._renderer = new t({
                                    el: this.el,
                                    distance: this._distance,
                                    src: this._textureSrc,
                                    pointerControls: this._pointerControls,
                                    videoElement: this._videoElement,
                                    useCanvasForVideoTexture: T,
                                    maxLat: this._maxLat
                                }),
                                    this._renderer.attach(),
                                    this._renderer.domElement.classList.add("threesixty-renderer"),
                                    this.el.appendChild(this._renderer.domElement),
                                    this._animate = this._animate.bind(this),
                                    this._animateRAF = p(this._animate)
                            }
                        }, {
                            key: "_animate",
                            value: function () {
                                this._update(),
                                    this._animateRAF = p(this._animate)
                            }
                        }, {
                            key: "_update",
                            value: function (e) {
                                if (window.THREE) {
                                    var i = e;
                                    i || (i = this.arrowControls.isActive ? this.arrowControls.position : this._pointerControls.isActive ? this._pointerControls.position : this._orientationControls ? this._orientationControls.position : this._cachedPos);
                                    var n = !1;
                                    if (this._cachedPos.lat !== i.lat || this._cachedPos.lon !== i.lon)
                                        n = !0;
                                    else if (this._videoElement && this._videoElement.paused)
                                        return;
                                    var r = this._renderer.update(i);
                                    this._cachedPos = Object.assign({}, r),
                                        this._pointerControls.position = r,
                                        this.arrowControls.position = r,
                                        this._orientationControls && (this._orientationControls.position = r),
                                        n && this.trigger(t.POSITION_CHANGE)
                                }
                            }
                        }, {
                            key: "refreshSize",
                            value: function () {
                                this._onResize()
                            }
                        }, {
                            key: "setPos",
                            value: function (e, t) {
                                this._pointerControls && (this._pointerControls.position = {
                                    lat: e,
                                    lon: t
                                }),
                                    this._orientationControls && (this._orientationControls.position = {
                                        lat: e,
                                        lon: t
                                    }),
                                    this._update({
                                        lat: e,
                                        lon: t
                                    })
                            }
                        }, {
                            key: "src",
                            set: function (e) {
                                this._updateTexture(e)
                            }
                        }, {
                            key: "_updateTexture",
                            value: function () {
                                var e = (0,
                                    o.default)(r.default.mark(function e(t) {
                                        return r.default.wrap(function (e) {
                                            for (; ;)
                                                switch (e.prev = e.next) {
                                                    case 0:
                                                        return e.next = 2,
                                                            this._renderer.updateTexture(t);
                                                    case 2:
                                                        this.trigger("textureChange");
                                                    case 3:
                                                    case "end":
                                                        return e.stop()
                                                }
                                        }, e, this)
                                    }));
                                return function (t) {
                                    return e.apply(this, arguments)
                                }
                            }()
                        }, {
                            key: "_onResize",
                            value: function () {
                                var e, t;
                                window.THREE && this._renderer && (e = this.el.clientWidth,
                                    t = this.el.clientHeight,
                                    f(this._animateRAF),
                                    this._pointerControls.setViewerSize(e, t),
                                    this._renderer.refreshSize(e, t),
                                    this._animate())
                            }
                        }, {
                            key: "_onLoadedMetadata",
                            value: function () {
                                this._videoElement.removeEventListener("loadedmetadata", this._onLoadedMetadata),
                                    this._onResize()
                            }
                        }, {
                            key: "_onPlaying",
                            value: function () {
                                this._videoElement.removeEventListener("playing", this._onPlaying),
                                    this._onResize(),
                                    this._orientationControls && this._orientationControls.enable()
                            }
                        }, {
                            key: "requestOrientationControl",
                            value: function () {
                                this._orientationControls && this._orientationControls.requestPermission()
                            }
                        }, {
                            key: "play",
                            value: function () {
                                this._orientationControls && this._orientationControls.requestPermission(),
                                    this._videoElement && this._videoElement.play()
                            }
                        }, {
                            key: "pause",
                            value: function () {
                                this._videoElement && !this._videoElement.paused && this._videoElement.pause()
                            }
                        }, {
                            key: "sendMouseDown",
                            value: function (e) {
                                this._pointerControls.sendMouseDown(e)
                            }
                        }, {
                            key: "destroy",
                            value: function () {
                                (0,
                                    c.default)((0,
                                        u.default)(t.prototype), "destroy", this).call(this)
                            }
                        }, {
                            key: "position",
                            get: function () {
                                return Object.assign({}, this._cachedPos)
                            }
                        }, {
                            key: "isAtOrigin",
                            get: function () {
                                return Math.abs(this.position.lat) <= .5 && Math.abs(this.position.lon) <= .5
                            }
                        }, {
                            key: "oscillateLongitude",
                            value: function () {
                                var e = this;
                                this._pointerControls.cancelInertia(),
                                    this.arrowControls.cancelInertia();
                                var i = new THREE.Vector2(this.position.lon, this.position.lat)
                                    , n = this._oscillationDuration
                                    , r = {
                                        time: n,
                                        startPosition: Object.assign({}, this.position),
                                        targetPosition: Object.assign({}, this.position)
                                    };
                                return this._currentTimer ? this._currentTimer.cancel().then(function () {
                                    e._currentTimer = null,
                                        e.oscillateLongitude()
                                }) : (f(this._animateRAF),
                                    this.trigger(t.ROTATION_START, r),
                                    new Promise(function (o) {
                                        e._currentTimer = g(n, function (n) {
                                            var o = Math.sin(Math.PI * e._sineEasing.getValue(n))
                                                , s = (new THREE.Vector2).copy(i);
                                            s.x = i.x - o * e._oscillationDistance,
                                                e._tmpCurrentPosition = {
                                                    lat: s.y,
                                                    lon: s.x
                                                },
                                                e.trigger(t.ROTATION_UPDATE, {
                                                    t: n,
                                                    easedVal: o,
                                                    startPosition: r.startPosition,
                                                    currentPosition: {
                                                        lat: s.y,
                                                        lon: s.x
                                                    },
                                                    targetPosition: r.targetPosition
                                                }),
                                                e._renderer.positionCamera(s.x, s.y)
                                        }),
                                            e._currentTimer.promise.then(function () {
                                                e.trigger(t.ROTATION_COMPLETE, r),
                                                    e.setPos(i.y, i.x),
                                                    e._animate(),
                                                    e._currentTimer = null,
                                                    e._tmpCurrentPosition = null,
                                                    o()
                                            }).catch(function () { })
                                    }
                                    ))
                            }
                        }, {
                            key: "mediaElement",
                            get: function () {
                                return this._videoElement
                            }
                        }, {
                            key: "panToPosition",
                            value: function (e) {
                                return this._respositionCameraToPosition(e)
                            }
                        }, {
                            key: "_respositionCameraToPosition",
                            value: function (e, i) {
                                var n = this;
                                if (this._currentTimer)
                                    return this._currentTimer.cancel().then(function () {
                                        n._currentTimer = null,
                                            n.setPos(n._tmpCurrentPosition.y, n._tmpCurrentPosition.x),
                                            n._tmpCurrentPosition = null,
                                            n._respositionCameraToPosition(e, i)
                                    });
                                if (this._pointerControls.cancelInertia(),
                                    this.arrowControls.cancelInertia(),
                                    e.lat === this.position.lat && e.lon === this.position.lon)
                                    return this.trigger(t.ROTATION_START, {
                                        time: 0,
                                        startPosition: Object.assign({}, this.position),
                                        targetPosition: Object.assign({}, this.position)
                                    }),
                                        this.trigger(t.ROTATION_COMPLETE, {
                                            time: 1,
                                            startPosition: Object.assign({}, this.position),
                                            targetPosition: Object.assign({}, this.position)
                                        }),
                                        Promise.resolve();
                                i = i ? b(i.x1, i.y1, i.x2, i.y2) : this._easing;
                                var r = new THREE.Vector2(this.position.lon, this.position.lat)
                                    , o = new THREE.Vector2(E(e.lon), e.lat)
                                    , s = new THREE.Vector2(e.lon, e.lat)
                                    , a = r.distanceTo(s)
                                    , l = r.distanceTo(o);
                                l < a && (a = l,
                                    s = o);
                                var c = (new THREE.Vector2).copy(r);
                                f(this._animateRAF);
                                var u = this._rotationDuration
                                    , h = {
                                        time: u,
                                        startPosition: Object.assign({}, this._cachedPos),
                                        targetPosition: Object.assign({}, e)
                                    };
                                return this.trigger(t.ROTATION_START, h),
                                    new Promise(function (i) {
                                        n._currentTimer = g(u, function (e) {
                                            var i;
                                            i = 1 === e ? 1 : k(n._easing.getValue(e), 0, 1, n._mapMinValue, n._mapMaxValue);
                                            var o = c.lerpVectors(r, s, i);
                                            n.trigger(t.ROTATION_UPDATE, {
                                                t: e,
                                                easedVal: i,
                                                startPosition: h.startPosition,
                                                currentPosition: {
                                                    lat: o.y,
                                                    lon: o.x
                                                },
                                                targetPosition: {
                                                    lat: s.x,
                                                    lon: s.y
                                                }
                                            }),
                                                n._tmpCurrentPosition = o,
                                                n._renderer.positionCamera(o.x, o.y)
                                        }),
                                            n._currentTimer.promise.then(function () {
                                                n.trigger(t.ROTATION_COMPLETE, h),
                                                    n.setPos(e.lat, e.lon),
                                                    n._animate(),
                                                    n._currentTimer = null,
                                                    n._tmpCurrentPosition = null,
                                                    i()
                                            })
                                    }
                                    ).catch(function () { })
                            }
                        }]),
                    t
            }(v);
        N.ROTATION_START = "RotationStart",
            N.ROTATION_UPDATE = "RotationUpdate",
            N.ROTATION_COMPLETE = "RotationComplete",
            N.POSITION_CHANGE = "360PositionChange",
            t.exports = N
    }
        , {
        "./controls/ArrowControls": 178,
        "./controls/OrientationControls": 180,
        "./controls/PointerControls": 181,
        "./renderers/SphericalRenderer": 182,
        "./utils/inverseLongitude": 183,
        "./utils/loadScript": 184,
        "./utils/map": 185,
        "./utils/simpleTimer": 187,
        "./utils/vector3FromLatLon": 188,
        "@babel/runtime/helpers/asyncToGenerator": 151,
        "@babel/runtime/helpers/classCallCheck": 152,
        "@babel/runtime/helpers/createClass": 153,
        "@babel/runtime/helpers/get": 154,
        "@babel/runtime/helpers/getPrototypeOf": 155,
        "@babel/runtime/helpers/inherits": 156,
        "@babel/runtime/helpers/interopRequireDefault": 157,
        "@babel/runtime/helpers/possibleConstructorReturn": 158,
        "@babel/runtime/regenerator": 165,
        "@marcom/ac-easing/src/ac-easing/createBezier": 227,
        "@marcom/ac-event-emitter-micro/EventEmitterMicro": 230,
        "@marcom/ac-feature/webGLAvailable": 237,
        "@marcom/ac-raf-emitter/cancelUpdate": 172,
        "@marcom/ac-raf-emitter/update": 175,
        "@marcom/useragent-detect": 331
    }],
    177: [function (e, t, i) {
        "use strict";
        t.exports = e("./AC360")
    }
        , {
        "./AC360": 176
    }],
    178: [function (e, t, i) {
        "use strict";
        var n = e("@babel/runtime/helpers/interopRequireDefault")
            , r = n(e("@babel/runtime/helpers/classCallCheck"))
            , o = n(e("@babel/runtime/helpers/createClass"))
            , s = n(e("@babel/runtime/helpers/possibleConstructorReturn"))
            , a = n(e("@babel/runtime/helpers/get"))
            , l = n(e("@babel/runtime/helpers/getPrototypeOf"))
            , c = n(e("@babel/runtime/helpers/inherits"));
        function u(e, t, i) {
            return t = (0,
                l.default)(t),
                (0,
                    s.default)(e, function () {
                        try {
                            var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () { }))
                        } catch (e) { }
                        return function () {
                            return !!e
                        }()
                    }() ? Reflect.construct(t, i || [], (0,
                        l.default)(e).constructor) : t.apply(e, i))
        }
        var h = e("./InertialControls")
            , d = e("../utils/normalizeLongitude")
            , p = e("@marcom/ac-raf-emitter/update")
            , f = e("@marcom/ac-raf-emitter/cancelUpdate")
            , m = {
                acceleration: {
                    x: .6,
                    y: .6
                },
                friction: {
                    x: .95,
                    y: .95
                },
                minVelocity: .1,
                maxVelocity: 20
            }
            , _ = function (e) {
                function t(e) {
                    var i;
                    return (0,
                        r.default)(this, t),
                        (i = u(this, t, [e = Object.assign({}, m, e)]))._bindMethods(),
                        i
                }
                return (0,
                    c.default)(t, e),
                    (0,
                        o.default)(t, [{
                            key: "_bindMethods",
                            value: function () {
                                this.leftArrowDown = this.leftArrowDown.bind(this),
                                    this.rightArrowDown = this.rightArrowDown.bind(this),
                                    this.downArrowDown = this.downArrowDown.bind(this),
                                    this.upArrowDown = this.upArrowDown.bind(this),
                                    this.leftArrowUp = this.leftArrowUp.bind(this),
                                    this.rightArrowUp = this.rightArrowUp.bind(this),
                                    this.downArrowUp = this.downArrowUp.bind(this),
                                    this.upArrowUp = this.upArrowUp.bind(this),
                                    (0,
                                        a.default)((0,
                                            l.default)(t.prototype), "_bindMethods", this).call(this)
                            }
                        }, {
                            key: "leftArrowDown",
                            value: function () {
                                Math.abs(this._velocity.x - this._horizontalIncrement) < this._maxVelocity ? this._velocity.x -= this._horizontalIncrement : this._velocity.x = -this._maxVelocity,
                                    this._lon = d(this._lon + this._velocity.x),
                                    this._triggerInertia()
                            }
                        }, {
                            key: "rightArrowDown",
                            value: function () {
                                Math.abs(this._velocity.x + this._horizontalIncrement) < this._maxVelocity ? this._velocity.x += this._horizontalIncrement : this._velocity.x = this._maxVelocity,
                                    this._velocity.x += this._horizontalIncrement,
                                    this._lon = d(this._lon + this._velocity.x),
                                    this._triggerInertia()
                            }
                        }, {
                            key: "upArrowDown",
                            value: function (e) {
                                Math.abs(this._velocity.y - this._verticalIncrement) < this._maxVelocity ? this._velocity.y -= this._verticalIncrement : this._velocity.y = -this._maxVelocity,
                                    this._lat = this._lat + this._velocity.y,
                                    this._triggerInertia()
                            }
                        }, {
                            key: "downArrowDown",
                            value: function () {
                                Math.abs(this._velocity.y + this._verticalIncrement) < this._maxVelocity ? this._velocity.y += this._verticalIncrement : this._velocity.y = this._maxVelocity,
                                    this._lat = this._lat + this._velocity.y,
                                    this._triggerInertia()
                            }
                        }, {
                            key: "leftArrowUp",
                            value: function () {
                                this._triggerInertia()
                            }
                        }, {
                            key: "rightArrowUp",
                            value: function () {
                                this._triggerInertia()
                            }
                        }, {
                            key: "upArrowUp",
                            value: function () {
                                this._triggerInertia()
                            }
                        }, {
                            key: "downArrowUp",
                            value: function () {
                                this._triggerInertia()
                            }
                        }, {
                            key: "_triggerInertia",
                            value: function () {
                                f(this._inertiaRaf),
                                    p(this._updateInertia)
                            }
                        }, {
                            key: "isActive",
                            get: function () {
                                return Math.abs(this._velocity.x) > this._minVelocity || Math.abs(this._velocity.y) > this._minVelocity
                            }
                        }]),
                    t
            }(h);
        t.exports = _
    }
        , {
        "../utils/normalizeLongitude": 186,
        "./InertialControls": 179,
        "@babel/runtime/helpers/classCallCheck": 152,
        "@babel/runtime/helpers/createClass": 153,
        "@babel/runtime/helpers/get": 154,
        "@babel/runtime/helpers/getPrototypeOf": 155,
        "@babel/runtime/helpers/inherits": 156,
        "@babel/runtime/helpers/interopRequireDefault": 157,
        "@babel/runtime/helpers/possibleConstructorReturn": 158,
        "@marcom/ac-raf-emitter/cancelUpdate": 172,
        "@marcom/ac-raf-emitter/update": 175
    }],
    179: [function (e, t, i) {
        "use strict";
        var n = e("@babel/runtime/helpers/interopRequireDefault")
            , r = n(e("@babel/runtime/helpers/classCallCheck"))
            , o = n(e("@babel/runtime/helpers/createClass"))
            , s = e("@marcom/ac-raf-emitter/update")
            , a = e("@marcom/ac-raf-emitter/cancelUpdate")
            , l = e("../utils/normalizeLongitude")
            , c = .5
            , u = .1
            , h = 5
            , d = 20
            , p = function () {
                function e() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    (0,
                        r.default)(this, e),
                        this._horizontalFriction = t.friction && t.friction.x || c,
                        this._verticalFriction = t.friction && t.friction.x || c,
                        this._horizontalIncrement = t.acceleration && t.acceleration.x || u,
                        this._verticalIncrement = t.acceleration && t.acceleration.y || u,
                        this._minVelocity = t.minVelocity || h,
                        this._maxVelocity = t.maxVelocity || d,
                        this._velocity = {
                            x: 0,
                            y: 0
                        },
                        this._bindMethods()
                }
                return (0,
                    o.default)(e, [{
                        key: "_bindMethods",
                        value: function () {
                            this._updateInertia = this._updateInertia.bind(this)
                        }
                    }, {
                        key: "_updateInertia",
                        value: function () {
                            Math.abs(this._velocity.x) > this._minVelocity || Math.abs(this._velocity.y) > this._minVelocity ? (this._velocity.x *= this._horizontalFriction,
                                this._velocity.y *= this._verticalFriction,
                                this._lon += this._velocity.x * this._horizontalIncrement,
                                this._lat += this._velocity.y * this._verticalIncrement,
                                this._inertiaRaf = s(this._updateInertia)) : (this._velocity = {
                                    x: 0,
                                    y: 0
                                },
                                    a(this._inertiaRaf),
                                    this._inertiaComplete())
                        }
                    }, {
                        key: "cancelInertia",
                        value: function () {
                            this._velocity = {
                                x: 0,
                                y: 0
                            },
                                a(this._inertiaRaf)
                        }
                    }, {
                        key: "_inertiaComplete",
                        value: function () { }
                    }, {
                        key: "position",
                        get: function () {
                            return {
                                lat: this._lat,
                                lon: this._lon
                            }
                        },
                        set: function (e) {
                            this._lat = e.lat,
                                this._lon = l(e.lon)
                        }
                    }]),
                    e
            }();
        t.exports = p
    }
        , {
        "../utils/normalizeLongitude": 186,
        "@babel/runtime/helpers/classCallCheck": 152,
        "@babel/runtime/helpers/createClass": 153,
        "@babel/runtime/helpers/interopRequireDefault": 157,
        "@marcom/ac-raf-emitter/cancelUpdate": 172,
        "@marcom/ac-raf-emitter/update": 175
    }],
    180: [function (e, t, i) {
        "use strict";
        var n = e("@babel/runtime/helpers/interopRequireDefault")
            , r = n(e("@babel/runtime/helpers/classCallCheck"))
            , o = n(e("@babel/runtime/helpers/createClass"))
            , s = e("../utils/normalizeLongitude")
            , a = e("@marcom/ac-console/log")
            , l = function () {
                function e(t) {
                    (0,
                        r.default)(this, e),
                        this._bindMethods()
                }
                return (0,
                    o.default)(e, [{
                        key: "_bindMethods",
                        value: function () {
                            this._onOrientation = this._onOrientation.bind(this)
                        }
                    }, {
                        key: "_addEventListeners",
                        value: function () {
                            window.addEventListener("devicemotion", this._onOrientation, !0)
                        }
                    }, {
                        key: "_removeEventListeners",
                        value: function () {
                            window.removeEventListener("devicemotion", this._onOrientation, !0)
                        }
                    }, {
                        key: "_onOrientation",
                        value: function (e) {
                            window.matchMedia("(orientation: portrait)").matches ? (this._lon = s(this._lon - .02 * e.rotationRate.beta),
                                this._lat = this._lat - .02 * e.rotationRate.alpha) : e.orientation || -90 === window.orientation ? (this._lon = s(this._lon + .02 * e.rotationRate.alpha),
                                    this._lat = this._lat - .02 * e.rotationRate.beta) : (this._lon = s(this._lon - .02 * e.rotationRate.alpha),
                                        this._lat = this._lat + .02 * e.rotationRate.beta)
                        }
                    }, {
                        key: "position",
                        get: function () {
                            return {
                                lat: this._lat,
                                lon: this._lon
                            }
                        },
                        set: function (e) {
                            this._lat = e.lat,
                                this._lon = s(e.lon)
                        }
                    }, {
                        key: "disable",
                        value: function () {
                            this._removeEventListeners()
                        }
                    }, {
                        key: "enable",
                        value: function () {
                            var e = this;
                            this.requestPermission().then(function () {
                                e._addEventListeners()
                            })
                        }
                    }, {
                        key: "requestPermission",
                        value: function () {
                            var e = this;
                            return this._permissionPromise || ("function" != typeof DeviceMotionEvent.requestPermission ? this._permissionPromise = Promise.resolve() : (this._permissionPromise = DeviceMotionEvent.requestPermission(),
                                this._permissionPromise.catch(function (t) {
                                    a("User didn't grant Gyro permission, or request wasn't tied to a user gesture"),
                                        e._permissionPromise = null
                                }))),
                                this._permissionPromise
                        }
                    }, {
                        key: "destroy",
                        value: function () {
                            this._removeEventListeners()
                        }
                    }]),
                    e
            }();
        t.exports = l
    }
        , {
        "../utils/normalizeLongitude": 186,
        "@babel/runtime/helpers/classCallCheck": 152,
        "@babel/runtime/helpers/createClass": 153,
        "@babel/runtime/helpers/interopRequireDefault": 157,
        "@marcom/ac-console/log": 206
    }],
    181: [function (e, t, i) {
        "use strict";
        var n = e("@babel/runtime/helpers/interopRequireDefault")
            , r = n(e("@babel/runtime/helpers/classCallCheck"))
            , o = n(e("@babel/runtime/helpers/createClass"))
            , s = n(e("@babel/runtime/helpers/possibleConstructorReturn"))
            , a = n(e("@babel/runtime/helpers/get"))
            , l = n(e("@babel/runtime/helpers/getPrototypeOf"))
            , c = n(e("@babel/runtime/helpers/inherits"));
        function u(e, t, i) {
            return t = (0,
                l.default)(t),
                (0,
                    s.default)(e, function () {
                        try {
                            var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () { }))
                        } catch (e) { }
                        return function () {
                            return !!e
                        }()
                    }() ? Reflect.construct(t, i || [], (0,
                        l.default)(e).constructor) : t.apply(e, i))
        }
        var h = e("../utils/normalizeLongitude")
            , d = {
                acceleration: {
                    x: .1,
                    y: .1
                },
                friction: {
                    x: .95,
                    y: .95
                },
                minVelocity: .5,
                maxVelocity: 20
            }
            , p = function (e) {
                function t(e) {
                    var i;
                    return (0,
                        r.default)(this, t),
                        (i = u(this, t, [e = Object.assign({}, d, e)])).el = e.el,
                        i._mouseDown = !1,
                        i._scale = 1,
                        i._hasInertia = !1 !== e.inertia || e.inertia,
                        i._bindMethods(),
                        i._addEventListeners(),
                        i
                }
                return (0,
                    c.default)(t, e),
                    (0,
                        o.default)(t, [{
                            key: "_bindMethods",
                            value: function () {
                                this._onMouseMove = this._onMouseMove.bind(this),
                                    this._onMouseDown = this._onMouseDown.bind(this),
                                    this._onMouseUp = this._onMouseUp.bind(this),
                                    this._onTouchMove = this._onTouchMove.bind(this),
                                    this._onClick = this._onClick.bind(this),
                                    (0,
                                        a.default)((0,
                                            l.default)(t.prototype), "_bindMethods", this).call(this)
                            }
                        }, {
                            key: "_addEventListeners",
                            value: function () {
                                this.el.addEventListener("mousedown", this._onMouseDown),
                                    this.el.addEventListener("touchstart", this._onMouseDown, {
                                        passive: !1
                                    }),
                                    this.el.addEventListener("click", this._onClick),
                                    this.el.addEventListener("touchmove", this._onTouchMove, {
                                        passive: !1
                                    })
                            }
                        }, {
                            key: "_removeEventListeners",
                            value: function () {
                                this.el.removeEventListener("mousedown", this._onMouseDown),
                                    this.el.removeEventListener("touchstart", this._onMouseDown),
                                    window.removeEventListener("mousemove", this._onMouseMove),
                                    window.removeEventListener("mouseup", this._onMouseUp),
                                    this.el.removeEventListener("touchmove", this._onTouchMove),
                                    document.body.removeEventListener("touchmove", this._onTouchMove),
                                    document.body.removeEventListener("touchend", this._onMouseUp)
                            }
                        }, {
                            key: "_onMouseUp",
                            value: function (e) {
                                var t = this;
                                window.removeEventListener("mousemove", this._onMouseMove),
                                    window.removeEventListener("mouseup", this._onMouseUp),
                                    document.body.removeEventListener("touchmove", this._onTouchMove),
                                    document.body.removeEventListener("touchend", this._onMouseUp),
                                    this._mouseDown && this._hasInertia && Date.now() - this._mouseMoveTime < 300 && this._updateInertia(),
                                    setTimeout(function () {
                                        t._mouseDown || (t._dragging = !1)
                                    }, 350),
                                    this._mouseDown = !1
                            }
                        }, {
                            key: "sendMouseDown",
                            value: function (e) {
                                this._onMouseDown(e)
                            }
                        }, {
                            key: "_onClick",
                            value: function (e) {
                                this._dragging || (this._velocity = {
                                    x: 0,
                                    y: 0
                                },
                                    this._mouseDown = !1,
                                    this._cachedPosition = e,
                                    document.removeEventListener("mousemove", this._onMouseMove),
                                    document.removeEventListener("mouseup", this._onMouseUp),
                                    document.body.removeEventListener("touchmove", this._onTouchMove),
                                    document.body.removeEventListener("touchend", this._onMouseUp))
                            }
                        }, {
                            key: "_onMouseDown",
                            value: function (e) {
                                this._mouseDownTime = Date.now();
                                var t = e;
                                if (e.touches) {
                                    if (1 !== e.touches.length)
                                        return;
                                    t = e.touches[0]
                                }
                                this._cachedPosition = e,
                                    window.addEventListener("mousemove", this._onMouseMove),
                                    window.addEventListener("mouseup", this._onMouseUp),
                                    document.body.addEventListener("touchmove", this._onTouchMove, {
                                        passive: !1
                                    }),
                                    document.body.addEventListener("touchend", this._onMouseUp),
                                    this._mouseDown = !0,
                                    this._lastMouseX = t.clientX,
                                    this._lastMouseY = t.clientY,
                                    this._lastMouseDownLon = h(this._lon),
                                    this._lastMouseDownLat = this._lat
                            }
                        }, {
                            key: "_onTouchMove",
                            value: function (e) {
                                e.cancelable && e.preventDefault(),
                                    this._onMouseMove(e)
                            }
                        }, {
                            key: "_onMouseMove",
                            value: function (e) {
                                if (this._mouseDown) {
                                    this._dragging = !0;
                                    var t = e;
                                    if (e.touches && (t = e.touches[0]),
                                        this._cachedPosition.clientX !== t.clientX || this._cachedPosition.clientY !== t.clientY) {
                                        var i = this._lastMouseX - t.clientX
                                            , n = this._lastMouseY - t.clientY
                                            , r = i / this._viewerWidth
                                            , o = n / this._viewerHeight;
                                        if (this._cachedPosition) {
                                            var s = this._cachedPosition.clientX - t.clientX
                                                , a = this._cachedPosition.clientY - t.clientY;
                                            this._velocity.x = Math.max(Math.min(s, this._maxVelocity), -this._maxVelocity),
                                                this._velocity.y = Math.max(Math.min(a, this._maxVelocity), -this._maxVelocity)
                                        }
                                        this._lon = h(135 * r + this._lastMouseDownLon),
                                            this._lat = 90 * o + this._lastMouseDownLat,
                                            this._cachedPosition = t,
                                            this._mouseMoveTime = Date.now()
                                    }
                                }
                            }
                        }, {
                            key: "isActive",
                            get: function () {
                                return this._mouseDown || this._hasInertia && (Math.abs(this._velocity.x) > this._minVelocity || Math.abs(this._velocity.y) > this._minVelocity)
                            }
                        }, {
                            key: "scale",
                            get: function () {
                                return this._scale
                            }
                        }, {
                            key: "setViewerSize",
                            value: function (e, t) {
                                this._viewerWidth = e,
                                    this._viewerHeight = t
                            }
                        }, {
                            key: "destroy",
                            value: function () {
                                this._removeEventListeners()
                            }
                        }]),
                    t
            }(e("./InertialControls"));
        t.exports = p
    }
        , {
        "../utils/normalizeLongitude": 186,
        "./InertialControls": 179,
        "@babel/runtime/helpers/classCallCheck": 152,
        "@babel/runtime/helpers/createClass": 153,
        "@babel/runtime/helpers/get": 154,
        "@babel/runtime/helpers/getPrototypeOf": 155,
        "@babel/runtime/helpers/inherits": 156,
        "@babel/runtime/helpers/interopRequireDefault": 157,
        "@babel/runtime/helpers/possibleConstructorReturn": 158
    }],
    182: [function (e, t, i) {
        "use strict";
        var n = e("@babel/runtime/helpers/interopRequireDefault")
            , r = n(e("@babel/runtime/regenerator"))
            , o = n(e("@babel/runtime/helpers/asyncToGenerator"))
            , s = n(e("@babel/runtime/helpers/classCallCheck"))
            , a = n(e("@babel/runtime/helpers/createClass"))
            , l = e("../utils/vector3FromLatLon")
            , c = e("@marcom/useragent-detect")
            , u = c.browser.safari && c.os.osx ? "high-performance" : "default"
            , h = e("@marcom/ac-raf-emitter/update")
            , d = (e("@marcom/ac-raf-emitter/cancelUpdate"),
                function () {
                    function e(t) {
                        (0,
                            s.default)(this, e),
                            this.el = t.el,
                            this._distance = t.distance,
                            this._textureSrc = t.src,
                            this._pointerControls = t.pointerControls,
                            this._videoElement = t.videoElement,
                            this._maxLat = t.maxLat,
                            t.useCanvasForVideoTexture && (this._canvas = document.createElement("canvas"),
                                this._canvas.width = this._videoElement.clientWidth || 640,
                                this._canvas.height = this._videoElement.clientHeight || 480,
                                this._canvasCtx = this._canvas.getContext("2d"))
                    }
                    return (0,
                        a.default)(e, [{
                            key: "attach",
                            value: function () {
                                var e = this.el.clientWidth
                                    , t = this.el.clientHeight
                                    , i = e / t;
                                this._camera = new THREE.PerspectiveCamera(75, i, 1, 1100),
                                    this._camera.target = new THREE.Vector3(0, 0, 0),
                                    this._scene = new THREE.Scene,
                                    this._geometry = new THREE.SphereBufferGeometry(500, 60, 40),
                                    this._geometry.scale(-1, 1, 1),
                                    this._texture = this._createTexture(this._textureSrc),
                                    this._material = new THREE.MeshBasicMaterial({
                                        map: this._texture
                                    }),
                                    this._mesh = new THREE.Mesh(this._geometry, this._material),
                                    this._scene.add(this._mesh),
                                    this._renderer = new THREE.WebGLRenderer({
                                        antialias: !1,
                                        powerPreference: u
                                    }),
                                    this._renderer.setPixelRatio(window.devicePixelRatio),
                                    this._renderer.setSize(e, t),
                                    this._canvas && this._tick()
                            }
                        }, {
                            key: "_tick",
                            value: function () {
                                var e = this;
                                this._canvasCtx && this._videoElement && (this._canvasCtx.drawImage(this._videoElement, 0, 0, this._canvas.width, this._canvas.height),
                                    this._texture.needsUpdate = !0),
                                    h(function () {
                                        return e._tick()
                                    })
                            }
                        }, {
                            key: "update",
                            value: function (e) {
                                var t = e
                                    , i = Math.max(-this._maxLat, Math.min(this._maxLat, t.lat))
                                    , n = THREE.Math.degToRad(90 - i)
                                    , r = THREE.Math.degToRad(t.lon)
                                    , o = this._distance * Math.sin(n) * Math.cos(r)
                                    , s = this._distance * Math.cos(n)
                                    , a = this._distance * Math.sin(n) * Math.sin(r);
                                return this._camera.zoom = this._pointerControls.scale,
                                    this._camera.position.x = o,
                                    this._camera.position.y = s,
                                    this._camera.position.z = a,
                                    this._camera.lookAt(this._camera.target),
                                    this._camera.updateProjectionMatrix(),
                                    this._renderer.render(this._scene, this._camera),
                                {
                                    lat: i,
                                    lon: t.lon,
                                    x: o,
                                    y: s,
                                    z: a
                                }
                            }
                        }, {
                            key: "refreshSize",
                            value: function (e, t) {
                                this._canvas && (this._canvas.width = THREE.Math.ceilPowerOfTwo(this._videoElement.videoWidth || 1),
                                    this._canvas.height = THREE.Math.ceilPowerOfTwo(this._videoElement.videoHeight || 1)),
                                    this._camera.aspect = e / t,
                                    this._camera.updateProjectionMatrix(),
                                    this._renderer.setSize(e, t),
                                    this._renderer.render(this._scene, this._camera)
                            }
                        }, {
                            key: "positionCamera",
                            value: function (e, t) {
                                var i = l(t, e, this._distance);
                                this._camera.position.copy(i),
                                    this._camera.lookAt(this._camera.target),
                                    this._camera.updateProjectionMatrix(),
                                    this._renderer.render(this._scene, this._camera)
                            }
                        }, {
                            key: "domElement",
                            get: function () {
                                return this._renderer.domElement
                            }
                        }, {
                            key: "_createTexture",
                            value: function (e) {
                                if (e instanceof HTMLVideoElement) {
                                    this._videoElement = e,
                                        this._videoElement.setAttribute("playsinline", "playsinline"),
                                        this._videoElement.setAttribute("webkit-playsinline", "webkit-playsinline");
                                    var t = this._canvas ? new THREE.CanvasTexture(this._canvas) : new THREE.VideoTexture(this._videoElement);
                                    return t.minFilter = THREE.LinearFilter,
                                        t.format = THREE.RGBFormat,
                                        t
                                }
                                if (e.endsWith(".mp4") || e.endsWith(".m3u8") || e.endsWith(".webm")) {
                                    this._videoElement || (this._videoElement = document.createElement("video")),
                                        this._videoElement.src = e,
                                        this._videoElement.loop = !0,
                                        this._videoElement.muted = !0,
                                        this._videoElement.crossOrigin = "anonymous",
                                        this._videoElement.setAttribute("webkit-playsinline", "webkit-playsinline"),
                                        this._videoElement.setAttribute("playsinline", "playsinline"),
                                        this._videoElement = this._videoElement;
                                    var i = this._canvas ? new THREE.CanvasTexture(this._canvas) : new THREE.VideoTexture(this._videoElement);
                                    return i.minFilter = THREE.LinearFilter,
                                        i.format = THREE.RGBFormat,
                                        i
                                }
                                return (new THREE.TextureLoader).load(e)
                            }
                        }, {
                            key: "updateTexture",
                            value: function () {
                                var e = (0,
                                    o.default)(r.default.mark(function e(t) {
                                        var i = this;
                                        return r.default.wrap(function (e) {
                                            for (; ;)
                                                switch (e.prev = e.next) {
                                                    case 0:
                                                        return e.abrupt("return", new Promise(function (e) {
                                                            (new THREE.TextureLoader).load(t, function (t) {
                                                                i._material.map = t,
                                                                    i._material.map.needsUpdate = !0,
                                                                    e()
                                                            })
                                                        }
                                                        ));
                                                    case 1:
                                                    case "end":
                                                        return e.stop()
                                                }
                                        }, e)
                                    }));
                                return function (t) {
                                    return e.apply(this, arguments)
                                }
                            }()
                        }]),
                        e
                }());
        t.exports = d
    }
        , {
        "../utils/vector3FromLatLon": 188,
        "@babel/runtime/helpers/asyncToGenerator": 151,
        "@babel/runtime/helpers/classCallCheck": 152,
        "@babel/runtime/helpers/createClass": 153,
        "@babel/runtime/helpers/interopRequireDefault": 157,
        "@babel/runtime/regenerator": 165,
        "@marcom/ac-raf-emitter/cancelUpdate": 172,
        "@marcom/ac-raf-emitter/update": 175,
        "@marcom/useragent-detect": 331
    }],
    183: [function (e, t, i) {
        "use strict";
        var n = e("./normalizeLongitude");
        t.exports = function (e) {
            var t = e;
            return Math.abs(t) > 180 ? n(t) : t > 0 ? -360 + t : 360 + t
        }
    }
        , {
        "./normalizeLongitude": 186
    }],
    184: [function (e, t, i) {
        "use strict";
        t.exports = function (e) {
            return new Promise(function (t, i) {
                var n = document.createElement("script");
                n.type = "text/javascript",
                    n.src = e,
                    n.onload = t,
                    n.onerror = i;
                try {
                    document.body.appendChild(n)
                } catch (e) {
                    i(e)
                }
            }
            )
        }
    }
        , {}],
    185: [function (e, t, i) {
        "use strict";
        t.exports = function (e, t, i, n, r) {
            return n + (r - n) * (e - t) / (i - t)
        }
    }
        , {}],
    186: [function (e, t, i) {
        "use strict";
        t.exports = function (e) {
            var t = e;
            return t > 180 ? t = t % 180 - 180 : t <= -180 && (t = t % 180 + 180),
                t
        }
    }
        , {}],
    187: [function (e, t, i) {
        "use strict";
        var n = e("@marcom/ac-raf-emitter/update");
        e("@marcom/ac-raf-emitter/cancelUpdate");
        t.exports = function (e, t) {
            var i, r = !1, o = new Promise(function (i, o) {
                var s = performance.now();
                n(function a() {
                    if (r)
                        o();
                    else {
                        var l = (performance.now() - s) / e;
                        l >= 1 ? (t(1),
                            i()) : (l,
                                t(l),
                                n(a))
                    }
                })
            }
            );
            return o.catch(function () {
                i()
            }),
            {
                promise: o,
                cancel: function () {
                    return r = !0,
                        new Promise(function (e) {
                            i = function () {
                                e()
                            }
                        }
                        )
                }
            }
        }
    }
        , {
        "@marcom/ac-raf-emitter/cancelUpdate": 172,
        "@marcom/ac-raf-emitter/update": 175
    }],
    188: [function (e, t, i) {
        "use strict";
        t.exports = function (e, t, i) {
            var n = THREE.Math.degToRad(90 - e)
                , r = THREE.Math.degToRad(t)
                , o = i * Math.sin(n) * Math.cos(r)
                , s = i * Math.cos(n)
                , a = i * Math.sin(n) * Math.sin(r);
            return new THREE.Vector3(o, s, a)
        }
    }
        , {}],
    189: [function (e, t, i) {
        "use strict";
        var n = e("./../maps/focusableElement")
            , r = function () {
                this.focusableSelectors = n.selectors
            }
            , o = r.prototype;
        o.isFocusableElement = function (e, t, i) {
            return !(t && !this._isDisplayed(e)) && (n.nodeName[e.nodeName] ? !e.disabled : !e.contentEditable || (i = i || parseFloat(e.getAttribute("tabindex")),
                !isNaN(i)))
        }
            ,
            o.isTabbableElement = function (e, t) {
                if (t && !this._isDisplayed(e))
                    return !1;
                var i = e.getAttribute("tabindex");
                return i = parseFloat(i),
                    isNaN(i) ? this.isFocusableElement(e, t, i) : i >= 0
            }
            ,
            o._isDisplayed = function (e) {
                var t = e.getBoundingClientRect();
                return (0 !== t.top || 0 !== t.left || 0 !== t.width || 0 !== t.height) && "hidden" !== window.getComputedStyle(e).visibility
            }
            ,
            o.getTabbableElements = function (e, t) {
                for (var i = e.querySelectorAll(this.focusableSelectors), n = i.length, r = [], o = 0; o < n; o++)
                    this.isTabbableElement(i[o], t) && r.push(i[o]);
                return r
            }
            ,
            o.getFocusableElements = function (e, t) {
                for (var i = e.querySelectorAll(this.focusableSelectors), n = i.length, r = [], o = 0; o < n; o++)
                    this.isFocusableElement(i[o], t) && r.push(i[o]);
                return r
            }
            ,
            t.exports = new r
    }
        , {
        "./../maps/focusableElement": 194
    }],
    190: [function (e, t, i) {
        "use strict";
        var n = e("./../maps/ariaMap")
            , r = e("./TabManager")
            , o = function (e, t) {
                var i = e.getAttribute("data-original-" + t);
                i || (i = e.getAttribute(t) || "",
                    e.setAttribute("data-original-" + t, i))
            };
        t.exports = function (e, t) {
            if (r.isFocusableElement(e, t))
                o(e, "tabindex"),
                    e.setAttribute("tabindex", "-1");
            else
                for (var i = r.getTabbableElements(e, t), s = i.length; s--;)
                    o(i[s], "tabindex"),
                        i[s].setAttribute("tabindex", "-1");
            o(e, n.HIDDEN),
                e.setAttribute(n.HIDDEN, "true")
        }
    }
        , {
        "./../maps/ariaMap": 193,
        "./TabManager": 189
    }],
    191: [function (e, t, i) {
        "use strict";
        t.exports = function (e, t) {
            var i;
            i = e instanceof NodeList ? e : [].concat(e),
                t = Array.isArray(t) ? t : [].concat(t),
                i.forEach(function (e) {
                    t.forEach(function (t) {
                        e.removeAttribute(t)
                    })
                })
        }
    }
        , {}],
    192: [function (e, t, i) {
        "use strict";
        var n = e("./removeAttributes")
            , r = e("./../maps/ariaMap")
            , o = "data-original-"
            , s = function (e, t) {
                var i = e.getAttribute(o + t);
                null !== i && ("" === i ? n(e, t) : e.setAttribute(t, i),
                    n(e, o + t))
            };
        t.exports = function (e) {
            s(e, "tabindex"),
                s(e, r.HIDDEN);
            for (var t = e.querySelectorAll("[".concat(o + "tabindex", "]")), i = t.length; i--;)
                s(t[i], "tabindex")
        }
    }
        , {
        "./../maps/ariaMap": 193,
        "./removeAttributes": 191
    }],
    193: [function (e, t, i) {
        "use strict";
        t.exports = {
            AUTOCOMPLETE: "aria-autocomplete",
            CHECKED: "aria-checked",
            DISABLED: "aria-disabled",
            EXPANDED: "aria-expanded",
            HASPOPUP: "aria-haspopup",
            HIDDEN: "aria-hidden",
            INVALID: "aria-invalid",
            LABEL: "aria-label",
            LEVEL: "aria-level",
            MULTILINE: "aria-multiline",
            MULTISELECTABLE: "aria-multiselectable",
            ORIENTATION: "aria-orientation",
            PRESSED: "aria-pressed",
            READONLY: "aria-readonly",
            REQUIRED: "aria-required",
            SELECTED: "aria-selected",
            SORT: "aria-sort",
            VALUEMAX: "aria-valuemax",
            VALUEMIN: "aria-valuemin",
            VALUENOW: "aria-valuenow",
            VALUETEXT: "aria-valuetext",
            ATOMIC: "aria-atomic",
            BUSY: "aria-busy",
            LIVE: "aria-live",
            RELEVANT: "aria-relevant",
            DROPEFFECT: "aria-dropeffect",
            GRABBED: "aria-grabbed",
            ACTIVEDESCENDANT: "aria-activedescendant",
            CONTROLS: "aria-controls",
            DESCRIBEDBY: "aria-describedby",
            FLOWTO: "aria-flowto",
            LABELLEDBY: "aria-labelledby",
            OWNS: "aria-owns",
            POSINSET: "aria-posinset",
            SETSIZE: "aria-setsize"
        }
    }
        , {}],
    194: [function (e, t, i) {
        "use strict";
        t.exports = {
            selectors: ["input", "select", "textarea", "button", "optgroup", "option", "menuitem", "fieldset", "object", "a[href]", "[tabindex]", "[contenteditable]"].join(","),
            nodeName: {
                INPUT: "input",
                SELECT: "select",
                TEXTAREA: "textarea",
                BUTTON: "button",
                OPTGROUP: "optgroup",
                OPTION: "option",
                MENUITEM: "menuitem",
                FIELDSET: "fieldset",
                OBJECT: "object",
                A: "a"
            }
        }
    }
        , {}],
    195: [function (e, t, i) {
        "use strict";
        var n = e("./request/factory")
            , r = {
                complete: function (e, t) { },
                error: function (e, t) { },
                method: "GET",
                headers: {},
                success: function (e, t, i) { },
                timeout: 5e3
            }
            , o = {
                ajax: function (e, t) {
                    t = function () {
                        for (var e = 1; e < arguments.length; e++)
                            for (var t in arguments[e])
                                arguments[e].hasOwnProperty(t) && (arguments[0][t] = arguments[e][t]);
                        return arguments[0]
                    }({}, r, t),
                        "//" === e.substr(0, 2) && (e = window.location.protocol + e);
                    var i = n(e);
                    return i.open(t.method, e),
                        i.setTransportHeaders(t.headers),
                        i.setReadyStateChangeHandlers(t.complete, t.error, t.success),
                        i.setTimeout(t.timeout, t.error, t.complete),
                        i.send(t.data),
                        i
                },
                get: function (e, t) {
                    return t.method = "GET",
                        o.ajax(e, t)
                },
                head: function (e, t) {
                    return t.method = "HEAD",
                        o.ajax(e, t)
                },
                post: function (e, t) {
                    return t.method = "POST",
                        o.ajax(e, t)
                }
            };
        t.exports = o
    }
        , {
        "./request/factory": 196
    }],
    196: [function (e, t, i) {
        "use strict";
        var n = e("./xmlhttprequest")
            , r = e("./xdomainrequest")
            , o = /.*(?=:\/\/)/
            , s = /^.*:\/\/|\/.+$/g
            , a = window.XDomainRequest && document.documentMode < 10;
        t.exports = function (e, t) {
            return new (a && function (e) {
                return !!e.match(o) && e.replace(s, "") !== window.location.hostname
            }(e) ? r : n)
        }
    }
        , {
        "./xdomainrequest": 198,
        "./xmlhttprequest": 199
    }],
    197: [function (e, t, i) {
        "use strict";
        var n = function () { };
        n.create = function () {
            var e = function () { };
            return e.prototype = n.prototype,
                new e
        }
            ,
            n.prototype.open = function (e, t) {
                e = e.toUpperCase(),
                    this.xhr.open(e, t)
            }
            ,
            n.prototype.send = function (e) {
                this.xhr.send(e)
            }
            ,
            n.prototype.setTimeout = function (e, t, i) {
                this.xhr.ontimeout = function () {
                    t(this.xhr, this.status),
                        i(this.xhr, this.status)
                }
                    .bind(this)
            }
            ,
            n.prototype.setTransportHeaders = function (e) {
                for (var t in e)
                    this.xhr.setRequestHeader(t, e[t])
            }
            ,
            t.exports = n
    }
        , {}],
    198: [function (e, t, i) {
        "use strict";
        var n = e("@babel/runtime/helpers/interopRequireDefault")(e("@babel/runtime/helpers/typeof"))
            , r = e("./request")
            , o = e("@marcom/ac-object/toQueryParameters")
            , s = function () {
                this.xhr = new XDomainRequest
            };
        (s.prototype = r.create()).setReadyStateChangeHandlers = function (e, t, i) {
            this.xhr.onerror = function () {
                t(this.xhr, this.status),
                    e(this.xhr, this.status)
            }
                .bind(this),
                this.xhr.onload = function () {
                    i(this.xhr.responseText, this.xhr.status, this.xhr),
                        e(this.xhr, this.status)
                }
                    .bind(this)
        }
            ,
            s.prototype.send = function (e) {
                e && "object" === (0,
                    n.default)(e) && (e = o(e)),
                    this.xhr.send(e)
            }
            ,
            s.prototype.setTransportHeaders = function (e) { }
            ,
            t.exports = s
    }
        , {
        "./request": 197,
        "@babel/runtime/helpers/interopRequireDefault": 157,
        "@babel/runtime/helpers/typeof": 164,
        "@marcom/ac-object/toQueryParameters": 254
    }],
    199: [function (e, t, i) {
        "use strict";
        var n = e("./request")
            , r = function () {
                this.xhr = new XMLHttpRequest
            };
        (r.prototype = n.create()).setReadyStateChangeHandlers = function (e, t, i) {
            this.xhr.onreadystatechange = function (n) {
                4 === this.xhr.readyState && (clearTimeout(this.timeout),
                    this.xhr.status >= 200 && this.xhr.status < 300 ? (i(this.xhr.responseText, this.xhr.status, this.xhr),
                        e(this.xhr, this.status)) : (t(this.xhr, this.status),
                            e(this.xhr, this.status)))
            }
                .bind(this)
        }
            ,
            t.exports = r
    }
        , {
        "./request": 197
    }],
    200: [function (e, t, i) {
        "use strict";
        t.exports = {
            log: e("./ac-console/log")
        }
    }
        , {
        "./ac-console/log": 201
    }],
    201: [function (e, t, i) {
        "use strict";
        var n = !!function () {
            try {
                return window.localStorage.getItem("f7c9180f-5c45-47b4-8de4-428015f096c0")
            } catch (e) { }
        }();
        t.exports = function () {
            window.console && void 0 !== console.log && n && console.log.apply(console, Array.prototype.slice.call(arguments, 0))
        }
    }
        , {}],
    202: [function (e, t, i) {
        "use strict";
        var n, r = e("@babel/runtime/helpers/interopRequireDefault")(e("@babel/runtime/helpers/typeof")), o = e("@marcom/ac-object/extend"), s = e("@marcom/ac-object/create"), a = e("@marcom/ac-event-emitter-micro").EventEmitterMicro, l = e("@marcom/ac-dom-traversal/querySelectorAll"), c = e("@marcom/ac-dom-events/addEventListener"), u = e("@marcom/ac-dom-events/removeEventListener"), h = e("@marcom/ac-console");
        try {
            n = e("@marcom/ac-analytics")
        } catch (e) {
            h.log(e.message)
        }
        var d = {
            dataAttribute: "analytics-share",
            interactionEvents: ["click"],
            autoEnable: !0
        }
            , p = function (e) {
                e = e || {},
                    this.options = o(d, e),
                    a.call(this),
                    this.elements = [],
                    this.eventObserver = null,
                    this.publishShareClick = this.publishShareClick.bind(this),
                    this.options.autoEnable && this.enable()
            }
            , f = a.prototype
            , m = p.prototype = s(f);
        m.enable = function () {
            if (!n)
                return !1;
            this._createObserver(),
                this.bindEventListener()
        }
            ,
            m.disable = function () {
                if (!n)
                    return !1;
                this.unbindEventListener()
            }
            ,
            m.bindEventListener = function () {
                var e;
                this.elements = this.populateElements(),
                    e = this.elements.length;
                for (var t = 0; t < e; t++)
                    c(this.elements[t], "click", this.publishShareClick)
            }
            ,
            m.unbindEventListener = function () {
                for (var e = this.elements && this.elements.length ? this.elements.length : 0, t = 0; t < e; t++)
                    u(this.elements[t], "click", this.publishShareClick)
            }
            ,
            m.populateElements = function () {
                return l("[data-" + this.options.dataAttribute + "]", this.options.context || document)
            }
            ,
            m.publishShareClick = function (e) {
                var t = e.currentTarget
                    , i = this.parseDataAttribute(t.getAttribute("data-" + this.options.dataAttribute));
                if ("object" === (0,
                    r.default)(i)) {
                    if (!i.title)
                        return console.log("data-" + this.options.dataAttribute + " attribute must have a `title` property"),
                            !1;
                    this.trigger("click", i)
                }
            }
            ,
            m.parseDataAttribute = function (e) {
                var t = {};
                try {
                    t = JSON.parse(e)
                } catch (e) {
                    console.log("data-" + this.options.dataAttribute + " must be a valid JSON string")
                }
                return t
            }
            ,
            m.destroy = function () {
                this.disable(),
                    this.elements = [],
                    this.eventObserver = null,
                    this.publishShareClick = null,
                    this.options = null
            }
            ,
            m._createObserver = function () {
                if (!n || !n.observer || !n.observer.Event)
                    return !1;
                this.eventObserver = new n.observer.Event(this, this.options)
            }
            ,
            t.exports = p
    }
        , {
        "@babel/runtime/helpers/interopRequireDefault": 157,
        "@babel/runtime/helpers/typeof": 164,
        "@marcom/ac-analytics": "@marcom/ac-analytics",
        "@marcom/ac-console": 200,
        "@marcom/ac-dom-events/addEventListener": 207,
        "@marcom/ac-dom-events/removeEventListener": 208,
        "@marcom/ac-dom-traversal/querySelectorAll": 224,
        "@marcom/ac-event-emitter-micro": 229,
        "@marcom/ac-object/create": 252,
        "@marcom/ac-object/extend": 253
    }],
    203: [function (e, t, i) {
        "use strict";
        var n = e("./../AnalyticsShare");
        t.exports = function (e) {
            return new n(e)
        }
    }
        , {
        "./../AnalyticsShare": 202
    }],
    204: [function (e, t, i) {
        arguments[4][30][0].apply(i, arguments)
    }
        , {
        dup: 30
    }],
    205: [function (e, t, i) {
        arguments[4][31][0].apply(i, arguments)
    }
        , {
        "../enabled": 204,
        "@babel/runtime/helpers/interopRequireDefault": 157,
        "@babel/runtime/helpers/typeof": 164,
        dup: 31
    }],
    206: [function (e, t, i) {
        arguments[4][32][0].apply(i, arguments)
    }
        , {
        "./internal/expose": 205,
        dup: 32
    }],
    207: [function (e, t, i) {
        arguments[4][36][0].apply(i, arguments)
    }
        , {
        "./shared/getEventType": 209,
        "./utils/addEventListener": 210,
        dup: 36
    }],
    208: [function (e, t, i) {
        arguments[4][40][0].apply(i, arguments)
    }
        , {
        "./shared/getEventType": 209,
        "./utils/removeEventListener": 211,
        dup: 40
    }],
    209: [function (e, t, i) {
        arguments[4][41][0].apply(i, arguments)
    }
        , {
        "@marcom/ac-prefixer/getEventType": 262,
        dup: 41
    }],
    210: [function (e, t, i) {
        arguments[4][45][0].apply(i, arguments)
    }
        , {
        dup: 45
    }],
    211: [function (e, t, i) {
        arguments[4][47][0].apply(i, arguments)
    }
        , {
        dup: 47
    }],
    212: [function (e, t, i) {
        arguments[4][49][0].apply(i, arguments)
    }
        , {
        dup: 49
    }],
    213: [function (e, t, i) {
        arguments[4][50][0].apply(i, arguments)
    }
        , {
        dup: 50
    }],
    214: [function (e, t, i) {
        arguments[4][51][0].apply(i, arguments)
    }
        , {
        dup: 51
    }],
    215: [function (e, t, i) {
        arguments[4][52][0].apply(i, arguments)
    }
        , {
        dup: 52
    }],
    216: [function (e, t, i) {
        arguments[4][53][0].apply(i, arguments)
    }
        , {
        dup: 53
    }],
    217: [function (e, t, i) {
        arguments[4][54][0].apply(i, arguments)
    }
        , {
        "../isNode": 221,
        dup: 54
    }],
    218: [function (e, t, i) {
        arguments[4][55][0].apply(i, arguments)
    }
        , {
        "../COMMENT_NODE": 212,
        "../DOCUMENT_FRAGMENT_NODE": 213,
        "../ELEMENT_NODE": 215,
        "../TEXT_NODE": 216,
        "./isNodeType": 217,
        dup: 55
    }],
    219: [function (e, t, i) {
        arguments[4][56][0].apply(i, arguments)
    }
        , {
        "./DOCUMENT_FRAGMENT_NODE": 213,
        "./internal/isNodeType": 217,
        dup: 56
    }],
    220: [function (e, t, i) {
        arguments[4][57][0].apply(i, arguments)
    }
        , {
        "./ELEMENT_NODE": 215,
        "./internal/isNodeType": 217,
        dup: 57
    }],
    221: [function (e, t, i) {
        arguments[4][58][0].apply(i, arguments)
    }
        , {
        dup: 58
    }],
    222: [function (e, t, i) {
        arguments[4][59][0].apply(i, arguments)
    }
        , {
        "./internal/validate": 218,
        dup: 59
    }],
    223: [function (e, t, i) {
        arguments[4][61][0].apply(i, arguments)
    }
        , {
        "@marcom/ac-dom-nodes/COMMENT_NODE": 212,
        "@marcom/ac-dom-nodes/DOCUMENT_FRAGMENT_NODE": 213,
        "@marcom/ac-dom-nodes/DOCUMENT_NODE": 214,
        "@marcom/ac-dom-nodes/ELEMENT_NODE": 215,
        "@marcom/ac-dom-nodes/TEXT_NODE": 216,
        "@marcom/ac-dom-nodes/isNode": 221,
        "@marcom/ac-polyfills/Array/prototype.indexOf": 258,
        dup: 61
    }],
    224: [function (e, t, i) {
        arguments[4][63][0].apply(i, arguments)
    }
        , {
        "./internal/validate": 223,
        "./shims/querySelectorAll": 225,
        "@marcom/ac-polyfills/Array/prototype.slice": 259,
        dup: 63
    }],
    225: [function (e, t, i) {
        arguments[4][65][0].apply(i, arguments)
    }
        , {
        "@marcom/ac-dom-nodes/isDocumentFragment": 219,
        "@marcom/ac-dom-nodes/isElement": 220,
        "@marcom/ac-dom-nodes/remove": 222,
        "@marcom/ac-polyfills/Array/prototype.indexOf": 258,
        dup: 65
    }],
    226: [function (e, t, i) {
        "use strict";
        var n = "Ease expects an easing function.";
        function r(e, t) {
            if ("function" != typeof e)
                throw new TypeError(n);
            this.easingFunction = e,
                this.cssString = t || null
        }
        r.prototype.getValue = function (e) {
            return this.easingFunction(e, 0, 1, 1)
        }
            ,
            t.exports = r
    }
        , {}],
    227: [function (e, t, i) {
        "use strict";
        e("@marcom/ac-polyfills/Array/prototype.every");
        var n = e("./Ease")
            , r = e("./helpers/KeySpline");
        t.exports = function (e, t, i, o) {
            var s = Array.prototype.slice.call(arguments)
                , a = s.every(function (e) {
                    return "number" == typeof e
                });
            if (4 !== s.length || !a)
                throw new TypeError("Bezier curve expects exactly four (4) numbers. Given: " + s);
            var l = new r(e, t, i, o)
                , c = "cubic-bezier(" + s.join(", ") + ")";
            return new n(function (e, t, i, n) {
                return l.get(e / n) * i + t
            }
                , c)
        }
    }
        , {
        "./Ease": 226,
        "./helpers/KeySpline": 228,
        "@marcom/ac-polyfills/Array/prototype.every": 256
    }],
    228: [function (e, t, i) {
        "use strict";
        t.exports = function (e, t, i, n) {
            function r(e, t) {
                return 1 - 3 * t + 3 * e
            }
            function o(e, t) {
                return 3 * t - 6 * e
            }
            function s(e) {
                return 3 * e
            }
            function a(e, t, i) {
                return ((r(t, i) * e + o(t, i)) * e + s(t)) * e
            }
            this.get = function (l) {
                return e === t && i === n ? l : a(function (t) {
                    for (var n = t, l = 0; l < 4; ++l) {
                        var c = (h = n,
                            3 * r(d = e, p = i) * h * h + 2 * o(d, p) * h + s(d));
                        if (0 === c)
                            return n;
                        var u = a(n, e, i) - t;
                        n -= u / c
                    }
                    var h, d, p;
                    return n
                }(l), t, n)
            }
        }
    }
        , {}],
    229: [function (e, t, i) {
        "use strict";
        t.exports = {
            EventEmitterMicro: e("./ac-event-emitter-micro/EventEmitterMicro")
        }
    }
        , {
        "./ac-event-emitter-micro/EventEmitterMicro": 230
    }],
    230: [function (e, t, i) {
        "use strict";
        function n() {
            this._events = {}
        }
        var r = n.prototype;
        r.on = function (e, t) {
            this._events[e] = this._events[e] || [],
                this._events[e].unshift(t)
        }
            ,
            r.once = function (e, t) {
                var i = this;
                this.on(e, function n(r) {
                    i.off(e, n),
                        void 0 !== r ? t(r) : t()
                })
            }
            ,
            r.off = function (e, t) {
                if (this.has(e)) {
                    if (1 === arguments.length)
                        return this._events[e] = null,
                            void delete this._events[e];
                    var i = this._events[e].indexOf(t);
                    -1 !== i && this._events[e].splice(i, 1)
                }
            }
            ,
            r.trigger = function (e, t) {
                if (this.has(e))
                    for (var i = this._events[e].length - 1; i >= 0; i--)
                        void 0 !== t ? this._events[e][i](t) : this._events[e][i]()
            }
            ,
            r.has = function (e) {
                return e in this._events != !1 && 0 !== this._events[e].length
            }
            ,
            r.destroy = function () {
                for (var e in this._events)
                    this._events[e] = null;
                this._events = null
            }
            ,
            t.exports = n
    }
        , {}],
    231: [function (e, t, i) {
        "use strict";
        t.exports = {
            getWindow: function () {
                return window
            },
            getDocument: function () {
                return document
            },
            getNavigator: function () {
                return navigator
            }
        }
    }
        , {}],
    232: [function (e, t, i) {
        "use strict";
        var n = e("@marcom/useragent-detect").os
            , r = e("./touchAvailable").original
            , o = e("./helpers/globals")
            , s = e("@marcom/ac-function/once");
        function a() {
            var e = o.getWindow();
            return !r() && !e.orientation || n.windows
        }
        t.exports = s(a),
            t.exports.original = a
    }
        , {
        "./helpers/globals": 231,
        "./touchAvailable": 236,
        "@marcom/ac-function/once": 245,
        "@marcom/useragent-detect": 331
    }],
    233: [function (e, t, i) {
        "use strict";
        var n = e("./isDesktop").original
            , r = e("./isTablet").original
            , o = e("@marcom/ac-function/once");
        function s() {
            return !n() && !r()
        }
        t.exports = o(s),
            t.exports.original = s
    }
        , {
        "./isDesktop": 232,
        "./isTablet": 235,
        "@marcom/ac-function/once": 245
    }],
    234: [function (e, t, i) {
        "use strict";
        var n = e("./helpers/globals");
        t.exports = function () {
            var e = n.getWindow();
            return "devicePixelRatio" in e && e.devicePixelRatio >= 1.5
        }
    }
        , {
        "./helpers/globals": 231
    }],
    235: [function (e, t, i) {
        "use strict";
        var n = e("./isDesktop").original
            , r = e("./helpers/globals")
            , o = e("@marcom/ac-function/once")
            , s = 600;
        function a() {
            var e = r.getWindow()
                , t = e.screen.width;
            return e.orientation && e.screen.height < t && (t = e.screen.height),
                !n() && t >= s
        }
        t.exports = o(a),
            t.exports.original = a
    }
        , {
        "./helpers/globals": 231,
        "./isDesktop": 232,
        "@marcom/ac-function/once": 245
    }],
    236: [function (e, t, i) {
        "use strict";
        var n = e("./helpers/globals")
            , r = e("@marcom/ac-function/once");
        function o() {
            var e = n.getWindow()
                , t = n.getDocument()
                , i = n.getNavigator();
            return !!("ontouchstart" in e || e.DocumentTouch && t instanceof e.DocumentTouch || i.maxTouchPoints > 0 || i.msMaxTouchPoints > 0)
        }
        t.exports = r(o),
            t.exports.original = o
    }
        , {
        "./helpers/globals": 231,
        "@marcom/ac-function/once": 245
    }],
    237: [function (e, t, i) {
        "use strict";
        var n = e("./helpers/globals")
            , r = e("@marcom/ac-function/once");
        function o() {
            var e = n.getDocument().createElement("canvas");
            return "function" == typeof e.getContext && !(!e.getContext("webgl") && !e.getContext("experimental-webgl"))
        }
        t.exports = r(o),
            t.exports.original = o
    }
        , {
        "./helpers/globals": 231,
        "@marcom/ac-function/once": 245
    }],
    238: [function (e, t, i) {
        "use strict";
        t.exports = e("./fullscreen")
    }
        , {
        "./fullscreen": 244
    }],
    239: [function (e, t, i) {
        "use strict";
        t.exports = {
            STANDARD: "standard",
            IOS: "ios"
        }
    }
        , {}],
    240: [function (e, t, i) {
        "use strict";
        var n = e("@marcom/ac-dom-events/addEventListener")
            , r = e("@marcom/ac-event-emitter-micro").EventEmitterMicro
            , o = e("./../events/types")
            , s = e("./../consts/modes")
            , a = new r;
        function l(e) {
            a.fullscreenElement() ? function (e) {
                a.trigger(o.ENTERFULLSCREEN, e)
            }(e) : function (e) {
                a.trigger(o.EXITFULLSCREEN, e)
            }(e)
        }
        n(document, "fullscreenchange", l),
            a.fullscreenEnabled = function (e) {
                return !!(document.fullscreenEnabled || document.webkitFullscreenEnabled || document.mozFullScreenEnabled || document.msFullscreenEnabled)
            }
            ,
            a.fullscreenElement = function () {
                return document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement || document.webkitCurrentFullScreenElement
            }
            ,
            a.exitFullscreen = function (e) {
                var t;
                e && "function" == typeof e.webkitExitFullscreen ? e.webkitExitFullscreen() : "function" == typeof document.exitFullscreen ? t = "exitFullscreen" : "function" == typeof document.webkitExitFullscreen ? t = "webkitExitFullscreen" : "function" == typeof document.webkitCancelFullScreen ? t = "webkitCancelFullScreen" : "function" == typeof document.mozCancelFullScreen ? t = "mozCancelFullScreen" : "function" == typeof document.msExitFullscreen && (t = "msExitFullscreen"),
                    "function" == typeof document[t] && document[t].call(document)
            }
            ,
            a.requestFullscreen = function (e) {
                var t;
                "function" == typeof e.requestFullscreen ? t = "requestFullscreen" : "function" == typeof e.webkitRequestFullscreen ? t = "webkitRequestFullscreen" : "function" == typeof e.webkitRequestFullScreen ? t = "webkitRequestFullScreen" : "function" == typeof e.mozRequestFullScreen ? t = "mozRequestFullScreen" : "function" == typeof e.msRequestFullscreen && (t = "msRequestFullscreen"),
                    "function" == typeof e[t] && e[t].call(e)
            }
            ,
            a.mode = s.STANDARD,
            t.exports = a
    }
        , {
        "./../consts/modes": 239,
        "./../events/types": 243,
        "@marcom/ac-dom-events/addEventListener": 207,
        "@marcom/ac-event-emitter-micro": 229
    }],
    241: [function (e, t, i) {
        "use strict";
        var n = e("./ios")
            , r = e("./desktop");
        t.exports = {
            create: function () {
                var e = r;
                return "webkitEnterFullscreen" in document.createElement("video") && !("webkitRequestFullScreen" in document.createElement("div")) && (e = n),
                    e
            }
        }
    }
        , {
        "./desktop": 240,
        "./ios": 242
    }],
    242: [function (e, t, i) {
        "use strict";
        var n, r = e("@marcom/ac-dom-events/addEventListener"), o = e("@marcom/ac-event-emitter-micro").EventEmitterMicro, s = e("./../events/types"), a = e("./../consts/modes");
        function l(e) {
            u.trigger(s.ENTERFULLSCREEN, e)
        }
        function c(e) {
            n = void 0,
                u.trigger(s.EXITFULLSCREEN, e)
        }
        r(document, "webkitbeginfullscreen", l, !0),
            r(document, "webkitendfullscreen", c, !0);
        var u = new o;
        u.fullscreenEnabled = function (e) {
            return !!e.webkitSupportsFullscreen
        }
            ,
            u.fullscreenElement = function () {
                return n
            }
            ,
            u.exitFullscreen = function (e) {
                e && "function" == typeof e.webkitExitFullscreen && e.webkitExitFullscreen()
            }
            ,
            u.requestFullscreen = function (e) {
                "function" == typeof e.webkitEnterFullscreen && e.webkitEnterFullscreen()
            }
            ,
            u.mode = a.IOS,
            t.exports = u
    }
        , {
        "./../consts/modes": 239,
        "./../events/types": 243,
        "@marcom/ac-dom-events/addEventListener": 207,
        "@marcom/ac-event-emitter-micro": 229
    }],
    243: [function (e, t, i) {
        "use strict";
        t.exports = {
            ENTERFULLSCREEN: "enterfullscreen",
            EXITFULLSCREEN: "exitfullscreen"
        }
    }
        , {}],
    244: [function (e, t, i) {
        "use strict";
        e("@marcom/ac-event-emitter-micro").EventEmitterMicro;
        var n = "Error: Element missing. ac-fullscreen requires an element to be specified"
            , r = e("./delegate/factory").create();
        function o() {
            throw new Error(n)
        }
        var s = {
            requestFullscreen: function (e) {
                return e || o(),
                    r.requestFullscreen(e)
            },
            fullscreenEnabled: function (e) {
                return e || o(),
                    r.fullscreenEnabled(e)
            },
            fullscreenElement: function () {
                return r.fullscreenElement()
            },
            exitFullscreen: function (e) {
                return e || o(),
                    r.exitFullscreen(e)
            },
            getMode: function () {
                return r.mode
            },
            on: function () {
                return r.on.apply(r, arguments)
            },
            off: function () {
                return r.off.apply(r, arguments)
            },
            once: function () {
                return r.once.apply(r, arguments)
            }
        };
        t.exports = s
    }
        , {
        "./delegate/factory": 241,
        "@marcom/ac-event-emitter-micro": 229
    }],
    245: [function (e, t, i) {
        "use strict";
        t.exports = function (e) {
            var t;
            return function () {
                return void 0 === t && (t = e.apply(this, arguments)),
                    t
            }
        }
    }
        , {}],
    246: [function (e, t, i) {
        "use strict";
        t.exports = function (e, t) {
            var i = null;
            return function () {
                null === i && (e.apply(this, arguments),
                    i = setTimeout(function () {
                        i = null
                    }, t))
            }
        }
    }
        , {}],
    247: [function (e, t, i) {
        "use strict";
        var n = e("@marcom/ac-event-emitter-micro").EventEmitterMicro
            , r = e("@marcom/ac-dom-events/utils/addEventListener")
            , o = e("@marcom/ac-dom-events/utils/removeEventListener")
            , s = e("@marcom/ac-object/create")
            , a = e("./internal/KeyEvent")
            , l = "keydown"
            , c = "keyup";
        function u(e) {
            this._keysDown = {},
                this._DOMKeyDown = this._DOMKeyDown.bind(this),
                this._DOMKeyUp = this._DOMKeyUp.bind(this),
                this._context = e || document,
                r(this._context, l, this._DOMKeyDown, !0),
                r(this._context, c, this._DOMKeyUp, !0),
                n.call(this)
        }
        var h = u.prototype = s(n.prototype);
        h.onDown = function (e, t) {
            return this.on(l + ":" + e, t)
        }
            ,
            h.onceDown = function (e, t) {
                return this.once(l + ":" + e, t)
            }
            ,
            h.offDown = function (e, t) {
                return this.off(l + ":" + e, t)
            }
            ,
            h.onUp = function (e, t) {
                return this.on(c + ":" + e, t)
            }
            ,
            h.onceUp = function (e, t) {
                return this.once(c + ":" + e, t)
            }
            ,
            h.offUp = function (e, t) {
                return this.off(c + ":" + e, t)
            }
            ,
            h.isDown = function (e) {
                return e += "",
                    this._keysDown[e] || !1
            }
            ,
            h.isUp = function (e) {
                return !this.isDown(e)
            }
            ,
            h.destroy = function () {
                return o(this._context, l, this._DOMKeyDown, !0),
                    o(this._context, c, this._DOMKeyUp, !0),
                    this._keysDown = null,
                    this._context = null,
                    n.prototype.destroy.call(this),
                    this
            }
            ,
            h._DOMKeyDown = function (e) {
                var t = this._normalizeKeyboardEvent(e)
                    , i = t.keyCode += "";
                this._trackKeyDown(i),
                    this.trigger(l + ":" + i, t)
            }
            ,
            h._DOMKeyUp = function (e) {
                var t = this._normalizeKeyboardEvent(e)
                    , i = t.keyCode += "";
                this._trackKeyUp(i),
                    this.trigger(c + ":" + i, t)
            }
            ,
            h._normalizeKeyboardEvent = function (e) {
                return new a(e)
            }
            ,
            h._trackKeyUp = function (e) {
                this._keysDown[e] && (this._keysDown[e] = !1)
            }
            ,
            h._trackKeyDown = function (e) {
                this._keysDown[e] || (this._keysDown[e] = !0)
            }
            ,
            t.exports = u
    }
        , {
        "./internal/KeyEvent": 248,
        "@marcom/ac-dom-events/utils/addEventListener": 210,
        "@marcom/ac-dom-events/utils/removeEventListener": 211,
        "@marcom/ac-event-emitter-micro": 229,
        "@marcom/ac-object/create": 252
    }],
    248: [function (e, t, i) {
        "use strict";
        var n = e("./keyCodeMap.js")
            , r = ["keyLocation", "keyIdentifier"]
            , o = "keyCode";
        function s(e) {
            var t;
            for (t in this.originalEvent = e,
                e)
                -1 === r.indexOf(t) && "function" != typeof e[t] && (this[t] = e[t]);
            this[o] || (this[o] = this._getKeyCode()),
                this.location = void 0 !== this.originalEvent.location ? this.originalEvent.location : this.originalEvent.keyLocation
        }
        s.prototype = {
            preventDefault: function () {
                if ("function" == typeof this.originalEvent.preventDefault)
                    return this.originalEvent.preventDefault();
                this.originalEvent.returnValue = !1
            },
            stopPropagation: function () {
                return this.originalEvent.stopPropagation()
            },
            _getKeyCode: function () {
                return n[this.code] || -1
            }
        },
            t.exports = s
    }
        , {
        "./keyCodeMap.js": 249
    }],
    249: [function (e, t, i) {
        "use strict";
        t.exports = {
            Backspace: 8,
            Tab: 9,
            Enter: 13,
            NumpadEnter: 13,
            ShiftLeft: 16,
            ShiftRight: 16,
            ControlLeft: 17,
            ControlRight: 17,
            AltLeft: 18,
            AltRight: 18,
            CapsLock: 20,
            Escape: 27,
            PageUp: 33,
            PageDown: 34,
            End: 35,
            Home: 36,
            ArrowLeft: 37,
            ArrowUp: 38,
            ArrowRight: 39,
            ArrowDown: 40,
            Delete: 46,
            Digit0: 48,
            Digit1: 49,
            Digit2: 50,
            Digit3: 51,
            Digit4: 52,
            Digit5: 53,
            Digit6: 54,
            Digit7: 55,
            Digit8: 56,
            Digit9: 57,
            KeyA: 65,
            KeyB: 66,
            KeyC: 67,
            KeyD: 68,
            KeyE: 69,
            KeyF: 70,
            KeyG: 71,
            KeyH: 72,
            KeyI: 73,
            KeyJ: 74,
            KeyK: 75,
            KeyL: 76,
            KeyM: 77,
            KeyN: 78,
            KeyO: 79,
            KeyP: 80,
            KeyQ: 81,
            KeyR: 82,
            KeyS: 83,
            KeyT: 84,
            KeyU: 85,
            KeyV: 86,
            KeyW: 87,
            KeyX: 88,
            KeyY: 89,
            KeyZ: 90,
            Numpad0: 96,
            Numpad1: 97,
            Numpad2: 98,
            Numpad3: 99,
            Numpad4: 100,
            Numpad5: 101,
            Numpad6: 102,
            Numpad7: 103,
            Numpad8: 104,
            Numpad9: 105,
            NumpadMultiply: 106,
            NumpadAdd: 107,
            NumpadSubtract: 109,
            NumpadDecimal: 110,
            NumpadDivide: 111,
            NumpadEqual: 187,
            Backquote: 192,
            BracketLeft: 219,
            BracketRight: 221,
            Backslash: 220,
            Semicolon: 186,
            Quote: 222,
            Space: 32,
            Equal: 187,
            Comma: 188,
            Minus: 189,
            Period: 190,
            Slash: 191
        }
    }
        , {}],
    250: [function (e, t, i) {
        "use strict";
        t.exports = {
            BACKSPACE: 8,
            TAB: 9,
            ENTER: 13,
            SHIFT: 16,
            CONTROL: 17,
            ALT: 18,
            COMMAND: 91,
            CAPSLOCK: 20,
            ESCAPE: 27,
            PAGE_UP: 33,
            PAGE_DOWN: 34,
            END: 35,
            HOME: 36,
            ARROW_LEFT: 37,
            ARROW_UP: 38,
            ARROW_RIGHT: 39,
            ARROW_DOWN: 40,
            DELETE: 46,
            ZERO: 48,
            ONE: 49,
            TWO: 50,
            THREE: 51,
            FOUR: 52,
            FIVE: 53,
            SIX: 54,
            SEVEN: 55,
            EIGHT: 56,
            NINE: 57,
            A: 65,
            B: 66,
            C: 67,
            D: 68,
            E: 69,
            F: 70,
            G: 71,
            H: 72,
            I: 73,
            J: 74,
            K: 75,
            L: 76,
            M: 77,
            N: 78,
            O: 79,
            P: 80,
            Q: 81,
            R: 82,
            S: 83,
            T: 84,
            U: 85,
            V: 86,
            W: 87,
            X: 88,
            Y: 89,
            Z: 90,
            NUMPAD_ZERO: 96,
            NUMPAD_ONE: 97,
            NUMPAD_TWO: 98,
            NUMPAD_THREE: 99,
            NUMPAD_FOUR: 100,
            NUMPAD_FIVE: 101,
            NUMPAD_SIX: 102,
            NUMPAD_SEVEN: 103,
            NUMPAD_EIGHT: 104,
            NUMPAD_NINE: 105,
            NUMPAD_ASTERISK: 106,
            NUMPAD_PLUS: 107,
            NUMPAD_DASH: 109,
            NUMPAD_DOT: 110,
            NUMPAD_SLASH: 111,
            NUMPAD_EQUALS: 187,
            TICK: 192,
            LEFT_BRACKET: 219,
            RIGHT_BRACKET: 221,
            BACKSLASH: 220,
            SEMICOLON: 186,
            APOSTRAPHE: 222,
            APOSTROPHE: 222,
            SPACEBAR: 32,
            CLEAR: 12,
            COMMA: 188,
            DOT: 190,
            SLASH: 191
        }
    }
        , {}],
    251: [function (e, t, i) {
        arguments[4][96][0].apply(i, arguments)
    }
        , {
        "./extend": 253,
        "@babel/runtime/helpers/interopRequireDefault": 157,
        "@babel/runtime/helpers/typeof": 164,
        "@marcom/ac-polyfills/Array/isArray": 255,
        dup: 96
    }],
    252: [function (e, t, i) {
        arguments[4][97][0].apply(i, arguments)
    }
        , {
        "@babel/runtime/helpers/interopRequireDefault": 157,
        "@babel/runtime/helpers/typeof": 164,
        dup: 97
    }],
    253: [function (e, t, i) {
        arguments[4][99][0].apply(i, arguments)
    }
        , {
        "@marcom/ac-polyfills/Array/prototype.forEach": 257,
        dup: 99
    }],
    254: [function (e, t, i) {
        arguments[4][104][0].apply(i, arguments)
    }
        , {
        "@babel/runtime/helpers/interopRequireDefault": 157,
        "@babel/runtime/helpers/typeof": 164,
        "@marcom/ac-url/joinSearchParams": 315,
        dup: 104
    }],
    255: [function (e, t, i) {
        arguments[4][105][0].apply(i, arguments)
    }
        , {
        dup: 105
    }],
    256: [function (e, t, i) {
        "use strict";
        Array.prototype.every || (Array.prototype.every = function (e, t) {
            var i, n = Object(this), r = n.length >>> 0;
            if ("function" != typeof e)
                throw new TypeError(e + " is not a function");
            for (i = 0; i < r; i += 1)
                if (i in n && !e.call(t, n[i], i, n))
                    return !1;
            return !0
        }
        )
    }
        , {}],
    257: [function (e, t, i) {
        arguments[4][106][0].apply(i, arguments)
    }
        , {
        dup: 106
    }],
    258: [function (e, t, i) {
        arguments[4][107][0].apply(i, arguments)
    }
        , {
        dup: 107
    }],
    259: [function (e, t, i) {
        arguments[4][108][0].apply(i, arguments)
    }
        , {
        dup: 108
    }],
    260: [function (e, t, i) {
        "use strict";
        Date.now || (Date.now = function () {
            return (new Date).getTime()
        }
        )
    }
        , {}],
    261: [function (e, t, i) {
        "use strict";
        e("../Date/now"),
            function () {
                if ("performance" in window == 0 && (window.performance = {}),
                    "now" in window.performance == 0) {
                    var e = Date.now();
                    performance.timing && performance.timing.navigationStart && (e = performance.timing.navigationStart),
                        window.performance.now = function () {
                            return Date.now() - e
                        }
                }
            }()
    }
        , {
        "../Date/now": 260
    }],
    262: [function (e, t, i) {
        arguments[4][110][0].apply(i, arguments)
    }
        , {
        "./shared/camelCasedEventTypes": 263,
        "./shared/prefixHelper": 264,
        "./shared/windowFallbackEventTypes": 265,
        "./utils/eventTypeAvailable": 266,
        dup: 110
    }],
    263: [function (e, t, i) {
        arguments[4][111][0].apply(i, arguments)
    }
        , {
        dup: 111
    }],
    264: [function (e, t, i) {
        arguments[4][112][0].apply(i, arguments)
    }
        , {
        dup: 112
    }],
    265: [function (e, t, i) {
        arguments[4][113][0].apply(i, arguments)
    }
        , {
        dup: 113
    }],
    266: [function (e, t, i) {
        arguments[4][114][0].apply(i, arguments)
    }
        , {
        dup: 114
    }],
    267: [function (e, t, i) {
        "use strict";
        var n = e("@marcom/ac-shared-instance").SharedInstance
            , r = function () {
                this._currentID = 0
            };
        r.prototype.getNewID = function () {
            return this._currentID++,
                "raf:" + this._currentID
        }
            ,
            t.exports = n.share("ac-raf-emitter-id-generator:sharedRAFEmitterIDGeneratorInstance", "1.0.3", r)
    }
        , {
        "@marcom/ac-shared-instance": 278
    }],
    268: [function (e, t, i) {
        "use strict";
        var n, r = e("@marcom/ac-event-emitter-micro").EventEmitterMicro, o = e("@marcom/ac-raf-executor/sharedRAFExecutorInstance"), s = e("@marcom/ac-raf-emitter-id-generator/sharedRAFEmitterIDGeneratorInstance");
        function a(e) {
            e = e || {},
                r.call(this),
                this.id = s.getNewID(),
                this.executor = e.executor || o,
                this._reset(),
                this._willRun = !1,
                this._didDestroy = !1
        }
        (n = a.prototype = Object.create(r.prototype)).run = function () {
            return this._willRun || (this._willRun = !0),
                this._subscribe()
        }
            ,
            n.cancel = function () {
                this._unsubscribe(),
                    this._willRun && (this._willRun = !1),
                    this._reset()
            }
            ,
            n.destroy = function () {
                var e = this.willRun();
                return this.cancel(),
                    this.executor = null,
                    r.prototype.destroy.call(this),
                    this._didDestroy = !0,
                    e
            }
            ,
            n.willRun = function () {
                return this._willRun
            }
            ,
            n.isRunning = function () {
                return this._isRunning
            }
            ,
            n._subscribe = function () {
                return this.executor.subscribe(this)
            }
            ,
            n._unsubscribe = function () {
                return this.executor.unsubscribe(this)
            }
            ,
            n._onAnimationFrameStart = function (e) {
                this._isRunning = !0,
                    this._willRun = !1,
                    this._didEmitFrameData || (this._didEmitFrameData = !0,
                        this.trigger("start", e))
            }
            ,
            n._onAnimationFrameEnd = function (e) {
                this._willRun || (this.trigger("stop", e),
                    this._reset())
            }
            ,
            n._reset = function () {
                this._didEmitFrameData = !1,
                    this._isRunning = !1
            }
            ,
            t.exports = a
    }
        , {
        "@marcom/ac-event-emitter-micro": 229,
        "@marcom/ac-raf-emitter-id-generator/sharedRAFEmitterIDGeneratorInstance": 267,
        "@marcom/ac-raf-executor/sharedRAFExecutorInstance": 277
    }],
    269: [function (e, t, i) {
        "use strict";
        var n = e("./SingleCallRAFEmitter")
            , r = function (e) {
                this.rafEmitter = new n,
                    this.rafEmitter.on(e, this._onRAFExecuted.bind(this)),
                    this.requestAnimationFrame = this.requestAnimationFrame.bind(this),
                    this.cancelAnimationFrame = this.cancelAnimationFrame.bind(this),
                    this._frameCallbacks = [],
                    this._nextFrameCallbacks = [],
                    this._currentFrameID = -1,
                    this._cancelFrameIdx = -1,
                    this._frameCallbackLength = 0,
                    this._nextFrameCallbacksLength = 0,
                    this._frameCallbackIteration = 0
            }
            , o = r.prototype;
        o.requestAnimationFrame = function (e) {
            return this._currentFrameID = this.rafEmitter.run(),
                this._nextFrameCallbacks.push(this._currentFrameID, e),
                this._nextFrameCallbacksLength += 2,
                this._currentFrameID
        }
            ,
            o.cancelAnimationFrame = function (e) {
                this._cancelFrameIdx = this._nextFrameCallbacks.indexOf(e),
                    -1 !== this._cancelFrameIdx && (this._nextFrameCallbacks.splice(this._cancelFrameIdx, 2),
                        this._nextFrameCallbacksLength -= 2,
                        0 === this._nextFrameCallbacksLength && this.rafEmitter.cancel())
            }
            ,
            o._onRAFExecuted = function (e) {
                for (this._frameCallbacks = this._nextFrameCallbacks,
                    this._frameCallbackLength = this._nextFrameCallbacksLength,
                    this._nextFrameCallbacks = [],
                    this._nextFrameCallbacksLength = 0,
                    this._frameCallbackIteration = 0; this._frameCallbackIteration < this._frameCallbackLength; this._frameCallbackIteration += 2)
                    this._frameCallbacks[this._frameCallbackIteration + 1](e.time, e)
            }
            ,
            t.exports = r
    }
        , {
        "./SingleCallRAFEmitter": 271
    }],
    270: [function (e, t, i) {
        "use strict";
        var n = e("./RAFInterface")
            , r = function () {
                this.events = {}
            }
            , o = r.prototype;
        o.requestAnimationFrame = function (e) {
            return this.events[e] || (this.events[e] = new n(e)),
                this.events[e].requestAnimationFrame
        }
            ,
            o.cancelAnimationFrame = function (e) {
                return this.events[e] || (this.events[e] = new n(e)),
                    this.events[e].cancelAnimationFrame
            }
            ,
            t.exports = new r
    }
        , {
        "./RAFInterface": 269
    }],
    271: [function (e, t, i) {
        "use strict";
        var n = e("./RAFEmitter")
            , r = function (e) {
                n.call(this, e)
            };
        (r.prototype = Object.create(n.prototype))._subscribe = function () {
            return this.executor.subscribe(this, !0)
        }
            ,
            t.exports = r
    }
        , {
        "./RAFEmitter": 268
    }],
    272: [function (e, t, i) {
        "use strict";
        var n = e("./RAFInterfaceController");
        t.exports = n.cancelAnimationFrame("draw")
    }
        , {
        "./RAFInterfaceController": 270
    }],
    273: [function (e, t, i) {
        "use strict";
        var n = e("./RAFInterfaceController");
        t.exports = n.cancelAnimationFrame("update")
    }
        , {
        "./RAFInterfaceController": 270
    }],
    274: [function (e, t, i) {
        "use strict";
        var n = e("./RAFInterfaceController");
        t.exports = n.requestAnimationFrame("draw")
    }
        , {
        "./RAFInterfaceController": 270
    }],
    275: [function (e, t, i) {
        "use strict";
        var n = e("./RAFInterfaceController");
        t.exports = n.requestAnimationFrame("update")
    }
        , {
        "./RAFInterfaceController": 270
    }],
    276: [function (e, t, i) {
        "use strict";
        var n;
        function r(e) {
            e = e || {},
                this._reset(),
                this._willRun = !1,
                this._totalSubscribeCount = -1,
                this._requestAnimationFrame = window.requestAnimationFrame,
                this._cancelAnimationFrame = window.cancelAnimationFrame,
                this._boundOnAnimationFrame = this._onAnimationFrame.bind(this),
                this._boundOnExternalAnimationFrame = this._onExternalAnimationFrame.bind(this)
        }
        e("@marcom/ac-polyfills/performance/now"),
            (n = r.prototype).subscribe = function (e, t) {
                return this._totalSubscribeCount++,
                    this._nextFrameSubscribers[e.id] || (t ? this._nextFrameSubscribersOrder.unshift(e.id) : this._nextFrameSubscribersOrder.push(e.id),
                        this._nextFrameSubscribers[e.id] = e,
                        this._nextFrameSubscriberArrayLength++,
                        this._nextFrameSubscriberCount++,
                        this._run()),
                    this._totalSubscribeCount
            }
            ,
            n.unsubscribe = function (e) {
                return !!this._nextFrameSubscribers[e.id] && (this._nextFrameSubscribers[e.id] = null,
                    this._nextFrameSubscriberCount--,
                    0 === this._nextFrameSubscriberCount && this._cancel(),
                    !0)
            }
            ,
            n.trigger = function (e, t) {
                var i;
                for (i = 0; i < this._subscriberArrayLength; i++)
                    null !== this._subscribers[this._subscribersOrder[i]] && !1 === this._subscribers[this._subscribersOrder[i]]._didDestroy && this._subscribers[this._subscribersOrder[i]].trigger(e, t)
            }
            ,
            n.destroy = function () {
                var e = this._cancel();
                return this._subscribers = null,
                    this._subscribersOrder = null,
                    this._nextFrameSubscribers = null,
                    this._nextFrameSubscribersOrder = null,
                    this._rafData = null,
                    this._boundOnAnimationFrame = null,
                    this._onExternalAnimationFrame = null,
                    e
            }
            ,
            n.useExternalAnimationFrame = function (e) {
                if ("boolean" == typeof e) {
                    var t = this._isUsingExternalAnimationFrame;
                    return e && this._animationFrame && (this._cancelAnimationFrame.call(window, this._animationFrame),
                        this._animationFrame = null),
                        !this._willRun || e || this._animationFrame || (this._animationFrame = this._requestAnimationFrame.call(window, this._boundOnAnimationFrame)),
                        this._isUsingExternalAnimationFrame = e,
                        e ? this._boundOnExternalAnimationFrame : t || !1
                }
            }
            ,
            n._run = function () {
                if (!this._willRun)
                    return this._willRun = !0,
                        0 === this.lastFrameTime && (this.lastFrameTime = performance.now()),
                        this._animationFrameActive = !0,
                        this._isUsingExternalAnimationFrame || (this._animationFrame = this._requestAnimationFrame.call(window, this._boundOnAnimationFrame)),
                        !0
            }
            ,
            n._cancel = function () {
                var e = !1;
                return this._animationFrameActive && (this._animationFrame && (this._cancelAnimationFrame.call(window, this._animationFrame),
                    this._animationFrame = null),
                    this._animationFrameActive = !1,
                    this._willRun = !1,
                    e = !0),
                    this._isRunning || this._reset(),
                    e
            }
            ,
            n._onSubscribersAnimationFrameStart = function (e) {
                var t;
                for (t = 0; t < this._subscriberArrayLength; t++)
                    null !== this._subscribers[this._subscribersOrder[t]] && !1 === this._subscribers[this._subscribersOrder[t]]._didDestroy && this._subscribers[this._subscribersOrder[t]]._onAnimationFrameStart(e)
            }
            ,
            n._onSubscribersAnimationFrameEnd = function (e) {
                var t;
                for (t = 0; t < this._subscriberArrayLength; t++)
                    null !== this._subscribers[this._subscribersOrder[t]] && !1 === this._subscribers[this._subscribersOrder[t]]._didDestroy && this._subscribers[this._subscribersOrder[t]]._onAnimationFrameEnd(e)
            }
            ,
            n._onAnimationFrame = function (e) {
                this._subscribers = this._nextFrameSubscribers,
                    this._subscribersOrder = this._nextFrameSubscribersOrder,
                    this._subscriberArrayLength = this._nextFrameSubscriberArrayLength,
                    this._subscriberCount = this._nextFrameSubscriberCount,
                    this._nextFrameSubscribers = {},
                    this._nextFrameSubscribersOrder = [],
                    this._nextFrameSubscriberArrayLength = 0,
                    this._nextFrameSubscriberCount = 0,
                    this._isRunning = !0,
                    this._willRun = !1,
                    this._didRequestNextRAF = !1,
                    this._rafData.delta = e - this.lastFrameTime,
                    this.lastFrameTime = e,
                    this._rafData.fps = 0,
                    this._rafData.delta >= 1e3 && (this._rafData.delta = 0),
                    0 !== this._rafData.delta && (this._rafData.fps = 1e3 / this._rafData.delta),
                    this._rafData.time = e,
                    this._rafData.naturalFps = this._rafData.fps,
                    this._rafData.timeNow = Date.now(),
                    this._onSubscribersAnimationFrameStart(this._rafData),
                    this.trigger("update", this._rafData),
                    this.trigger("external", this._rafData),
                    this.trigger("draw", this._rafData),
                    this._onSubscribersAnimationFrameEnd(this._rafData),
                    this._willRun || this._reset()
            }
            ,
            n._onExternalAnimationFrame = function (e) {
                this._isUsingExternalAnimationFrame && this._onAnimationFrame(e)
            }
            ,
            n._reset = function () {
                this._rafData = {
                    time: 0,
                    delta: 0,
                    fps: 0,
                    naturalFps: 0,
                    timeNow: 0
                },
                    this._subscribers = {},
                    this._subscribersOrder = [],
                    this._subscriberArrayLength = 0,
                    this._subscriberCount = 0,
                    this._nextFrameSubscribers = {},
                    this._nextFrameSubscribersOrder = [],
                    this._nextFrameSubscriberArrayLength = 0,
                    this._nextFrameSubscriberCount = 0,
                    this._didEmitFrameData = !1,
                    this._animationFrame = null,
                    this._animationFrameActive = !1,
                    this._isRunning = !1,
                    this._shouldReset = !1,
                    this.lastFrameTime = 0
            }
            ,
            t.exports = r
    }
        , {
        "@marcom/ac-polyfills/performance/now": 261
    }],
    277: [function (e, t, i) {
        "use strict";
        var n = e("@marcom/ac-shared-instance").SharedInstance
            , r = e("./RAFExecutor");
        t.exports = n.share("ac-raf-executor:sharedRAFExecutorInstance", "2.0.1", r)
    }
        , {
        "./RAFExecutor": 276,
        "@marcom/ac-shared-instance": 278
    }],
    278: [function (e, t, i) {
        "use strict";
        t.exports = {
            SharedInstance: e("./ac-shared-instance/SharedInstance")
        }
    }
        , {
        "./ac-shared-instance/SharedInstance": 279
    }],
    279: [function (e, t, i) {
        "use strict";
        var n, r = e("@babel/runtime/helpers/interopRequireDefault")(e("@babel/runtime/helpers/typeof")), o = "undefined" != typeof window ? window : {}, s = o.AC, a = (n = {},
        {
            get: function (e, t) {
                var i = null;
                return n[e] && n[e][t] && (i = n[e][t]),
                    i
            },
            set: function (e, t, i) {
                return n[e] || (n[e] = {}),
                    n[e][t] = "function" == typeof i ? new i : i,
                    n[e][t]
            },
            share: function (e, t, i) {
                var n = this.get(e, t);
                return n || (n = this.set(e, t, i)),
                    n
            },
            remove: function (e, t) {
                var i = (0,
                    r.default)(t);
                if ("string" !== i && "number" !== i)
                    n[e] && (n[e] = null);
                else {
                    if (!n[e] || !n[e][t])
                        return;
                    n[e][t] = null
                }
            }
        });
        s || (s = o.AC = {}),
            s.SharedInstance || (s.SharedInstance = a),
            t.exports = s.SharedInstance
    }
        , {
        "@babel/runtime/helpers/interopRequireDefault": 157,
        "@babel/runtime/helpers/typeof": 164
    }],
    280: [function (e, t, i) {
        "use strict";
        var n = e("@marcom/ac-event-emitter-micro").EventEmitterMicro
            , r = e("@marcom/dom-metrics")
            , o = e("@marcom/ac-keyboard/Keyboard")
            , s = e("./templates/slider.html")
            , a = {
                num: 37,
                string: "ArrowLeft"
            }
            , l = 38
            , c = {
                num: 39,
                string: "ArrowRight"
            }
            , u = {
                num: 40,
                string: "ArrowDown"
            }
            , h = [a, c, u, c]
            , d = function (e) {
                if (e.which)
                    return e.which;
                for (var t = e.key ? e.key : e.code, i = 0, n = h.length; i < n; i++)
                    if (h[i].string === t)
                        return h[i].num;
                return -1
            }
            , p = {
                min: 0,
                max: 1,
                step: 1,
                value: 0,
                orientation: "horizontal",
                renderedPosition: !1,
                template: s,
                keyboardMaxStepPercentage: .05,
                keyboardStepMultiplier: 1.25,
                containerClass: "ac-slider-container",
                grabbedClass: "ac-slider-grabbed"
            }
            , f = Object.keys(p)
            , m = function (e, t) {
                this.options = Object.assign({}, p, t),
                    this.model = Object.create(this.options),
                    this.el = e;
                var i = void 0 !== this.options.keyboardContext ? this.options.keyboardContext : this.el;
                null !== i && (this._keyboard = new o(i),
                    this._keyDown = {}),
                    e.classList.add(this.model.containerClass),
                    e.innerHTML = this.model.template,
                    n.call(this),
                    this._initialize()
            }
            , _ = m.prototype = Object.create(n.prototype);
        _._addGrabClass = function () {
            this.el.classList.add(this.model.grabbedClass)
        }
            ,
            _._removeGrabClass = function () {
                this.el.classList.remove(this.model.grabbedClass)
            }
            ,
            _._addEventListeners = function () {
                this._addEventListener(this.el, "mousedown", this._onMouseDown),
                    this._addEventListener(this.el, "touchstart", this._onTouchStart),
                    this._addEventListener(this.el, "mouseover", this._onMouseOver),
                    this._addEventListener(this.el, "mouseleave", this._onMouseLeave),
                    this._keyboard && ("horizontal" === this.model.orientation ? (this._keyboard.onDown(c.num, this.stepUp),
                        this._keyboard.onDown(a.num, this.stepDown)) : (this._keyboard.onDown(u.num, this.stepDown),
                            this._keyboard.onDown(l, this.stepUp)))
            }
            ,
            _._addEventListener = function (e, t, i, n) {
                e.addEventListener(t, i, n)
            }
            ,
            _._bindMethods = function () {
                this._addGrabClass = this._addGrabClass.bind(this),
                    this._removeGrabClass = this._removeGrabClass.bind(this),
                    this.stepDown = this.stepDown.bind(this),
                    this.stepUp = this.stepUp.bind(this),
                    this._triggerRelease = this._triggerRelease.bind(this),
                    this._preventDefault = this._preventDefault.bind(this),
                    this._onMouseDown = this._bindMethod(this._onMouseDown, this),
                    this._onTouchStart = this._bindMethod(this._onTouchStart, this),
                    this._onMouseOver = this._bindMethod(this._onMouseOver, this),
                    this._onMouseLeave = this._bindMethod(this._onMouseLeave, this),
                    this._onTouchEnd = this._bindMethod(this._onTouchEnd, this),
                    this._onMouseUp = this._bindMethod(this._onMouseUp, this),
                    this._onMouseMove = this._bindMethod(this._onMouseMove, this),
                    this._onTouchMove = this._bindMethod(this._onTouchMove, this)
            }
            ,
            _._bindMethod = function (e, t) {
                return e.bind(t)
            }
            ,
            _._correctValueMinMax = function (e, t, i) {
                return e > i && (e = i),
                    e < t && (e = t),
                    e
            }
            ,
            _._calculateStepsToValue = function (e, t) {
                return Math.abs(e - t)
            }
            ,
            _._calculateMaxSteps = function (e, t) {
                return Math.abs(t - e)
            }
            ,
            _._calculateStepsEqualToPercentage = function (e, t) {
                return e / 100 * t
            }
            ,
            _._calculateNextStepInRange = function (e, t, i, n) {
                var r = this._calculateMaxSteps(t, i)
                    , o = this._calculateStepsToValue(e, t)
                    , s = t + Math.floor(r / n) * n;
                return e = Math.min(s, t + Math.round(o / n) * n)
            }
            ,
            _._dispatchEvent = function (e, t) {
                e.dispatchEvent(new CustomEvent(t))
            }
            ,
            _.disableUserControls = function () {
                this._removeEventListeners()
            }
            ,
            _.enableUserControls = function () {
                this._addEventListeners()
            }
            ,
            _._getNextValue = function (e, t, i, n) {
                return e = this._correctValueMinMax(e, t, i),
                    "auto" !== n && (e = this._calculateNextStepInRange(e, t, i, n)),
                    e
            }
            ,
            _.getOrientation = function () {
                return this.model.orientation
            }
            ,
            _.getValue = function () {
                return this.model.value
            }
            ,
            _.getMin = function () {
                return this.model.min
            }
            ,
            _.getMax = function () {
                return this.model.max
            }
            ,
            _.getStep = function () {
                return this.model.step
            }
            ,
            _.getClientXValue = function (e, t) {
                var i = this._getClientXFromEvent(e)
                    , n = null !== t ? r.getDimensions(t || this.thumbElement) : {
                        width: 0,
                        height: 0
                    }
                    , o = r.getDimensions(this.runnableTrackElement)
                    , s = (i - this.runnableTrackElement.getBoundingClientRect().left - Math.round(n.width / 2)) / (o.width - n.width) * 100
                    , a = this._calculateMaxSteps(this.getMin(), this.getMax())
                    , l = this._calculateStepsEqualToPercentage(s, a);
                return this.getMin() + l
            }
            ,
            _.getClientYValue = function (e) {
                var t = this._getClientYFromEvent(e)
                    , i = r.getDimensions(this.thumbElement)
                    , n = r.getDimensions(this.runnableTrackElement)
                    , o = r.getViewportPosition(this.runnableTrackElement, this.model.renderedPosition)
                    , s = (n.height - i.height - (t - o.top - i.height / 2)) / (n.height - i.height) * 100
                    , a = this._calculateMaxSteps(this.model.min, this.model.max)
                    , l = this._calculateStepsEqualToPercentage(s, a);
                return this.model.min + l
            }
            ,
            _.getClientValue = function (e) {
                return e = e.originalEvent || e,
                    "horizontal" === this.model.orientation ? this.getClientXValue(e) : this.getClientYValue(e)
            }
            ,
            _._getClientXFromEvent = function (e) {
                return e.touches ? e.touches[0].clientX : e.clientX
            }
            ,
            _._getClientYFromEvent = function (e) {
                return e.touches ? e.touches[0].clientY : e.clientY
            }
            ,
            _._initialize = function () {
                this._setNodeReferences(),
                    this.setValue(this.model.value),
                    this._bindMethods(),
                    this._addEventListeners()
            }
            ,
            _._onMouseLeave = function () {
                this._preventDocumentMouseUpDispatch = !1
            }
            ,
            _._onMouseDown = function (e) {
                this._addGrabClass(),
                    this._addEventListener(document, "mouseup", this._onMouseUp),
                    this._addEventListener(document, "mousemove", this._onMouseMove);
                var t = this.getClientValue(e);
                this.trigger("grab", this.getValue()),
                    this.setValue(t)
            }
            ,
            _._onMouseUp = function () {
                this._removeGrabClass(),
                    this._removeEventListener(document, "mouseup", this._onMouseUp),
                    this._removeEventListener(document, "mousemove", this._onMouseMove),
                    this.trigger("release", this.getValue()),
                    this._preventDocumentMouseUpDispatch || this._dispatchEvent(this.el, "mouseup")
            }
            ,
            _._onMouseOver = function () {
                this._preventDocumentMouseUpDispatch = !0
            }
            ,
            _._onTouchEnd = function () {
                this._removeGrabClass(),
                    this._removeEventListener(document, "touchend", this._onTouchEnd),
                    this._removeEventListener(document, "touchmove", this._onTouchMove),
                    this.trigger("release", this.getValue()),
                    this._preventDocumentMouseUpDispatch || this._dispatchEvent(this.el, "touchend")
            }
            ,
            _._onTouchStart = function (e) {
                this._addGrabClass();
                var t = this.getClientValue(e);
                this._addEventListener(document, "touchend", this._onTouchEnd),
                    this._addEventListener(document, "touchmove", this._onTouchMove, {
                        passive: !1
                    }),
                    this.trigger("grab", this.getValue()),
                    this.setValue(t)
            }
            ,
            _._onMouseMove = function (e) {
                var t = this.getClientValue(e);
                this.setValue(t)
            }
            ,
            _._onTouchMove = function (e) {
                e.preventDefault && e.preventDefault();
                var t = this.getClientValue(e);
                this.setValue(t)
            }
            ,
            _._getElementOrientationOffsetValue = function (e, t) {
                return "horizontal" === t ? r.getDimensions(e).width : r.getDimensions(e).height
            }
            ,
            _._getAvailableRunnableTrack = function (e, t) {
                return e - this._getElementOrientationOffsetValue(this.thumbElement, t)
            }
            ,
            _._getPercentageByValue = function (e, t) {
                return (e = this._calculateStepsToValue(e, this.getMin())) / this._calculateMaxSteps(this.getMin(), this.getMax()) * 100
            }
            ,
            _._getPercentageOfRunnableTrack = function (e) {
                var t = this.getOrientation()
                    , i = this._getElementOrientationOffsetValue(this.runnableTrackElement, t)
                    , n = this._getAvailableRunnableTrack(i, t);
                return this._getPercentageByValue(e, this.getMax()) / 100 * n / i * 100
            }
            ,
            _._onChange = function (e) {
                var t = this._getPercentageOfRunnableTrack(e);
                isNaN(t) || ("horizontal" === this.getOrientation() ? this.thumbElement.style.left = t + "%" : this.thumbElement.style.bottom = t + "%",
                    this.trigger("change", this.getValue()))
            }
            ,
            _._removeEventListeners = function () {
                this._removeEventListener(this.el, "mousedown", this._onMouseDown),
                    this._removeEventListener(this.el, "touchstart", this._onTouchStart),
                    this._removeEventListener(this.el, "mouseover", this._onMouseOver),
                    this._removeEventListener(this.el, "mouseleave", this._onMouseLeave),
                    this._removeEventListener(document, "touchend", this._onMouseUp)
            }
            ,
            _._removeEventListener = function (e, t, i) {
                e.removeEventListener(t, i)
            }
            ,
            _._setNodeReferences = function () {
                this.runnableTrackElement = this.el.querySelector(".ac-slider-runnable-track"),
                    this.thumbElement = this.el.querySelector(".ac-slider-thumb")
            }
            ,
            _.setOrientation = function (e) {
                this._set("orientation", e)
            }
            ,
            _._triggerRelease = function (e) {
                this._preventDefault(e),
                    this.trigger("release", this.getValue()),
                    this._keyDown[d(e)] = 0
            }
            ,
            _._preventDefault = function (e) {
                e.preventDefault(),
                    e.stopPropagation()
            }
            ,
            _._step = function (e, t) {
                this._preventDefault(e),
                    this.el.focus();
                var i = this._keyDown[d(e)] || 0;
                i ? Math.abs(this._keyDown[d(e)]) < Math.abs(this.model.max * this.model.keyboardMaxStepPercentage) && (i *= this.model.keyboardStepMultiplier) : (this.trigger("grab", this.getValue()),
                    i = "auto" !== (i = this.getStep()) ? i : this._cachedMaxStep,
                    t || (i *= -1),
                    this._keyboard.onceUp(d(e), this._triggerRelease)),
                    this._keyDown[d(e)] = i,
                    this.setValue(this.getValue() + i)
            }
            ,
            _.stepUp = function (e) {
                this._step(e, !0)
            }
            ,
            _.stepDown = function (e) {
                this._step(e, !1)
            }
            ,
            _.setValue = function (e) {
                e = this._getNextValue(e, this.getMin(), this.getMax(), this.getStep()),
                    this._set("value", e),
                    this.el.setAttribute("aria-valuenow", e),
                    this._onChange(e)
            }
            ,
            _.setMin = function (e) {
                this._set("min", e),
                    this.el.setAttribute("aria-valuemin", e)
            }
            ,
            _.setMax = function (e) {
                this._set("max", e),
                    this.el.setAttribute("aria-valuemax", e),
                    this._cachedMaxStep = e / 100
            }
            ,
            _.setStep = function (e) {
                this._set("step", e)
            }
            ,
            _._set = function (e, t) {
                if (f.indexOf(e) > -1 && this.model[e] !== t) {
                    var i = this.model[e];
                    this.model[e] = t,
                        this.trigger("change:model:" + e, {
                            previous: i,
                            current: t
                        })
                }
            }
            ,
            _._removeEventListeners = function () {
                this._removeEventListener(this.el, "mousedown", this._onMouseDown),
                    this._removeEventListener(this.el, "touchstart", this._onTouchStart),
                    this._removeEventListener(this.el, "mouseover", this._onMouseOver),
                    this._removeEventListener(this.el, "mouseleave", this._onMouseLeave),
                    this._removeEventListener(this.el, "touchend", this._onTouchEnd),
                    this._removeEventListener(document, "touchend", this._onMouseUp),
                    "horizontal" === this.model.orientation ? (this._keyboard.offDown(c.num, this.stepUp),
                        this._keyboard.offDown(a.num, this.stepDown),
                        this._keyboard.offUp(a.num, this._triggerRelease),
                        this._keyboard.offUp(c.num, this._triggerRelease)) : (this._keyboard.offDown(u.num, this.stepDown),
                            this._keyboard.offDown(l, this.stepUp),
                            this._keyboard.offUp(u.num, this._triggerRelease),
                            this._keyboard.offUp(l, this._triggerRelease))
            }
            ,
            _.destroy = function () {
                this._removeEventListeners(),
                    this._keyboard && this._keyboard.destroy(),
                    n.prototype.destroy.call(this)
            }
            ,
            t.exports = m
    }
        , {
        "./templates/slider.html": 282,
        "@marcom/ac-event-emitter-micro": 229,
        "@marcom/ac-keyboard/Keyboard": 247,
        "@marcom/dom-metrics": 316
    }],
    281: [function (e, t, i) {
        "use strict";
        t.exports.Slider = e("./Slider")
    }
        , {
        "./Slider": 280
    }],
    282: [function (e, t, i) {
        "use strict";
        t.exports = '<div class="ac-slider-runnable-track">\n\t<div class="ac-slider-thumb"></div>\n</div>'
    }
        , {}],
    283: [function (e, t, i) {
        "use strict";
        t.exports = {
            copy: e("./copyToClipboard")
        }
    }
        , {
        "./copyToClipboard": 286
    }],
    284: [function (e, t, i) {
        "use strict";
        var n = e("./select");
        t.exports = function (e) {
            return n(e),
                document.execCommand("copy")
        }
    }
        , {
        "./select": 287
    }],
    285: [function (e, t, i) {
        "use strict";
        var n = e("./copyElement")
            , r = document.createElement("input");
        r.setAttribute("tabindex", -1),
            r.setAttribute("readonly", !0),
            r.setAttribute("aria-hidden", !0),
            r.style.position = "fixed",
            t.exports = function (e) {
                var t = !1;
                document.body.appendChild(r);
                try {
                    r.value = e,
                        t = n(r)
                } catch (e) { }
                return document.body.removeChild(r),
                    t
            }
    }
        , {
        "./copyElement": 284
    }],
    286: [function (e, t, i) {
        "use strict";
        var n = e("./copyString")
            , r = e("./copyElement");
        t.exports = function (e) {
            return "string" == typeof e ? n(e) : r(e)
        }
    }
        , {
        "./copyElement": 284,
        "./copyString": 285
    }],
    287: [function (e, t, i) {
        "use strict";
        t.exports = function (e) {
            if ("function" == typeof e.select) {
                e.select() || e.setSelectionRange(0, e.value.length)
            } else {
                var t = document.createRange();
                t.selectNodeContents(e);
                var i = window.getSelection();
                i.removeAllRanges(),
                    i.addRange(t)
            }
        }
    }
        , {}],
    288: [function (e, t, i) {
        "use strict";
        t.exports = {
            Link: e("./ac-social/Link"),
            Dialog: e("./ac-social/Dialog"),
            Focus: e("./ac-social/Focus"),
            Debug: e("./ac-social/Debug"),
            ShareFactory: e("./ac-social/ShareFactory"),
            AutoSocial: e("./ac-social/AutoSocial")
        }
    }
        , {
        "./ac-social/AutoSocial": 289,
        "./ac-social/Debug": 290,
        "./ac-social/Dialog": 291,
        "./ac-social/Focus": 292,
        "./ac-social/Link": 293,
        "./ac-social/ShareFactory": 295
    }],
    289: [function (e, t, i) {
        "use strict";
        var n = e("./ShareFactory");
        t.exports = function (e) {
            n.autoCreate({
                context: e
            })
        }
    }
        , {
        "./ShareFactory": 295
    }],
    290: [function (e, t, i) {
        "use strict";
        var n = e("./NetworkActions");
        function r() {
            var e;
            for (e in this.types = {},
                n)
                n.hasOwnProperty(e) && (o[e] = e,
                    this.addType(e, n[e].getDialogDebugData.bind(n[e])))
        }
        var o = r.prototype;
        o.create = function (e, t) {
            t = t || {};
            var i = this.types[e];
            if (i)
                return i(t)
        }
            ,
            o.addType = function (e, t) {
                return this.types[e] = t,
                    this
            }
            ,
            o.removeType = function () {
                return this.types[name] = null,
                    this
            }
            ,
            t.exports = new r
    }
        , {
        "./NetworkActions": 294
    }],
    291: [function (e, t, i) {
        "use strict";
        var n = e("./NetworkActions");
        function r() {
            var e;
            for (e in this.types = {},
                n)
                n.hasOwnProperty(e) && (o[e] = e,
                    this.addType(e, n[e].generateDialog.bind(n[e])))
        }
        var o = r.prototype;
        o.create = function (e, t) {
            t = t || {};
            var i = this.types[e];
            if (i)
                return i(t)
        }
            ,
            o.addType = function (e, t) {
                return this.types[e] = t,
                    this
            }
            ,
            o.removeType = function () {
                return this.types[name] = null,
                    this
            }
            ,
            t.exports = new r
    }
        , {
        "./NetworkActions": 294
    }],
    292: [function (e, t, i) {
        "use strict";
        t.exports = function (e) {
            if (window.getSelection) {
                var t = window.getSelection();
                (i = document.createRange()).selectNodeContents(e),
                    t.removeAllRanges(),
                    t.addRange(i)
            } else if (e.setSelectionRange)
                e.setSelectionRange(0, e.value.length);
            else if (document.body.createTextRange) {
                var i;
                (i = document.body.createTextRange()).moveToElementText(e),
                    i.select()
            }
        }
    }
        , {}],
    293: [function (e, t, i) {
        "use strict";
        var n = e("./NetworkActions")
            , r = e("./network-actions/DefaultNetworkAction");
        function o() {
            var e;
            for (e in this.types = {},
                n)
                n.hasOwnProperty(e) && (s[e] = e,
                    this.addType(e, n[e].generateLink.bind(n[e])))
        }
        var s = o.prototype;
        s.create = function (e, t, i) {
            t = t || {};
            var n = this.types[e];
            if (n)
                return n(t, i)
        }
            ,
            s.createFromAnchor = function (e) {
                var t, i = e.getAttribute("data-network-action");
                for (t in n)
                    if (n.hasOwnProperty(t) && i === n[t].id)
                        return void n[t].enhanceLinkEngagement(e);
                r.enhanceLinkEngagement(e)
            }
            ,
            s.addType = function (e, t) {
                return this.types[e] = t,
                    this
            }
            ,
            s.removeType = function () {
                return this.types[name] = null,
                    this
            }
            ,
            t.exports = new o
    }
        , {
        "./NetworkActions": 294,
        "./network-actions/DefaultNetworkAction": 297
    }],
    294: [function (e, t, i) {
        "use strict";
        var n = e("./network-actions/FacebookShare")
            , r = e("./network-actions/PinterestShare")
            , o = e("./network-actions/TumblrShare")
            , s = e("./network-actions/TwitterFavorite")
            , a = e("./network-actions/TwitterReply")
            , l = e("./network-actions/TwitterRetweet")
            , c = e("./network-actions/TwitterTweet")
            , u = e("./network-actions/WeiboShare")
            , h = e("./network-actions/QQWeiboShare")
            , d = e("./network-actions/QZoneShare")
            , p = e("./network-actions/RenrenShare")
            , f = e("./network-actions/EMailShare")
            , m = e("./network-actions/VKShare")
            , _ = e("./network-actions/LineShare")
            , v = e("./network-actions/WhatsAppShare");
        t.exports = {
            FACEBOOK_SHARE: n,
            PINTEREST_SHARE: r,
            TUMBLR_SHARE: o,
            TWITTER_FAVORITE: s,
            TWITTER_REPLY: a,
            TWITTER_RETWEET: l,
            TWITTER_TWEET: c,
            WEIBO_SHARE: u,
            QQWEIBO_SHARE: h,
            QZONE_SHARE: d,
            RENREN_SHARE: p,
            EMAIL_SHARE: f,
            VK_SHARE: m,
            LINE_SHARE: _,
            WHATSAPP_SHARE: v
        }
    }
        , {
        "./network-actions/EMailShare": 298,
        "./network-actions/FacebookShare": 299,
        "./network-actions/LineShare": 300,
        "./network-actions/PinterestShare": 302,
        "./network-actions/QQWeiboShare": 303,
        "./network-actions/QZoneShare": 304,
        "./network-actions/RenrenShare": 305,
        "./network-actions/TumblrShare": 306,
        "./network-actions/TwitterFavorite": 307,
        "./network-actions/TwitterReply": 308,
        "./network-actions/TwitterRetweet": 309,
        "./network-actions/TwitterTweet": 310,
        "./network-actions/VKShare": 311,
        "./network-actions/WeiboShare": 312,
        "./network-actions/WhatsAppShare": 313
    }],
    295: [function (e, t, i) {
        "use strict";
        var n = e("./Dialog")
            , r = e("./copy-actions/CopyToClipboard")
            , o = {
                facebook: "FACEBOOK_SHARE",
                pinterest: "PINTEREST_SHARE",
                tumblr: "TUMBLR_SHARE",
                twitter: "TWITTER_TWEET",
                weibo: "WEIBO_SHARE",
                qqweibo: "QQWEIBO_SHARE",
                qzone: "QZONE_SHARE",
                renren: "RENREN_SHARE",
                email: "EMAIL_SHARE",
                vk: "VK_SHARE",
                line: "LINE_SHARE",
                whatsapp: "WHATSAPP_SHARE"
            };
        function s() {
            this._buttonEvts = [],
                this._autoCreatedUrlEls = []
        }
        var a = s.prototype;
        a.autoCreate = function (e) {
            var t = (e = e || {}).context || document.body
                , i = Array.prototype.slice.call(t.querySelectorAll("[data-ac-social-url]"));
            0 === this._autoCreatedUrlEls.length ? this._autoCreatedUrlEls = Array.prototype.slice.call(i) : (i = i.filter(this._hasNotBeenAutoCreated.bind(this)),
                this._autoCreatedUrlEls = this._autoCreatedUrlEls.concat(i)),
                i.forEach(function (e) {
                    var t = e.querySelectorAll("[data-ac-social-button]")
                        , i = e.getAttribute("data-ac-social-url");
                    if (!i)
                        throw new Error("Please provide a valid URL to share in your data-ac-social-url attribute");
                    t.forEach(function (e) {
                        this._createSocialButton(e, i)
                    }
                        .bind(this))
                }, this)
        }
            ,
            a._hasNotBeenAutoCreated = function (e) {
                return -1 === this._autoCreatedUrlEls.indexOf(e)
            }
            ,
            a._createSocialButton = function (e, t) {
                var i = e.getAttribute("data-ac-social-button")
                    , s = o[i];
                if (s) {
                    var a = n.create.bind(n, n[s], {
                        url: t
                    });
                    this._buttonEvts.push({
                        button: e,
                        callback: a
                    }),
                        e.addEventListener("click", a)
                } else if ("copy" === i)
                    new r(e, t)
            }
            ,
            a.destroyButtons = function () {
                this._buttonEvts.forEach(function (e) {
                    e.button.removeEventListener("click", e.callback)
                }
                    .bind(this)),
                    this._buttonEvts = []
            }
            ,
            t.exports = new s
    }
        , {
        "./Dialog": 291,
        "./copy-actions/CopyToClipboard": 296
    }],
    296: [function (e, t, i) {
        "use strict";
        var n = e("@marcom/ac-clipboard");
        function r(e, t) {
            this.el = e,
                this.el.addEventListener("click", function () {
                    n.copy(t),
                        this._notifyTextCopied()
                }
                    .bind(this))
        }
        r.prototype._notifyTextCopied = function () {
            var e = this.el.parentNode.querySelector("[data-ac-social-notification]");
            try {
                e.classList.add("show-notification"),
                    setTimeout(function () {
                        e.classList.remove("show-notification")
                    }, 1e3)
            } catch (e) {
                throw new Error("Please provide a notification message element for the copy to clipboard functionality")
            }
        }
            ,
            t.exports = r
    }
        , {
        "@marcom/ac-clipboard": 283
    }],
    297: [function (e, t, i) {
        "use strict";
        var n = e("./NetworkAction");
        t.exports = new n(function (e) {
            return e
        }
            , {
                baseLinkPath: ""
            })
    }
        , {
        "./NetworkAction": 301
    }],
    298: [function (e, t, i) {
        "use strict";
        var n = e("./NetworkAction");
        t.exports = new n(function (e) {
            var t = {
                url: e.url
            };
            return e.title && (t.subject = e.title),
                e.description ? t.body = e.description + "\r\n\r\n" + e.url : t.body = e.url,
                t
        }
            , {
                id: "email-share",
                baseLinkPath: "mailto:",
                preventDialog: !0
            })
    }
        , {
        "./NetworkAction": 301
    }],
    299: [function (e, t, i) {
        "use strict";
        var n = e("./NetworkAction");
        t.exports = new n(function (e) {
            return {
                u: e.url
            }
        }
            , {
                id: "facebook-share",
                baseLinkPath: "https://www.facebook.com/sharer/sharer.php",
                dialogDimensions: {
                    width: 555,
                    height: 368
                }
            })
    }
        , {
        "./NetworkAction": 301
    }],
    300: [function (e, t, i) {
        "use strict";
        var n = e("./NetworkAction");
        t.exports = new n(function (e) {
            return {
                url: e.url,
                text: e.description,
                from: "line_scheme"
            }
        }
            , {
                id: "line-share",
                baseLinkPath: "https://social-plugins.line.me/lineit/share",
                dialogDimensions: {
                    width: 555,
                    height: 505
                }
            })
    }
        , {
        "./NetworkAction": 301
    }],
    301: [function (e, t, i) {
        "use strict";
        var n, r = function (e, t) {
            t = t || {},
                this.baseLinkPath = t.baseLinkPath,
                t.dialogDimensions && (this.dialogDimensions = t.dialogDimensions),
                t.id && (this.id = t.id),
                t.preventDialog && (this.preventDialog = t.preventDialog),
                this.normalizeData = e
        };
        (n = r.prototype).dataAttributeName = "network-action",
            n.id = "network-action",
            n.normalizeData = function (e) {
                return e
            }
            ,
            n.dialogDimensions = {
                width: 500,
                height: 500
            },
            n.generateLinkURL = function (e) {
                var t = this.normalizeData(e)
                    , i = JSON.parse(JSON.stringify(t))
                    , n = new URLSearchParams(i).toString()
                    , r = this.baseLinkPath;
                return n.length > 0 && (r = r + "?" + n),
                    r
            }
            ,
            n.generateLink = function (e, t) {
                var i = this.generateLinkURL(e);
                return (t = t || document.createElement("A")).setAttribute("href", i),
                    t.setAttribute("target", "_blank"),
                    t.setAttribute("data-" + this.dataAttributeName, this.id),
                    this.enhanceLinkEngagement(t, i),
                    t
            }
            ,
            n.generateDialog = function (e) {
                var t = this.generateLinkURL(e);
                this._triggerDialog(t)
            }
            ,
            n.enhanceLinkEngagement = function (e, t) {
                t = t || e.getAttribute("href"),
                    e.addEventListener("click", this._onLinkEngaged.bind(this, t))
            }
            ,
            n.getDialogOptions = function () {
                var e, t = "status=1", i = {
                    width: this.dialogDimensions.width,
                    height: this.dialogDimensions.height
                };
                for (e in i.top = (window.screen.availHeight - i.height) / 2,
                    i.left = (window.screen.availWidth - i.width) / 2,
                    i)
                    i.hasOwnProperty(e) && (t += ", " + e + "=" + i[e]);
                return t
            }
            ,
            n.getDialogDebugData = function (e) {
                return {
                    data: this.normalizeData(e),
                    dialogUrl: this.generateLinkURL(e)
                }
            }
            ,
            n._triggerDialog = function (e) {
                this.preventDialog ? window.location.href = e : window.open(e, "_blank", this.getDialogOptions())
            }
            ,
            n._onLinkEngaged = function (e, t) {
                t.preventDefault(),
                    this._triggerDialog(e)
            }
            ,
            t.exports = r
    }
        , {}],
    302: [function (e, t, i) {
        "use strict";
        var n = e("./NetworkAction");
        t.exports = new n(function (e) {
            var t = {
                url: e.url,
                description: e.description
            };
            return e.media && (t.media = e.media),
                t
        }
            , {
                id: "pinterest-share",
                baseLinkPath: "http://www.pinterest.com/pin/create/button",
                dialogDimensions: {
                    width: 750,
                    height: 450
                }
            })
    }
        , {
        "./NetworkAction": 301
    }],
    303: [function (e, t, i) {
        "use strict";
        var n = e("./NetworkAction");
        t.exports = new n(function (e) {
            return {
                url: e.url,
                title: e.title,
                pic: e.media
            }
        }
            , {
                id: "qq-weibo-share",
                baseLinkPath: "http://v.t.qq.com/share/share.php",
                dialogDimensions: {
                    width: 658,
                    height: 506
                }
            })
    }
        , {
        "./NetworkAction": 301
    }],
    304: [function (e, t, i) {
        "use strict";
        var n = e("./NetworkAction");
        t.exports = new n(function (e) {
            return {
                url: e.url,
                title: e.title,
                pics: e.media,
                summary: e.description
            }
        }
            , {
                id: "qzone-share",
                baseLinkPath: "http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey",
                dialogDimensions: {
                    width: 620,
                    height: 645
                }
            })
    }
        , {
        "./NetworkAction": 301
    }],
    305: [function (e, t, i) {
        "use strict";
        var n = e("./NetworkAction");
        t.exports = new n(function (e) {
            return {
                url: e.url,
                title: e.title
            }
        }
            , {
                id: "renren-share",
                baseLinkPath: "http://www.connect.renren.com/share/sharer",
                dialogDimensions: {
                    width: 500,
                    height: 315
                }
            })
    }
        , {
        "./NetworkAction": 301
    }],
    306: [function (e, t, i) {
        "use strict";
        var n = e("./NetworkAction");
        t.exports = new n(function (e) {
            var t = {
                clickthru: e.url,
                caption: e.description
            };
            return e.media && (t.source = e.media),
                t
        }
            , {
                id: "tumblr-share",
                baseLinkPath: "http://www.tumblr.com/share/photo",
                dialogDimensions: {
                    width: 450,
                    height: 432
                }
            })
    }
        , {
        "./NetworkAction": 301
    }],
    307: [function (e, t, i) {
        "use strict";
        var n = e("./NetworkAction");
        t.exports = new n(function (e) {
            return {
                tweet_id: e.messageId
            }
        }
            , {
                id: "twitter-favorite",
                baseLinkPath: "https://twitter.com/intent/favorite",
                dialogDimensions: {
                    width: 550,
                    height: 420
                }
            })
    }
        , {
        "./NetworkAction": 301
    }],
    308: [function (e, t, i) {
        "use strict";
        var n = e("./NetworkAction");
        t.exports = new n(function (e) {
            var t = {
                in_reply_to: e.messageId
            };
            return e.hashtags && (t.hashtags = e.hashtags),
                t
        }
            , {
                id: "twitter-reply",
                baseLinkPath: "https://twitter.com/intent/tweet",
                dialogDimensions: {
                    width: 550,
                    height: 420
                }
            })
    }
        , {
        "./NetworkAction": 301
    }],
    309: [function (e, t, i) {
        "use strict";
        var n = e("./NetworkAction");
        t.exports = new n(function (e) {
            return {
                tweet_id: e.messageId
            }
        }
            , {
                id: "twitter-retweet",
                baseLinkPath: "https://twitter.com/intent/retweet",
                dialogDimensions: {
                    width: 550,
                    height: 420
                }
            })
    }
        , {
        "./NetworkAction": 301
    }],
    310: [function (e, t, i) {
        "use strict";
        var n = e("./NetworkAction");
        t.exports = new n(function (e) {
            var t = {
                url: e.url,
                text: e.description
            };
            return e.hashtags && (t.hashtags = e.hashtags),
                t
        }
            , {
                id: "twitter-tweet",
                baseLinkPath: "https://twitter.com/intent/tweet",
                dialogDimensions: {
                    width: 550,
                    height: 420
                }
            })
    }
        , {
        "./NetworkAction": 301
    }],
    311: [function (e, t, i) {
        "use strict";
        var n = e("./NetworkAction");
        t.exports = new n(function (e) {
            return {
                url: e.url,
                title: e.title,
                image: e.media
            }
        }
            , {
                id: "vk-share",
                baseLinkPath: "http://vk.com/share.php",
                dialogDimensions: {
                    width: 555,
                    height: 368
                }
            })
    }
        , {
        "./NetworkAction": 301
    }],
    312: [function (e, t, i) {
        "use strict";
        var n = e("./NetworkAction");
        t.exports = new n(function (e) {
            return {
                url: e.url,
                title: e.title,
                pic: e.media
            }
        }
            , {
                id: "weibo-share",
                baseLinkPath: "http://service.weibo.com/share/share.php",
                dialogDimensions: {
                    width: 650,
                    height: 426
                }
            })
    }
        , {
        "./NetworkAction": 301
    }],
    313: [function (e, t, i) {
        "use strict";
        var n = e("./NetworkAction");
        t.exports = new n(function (e) {
            return {
                text: e.title + " " + e.url
            }
        }
            , {
                id: "whatsapp-share",
                baseLinkPath: "https://api.whatsapp.com/send",
                dialogDimensions: {
                    width: 555,
                    height: 505
                }
            })
    }
        , {
        "./NetworkAction": 301
    }],
    314: [function (e, t, i) {
        "use strict";
        t.exports = function (e, t, i) {
            return t ? (i = i || /{([^{}]*)}/g,
                e.replace(i, function (e, i) {
                    var n = t[i];
                    return "string" == typeof n || "number" == typeof n || "boolean" == typeof n ? n : e
                })) : e
        }
    }
        , {}],
    315: [function (e, t, i) {
        arguments[4][121][0].apply(i, arguments)
    }
        , {
        dup: 121
    }],
    316: [function (e, t, i) {
        "use strict";
        t.exports = {
            getContentDimensions: e("./getContentDimensions"),
            getDimensions: e("./getDimensions"),
            getMaxScrollPosition: e("./getMaxScrollPosition"),
            getPagePosition: e("./getPagePosition"),
            getPercentInViewport: e("./getPercentInViewport"),
            getPixelsInViewport: e("./getPixelsInViewport"),
            getPosition: e("./getPosition"),
            getScrollPosition: e("./getScrollPosition"),
            getViewportPosition: e("./getViewportPosition"),
            isInViewport: e("./isInViewport")
        }
    }
        , {
        "./getContentDimensions": 317,
        "./getDimensions": 318,
        "./getMaxScrollPosition": 319,
        "./getPagePosition": 320,
        "./getPercentInViewport": 321,
        "./getPixelsInViewport": 322,
        "./getPosition": 323,
        "./getScrollPosition": 324,
        "./getViewportPosition": 325,
        "./isInViewport": 326
    }],
    317: [function (e, t, i) {
        "use strict";
        t.exports = function (e, t) {
            var i = 1;
            return t && (i = e.getBoundingClientRect().width / e.offsetWidth),
            {
                width: e.scrollWidth * i,
                height: e.scrollHeight * i
            }
        }
    }
        , {}],
    318: [function (e, t, i) {
        "use strict";
        t.exports = function (e, t) {
            var i;
            return t ? {
                width: (i = e.getBoundingClientRect()).width,
                height: i.height
            } : {
                width: e.offsetWidth,
                height: e.offsetHeight
            }
        }
    }
        , {}],
    319: [function (e, t, i) {
        "use strict";
        var n = e("@babel/runtime/helpers/interopRequireDefault")(e("@babel/runtime/helpers/typeof"));
        function r(e, t) {
            return "x" === t ? e.scrollWidth - e.clientWidth : e.scrollHeight - e.clientHeight
        }
        t.exports = function (e, t) {
            var i = (0,
                n.default)(e);
            return t = "string" === i ? e : t,
                e = e && "string" !== i && e !== window ? e : document.documentElement,
                t && /^[xy]$/i.test(t) ? r(e, t) : {
                    x: r(e, "x"),
                    y: r(e, "y")
                }
        }
    }
        , {
        "@babel/runtime/helpers/interopRequireDefault": 157,
        "@babel/runtime/helpers/typeof": 164
    }],
    320: [function (e, t, i) {
        "use strict";
        var n = e("./getDimensions")
            , r = e("./getScrollPosition");
        t.exports = function (e, t) {
            var i;
            if (t) {
                var o = r()
                    , s = e.getBoundingClientRect();
                i = {
                    top: s.top + o.y,
                    right: s.right + o.x,
                    bottom: s.bottom + o.y,
                    left: s.left + o.x
                }
            } else {
                var a = n(e);
                for (i = {
                    top: e.offsetTop,
                    right: a.width,
                    bottom: a.height,
                    left: e.offsetLeft
                }; e = e.offsetParent;)
                    i.top += e.offsetTop,
                        i.left += e.offsetLeft;
                i.right += i.left,
                    i.bottom += i.top
            }
            var l = document.documentElement.offsetTop
                , c = document.documentElement.offsetLeft;
            return {
                top: i.top + l,
                right: i.right + c,
                bottom: i.bottom + l,
                left: i.left + c
            }
        }
    }
        , {
        "./getDimensions": 318,
        "./getScrollPosition": 324
    }],
    321: [function (e, t, i) {
        "use strict";
        var n = e("./getDimensions")
            , r = e("./getPixelsInViewport");
        t.exports = function (e, t) {
            var i = r(e, t)
                , o = n(e, t);
            return {
                x: i.x / o.width,
                y: i.y / o.height
            }
        }
    }
        , {
        "./getDimensions": 318,
        "./getPixelsInViewport": 322
    }],
    322: [function (e, t, i) {
        "use strict";
        var n = e("./getViewportPosition");
        t.exports = function (e, t) {
            var i = window.innerWidth
                , r = window.innerHeight
                , o = n(e, t)
                , s = {
                    x: o.right - o.left,
                    y: o.bottom - o.top
                };
            return o.top < 0 && (s.y += o.top),
                o.bottom > r && (s.y -= o.bottom - r),
                o.left < 0 && (s.x += o.left),
                o.right > i && (s.x -= o.right - i),
                s.x = s.x < 0 ? 0 : s.x,
                s.y = s.y < 0 ? 0 : s.y,
                s
        }
    }
        , {
        "./getViewportPosition": 325
    }],
    323: [function (e, t, i) {
        "use strict";
        var n = e("./getDimensions");
        t.exports = function (e, t) {
            var i, r, o, s, a, l, c;
            return t ? (r = (i = e.getBoundingClientRect()).top,
                o = i.left,
                s = i.width,
                a = i.height,
                e.offsetParent && (r -= (l = e.offsetParent.getBoundingClientRect()).top,
                    o -= l.left)) : (c = n(e, t),
                        r = e.offsetTop,
                        o = e.offsetLeft,
                        s = c.width,
                        a = c.height),
            {
                top: r,
                right: o + s,
                bottom: r + a,
                left: o
            }
        }
    }
        , {
        "./getDimensions": 318
    }],
    324: [function (e, t, i) {
        "use strict";
        var n = e("@babel/runtime/helpers/interopRequireDefault")(e("@babel/runtime/helpers/typeof"));
        function r(e) {
            return "x" === e ? window.scrollX || window.pageXOffset : window.scrollY || window.pageYOffset
        }
        function o(e, t, i) {
            return "x" === t ? i ? r("x") : e.scrollLeft : i ? r("y") : e.scrollTop
        }
        t.exports = function (e, t) {
            var i = (0,
                n.default)(e);
            t = "string" === i ? e : t;
            var r = (e = e && "string" !== i ? e : window) === window;
            return t && /^[xy]$/i.test(t) ? o(e, t, r) : {
                x: o(e, "x", r),
                y: o(e, "y", r)
            }
        }
    }
        , {
        "@babel/runtime/helpers/interopRequireDefault": 157,
        "@babel/runtime/helpers/typeof": 164
    }],
    325: [function (e, t, i) {
        "use strict";
        var n = e("./getPagePosition")
            , r = e("./getScrollPosition");
        t.exports = function (e, t) {
            var i;
            if (t)
                return {
                    top: (i = e.getBoundingClientRect()).top,
                    right: i.right,
                    bottom: i.bottom,
                    left: i.left
                };
            i = n(e);
            var o = r();
            return {
                top: i.top - o.y,
                right: i.right - o.x,
                bottom: i.bottom - o.y,
                left: i.left - o.x
            }
        }
    }
        , {
        "./getPagePosition": 320,
        "./getScrollPosition": 324
    }],
    326: [function (e, t, i) {
        "use strict";
        var n = e("@babel/runtime/helpers/interopRequireDefault")(e("@babel/runtime/helpers/typeof"))
            , r = e("./getPercentInViewport")
            , o = e("./getDimensions");
        t.exports = function (e, t, i) {
            var s = r(e, t);
            return i = function (e, t, i) {
                var r = {
                    x: 0,
                    y: 0
                };
                if (!t)
                    return r;
                var s, a = (0,
                    n.default)(t);
                return t = "number" === a || "string" === a ? {
                    x: t,
                    y: t
                } : Object.assign(r, t),
                    Object.keys(r).forEach(function (n) {
                        var r = t[n];
                        ("string" == typeof r || r > 1) && (s = s || o(e, i),
                            r = (parseInt(r, 10) || 0) / ("x" === n ? s.width : s.height)),
                            t[n] = r
                    }),
                    t
            }(e, i, t),
                s.y > 0 && s.y >= i.y && s.x > 0 && s.x >= i.x
        }
    }
        , {
        "./getDimensions": 318,
        "./getPercentInViewport": 321,
        "@babel/runtime/helpers/interopRequireDefault": 157,
        "@babel/runtime/helpers/typeof": 164
    }],
    327: [function (e, t, i) {
        "use strict";
        t.exports = function (e, t) {
            var i = null
                , n = function () {
                    null === i && (e.apply(this, arguments),
                        i = setTimeout(function () {
                            i = null
                        }, t))
                };
            return n.cancel = function () {
                clearTimeout(i)
            }
                ,
                n
        }
    }
        , {}],
    328: [function (e, t, i) {
        "use strict";
        t.exports = {
            browser: {
                safari: !1,
                chrome: !1,
                firefox: !1,
                ie: !1,
                opera: !1,
                android: !1,
                edge: !1,
                edgeChromium: !1,
                samsung: !1,
                version: {
                    string: "",
                    major: 0,
                    minor: 0,
                    patch: 0,
                    documentMode: !1
                }
            },
            os: {
                osx: !1,
                ios: !1,
                android: !1,
                windows: !1,
                linux: !1,
                fireos: !1,
                chromeos: !1,
                version: {
                    string: "",
                    major: 0,
                    minor: 0,
                    patch: 0
                }
            }
        }
    }
        , {}],
    329: [function (e, t, i) {
        "use strict";
        t.exports = {
            browser: [{
                name: "edge",
                userAgent: "Edge",
                version: ["rv", "Edge"],
                test: function (e) {
                    return e.ua.indexOf("Edge") > -1 || "Mozilla/5.0 (Windows NT 10.0; Win64; x64)" === e.ua
                }
            }, {
                name: "edgeChromium",
                userAgent: "Edge",
                version: ["rv", "Edg"],
                test: function (e) {
                    return e.ua.indexOf("Edg") > -1 && -1 === e.ua.indexOf("Edge")
                }
            }, {
                name: "chrome",
                userAgent: "Chrome"
            }, {
                name: "firefox",
                test: function (e) {
                    return e.ua.indexOf("Firefox") > -1 && -1 === e.ua.indexOf("Opera")
                },
                version: "Firefox"
            }, {
                name: "android",
                userAgent: "Android"
            }, {
                name: "safari",
                test: function (e) {
                    return e.ua.indexOf("Safari") > -1 && e.vendor.indexOf("Apple") > -1
                },
                version: "Version"
            }, {
                name: "ie",
                test: function (e) {
                    return e.ua.indexOf("IE") > -1 || e.ua.indexOf("Trident") > -1
                },
                version: ["MSIE", "rv"],
                parseDocumentMode: function () {
                    var e = !1;
                    return document.documentMode && (e = parseInt(document.documentMode, 10)),
                        e
                }
            }, {
                name: "opera",
                userAgent: "Opera",
                version: ["Version", "Opera"]
            }, {
                name: "samsung",
                userAgent: "SamsungBrowser"
            }],
            os: [{
                name: "windows",
                test: function (e) {
                    return e.ua.indexOf("Windows") > -1
                },
                version: "Windows NT"
            }, {
                name: "osx",
                userAgent: "Mac",
                test: function (e) {
                    return e.ua.indexOf("Macintosh") > -1
                }
            }, {
                name: "ios",
                test: function (e) {
                    return e.ua.indexOf("iPhone") > -1 || e.ua.indexOf("iPad") > -1
                },
                version: ["iPhone OS", "CPU OS"]
            }, {
                name: "linux",
                userAgent: "Linux",
                test: function (e) {
                    return (e.ua.indexOf("Linux") > -1 || e.platform.indexOf("Linux") > -1) && -1 === e.ua.indexOf("Android")
                }
            }, {
                name: "fireos",
                test: function (e) {
                    return e.ua.indexOf("Firefox") > -1 && e.ua.indexOf("Mobile") > -1
                },
                version: "rv"
            }, {
                name: "android",
                userAgent: "Android",
                test: function (e) {
                    return e.ua.indexOf("Android") > -1
                }
            }, {
                name: "chromeos",
                userAgent: "CrOS"
            }]
        }
    }
        , {}],
    330: [function (e, t, i) {
        "use strict";
        var n = e("./defaults")
            , r = e("./dictionary");
        function o(e, t) {
            if ("function" == typeof e.parseVersion)
                return e.parseVersion(t);
            var i, n = e.version || e.userAgent;
            "string" == typeof n && (n = [n]);
            for (var r, o = n.length, s = 0; s < o; s++)
                if ((r = t.match((i = n[s],
                    new RegExp(i + "[a-zA-Z\\s/:]+([0-9_.]+)", "i")))) && r.length > 1)
                    return r[1].replace(/_/g, ".");
            return !1
        }
        function s(e, t, i) {
            for (var n, r, s = e.length, a = 0; a < s; a++)
                if ("function" == typeof e[a].test ? !0 === e[a].test(i) && (n = e[a].name) : i.ua.indexOf(e[a].userAgent) > -1 && (n = e[a].name),
                    n) {
                    if (t[n] = !0,
                        "string" == typeof (r = o(e[a], i.ua))) {
                        var l = r.split(".");
                        t.version.string = r,
                            l && l.length > 0 && (t.version.major = parseInt(l[0] || 0),
                                t.version.minor = parseInt(l[1] || 0),
                                t.version.patch = parseInt(l[2] || 0))
                    } else
                        "edge" === n && (t.version.string = "12.0.0",
                            t.version.major = "12",
                            t.version.minor = "0",
                            t.version.patch = "0");
                    return "function" == typeof e[a].parseDocumentMode && (t.version.documentMode = e[a].parseDocumentMode()),
                        t
                }
            return t
        }
        t.exports = function (e) {
            var t = {};
            return t.browser = s(r.browser, n.browser, e),
                t.os = s(r.os, n.os, e),
                t
        }
    }
        , {
        "./defaults": 328,
        "./dictionary": 329
    }],
    331: [function (e, t, i) {
        "use strict";
        var n = {
            ua: window.navigator.userAgent,
            platform: window.navigator.platform,
            vendor: window.navigator.vendor
        };
        t.exports = e("./parseUserAgent")(n)
    }
        , {
        "./parseUserAgent": 330
    }],
    332: [function (e, t, i) {
        "use strict";
        var n = e("@babel/runtime/helpers/interopRequireDefault")(e("@babel/runtime/helpers/typeof"))
            , r = function () {
                function e(e, t) {
                    for (var i = 0; i < t.length; i++) {
                        var n = t[i];
                        n.enumerable = n.enumerable || !1,
                            n.configurable = !0,
                            "value" in n && (n.writable = !0),
                            Object.defineProperty(e, n.key, n)
                    }
                }
                return function (t, i, n) {
                    return i && e(t.prototype, i),
                        n && e(t, n),
                        t
                }
            }();
        var o = e("@marcom/ac-event-emitter-micro").EventEmitterMicro
            , s = function (e) {
                function t(e) {
                    !function (e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, t);
                    var i = function (e, t) {
                        if (!e)
                            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !t || "object" !== (0,
                            n.default)(t) && "function" != typeof t ? e : t
                    }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
                    return i._chapters = Array.from(e.chapters || []),
                        i
                }
                return function (e, t) {
                    if ("function" != typeof t && null !== t)
                        throw new TypeError("Super expression must either be null or a function, not " + (0,
                            n.default)(t));
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }),
                        t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                }(t, o),
                    r(t, [{
                        key: "addChapter",
                        value: function (e) {
                            this._chapters.push(e),
                                this._onChange()
                        }
                    }, {
                        key: "removeChapter",
                        value: function (e) {
                            for (var t = -1, i = 0; i < this._chapters.length; i++)
                                if (this._chapters[i].chapter === e) {
                                    t = i;
                                    break
                                }
                            t >= 0 && this._chapters.splice(t, 1),
                                this._onChange()
                        }
                    }, {
                        key: "_onChange",
                        value: function () {
                            this.trigger("change")
                        }
                    }, {
                        key: "getChapterForTime",
                        value: function (e) {
                            for (var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, i = 0; i < this._chapters.length; i++) {
                                var n = this._chapters[i]
                                    , r = n["start-time"];
                                if (!n.duration || isNaN(n.duration)) {
                                    if (this._chapters.length > i + 1) {
                                        var o = this._chapters[i + 1];
                                        if (e >= r - t && e < o["start-time"] - t)
                                            return n
                                    } else if (e >= r)
                                        return n
                                } else if (r - t <= e && e < r + n.duration - t)
                                    return n
                            }
                            return null
                        }
                    }, {
                        key: "clearChapters",
                        value: function () {
                            this._chapters = [],
                                this._onChange()
                        }
                    }, {
                        key: "chapters",
                        set: function (e) {
                            this._chapters = e,
                                this._onChange()
                        },
                        get: function () {
                            return this._chapters
                        }
                    }]),
                    t
            }();
        t.exports = s
    }
        , {
        "@babel/runtime/helpers/interopRequireDefault": 157,
        "@babel/runtime/helpers/typeof": 164,
        "@marcom/ac-event-emitter-micro": 229
    }],
    333: [function (e, t, i) {
        "use strict";
        var n = function () {
            function e(e, t) {
                for (var i = 0; i < t.length; i++) {
                    var n = t[i];
                    n.enumerable = n.enumerable || !1,
                        n.configurable = !0,
                        "value" in n && (n.writable = !0),
                        Object.defineProperty(e, n.key, n)
                }
            }
            return function (t, i, n) {
                return i && e(t.prototype, i),
                    n && e(t, n),
                    t
            }
        }();
        var r = function () {
            function e(t) {
                !function (e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, e),
                    this._listeners = {},
                    this.el = t
            }
            return n(e, [{
                key: "on",
                value: function (e, t) {
                    this._listeners[e] || (this._listeners[e] = []);
                    var i = {
                        originalCb: t,
                        args: [e, function (e) {
                            t(e)
                        }
                        ].concat(Array.from(arguments).slice(2))
                    };
                    this._listeners[e].push(i),
                        this.el.addEventListener.apply(this.el, i.args)
                }
            }, {
                key: "off",
                value: function (e, t) {
                    var i = this._listeners[e] || []
                        , n = -1;
                    if (i.find(function (e) {
                        return n++,
                            e.originalCb === t
                    })) {
                        var r = i[n];
                        this.el.removeEventListener.apply(this.el, r.args),
                            i.splice(n, 1)
                    }
                }
            }, {
                key: "replaceElement",
                value: function (e) {
                    var t = this;
                    Object.keys(this._listeners).forEach(function (i) {
                        t._listeners[i].forEach(function (i) {
                            t.el.removeEventListener.apply(t.el, i.args),
                                e.addEventListener.apply(e, i.args)
                        })
                    }),
                        this.el = e
                }
            }, {
                key: "once",
                value: function (e, t) {
                    var i = this;
                    this.on(e, function n() {
                        t(),
                            i.off(e, n)
                    })
                }
            }, {
                key: "trigger",
                value: function (e, t) {
                    var i = new CustomEvent(e, {
                        detail: t
                    });
                    this.el.dispatchEvent(i)
                }
            }]),
                e
        }();
        t.exports = r
    }
        , {}],
    334: [function (e, t, i) {
        "use strict";
        var n = e("@babel/runtime/helpers/interopRequireDefault")(e("@babel/runtime/helpers/typeof"))
            , r = function () {
                function e(e, t) {
                    for (var i = 0; i < t.length; i++) {
                        var n = t[i];
                        n.enumerable = n.enumerable || !1,
                            n.configurable = !0,
                            "value" in n && (n.writable = !0),
                            Object.defineProperty(e, n.key, n)
                    }
                }
                return function (t, i, n) {
                    return i && e(t.prototype, i),
                        n && e(t, n),
                        t
                }
            }()
            , o = function e(t, i, n) {
                null === t && (t = Function.prototype);
                var r = Object.getOwnPropertyDescriptor(t, i);
                if (void 0 === r) {
                    var o = Object.getPrototypeOf(t);
                    return null === o ? void 0 : e(o, i, n)
                }
                if ("value" in r)
                    return r.value;
                var s = r.get;
                return void 0 !== s ? s.call(n) : void 0
            };
        var s = e("@marcom/ac-event-emitter-micro").EventEmitterMicro
            , a = function (e) {
                function t() {
                    return function (e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, t),
                        function (e, t) {
                            if (!e)
                                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return !t || "object" !== (0,
                                n.default)(t) && "function" != typeof t ? e : t
                        }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this))
                }
                return function (e, t) {
                    if ("function" != typeof t && null !== t)
                        throw new TypeError("Super expression must either be null or a function, not " + (0,
                            n.default)(t));
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }),
                        t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                }(t, s),
                    r(t, [{
                        key: "once",
                        value: function (e, i, n) {
                            if (n) {
                                o(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "once", this).apply(this, [e, function () {
                                    i.apply(n, arguments)
                                }
                                ])
                            } else
                                o(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "once", this).apply(this, arguments)
                        }
                    }, {
                        key: "on",
                        value: function (e, i, n) {
                            if (arguments.length > 2) {
                                this._boundListeners || (this._boundListeners = {}),
                                    this._boundListeners[e] || (this._boundListeners[e] = []);
                                var r = i.bind(n);
                                return this._boundListeners[e].push([i, n, r]),
                                    o(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "on", this).call(this, e, r)
                            }
                            return o(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "on", this).apply(this, arguments)
                        }
                    }, {
                        key: "off",
                        value: function (e, i, n) {
                            if (arguments.length > 2)
                                try {
                                    for (var r = this._boundListeners[e], s = r.length, a = 0; a < s; a++)
                                        if (r[a][0] === i && r[a][1] === n) {
                                            var l = r.splice(a, 1)[0];
                                            return o(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "off", this).call(this, e, l[2])
                                        }
                                } catch (e) { }
                            return o(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "off", this).apply(this, arguments)
                        }
                    }, {
                        key: "destroy",
                        value: function () {
                            this._boundListeners = void 0,
                                o(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "destroy", this).call(this)
                        }
                    }]),
                    t
            }();
        t.exports = a
    }
        , {
        "@babel/runtime/helpers/interopRequireDefault": 157,
        "@babel/runtime/helpers/typeof": 164,
        "@marcom/ac-event-emitter-micro": 229
    }],
    335: [function (e, t, i) {
        "use strict";
        t.exports = e("./utils/urlOptimizer/OptimizeVideoUrl")
    }
        , {
        "./utils/urlOptimizer/OptimizeVideoUrl": 423
    }],
    336: [function (e, t, i) {
        "use strict";
        var n = e("@babel/runtime/helpers/interopRequireDefault")(e("@babel/runtime/helpers/typeof"))
            , r = function () {
                return function (e, t) {
                    if (Array.isArray(e))
                        return e;
                    if (Symbol.iterator in Object(e))
                        return function (e, t) {
                            var i = []
                                , n = !0
                                , r = !1
                                , o = void 0;
                            try {
                                for (var s, a = e[Symbol.iterator](); !(n = (s = a.next()).done) && (i.push(s.value),
                                    !t || i.length !== t); n = !0)
                                    ;
                            } catch (e) {
                                r = !0,
                                    o = e
                            } finally {
                                try {
                                    !n && a.return && a.return()
                                } finally {
                                    if (r)
                                        throw o
                                }
                            }
                            return i
                        }(e, t);
                    throw new TypeError("Invalid attempt to destructure non-iterable instance")
                }
            }()
            , o = "function" == typeof Symbol && "symbol" === (0,
                n.default)(Symbol.iterator) ? function (e) {
                    return (0,
                        n.default)(e)
                }
                : function (e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : (0,
                        n.default)(e)
                }
            , s = function () {
                function e(e, t) {
                    for (var i = 0; i < t.length; i++) {
                        var n = t[i];
                        n.enumerable = n.enumerable || !1,
                            n.configurable = !0,
                            "value" in n && (n.writable = !0),
                            Object.defineProperty(e, n.key, n)
                    }
                }
                return function (t, i, n) {
                    return i && e(t.prototype, i),
                        n && e(t, n),
                        t
                }
            }();
        var a = e("../ui/localization/LanguageMapping")
            , l = e("../event-emitter-shim/EventEmitterShim")
            , c = e("../dom-emitter/DOMEmitterMicro")
            , u = e("../chapters/ChapterEmitter")
            , h = e("../utils/Storage")
            , d = e("../video/VideoFactory").create
            , p = e("@marcom/useragent-detect")
            , f = e("@marcom/ac-fullscreen")
            , m = e("../posterframe/PosterFrameFactory")
            , _ = e("../ui/localization/Localization")
            , v = e("../ui/error/ErrorView")
            , b = e("../ui/blend-scrim/BlendScrim")
            , y = e("@marcom/ac-raf-emitter/update")
            , g = e("@marcom/ac-raf-emitter/cancelUpdate")
            , E = e("@marcom/ac-feature/isRetina")()
            , w = e("@marcom/ac-feature/isDesktop")() && !e("@marcom/ac-feature/touchAvailable")()
            , k = e("@marcom/ac-feature/isHandheld")()
            , x = p.browser.safari && p.os.ios
            , C = p.browser.safari && p.os.osx
            , T = p.browser.chrome
            , S = p.browser.edge
            , O = e("../ui/DefaultBreakpoints")
            , A = e("@marcom/ac-console/log")
            , P = e("./event/EventsToForward")
            , L = e("./event/ReadyStateChangeEvents")
            , D = e("../utils/BreakpointDetect")
            , M = e("../ui/keyboard-control/createKeyboardControl")
            , R = e("../ui/controls-interaction/createControlsInteraction")
            , I = e("@marcom/ac-accessibility/helpers/hide")
            , F = e("@marcom/ac-accessibility/helpers/show")
            , j = e("../utils/getVersion");
        A("@marcom/ac-video version: " + j.toString());
        var N = function (t) {
            function i(e) {
                !function (e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, i);
                var t = function (e, t) {
                    if (!e)
                        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !t || "object" !== (0,
                        n.default)(t) && "function" != typeof t ? e : t
                }(this, (i.__proto__ || Object.getPrototypeOf(i)).call(this, e));
                e = e || {},
                    t.el = e.el || document.createElement("div"),
                    t._elementEmitter = new c(t.el),
                    t.VERSION = j,
                    t.options = e,
                    t._controlsFactory = e.controlsFactory,
                    t._urlOptimizer = e.urlOptimizer,
                    C && t.el.classList.add("safari-fix-zindex");
                try {
                    var r = window.top;
                    t._maxWidth = e.maxWidth || Math.min(window.innerWidth, 1280) || Math.min(r.innerWidth, 1280)
                } catch (i) {
                    t._maxWidth = e.maxWidth || Math.min(window.innerWidth, 1280)
                }
                return t._lastResize = 0,
                    t._lastMouseCoords = {},
                    t.el.classList.add("ac-video-player"),
                    t.el.classList.add("idle-state"),
                    t._isLive = e.live,
                    t._isDvr = e.dvr,
                    t._isLive && t._useLiveMode(e.dvr),
                    t._videoImpl = d(e, t.el),
                    t._isResponsive = e.responsive,
                    t._isResponsive && (t._breakpointDetect = new D({
                        el: t.el,
                        player: t,
                        breakpoints: O,
                        addClass: !0
                    })),
                    t._supportsInlineVideo = w || !(k && x),
                    t._cachedPiPMode = t.isPictureInPicture(),
                    t._cachedReadyState = t.getReadyState(),
                    t._cachedVisibleTracksLength = 0,
                    t.el.appendChild(t._videoImpl.getRenderElement()),
                    (e.poster || void 0 === e.poster) && (t._initPoster(e.poster),
                        e.autoplay || void 0 === e.preload || "none" !== e.preload && "metadata" !== e.preload && !1 !== e.preload || t._poster.show()),
                    t._bindMethods(),
                    t._addEventListeners(),
                    w && (t._keyboardControl = M({
                        player: t,
                        threesixty: e.threesixty,
                        keyboardTarget: e.keyboardTarget
                    }),
                        t._initBlendScrim()),
                    e.controls && t._initUIComponents(),
                    t._initErrorView(),
                    e.parentElement && e.parentElement.appendChild(t.el),
                    t._chapterEmitter = new u(e),
                    t.refreshSize = t.refreshSize.bind(t),
                    t._setPersistedUserSettings(),
                    t._refreshSizeTimeout = setTimeout(t.refreshSize, 0),
                    window.addEventListener("DOMContentLoaded", t.refreshSize),
                    t
            }
            return function (e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function, not " + (0,
                        n.default)(t));
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }),
                    t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }(i, l),
                s(i, [{
                    key: "_bindMethods",
                    value: function () {
                        this._onStart = this._onStart.bind(this),
                            this._onEnded = this._onEnded.bind(this),
                            this._onTimeUpdate = this._onTimeUpdate.bind(this),
                            this._onCaptionsChanged = this._onCaptionsChanged.bind(this),
                            this._onPlay = this._onPlay.bind(this),
                            this._onFullscreenChange = this._onFullscreenChange.bind(this),
                            this._onError = this._onError.bind(this),
                            this._forwardEvent = this._forwardEvent.bind(this),
                            this._onPresentationModeChanged = this._onPresentationModeChanged.bind(this),
                            this._forwardFullScreenChangeEvent = this._forwardNamedEvent.bind(this, "fullscreen:change"),
                            this._forwardEnterFullScreenEvent = this._forwardNamedEvent.bind(this, "enterfullscreen"),
                            this._forwardExitFullScreenEvent = this._forwardNamedEvent.bind(this, "exitfullscreen"),
                            this._onDurationChange = this._onDurationChange.bind(this),
                            this._onPictureInPictureChange = this._onPictureInPictureChange.bind(this),
                            this._forwardReadyStateChange = this._forwardReadyStateChange.bind(this),
                            this._showControls = this._showControls.bind(this),
                            this._hideControls = this._hideControls.bind(this),
                            this._raiseControls = this._raiseControls.bind(this),
                            this._lowerControls = this._lowerControls.bind(this),
                            this._onPlayPromiseError = this._onPlayPromiseError.bind(this),
                            this._onPlayPromiseResolved = this._onPlayPromiseResolved.bind(this),
                            this._onChapterChange = this._onChapterChange.bind(this),
                            this._onAudioTrackChange = this._onAudioTrackChange.bind(this),
                            this._onVolumeChange = this._onVolumeChange.bind(this),
                            this.refreshSize = this.refreshSize.bind(this)
                    }
                }, {
                    key: "_addEventListeners",
                    value: function () {
                        for (var e = 0, t = P.length; e < t; e++)
                            this._videoImpl.on(P[e], this._forwardEvent);
                        for (e = 0,
                            t = L.length; e < t; e++)
                            this._videoImpl.on(L[e], this._forwardReadyStateChange);
                        this._videoImpl.on("timeupdate", this._onTimeUpdate),
                            this._videoImpl.on("webkitpresentationmodechanged", this._onPresentationModeChanged),
                            this._videoImpl.on("durationchange", this._onDurationChange),
                            this._videoImpl.on("addtrack", this._forwardEvent),
                            this._videoImpl.on("change", this._forwardEvent),
                            this._videoImpl.on("removetrack", this._forwardEvent),
                            this._videoImpl.on("addtrack", this._onCaptionsChanged),
                            this._videoImpl.on("change", this._onCaptionsChanged),
                            this._videoImpl.on("removetrack", this._onCaptionsChanged),
                            this._videoImpl.on("loadedmetadata", this.refreshSize),
                            this._videoImpl.on("loadeddata", this.refreshSize),
                            this._videoImpl.on("play", this._onPlay),
                            this._videoImpl.on("AudioTrackChange", this._onAudioTrackChange),
                            this._videoImpl.on("volumechange", this._onVolumeChange),
                            this.on("pictureinpicture:change", this._onPictureInPictureChange),
                            w ? (f.on("enterfullscreen", this._forwardEnterFullScreenEvent),
                                f.on("exitfullscreen", this._forwardExitFullScreenEvent),
                                f.on("enterfullscreen", this._forwardFullScreenChangeEvent),
                                f.on("exitfullscreen", this._forwardFullScreenChangeEvent),
                                this.on("fullscreen:change", this._onFullscreenChange)) : x && (this._videoImpl.on("webkitbeginfullscreen", this._forwardEnterFullScreenEvent),
                                    this._videoImpl.on("webkitendfullscreen", this._forwardExitFullScreenEvent),
                                    this._videoImpl.on("webkitbeginfullscreen", this._forwardFullScreenChangeEvent),
                                    this._videoImpl.on("webkitendfullscreen", this._forwardFullScreenChangeEvent),
                                    k && this.on("fullscreen:change", this._onFullscreenChange)),
                            this._chapterEmitter && this._chapterEmitter.on("change", this._onChapterChange),
                            this._videoImpl.on("PlayPromiseError", this._onPlayPromiseError),
                            this._videoImpl.on("PlayPromiseResolved", this._onPlayPromiseResolved),
                            this._videoImpl.on("error", this._onError)
                    }
                }, {
                    key: "_onPlayPromiseResolved",
                    value: function () {
                        this.trigger("PlayPromiseResolved")
                    }
                }, {
                    key: "_removeEventListeners",
                    value: function () {
                        for (var e = 0, t = P.length; e < t; e++)
                            this._videoImpl.off(P[e], this._forwardEvent);
                        for (e = 0,
                            t = L.length; e < t; e++)
                            this._videoImpl.off(L[e], this._forwardReadyStateChange);
                        this._videoImpl.off("timeupdate", this._onTimeUpdate),
                            this._videoImpl.off("webkitpresentationmodechanged", this._onPresentationModeChanged),
                            this._videoImpl.off("durationchange", this._onDurationChange),
                            this._videoImpl.off("addtrack", this._forwardEvent),
                            this._videoImpl.off("change", this._forwardEvent),
                            this._videoImpl.off("removetrack", this._forwardEvent),
                            this._videoImpl.off("addtrack", this._onCaptionsChanged),
                            this._videoImpl.off("change", this._onCaptionsChanged),
                            this._videoImpl.off("removetrack", this._onCaptionsChanged),
                            this._videoImpl.off("loadedmetadata", this.refreshSize),
                            this._videoImpl.off("loadeddata", this.refreshSize),
                            this._videoImpl.off("play", this._onPlay),
                            this._videoImpl.off("AudioTrackChange", this._onAudioTrackChange),
                            this._videoImpl.off("volumechange", this._onVolumeChange),
                            this.off("pictureinpicture:change", this._onPictureInPictureChange),
                            w ? (f.off("enterfullscreen", this._forwardEnterFullScreenEvent),
                                f.off("exitfullscreen", this._forwardExitFullScreenEvent),
                                f.off("enterfullscreen", this._forwardFullScreenChangeEvent),
                                f.off("exitfullscreen", this._forwardFullScreenChangeEvent)) : x && (this._videoImpl.off("webkitbeginfullscreen", this._forwardEnterFullScreenEvent),
                                    this._videoImpl.off("webkitendfullscreen", this._forwardExitFullScreenEvent),
                                    this._videoImpl.off("webkitbeginfullscreen", this._forwardFullScreenChangeEvent),
                                    this._videoImpl.off("webkitendfullscreen", this._forwardFullScreenChangeEvent),
                                    k && this.off("fullscreen:change", this._onFullscreenChange)),
                            this._chapterEmitter && this._chapterEmitter.off("change", this._onChapterChange),
                            this._videoImpl.off("PlayPromiseError", this._onPlayPromiseError),
                            this._videoImpl.off("loadedmetadata", this.refreshSize),
                            this._videoImpl.off("loadeddata", this.refreshSize),
                            window.removeEventListener("DOMContentLoaded", this.refreshSize)
                    }
                }, {
                    key: "_forwardReadyStateChange",
                    value: function () {
                        var e = this.getReadyState();
                        (e > this._cachedReadyState || 0 === e) && (this._cachedReadyState = e,
                            this.trigger("readystatechange", {
                                readyState: e
                            }))
                    }
                }, {
                    key: "_forwardEvent",
                    value: function (e) {
                        A(e.type + " time:" + this.getCurrentTime()),
                            this.trigger(e.type)
                    }
                }, {
                    key: "_forwardNamedEvent",
                    value: function (e) {
                        A(e + " time:" + this.getCurrentTime()),
                            this.trigger(e)
                    }
                }, {
                    key: "_onPlayPromiseError",
                    value: function () {
                        A("play() Promise rejected, probably because the browser is blocking autoplay"),
                            this.el.classList.add("initial-play"),
                            this._showStartState(),
                            this._started = !1,
                            this._poster.show(),
                            this.once("play", this._onPlay)
                    }
                }, {
                    key: "_onAudioTrackChange",
                    value: function (e) {
                        var t = this
                            , i = this.getAudioTracks();
                        if (this._forwardEvent(e),
                            this._storedAudioTrackType && this._storedAudioTrackLanguage && i.length > 1) {
                            var n = i.find(function (e) {
                                return e.language === t._storedAudioTrackLanguage && e.kind === t._storedAudioTrackType
                            });
                            i.forEach(function (e) {
                                return e.enabled = !1
                            }),
                                n ? n.enabled = !0 : i.length && (i[0].enabled = !0),
                                this._storedAudioTrackLanguage = null
                        }
                        var r = i.find(function (e) {
                            return e.enabled
                        });
                        r && (h.setItem(h.AUDIO_TRACK_TYPE, r.kind),
                            h.setItem(h.AUDIO_TRACK_LANGUAGE, r.language))
                    }
                }, {
                    key: "_onCaptionsChanged",
                    value: function (e) {
                        var t = this
                            , i = this.getVisibleTextTracks().length;
                        if (!this._cachedVisibleTracksLength && "none" !== this._storedCCLanguage && this.getTextTracks().length > 0) {
                            var n = this.getTextTracks().find(function (e) {
                                return e.language === t._storedCCLanguage || a[e.language] === t._storedCCLanguage
                            });
                            n && (setTimeout(function () {
                                t.getTextTracks().forEach(function (e) {
                                    n !== e && (e.mode = "hidden")
                                }),
                                    n.mode = "showing",
                                    setTimeout(function () {
                                        0 === n.cues.length && (n.mode = "hidden",
                                            n.mode = "showing")
                                    }, 1)
                            }, 1),
                                this._storedCCLanguage = "none")
                        }
                        i > 0 && this._cachedVisibleCCTrack !== this.getVisibleTextTracks()[0] ? (this.trigger("texttrackshow"),
                            h.setItem(h.CC_LANGUAGE, this.getVisibleTextTracks()[0].language)) : 0 === i && this._cachedVisibleTracksLength > 0 && this.trigger("texttrackhide"),
                            this._cachedVisibleTracksLength = i,
                            this._cachedVisibleCCTrack = i ? this.getVisibleTextTracks()[0] : null
                    }
                }, {
                    key: "_onVolumeChange",
                    value: function (e) {
                        h.setItem(h.VOLUME_LEVEL, this.getVolume()),
                            h.setItem(h.VOLUME_MUTED, this.getMuted())
                    }
                }, {
                    key: "_onTimeUpdate",
                    value: function () {
                        this.trigger("timeupdate", {
                            currentTime: this.getCurrentTime()
                        })
                    }
                }, {
                    key: "_onPictureInPictureChange",
                    value: function () {
                        this.isPictureInPicture() ? this.el.classList.add("is-picture-in-picture") : this.el.classList.remove("is-picture-in-picture")
                    }
                }, {
                    key: "load",
                    value: function (e, t, i, n) {
                        if (this._setError(!1),
                            this.refreshSize(),
                            this._started = !1,
                            Array.isArray(e) || (e = [e]),
                            t && !Array.isArray(t) && (t = [{
                                src: t
                            }]),
                            this._cachedReadyState = 0,
                            n || (n = this.options),
                            this._urlOptimizer) {
                            t || (t = e.map(this._urlOptimizer.getCaptionsSource).filter(function (e) {
                                return !!e
                            }));
                            var r = this.getVisibleTextTracks();
                            r && r.length && t && t.length && (t[0].mode = "showing");
                            var o = n.maxWidth || this._calcMaxWidth();
                            e = e.map(function (e) {
                                return this._urlOptimizer.getVideoSource(e, o, null, {
                                    urlOptimizeHls: this.options.urlOptimizeHls
                                })
                            }
                                .bind(this))
                        }
                        var s = n && n.thumbnails || this._urlOptimizer && this._urlOptimizer.getThumbnailImageSource(e[0]);
                        this.once("play", this._onPlay),
                            (this.options.autoplay && w || this.getEnded()) && this.once("loadstart", function () {
                                this.play()
                            }
                                .bind(this)),
                            n || (n = this.options),
                            n && this._poster && this.setPoster(n.poster),
                            this._poster && this._poster.show(),
                            this.controls && this.controls.sharingModule && (n.sharing ? this.controls.sharingModule.setData(n.sharing) : this.controls.sharingModule.setData(null)),
                            void 0 !== n.live && (this._isLive = n.live,
                                this._useLiveMode(n.dvr)),
                            this._hideEndState(),
                            this._setPersistedUserSettings(),
                            this._videoImpl.load(e, t, i),
                            this.controls && this.controls.overlays ? this.controls.overlays.setData(s) : this.controls && this.once("controlsready", function () {
                                this.controls.overlays && this.controls.overlays.setData(s)
                            }
                                .bind(this)),
                            this.controls && this.controls.endState ? this.controls.endState.setData(n.endState) : this.controls && this.once("controlsready", function () {
                                this.controls.endState && this.controls.endState.setData(n.endState)
                            }
                                .bind(this))
                    }
                }, {
                    key: "_calcMaxWidth",
                    value: function () {
                        return this.el.parentElement ? this.el.parentElement.clientWidth : this._maxWidth
                    }
                }, {
                    key: "_isActiveArea",
                    value: function (e) {
                        for (; e !== this.el;) {
                            if (e.hasAttribute("data-acv-active-area"))
                                return !0;
                            e = e.parentNode
                        }
                        return !1
                    }
                }, {
                    key: "_onPresentationModeChanged",
                    value: function (e) {
                        this._forwardEvent(e);
                        var t = this.isPictureInPicture();
                        this._cachedPiPMode !== t && (this._cachedPiPMode = t,
                            A("pictureinpicture:change to " + t),
                            this.trigger("pictureinpicture:change"))
                    }
                }, {
                    key: "_onDurationChange",
                    value: function (e) {
                        (this._isDvr || this.getDuration() > 3600) && this.el.classList.add("longform"),
                            this.refreshSize()
                    }
                }, {
                    key: "appendTo",
                    value: function (e) {
                        e.appendChild(this.el),
                            this.refreshSize()
                    }
                }, {
                    key: "getTextTracks",
                    value: function () {
                        return Array.prototype.slice.call(this._videoImpl.getTextTracks())
                    }
                }, {
                    key: "getAudioTracks",
                    value: function () {
                        return Array.from(this._videoImpl.getAudioTracks())
                    }
                }, {
                    key: "getVisibleTextTracks",
                    value: function () {
                        var e = Array.prototype.slice.call(this._videoImpl.getTextTracks());
                        return e && e.length && (e = e.filter(function (e) {
                            return "showing" === e.mode
                        })),
                            e
                    }
                }, {
                    key: "getFullScreenElement",
                    value: function () {
                        return w ? this.el : this.getMediaElement()
                    }
                }, {
                    key: "getFullScreenEnabled",
                    value: function () {
                        return f.fullscreenEnabled(this.getFullScreenElement())
                    }
                }, {
                    key: "isFullscreen",
                    value: function () {
                        return w ? f.fullscreenElement() === this.getFullScreenElement() : this._videoImpl.isFullscreen()
                    }
                }, {
                    key: "requestFullscreen",
                    value: function () {
                        var e = this;
                        if (!this.isFullscreen()) {
                            this.controls && (this.controls.el.display = "none",
                                this._hideControls()),
                                this.trigger("fullscreen:willenter", {
                                    type: "enter"
                                }),
                                this._lastResize = Date.now(),
                                g(this._updateFullscreenId);
                            var t = this;
                            this._updateFullscreenId = y(function e() {
                                t.refreshSize(),
                                    t._updateFullscreenId = y(e)
                            }),
                                T ? setTimeout(function () {
                                    this._lastResize = Date.now(),
                                        f.requestFullscreen(this.getFullScreenElement())
                                }
                                    .bind(this), 300) : f.requestFullscreen(this.getFullScreenElement()),
                                f.on("enterfullscreen", function () {
                                    e.el.setAttribute("tabindex", "0"),
                                        e.el.focus(),
                                        e.el.removeAttribute("tabindex")
                                })
                        }
                    }
                }, {
                    key: "exitFullscreen",
                    value: function () {
                        this.isFullscreen() && (this.controls && (this.controls.el.display = "none",
                            this._hideControls()),
                            this.trigger("fullscreen:willexit", {
                                type: "exit"
                            }),
                            T ? setTimeout(function () {
                                f.exitFullscreen(this.getFullScreenElement())
                            }
                                .bind(this), 300) : f.exitFullscreen(this.getFullScreenElement()))
                    }
                }, {
                    key: "_onFullscreenChange",
                    value: function () {
                        this._lastResize = Date.now(),
                            this.controls && (this.controls.el.display = "",
                                this._hideControls()),
                            this._preventUserInteraction = !0,
                            setTimeout(function () {
                                g(this._updateFullscreenId),
                                    this._preventUserInteraction = !1,
                                    this.refreshSize()
                            }
                                .bind(this), 750),
                            this.refreshSize()
                    }
                }, {
                    key: "toggleFullscreen",
                    value: function () {
                        this.isFullscreen() ? this.exitFullscreen() : this.requestFullscreen()
                    }
                }, {
                    key: "_initUIComponents",
                    value: function () {
                        this._controlsFactory ? (this._instantiateDefaultCustomUIControls(),
                            w ? this.el.appendChild(this._blockade.el) : (this.controls.el.classList.add("mobile"),
                                this.setControls(!0))) : this.setControls(!0)
                    }
                }, {
                    key: "_showControls",
                    value: function () {
                        this._controlsVisible = !0,
                            this.el.classList.remove("initial-play"),
                            this.el.classList.add("user-hover")
                    }
                }, {
                    key: "_hideControls",
                    value: function () {
                        this._controlsVisible = !1,
                            this.el.classList.remove("user-hover"),
                            this.hideCaptionsSelector()
                    }
                }, {
                    key: "_raiseControls",
                    value: function () {
                        this._controlsVisible = !0,
                            this.el.classList.remove("mouse-leave")
                    }
                }, {
                    key: "_lowerControls",
                    value: function () {
                        this._controlsVisible = !1,
                            this.el.classList.add("mouse-leave"),
                            this.hideCaptionsSelector()
                    }
                }, {
                    key: "_onControlsReady",
                    value: function () {
                        this.options.autoplay && w || this._showStartState()
                    }
                }, {
                    key: "_showStartState",
                    value: function () {
                        this.controls && this.controls.el.classList.add("start-state"),
                            this._poster && this._poster.show(),
                            w || I(this.getMediaElement())
                    }
                }, {
                    key: "_hideStartState",
                    value: function () {
                        this.controls && this.controls.el.classList.remove("start-state"),
                            this._poster && this._poster.hide(),
                            w || F(this.getMediaElement())
                    }
                }, {
                    key: "_showEndState",
                    value: function () {
                        this.controls && (this.controls.mainControlsElement ? this.controls.mainControlsElement.contains(document.activeElement) && setTimeout(function () {
                            this.controls.playButtonElement.focus()
                        }
                            .bind(this)) : this.el.contains(document.activeElement) && !this.controls.sharingModule.el.contains(document.activeElement) && setTimeout(function () {
                                this.controls.playButtonElement.focus()
                            }
                                .bind(this)),
                            this.controls.el.classList.add("end-state")),
                            this._poster && this._poster.show(),
                            I(this.getMediaElement())
                    }
                }, {
                    key: "_hideEndState",
                    value: function () {
                        this.controls && this.controls.el.classList.remove("end-state"),
                            w || F(this.getMediaElement())
                    }
                }, {
                    key: "_createBlockade",
                    value: function () {
                        this._blockade = new c(document.createElement("div")),
                            this._blockade.el.classList.add("ac-video-blockade")
                    }
                }, {
                    key: "_instantiateDefaultCustomUIControls",
                    value: function () {
                        return this.controls = this._controlsFactory.create({
                            player: this,
                            endState: this.options.endState,
                            enableMainControls: w,
                            basePath: this.options.localizationBasePath,
                            forceEnglishLabels: this.options.forceEnglishLabels,
                            template: this.options.template,
                            readyCallback: function () {
                                this._onControlsReady(),
                                    this.trigger("controlsready")
                            }
                                .bind(this)
                        }),
                            this.controls.el.parentNode !== this.el && this.el.appendChild(this.controls.el),
                            this._videoImpl.setControls(!1),
                            this._createBlockade(),
                            this._controlsInteraction = R({
                                player: this,
                                keyboardControl: this._keyboardControl,
                                controlsTimeoutDuration: this.options.controlsTimeoutDuration,
                                showControls: this._showControls,
                                hideControls: this._hideControls,
                                raiseControls: this._raiseControls,
                                lowerControls: this._lowerControls,
                                controlsVisible: function () {
                                    return this._controlsVisible
                                }
                                    .bind(this),
                                sendMouseDown: this._videoImpl.sendMouseDown,
                                elementEmitter: this._elementEmitter
                            }),
                            this.controls
                    }
                }, {
                    key: "_onPlay",
                    value: function () {
                        this._started || this.once("timeupdate", this._onStart, function () {
                            return this.getCurrentTime() > 0 && !this.getPaused()
                        }
                            .bind(this))
                    }
                }, {
                    key: "isCaptionsSelectorShowing",
                    value: function () {
                        return this.controls.el.classList.contains("captions-selector-showing")
                    }
                }, {
                    key: "showCaptionsSelector",
                    value: function () {
                        this.controls.axListSelector.style.maxHeight = "min(" + (this.el.getBoundingClientRect().height - 80) + "px,250px)",
                            this.controls.el.classList.add("captions-selector-showing")
                    }
                }, {
                    key: "hideCaptionsSelector",
                    value: function () {
                        this.controls.el.classList.remove("captions-selector-showing")
                    }
                }, {
                    key: "_onStart",
                    value: function () {
                        this._started = !0,
                            this.el.classList.add("initial-play"),
                            this.el.classList.remove("idle-state"),
                            this._poster && this._poster.hide(),
                            this.controls && (this._hideStartState(),
                                this._hideEndState()),
                            this.once("ended", this._onEnded)
                    }
                }, {
                    key: "_onEnded",
                    value: function () {
                        this.isFullscreen() && this.exitFullscreen(),
                            this.controls && (this._hideStartState(),
                                this._showEndState()),
                            setTimeout(function () {
                                this.once("timeupdate", function () {
                                    this.getEnded() ? this._onEnded() : this._onStart()
                                }
                                    .bind(this))
                            }
                                .bind(this), 300),
                            this._poster && this._poster.show(),
                            this._started = !1
                    }
                }, {
                    key: "_initPoster",
                    value: function (e) {
                        this._poster = m({
                            player: this,
                            video: this._videoImpl,
                            useNativePoster: !1 === this.options.controls,
                            is2x: E,
                            src: e
                        }),
                            this._poster.el && this.el.appendChild(this._poster.el),
                            this.options.autoplay || this._poster.show()
                    }
                }, {
                    key: "_initErrorView",
                    value: function () {
                        this._errorView = new v,
                            this.el.appendChild(this._errorView.el)
                    }
                }, {
                    key: "_initBlendScrim",
                    value: function () {
                        this._blendScrim = new b,
                            this.el.appendChild(this._blendScrim.el)
                    }
                }, {
                    key: "_useLiveMode",
                    value: function (t) {
                        var i = this;
                        clearInterval(this._captionRemovalInterval),
                            this._isLive ? (this.el.classList.add("ac-video-live"),
                                t && !S && this.el.classList.add("ac-video-live-dvr"),
                                C && (this._captionRemovalInterval = setInterval(function () {
                                    e("../utils/removeStateCaptions")(i.getMediaElement())
                                }, 1e4))) : (this.el.classList.remove("ac-video-live"),
                                    this.el.classList.remove("ac-video-live-dvr"))
                    }
                }, {
                    key: "once",
                    value: function (e, t, n) {
                        if (arguments.length < 3 || "object" === (void 0 === n ? "undefined" : o(n)))
                            (function e(t, i, n) {
                                null === t && (t = Function.prototype);
                                var r = Object.getOwnPropertyDescriptor(t, i);
                                if (void 0 === r) {
                                    var o = Object.getPrototypeOf(t);
                                    return null === o ? void 0 : e(o, i, n)
                                }
                                if ("value" in r)
                                    return r.value;
                                var s = r.get;
                                return void 0 !== s ? s.call(n) : void 0
                            }
                            )(i.prototype.__proto__ || Object.getPrototypeOf(i.prototype), "once", this).apply(this, arguments);
                        else {
                            var r = arguments
                                , s = Array.prototype.slice.call(arguments, 2)
                                , a = function () {
                                    s.every(function (e) {
                                        return !!e()
                                    }) && (r[1].apply(this, r),
                                        this.off(r[0], a))
                                }
                                    .bind(this);
                            this.on(r[0], a)
                        }
                    }
                }, {
                    key: "getMediaElement",
                    value: function () {
                        return this._videoImpl.getMediaElement()
                    }
                }, {
                    key: "play",
                    value: function () {
                        var e = this;
                        this.el.classList.remove("idle-state");
                        var t = this._videoImpl.getCurrentTime();
                        A("play called"),
                            !this._videoImpl.getError() || 0 !== t && !isNaN(t) ? this._videoImpl.play() : setTimeout(function () {
                                e._errorView.focus()
                            }, 1e3)
                    }
                }, {
                    key: "pause",
                    value: function () {
                        this._videoImpl.pause()
                    }
                }, {
                    key: "seek",
                    value: function (e) {
                        this.setCurrentTime.apply(this, arguments)
                    }
                }, {
                    key: "addTextTrack",
                    value: function (e) {
                        this._videoImpl.addTextTrack(e)
                    }
                }, {
                    key: "getReadyState",
                    value: function () {
                        return this._videoImpl.getMediaElement().readyState
                    }
                }, {
                    key: "getPreload",
                    value: function () {
                        return this._videoImpl.getPreload()
                    }
                }, {
                    key: "setPoster",
                    value: function (e) {
                        this._poster.setSrc(e)
                    }
                }, {
                    key: "getPoster",
                    value: function () {
                        this._poster.getSrc()
                    }
                }, {
                    key: "getVolume",
                    value: function () {
                        return this._videoImpl.getVolume()
                    }
                }, {
                    key: "getMuted",
                    value: function () {
                        return this._videoImpl.getMuted()
                    }
                }, {
                    key: "getCurrentTime",
                    value: function () {
                        return this._videoImpl.getCurrentTime()
                    }
                }, {
                    key: "getDuration",
                    value: function () {
                        return this._videoImpl.getDuration()
                    }
                }, {
                    key: "getPaused",
                    value: function () {
                        return this._videoImpl.getPaused()
                    }
                }, {
                    key: "getEnded",
                    value: function () {
                        return this._videoImpl.getEnded()
                    }
                }, {
                    key: "getBufferedPercentage",
                    value: function () {
                        var e = this.getCurrentTime()
                            , t = this.getDuration();
                        if (isNaN(t) || t === 1 / 0)
                            return 0;
                        var i = this._videoImpl.getBuffered();
                        if (i.length)
                            for (var n = 0; n < i.length; n++)
                                if (i.start(n) <= e && i.end(n) > e)
                                    return i.end(n) / t * 100;
                        return e / t * 100
                    }
                }, {
                    key: "setCurrentTime",
                    value: function (e) {
                        return this._videoImpl.setCurrentTime(e)
                    }
                }, {
                    key: "goToLive",
                    value: function () {
                        this._videoImpl.goToLive && this._videoImpl.goToLive()
                    }
                }, {
                    key: "isDvr",
                    value: function () {
                        return this._isDvr && !S
                    }
                }, {
                    key: "setVolume",
                    value: function (e) {
                        return this.trigger("uservolumechange"),
                            this._videoImpl.setVolume(e)
                    }
                }, {
                    key: "setMuted",
                    value: function (e) {
                        this.trigger("uservolumechange"),
                            this._videoImpl.setMuted(e)
                    }
                }, {
                    key: "setSrc",
                    value: function (e) {
                        this._videoImpl.setSrc(e)
                    }
                }, {
                    key: "getCurrentSrc",
                    value: function () {
                        return this._videoImpl.getCurrentSrc()
                    }
                }, {
                    key: "setControls",
                    value: function (e) {
                        return this._videoImpl.setControls(e)
                    }
                }, {
                    key: "getMediaHeight",
                    value: function () {
                        return this._videoImpl.getMediaElement().videoHeight
                    }
                }, {
                    key: "getMediaWidth",
                    value: function () {
                        return this._videoImpl.getMediaElement().videoWidth
                    }
                }, {
                    key: "supportsPictureInPicture",
                    value: function () {
                        return this._videoImpl.supportsPictureInPicture()
                    }
                }, {
                    key: "isPictureInPicture",
                    value: function () {
                        return this._videoImpl.isPictureInPicture()
                    }
                }, {
                    key: "setPictureInPicture",
                    value: function (e) {
                        return this._videoImpl.setPictureInPicture(e)
                    }
                }, {
                    key: "supportsAirPlay",
                    value: function () {
                        return this._videoImpl.supportsAirPlay()
                    }
                }, {
                    key: "isLive",
                    value: function () {
                        return this._isLive
                    }
                }, {
                    key: "refreshSize",
                    value: function () {
                        this._breakpointDetect ? this._breakpointDetect.refresh() : (this._currentBreakpoint && this.el.classList.remove(this._currentBreakpoint.name),
                            this._currentBreakpoint = D.getBreakpointFromElement(this.el, O),
                            this.el.classList.add(this._currentBreakpoint.name)),
                            this._videoImpl && this._videoImpl.refreshSize()
                    }
                }, {
                    key: "_setError",
                    value: function (e) {
                        e ? this.el.classList.add("media-error") : this.el.classList.remove("media-error")
                    }
                }, {
                    key: "_onError",
                    value: function (e) {
                        var t = this._videoImpl.getError();
                        if (this._started)
                            A("ERROR: an error occured during playback, but we'll try to recover. Error code " + (t ? t.message : "unknown"));
                        else if (this._setError(!0),
                            this.controls) {
                            var i = void 0;
                            if (e.message)
                                i = e.message;
                            else {
                                if (!_.translationReady())
                                    return void _.getTranslation({
                                        callback: this._onError.bind(this, e),
                                        forceEnglishLabels: this.options.forceEnglishLabels
                                    });
                                i = _.getTranslation().error
                            }
                            this._poster.show(),
                                this._errorView.setText(i)
                        }
                    }
                }, {
                    key: "_onChapterChange",
                    value: function (e) {
                        this.trigger("chapter:change")
                    }
                }, {
                    key: "getChapters",
                    value: function () {
                        return this._chapterEmitter.chapters
                    }
                }, {
                    key: "setChapters",
                    value: function (e) {
                        this._chapterEmitter.chapters = e
                    }
                }, {
                    key: "getChapterForTime",
                    value: function (e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                        return this._chapterEmitter.getChapterForTime(e, t)
                    }
                }, {
                    key: "isStalled",
                    value: function () {
                        return this._videoImpl.isStalled()
                    }
                }, {
                    key: "_setPersistedUserSettings",
                    value: function () {
                        if (w) {
                            if (this._storedCCLanguage = h.getItem(h.CC_LANGUAGE),
                                h.hasItem("cc-disabled") && (this._storedCCLanguage = "none"),
                                !this._storedCCLanguage) {
                                var e = navigator.language.split("-")
                                    , t = r(e, 1)[0];
                                this._storedCCLanguage = "en" !== t ? t : "none"
                            }
                            this._storedAudioTrackType = h.getItem(h.AUDIO_TRACK_TYPE),
                                this._storedAudioTrackLanguage = h.getItem(h.AUDIO_TRACK_LANGUAGE),
                                this._storedVolume = h.getItem(h.VOLUME_LEVEL),
                                this._storedMuted = h.getItem(h.VOLUME_MUTED),
                                null !== this._storedVolume && this._videoImpl.setVolume(this._storedVolume),
                                "true" === this._storedMuted && (this._videoImpl.setMuted(!0),
                                    this._videoImpl.setVolume(1))
                        } else
                            this._storedCCLanguage = "none"
                    }
                }, {
                    key: "destroy",
                    value: function () {
                        this._removeEventListeners(),
                            clearInterval(this._captionRemovalInterval),
                            this.controls && (this.controls.destroy(),
                                this.controls = null),
                            this._poster && (this._poster.destroy(),
                                this._poster = null),
                            this._controlsInteraction && (this._controlsInteraction.destroy(),
                                this._controlsInteraction = null),
                            this._keyboardControl && this._keyboardControl.destroy(),
                            this.el.innerHTML = "",
                            this._breakpointDetect && this._breakpointDetect.destroy(),
                            this._chapterEmitter && this._chapterEmitter.destroy(),
                            this._blockade && (this._blockade = null),
                            this._videoImpl.destroy(),
                            this._videoImpl = null,
                            clearTimeout(this._refreshSizeTimeout),
                            l.prototype.destroy.call(this)
                    }
                }]),
                i
        }();
        N.LOADEDMETADATA = 1,
            N.LOADEDDATA = 2,
            N.CANPLAY = 3,
            N.CANPLAYTHROUGH = 4,
            t.exports = N
    }
        , {
        "../chapters/ChapterEmitter": 332,
        "../dom-emitter/DOMEmitterMicro": 333,
        "../event-emitter-shim/EventEmitterShim": 334,
        "../posterframe/PosterFrameFactory": 343,
        "../ui/DefaultBreakpoints": 354,
        "../ui/blend-scrim/BlendScrim": 371,
        "../ui/controls-interaction/createControlsInteraction": 377,
        "../ui/error/ErrorView": 388,
        "../ui/keyboard-control/createKeyboardControl": 394,
        "../ui/localization/LanguageMapping": 397,
        "../ui/localization/Localization": 398,
        "../utils/BreakpointDetect": 411,
        "../utils/Storage": 412,
        "../utils/getVersion": 414,
        "../utils/removeStateCaptions": 418,
        "../video/VideoFactory": 429,
        "./event/EventsToForward": 338,
        "./event/ReadyStateChangeEvents": 339,
        "@babel/runtime/helpers/interopRequireDefault": 157,
        "@babel/runtime/helpers/typeof": 164,
        "@marcom/ac-accessibility/helpers/hide": 190,
        "@marcom/ac-accessibility/helpers/show": 192,
        "@marcom/ac-console/log": 206,
        "@marcom/ac-feature/isDesktop": 232,
        "@marcom/ac-feature/isHandheld": 233,
        "@marcom/ac-feature/isRetina": 234,
        "@marcom/ac-feature/touchAvailable": 236,
        "@marcom/ac-fullscreen": 238,
        "@marcom/ac-raf-emitter/cancelUpdate": 273,
        "@marcom/ac-raf-emitter/update": 275,
        "@marcom/useragent-detect": 331
    }],
    337: [function (e, t, i) {
        "use strict";
        var n = e("@babel/runtime/helpers/interopRequireDefault")(e("@babel/runtime/helpers/typeof"))
            , r = function () {
                function e(e, t) {
                    for (var i = 0; i < t.length; i++) {
                        var n = t[i];
                        n.enumerable = n.enumerable || !1,
                            n.configurable = !0,
                            "value" in n && (n.writable = !0),
                            Object.defineProperty(e, n.key, n)
                    }
                }
                return function (t, i, n) {
                    return i && e(t.prototype, i),
                        n && e(t, n),
                        t
                }
            }()
            , o = function e(t, i, n) {
                null === t && (t = Function.prototype);
                var r = Object.getOwnPropertyDescriptor(t, i);
                if (void 0 === r) {
                    var o = Object.getPrototypeOf(t);
                    return null === o ? void 0 : e(o, i, n)
                }
                if ("value" in r)
                    return r.value;
                var s = r.get;
                return void 0 !== s ? s.call(n) : void 0
            };
        var s = e("./Player")
            , a = e("../ui/controls-interaction/createControlsInteraction")
            , l = e("@marcom/useragent-detect").os
            , c = l.ios || l.android || !e("@marcom/ac-feature/isDesktop")()
            , u = function (e) {
                function t(e) {
                    !function (e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, t);
                    var i = function (e, t) {
                        if (!e)
                            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !t || "object" !== (0,
                            n.default)(t) && "function" != typeof t ? e : t
                    }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                    return e.threesixty && i.el.classList.add("threesixty-video"),
                        i
                }
                return function (e, t) {
                    if ("function" != typeof t && null !== t)
                        throw new TypeError("Super expression must either be null or a function, not " + (0,
                            n.default)(t));
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }),
                        t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                }(t, s),
                    r(t, [{
                        key: "play",
                        value: function () {
                            this.get360().requestOrientationControl(),
                                o(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "play", this).apply(this, arguments)
                        }
                    }, {
                        key: "_bindMethods",
                        value: function () {
                            o(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "_bindMethods", this).call(this),
                                this._showCompass = this._showCompass.bind(this),
                                this._hideCompass = this._hideCompass.bind(this),
                                this.panToOrigin = this.panToOrigin.bind(this)
                        }
                    }, {
                        key: "_addEventListeners",
                        value: function () {
                            o(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "_addEventListeners", this).call(this)
                        }
                    }, {
                        key: "_removeEventListeners",
                        value: function () {
                            o(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "_removeEventListeners", this).call(this),
                                this.controls.compass.removeEventListener("click", this.panToOrigin)
                        }
                    }, {
                        key: "_showCompass",
                        value: function () {
                            this.el.classList.add("threesixty-ui")
                        }
                    }, {
                        key: "_hideCompass",
                        value: function () {
                            this.el.classList.remove("threesixty-ui")
                        }
                    }, {
                        key: "_instantiateDefaultCustomUIControls",
                        value: function () {
                            return this.controls = this._controlsFactory.create({
                                player: this,
                                endState: this.options.endState,
                                threesixty: !0,
                                enableMainControls: !0,
                                basePath: this.options.localizationBasePath,
                                template: this.options.template,
                                readyCallback: function () {
                                    this.options.autoplay && !c || this._showStartState(),
                                        this.trigger("controlsready")
                                }
                                    .bind(this)
                            }),
                                this.controls.el.parentNode !== this.el && this.el.appendChild(this.controls.el),
                                this._videoImpl.setControls(!1),
                                this._createBlockade(),
                                this._controlsInteraction = a({
                                    player: this,
                                    keyboardControl: this._keyboardControl,
                                    threesixty: !0,
                                    controlsTimeoutDuration: this.options.controlsTimeoutDuration,
                                    threesixtyElementsTimeoutDuration: this.options.threesixtyElementsTimeoutDuration,
                                    showControls: this._showControls,
                                    hideControls: this._hideControls,
                                    raiseControls: this._raiseControls,
                                    lowerControls: this._lowerControls,
                                    showCompass: this._showCompass,
                                    hideCompass: this._hideCompass,
                                    controlsVisible: function () {
                                        return this._controlsVisible
                                    }
                                        .bind(this),
                                    sendMouseDown: this._videoImpl.sendMouseDown,
                                    elementEmitter: this._elementEmitter
                                }),
                                this.controls
                        }
                    }, {
                        key: "panToOrigin",
                        value: function () {
                            this.get360().panToPosition({
                                lat: 0,
                                lon: 0
                            })
                        }
                    }, {
                        key: "get360",
                        value: function () {
                            return this._videoImpl.get360()
                        }
                    }, {
                        key: "getFullScreenElement",
                        value: function () {
                            return this.el
                        }
                    }, {
                        key: "getFullScreenEnabled",
                        value: function () {
                            return !c && o(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "getFullScreenEnabled", this).call(this)
                        }
                    }]),
                    t
            }();
        t.exports = u
    }
        , {
        "../ui/controls-interaction/createControlsInteraction": 377,
        "./Player": 336,
        "@babel/runtime/helpers/interopRequireDefault": 157,
        "@babel/runtime/helpers/typeof": 164,
        "@marcom/ac-feature/isDesktop": 232,
        "@marcom/useragent-detect": 331
    }],
    338: [function (e, t, i) {
        "use strict";
        t.exports = ["loadstart", "progress", "suspend", "abort", "error", "emptied", "stalled", "play", "pause", "loadedmetadata", "loadeddata", "waiting", "playing", "canplay", "canplaythrough", "seeking", "seeked", "ended", "ratechange", "durationchange", "volumechange", "addtrack", "change", "removetrack"]
    }
        , {}],
    339: [function (e, t, i) {
        "use strict";
        t.exports = ["loadstart", "suspend", "abort", "error", "emptied", "stalled", "loadedmetadata", "loadeddata", "waiting", "canplay", "canplaythrough"]
    }
        , {}],
    340: [function (e, t, i) {
        "use strict";
        var n = e("@marcom/ac-feature/isDesktop")();
        t.exports = function (t) {
            var i;
            (t ? arguments.length > 1 && (t = Object.assign.apply(null, Array.prototype.slice.apply(arguments))) : t = {},
                t.components || (t.components = e("../../ui/DefaultComponents")),
                void 0 === t.controls && (t.controls = !0),
                t.controlsImplementation || (t.controlsImplementation = e("../../ui/ControlBar")),
                t.controlsFactory || (t.controlsFactory = e("../../ui/ControlsFactory")({
                    controlsImplementation: t.controlsImplementation,
                    components: t.components,
                    template: t.controlsTemplate
                })),
                (void 0 !== t.urlOptimizer && !0 === t.urlOptimizer || "true" === t.urlOptimizer) && (t.urlOptimizer = e("../../optimizeVideoUrl")),
                t.sources || t.src ? t.sources || (t.sources = t.src ? [t.src] : []) : t.sources = [],
                t.autoplay = void 0 !== t.autoplay ? t.autoplay : n,
                t.controlsTimeoutDuration || (t.controlsTimeoutDuration = 3e3),
                t.threesixty) ? (t.threesixtyElementsTimeoutDuration || (t.threesixtyElementsTimeoutDuration = 3e3),
                    i = new (e("../ThreeSixtyPlayer"))(t)) : i = new (e("../Player"))(t);
            var r = {};
            return t.sharing && (r.sharing = Object.assign({}, t.sharing)),
                t.thumbnails && (r.thumbnails = Object.assign({}, t.thumbnails)),
                t.endState && (r.endState = Object.assign({}, t.endState)),
                t.sources && t.sources.length && (t.autoplay || !t.preload || "auto" === t.preload || !0 === t.preload ? i.load(t.sources, t.textTracks, t.startTime, r) : i.setSrc(t.sources[0])),
                i
        }
    }
        , {
        "../../optimizeVideoUrl": 335,
        "../../ui/ControlBar": 352,
        "../../ui/ControlsFactory": 353,
        "../../ui/DefaultComponents": 355,
        "../Player": 336,
        "../ThreeSixtyPlayer": 337,
        "@marcom/ac-feature/isDesktop": 232
    }],
    341: [function (e, t, i) {
        "use strict";
        t.exports = e("./createPlayer")
    }
        , {
        "./createPlayer": 340
    }],
    342: [function (e, t, i) {
        "use strict";
        var n = function () {
            function e(e, t) {
                for (var i = 0; i < t.length; i++) {
                    var n = t[i];
                    n.enumerable = n.enumerable || !1,
                        n.configurable = !0,
                        "value" in n && (n.writable = !0),
                        Object.defineProperty(e, n.key, n)
                }
            }
            return function (t, i, n) {
                return i && e(t.prototype, i),
                    n && e(t, n),
                    t
            }
        }();
        var r = function () {
            function e(t) {
                !function (e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, e),
                    this.options = t,
                    this._defaultSrc = t.src,
                    this._initialize()
            }
            return n(e, [{
                key: "_initialize",
                value: function () {
                    var e = this.options.src;
                    this.el = this.options.el || document.createElement("div"),
                        this._imgElement = document.createElement("img"),
                        this._imgElement.src = e,
                        this._currentSrc = e,
                        this._imgElement.alt = "",
                        this._onLoad = this._onLoad.bind(this),
                        this._imgElement.addEventListener("load", this._onLoad),
                        this.el.appendChild(this._imgElement),
                        this.hide(),
                        this.el.classList.add("ac-video-poster")
                }
            }, {
                key: "hide",
                value: function () {
                    this.el.classList.add("ac-video-poster-hide")
                }
            }, {
                key: "show",
                value: function () {
                    this.el.classList.remove("ac-video-poster-hide")
                }
            }, {
                key: "setSrc",
                value: function (e) {
                    var t = e || this._defaultSrc;
                    t !== this._currentSrc && (this._imgElement.style.display = "none",
                        this._imgElement.src = t,
                        this._currentSrc = t)
                }
            }, {
                key: "_onLoad",
                value: function () {
                    this._imgElement.style.display = ""
                }
            }, {
                key: "getSrc",
                value: function () {
                    return this._imgElement.src
                }
            }, {
                key: "destroy",
                value: function () {
                    this._imgElement.removeEventListener("load", this._onLoad),
                        this._el = null
                }
            }]),
                e
        }();
        t.exports = r
    }
        , {}],
    343: [function (e, t, i) {
        "use strict";
        var n = e("./PosterFrame")
            , r = "/ac/ac-video-posterframe/4.0/~/images/home/ac_video_poster_960x540.jpg"
            , o = "/ac/ac-video-posterframe/4.0/~/images/home/ac_video_poster_960x540_2x.jpg";
        t.exports = function (e) {
            if (e.src = e.src || (e.is2x ? o : r),
                e.useNativePoster) {
                e.video.setPoster(e.src);
                var t = !1
                    , i = void 0;
                return {
                    show: function () {
                        t = !0,
                            i && (e.video.setPoster(i),
                                i = null)
                    },
                    hide: function () {
                        t = !1
                    },
                    setSrc: function (n) {
                        t ? n ? e.video.setPoster(n) : e.video.setPoster(e.src) : i = n
                    }
                }
            }
            return new n(e)
        }
    }
        , {
        "./PosterFrame": 342
    }],
    344: [function (e, t, i) {
        "use strict";
        var n = function () {
            function e(e, t) {
                for (var i = 0; i < t.length; i++) {
                    var n = t[i];
                    n.enumerable = n.enumerable || !1,
                        n.configurable = !0,
                        "value" in n && (n.writable = !0),
                        Object.defineProperty(e, n.key, n)
                }
            }
            return function (t, i, n) {
                return i && e(t.prototype, i),
                    n && e(t, n),
                    t
            }
        }();
        var r = e("@marcom/ac-ajax-xhr")
            , o = e("@marcom/ac-function/throttle")
            , s = e("./parseVTT")
            , a = function () {
                function e(t, i) {
                    !function (e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, e),
                        this._view = t,
                        this._video = i.video,
                        this._refreshTracks = this._refreshTracks.bind(this),
                        this._throttledRefreshCurrentCaption = o(this._refreshCurrentCaption.bind(this, 300)),
                        this._addTrackListeners()
                }
                return n(e, [{
                    key: "_addTrackListeners",
                    value: function () {
                        this._video.on("addtrack", this._refreshTracks),
                            this._video.on("removetrack", this._refreshTracks),
                            this._video.on("change", this._refreshTracks)
                    }
                }, {
                    key: "_addVideoListeners",
                    value: function (e) {
                        if (!e.cues) {
                            this._view.setText("");
                            try {
                                r.get(e.src, {
                                    complete: function (t) {
                                        e.cues = s(t.responseText),
                                            this._addVideoListeners(e),
                                            this._refreshCurrentCaption()
                                    }
                                        .bind(this),
                                    error: function (e) { }
                                        .bind(this)
                                })
                            } catch (e) { }
                        }
                        this._video.on("loadstart", this._refreshTracks),
                            this._video.on("timeupdate", this._throttledRefreshCurrentCaption)
                    }
                }, {
                    key: "_removeVideoListeners",
                    value: function () {
                        this._video.off("loadstart", this._refreshTracks),
                            this._video.off("timeupdate", this._throttledRefreshCurrentCaption)
                    }
                }, {
                    key: "_refreshTracks",
                    value: function () {
                        var e = this._video.getTextTracks();
                        e && e.length && (e = e.filter(function (e) {
                            return "showing" === e.mode
                        })),
                            e.length ? (this._activeTrack = e[0],
                                this._addVideoListeners(this._activeTrack)) : (this._activeTrack = null,
                                    this._removeVideoListeners()),
                            this._refreshCurrentCaption()
                    }
                }, {
                    key: "_getCurrentCaptionText",
                    value: function (e) {
                        var t = this._activeTrack ? this._activeTrack.cues : null;
                        if (!t)
                            return "";
                        if (this._currentCaption && this._currentCaption.startTime >= e && this._currentCaption <= e)
                            return this._currentCaption.text;
                        for (var i = 0, n = t.length, r = void 0; i < n;) {
                            if (t[i].startTime <= e && t[i].endTime >= e)
                                r = t[i];
                            else if (t[i].startTime >= e)
                                break;
                            i++
                        }
                        return this._currentCaption = r,
                            r ? r.text : ""
                    }
                }, {
                    key: "_refreshCurrentCaption",
                    value: function () {
                        this._view.setText(this._getCurrentCaptionText(this._video.getCurrentTime()))
                    }
                }, {
                    key: "destroy",
                    value: function () {
                        this._removeVideoListeners()
                    }
                }]),
                    e
            }();
        t.exports = a
    }
        , {
        "./parseVTT": 351,
        "@marcom/ac-ajax-xhr": 195,
        "@marcom/ac-function/throttle": 246
    }],
    345: [function (e, t, i) {
        "use strict";
        var n = e("@babel/runtime/helpers/interopRequireDefault")(e("@babel/runtime/helpers/typeof"))
            , r = function () {
                function e(e, t) {
                    for (var i = 0; i < t.length; i++) {
                        var n = t[i];
                        n.enumerable = n.enumerable || !1,
                            n.configurable = !0,
                            "value" in n && (n.writable = !0),
                            Object.defineProperty(e, n.key, n)
                    }
                }
                return function (t, i, n) {
                    return i && e(t.prototype, i),
                        n && e(t, n),
                        t
                }
            }()
            , o = function e(t, i, n) {
                null === t && (t = Function.prototype);
                var r = Object.getOwnPropertyDescriptor(t, i);
                if (void 0 === r) {
                    var o = Object.getPrototypeOf(t);
                    return null === o ? void 0 : e(o, i, n)
                }
                if ("value" in r)
                    return r.value;
                var s = r.get;
                return void 0 !== s ? s.call(n) : void 0
            };
        var s = e("../ui/factory/createComponents")
            , a = e("./TextTracksBehavior")
            , l = e("../ui/elements/Label")
            , c = e("@marcom/ac-event-emitter-micro").EventEmitterMicro
            , u = {
                textTracksPolyfill: {
                    className: "ac-video-player-text-track",
                    view: {
                        classDef: l,
                        options: {}
                    },
                    behavior: {
                        classDef: a
                    }
                }
            }
            , h = function (e) {
                function t(e) {
                    !function (e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, t);
                    var i = function (e, t) {
                        if (!e)
                            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !t || "object" !== (0,
                            n.default)(t) && "function" != typeof t ? e : t
                    }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                    return i.container = e.container,
                        i._video = e.video,
                        i._initialize(e),
                        i
                }
                return function (e, t) {
                    if ("function" != typeof t && null !== t)
                        throw new TypeError("Super expression must either be null or a function, not " + (0,
                            n.default)(t));
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }),
                        t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                }(t, c),
                    r(t, [{
                        key: "_initialize",
                        value: function (e) {
                            this._onTrackChange = this._onTrackChange.bind(this),
                                this.el = document.createElement("div"),
                                this.el.innerHTML = e.template || '<div class="ac-video-player-text-track"></div>',
                                this.el.classList.add("ac-video-player-text-track-container"),
                                this._tracks = e.tracks || [],
                                this._textTrackComponent = s(this.el, u, {
                                    video: this._video
                                })
                        }
                    }, {
                        key: "_onTrackChange",
                        value: function () {
                            this.trigger("change"),
                                this.el.parentElement || (this._video.getRenderElement().parentElement.appendChild(this.el),
                                    this.el.firstElementChild.classList.add("is-visible"))
                        }
                    }, {
                        key: "addTrack",
                        value: function (e) {
                            this._tracks || (this._tracks = []);
                            var t = e.mode || "hidden"
                                , i = this._onTrackChange;
                            Object.defineProperty(e, "mode", {
                                get: function () {
                                    return t
                                },
                                set: function (e) {
                                    t = e,
                                        i()
                                },
                                enumerable: !0,
                                configurable: !0
                            }),
                                this._tracks.push(e),
                                this.trigger("addtrack")
                        }
                    }, {
                        key: "clearTracks",
                        value: function () {
                            this._tracks = [],
                                this.trigger("removetrack"),
                                this.trigger("change")
                        }
                    }, {
                        key: "getTextTracks",
                        value: function () {
                            return this._tracks
                        }
                    }, {
                        key: "trigger",
                        value: function (e, i) {
                            return o(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "trigger", this).call(this, e, Object.assign({
                                type: e
                            }, i || {}))
                        }
                    }, {
                        key: "destroy",
                        value: function () {
                            this._textTrackComponent.destroy(),
                                o(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "destroy", this).call(this)
                        }
                    }]),
                    t
            }();
        t.exports = h
    }
        , {
        "../ui/elements/Label": 380,
        "../ui/factory/createComponents": 390,
        "./TextTracksBehavior": 344,
        "@babel/runtime/helpers/interopRequireDefault": 157,
        "@babel/runtime/helpers/typeof": 164,
        "@marcom/ac-event-emitter-micro": 229
    }],
    346: [function (e, t, i) {
        "use strict";
        var n, r = e("@marcom/useragent-detect");
        n = r.browser.safari ? function (e, t) {
            e.track.mode = t
        }
            : function (e, t) {
                e.mode = t
            }
            ;
        var o = function (e) {
            var t;
            if (e instanceof HTMLElement)
                this.el.appendChild(e);
            else {
                var i = document.createElement("track");
                i.src = e.src,
                    i.kind = "captions",
                    i.srclang = e.srclang,
                    "en" === i.srclang ? i.label = e.label || "English" : i.label = e.label || e.srclang && e.srclang.toUpperCase() || "Unknown CC",
                    r.browser.firefox ? (t = this.el.textTracks.length,
                        setTimeout(function () {
                            this.el.appendChild(i),
                                n(this.el.textTracks[t], e.mode || "hidden")
                        }
                            .bind(this), 0)) : r.os.android ? (t = this.el.textTracks.length,
                                this.el.appendChild(i),
                                n(this.el.textTracks[t], e.mode || "hidden")) : (this.el.appendChild(i),
                                    n(i, e.mode || "hidden")),
                    this.trigger("TextTrackChange")
            }
        };
        t.exports = {
            create: function (e) {
                for (var t = 0, i = e ? e.length : 0; t < i; t++) {
                    var n = e[t];
                    o.call(this, n)
                }
            },
            add: o,
            get: function () {
                return this.el.textTracks
            },
            getEmitter: function () {
                if (!this._textTracksEmitter) {
                    var t = e("../dom-emitter/DOMEmitterMicro");
                    this._textTracksEmitter = new t(this.getTextTracks())
                }
                return this._textTracksEmitter
            },
            destroy: function () { }
        }
    }
        , {
        "../dom-emitter/DOMEmitterMicro": 333,
        "@marcom/useragent-detect": 331
    }],
    347: [function (e, t, i) {
        "use strict";
        var n = e("./TextTracksDOM");
        t.exports = {
            create: function (e) {
                if (e)
                    if (this._textTracksPolyfill) {
                        this._textTracksPolyfill.clearTracks();
                        for (var t = 0, i = e.length; t < i; t++)
                            this._textTracksPolyfill.addTrack(e[t])
                    } else
                        this._textTracksPolyfill = new n({
                            video: this,
                            tracks: e,
                            container: this._parentElement
                        })
            },
            add: function (e) {
                return this._textTracksPolyfill.addTrack(e)
            },
            get: function () {
                return this._textTracksPolyfill || this._createTextTrackTags([]),
                    this._textTracksPolyfill.getTextTracks()
            },
            getEmitter: function () {
                return this._textTracksPolyfill || this._createTextTrackTags([]),
                    this._textTracksPolyfill
            },
            destroy: function () {
                this._textTracksPolyfill.destroy(),
                    this._textTracksPolyfill = null
            }
        }
    }
        , {
        "./TextTracksDOM": 345
    }],
    348: [function (e, t, i) {
        "use strict";
        var n = e("@marcom/useragent-detect")
            , r = !n.browser.ie && !n.browser.edge;
        t.exports = function (t) {
            var i;
            return i = !!(t = t || {}).hls || !t.threesixty && (void 0 === t.useNativeCaptions ? r : t.useNativeCaptions),
                e(i ? "./TextTracksNative" : "./TextTracksPolyfill")
        }
    }
        , {
        "./TextTracksNative": 346,
        "./TextTracksPolyfill": 347,
        "@marcom/useragent-detect": 331
    }],
    349: [function (e, t, i) {
        "use strict";
        t.exports = function (e, t) {
            var i = []
                , n = !0
                , r = !1
                , o = void 0;
            try {
                for (var s, a = t[Symbol.iterator](); !(n = (s = a.next()).done); n = !0) {
                    var l = s.value;
                    l !== e && l.language === e.language && i.push(l)
                }
            } catch (e) {
                r = !0,
                    o = e
            } finally {
                try {
                    !n && a.return && a.return()
                } finally {
                    if (r)
                        throw o
                }
            }
            return i
        }
    }
        , {}],
    350: [function (e, t, i) {
        "use strict";
        t.exports = function (e) {
            var t = new Set;
            return e.filter(function (e) {
                return !(t.has(e.language) || "subtitles" !== e.kind && "captions" !== e.kind && e.kind) && (t.add(e.language),
                    !0)
            })
        }
    }
        , {}],
    351: [function (e, t, i) {
        "use strict";
        var n = e("../utils/Time");
        t.exports = function (e) {
            for (var t, i, r = e.split(/\n/), o = /([\d]{2}:)?[\d]{2}:[\d]{2}.[\d]{3}( --> ){1}([\d]{2}:)?[\d]{2}:[\d]{2}.[\d]{3}/, s = [], a = 0, l = r.length; a < l; a++)
                if (i = "",
                    o.test(r[a])) {
                    for ((t = r[a].split(" --\x3e "))[0] = t[0].split(":").length < 3 ? "00:" + t[0] : t[0],
                        t[1] = t[1].split(":").length < 3 ? "00:" + t[1] : t[1]; ++a && a < l && !o.test(r[a]);)
                        "" !== r[a] && (i += r[a] + "<br />");
                    i = i.substr(0, i.length - 6),
                        a < l && a--,
                        s.push({
                            startTime: n.stringToNumber(t[0].split(" ")[0]),
                            endTime: n.stringToNumber(t[1].split(" ")[0]),
                            text: i
                        })
                }
            return s
        }
    }
        , {
        "../utils/Time": 413
    }],
    352: [function (e, t, i) {
        "use strict";
        var n = e("@marcom/ac-string/supplant")
            , r = e("../utils/Time")
            , o = e("./localization/Localization")
            , s = e("./factory/createComponents")
            , a = e("@marcom/useragent-detect").browser.chrome
            , l = e("@marcom/ac-feature/isDesktop")()
            , c = e("./overlays/OverlayContainer")
            , u = e("./end-state/EndStateItemContainer")
            , h = e("./compass/Compass")
            , d = e("./loading-indicator/LoadingIndicator")
            , p = e("../utils/merge")
            , f = e("./templates/default-controls.html")
            , m = function (e) {
                this._initialize(e)
            }
            , _ = m.prototype;
        _._initialize = function (e) {
            this.el = e.element || document.createElement("div"),
                this._basePath = e.basePath,
                this._forceEnglishLabels = e.forceEnglishLabels,
                this.el.style.display = "none",
                this._template = e.template || f,
                this._templateData = e.templateData || Object.assign({
                    elementClassPrefix: "controls"
                }),
                this._destroyed = !1,
                this._localize().then(function () {
                    this._destroyed || (this._initUIComponents(e),
                        this.el.style.display = ""),
                        "function" == typeof e.readyCallback && e.readyCallback()
                }
                    .bind(this))
        }
            ,
            _._localize = function () {
                return new Promise(function (e) {
                    o.getTranslation({
                        callback: function (t) {
                            e(t)
                        }
                            .bind(this),
                        basePath: this._basePath,
                        forceEnglishLabels: this._forceEnglishLabels
                    })
                }
                    .bind(this)).then(function (e) {
                        this._templateData = Object.assign(this._templateData, e)
                    }
                        .bind(this))
            }
            ,
            _._renderTemplateMarkup = function () {
                var e = n(this._template, this._templateData)
                    , t = this._updateAxTracksSelector.bind(this);
                this.el.innerHTML = e,
                    this.tracksSelectorContainer = this.el.querySelector(".ac-video-ax-tracks-selector-container"),
                    this.captionsSelectorContainer = this.el.querySelector(".ac-video-captions-selector-container"),
                    this._updateAxTracksSelector(),
                    this._player._videoImpl.on("TextTrackChange", t),
                    this._player.on("AudioTrackChange", t)
            }
            ,
            _._updateAxTracksSelector = function () {
                var e = !!this._player.getTextTracks().length
                    , t = !!(this._player.getAudioTracks().length > 1);
                !e && t ? (this.tracksSelectorContainer.classList.add("no-captions"),
                    this.captionsSelectorContainer.classList.add("hidden")) : e && (this.tracksSelectorContainer.classList.remove("no-captions"),
                        this.captionsSelectorContainer.classList.remove("hidden"))
            }
            ,
            _._initDesktopControls = function (e, t) {
                this._componentCollection = s(e, p(t, {
                    elementClassPrefix: this._templateData.elementClassPrefix,
                    elapsedTimeIndicator: {
                        behavior: {
                            observe: {
                                source: this._player,
                                events: ["loadstart", "timeupdate", "seeking", "seeked", "durationchange"],
                                update: function (e) {
                                    if (this._player.isDvr()) {
                                        var t = this._player.getCurrentTime();
                                        e.setText(isNaN(t) ? "0:00:00" : r.formatTime(t, 1 / 0, 2))
                                    } else
                                        e.setText(r.formatTime(this._player.getCurrentTime(), this._player.getDuration()))
                                }
                                    .bind(this)
                            }
                        }
                    },
                    remainingTimeIndicator: {
                        behavior: {
                            observe: {
                                source: this._player,
                                events: ["timeupdate", "seeking", "seeked", "durationchange"],
                                update: function (e) {
                                    e.setText(r.formatTime(this._player.getCurrentTime() - this._player.getDuration(), this._player.getDuration()))
                                }
                                    .bind(this)
                            }
                        }
                    },
                    volumeLevel: {
                        view: {
                            options: {
                                value: this._player.getMuted() ? 0 : 100 * this._player.getVolume()
                            }
                        }
                    },
                    playPauseContainer: {
                        view: {
                            options: {
                                labels: {
                                    playing: this._templateData.pause,
                                    paused: this._templateData.play,
                                    ended: this._templateData.replay
                                }
                            }
                        }
                    },
                    fullScreen: {
                        view: {
                            options: {
                                labels: {
                                    initial: this._templateData.fullscreen,
                                    on: this._templateData.exitfullscreen,
                                    off: this._templateData.fullscreen
                                }
                            }
                        }
                    },
                    pictureInPictureToggle: {
                        view: {
                            options: {
                                labels: {
                                    initial: this._templateData.pictureinpicture,
                                    on: this._templateData.exitpictureinpicture,
                                    off: this._templateData.pictureinpicture
                                }
                            }
                        }
                    }
                }), {
                    player: this._player,
                    localization: this._templateData
                })
            }
            ,
            _._initUIComponents = function (e) {
                this._player = e.player;
                var t = this.el
                    , i = e.components;
                t.classList.add(e.className || "ac-video-controls"),
                    a && (t.style.willChange = "transform"),
                    this._renderTemplateMarkup();
                var n = t.querySelector(".main-controls-container");
                n && (e.enableMainControls ? (n.classList.add("control-bar-skin-default"),
                    this.mainControlsElement = n) : n.parentElement.removeChild(n));
                var r = t.querySelector(".end-state-container");
                r && (this.endState = new u(Object.assign({}, {
                    el: r,
                    player: this._player
                }, e.endState))),
                    e.threesixty && (this.compass = new h({
                        rootElement: t,
                        player: this._player
                    })),
                    this._initDesktopControls(t, i);
                var o = this._componentCollection.components.socialShare;
                this.sharingModule = o && o.length ? o[0].behavior.sharingModule : null,
                    this._componentCollection.components.progressBar.length && (this.scrubberView = this._componentCollection.components.progressBar[0].view),
                    this.playButtonElement = this.el.querySelector(".controls-play-pause-button"),
                    this.axListSelector = this.el.querySelector(".ac-video-ax-tracks-selector-container"),
                    l && e.enableMainControls && (this.overlays = new c({
                        el: this.el.querySelector(".ac-video-overlay-container"),
                        player: this._player
                    })),
                    this._loadingIndicator = new d({
                        player: this._player,
                        el: this.el.querySelector(".loading-indicator-container")
                    })
            }
            ,
            _.destroy = function () {
                this._componentCollection && (this._componentCollection.destroy(),
                    this._componentCollection = null),
                    this._loadingIndicator && (this._loadingIndicator.destroy(),
                        this._loadingIndicator = null),
                    this.overlays && this.overlays.destroy(),
                    this._destroyed = !0,
                    this._player = null,
                    this._templateData = null
            }
            ,
            t.exports = m
    }
        , {
        "../utils/Time": 413,
        "../utils/merge": 417,
        "./compass/Compass": 373,
        "./end-state/EndStateItemContainer": 387,
        "./factory/createComponents": 390,
        "./loading-indicator/LoadingIndicator": 395,
        "./localization/Localization": 398,
        "./overlays/OverlayContainer": 400,
        "./templates/default-controls.html": 404,
        "@marcom/ac-feature/isDesktop": 232,
        "@marcom/ac-string/supplant": 314,
        "@marcom/useragent-detect": 331
    }],
    353: [function (e, t, i) {
        "use strict";
        var n = {
            components: e("./DefaultComponents"),
            controlsImplementation: e("./ControlBar")
        };
        t.exports = function (e) {
            e = e || {};
            var t = Object.assign({}, n, e);
            return {
                create: function (i) {
                    var r = Object.assign({}, t, i);
                    return r.components = e.components || n.components,
                        new r.controlsImplementation(r)
                }
            }
        }
    }
        , {
        "./ControlBar": 352,
        "./DefaultComponents": 355
    }],
    354: [function (e, t, i) {
        "use strict";
        t.exports = [{
            name: "small",
            minWidth: 0,
            maxWidth: 569
        }, {
            name: "medium",
            minWidth: 570,
            maxWidth: 779
        }, {
            name: "large",
            minWidth: 780,
            maxWidth: 1 / 0
        }]
    }
        , {}],
    355: [function (e, t, i) {
        "use strict";
        var n = e("./elements/Button")
            , r = e("./elements/StatefulButton")
            , o = e("./elements/ToggleButton")
            , s = e("./elements/Label")
            , a = e("./elements/ListSelector")
            , l = e("./elements/Slider")
            , c = e("./elements/Container")
            , u = e("./behaviors/MuteButtonBehavior")
            , h = e("./behaviors/PlayPauseButtonBehavior")
            , d = e("./behaviors/PictureInPictureButtonBehavior")
            , p = e("./behaviors/CaptionsButtonBehavior")
            , f = e("./behaviors/CaptionsSelectorBehavior")
            , m = e("./behaviors/AudioTracksSelectorBehavior")
            , _ = e("./behaviors/FullScreenButtonBehavior")
            , v = e("./behaviors/ProgressBarSliderBehavior")
            , b = e("./behaviors/VolumeSliderBehavior")
            , y = e("./behaviors/SharingButtonBehavior")
            , g = e("./behaviors/SocialContainerBehavior")
            , E = e("./behaviors/AirPlayButtonBehavior")
            , w = e("./behaviors/LiveButtonBehavior")
            , k = e("./elements/mixins/CursorPointer")
            , x = e("./templates/progress-slider.html")
            , C = e("./templates/volume-slider.html");
        t.exports = {
            back30Seconds: {
                className: "back-30-seconds-button",
                view: {
                    classDef: n
                }
            },
            gotoLive: {
                className: "progress-dvr-label-container",
                view: {
                    classDef: r,
                    options: {
                        states: {
                            initial: "not-live",
                            on: "live",
                            off: "not-live"
                        },
                        labels: {
                            initial: "Go to current live position"
                        }
                    }
                },
                behavior: {
                    classDef: w
                }
            },
            fullScreen: {
                className: "full-screen-button",
                view: {
                    classDef: o,
                    options: {
                        states: {
                            initial: "fullscreen-unsupported",
                            on: "is-fullscreen",
                            off: ""
                        },
                        labels: {
                            initial: "fullscreen",
                            on: "exitfullscreen",
                            off: "fullscreen"
                        }
                    }
                },
                behavior: {
                    classDef: _
                }
            },
            mutevolume: {
                className: "toggle-mute-volume-button",
                view: {
                    classDef: o,
                    options: {
                        states: {
                            initial: [],
                            on: ["is-muted"],
                            off: []
                        }
                    }
                },
                behavior: {
                    classDef: u
                }
            },
            playPauseContainer: {
                className: "play-pause-button-container",
                view: {
                    classDef: r,
                    options: {
                        states: {
                            playing: ["is-playing"],
                            paused: [],
                            ended: ["is-ended"]
                        }
                    }
                },
                behavior: {
                    classDef: h
                }
            },
            pictureInPictureToggle: {
                className: "picture-in-picture-button",
                view: {
                    classDef: o,
                    options: {
                        states: {
                            initial: ["picture-in-picture-unsupported"],
                            on: ["is-picture-in-picture"],
                            off: []
                        },
                        labels: {
                            initial: "pictureinpicture",
                            on: "exitpictureinpicture",
                            off: "pictureinpicture"
                        }
                    }
                },
                behavior: {
                    classDef: d
                }
            },
            captionsToggle: {
                className: "text-tracks-toggle-button",
                view: {
                    classDef: o,
                    options: {
                        states: {
                            initial: ["no-text-tracks"],
                            on: ["text-tracks-visible"],
                            off: []
                        }
                    }
                },
                behavior: {
                    classDef: p
                }
            },
            audioTracksSelector: {
                className: "audio-selector",
                view: {
                    classDef: a
                },
                behavior: {
                    classDef: m
                }
            },
            captionsSelector: {
                className: "captions-selector",
                view: {
                    classDef: a
                },
                behavior: {
                    classDef: f
                }
            },
            airplayToggle: {
                className: "airplay-button",
                view: {
                    classDef: o,
                    options: {
                        states: {
                            initial: ["airplay-unsupported"],
                            on: ["airplay-active"],
                            off: []
                        }
                    }
                },
                behavior: {
                    classDef: E
                }
            },
            elapsedTimeIndicator: {
                className: "elapsed-time",
                view: {
                    classDef: s
                }
            },
            remainingTimeIndicator: {
                className: "remaining-time",
                view: {
                    classDef: s
                }
            },
            progressBar: {
                className: "progress-indicator",
                view: {
                    classDef: l,
                    options: {
                        template: x,
                        min: 0,
                        max: 1,
                        mixins: [k],
                        orientation: "horizontal"
                    }
                },
                behavior: {
                    classDef: v
                }
            },
            volumeLevel: {
                className: "volume-level-indicator",
                view: {
                    classDef: l,
                    options: {
                        template: C,
                        min: 0,
                        max: 100,
                        mixins: [k],
                        orientation: "vertical"
                    }
                },
                behavior: {
                    classDef: b
                }
            },
            sharing: {
                className: "sharing-button",
                view: {
                    classDef: r,
                    options: {
                        states: {
                            initial: ["sharing-unsupported"],
                            on: ["is-sharing"],
                            off: []
                        }
                    }
                },
                behavior: {
                    classDef: y
                }
            },
            socialShare: {
                className: "social-tray",
                view: {
                    classDef: c,
                    options: {}
                },
                behavior: {
                    classDef: g
                }
            }
        }
    }
        , {
        "./behaviors/AirPlayButtonBehavior": 356,
        "./behaviors/AudioTracksSelectorBehavior": 357,
        "./behaviors/CaptionsButtonBehavior": 360,
        "./behaviors/CaptionsSelectorBehavior": 361,
        "./behaviors/FullScreenButtonBehavior": 362,
        "./behaviors/LiveButtonBehavior": 363,
        "./behaviors/MuteButtonBehavior": 364,
        "./behaviors/PictureInPictureButtonBehavior": 365,
        "./behaviors/PlayPauseButtonBehavior": 366,
        "./behaviors/ProgressBarSliderBehavior": 367,
        "./behaviors/SharingButtonBehavior": 368,
        "./behaviors/SocialContainerBehavior": 369,
        "./behaviors/VolumeSliderBehavior": 370,
        "./elements/Button": 378,
        "./elements/Container": 379,
        "./elements/Label": 380,
        "./elements/ListSelector": 381,
        "./elements/Slider": 382,
        "./elements/StatefulButton": 383,
        "./elements/ToggleButton": 384,
        "./elements/mixins/CursorPointer": 385,
        "./templates/progress-slider.html": 406,
        "./templates/volume-slider.html": 410
    }],
    356: [function (e, t, i) {
        "use strict";
        var n = e("@babel/runtime/helpers/interopRequireDefault")(e("@babel/runtime/helpers/typeof"))
            , r = function () {
                function e(e, t) {
                    for (var i = 0; i < t.length; i++) {
                        var n = t[i];
                        n.enumerable = n.enumerable || !1,
                            n.configurable = !0,
                            "value" in n && (n.writable = !0),
                            Object.defineProperty(e, n.key, n)
                    }
                }
                return function (t, i, n) {
                    return i && e(t.prototype, i),
                        n && e(t, n),
                        t
                }
            }();
        var o = e("./ButtonBehavior")
            , s = function (e) {
                function t(e, i) {
                    !function (e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, t);
                    var r = function (e, t) {
                        if (!e)
                            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !t || "object" !== (0,
                            n.default)(t) && "function" != typeof t ? e : t
                    }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, i));
                    return r._player.supportsAirPlay() && (r._airplayStateChange = r._airplayStateChange.bind(r),
                        r._player.getMediaElement().addEventListener("webkitplaybacktargetavailabilitychanged", r._airplayStateChange),
                        r._updateState = r._updateState.bind(r),
                        r._player.getMediaElement().addEventListener("webkitcurrentplaybacktargetiswirelesschanged", r._updateState)),
                        r
                }
                return function (e, t) {
                    if ("function" != typeof t && null !== t)
                        throw new TypeError("Super expression must either be null or a function, not " + (0,
                            n.default)(t));
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }),
                        t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                }(t, o),
                    r(t, [{
                        key: "_airplayStateChange",
                        value: function (e) {
                            "available" === e.availability ? this._airplayAvailable = !0 : this._airplayAvailable = !1,
                                this._updateState()
                        }
                    }, {
                        key: "_updateState",
                        value: function () {
                            this._player.getMediaElement().webkitCurrentPlaybackTargetIsWireless ? this._view.setState("on") : this._airplayAvailable ? this._view.setState("off") : this._view.setState("initial")
                        }
                    }, {
                        key: "_onClick",
                        value: function () {
                            this._player.getMediaElement().webkitShowPlaybackTargetPicker()
                        }
                    }, {
                        key: "destroy",
                        value: function () {
                            this._player.getMediaElement().removeEventListener("webkitplaybacktargetavailabilitychanged", this._airplayStateChange),
                                this._player.getMediaElement().removeEventListener("webkitcurrentplaybacktargetiswirelesschanged", this._updateState),
                                function e(t, i, n) {
                                    null === t && (t = Function.prototype);
                                    var r = Object.getOwnPropertyDescriptor(t, i);
                                    if (void 0 === r) {
                                        var o = Object.getPrototypeOf(t);
                                        return null === o ? void 0 : e(o, i, n)
                                    }
                                    if ("value" in r)
                                        return r.value;
                                    var s = r.get;
                                    return void 0 !== s ? s.call(n) : void 0
                                }(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "destroy", this).call(this)
                        }
                    }]),
                    t
            }();
        t.exports = s
    }
        , {
        "./ButtonBehavior": 359,
        "@babel/runtime/helpers/interopRequireDefault": 157,
        "@babel/runtime/helpers/typeof": 164
    }],
    357: [function (e, t, i) {
        "use strict";
        var n = e("@babel/runtime/helpers/interopRequireDefault")(e("@babel/runtime/helpers/typeof"))
            , r = function () {
                function e(e, t) {
                    for (var i = 0; i < t.length; i++) {
                        var n = t[i];
                        n.enumerable = n.enumerable || !1,
                            n.configurable = !0,
                            "value" in n && (n.writable = !0),
                            Object.defineProperty(e, n.key, n)
                    }
                }
                return function (t, i, n) {
                    return i && e(t.prototype, i),
                        n && e(t, n),
                        t
                }
            }();
        var o = e("./BaseBehavior")
            , s = e("../localization/LanguageMapping")
            , a = function (e) {
                function t(e, i) {
                    !function (e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, t);
                    var r = function (e, t) {
                        if (!e)
                            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !t || "object" !== (0,
                            n.default)(t) && "function" != typeof t ? e : t
                    }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, i));
                    return r._updateState(),
                        r
                }
                return function (e, t) {
                    if ("function" != typeof t && null !== t)
                        throw new TypeError("Super expression must either be null or a function, not " + (0,
                            n.default)(t));
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }),
                        t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                }(t, o),
                    r(t, [{
                        key: "_addViewListeners",
                        value: function () {
                            this._onSelected = this._onSelected.bind(this),
                                this._view.on("ItemSelected", this._onSelected)
                        }
                    }, {
                        key: "_addPlayerListeners",
                        value: function () {
                            this._updateState = this._updateState.bind(this),
                                this._player.on("AudioTrackChange", this._updateState),
                                this._player.on("loadedmetadata", this._updateState),
                                this._player.on("playing", this._updateState),
                                this._player.on("play", this._updateState)
                        }
                    }, {
                        key: "_updateState",
                        value: function () {
                            var e = function (e) {
                                var t = []
                                    , i = function (e) {
                                        t.some(function (t) {
                                            return t.language === e.language && t.kind === e.kind
                                        }) || t.push(e)
                                    }
                                    , n = !0
                                    , r = !1
                                    , o = void 0;
                                try {
                                    for (var s, a = e[Symbol.iterator](); !(n = (s = a.next()).done); n = !0)
                                        i(s.value)
                                } catch (e) {
                                    r = !0,
                                        o = e
                                } finally {
                                    try {
                                        !n && a.return && a.return()
                                    } finally {
                                        if (r)
                                            throw o
                                    }
                                }
                                return t
                            }(this._player.getAudioTracks());
                            if (e.length < 2)
                                return this._view.setItems([]),
                                    void this._view.hide();
                            var t = Array.from(e).map(function (e) {
                                var t = e.enabled
                                    , i = e.id
                                    , n = e.kind
                                    , r = e.language
                                    , o = s[e.language]
                                    , a = e.label;
                                a || (a = "description" === e.kind ? o ? s[e.language] + " Audio Descriptions" : "Audio Descriptions (" + e.language + ")" : o ? s[e.language] : e.language);
                                var l = {
                                    enabled: t,
                                    id: i,
                                    kind: n,
                                    label: a,
                                    language: r
                                };
                                return Object.defineProperty(l, "enabled", {
                                    get: function () {
                                        return e.enabled
                                    },
                                    set: function (t) {
                                        e.enabled = t
                                    }
                                }),
                                    l
                            });
                            this._view.setItems(t),
                                this._view.show()
                        }
                    }, {
                        key: "_onSelected",
                        value: function (e) {
                            var t = this._player.getAudioTracks()
                                , i = e.detail;
                            t.forEach(function (e) {
                                return e.enabled = !1
                            }),
                                i.enabled = !0,
                                setTimeout(this._updateState)
                        }
                    }, {
                        key: "destroy",
                        value: function () {
                            this._player.off("loadedmetadata", this._updateState),
                                this._player.off("playing", this._updateState),
                                this._player.off("play", this._updateState),
                                this._player.off("AudioTrackChange", this._updateState)
                        }
                    }]),
                    t
            }();
        t.exports = a
    }
        , {
        "../localization/LanguageMapping": 397,
        "./BaseBehavior": 358,
        "@babel/runtime/helpers/interopRequireDefault": 157,
        "@babel/runtime/helpers/typeof": 164
    }],
    358: [function (e, t, i) {
        "use strict";
        t.exports = function e(t, i) {
            !function (e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }(this, e),
                this._player = i.player,
                this._view = t,
                this._addViewListeners && this._addViewListeners(),
                this._addPlayerListeners && this._addPlayerListeners()
        }
    }
        , {}],
    359: [function (e, t, i) {
        "use strict";
        var n = e("@babel/runtime/helpers/interopRequireDefault")(e("@babel/runtime/helpers/typeof"))
            , r = function () {
                function e(e, t) {
                    for (var i = 0; i < t.length; i++) {
                        var n = t[i];
                        n.enumerable = n.enumerable || !1,
                            n.configurable = !0,
                            "value" in n && (n.writable = !0),
                            Object.defineProperty(e, n.key, n)
                    }
                }
                return function (t, i, n) {
                    return i && e(t.prototype, i),
                        n && e(t, n),
                        t
                }
            }();
        var o = e("./BaseBehavior")
            , s = function (e) {
                function t(e, i) {
                    return function (e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, t),
                        function (e, t) {
                            if (!e)
                                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return !t || "object" !== (0,
                                n.default)(t) && "function" != typeof t ? e : t
                        }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, i))
                }
                return function (e, t) {
                    if ("function" != typeof t && null !== t)
                        throw new TypeError("Super expression must either be null or a function, not " + (0,
                            n.default)(t));
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }),
                        t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                }(t, o),
                    r(t, [{
                        key: "_initialize",
                        value: function () {
                            this._onClick = this._onClick.bind(this)
                        }
                    }, {
                        key: "_addViewListeners",
                        value: function () {
                            this._initialize(),
                                this._view.on("click", this._onClick)
                        }
                    }, {
                        key: "_onClick",
                        value: function (e) { }
                    }, {
                        key: "destroy",
                        value: function () {
                            this._view.off("click", this._onClick)
                        }
                    }]),
                    t
            }();
        t.exports = s
    }
        , {
        "./BaseBehavior": 358,
        "@babel/runtime/helpers/interopRequireDefault": 157,
        "@babel/runtime/helpers/typeof": 164
    }],
    360: [function (e, t, i) {
        "use strict";
        var n = e("@babel/runtime/helpers/interopRequireDefault")(e("@babel/runtime/helpers/typeof"))
            , r = function () {
                function e(e, t) {
                    for (var i = 0; i < t.length; i++) {
                        var n = t[i];
                        n.enumerable = n.enumerable || !1,
                            n.configurable = !0,
                            "value" in n && (n.writable = !0),
                            Object.defineProperty(e, n.key, n)
                    }
                }
                return function (t, i, n) {
                    return i && e(t.prototype, i),
                        n && e(t, n),
                        t
                }
            }();
        var o = e("./ButtonBehavior")
            , s = e("../../texttracks/getFilteredTextTracks")
            , a = e("../../utils/Storage")
            , l = e("@marcom/useragent-detect").browser
            , c = l.edge || l.ie || l.firefox
            , u = function (e) {
                function t(e, i) {
                    !function (e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, t);
                    var r = function (e, t) {
                        if (!e)
                            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !t || "object" !== (0,
                            n.default)(t) && "function" != typeof t ? e : t
                    }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, i));
                    return r._updateState(),
                        r._allowMultiLanguageCaptions = !r._player.options.disableMultiLanguageCaptions,
                        r
                }
                return function (e, t) {
                    if ("function" != typeof t && null !== t)
                        throw new TypeError("Super expression must either be null or a function, not " + (0,
                            n.default)(t));
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }),
                        t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                }(t, o),
                    r(t, [{
                        key: "_updateState",
                        value: function () {
                            var e = this._player.getAudioTracks()
                                , t = this._player.getVisibleTextTracks()
                                , i = s(this._player.getTextTracks());
                            t.length || e.length > 1 ? this._view.setState("on") : i.length ? this._view.setState("off") : this._view.setState("initial")
                        }
                    }, {
                        key: "_addPlayerListeners",
                        value: function () {
                            this._updateState = this._updateState.bind(this),
                                this._player.on("addtrack", this._updateState),
                                this._player.on("change", this._updateState),
                                this._player.on("removetrack", this._updateState),
                                this._player.on("AudioTrackChange", this._updateState)
                        }
                    }, {
                        key: "_onClick",
                        value: function () {
                            var e = this._player.getVisibleTextTracks()
                                , t = s(this._player.getTextTracks())
                                , i = this._player.getAudioTracks();
                            t.length > 1 && this._allowMultiLanguageCaptions || i.length > 1 ? this._player.isCaptionsSelectorShowing() ? this._player.hideCaptionsSelector() : this._player.showCaptionsSelector() : 1 === e.length ? (t[0].mode = "hidden",
                                a.setItem("cc-disabled", !0)) : (t[0].mode = "showing",
                                    a.removeItem("cc-disabled")),
                                c && this._player.getMediaElement().textTracks.dispatchEvent(new CustomEvent("change")),
                                setTimeout(this._updateState)
                        }
                    }, {
                        key: "destroy",
                        value: function () {
                            this._player.off("addtrack", this._updateState),
                                this._player.off("change", this._updateState),
                                this._player.off("removetrack", this._updateState),
                                function e(t, i, n) {
                                    null === t && (t = Function.prototype);
                                    var r = Object.getOwnPropertyDescriptor(t, i);
                                    if (void 0 === r) {
                                        var o = Object.getPrototypeOf(t);
                                        return null === o ? void 0 : e(o, i, n)
                                    }
                                    if ("value" in r)
                                        return r.value;
                                    var s = r.get;
                                    return void 0 !== s ? s.call(n) : void 0
                                }(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "destroy", this).call(this)
                        }
                    }]),
                    t
            }();
        t.exports = u
    }
        , {
        "../../texttracks/getFilteredTextTracks": 350,
        "../../utils/Storage": 412,
        "./ButtonBehavior": 359,
        "@babel/runtime/helpers/interopRequireDefault": 157,
        "@babel/runtime/helpers/typeof": 164,
        "@marcom/useragent-detect": 331
    }],
    361: [function (e, t, i) {
        "use strict";
        var n = e("@babel/runtime/helpers/interopRequireDefault")(e("@babel/runtime/helpers/typeof"))
            , r = function () {
                function e(e, t) {
                    for (var i = 0; i < t.length; i++) {
                        var n = t[i];
                        n.enumerable = n.enumerable || !1,
                            n.configurable = !0,
                            "value" in n && (n.writable = !0),
                            Object.defineProperty(e, n.key, n)
                    }
                }
                return function (t, i, n) {
                    return i && e(t.prototype, i),
                        n && e(t, n),
                        t
                }
            }();
        var o = "__CC_DISABLE"
            , s = e("./BaseBehavior")
            , a = e("@marcom/useragent-detect").browser
            , l = a.edge || a.ie || a.firefox
            , c = e("../localization/Localization")
            , u = e("../localization/LanguageMapping")
            , h = e("../../texttracks/getFilteredTextTracks")
            , d = e("../../texttracks/findMatchingTextTracks")
            , p = e("../../utils/Storage")
            , f = function (e) {
                function t(e, i) {
                    !function (e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, t);
                    var r = function (e, t) {
                        if (!e)
                            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !t || "object" !== (0,
                            n.default)(t) && "function" != typeof t ? e : t
                    }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, i));
                    return r._updateState(),
                        r
                }
                return function (e, t) {
                    if ("function" != typeof t && null !== t)
                        throw new TypeError("Super expression must either be null or a function, not " + (0,
                            n.default)(t));
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }),
                        t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                }(t, s),
                    r(t, [{
                        key: "_addViewListeners",
                        value: function () {
                            this._onSelected = this._onSelected.bind(this),
                                this._view.on("ItemSelected", this._onSelected)
                        }
                    }, {
                        key: "_updateState",
                        value: function () {
                            var e = this
                                , t = !0
                                , i = h(this._player.getTextTracks()).map(function (i) {
                                    var n = ""
                                        , r = d(i, e._player.getTextTracks());
                                    if (i.label && "en" !== i.language && "English" !== i.language && i.label !== i.language) {
                                        var o = i.language && i.language.replace(/_/g, "-");
                                        n = i.label + " (" + (u[o] || i.language) + ")"
                                    }
                                    ("showing" === i.mode || r.length && r.some(function (e) {
                                        return "showing" === e.mode
                                    })) && (t = !1);
                                    var s = {
                                        label: n || i.label || i.language || i.srclang && ("en" === i.srclang.toLowerCase() ? "English" : i.srclang) || "Unknown CC",
                                        language: i.language
                                    };
                                    return Object.defineProperty(s, "enabled", {
                                        get: function () {
                                            var e = "hidden";
                                            return ("showing" === i.mode || r.length && r.some(function (e) {
                                                return "showing" === e.mode
                                            })) && (e = "showing"),
                                                "showing" === e
                                        },
                                        set: function (e) {
                                            i.mode = e ? "showing" : "hidden";
                                            var t = !0
                                                , n = !1
                                                , o = void 0;
                                            try {
                                                for (var s, a = r[Symbol.iterator](); !(t = (s = a.next()).done); t = !0) {
                                                    s.value.mode = e ? "showing" : "hidden"
                                                }
                                            } catch (e) {
                                                n = !0,
                                                    o = e
                                            } finally {
                                                try {
                                                    !t && a.return && a.return()
                                                } finally {
                                                    if (n)
                                                        throw o
                                                }
                                            }
                                        }
                                    }),
                                        s
                                });
                            this._view.setItems([{
                                label: c.getTranslation().captionsoff,
                                language: o,
                                enabled: t
                            }].concat(i))
                        }
                    }, {
                        key: "_addPlayerListeners",
                        value: function () {
                            this._updateState = this._updateState.bind(this),
                                this._player.on("addtrack", this._updateState),
                                this._player.on("change", this._updateState),
                                this._player.on("removetrack", this._updateState)
                        }
                    }, {
                        key: "_onSelected",
                        value: function (e) {
                            var t = e.detail;
                            this._player.getVisibleTextTracks().forEach(function (e) {
                                e.mode = "hidden"
                            }),
                                t.language !== o ? (t.enabled = !0,
                                    p.removeItem("cc-disabled")) : p.setItem("cc-disabled", !0),
                                l && this._player.getMediaElement().textTracks.dispatchEvent(new CustomEvent("change")),
                                setTimeout(this._updateState)
                        }
                    }, {
                        key: "destroy",
                        value: function () {
                            this._player.off("addtrack", this._updateState),
                                this._player.off("change", this._updateState),
                                this._player.off("removetrack", this._updateState),
                                this._view.off("ItemSelected", this._onSelected)
                        }
                    }]),
                    t
            }();
        t.exports = f
    }
        , {
        "../../texttracks/findMatchingTextTracks": 349,
        "../../texttracks/getFilteredTextTracks": 350,
        "../../utils/Storage": 412,
        "../localization/LanguageMapping": 397,
        "../localization/Localization": 398,
        "./BaseBehavior": 358,
        "@babel/runtime/helpers/interopRequireDefault": 157,
        "@babel/runtime/helpers/typeof": 164,
        "@marcom/useragent-detect": 331
    }],
    362: [function (e, t, i) {
        "use strict";
        var n = e("@babel/runtime/helpers/interopRequireDefault")(e("@babel/runtime/helpers/typeof"))
            , r = function () {
                function e(e, t) {
                    for (var i = 0; i < t.length; i++) {
                        var n = t[i];
                        n.enumerable = n.enumerable || !1,
                            n.configurable = !0,
                            "value" in n && (n.writable = !0),
                            Object.defineProperty(e, n.key, n)
                    }
                }
                return function (t, i, n) {
                    return i && e(t.prototype, i),
                        n && e(t, n),
                        t
                }
            }();
        var o = e("./ButtonBehavior")
            , s = function (e) {
                function t(e, i) {
                    !function (e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, t);
                    var r = function (e, t) {
                        if (!e)
                            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !t || "object" !== (0,
                            n.default)(t) && "function" != typeof t ? e : t
                    }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, i));
                    return r._player.getFullScreenEnabled() && r._updateState(),
                        r
                }
                return function (e, t) {
                    if ("function" != typeof t && null !== t)
                        throw new TypeError("Super expression must either be null or a function, not " + (0,
                            n.default)(t));
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }),
                        t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                }(t, o),
                    r(t, [{
                        key: "_addPlayerListeners",
                        value: function () {
                            this._updateState = this._updateState.bind(this),
                                this._player.on("fullscreen:change", this._updateState)
                        }
                    }, {
                        key: "_updateState",
                        value: function () {
                            this._view.setState(this._player.isFullscreen() ? "on" : "off")
                        }
                    }, {
                        key: "_onClick",
                        value: function () {
                            this._player.toggleFullscreen(!this._player.isFullscreen())
                        }
                    }, {
                        key: "destroy",
                        value: function () {
                            this._player.off("fullscreen:change", this._updateState),
                                function e(t, i, n) {
                                    null === t && (t = Function.prototype);
                                    var r = Object.getOwnPropertyDescriptor(t, i);
                                    if (void 0 === r) {
                                        var o = Object.getPrototypeOf(t);
                                        return null === o ? void 0 : e(o, i, n)
                                    }
                                    if ("value" in r)
                                        return r.value;
                                    var s = r.get;
                                    return void 0 !== s ? s.call(n) : void 0
                                }(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "destroy", this).call(this)
                        }
                    }]),
                    t
            }();
        t.exports = s
    }
        , {
        "./ButtonBehavior": 359,
        "@babel/runtime/helpers/interopRequireDefault": 157,
        "@babel/runtime/helpers/typeof": 164
    }],
    363: [function (e, t, i) {
        "use strict";
        var n = e("@babel/runtime/helpers/interopRequireDefault")(e("@babel/runtime/helpers/typeof"))
            , r = function () {
                function e(e, t) {
                    for (var i = 0; i < t.length; i++) {
                        var n = t[i];
                        n.enumerable = n.enumerable || !1,
                            n.configurable = !0,
                            "value" in n && (n.writable = !0),
                            Object.defineProperty(e, n.key, n)
                    }
                }
                return function (t, i, n) {
                    return i && e(t.prototype, i),
                        n && e(t, n),
                        t
                }
            }();
        var o = e("./ButtonBehavior")
            , s = e("../../utils/liveStreamLookback")
            , a = function (e) {
                function t(e, i) {
                    !function (e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, t);
                    var r = function (e, t) {
                        if (!e)
                            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !t || "object" !== (0,
                            n.default)(t) && "function" != typeof t ? e : t
                    }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, i));
                    return r._updateState = r._updateState.bind(r),
                        r._onPause = r._onPause.bind(r),
                        r._player.on("timeupdate", r._updateState),
                        r._player.on("pause", r._onPause),
                        r
                }
                return function (e, t) {
                    if ("function" != typeof t && null !== t)
                        throw new TypeError("Super expression must either be null or a function, not " + (0,
                            n.default)(t));
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }),
                        t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                }(t, o),
                    r(t, [{
                        key: "_updateState",
                        value: function () {
                            this._player.getDuration() - this._player.getCurrentTime() < s ? this._view.setState("on") : this._view.setState("off")
                        }
                    }, {
                        key: "_onClick",
                        value: function () {
                            var e = this;
                            this._player.goToLive(),
                                this._player.on("durationchange", function t() {
                                    var i = e._player.getDuration() - e._player.getCurrentTime();
                                    e._player.off("durationchange", t),
                                        i > s && e._player.goToLive()
                                }),
                                this._player.play()
                        }
                    }, {
                        key: "_onPause",
                        value: function () {
                            this._view.setState("off")
                        }
                    }, {
                        key: "destroy",
                        value: function () {
                            this._player.off("timeupdate", this._updateState),
                                function e(t, i, n) {
                                    null === t && (t = Function.prototype);
                                    var r = Object.getOwnPropertyDescriptor(t, i);
                                    if (void 0 === r) {
                                        var o = Object.getPrototypeOf(t);
                                        return null === o ? void 0 : e(o, i, n)
                                    }
                                    if ("value" in r)
                                        return r.value;
                                    var s = r.get;
                                    return void 0 !== s ? s.call(n) : void 0
                                }(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "destroy", this).call(this)
                        }
                    }]),
                    t
            }();
        t.exports = a
    }
        , {
        "../../utils/liveStreamLookback": 415,
        "./ButtonBehavior": 359,
        "@babel/runtime/helpers/interopRequireDefault": 157,
        "@babel/runtime/helpers/typeof": 164
    }],
    364: [function (e, t, i) {
        "use strict";
        var n = e("@babel/runtime/helpers/interopRequireDefault")(e("@babel/runtime/helpers/typeof"))
            , r = function () {
                function e(e, t) {
                    for (var i = 0; i < t.length; i++) {
                        var n = t[i];
                        n.enumerable = n.enumerable || !1,
                            n.configurable = !0,
                            "value" in n && (n.writable = !0),
                            Object.defineProperty(e, n.key, n)
                    }
                }
                return function (t, i, n) {
                    return i && e(t.prototype, i),
                        n && e(t, n),
                        t
                }
            }();
        var o = e("./ButtonBehavior")
            , s = function (e) {
                function t(e, i) {
                    !function (e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, t);
                    var r = function (e, t) {
                        if (!e)
                            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !t || "object" !== (0,
                            n.default)(t) && "function" != typeof t ? e : t
                    }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, i));
                    return r._updateState(),
                        r
                }
                return function (e, t) {
                    if ("function" != typeof t && null !== t)
                        throw new TypeError("Super expression must either be null or a function, not " + (0,
                            n.default)(t));
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }),
                        t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                }(t, o),
                    r(t, [{
                        key: "_updateState",
                        value: function () {
                            this._view.setState(this._player.getMuted() ? "on" : "off")
                        }
                    }, {
                        key: "_addPlayerListeners",
                        value: function () {
                            this._updateState = this._updateState.bind(this),
                                this._player.on("volumechange", this._updateState)
                        }
                    }, {
                        key: "_onClick",
                        value: function () {
                            this._player.getMuted() ? (this._player.setMuted(!1),
                                0 === this._player.getVolume() && this._player.setVolume(.1)) : this._player.setMuted(!0)
                        }
                    }, {
                        key: "destroy",
                        value: function () {
                            this._player.off("volumechange", this._updateState),
                                function e(t, i, n) {
                                    null === t && (t = Function.prototype);
                                    var r = Object.getOwnPropertyDescriptor(t, i);
                                    if (void 0 === r) {
                                        var o = Object.getPrototypeOf(t);
                                        return null === o ? void 0 : e(o, i, n)
                                    }
                                    if ("value" in r)
                                        return r.value;
                                    var s = r.get;
                                    return void 0 !== s ? s.call(n) : void 0
                                }(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "destroy", this).call(this)
                        }
                    }]),
                    t
            }();
        t.exports = s
    }
        , {
        "./ButtonBehavior": 359,
        "@babel/runtime/helpers/interopRequireDefault": 157,
        "@babel/runtime/helpers/typeof": 164
    }],
    365: [function (e, t, i) {
        "use strict";
        var n = e("@babel/runtime/helpers/interopRequireDefault")(e("@babel/runtime/helpers/typeof"))
            , r = function () {
                function e(e, t) {
                    for (var i = 0; i < t.length; i++) {
                        var n = t[i];
                        n.enumerable = n.enumerable || !1,
                            n.configurable = !0,
                            "value" in n && (n.writable = !0),
                            Object.defineProperty(e, n.key, n)
                    }
                }
                return function (t, i, n) {
                    return i && e(t.prototype, i),
                        n && e(t, n),
                        t
                }
            }()
            , o = function e(t, i, n) {
                null === t && (t = Function.prototype);
                var r = Object.getOwnPropertyDescriptor(t, i);
                if (void 0 === r) {
                    var o = Object.getPrototypeOf(t);
                    return null === o ? void 0 : e(o, i, n)
                }
                if ("value" in r)
                    return r.value;
                var s = r.get;
                return void 0 !== s ? s.call(n) : void 0
            };
        var s = e("./ButtonBehavior")
            , a = function (e) {
                function t(e, i) {
                    return function (e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, t),
                        function (e, t) {
                            if (!e)
                                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return !t || "object" !== (0,
                                n.default)(t) && "function" != typeof t ? e : t
                        }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, i))
                }
                return function (e, t) {
                    if ("function" != typeof t && null !== t)
                        throw new TypeError("Super expression must either be null or a function, not " + (0,
                            n.default)(t));
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }),
                        t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                }(t, s),
                    r(t, [{
                        key: "_initialize",
                        value: function () {
                            this._updateButtonState = this._updateButtonState.bind(this),
                                this._player.supportsPictureInPicture() && (this._updateButtonState(),
                                    this._player.on("webkitpresentationmodechanged", this._updateButtonState)),
                                o(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "_initialize", this).call(this)
                        }
                    }, {
                        key: "_onClick",
                        value: function () {
                            this._player.setPictureInPicture(!this._player.isPictureInPicture())
                        }
                    }, {
                        key: "_updateButtonState",
                        value: function () {
                            this._view.setState(this._player.isPictureInPicture() ? "on" : "off")
                        }
                    }, {
                        key: "destroy",
                        value: function () {
                            this._player.off("webkitpresentationmodechanged", this._updateButtonState),
                                o(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "destroy", this).call(this)
                        }
                    }]),
                    t
            }();
        t.exports = a
    }
        , {
        "./ButtonBehavior": 359,
        "@babel/runtime/helpers/interopRequireDefault": 157,
        "@babel/runtime/helpers/typeof": 164
    }],
    366: [function (e, t, i) {
        "use strict";
        var n = e("@babel/runtime/helpers/interopRequireDefault")(e("@babel/runtime/helpers/typeof"))
            , r = function () {
                function e(e, t) {
                    for (var i = 0; i < t.length; i++) {
                        var n = t[i];
                        n.enumerable = n.enumerable || !1,
                            n.configurable = !0,
                            "value" in n && (n.writable = !0),
                            Object.defineProperty(e, n.key, n)
                    }
                }
                return function (t, i, n) {
                    return i && e(t.prototype, i),
                        n && e(t, n),
                        t
                }
            }();
        var o = e("./ButtonBehavior")
            , s = function (e) {
                function t(e, i) {
                    !function (e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, t);
                    var r = function (e, t) {
                        if (!e)
                            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !t || "object" !== (0,
                            n.default)(t) && "function" != typeof t ? e : t
                    }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, i));
                    return r._setPlayingState(),
                        r
                }
                return function (e, t) {
                    if ("function" != typeof t && null !== t)
                        throw new TypeError("Super expression must either be null or a function, not " + (0,
                            n.default)(t));
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }),
                        t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                }(t, o),
                    r(t, [{
                        key: "_addPlayerListeners",
                        value: function () {
                            this._setPlayingState = this._setPlayingState.bind(this),
                                this._player.on("play", this._setPlayingState),
                                this._player.on("playing", this._setPlayingState),
                                this._player.on("pause", this._setPlayingState),
                                this._player.on("ended", this._setPlayingState)
                        }
                    }, {
                        key: "_onClick",
                        value: function () {
                            this._togglePlay()
                        }
                    }, {
                        key: "_setPlayingState",
                        value: function () {
                            this._player.getEnded() ? this._view.setState("ended") : this._view.setState(this._player.getPaused() ? "paused" : "playing")
                        }
                    }, {
                        key: "_togglePlay",
                        value: function () {
                            this._player.getPaused() || this._player.getEnded() ? this._player.play() : this._player.pause()
                        }
                    }, {
                        key: "destroy",
                        value: function () {
                            this._player.off("play", this._setPlayingState),
                                this._player.off("pause", this._setPlayingState),
                                this._player.off("playing", this._setPlayingState),
                                this._player.off("ended", this._setPlayingState),
                                function e(t, i, n) {
                                    null === t && (t = Function.prototype);
                                    var r = Object.getOwnPropertyDescriptor(t, i);
                                    if (void 0 === r) {
                                        var o = Object.getPrototypeOf(t);
                                        return null === o ? void 0 : e(o, i, n)
                                    }
                                    if ("value" in r)
                                        return r.value;
                                    var s = r.get;
                                    return void 0 !== s ? s.call(n) : void 0
                                }(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "destroy", this).call(this)
                        }
                    }]),
                    t
            }();
        t.exports = s
    }
        , {
        "./ButtonBehavior": 359,
        "@babel/runtime/helpers/interopRequireDefault": 157,
        "@babel/runtime/helpers/typeof": 164
    }],
    367: [function (e, t, i) {
        "use strict";
        var n = e("@babel/runtime/helpers/interopRequireDefault")(e("@babel/runtime/helpers/typeof"))
            , r = function () {
                function e(e, t) {
                    for (var i = 0; i < t.length; i++) {
                        var n = t[i];
                        n.enumerable = n.enumerable || !1,
                            n.configurable = !0,
                            "value" in n && (n.writable = !0),
                            Object.defineProperty(e, n.key, n)
                    }
                }
                return function (t, i, n) {
                    return i && e(t.prototype, i),
                        n && e(t, n),
                        t
                }
            }();
        var o = e("./BaseBehavior")
            , s = e("@marcom/ac-string/supplant")
            , a = e("@marcom/ac-raf-emitter/draw")
            , l = e("@marcom/ac-raf-emitter/cancelDraw")
            , c = e("../../utils/liveStreamLookback")
            , u = function (e) {
                function t(e, i) {
                    !function (e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, t);
                    var r = function (e, t) {
                        if (!e)
                            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !t || "object" !== (0,
                            n.default)(t) && "function" != typeof t ? e : t
                    }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, i));
                    return r._player.isDvr() ? r._liveStreamLookback = c : r._liveStreamLookback = 0,
                        r._visible = !1,
                        r._ariaTextTemplate = i.localization.currenttimetext,
                        r._onDurationChange(),
                        r._refreshChapters(),
                        r
                }
                return function (e, t) {
                    if ("function" != typeof t && null !== t)
                        throw new TypeError("Super expression must either be null or a function, not " + (0,
                            n.default)(t));
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }),
                        t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                }(t, o),
                    r(t, [{
                        key: "_addViewListeners",
                        value: function () {
                            this._onSliderGrab = this._onSliderGrab.bind(this),
                                this._onSliderChange = this._onSliderChange.bind(this),
                                this._onSliderRelease = this._onSliderRelease.bind(this),
                                this._onChapterClicked = this._onChapterClicked.bind(this),
                                this._onChapterFocusIn = this._onChapterFocusIn.bind(this),
                                this._onChapterFocusOut = this._onChapterFocusOut.bind(this),
                                this._view.on("grab", this._onSliderGrab),
                                this._view.on("chapter:click", this._onChapterClicked),
                                this._view.on("chapter:focusin", this._onChapterFocusIn),
                                this._view.on("chapter:focusout", this._onChapterFocusOut)
                        }
                    }, {
                        key: "_addPlayerListeners",
                        value: function () {
                            this._onTimeUpdate = this._onTimeUpdate.bind(this),
                                this._onPlay = this._onPlay.bind(this),
                                this._onPause = this._onPause.bind(this),
                                this._onEnded = this._onEnded.bind(this),
                                this._onDurationChange = this._onDurationChange.bind(this),
                                this._onProgress = this._onProgress.bind(this),
                                this._refreshChapters = this._refreshChapters.bind(this),
                                this._onRAF = this._onRAF.bind(this),
                                this._player.on("durationchange", this._onDurationChange),
                                this._player.on("loadstart", this._onEnded),
                                this._player.on("ended", this._onEnded),
                                this._player.on("timeupdate", this._onTimeUpdate),
                                this._player.on("progress", this._onProgress),
                                this._player.on("play", this._onPlay),
                                this._player.on("pause", this._onPause),
                                this._player.on("ended", this._onEnded),
                                this._player.on("chapters:change", this._refreshChapters)
                        }
                    }, {
                        key: "_onProgress",
                        value: function () {
                            this._view.setBufferedValue(this._player.getBufferedPercentage())
                        }
                    }, {
                        key: "_setIsPlaying",
                        value: function (e) {
                            e ? this._view.setState("is-playing") : this._view.clearState("is-playing")
                        }
                    }, {
                        key: "_onPlay",
                        value: function () {
                            this._setIsPlaying(!0),
                                this._player.isLive() || (l(this._timeUpdateInterval),
                                    this._raf = a(this._onRAF))
                        }
                    }, {
                        key: "_onRAF",
                        value: function () {
                            this._onTimeUpdate(),
                                this._timeUpdateInterval = a(this._onRAF)
                        }
                    }, {
                        key: "_onPause",
                        value: function () {
                            this._setIsPlaying(!1),
                                l(this._raf),
                                l(this._timeUpdateInterval),
                                this._onTimeUpdate()
                        }
                    }, {
                        key: "_onEnded",
                        value: function () {
                            this._onPause(),
                                this._updateSliderPosition(0)
                        }
                    }, {
                        key: "_onChapterClicked",
                        value: function (e) {
                            this._player.setCurrentTime(e["start-time"])
                        }
                    }, {
                        key: "_onChapterFocusIn",
                        value: function (e) {
                            this._chapterFocused = !0,
                                this._player.controls.overlays.setPopUpPosition(e["start-time"])
                        }
                    }, {
                        key: "_onChapterFocusOut",
                        value: function (e) {
                            this._chapterFocused = !1
                        }
                    }, {
                        key: "_refreshChapters",
                        value: function () {
                            var e = this._cachedDuration = Math.max(0, this._player.getDuration() - this._liveStreamLookback);
                            e && !isNaN(e) && e !== Math.Infinity ? this._view.setChapters(this._player.getChapters().map(function (t) {
                                var i = t["start-time"] / e * 100;
                                return Object.assign({}, t, {
                                    startTimeInPercentage: i + "%",
                                    startTime: i,
                                    "start-time": parseFloat(t["start-time"])
                                })
                            })) : this._view.setChapters([])
                        }
                    }, {
                        key: "_onSliderGrab",
                        value: function () {
                            this._chapterFocused || (this._player.off("timeupdate", this._onTimeUpdate),
                                l(this._timeUpdateInterval),
                                this._view.off("grab", this._onSliderGrab),
                                this._view.on("change", this._onSliderChange),
                                this._view.on("release", this._onSliderRelease),
                                this._onPause())
                        }
                    }, {
                        key: "_onSliderRelease",
                        value: function () {
                            this._chapterFocused || (this._view.off("change", this._onSliderChange),
                                this._view.off("release", this._onSliderRelease),
                                this._view.on("grab", this._onSliderGrab),
                                this._player.on("timeupdate", this._onTimeUpdate),
                                this._newCurrentTime && this._setPlayerCurrentTime(this._newCurrentTime),
                                this._newCurrentTime = null,
                                this._player.getPaused() || this._onPlay())
                        }
                    }, {
                        key: "_getDuration",
                        value: function () {
                            return this._cachedDuration && isNaN(this._cachedDuration) || (this._cachedDuration = Math.max(0, this._player.getDuration() - this._liveStreamLookback / 2)),
                                this._cachedDuration
                        }
                    }, {
                        key: "_getTimeAsPercent",
                        value: function () {
                            return this._player.getCurrentTime() / this._getDuration()
                        }
                    }, {
                        key: "_onDurationChange",
                        value: function () {
                            this._cachedDuration = Math.max(0, this._player.getDuration() - this._liveStreamLookback / 2),
                                this._updateSliderPosition(this._getTimeAsPercent()),
                                this._player.getPaused() || this._onPlay(),
                                this._refreshChapters(),
                                0 === this._cachedDuration || isNaN(this._cachedDuration) ? this._view.hide() : this._view.show()
                        }
                    }, {
                        key: "_onSliderChange",
                        value: function () {
                            if (!this._player.getEnded() && !isNaN(this._getDuration()) && 0 !== this._getDuration()) {
                                var e = this._view.getValue();
                                this._newCurrentTime = e * this._getDuration(),
                                    this._setAriaValueText(e * this._getDuration()),
                                    this._updateScrubbedValue()
                            }
                        }
                    }, {
                        key: "_onTimeUpdate",
                        value: function () {
                            this._updateSliderPosition(this._getTimeAsPercent())
                        }
                    }, {
                        key: "_updateSliderPosition",
                        value: function (e) {
                            this._view.setValue(e),
                                this._setAriaValueText(e * this._getDuration()),
                                this._updateScrubbedValue(),
                                this._visible || isNaN(this._getDuration()) || (this._view.show(),
                                    this._visible = !0)
                        }
                    }, {
                        key: "_setAriaValueText",
                        value: function (e) {
                            var t = Math.floor(e / 60)
                                , i = Math.ceil(e % 60);
                            this._view.setAriaValueText(s(this._ariaTextTemplate, {
                                minutes: t,
                                seconds: i
                            }))
                        }
                    }, {
                        key: "_updateScrubbedValue",
                        value: function () {
                            this._view.setScrubbedValue()
                        }
                    }, {
                        key: "_setPlayerCurrentTime",
                        value: function (e) {
                            this._player.setCurrentTime(e)
                        }
                    }, {
                        key: "_removeEventListeners",
                        value: function () {
                            this._player.chapters && this._player.chapters.off("change", this._refreshChapters),
                                this._player.off("durationchange", this._onDurationChange),
                                this._player.off("loadstart", this._onEnded),
                                this._player.off("ended", this._onEnded),
                                this._player.off("timeupdate", this._onTimeUpdate),
                                this._player.off("progress", this._onTimeUpdate),
                                this._view.off("change", this._onSliderChange),
                                this._view.off("release", this._onSliderRelease),
                                this._view.off("grab", this._onSliderGrab),
                                this._view.off("chapter:click", this._onChapterClicked),
                                this._view.off("chapter:focusin", this._onChapterFocusIn),
                                this._view.off("chapter:focusout", this._onChapterFocusOut),
                                this._player.off("play", this._onPlay),
                                this._player.off("pause", this._onPause),
                                this._player.off("ended", this._onPause),
                                this._player.off("chapters:change", this._refreshChapters)
                        }
                    }, {
                        key: "destroy",
                        value: function () {
                            this._removeEventListeners(),
                                l(this._raf),
                                l(this._timeUpdateInterval),
                                this._view = null
                        }
                    }]),
                    t
            }();
        t.exports = u
    }
        , {
        "../../utils/liveStreamLookback": 415,
        "./BaseBehavior": 358,
        "@babel/runtime/helpers/interopRequireDefault": 157,
        "@babel/runtime/helpers/typeof": 164,
        "@marcom/ac-raf-emitter/cancelDraw": 272,
        "@marcom/ac-raf-emitter/draw": 274,
        "@marcom/ac-string/supplant": 314
    }],
    368: [function (e, t, i) {
        "use strict";
        var n = e("@babel/runtime/helpers/interopRequireDefault")(e("@babel/runtime/helpers/typeof"))
            , r = function () {
                function e(e, t) {
                    for (var i = 0; i < t.length; i++) {
                        var n = t[i];
                        n.enumerable = n.enumerable || !1,
                            n.configurable = !0,
                            "value" in n && (n.writable = !0),
                            Object.defineProperty(e, n.key, n)
                    }
                }
                return function (t, i, n) {
                    return i && e(t.prototype, i),
                        n && e(t, n),
                        t
                }
            }();
        var o = e("./ButtonBehavior")
            , s = function (e) {
                function t(e, i) {
                    !function (e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, t);
                    var r = function (e, t) {
                        if (!e)
                            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !t || "object" !== (0,
                            n.default)(t) && "function" != typeof t ? e : t
                    }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, i));
                    return r._player.states && r._updateState(),
                        r
                }
                return function (e, t) {
                    if ("function" != typeof t && null !== t)
                        throw new TypeError("Super expression must either be null or a function, not " + (0,
                            n.default)(t));
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }),
                        t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                }(t, o),
                    r(t, [{
                        key: "_addPlayerListeners",
                        value: function () {
                            this._updateState = this._updateState.bind(this),
                                this._player.states && this._player.states.on("statechange", this._updateState)
                        }
                    }, {
                        key: "_updateState",
                        value: function () {
                            this._stateChanging = !1,
                                this._view.setState("sharing" === this._player.states.getCurrentState() ? "on" : "off")
                        }
                    }, {
                        key: "_onClick",
                        value: function () {
                            this._stateChanging || ("sharing" === this._player.states.getCurrentState() ? (this._view.setState("off"),
                                this._player.states.setState("none")) : (this._view.setState("on"),
                                    this._player.states.setState("sharing")),
                                this._stateChanging = !0)
                        }
                    }, {
                        key: "destroy",
                        value: function () {
                            this._player.states && this._player.states.off("statechange", this._updateState),
                                function e(t, i, n) {
                                    null === t && (t = Function.prototype);
                                    var r = Object.getOwnPropertyDescriptor(t, i);
                                    if (void 0 === r) {
                                        var o = Object.getPrototypeOf(t);
                                        return null === o ? void 0 : e(o, i, n)
                                    }
                                    if ("value" in r)
                                        return r.value;
                                    var s = r.get;
                                    return void 0 !== s ? s.call(n) : void 0
                                }(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "destroy", this).call(this)
                        }
                    }]),
                    t
            }();
        t.exports = s
    }
        , {
        "./ButtonBehavior": 359,
        "@babel/runtime/helpers/interopRequireDefault": 157,
        "@babel/runtime/helpers/typeof": 164
    }],
    369: [function (e, t, i) {
        "use strict";
        var n = e("@babel/runtime/helpers/interopRequireDefault")(e("@babel/runtime/helpers/typeof"))
            , r = function () {
                function e(e, t) {
                    for (var i = 0; i < t.length; i++) {
                        var n = t[i];
                        n.enumerable = n.enumerable || !1,
                            n.configurable = !0,
                            "value" in n && (n.writable = !0),
                            Object.defineProperty(e, n.key, n)
                    }
                }
                return function (t, i, n) {
                    return i && e(t.prototype, i),
                        n && e(t, n),
                        t
                }
            }();
        var o = e("./BaseBehavior")
            , s = e("../sharing/SharingModule")
            , a = function (e) {
                function t(e, i) {
                    !function (e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, t);
                    var r = function (e, t) {
                        if (!e)
                            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !t || "object" !== (0,
                            n.default)(t) && "function" != typeof t ? e : t
                    }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, i));
                    return r._updateState(),
                        r
                }
                return function (e, t) {
                    if ("function" != typeof t && null !== t)
                        throw new TypeError("Super expression must either be null or a function, not " + (0,
                            n.default)(t));
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }),
                        t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                }(t, o),
                    r(t, [{
                        key: "_updateState",
                        value: function () {
                            this.sharingModule = new s(Object.assign({}, {
                                player: this._player,
                                parentView: this._view
                            })),
                                this.sharingModule.setData(this._player.options.sharing),
                                this._view.el.innerHTML = "",
                                this._view.el.appendChild(this.sharingModule.el)
                        }
                    }]),
                    t
            }();
        t.exports = a
    }
        , {
        "../sharing/SharingModule": 403,
        "./BaseBehavior": 358,
        "@babel/runtime/helpers/interopRequireDefault": 157,
        "@babel/runtime/helpers/typeof": 164
    }],
    370: [function (e, t, i) {
        "use strict";
        var n = e("@babel/runtime/helpers/interopRequireDefault")(e("@babel/runtime/helpers/typeof"))
            , r = function () {
                function e(e, t) {
                    for (var i = 0; i < t.length; i++) {
                        var n = t[i];
                        n.enumerable = n.enumerable || !1,
                            n.configurable = !0,
                            "value" in n && (n.writable = !0),
                            Object.defineProperty(e, n.key, n)
                    }
                }
                return function (t, i, n) {
                    return i && e(t.prototype, i),
                        n && e(t, n),
                        t
                }
            }();
        var o = e("./BaseBehavior")
            , s = function (e) {
                function t(e, i) {
                    !function (e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, t);
                    var r = function (e, t) {
                        if (!e)
                            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !t || "object" !== (0,
                            n.default)(t) && "function" != typeof t ? e : t
                    }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, i));
                    return r._hideVolume(),
                        r._updateSliderVolumeValue(),
                        r
                }
                return function (e, t) {
                    if ("function" != typeof t && null !== t)
                        throw new TypeError("Super expression must either be null or a function, not " + (0,
                            n.default)(t));
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }),
                        t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                }(t, o),
                    r(t, [{
                        key: "_addViewListeners",
                        value: function () {
                            this._showVolume = this._showVolume.bind(this),
                                this._hideVolume = this._hideVolume.bind(this),
                                this._onSliderGrab = this._onSliderGrab.bind(this),
                                this._onSliderChange = this._onSliderChange.bind(this),
                                this._onSliderRelease = this._onSliderRelease.bind(this),
                                this._onFocusChange = this._onFocusChange.bind(this),
                                this._view.on("grab", this._onSliderGrab),
                                this._view.on("focuschange", this._onFocusChange)
                        }
                    }, {
                        key: "_addPlayerListeners",
                        value: function () {
                            this._updateSliderVolumeValue = this._updateSliderVolumeValue.bind(this),
                                this._onUserVolumeChange = this._onUserVolumeChange.bind(this),
                                this._player.once("durationchange", this._updateSliderVolumeValue),
                                this._player.on("volumechange", this._updateSliderVolumeValue),
                                this._player.on("uservolumechange", this._onUserVolumeChange)
                        }
                    }, {
                        key: "_onSliderGrab",
                        value: function () {
                            this._cachedVolume = this._player.getVolume(),
                                this._player.off("volumechange", this._updateSliderVolumeValue),
                                this._view.off("grab", this._onSliderGrab),
                                this._view.on("change", this._onSliderChange),
                                this._view.on("release", this._onSliderRelease)
                        }
                    }, {
                        key: "_onSliderRelease",
                        value: function () {
                            this._setPlayerVolume(this._view.getValue()),
                                this._view.off("change", this._onSliderChange),
                                this._view.off("release", this._onSliderRelease),
                                this._view.on("grab", this._onSliderGrab),
                                this._player.on("volumechange", this._updateSliderVolumeValue)
                        }
                    }, {
                        key: "_onSliderChange",
                        value: function () {
                            var e = this._view.getValue();
                            this._setPlayerVolume(e),
                                this._view.setScrubbedValue()
                        }
                    }, {
                        key: "_setPlayerVolume",
                        value: function (e) {
                            e ? (this._player.setMuted(!1),
                                this._player.setVolume(e / 100)) : (this._player.setMuted(!0),
                                    this._player.setVolume(this._cachedVolume))
                        }
                    }, {
                        key: "_showVolume",
                        value: function () {
                            this._view.show()
                        }
                    }, {
                        key: "_hideVolume",
                        value: function () {
                            this._view.hide()
                        }
                    }, {
                        key: "_onUserVolumeChange",
                        value: function () {
                            this._showVolume(),
                                clearTimeout(this._hideVolumeTimer),
                                this._view.isFocused() || (this._hideVolumeTimer = setTimeout(this._hideVolume, 1e3))
                        }
                    }, {
                        key: "_onFocusChange",
                        value: function () {
                            this._view.isFocused() ? this._showVolume() : this._hideVolume()
                        }
                    }, {
                        key: "_updateSliderVolumeValue",
                        value: function () {
                            if (this._player.getMuted())
                                this._view.setValue(0),
                                    this._view.setScrubbedValue();
                            else {
                                var e = this._player.getVolume();
                                this._view.setValue(100 * e),
                                    this._view.setScrubbedValue()
                            }
                        }
                    }, {
                        key: "_removeEventListeners",
                        value: function () {
                            this._player.off("durationchange", this._updateSliderVolumeValue),
                                this._player.off("volumechange", this._updateSliderVolumeValue),
                                this._player.off("uservolumechange", this._onUserVolumeChange),
                                this._view.off("change", this._onSliderChange),
                                this._view.off("release", this._onSliderRelease),
                                this._view.off("grab", this._onSliderGrab)
                        }
                    }, {
                        key: "destroy",
                        value: function () {
                            this._removeEventListeners()
                        }
                    }]),
                    t
            }();
        t.exports = s
    }
        , {
        "./BaseBehavior": 358,
        "@babel/runtime/helpers/interopRequireDefault": 157,
        "@babel/runtime/helpers/typeof": 164
    }],
    371: [function (e, t, i) {
        "use strict";
        t.exports = function e(t) {
            !function (e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }(this, e),
                this.el = document.createElement("div"),
                this.el.classList.add("blend-scrim")
        }
    }
        , {}],
    372: [function (e, t, i) {
        "use strict";
        var n = e("@babel/runtime/helpers/interopRequireDefault")(e("@babel/runtime/helpers/typeof"))
            , r = function () {
                function e(e, t) {
                    for (var i = 0; i < t.length; i++) {
                        var n = t[i];
                        n.enumerable = n.enumerable || !1,
                            n.configurable = !0,
                            "value" in n && (n.writable = !0),
                            Object.defineProperty(e, n.key, n)
                    }
                }
                return function (t, i, n) {
                    return i && e(t.prototype, i),
                        n && e(t, n),
                        t
                }
            }();
        var o = e("@marcom/ac-event-emitter-micro").EventEmitterMicro
            , s = "ac-slider-chapter-container"
            , a = "en"
            , l = "hidden-chapter"
            , c = e("@marcom/ac-string/supplant")
            , u = e("../localization/Localization")
            , h = function (e) {
                function t(e) {
                    !function (e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, t);
                    var i = function (e, t) {
                        if (!e)
                            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !t || "object" !== (0,
                            n.default)(t) && "function" != typeof t ? e : t
                    }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
                    i.el = document.createElement("button"),
                        i.el.className = s;
                    var r = e.titles.find(function (e) {
                        return e.language === a
                    }) || e.titles[0]
                        , o = u.getTranslation().chapter;
                    i._chapterMarker = document.createElement("div"),
                        i._chapterMarker.classList.add("ac-slider-chapter-marker"),
                        "0%" === e.startTimeInPercentage && i.el.classList.add(l),
                        i.el.style.left = e.startTimeInPercentage,
                        i.el.setAttribute("data-acv-chapter-time", e["start-time"]),
                        i.el.tabIndex = 0,
                        i._chapterData = e,
                        i.el.appendChild(i._chapterMarker);
                    var h = e["start-time"]
                        , d = Math.floor(h / 60)
                        , p = Math.ceil(h % 60);
                    return i._span = document.createElement("span"),
                        i._span.innerText = c(o, {
                            chaptertitle: r.title,
                            chaptertime: c(u.getTranslation().currenttimetext, {
                                minutes: d,
                                seconds: p
                            })
                        }),
                        i.el.firstElementChild.appendChild(i._span),
                        i._onClick = i._onClick.bind(i),
                        i._onMouseOver = i._onMouseOver.bind(i),
                        i._onMouseOut = i._onMouseOut.bind(i),
                        i._onFocusIn = i._onFocusIn.bind(i),
                        i._onFocusOut = i._onFocusOut.bind(i),
                        i._onMouseDown = i._onMouseDown.bind(i),
                        i.el.addEventListener("click", i._onClick),
                        i.el.addEventListener("focusin", i._onFocusIn),
                        i.el.addEventListener("focusout", i._onFocusOut),
                        i.el.addEventListener("mouseover", i._onMouseOver),
                        i.el.addEventListener("mouseout", i._onMouseOut),
                        i.el.addEventListener("mousemove", i._onMouseMove),
                        i.el.addEventListener("mousedown", i._onMouseDown),
                        i
                }
                return function (e, t) {
                    if ("function" != typeof t && null !== t)
                        throw new TypeError("Super expression must either be null or a function, not " + (0,
                            n.default)(t));
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }),
                        t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                }(t, o),
                    r(t, [{
                        key: "_onClick",
                        value: function (e) {
                            e.preventDefault(),
                                e.stopPropagation(),
                                this.trigger("click", this._chapterData)
                        }
                    }, {
                        key: "_onMouseOver",
                        value: function (e) {
                            e.stopPropagation(),
                                this.trigger("mouseover", this._chapterData)
                        }
                    }, {
                        key: "_onMouseOut",
                        value: function (e) {
                            this.trigger("mouseout", this._chapterData)
                        }
                    }, {
                        key: "_onMouseMove",
                        value: function (e) {
                            e.stopPropagation()
                        }
                    }, {
                        key: "_onMouseDown",
                        value: function (e) {
                            e.stopPropagation()
                        }
                    }, {
                        key: "_onFocusIn",
                        value: function (e) {
                            this.trigger("focusin", this._chapterData)
                        }
                    }, {
                        key: "_onFocusOut",
                        value: function (e) {
                            this.trigger("focusout", this._chapterData)
                        }
                    }, {
                        key: "destroy",
                        value: function () {
                            this.el.removeEventListener("click", this._onClick),
                                this.el.removeEventListener("focusin", this._onFocusIn),
                                this.el.removeEventListener("focusout", this._onFocusOut),
                                this.el.removeEventListener("mouseover", this._onMouseOver),
                                this.el.removeEventListener("mouseout", this._onMouseOut),
                                this.el.removeEventListener("mousemove", this._onMouseMove)
                        }
                    }]),
                    t
            }();
        t.exports = h
    }
        , {
        "../localization/Localization": 398,
        "@babel/runtime/helpers/interopRequireDefault": 157,
        "@babel/runtime/helpers/typeof": 164,
        "@marcom/ac-event-emitter-micro": 229,
        "@marcom/ac-string/supplant": 314
    }],
    373: [function (e, t, i) {
        "use strict";
        var n = function () {
            function e(e, t) {
                for (var i = 0; i < t.length; i++) {
                    var n = t[i];
                    n.enumerable = n.enumerable || !1,
                        n.configurable = !0,
                        "value" in n && (n.writable = !0),
                        Object.defineProperty(e, n.key, n)
                }
            }
            return function (t, i, n) {
                return i && e(t.prototype, i),
                    n && e(t, n),
                    t
            }
        }();
        var r = e("@marcom/ac-keyboard/Keyboard")
            , o = e("@marcom/useragent-detect")
            , s = o.os.ios || o.os.android
            , a = e("@marcom/ac-360")
            , l = function () {
                function e(t) {
                    !function (e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, e),
                        this._rootElement = t.rootElement,
                        this._player = t.player,
                        this._360 = this._player.get360(),
                        this.el = this._rootElement.querySelector(".compass-wrapper"),
                        this.compassRing = this.el.querySelector(".compass-ring"),
                        this.compassField = this.el.querySelector(".compass-field"),
                        this.compass = this.el.querySelector(".compass"),
                        this.compassArrows = this.el.querySelector(".compass-arrows"),
                        this.compassArrowLeft = this.el.querySelector(".compass-arrow-left"),
                        this.compassArrowRight = this.el.querySelector(".compass-arrow-right"),
                        this.compassArrowTop = this.el.querySelector(".compass-arrow-top"),
                        this.compassArrowBottom = this.el.querySelector(".compass-arrow-bottom"),
                        this._keyboard = new r(this.el),
                        this._arrowControls = this._player.get360().arrowControls,
                        this._bindMethods(),
                        this._addEventListeners()
                }
                return n(e, [{
                    key: "_bindMethods",
                    value: function () {
                        this._onFocusIn = this._onFocusIn.bind(this),
                            this._onFocusOut = this._onFocusOut.bind(this),
                            this._onCompassClick = this._onCompassClick.bind(this),
                            this._onCompassMouseEnter = this._onCompassMouseEnter.bind(this),
                            this._onCompassMouseLeave = this._onCompassMouseLeave.bind(this),
                            this._onCompassFocusIn = this._onCompassFocusIn.bind(this),
                            this._onCompassFocusOut = this._onCompassFocusOut.bind(this),
                            this._onRotationTransitionEnd = this._onRotationTransitionEnd.bind(this),
                            this._onCompassArrowsClick = this._onCompassArrowsClick.bind(this),
                            this._on360PositionChange = this._on360PositionChange.bind(this),
                            this._on360IconUpdate = this._on360IconUpdate.bind(this),
                            this._transitionTiming = this._transitionTiming.bind(this)
                    }
                }, {
                    key: "_addEventListeners",
                    value: function () {
                        this._player.once("controlsready", function () {
                            s || (this.compass.addEventListener("mouseenter", this._onCompassMouseEnter),
                                this.compass.addEventListener("mouseleave", this._onCompassMouseLeave)),
                                this.el.addEventListener("focusin", this._onFocusIn),
                                this.el.addEventListener("focusout", this._onFocusOut),
                                this.compass.addEventListener("click", this._onCompassClick),
                                this.compass.addEventListener("focusin", this._onCompassFocusIn),
                                this.compass.addEventListener("focusout", this._onCompassFocusOut),
                                this.compassArrows.addEventListener("click", this._onCompassArrowsClick),
                                this._360.on(a.POSITION_CHANGE, this._on360PositionChange),
                                this._360.on(a.ROTATION_START, this._transitionTiming),
                                this._360.on(a.ROTATION_COMPLETE, this._onRotationTransitionEnd)
                        }
                            .bind(this))
                    }
                }, {
                    key: "_removeEventListeners",
                    value: function () {
                        this.el.removeEventListener("focusin", this._onFocusIn),
                            this.el.removeEventListener("focusout", this._onFocusOut),
                            this.compass.removeEventListener("click", this._onCompassClick),
                            this.compass.removeEventListener("focusin", this._onCompassFocusIn),
                            this.compass.removeEventListener("focusout", this._onCompassFocusOut),
                            this.compass.removeEventListener("mouseenter", this._onCompassMouseEnter),
                            this.compass.removeEventListener("mouseleave", this._onCompassMouseLeave),
                            this.compassArrows.removeEventListener("click", this._onCompassArrowsClick),
                            this._360.off(a.POSITION_CHANGE, this._on360PositionChange),
                            this._360.off(a.ROTATION_START, this._transitionTiming),
                            this._360.off(a.ROTATION_COMPLETE, this._onRotationTransitionEnd)
                    }
                }, {
                    key: "_showCompassArrows",
                    value: function () {
                        this.el.classList.add("show-arrows")
                    }
                }, {
                    key: "_hideCompassArrows",
                    value: function () {
                        this.el.classList.remove("show-arrows")
                    }
                }, {
                    key: "_onRotationTransitionEnd",
                    value: function () {
                        this._compassIsRotating = !1,
                            this._360.off(a.ROTATION_UPDATE, this._on360IconUpdate)
                    }
                }, {
                    key: "_transitionTiming",
                    value: function (e) {
                        var t = e.time
                            , i = this._get360HorizontalAngle();
                        this._compassIsRotating = !0,
                            this.compassRing.style.transition = "transform " + t + "ms cubic-bezier(0.25,0.1,0,1)",
                            this.compassField.style.transition = "transform " + t + "ms cubic-bezier(0.25,0.1,0,1)";
                        i > 180 ? (this.compassRing.style.transform = "rotate(360deg)",
                            this.compassField.style.transform = "rotate(360deg)") : i < -180 ? (this.compassRing.style.transform = "rotate(360deg)",
                                this.compassField.style.transform = "rotate(360deg)") : (this.compassRing.style.transform = "rotate(0deg)",
                                    this.compassField.style.transform = "rotate(0deg)")
                    }
                }, {
                    key: "_on360IconUpdate",
                    value: function (e) {
                        this.compassRing.style.transition = "transform 0.1s ease",
                            this.compassRing.style.transform = "rotate(" + e.currentPosition.lon + "deg)",
                            this.compassField.style.transition = "transform 0.1s ease",
                            this.compassField.style.transform = "rotate(" + e.currentPosition.lon + "deg)"
                    }
                }, {
                    key: "_onCompassClick",
                    value: function (e) {
                        this._compassIsRotating || (this._player.get360().isAtOrigin ? (this._360.on(a.ROTATION_UPDATE, this._on360IconUpdate),
                            this._player.get360().oscillateLongitude()) : this._player.panToOrigin())
                    }
                }, {
                    key: "_onCompassArrowsClick",
                    value: function (e) {
                        switch (e.target) {
                            case this.compassArrowLeft:
                                this._arrowControls.leftArrowDown(e),
                                    this._arrowControls.leftArrowUp(e);
                                break;
                            case this.compassArrowRight:
                                this._arrowControls.rightArrowDown(e),
                                    this._arrowControls.rightArrowUp(e);
                                break;
                            case this.compassArrowTop:
                                this._arrowControls.upArrowDown(e),
                                    this._arrowControls.upArrowUp(e);
                                break;
                            case this.compassArrowBottom:
                                this._arrowControls.downArrowDown(e),
                                    this._arrowControls.downArrowUp(e)
                        }
                    }
                }, {
                    key: "_onFocusIn",
                    value: function (e) {
                        e.target !== this.compass && this._showCompassArrows()
                    }
                }, {
                    key: "_onFocusOut",
                    value: function (e) {
                        this._hideCompassArrows()
                    }
                }, {
                    key: "_onCompassFocusIn",
                    value: function (e) {
                        this._rotateFieldOfViewToOrigin()
                    }
                }, {
                    key: "_onCompassFocusOut",
                    value: function (e) {
                        var t = this._get360HorizontalAngle();
                        this.compassField.style.transform = "rotate(" + t + "deg)"
                    }
                }, {
                    key: "_rotateFieldOfViewToOrigin",
                    value: function () {
                        var e = this._get360HorizontalAngle();
                        this.compassField.style.transition = "transform 0.3s ease",
                            this.compassField.style.transform = e > 180 ? "rotate(360deg)" : e < -180 ? "rotate(-360deg)" : "rotate(0deg)"
                    }
                }, {
                    key: "_onCompassMouseEnter",
                    value: function (e) {
                        this._hovering = !0,
                            this._compassIsRotating || this._rotateFieldOfViewToOrigin()
                    }
                }, {
                    key: "_onCompassMouseLeave",
                    value: function (e) {
                        if (this._hovering = !1,
                            !this._compassIsRotating) {
                            var t = this._get360HorizontalAngle();
                            this.compassField.style.transition = "transform 0.3s ease",
                                this.compassField.style.transform = "rotate(" + t + "deg)"
                        }
                    }
                }, {
                    key: "_on360PositionChange",
                    value: function () {
                        var e = this._get360HorizontalAngle();
                        this.compassRing.style.transition = "none",
                            this.compassRing.style.transform = "rotate(" + e + "deg)",
                            this._hovering || (this.compassField.style.transition = "none",
                                this.compassField.style.transform = "rotate(" + e + "deg)")
                    }
                }, {
                    key: "_get360HorizontalAngle",
                    value: function () {
                        return this._player.get360().position.lon % 360
                    }
                }, {
                    key: "destroy",
                    value: function () {
                        this._removeEventListeners()
                    }
                }]),
                    e
            }();
        t.exports = l
    }
        , {
        "@marcom/ac-360": 177,
        "@marcom/ac-keyboard/Keyboard": 247,
        "@marcom/useragent-detect": 331
    }],
    374: [function (e, t, i) {
        "use strict";
        var n = function () {
            function e(e, t) {
                for (var i = 0; i < t.length; i++) {
                    var n = t[i];
                    n.enumerable = n.enumerable || !1,
                        n.configurable = !0,
                        "value" in n && (n.writable = !0),
                        Object.defineProperty(e, n.key, n)
                }
            }
            return function (t, i, n) {
                return i && e(t.prototype, i),
                    n && e(t, n),
                    t
            }
        }();
        var r = function () {
            function e(t) {
                !function (e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, e),
                    this._player = t.player,
                    this.el = this._player.el,
                    this._showControls = t.showControls,
                    this._hideControls = t.hideControls,
                    this._raiseControls = t.raiseControls,
                    this._lowerControls = t.lowerControls,
                    this._sendMouseDown = t.sendMouseDown,
                    this._controls = this._player.controls,
                    this._controlsVisible = t.controlsVisible,
                    this._controlsTimeoutDuration = t.controlsTimeoutDuration,
                    this._keyboardControl = t.keyboardControl,
                    this._lastMouseCoords = {},
                    this._elementEmitter = t.elementEmitter,
                    this._bindMethods(),
                    this._addEventListeners()
            }
            return n(e, [{
                key: "_bindMethods",
                value: function () {
                    this._onUserInteraction = this._onUserInteraction.bind(this),
                        this._onFullscreenChange = this._onFullscreenChange.bind(this),
                        this._onFullscreenWillExit = this._onFullscreenWillExit.bind(this),
                        this._onMouseOut = this._onMouseOut.bind(this),
                        this._onMouseLeave = this._onMouseLeave.bind(this),
                        this._onClick = this._onClick.bind(this),
                        this._onFocusIn = this._onFocusIn.bind(this),
                        this._onFocusOut = this._onFocusOut.bind(this),
                        this._onUserInteractionTimeout = this._onUserInteractionTimeout.bind(this)
                }
            }, {
                key: "_addEventListeners",
                value: function () {
                    this._controls.el.addEventListener("mousemove", this._onUserInteraction, !0),
                        this._controls.el.addEventListener("click", this._onClick, !0),
                        this._player.on("fullscreen:change", this._onFullscreenChange),
                        this._player.on("fullscreen:willexit", this._onFullscreenWillExit),
                        "onmouseleave" in this.el ? this._controls.el.addEventListener("mouseleave", this._onMouseLeave) : this._controls.el.addEventListener("mouseout", this._onMouseOut, !0),
                        this._keyboardControl && this._keyboardControl.on("keyboardinteraction", this._onUserInteraction),
                        this._elementEmitter.on("focusin", this._onFocusIn),
                        this._elementEmitter.on("focusout", this._onFocusOut)
                }
            }, {
                key: "_removeEventListeners",
                value: function () {
                    this._controls.el.removeEventListener("mousemove", this._onUserInteraction, !0),
                        this._controls.el.removeEventListener("click", this._onClick, !0),
                        this._player.off("fullscreen:change", this._onFullscreenChange),
                        this._player.off("fullscreen:willexit", this._onFullscreenWillExit),
                        "onmouseleave" in this.el ? this._controls.el.removeEventListener("mouseleave", this._onMouseLeave) : this._controls.el.removeEventListener("mouseout", this._onMouseOut, !0),
                        this._keyboardControl && this._keyboardControl.off("keyboardinteraction", this._onUserInteraction),
                        this._elementEmitter.off("focusin", this._onFocusIn),
                        this._elementEmitter.off("focusout", this._onFocusOut)
                }
            }, {
                key: "_shouldIgnoreUserInteraction",
                value: function (e) {
                    return !!(e && "focusin" !== e.type && e.target && this._isActiveArea(e.target))
                }
            }, {
                key: "_onUserInteraction",
                value: function (e, t) {
                    !e || "click" !== e.type && "focusin" !== e.type || this._player.isCaptionsSelectorShowing() && !e.target.classList.contains("controls-text-tracks-toggle-button") && "radio" !== e.target.getAttribute("role") && "radiogroup" !== e.target.getAttribute("role") && this._player.hideCaptionsSelector(),
                        !this._player.getCurrentSrc() || this._preventUserInteraction || !t && e && "mousemove" === e.type && this._lastMouseCoords.x === e.screenX && this._lastMouseCoords.y === e.screenY || (e && e.pageX && (this._lastMouseCoords = {
                            x: e.screenX,
                            y: e.screenY
                        }),
                            this._showControls(),
                            this._raiseControls(),
                            clearTimeout(this._userInteractionTimeout),
                            this._shouldIgnoreUserInteraction(e) || (this._userInteractionTimeout = window.setTimeout(this._onUserInteractionTimeout, this._controlsTimeoutDuration)))
                }
            }, {
                key: "_onUserInteractionTimeout",
                value: function () {
                    this._hideControls()
                }
            }, {
                key: "_onMouseLeave",
                value: function (e) {
                    window.clearTimeout(this._userInteractionTimeout),
                        this._hideControls(),
                        this._lowerControls(),
                        this._lastMouseCoords = {}
                }
            }, {
                key: "_onMouseOut",
                value: function (e) {
                    this._controls.el.contains(e.target) || e.target === this._controls.el || this._onMouseLeave()
                }
            }, {
                key: "_isActiveArea",
                value: function (e) {
                    for (; e !== this.el;) {
                        if (e.hasAttribute("data-acv-active-area"))
                            return !0;
                        e = e.parentNode
                    }
                    return !1
                }
            }, {
                key: "_onClick",
                value: function (e) {
                    this._hasFocus = !1,
                        this._onUserInteraction(e)
                }
            }, {
                key: "_onFullscreenWillExit",
                value: function () {
                    this.controls && (this.controls.el.display = "none")
                }
            }, {
                key: "_onFullscreenChange",
                value: function () {
                    var e = this;
                    this.controls && (this.controls.el.display = ""),
                        this._hideControls(),
                        this._lowerControls(),
                        this._preventUserInteraction = !0,
                        this._fullscreenChangeTimeout = setTimeout(function () {
                            e._preventUserInteraction = !1,
                                e._player.refreshSize()
                        }, 750),
                        this._player.refreshSize()
                }
            }, {
                key: "_onFocusIn",
                value: function (e) {
                    clearTimeout(this._focusOutTimer),
                        this._focusOutTimer = null,
                        this._hasFocus = !0,
                        this._onUserInteraction(e)
                }
            }, {
                key: "_onFocusOut",
                value: function (e) {
                    var t = this;
                    this._focusOutTimer = setTimeout(function () {
                        t._hasFocus && !t.el.contains(document.activeElement) && (t._hasFocus = !1,
                            t._hideControls(),
                            t._lowerControls())
                    }, 100)
                }
            }, {
                key: "destroy",
                value: function () {
                    clearTimeout(this._focusOutTimer),
                        clearTimeout(this._fullscreenChangeTimeout),
                        clearTimeout(this._userInteractionTimeout),
                        this._removeEventListeners()
                }
            }]),
                e
        }();
        t.exports = r
    }
        , {}],
    375: [function (e, t, i) {
        "use strict";
        var n = e("@babel/runtime/helpers/interopRequireDefault")(e("@babel/runtime/helpers/typeof"))
            , r = function () {
                function e(e, t) {
                    for (var i = 0; i < t.length; i++) {
                        var n = t[i];
                        n.enumerable = n.enumerable || !1,
                            n.configurable = !0,
                            "value" in n && (n.writable = !0),
                            Object.defineProperty(e, n.key, n)
                    }
                }
                return function (t, i, n) {
                    return i && e(t.prototype, i),
                        n && e(t, n),
                        t
                }
            }()
            , o = function e(t, i, n) {
                null === t && (t = Function.prototype);
                var r = Object.getOwnPropertyDescriptor(t, i);
                if (void 0 === r) {
                    var o = Object.getPrototypeOf(t);
                    return null === o ? void 0 : e(o, i, n)
                }
                if ("value" in r)
                    return r.value;
                var s = r.get;
                return void 0 !== s ? s.call(n) : void 0
            };
        var s = e("./DefaultControlsInteraction")
            , a = 500
            , l = 3e3
            , c = function (e) {
                function t(e) {
                    !function (e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, t);
                    var i = function (e, t) {
                        if (!e)
                            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !t || "object" !== (0,
                            n.default)(t) && "function" != typeof t ? e : t
                    }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                    return i._showCompass = e.showCompass,
                        i._hideCompass = e.hideCompass,
                        i._threesixtyElementsTimeoutDuration = e.threesixtyElementsTimeoutDuration || l,
                        i._dragEndThreshold = a,
                        i._mouseDownPosition = null,
                        i
                }
                return function (e, t) {
                    if ("function" != typeof t && null !== t)
                        throw new TypeError("Super expression must either be null or a function, not " + (0,
                            n.default)(t));
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }),
                        t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                }(t, s),
                    r(t, [{
                        key: "_bindMethods",
                        value: function () {
                            o(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "_bindMethods", this).call(this),
                                this._onMouseDown = this._onMouseDown.bind(this),
                                this._onMouseUp = this._onMouseUp.bind(this),
                                this._onDragging = this._onDragging.bind(this),
                                this._onClick = this._onClick.bind(this)
                        }
                    }, {
                        key: "_addEventListeners",
                        value: function () {
                            o(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "_addEventListeners", this).call(this),
                                this._controls.el.addEventListener("mousedown", this._onMouseDown),
                                this._controls.el.addEventListener("click", this._onClick)
                        }
                    }, {
                        key: "_removeEventListeners",
                        value: function () {
                            o(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "_removeEventListeners", this).call(this),
                                this._controls.el.removeEventListener("mousedown", this._onMouseDown)
                        }
                    }, {
                        key: "_onUserInteraction",
                        value: function (e) {
                            this._userWasRecentlyDragging || e && "mousemove" === e.type && this._lastMouseCoords.x === e.screenX && this._lastMouseCoords.y === e.screenY || this._dragging || (this._showCompass(),
                                clearTimeout(this._userHideMouse),
                                o(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "_onUserInteraction", this).call(this))
                        }
                    }, {
                        key: "_onUserInteractionTimeout",
                        value: function () {
                            var e = this;
                            o(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "_onUserInteractionTimeout", this).call(this),
                                clearTimeout(this._userHideMouse),
                                this._userHideMouse = setTimeout(function () {
                                    e._hideCompass()
                                }, this._threesixtyElementsTimeoutDuration)
                        }
                    }, {
                        key: "_onDragging",
                        value: function (e) {
                            var t = this;
                            !this._dragging && this._isActiveArea(e.target) || (this._dragging = !0,
                                this._player.el.classList.add("dragging"),
                                this._player.el.classList.add("recently-dragging"),
                                this._recentDragTimeout = setTimeout(function () {
                                    t._dragging && (t._hideControls(),
                                        t._userWasRecentlyDragging = !0,
                                        clearTimeout(t._dragTimer),
                                        t._dragTimer = setTimeout(function () {
                                            t._userWasRecentlyDragging = !1,
                                                t._player.el.classList.remove("recently-dragging")
                                        }, t._dragEndThreshold))
                                }, 30),
                                clearTimeout(this._userInteractionTimeout),
                                clearTimeout(this._userHideMouse))
                        }
                    }, {
                        key: "_isDraggable",
                        value: function (e) {
                            return -1 !== [this._player.controls.compass.el, this._player.controls.playButtonElement].indexOf(e) || this._player.controls.compass.el.contains(e)
                        }
                    }, {
                        key: "_onMouseDown",
                        value: function (e) {
                            this._isActiveArea(e.target) && this._controlsVisible() && !this._isDraggable(e.target) || !this._isPlayingState() || (this._showControls(),
                                clearTimeout(this._userHideMouse),
                                clearTimeout(this._recentDragTimeout),
                                this._player.el.classList.remove("dragging"),
                                this._player.el.classList.remove("recently-dragging"),
                                this._mouseDownPosition = {
                                    x: e.x,
                                    y: e.y
                                },
                                window.addEventListener("mouseup", this._onMouseUp),
                                window.addEventListener("mousemove", this._onDragging),
                                this._sendMouseDown(e))
                        }
                    }, {
                        key: "_onMouseUp",
                        value: function (e) {
                            window.removeEventListener("mousemove", this._onDragging),
                                window.removeEventListener("mouseup", this._onMouseUp),
                                this._dragging && this._onUserInteractionTimeout(),
                                this._player.el.contains(e.target) || this._hideCompass(),
                                this._player.el.classList.remove("dragging"),
                                this._dragging = !1
                        }
                    }, {
                        key: "_onMouseLeave",
                        value: function (e) {
                            o(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "_onMouseLeave", this).call(this),
                                this._userWasRecentlyDragging = !1,
                                this._dragging || (clearTimeout(this._userHideMouse),
                                    this._hideCompass())
                        }
                    }, {
                        key: "_onClick",
                        value: function (e) {
                            this._player.controls.compass.el.contains(e.target) && this._userWasRecentlyDragging && e.stopPropagation(),
                                e.target !== this._player.controls.playButtonElement.parentElement && e.target !== this._controls.el.firstElementChild || null === this._mouseDownPosition || this._mouseDownPosition.x !== e.x || this._mouseDownPosition.y !== e.y || (this._mouseDownPosition = null,
                                    this._mouseDownTime = 1 / 0,
                                    this._dragging = !1,
                                    this._userWasRecentlyDragging = !1,
                                    clearTimeout(this._dragTimer),
                                    clearTimeout(this._recentDragTimeout))
                        }
                    }, {
                        key: "_isPlayingState",
                        value: function () {
                            return !this._player.controls.el.classList.contains("start-state") && !this._player.controls.el.classList.contains("end-state")
                        }
                    }]),
                    t
            }();
        t.exports = c
    }
        , {
        "./DefaultControlsInteraction": 374,
        "@babel/runtime/helpers/interopRequireDefault": 157,
        "@babel/runtime/helpers/typeof": 164
    }],
    376: [function (e, t, i) {
        "use strict";
        var n = e("@babel/runtime/helpers/interopRequireDefault")(e("@babel/runtime/helpers/typeof"))
            , r = function () {
                function e(e, t) {
                    for (var i = 0; i < t.length; i++) {
                        var n = t[i];
                        n.enumerable = n.enumerable || !1,
                            n.configurable = !0,
                            "value" in n && (n.writable = !0),
                            Object.defineProperty(e, n.key, n)
                    }
                }
                return function (t, i, n) {
                    return i && e(t.prototype, i),
                        n && e(t, n),
                        t
                }
            }()
            , o = function e(t, i, n) {
                null === t && (t = Function.prototype);
                var r = Object.getOwnPropertyDescriptor(t, i);
                if (void 0 === r) {
                    var o = Object.getPrototypeOf(t);
                    return null === o ? void 0 : e(o, i, n)
                }
                if ("value" in r)
                    return r.value;
                var s = r.get;
                return void 0 !== s ? s.call(n) : void 0
            };
        var s = e("./ThreeSixtyControlsInteraction")
            , a = function (e) {
                function t(e) {
                    !function (e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, t);
                    var i = function (e, t) {
                        if (!e)
                            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !t || "object" !== (0,
                            n.default)(t) && "function" != typeof t ? e : t
                    }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                    return i._controlsVisible = e.controlsVisible,
                        i
                }
                return function (e, t) {
                    if ("function" != typeof t && null !== t)
                        throw new TypeError("Super expression must either be null or a function, not " + (0,
                            n.default)(t));
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }),
                        t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                }(t, s),
                    r(t, [{
                        key: "_bindMethods",
                        value: function () {
                            o(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "_bindMethods", this).call(this),
                                this._onTouchStart = this._onTouchStart.bind(this),
                                this._onTouchEnd = this._onTouchEnd.bind(this),
                                this._onClick = this._onClick.bind(this)
                        }
                    }, {
                        key: "_addEventListeners",
                        value: function () {
                            this._controls.el.addEventListener("touchstart", this._onTouchStart, {
                                passive: !1
                            }),
                                this._controls.el.addEventListener("click", this._onClick),
                                this._controls.el.addEventListener("focusin", this._onFocusIn),
                                this._controls.el.addEventListener("focusout", this._onFocusOut)
                        }
                    }, {
                        key: "_removeEventListeners",
                        value: function () {
                            this._controls.el.removeEventListener("touchstart", this._onTouchStart),
                                this._controls.el.removeEventListener("touchend", this._onTouchEnd),
                                this._controls.el.removeEventListener("click", this._onClick),
                                this._controls.el.removeEventListener("focusin", this._onFocusIn),
                                this._controls.el.removeEventListener("focusout", this._onFocusOut)
                        }
                    }, {
                        key: "_onDragging",
                        value: function (e) {
                            o(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "_onDragging", this).call(this, e)
                        }
                    }, {
                        key: "_shouldIgnoreUserInteraction",
                        value: function (e) {
                            return !1
                        }
                    }, {
                        key: "_onClick",
                        value: function (e) {
                            e.target !== this._player.controls.compass.compassView && (this._controlsVisible() ? this._isActiveArea(e.target) || (this._hideControls(),
                                this._hideCompass()) : this._onUserInteraction(e))
                        }
                    }, {
                        key: "_onTouchStart",
                        value: function (e) {
                            e.target !== this._player.controls.playButtonElement && e.target !== this._controls.el.firstElementChild && e.target !== this._player.controls.compass.compassView && e.target !== this._player.controls.playButtonElement || (document.addEventListener("touchend", this._onTouchEnd),
                                window.addEventListener("touchmove", this._onDragging),
                                this._showCompass(),
                                this._touchDownTime = Date.now(),
                                this._sendMouseDown(e))
                        }
                    }, {
                        key: "_onTouchEnd",
                        value: function (e) {
                            document.removeEventListener("touchend", this._onTouchEnd),
                                window.removeEventListener("touchmove", this._onDragging),
                                this._onMouseUp(e)
                        }
                    }]),
                    t
            }();
        t.exports = a
    }
        , {
        "./ThreeSixtyControlsInteraction": 375,
        "@babel/runtime/helpers/interopRequireDefault": 157,
        "@babel/runtime/helpers/typeof": 164
    }],
    377: [function (e, t, i) {
        "use strict";
        var n = e("@marcom/useragent-detect")
            , r = n.os.ios || n.os.android
            , o = e("./DefaultControlsInteraction")
            , s = e("./ThreeSixtyControlsInteraction")
            , a = e("./ThreeSixtyMobileControlsInteraction");
        t.exports = function (e) {
            return e.threesixty ? r ? new a(e) : new s(e) : new o(e)
        }
    }
        , {
        "./DefaultControlsInteraction": 374,
        "./ThreeSixtyControlsInteraction": 375,
        "./ThreeSixtyMobileControlsInteraction": 376,
        "@marcom/useragent-detect": 331
    }],
    378: [function (e, t, i) {
        "use strict";
        var n = e("@babel/runtime/helpers/interopRequireDefault")(e("@babel/runtime/helpers/typeof"));
        var r = e("../../dom-emitter/DOMEmitterMicro")
            , o = function (e) {
                function t(e) {
                    return function (e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, t),
                        function (e, t) {
                            if (!e)
                                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return !t || "object" !== (0,
                                n.default)(t) && "function" != typeof t ? e : t
                        }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e))
                }
                return function (e, t) {
                    if ("function" != typeof t && null !== t)
                        throw new TypeError("Super expression must either be null or a function, not " + (0,
                            n.default)(t));
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }),
                        t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                }(t, r),
                    t
            }();
        t.exports = o
    }
        , {
        "../../dom-emitter/DOMEmitterMicro": 333,
        "@babel/runtime/helpers/interopRequireDefault": 157,
        "@babel/runtime/helpers/typeof": 164
    }],
    379: [function (e, t, i) {
        "use strict";
        var n = function () {
            function e(e, t) {
                for (var i = 0; i < t.length; i++) {
                    var n = t[i];
                    n.enumerable = n.enumerable || !1,
                        n.configurable = !0,
                        "value" in n && (n.writable = !0),
                        Object.defineProperty(e, n.key, n)
                }
            }
            return function (t, i, n) {
                return i && e(t.prototype, i),
                    n && e(t, n),
                    t
            }
        }();
        var r = function () {
            function e(t) {
                !function (e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, e),
                    this.el = t
            }
            return n(e, [{
                key: "show",
                value: function () {
                    this.el.classList.remove("hidden")
                }
            }, {
                key: "hide",
                value: function () {
                    this.el.classList.add("hidden")
                }
            }, {
                key: "destroy",
                value: function (e) { }
            }]),
                e
        }();
        t.exports = r
    }
        , {}],
    380: [function (e, t, i) {
        "use strict";
        var n = function () {
            function e(e, t) {
                for (var i = 0; i < t.length; i++) {
                    var n = t[i];
                    n.enumerable = n.enumerable || !1,
                        n.configurable = !0,
                        "value" in n && (n.writable = !0),
                        Object.defineProperty(e, n.key, n)
                }
            }
            return function (t, i, n) {
                return i && e(t.prototype, i),
                    n && e(t, n),
                    t
            }
        }();
        var r = function () {
            function e(t) {
                !function (e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, e),
                    this.el = t
            }
            return n(e, [{
                key: "setText",
                value: function (e) {
                    this.el.innerHTML = e
                }
            }]),
                e
        }();
        t.exports = r
    }
        , {}],
    381: [function (e, t, i) {
        "use strict";
        var n = e("@babel/runtime/helpers/interopRequireDefault")(e("@babel/runtime/helpers/typeof"))
            , r = function () {
                function e(e, t) {
                    for (var i = 0; i < t.length; i++) {
                        var n = t[i];
                        n.enumerable = n.enumerable || !1,
                            n.configurable = !0,
                            "value" in n && (n.writable = !0),
                            Object.defineProperty(e, n.key, n)
                    }
                }
                return function (t, i, n) {
                    return i && e(t.prototype, i),
                        n && e(t, n),
                        t
                }
            }();
        var o = e("../../dom-emitter/DOMEmitterMicro")
            , s = e("@marcom/ac-keyboard/Keyboard")
            , a = e("@marcom/ac-keyboard/keyMap")
            , l = function (e) {
                function t(e) {
                    !function (e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, t);
                    var i = function (e, t) {
                        if (!e)
                            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !t || "object" !== (0,
                            n.default)(t) && "function" != typeof t ? e : t
                    }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                    return i.el = e,
                        i._keyboard = new s(i.el),
                        i._addEventListeners(),
                        i
                }
                return function (e, t) {
                    if ("function" != typeof t && null !== t)
                        throw new TypeError("Super expression must either be null or a function, not " + (0,
                            n.default)(t));
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }),
                        t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                }(t, o),
                    r(t, [{
                        key: "_addEventListeners",
                        value: function () {
                            this._onClick = this._onClick.bind(this),
                                this._onKeyDown = this._onKeyDown.bind(this),
                                this.el.addEventListener("click", this._onClick),
                                this._keyboard.onDown(a.ARROW_UP, this._onKeyDown),
                                this._keyboard.onDown(a.ARROW_DOWN, this._onKeyDown)
                        }
                    }, {
                        key: "_removeEventListeners",
                        value: function () {
                            this.el.removeEventListener("click", this._onClick),
                                this._keyboard.onDown(a.ARROW_UP, this._onKeyDown),
                                this._keyboard.onDown(a.ARROW_DOWN, this._onKeyDown)
                        }
                    }, {
                        key: "setItems",
                        value: function (e) {
                            var t = this
                                , i = void 0;
                            this.el.innerHTML = "",
                                e.forEach(function (e) {
                                    var n = document.createElement("li");
                                    n.setAttribute("role", "radio"),
                                        e.enabled ? (n.classList.add("enabled"),
                                            n.setAttribute("aria-checked", "true"),
                                            n.setAttribute("tabIndex", 0),
                                            i = n) : (n.setAttribute("aria-checked", "false"),
                                                n.setAttribute("tabIndex", -1)),
                                        n.innerText = e.label,
                                        n.acvMetadata = e,
                                        t.el.appendChild(n)
                                }),
                                i && i.focus()
                        }
                    }, {
                        key: "_onKeyDown",
                        value: function (e) {
                            var t = e.target
                                , i = !1;
                            parseInt(e.keyCode) === a.ARROW_DOWN ? i = t.nextSibling : parseInt(e.keyCode) === a.ARROW_UP && (i = t.previousSibling),
                                i && (this.trigger("ItemSelected", i.acvMetadata),
                                    e.preventDefault(),
                                    e.stopPropagation())
                        }
                    }, {
                        key: "_onClick",
                        value: function (e) {
                            this.el !== e.target && this.el.contains(e.target) && this.trigger("ItemSelected", e.target.acvMetadata)
                        }
                    }, {
                        key: "show",
                        value: function () {
                            this.el.parentElement.classList.remove("hidden")
                        }
                    }, {
                        key: "hide",
                        value: function () {
                            this.el.parentElement.classList.add("hidden")
                        }
                    }, {
                        key: "destroy",
                        value: function () {
                            this._removeEventListeners()
                        }
                    }]),
                    t
            }();
        t.exports = l
    }
        , {
        "../../dom-emitter/DOMEmitterMicro": 333,
        "@babel/runtime/helpers/interopRequireDefault": 157,
        "@babel/runtime/helpers/typeof": 164,
        "@marcom/ac-keyboard/Keyboard": 247,
        "@marcom/ac-keyboard/keyMap": 250
    }],
    382: [function (e, t, i) {
        "use strict";
        var n = e("@marcom/ac-slider").Slider
            , r = e("../chapters/ChapterView")
            , o = function (e, t) {
                if (this.el = e,
                    this._min = t.min || 0,
                    this._max = t.max || 1,
                    t.mixins)
                    for (var i = t.mixins.slice(0); i.length;)
                        Object.assign(this, i.pop());
                this._slider = new n(this.el, {
                    template: t.template,
                    min: this._min,
                    max: this._max,
                    step: isNaN(+this.el.getAttribute("step")) ? this.el.getAttribute("step") : +this.el.getAttribute("step"),
                    value: void 0 !== t.value ? t.value : +this.el.getAttribute("value"),
                    orientation: t.orientation,
                    renderedPosition: !0,
                    keyboardContext: this.el
                }),
                    this._onFocusChange = this._onFocusChange.bind(this),
                    this._setHoveringValue = this._setHoveringValue.bind(this),
                    this._onMouseOver = this._onMouseOver.bind(this),
                    this._onMouseLeave = this._onMouseLeave.bind(this),
                    this._onChapterClicked = this._onChapterClicked.bind(this),
                    this._onChapterFocusIn = this._onChapterFocusIn.bind(this),
                    this._onChapterFocusOut = this._onChapterFocusOut.bind(this),
                    this._slider.el.addEventListener("blur", this._onFocusChange),
                    this._slider.el.addEventListener("focus", this._onFocusChange),
                    this._slider.el.addEventListener("mouseout", this._onFocusChange),
                    this._onGrab = this._onGrab.bind(this),
                    this._onRelease = this._onRelease.bind(this),
                    this._slider.on("grab", this._onGrab),
                    this._slider.on("release", this._onRelease),
                    this._scrubbedEl = this.el.querySelector(".ac-slider-scrubbed"),
                    this._notchEl = this.el.querySelector(".ac-slider-hover-notch"),
                    this._chapterContainer = this.el.querySelector(".ac-slider-chapters-track"),
                    this._axTrack = this.el.querySelector(".ac-slider-ax-track"),
                    this._bufferedTrack = this.el.querySelector(".ac-slider-buffered"),
                    this._notchEl && (this._slider.el.addEventListener("mouseover", this._onMouseOver),
                        this._slider.el.addEventListener("mouseleave", this._onMouseLeave),
                        this._slider.el.addEventListener("mousemove", this._setHoveringValue)),
                    t.value && requestAnimationFrame(function () {
                        this._slider && this.setValue(t.value)
                    }
                        .bind(this))
            }
            , s = o.prototype;
        s.on = function () {
            return this._slider.on.apply(this._slider, arguments)
        }
            ,
            s.off = function () {
                return this._slider.off.apply(this._slider, arguments)
            }
            ,
            s.trigger = function () {
                return this._slider.trigger.apply(this._slider, arguments)
            }
            ,
            s.setValue = function (e) {
                return this._axTrack && this._axTrack.setAttribute("aria-valuenow", e),
                    this._slider.setValue.call(this._slider, e)
            }
            ,
            s.setAriaValueText = function (e) {
                this._axTrack ? this._axTrack.setAttribute("aria-valuetext", e) : this._slider.el.setAttribute("aria-valuetext", e)
            }
            ,
            s.setMin = function (e) {
                this._min = e,
                    this._slider.setMin(e)
            }
            ,
            s.setMax = function (e) {
                this._max = e,
                    this._slider.setMax(e)
            }
            ,
            s._onMouseOver = function () {
                this._slider.el.classList.add("hover")
            }
            ,
            s._onMouseLeave = function () {
                this._slider.el.classList.remove("hover")
            }
            ,
            s._onFocusChange = function () {
                setTimeout(function () {
                    this.trigger("focuschange")
                }
                    .bind(this), 0)
            }
            ,
            s.isFocused = function () {
                return this._slider.el === document.activeElement && this._hasFocusOutline()
            }
            ,
            s._hasFocusOutline = function () {
                return "none" !== getComputedStyle(this._slider.el).getPropertyValue("outline-style")
            }
            ,
            s.getValue = function () {
                return this._slider.getValue.apply(this._slider, arguments)
            }
            ,
            s.getMax = function () {
                return this._max
            }
            ,
            s.setScrubbedValue = function () {
                this._chapters && this._checkCollisionsSetValue(),
                    "horizontal" === this._slider.getOrientation() ? this._scrubbedEl.style.left = this._slider.thumbElement.style.left : this._scrubbedEl.style.bottom = this._slider.thumbElement.style.bottom
            }
            ,
            s.setBufferedValue = function (e) {
                this._bufferedTrack.style.left = e + "%"
            }
            ,
            s._checkCollisionsSetValue = function () {
                for (var e = 0; e < this._chapters.length; e++) {
                    var t = this._chapters[e].el.children[0]
                        , i = parseInt(this._chapters[e].el.style.left) < this.getValue() / this.getMax() * 100;
                    this._setInlineBackgroundColor(!i, t)
                }
            }
            ,
            s._setHoveringValue = function (e) {
                var t = this.getClientXValue(e, this._notchEl)
                    , i = t > this.getValue();
                this._notchEl.style.left = t / this.getMax() * 100 + "%",
                    this._setInlineBackgroundColor(i, this._notchEl)
            }
            ,
            s._setInlineBackgroundColor = function (e, t) {
                e ? t.classList.remove("invert-element") : t.classList.add("invert-element")
            }
            ,
            s._onChapterClicked = function (e) {
                this.trigger("chapter:click", e),
                    this._slider.thumbElement.style.pointerEvents = ""
            }
            ,
            s._onChapterFocusIn = function (e) {
                this._notchEl.classList.add("hidden"),
                    this._slider.thumbElement.style.pointerEvents = "none",
                    this.trigger("chapter:focusin", e)
            }
            ,
            s._onChapterFocusOut = function (e) {
                this._notchEl.classList.remove("hidden"),
                    this._slider.thumbElement.style.pointerEvents = "",
                    this.trigger("chapter:focusout", e)
            }
            ,
            s._onGrab = function () {
                this.forceCursorPointer(),
                    this.setScrubbedValue()
            }
            ,
            s._onRelease = function () {
                this.disableForcedCursorPointer(),
                    this.setScrubbedValue()
            }
            ,
            s.setChapters = function (e) {
                var t = this;
                this._chapters && this._chapters.forEach(function (e) {
                    e.off("click", t._onChapterClicked),
                        e.off("focusin", t._onChapterFocusIn),
                        e.off("focusout", t._onChapterFocusOut),
                        e.off("mouseover", t._onChapterFocusIn),
                        e.off("mouseout", t._onChapterFocusOut),
                        e.destroy()
                }),
                    this._chapterContainer.innerHTML = "",
                    this._chapters = [];
                for (var i = 0; i < e.length; i++)
                    if (e[i].startTime < 100) {
                        var n = new r(e[i]);
                        n.on("click", this._onChapterClicked),
                            n.on("focusin", this._onChapterFocusIn),
                            n.on("focusout", this._onChapterFocusOut),
                            n.on("mouseover", this._onChapterFocusIn),
                            n.on("mouseout", this._onChapterFocusOut),
                            this._chapters.push(n),
                            this._chapterContainer.appendChild(n.el)
                    }
            }
            ,
            s.show = function () {
                this.el.classList.remove("ac-slider-inactive")
            }
            ,
            s.hide = function () {
                this.el.classList.add("ac-slider-inactive")
            }
            ,
            s.setState = function (e) {
                this.el.classList.add(e)
            }
            ,
            s.clearState = function (e) {
                this.el.classList.remove(e)
            }
            ,
            s.getClientXValue = function (e, t) {
                return this._slider.getClientXValue(e, t)
            }
            ,
            s.destroy = function () {
                var e = this;
                this._chapters && this._chapters.forEach(function (t) {
                    t.off("click", e._onChapterClicked),
                        t.off("focusin", e._onChapterFocusIn),
                        t.off("focusout", e._onChapterFocusOut),
                        t.off("mouseover", e._onChapterFocusIn),
                        t.off("mouseout", e._onChapterFocusOut),
                        t.destroy()
                }),
                    this._slider.el.removeEventListener("mousemove", this._setHoveringValue),
                    this._slider.el.removeEventListener("mouseleave", this._onMouseOver),
                    this._slider.el.removeEventListener("mouseout", this._onMouseLeave),
                    this._slider.el.removeEventListener("blur", this._onFocusChange),
                    this._slider.el.removeEventListener("focus", this._onFocusChange),
                    this._slider.el.removeEventListener("mouseout", this._onFocusChange),
                    this._slider.off("grab", this._onGrab),
                    this._slider.off("release", this._onRelease),
                    this._slider.destroy(),
                    this._slider = null
            }
            ,
            t.exports = o
    }
        , {
        "../chapters/ChapterView": 372,
        "@marcom/ac-slider": 281
    }],
    383: [function (e, t, i) {
        "use strict";
        var n = e("@babel/runtime/helpers/interopRequireDefault")(e("@babel/runtime/helpers/typeof"))
            , r = function () {
                function e(e, t) {
                    for (var i = 0; i < t.length; i++) {
                        var n = t[i];
                        n.enumerable = n.enumerable || !1,
                            n.configurable = !0,
                            "value" in n && (n.writable = !0),
                            Object.defineProperty(e, n.key, n)
                    }
                }
                return function (t, i, n) {
                    return i && e(t.prototype, i),
                        n && e(t, n),
                        t
                }
            }();
        var o = e("./Button")
            , s = function (e) {
                function t(e, i) {
                    !function (e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, t);
                    var r = function (e, t) {
                        if (!e)
                            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !t || "object" !== (0,
                            n.default)(t) && "function" != typeof t ? e : t
                    }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, i));
                    return r._states = i.states || {},
                        r._labels = i.labels,
                        r._focusTarget = r.el.querySelector("button") || r.el,
                        r._states && r._states.initial && r.setState("initial"),
                        r
                }
                return function (e, t) {
                    if ("function" != typeof t && null !== t)
                        throw new TypeError("Super expression must either be null or a function, not " + (0,
                            n.default)(t));
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }),
                        t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                }(t, o),
                    r(t, [{
                        key: "setState",
                        value: function (e) {
                            this._currentState && this._currentState !== e && this._states[this._currentState].length && this.el.classList.remove(this._states[this._currentState]),
                                this._currentState = e,
                                this._labels && this._labels[this._currentState] && (this._focusTarget.value = this._labels[this._currentState],
                                    this._focusTarget.setAttribute("aria-label", this._labels[this._currentState])),
                                this._states[e].length && this.el.classList.add(this._states[e])
                        }
                    }]),
                    t
            }();
        t.exports = s
    }
        , {
        "./Button": 378,
        "@babel/runtime/helpers/interopRequireDefault": 157,
        "@babel/runtime/helpers/typeof": 164
    }],
    384: [function (e, t, i) {
        "use strict";
        var n = e("@babel/runtime/helpers/interopRequireDefault")(e("@babel/runtime/helpers/typeof"))
            , r = function () {
                function e(e, t) {
                    for (var i = 0; i < t.length; i++) {
                        var n = t[i];
                        n.enumerable = n.enumerable || !1,
                            n.configurable = !0,
                            "value" in n && (n.writable = !0),
                            Object.defineProperty(e, n.key, n)
                    }
                }
                return function (t, i, n) {
                    return i && e(t.prototype, i),
                        n && e(t, n),
                        t
                }
            }();
        var o = e("./StatefulButton")
            , s = function (e) {
                function t(e, i) {
                    return function (e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, t),
                        function (e, t) {
                            if (!e)
                                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return !t || "object" !== (0,
                                n.default)(t) && "function" != typeof t ? e : t
                        }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, i))
                }
                return function (e, t) {
                    if ("function" != typeof t && null !== t)
                        throw new TypeError("Super expression must either be null or a function, not " + (0,
                            n.default)(t));
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }),
                        t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                }(t, o),
                    r(t, [{
                        key: "setState",
                        value: function (e) {
                            (function e(t, i, n) {
                                null === t && (t = Function.prototype);
                                var r = Object.getOwnPropertyDescriptor(t, i);
                                if (void 0 === r) {
                                    var o = Object.getPrototypeOf(t);
                                    return null === o ? void 0 : e(o, i, n)
                                }
                                if ("value" in r)
                                    return r.value;
                                var s = r.get;
                                return void 0 !== s ? s.call(n) : void 0
                            }
                            )(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "setState", this).call(this, e),
                                "on" === this._currentState ? this._focusTarget.setAttribute("aria-pressed", !0) : this._focusTarget.setAttribute("aria-pressed", !1)
                        }
                    }]),
                    t
            }();
        t.exports = s
    }
        , {
        "./StatefulButton": 383,
        "@babel/runtime/helpers/interopRequireDefault": 157,
        "@babel/runtime/helpers/typeof": 164
    }],
    385: [function (e, t, i) {
        "use strict";
        t.exports = {
            disableForcedCursorPointer: function () {
                document.body.classList.remove("cursor-pointer"),
                    this.onSelectStartResumeDefault()
            },
            forceCursorPointer: function () {
                document.body.classList.add("cursor-pointer"),
                    this.onSelectStartPreventDefault()
            },
            onSelectStartResumeDefault: function () {
                document.removeEventListener("selectstart", this.preventDefault)
            },
            onSelectStartPreventDefault: function () {
                document.addEventListener("selectstart", this.preventDefault)
            },
            preventDefault: function (e) {
                e.preventDefault()
            }
        }
    }
        , {}],
    386: [function (e, t, i) {
        "use strict";
        var n = e("../templates/states/EndStateItem.html")
            , r = function (e) {
                this.el = e.el,
                    this.el.innerHTML = n,
                    this._player = e.player,
                    this._bindContent(e)
            }
            , o = r.prototype;
        o._bindContent = function (e) {
            if ("link" === e.type || "video" === e.type) {
                var t = this.el.querySelector(".end-state-link")
                    , i = document.createElement("div");
                t.classList.remove("hidden"),
                    i.classList.add("end-state-text-container"),
                    i.innerText = e.label || "",
                    t.href = e.url || "",
                    t.appendChild(i),
                    "link" === e.type ? t.classList.add("icon", "icon-after", "icon-chevronright") : "video" === e.type && t.classList.add("icon", "icon-after", "icon-playcircle"),
                    this._bindAction(this.el, e)
            }
        }
            ,
            o._bindAction = function (e, t) {
                "function" == typeof t.onclick ? e.onclick = function (e) {
                    e.preventDefault(),
                        t.onclick.call(null, e)
                }
                    .bind(this) : "video" === t.type && t.url && (e.onclick = function (e) {
                        e.preventDefault(),
                            this._player.load(t.url, null, 0, {})
                    }
                        .bind(this))
            }
            ,
            o.destroy = function () { }
            ,
            t.exports = r
    }
        , {
        "../templates/states/EndStateItem.html": 407
    }],
    387: [function (e, t, i) {
        "use strict";
        var n = e("./EndStateItem")
            , r = function (e) {
                this.el = e.el,
                    this._player = e.player,
                    this._addItems(e.items || [])
            }
            , o = r.prototype;
        o._addItems = function (e) {
            this._items = [],
                e.forEach(function (e) {
                    var t = document.createElement("div");
                    t.classList.add("end-state-item");
                    var i = new n(Object.assign({}, e, {
                        el: t,
                        player: this._player
                    }));
                    this.el.appendChild(t),
                        this._items.push(i)
                }
                    .bind(this))
        }
            ,
            o.setData = function (e) {
                for (; this._items.length;)
                    this._items.pop().destroy();
                this.el.innerHTML = "",
                    e ? (this.el.classList.remove("hidden"),
                        this._addItems(e.items)) : this.el.classList.add("hidden")
            }
            ,
            o.destroy = function () {
                for (; this._items.length;)
                    this._items.pop().destroy()
            }
            ,
            t.exports = r
    }
        , {
        "./EndStateItem": 386
    }],
    388: [function (e, t, i) {
        "use strict";
        var n = function () {
            function e(e, t) {
                for (var i = 0; i < t.length; i++) {
                    var n = t[i];
                    n.enumerable = n.enumerable || !1,
                        n.configurable = !0,
                        "value" in n && (n.writable = !0),
                        Object.defineProperty(e, n.key, n)
                }
            }
            return function (t, i, n) {
                return i && e(t.prototype, i),
                    n && e(t, n),
                    t
            }
        }();
        var r = function () {
            function e(t) {
                !function (e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, e),
                    this.el = document.createElement("div"),
                    this.el.classList.add("error-state-wrapper")
            }
            return n(e, [{
                key: "setText",
                value: function (e) {
                    this._errorStr = e,
                        this.render(),
                        this._container = this.el.firstElementChild
                }
            }, {
                key: "focus",
                value: function () {
                    this._container && this._container.firstElementChild.focus()
                }
            }, {
                key: "render",
                value: function () {
                    this.el.innerHTML = '<div class="error-state-container" >\n\t\t\t<div tabindex="-1" role="text" class="error-state-message">' + this._errorStr + "</div>\n\t\t</div>\n\t\t"
                }
            }]),
                e
        }();
        t.exports = r
    }
        , {}],
    389: [function (e, t, i) {
        "use strict";
        var n = function (e, t, i) {
            return function (n) {
                e[t](n, i)
            }
        };
        t.exports = function (e, t, i) {
            return t.classDef ? function (e, t, i) {
                return new t.classDef(e, Object.assign(t.options || {}, i || {}))
            }(e, t, i) : function (e, t) {
                var i = t.handlers || {}
                    , r = {};
                for (var o in i)
                    i.hasOwnProperty(o) && e.on(o, r[o] = n(i, o, e));
                var s, a = t.observe;
                if (a) {
                    for (var l = a.update, c = a.source, u = c.on.bind(c) || c.addEventListener, h = c.off.bind(c) || c.removeEventListener, d = a.events, p = 0, f = d.length, m = function () {
                        l.call(a, e)
                    }; p < f; p++)
                        u(o = d[p], m);
                    s = function () {
                        for (p = 0; p < f; p++)
                            o = d[p],
                                h(o, m)
                    }
                }
                return {
                    destroy: function () {
                        for (var t in r)
                            r.hasOwnProperty(t) && e.off(t, r[t]);
                        s && s()
                    }
                }
            }(e, t)
        }
    }
        , {}],
    390: [function (e, t, i) {
        "use strict";
        var n = e("@babel/runtime/helpers/interopRequireDefault")(e("@babel/runtime/helpers/typeof"))
            , r = "function" == typeof Symbol && "symbol" === (0,
                n.default)(Symbol.iterator) ? function (e) {
                    return (0,
                        n.default)(e)
                }
                : function (e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : (0,
                        n.default)(e)
                }
            , o = e("./createView")
            , s = e("./createBehavior")
            , a = function (e) {
                for (; e.length;)
                    e.shift().destroy()
            }
            , l = function (e, t, i) {
                var n = o(e, t.view)
                    , r = s(n, t.behavior, i);
                return {
                    view: n,
                    behavior: r,
                    destroy: function (e, t) {
                        "function" == typeof t.destroy && t.destroy(),
                            "function" == typeof e.destroy && e.destroy()
                    }
                        .bind(null, n, r)
                }
            };
        t.exports = function (e, t, i) {
            var n = {};
            for (var o in t)
                if (t.hasOwnProperty(o) && "object" === r(t[o])) {
                    var s = t[o]
                        , c = t.elementClassPrefix ? "." + t.elementClassPrefix + "-" + s.className : "." + s.className
                        , u = e.querySelectorAll(c);
                    n[o] = [];
                    for (var h = 0, d = u.length; h < d; h++)
                        n[o].push(l(u[h], s, i))
                }
            return {
                components: n,
                destroy: function (e) {
                    for (var t in e)
                        e.hasOwnProperty(t) && (a(e[t]),
                            delete e[t])
                }
                    .bind(null, n)
            }
        }
    }
        , {
        "./createBehavior": 389,
        "./createView": 391,
        "@babel/runtime/helpers/interopRequireDefault": 157,
        "@babel/runtime/helpers/typeof": 164
    }],
    391: [function (e, t, i) {
        "use strict";
        t.exports = function (e, t) {
            return new t.classDef(e, t.options)
        }
    }
        , {}],
    392: [function (e, t, i) {
        "use strict";
        var n = e("@marcom/ac-keyboard/Keyboard")
            , r = e("@marcom/ac-event-emitter-micro").EventEmitterMicro
            , o = 32
            , s = 37
            , a = 38
            , l = 39
            , c = 40
            , u = function (e) {
                r.call(this),
                    this._player = e.player,
                    this._target = e.keyboardTarget || this._player.el,
                    this._keyboard = new n(this._target),
                    this._bindMethods(),
                    this._addEventListeners()
            }
            , h = r.prototype
            , d = u.prototype = Object.create(h);
        d._bindMethods = function () {
            this._onLeftArrowDown = this._onLeftArrowDown.bind(this),
                this._onRightArrowDown = this._onRightArrowDown.bind(this),
                this._onUpArrowDown = this._onUpArrowDown.bind(this),
                this._onDownArrowDown = this._onDownArrowDown.bind(this),
                this._onSpaceBarUp = this._onSpaceBarUp.bind(this),
                this._onSpaceBarDown = this._onSpaceBarDown.bind(this),
                this._onKeyboardInteraction = this._onKeyboardInteraction.bind(this),
                this._onDurationChange = this._onDurationChange.bind(this),
                this._boundKeyboardInteraction = {},
                [o, s, l, a, c].forEach(function (e) {
                    this._boundKeyboardInteraction[e] = this._onKeyboardInteraction.bind(this, e)
                }
                    .bind(this))
        }
            ,
            d._addEventListeners = function () {
                [o, s, l, a, c].forEach(function (e) {
                    this._keyboard.onDown(e, this._boundKeyboardInteraction[e])
                }
                    .bind(this)),
                    this._keyboard.onDown(o, this._onSpaceBarDown),
                    this._keyboard.onDown(s, this._onLeftArrowDown),
                    this._keyboard.onDown(l, this._onRightArrowDown),
                    this._keyboard.onDown(a, this._onUpArrowDown),
                    this._keyboard.onDown(c, this._onDownArrowDown),
                    this._player.on("durationchange", this._onDurationChange)
            }
            ,
            d._removeEventListeners = function () {
                [o, s, l, a, c].forEach(function (e) {
                    this._keyboard.offDown(e, this._boundKeyboardInteraction[e])
                }
                    .bind(this)),
                    this._boundKeyboardInteraction = null,
                    this._keyboard.offDown(o, this._onSpaceBarDown),
                    this._keyboard.offUp(o, this._onSpaceBarUp),
                    this._keyboard.offDown(s, this._onLeftArrowDown),
                    this._keyboard.offDown(l, this._onRightArrowDown),
                    this._keyboard.offDown(a, this._onUpArrowDownDown),
                    this._keyboard.offDown(c, this._onDownArrowDown),
                    this._player.off("durationchange", this._onDurationChange)
            }
            ,
            d._onKeyboardInteraction = function () {
                this._triggerKeyboardInteraction()
            }
            ,
            d._triggerKeyboardInteraction = function () {
                this.trigger("keyboardinteraction")
            }
            ,
            d._onDurationChange = function () {
                var e = this._player.getDuration();
                this._interval = e >= 60 ? 10 : e >= 20 ? 5 : 1
            }
            ,
            d._onLeftArrowDown = function (e) {
                if (!this._player.isLive()) {
                    e.originalEvent.preventDefault(),
                        e.originalEvent.stopPropagation();
                    var t = this._player.getCurrentTime();
                    isNaN(t) || this._player.seek(Math.max(t - this._interval, 0))
                }
            }
            ,
            d._onRightArrowDown = function (e) {
                if (!this._player.isLive()) {
                    e.originalEvent.preventDefault(),
                        e.originalEvent.stopPropagation();
                    var t = this._player.getCurrentTime();
                    isNaN(t) || this._player.seek(Math.min(t + this._interval, this._player.getDuration()))
                }
            }
            ,
            d._onUpArrowDown = function (e) {
                if (!e.target.hasAttribute("aria-checked")) {
                    e.originalEvent.preventDefault(),
                        e.originalEvent.stopPropagation();
                    var t = this._player.getMuted() ? 0 : this._player.getVolume()
                        , i = Math.min(1, t + .1);
                    this._player.setVolume(i),
                        this._player.setMuted(!1)
                }
            }
            ,
            d._onDownArrowDown = function (e) {
                if (!e.target.hasAttribute("aria-checked")) {
                    e.originalEvent.preventDefault(),
                        e.originalEvent.stopPropagation();
                    var t = this._player.getMuted() ? 0 : this._player.getVolume()
                        , i = Math.max(0, t - .1);
                    this._player.setVolume(i),
                        this._player.setMuted(0 === Math.round(10 * i))
                }
            }
            ,
            d._onSpaceBarDown = function (e) {
                "BUTTON" !== e.target.tagName && "button" !== e.target.getAttribute("role") && (this._keyboard.offDown(o, this._onSpaceBarDown),
                    this._keyboard.onUp(o, this._onSpaceBarUp))
            }
            ,
            d._onSpaceBarUp = function () {
                this._keyboard.offUp(o, this._onSpaceBarUp),
                    this._player.getPaused() ? this._player.play() : this._player.pause(),
                    this._keyboard.onDown(o, this._onSpaceBarDown)
            }
            ,
            d.destroy = function () {
                this._removeEventListeners(),
                    this._keyboard.destroy(),
                    h.destroy.call(this)
            }
            ,
            t.exports = u
    }
        , {
        "@marcom/ac-event-emitter-micro": 229,
        "@marcom/ac-keyboard/Keyboard": 247
    }],
    393: [function (e, t, i) {
        "use strict";
        var n = e("@babel/runtime/helpers/interopRequireDefault")(e("@babel/runtime/helpers/typeof"))
            , r = function () {
                function e(e, t) {
                    for (var i = 0; i < t.length; i++) {
                        var n = t[i];
                        n.enumerable = n.enumerable || !1,
                            n.configurable = !0,
                            "value" in n && (n.writable = !0),
                            Object.defineProperty(e, n.key, n)
                    }
                }
                return function (t, i, n) {
                    return i && e(t.prototype, i),
                        n && e(t, n),
                        t
                }
            }()
            , o = function e(t, i, n) {
                null === t && (t = Function.prototype);
                var r = Object.getOwnPropertyDescriptor(t, i);
                if (void 0 === r) {
                    var o = Object.getPrototypeOf(t);
                    return null === o ? void 0 : e(o, i, n)
                }
                if ("value" in r)
                    return r.value;
                var s = r.get;
                return void 0 !== s ? s.call(n) : void 0
            };
        var s = e("./KeyboardControl")
            , a = ["controls-toggle-mute-volume-button", "controls-volume-level-indicator"]
            , l = function (e) {
                function t(e) {
                    !function (e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, t);
                    var i = function (e, t) {
                        if (!e)
                            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !t || "object" !== (0,
                            n.default)(t) && "function" != typeof t ? e : t
                    }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e))
                        , r = i._player.get360();
                    return i._arrowControls = !r || r.arrowControls,
                        i
                }
                return function (e, t) {
                    if ("function" != typeof t && null !== t)
                        throw new TypeError("Super expression must either be null or a function, not " + (0,
                            n.default)(t));
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }),
                        t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                }(t, s),
                    r(t, [{
                        key: "_bindMethods",
                        value: function () {
                            o(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "_bindMethods", this).call(this),
                                this._onLeftArrowUp = this._onLeftArrowUp.bind(this),
                                this._onRightArrowUp = this._onRightArrowUp.bind(this),
                                this._onDownArrowUp = this._onDownArrowUp.bind(this),
                                this._onUpArrowUp = this._onUpArrowUp.bind(this)
                        }
                    }, {
                        key: "_addEventListeners",
                        value: function () {
                            o(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "_addEventListeners", this).call(this),
                                this._keyboard.onUp(37, this._onLeftArrowUp),
                                this._keyboard.onUp(39, this._onRightArrowUp),
                                this._keyboard.onUp(38, this._onUpArrowUp),
                                this._keyboard.onUp(40, this._onDownArrowUp)
                        }
                    }, {
                        key: "_removeEventListeners",
                        value: function () {
                            o(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "_removeEventListeners", this).call(this),
                                this._keyboard.offUp(37, this._onLeftArrowUp),
                                this._keyboard.offUp(39, this._onRightArrowUp),
                                this._keyboard.offUp(38, this._onUpArrowUp),
                                this._keyboard.offUp(40, this._onDownArrowUp)
                        }
                    }, {
                        key: "_onLeftArrowDown",
                        value: function (e) {
                            if (e.target.classList.contains("controls-progress-indicator"))
                                return this._triggerKeyboardInteraction(),
                                    void o(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "_onLeftArrowDown", this).call(this, e);
                            this._arrowControls.leftArrowDown(e)
                        }
                    }, {
                        key: "_onRightArrowDown",
                        value: function (e) {
                            if (e.target.classList.contains("controls-progress-indicator"))
                                return this._triggerKeyboardInteraction(),
                                    void o(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "_onRightArrowDown", this).call(this, e);
                            this._arrowControls.rightArrowDown(e)
                        }
                    }, {
                        key: "_onUpArrowDown",
                        value: function (e) {
                            if (e.target.classList.contains(a[0]) || e.target.classList.contains(a[1]))
                                return this._triggerKeyboardInteraction(),
                                    void o(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "_onUpArrowDown", this).call(this, e);
                            e.originalEvent.preventDefault(),
                                this._arrowControls.upArrowDown(e)
                        }
                    }, {
                        key: "_onDownArrowDown",
                        value: function (e) {
                            if (e.target.classList.contains(a[0]) || e.target.classList.contains(a[1]))
                                return this._triggerKeyboardInteraction(),
                                    void o(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "_onDownArrowDown", this).call(this, e);
                            e.originalEvent.preventDefault(),
                                this._arrowControls.downArrowDown(e)
                        }
                    }, {
                        key: "_onLeftArrowUp",
                        value: function (e) {
                            e.target.classList.contains("controls-progress-indicator") ? this._triggerKeyboardInteraction() : (e.originalEvent.preventDefault(),
                                this._arrowControls.leftArrowUp(e))
                        }
                    }, {
                        key: "_onRightArrowUp",
                        value: function (e) {
                            e.target.classList.contains("controls-progress-indicator") ? this._triggerKeyboardInteraction() : (e.originalEvent.preventDefault(),
                                this._arrowControls.rightArrowUp(e))
                        }
                    }, {
                        key: "_onUpArrowUp",
                        value: function (e) {
                            e.target.classList.contains("controls-progress-indicator") ? this._triggerKeyboardInteraction() : this._arrowControls.upArrowUp(e)
                        }
                    }, {
                        key: "_onDownArrowUp",
                        value: function (e) {
                            e.target.classList.contains("controls-progress-indicator") ? this._triggerKeyboardInteraction() : this._arrowControls.downArrowUp(e)
                        }
                    }, {
                        key: "_onKeyboardInteraction",
                        value: function (e) { }
                    }, {
                        key: "destroy",
                        value: function () {
                            o(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "destroy", this).call(this)
                        }
                    }]),
                    t
            }();
        t.exports = l
    }
        , {
        "./KeyboardControl": 392,
        "@babel/runtime/helpers/interopRequireDefault": 157,
        "@babel/runtime/helpers/typeof": 164
    }],
    394: [function (e, t, i) {
        "use strict";
        var n, r;
        t.exports = function (t) {
            return t.threesixty ? (n || (n = e("./ThreeSixtyKeyboardControl")),
                new n(t)) : (r || (r = e("./KeyboardControl")),
                    new r(t))
        }
    }
        , {
        "./KeyboardControl": 392,
        "./ThreeSixtyKeyboardControl": 393
    }],
    395: [function (e, t, i) {
        "use strict";
        var n = function () {
            function e(e, t) {
                for (var i = 0; i < t.length; i++) {
                    var n = t[i];
                    n.enumerable = n.enumerable || !1,
                        n.configurable = !0,
                        "value" in n && (n.writable = !0),
                        Object.defineProperty(e, n.key, n)
                }
            }
            return function (t, i, n) {
                return i && e(t.prototype, i),
                    n && e(t, n),
                    t
            }
        }();
        var r = e("../localization/Localization")
            , o = '<div class="loading-indicator">\n        <div></div>\n        <div></div>\n        <div></div>\n        <div></div>\n        <div></div>\n        <div></div>\n        <div></div>\n        <div></div>\n    </div>'
            , s = 500
            , a = function () {
                function e(t) {
                    var i = this;
                    !function (e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, e),
                        this._player = t.player,
                        this.el = t.el,
                        this.el.innerHTML = o,
                        this._ariaSpan = this._player.controls.el.querySelector("#loading-status"),
                        this._ariaString = "",
                        r.getTranslation({
                            callback: function (e) {
                                i._ariaString = e.loading,
                                    i._isShowing() && (i._ariaSpan.innerText = i._ariaString)
                            }
                        }),
                        this._showTimeoutDelay = void 0 !== t.showTimeoutDelay ? t.showTimeoutDelay : s,
                        this._bindMethods(),
                        this._addEventListeners()
                }
                return n(e, [{
                    key: "_bindMethods",
                    value: function () {
                        this.show = this.show.bind(this),
                            this.hide = this.hide.bind(this),
                            this._onPlaying = this._onPlaying.bind(this),
                            this._onSeeking = this._onSeeking.bind(this),
                            this._onSeeked = this._onSeeked.bind(this),
                            this._onPause = this._onPause.bind(this),
                            this._onEnded = this._onEnded.bind(this),
                            this._onError = this._onError.bind(this),
                            this._doShow = this._doShow.bind(this),
                            this._checkLoadingState = this._checkLoadingState.bind(this),
                            this._onPlay = this._onPlay.bind(this),
                            this._onMouseOut = this._onMouseOut.bind(this)
                    }
                }, {
                    key: "_addEventListeners",
                    value: function () {
                        this._player.on("waiting", this.show),
                            this._player.on("seeking", this._onSeeking),
                            this._player.on("seeked", this._onSeeked),
                            this._player.on("playing", this._onPlaying),
                            this._player.on("ended", this._onEnded),
                            this._player.on("canplaythrough", this._checkLoadingState),
                            this._player.on("progress", this._checkLoadingState),
                            this._player.on("error", this._onError),
                            this._player.on("pause", this._onPause),
                            this._player.on("timeupdate", this._checkLoadingState),
                            this._player.on("play", this._onPlay),
                            this._player.controls && this._player.controls.el.addEventListener("mouseout", this._onMouseOut)
                    }
                }, {
                    key: "_removeEventListeners",
                    value: function () {
                        this._player.off("waiting", this.show),
                            this._player.off("seeking", this._onSeeking),
                            this._player.off("seeked", this._onSeeked),
                            this._player.off("playing", this._onPlaying),
                            this._player.off("ended", this._onEnded),
                            this._player.off("canplaythrough", this._checkLoadingState),
                            this._player.off("progress", this._checkLoadingState),
                            this._player.off("error", this._onError),
                            this._player.off("pause", this._onPause),
                            this._player.off("timeupdate", this._checkLoadingState),
                            this._player.off("play", this._onPlay),
                            this.el.removeEventListener("click", this._onClick),
                            this._player.controls && this._player.controls.el.removeEventListener("mouseout", this._onMouseOut)
                    }
                }, {
                    key: "_onPause",
                    value: function () {
                        this._isPaused = this._player.getPaused(),
                            this._isPaused && this.hide()
                    }
                }, {
                    key: "_onPlaying",
                    value: function () {
                        this._isPaused = this._player.getPaused(),
                            this._started = !0,
                            this._checkLoadingState()
                    }
                }, {
                    key: "_onPlay",
                    value: function () {
                        !this._isPaused && this._started || (this._isPaused = this._player.getPaused(),
                            this._isPaused || (this._started = !0),
                            this._isSeeking = !1,
                            this._checkLoadingState(!0))
                    }
                }, {
                    key: "_onSeeking",
                    value: function () {
                        this._isSeeking = !0,
                            this.show()
                    }
                }, {
                    key: "_onSeeked",
                    value: function () {
                        this._isSeeking = !1,
                            this._checkLoadingState()
                    }
                }, {
                    key: "_onEnded",
                    value: function () {
                        this._started = !1,
                            this.hide()
                    }
                }, {
                    key: "_onError",
                    value: function () {
                        this._started && this.show(!0)
                    }
                }, {
                    key: "_onMouseOut",
                    value: function () {
                        this._player.isStalled() || this._player.el.classList.remove("was-loading")
                    }
                }, {
                    key: "show",
                    value: function (e) {
                        this._isPaused || (!0 !== e && this._started ? (clearTimeout(this._showTimeout),
                            this._showTimeout = setTimeout(this._doShow, this._showTimeoutDelay)) : this._doShow())
                    }
                }, {
                    key: "_checkLoadingState",
                    value: function (e) {
                        !this._player.getEnded() && this._started && (this._player.isStalled() || this._isSeeking) ? this.show(!0 === e) : this.hide()
                    }
                }, {
                    key: "_isShowing",
                    value: function () {
                        return this._player.el.classList.contains("loading")
                    }
                }, {
                    key: "_doShow",
                    value: function () {
                        this._player.el.classList.add("loading"),
                            this._player.el.classList.remove("was-loading"),
                            this._ariaSpan.innerText = this._ariaString
                    }
                }, {
                    key: "hide",
                    value: function () {
                        clearTimeout(this._showTimeout),
                            this._isShowing() && (this._player.el.classList.remove("loading"),
                                this._player.el.classList.contains("user-hover") || this._player.el.classList.add("was-loading"),
                                this._ariaSpan.innerText = "")
                    }
                }, {
                    key: "destroy",
                    value: function () {
                        this._removeEventListeners()
                    }
                }]),
                    e
            }();
        t.exports = a
    }
        , {
        "../localization/Localization": 398
    }],
    396: [function (e, t, i) {
        "use strict";
        t.exports = {
            audiotrackscontrol: "Audio",
            adjustvolume: "Adjust Volume",
            playpause: "Play/Pause",
            play: "Play",
            pause: "Pause",
            mutevolume: "Mute Volume",
            fullscreen: "Full Screen",
            exitfullscreen: "Exit Full Screen",
            airplay: "AirPlay",
            captionscontrol: "Closed Captions",
            captionsturnedon: "Closed Captions On",
            captionsturnedoff: "Closed Captions Off",
            subtitlescontrol: "Subtitles",
            subtitlesturnedon: "Subtitles On",
            subtitlesturnedoff: "Subtitles Off",
            share: "Share",
            elapsed: "elapsed",
            remaining: "remaining",
            currenttimetext: "{minutes} minutes and {seconds} seconds",
            pictureinpicture: "Picture-in-Picture",
            exitpictureinpicture: "Exit Picture-in-Picture",
            closesharing: "Close Sharing",
            facebookshare: "Share to Facebook",
            twittershare: "Share to Twitter",
            copylink: "Copy Link",
            copyembed: "Copy Embed Code",
            copyarea: "Copy Link Text Area",
            selectlink: "Select Link Text",
            selectembed: "Select Embed Code",
            close: "Close",
            dismisscopy: "Dismiss Copy",
            replay: "Replay",
            live: "Live",
            livestream: "Live Streaming",
            newwindow: "Opens in New Window",
            threesixtyicon: "Return 360 Point of View to Origin",
            threesixtyleft: "Move 360 Point of View Left",
            threesixtyright: "Move 360 Point of View Right",
            threesixtyup: "Move 360 Point of View Up",
            threesixtydown: "Move 360 Point of View Down",
            error: "The video could not be played.",
            jumptochapter: "Jump to chapter",
            chapter: "{chaptertitle} Chapter {chaptertime}",
            minutesandseconds: "{minutes} minutes and {seconds} seconds",
            loading: "The video is loading",
            captionsoff: "Off"
        }
    }
        , {}],
    397: [function (e, t, i) {
        "use strict";
        t.exports = {
            af: "Afrikaans",
            "af-ZA": "Afrikaans [South Africa]",
            ar: "Arabic",
            "ar-AE": "Arabic [UAE]",
            "ar-BH": "Arabic [Bahrain]",
            "ar-DZ": "Arabic [Algeria]",
            "ar-EG": "Arabic [Egypt]",
            "ar-IQ": "Arabic [Iraq]",
            "ar-JO": "Arabic [Jordan]",
            "ar-KW": "Arabic [Kuwait]",
            "ar-LB": "Arabic [Lebanon]",
            "ar-LY": "Arabic [Libya]",
            "ar-MA": "Arabic [Morocco]",
            "ar-OM": "Arabic [Oman]",
            "ar-QA": "Arabic [Qatar]",
            "ar-SA": "Arabic [Saudi Arabia]",
            "ar-SY": "Arabic [Syria]",
            "ar-TN": "Arabic [Tunisia]",
            "ar-YE": "Arabic [Yemen]",
            az: "Azeri [Latin]",
            "az-AZ": "Azeri [Cyrillic] [Azerbaijan]",
            be: "Belarusian",
            "be-BY": "Belarusian [Belarus]",
            bg: "Bulgarian",
            "bg-BG": "Bulgarian [Bulgaria]",
            "bs-BA": "Bosnian [Bosnia and Herzegovina]",
            ca: "Catalan",
            "ca-ES": "Catalan [Spain]",
            cs: "Czech",
            "cs-CZ": "Czech [Czech Rep]",
            cy: "Welsh",
            "cy-GB": "Welsh [United Kingdom]",
            da: "Danish",
            "da-DK": "Danish [Denmark]",
            de: "German",
            "de-AT": "German [Austria]",
            "de-CH": "German [Switzerland]",
            "de-DE": "German [Germany]",
            "de-LI": "German [Liechtenstein]",
            "de-LU": "German [Luxembourg]",
            dv: "Divehi",
            "dv-MV": "Divehi [Maldives]",
            el: "Greek",
            "el-GR": "Greek [Greece]",
            en: "English",
            "en-AU": "English [Australia]",
            "en-BZ": "English [Belize]",
            "en-CA": "English [Canada]",
            "en-CB": "English [Caribbean]",
            "en-GB": "English [United Kingdom]",
            "en-IE": "English [Ireland]",
            "en-JM": "English [Jamaica]",
            "en-NZ": "English [New Zealand]",
            "en-PH": "English [Philippines]",
            "en-TT": "English [Trinidad and Tobago]",
            "en-US": "English [US]",
            "en-ZA": "English [South Africa]",
            "en-ZW": "English [Zimbabwe]",
            "en-419": "English [Latin America]",
            "en-AE": "English [UAE]",
            "en-AM": "English [Armenia]",
            "en-AZ": "English [Azerbaijan]",
            "en-BH": "English [Bahrain]",
            "en-BW": "English [Botswana]",
            "en-BY": "English [Belarus]",
            "en-EG": "English [Egypt]",
            "en-GE": "English [Georgia]",
            "en-GW": "English [Guinea Bissau]",
            "en-HK": "English [Hong Kong]",
            "en-IL": "English [Israel]",
            "en-IN": "English [India]",
            "en-JO": "English [Jordan]",
            "en-KE": "English [Kenya]",
            "en-KG": "English [Kyrgyzstan]",
            "en-KW": "English [Kuwait]",
            "en-KZ": "English [Kazakhstan]",
            "en-MD": "English [Republic of Moldova]",
            "en-ME": "English [Montenegro]",
            "en-MK": "English [Macedonia]",
            "en-MT": "English [Malta]",
            "en-MY": "English [Malaysia]",
            "en-MZ": "English [Mozambique]",
            "en-NG": "English [Nigeria]",
            "en-OM": "English [Oman]",
            "en-QA": "English [Qatar]",
            "en-SA": "English [Saudi Arabia]",
            "en-SG": "English [Singapore]",
            "en-SI": "English [Slovenia]",
            "en-TJ": "English [Tajikistan]",
            "en-TM": "English [Turkmenistan]",
            "en-UG": "English [Uganda]",
            "en-UZ": "English [Uzbekistan]",
            "en-VN": "English [Vietnam]",
            eo: "Esperanto",
            es: "Spanish",
            "es-419": "Spanish [Latin America]",
            "es-AR": "Spanish [Argentina]",
            "es-BO": "Spanish [Bolivia]",
            "es-CL": "Spanish [Chile]",
            "es-CO": "Spanish [Colombia]",
            "es-CR": "Spanish [Costa Rica]",
            "es-DO": "Spanish [Dominican Republic]",
            "es-EC": "Spanish [Ecuador]",
            "es-ES": "Spanish [Spain]",
            "es-GT": "Spanish [Guatemala]",
            "es-HN": "Spanish [Honduras]",
            "es-MX": "Spanish [Mexico]",
            "es-NI": "Spanish [Nicaragua]",
            "es-PA": "Spanish [Panama]",
            "es-PE": "Spanish [Peru]",
            "es-PR": "Spanish [Puerto Rico]",
            "es-PY": "Spanish [Paraguay]",
            "es-SV": "Spanish [El Salvador]",
            "es-UY": "Spanish [Uruguay]",
            "es-VE": "Spanish [Venezuela]",
            et: "Estonian",
            "et-EE": "Estonian [Estonia]",
            eu: "Basque",
            "eu-ES": "Basque [Spain]",
            fa: "Farsi",
            "fa-IR": "Farsi [Iran]",
            fi: "Finnish",
            "fi-FI": "Finnish [Finland]",
            fo: "Faroese",
            "fo-FO": "Faroese [Faroe Islands]",
            fr: "French",
            "fr-BE": "French [Belgium]",
            "fr-CA": "French [Canada]",
            "fr-CH": "French [Switzerland]",
            "fr-FR": "French [France]",
            "fr-LU": "French [Luxembourg]",
            "fr-MC": "French [Principality of Monaco]",
            "fr-CF": "French [CentralAfrica]",
            "fr-CI": "French [Ivory Coast]",
            "fr-CM": "French [Cameroon]",
            "fr-GN": "French [Guinea]",
            "fr-GQ": "French [Equatorial Guinea]",
            "fr-MA": "French [Morocco]",
            "fr-MG": "French [Madagascar]",
            "fr-ML": "French [Mali]",
            "fr-MU": "French [Mauritius]",
            "fr-NE": "French [Niger]",
            "fr-SN": "French [Senegal]",
            "fr-TN": "French [Tunisia]",
            gl: "Galician",
            "gl-ES": "Galician [Spain]",
            gu: "Gujarati",
            "gu-IN": "Gujarati [India]",
            he: "Hebrew",
            "he-IL": "Hebrew [Israel]",
            hi: "Hindi",
            "hi-IN": "Hindi [India]",
            hr: "Croatian",
            "hr-BA": "Croatian [Bosnia and Herzegovina]",
            "hr-HR": "Croatian [Croatia]",
            hu: "Hungarian",
            "hu-HU": "Hungarian [Hungary]",
            hy: "Armenian",
            "hy-AM": "Armenian [Armenia]",
            id: "Indonesian",
            "id-ID": "Indonesian [Indonesia]",
            is: "Icelandic",
            "is-IS": "Icelandic [Iceland]",
            it: "Italian",
            "it-CH": "Italian [Switzerland]",
            "it-IT": "Italian [Italy]",
            ja: "Japanese",
            "ja-JP": "Japanese [Japan]",
            ka: "Georgian",
            "ka-GE": "Georgian [Georgia]",
            kk: "Kazakh",
            "kk-KZ": "Kazakh [Kazakhstan]",
            kn: "Kannada",
            "kn-IN": "Kannada [India]",
            ko: "Korean",
            "ko-KR": "Korean [Korea]",
            kok: "Konkani",
            "kok-IN": "Konkani [India]",
            ky: "Kyrgyz",
            "ky-KG": "Kyrgyz [Kyrgyzstan]",
            lt: "Lithuanian",
            "lt-LT": "Lituanian [Lithuania]",
            lv: "Latvian",
            "lv-LV": "Latvian [Latvia]",
            mi: "Maori",
            "mi-NZ": "Maori [New Zealand]",
            mk: "FYRO Macedonian",
            "mk-MK": "FYRO Macedonian [Former Yugoslav Republic of Macedonia]",
            mn: "Mongolian",
            "mn-MN": "Mongolian [Mongolia]",
            mr: "Marathi",
            "mr-IN": "Marathi [India]",
            ms: "Malay",
            "ms-BN": "Malay [Brunei Darussalam]",
            "ms-MY": "Malay [Malaysia]",
            mt: "Maltese",
            "mt-MT": "Maltese [Malta]",
            nb: "Norwegian [Bokm?l]",
            "nb-NO": "Norwegian [Bokm?l] [Norway]",
            nl: "Dutch",
            "nl-BE": "Dutch [Belgium]",
            "nl-NL": "Dutch [Netherlands]",
            "nn-NO": "Norwegian [Nynorsk] [Norway]",
            no: "Norwegian",
            ns: "Northern Sotho",
            "ns-ZA": "Northern Sotho [South Africa]",
            pa: "Punjabi",
            "pa-IN": "Punjabi [India]",
            pl: "Polish",
            "pl-PL": "Polish [Poland]",
            ps: "Pashto",
            "ps-AR": "Pashto [Afghanistan]",
            pt: "Portuguese",
            "pt-BR": "Portuguese [Brazil]",
            "pt-PT": "Portuguese [Portugal]",
            qu: "Quechua",
            "qu-BO": "Quechua [Bolivia]",
            "qu-EC": "Quechua [Ecuador]",
            "qu-PE": "Quechua [Peru]",
            ro: "Romanian",
            "ro-RO": "Romanian [Romania]",
            ru: "Russian",
            "ru-RU": "Russian [Russia]",
            sa: "Sanskrit",
            "sa-IN": "Sanskrit [India]",
            se: "Sami [Northern]",
            "se-FI": "Sami [Inari] [Finland]",
            "se-NO": "Sami [Southern] [Norway]",
            "se-SE": "Sami [Southern] [Sweden]",
            sk: "Slovak",
            "sk-SK": "Slovak [Slovakia]",
            sl: "Slovenian",
            "sl-SI": "Slovenian [Slovenia]",
            sq: "Albanian",
            "sq-AL": "Albanian [Albania]",
            "sr-BA": "Serbian [Cyrillic] [Bosnia and Herzegovina]",
            "sr-SP": "Serbian [Cyrillic] [Serbia and Montenegro]",
            sv: "Swedish",
            "sv-FI": "Swedish [Finland]",
            "sv-SE": "Swedish [Sweden]",
            sw: "Swahili",
            "sw-KE": "Swahili [Kenya]",
            syr: "Syriac",
            "syr-SY": "Syriac [Syria]",
            ta: "Tamil",
            "ta-IN": "Tamil [India]",
            te: "Telugu",
            "te-IN": "Telugu [India]",
            th: "Thai",
            "th-TH": "Thai [Thailand]",
            tl: "Tagalog",
            "tl-PH": "Tagalog [Philippines]",
            tn: "Tswana",
            "tn-ZA": "Tswana [South Africa]",
            tr: "Turkish",
            "tr-TR": "Turkish [Turkey]",
            ts: "Tsonga",
            tt: "Tatar",
            "tt-RU": "Tatar [Russia]",
            uk: "Ukrainian",
            "uk-UA": "Ukrainian [Ukraine]",
            ur: "Urdu",
            "ur-PK": "Urdu [Islamic Republic of Pakistan]",
            uz: "Uzbek [Latin]",
            "uz-UZ": "Uzbek [Cyrillic] [Uzbekistan]",
            vi: "Vietnamese",
            "vi-VN": "Vietnamese [Vietnam]",
            xh: "Xhosa",
            "xh-ZA": "Xhosa [South Africa]",
            zh: "Chinese",
            "zh-CN": "Chinese [S]",
            "zh-HK": "Chinese [Hong Kong]",
            "zh-MO": "Chinese [Macau]",
            "zh-SG": "Chinese [Singapore]",
            "zh-TW": "Chinese [T]",
            "zh-hans": "Chinese [Simplified]",
            zu: "Zulu",
            "zu-ZA": "Zulu [South Africa]"
        }
    }
        , {}],
    398: [function (e, t, i) {
        "use strict";
        var n = e("./Translations")
            , r = e("./DefaultLabelStrings")
            , o = window.document.documentElement
            , s = void 0;
        try {
            s = window.top.document.documentElement
        } catch (e) {
            s = o
        }
        var a = e("@marcom/ac-ajax-xhr")
            , l = {}
            , c = function (e) {
                var t = void 0;
                try {
                    t = e || s.getAttribute("lang")
                } catch (e) {
                    t = o.getAttribute("lang")
                }
                var i = void 0;
                if (t)
                    switch (t.toLowerCase()) {
                        case "es-418":
                            i = "es-LA";
                            break;
                        case "pt":
                            i = "pt-BR";
                            break;
                        default:
                            i = t
                    }
                else
                    i = "en-US";
                return i
            }
            , u = function (e) {
                return e = c(e),
                    void 0 !== l[e]
            };
        t.exports = {
            getLanguage: c,
            getTranslation: function (e) {
                var t = c((e = e || {}).lang);
                if (u(t))
                    return e.callback ? (e.callback(l[t]),
                        null) : l[t];
                if (!e.callback)
                    throw new Error("To use Localization.getTranslation you must either pass a callback or ensure the translation is ready via Localization.translationReady");
                var i = e.basePath || "/ac/ac-video/latest/json/localization/"
                    , o = function () {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ""
                            , t = Object.keys(n).filter(function (t) {
                                return t.slice(-1 * e.length, t.length) === e
                            });
                        return !!t.length && t[0]
                    }(t)
                    , s = void 0;
                s = n[t] ? i + n[t] : o ? i + n[o] : i + n["en-US"];
                var h = r
                    , d = function () {
                        l[t] = h,
                            e.callback(h)
                    };
                return e.forceEnglishLabels ? (d(),
                    l[t]) : (a.get(s, {
                        success: function (i) {
                            try {
                                h = Object.assign(h, JSON.parse(i)),
                                    l[t] = h,
                                    e.callback(h)
                            } catch (e) {
                                d()
                            }
                        },
                        error: d
                    }),
                        null)
            },
            translationReady: u
        }
    }
        , {
        "./DefaultLabelStrings": 396,
        "./Translations": 399,
        "@marcom/ac-ajax-xhr": 195
    }],
    399: [function (e, t, i) {
        "use strict";
        t.exports = {
            "ar-AE": "ar-AE.json",
            "ar-BH": "ar-BH.json",
            "ar-EG": "ar-EG.json",
            "ar-JO": "ar-JO.json",
            "ar-KW": "ar-KW.json",
            "ar-OM": "ar-OM.json",
            "ar-QA": "ar-QA.json",
            "ar-SA": "ar-SA.json",
            "bg-BG": "bg-BG.json",
            "cs-CZ": "cs-CZ.json",
            "da-DK": "da-DK.json",
            "de-AT": "de-AT.json",
            "de-CH": "de-CH.json",
            "de-DE": "de-DE.json",
            "de-LI": "de-LI.json",
            "dk-DK": "dk-DK.json",
            "ee-EE": "ee-EE.json",
            "el-GR": "el-GR.json",
            en: "en.json",
            "en-419": "en-419.json",
            "en-AE": "en-AE.json",
            "en-AM": "en-AM.json",
            "en-AP": "en-AP.json",
            "en-AU": "en-AU.json",
            "en-AZ": "en-AZ.json",
            "en-BH": "en-BH.json",
            "en-BW": "en-BW.json",
            "en-BY": "en-BY.json",
            "en-CA": "en-CA.json",
            "en-EG": "en-EG.json",
            "en-GB": "en-GB.json",
            "en-GE": "en-GE.json",
            "en-GW": "en-GW.json",
            "en-HK": "en-HK.json",
            "en-IE": "en-IE.json",
            "en-IL": "en-IL.json",
            "en-IN": "en-IN.json",
            "en-JO": "en-JO.json",
            "en-KE": "en-KE.json",
            "en-KG": "en-KG.json",
            "en-KR": "en-KR.json",
            "en-KW": "en-KW.json",
            "en-KZ": "en-KZ.json",
            "en-MD": "en-MD.json",
            "en-ME": "en-ME.json",
            "en-MK": "en-MK.json",
            "en-MT": "en-MT.json",
            "en-MY": "en-MY.json",
            "en-MZ": "en-MZ.json",
            "en-NG": "en-NG.json",
            "en-NZ": "en-NZ.json",
            "en-OM": "en-OM.json",
            "en-PH": "en-PH.json",
            "en-QA": "en-QA.json",
            "en-SA": "en-SA.json",
            "en-SG": "en-SG.json",
            "en-SI": "en-SI.json",
            "en-TJ": "en-TJ.json",
            "en-TM": "en-TM.json",
            "en-UG": "en-UG.json",
            "en-US": "en-US.json",
            "en-UZ": "en-UZ.json",
            "en-VN": "en-VN.json",
            "en-ZA": "en-ZA.json",
            es: "es.json",
            "es-419": "es-419.json",
            "es-CL": "es-CL.json",
            "es-CO": "es-CO.json",
            "es-ES": "es-ES.json",
            "es-LA": "es-LA.json",
            "es-MX": "es-MX.json",
            "et-EE": "et-EE.json",
            "fi-FI": "fi-FI.json",
            fr: "fr.json",
            "fr-BE": "fr-BE.json",
            "fr-CA": "fr-CA.json",
            "fr-CF": "fr-CF.json",
            "fr-CH": "fr-CH.json",
            "fr-CI": "fr-CI.json",
            "fr-CM": "fr-CM.json",
            "fr-FR": "fr-FR.json",
            "fr-GN": "fr-GN.json",
            "fr-GQ": "fr-GQ.json",
            "fr-LU": "fr-LU.json",
            "fr-MA": "fr-MA.json",
            "fr-MG": "fr-MG.json",
            "fr-ML": "fr-ML.json",
            "fr-MU": "fr-MU.json",
            "fr-NE": "fr-NE.json",
            "fr-SN": "fr-SN.json",
            "fr-TN": "fr-TN.json",
            "hr-HR": "hr-HR.json",
            "hu-HU": "hu-HU.json",
            "id-ID": "id-ID.json",
            "it-IT": "it-IT.json",
            ja: "ja.json",
            "ja-JP": "ja-JP.json",
            "ko-KR": "ko-KR.json",
            "lt-LT": "lt-LT.json",
            "lv-LV": "lv-LV.json",
            "nl-BE": "nl-BE.json",
            "nl-NL": "nl-NL.json",
            "no-NO": "no-NO.json",
            "pl-PL": "pl-PL.json",
            pt: "pt.json",
            "pt-BR": "pt-BR.json",
            "pt-PT": "pt-PT.json",
            "ro-RO": "ro-RO.json",
            "ru-RU": "ru-RU.json",
            "sa-AR": "sa-AR.json",
            "sk-SK": "sk-SK.json",
            "sv-SE": "sv-SE.json",
            "th-TH": "th-TH.json",
            "tr-TR": "tr-TR.json",
            "uk-UA": "uk-UA.json",
            "vi-VN": "vi-VN.json",
            zh: "zh.json",
            "zh-CN": "zh-CN.json",
            "zh-HK": "zh-HK.json",
            "zh-MO": "zh-MO.json",
            "zh-TW": "zh-TW.json"
        }
    }
        , {}],
    400: [function (e, t, i) {
        "use strict";
        var n = e("./PopUp")
            , r = function (e) {
                this.el = e.el,
                    this._player = e.player,
                    this._popUp = new n(e),
                    this.el.appendChild(this._popUp.el)
            }
            , o = r.prototype;
        o.setData = function (e) {
            this._popUp.setData(e)
        }
            ,
            o.show = function () {
                this.el.classList.remove("hidden"),
                    this._popUp.show()
            }
            ,
            o.hide = function () {
                this.el.classList.add("hidden"),
                    this._popUp.hide()
            }
            ,
            o.setPopUpPosition = function (e) {
                this._popUp.setPopUpPosition(e)
            }
            ,
            o.destroy = function () {
                this._popUp.destroy()
            }
            ,
            t.exports = r
    }
        , {
        "./PopUp": 401
    }],
    401: [function (e, t, i) {
        "use strict";
        var n = e("../templates/overlays/trickplay-overlay.html")
            , r = e("../../utils/Time")
            , o = e("./ThumbnailHandler")
            , s = e("@marcom/function-utils/throttle")
            , a = e("../../utils/liveStreamLookback")
            , l = function (e) {
                this._player = e.player,
                    this.el = document.createElement("div"),
                    this.el.style.opacity = "0",
                    this.el.innerHTML = n,
                    this._player.isDvr() ? this._liveStreamLookback = a : this._liveStreamLookback = 0,
                    this._thumbnailHandler = new o({
                        el: this.el.querySelector(".ac-video-trickplay-image"),
                        player: this._player,
                        numberOfImages: e.numberOfImages
                    }),
                    this._timeLabel = this.el.querySelector(".ac-video-trickplay-time"),
                    this._chapterLabel = this.el.querySelector(".ac-video-trickplay-chapter-title"),
                    this._bindMethods(),
                    this._addEventListeners()
            }
            , c = l.prototype;
        c._initPointerTracking = function () {
            this._scrubberView = this._player.controls.scrubberView,
                this._scrubberView && (this._runnableTrack = this._scrubberView.el.querySelector(".ac-slider-runnable-track"),
                    this._calcOffsets(),
                    this._scrubberView.el.addEventListener("mouseover", this.show),
                    this._scrubberView.el.addEventListener("mouseout", this.hide),
                    this._scrubberView.el.addEventListener("focusin", this._onScrubberFocusIn),
                    this._scrubberView.el.addEventListener("focusout", this._onScrubberFocusOut),
                    this._scrubberView.el.addEventListener("mousedown", this._startScrubbing),
                    this._scrubberView.el.addEventListener("mouseup", this._endScrubbing),
                    this._scrubberView.el.addEventListener("mousemove", this._onTrackerUpdate),
                    this._scrubberView.el.addEventListener("mousemove", this._setThumbnail),
                    this._player.on("resize", this._throttledCalcOffsets),
                    window.addEventListener("resize", this._throttledCalcOffsets))
        }
            ,
            c._bindMethods = function () {
                this.show = this.show.bind(this),
                    this.hide = this.hide.bind(this),
                    this._onDurationChange = this._onDurationChange.bind(this),
                    this._onLoadedMetaData = this._onLoadedMetaData.bind(this),
                    this._startScrubbing = this._startScrubbing.bind(this),
                    this._endScrubbing = this._endScrubbing.bind(this),
                    this._initPointerTracking = this._initPointerTracking.bind(this),
                    this._onTrackerUpdate = this._onTrackerUpdate.bind(this),
                    this._setThumbnail = this._setThumbnail.bind(this),
                    this._calcOffsets = this._calcOffsets.bind(this),
                    this._onScrubberFocusIn = this._onScrubberFocusIn.bind(this),
                    this._onScrubberFocusOut = this._onScrubberFocusOut.bind(this),
                    this._throttledCalcOffsets = s(this._calcOffsets, 30)
            }
            ,
            c._startScrubbing = function (e) {
                this._thumbnailHandler.el.classList.add("hidden"),
                    this._scrubberView.el.removeEventListener("mousemove", this._setThumbnail),
                    this._scrubberView.el.removeEventListener("mouseout", this.hide),
                    document.addEventListener("mouseup", this._endScrubbing),
                    document.addEventListener("mousemove", this._onTrackerUpdate)
            }
            ,
            c._endScrubbing = function (e) {
                e.target === this._scrubberView.el && this.hide(),
                    this._scrubberView.el.addEventListener("mousemove", this._setThumbnail),
                    this._scrubberView.el.addEventListener("mouseout", this.hide),
                    document.removeEventListener("mouseup", this._endScrubbing),
                    document.removeEventListener("mousemove", this._onTrackerUpdate),
                    this._setThumbnail(e),
                    this._thumbnailHandler.el.classList.remove("hidden")
            }
            ,
            c._calcOffsets = function () {
                this._onLoadedMetaData();
                var e = this._player.el.getBoundingClientRect();
                this._offsetLeft = e.left;
                var t = this._runnableTrack.getBoundingClientRect();
                this._leftBoundary = t.left - this._offsetLeft,
                    this._rightBoundary = t.right - this._offsetLeft,
                    this._imgWidth = this.el.firstElementChild.getBoundingClientRect().width
            }
            ,
            c._onLoadedMetaData = function () {
                var e = this._player.getMediaElement().videoWidth
                    , t = this._player.getMediaElement().videoHeight
                    , i = -1 !== (this._player.getCurrentSrc() || "").indexOf("-tft-");
                this.el.classList.remove("square-video"),
                    this.el.classList.remove("vertical-video"),
                    this.el.classList.remove("tft-video"),
                    i ? (this.el.classList.add("tft-video"),
                        this._thumbnailHandler.setVertical(!1)) : e < t ? (this.el.classList.add("vertical-video"),
                            this._thumbnailHandler.setVertical(!0)) : e === t ? (this.el.classList.add("square-video"),
                                this._thumbnailHandler.setVertical(!1)) : this._thumbnailHandler.setVertical(!1)
            }
            ,
            c._addEventListeners = function () {
                this._player.on("durationchange", this._onDurationChange),
                    this._player.once("controlsready", this._initPointerTracking),
                    this._player.on("loadedmetadata", this._calcOffsets)
            }
            ,
            c._removeEventListeners = function () {
                this._player.off("durationchange", this._onDurationChange),
                    this._player.off("controlsready", this._initPointerTracking),
                    this._player.off("canplaythrough", this._canPlayThroughHander),
                    this._player.off("playing", this._canPlayThroughHander),
                    this._player.off("loadedmetadata", this._calcOffsets),
                    this._player.off("resize", this._throttledCalcOffsets),
                    window.removeEventListener("resize", this._throttledCalcOffsets),
                    this._scrubberView.el.removeEventListener("mouseover", this.show),
                    this._scrubberView.el.removeEventListener("mouseout", this.hide),
                    this._scrubberView.el.removeEventListener("focusin", this._onScrubberFocusIn),
                    this._scrubberView.el.removeEventListener("focusout", this._onScrubberFocusOut),
                    this._scrubberView.el.removeEventListener("mouseout", this.hide),
                    this._scrubberView.el.removeEventListener("mousemove", this._onTrackerUpdate),
                    this._scrubberView.el.removeEventListener("mousemove", this._setThumbnail),
                    document.removeEventListener("mouseup", this._endScrubbing),
                    document.removeEventListener("mousemove", this._onTrackerUpdate)
            }
            ,
            c._getDuration = function () {
                return this._cachedDuration && isNaN(this._cachedDuration) || (this._cachedDuration = Math.max(0, this._player.getDuration() - this._liveStreamLookback / 2)),
                    this._cachedDuration
            }
            ,
            c.setPopUpPosition = function (e) {
                this.show();
                var t = e / this._getDuration() * (this._rightBoundary - this._leftBoundary) - this._imgWidth / 2 - 1
                    , i = this._leftBoundary + t;
                this.el.firstElementChild.style.left = i + "px",
                    this._time = e,
                    this._timeLabel.innerText = r.formatTime(e, this._getDuration()),
                    this._refreshChapter(),
                    this._setThumbnail()
            }
            ,
            c._onScrubberFocusIn = function (e) {
                if (e.target.classList.contains("ac-slider-chapter-container")) {
                    this._calcOffsets();
                    var t = Array.from(e.target.parentElement.children).indexOf(e.target)
                        , i = this._player.getChapters()[t]["start-time"];
                    this.setPopUpPosition(i),
                        this.show()
                }
            }
            ,
            c._onScrubberFocusOut = function (e) {
                this.hide()
            }
            ,
            c._onTrackerUpdate = function (e) {
                this._calcOffsets();
                var t = Math.min(Math.max(e.clientX - this._offsetLeft, this._leftBoundary), this._rightBoundary);
                this.el.firstElementChild.style.left = t - this._imgWidth / 2 + "px";
                var i = this._scrubberView.getClientXValue(e);
                this._cachedTrackerUpdate = e,
                    this._setTimeFromPercentPosition(Math.max(i, 0))
            }
            ,
            c._onDurationChange = function (e) {
                this._cachedDuration = Math.max(0, this._player.getDuration() - this._liveStreamLookback / 2),
                    this._cachedTrackerUpdate && (this._onTrackerUpdate(this._cachedTrackerUpdate),
                        this._setThumbnail()),
                    this.el.style.opacity = "1"
            }
            ,
            c._setThumbnail = function (e) {
                this._thumbnailHandler.setTime(this._time, this._getDuration())
            }
            ,
            c._setTimeFromPercentPosition = function (e) {
                var t = e / this._scrubberView.getMax();
                this._time = Math.min(t * this._getDuration(), this._getDuration());
                var i = r.formatTime(this._time, this._getDuration());
                this._timeLabel.innerText = i,
                    this._refreshChapter()
            }
            ,
            c._refreshChapter = function () {
                var e = this._player.getChapterForTime(this._time, 0);
                if (e && e.titles.length) {
                    var t = e.titles.find(function (e) {
                        return "en" === e.language
                    }) || e.titles[0];
                    this._chapterLabel.innerText = t.title,
                        this._chapterLabel.classList.remove("hidden")
                } else
                    this._chapterLabel.classList.add("hidden")
            }
            ,
            c.setData = function (e) {
                this.el.style.opacity = "0",
                    this._canPlayThroughHander && (this._player.off("canplaythrough", this._canPlayThroughHander),
                        this._player.off("playing", this._canPlayThroughHander),
                        this._canPlayThroughHander = null),
                    e && this._player.getReadyState() > 2 ? (this.el.style.opacity = "1",
                        this._thumbnailHandler.setData(e),
                        this._cachedTrackerUpdate && (this._onTrackerUpdate(this._cachedTrackerUpdate),
                            this._setThumbnail())) : (this._thumbnailHandler.setData(null),
                                e ? (this._canPlayThroughHander = this.setData.bind(this, e),
                                    this._player.on("canplaythrough", this._canPlayThroughHander),
                                    this._player.on("playing", this._canPlayThroughHander)) : this.el.style.opacity = "1"),
                    this._onLoadedMetaData()
            }
            ,
            c.show = function (e) {
                e && this._onTrackerUpdate(e),
                    this.el.firstElementChild.classList.remove("hidden")
            }
            ,
            c.hide = function () {
                this.el.firstElementChild.classList.add("hidden")
            }
            ,
            c.destroy = function () {
                this._canPlayThroughHander && (this._player.off("canplaythrough", this._canPlayThroughHander),
                    this._player.off("playing", this._canPlayThroughHander)),
                    this._removeEventListeners(),
                    this._throttledCalcOffsets && this._throttledCalcOffsets.cancel(),
                    this._scrubberView = null
            }
            ,
            t.exports = l
    }
        , {
        "../../utils/Time": 413,
        "../../utils/liveStreamLookback": 415,
        "../templates/overlays/trickplay-overlay.html": 405,
        "./ThumbnailHandler": 402,
        "@marcom/function-utils/throttle": 327
    }],
    402: [function (e, t, i) {
        "use strict";
        var n = function (e) {
            this.el = e.el,
                this._player = e.player,
                this._imgWidth = e.imgWidth || 144,
                this.el.style.backgroundSize = 100 * this._numberOfImages + "% 100%"
        }
            , r = n.prototype;
        r.setVertical = function (e) {
            this._imgWidth = e ? 81 : 144
        }
            ,
            r.getWidth = function () {
                return this._imgWidth
            }
            ,
            r.setData = function (e) {
                if (!e)
                    return this._imgUrl = null,
                        void (this.el.style.backgroundImage = "");
                if (e.url !== this._imgUrl) {
                    this._imgUrl = e.url,
                        this._numberOfImages = parseInt(e.numberOfImages || 120),
                        this.el.style.backgroundSize = 100 * this._numberOfImages + "% 100%",
                        this.el.style.backgroundImage = "",
                        this.el.classList.add("hidden");
                    var t = this._loadImage(this._imgUrl).then(function () {
                        this._imageLoadPromise === t && (this.el.style.backgroundImage = 'url("' + this._imgUrl + '")',
                            this._imageLoadPromise = null,
                            this.el.classList.remove("hidden"))
                    }
                        .bind(this));
                    this._imageLoadPromise = t
                }
            }
            ,
            r._loadImage = function (e) {
                return new Promise(function (t, i) {
                    var n = new Image;
                    n.onload = function () {
                        t()
                    }
                        ,
                        n.onerror = function () {
                            i()
                        }
                        ,
                        n.src = e
                }
                )
            }
            ,
            r.setTime = function (e, t) {
                var i = e / t
                    , n = Math.min(Math.round(i * this._numberOfImages), this._numberOfImages - 1) / (this._numberOfImages - 1) * 100;
                this.el.style.backgroundPositionX = n + "%"
            }
            ,
            r.destroy = function () {
                this._imageLoadPromise && this._imageLoadPromise.cancel()
            }
            ,
            t.exports = n
    }
        , {}],
    403: [function (e, t, i) {
        "use strict";
        var n = e("../templates/states/SharingState.html")
            , r = e("../templates/states/IFrameEmbed.html")
            , o = e("@marcom/ac-console/log")
            , s = e("@marcom/ac-social").Dialog
            , a = e("@marcom/ac-string/supplant")
            , l = e("../localization/Localization")
            , c = e("@marcom/ac-accessibility/helpers/TabManager")
            , u = void 0;
        try {
            u = e("@marcom/ac-analytics-share/factory/create")
        } catch (e) {
            o("ac-analytics-share failed to load, are you sure you've included it?")
        }
        var h = e("@marcom/useragent-detect").os
            , d = h.ios || h.android
            , p = function (e) {
                this.el || this._initializeElement(e.el, e.template),
                    this._player = e.player,
                    this._parentView = e.parentView,
                    this._clickedShareButton = null,
                    this._container = this.el.querySelector(".container"),
                    this._sharingButtonContainer = this.el.querySelector(".sharing-button-container"),
                    this._facebookButton = this.el.querySelector(".acv-fb-share"),
                    this._twitterButton = this.el.querySelector(".acv-tw-share"),
                    this._lineButton = this.el.querySelector(".acv-line-share"),
                    this._copyLinkButton = this.el.querySelector(".copy-link"),
                    this._copyEmbedCodeButton = this.el.querySelector(".copy-embed-code"),
                    this._copyTextArea = this.el.querySelector(".copy-area"),
                    this._copyCloseButton = this.el.querySelector(".textinput-close-button"),
                    this._closeButton = this.el.querySelector(".close-button"),
                    !1 === e.analytics && (u = null),
                    d && (this.el.firstChild.classList.add("mobile"),
                        this._player.on("loadstart", function () {
                            this._getClientWidth() > 735 && this.el.firstChild.classList.add("mobile-large")
                        }
                            .bind(this))),
                    this._bindMethods(),
                    this._addEventListeners(),
                    this._syncSocialShareHidden()
            }
            , f = p.prototype;
        f._initializeElement = function (e, t) {
            e ? this.el = e : (this.el = document.createElement("div"),
                this._templateData = l.getTranslation(),
                this.el.innerHTML = a((t || n).toString(), this._templateData))
        }
            ,
            f.setData = function (e) {
                if (e) {
                    if (this._parentView.show(),
                        e.allowEmbed && this.el.firstChild.classList.add("embed-enabled"),
                        this._sharingUrl = e.originatorUrl || window.location.href,
                        this._videoid = e.videoid,
                        this._hideExtension = e.hideExtension,
                        this._embedPath = e.embedpath || "https://www.apple.com/embed/",
                        this._hideFacebook = e.hideFacebookShare || !1,
                        this._hideTwitter = e.hideTwitterShare || !1,
                        this._hideLine = void 0 === e.hideLineShare || e.hideLineShare,
                        this._title = e.title || "Video Player",
                        this._syncSocialShareHidden(),
                        this._container.classList.remove("textarea-active"),
                        u && !1 !== e.analytics && e.videoid)
                        try {
                            this._initAnalyticsAttributes(e),
                                this._analyticsObserver || (this._analyticsObserver = u({
                                    context: this.el
                                }))
                        } catch (e) {
                            o("ac-analytics-share failed to load, are you sure you've included it?")
                        }
                } else
                    this._parentView.hide()
            }
            ,
            f._bindMethods = function () {
                this._doFacebookShare = this._doSocialShare.bind(this, s.FACEBOOK_SHARE),
                    this._doTwitterShare = this._doSocialShare.bind(this, s.TWITTER_TWEET),
                    this._doLineShare = this._doSocialShare.bind(this, s.LINE_SHARE),
                    this._copyUrl = this._copyUrl.bind(this),
                    this._copyEmbedCode = this._copyEmbedCode.bind(this),
                    this._closeCopyArea = this._showTextArea.bind(this, !1),
                    this._closeState = this._closeState.bind(this)
            }
            ,
            f._addEventListeners = function () {
                this._facebookButton && this._facebookButton.addEventListener("click", this._doFacebookShare),
                    this._twitterButton && this._twitterButton.addEventListener("click", this._doTwitterShare),
                    this._lineButton && this._lineButton.addEventListener("click", this._doLineShare),
                    this._copyLinkButton && this._copyLinkButton.addEventListener("click", this._copyUrl),
                    this._copyEmbedCodeButton && this._copyEmbedCodeButton.addEventListener("click", this._copyEmbedCode),
                    this._copyCloseButton && this._copyCloseButton.addEventListener("click", this._closeCopyArea),
                    this._closeButton && this._closeButton.addEventListener("click", this._closeState)
            }
            ,
            f._removeEventListeners = function () {
                this._facebookButton && this._facebookButton.removeEventListener("click", this._doFacebookShare),
                    this._twitterButton && this._twitterButton.removeEventListener("click", this._doTwitterShare),
                    this._lineButton && this._lineButton.removeEventListener("click", this._doLineShare),
                    this._copyLinkButton && this._copyLinkButton.removeEventListener("click", this._copyUrl),
                    this._copyEmbedCodeButton && this._copyEmbedCodeButton.removeEventListener("click", this._copyEmbedCode),
                    this._copyCloseButton && this._copyCloseButton.removeEventListener("click", this._closeCopyArea),
                    this._closeButton && this._closeButton.removeEventListener("click", this._closeState)
            }
            ,
            f._syncSocialShareHidden = function () {
                this._facebookButton && (this._hideFacebook ? this._facebookButton.classList.add("hide-button") : this._facebookButton.classList.remove("hide-button")),
                    this._twitterButton && (this._hideTwitter ? this._twitterButton.classList.add("hide-button") : this._twitterButton.classList.remove("hide-button")),
                    this._lineButton && (this._hideLine ? this._lineButton.classList.add("hide-button") : this._lineButton.classList.remove("hide-button"))
            }
            ,
            f._doSocialShare = function (e) {
                this._clickedShareButton = null,
                    this._copyLinkButton.classList.remove("active"),
                    this._copyEmbedCodeButton.classList.remove("active"),
                    this._showTextArea(!1),
                    s.create(e, {
                        url: this._sharingUrl,
                        title: this._title
                    })
            }
            ,
            f._showTextArea = function (e) {
                e ? (this._container.classList.add("textarea-active"),
                    this._copyTextArea.select(),
                    d || this._copyTextArea.setAttribute("readonly", "")) : (this._container.classList.remove("textarea-active"),
                        this._copyLinkButton.classList.remove("active"),
                        this._copyEmbedCodeButton.classList.remove("active"),
                        this._copyTextArea.removeAttribute("readonly"),
                        this._clickedShareButton && this._clickedShareButton.focus(),
                        this._copyLinkButton.setAttribute("aria-label", this._templateData.copylink),
                        this._copyEmbedCodeButton.setAttribute("aria-label", this._templateData.copyembed))
            }
            ,
            f._copyUrl = function () {
                this._clearTextArea(),
                    this._copyTextArea.value = this._sharingUrl,
                    this._copyLinkButton.classList.add("active"),
                    this._copyLinkButton.setAttribute("aria-label", this._templateData.selectlink),
                    this._showTextArea(!0),
                    this._clickedShareButton = this._copyLinkButton,
                    this._copyTextArea.setAttribute("aria-label", this._templateData.copylink),
                    this._copyTextArea.select(),
                    document.execCommand && document.execCommand("copy")
            }
            ,
            f._clearTextArea = function () {
                window.getSelection().removeAllRanges(),
                    this._copyLinkButton.classList.remove("active"),
                    this._copyEmbedCodeButton.classList.remove("active"),
                    this._copyTextArea.removeAttribute("readonly")
            }
            ,
            f._copyEmbedCode = function () {
                this._clearTextArea(),
                    this._copyTextArea.value = a(r, {
                        videoid: this._videoid,
                        embedCodePath: this._embedPath,
                        width: this._player.getMediaWidth(),
                        height: this._player.getMediaHeight(),
                        title: this._title,
                        extension: this._hideExtension ? "" : ".html"
                    }),
                    this._copyEmbedCodeButton.classList.add("active"),
                    this._copyEmbedCodeButton.setAttribute("aria-label", this._templateData.selectembed),
                    this._showTextArea(!0),
                    this._clickedShareButton = this._copyEmbedCodeButton,
                    this._copyTextArea.setAttribute("aria-label", this._templateData.copyembed),
                    this._copyTextArea.select()
            }
            ,
            f._focusFirstButton = function () {
                this._firstButton || (this._firstButton = c.getTabbableElements(this._sharingButtonContainer)[0]),
                    this._firstButton.focus()
            }
            ,
            f.show = function () {
                this._container.classList.add("showing")
            }
            ,
            f.hide = function () {
                this._clickedShareButton = null,
                    this._showTextArea(!1),
                    this._container.classList.remove("showing")
            }
            ,
            f._getClientHeight = function () {
                return this.el.clientHeight
            }
            ,
            f._getClientWidth = function () {
                return this.el.clientWidth
            }
            ,
            f.destroy = function () {
                this._removeEventListeners()
            }
            ,
            f._closeState = function () {
                this._showTextArea(!1),
                    0 === this._player.getCurrentTime() || this._player.getEnded() ? this._player.states.setState("initial") : this._player.states.setState("none")
            }
            ,
            f._getAnalyticsSource = function () {
                return "drawer"
            }
            ,
            f._initAnalyticsAttributes = function (e) {
                var t = [];
                this._facebookButton && t.push({
                    button: this._facebookButton,
                    title: "facebook",
                    events: "event85"
                }),
                    this._twitterButton && t.push({
                        button: this._twitterButton,
                        title: "twitter",
                        events: "event84"
                    }),
                    this._copyLinkButton && t.push({
                        button: this._copyLinkButton,
                        title: "copy-link",
                        events: "event89"
                    }),
                    this._copyEmbedCodeButton && t.push({
                        button: this._copyEmbedCodeButton,
                        title: "copy-embed-code",
                        events: "event101"
                    });
                var i = (-1 !== (e.url && e.url.indexOf(".m3u8")) ? "m3u8" : "mp4") + " via html5"
                    , n = this._getAnalyticsSource()
                    , r = e.videoid
                    , o = document.head.querySelectorAll('meta[property="analytics-track"]');
                o = o ? o[0].getAttribute("content") : "",
                    t.forEach(function (e) {
                        e.button.setAttribute("data-analytics-click", ""),
                            e.button.setAttribute("data-analytics-share", JSON.stringify({
                                title: r,
                                events: e.events,
                                prop2: o + " - " + r + " - " + e.title,
                                prop18: i,
                                eVar49: document.referrer,
                                eVar54: document.location.href,
                                eVar55: o + " - " + r,
                                eVar70: n
                            }))
                    }
                        .bind(this))
            }
            ,
            t.exports = p
    }
        , {
        "../localization/Localization": 398,
        "../templates/states/IFrameEmbed.html": 408,
        "../templates/states/SharingState.html": 409,
        "@marcom/ac-accessibility/helpers/TabManager": 189,
        "@marcom/ac-analytics-share/factory/create": 203,
        "@marcom/ac-console/log": 206,
        "@marcom/ac-social": 288,
        "@marcom/ac-string/supplant": 314,
        "@marcom/useragent-detect": 331
    }],
    404: [function (e, t, i) {
        "use strict";
        t.exports = '\n<div class="controls-container">\n\t<div class="{elementClassPrefix}-social-tray hidden"></div>\n\n\t<div class="center-button-container {elementClassPrefix}-play-pause-button-container">\n\t\t<div class="button-wrapper">\n\t\t\t<button type="button" class="ac-video-icon centered-button {elementClassPrefix}-play-pause-button {elementClassPrefix}-button no-autoplay" value="{playpause}" aria-label="{playpause}" role="button" tabindex="0" data-acv-active-area data-acv-draggable-area>\n\t\t\t\t<div class="loading-indicator-container"></div>\n\t\t\t</button>\n\t\t\t<span id=\'loading-status\' class="acv-visually-hidden" aria-live=\'polite\'></span>\n\t\t</div>\t\t\n\t</div>\n\n\t<div class="main-controls-container">\n\t\t<div class="ac-video-overlay-container"></div>\n\t\t<div class="main-controls">\n\t\t\t<div class="button-wrapper">\n\t\t\t\t<div class="main-controls-item controls-volume">\n\t\t\t\t\t<button type="button" class="ac-video-icon {elementClassPrefix}-toggle-mute-volume-button {elementClassPrefix}-button" value="{mutevolume}" aria-label="{mutevolume}" role="button" tabindex="0" data-acv-active-area></button>\n\t\t\t\t\t<div class="{elementClassPrefix}-volume-level-indicator" tabindex="0" aria-valuemin="0" aria-valuemax="100" min="0" max="100" aria-label="{adjustvolume}" role="slider" aria-orientation="vertical" step="0.05" data-acv-active-area></div>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<div class="button-wrapper">\n\t\t\t\t<button type="button" class="ac-video-icon main-controls-item {elementClassPrefix}-text-tracks-toggle-button {elementClassPrefix}-button no-text-tracks" value="{captionscontrol}" aria-label="{captionscontrol}" role="button" tabindex="0" data-acv-active-area></button>\n\t\t\t\t<div class="ac-video-ax-tracks-selector-container">\n\t\t\t\t    <div class="ac-video-ax-tracks-scroll-container">\n                        <div class="ac-video-audio-selector-container">\n                            <span class="ac-video-audio-selector-title">{audiotrackscontrol}</span>\n                            <ul class="{elementClassPrefix}-audio-selector" role="radiogroup" aria-label="{audiotrackscontrol}" data-acv-active-area></ul>\n                        </div>\n                        <div class="ac-video-captions-selector-container">\n                            <span class="ac-video-captions-selector-title">{subtitlescontrol}</span>\n                            <ul class="{elementClassPrefix}-captions-selector" role="radiogroup" aria-label="{subtitlescontrol}" data-acv-active-area></ul>\n                        </div>\n\t\t\t\t    </div>\n                </div>\n\t\t\t</div>\n\n\t\t\t<div class="main-controls-item controls-progress">\n\t\t\t\t<div class="controls-progress-time controls-progress-time-1">\n\t\t\t\t\t<div class="{elementClassPrefix}-elapsed-time-indicator" role="text" tabindex="-1">\n\t\t\t\t\t\t<span class="label">{elapsed}</span>\n\t\t\t\t\t\t<span class="{elementClassPrefix}-elapsed-time">00:00</span>\n\t\t\t\t\t\t<span class="{elementClassPrefix}-time-maxwidth" aria-hidden="true">44:44</span>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class="controls-progress-bar">\n\t\t\t\t\t<div class="{elementClassPrefix}-buffered-indicator"></div>\n\t\t\t\t\t<div class="{elementClassPrefix}-progress-indicator ac-slider-inactive" aria-label="progress-indicator" role="slider" precision="float" min="0" max="1" step="0.0005" value="0" tabindex="0" aria-valuemax="1" aria-valuemin="0" aria-valuenow="{value}" data-acv-active-area></div>\n\t\t\t\t</div>\n\t\t\t\t<div class="controls-progress-time controls-progress-time-2">\n\t\t\t\t\t<div class="{elementClassPrefix}-remaining-time-indicator" role="text" tabindex="-1">\n\t\t\t\t\t\t<span class="label">{remaining}</span>\n\t\t\t\t\t\t<span class="{elementClassPrefix}-remaining-time">-00:00</span>\n\t\t\t\t\t\t<span class="{elementClassPrefix}-time-maxwidth" aria-hidden="true">-44:44</span>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n                <div class="controls-progress-time controls-progress-dvr-label-container" role="button">\n                    <button type="button" tabindex="0" class="live-stream-dvr-text">{live}</button>\n                </div>\t\n\t\t\t</div>\n\n\t\t\t<div class="main-controls-item live-stream">\n\t\t\t\t<span class="live-stream-text">{livestream}</span>\n\t\t\t</div>\n\t\t\t\n\n\t\t\t<div class="button-wrapper">\n\t\t\t\t<button type="button" class="ac-video-icon main-controls-item {elementClassPrefix}-airplay-button {elementClassPrefix}-button airplay-unsupported" value="{airplay}" aria-label="{airplay}" role="button" tabindex="0" data-acv-active-area></button>\n\t\t\t</div>\n\n\t\t\t<div class="button-wrapper">\n\t\t\t\t<button type="button" class="ac-video-icon main-controls-item {elementClassPrefix}-picture-in-picture-button {elementClassPrefix}-button picture-in-picture-unsupported" value="{pictureinpicture}" aria-label="{pictureinpicture}" role="button" tabindex="0" data-acv-active-area></button>\n\t\t\t</div>\n\n\t\t\t<div class="button-wrapper">\n\t\t\t\t<button type="button" class="ac-video-icon main-controls-item {elementClassPrefix}-full-screen-button {elementClassPrefix}-button fullscreen-unsupported" value="{fullscreen}" aria-label="{fullscreen}" role="button" tabindex="0" data-acv-active-area></button>\n\t\t\t</div>\n\t\t\t\n\t\t</div>\n\t</div>\n\n\t<div class="end-state-wrapper">\n\t\t<div class="end-state-container"></div>\n\t</div>\n\n\n</div>\n\n<div class="compass-wrapper" data-acv-active-area>\n\t<div class="compass-background ac-video-icon"></div>\n\t<div class="compass-arrows">\n\t\t<button class="compass-arrow-top ac-video-icon" aria-label="{threesixtyup}" role="button" tabindex="0"></button>\n\t\t<button class="compass-arrow-right ac-video-icon" aria-label="{threesixtyright}" role="button" tabindex="0"></button>\n\t\t<button class="compass-arrow-bottom ac-video-icon" aria-label="{threesixtydown}" role="button" tabindex="0"></button>\n\t\t<button class="compass-arrow-left ac-video-icon" aria-label="{threesixtyleft}" role="button" tabindex="0"></button>\n\t</div>\n\t<div class="compass-field ac-video-icon"></div>\n\t<div class="compass-ring ac-video-icon"></div>\n\t<button class="compass" aria-label="{threesixtyicon}" role="button" tabindex="0"></button>\n</div>\n'
    }
        , {}],
    405: [function (e, t, i) {
        "use strict";
        t.exports = '<div class="ac-video-trickplay hidden" aria-hidden="true">\n    <div class="ac-video-trickplay-image">\n    </div>\n    <div class="ac-video-trickplay-chapter-title"></div>\n    <div class="ac-video-trickplay-time"></div>\n</div>'
    }
        , {}],
    406: [function (e, t, i) {
        "use strict";
        t.exports = '\n<div class="ac-slider-ax-track" role="slider" aria-valuemin="0" aria-valuemax="1" ></div>\n<div class="ac-slider-runnable-track">\n\t<div class="ac-slider-hover-track">\n\t\t<div class="ac-slider-hover-notch"></div>\n\t</div>\n\t<div class="ac-slider-thumb">\n\t\t<div class="ac-slider-thumb-background-wrapper">\n\t\t\t<div class="ac-slider-thumb-overlay"></div>\n\t\t\t<div class="ac-slider-thumb-background"></div>\n\t\t</div>\n\t</div>\n\t<div class="ac-slider-chapters-track"></div>\n\t<div class="ac-slider-inner-track">\n\t\t<div class="ac-slider-buffered"></div>\n\t\t<div class="ac-slider-scrubbed"></div>\n\t</div>\n</div>\n'
    }
        , {}],
    407: [function (e, t, i) {
        "use strict";
        t.exports = '<a class="end-state-link hidden"></a>'
    }
        , {}],
    408: [function (e, t, i) {
        "use strict";
        t.exports = '<iframe src="{embedCodePath}{videoid}{extension}" width="{width}" height="{height}" title="{title}" allowfullscreen></iframe>'
    }
        , {}],
    409: [function (e, t, i) {
        "use strict";
        t.exports = '<div class="sharing-state">\n    <div class="container" data-acv-active-area>\n        <div class="social-sharing-container">\n            <div class="sharing-button-container">\n                <button class="acv-fb-share ac-video-icon icon-share_fb" aria-label="{facebookshare}, {newwindow}"></button>\n                <button class="acv-tw-share ac-video-icon icon-share_twitter" aria-label="{twittershare}, {newwindow}"></button>\n                <button class="acv-line-share ac-video-icon icon-share_line" aria-label="{lineshare}, {newwindow}"></button>\n                <button class="copy-link ac-video-icon icon-share_link" aria-label="{copylink}"></button>\n                <button class="copy-embed-code ac-video-icon icon-share_embed" aria-label="{copyembed}"></button>\n            </div>\n        </div>\n        <div class="textarea-container">\n            <span>\n                <input class="copy-area form-textbox form-textbox-text disabled" type="text" id="copy-link" aria-label="{copylink}"></input>\n                <button class="textinput-close-button ac-video-icon icon-share_close" aria-label="{dismisscopy}"></button>\n            </span>\n        </div>\n    </div>\n</div>'
    }
        , {}],
    410: [function (e, t, i) {
        "use strict";
        t.exports = '\n<div class="ac-slider-runnable-track">\n\t<div class="ac-slider-background"></div>\n\t<div class="ac-slider-thumb-wrapper">\n\t\t<div class="ac-slider-thumb">\n\t\t\t<div class="ac-slider-thumb-background-wrapper">\n\t\t\t\t<div class="ac-slider-thumb-background"></div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<div class="ac-slider-inner-track">\n\t\t<div class="ac-slider-scrubbed"></div>\n\t</div>\n</div>\n'
    }
        , {}],
    411: [function (e, t, i) {
        "use strict";
        var n = e("@marcom/ac-event-emitter-micro").EventEmitterMicro
            , r = function (e) {
                n.call(this),
                    this.el = e.el || document.body,
                    this.breakpoints = e.breakpoints.sort(function (e, t) {
                        return e.minWidth - t.minWidth
                    }),
                    this._player = e.player,
                    this._breakPointsLength = this.breakpoints.length,
                    this._addClasses = e.addClass,
                    this._addEventListeners(),
                    this._onResize()
            }
            , o = n.prototype
            , s = r.prototype = Object.create(o);
        s.constructor = r,
            s._addEventListeners = function () {
                var e = this;
                this._boundOnResize = function () {
                    e._onResize.apply(e, arguments)
                }
                    ,
                    window.addEventListener("resize", this._boundOnResize),
                    window.addEventListener("orientationchange", this._boundOnResize),
                    window.addEventListener("DOMContentLoaded", this._boundOnResize)
            }
            ,
            s._removeEventListeners = function () {
                window.removeEventListener("resize", this._boundOnResize),
                    window.removeEventListener("orientationchange", this._boundOnResize),
                    window.addEventListener("DOMContentLoaded", this._boundOnResize)
            }
            ,
            s._onResize = function (e) {
                var t = this.el.clientWidth
                    , i = this._currentBreakpoint;
                if (!1 !== e && this._player.refreshSize(),
                    !i || !r.widthInBreakpoint(t, i)) {
                    var n = r.getBreakpointFromWidth(t, this.breakpoints, i, this._breakPointsLength);
                    this._addClasses && (this._currentBreakpoint && this.el.classList.remove(i.name),
                        this.el.classList.add(n.name)),
                        this._currentBreakpoint = n,
                        this.trigger("breakpointchange", n)
                }
            }
            ,
            s.getCurrentBreakpoint = function () {
                return this._currentBreakpoint
            }
            ,
            s.refresh = function () {
                this._onResize(!1)
            }
            ,
            s.destroy = function () {
                this._removeEventListeners(),
                    o.destroy.call(this)
            }
            ,
            r.getBreakpointFromElement = function (e, t) {
                return r.getBreakpointFromWidth(e.clientWidth, t)
            }
            ,
            r.getBreakpointFromWidth = function (e, t, i, n) {
                for (var r = 0, o = n || t.length; r < o; r++) {
                    var s = t[r];
                    if (s !== i && (e >= s.minWidth && e <= s.maxWidth))
                        return s
                }
                return null
            }
            ,
            r.widthInBreakpoint = function (e, t) {
                return e >= t.minWidth && e <= t.maxWidth
            }
            ,
            t.exports = r
    }
        , {
        "@marcom/ac-event-emitter-micro": 229
    }],
    412: [function (e, t, i) {
        "use strict";
        t.exports = {
            setItem: function (e, t) {
                return localStorage.setItem("acv-" + e, t)
            },
            getItem: function (e) {
                return localStorage.getItem("acv-" + e)
            },
            hasItem: function (e) {
                return null !== localStorage.getItem("acv-" + e)
            },
            removeItem: function (e) {
                return localStorage.removeItem("acv-" + e)
            },
            VOLUME_LEVEL: "volume-level",
            VOLUME_MUTED: "volume-muted",
            CC_LANGUAGE: "cc-language",
            AUDIO_TRACK_TYPE: "audiotrack-type",
            AUDIO_TRACK_LANGUAGE: "audiotrack-language"
        }
    }
        , {}],
    413: [function (e, t, i) {
        "use strict";
        var n = e("@marcom/ac-string/supplant")
            , r = {
                addLeadingZero: function (e, t) {
                    if (t = t || 2,
                        e < 10 || t > 2)
                        for (e = String(e); e.length < t;)
                            e = "0" + e;
                    return e
                },
                formatTime: function (e, t, i) {
                    return isNaN(e) ? "00:00" : (e = this.splitTime(Math.floor(e), t, function (e) {
                        return this.addLeadingZero(e, i)
                    }
                        .bind(this)),
                        n(t >= 3600 ? "{PN}{hours}:{minutes}:{seconds}" : "{PN}{minutes}:{seconds}", {
                            PN: e.negativeModifier,
                            hours: e.hours,
                            minutes: e.minutes,
                            seconds: e.seconds
                        }))
                },
                splitTime: function (e, t, i) {
                    i = i || function (e) {
                        return e
                    }
                        ;
                    var n = {
                        negativeModifier: "",
                        hours: 0,
                        minutes: 0,
                        seconds: 0
                    };
                    if (isNaN(e))
                        return n;
                    for (var r in n.negativeModifier = e < 0 ? "-" : "",
                        e = Math.abs(e),
                        n.hours = t >= 3600 ? Math.floor(e / 3600) : 0,
                        n.minutes = n.hours ? Math.floor(e / 60 % 60) : Math.floor(e / 60),
                        n.seconds = e % 60,
                        n)
                        "number" == typeof n[r] && "hours" !== r && (n[r] = i(n[r]));
                    return n
                },
                stringToNumber: function (e) {
                    for (var t = 0, i = e.split(":"); i.length;)
                        3 === i.length ? t += 3600 * parseFloat(i.shift()) : 2 === i.length ? t += 60 * parseFloat(i.shift()) : t += parseFloat(i.shift());
                    return t
                }
            };
        t.exports = r
    }
        , {
        "@marcom/ac-string/supplant": 314
    }],
    414: [function (e, t, i) {
        "use strict";
        t.exports = e("../../../.versionfile")
    }
        , {
        "../../../.versionfile": 149
    }],
    415: [function (e, t, i) {
        "use strict";
        t.exports = 60
    }
        , {}],
    416: [function (e, t, i) {
        "use strict";
        var n = {};
        t.exports = function (e) {
            return n[e] || (n[e] = new Promise(function (t, i) {
                var n = document.createElement("script");
                n.type = "text/javascript",
                    n.src = e,
                    n.onload = t,
                    n.onerror = i;
                try {
                    document.body.appendChild(n)
                } catch (e) {
                    i(e)
                }
            }
            )),
                n[e]
        }
    }
        , {}],
    417: [function (e, t, i) {
        "use strict";
        var n = e("@babel/runtime/helpers/interopRequireDefault")(e("@babel/runtime/helpers/typeof"))
            , r = "function" == typeof Symbol && "symbol" === (0,
                n.default)(Symbol.iterator) ? function (e) {
                    return (0,
                        n.default)(e)
                }
                : function (e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : (0,
                        n.default)(e)
                }
            , o = e("@marcom/ac-object/clone");
        t.exports = function e() {
            var t = Array.prototype.slice.call(arguments);
            if (t.length < 2)
                return o(t[0]);
            var i = o(t.shift(), !0)
                , n = t.shift();
            for (var s in n)
                n.hasOwnProperty(s) && (i.hasOwnProperty(s) && "object" === r(i[s]) ? "object" === r(i[s]) && "object" === r(n[s]) && (i[s] = e(i[s], n[s])) : i[s] = n[s]);
            return t.length ? e.apply(null, [i].concat(t)) : i
        }
    }
        , {
        "@babel/runtime/helpers/interopRequireDefault": 157,
        "@babel/runtime/helpers/typeof": 164,
        "@marcom/ac-object/clone": 251
    }],
    418: [function (e, t, i) {
        "use strict";
        t.exports = function (e) {
            var t = !0
                , i = !1
                , n = void 0;
            try {
                for (var r, o = Array.from(e.textTracks)[Symbol.iterator](); !(t = (r = o.next()).done); t = !0)
                    for (var s = r.value; s.cues && s.cues.length && s.cues[0].endTime < e.currentTime - 60;)
                        s.removeCue(s.cues[0])
            } catch (e) {
                i = !0,
                    n = e
            } finally {
                try {
                    !t && o.return && o.return()
                } finally {
                    if (i)
                        throw n
                }
            }
        }
    }
        , {}],
    419: [function (e, t, i) {
        "use strict";
        t.exports = [{
            width: 480,
            height: 200,
            type: "medium",
            suffix: "h"
        }, {
            width: 768,
            height: 320,
            type: "large",
            suffix: ""
        }, {
            width: 960,
            height: 400,
            type: "large",
            suffix: ""
        }, {
            width: 1536,
            height: 640,
            type: "large",
            suffix: "h"
        }, {
            width: 1536,
            height: 640,
            type: "large",
            suffix: "l"
        }, {
            width: 1920,
            height: 800,
            type: "large",
            suffix: "l"
        }, {
            width: 1920,
            height: 800,
            type: "large",
            suffix: "h"
        }]
    }
        , {}],
    420: [function (e, t, i) {
        "use strict";
        t.exports = [{
            width: 640,
            height: 360,
            type: "medium",
            suffix: "h"
        }, {
            width: 848,
            height: 480,
            type: "large",
            suffix: ""
        }, {
            width: 960,
            height: 540,
            type: "large",
            suffix: ""
        }, {
            width: 1280,
            height: 720,
            type: "large",
            suffix: "h"
        }, {
            width: 1280,
            height: 720,
            type: "large",
            suffix: "l"
        }, {
            width: 1920,
            height: 1080,
            type: "large",
            suffix: "l"
        }, {
            width: 1920,
            height: 1080,
            type: "large",
            suffix: "h"
        }]
    }
        , {}],
    421: [function (e, t, i) {
        "use strict";
        t.exports = [{
            width: 812,
            height: 375,
            type: "medium",
            suffix: "h"
        }, {
            width: 1082,
            height: 500,
            type: "large",
            suffix: ""
        }, {
            width: 1218,
            height: 563,
            type: "large",
            suffix: ""
        }, {
            width: 1624,
            height: 750,
            type: "large",
            suffix: "h"
        }, {
            width: 1624,
            height: 750,
            type: "large",
            suffix: "l"
        }, {
            width: 2436,
            height: 1126,
            type: "large",
            suffix: "l"
        }, {
            width: 2436,
            height: 1126,
            type: "large",
            suffix: "h"
        }]
    }
        , {}],
    422: [function (e, t, i) {
        "use strict";
        t.exports = [{
            width: 480,
            height: 480,
            type: "medium",
            suffix: ""
        }, {
            width: 540,
            height: 540,
            type: "medium",
            suffix: ""
        }, {
            width: 720,
            height: 720,
            type: "large",
            suffix: "h"
        }, {
            width: 720,
            height: 720,
            type: "large",
            suffix: "l"
        }, {
            width: 1080,
            height: 1080,
            type: "large",
            suffix: "l"
        }, {
            width: 1080,
            height: 1080,
            type: "large",
            suffix: "h"
        }]
    }
        , {}],
    423: [function (e, t, i) {
        "use strict";
        var n = e("@marcom/ac-string/supplant")
            , r = /_r[0-9].+\.mov$/
            , o = /_[0-9]+x[0-9].+\.mp4$/
            , s = /_[0-9]+x[0-9].+\.(mp4|m3u8)$/
            , a = /_[0-9]+x[0-9]*.+\.(mp4|m3u8)/
            , l = /_([0-9]+)x([0-9]+)/
            , c = /-tpl-.*-/
            , u = /-cc-[a-z].*-/
            , h = /-tft-.*-/
            , d = e("./1X1AssetSizes")
            , p = e("./16X9AssetSizes")
            , f = e("./12X5AssetSizes")
            , m = e("./19X9AssetSizes")
            , _ = function (e, t) {
                return e.find(function (e) {
                    return e.width === t.width && (e.height = t.height) || e.width === t.height && (e.height = t.width)
                })
            };
        t.exports = {
            getVideoSource: function (e, t, i, a) {
                var c, u;
                l.test(e);
                var v, b = {};
                if (b.width = parseInt(RegExp.$1, 10),
                    b.height = parseInt(RegExp.$2, 10),
                    e.match(h))
                    c = f,
                        u = 1536;
                else if (b.width === b.height)
                    c = d,
                        u = 1080;
                else if (e.match(r) || _(p, b))
                    c = p,
                        u = 1280;
                else {
                    if (!_(m, b))
                        return e;
                    c = m,
                        u = 1624
                }
                b.width < b.height && (v = !0);
                var y, g = c[0].width, E = a && a.maxWidth ? Math.max(a.maxWidth, g) : u;
                if (!e)
                    throw "Must provide an url to optimize";
                if (void 0 === t || isNaN(t))
                    throw "Must provide a width";
                0 === t && (t = b.width),
                    i && (c = c.filter(function (e) {
                        return e.type === i
                    })),
                    E < 1920 && (c = c.filter(function (e) {
                        return e.width <= E
                    })),
                    (y = v ? c.reduce(function (e, i) {
                        return Math.abs(i.height - t) < Math.abs(e.height - t) ? i : e
                    }) : c.reduce(function (e, i) {
                        return Math.abs(i.width - t) < Math.abs(e.width - t) ? i : e
                    })).extension = e.indexOf(".m3u8") >= 0 ? "m3u8" : "mp4";
                var w = "_{width}x{height}{suffix}.{extension}";
                v && (w = "_{height}x{width}{suffix}.{extension}");
                var k = o;
                return a && a.urlOptimizeHls && (k = s),
                    e.match(k) ? e.replace(k, n(w, y)) : e.match(r) ? e.replace(r, n(w, y)) : e
            },
            getCaptionsSource: function (e) {
                return e.match(u) ? e.match(o) ? {
                    src: e.replace(o, "_cc.vtt"),
                    srclang: "en"
                } : e.match(r) ? {
                    src: e.replace(r, "_cc.vtt"),
                    srclang: "en"
                } : null : null
            },
            getThumbnailImageSource: function (e) {
                return e.match(c) ? {
                    url: e.replace(a, "_thumbnails.jpg")
                } : null
            }
        }
    }
        , {
        "./12X5AssetSizes": 419,
        "./16X9AssetSizes": 420,
        "./19X9AssetSizes": 421,
        "./1X1AssetSizes": 422,
        "@marcom/ac-string/supplant": 314
    }],
    424: [function (e, t, i) {
        "use strict";
        var n = e("@babel/runtime/helpers/interopRequireDefault")(e("@babel/runtime/helpers/typeof"))
            , r = function () {
                function e(e, t) {
                    for (var i = 0; i < t.length; i++) {
                        var n = t[i];
                        n.enumerable = n.enumerable || !1,
                            n.configurable = !0,
                            "value" in n && (n.writable = !0),
                            Object.defineProperty(e, n.key, n)
                    }
                }
                return function (t, i, n) {
                    return i && e(t.prototype, i),
                        n && e(t, n),
                        t
                }
            }()
            , o = function e(t, i, n) {
                null === t && (t = Function.prototype);
                var r = Object.getOwnPropertyDescriptor(t, i);
                if (void 0 === r) {
                    var o = Object.getPrototypeOf(t);
                    return null === o ? void 0 : e(o, i, n)
                }
                if ("value" in r)
                    return r.value;
                var s = r.get;
                return void 0 !== s ? s.call(n) : void 0
            };
        var s = window.Hls
            , a = e("@marcom/ac-console/log")
            , l = e("../utils/liveStreamLookback")
            , c = "/ac/libs/hls.js/2.610.5/hls.js"
            , u = e("../utils/loadScript")
            , h = e("./HTML5Video")
            , d = function (e) {
                function t(e) {
                    !function (e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, t);
                    var i = function (e, t) {
                        if (!e)
                            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !t || "object" !== (0,
                            n.default)(t) && "function" != typeof t ? e : t
                    }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                    return i._src = null,
                        i._hlsUrl = e.hlsUrl || c,
                        i._hlsConfig = e.hlsConfig || {},
                        i._initialize(e),
                        i
                }
                return function (e, t) {
                    if ("function" != typeof t && null !== t)
                        throw new TypeError("Super expression must either be null or a function, not " + (0,
                            n.default)(t));
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }),
                        t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                }(t, h),
                    r(t, [{
                        key: "_initialize",
                        value: function (e) {
                            var t = this;
                            void 0 === s && (this._deferredQueue = [],
                                u(this._hlsUrl).then(function () {
                                    s = window.Hls,
                                        t._initialize(e),
                                        t._deferredQueue.forEach(function (e) {
                                            e()
                                        }),
                                        t._deferredQueue = null
                                })),
                                this._debugHls = e.debugHls,
                                this._enablePerformanceLogging = e.enablePerformanceLogging,
                                this._onHlsError = this._onHlsError.bind(this),
                                this._onDesiredRateChanged = this._onDesiredRateChanged.bind(this),
                                this._onPlay = this._onPlay.bind(this),
                                this._onPause = this._onPause.bind(this),
                                this.on("play", this._onPlay),
                                this.on("pause", this._onPause)
                        }
                    }, {
                        key: "_initHls",
                        value: function () {
                            if (this._hls) {
                                this._cachedVisibleTracks = Array.from(this.el.textTracks).filter(function (e) {
                                    return "showing" === e.mode
                                }),
                                    this._hls.off(s.Events.ERROR, this._onHlsError),
                                    this._hls.off(s.Events.DESIRED_RATE_CHANGED, this._onDesiredRateChanged),
                                    this._hls.destroy();
                                var e = this.el.cloneNode(!1)
                                    , t = this.el.muted;
                                this.el.parentElement.replaceChild(e, this.el),
                                    this.replaceElement(e),
                                    this.el.muted = t,
                                    this.getTextTracksEventEmitter().replaceElement(this.el.textTracks)
                            }
                            var i = Object.assign({}, s.DefaultConfig.fragLoadPolicy);
                            i.default = Object.assign({}, i.default),
                                i.default.reportCDNServer = !1,
                                this._hls = new s(Object.assign({
                                    debug: this._debugHls,
                                    enableWorker: !0,
                                    condenseSubtitleTrack: !0,
                                    enableStreaming: !0,
                                    autoRecoverError: !0,
                                    enablePerformanceLogging: this._enablePerformanceLogging || !1,
                                    useViewportSizeForLevelCap: !0,
                                    fragLoadPolicy: i
                                }, this._hlsConfig))
                        }
                    }, {
                        key: "load",
                        value: function (e, t) {
                            var i = this;
                            if (s) {
                                this._initHls(),
                                    this._hls.on(s.Events.ERROR, this._onHlsError),
                                    this._hls.on(s.Events.DESIRED_RATE_CHANGED, this._onDesiredRateChanged),
                                    this._hls.on(s.Events.AUDIO_TRACK_SWITCHED, function (e, t) {
                                        i.audioTrackEventObj = t,
                                            i._forwardAudioTrackChangeEvent()
                                    }),
                                    this._src = e[0];
                                var n = function () {
                                    this._mediaAttached = !0,
                                        this._hls.off(s.Events.MEDIA_ATTACHED, n),
                                        this.setSrc(e[0]),
                                        this._createTextTrackTags(t)
                                }
                                    .bind(this);
                                this._hls.on(s.Events.MEDIA_ATTACHED, n),
                                    this._hls.attachMedia(this.el)
                            } else
                                this._deferredQueue.push(this.load.bind(this, e, t))
                        }
                    }, {
                        key: "setSrc",
                        value: function (e) {
                            s ? (this._hls || this._initHls(),
                                this._src = e,
                                this._manifestParsed = !1,
                                this._hls.loadSource(e, {
                                    appData: {}
                                }),
                                this._hls.on(s.Events.MANIFEST_PARSED, this._boundManifestParsed = function () {
                                    this._manifestParsed = !0,
                                        this._hls.off(s.Events.MANIFEST_PARSED, this._boundManifestParsed),
                                        this._shouldPlay && this.play()
                                }
                                    .bind(this))) : this._deferredQueue.push(this.setSrc.bind(this, e))
                        }
                    }, {
                        key: "getCurrentTime",
                        value: function () {
                            var e = o(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "getCurrentTime", this).call(this);
                            return e < .1 ? 0 : e
                        }
                    }, {
                        key: "getCurrentSrc",
                        value: function () {
                            return this._src
                        }
                    }, {
                        key: "canPlayType",
                        value: function (e) {
                            return "vnd.apple.mpegURL" === e ? o(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "canPlayType", this).call(this, "video/mp4") : o(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "canPlayType", this).call(this, e)
                        }
                    }, {
                        key: "_playPromiseRejected",
                        value: function () {
                            this._hls && void 0 !== this._hls.desiredRate && (this._hls.desiredRate = 0),
                                o(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "_playPromiseRejected", this).call(this)
                        }
                    }, {
                        key: "_onPlay",
                        value: function () {
                            this._hls && 0 === this._hls.desiredRate && (this._hls.desiredRate = 1)
                        }
                    }, {
                        key: "_onPause",
                        value: function () {
                            this.isPictureInPicture() && this._hls && 1 === this._hls.desiredRate && (this._hls.desiredRate = 0)
                        }
                    }, {
                        key: "getError",
                        value: function () {
                            return this.el.error || this._error
                        }
                    }, {
                        key: "getAudioTracks",
                        value: function () {
                            var e = this;
                            if (this._hls && this._hls.audioTracks) {
                                var i = this._hls
                                    , n = i.audioSelectedPersistentID;
                                return this._hls.audioTracks.map(function (t) {
                                    var r = e.audioTrackEventObj || 0
                                        , o = {
                                            enabled: t.persistentID === r,
                                            label: t.name,
                                            kind: t.characteristics.some(function (e) {
                                                return "public.accessibility.describes-video" === e
                                            }) ? "description" : "main",
                                            language: t.lang,
                                            _hlsTrack: t
                                        };
                                    return Object.defineProperty(o, "enabled", {
                                        get: function () {
                                            return t.persistentID === n
                                        },
                                        set: function (e) {
                                            e && (i.audioSelectedPersistentID = t.persistentID)
                                        }
                                    }),
                                        o
                                })
                            }
                            return o(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "getAudioTracks", this).call(this)
                        }
                    }, {
                        key: "destroy",
                        value: function () {
                            this.off("play", this._onPlay),
                                this.off("pause", this._onPause),
                                o(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "destroy", this).call(this),
                                this._hls && (this._hls.off(s.Events.AUDIO_TRACK_SWITCHED, this._forwardAudioTrackChangeEvent),
                                    this._hls.off(s.Events.AUDIO_TRACKS_UPDATED, this._forwardAudioTrackChangeEvent),
                                    this._hls.destroy(),
                                    this._hls = null)
                        }
                    }, {
                        key: "_onHlsError",
                        value: function (e, t) {
                            !0 === t.fatal && ("fragLoadError" === t.details ? a("HLS JS threw a fatal fragLoadError error, but we'll try to let it recover because it probably can if the network/stream recovers") : (this._error = t.type,
                                this.trigger("error", t)))
                        }
                    }, {
                        key: "_onDesiredRateChanged",
                        value: function (e) {
                            this._hls && 0 === this._hls.desiredRate ? this.trigger("pause") : this.trigger("play")
                        }
                    }, {
                        key: "play",
                        value: function () {
                            this._shouldPlay = !0,
                                this._manifestParsed && (this._mediaAttached || this.load([this._src]),
                                    o(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "play", this).call(this))
                        }
                    }, {
                        key: "pause",
                        value: function () {
                            this._shouldPlay = !1,
                                o(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "pause", this).call(this)
                        }
                    }, {
                        key: "getPaused",
                        value: function () {
                            return this._hls && void 0 !== this._hls.desiredRate ? 0 === this._hls.desiredRate : o(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "getPaused", this).call(this)
                        }
                    }, {
                        key: "isStalled",
                        value: function () {
                            return this._hls && void 0 !== this._hls.desiredRate && 1 === this._hls.desiredRate && this._hls.desiredRate !== this._hls.effectiveRate || o(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "isStalled", this).call(this)
                        }
                    }, {
                        key: "goToLive",
                        value: function () {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 40;
                            return isNaN(parseInt(this.getDuration())) && e ? setTimeout(this.goToLive.bind(this, --e), 50) : e ? this.setCurrentTime(this.getDuration() - l / 2) : null
                        }
                    }]),
                    t
            }();
        t.exports = d
    }
        , {
        "../utils/liveStreamLookback": 415,
        "../utils/loadScript": 416,
        "./HTML5Video": 425,
        "@babel/runtime/helpers/interopRequireDefault": 157,
        "@babel/runtime/helpers/typeof": 164,
        "@marcom/ac-console/log": 206
    }],
    425: [function (e, t, i) {
        "use strict";
        var n = e("@babel/runtime/helpers/interopRequireDefault")(e("@babel/runtime/helpers/typeof"))
            , r = function () {
                function e(e, t) {
                    for (var i = 0; i < t.length; i++) {
                        var n = t[i];
                        n.enumerable = n.enumerable || !1,
                            n.configurable = !0,
                            "value" in n && (n.writable = !0),
                            Object.defineProperty(e, n.key, n)
                    }
                }
                return function (t, i, n) {
                    return i && e(t.prototype, i),
                        n && e(t, n),
                        t
                }
            }();
        var o = e("../dom-emitter/DOMEmitterMicro")
            , s = e("../texttracks/createTextTracks")
            , a = e("@marcom/ac-console/log")
            , l = window.document
            , c = e("@marcom/useragent-detect").browser.safari ? 4 : 3
            , u = function (e) {
                function t(e) {
                    !function (e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, t);
                    var i = e && e.mediaElement ? e.mediaElement : l.createElement("video")
                        , r = function (e, t) {
                            if (!e)
                                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return !t || "object" !== (0,
                                n.default)(t) && "function" != typeof t ? e : t
                        }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, i));
                    return r.el = i,
                        r.options = e || {},
                        r._textTracks = s(e),
                        r._initElement(),
                        r._forwardAudioTrackChangeEvent = r._forwardAudioTrackChangeEvent.bind(r),
                        r._forwardCaptionEvent = r._forwardCaptionEvent.bind(r),
                        r._onTextTrackChangeAfterLoad = r._onTextTrackChangeAfterLoad.bind(r),
                        r._textTracksEmitter = r.getTextTracksEventEmitter(),
                        r._textTracksEmitter.on("addtrack", r._onTextTrackChangeAfterLoad),
                        r._textTracksEmitter.on("addtrack", r._forwardCaptionEvent),
                        r._textTracksEmitter.on("change", r._forwardCaptionEvent),
                        r._textTracksEmitter.on("removetrack", r._forwardCaptionEvent),
                        r.el.audioTracks && (r.el.audioTracks.addEventListener("addtrack", r._forwardAudioTrackChangeEvent),
                            r.el.audioTracks.addEventListener("removetrack", r._forwardAudioTrackChangeEvent),
                            r.el.audioTracks.addEventListener("change", r._forwardAudioTrackChangeEvent)),
                        r
                }
                return function (e, t) {
                    if ("function" != typeof t && null !== t)
                        throw new TypeError("Super expression must either be null or a function, not " + (0,
                            n.default)(t));
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }),
                        t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                }(t, o),
                    r(t, [{
                        key: "_initElement",
                        value: function () {
                            this.el.classList.add("ac-video-media-controller"),
                                null !== this.options.crossorigin && this.el.setAttribute("crossorigin", this.options.crossorigin ? this.options.crossorigin : "anonymous"),
                                this.el.setAttribute("preload", this.options.preload || "auto"),
                                this.el.setAttribute("x-webkit-airplay", "")
                        }
                    }, {
                        key: "_forwardCaptionEvent",
                        value: function (e) {
                            this.trigger(e.type)
                        }
                    }, {
                        key: "_forwardAudioTrackChangeEvent",
                        value: function (e) {
                            this.trigger("AudioTrackChange")
                        }
                    }, {
                        key: "load",
                        value: function (e, t, i) {
                            i && (e = e.map(function (e) {
                                return e + "#t=" + i
                            })),
                                this.el.textTracks.length && (this._cachedVisibleTracks = Array.from(this.el.textTracks).filter(function (e) {
                                    return "showing" === e.mode
                                })),
                                this._createSourceTags(e),
                                this._createTextTrackTags(t),
                                this.el.load()
                        }
                    }, {
                        key: "_createSourceTags",
                        value: function (e) {
                            this.el.removeAttribute("src"),
                                this.el.innerHTML = "";
                            var t = 0
                                , i = e.length;
                            for (i && this.el.setAttribute("src", e[0]); t < i; t++) {
                                var n = l.createElement("source");
                                n.src = e[t],
                                    this.el.appendChild(n)
                            }
                        }
                    }, {
                        key: "_playPromiseRejected",
                        value: function () {
                            this.trigger("PlayPromiseError")
                        }
                    }, {
                        key: "play",
                        value: function () {
                            try {
                                var e = this.el.play();
                                e && "function" == typeof e.catch && (e.catch(function (t) {
                                    this._playPromise === e && this._playPromiseRejected()
                                }
                                    .bind(this)),
                                    e.then(function () {
                                        this.trigger("PlayPromiseResolved")
                                    }
                                        .bind(this), function (e) {
                                            a(e)
                                        })),
                                    this._playPromise = e
                            } catch (e) {
                                a(e)
                            }
                        }
                    }, {
                        key: "refreshSize",
                        value: function () { }
                    }, {
                        key: "pause",
                        value: function () {
                            this._playPromise = null,
                                this.el.pause()
                        }
                    }, {
                        key: "addTextTrack",
                        value: function (e) {
                            this._addTextTrackTag(e)
                        }
                    }, {
                        key: "removeTextTrack",
                        value: function (e) {
                            this._removeTextTrackTag(e)
                        }
                    }, {
                        key: "getRenderElement",
                        value: function () {
                            return this.getMediaElement()
                        }
                    }, {
                        key: "getMediaElement",
                        value: function () {
                            return this.el
                        }
                    }, {
                        key: "_createTextTrackTags",
                        value: function () {
                            return this._textTracks.create.apply(this, arguments)
                        }
                    }, {
                        key: "_addTextTrackTag",
                        value: function () {
                            return this._textTracks.add.apply(this, arguments)
                        }
                    }, {
                        key: "_removeTextTrackTag",
                        value: function () {
                            return this._textTracks.remove.apply(this, arguments)
                        }
                    }, {
                        key: "getTextTracks",
                        value: function () {
                            return this._textTracks.get.apply(this, arguments)
                        }
                    }, {
                        key: "getTextTracksEventEmitter",
                        value: function () {
                            return this._textTracks.getEmitter.apply(this, arguments)
                        }
                    }, {
                        key: "getAudioTracks",
                        value: function () {
                            return this.el.audioTracks || []
                        }
                    }, {
                        key: "getReadyState",
                        value: function () {
                            return this.el.readyState
                        }
                    }, {
                        key: "getPreload",
                        value: function () {
                            return this.el.preload
                        }
                    }, {
                        key: "setPreload",
                        value: function (e) {
                            return this.el.preload = e
                        }
                    }, {
                        key: "setPoster",
                        value: function (e) {
                            e ? this.el.poster = e : this.el.removeAttribute("poster")
                        }
                    }, {
                        key: "getVolume",
                        value: function () {
                            return this.el.volume
                        }
                    }, {
                        key: "getMuted",
                        value: function () {
                            return this.el.muted
                        }
                    }, {
                        key: "getPaused",
                        value: function () {
                            return this.el.paused
                        }
                    }, {
                        key: "getCurrentTime",
                        value: function () {
                            return this.el.currentTime
                        }
                    }, {
                        key: "getDuration",
                        value: function () {
                            return this.el.duration
                        }
                    }, {
                        key: "setCurrentTime",
                        value: function (e) {
                            return this.el.currentTime = e
                        }
                    }, {
                        key: "setVolume",
                        value: function (e) {
                            return this.el.volume = e
                        }
                    }, {
                        key: "setMuted",
                        value: function (e) {
                            this.el.muted = e,
                                e ? this.el.setAttribute("muted", "") : this.el.removeAttribute("muted")
                        }
                    }, {
                        key: "getEnded",
                        value: function () {
                            return this.el.ended
                        }
                    }, {
                        key: "getError",
                        value: function () {
                            return this.el.error
                        }
                    }, {
                        key: "setSrc",
                        value: function (e) {
                            this.el.childNodes.length && e === this._getSrcNode().url || this._createSourceTags([e])
                        }
                    }, {
                        key: "advanceLiveStream",
                        value: function () { }
                    }, {
                        key: "getCurrentSrc",
                        value: function () {
                            return this.el.src
                        }
                    }, {
                        key: "_getSrcNode",
                        value: function () {
                            return this.el.childNodes[0]
                        }
                    }, {
                        key: "_onTextTrackChangeAfterLoad",
                        value: function () {
                            var e = this;
                            if (this._cachedVisibleTracks) {
                                if (!this._cachedVisibleTracks.length) {
                                    var t = !0
                                        , i = !1
                                        , n = void 0;
                                    try {
                                        for (var r, o = Array.from(this.el.textTracks)[Symbol.iterator](); !(t = (r = o.next()).done); t = !0) {
                                            r.value.mode = "hidden"
                                        }
                                    } catch (e) {
                                        i = !0,
                                            n = e
                                    } finally {
                                        try {
                                            !t && o.return && o.return()
                                        } finally {
                                            if (i)
                                                throw n
                                        }
                                    }
                                }
                                this._cachedVisibleTracks.forEach(function (t) {
                                    var i = Array.from(e.el.textTracks).find(function (e) {
                                        return t.language === e.language
                                    });
                                    i && (i.mode = "showing")
                                })
                            }
                            this.trigger("TextTrackChange")
                        }
                    }, {
                        key: "setControls",
                        value: function (e) {
                            e ? (this.el.setAttribute("controls", ""),
                                this.el.removeAttribute("aria-hidden")) : (this.el.removeAttribute("controls"),
                                    this.el.setAttribute("aria-hidden", "true"))
                        }
                    }, {
                        key: "isFullscreen",
                        value: function () {
                            return this.el.webkitDisplayingFullscreen
                        }
                    }, {
                        key: "supportsPictureInPicture",
                        value: function () {
                            return "function" == typeof this.el.webkitSetPresentationMode
                        }
                    }, {
                        key: "isPictureInPicture",
                        value: function () {
                            return "picture-in-picture" === this.el.webkitPresentationMode
                        }
                    }, {
                        key: "setPictureInPicture",
                        value: function (e) {
                            this.supportsPictureInPicture() && this.el.webkitSetPresentationMode(e ? "picture-in-picture" : "inline")
                        }
                    }, {
                        key: "supportsAirPlay",
                        value: function () {
                            return !!window.WebKitPlaybackTargetAvailabilityEvent
                        }
                    }, {
                        key: "canPlayType",
                        value: function (e) {
                            return this.el.canPlayType(e)
                        }
                    }, {
                        key: "getBuffered",
                        value: function () {
                            return this.el.buffered
                        }
                    }, {
                        key: "isStalled",
                        value: function () {
                            return this.getReadyState() < c
                        }
                    }, {
                        key: "destroy",
                        value: function () {
                            this._playPromise = null,
                                this._textTracksEmitter && (this._textTracksEmitter.off("addtrack", this._forwardCaptionEvent),
                                    this._textTracksEmitter.off("addtrack", this._onTextTrackChangeAfterLoad),
                                    this._textTracksEmitter.off("change", this._forwardCaptionEvent),
                                    this._textTracksEmitter.off("removetrack", this._forwardCaptionEvent)),
                                this.el.audioTracks && this.el.audioTracks.removeEventListener("change", this._forwardAudioTrackChangeEvent),
                                this._textTracks && this._textTracks.destroy.call(this),
                                this._textTracks = null,
                                this._textTracksEmitter = null,
                                this.el = null
                        }
                    }]),
                    t
            }();
        t.exports = u
    }
        , {
        "../dom-emitter/DOMEmitterMicro": 333,
        "../texttracks/createTextTracks": 348,
        "@babel/runtime/helpers/interopRequireDefault": 157,
        "@babel/runtime/helpers/typeof": 164,
        "@marcom/ac-console/log": 206,
        "@marcom/useragent-detect": 331
    }],
    426: [function (e, t, i) {
        "use strict";
        var n = e("@babel/runtime/helpers/interopRequireDefault")(e("@babel/runtime/helpers/typeof"));
        var r = e("./HTML5Video")
            , o = e("./ThreeSixtyVideoBase")
            , s = function (e) {
                function t(e) {
                    !function (e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, t);
                    var i = function (e, t) {
                        if (!e)
                            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !t || "object" !== (0,
                            n.default)(t) && "function" != typeof t ? e : t
                    }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                    return i._super = r.prototype,
                        i._init(e),
                        i
                }
                return function (e, t) {
                    if ("function" != typeof t && null !== t)
                        throw new TypeError("Super expression must either be null or a function, not " + (0,
                            n.default)(t));
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }),
                        t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                }(t, r),
                    t
            }()
            , a = !0
            , l = !1
            , c = void 0;
        try {
            for (var u, h = Object.getOwnPropertyNames(o.prototype)[Symbol.iterator](); !(a = (u = h.next()).done); a = !0) {
                var d = u.value;
                "constructor" !== d && (s.prototype[d] = o.prototype[d])
            }
        } catch (e) {
            l = !0,
                c = e
        } finally {
            try {
                !a && h.return && h.return()
            } finally {
                if (l)
                    throw c
            }
        }
        t.exports = s
    }
        , {
        "./HTML5Video": 425,
        "./ThreeSixtyVideoBase": 427,
        "@babel/runtime/helpers/interopRequireDefault": 157,
        "@babel/runtime/helpers/typeof": 164
    }],
    427: [function (e, t, i) {
        "use strict";
        var n = function () {
            function e(e, t) {
                for (var i = 0; i < t.length; i++) {
                    var n = t[i];
                    n.enumerable = n.enumerable || !1,
                        n.configurable = !0,
                        "value" in n && (n.writable = !0),
                        Object.defineProperty(e, n.key, n)
                }
            }
            return function (t, i, n) {
                return i && e(t.prototype, i),
                    n && e(t, n),
                    t
            }
        }();
        var r = e("@marcom/ac-360")
            , o = function () {
                function e() {
                    !function (e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, e)
                }
                return n(e, [{
                    key: "_init",
                    value: function (e) {
                        this._renderElement = document.createElement("div"),
                            this._renderElement.classList.add("threesixty-video-container"),
                            this.el.style.visibility = "hidden",
                            this.el.style.opacity = 0,
                            this.sendMouseDown = this.sendMouseDown.bind(this),
                            this._renderElement.appendChild(this.el),
                            this._init360()
                    }
                }, {
                    key: "_init360",
                    value: function () {
                        this._ac360 = new r({
                            el: this._renderElement,
                            src: this.getMediaElement()
                        }),
                            this._ac360.on("error", function () {
                                this._error = "360_ERROR",
                                    this.trigger("error")
                            }
                                .bind(this)),
                            this._loadOnInit && (this.load.apply(this, function (e) {
                                if (Array.isArray(e)) {
                                    for (var t = 0, i = Array(e.length); t < e.length; t++)
                                        i[t] = e[t];
                                    return i
                                }
                                return Array.from(e)
                            }(this._loadOnInit)),
                                this._loadOnInit = null)
                    }
                }, {
                    key: "load",
                    value: function () {
                        this._ac360 ? (this._ac360.setPos(0, 0),
                            this._super.load.apply(this, arguments)) : this._loadOnInit = arguments
                    }
                }, {
                    key: "play",
                    value: function () {
                        this.getEnded() && this._ac360.setPos(0, 0),
                            this._super.play.apply(this)
                    }
                }, {
                    key: "sendMouseDown",
                    value: function (e) {
                        this._ac360.sendMouseDown(e)
                    }
                }, {
                    key: "getRenderElement",
                    value: function () {
                        return this._renderElement
                    }
                }, {
                    key: "get360",
                    value: function () {
                        return this._ac360
                    }
                }, {
                    key: "setControls",
                    value: function (e) {
                        this._super.setControls.apply(this, arguments)
                    }
                }, {
                    key: "supportsPictureInPicture",
                    value: function () {
                        return !1
                    }
                }, {
                    key: "supportsAirPlay",
                    value: function () {
                        return !1
                    }
                }, {
                    key: "refreshSize",
                    value: function () {
                        this._ac360 && this._ac360.refreshSize()
                    }
                }, {
                    key: "getError",
                    value: function () {
                        return this._error || this._super.getError.apply(this)
                    }
                }]),
                    e
            }();
        t.exports = o
    }
        , {
        "@marcom/ac-360": 177
    }],
    428: [function (e, t, i) {
        "use strict";
        var n = e("@babel/runtime/helpers/interopRequireDefault")(e("@babel/runtime/helpers/typeof"));
        var r = e("./HLSVideo")
            , o = e("./ThreeSixtyVideoBase")
            , s = function (e) {
                function t(e) {
                    !function (e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, t);
                    var i = function (e, t) {
                        if (!e)
                            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !t || "object" !== (0,
                            n.default)(t) && "function" != typeof t ? e : t
                    }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                    return i._super = r.prototype,
                        i._init(e),
                        i
                }
                return function (e, t) {
                    if ("function" != typeof t && null !== t)
                        throw new TypeError("Super expression must either be null or a function, not " + (0,
                            n.default)(t));
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }),
                        t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                }(t, r),
                    t
            }()
            , a = !0
            , l = !1
            , c = void 0;
        try {
            for (var u, h = Object.getOwnPropertyNames(o.prototype)[Symbol.iterator](); !(a = (u = h.next()).done); a = !0) {
                var d = u.value;
                "constructor" !== d && (s.prototype[d] = o.prototype[d])
            }
        } catch (e) {
            l = !0,
                c = e
        } finally {
            try {
                !a && h.return && h.return()
            } finally {
                if (l)
                    throw c
            }
        }
        t.exports = s
    }
        , {
        "./HLSVideo": 424,
        "./ThreeSixtyVideoBase": 427,
        "@babel/runtime/helpers/interopRequireDefault": 157,
        "@babel/runtime/helpers/typeof": 164
    }],
    429: [function (e, t, i) {
        "use strict";
        var n = function () {
            function e(e, t) {
                for (var i = 0; i < t.length; i++) {
                    var n = t[i];
                    n.enumerable = n.enumerable || !1,
                        n.configurable = !0,
                        "value" in n && (n.writable = !0),
                        Object.defineProperty(e, n.key, n)
                }
            }
            return function (t, i, n) {
                return i && e(t.prototype, i),
                    n && e(t, n),
                    t
            }
        }();
        var r = e("./HLSVideo")
            , o = e("./ThreeSixtyVideo")
            , s = e("./ThreeSixtyVideoHls")
            , a = e("./HTML5Video")
            , l = e("@marcom/useragent-detect")
            , c = l.browser.safari || l.browser.edge
            , u = "MediaSource" in window && !l.browser.edge && !l.os.ios;
        function h(e) {
            return (e.hls || function (e) {
                return e.src && -1 !== e.src.indexOf(".m3u8") || e.sources && e.sources[0] && -1 !== e.sources[0].indexOf(".m3u8")
            }(e)) && !(c && !1 !== e.useNativeHls && !e.dvr) && u
        }
        var d = function () {
            function e() {
                !function (e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, e)
            }
            return n(e, [{
                key: "create",
                value: function (e, t) {
                    if (h(e) && !e.threesixty)
                        return new r(Object.assign({}, e, {
                            parentElement: t
                        }));
                    if (e.threesixty) {
                        var i = o;
                        return h(e) && (i = s),
                            new i(Object.assign({}, e, {
                                parentElement: t
                            }))
                    }
                    return new a(Object.assign({}, e, {
                        parentElement: t
                    }))
                }
            }]),
                e
        }();
        t.exports = new d
    }
        , {
        "./HLSVideo": 424,
        "./HTML5Video": 425,
        "./ThreeSixtyVideo": 426,
        "./ThreeSixtyVideoHls": 428,
        "@marcom/useragent-detect": 331
    }]
}, {}, [146]);
