import { Component } from '@angular/core';

@Component({
  selector: 'app-racing',
  template: `
    <header class="container">
      <h1>{{heading}}</h1>
    </header>
    <router-outlet></router-outlet>
    `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  heading = 'Ultra Racing Schedule';
}
