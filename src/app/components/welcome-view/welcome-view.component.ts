import { Component } from '@angular/core';

@Component({
  selector: 'app-welcome-view',
  template: `
    <div class="container d-flex flex-column align-items-center justify-content-center welcome-container">
      <h1 class="text-white">BIENVENIDO A FLOTAS PL</h1>
      <button class="btn btn-light btn-lg text-purple mt-3" (click)="goToHome()">Compra tu pasaje</button>
    </div>
  `,
  styleUrls: ['./welcome-view.component.css']
})
export class WelcomeViewComponent {
  goToHome() {
    // Agrega aquí la lógica para navegar a la ruta /home
  }
}


