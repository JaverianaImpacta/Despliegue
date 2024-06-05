import { Component } from '@angular/core';
import {SidebarComponent} from "../sidebar/sidebar.component";
import {TopbarComponent} from "../topbar/topbar.component";
import {SidebarService} from "../../servicios/sidebar/sidebar.service";
import {EntidadService} from "../../servicios/entidad/entidad.service";
import {Entidad} from "../../dominio/entidad";
import {Router} from "@angular/router";
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-entidad-postulada',
  standalone: true,
  imports: [
    SidebarComponent,
    TopbarComponent,
    NgClass
  ],
  templateUrl: './entidad-postulada.component.html',
  styleUrl: './entidad-postulada.component.css'
})
export class EntidadPostuladaComponent {
  protected visible : boolean;
  protected entidades : Entidad[];

  constructor(private router : Router, private servicioSidebar : SidebarService, private servicioEntidad : EntidadService) {
    this.entidades = [];
    this.obtenerEntidades(false);
    this.visible = servicioSidebar.obtenerVisible();
    this.servicioSidebar.sidebarVisible.subscribe(dato => {
      this.visible = dato;
    });
  }

  obtenerEntidades(aprobacion : boolean){
    this.servicioEntidad.obtenerEntidadesPorAprobacion(aprobacion).subscribe(
      datos =>{
        this.entidades = datos;
      }
    );
  }


  aprobarEntidad(id: number, entidad: Entidad) {
    this.servicioEntidad.aprobarEntidad(id, entidad).subscribe(
      () =>{
        this.router.navigateByUrl("/entidades");
      }
    );
  }

  rechazarEntidad(id: number) {
    this.servicioEntidad.borrarEntidad(id).subscribe(
      ()=>{
        this.router.navigateByUrl("/entidades");
      }
    );
    this.router.navigateByUrl("/entidades");
  }
}
