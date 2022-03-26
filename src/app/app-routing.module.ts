import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CertificatesComponent } from './components/certificates/certificates.component';
import { EducationComponent } from './components/education/education.component';
import { ReferenceComponent } from './components/reference/reference.component';
import { SkillsComponent } from './components/skills/skills.component';
import { WorkExperienceComponent } from './components/work-experience/work-experience.component';

const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  {path: 'Education', component: EducationComponent},
  {path:'Skills',component:SkillsComponent},
  {path: 'Work Experience',component:WorkExperienceComponent},
  {path:'Certificates',component:CertificatesComponent},
  {path:'Reference',component:ReferenceComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
