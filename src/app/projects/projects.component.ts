import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [MatButtonModule, MatDividerModule, MatIconModule, CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent {
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
      link: 'https://soulgineer.netlify.app'
    }
  ];
  openLink(url: string) {
    window.open(url, '_blank');
  }
 

  goToUrl(url: string) {
    window.open(url, '_blank');
  }

}
