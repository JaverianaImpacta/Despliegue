import { Component } from '@angular/core';
import {SidebarComponent} from "../sidebar/sidebar.component";
import {NgClass} from "@angular/common";
import {SidebarService} from "../../servicios/sidebar/sidebar.service";
import {ProyectoService} from "../../servicios/proyecto/proyecto.service";
import {Proyecto} from "../../dominio/proyecto";
import {EntidadService} from "../../servicios/entidad/entidad.service";
import {PersonaService} from "../../servicios/persona/persona.service";
import {Entidad} from "../../dominio/entidad";
import {Persona} from "../../dominio/persona";
import {TopbarComponent} from "../topbar/topbar.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-proyecto',
  standalone: true,
  imports: [
    SidebarComponent,
    NgClass,
    TopbarComponent,FormsModule
  ],
  templateUrl: './proyecto.component.html',
  styleUrl: './proyecto.component.css'
})
export class ProyectoComponent {

  dates: string[] = ['2024-10', '2024-11', '2024-12']; // Fechas quemadas
  statuses: string[] = ['ACTIVO', 'INACTIVO']; // Estados quemados

  selectedDate: string = this.dates[0];
  selectedStatus: string = this.statuses[0];

  items: {date: string, status: string, data: string}[] = [
    {date: '2024-10', status: 'ACTIVO', data: 'Item 1'},
    {date: '2024-11', status: 'INACTIVO', data: 'Item 2'},
    {date: '2024-12', status: 'ACTIVO', data: 'Item 3'},
    // Agrega más elementos según sea necesario
  ];

  get filteredItems() {
    return this.items.filter(item => 
      item.date === this.selectedDate && item.status === this.selectedStatus
    ).map(item => item.data);
  }
  protected proyectos : Proyecto[];
  protected entidades : Entidad[];
  protected personas : Persona[];
  protected visible : boolean;

  constructor(private servicioSidebar : SidebarService, private servicioProyecto : ProyectoService, private servicioEntidad : EntidadService, private servicioPersona : PersonaService) {
    this.proyectos = [];
    this.entidades = [];
    this.personas = [];
    this.visible = servicioSidebar.obtenerVisible();
    this.servicioSidebar.sidebarVisible.subscribe(dato => {
      this.visible = dato;
    });
    this.obtenerProyectos();
    this.obtenerEntidades();
    this.obtenerPersonas();
  }
  private obtenerProyectos(){
    this.servicioProyecto.obtenerProyectos().subscribe(
      datos => this.proyectos = datos
    );
  }

  private obtenerEntidades() {
    this.servicioEntidad.obtenerEntidades().subscribe(
      datos => this.entidades = datos
    );
  }

  private obtenerPersonas() {
    this.servicioPersona.obtenerPersonas().subscribe(
      datos => this.personas = datos
    );
  }
  protected obtenerEntidad(nit : number) : string{
      let auxiliar = "No encontrado";
      this.entidades.forEach(entidad => {
        if(entidad.nit == nit){
          auxiliar = entidad.razonSocial;
        }
      });
      return auxiliar;
  }

  protected obtenerLider(cedula: number) {
    let auxiliar = "No encontrado";
    this.personas.forEach(persona => {
      if(persona.cedula == cedula){
        auxiliar = persona.primerNombre+" "+persona.primerApellido;
      }
    });
    return auxiliar;
  }

  traduccion(parametro : boolean): string{
    if(parametro){
      return "Si"
    }else{
      return "No"
    }
  }
}
