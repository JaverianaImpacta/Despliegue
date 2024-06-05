import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Estudiante } from '../../dominio/estudiante';


@Injectable({
  providedIn: 'root'
})
export class EstudianteService {
  private url : string;
  constructor(private http: HttpClient) {
    this.url= "http://10.195.34.24:8081/api/estudiantes"
  }

  obtenerEstudiantes(){
    return this.http.get<any>(this.url+"/listar");
  }

  obtenerEstudiantesPorArl(arl : boolean){
    const parametros = new HttpParams().set("arl",arl);
    return this.http.get<any>(this.url+"/obtenerARL", {params: parametros});
  }

  obtenerEstudiantesPorSMP(sentidoMiPractica : boolean){
    const parametros = new HttpParams().set("sentidoMiPractica",sentidoMiPractica);
    return this.http.get<any>(this.url+"/obtenerSentidoMiPractica", {params: parametros});
  }
  obtenerEstudiantePorId(id: number): Observable<Estudiante> {
    return this.http.get<Estudiante>(`${this.url}/${id}`);
  }

  obtenerEstudiantePorCorreo(correo: string): Observable<Estudiante> {
    return this.http.get<Estudiante>(`${this.url}/correo/${correo}`);
  }

  obtenerEstudiantePorCedula(cedula: number): Observable<Estudiante> {
    return this.http.get<Estudiante>(`${this.url}/cedula/${cedula}`);
  }

  obtenerEstudiantePorIdInstitucional(idInstitucional: number): Observable<Estudiante> {
    return this.http.get<Estudiante>(`${this.url}/idInstitucional/${idInstitucional}`);
  }

  actualizarEstudiante(id: number, estudiante: Estudiante): Observable<Estudiante> {
    return this.http.put<Estudiante>(`${this.url}/${id}`, estudiante);
  }

  verificarExistenciaEstudiante(id: number): Observable<boolean> {
    return this.http.get<boolean>(`${this.url}/exists/${id}`);
  }

  verificarExistenciaEstudiantePorCorreo(correo: string): Observable<boolean> {
    return this.http.get<boolean>(`${this.url}/exists/correo/${correo}`);
  }

  verificarExistenciaEstudiantePorCedula(cedula: number): Observable<boolean> {
    return this.http.get<boolean>(`${this.url}/exists/cedula/${cedula}`);
  }

  verificarExistenciaEstudiantePorIdInstitucional(idInstitucional: number): Observable<boolean> {
    return this.http.get<boolean>(`${this.url}/exists/idInstitucional/${idInstitucional}`);
  }
}
