import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
@Injectable({
  providedIn: 'root'
})
export class TokenService {
  private readonly SESSION_TOKEN_KEY = 'session_token';
  private readonly LOCAL_TOKEN_KEY = 'local_token';

  constructor() { }

  // Guarda el token en la sesión
  saveTokenToSession(token: string): void {
    sessionStorage.setItem(this.SESSION_TOKEN_KEY, token);
  }

  // Obtiene el token de la sesión
  getTokenFromSession(): string | null {
    return sessionStorage.getItem(this.SESSION_TOKEN_KEY);
  }

  // Elimina el token de la sesión
  removeTokenFromSession(): void {
    sessionStorage.removeItem(this.SESSION_TOKEN_KEY);
  }

  // Guarda el token en el almacenamiento local
  saveTokenToLocal(token: string): void {
    localStorage.setItem(this.LOCAL_TOKEN_KEY, token);
  }

  // Obtiene el token del almacenamiento local
  getTokenFromLocal(): string | null {
    return localStorage.getItem(this.LOCAL_TOKEN_KEY);
  }

  // Elimina el token del almacenamiento local
  removeTokenFromLocal(): void {
    localStorage.removeItem(this.LOCAL_TOKEN_KEY);
  }
}