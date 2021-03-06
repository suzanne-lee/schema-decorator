import * as sd from "../../main/index";
import * as tape from "tape";

function sortInternalKeys (x : Object) {
    if (x instanceof Array) {
        const arr : any = [];
        for (let i of x) {
            arr.push(sortInternalKeys(i));
        }
        return arr;
    } else if (x instanceof Date) {
        return x;
    } else if (x instanceof Object) {
        const keys = Object.keys(x).sort();
        const result : any = {};
        for (let k of keys) {
            result[k] = sortInternalKeys((x as any)[k]);
        }
        return result;
    } else {
        return x;
    }
}

export function test (t : tape.Test, f : sd.AnyAssertFunc|sd.AnyChainedAssertFunc, raw : any, expected : any) {
    const originalRawStr = JSON.stringify(raw);

    const value = sd.toAssertDelegateExact(f)("raw", raw);

    if (typeof value == "number" && typeof expected == "number" && isNaN(value) && isNaN(expected)) {
        //For some reason t.deepEqual() fails with NaN
        t.pass("Actual and expected are NaN");
    } else {
        t.deepEqual(value, expected, `raw: ${value} == ${expected}`);
    }

    const currentRawStr = JSON.stringify(raw);
    t.equal(currentRawStr, originalRawStr, `raw: ${currentRawStr} == ${originalRawStr}`);

    const actualStr = JSON.stringify(sortInternalKeys(value));
    const expectedStr = JSON.stringify(sortInternalKeys(expected));
    t.equal(actualStr, expectedStr, `${actualStr} == ${expectedStr}`);
}
export function testToJson<C> (t : tape.Test, instance : C, expected : any) {
    const actualStr   = JSON.stringify(instance);
    const expectedStr = JSON.stringify(expected);
    t.equal(actualStr, expectedStr, `${actualStr} == ${expectedStr}`);
}
export function testKeys (t : tape.Test, instance : any, expected : string[]) {
    const actualKeys = Object.keys(instance);
    t.deepEqual(actualKeys, expected, `${actualKeys.join(",")} == ${expected.join(",")}`);
}
export function fail (t : tape.Test, assert : sd.AnyAssertFunc|sd.AnyChainedAssertFunc, raw : any) {
    try {
        const value = sd.toAssertDelegate(assert)("raw", raw);
        t.fail(`Should not succeed; received ${raw}, asserted ${value}`);
    } catch (err) {
        t.pass(err.message);
    }
}
export function pass (t : tape.Test, assert : sd.AnyAssertFunc, raw : any) {
    try {
        console.log(raw);
        console.log(sd.toAssertDelegate(assert)("raw", raw));
        t.pass();
    } catch (err) {
        t.fail(err.message);
    }
}