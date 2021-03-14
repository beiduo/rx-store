"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
/** subscription that will automatically get cancelled */
function useSubscriptionStack() {
    var _a = react_1.useState([]), stack = _a[0], setStack = _a[1];
    var addSubscription = react_1.useCallback(function (
    /** subscription */
    sub) {
        setStack(function (prev) { return __spreadArray(__spreadArray([], prev), [sub]); });
    }, []);
    react_1.useEffect(function () {
        return function () {
            stack.forEach(function (el, i) {
                el.unsubscribe();
            });
        };
    }, [stack]);
    return addSubscription;
}
exports.default = useSubscriptionStack;
