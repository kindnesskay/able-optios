import { Component } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

import { NgFor, NgStyle } from '@angular/common';
@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [NgStyle, NgFor],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.css',
  animations: [
    trigger('slide', [
      state('next', style({ transform: 'translate(120%)' })),
      state('prev', style({ transform: 'translate(0)' })),
    ]),
  ],
})
export class SliderComponent {
  images: string[] = [
    'assets/boy.jpg',
    'assets/business-people.jpg',
    'assets/Disabled-child.webp',
    'assets/people-with-disabilities.jpg',
    'assets/baking.webp',
    'assets/girl-on-wheelchair.webp',
    'assets/help-elderly.webp',
  ]; // Add your image URLs here
  currentIndex: number = 0;

  prevImage() {
    this.currentIndex =
      this.currentIndex === 0 ? this.images.length - 1 : this.currentIndex - 1;
  }

  nextImage() {
    this.currentIndex =
      this.currentIndex === this.images.length - 1 ? 0 : this.currentIndex + 1;
  }

  interval: any;

  ngOnInit(): void {
    this.startSlideShow();
  }

  startSlideShow(): void {
    this.interval = setInterval(() => {
      this.nextImage();
    }, 3000); // Change image every 3 seconds (adjust as needed)
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }
}
