import { CanActivateFn } from '@angular/router';
import { LoginService } from '../servicios/login/login.service';
import { inject } from '@angular/core';

export const autorizacionGuard: CanActivateFn = (route, state) => {
  let logueado : boolean = false;
  const servicioLogin = inject(LoginService)
  servicioLogin.estaLogueado().subscribe((estado) => {
    logueado = estado;
  });
  console.log(logueado);
  return logueado;
};
