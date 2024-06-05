import { Component } from '@angular/core';
import {SidebarService} from "../../servicios/sidebar/sidebar.service";
import {SidebarComponent} from "../sidebar/sidebar.component";
import {TopbarComponent} from "../topbar/topbar.component";
import {NgClass} from "@angular/common";
import {ActivatedRoute, Router} from "@angular/router";
import {Persona} from "../../dominio/persona";
import {PersonaService} from "../../servicios/persona/persona.service";
import {Proyecto} from "../../dominio/proyecto";
import {ProyectoService} from "../../servicios/proyecto/proyecto.service";
import {FormBuilder, ReactiveFormsModule} from "@angular/forms";
import {TipoVinculacionService} from "../../servicios/tipo-vinculacion/tipo-vinculacion.service";
import {SemestreService} from "../../servicios/semestre/semestre.service";
import {TipoVinculacion} from "../../dominio/tipo-vinculacion";
import {Semestre} from "../../dominio/semestre";
import {Vinculacion} from "../../dominio/vinculacion";
import {VinculacionService} from "../../servicios/vinculacion/vinculacion.service";

@Component({
  selector: 'app-vinculacion-estudiante',
  standalone: true,
  imports: [
    SidebarComponent,
    TopbarComponent,
    NgClass,
    ReactiveFormsModule
  ],
  templateUrl: './vinculacion-estudiante.component.html',
  styleUrl: './vinculacion-estudiante.component.css'
})
export class VinculacionEstudianteComponent {
  private cedula : number;
  protected persona? : Persona;
  protected proyectos : Proyecto[];
  protected tipos : TipoVinculacion[];
  protected semestres : Semestre[];
  protected visible : boolean;
  chequeoFormulario = this.constructorFormulario.group({
    proyecto : 0,
    codigo : 0,
    semestre : '',
    tipo : 0
  });

  constructor(private route : ActivatedRoute,
              private router : Router,
              private servicioSidebar : SidebarService,
              private servicioPersona : PersonaService,
              private servicioProyecto : ProyectoService,
              private servicioTipoVinculacion : TipoVinculacionService,
              private servicioSemestre : SemestreService,
              private servicioVinculacion : VinculacionService,
              private constructorFormulario : FormBuilder) {
    this.proyectos = [];
    this.semestres = [];
    this.tipos = [];
    this.servicioProyecto.obtenerProyectosActivos(true).subscribe(datos => {
      this.proyectos = datos;
    });
    this.servicioSemestre.obtenerSemestres().subscribe(
      datos => this.semestres = datos
    );
    this.servicioTipoVinculacion.obtenerTiposVinculacion().subscribe(
      datos => this.tipos = datos
    );
    this.cedula=parseInt(this.route.snapshot.paramMap.get("cedula")!);
    this.visible = servicioSidebar.obtenerVisible();
    this.servicioPersona.obtenerPersonaPorCedula(this.cedula).subscribe(dato => {
        this.persona = dato;
      }
    );
    this.servicioSidebar.sidebarVisible.subscribe(dato => {
      this.visible = dato;
    });
  }

  onSubmit() {
    let vinculacion : Vinculacion = {
        id : 0,
        codigo : this.chequeoFormulario.value.codigo!!,
        estudiante : this.cedula,
        proyecto : this.chequeoFormulario.value.proyecto!!,
        semestre : ''+this.chequeoFormulario.value.semestre,
        tipoVinculacion : this.chequeoFormulario.value.tipo!!,
        certificado : false
    }

    this.crearVinculacion(vinculacion);
  }

  crearVinculacion(vinculacion : Vinculacion){
    this.servicioVinculacion.crearVinculacion(vinculacion).subscribe(
      ()=>{
        this.router.navigate(["/vinculaciones"]);
      }
    );
  }
}
