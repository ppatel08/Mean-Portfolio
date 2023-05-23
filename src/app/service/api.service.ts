import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  readonly apiEndpoint = environment.apiEndpoint;

  constructor(private http: HttpClient) { }

  get(url, params?): Observable<any> {
    return this.http.get(this.apiEndpoint + url, { params });
  }

  post(url, body): Observable<any> {
    return this.http.post(this.apiEndpoint + url, body);
  }

  put(url, body): Observable<any> {
    return this.http.put(this.apiEndpoint + url + '/' + body._id, body);
  }

  getByURI(url, params?): Observable<any> {
    return this.http.get(url, { params });
  }
}
