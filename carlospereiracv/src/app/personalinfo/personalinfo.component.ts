import { Component, OnInit } from '@angular/core';
import { persInfo } from '../Models/configuration.en';

@Component({
  selector: 'app-personalinfo',
  templateUrl: './personalinfo.component.html',
  styleUrls: ['./personalinfo.component.css']
})
export class PersonalinfoComponent implements OnInit {

  public pers: any = persInfo;

  constructor() { }

  ngOnInit(): void {
  }

}
