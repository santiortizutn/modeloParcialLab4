import { Component, OnInit } from '@angular/core';
import { Pelicula } from '../../clases/pelicula';

@Component({
  selector: 'app-busqueda-pelicula',
  templateUrl: './busqueda-pelicula.component.html',
  styleUrls: ['./busqueda-pelicula.component.css']
})
export class BusquedaPeliculaComponent implements OnInit {

  listadoPeliculas : Array<Pelicula>;
  peliculaSeleccionada : Pelicula;

  constructor() {
    this.listadoPeliculas = [
      {id: 0, nombre: "todopoderoso", tipo: "accion", fechaEstreno: "20/12/2010", cantidadPublico: 12000, foto:"https://technopatas.b-cdn.net/wp-content/uploads/Todopoderoso.jpg"},
      {id: 1, nombre: "papa se volvio loco", tipo: "comedia", fechaEstreno: "20/12/2010", cantidadPublico: 15000, foto:"https://resizing.flixster.com/zSoj_4v63qnysNhPBdkhz1u7CvA=/206x305/v2/https://flxt.tmsimg.com/assets/p8709552_p_v8_ad.jpg"},
      {id: 3, nombre: "diario de una pasion", tipo: "amor", fechaEstreno: "20/12/2010", cantidadPublico: 100, foto:"https://pics.filmaffinity.com/the_notebook-565006977-large.jpg"},
    ]
   }

   cargarPeliculaSeleccionada(pelicula : Pelicula){
    this.peliculaSeleccionada = pelicula;
    console.info("Peli: ", this.peliculaSeleccionada);
   }

  cargarNuevaPelicula(pelicula : Pelicula){
    this.listadoPeliculas.push(pelicula);
  }

  ngOnInit(): void {
  }

}
