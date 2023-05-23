import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  private BASE_URL = environment.apiEndpoint;

  constructor(private http: HttpClient) { }

  getServices(): Observable<any> {
    return this.http.get(`${this.BASE_URL}/portfolio/api/v1/services`);
  }

  getService(_id: string): Observable<any> {
    return this.http.get(`${this.BASE_URL}/portfolio/api/v1/services/${_id}`);
  }

  insert(data: any): Observable<any> {
    return this.http.post(`${this.BASE_URL}/portfolio/api/v1/services`, data);
  }

  update(_id: string, data: any): Observable<any> {
    return this.http.put(`${this.BASE_URL}/portfolio/api/v1/services/${_id}`, data);
  }

  uploadServiceImage(data: any): Observable<any> {
    return this.http.post(`${this.BASE_URL}/portfolio/api/v1/services/upload`, data);
  }

  delete(_id: string): Observable<any> {
    return this.http.delete(`${this.BASE_URL}/portfolio/api/v1/services/${_id}`);
  }

}