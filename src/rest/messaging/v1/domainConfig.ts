/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Messaging
 * This is the public Twilio REST API.
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { inspect, InspectOptions } from "util";
import V1 from "../V1";
const deserialize = require("../../../base/deserialize");
const serialize = require("../../../base/serialize");
import { isValidPathParam } from "../../../base/utility";

/**
 * Options to pass to update a DomainConfigInstance
 */
export interface DomainConfigContextUpdateOptions {
  /** Any requests we receive to this domain that do not match an existing shortened message will be redirected to the fallback url. These will likely be either expired messages, random misdirected traffic, or intentional scraping. */
  fallbackUrl?: string;
  /** URL to receive click events to your webhook whenever the recipients click on the shortened links */
  callbackUrl?: string;
  /** Boolean field to set customer delivery preference when there is a failure in linkShortening service */
  continueOnFailure?: boolean;
  /** Customer\\\'s choice to send links with/without \\\"https://\\\" attached to shortened url. If true, messages will not be sent with https:// at the beginning of the url. If false, messages will be sent with https:// at the beginning of the url. False is the default behavior if it is not specified. */
  disableHttps?: boolean;
}

export interface DomainConfigContext {
  /**
   * Fetch a DomainConfigInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed DomainConfigInstance
   */
  fetch(
    callback?: (error: Error | null, item?: DomainConfigInstance) => any
  ): Promise<DomainConfigInstance>;

  /**
   * Update a DomainConfigInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed DomainConfigInstance
   */
  update(
    callback?: (error: Error | null, item?: DomainConfigInstance) => any
  ): Promise<DomainConfigInstance>;
  /**
   * Update a DomainConfigInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed DomainConfigInstance
   */
  update(
    params: DomainConfigContextUpdateOptions,
    callback?: (error: Error | null, item?: DomainConfigInstance) => any
  ): Promise<DomainConfigInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface DomainConfigContextSolution {
  domainSid: string;
}

export class DomainConfigContextImpl implements DomainConfigContext {
  protected _solution: DomainConfigContextSolution;
  protected _uri: string;

  constructor(protected _version: V1, domainSid: string) {
    if (!isValidPathParam(domainSid)) {
      throw new Error("Parameter 'domainSid' is not valid.");
    }

    this._solution = { domainSid };
    this._uri = `/LinkShortening/Domains/${domainSid}/Config`;
  }

  fetch(
    callback?: (error: Error | null, item?: DomainConfigInstance) => any
  ): Promise<DomainConfigInstance> {
    const headers: any = {};
    headers["Accept"] = "application/json";

    const instance = this;
    let operationVersion = instance._version,
      operationPromise = operationVersion.fetch({
        uri: instance._uri,
        method: "get",
        headers,
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new DomainConfigInstance(
          operationVersion,
          payload,
          instance._solution.domainSid
        )
    );

    operationPromise = instance._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  }

  update(
    params?:
      | DomainConfigContextUpdateOptions
      | ((error: Error | null, item?: DomainConfigInstance) => any),
    callback?: (error: Error | null, item?: DomainConfigInstance) => any
  ): Promise<DomainConfigInstance> {
    if (params instanceof Function) {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["fallbackUrl"] !== undefined)
      data["FallbackUrl"] = params["fallbackUrl"];
    if (params["callbackUrl"] !== undefined)
      data["CallbackUrl"] = params["callbackUrl"];
    if (params["continueOnFailure"] !== undefined)
      data["ContinueOnFailure"] = serialize.bool(params["continueOnFailure"]);
    if (params["disableHttps"] !== undefined)
      data["DisableHttps"] = serialize.bool(params["disableHttps"]);

    const headers: any = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    headers["Accept"] = "application/json";

    const instance = this;
    let operationVersion = instance._version,
      operationPromise = operationVersion.update({
        uri: instance._uri,
        method: "post",
        data,
        headers,
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new DomainConfigInstance(
          operationVersion,
          payload,
          instance._solution.domainSid
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

interface DomainConfigPayload extends DomainConfigResource {}

interface DomainConfigResource {
  domain_sid: string;
  config_sid: string;
  fallback_url: string;
  callback_url: string;
  continue_on_failure: boolean;
  date_created: Date;
  date_updated: Date;
  url: string;
  disable_https: boolean;
}

export class DomainConfigInstance {
  protected _solution: DomainConfigContextSolution;
  protected _context?: DomainConfigContext;

  constructor(
    protected _version: V1,
    payload: DomainConfigResource,
    domainSid?: string
  ) {
    this.domainSid = payload.domain_sid;
    this.configSid = payload.config_sid;
    this.fallbackUrl = payload.fallback_url;
    this.callbackUrl = payload.callback_url;
    this.continueOnFailure = payload.continue_on_failure;
    this.dateCreated = deserialize.iso8601DateTime(payload.date_created);
    this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated);
    this.url = payload.url;
    this.disableHttps = payload.disable_https;

    this._solution = { domainSid: domainSid || this.domainSid };
  }

  /**
   * The unique string that we created to identify the Domain resource.
   */
  domainSid: string;
  /**
   * The unique string that we created to identify the Domain config (prefix ZK).
   */
  configSid: string;
  /**
   * Any requests we receive to this domain that do not match an existing shortened message will be redirected to the fallback url. These will likely be either expired messages, random misdirected traffic, or intentional scraping.
   */
  fallbackUrl: string;
  /**
   * URL to receive click events to your webhook whenever the recipients click on the shortened links.
   */
  callbackUrl: string;
  /**
   * Boolean field to set customer delivery preference when there is a failure in linkShortening service
   */
  continueOnFailure: boolean;
  /**
   * Date this Domain Config was created.
   */
  dateCreated: Date;
  /**
   * Date that this Domain Config was last updated.
   */
  dateUpdated: Date;
  url: string;
  /**
   * Customer\'s choice to send links with/without \"https://\" attached to shortened url. If true, messages will not be sent with https:// at the beginning of the url. If false, messages will be sent with https:// at the beginning of the url. False is the default behavior if it is not specified.
   */
  disableHttps: boolean;

  private get _proxy(): DomainConfigContext {
    this._context =
      this._context ||
      new DomainConfigContextImpl(this._version, this._solution.domainSid);
    return this._context;
  }

  /**
   * Fetch a DomainConfigInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed DomainConfigInstance
   */
  fetch(
    callback?: (error: Error | null, item?: DomainConfigInstance) => any
  ): Promise<DomainConfigInstance> {
    return this._proxy.fetch(callback);
  }

  /**
   * Update a DomainConfigInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed DomainConfigInstance
   */
  update(
    callback?: (error: Error | null, item?: DomainConfigInstance) => any
  ): Promise<DomainConfigInstance>;
  /**
   * Update a DomainConfigInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed DomainConfigInstance
   */
  update(
    params: DomainConfigContextUpdateOptions,
    callback?: (error: Error | null, item?: DomainConfigInstance) => any
  ): Promise<DomainConfigInstance>;

  update(
    params?: any,
    callback?: (error: Error | null, item?: DomainConfigInstance) => any
  ): Promise<DomainConfigInstance> {
    return this._proxy.update(params, callback);
  }

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return {
      domainSid: this.domainSid,
      configSid: this.configSid,
      fallbackUrl: this.fallbackUrl,
      callbackUrl: this.callbackUrl,
      continueOnFailure: this.continueOnFailure,
      dateCreated: this.dateCreated,
      dateUpdated: this.dateUpdated,
      url: this.url,
      disableHttps: this.disableHttps,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export interface DomainConfigSolution {}

export interface DomainConfigListInstance {
  _version: V1;
  _solution: DomainConfigSolution;
  _uri: string;

  (domainSid: string): DomainConfigContext;
  get(domainSid: string): DomainConfigContext;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export function DomainConfigListInstance(
  version: V1
): DomainConfigListInstance {
  const instance = ((domainSid) =>
    instance.get(domainSid)) as DomainConfigListInstance;

  instance.get = function get(domainSid): DomainConfigContext {
    return new DomainConfigContextImpl(version, domainSid);
  };

  instance._version = version;
  instance._solution = {};
  instance._uri = ``;

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
