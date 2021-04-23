import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BienvenidoComponent } from './paginas/bienvenido/bienvenido.component';
import { BusquedaPeliculaComponent } from './paginas/busqueda-pelicula/busqueda-pelicula.component';
import { CabeceraComponent } from './componentes/cabecera/cabecera.component';
import { TablaPeliculaComponent } from './componentes/tabla-pelicula/tabla-pelicula.component';
import { DetallePeliculaComponent } from './componentes/detalle-pelicula/detalle-pelicula.component';
import { AltaPeliculaComponent } from './componentes/alta-pelicula/alta-pelicula.component';
import { FormsModule } from '@angular/forms';
import { AltaActorComponent } from './paginas/alta-actor/alta-actor.component';
import { TablaPaisesComponent } from './componentes/tabla-paises/tabla-paises.component';

@NgModule({
  declarations: [
    AppComponent,
    BienvenidoComponent,
    BusquedaPeliculaComponent,
    CabeceraComponent,
    TablaPeliculaComponent,
    DetallePeliculaComponent,
    AltaPeliculaComponent,
    AltaActorComponent,
    TablaPaisesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
