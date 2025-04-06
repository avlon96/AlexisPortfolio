import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent{
  boxes = [
    {
      image: 'assets/images/box1.png',
      label: 'Google',
      link: 'https://www.google.com'
    },
    {
      image: 'assets/images/box2.png',
      label: 'YouTube',
      link: 'https://www.youtube.com'
    },
    {
      image: 'assets/images/box3.png',
      label: 'GitHub',
      link: 'https://www.github.com'
    },
    {
      image: 'assets/images/box4.png',
      label: 'Angular',
      link: 'https://angular.io'
    }
  ];
  openLink(url: string) {
    window.open(url, '_blank');
  }
 

}
