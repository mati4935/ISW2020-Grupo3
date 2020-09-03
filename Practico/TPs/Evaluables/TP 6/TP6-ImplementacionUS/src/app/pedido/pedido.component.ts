import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css']
})
export class PedidoComponent implements OnInit {

  desplegarProducto = "NO";
  desplegarComercio = "NO";
  desplegarEntrega = "NO";

  constructor() { }

  ngOnInit(): void {
  }
  
  ActivarProducto()
  {
    this.desplegarProducto="SI";
  }
  DesactivarProducto()
  {
    this.desplegarProducto="NO";
  }
  ActivarEntrega()
  {
    this.desplegarEntrega="SI";
  }
  DesactivarEntrega()
  {
    this.desplegarEntrega="NO";
  }
  ActivarComercio()
  {
    this.desplegarComercio="SI";
  }
  DesactivarComercio()
  {
    this.desplegarComercio="NO";
  }

}
