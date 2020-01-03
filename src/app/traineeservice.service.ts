import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Issue, Studentpersonaldetails, Qualification, Assessment, assess, SaveStudent } from './models/issue';
import { Observable, interval } from 'rxjs';
import { Amenities } from './models/Amenities';
import { Studentdetails } from './models/StudentDetails';
import { Deployed, Discontinued, Terminated, Intraining, Dailyatten, Monthlyatten, Batchatten, Dailytopic, Monthlytopic, Studentatten, Batchtopic } from './models/Deployed';
@Injectable({
  providedIn: 'root'
})
export class TraineeserviceService {
  private Url: string;
   a:string;
   source=interval(1000);
  constructor(private http: HttpClient) {

    this.Url = 'https://smiinnothinkservice.herokuapp.com/smi';
  }
  public getCourseDetails(): Observable<Issue[]> {
    return this.http.get<Issue[]>(this.Url + "/get");
  }
  public getSubjectDetails(): Observable<Issue[]> {
    return this.http.get<Issue[]>(this.Url + "/getsubject");
  }
  public getTopicDetails(): Observable<Issue[]> {

    return this.http.get<Issue[]>(this.Url + "/gettopic");
  }

  public save(course: Issue) {
    return this.http.post<Issue>(this.Url + "/insert", course);
  }
  public saveTopic(course: Issue) {
    return this.http.post<Issue>(this.Url + "/inserttopic", course);
  }
  public saveSubject(course: Issue) {
    return this.http.post<Issue>(this.Url + "/insertsubject", course);

  }
  public getCourseSubject(course: String): Observable<Issue[]> {
    return this.http.get<Issue[]>(this.Url + "/getsubjectoncourse?courseId=" + course);
  }
  public getassigned(course: String): Observable<Studentdetails[]> {

    return this.http.get<Studentdetails[]>(this.Url + "/getstudentnameandmobile?batchId=" + course);
  }
  public getSubjectTopic(course: String): Observable<Issue[]> {
    return this.http.get<Issue[]>(this.Url + "/gettopiconsubject?subjectId=" + course);
  }
  public saveBatch(course: Issue) {
    return this.http.post<Issue>(this.Url + "/insertbatch", course);
  }
  public getstudent(): Observable<Studentdetails[]> {
    return this.http.get<Studentdetails[]>(this.Url + "/get");
  }
  public getstudentpd(): Observable<Studentpersonaldetails[]> {
    return this.http.get<Studentpersonaldetails[]>(this.Url + "/get");
  }
  public getamenities(): Observable<Amenities[]> {
    return this.http.get<Amenities[]>(this.Url + "/get");
  }
  public saveamenities(amenities: Amenities) {

    return this.http.post<Amenities>(this.Url + "/insertstudentacademic", amenities);
  }
  public saveassign(assign: Studentdetails) {

    return this.http.post<Studentdetails>(this.Url + "/insertbatchmapping", assign);
  }
  public gettrainer(): Observable<Issue[]> {
    return this.http.get<Issue[]>(this.Url + "/gettrainer");
  }
  public getbatch(): Observable<Issue[]> {
    return this.http.get<Issue[]>(this.Url + "/getbatch");
  }
  public getMobile(mobile: string): Observable<Studentdetails[]> {
    return this.http.get<Studentdetails[]>(this.Url + "/getname?mobile=" + mobile);
  }
  public savetrainer(trainer: Issue) {
    return this.http.post<Issue>(this.Url + "/inserttrainers", trainer);
  }
  public savestudent( savestudent:SaveStudent) {
    return this.http.post<SaveStudent>(this.Url + "/insertstudent",savestudent);
  }
  public savestudentpd(studentpd: Studentpersonaldetails) {
    return this.http.post<Studentpersonaldetails>(this.Url + "/insertstudentpersonal", studentpd);
  }
  public saveattend(studentad: Studentdetails) {
    return this.http.post<Studentdetails>(this.Url + "/updateattendance", studentad);
  }
  public saveattend1(studentad: Studentdetails) {
    return this.http.post<Studentdetails>(this.Url + "/insertattendance", studentad);
  }
  public savebatupdate(studentad: Studentdetails) {
    return this.http.post<Studentdetails>(this.Url + "/switchbatch", studentad);
  }
  public savestuupdate(studentad: Studentdetails) {
    return this.http.post<Studentdetails>(this.Url + "/insertstudentstatus", studentad);
  }
  public saveTopicCov(studtop: Issue) {
    return this.http.post<Issue>(this.Url + "/insertdailystatus", studtop);
  }
  public getdeployedstudentsdetails(): Observable<Deployed[]> {
    return this.http.get<Deployed[]>(this.Url + "/getdeployedstudentsdetails");
  }
  public getdiscontinueddetails(): Observable<Discontinued[]> {
    return this.http.get<Discontinued[]>(this.Url + "/getdiscontinuedstudentsdetails");
  }
  public getterminateddetails(): Observable<Terminated[]> {
    return this.http.get<Terminated[]>(this.Url + "/getterminatedstudentsdetails");
  }
  public getintrainingdetails(): Observable<Intraining[]> {
    return this.http.get<Intraining[]>(this.Url + "/getintrainingstudentsdetails");
  }
  public getDailyattendance(attendanceDate: string): Observable<Dailyatten[]> {
    return this.http.get<Dailyatten[]>(this.Url + "/getdailyattendance?attendanceDate=" + attendanceDate);
  }
  public getMonth(attendanceDate: string): Observable<Monthlyatten[]> {
    return this.http.get<Monthlyatten[]>(this.Url + "/getmonthlyattendance?attendanceDate=" + attendanceDate);
  }
  public getbatchwise(batchId: string): Observable<Batchatten[]> {
    return this.http.get<Batchatten[]>(this.Url + "/getbatchwiseattendance?batchId=" + batchId);
  }
  public getstudentwise(studentId: string): Observable<Studentatten[]> {
    return this.http.get<Studentatten[]>(this.Url + "/getstudentwiseattendance?studentId=" + studentId);
  }
  public getDailytopic(topicDate: string): Observable<Dailytopic[]> {
    return this.http.get<Dailytopic[]>(this.Url + "/getdailytopic?topicDate=" + topicDate);
  }
  public getMonthlytopic(topicMonth: string): Observable<Monthlytopic[]> {
    return this.http.get<Monthlytopic[]>(this.Url + "/getmonthlytopic?topicmonth=" + topicMonth);
  }
  public getbatchwisetopic(batchId: string): Observable<Batchtopic[]> {
    return this.http.get<Batchtopic[]>(this.Url + "/getbatchwisestatus?batchId=" + batchId);
  }
  public assesmentassign(assign: Assessment) {
    return this.http.post<Assessment>(this.Url + "/insertassesmentdetails", assign);
  }
  public assesmentupdate(): Observable<Assessment[]> {
    return this.http.get<Assessment[]>(this.Url + "/getassignedassesment");
  }
  public update1(name:string):Observable<Assessment[]>{
    return this.http.get<Assessment[]>(this.Url + "/getstudentandtotal?assignAssesmentId="+name);
  }
  public update(mark:assess){
    return this.http.post<assess>(this.Url + "/insertmarks", mark.marks);
  }
  public getDetails(): Observable<Assessment[]> {
    return this.http.get<Assessment[]>(this.Url + "/getdetails");
  }
  public update2(name:string):Observable<Assessment[]>{
    return this.http.get<Assessment[]>(this.Url + "/getmarkdetails?assesId="+name);
  }
  public getassessmentstudent(name: string): Observable<Studentdetails[]> {
    return this.http.get<Studentdetails[]>(this.Url + "/getstudentmobileonname?name=" + name);
  }
  public getstudenttestmark(studentId: string): Observable<Assessment[]> {
    return this.http.get<Assessment[]>(this.Url + "/getmarksonstudent?studentId=" + studentId);
  }
}

