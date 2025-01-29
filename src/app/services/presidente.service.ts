import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PresidenteService {
  private apiUrl = 'http://localhost:8080/evaluacionSanchez/rs/Presidentes';

  constructor(private http: HttpClient) {}

  insertarPresidente(presidente: any): Observable<any> {
    return this.http.post(this.apiUrl, presidente);
  }
}
