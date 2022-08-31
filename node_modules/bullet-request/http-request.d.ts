/**
 * http request options
 *
 * @export
 * @interface BulletHttpRequestOption
 */
interface BulletHttpRequestOption {
  url: string,            // request url *require
  type?: string,        // request type [get|post|put|delete], default get
  dataType?: string,   // response data type [arraybuffer|blob|document|json|text], default json
  data?: any,           // request data
  header?: any,         // request headers
}

/**
 * response error object
 *
 * @export
 * @interface BulletHttpResponseError
 */
interface BulletHttpResponseError {
  error: string | any,    // error msg
  status: number,         // http status code
  readyState: number,     // http ready state code
}

/**
 * http request class
 *
 * @export
 * @class BulletHttpRequest
 */
export default class BulletHttpRequest {
  /**
   * xml http request object
   *
   * @type {XMLHttpRequest}
   * @memberof BulletHttpRequest
   */
  private xmlhttp: XMLHttpRequest;
  /**
   * http request options
   *
   * @type {BulletHttpRequestOption}
   * @memberof BulletHttpRequest
   */
  private opts: BulletHttpRequestOption;

  constructor();

  /**
   * http object request
   *
   * @param {BulletHttpRequestOption} [opts] http request options
   * @returns {(Promise<string | object>)} response of promise
   * @memberof BulletHttpRequest
   */
  request(opts?: BulletHttpRequestOption): Promise<string | object | BulletHttpResponseError>
}