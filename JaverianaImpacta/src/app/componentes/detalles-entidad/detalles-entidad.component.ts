import { Component } from '@angular/core';
import {SidebarComponent} from "../sidebar/sidebar.component";
import {EntidadService} from "../../servicios/entidad/entidad.service";
import {ActivatedRoute} from "@angular/router";
import {Entidad} from "../../dominio/entidad";

@Component({
  selector: 'app-detalles-entidad',
  standalone: true,
  imports: [
    SidebarComponent
  ],
  templateUrl: './detalles-entidad.component.html',
  styleUrl: './detalles-entidad.component.css'
})
export class DetallesEntidadComponent{
  private id: number;
  protected entidad? : Entidad;


  constructor(private route : ActivatedRoute, private servicioEntidad: EntidadService) {
    this.id=parseInt(this.route.snapshot.paramMap.get("id")!);
    this.servicioEntidad.obtenerEntidadPorId(this.id).subscribe(
      dato =>{
        this.entidad = dato;
      }
    );
  }
}
