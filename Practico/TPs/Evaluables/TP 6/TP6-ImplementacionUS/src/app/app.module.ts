import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PedidoComponent } from './pedido/pedido.component';
import { MenuComponent } from './menu/menu.component';
import { APP_BASE_HREF} from '@angular/common';
import { CobroComponent } from './cobro/cobro.component';  

@NgModule({
  declarations: [
    AppComponent,
    PedidoComponent,
    MenuComponent,
    CobroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: '', redirectTo: '/pedido', pathMatch: 'full' },
      { path: 'pedido', component: PedidoComponent },
      { path: 'cobro', component: CobroComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
