import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeViewComponent } from './components/welcome-view/welcome-view.component';
//esto para usar lottie
import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';
import { MenuComponent } from './components/menu/menu.component';

export function playerFactory() {
  return player;
}
//hasta aqui
@NgModule({
  declarations: [
    AppComponent,
    WelcomeViewComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LottieModule.forRoot({ player: playerFactory }), //esta linea agregue para lottie
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
