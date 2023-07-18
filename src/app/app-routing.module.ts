import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeViewComponent } from './components/welcome-view/welcome-view.component';

const routes: Routes = [
  { path: '', redirectTo: '/welcome', pathMatch: 'full' },
  { path: 'welcome', component: WelcomeViewComponent },
  //{ path: 'welcome', component: WelcomeView },
  //{ path: 'buscador-motos', component: BuscadorMotos },
  //{ path: 'motos/:id', component: DetalleMoto },
  //{ path: 'ubicacion/:id', component: UbicacionMoto },
  //{ path: '**', component: NotFound }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
