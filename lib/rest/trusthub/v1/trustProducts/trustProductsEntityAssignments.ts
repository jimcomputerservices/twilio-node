/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Trusthub
 * This is the public Twilio REST API.
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../../base/Page";
import Response from "../../../../http/response";
import V1 from "../../V1";
const deserialize = require("../../../../base/deserialize");
const serialize = require("../../../../base/serialize");
import { isValidPathParam } from "../../../../base/utility";

/**
 * Options to pass to create a TrustProductsEntityAssignmentsInstance
 */
export interface TrustProductsEntityAssignmentsListInstanceCreateOptions {
  /** The SID of an object bag that holds information of the different items. */
  objectSid: string;
}
/**
 * Options to pass to each
 */
export interface TrustProductsEntityAssignmentsListInstanceEachOptions {
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Function to process each record. If this and a positional callback are passed, this one will be used */
  callback?: (
    item: TrustProductsEntityAssignmentsInstance,
    done: (err?: Error) => void
  ) => void;
  /** Function to be called upon completion of streaming */
  done?: Function;
  /** Upper limit for the number of records to return. each() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to list
 */
export interface TrustProductsEntityAssignmentsListInstanceOptions {
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Upper limit for the number of records to return. list() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to page
 */
export interface TrustProductsEntityAssignmentsListInstancePageOptions {
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Page Number, this value is simply for client state */
  pageNumber?: number;
  /** PageToken provided by the API */
  pageToken?: string;
}

export interface TrustProductsEntityAssignmentsContext {
  /**
   * Remove a TrustProductsEntityAssignmentsInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed boolean
   */
  remove(
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean>;

  /**
   * Fetch a TrustProductsEntityAssignmentsInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed TrustProductsEntityAssignmentsInstance
   */
  fetch(
    callback?: (
      error: Error | null,
      item?: TrustProductsEntityAssignmentsInstance
    ) => any
  ): Promise<TrustProductsEntityAssignmentsInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface TrustProductsEntityAssignmentsContextSolution {
  trustProductSid: string;
  sid: string;
}

export class TrustProductsEntityAssignmentsContextImpl
  implements TrustProductsEntityAssignmentsContext
{
  protected _solution: TrustProductsEntityAssignmentsContextSolution;
  protected _uri: string;

  constructor(protected _version: V1, trustProductSid: string, sid: string) {
    if (!isValidPathParam(trustProductSid)) {
      throw new Error("Parameter 'trustProductSid' is not valid.");
    }

    if (!isValidPathParam(sid)) {
      throw new Error("Parameter 'sid' is not valid.");
    }

    this._solution = { trustProductSid, sid };
    this._uri = `/TrustProducts/${trustProductSid}/EntityAssignments/${sid}`;
  }

  remove(callback?: any): Promise<boolean> {
    const instance = this;
    let operationVersion = instance._version,
      operationPromise = operationVersion.remove({
        uri: instance._uri,
        method: "delete",
      });

    operationPromise = instance._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  }

  fetch(callback?: any): Promise<TrustProductsEntityAssignmentsInstance> {
    const instance = this;
    let operationVersion = instance._version,
      operationPromise = operationVersion.fetch({
        uri: instance._uri,
        method: "get",
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new TrustProductsEntityAssignmentsInstance(
          operationVersion,
          payload,
          instance._solution.trustProductSid,
          instance._solution.sid
        )
    );

    operationPromise = instance._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  }

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return this._solution;
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

interface TrustProductsEntityAssignmentsPayload extends TwilioResponsePayload {
  results: TrustProductsEntityAssignmentsResource[];
}

interface TrustProductsEntityAssignmentsResource {
  sid: string;
  trust_product_sid: string;
  account_sid: string;
  object_sid: string;
  date_created: Date;
  url: string;
}

export class TrustProductsEntityAssignmentsInstance {
  protected _solution: TrustProductsEntityAssignmentsContextSolution;
  protected _context?: TrustProductsEntityAssignmentsContext;

  constructor(
    protected _version: V1,
    payload: TrustProductsEntityAssignmentsResource,
    trustProductSid: string,
    sid?: string
  ) {
    this.sid = payload.sid;
    this.trustProductSid = payload.trust_product_sid;
    this.accountSid = payload.account_sid;
    this.objectSid = payload.object_sid;
    this.dateCreated = deserialize.iso8601DateTime(payload.date_created);
    this.url = payload.url;

    this._solution = { trustProductSid, sid: sid || this.sid };
  }

  /**
   * The unique string that identifies the resource
   */
  sid: string;
  /**
   * The unique string that identifies the TrustProduct resource.
   */
  trustProductSid: string;
  /**
   * The SID of the Account that created the resource
   */
  accountSid: string;
  /**
   * The sid of an object bag
   */
  objectSid: string;
  /**
   * The ISO 8601 date and time in GMT when the resource was created
   */
  dateCreated: Date;
  /**
   * The absolute URL of the Identity resource
   */
  url: string;

  private get _proxy(): TrustProductsEntityAssignmentsContext {
    this._context =
      this._context ||
      new TrustProductsEntityAssignmentsContextImpl(
        this._version,
        this._solution.trustProductSid,
        this._solution.sid
      );
    return this._context;
  }

  /**
   * Remove a TrustProductsEntityAssignmentsInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed boolean
   */
  remove(
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean> {
    return this._proxy.remove(callback);
  }

  /**
   * Fetch a TrustProductsEntityAssignmentsInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed TrustProductsEntityAssignmentsInstance
   */
  fetch(
    callback?: (
      error: Error | null,
      item?: TrustProductsEntityAssignmentsInstance
    ) => any
  ): Promise<TrustProductsEntityAssignmentsInstance> {
    return this._proxy.fetch(callback);
  }

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return {
      sid: this.sid,
      trustProductSid: this.trustProductSid,
      accountSid: this.accountSid,
      objectSid: this.objectSid,
      dateCreated: this.dateCreated,
      url: this.url,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export interface TrustProductsEntityAssignmentsSolution {
  trustProductSid: string;
}

export interface TrustProductsEntityAssignmentsListInstance {
  _version: V1;
  _solution: TrustProductsEntityAssignmentsSolution;
  _uri: string;

  (sid: string): TrustProductsEntityAssignmentsContext;
  get(sid: string): TrustProductsEntityAssignmentsContext;

  /**
   * Create a TrustProductsEntityAssignmentsInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed TrustProductsEntityAssignmentsInstance
   */
  create(
    params: TrustProductsEntityAssignmentsListInstanceCreateOptions,
    callback?: (
      error: Error | null,
      item?: TrustProductsEntityAssignmentsInstance
    ) => any
  ): Promise<TrustProductsEntityAssignmentsInstance>;
  create(
    params: any,
    callback?: any
  ): Promise<TrustProductsEntityAssignmentsInstance>;

  /**
   * Streams TrustProductsEntityAssignmentsInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory
   * efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Function to process each record
   */
  each(
    callback?: (
      item: TrustProductsEntityAssignmentsInstance,
      done: (err?: Error) => void
    ) => void
  ): void;
  /**
   * Streams TrustProductsEntityAssignmentsInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory
   * efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { TrustProductsEntityAssignmentsListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(
    params?: TrustProductsEntityAssignmentsListInstanceEachOptions,
    callback?: (
      item: TrustProductsEntityAssignmentsInstance,
      done: (err?: Error) => void
    ) => void
  ): void;
  each(params?: any, callback?: any): void;
  /**
   * Retrieve a single target page of TrustProductsEntityAssignmentsInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(
    callback?: (
      error: Error | null,
      items: TrustProductsEntityAssignmentsPage
    ) => any
  ): Promise<TrustProductsEntityAssignmentsPage>;
  /**
   * Retrieve a single target page of TrustProductsEntityAssignmentsInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { string } [targetUrl] - API-generated URL for the requested results page
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(
    targetUrl?: string,
    callback?: (
      error: Error | null,
      items: TrustProductsEntityAssignmentsPage
    ) => any
  ): Promise<TrustProductsEntityAssignmentsPage>;
  getPage(
    params?: any,
    callback?: any
  ): Promise<TrustProductsEntityAssignmentsPage>;
  /**
   * Lists TrustProductsEntityAssignmentsInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    callback?: (
      error: Error | null,
      items: TrustProductsEntityAssignmentsInstance[]
    ) => any
  ): Promise<TrustProductsEntityAssignmentsInstance[]>;
  /**
   * Lists TrustProductsEntityAssignmentsInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { TrustProductsEntityAssignmentsListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    params?: TrustProductsEntityAssignmentsListInstanceOptions,
    callback?: (
      error: Error | null,
      items: TrustProductsEntityAssignmentsInstance[]
    ) => any
  ): Promise<TrustProductsEntityAssignmentsInstance[]>;
  list(
    params?: any,
    callback?: any
  ): Promise<TrustProductsEntityAssignmentsInstance[]>;
  /**
   * Retrieve a single page of TrustProductsEntityAssignmentsInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    callback?: (
      error: Error | null,
      items: TrustProductsEntityAssignmentsPage
    ) => any
  ): Promise<TrustProductsEntityAssignmentsPage>;
  /**
   * Retrieve a single page of TrustProductsEntityAssignmentsInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { TrustProductsEntityAssignmentsListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    params: TrustProductsEntityAssignmentsListInstancePageOptions,
    callback?: (
      error: Error | null,
      items: TrustProductsEntityAssignmentsPage
    ) => any
  ): Promise<TrustProductsEntityAssignmentsPage>;
  page(
    params?: any,
    callback?: any
  ): Promise<TrustProductsEntityAssignmentsPage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export function TrustProductsEntityAssignmentsListInstance(
  version: V1,
  trustProductSid: string
): TrustProductsEntityAssignmentsListInstance {
  if (!isValidPathParam(trustProductSid)) {
    throw new Error("Parameter 'trustProductSid' is not valid.");
  }

  const instance = ((sid) =>
    instance.get(sid)) as TrustProductsEntityAssignmentsListInstance;

  instance.get = function get(sid): TrustProductsEntityAssignmentsContext {
    return new TrustProductsEntityAssignmentsContextImpl(
      version,
      trustProductSid,
      sid
    );
  };

  instance._version = version;
  instance._solution = { trustProductSid };
  instance._uri = `/TrustProducts/${trustProductSid}/EntityAssignments`;

  instance.create = function create(
    params: any,
    callback?: any
  ): Promise<TrustProductsEntityAssignmentsInstance> {
    if (params === null || params === undefined) {
      throw new Error('Required parameter "params" missing.');
    }

    if (params["objectSid"] === null || params["objectSid"] === undefined) {
      throw new Error("Required parameter \"params['objectSid']\" missing.");
    }

    let data: any = {};

    data["ObjectSid"] = params["objectSid"];

    const headers: any = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";

    let operationVersion = version,
      operationPromise = operationVersion.create({
        uri: instance._uri,
        method: "post",
        data,
        headers,
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new TrustProductsEntityAssignmentsInstance(
          operationVersion,
          payload,
          instance._solution.trustProductSid
        )
    );

    operationPromise = instance._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  };

  instance.page = function page(
    params?: any,
    callback?: any
  ): Promise<TrustProductsEntityAssignmentsPage> {
    if (typeof params === "function") {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["pageSize"] !== undefined) data["PageSize"] = params["pageSize"];

    if (params.page !== undefined) data["Page"] = params.pageNumber;
    if (params.pageToken !== undefined) data["PageToken"] = params.pageToken;

    const headers: any = {};

    let operationVersion = version,
      operationPromise = operationVersion.page({
        uri: instance._uri,
        method: "get",
        params: data,
        headers,
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new TrustProductsEntityAssignmentsPage(
          operationVersion,
          payload,
          instance._solution
        )
    );

    operationPromise = instance._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  };
  instance.each = instance._version.each;
  instance.list = instance._version.list;

  instance.getPage = function getPage(
    targetUrl?: any,
    callback?: any
  ): Promise<TrustProductsEntityAssignmentsPage> {
    const operationPromise = instance._version._domain.twilio.request({
      method: "get",
      uri: targetUrl,
    });

    let pagePromise = operationPromise.then(
      (payload) =>
        new TrustProductsEntityAssignmentsPage(
          instance._version,
          payload,
          instance._solution
        )
    );
    pagePromise = instance._version.setPromiseCallback(pagePromise, callback);
    return pagePromise;
  };

  instance.toJSON = function toJSON() {
    return instance._solution;
  };

  instance[inspect.custom] = function inspectImpl(
    _depth: any,
    options: InspectOptions
  ) {
    return inspect(instance.toJSON(), options);
  };

  return instance;
}

export class TrustProductsEntityAssignmentsPage extends Page<
  V1,
  TrustProductsEntityAssignmentsPayload,
  TrustProductsEntityAssignmentsResource,
  TrustProductsEntityAssignmentsInstance
> {
  /**
   * Initialize the TrustProductsEntityAssignmentsPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(
    version: V1,
    response: Response<string>,
    solution: TrustProductsEntityAssignmentsSolution
  ) {
    super(version, response, solution);
  }

  /**
   * Build an instance of TrustProductsEntityAssignmentsInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(
    payload: TrustProductsEntityAssignmentsResource
  ): TrustProductsEntityAssignmentsInstance {
    return new TrustProductsEntityAssignmentsInstance(
      this._version,
      payload,
      this._solution.trustProductSid
    );
  }

  [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}
