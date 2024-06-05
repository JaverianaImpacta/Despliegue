import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import { Observable } from 'rxjs';
import { Proyecto } from '../../dominio/proyecto';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {
  private url : string;
  constructor(private http: HttpClient) {
    this.url= "http://10.195.34.24:8082/api/proyectos"
  }

  obtenerProyectos(){
    return this.http.get<any>(this.url+"/listar");
  }

  obtenerProyectosActivos(activo : boolean){
    const parametros = new HttpParams().set("activo",activo);
    return this.http.get<any>(this.url+"/obtenerActivo", {params : parametros});
  }

  obtenerProyectosPorObjetivo(objetivo: string): Observable<Proyecto[]> {
    const params = new HttpParams().set('objetivo', objetivo);
    return this.http.get<Proyecto[]>(this.url + "/obtenerPorObjetivo", { params });
  }

  obtenerProyectosPorUbicacion(ubicacion: number): Observable<Proyecto[]> {
    const params = new HttpParams().set('ubicacion', ubicacion.toString());
    return this.http.get<Proyecto[]>(this.url + "/obtenerPorUbicacion", { params });
  }

  obtenerProyectoPorId(id: number): Observable<Proyecto> {
    return this.http.get<Proyecto>(`${this.url}/${id}`);
  }

  crearProyecto(proyecto: Proyecto): Observable<Proyecto> {
    return this.http.post<Proyecto>(this.url + "/crear", proyecto);
  }

  actualizarProyecto(id: number, proyecto: Proyecto): Observable<Proyecto> {
    return this.http.put<Proyecto>(`${this.url}/${id}`, proyecto);
  }

  borrarProyecto(id: number): Observable<Proyecto> {
    return this.http.delete<Proyecto>(`${this.url}/${id}`);
  }

  verificarExistenciaProyecto(id: number): Observable<boolean> {
    return this.http.get<boolean>(`${this.url}/exists/${id}`);
  }

  verificarExistenciaProyectoPorCodigo(codigo: number): Observable<boolean> {
    return this.http.get<boolean>(`${this.url}/exists/codigo/${codigo}`);
  }
  obtenerProyectosPorEntidad(entidad: number): Observable<Proyecto[]> {
    const params = new HttpParams().set('entidad', entidad.toString());
    return this.http.get<Proyecto[]>(this.url + "/obtenerPorEntidad", { params });
  }
}
