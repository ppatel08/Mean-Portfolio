import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SkillsetService {

  private BASE_URL = environment.apiEndpoint;

  constructor(private http: HttpClient) { }

  insert(data: any): Observable<any> {
    return this.http.post(`${this.BASE_URL}/portfolio/api/v1/skillsets`, data);
  }

  getSkillsets(): Observable<any> {
    return this.http.get(`${this.BASE_URL}/portfolio/api/v1/skillsets`);
  }

  getSkillset(_id: string): Observable<any> {
    return this.http.get(`${this.BASE_URL}/portfolio/api/v1/skillsets/${_id}`);
  }

  update(_id: string, data: any): Observable<any> {
    return this.http.put(`${this.BASE_URL}/portfolio/api/v1/skillsets/${_id}`, data);
  }

  uploadImage(data: any): Observable<any> {
    return this.http.post(`${this.BASE_URL}/portfolio/api/v1/skillsets/upload`, data);
  }

  uploadCv(data: any): Observable<any> {
    return this.http.post(`${this.BASE_URL}/portfolio/api/v1/skillsets/upload/cv`, data);
  }

  delete(_id: string): Observable<any> {
    return this.http.delete(`${this.BASE_URL}/portfolio/api/v1/skillsets/${_id}`);
  }
}
