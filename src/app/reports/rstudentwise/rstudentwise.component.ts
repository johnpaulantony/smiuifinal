import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { TraineeserviceService } from 'src/app/traineeservice.service';
import { Studentdetails } from 'src/app/models/StudentDetails';
import { Issue } from 'src/app/models/issue';
import { Studentatten } from 'src/app/models/Deployed';

@Component({
  selector: 'app-rstudentwise',
  templateUrl: './rstudentwise.component.html',
  styleUrls: ['./rstudentwise.component.css']
})
export class RstudentwiseComponent implements OnInit {

  @ViewChild("mbno", { static: false }) mbno: ElementRef;
  assign: Issue[];
  t:string;
    assign1: Studentdetails[];
    q: string;
    sub: Studentdetails[];
  sub1:any;
    constructor(public traineeservice: TraineeserviceService) {
      this.sub1=new Studentdetails();
     }
  search($event) {
    let q = $event.target.value;
    console.log("test = " + q);
    this.traineeservice.getMobile(q).subscribe(data => 
      { this.assign1 = data; console.log("assign="+this.assign1) })
 let r= this.mbno.nativeElement.value;
 let s=r.split("/");
 this.t=s[1];
 console.log("final"+this.t);
  }
  studentwise: Studentatten[];
  selected(value: string) {
    this.traineeservice.getstudentwise(value).subscribe(data => {
      this.studentwise = data;
      console.log("res="+this.studentwise)
    });
  }
  addValues(a:string,b:string):string{
    return parseInt(a)+parseInt(b)+""
  }
  ngOnInit() {
    //this.sub1 = new Studentatten();
  //this.traineeservice.getbatch().subscribe(data => { this.assign = data; console.log(this.assign) })
  }

}
