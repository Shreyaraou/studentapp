import { Component } from '@angular/core';
import { StudentService } from '../student.service';
import { Student } from '../student';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addstud',
  templateUrl: './addstud.component.html',
  styleUrls: ['./addstud.component.css']
})
export class AddstudComponent {

  constructor(private studServ:StudentService , private router:Router){}
  stud:Student=new Student(0,"","","","","");
  msg:string="";

  StudentSaving()
  {
    this.studServ.addNewStud(this.stud).subscribe(data=>{
      console.log(data);
     // this.msg="saved";
     this.router.navigate(['/viewall']);
    });
  }
}
