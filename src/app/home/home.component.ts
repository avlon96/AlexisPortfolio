import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatButtonModule, MatDividerModule, MatIconModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent{
  boxes = [
    {
      image: 'assets/img/ASD.png',
      // label: 'ASD WELLNESS',
      link: 'https://www.asdwellness.net'
    },
    {
      image: 'assets/img/2.png',
      // label: 'AP COSMETICS',
      link: 'https://www.apcosmetics.com'
    },
    {
      image: 'assets/img/HTHHC.png',
      // label: 'HARPER THOMPSON HOME HEALTH CARE',
      link: 'https://hthhc.org'
    },
    {
      image: 'assets/img/soul.png',
      // label: 'SOULGINEER STRUCTUAL ENGINEERING',
      link: 'https://angular.io'
    }
  ];
  openLink(url: string) {
    window.open(url, '_blank');
  }
 
  goToResume() {
    window.open('https://example.com', '_blank');
  };

  goToGit() {
    window.open('https://example.com', '_blank');
  };

  goToLink() {
    window.open('https://example.com', '_blank');
  };

}
