import * as axios from "axios";
import { Route, RouteData } from "./Route";
import { Api } from "./Api";
import { ChainedAssertFunc, AcceptsOf, TypeOf, AssertFunc } from "../types";
export declare type TransformBodyDelegate = (rawBody: any | undefined) => any;
export declare type InjectHeaderDelegate = (route: Route<RouteData>) => any;
export declare type TransformResponseDelegate = (rawResponseData: any, rawResponse: axios.AxiosResponse<any>) => any;
export interface OnUnmodifiedArgs extends Error {
    config: axios.AxiosRequestConfig;
    code?: string;
    request: unknown;
    response: axios.AxiosResponse<unknown>;
}
export declare type OnUnmodifiedDelegate<ResultT> = (args: OnUnmodifiedArgs) => ResultT;
export interface OnSyntacticErrorArgs extends Error {
    config: axios.AxiosRequestConfig;
    code?: string;
    request: unknown;
    response: axios.AxiosResponse<unknown>;
}
export declare type OnSyntacticErrorDelegate<ResultT> = (args: OnSyntacticErrorArgs) => ResultT;
export interface OnUnauthorizedArgs extends Error {
    config: axios.AxiosRequestConfig;
    code?: string;
    request: unknown;
    response: axios.AxiosResponse<unknown>;
}
export declare type OnUnauthorizedDelegate<ResultT> = (args: OnUnauthorizedArgs) => ResultT;
export interface OnForbiddenArgs extends Error {
    config: axios.AxiosRequestConfig;
    code?: string;
    request: unknown;
    response: axios.AxiosResponse<unknown>;
}
export declare type OnForbiddenDelegate<ResultT> = (args: OnForbiddenArgs) => ResultT;
export interface OnNotFoundArgs extends Error {
    config: axios.AxiosRequestConfig;
    code?: string;
    request: unknown;
    response: axios.AxiosResponse<unknown>;
}
export declare type OnNotFoundDelegate<ResultT> = (args: OnNotFoundArgs) => ResultT;
export interface OnSemanticErrorArgs extends Error {
    config: axios.AxiosRequestConfig;
    code?: string;
    request: unknown;
    response: axios.AxiosResponse<unknown>;
}
export declare type OnSemanticErrorDelegate<ResultT> = (args: OnSemanticErrorArgs) => ResultT;
export declare type OnSyntacticOrSemanticErrorArgs = (OnSyntacticErrorArgs & OnSemanticErrorArgs);
export declare type OnSyntacticOrSemanticErrorDelegate<ResultT> = ((args: OnSyntacticOrSemanticErrorArgs) => ResultT);
export interface OnTooManyRequestsArgs extends Error {
    config: axios.AxiosRequestConfig;
    code?: string;
    request: unknown;
    response: axios.AxiosResponse<unknown>;
}
export declare type OnTooManyRequestsDelegate<ResultT> = (args: OnTooManyRequestsArgs) => ResultT;
export declare type UnwrappedPromiseReturnType<F extends (...args: any[]) => any> = (ReturnType<F> extends Promise<infer WrappedT> ? WrappedT : ReturnType<F>);
export declare enum ResponseType {
    Normal = 0,
    Unmodified = 1,
    SyntacticError = 2,
    Unauthorized = 3,
    Forbidden = 4,
    NotFound = 5,
    SemanticError = 6,
    TooManyRequests = 7
}
export interface Response<TypeT extends ResponseType, DataT> extends axios.AxiosResponse<DataT> {
    type: TypeT;
}
export declare type OnStatusHandlerNameToResponseType = {
    onUnmodified: ResponseType.Unmodified;
    onSyntacticError: ResponseType.SyntacticError;
    onUnauthorized: ResponseType.Unauthorized;
    onForbidden: ResponseType.Forbidden;
    onNotFound: ResponseType.NotFound;
    onSemanticError: ResponseType.SemanticError;
    onTooManyRequests: ResponseType.TooManyRequests;
};
export declare type OnStatusHandlerResponse<DataT extends RequestData> = ({
    [k in keyof OnStatusHandlerNameToResponseType]: (k extends keyof DataT ? Response<OnStatusHandlerNameToResponseType[k], UnwrappedPromiseReturnType<Exclude<DataT[k], undefined>>> : never);
}[keyof OnStatusHandlerNameToResponseType]);
export interface RequestData {
    readonly route: Route<RouteData>;
    readonly param?: any;
    readonly query?: any;
    readonly body?: any;
    readonly header?: any;
    readonly onUnmodified?: OnUnmodifiedDelegate<any>;
    readonly onSyntacticError?: OnSyntacticErrorDelegate<any>;
    readonly onUnauthorized?: OnUnauthorizedDelegate<any>;
    readonly onForbidden?: OnForbiddenDelegate<any>;
    readonly onNotFound?: OnNotFoundDelegate<any>;
    readonly onSemanticError?: OnSemanticErrorDelegate<any>;
    readonly onTooManyRequests?: OnTooManyRequestsDelegate<any>;
}
export interface RequestExtraData {
    readonly api: Api;
    readonly onTransformBody?: TransformBodyDelegate;
    readonly onInjectHeader?: InjectHeaderDelegate;
    readonly onTransformResponse?: TransformResponseDelegate;
}
export declare class Request<DataT extends RequestData> {
    readonly data: DataT;
    readonly extraData: RequestExtraData;
    static Create<RouteT extends Route<any>>(api: Api, route: RouteT): (Request<{
        route: RouteT;
    }>);
    private constructor();
    setParam(this: (DataT extends {
        route: {
            data: {
                paramF: ChainedAssertFunc<any>;
            };
        };
    } ? ("param" extends keyof DataT ? never : Request<DataT>) : never), param: AcceptsOf<Exclude<DataT["route"]["data"]["paramF"], undefined>>): (Request<DataT & {
        param: TypeOf<Exclude<DataT["route"]["data"]["paramF"], undefined>>;
    }>);
    setQuery(this: (DataT extends {
        route: {
            data: {
                queryF: AssertFunc<any>;
            };
        };
    } ? ("query" extends keyof DataT ? never : Request<DataT>) : never), query: AcceptsOf<Exclude<DataT["route"]["data"]["queryF"], undefined>>): (Request<DataT & {
        query: TypeOf<Exclude<DataT["route"]["data"]["queryF"], undefined>>;
    }>);
    setBody(this: (DataT extends {
        route: {
            data: {
                bodyF: AssertFunc<any>;
            };
        };
    } ? ("body" extends keyof DataT ? never : Request<DataT>) : never), body: AcceptsOf<Exclude<DataT["route"]["data"]["bodyF"], undefined>>): (Request<DataT & {
        body: TypeOf<Exclude<DataT["route"]["data"]["bodyF"], undefined>>;
    }>);
    setHeader(this: (DataT extends {
        route: {
            data: {
                headerF: AssertFunc<any>;
            };
        };
    } ? ("header" extends keyof DataT ? never : Request<DataT>) : never), header: AcceptsOf<Exclude<DataT["route"]["data"]["headerF"], undefined>>): (Request<DataT & {
        header: TypeOf<Exclude<DataT["route"]["data"]["headerF"], undefined>>;
    }>);
    setOnTransformBody(onTransformBody: TransformBodyDelegate | undefined): (Request<DataT>);
    setOnInjectHeader(onInjectHeader: InjectHeaderDelegate | undefined): (Request<DataT>);
    setOnTransformResponse(onTransformResponse: TransformResponseDelegate | undefined): (Request<DataT>);
    setOnUnmodified<D extends OnUnmodifiedDelegate<any>>(onUnmodified: D): (Request<DataT & {
        readonly onUnmodified: D;
    }>);
    setOnSyntacticError<D extends OnSyntacticErrorDelegate<any>>(onSyntacticError: D): (Request<DataT & {
        readonly onSyntacticError: D;
    }>);
    setOnUnauthorized<D extends OnUnauthorizedDelegate<any>>(onUnauthorized: D): (Request<DataT & {
        readonly onUnauthorized: D;
    }>);
    setOnForbidden<D extends OnForbiddenDelegate<any>>(onForbidden: D): (Request<DataT & {
        readonly onForbidden: D;
    }>);
    setOnNotFound<D extends OnNotFoundDelegate<any>>(onNotFound: D): (Request<DataT & {
        readonly onNotFound: D;
    }>);
    setOnSemanticError<D extends OnSemanticErrorDelegate<any>>(onSemanticError: D): (Request<DataT & {
        readonly onSemanticError: D;
    }>);
    setOnTooManyRequests<D extends OnTooManyRequestsDelegate<any>>(onTooManyRequests: D): (Request<DataT & {
        readonly onTooManyRequests: D;
    }>);
    setOnSyntacticOrSemanticError<D extends OnSyntacticOrSemanticErrorDelegate<any>>(onSyntacticOrSemanticErrorDelegate: D): (Request<DataT & {
        readonly onSyntacticError: D;
        readonly onSemanticError: D;
    }>);
    send(this: ((("paramF" extends keyof DataT["route"]["data"] ? ("param" extends keyof DataT ? true : false) : true) | ("queryF" extends DataT["route"]["data"] ? ("query" extends keyof DataT ? true : false) : true) | ("bodyF" extends DataT["route"]["data"] ? ("body" extends keyof DataT ? true : false) : true) | ("headerF" extends DataT["route"]["data"] ? ("header" extends keyof DataT ? true : false) : true)) extends true ? Request<DataT> : never)): (Promise<Response<ResponseType.Normal, "responseF" extends keyof DataT["route"]["data"] ? TypeOf<Exclude<DataT["route"]["data"]["responseF"], undefined>> : unknown> | OnStatusHandlerResponse<DataT>>);
}
