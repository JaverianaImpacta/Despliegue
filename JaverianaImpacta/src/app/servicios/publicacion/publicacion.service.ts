import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Publicacion } from '../../dominio/publicacion';


@Injectable({
  providedIn: 'root'
})
export class PublicacionService {
  private apiURL = 'http://10.195.34.24:8118/api/publicaciones'; // Actualiza la URL con la de tu backend

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private httpClient: HttpClient) { }

  obtenerPublicaciones(): Observable<Publicacion[]> {
    return this.httpClient.get<Publicacion[]>(this.apiURL + '/listar')
      .pipe(
        catchError(this.errorHandler)
      );
  }

  obtenerPublicacionesPorCategoria(categoria: string): Observable<Publicacion[]> {
    return this.httpClient.get<Publicacion[]>(`${this.apiURL}/obtenerCategoria?categoria=${categoria}`)
      .pipe(
        catchError(this.errorHandler)
      );
  }

  obtenerPublicacion(id: number): Observable<Publicacion> {
    return this.httpClient.get<Publicacion>(`${this.apiURL}/obtener?id=${id}`)
      .pipe(
        catchError(this.errorHandler)
      );
  }

  crearPublicacion(publicacion: Publicacion): Observable<Publicacion> {
    return this.httpClient.post<Publicacion>(`${this.apiURL}/crear`, JSON.stringify(publicacion), this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      );
  }

  actualizarPublicacion(id: number, publicacion: Publicacion): Observable<Publicacion> {
    return this.httpClient.put<Publicacion>(`${this.apiURL}/actualizar?id=${id}`, JSON.stringify(publicacion), this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      );
  }

  eliminarPublicacion(id: number): Observable<any> {
    return this.httpClient.delete<any>(`${this.apiURL}/eliminar?id=${id}`, this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      );
  }

  errorHandler(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}