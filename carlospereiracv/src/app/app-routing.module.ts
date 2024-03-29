import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EducationComponent } from './education/education.component';
import { WorkexperienceComponent } from './workexperience/workexperience.component';
import { SkillsComponent } from './skills/skills.component';
import { LanguagesComponent } from './languages/languages.component';
import { ReferencesComponent } from './references/references.component';
import { AnnexesComponent } from './annexes/annexes.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'Home', component: HomeComponent },
  { path: 'Education', component: EducationComponent },
  { path: 'WorkExp', component: WorkexperienceComponent },  
  { path: 'Skills', component: SkillsComponent },
  { path: 'Languages', component: LanguagesComponent },
  { path: 'References', component: ReferencesComponent },
  { path: 'Annexes', component: AnnexesComponent },
  { path: '**', component: HomeComponent }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
