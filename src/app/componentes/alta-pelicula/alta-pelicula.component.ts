import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Pelicula } from 'src/app/clases/pelicula';

@Component({
  selector: 'app-alta-pelicula',
  templateUrl: './alta-pelicula.component.html',
  styleUrls: ['./alta-pelicula.component.css']
})
export class AltaPeliculaComponent implements OnInit {

  @Output() crearPeliculaEvento = new EventEmitter<any>();
  peliculaNueva : Pelicula;
  constructor() { }

  ngOnInit(): void {
  }

  guardarNuevaPelicula(){
    this.crearPeliculaEvento.emit(this.peliculaNueva);
    this.peliculaNueva = null;
  }

  hacerNuevaPelicula(){
    this.peliculaNueva = new Pelicula();
  }

}
