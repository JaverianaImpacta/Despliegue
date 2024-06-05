import { Component } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { Router, RouterLink } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { TopbarComponent } from '../topbar/topbar.component';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';
import { ActividadesService } from '../../servicios/actividades/actividades.service';
import { Calendario } from '../../dominio/actividades';

@Component({
  selector: 'app-crear-actividades',
  standalone: true,
  imports: [ SidebarComponent,
    RouterLink,
    NgClass,
    TopbarComponent, FormsModule, CommonModule],
  templateUrl: './crear-actividades.component.html',
  styleUrl: './crear-actividades.component.css'
})
export class CrearActividadesComponent {
  actividad: Calendario = {
    id: 0,
    titulo: '',
    descripcion: '',
    fecha: new Date(),
    inicio: '',
    fin: ''
  };

  constructor(
    private actividadesService: ActividadesService,
    private router: Router
  ) {}

  crearActividad(): void {
    Swal.fire({
      title: '¿Estás seguro?',
      text: '¿Deseas crear esta actividad?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, crearlo',
      cancelButtonText: 'No, cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.actividadesService.crearCalendario(this.actividad).subscribe(() => {
          Swal.fire('¡Creada!', 'La actividad ha sido creada.', 'success');
          this.router.navigate(['/actividades']);
        });
      }
    });
  }

  cancelar(): void {
    this.router.navigate(['/actividades']);
  }
}