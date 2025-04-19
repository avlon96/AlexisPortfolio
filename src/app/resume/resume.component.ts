import { Component } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID } from '@angular/core';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-resume',
  standalone: true, // If you're using standalone components
  imports: [CommonModule], // Add this line
  template: `
    <div *ngIf="isBrowser">
      <iframe 
        src="/assets/doc/AVGRAVESRESUME25.pdf" 
        width="100%" 
        height="600px"
        style="border: none;">
        <p>Your browser does not support PDFs. 
          <a href="/assets/doc/AVGRAVESRESUME25.pdf">Download the PDF</a> instead.
        </p>
      </iframe>
    </div>
  `
})
export class ResumeComponent {
  isBrowser: boolean;
  
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }
}
