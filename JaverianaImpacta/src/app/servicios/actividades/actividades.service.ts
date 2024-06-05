import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Calendario } from '../../dominio/actividades';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActividadesService {
  private apiUrl = 'http://10.195.34.24/api/calendarios';

  constructor(private http: HttpClient) { }

  getCalendarios(): Observable<Calendario[]> {
    return this.http.get<Calendario[]>(`${this.apiUrl}/listar`);
  }

  getCalendariosPorFecha(fecha: Date): Observable<Calendario[]> {
    return this.http.get<Calendario[]>(`${this.apiUrl}/obtener`, {
      params: { fecha: fecha.toISOString().split('T')[0] }
    });
  }

  crearCalendario(calendario: Calendario): Observable<Calendario> {
    return this.http.post<Calendario>(`${this.apiUrl}/crear`, calendario, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    });
  }

  actualizarCalendario(id: number, calendario: Calendario): Observable<Calendario> {
    return this.http.put<Calendario>(`${this.apiUrl}/actualizar`, calendario, {
      params: { id: id.toString() },
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    });
  }

  borrarCalendario(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/eliminar`, {
      params: { id: id.toString() }
    });
  }
}