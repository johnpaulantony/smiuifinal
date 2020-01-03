import { Component, OnInit } from '@angular/core';
import { TraineeserviceService } from 'src/app/traineeservice.service';
import { Studentdetails } from 'src/app/models/StudentDetails';
import { Issue } from 'src/app/models/issue';

@Component({
  selector: 'app-topicscovered',
  templateUrl: './topicscovered.component.html',
  styleUrls: ['./topicscovered.component.css']
})
export class TopicscoveredComponent implements OnInit {
  assign: Issue[];
  getSubject: Issue[];
  course: Issue[];
  subject: Issue[];
  topic1: Issue[];
  abcd: Issue;
  trainer: Issue;
  getassign: Studentdetails[];
  onOptionsSelected(value: string) {
    this.traineeservice.getassigned(value).subscribe(data => {
      this.getassign = data;
    });
  }
  gettopic: Issue[];
  onOptionsSelected2(value: string) {
    this.traineeservice.getCourseSubject(value).subscribe(data => {
      this.getSubject = data;
    });
  }
  onOptionsSelected1(value: string) {
    this.traineeservice.getSubjectTopic(value).subscribe(data => {
      this.gettopic = data;
    });
  }
  constructor(public traineeservice: TraineeserviceService) { }
  onSubmit() {
    this.traineeservice.saveTopicCov(this.abcd).subscribe(data => { this.abcd = data; })
  }
  ngOnInit() {
    this.abcd = new Issue();
    this.traineeservice.getCourseDetails().subscribe(data => { this.course = data; })
    this.traineeservice.getSubjectDetails().subscribe(data => { this.subject = data; })
    this.traineeservice.getTopicDetails().subscribe(data => { this.topic1 = data; })
    this.traineeservice.getbatch().subscribe(data => { this.assign = data; })
    this.traineeservice.gettrainer().subscribe(data => {
      this.trainer = data; console.log(this.trainer.length)
    });
  }
}
