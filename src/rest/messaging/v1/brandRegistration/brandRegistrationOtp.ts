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
import V1 from "../../V1";
const deserialize = require("../../../../base/deserialize");
const serialize = require("../../../../base/serialize");
import { isValidPathParam } from "../../../../base/utility";

export interface BrandRegistrationOtpSolution {
  brandRegistrationSid: string;
}

export interface BrandRegistrationOtpListInstance {
  _version: V1;
  _solution: BrandRegistrationOtpSolution;
  _uri: string;

  /**
   * Create a BrandRegistrationOtpInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed BrandRegistrationOtpInstance
   */
  create(
    callback?: (error: Error | null, item?: BrandRegistrationOtpInstance) => any
  ): Promise<BrandRegistrationOtpInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export function BrandRegistrationOtpListInstance(
  version: V1,
  brandRegistrationSid: string
): BrandRegistrationOtpListInstance {
  if (!isValidPathParam(brandRegistrationSid)) {
    throw new Error("Parameter 'brandRegistrationSid' is not valid.");
  }

  const instance = {} as BrandRegistrationOtpListInstance;

  instance._version = version;
  instance._solution = { brandRegistrationSid };
  instance._uri = `/a2p/BrandRegistrations/${brandRegistrationSid}/SmsOtp`;

  instance.create = function create(
    callback?: (error: Error | null, items: BrandRegistrationOtpInstance) => any
  ): Promise<BrandRegistrationOtpInstance> {
    const headers: any = {};
    headers["Accept"] = "application/json";

    let operationVersion = version,
      operationPromise = operationVersion.create({
        uri: instance._uri,
        method: "post",
        headers,
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new BrandRegistrationOtpInstance(
          operationVersion,
          payload,
          instance._solution.brandRegistrationSid
        )
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

interface BrandRegistrationOtpPayload extends BrandRegistrationOtpResource {}

interface BrandRegistrationOtpResource {
  account_sid: string;
  brand_registration_sid: string;
}

export class BrandRegistrationOtpInstance {
  constructor(
    protected _version: V1,
    payload: BrandRegistrationOtpResource,
    brandRegistrationSid: string
  ) {
    this.accountSid = payload.account_sid;
    this.brandRegistrationSid = payload.brand_registration_sid;
  }

  /**
   * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Brand Registration resource.
   */
  accountSid: string;
  /**
   * The unique string to identify Brand Registration of Sole Proprietor Brand
   */
  brandRegistrationSid: string;

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return {
      accountSid: this.accountSid,
      brandRegistrationSid: this.brandRegistrationSid,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}
