import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TipoVinculacionService {
  private url : string;

  constructor(private http: HttpClient) {
    this.url= "http://10.195.34.24:8124/api/tipoVinculaciones"
  }

  obtenerTiposVinculacion(){
    return this.http.get<any>(this.url+"/listar");
  }
}
