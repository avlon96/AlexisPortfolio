import { Component} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [MatButtonModule, MatDividerModule, MatIconModule, CommonModule],
})
export class HeaderComponent {
showEmail: any;

  constructor(private router: Router, private snackBar: MatSnackBar) { }

  email: string = 'avgraves1@gmail.com';

  showEmailInSnackBar() {
    this.snackBar.open(`Email: ${this.email}`, 'Close', {
      duration: 100000,
    });
  }

  goToHome() {
    this.router.navigate(['/']);
  };

  goToProject() {
    this.router.navigate(['/project']);
  };

  goToContact() {
    this.router.navigate(['/contact']);
  };

  goToUrl(url: string) {
    window.open(url, '_blank');
  }
}
