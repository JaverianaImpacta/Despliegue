import { Component, OnInit } from '@angular/core';
import {SidebarComponent} from "../sidebar/sidebar.component";
import {NgClass} from "@angular/common";
import {SidebarService} from "../../servicios/sidebar/sidebar.service";
import {TopbarComponent} from "../topbar/topbar.component";
import { PublicacionService } from '../../servicios/publicacion/publicacion.service';
import { Router } from '@angular/router';
import { Publicacion } from '../../dominio/publicacion';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-publicacion',
  standalone: true,
    imports: [
        SidebarComponent,
        NgClass,
        TopbarComponent, FormsModule
    ],
  templateUrl: './publicacion.component.html',
  styleUrl: './publicacion.component.css'
})
export class PublicacionComponent implements OnInit{

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
  publicaciones: Publicacion[] = [];

  constructor(private publicacionService: PublicacionService,    private router: Router,) { }

  ngOnInit(): void {
    this.obtenerPublicaciones();
  }

  obtenerPublicaciones() {
    this.publicacionService.obtenerPublicaciones()
      .subscribe(
        (data: Publicacion[]) => {
          this.publicaciones = data;
        },
        error => {
          console.error('Error al obtener las publicaciones: ', error);
        }
      );
  }
  editarPublicacion(id: number) {
    this.router.navigate(['/editar-publicaciones', id]);
  }
  confirmarEliminar(id: number) {
    Swal.fire({
      title: '¿Estás seguro?',
      text: 'Esta acción no se puede deshacer.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.eliminarPublicacion(id);
      }
    });
  }

  eliminarPublicacion(id: number) {
    this.publicacionService.eliminarPublicacion(id)
      .subscribe(
        () => {
          Swal.fire(
            '¡Eliminado!',
            'La publicación ha sido eliminada.',
            'success'
          );
          this.obtenerPublicaciones(); // Actualizar la lista después de la eliminación
        },
        error => {
          console.error('Error al eliminar la publicación: ', error);
          Swal.fire(
            'Error',
            'Hubo un problema al intentar eliminar la publicación.',
            'error'
          );
        }
      );
  }
  irACrearPublicacion() {
    this.router.navigate(['/crear-publicaciones']);
  }
}