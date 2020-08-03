import { Component } from '@angular/core';
import {AuthService} from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-routing';

  constructor(private auth: AuthService) { }

  login(): void{
    this.auth.login();
  }

  logout(): void {
    this.auth.logout();
  }
}
