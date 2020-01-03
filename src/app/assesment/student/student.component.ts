import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { TraineeserviceService } from 'src/app/traineeservice.service';
import { Assessment } from 'src/app/models/issue';
import { Studentdetails } from 'src/app/models/StudentDetails';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  @ViewChild("mbno", { static: false }) mbno: ElementRef;
  t: string;
  q: string;
  p:Number=1;
  count:Number=10;
stud:Studentdetails[];
sub1: any;
  selected: any;

  constructor(private router: Router, public traineeservice: TraineeserviceService) {
    this.sub1 = new Studentdetails();

  }
  search($event) {
    let q = $event.target.value;
    this.traineeservice.getassessmentstudent(q).subscribe(data => { 
      this.stud = data; console.log(this.stud)
    })
  }
select(selected:string)
{
  let r = this.mbno.nativeElement.value;
    console.log(r)
    let s = r.split("/");
    this.t = s[2];
  }
  onSubmit() {
    this.sub1.studentId = this.t;
    console.log(this.sub1.studentId)
    this.traineeservice.getstudenttestmark(this.sub1.studentId).subscribe(data => { 
      this.sub1 = data; console.log(this.sub1) })
  }
  ngOnInit() {

  }

}
