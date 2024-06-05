import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { PublicacionService } from '../../../servicios/publicacion/publicacion.service';
import { Publicacion } from '../../../dominio/publicacion';
import { SidebarComponent } from '../../sidebar/sidebar.component';
import { NgClass } from '@angular/common';
import { TopbarComponent } from '../../topbar/topbar.component';
import Swal from 'sweetalert2';
import { log } from 'console';

@Component({
  selector: 'app-crear-publicacion',
  standalone: true,
  imports: [ SidebarComponent,
    RouterLink,
    NgClass,
    TopbarComponent, FormsModule, ReactiveFormsModule],
  templateUrl: './crear-publicacion.component.html',
  styleUrl: './crear-publicacion.component.css'
})
export class CrearPublicacionComponent  implements OnInit {
  publicacion: Publicacion = {
    id: 0,
    imagen: '',
    titulo: '',
    subtitulo: '',
    descripcion: '',
    categoria: '',
    url: '',
    duracion: 0
  };

  constructor(
    private publicacionService: PublicacionService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  crearPublicacion() {
    Swal.fire({
      title: '¿Estás seguro?',
      text: '¿Quieres crear la publicación?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí',
      cancelButtonText: 'No'
    }).then((result) => {
      if (result.isConfirmed) {
        this.publicacionService.crearPublicacion(this.publicacion).subscribe(() => {
          Swal.fire({
            title: '¡Éxito!',
            text: 'La publicación ha sido creada.',
            icon: 'success',
            confirmButtonText: 'Aceptar'
          }).then(() => {
            this.router.navigate(['/publicaciones']);
          });
        });
      }
    });
  }

  volver() {
    this.router.navigate(['/publicaciones']);
  }
}