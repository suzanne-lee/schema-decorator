"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function toTypeStr(arr) {
    const mapped = arr.map((i) => {
        if (i === null) {
            return "null";
        }
        else if (i === undefined) {
            return "undefined";
        }
        else {
            return i;
        }
    });
    return mapped.join("|");
}
function oneOf(...arr) {
    return (name, mixed) => {
        for (let item of arr) {
            if (mixed === item) {
                return mixed;
            }
        }
        throw new Error(`Expected ${name} to be one of ${toTypeStr(arr)}; received ${typeof mixed}(${mixed})`);
    };
}
exports.oneOf = oneOf;
function boolean() {
    return (name, mixed) => {
        if (typeof mixed != "boolean") {
            throw new Error(`${name} must be a boolean, received ${typeof mixed}(${mixed})`);
        }
        return mixed;
    };
}
exports.boolean = boolean;
function unsafeNumber() {
    return (name, mixed) => {
        if (typeof mixed != "number") {
            throw new Error(`${name} must be a number, received ${typeof mixed}(${mixed})`);
        }
        return mixed;
    };
}
exports.unsafeNumber = unsafeNumber;
function string() {
    return (name, mixed) => {
        if (typeof mixed != "string") {
            throw new Error(`${name} must be a string, received ${typeof mixed}(${mixed})`);
        }
        return mixed;
    };
}
exports.string = string;
function nil() {
    return (name, mixed) => {
        if (mixed === null) {
            return mixed;
        }
        throw new Error(`Expected ${name} to be null, received ${typeof mixed}`);
    };
}
exports.nil = nil;
function undef() {
    return (name, mixed) => {
        if (mixed === undefined) {
            return mixed;
        }
        throw new Error(`Expected ${name} to be undefined, received ${typeof mixed}`);
    };
}
exports.undef = undef;
function any() {
    return (_name, mixed) => {
        return mixed;
    };
}
exports.any = any;
//# sourceMappingURL=basic.js.map