import fetch, { HeadersInit, HeaderInit, RequestInit } from "node-fetch";

type MethodsType = "POST" | "PUT" | "GET" | "DELETE" | "PATCH";

interface IRequestParams {
  body?: any;
  headers?: HeaderInit;
}

interface IMakeRequestParams extends IRequestParams {
  url: string;
  method: MethodsType;
}

/**
 * Responsible for facilitating the use of the node-fetch package
 */
class Fetch {
  private _url: string;
  private _headers: HeadersInit;

  constructor(url?: string, headers?: HeadersInit) {
    this._url = url || "";
    this._headers = headers || {};
  }

  /**
   *
   * Getter && Setters
   *
   */

  set setUrl(url: string) {
    this._url = url;
  }

  set setHeaders(headers: HeadersInit) {
    this._headers = headers;
  }

  /**
   *
   * Request Methods
   *
   */

  async get(url: string, headers?: HeadersInit) {
    return this.makeRequest({
      method: "GET",
      url,
      headers,
    });
  }

  async post(url: string, body?: any, headers?: HeadersInit) {
    const requestHeaders = headers || {};

    return this.makeRequest({
      method: "POST",
      url,
      body,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        ...requestHeaders,
      },
    });
  }

  async put(url: string, body?: any, headers?: HeadersInit) {
    const requestHeaders = headers || {};

    return this.makeRequest({
      method: "PUT",
      url,
      body,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        ...requestHeaders,
      },
    });
  }

  async patch(url: string, body?: any, headers?: HeadersInit) {
    return this.makeRequest({
      method: "PATCH",
      url,
      body,
      headers,
    });
  }

  async delete(url: string, headers?: HeadersInit) {
    return this.makeRequest({
      method: "DELETE",
      url,
      headers,
    });
  }

  /**
   *
   * Internal methods
   *
   */

  private async makeRequest({
    method,
    url,
    body,
    headers,
  }: IMakeRequestParams) {
    const requestOptions = { method } as RequestInit;

    if (body) requestOptions.body = JSON.stringify(body);

    if (this._headers || headers) {
      requestOptions.headers = {
        ...this._headers,
        ...(headers || {}),
      };
    }

    const response = await fetch(`${this._url}${url}`, requestOptions);

    return response;
  }
}

export default Fetch;
