import { AnyAssertFunc, TypeOf, AssertDelegate, AcceptsOf, CanAcceptOf } from "../types";
import { CastDelegate } from "./cast";
export declare function rename<FromFieldNameT extends string, ToFieldNameT extends string, AssertFuncT extends AnyAssertFunc>(fromKey: FromFieldNameT, toKey: ToFieldNameT, assert: AssertFuncT): (AssertDelegate<{
    [field in ToFieldNameT]: TypeOf<AssertFuncT>;
}> & {
    __accepts: ({
        [to in ToFieldNameT]: AcceptsOf<AssertFuncT>;
    });
    __canAccept: ({
        [from in FromFieldNameT]: CanAcceptOf<AssertFuncT>;
    } | {
        [to in ToFieldNameT]: CanAcceptOf<AssertFuncT>;
    });
});
export declare function deriveFrom<FromFieldNameT extends string, ToFieldNameT extends string, FromF extends AnyAssertFunc, ToF extends AnyAssertFunc>(fromKey: FromFieldNameT, toKey: ToFieldNameT, canCast: FromF, castDelegate: CastDelegate<TypeOf<FromF>, TypeOf<ToF>>, assert: ToF): (AssertDelegate<{
    [field in FromFieldNameT | ToFieldNameT]: (field extends FromFieldNameT ? TypeOf<FromF> : field extends ToFieldNameT ? TypeOf<ToF> : never);
}> & {
    __accepts: {
        [from in FromFieldNameT]: (AcceptsOf<FromF>);
    };
    __canAccept: {
        [from in FromFieldNameT]: (CanAcceptOf<FromF> | CanAcceptOf<ToF>);
    };
});
export declare function derive<FromFieldNameT extends string, ToFieldNameT extends string, AssertFuncT extends AnyAssertFunc>(fromKey: FromFieldNameT, toKey: ToFieldNameT, assert: AssertFuncT): (AssertDelegate<{
    [field in ToFieldNameT]: TypeOf<AssertFuncT>;
}> & {
    __accepts: ({
        [from in FromFieldNameT]: AcceptsOf<AssertFuncT>;
    });
    __canAccept: ({
        [from in FromFieldNameT]: CanAcceptOf<AssertFuncT>;
    });
});
export declare function instanceOf<T>(ctor: new (...args: any[]) => T): (AssertDelegate<T> & {
    __accepts: T;
    __canAccept: T;
});
export declare function dictionary<F extends AnyAssertFunc>(assert: F): (AssertDelegate<{
    [key: string]: TypeOf<F>;
}> & {
    __accepts: {
        [key: string]: AcceptsOf<F>;
    };
    __canAccept: {
        [key: string]: CanAcceptOf<F>;
    };
});
export declare function emptyObject(): (AssertDelegate<{}> & {
    __accepts: {};
    __canAccept: {};
});
