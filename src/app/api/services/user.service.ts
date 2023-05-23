import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private BASE_URL = environment.apiEndpoint;

  constructor(private http: HttpClient) { }

  save(data: any): Observable<any> {
    return this.http.post(`${this.BASE_URL}/portfolio/api/v1/user`, data);
  }

  getUser(): Observable<any> {
    return this.http.get(`${this.BASE_URL}/portfolio/api/v1/user/details`);
  }

  uploadProfileImage(data: any): Observable<any> {
    return this.http.post(`${this.BASE_URL}/portfolio/api/v1/user/upload/profile`, data);
  }

  uploadCv(data: any): Observable<any> {
    return this.http.post(`${this.BASE_URL}/portfolio/api/v1/user/upload/cv`, data);
  }

}
