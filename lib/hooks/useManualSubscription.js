"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
/** manually manage subscriptions */
function useManualSubscription() {
    var _a = react_1.useState(), subscription = _a[0], setSubscription = _a[1];
    var cancel = react_1.useCallback(function () {
        if (subscription) {
            subscription.unsubscribe();
            setSubscription(void 0);
        }
    }, [subscription]);
    var start = react_1.useCallback(function (sub) {
        if (subscription) {
            subscription.unsubscribe();
        }
        setSubscription(sub);
    }, [subscription]);
    return { start: start, cancel: cancel };
}
exports.default = useManualSubscription;
