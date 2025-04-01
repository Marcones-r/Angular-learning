import {Component} from '@angular/core';

@Component({
  selector: 'app-user',
  template: `
    <p>Username: {{ username }}</p>
    <p>Preferred Framework:</p>
    <ul>
      <li>
        Static Image:
        <img src="/Angular.png" width="300" height="300" alt="Angular logo" />
      </li>
      <li>
        Dynamic Image:
        <img [src]="logoUrl" [alt]="logoAlt" width="600" height="600" />
      </li>
    </ul>
  `,
  imports: [],
})
export class UserComponent {
  logoUrl = '/Angular.webp';
  logoAlt = 'Angular logo';
  username = 'youngTech';
}
