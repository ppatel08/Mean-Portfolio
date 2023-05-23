import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SharedService } from 'src/app/service/shared.service';
import { UserService } from './user.service';
@Injectable({
  providedIn: 'root'
})
export class AppInitService {


  constructor(private http: HttpClient,
    private sharedService: SharedService) { }

  Init() {  }

}
