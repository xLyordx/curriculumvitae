import { Component, OnInit } from '@angular/core';
import { workExps } from '../Models/configuration.en';
import { WorkExp } from '../Models/WorkExp'


@Component({
  selector: 'app-workexperience',
  templateUrl: './workexperience.component.html',
  styleUrls: ['./workexperience.component.css']
})
export class WorkexperienceComponent implements OnInit {

  public works: WorkExp[] = workExps;

  constructor() { }

  ngOnInit(): void {
  }

}
