import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

 name: string
 
  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    
  }

  submit(){
    this.router.navigate(['/home'])
    environment.userName = this.name
    
  }

}
