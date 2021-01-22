import { Component, OnInit } from '@angular/core';
import { Reference } from '../Models/Reference';
import { References } from './../Models/configuration.en'

@Component({
  selector: 'app-references',
  templateUrl: './references.component.html',
  styleUrls: ['./references.component.css']
})
export class ReferencesComponent implements OnInit {

  public refs: Reference[] = References;

  constructor() { }

  ngOnInit(): void {
  }

}
