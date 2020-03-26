import { Component, OnInit } from '@angular/core';
import { PersonaService } from './../../services/persona.service';
import { Persona } from './../models/persona';

@Component({
  selector: 'app-persona-registro',
  templateUrl: './persona-registro.component.html',
  styleUrls: ['./persona-registro.component.css']
})
export class PersonaRegistroComponent implements OnInit {
  persona:Persona;

  constructor(private personaService:PersonaService) { }

  ngOnInit() {
    this.persona= new Persona;
  }

  add(){
    alert('Se agrego una persona'+ JSON.stringify(this.persona));
    this.personaService.post(this.persona);
  }

}
