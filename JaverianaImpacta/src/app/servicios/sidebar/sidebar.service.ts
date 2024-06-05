import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  protected visibilidadActual : boolean;
  private sidebarVisibleSubject = new BehaviorSubject<boolean>(true);
  public sidebarVisible = this.sidebarVisibleSubject.asObservable();

  constructor() {
    this.visibilidadActual = this.sidebarVisibleSubject.value;
  }

  estadoSidebar() {
    this.visibilidadActual = this.sidebarVisibleSubject.value;
    this.sidebarVisibleSubject.next(!this.visibilidadActual);
  }


  obtenerVisible() {
    return this.visibilidadActual;
  }
}
