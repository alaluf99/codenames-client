import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {DataService} from "../../services/data.service";
import {AuthenticationService} from "../../services/authentication.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;

  constructor(private router: Router, private dataService: DataService, private authenticationService: AuthenticationService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.dataService.signIn({username: this.username, password: this.password}).subscribe((res) => {
      if (res) {
        this.authenticationService.currentUserId = res as string;
        this.router.navigateByUrl('/rooms');
      }
    });
  }

  signUp() {
    this.dataService.signUp({username: this.username, password: this.password}).subscribe(() => {

    });
  }

  doubleClick() {
    this.router.navigateByUrl('/board');
  }
}

