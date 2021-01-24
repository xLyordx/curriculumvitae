import { Component, OnInit } from '@angular/core';
import { perfil } from '../Models/configuration.en';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  public textos = perfil;

  constructor() { }

  ngOnInit(): void {
  }

}
