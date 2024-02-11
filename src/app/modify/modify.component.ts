import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from '../student.service';
import { Student } from '../student';

@Component({
  selector: 'app-modify',
  templateUrl: './modify.component.html',
  styleUrls: ['./modify.component.css']
})
export class ModifyComponent implements OnInit {

  constructor(private activateRoute:ActivatedRoute, private studServ:StudentService , private router:Router){}
  stud:Student=new Student(0,"","","","","");
  osno:number=0;
  ngOnInit(): void {
    this.osno=this.activateRoute.snapshot.params["sno"];
    this.studServ.getstudentinfobasedonId(this.osno).subscribe(data=>{
      this.stud=data;
    });
  }


  updatestud(){
    this.studServ.updateStudent(this.osno, this.stud).subscribe(data=>{
      this.router.navigate(['/viewall']);
    });
  }
}
