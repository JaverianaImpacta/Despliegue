import { Component } from '@angular/core';
import { SidebarComponent } from "../sidebar/sidebar.component";
import { SidebarService } from "../../servicios/sidebar/sidebar.service";
import { NgClass } from "@angular/common";
import {Profesor} from "../../dominio/profesor";
import {Persona} from "../../dominio/persona";
import {ProfesorService} from "../../servicios/profesor/profesor.service";
import {PersonaService} from "../../servicios/persona/persona.service";
import {TopbarComponent} from "../topbar/topbar.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-profesor',
  standalone: true,
  imports: [
    SidebarComponent,
    NgClass,
    TopbarComponent, FormsModule
  ],
  templateUrl: './profesor.component.html',
  styleUrl: './profesor.component.css'
})
export class ProfesorComponent{

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
  protected profesores : Profesor[];
  protected personas : Persona[];
  protected visible: boolean;

  constructor(private servicioSidebar: SidebarService, private servicioProfesor : ProfesorService, private servicioPersona : PersonaService) {
    this.profesores = [];
    this.personas = [];
    this.visible = servicioSidebar.obtenerVisible();
    this.servicioSidebar.sidebarVisible.subscribe(dato => {
      this.visible = dato;
    });
    this.obtenerProfesores();
    this.obtenerPersonas();
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

  protected obtenerApellidos(cedula : number): string{
    let auxiliar = "No encontrado";
    this.personas.forEach(persona => {
      if(persona.cedula == cedula){
        auxiliar = persona.primerApellido+" "+persona.segundoApellido;
      }
    });
    return auxiliar;
  }

  protected obtenerTelefono(cedula : number): number{
    let auxiliar = 0;
    this.personas.forEach(persona => {
      if(persona.cedula == cedula){
        auxiliar = persona.numeroCelular;
      }
    });
    return auxiliar;
  }

  private obtenerPersonas(){
    this.servicioPersona.obtenerPersonas().subscribe(
      datos=>{
        this.personas = datos;
      }
    );
  }
  private obtenerProfesores(){
    this.servicioProfesor.obtenerProfesores().subscribe(
      datos=>{
        this.profesores = datos;
      }
    );
  }

}
