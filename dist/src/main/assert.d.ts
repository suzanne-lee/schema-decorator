import { AssertDelegate } from "./AssertDelegate";
import { Assertion } from "./Assertion";
export declare type CastDelegate<FromT, ToT> = (from: FromT) => ToT;
export declare type Constructor<T> = {
    new (): T;
};
export declare function nested<T>(ctor: Constructor<T>): AssertDelegate<T>;
export declare function nestedExact<T>(ctor: Constructor<T>): AssertDelegate<T>;
export declare function assertion<T>(assertion: Assertion<T>): AssertDelegate<T>;
export declare function oneOf<T0 extends string>(...arr: (T0)[]): AssertDelegate<T0>;
export declare function oneOf<T0 extends number>(...arr: (T0)[]): AssertDelegate<T0>;
export declare function oneOf<T0 extends boolean>(...arr: (T0)[]): AssertDelegate<T0>;
export declare function oneOf<T0>(...arr: (T0)[]): AssertDelegate<T0>;
export declare function oneOf<T0, T1>(...arr: (T0 | T1)[]): AssertDelegate<T0 | T1>;
export declare function oneOf<T0, T1, T2>(...arr: (T0 | T1 | T2)[]): AssertDelegate<T0 | T1 | T2>;
export declare function oneOf<T0, T1, T2, T3>(...arr: (T0 | T1 | T2 | T3)[]): AssertDelegate<T0 | T1 | T2 | T3>;
export declare function oneOf<T0, T1, T2, T3, T4>(...arr: (T0 | T1 | T2 | T3 | T4)[]): AssertDelegate<T0 | T1 | T2 | T3 | T4>;
export declare function oneOf(...arr: (any)[]): AssertDelegate<any>;
export declare function or<T0 extends string>(...arr: AssertDelegate<T0>[]): AssertDelegate<T0>;
export declare function or<T0 extends number>(...arr: AssertDelegate<T0>[]): AssertDelegate<T0>;
export declare function or<T0 extends boolean>(...arr: AssertDelegate<T0>[]): AssertDelegate<T0>;
export declare function or<T0>(...arr: AssertDelegate<T0>[]): AssertDelegate<T0>;
export declare function or<T0, T1>(...arr: AssertDelegate<T0 | T1>[]): AssertDelegate<T0 | T1>;
export declare function or<T0, T1, T2>(...arr: AssertDelegate<T0 | T1 | T2>[]): AssertDelegate<T0 | T1 | T2>;
export declare function or<T0, T1, T2, T3>(...arr: AssertDelegate<T0 | T1 | T2 | T3>[]): AssertDelegate<T0 | T1 | T2 | T3>;
export declare function or<T0, T1, T2, T3, T4>(...arr: AssertDelegate<T0 | T1 | T2 | T3 | T4>[]): AssertDelegate<T0 | T1 | T2 | T3 | T4>;
export declare function or(...arr: AssertDelegate<any>[]): AssertDelegate<any>;
export declare function and<T0 extends string>(...arr: AssertDelegate<T0>[]): AssertDelegate<T0>;
export declare function and<T0 extends number>(...arr: AssertDelegate<T0>[]): AssertDelegate<T0>;
export declare function and<T0 extends boolean>(...arr: AssertDelegate<T0>[]): AssertDelegate<T0>;
export declare function and<T0>(...arr: AssertDelegate<T0>[]): AssertDelegate<T0>;
export declare function and<T0, T1>(...arr: AssertDelegate<T0 | T1>[]): AssertDelegate<T0 & T1>;
export declare function and<T0, T1, T2>(...arr: AssertDelegate<T0 | T1 | T2>[]): AssertDelegate<T0 & T1 & T2>;
export declare function and<T0, T1, T2, T3>(...arr: AssertDelegate<T0 | T1 | T2 | T3>[]): AssertDelegate<T0 & T1 & T2 & T3>;
export declare function and<T0, T1, T2, T3, T4>(...arr: AssertDelegate<T0 | T1 | T2 | T3 | T4>[]): AssertDelegate<T0 & T1 & T2 & T3 & T4>;
export declare function and(...arr: AssertDelegate<any>[]): AssertDelegate<any>;
export declare function cast<FromT, ToT>(canCastDelegate: AssertDelegate<FromT>, castDelegate: CastDelegate<FromT, ToT>, assertDelegate: AssertDelegate<ToT>): AssertDelegate<ToT>;
export declare function assert<T>(assertDelegate: AssertDelegate<T>): (target: Object, propertyKey: string | symbol) => void;
export declare function optional<T>(assertDelegate: AssertDelegate<T>): AssertDelegate<T | undefined>;
export declare function nullable<T>(assertDelegate: AssertDelegate<T>): AssertDelegate<T | null>;
export declare function maybe<T>(assertDelegate: AssertDelegate<T>): AssertDelegate<T | undefined | null>;
export declare function array<T>(assertDelegate: AssertDelegate<T>): (name: string, mixed: any) => T[];
export declare function date(): AssertDelegate<Date>;
export declare function any(): AssertDelegate<any>;
export declare function enumeration(e: {}): AssertDelegate<string | number>;
export declare function boolean(): AssertDelegate<boolean>;
export declare function number(): AssertDelegate<number>;
export declare function integer(): AssertDelegate<number>;
export declare function naturalNumber(): AssertDelegate<number>;
export declare function string(): AssertDelegate<string>;
export declare function numberToBoolean(): AssertDelegate<boolean>;
export declare function stringToBoolean(): AssertDelegate<boolean>;
export declare function stringToNumber(): AssertDelegate<number>;
export declare function stringToInteger(): AssertDelegate<number>;
export declare function stringToNaturalNumber(): AssertDelegate<number>;
export declare function nil(): AssertDelegate<null>;
export declare function undef(): AssertDelegate<undefined>;
