import { Component, OnInit } from '@angular/core';
import {SidebarComponent} from "../sidebar/sidebar.component";
import {NgClass} from "@angular/common";
import {SidebarService} from "../../servicios/sidebar/sidebar.service";
import {TopbarComponent} from "../topbar/topbar.component";
import { Calendario } from '../../dominio/actividades';
import { ActividadesService } from '../../servicios/actividades/actividades.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-actividad',
  standalone: true,
  imports: [
    SidebarComponent,
    NgClass,
    TopbarComponent, FormsModule
  ],
  templateUrl: './actividad.component.html',
  styleUrl: './actividad.component.css'
})
export class ActividadComponent implements OnInit {
  dates: string[] = ['2024-10', '2024-11', '2024-12']; // Fechas quemadas
  statuses: string[] = ['ACTIVO', 'INACTIVO']; // Estados quemados

  selectedDate: string = this.dates[0];
  selectedStatus: string = this.statuses[0];

  calendarios: Calendario[] = [];

  constructor(private actividadesService: ActividadesService, private router: Router) { }

  ngOnInit(): void {
    this.obtenerCalendarios();
  }

  obtenerCalendarios(): void {
    this.actividadesService.getCalendarios().subscribe((data: Calendario[]) => {
      this.calendarios = data;
    });
  }

  get filteredCalendarios(): Calendario[] {
    return this.calendarios.filter(actividad => 
      actividad.fecha.toISOString().startsWith(this.selectedDate) && actividad.descripcion.includes(this.selectedStatus)
    );
  }

  editarActividad(id: number): void {
    this.router.navigate(['editar-actividades/'+ id]);
  }

  confirmarEliminar(id: number): void {
    Swal.fire({
      title: '¿Estás seguro?',
      text: 'No podrás revertir esto',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, eliminarlo',
      cancelButtonText: 'No, cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.actividadesService.borrarCalendario(id).subscribe(() => {
          this.obtenerCalendarios();
          Swal.fire('¡Eliminado!', 'La actividad ha sido eliminada.', 'success');
        });
      }
    });
  }

  redirigirACrearActividad(): void {
    this.router.navigate(['/crear-actividades']);
  }
}