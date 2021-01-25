import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { perfil, persInfo } from './../Models/configuration.en';
import { gFuncs } from './../Models/globalFuntions';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  public prof: any = perfil;
  public per: any = persInfo;
  public funcs: any = gFuncs;

  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: this.prof.title, cols: 2, rows: 1, content: this.prof.description, tag: '', image: this.prof.imgSource, idPara: this.funcs.newID() },
          { title: this.per.title, cols: 2, rows: 1, content: '', tag: 'persInfo' },
          { title: 'Card 3', cols: 2, rows: 2, content: '', tag: 'skill' },
          { title: 'Card 4', cols: 2, rows: 1, content: '', tag: 'lang' }
        ];
      }

      return [
        { title: this.prof.title, cols: 2, rows: 1, content: this.prof.description, tag: '', image: this.prof.imgSource },
        { title: this.per.title, cols: 1, rows: 1, content: '', tag: 'persInfo' },
        { title: 'Card 3', cols: 1, rows: 2, content: '', tag: 'skill' },
        { title: 'Card 4', cols: 1, rows: 1, content: '', tag: 'lang' }
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) {
    console.log(this.funcs.newID());
    var xd = "does";
    console.log(xd == "does");

  }

  toggle(card: any, paragraph: string) {
    var eChange;
    var pChange;
    if (paragraph != undefined && paragraph != '' && card.tag == '') {
      eChange = document.getElementById(paragraph);
      pChange = eChange?.children[0];
    }

    if (card.rows > 1) {
      card.rows = 1;
      if (eChange) {
        eChange.classList.remove('col-xs-12');
        eChange.classList.add('col-xs-0');
        if (pChange)
          pChange.classList.remove('fn-xs-14');
      }
    }
    else {
      card.rows = 2;
      if (eChange) {
        eChange.classList.remove('col-xs-0');
        eChange.classList.add('col-xs-12');
        if (pChange)
          pChange.classList.add('fn-xs-14');
      }
    }
  }

}
