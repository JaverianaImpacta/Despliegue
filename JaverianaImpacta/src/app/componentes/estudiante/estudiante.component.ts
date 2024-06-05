import { Component } from '@angular/core';
import {SidebarComponent} from "../sidebar/sidebar.component";
import {SidebarService} from "../../servicios/sidebar/sidebar.service";
import {NgClass} from "@angular/common";
import {Estudiante} from "../../dominio/estudiante";
import {EstudianteService} from "../../servicios/estudiante/estudiante.service";
import { Persona } from "../../dominio/persona";
import {PersonaService} from "../../servicios/persona/persona.service";
import {TopbarComponent} from "../topbar/topbar.component";
import {Router} from "@angular/router";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-estudiante',
  standalone: true,
  imports: [
    SidebarComponent,
    NgClass,
    TopbarComponent, FormsModule
  ],
  templateUrl: './estudiante.component.html',
  styleUrl: './estudiante.component.css'
})
export class EstudianteComponent {

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

  protected estudiantes: Estudiante[];
  protected personas : Persona[];
  protected profesor : boolean;
  protected admin : boolean;
  protected visible : boolean;

  constructor(private router : Router,private servicioPersona : PersonaService, private servicioEstudiante : EstudianteService, private servicioSidebar : SidebarService) {
    this.admin = true;
    this.profesor = true;
    this.estudiantes = [];
    this.personas = [];
    this.visible = servicioSidebar.obtenerVisible();
    this.servicioSidebar.sidebarVisible.subscribe(dato => {
      this.visible = dato;
    });
    this.obtenerEstudiantes();
    this.obtenerPersonas();
  }

  vincular(cedula : number){
    this.router.navigate(["/vincularEstudiante", cedula]);
  }

  protected obtenerApellidos(cedula : number): string{
    let auxiliar = "No encontrado";
    this.personas.forEach(persona => {
      if(persona.cedula == cedula){
        auxiliar = persona.primerApellido+" "+persona.segundoApellido;
      }
    });
    return auxiliar;
  }

  protected obtenerNombres(cedula : number): string{
    let auxiliar = "No encontrado";
    this.personas.forEach(persona => {
      if(persona.cedula == cedula){
          auxiliar = persona.primerNombre+" "+persona.segundoNombre;
      }
    });
    return auxiliar;
  }

  private obtenerEstudiantes(){
    this.servicioEstudiante.obtenerEstudiantes().subscribe(
      datos =>{
        this.estudiantes = datos;
      }
    )
  }

  private obtenerPersonas(){
    this.servicioPersona.obtenerPersonas().subscribe(
      dato => {
        this.personas = dato;
      }
    )
  }

  protected traduccion(parametro: boolean) {
    if(parametro){
      return "Si";
    }else{
      return "No";
    }
  }

   detalleEstudiante(cedula: number) {
    this.router.navigate(['/detalle-estudiante', cedula]); // Navegar a la página de detalle-estudiante con la cédula como parámetro
  }
}
