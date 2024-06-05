import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Entidad} from "../../dominio/entidad";

@Injectable({
  providedIn: 'root'
})
export class EntidadService {

  private url : string;

  constructor(private http : HttpClient) {
    this.url ="http://10.195.34.24:8086/api/entidades";
  }

  obtenerEntidades(){
    return this.http.get<any>(this.url+"/listar");
  }

  obtenerEntidadesPorAprobacion(aprobacion : boolean){
    const parametros = new HttpParams().set("aprobacion", aprobacion);
    return this.http.get<any>(this.url+"/obtenerAprobacion", {params: parametros});
  }

  obtenerEntidadPorId(id: number) {
    const parametros = new HttpParams().set("id",id);
    return this.http.get<any>(this.url+"/obtener", {params :parametros});
  }

  aprobarEntidad(id : number, entidad : Entidad){

    const cuerpo = JSON.stringify({
      id : id,
      documento : entidad.documento,
      nit : entidad.nit,
      razonSocial : entidad.razonSocial,
      convenio : entidad.convenio,
      cedulaRepresentante : entidad.cedulaRepresentante,
      actividadEconomica : entidad.actividadEconomica,
      telefono  : entidad.telefono,
      correo : entidad.correo,
      aprobacion : true
    });

    const encabezados = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    const parametros = new HttpParams().set("id",id);
    return this.http.put<any>(this.url+"/actualizar", cuerpo, {headers : encabezados,params : parametros});
  }

  crearEntidad(entidad : Entidad){
    const cuerpo = JSON.stringify({
      id : 99999999,
      documento : entidad.documento,
      nit : entidad.nit,
      razonSocial : entidad.razonSocial,
      convenio : entidad.convenio,
      cedulaRepresentante : entidad.cedulaRepresentante,
      actividadEconomica : entidad.actividadEconomica,
      telefono  : entidad.telefono,
      correo : entidad.correo,
      aprobacion : false
    });

    const encabezados = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.post<any>(this.url+"/crear", cuerpo, {headers : encabezados});
  }

  borrarEntidad(id : number){
    const parametros = new HttpParams().set("id",id);
    return this.http.delete<any>(this.url+"/eliminar", {params :parametros});
  }
}
