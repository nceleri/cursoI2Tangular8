import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-estructura',
  templateUrl: './estructura.component.html',
  styleUrls: ['./estructura.component.css']
})
export class EstructuraComponent implements OnInit {

  mostrar : boolean = true

  alumnos =  [
    {nombre:'Martin',  edad:26, curso: false, foto:'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/8_avatar-256.png'},
    {nombre:'Roberta',  edad:19, curso: true, foto:'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/4_avatar-256.png'},
    {nombre:'Juan', edad:23, curso: true, foto:'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/2_avatar-256.png'}

  ]

  constructor() { }

  ngOnInit(): void {
  }

  borrar(index:any){
    // usamos el metode de js, utilizamos el 1 para ?? revisar el metodo
    this.alumnos.splice(index,1)
  }

  agregar(){
    let alumno = {nombre:'Miguel', edad:20, curso: false, foto:'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/2_avatar-256.png'}

    this.alumnos.push(alumno)
  }
}
