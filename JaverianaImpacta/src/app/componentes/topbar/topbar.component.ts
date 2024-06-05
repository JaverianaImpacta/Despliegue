import { Component } from '@angular/core';
import {DatePipe, NgOptimizedImage} from "@angular/common";
import {LoginService} from "../../servicios/login/login.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-topbar',
  standalone: true,
  imports: [
    NgOptimizedImage,
    DatePipe
  ],
  templateUrl: './topbar.component.html',
  styleUrl: './topbar.component.css'
})
export class TopbarComponent {

  today: number = Date.now();

  constructor(private router : Router, private servicioLogin : LoginService) {
  }
  mostrarNotificaciones(){

  }

  cerrarSesion(){
    this.servicioLogin.setToken("");
    this.router.navigate(["/"]);
    sessionStorage.clear();
  }
}
