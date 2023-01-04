/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Bulkexports
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

export interface JobContext {
  /**
   * Remove a JobInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed boolean
   */
  remove(
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean>;

  /**
   * Fetch a JobInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed JobInstance
   */
  fetch(
    callback?: (error: Error | null, item?: JobInstance) => any
  ): Promise<JobInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface JobContextSolution {
  jobSid: string;
}

export class JobContextImpl implements JobContext {
  protected _solution: JobContextSolution;
  protected _uri: string;

  constructor(protected _version: V1, jobSid: string) {
    if (!isValidPathParam(jobSid)) {
      throw new Error("Parameter 'jobSid' is not valid.");
    }

    this._solution = { jobSid };
    this._uri = `/Exports/Jobs/${jobSid}`;
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

  fetch(callback?: any): Promise<JobInstance> {
    const instance = this;
    let operationVersion = instance._version,
      operationPromise = operationVersion.fetch({
        uri: instance._uri,
        method: "get",
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new JobInstance(operationVersion, payload, instance._solution.jobSid)
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

interface JobPayload extends JobResource {}

interface JobResource {
  resource_type: string;
  friendly_name: string;
  details: any;
  start_day: string;
  end_day: string;
  job_sid: string;
  webhook_url: string;
  webhook_method: string;
  email: string;
  url: string;
  job_queue_position: string;
  estimated_completion_time: string;
}

export class JobInstance {
  protected _solution: JobContextSolution;
  protected _context?: JobContext;

  constructor(protected _version: V1, payload: JobResource, jobSid?: string) {
    this.resourceType = payload.resource_type;
    this.friendlyName = payload.friendly_name;
    this.details = payload.details;
    this.startDay = payload.start_day;
    this.endDay = payload.end_day;
    this.jobSid = payload.job_sid;
    this.webhookUrl = payload.webhook_url;
    this.webhookMethod = payload.webhook_method;
    this.email = payload.email;
    this.url = payload.url;
    this.jobQueuePosition = payload.job_queue_position;
    this.estimatedCompletionTime = payload.estimated_completion_time;

    this._solution = { jobSid: jobSid || this.jobSid };
  }

  /**
   * The type of communication – Messages, Calls, Conferences, and Participants
   */
  resourceType: string;
  /**
   * The friendly name specified when creating the job
   */
  friendlyName: string;
  /**
   * The details of a job state which is an object that contains a `status` string, a day count integer, and list of days in the job
   */
  details: any;
  /**
   * The start time for the export specified when creating the job
   */
  startDay: string;
  /**
   * The end time for the export specified when creating the job
   */
  endDay: string;
  /**
   * The job_sid returned when the export was created
   */
  jobSid: string;
  /**
   * The optional webhook url called on completion
   */
  webhookUrl: string;
  /**
   * This is the method used to call the webhook
   */
  webhookMethod: string;
  /**
   * The optional email to send the completion notification to
   */
  email: string;
  url: string;
  /**
   * This is the job position from the 1st in line. Your queue position will never increase. As jobs ahead of yours in the queue are processed, the queue position number will decrease
   */
  jobQueuePosition: string;
  /**
   * this is the time estimated until your job is complete. This is calculated each time you request the job list. The time is calculated based on the current rate of job completion (which may vary) and your job queue position
   */
  estimatedCompletionTime: string;

  private get _proxy(): JobContext {
    this._context =
      this._context || new JobContextImpl(this._version, this._solution.jobSid);
    return this._context;
  }

  /**
   * Remove a JobInstance
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
   * Fetch a JobInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed JobInstance
   */
  fetch(
    callback?: (error: Error | null, item?: JobInstance) => any
  ): Promise<JobInstance> {
    return this._proxy.fetch(callback);
  }

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return {
      resourceType: this.resourceType,
      friendlyName: this.friendlyName,
      details: this.details,
      startDay: this.startDay,
      endDay: this.endDay,
      jobSid: this.jobSid,
      webhookUrl: this.webhookUrl,
      webhookMethod: this.webhookMethod,
      email: this.email,
      url: this.url,
      jobQueuePosition: this.jobQueuePosition,
      estimatedCompletionTime: this.estimatedCompletionTime,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export interface JobSolution {}

export interface JobListInstance {
  _version: V1;
  _solution: JobSolution;
  _uri: string;

  (jobSid: string): JobContext;
  get(jobSid: string): JobContext;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export function JobListInstance(version: V1): JobListInstance {
  const instance = ((jobSid) => instance.get(jobSid)) as JobListInstance;

  instance.get = function get(jobSid): JobContext {
    return new JobContextImpl(version, jobSid);
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
