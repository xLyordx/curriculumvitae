import { Component, OnInit } from '@angular/core';
import { skills } from '../Models/configuration.en';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  public ski: any = skills;
  constructor() { }

  ngOnInit(): void {
  }

  ArraytoString(cadena: string[]): string {
    return cadena.join(", ");
  }

}
