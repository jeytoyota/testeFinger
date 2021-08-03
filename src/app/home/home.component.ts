import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { User } from '../model/User';
import { UsersService } from '../service/users.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  name = environment.userName
  
  listUsers: User[]

  constructor(
    private router: Router,
    private userService: UsersService
  ) { }

  ngOnInit(){
    this.findAllUsers()
  }

  findAllUsers(){
    this.userService.getUsers().subscribe((resp: User[])=>{
      this.listUsers = resp
    })
  }

}
