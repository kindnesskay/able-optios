import { NgFor, NgStyle } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-image-side',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './image-side.component.html',
  styleUrl: './image-side.component.css',
})
export class ImageSideComponent {
  @Input() title!: string;
  @Input() image!: string;
}
