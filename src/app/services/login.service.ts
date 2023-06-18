import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthRequest } from '../model/login/authRequest';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private baseUrl = `${environment.HOST}/auth`; // Reemplaza con la URL de tu backend


  constructor(private http: HttpClient) {  }

  
  login(email: string, password: string): Observable<any> {
    let authRequest:AuthRequest=new AuthRequest()
    authRequest.email=email
    authRequest.password=password
    const url = `${this.baseUrl}/login`;
    const requestBody = authRequest;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.post(url, requestBody, { headers });
  }
}
