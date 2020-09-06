import { Component, OnInit } from '@angular/core';
import { ciudades, Ciudad } from '../../models/ciudades';
import { MockCiudadesService } from '../../services/mock-ciudades.service'
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css']
})
export class PedidoComponent implements OnInit {

  Items: Ciudad[] = [];

  desplegarProducto = "SI";
  desplegarComercio = "SI";
  desplegarEntrega = "SI";
  formPrimero:FormGroup;
  enviado:boolean = false;
  estado = "No confirmado"

  constructor(
    private servicioCiudades: MockCiudadesService,
    private formBuilder:FormBuilder
  ) { }

  ngOnInit(): void {
    this.GetCiudades();
    this.formPrimero = this.formBuilder.group({
      productos: ["",[Validators.required, Validators.minLength(1), Validators.maxLength(55)]],
      calleComercio: ["",[Validators.required, Validators.minLength(1), Validators.maxLength(55)]],
      numeroComercio: [null, [Validators.required, Validators.pattern("[0-9]{1,4}")]],
      ciudadComercio: ["",[Validators.required, Validators.minLength(1), Validators.maxLength(55)]],
      calleEntrega: ["",[Validators.required, Validators.minLength(1), Validators.maxLength(55)]],
      numeroEntrega: [null, [Validators.required, Validators.pattern("[0-9]{1,4}")]],
      ciudadEntrega: ["",[Validators.required, Validators.minLength(1), Validators.maxLength(55)]],
     })
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
  Confirmar()
  {
    this.enviado = true;
    if(this.formPrimero.invalid){
      return;
    }
    this.estado = "Confirmado";
  }

}