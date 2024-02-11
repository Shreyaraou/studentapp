export class Student {
    id:number=0;
    name:string="";
    course:string="";
    grade:string="";
    email:string="";
    password:string="";


    constructor(sno:number,name:string,course:string,grade:string,email:string, pwd:string){

        this.id=sno;
        this.name=name;
        this.course=course;
        this.grade=grade;
        this.email=email;
        this.password=pwd;
    }
}
