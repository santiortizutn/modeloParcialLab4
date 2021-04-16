import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BienvenidoComponent } from './paginas/bienvenido/bienvenido.component';
import { BusquedaPeliculaComponent } from './paginas/busqueda-pelicula/busqueda-pelicula.component';

const routes: Routes = [
  { path: '', component: BienvenidoComponent },
  { path: 'bienvenido', component: BienvenidoComponent },
  { path: 'buscar', component: BusquedaPeliculaComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
