"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useCounter = void 0;
var react_1 = require("react");
/**
 * A custom hook to use `counter` inside a React component
 */
exports.useCounter = function () {
    var _a = react_1.useState(0), value = _a[0], setValue = _a[1];
    var increment = function () {
        setValue(value + 1);
    };
    var decrement = function () {
        setValue(value - 1);
    };
    return {
        value: value,
        increment: increment,
        decrement: decrement,
    };
};
