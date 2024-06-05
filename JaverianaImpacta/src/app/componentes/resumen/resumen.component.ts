import {Component, Input} from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { SidebarComponent } from "../sidebar/sidebar.component";
import {SidebarService} from "../../servicios/sidebar/sidebar.service";
import {NgClass} from "@angular/common";
import {TopbarComponent} from "../topbar/topbar.component";

@Component({
  selector: 'app-resumen',
  standalone: true,
  imports: [NavbarComponent, SidebarComponent, NgClass, TopbarComponent],
  templateUrl: './resumen.component.html',
  styleUrl: './resumen.component.css'
})
export class ResumenComponent {
  @Input() nombre = '';

  protected visible: boolean;
  constructor(private servicioSidebar: SidebarService) {
    this.visible = servicioSidebar.obtenerVisible();
    this.servicioSidebar.sidebarVisible.subscribe(dato => {
      this.visible = dato;
    });
  }
}
