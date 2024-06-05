import { Component } from '@angular/core';

@Component({
  selector: 'app-persona',
  standalone: true,
  imports: [],
  templateUrl: './persona.component.html',
  styleUrl: './persona.component.css'
})
export class PersonaComponent {
  personas = [
    {
      id : 1,
      nombre: 'Brayan',
      profesion: 'Ingeniero de Sistemas',
      descripcion: 'Guapos',
      perfil : 'https://1.bp.blogspot.com/-7SmeSjToGZs/XsnKLzphF1I/AAAAAAAADds/MNQSQWpCJ6gKOLnN_UMrvrq_cK5imuvNwCLcBGAsYHQ/s1600/el%2Bcontador%2Bprofesional.png'
    },
    {
      id : 2,
      nombre  : 'Carlos',
      profesion: 'Ingeniero de Sistemas',
      descripcion: 'Romantico',
      perfil : 'https://1.bp.blogspot.com/-7SmeSjToGZs/XsnKLzphF1I/AAAAAAAADds/MNQSQWpCJ6gKOLnN_UMrvrq_cK5imuvNwCLcBGAsYHQ/s1600/el%2Bcontador%2Bprofesional.png'
    },
    {
      id : 3,
      nombre : 'Pablo',
      profesion: 'Ingeniero de Sistemas',
      descripcion: 'Crack',
      perfil : 'https://1.bp.blogspot.com/-7SmeSjToGZs/XsnKLzphF1I/AAAAAAAADds/MNQSQWpCJ6gKOLnN_UMrvrq_cK5imuvNwCLcBGAsYHQ/s1600/el%2Bcontador%2Bprofesional.png'
    },
    {
      id : 4,
      nombre : 'Santiago',
      profesion: 'Ingeniero de Sistemas',
      descripcion : 'Timido',
      perfil : 'https://1.bp.blogspot.com/-7SmeSjToGZs/XsnKLzphF1I/AAAAAAAADds/MNQSQWpCJ6gKOLnN_UMrvrq_cK5imuvNwCLcBGAsYHQ/s1600/el%2Bcontador%2Bprofesional.png'
    },
    {
      id : 5,
      nombre : 'Blanca',
      profesion: 'Ingeniero de Sistemas',
      descripcion : 'Timido',
      perfil : 'https://1.bp.blogspot.com/-7SmeSjToGZs/XsnKLzphF1I/AAAAAAAADds/MNQSQWpCJ6gKOLnN_UMrvrq_cK5imuvNwCLcBGAsYHQ/s1600/el%2Bcontador%2Bprofesional.png'
    }
  ]

}
