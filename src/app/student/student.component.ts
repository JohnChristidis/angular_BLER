import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Student } from '../student.model';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  id: string;
  username: string;
  student: Student;
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
  }
  getStudent(username: string, id: string){
    return this.dataService.queryStudent(username,id).subscribe(data => this.student = data);
  }

}
