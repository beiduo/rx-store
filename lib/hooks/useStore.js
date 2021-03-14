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
var react_1 = require("react");
/**
 * the hook for using store in functional components
 * @param storeObj store object
 */
function useStore(
/** store object that need to be subscribed */
storeObj) {
    var _a = react_1.useState(storeObj.initialState), state = _a[0], setState = _a[1];
    react_1.useLayoutEffect(function () {
        var subscribe = storeObj.subscribe(setState);
        return function () {
            subscribe.unsubscribe();
        };
    });
    return __assign({}, state);
}
exports.default = useStore;
