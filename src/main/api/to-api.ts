import {Route, Empty} from "./Route";
import {ApiConfiguration, Api} from "./Api";
import {Param} from "./Param";
import {Request} from "./Request";
import {rename} from "@anyhowstep/type-util";

export type RouteMap = {
    [routeName : string] : Route<
        any,
        any,
        any,
        any,
        any,
        any,
        any
    >
};
export type ApiMixin<RouteMapT extends RouteMap> = (
    Api &
    {
        [routeName in keyof RouteMapT] : () => (
            RouteMapT[routeName] extends Route<
                infer RawParamT,
                infer ParamT,
                infer QueryT,
                infer BodyT,
                infer ResponseT,
                infer AccessTokenT,
                infer MethodLiteralT
            > ?
                (
                    ParamT extends Param<RawParamT> ?
                        Request<
                            Empty,
                            Empty,
                            Empty,
                            undefined,
                            RawParamT,
                            ParamT,
                            QueryT,
                            BodyT,
                            ResponseT,
                            AccessTokenT
                        > :
                        never
                ) :
                never
        )
    }
);
export type ApiMixinType<RouteMapT extends RouteMap> = {
    new (config: ApiConfiguration) : (
        ApiMixin<RouteMapT>
    ),
    readonly route : Readonly<RouteMapT>
}
export type ApiInstance<ApiMixinTypeT extends ApiMixinType<any>> = (
    ApiMixinTypeT extends ApiMixinType<infer RouteMapT> ?
        ApiMixin<RouteMapT> :
        never
);

export function toApi<RouteMapT extends RouteMap> (
    routeMap : RouteMapT
) : ApiMixinType<RouteMapT> {
    @rename("ApiMixin")
    class _ApiMixin extends Api {

    }
    (_ApiMixin as any).route = routeMap;
    for (let routeKey in routeMap) {
        (_ApiMixin as any).prototype[routeKey] = function (this : Api) {
            return this.request(routeMap[routeKey]);
        };
    }
    return _ApiMixin as any;
}