import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Student } from '../student.model';

@Component({
  selector: 'app-recruiter',
  templateUrl: './recruiter.component.html',
  styleUrls: ['./recruiter.component.css']
})
export class RecruiterComponent implements OnInit {
  id: string;
  username: string;
  passcode: number;
  student: Student;
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
  }

  getStudent(username: string, id: string, passcode: number){
    return this.dataService.queryRecruiter(username,id,passcode).subscribe(data => this.student = data);
  }
}
