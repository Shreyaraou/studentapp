import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Student } from '../student';
import { StudentService } from '../student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-onestud',
  templateUrl: './onestud.component.html',
  styleUrls: ['./onestud.component.css']
})
export class OnestudComponent implements OnInit{
  constructor(private activeRoute:ActivatedRoute ,private studServ:StudentService , private router:Router){}


  osno:number=0;
  stud: Student=new Student(0,"","","","","");
  ngOnInit():void{
    this.osno=this.activeRoute.snapshot.params["sno"];
    console.log(this.osno);
    this.studServ.getstudentinfobasedonId(this.osno).subscribe(data=>{
      this.stud=data;
      console.log(this.stud);
    });
  }

  navigateToFirstPage() {
    this.router.navigate(['/viewall']);
  }
  

  delstud(sno:number){
    if(confirm("are u sure to delete?")==true){
    this.studServ.deletestudentInfo(sno).subscribe(data=>{
      this.navigateToFirstPage();
    })
  }
  }
}
