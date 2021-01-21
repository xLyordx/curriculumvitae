import { Component, OnInit } from '@angular/core';
import { educations } from '../Models/configuration.en';
import { Education } from '../Models/Education'


@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  public edus: Education[] = educations

  constructor() { }

  ngOnInit(): void {
  }

}
