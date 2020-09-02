import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioPedidoComponent } from './inicio-pedido/inicio-pedido.component';
import { EsperaPedidoComponent } from './espera-pedido/espera-pedido.component';
import { FinPedidoComponent } from './fin-pedido/fin-pedido.component';
import { ConfirmacionPedidoComponent } from './confirmacion-pedido/confirmacion-pedido.component';
import { PedidoComponent } from './pedido/pedido.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioPedidoComponent,
    EsperaPedidoComponent,
    FinPedidoComponent,
    ConfirmacionPedidoComponent,
    PedidoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
