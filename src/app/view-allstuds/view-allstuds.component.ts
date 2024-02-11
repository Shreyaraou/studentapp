import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { Student } from '../student';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-allstuds',
  templateUrl: './view-allstuds.component.html',
  styleUrls: ['./view-allstuds.component.css']
})
export class ViewAllstudsComponent implements OnInit {

  constructor(private Studserv:StudentService , private router:Router){}
  allstud:Student[]=[];

  ngOnInit(): void {
    this.Showallstud();
  }

  getonestud( sno:number){
   
    this.router.navigate(['/onestud', sno]);
  }

  getmodstud( sno:number){
   
    this.router.navigate(['/modify', sno]);
  }


  Showallstud()
  {
    this.Studserv.Showallstudents().subscribe(data=>{
      this.allstud=data;
    });
  }

}
