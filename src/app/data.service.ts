import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Student } from './student.model';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private _http: HttpClient) { }

  querySecretary(username: string, id: string){
    return this._http.get<Student>('http://snf-7429.ok-kno.grnetcloud.net:3000/SecrRouter/Secretary/query?username='+ username + '&id=' + id);
  }

  queryStudent(username: string, id: string){
    return this._http.get<Student>('http://snf-7429.ok-kno.grnetcloud.net:3000/StudRouter/Student/showDegrees?username='+ username + '&id=' + id);
  }

  queryRecruiter(username: string, id: string, passcode: number){
    return this._http.get<Student>('http://snf-7429.ok-kno.grnetcloud.net:3000/RecrRouter/Recruiter?username=' + username + '&id=' + id + '&passcode=' + passcode);
  }

}
