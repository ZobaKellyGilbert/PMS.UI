import { Injectable } from '@angular/core';
import{HttpClient} from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class AuthService {
private baseUrl: string ="https://localhost:7258/api/auth/"
  constructor(private http: HttpClient) { }
  signUp(request:any)
  {
    return this.http.post<any>(`${this.baseUrl}Create-user`,request);
  }
  login(request:any)
  {
    const res = this.http.post<any>(`${this.baseUrl}Login-user`,request);

    return res
  }
}

