import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Persona} from "../../dominio/persona";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  private url : string;
  constructor(private http: HttpClient) {
    this.url= "http://10.195.34.24:8088/api/personas"
  }

  obtenerPersonas(){
    return this.http.get<any>(this.url+"/listar");
  }

  crearPersona(persona : Persona){
    const cuerpo = JSON.stringify({
      id : 99999999,
      tipoDocumento : persona.tipoDocumento,
      cedula : persona.cedula,
      primerNombre : persona.primerNombre,
      segundoNombre : persona.segundoNombre,
      primerApellido : persona.primerApellido,
      segundoApellido : persona.segundoApellido,
      correoElectronico : persona.correoElectronico,
      fechaNacimiento : persona.fechaNacimiento,
      sexo : persona.sexo,
      eps : persona.eps,
      direccion : persona.direccion,
      numeroCelular : persona.numeroCelular
    });

    const encabezados = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.post<any>(this.url+"/crear", cuerpo, {headers : encabezados});
  }

  obtenerPersonaPorCedula(cedula: number) {
    const parametros = new HttpParams().set("cedula",cedula);
    return this.http.get<any>(this.url+"/obtenerCedula", {params :parametros});
  }
  obtenerPersonasPorTipoDocumento(tipoDocumento: string): Observable<Persona[]> {
    return this.http.get<Persona[]>(`${this.url}?tipoDocumento=${tipoDocumento}`);
  }

  obtenerPersonasPorEps(eps: string): Observable<Persona[]> {
    return this.http.get<Persona[]>(`${this.url}?eps=${eps}`);
  }

  obtenerPersonaPorId(id: number): Observable<Persona> {
    return this.http.get<Persona>(`${this.url}/${id}`);
    
  }
  obtenerPersonaPorCorreo(correo: string): Observable<Persona> {
    return this.http.get<Persona>(`${this.url}/correo/${correo}`);
  }


  actualizarPersona(id: number, persona: Persona): Observable<Persona> {
    return this.http.put<Persona>(`${this.url}/${id}`, persona);
  }

  borrarPersona(id: number): Observable<Persona> {
    return this.http.delete<Persona>(`${this.url}/${id}`);
  }

  verificarExistenciaPersona(id: number): Observable<boolean> {
    return this.http.get<boolean>(`${this.url}/exists/${id}`);
  }

  verificarExistenciaPersonaPorCorreo(correo: string): Observable<boolean> {
    return this.http.get<boolean>(`${this.url}/exists/correo/${correo}`);
  }

  verificarExistenciaPersonaPorCedula(cedula: number): Observable<boolean> {
    return this.http.get<boolean>(`${this.url}/exists/cedula/${cedula}`);
  }
}
