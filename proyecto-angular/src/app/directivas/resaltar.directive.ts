import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appResaltar]'
})
export class ResaltarDirective {

  constructor( private el:ElementRef ) { }

  // estas funciones decoradores hacen es conectar los elementos que interfieren con el elemento CON el elemento mismo. FACILITADOR, de conexion entre las propidades del elemento que va aplicar la directiva y sus propiedades internas. Vamos a conectar la propiedad colorBASE, CON un atributo llamado igual en el HTML
  @Input() colorBase: string
  @Input('appResaltar') resaltarColor : string

  //esta funcion no devuelve nada : void, este es un metodo de la clase resalta directiva, este e el que finalmente va a plicar un estilo al elemento
  private resaltar(color:string) : void {
    //accedemos a la variable del constroctor 'el' esto es lo mismo que documente.getElementeById......
    this.el.nativeElement.style.backgroundColor = color
  }


  // estas dos son funciones ... lisener estan escuchando lo que hace el mouse


  @HostListener('mouseenter') onMouseEnter(){
    // las definiciones de los @input, se hacen por si existen...
    //cuando pasemo el mouse sobre el elemento va a evaluar que es lo que existe evaluando de izq a a der. o sea va a comparar con el html, si el elemento tiene el atributo con un valor tomar ese parametro.
    this.resaltar( this.resaltarColor || this.colorBase || 'red')
  }

  // cuando el mouse SALE le pasamos null al color de la funcion resaltar
  @HostListener('mouseleave') onMouseLeave(){
    this.resaltar(null)
  }


}
