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

    token: string = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySWQiOiIyMzg4ODRmNy0xNWRkLTQ4YjQtOTFhZS1kZWM0ZDUxM2U3NDQiLCJ1bmlxdWVfbmFtZSI6WyJsYW5kbG9yZCIsImxhbmRsb3JkIl0sIm5hbWVpZCI6IjIzODg4NGY3LTE1ZGQtNDhiNC05MWFlLWRlYzRkNTEzZTc0NCIsInJvbGUiOiJsYW5kbG9yZCIsInN1YiI6InVzZXJAbGFuZGxvcmQuY29tIiwiZW1haWwiOiJ1c2VyQGxhbmRsb3JkLmNvbSIsImp0aSI6ImZkN2M1NmU1LThmY2EtNDVjMi1iNDAzLTZhMzVmNmE4MTQzMyIsImlhdCI6MTY4NDQ5NTc1NiwibmJmIjoxNjg0NDk1NzU2LCJleHAiOjE2ODk2Nzk3NTZ9.k923bRNf4ETd6K1niOYeiGJUzzYV2hSnRMWcEZN3vsM";
  
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