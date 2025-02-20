/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Accounts
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
 * Options to pass to create a BulkConsentsInstance
 */
export interface BulkConsentsListInstanceCreateOptions {
  /** This is a list of objects that describes a contact\\\'s opt-in status. Each object contains the following fields: `contact_id`, which must be a string representing phone number in [E.164 format](https://www.twilio.com/docs/glossary/what-e164); `correlation_id`, a unique 32-character UUID used to uniquely map the request item with the response item; `sender_id`, which can be either a valid messaging service SID or a from phone number; `status`, a string representing the consent status. Can be one of [`opt-in`, `opt-out`]; and `source`, a string indicating the medium through which the consent was collected. Can be one of [`website`, `offline`, `opt-in-message`, `opt-out-message`, `others`]. */
  items: Array<any>;
}

export interface BulkConsentsSolution {}

export interface BulkConsentsListInstance {
  _version: V1;
  _solution: BulkConsentsSolution;
  _uri: string;

  /**
   * Create a BulkConsentsInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed BulkConsentsInstance
   */
  create(
    params: BulkConsentsListInstanceCreateOptions,
    callback?: (error: Error | null, item?: BulkConsentsInstance) => any
  ): Promise<BulkConsentsInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export function BulkConsentsListInstance(
  version: V1
): BulkConsentsListInstance {
  const instance = {} as BulkConsentsListInstance;

  instance._version = version;
  instance._solution = {};
  instance._uri = `/Consents/Bulk`;

  instance.create = function create(
    params: BulkConsentsListInstanceCreateOptions,
    callback?: (error: Error | null, items: BulkConsentsInstance) => any
  ): Promise<BulkConsentsInstance> {
    if (params === null || params === undefined) {
      throw new Error('Required parameter "params" missing.');
    }

    if (params["items"] === null || params["items"] === undefined) {
      throw new Error("Required parameter \"params['items']\" missing.");
    }

    let data: any = {};

    data["Items"] = serialize.map(params["items"], (e: any) =>
      serialize.object(e)
    );

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
      (payload) => new BulkConsentsInstance(operationVersion, payload)
    );

    operationPromise = instance._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
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

interface BulkConsentsPayload extends BulkConsentsResource {}

interface BulkConsentsResource {
  items: any;
}

export class BulkConsentsInstance {
  constructor(protected _version: V1, payload: BulkConsentsResource) {
    this.items = payload.items;
  }

  /**
   * A list of objects where each object represents the result of processing a `correlation_id`. Each object contains the following fields: `correlation_id`, a unique 32-character UUID that maps the response to the original request; `error_code`, an integer where 0 indicates success and any non-zero value represents an error; and `error_messages`, an array of strings describing specific validation errors encountered. If the request is successful, the error_messages array will be empty.
   */
  items: any;

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return {
      items: this.items,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}
