import { Component, OnInit } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { NgClass } from '@angular/common';
import { TopbarComponent } from '../topbar/topbar.component';
import { FormsModule } from '@angular/forms';
import { Estudiante } from '../../dominio/estudiante';
import { Persona } from '../../dominio/persona';
import { EstudianteService } from '../../servicios/estudiante/estudiante.service';
import { PersonaService } from '../../servicios/persona/persona.service';
import { Vinculacion } from '../../dominio/vinculacion';
import { VinculacionService } from '../../servicios/vinculacion/vinculacion.service';

@Component({
  selector: 'app-detalle-estudiante',
  standalone: true,
  imports: [SidebarComponent,
    RouterLink,
    NgClass,
    TopbarComponent, FormsModule],
  templateUrl: './detalle-estudiante.component.html',
  styleUrl: './detalle-estudiante.component.css'
})
export class DetalleEstudianteComponent  implements OnInit {
  cedula: number = 0;
  vinculaciones: Vinculacion[] = [];
  persona: Persona = {
    id: 0,
    tipoDocumento: '',
    cedula: 0,
    primerNombre: '',
    segundoNombre: '',
    primerApellido: '',
    segundoApellido: '',
    correoElectronico: '',
    fechaNacimiento: '',
    sexo: '',
    eps: '',
    direccion: '',
    numeroCelular: 0
  };
  estudiante: Estudiante = {
    id: 0,
    idInstitucional: 0,
    cedula: 0,
    correoInstitucional: '',
    semestre: 0,
    sentidoMiPractica: false,
    arl: false
  };


  constructor(private personaService: PersonaService, private estudianteService: EstudianteService,  private vinculacionService: VinculacionService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.cedula = +params['cedula'];
      // Aquí asumimos que la cédula ya ha sido proporcionada y almacenada en this.cedula
      this.obtenerPersonaPorCedula();
      this.obtenerEstudiantePorCedula();
    });
  }

  obtenerPersonaPorCedula() {
    this.personaService.obtenerPersonaPorCedula(this.cedula).subscribe(
      (data: Persona) => {
        this.persona = data;
      },
      (error) => {
        console.error('Error al obtener la información de la persona:', error);
      }
    );
  }

  obtenerEstudiantePorCedula() {
    this.estudianteService.obtenerEstudiantePorCedula(this.cedula).subscribe(
      (data: Estudiante) => {
        this.estudiante = data;
      },
      (error) => {
        console.error('Error al obtener la información del estudiante:', error);
      }
    );
  }
  obtenerVinculacionesPorEstudiante() {
    this.vinculacionService.obtenerVinculaciones().subscribe(
      (data: Vinculacion[]) => {
        this.vinculaciones = data;
      },
      (error) => {
        console.error('Error al obtener las vinculaciones del estudiante:', error);
      }
    );
  }
  
}