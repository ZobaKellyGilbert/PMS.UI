import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PropertiesResponse } from '../data/DTOS/Res/PropertiesResponse';

@Injectable({
  providedIn: 'root'
})
export class ViewPropertiesService{
private BaseUrl: string = "https://localhost:7258/api/manager";
  constructor(private http: HttpClient) { }

 public getProperties(): Observable<Array<PropertiesResponse>>{
    return this.http.get<Array<PropertiesResponse>>(`${this.BaseUrl}/get-all-properties`);
  }
  public getProperty(id: string){
    return this.http.get<PropertiesResponse>(`${this.BaseUrl}/get-property?propertyId=${id}`);
  }
}
