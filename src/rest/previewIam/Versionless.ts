/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Organization Public API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import PreviewIamBase from "../PreviewIamBase";
import Version from "../../base/Version";
import { OrganizationListInstance } from "./versionless/organization";

export default class Versionless extends Version {
  /**
   * Initialize the Versionless version of PreviewIam
   *
   * @param domain - The Twilio (Twilio.PreviewIam) domain
   */
  constructor(domain: PreviewIamBase) {
    super(domain, "Organizations");
  }

  /** organization - { Twilio.PreviewIam.Versionless.OrganizationListInstance } resource */
  protected _organization?: OrganizationListInstance;

  /** Getter for organization resource */
  get organization(): OrganizationListInstance {
    this._organization = this._organization || OrganizationListInstance(this);
    return this._organization;
  }
}
