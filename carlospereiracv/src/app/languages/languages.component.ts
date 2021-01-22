import { Component, OnInit } from '@angular/core';
import { Language } from '../Models/Language';
import { Languages } from './../Models/configuration.en'

@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.css']
})
export class LanguagesComponent implements OnInit {

  public langs: Language[] = Languages;

  constructor() { }

  ngOnInit(): void {
  }

}
