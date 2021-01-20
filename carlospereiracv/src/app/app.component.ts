import { Component } from '@angular/core';
import { menus } from './Models/configuration.en';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'carlospereiracv';
  public menusApp = menus; 

  ngOnInit(): void {
    console.log(this.menusApp);
  }
}
