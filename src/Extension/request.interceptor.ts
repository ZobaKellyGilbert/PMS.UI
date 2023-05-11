import {
    HttpEvent,
    HttpHandler,
    HttpInterceptor,
    HttpRequest,
    HttpHeaders,
  } from '@angular/common/http';
  import { Inject, Injectable } from '@angular/core';
  import { Observable } from 'rxjs/internal/Observable';
  
  @Injectable()
  export class JwtTokenInterceptor implements HttpInterceptor {
    constructor() {
        localStorage.setItem("token", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySWQiOiJhOTJkMWIwMC1kOGFjLTQ5ZTAtOTQzZi05ZTIzYzgzNmU1MTEiLCJ1bmlxdWVfbmFtZSI6WyJrZWxseW5jb2RlcyIsImtlbGx5bmNvZGVzIl0sIm5hbWVpZCI6ImE5MmQxYjAwLWQ4YWMtNDllMC05NDNmLTllMjNjODM2ZTUxMSIsInJvbGUiOiJsYW5kbG9yZCIsInN1YiI6ImtlbGx5bmNvZGVzQGdtYWlsLmNvbSIsImVtYWlsIjoia2VsbHluY29kZXNAZ21haWwuY29tIiwianRpIjoiMDg5MWY0YzQtYzJiYy00N2YzLTk3ZmQtZWE2ODZmMTQ2NWIwIiwiaWF0IjoxNjgzNzkwMDI0LCJuYmYiOjE2ODM3OTAwMjQsImV4cCI6MTY4Mzg3NjQyNH0.abj26uP_ORGGpJCo7ATgEEcUHHTaX7aqK56PJOAXtZ0");
    }

    token: string = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySWQiOiJhOTJkMWIwMC1kOGFjLTQ5ZTAtOTQzZi05ZTIzYzgzNmU1MTEiLCJ1bmlxdWVfbmFtZSI6WyJrZWxseW5jb2RlcyIsImtlbGx5bmNvZGVzIl0sIm5hbWVpZCI6ImE5MmQxYjAwLWQ4YWMtNDllMC05NDNmLTllMjNjODM2ZTUxMSIsInJvbGUiOiJsYW5kbG9yZCIsInN1YiI6ImtlbGx5bmNvZGVzQGdtYWlsLmNvbSIsImVtYWlsIjoia2VsbHluY29kZXNAZ21haWwuY29tIiwianRpIjoiMDg5MWY0YzQtYzJiYy00N2YzLTk3ZmQtZWE2ODZmMTQ2NWIwIiwiaWF0IjoxNjgzNzkwMDI0LCJuYmYiOjE2ODM3OTAwMjQsImV4cCI6MTY4Mzg3NjQyNH0.abj26uP_ORGGpJCo7ATgEEcUHHTaX7aqK56PJOAXtZ0";
  
    intercept(
      request: HttpRequest<unknown>,
      next: HttpHandler
    ): Observable<HttpEvent<any>> {
     
      request = request.clone({
        headers: new HttpHeaders({ Authorization: `Bearer ${this.token}` }),
      });
      console.log(request);
      return next.handle(request);
    }
  }