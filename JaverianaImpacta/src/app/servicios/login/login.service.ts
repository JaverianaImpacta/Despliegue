import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class LoginService{

  private url : string;

  constructor(private http : HttpClient,
    private cookies : CookieService) {
    this.url = "http://10.195.34.24:8085/api/autenticacion";
  }

    estaLogueado(): Observable<boolean> {
      if(this.getToken()){
        return of(true);
      }else{
        return of(false);
      }
    }

  login(correo : string, contrasena : string){
    new HttpHeaders();
    const cuerpo = JSON.stringify({})
    const parametros = new HttpParams()
      .set('correo', correo)
      .set('contrasena', contrasena)

    return this.http.post<any>(this.url+"/login", cuerpo, {params : parametros});
  }

  setToken(token : string){
    this.cookies.set("token", token);
  }

  getToken(){
    return this.cookies.get("token");
  }
}
