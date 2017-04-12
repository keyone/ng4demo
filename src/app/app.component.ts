import { Component } from '@angular/core';

@Component({
  selector: 'app-racing',
  template: `
    <header class="container">
      <h1>{{heading}}</h1>
    </header>
    <races-component-app></races-component-app>
    `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ultra Racing Schedule';
}
