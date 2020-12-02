import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-entradas',
  templateUrl: './entradas.component.html',
  styleUrls: ['./entradas.component.css']
})
export class EntradasComponent implements OnInit {

  mensaje : string = 'soy un menjase'
  numero : number = 0
  numero2 : number = 0
  numero3 : number = 0
  numero4 : number = 0
  numero5 : number = 0

  constructor() { }

  ngOnInit(): void {
  }


  contar(){
    this.numero++
  }

  // IMPORTANTE, PASAMOS UN PARAMETRO A LA FUNCION QUE LUEGO SERA ACCEDID POR TARGET VALUE, no debemos colocar
  actualizar(e:any){
    let valor = e.target.value
    this.numero4 = valor
  }
}
