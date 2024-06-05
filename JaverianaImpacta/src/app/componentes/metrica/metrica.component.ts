import { Component } from '@angular/core';
import {SidebarComponent} from "../sidebar/sidebar.component";
import {NgClass} from "@angular/common";
import {SidebarService} from "../../servicios/sidebar/sidebar.service";
import {TopbarComponent} from "../topbar/topbar.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-metrica',
  standalone: true,
  imports: [
    SidebarComponent,
    NgClass,
    TopbarComponent
  ],
  templateUrl: './metrica.component.html',
  styleUrl: './metrica.component.css'
})
export class MetricaComponent {
  protected visible : boolean;

  constructor(private servicioSidebar : SidebarService, private router: Router) {
    this.visible = servicioSidebar.obtenerVisible();
    this.servicioSidebar.sidebarVisible.subscribe(dato => {
      this.visible = dato;
    });
  }


  verDashboard(): void {
    // Reemplaza 'url-a-powerbi' con la URL real del dashboard de Power BI
    window.open('https://app.powerbi.com/links/0pJb9JstUp?ctid=daf7990e-8a3f-409c-9b76-2a5475098000&pbi_source=linkShare', '_blank');
  }
}
