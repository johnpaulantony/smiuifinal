import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Issue } from '../../models/issue';
import { TraineeserviceService } from '../../traineeservice.service';

@Component({
  selector: 'app-addb',
  templateUrl: './addb.component.html',
  styleUrls: ['./addb.component.css']
})
export class AddbComponent implements OnInit {
  @ViewChild("date", { static: false }) date: ElementRef;
  @ViewChild("course_name_1", { static: false }) course_name_1: ElementRef;
  @ViewChild("type", { static: false }) type: ElementRef;
  result1: any;
  public batch: Issue;
  course: Issue[];
  constructor(public traineeservice: TraineeserviceService) {
  }
  onSubmit() {
    var d1 = new Date();
    this.batch.batchCreatedDate = d1.getFullYear() + "-" + (d1.getMonth() + 1) + "-" + d1.getDate();
    this.traineeservice.saveBatch(this.batch).subscribe(result => this.result1=result);
  }
  ngOnInit() {
    this.batch = new Issue();
    this.traineeservice.getCourseDetails().subscribe(data => { this.course = data; })
  }
  public generate() {
    var dateValue = this.date.nativeElement.value;
    var d = new Date(dateValue)
    var myresult = (d.getMonth() + 1) + "/" + d.getFullYear();
    var courseValue = this.course_name_1.nativeElement.value;
    var typeValue = this.type.nativeElement.value;
    this.batch.batchName = myresult + "/" + courseValue + "/" + typeValue
  }
}
