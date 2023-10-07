import { Injectable } from '@angular/core';
import { Feedback } from '../models/feedback';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class FeedbackService {
  private url="https://localhost:7148/api/Feedback/GetFeedback"
  constructor(private http:HttpClient) { }
  public getFeedback(): Observable<Feedback[]>{
    return this.http.get<Feedback[]>(this.url);
  }
  public updateFeedback(feedback:Feedback): Observable<Feedback[]>{
    return this.http.put<Feedback[]>(this.url, feedback);
  }
  public deleteFeedback(feedback:Feedback): Observable<Feedback[]>{
    return this.http.delete<Feedback[]>(`${this.url}/${feedback.id}}`);
  }
  public createFeedback(feedback:Feedback): Observable<Feedback[]>{
    return this.http.post<Feedback[]>(this.url,feedback);
  }
}
