import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TokenService } from './token.service';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PlaceService {
  private baseUrl = `${environment.HOST}/places`; // Reemplaza con la URL de tu backend

  constructor(private http: HttpClient,private _tokenService:TokenService) { }

  findByLatitudeAndLongitude(latitude: number, longitude: number): Observable<any> {
    const url = `${this.baseUrl}/find`; // Reemplaza 'ruta-del-endpoint' con la ruta adecuada en tu backend

    const params = {
      latitude: latitude.toString(),
      longitude: longitude.toString()
    };

    // Agrega los headers necesarios si es requerido por tu backend
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this._tokenService.getTokenFromLocal()!=null ? this._tokenService.getTokenFromLocal():this._tokenService.getTokenFromSession()}`
    });

    return this.http.get<any>(url, { params, headers });
  }
}
