import { Injectable } from '@angular/core';
import { Http, Headers, Response, Request, RequestOptions, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/retry';
import 'rxjs/add/operator/finally'
import 'rxjs/add/observable/throw';

@Injectable()
export class ApiService {

    private headers: Headers = new Headers();
    private baseUrl: string = 'http://192.168.0.122:3535/api/';
    // private baseUrl: string = 'http://localhost:3000/';
    // private baseUrl: string = 'http://br-api.azurewebsites.net/api/document/type'

    constructor(
        private http: Http
    ) {
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Accept', 'application/json');
        this.headers.append('Authorization', localStorage.getItem('token'));
    }

    public get(endpoint: string, parameters?: any) : Observable<any> {
        return this.request(this.getUrl(endpoint, parameters), RequestMethod.Get, this.headers);
    }

    public delete(endpoint: string, parameters?: any) : Observable<any> {
        return this.request(this.getUrl(endpoint, parameters), RequestMethod.Delete, this.headers);
    }

    public post(endpoint: string, body: any) {
        return this.request(this.baseUrl + endpoint, RequestMethod.Post, this.headers, body);
    }

    public put(endpoint: string, body: any, parameters?: any) {
        return this.request(this.getUrl(endpoint, parameters), RequestMethod.Put, this.headers, body);
    }

    private getUrl(endpoint: string, parameters?: any) {
        let stringParameters: Array<string> = [];

        for (var key in parameters) {
            if (Array.isArray(parameters[key])) {
                parameters[key].forEach((data) => {
                    if (data instanceof Date) {
                        stringParameters.push(key + '=' + (data as Date).toISOString())
                    } else {
                        stringParameters.push(key + '=' + data);
                    }
                });
            } else {
                if (parameters[key] instanceof Date) {
                    stringParameters.push(key + '=' + (parameters[key] as Date).toISOString())
                } else {
                    stringParameters.push(key + '=' + parameters[key]);
                }
            }
        }

        let url = endpoint;
        if (!endpoint.startsWith('http') && !endpoint.startsWith('https')) {
            url = this.baseUrl + url;
        }
        if (stringParameters.length > 0) {
            url = url + '?' + stringParameters.join('&');
        }
        return url;
    }

    public request(url: string, verb: RequestMethod, headers: Headers, body?: any) : Observable<any> {
        var requestoptions = new RequestOptions({
            method: verb,
            url: url,
            headers: headers,
            body: body
        });

        console.log(requestoptions)
        // this.loaderService.show();
        return this.http.request(new Request(requestoptions))
            .retry(3)
            .map(this.extractData)
            .catch(this.handleError)
            .finally(() => {
                // this.loaderService.hide();
            });
    }

    private extractData(res: Response) {
        if (!res.text()) {
            return {};
        }
        let body = res.json();
        return body || {};
    }

    private handleError(error: Response | any) {
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = err;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }

        return Observable.throw(errMsg);
    }

    refreshToken() {
        this.headers.delete('Authorization');
        this.headers.append('Authorization', localStorage.getItem('token'));
    }

    clearToken() {
      localStorage.clear();
      this.headers.delete('Authorization');
    }


}
