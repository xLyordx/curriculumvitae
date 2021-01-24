import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { perfil } from './../Models/configuration.en';
import { gFuncs } from './../Models/globalFuntions';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  public prof: any = perfil;
  public funcs: any = gFuncs;

  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: this.prof.title, cols: 2, rows: 1, content: this.prof.description, image: this.prof.imgSource, idPara: this.funcs.newID() },
          { title: 'Card 2', cols: 2, rows: 1, content: 'persInfo' },
          { title: 'Card 3', cols: 2, rows: 1, content: 'skills' },
          { title: 'Card 4', cols: 2, rows: 1, content: 'languaje' }
        ];
      }

      return [
        { title: this.prof.title, cols: 2, rows: 1, content: this.prof.description, image: this.prof.imgSource },
        { title: 'Card 2', cols: 1, rows: 1, content: 'persInfo' },
        { title: 'Card 3', cols: 1, rows: 2, content: 'skills' },
        { title: 'Card 4', cols: 1, rows: 1, content: 'languaje' }
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) {
    console.log(this.funcs.newID());

  }

  toggle(card: any, paragraph: string) {
    var eChange;
    if (paragraph != undefined && paragraph != '') {
      eChange = document.getElementById(paragraph);
    }

    if (card.rows > 1) {
      card.rows = 1;
      if (eChange) {
        eChange.classList.remove('col-xs-12');
        eChange.classList.add('col-xs-0');
        eChange.classList.remove('fn-xs-14');
      }
    }
    else {
      card.rows = 2;
      if (eChange) {
        eChange.classList.remove('col-xs-0');
        eChange.classList.add('col-xs-12');
        eChange.classList.add('fn-xs-14');
      }
    }
  }

}
