import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabla-paises',
  templateUrl: './tabla-paises.component.html',
  styleUrls: ['./tabla-paises.component.css']
})
export class TablaPaisesComponent implements OnInit {

  @Input('paises') paises : Array<any>

  constructor() { }

  ngOnInit(): void {
  }


}
