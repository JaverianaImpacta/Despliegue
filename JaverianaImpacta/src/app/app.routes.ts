import { Routes } from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';
import { ResumenComponent } from './componentes/resumen/resumen.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { RecuperacionComponent } from './componentes/recuperacion/recuperacion.component';
import { autorizacionGuard } from './guards/autorizacion.guard';
import { EntidadComponent } from "./componentes/entidad/entidad.component";
import { DetallesEntidadComponent } from "./componentes/detalles-entidad/detalles-entidad.component";
import { ProfesorComponent } from "./componentes/profesor/profesor.component";
import { EstudianteComponent } from "./componentes/estudiante/estudiante.component";
import { ActividadComponent } from "./componentes/actividad/actividad.component";
import { InformeComponent } from "./componentes/informe/informe.component";
import { MetricaComponent } from "./componentes/metrica/metrica.component";
import { PublicacionComponent } from "./componentes/publicacion/publicacion.component";
import { ProyectoComponent } from "./componentes/proyecto/proyecto.component";
import {AdministracionComponent} from "./componentes/administracion/administracion.component";
import {RegistroEntidadComponent} from "./componentes/registro-entidad/registro-entidad.component";
import {RegistroInterlocutorComponent} from "./componentes/registro-interlocutor/registro-interlocutor.component";
import {EntidadPostuladaComponent} from "./componentes/entidad-postulada/entidad-postulada.component";
import {VinculacionComponent} from "./componentes/vinculacion/vinculacion.component";
import {VinculacionEstudianteComponent} from "./componentes/vinculacion-estudiante/vinculacion-estudiante.component";
import { EditarPublicacionComponent } from './componentes/publicacion/editar-publicacion/editar-publicacion.component';
import { CrearPublicacionComponent } from './componentes/publicacion/crear-publicacion/crear-publicacion.component';
import { CrearActividadesComponent } from './componentes/crear-actividades/crear-actividades.component';
import { EditarActividadesComponent } from './componentes/editar-actividades/editar-actividades.component';
import { DetalleEstudianteComponent } from './componentes/detalle-estudiante/detalle-estudiante.component';

import { LandingActividadesComponent } from './componentes/landing-actividades/landing-actividades.component';


export const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path:'resumen', component: ResumenComponent},
  {path:'registro', component: RegistroComponent},
  {path:'registrarEntidad', component: RegistroEntidadComponent},
  {path:'registrarInterlocutor', component: RegistroInterlocutorComponent},
  {path:'entidadesPostuladas', component: EntidadPostuladaComponent},
  {path:'', component: InicioComponent},
  {path:'administracion', component: AdministracionComponent},
  {path:'recuperacion', component: RecuperacionComponent},
  {path:'detallesEntidad/:id', component: DetallesEntidadComponent},
  {path:'profesores', component: ProfesorComponent},
  {path:'entidades', component: EntidadComponent},
  {path:'estudiantes', component: EstudianteComponent},
  {path:'detalle-estudiante/:cedula', component: DetalleEstudianteComponent},
  {path:'vinculaciones', component: VinculacionComponent},
  {path:'vincularEstudiante/:cedula', component: VinculacionEstudianteComponent},
  {path:'proyectos', component: ProyectoComponent},
  {path:'actividades', component: ActividadComponent},
  {path:'crear-actividades', component: CrearActividadesComponent},
  {path:'editar-actividades/:id', component: EditarActividadesComponent},
  {path:'informes', component: InformeComponent},
  {path:'metricas', component: MetricaComponent},
  {path:'publicaciones', component: PublicacionComponent},
  {path:'editar-publicaciones/:id', component: EditarPublicacionComponent},
  {path:'crear-publicaciones', component: CrearPublicacionComponent},
  {path:'actividades', component: ActividadComponent},
  {path:'**', component: ResumenComponent},
 
  {path:'**', component: InicioComponent, canMatch : [!autorizacionGuard]}];
