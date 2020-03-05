import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SecretaryComponent } from './secretary/secretary.component';
import { StudentComponent } from './student/student.component';
import { RecruiterComponent } from './recruiter/recruiter.component';

import { DataService } from './data.service';




@NgModule({
  declarations: [
    AppComponent,
    SecretaryComponent,
    StudentComponent,
    RecruiterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
