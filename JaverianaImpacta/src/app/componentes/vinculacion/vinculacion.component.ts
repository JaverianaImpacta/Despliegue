import { Component } from '@angular/core';
import {SidebarComponent} from "../sidebar/sidebar.component";
import {TopbarComponent} from "../topbar/topbar.component";
import {Vinculacion} from "../../dominio/vinculacion";
import {VinculacionService} from "../../servicios/vinculacion/vinculacion.service";
import {NgClass} from "@angular/common";
import {SidebarService} from "../../servicios/sidebar/sidebar.service";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-vinculacion',
  standalone: true,
  imports: [
    SidebarComponent,
    TopbarComponent,
    NgClass,FormsModule
  ],
  templateUrl: './vinculacion.component.html',
  styleUrl: './vinculacion.component.css'
})
export class VinculacionComponent {

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
  protected vinculaciones : Vinculacion[];
  protected visible : boolean;

  constructor(private servicioSidebar : SidebarService,private servicioVinculaciones :VinculacionService) {
      this.vinculaciones = [];
      this.obtenerVinculaciones();
      this.visible = servicioSidebar.obtenerVisible();
      this.servicioSidebar.sidebarVisible.subscribe(dato => {
        this.visible = dato;
      });
  }

  obtenerVinculaciones ()  {
    this.servicioVinculaciones.obtenerVinculaciones().subscribe(
      datos => this.vinculaciones = datos
    );
  }

  traduccion(parametro : boolean):string{
    if(parametro){
      return "Si";
    }else{
      return "No";
    }
  }
}
