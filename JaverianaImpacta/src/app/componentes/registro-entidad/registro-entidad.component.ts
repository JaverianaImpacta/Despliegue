import { Component } from '@angular/core';
import {FormBuilder, ReactiveFormsModule} from "@angular/forms";
import {PersonaService} from "../../servicios/persona/persona.service";
import {EntidadService} from "../../servicios/entidad/entidad.service";
import {Router} from "@angular/router";
import {Persona} from "../../dominio/persona";
import {Entidad} from "../../dominio/entidad";

@Component({
  selector: 'app-registro-entidad',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './registro-entidad.component.html',
  styleUrl: './registro-entidad.component.css'
})
export class RegistroEntidadComponent {
  protected registrandoPersona : boolean = false;

  chequeoFormulario = this.constructorFormulario.group({
    nit : 0,
    razonSocial : '',
    actividadEconomica : '',
    correo : '',
    telefono : 0,
    tipoDocumento : 'CC',
    cedula : 0,
    primerNombre : '',
    segundoNombre : '',
    primerApellido : '',
    segundoApellido : '',
    correoElectronico : '',
    sexo : '',
    fechaNacimiento : '',
    eps : '',
    direccion : '',
    numeroCelular : 0
  });

  constructor(private router : Router,private servicioPersona: PersonaService, private servicioEntidad : EntidadService,private constructorFormulario : FormBuilder) {
  }

  siguiente(){
    this.registrandoPersona = !this.registrandoPersona;
  }

  onSubmit() {
    let persona: Persona = {
      id: 0,
      tipoDocumento: '' + this.chequeoFormulario.value.tipoDocumento,
      cedula: this.chequeoFormulario.value.cedula!!,
      primerNombre: '' + this.chequeoFormulario.value.primerNombre,
      segundoNombre: '' + this.chequeoFormulario.value.segundoNombre,
      primerApellido: '' + this.chequeoFormulario.value.primerApellido,
      segundoApellido: '' + this.chequeoFormulario.value.segundoApellido,
      correoElectronico: '' + this.chequeoFormulario.value.correoElectronico,
      fechaNacimiento: '' + this.chequeoFormulario.value.fechaNacimiento,
      sexo: '' + this.chequeoFormulario.value.sexo,
      eps: '' + this.chequeoFormulario.value.eps,
      direccion: '' + this.chequeoFormulario.value.direccion,
      numeroCelular: this.chequeoFormulario.value.numeroCelular!!
    };

    let entidad: Entidad = {
      id: 0,
      documento: 'NI',
      nit: this.chequeoFormulario.value.nit!!,
      razonSocial: '' + this.chequeoFormulario.value.razonSocial,
      actividadEconomica: '' + this.chequeoFormulario.value.actividadEconomica,
      convenio : 0,
      correo: '' + this.chequeoFormulario.value.correo,
      telefono: this.chequeoFormulario.value.telefono!!,
      cedulaRepresentante: this.chequeoFormulario.value.cedula!!,
      aprobacion : false
    };

    this.servicioPersona.crearPersona(persona).subscribe(
      respuesta=> {
        console.log(respuesta);
        this.servicioEntidad.crearEntidad(entidad).subscribe(
          dato=>{
            console.log(dato);
            this.router.navigate(["/"]);
          }
        );
      });
    this.chequeoFormulario.reset();
  }
}
