import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from './student';
@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private httpclient:HttpClient) {}

    private apiUrl ="http://localhost:3000/student";
   
    addNewStud(stud:Student):Observable<object>{
      return this.httpclient.post(`${this.apiUrl}`,stud);
    }

    Showallstudents():Observable<Student[]>{
      return this.httpclient.get<Student[]>(`${this.apiUrl}`);
    }

    getstudentinfobasedonId(id:any):Observable<Student>{
      return this.httpclient.get<Student>(`${this.apiUrl}/${id}`);
    }

    updateStudent(id:number, stud:Student):Observable<Object>{
      return this.httpclient.put(`${this.apiUrl}/${id}`,stud);
    }

    deletestudentInfo(id:any):Observable<Object>{
      return this.httpclient.delete(`${this.apiUrl}/${id}`);
    }
}
