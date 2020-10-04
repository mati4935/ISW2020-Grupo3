import { Component, OnInit } from '@angular/core';
import { ciudades, Ciudad } from '../../models/ciudades';
import { MockCiudadesService } from '../../services/mock-ciudades.service'
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MapMarker } from '@angular/google-maps';
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

  //-------MAPS-------
  // Establecemos la posición inicial
  zoom: number = 15;
  position={
    lat:-31.4422991,
    lng: -64.1926318
  };

  //Definimos el array con coordenadas a implementar e iterar...
  markers: any[] = [
    {
      position:{
        lat:-31.4258761,
        lng: -64.1870013,
      },
      label:{
        color: 'white',
        text: 'Grabeat'
      },
    },

    {
      position:{
        lat:-31.4240072,
        lng: -64.1919525,
      },
      label:{
        color: 'white',
        text: 'Las Nietas de Nilda'
      },
    },

    {
      position:{
        lat:-31.4232561,
        lng: -64.1916435,
      },
      label:{
        color: 'white',
        text: 'The Journey'
      },
    },

    {
      position:{
        lat:-31.4260778,
        lng: -64.1824959,
      },
      label:{
        color: 'white',
        text: 'El hornito Santiagueño'
      },
    },

    {
      position:{
        lat:-31.4272715,
        lng: -64.1841864,
      },
      label:{
        color: 'white',
        text: 'Lomitos El Candil'
      },
    },

    {
      position:{
        lat:-31.4505566,
        lng: -64.1764336,
      },
      label:{
        color: 'white',
        text: 'Pan Plano B° Jardín'
      },
    },
  ];
  //-----------------


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
  CerrarPopUp()
  {
    
    let x = document.getElementById("overlay");
    x.style.transition=".3s ease all"
    if(x.style.visibility=="block"){
      x.style.display = "none";
      x.style.transition=".3s ease all"
    }
    else{
      x.style.display="none"
      x.style.transition=".3s ease all"
    }
  
    
  }
  MostrarPopUp()
  {
    
    // Se hace un click en el boton
    let click = 1

    // IDs de los elementos a mostrar...
    let pop = document.getElementById("popup");
    let x = document.getElementById("overlay");
    let titulo1 = document.getElementById("titulo1");
    let titulo2 = document.getElementById("titulo2");
    let inputs = document.getElementById("inputs");
    x.style.transition=".3s ease all"
    if(x.style.display=="none" || click == 1 ){
      x.style.top = "75px";
      x.style.right= "0px";
      x.style.left="450px";
      x.style.bottom ="0px";
      x.style.display = "block";
      x.style.visibility = "visible";
      x.style.transition=".3s ease all"
    
      pop.style.visibility = "visible";
      pop.style.opacity = "1";
      
    }
    else{
      x.style.display="block";
      x.style.transition=".3s ease all"
      click = 0;
      
    }
  }
}