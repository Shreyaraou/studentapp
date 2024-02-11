import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  studName:any="";
  studId:any="";
  stud:Student=new Student(0,"","","","","");
  constructor(private studServ:StudentService){}
  ngOnInit(): void {
    this.studName=sessionStorage.getItem('user');
    this.studId=sessionStorage.getItem('id');
     
    this.studServ.getstudentinfobasedonId(this.studId).subscribe(data=>{
      this.stud=data;
    });
  }

}
