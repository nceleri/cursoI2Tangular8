import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formularios',
  templateUrl: './formularios.component.html',
  styleUrls: ['./formularios.component.css']
})
export class FormulariosComponent implements OnInit {

  formu = {
    nombre:'',
    edad:'',
    email:'',
    password:'',
    notas:''
  }

  constructor() { }

  ngOnInit(): void {
  }

  enviar(){
    console.log(this.formu);
    this.formu = {
      nombre:'',
      edad:'',
      email:'',
      password:'',
      notas:''
    }
  }

}
