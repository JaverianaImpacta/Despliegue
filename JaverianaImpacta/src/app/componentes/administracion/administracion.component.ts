import { Component } from '@angular/core';
import {SidebarComponent} from "../sidebar/sidebar.component";
import {TopbarComponent} from "../topbar/topbar.component";
import {SidebarService} from "../../servicios/sidebar/sidebar.service";
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-administracion',
  standalone: true,
  imports: [
    SidebarComponent,
    TopbarComponent,
    NgClass
  ],
  templateUrl: './administracion.component.html',
  styleUrl: './administracion.component.css'
})
export class AdministracionComponent {
  protected visible : boolean;

  constructor(private servicioSidebar : SidebarService) {
    this.visible = servicioSidebar.obtenerVisible();
    this.servicioSidebar.sidebarVisible.subscribe(dato => {
      this.visible = dato;
    });
  }
}
