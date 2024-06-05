import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-logo-universidad',
  standalone: true,
  templateUrl : '../../../../assets/imagenes/logo-universidad-sidebar.svg',
  imports: []
})
export class LogoUniversidadComponent {
  @Input() color= '';
}
