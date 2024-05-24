import { Component } from '@angular/core';
import { ImageSideComponent } from '../components/image-side/image-side.component';
import { OurMissionComponent } from '../components/our-mission/our-mission.component';
import { OurValuesComponent } from '../components/our-values/our-values.component';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [ImageSideComponent, OurMissionComponent, OurValuesComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({ transform: 'translateX(100%)' }),
        animate('3s ease-out', style({ transform: 'translateX(0%)' })),
      ]),
      transition(':leave', [
        animate('3s ease-in', style({ transform: 'translateX(-100%)' })),
      ]),
    ]),
  ],
})
export class AboutComponent {
  images: string[] = [
    'assets/boy.jpg',
    'assets/business-people.jpg',
    // Add more image URLs as needed
  ];
  currentIndex: number = 0;
  interval: any;

  ngOnInit(): void {
    this.startSlideShow();
  }

  startSlideShow(): void {
    this.interval = setInterval(() => {
      this.showNextImage();
    }, 3000); // Change image every 3 seconds (adjust as needed)
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }

  showNextImage(): void {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }
}
