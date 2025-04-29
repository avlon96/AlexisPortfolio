import { Component, Inject, PLATFORM_ID, OnInit } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div *ngIf="isBrowser" class="pdf-container">
      <iframe 
        [src]="safePdfUrl" 
        [style.width]="mobileView ? '100%' : '100%'"
        [style.height]="mobileView ? (isIOS ? 'calc(100vh - 40px)' : 'calc(100vh - 20px)') : '600px'"
        style="border: none;"
        (load)="onPdfLoad()">
        <p>Your browser does not support PDFs. 
          <a [href]="pdfUrl">Download the PDF</a> instead.
        </p>
      </iframe>
      
      <div *ngIf="mobileView" class="mobile-actions">
        <a [href]="pdfUrl" download="AVGRAVESRESUME25.pdf" class="download-btn">Download PDF</a>
      </div>
    </div>
  `,
  styles: [`
    .pdf-container {
      position: relative;
      width: 100%;
      max-width: 800px;
      margin: 0 auto;
    }
    .mobile-actions {
      text-align: center;
      padding: 10px;
    }
    .download-btn {
      display: inline-block;
      padding: 8px 16px;
      background-color: #007bff;
      color: white;
      text-decoration: none;
      border-radius: 4px;
      font-size: 14px;
    }
    @media (min-width: 768px) {
      .mobile-actions {
        display: none;
      }
    }
  `]
})
export class ResumeComponent implements OnInit {
  isBrowser: boolean;
  mobileView: boolean = false;
  isIOS: boolean = false;
  pdfUrl: string = '/assets/doc/AVGRAVESRESUME25.pdf';
  safePdfUrl: SafeResourceUrl;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private sanitizer: DomSanitizer
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
    this.safePdfUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.pdfUrl);
  }

  ngOnInit() {
    if (this.isBrowser) {
      this.checkMobileView();
      this.checkIOS();
      window.addEventListener('resize', this.checkMobileView.bind(this));
    }
  }

  checkMobileView() {
    this.mobileView = window.innerWidth < 768;
  }

  checkIOS() {
    this.isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) || 
                (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
  }

  onPdfLoad() {
    console.log('PDF loaded successfully');
    // You can add additional logic here if needed
  }
}