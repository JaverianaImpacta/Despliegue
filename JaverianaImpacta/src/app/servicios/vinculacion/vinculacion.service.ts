import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Vinculacion} from "../../dominio/vinculacion";

@Injectable({
  providedIn: 'root'
})
export class VinculacionService {
  private url : string;
  constructor(private http: HttpClient) {
    this.url= "http://10.195.34.24:8084/api/vinculaciones"
  }
  crearVinculacion(vinculacion : Vinculacion){
    const cuerpo = JSON.stringify({
      id : 99999,
      codigo : vinculacion.codigo,
      estudiante : vinculacion.estudiante,
      proyecto : vinculacion.proyecto,
      semestre : vinculacion.semestre,
      tipoVinculacion : vinculacion.tipoVinculacion,
      certificado : vinculacion.certificado
    });

    const encabezados = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.post<any>(this.url+"/crear", cuerpo, {headers : encabezados});
  }
  obtenerVinculaciones(){
    return this.http.get<any>(this.url+"/listar");
  }
}
