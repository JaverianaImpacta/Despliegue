import {Component} from '@angular/core';
import { SidebarComponent } from "../sidebar/sidebar.component";
import { Router, RouterLink } from "@angular/router";
import { Entidad } from "../../dominio/entidad";
import { EntidadService } from "../../servicios/entidad/entidad.service";
import { SidebarService } from "../../servicios/sidebar/sidebar.service";
import {NgClass} from "@angular/common";
import {TopbarComponent} from "../topbar/topbar.component";
import {ActividadEconomicaService} from "../../servicios/actividad-economica/actividad-economica.service";
import {ActividadEconomica} from "../../dominio/actividad-economica";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-entidad',
  standalone: true,
  imports: [
    SidebarComponent,
    RouterLink,
    NgClass,
    TopbarComponent, FormsModule
  ],
  templateUrl: './entidad.component.html',
  styleUrl: './entidad.component.css'
})
export class EntidadComponent{
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

  protected entidades : Entidad[];
  protected actividades : ActividadEconomica[];
  protected admin : boolean = true;
  protected visible : boolean;

  constructor(private router: Router, private servicioEntidad: EntidadService, private servicioSidebar : SidebarService, private servicioActividadEconomica : ActividadEconomicaService) {
    this.entidades = [];
    this.actividades = [];
    this.obtenerEntidades();
    this.obtenerActividadesEconomicas();
    this.visible = servicioSidebar.obtenerVisible();
    this.servicioSidebar.sidebarVisible.subscribe(dato => {
      this.visible = dato;
    });
  }

  obtenerEntidades(){
    this.servicioEntidad.obtenerEntidadesPorAprobacion(true).subscribe(
      datos =>{
        this.entidades = datos;
      }
    )
  }

  obtenerActividad(codigo : string){
    let auxiliar = "No encontrado"
    this.actividades.forEach(actividad=>{
      if(actividad.codigo == codigo){
        auxiliar = actividad.descripcion;
      }
    });
    return auxiliar;
  }

  obtenerActividadesEconomicas(){
    this.servicioActividadEconomica.obtenerActividades().subscribe(
      datos =>{
        this.actividades = datos;
      }
    )
  }

  detalles(id : number){
      this.router.navigate(["/detallesEntidad", id]);
  }
}
