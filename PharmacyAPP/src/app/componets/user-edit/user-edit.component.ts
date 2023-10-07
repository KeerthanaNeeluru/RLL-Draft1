import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserDetailsService } from 'src/app/services/user-details.service';
@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent {
  @Input() user?:User;
  @Output() userChanged = new EventEmitter<User[]>();
  
 
  constructor(private userService:UserDetailsService){}
  ngOnInit(): void {}
  updateUser(user: User){
    this.userService
    .updateUser(user)
    .subscribe((users:User[]) =>this.userChanged.emit(users));
  }
  deleteUser(user: User){
    this.userService
    .deleteUser(user)
    .subscribe((users:User[]) =>this.userChanged.emit(users));
  }
  createUser(user: User){
    this.userService
    .createUser(user)
    .subscribe((users:User[]) =>this.userChanged.emit(users));
  }
}
