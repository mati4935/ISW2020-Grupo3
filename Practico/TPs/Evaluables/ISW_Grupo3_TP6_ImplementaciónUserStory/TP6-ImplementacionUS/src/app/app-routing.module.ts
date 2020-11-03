import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {GoogleMapsModule} from '@angular/google-maps';

const routes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    GoogleMapsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
