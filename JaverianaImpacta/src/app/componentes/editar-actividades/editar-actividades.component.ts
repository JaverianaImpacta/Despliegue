import { Component, OnInit } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { NgClass } from '@angular/common';
import { TopbarComponent } from '../topbar/topbar.component';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';
import { ActivatedRoute, Router } from '@angular/router';
import { ActividadesService } from '../../servicios/actividades/actividades.service';
import { Calendario } from '../../dominio/actividades';

@Component({
  selector: 'app-editar-actividades',
  standalone: true,
  imports: [SidebarComponent,
    NgClass,
    TopbarComponent, FormsModule],
  templateUrl: './editar-actividades.component.html',
  styleUrl: './editar-actividades.component.css'
})
export class EditarActividadesComponent implements OnInit {
  actividad: Calendario = {
    id: 0,
    titulo: '',
    descripcion: '',
    fecha: new Date(),
    inicio: '',
    fin: ''
  };

  actividades: Calendario[] = [];

  constructor(
    private route: ActivatedRoute,
    private actividadesService: ActividadesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = +params['id'];
      this.actividadesService.getCalendarios().subscribe((data: Calendario[]) => {
        this.actividades = data;
        this.actividad = this.actividades.find(act => act.id === id) || this.actividad;
      });
    });
  }

  actualizarActividad(): void {
    Swal.fire({
      title: '¿Estás seguro?',
      text: '¿Deseas modificar esta actividad?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, modificarlo',
      cancelButtonText: 'No, cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        const actividadActualizada = { ...this.actividad };
        this.actividadesService.actualizarCalendario(actividadActualizada.id, actividadActualizada).subscribe(() => {
          Swal.fire('¡Modificado!', 'La actividad ha sido modificada.', 'success');
          this.router.navigate(['/actividades']);
        });
      }
    });
  }

  devolver(): void {
    this.router.navigate(['/actividades']);
  }
}