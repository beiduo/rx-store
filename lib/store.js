"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
/**
 * store class
 */
var StoreClass = /** @class */ (function () {
    function StoreClass(
    /** initial state */
    initialState) {
        var _this = this;
        this.initialState = initialState;
        this.state = this.initialState;
        /** subject */
        this.subject = new rxjs_1.BehaviorSubject(this.initialState);
        /** subscribe */
        this.subscribe = function (setState) { return _this.subject.subscribe(setState); };
        /** update */
        this.update = function (payload) {
            _this.state = __assign(__assign({}, _this.state), payload);
            _this.subject.next(_this.state);
        };
        /** replace */
        this.replace = function (payload) {
            _this.state = __assign({}, payload);
            _this.subject.next(_this.state);
        };
        /** set state value to initial */
        this.clear = function () {
            _this.state = _this.initialState;
            _this.subject.next(_this.state);
        };
        /** get current state value */
        this.getValue = function () { return _this.subject.getValue(); };
    }
    return StoreClass;
}());
exports.default = StoreClass;
