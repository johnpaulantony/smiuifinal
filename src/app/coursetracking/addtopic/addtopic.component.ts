import { Component, OnInit } from '@angular/core';
import { TraineeserviceService } from '../../traineeservice.service';
import { Issue } from '../../models/issue';
import { Router, } from '@angular/router';
@Component({
  selector: 'app-addtopic',
  templateUrl: './addtopic.component.html',
  styleUrls: ['./addtopic.component.css']
})
export class AddtopicComponent implements OnInit {
  onOptionsSelected(value: string) {
    this.traineeservice.getCourseSubject(value).subscribe(data => {
      this.getSubject = data;
    });
  }
  result: any;
  public test: Issue;
  course: Issue[];
  subject: Issue[];
  getSubject: Issue[];
  sample: Issue;
  topic1: Issue[];
  result1: boolean;
  p:Number=1;
  count:Number=10;
  constructor(private router: Router, public traineeservice: TraineeserviceService) {
    this.test = new Issue();

  }
  onSubmit() {
    this.traineeservice.saveTopic(this.test).subscribe(result => this.result, this.result1 = this.result);
  }
  gotoadd() {
    this.router.navigate(['../coursetracking/add'])
  }

  ngOnInit() {

    this.traineeservice.getCourseDetails().subscribe(data => { this.course = data; })
    this.traineeservice.getSubjectDetails().subscribe(data => { this.subject = data; })
    this.traineeservice.getTopicDetails().subscribe(data => { this.topic1 = data; })
  }

}
