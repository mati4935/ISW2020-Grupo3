import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cobro',
  templateUrl: './cobro.component.html',
  styleUrls: ['./cobro.component.css'],
})
export class CobroComponent implements OnInit {
  desplegarEfectivo = 'NO';
  desplegarVISA = 'NO';
  desplegarFechaHs = 'NO';
  formaPago = 'NS';
  recepcion = 'NS';
  formFormaPago: FormGroup;
  formVISA: FormGroup;
  formEFECTIVO: FormGroup;
  formRECEPCION: FormGroup;
  enviado: boolean = false;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.formFormaPago = this.formBuilder.group({
      precio: [null, [Validators.required, Validators.pattern('[0-9]{1,10}')]],
    });

    this.formVISA = this.formBuilder.group({
      nombreTitular: [
        '',
        [
          Validators.required,
          Validators.minLength(1),
          Validators.maxLength(55),
        ],
      ],
      apellidoTitular: [
        '',
        [
          Validators.required,
          Validators.minLength(1),
          Validators.maxLength(55),
        ],
      ],
      numeroTarjeta: [
        null,
        [Validators.required, Validators.pattern('[4]{1}[0-9]{15}')],
      ],
      fechaVencimiento:[
        "",
        [Validators.required,Validators.pattern("(0[1-9]|1[012])[-/](202|203)[0-9]{1}")]
      ],
      codigoTarjeta: [
        null,
        [Validators.required, Validators.pattern('[0-9]{3}')],
      ],
    });
    this.formEFECTIVO = this.formBuilder.group({
      monto: [null, [Validators.required, Validators.pattern('[0-9]{1,10}')]],
    });

    this.formRECEPCION = this.formBuilder.group({
      //fecha: ["",[Validators.required,Validators.pattern("(0[1-9]|[12][0-9]|3[01])[-/](0[1-9]|1[012])[-/](19|20)[0-9]{2}")]],
      fecha: [null],
      hora: [
        null,
        [
          Validators.required,
          Validators.pattern('([0-2]?[0-9]?)[-:]([0-5]?[0-9]?)'),
        ],
      ],
    });
  }

  ActivarEfectivo() {
    this.desplegarEfectivo = 'SI';
    this.desplegarVISA = 'NO';
    this.formaPago = 'E';
  }
  DesactivarEfectivo() {
    this.desplegarEfectivo = 'NO';
  }

  ActivarVISA() {
    this.desplegarVISA = 'SI';
    this.desplegarEfectivo = 'NO';
    this.formaPago = 'V';
  }
  DesactivarVISA() {
    this.desplegarVISA = 'NO';
  }

  ActivarFechaHs() {
    this.desplegarFechaHs = 'SI';
    this.recepcion = 'FyH';
  }

  DesactivarFechaHs() {
    this.desplegarFechaHs = 'NO';
    this.recepcion = 'AP';
  }

  Confirmar() {
    this.enviado = true;
    if (this.recepcion == 'NS' || this.formaPago == 'NS') {
      return;
    }
    if (this.formaPago == 'E' && this.recepcion == 'AP') {
      if (this.formFormaPago.invalid || this.formEFECTIVO.invalid) {
        return;
      }
    }
    if (this.formaPago == 'V' && this.recepcion == 'AP') {
      if (this.formFormaPago.invalid || this.formVISA.invalid) {
        return;
      }
    }
    if (this.formaPago == 'E' && this.recepcion == 'FyH') {
      if (
        this.formFormaPago.invalid ||
        this.formEFECTIVO.invalid ||
        this.formRECEPCION.invalid
      ) {
        return;
      }
    }
    if (this.formaPago == 'V' && this.recepcion == 'FyH') {
      if (
        this.formFormaPago.invalid ||
        this.formVISA.invalid ||
        this.formRECEPCION.invalid
      ) {
        return;
      }
    }
    alert('BIEN ECHO');
  }
}
