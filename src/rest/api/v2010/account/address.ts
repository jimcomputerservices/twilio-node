/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Api
 * This is the public Twilio REST API.
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../../base/Page";
import Response from "../../../../http/response";
import V2010 from "../../V2010";
const deserialize = require("../../../../base/deserialize");
const serialize = require("../../../../base/serialize");
import { isValidPathParam } from "../../../../base/utility";
import { DependentPhoneNumberListInstance } from "./address/dependentPhoneNumber";

/**
 * Options to pass to update a AddressInstance
 */
export interface AddressContextUpdateOptions {
  /** A descriptive string that you create to describe the new address. It can be up to 64 characters long for Regulatory Compliance addresses and 32 characters long for Emergency addresses. */
  friendlyName?: string;
  /** The name to associate with the address. */
  customerName?: string;
  /** The number and street address of the address. */
  street?: string;
  /** The city of the address. */
  city?: string;
  /** The state or region of the address. */
  region?: string;
  /** The postal code of the address. */
  postalCode?: string;
  /** Whether to enable emergency calling on the address. Can be: `true` or `false`. */
  emergencyEnabled?: boolean;
  /** Whether we should automatically correct the address. Can be: `true` or `false` and the default is `true`. If empty or `true`, we will correct the address you provide if necessary. If `false`, we won\\\'t alter the address you provide. */
  autoCorrectAddress?: boolean;
  /** The additional number and street address of the address. */
  streetSecondary?: string;
}

/**
 * Options to pass to create a AddressInstance
 */
export interface AddressListInstanceCreateOptions {
  /** The name to associate with the new address. */
  customerName: string;
  /** The number and street address of the new address. */
  street: string;
  /** The city of the new address. */
  city: string;
  /** The state or region of the new address. */
  region: string;
  /** The postal code of the new address. */
  postalCode: string;
  /** The ISO country code of the new address. */
  isoCountry: string;
  /** A descriptive string that you create to describe the new address. It can be up to 64 characters long. */
  friendlyName?: string;
  /** Whether to enable emergency calling on the new address. Can be: `true` or `false`. */
  emergencyEnabled?: boolean;
  /** Whether we should automatically correct the address. Can be: `true` or `false` and the default is `true`. If empty or `true`, we will correct the address you provide if necessary. If `false`, we won\\\'t alter the address you provide. */
  autoCorrectAddress?: boolean;
  /** The additional number and street address of the address. */
  streetSecondary?: string;
}
/**
 * Options to pass to each
 */
export interface AddressListInstanceEachOptions {
  /** The `customer_name` of the Address resources to read. */
  customerName?: string;
  /** The string that identifies the Address resources to read. */
  friendlyName?: string;
  /** The ISO country code of the Address resources to read. */
  isoCountry?: string;
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Function to process each record. If this and a positional callback are passed, this one will be used */
  callback?: (item: AddressInstance, done: (err?: Error) => void) => void;
  /** Function to be called upon completion of streaming */
  done?: Function;
  /** Upper limit for the number of records to return. each() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to list
 */
export interface AddressListInstanceOptions {
  /** The `customer_name` of the Address resources to read. */
  customerName?: string;
  /** The string that identifies the Address resources to read. */
  friendlyName?: string;
  /** The ISO country code of the Address resources to read. */
  isoCountry?: string;
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Upper limit for the number of records to return. list() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to page
 */
export interface AddressListInstancePageOptions {
  /** The `customer_name` of the Address resources to read. */
  customerName?: string;
  /** The string that identifies the Address resources to read. */
  friendlyName?: string;
  /** The ISO country code of the Address resources to read. */
  isoCountry?: string;
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Page Number, this value is simply for client state */
  pageNumber?: number;
  /** PageToken provided by the API */
  pageToken?: string;
}

export interface AddressContext {
  dependentPhoneNumbers: DependentPhoneNumberListInstance;

  /**
   * Remove a AddressInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed boolean
   */
  remove(
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean>;

  /**
   * Fetch a AddressInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed AddressInstance
   */
  fetch(
    callback?: (error: Error | null, item?: AddressInstance) => any
  ): Promise<AddressInstance>;

  /**
   * Update a AddressInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed AddressInstance
   */
  update(
    callback?: (error: Error | null, item?: AddressInstance) => any
  ): Promise<AddressInstance>;
  /**
   * Update a AddressInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed AddressInstance
   */
  update(
    params: AddressContextUpdateOptions,
    callback?: (error: Error | null, item?: AddressInstance) => any
  ): Promise<AddressInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface AddressContextSolution {
  accountSid: string;
  sid: string;
}

export class AddressContextImpl implements AddressContext {
  protected _solution: AddressContextSolution;
  protected _uri: string;

  protected _dependentPhoneNumbers?: DependentPhoneNumberListInstance;

  constructor(protected _version: V2010, accountSid: string, sid: string) {
    if (!isValidPathParam(accountSid)) {
      throw new Error("Parameter 'accountSid' is not valid.");
    }

    if (!isValidPathParam(sid)) {
      throw new Error("Parameter 'sid' is not valid.");
    }

    this._solution = { accountSid, sid };
    this._uri = `/Accounts/${accountSid}/Addresses/${sid}.json`;
  }

  get dependentPhoneNumbers(): DependentPhoneNumberListInstance {
    this._dependentPhoneNumbers =
      this._dependentPhoneNumbers ||
      DependentPhoneNumberListInstance(
        this._version,
        this._solution.accountSid,
        this._solution.sid
      );
    return this._dependentPhoneNumbers;
  }

  remove(
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean> {
    const headers: any = {};

    const instance = this;
    let operationVersion = instance._version,
      operationPromise = operationVersion.remove({
        uri: instance._uri,
        method: "delete",
        headers,
      });

    operationPromise = instance._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  }

  fetch(
    callback?: (error: Error | null, item?: AddressInstance) => any
  ): Promise<AddressInstance> {
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
        new AddressInstance(
          operationVersion,
          payload,
          instance._solution.accountSid,
          instance._solution.sid
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
      | AddressContextUpdateOptions
      | ((error: Error | null, item?: AddressInstance) => any),
    callback?: (error: Error | null, item?: AddressInstance) => any
  ): Promise<AddressInstance> {
    if (params instanceof Function) {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["friendlyName"] !== undefined)
      data["FriendlyName"] = params["friendlyName"];
    if (params["customerName"] !== undefined)
      data["CustomerName"] = params["customerName"];
    if (params["street"] !== undefined) data["Street"] = params["street"];
    if (params["city"] !== undefined) data["City"] = params["city"];
    if (params["region"] !== undefined) data["Region"] = params["region"];
    if (params["postalCode"] !== undefined)
      data["PostalCode"] = params["postalCode"];
    if (params["emergencyEnabled"] !== undefined)
      data["EmergencyEnabled"] = serialize.bool(params["emergencyEnabled"]);
    if (params["autoCorrectAddress"] !== undefined)
      data["AutoCorrectAddress"] = serialize.bool(params["autoCorrectAddress"]);
    if (params["streetSecondary"] !== undefined)
      data["StreetSecondary"] = params["streetSecondary"];

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
        new AddressInstance(
          operationVersion,
          payload,
          instance._solution.accountSid,
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

interface AddressPayload extends TwilioResponsePayload {
  addresses: AddressResource[];
}

interface AddressResource {
  account_sid: string;
  city: string;
  customer_name: string;
  date_created: Date;
  date_updated: Date;
  friendly_name: string;
  iso_country: string;
  postal_code: string;
  region: string;
  sid: string;
  street: string;
  uri: string;
  emergency_enabled: boolean;
  validated: boolean;
  verified: boolean;
  street_secondary: string;
}

export class AddressInstance {
  protected _solution: AddressContextSolution;
  protected _context?: AddressContext;

  constructor(
    protected _version: V2010,
    payload: AddressResource,
    accountSid: string,
    sid?: string
  ) {
    this.accountSid = payload.account_sid;
    this.city = payload.city;
    this.customerName = payload.customer_name;
    this.dateCreated = deserialize.rfc2822DateTime(payload.date_created);
    this.dateUpdated = deserialize.rfc2822DateTime(payload.date_updated);
    this.friendlyName = payload.friendly_name;
    this.isoCountry = payload.iso_country;
    this.postalCode = payload.postal_code;
    this.region = payload.region;
    this.sid = payload.sid;
    this.street = payload.street;
    this.uri = payload.uri;
    this.emergencyEnabled = payload.emergency_enabled;
    this.validated = payload.validated;
    this.verified = payload.verified;
    this.streetSecondary = payload.street_secondary;

    this._solution = { accountSid, sid: sid || this.sid };
  }

  /**
   * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that is responsible for the Address resource.
   */
  accountSid: string;
  /**
   * The city in which the address is located.
   */
  city: string;
  /**
   * The name associated with the address.This property has a maximum length of 16 4-byte characters, or 21 3-byte characters.
   */
  customerName: string;
  /**
   * The date and time in GMT that the resource was created specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
   */
  dateCreated: Date;
  /**
   * The date and time in GMT that the resource was last updated specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
   */
  dateUpdated: Date;
  /**
   * The string that you assigned to describe the resource.
   */
  friendlyName: string;
  /**
   * The ISO country code of the address.
   */
  isoCountry: string;
  /**
   * The postal code of the address.
   */
  postalCode: string;
  /**
   * The state or region of the address.
   */
  region: string;
  /**
   * The unique string that that we created to identify the Address resource.
   */
  sid: string;
  /**
   * The number and street address of the address.
   */
  street: string;
  /**
   * The URI of the resource, relative to `https://api.twilio.com`.
   */
  uri: string;
  /**
   * Whether emergency calling has been enabled on this number.
   */
  emergencyEnabled: boolean;
  /**
   * Whether the address has been validated to comply with local regulation. In countries that require valid addresses, an invalid address will not be accepted. `true` indicates the Address has been validated. `false` indicate the country doesn\'t require validation or the Address is not valid.
   */
  validated: boolean;
  /**
   * Whether the address has been verified to comply with regulation. In countries that require valid addresses, an invalid address will not be accepted. `true` indicates the Address has been verified. `false` indicate the country doesn\'t require verified or the Address is not valid.
   */
  verified: boolean;
  /**
   * The additional number and street address of the address.
   */
  streetSecondary: string;

  private get _proxy(): AddressContext {
    this._context =
      this._context ||
      new AddressContextImpl(
        this._version,
        this._solution.accountSid,
        this._solution.sid
      );
    return this._context;
  }

  /**
   * Remove a AddressInstance
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
   * Fetch a AddressInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed AddressInstance
   */
  fetch(
    callback?: (error: Error | null, item?: AddressInstance) => any
  ): Promise<AddressInstance> {
    return this._proxy.fetch(callback);
  }

  /**
   * Update a AddressInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed AddressInstance
   */
  update(
    callback?: (error: Error | null, item?: AddressInstance) => any
  ): Promise<AddressInstance>;
  /**
   * Update a AddressInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed AddressInstance
   */
  update(
    params: AddressContextUpdateOptions,
    callback?: (error: Error | null, item?: AddressInstance) => any
  ): Promise<AddressInstance>;

  update(
    params?: any,
    callback?: (error: Error | null, item?: AddressInstance) => any
  ): Promise<AddressInstance> {
    return this._proxy.update(params, callback);
  }

  /**
   * Access the dependentPhoneNumbers.
   */
  dependentPhoneNumbers(): DependentPhoneNumberListInstance {
    return this._proxy.dependentPhoneNumbers;
  }

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return {
      accountSid: this.accountSid,
      city: this.city,
      customerName: this.customerName,
      dateCreated: this.dateCreated,
      dateUpdated: this.dateUpdated,
      friendlyName: this.friendlyName,
      isoCountry: this.isoCountry,
      postalCode: this.postalCode,
      region: this.region,
      sid: this.sid,
      street: this.street,
      uri: this.uri,
      emergencyEnabled: this.emergencyEnabled,
      validated: this.validated,
      verified: this.verified,
      streetSecondary: this.streetSecondary,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export interface AddressSolution {
  accountSid: string;
}

export interface AddressListInstance {
  _version: V2010;
  _solution: AddressSolution;
  _uri: string;

  (sid: string): AddressContext;
  get(sid: string): AddressContext;

  /**
   * Create a AddressInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed AddressInstance
   */
  create(
    params: AddressListInstanceCreateOptions,
    callback?: (error: Error | null, item?: AddressInstance) => any
  ): Promise<AddressInstance>;

  /**
   * Streams AddressInstance records from the API.
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
   * @param { AddressListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(
    callback?: (item: AddressInstance, done: (err?: Error) => void) => void
  ): void;
  each(
    params: AddressListInstanceEachOptions,
    callback?: (item: AddressInstance, done: (err?: Error) => void) => void
  ): void;
  /**
   * Retrieve a single target page of AddressInstance records from the API.
   *
   * The request is executed immediately.
   *
   * @param { string } [targetUrl] - API-generated URL for the requested results page
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(
    targetUrl: string,
    callback?: (error: Error | null, items: AddressPage) => any
  ): Promise<AddressPage>;
  /**
   * Lists AddressInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { AddressListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    callback?: (error: Error | null, items: AddressInstance[]) => any
  ): Promise<AddressInstance[]>;
  list(
    params: AddressListInstanceOptions,
    callback?: (error: Error | null, items: AddressInstance[]) => any
  ): Promise<AddressInstance[]>;
  /**
   * Retrieve a single page of AddressInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { AddressListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    callback?: (error: Error | null, items: AddressPage) => any
  ): Promise<AddressPage>;
  page(
    params: AddressListInstancePageOptions,
    callback?: (error: Error | null, items: AddressPage) => any
  ): Promise<AddressPage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export function AddressListInstance(
  version: V2010,
  accountSid: string
): AddressListInstance {
  if (!isValidPathParam(accountSid)) {
    throw new Error("Parameter 'accountSid' is not valid.");
  }

  const instance = ((sid) => instance.get(sid)) as AddressListInstance;

  instance.get = function get(sid): AddressContext {
    return new AddressContextImpl(version, accountSid, sid);
  };

  instance._version = version;
  instance._solution = { accountSid };
  instance._uri = `/Accounts/${accountSid}/Addresses.json`;

  instance.create = function create(
    params: AddressListInstanceCreateOptions,
    callback?: (error: Error | null, items: AddressInstance) => any
  ): Promise<AddressInstance> {
    if (params === null || params === undefined) {
      throw new Error('Required parameter "params" missing.');
    }

    if (
      params["customerName"] === null ||
      params["customerName"] === undefined
    ) {
      throw new Error("Required parameter \"params['customerName']\" missing.");
    }

    if (params["street"] === null || params["street"] === undefined) {
      throw new Error("Required parameter \"params['street']\" missing.");
    }

    if (params["city"] === null || params["city"] === undefined) {
      throw new Error("Required parameter \"params['city']\" missing.");
    }

    if (params["region"] === null || params["region"] === undefined) {
      throw new Error("Required parameter \"params['region']\" missing.");
    }

    if (params["postalCode"] === null || params["postalCode"] === undefined) {
      throw new Error("Required parameter \"params['postalCode']\" missing.");
    }

    if (params["isoCountry"] === null || params["isoCountry"] === undefined) {
      throw new Error("Required parameter \"params['isoCountry']\" missing.");
    }

    let data: any = {};

    data["CustomerName"] = params["customerName"];

    data["Street"] = params["street"];

    data["City"] = params["city"];

    data["Region"] = params["region"];

    data["PostalCode"] = params["postalCode"];

    data["IsoCountry"] = params["isoCountry"];
    if (params["friendlyName"] !== undefined)
      data["FriendlyName"] = params["friendlyName"];
    if (params["emergencyEnabled"] !== undefined)
      data["EmergencyEnabled"] = serialize.bool(params["emergencyEnabled"]);
    if (params["autoCorrectAddress"] !== undefined)
      data["AutoCorrectAddress"] = serialize.bool(params["autoCorrectAddress"]);
    if (params["streetSecondary"] !== undefined)
      data["StreetSecondary"] = params["streetSecondary"];

    const headers: any = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    headers["Accept"] = "application/json";

    let operationVersion = version,
      operationPromise = operationVersion.create({
        uri: instance._uri,
        method: "post",
        data,
        headers,
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new AddressInstance(
          operationVersion,
          payload,
          instance._solution.accountSid
        )
    );

    operationPromise = instance._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  };

  instance.page = function page(
    params?:
      | AddressListInstancePageOptions
      | ((error: Error | null, items: AddressPage) => any),
    callback?: (error: Error | null, items: AddressPage) => any
  ): Promise<AddressPage> {
    if (params instanceof Function) {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["customerName"] !== undefined)
      data["CustomerName"] = params["customerName"];
    if (params["friendlyName"] !== undefined)
      data["FriendlyName"] = params["friendlyName"];
    if (params["isoCountry"] !== undefined)
      data["IsoCountry"] = params["isoCountry"];
    if (params["pageSize"] !== undefined) data["PageSize"] = params["pageSize"];

    if (params.pageNumber !== undefined) data["Page"] = params.pageNumber;
    if (params.pageToken !== undefined) data["PageToken"] = params.pageToken;

    const headers: any = {};
    headers["Accept"] = "application/json";

    let operationVersion = version,
      operationPromise = operationVersion.page({
        uri: instance._uri,
        method: "get",
        params: data,
        headers,
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new AddressPage(operationVersion, payload, instance._solution)
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
    targetUrl: string,
    callback?: (error: Error | null, items: AddressPage) => any
  ): Promise<AddressPage> {
    const operationPromise = instance._version._domain.twilio.request({
      method: "get",
      uri: targetUrl,
    });

    let pagePromise = operationPromise.then(
      (payload) =>
        new AddressPage(instance._version, payload, instance._solution)
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

export class AddressPage extends Page<
  V2010,
  AddressPayload,
  AddressResource,
  AddressInstance
> {
  /**
   * Initialize the AddressPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(
    version: V2010,
    response: Response<string>,
    solution: AddressSolution
  ) {
    super(version, response, solution);
  }

  /**
   * Build an instance of AddressInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: AddressResource): AddressInstance {
    return new AddressInstance(
      this._version,
      payload,
      this._solution.accountSid
    );
  }

  [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}
