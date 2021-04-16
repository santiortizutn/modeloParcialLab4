import { Component, Input, OnInit } from '@angular/core';
import { Pelicula } from 'src/app/clases/pelicula';

@Component({
  selector: 'app-detalle-pelicula',
  templateUrl: './detalle-pelicula.component.html',
  styleUrls: ['./detalle-pelicula.component.css']
})
export class DetallePeliculaComponent implements OnInit {

  @Input('peliParaMostrar') peliculaParaMostrar : Pelicula;

  constructor() {
    /*this.peliculaParaMostrar = new Pelicula();
    this.peliculaParaMostrar.nombre = "La Mascara";
    this.peliculaParaMostrar.tipo = "Comedia";
    this.peliculaParaMostrar.fechaEstreno = new Date().toLocaleString();*/
   }

  ngOnInit(): void {
  }

}
