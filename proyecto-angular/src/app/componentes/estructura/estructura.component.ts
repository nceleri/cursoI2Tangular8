import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-estructura',
  templateUrl: './estructura.component.html',
  styleUrls: ['./estructura.component.css']
})
export class EstructuraComponent implements OnInit {

  alumnos =  [
    {nombre:'Martin',  edad:26, curso: true, foto:'https://www.iconfinder.com/icons/2754577/man_goatee_user_avatar_icon'},
    {nombre:'Roberta',  edad:19, curso: true, foto:'https://www.iconfinder.com/icons/2754580/woman_business%20woman_avatar_female_icon'},
    {nombre:'Juan', edad:23, curso: true, foto:'https://www.iconfinder.com/icons/2754583/man_avatar_user_icon'}

  ]

  constructor() { }

  ngOnInit(): void {
  }

}
