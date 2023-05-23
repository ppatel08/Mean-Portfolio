import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContactusService {
  private BASE_URL = environment.apiEndpoint;

  constructor(private http: HttpClient) { }

  getContacts(): Observable<any> {
    return this.http.get(`${this.BASE_URL}/portfolio/api/v1/contactus`);
  }

  getContactusById(_id: string): Observable<any> {
    return this.http.get(`${this.BASE_URL}/portfolio/api/v1/contactus/${_id}`);
  }

  insert(data: any): Observable<any> {
    return this.http.post(`${this.BASE_URL}/portfolio/api/v1/contactus`, data);
  }

  update(_id: string, data: any): Observable<any> {
    return this.http.put(`${this.BASE_URL}/portfolio/api/v1/contactus/${_id}`, data);
  }

  delete(_id: string): Observable<any> {
    return this.http.delete(`${this.BASE_URL}/portfolio/api/v1/contactus/${_id}`);
  }

}