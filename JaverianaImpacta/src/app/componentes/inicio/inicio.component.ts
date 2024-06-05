import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { PersonaComponent } from '../persona/persona.component';
import {FooterComponent} from "../footer/footer.component";
import { NosotrosComponent } from '../nosotros/nosotros.component';
import { NoticiasComponent } from '../noticias/noticias.component';
import { LandingProyectoComponent } from '../landing-proyecto/landing-proyecto.component';
import { LandingActividadesComponent } from '../landing-actividades/landing-actividades.component';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [NavbarComponent, PersonaComponent, FooterComponent, NosotrosComponent, NoticiasComponent,
    LandingProyectoComponent, LandingActividadesComponent
  ],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {
}
