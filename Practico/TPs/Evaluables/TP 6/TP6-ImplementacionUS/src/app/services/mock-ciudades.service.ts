import { Injectable } from '@angular/core';
import { of } from "rxjs";
import { ciudades, Ciudad } from '../models/ciudades';

@Injectable({
  providedIn: 'root'
})
export class MockCiudadesService {

  constructor() { }
  get() {
    return of(ciudades);
}
}
