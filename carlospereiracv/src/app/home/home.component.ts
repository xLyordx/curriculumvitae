import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { perfil, persInfo, Languages, skills } from './../Models/configuration.en';
import { gFuncs } from './../Models/globalFuntions';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {

  public prof: any = perfil;
  public per: any = persInfo;
  public lang: any = Languages;
  public funcs: any = gFuncs;

  public cards: Array<any> = [
    { title: this.prof.title,class:'col-lg-12 col-md-12 col-sm-12 col-xs-12', content: this.prof.description, tag: 'profile', image: this.prof.imgSource, expanded: false },
    { title: "skills", class:'col-lg-6 col-md-6 col-sm-12 col-xs-12', content: '', tag: 'skill', expanded: false },
    { title: this.per.title, class:'col-lg-6 col-md-6 col-sm-12 col-xs-12', content: '', tag: 'persInfo', expanded: false },
    { title: this.lang.title, class:'col-lg-6 col-md-6 col-sm-12 col-xs-12', content: '', tag: 'lang', expanded: false }
  ];

  presentation(): void {    
    let isOk = false;
    let value = localStorage.getItem("visited");
    console.log(value);
    if (value == null && value != "true" )
      isOk = confirm("Hi, this site is being building in angular, and comming soon will be on a stable version. \n\n If you don't want see this message again please click on agree. \n\n Thanks for visit.");
    
    if (isOk)
      localStorage.setItem("visited","true");
  }

  /** Based on the screen size, switch from standard to one column per row */
  // cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
  //   map(({ matches }) => {
  //     if (matches) {
  //       return [
  //         { title: this.prof.title, cols: 2, rows: 2, content: this.prof.description, tag: '', image: this.prof.imgSource, expanded: false },
  //         { title: this.per.title, cols: 2, rows: 2, content: '', tag: 'persInfo', expanded: false },
  //         { title: 'Card 3', cols: 2, rows: 1, content: '', tag: 'skill', expanded: false },
  //         { title: 'Card 4', cols: 2, rows: 1, content: '', tag: 'lang', expanded: false }
  //       ];
  //     }

  //     return [
  //       { title: this.prof.title, cols: 2, rows: 1, content: this.prof.description, tag: '', image: this.prof.imgSource, expanded: false },
  //       { title: this.per.title, cols: 1, rows: 2, content: '', tag: 'persInfo', expanded: false },
  //       { title: 'Card 3', cols: 1, rows: 1, content: '', tag: 'skill', expanded: false },
  //       { title: 'Card 4', cols: 1, rows: 1, content: '', tag: 'lang', expanded: false }
  //     ];
  //   })
  // );



  constructor(private breakpointObserver: BreakpointObserver) {
    console.log(this.funcs.newID());    
    this.presentation();
  }

  toggle(card: any, paragraph: string, bodyCard: string) {
    var eChange;
    var pChange;
    if (paragraph != undefined && paragraph != '' && card.tag == '') {
      eChange = document.getElementById(paragraph);
      pChange = eChange?.children[0];
    }

    if (!card.expanded) {

      card.rows = card.rows + 1;

      if (eChange) {
        eChange.classList.remove('col-xs-0');
        eChange.classList.add('col-xs-12');
        if (pChange)
          pChange.classList.add('fn-xs-14');
      }
    }
    else {
      card.rows = card.rows - 1;

      if (eChange) {
        eChange.classList.remove('col-xs-12');
        eChange.classList.add('col-xs-0');
        if (pChange)
          pChange.classList.remove('fn-xs-14');
      }
    }
    card.expanded = !card.expanded;
  }

}
