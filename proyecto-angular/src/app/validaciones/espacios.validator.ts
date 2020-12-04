import { AbstractControl } from '@angular/forms';

export function VerificarEspacios(c: AbstractControl){

  let regExpEspacios = /^[a-zA-Z]*$/

  if(c.value == null) return null

  //if(c.value.indexOf(' ') >= 0){
  if (!regExpEspacios.test(c.value)){
    return {conEspacios : true}
  } return null
}
