import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {
  private BASE_URL = environment.apiEndpoint;

  constructor(private http: HttpClient) { }

  getExperiences(): Observable<any> {
    return this.http.get(`${this.BASE_URL}/portfolio/api/v1/experiences`);
  }

  getExperience(_id: string): Observable<any> {
    return this.http.get(`${this.BASE_URL}/portfolio/api/v1/experiences/${_id}`);
  }

  insert(data: any): Observable<any> {
    return this.http.post(`${this.BASE_URL}/portfolio/api/v1/experiences`, data);
  }

  update(_id: string, data: any): Observable<any> {
    return this.http.put(`${this.BASE_URL}/portfolio/api/v1/experiences/${_id}`, data);
  }

  delete(_id: string): Observable<any> {
    return this.http.delete(`${this.BASE_URL}/portfolio/api/v1/experiences/${_id}`);
  }

}
