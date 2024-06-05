import {Component} from '@angular/core';
import {LogoUniversidadComponent} from "../imagenes/logo-universidad/logo-universidad.component";
import {RouterLink} from "@angular/router";
import {NgClass, NgOptimizedImage} from "@angular/common";
import {SidebarService} from "../../servicios/sidebar/sidebar.service";

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    LogoUniversidadComponent,
    RouterLink,
    NgClass,
    NgOptimizedImage
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent{
  protected visible: boolean;
  constructor(private servicioSidebar : SidebarService) {
      this.visible = servicioSidebar.obtenerVisible();
      this.servicioSidebar.sidebarVisible.subscribe(dato => {
        this.visible = dato;
      });
  }
  estadoSidebar() {
    this.servicioSidebar.estadoSidebar();
  }
}
