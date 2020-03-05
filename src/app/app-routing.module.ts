import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecruiterComponent } from './recruiter/recruiter.component';
import { StudentComponent } from './student/student.component';
import { SecretaryComponent } from './secretary/secretary.component';


const routes: Routes = [
  {path: 'student', component: StudentComponent},
  {path: 'secretary', component: SecretaryComponent},
  {path: 'recruiter', component: RecruiterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
