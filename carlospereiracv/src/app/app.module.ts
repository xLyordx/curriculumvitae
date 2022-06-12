import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { EducationComponent } from './education/education.component';
import { WorkexperienceComponent } from './workexperience/workexperience.component';
import { PersonalinfoComponent } from './personalinfo/personalinfo.component';
import { SkillsComponent } from './skills/skills.component';
import { LanguagesComponent } from './languages/languages.component';
import { ReferencesComponent } from './references/references.component';
import { AnnexesComponent } from './annexes/annexes.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule} from './material/material.module';
import { NavComponent } from './nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EducationComponent,
    WorkexperienceComponent,
    PersonalinfoComponent,
    SkillsComponent,
    LanguagesComponent,
    ReferencesComponent,
    AnnexesComponent,
    NavComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
