import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, FormBuilder, ReactiveFormsModule} from '@angular/forms';
import { LoginService } from '../../servicios/login/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  chequeoFormulario = this.constructorFormulario.group({
    correo : '',
    contrasena : ''
  });

  contrasena : Boolean;
  mensaje = '';

  constructor(private router : Router, private servicioLogin : LoginService, private constructorFormulario : FormBuilder){
    this.contrasena = false;
  }

  onSubmit() : void{
    let parametroEmail : string;
    let parametroContrasena : string;

    parametroEmail = ''+this.chequeoFormulario.value.correo;
    parametroContrasena = ''+this.chequeoFormulario.value.contrasena;

    console.log('Valor del formulario: ', this.chequeoFormulario.value);
    console.log('Correo electronico:', this.chequeoFormulario.value.correo);
    console.log('Contraseña: ', this.chequeoFormulario.value.contrasena);

    this.servicioLogin.login(parametroEmail, parametroContrasena).subscribe(
      datos => {
        if(datos == null){
          console.log('Correo o contraseña incorrecta');
          this.mensaje = 'Correo o contraseña incorrecta';
        }else{
          console.log(datos);
          this.servicioLogin.setToken(datos.token);
          this.router.navigateByUrl("/resumen");
        }
      });
    this.chequeoFormulario.reset();
  }

  siguiente():void{
    this.contrasena = true;
  }
}
