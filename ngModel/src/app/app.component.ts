import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngModel';
  appState = 'on'

  handleChange() {
    console.log(this.appState)
  }
}
