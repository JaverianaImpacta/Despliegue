import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { PublicacionService } from '../../../servicios/publicacion/publicacion.service';
import { Publicacion } from '../../../dominio/publicacion';
import { TopbarComponent } from '../../topbar/topbar.component';
import { NgClass } from '@angular/common';
import { SidebarComponent } from '../../sidebar/sidebar.component';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editar-publicacion',
  standalone: true,
  imports: [SidebarComponent,
    RouterLink,
    NgClass,
    TopbarComponent, FormsModule],
  templateUrl: './editar-publicacion.component.html',
  styleUrl: './editar-publicacion.component.css'
})
export class EditarPublicacionComponent  implements OnInit {
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
  
  id: number = 0;

  constructor(
    private publicacionService: PublicacionService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.publicacionService.obtenerPublicacion(this.id).subscribe(data => {
      this.publicacion = data;
    });
  }

  guardarCambios() {
    Swal.fire({
      title: '¿Estás seguro?',
      text: '¿Quieres editar la publicación?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí',
      cancelButtonText: 'No'
    }).then((result) => {
      if (result.isConfirmed) {
        this.publicacionService.actualizarPublicacion(this.id, this.publicacion).subscribe(() => {
          Swal.fire({
            title: '¡Éxito!',
            text: 'La publicación ha sido actualizada.',
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