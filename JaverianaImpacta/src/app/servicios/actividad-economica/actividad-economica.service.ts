import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ActividadEconomicaService {

  private url : string;

  constructor(private http : HttpClient) {
    this.url ="http://10.195.34.24:8092/api/actividadesEconomicas";
  }

  obtenerActividades(){
    return this.http.get<any>(this.url+"/listar");
  }

  obtenerActividadPorCodigo(codigo: string) {
    const parametros = new HttpParams().set("codigo",codigo);
    return this.http.get<any>(this.url+"/obtener", {params :parametros});
  }
}
