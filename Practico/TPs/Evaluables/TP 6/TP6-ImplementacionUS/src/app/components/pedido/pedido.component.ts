import { Component, OnInit } from '@angular/core';
import { ciudades, Ciudad } from '../../models/ciudades';
import { MockCiudadesService } from '../../services/mock-ciudades.service'

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css']
})
export class PedidoComponent implements OnInit {

  Items: Ciudad[] = [];

  desplegarProducto = "NO";
  desplegarComercio = "NO";
  desplegarEntrega = "NO";

  constructor(
    private servicioCiudades: MockCiudadesService
  ) { }

  ngOnInit(): void {
    this.GetCiudades();
  }
  
  GetCiudades() {
    this.servicioCiudades.get().subscribe(
      {
          next: ciudades => this.Items = ciudades,
          //error: err => window.alert(err.statusText)
      }
    );
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