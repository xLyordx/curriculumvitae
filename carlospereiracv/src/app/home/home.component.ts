import { Component, OnInit } from '@angular/core';
import { perfil } from '../Models/configuration.en';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public textos = perfil;

  constructor() { }

  ngOnInit(): void {
  }

}
