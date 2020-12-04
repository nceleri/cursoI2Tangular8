import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formularios',
  templateUrl: './formularios.component.html',
  styleUrls: ['./formularios.component.css']
})
export class FormulariosComponent implements OnInit {

  cantidadMinimaCaracteres : number = 4

  formu = {
    nombre:'',
    edad:'',
    email:'',
    password:'',
    notas:''
  }

  f:FormGroup
  constructor(private fb: FormBuilder) {
    this.f = fb.group({
      // creamos el validaros compose para componer de varias validacions la validacion completa del elemento
      nombre: ['', Validators.compose([
        Validators.required,
        Validators.minLength(this.cantidadMinimaCaracteres),
        Validators.maxLength(12)
        //,        VerificarEspacios
      ])],
      edad:'',
      // ahora agrupamos pero datos, funcion con un objeto,
      contacto: fb.group({
        email:'',
        telefono:''
      }),
      password:'',
      notas:''
    })
   }

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


  getCantidadMinima(){
   // return this.f.controls.nombre.errors.minlength.requiredLength
    return this.f.controls.nombre.errors.minlength.requiredLength
  }

}
