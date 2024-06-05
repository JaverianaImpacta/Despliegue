import { Component } from '@angular/core';
import {SidebarComponent} from "../sidebar/sidebar.component";
import {NgClass} from "@angular/common";
import {SidebarService} from "../../servicios/sidebar/sidebar.service";
import {TopbarComponent} from "../topbar/topbar.component";
import * as XLSX from 'xlsx';
import {Proyecto} from "../../dominio/proyecto";
import {ProyectoService} from "../../servicios/proyecto/proyecto.service";
import {Estudiante} from "../../dominio/estudiante";
import {EstudianteService} from "../../servicios/estudiante/estudiante.service";

@Component({
  selector: 'app-informe',
  standalone: true,
  imports: [
    SidebarComponent,
    NgClass,
    TopbarComponent
  ],
  templateUrl: './informe.component.html',
  styleUrl: './informe.component.css'
})
export class InformeComponent {
  protected visible : boolean;
  protected proyectos : Proyecto[];
  protected arl : Estudiante[];
  protected practica : Estudiante[];

  constructor(private servicioEstudiantes: EstudianteService, private servicioProyecto : ProyectoService, private servicioSidebar : SidebarService) {
    this.proyectos = [];
    this.arl = [];
    this.practica = [];
    this.obtenerProyectos();
    this.obtenerEstudiantesSinArl();
    this.obtenerEstudiantesSinSMP();
    this.visible = servicioSidebar.obtenerVisible();
    this.servicioSidebar.sidebarVisible.subscribe(dato => {
      this.visible = dato;
    });
  }

  obtenerProyectos(){
    this.servicioProyecto.obtenerProyectos().subscribe(
      datos => this.proyectos = datos
    );
  }

  obtenerEstudiantesSinArl(){
    this.servicioEstudiantes.obtenerEstudiantesPorArl(false).subscribe(
      datos => this.arl = datos
    );
  }

  obtenerEstudiantesSinSMP(){
    this.servicioEstudiantes.obtenerEstudiantesPorSMP(false).subscribe(
      datos => this.practica = datos
    );
  }

  descargarArl(){
    const nombreArchivo = 'estudiantesSinArl.xlsx';

    const datos = this.arl.map(estudiante => ({
      cedula : estudiante.cedula,
      idInstitucional : estudiante.idInstitucional,
      correoInstitucional : estudiante.correoInstitucional,
      semestre : estudiante.semestre
    }));

    const workbook = XLSX.utils.book_new();
    const worksheet = XLSX.utils.json_to_sheet(datos);
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Estudiantes');

    XLSX.writeFile(workbook, nombreArchivo);
  }

  descargarPractica(){
    const nombreArchivo = 'estudiantesSinSentidoMiPractica.xlsx';

    const datos = this.practica.map(estudiante => ({
      cedula : estudiante.cedula,
      idInstitucional : estudiante.idInstitucional,
      correoInstitucional : estudiante.correoInstitucional,
      semestre : estudiante.semestre
    }));

    const workbook = XLSX.utils.book_new();
    const worksheet = XLSX.utils.json_to_sheet(datos);
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Estudiantes');

    XLSX.writeFile(workbook, nombreArchivo);
  }

  descargarProyectos() {
    const nombreArchivo = 'proyectos.xlsx';

    const datos = this.proyectos.map(proyecto => ({
      codigo: proyecto.codigo,
      nombreProyecto: proyecto.nombre,
      descripcion: proyecto.descripcion,
      poblacionObjetivo: proyecto.objetivo,
      tematica: proyecto.tematica,
      cedulaResponsable:proyecto.lider
    }));

    const workbook = XLSX.utils.book_new();
    const worksheet = XLSX.utils.json_to_sheet(datos);
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Proyectos');

    XLSX.writeFile(workbook, nombreArchivo);
  }

}
