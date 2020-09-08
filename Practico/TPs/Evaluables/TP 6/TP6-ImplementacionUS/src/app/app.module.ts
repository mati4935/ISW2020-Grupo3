import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PedidoComponent } from './components/pedido/pedido.component';
import { MenuComponent } from './components/menu/menu.component';
import { APP_BASE_HREF} from '@angular/common';
import { CobroComponent } from './components/cobro/cobro.component';  
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ImagenComponent } from './components/imagen/imagen.component';
import { GoogleMapsModule } from '@angular/google-maps';

@NgModule({
  declarations: [
    AppComponent,
    PedidoComponent,
    MenuComponent,
    CobroComponent,
    ImagenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GoogleMapsModule,
    RouterModule.forRoot([
      { path: '', redirectTo: '/pedido', pathMatch: 'full' },
      { path: 'pedido', component: PedidoComponent },
      { path: 'cobro', component: CobroComponent }
    ]),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
