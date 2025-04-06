import { Component} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [MatButtonModule, MatDividerModule, MatIconModule],
})
export class HeaderComponent {

  constructor(private router: Router) { }

  goToHome() {
    this.router.navigate(['/']);
  };

  goToContact() {
    this.router.navigate(['/contact']);
  };

  goToProjects() {
    this.router.navigate(['/project']);
  };
}
