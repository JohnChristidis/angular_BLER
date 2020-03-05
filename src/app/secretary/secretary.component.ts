import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Student } from '../student.model';

@Component({
  selector: 'app-secretary',
  templateUrl: './secretary.component.html',
  styleUrls: ['./secretary.component.css']
})
export class SecretaryComponent implements OnInit {
  id: string;
  username: string;
  student: Student;

  constructor(private dataService: DataService) { }


  ngOnInit(): void {
  }

  getStudent(username: string, id: string){
    return this.dataService.querySecretary(username,id).subscribe(data => this.student = data);
  }

}
