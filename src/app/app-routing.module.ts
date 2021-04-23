import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AltaActorComponent } from './paginas/alta-actor/alta-actor.component';
import { BienvenidoComponent } from './paginas/bienvenido/bienvenido.component';
import { BusquedaPeliculaComponent } from './paginas/busqueda-pelicula/busqueda-pelicula.component';

const routes: Routes = [
  { path: '', component: BienvenidoComponent },
  { path: 'bienvenido', component: BienvenidoComponent },
  { path: 'buscar', component: BusquedaPeliculaComponent },
  { path: 'alta', component: AltaActorComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
