import { Component } from '@angular/core';
import { Student } from '../student';
import { StudentService } from '../student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login1',
  templateUrl: './login1.component.html',
  styleUrls: ['./login1.component.css']
})
export class Login1Component {
  username:string="";
  password:string="";
  msg:string="";
  studinfo:Student[]=[];

  constructor(private studServ:StudentService,private router:Router){
    sessionStorage.clear();
  }

  UserCheck(){

    if(this.username=="admin" && this.password=="admin@123")
    {
      this.router.navigate(['/viewall']);
     }
     else
    {

    
    this.studServ.Showallstudents().subscribe(data=>{
      this.studinfo=data;
    });

    var uchk=false;
    for(let i=0;i<this.studinfo.length;i++){
      if(this.studinfo[i].email==this.username&&this.studinfo[i].password==this.password)
      {
        sessionStorage.setItem('user', this.studinfo[i].name);
        sessionStorage.setItem('id', this.studinfo[i].id.toString());
        uchk=true;
        break;
      }
    }

    if(uchk==true){
   this.router.navigate(['/welcome']);
    }
    else
    this.msg="please check username/password";
  }
  }

}
