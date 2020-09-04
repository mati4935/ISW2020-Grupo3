import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cobro',
  templateUrl: './cobro.component.html',
  styleUrls: ['./cobro.component.css']
})
export class CobroComponent implements OnInit {

  desplegarEfectivo = "NO";
  desplegarVISA = "NO";

  constructor() { }

  ngOnInit(): void {
  }


  ActivarEfectivo()
  {
    this.desplegarEfectivo="SI";
    this.desplegarVISA="NO";
  }
  DesactivarEfectivo()
  {
    this.desplegarEfectivo="NO";
  }

  ActivarVISA()
  {
    this.desplegarVISA="SI";
    this.desplegarEfectivo="NO";
  }
  DesactivarVISA()
  {
    this.desplegarVISA="NO";
  }

}
