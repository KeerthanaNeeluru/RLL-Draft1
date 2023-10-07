import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserDetailsService {
  private url="https://localhost:7148/api/User"
  constructor(private http:HttpClient) { }
  public  getUsers() : Observable<User[]>{
    return this.http.get<User[]>(this.url);
    
  }
  public  updateUser(user:User) : Observable<User[]>{
    return this.http.put<User[]>(this.url,user);
    
  }
  public  deleteUser(user:User) : Observable<User[]>{
    return this.http.delete<User[]>(`${this.url}/${user.id}`);
    
  }
  public  createUser(user:User) : Observable<User[]>{
    return this.http.post<User[]>(this.url,user);
    
  }
}
