import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EducationComponent } from './education/education.component';
import { WorkexperienceComponent } from './workexperience/workexperience.component';
import { PersonalinfoComponent } from './personalinfo/personalinfo.component';
import { SkillsComponent } from './skills/skills.component';
import { LanguagesComponent } from './languages/languages.component';
import { ReferencesComponent } from './references/references.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'Home', component: HomeComponent },
  { path: 'Education', component: EducationComponent },
  { path: 'WorkExp', component: WorkexperienceComponent },
  { path: 'PersInfo', component: PersonalinfoComponent },
  { path: 'Skills', component: SkillsComponent },
  { path: 'Languages', component: LanguagesComponent },
  { path: 'References', component: ReferencesComponent },
  { path: '**', component: HomeComponent }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
