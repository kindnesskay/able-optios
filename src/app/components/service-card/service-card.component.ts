import { Component, HostListener, Input } from '@angular/core';

@Component({
  selector: 'app-service-card',
  standalone: true,
  imports: [],
  templateUrl: './service-card.component.html',
  styleUrl: './service-card.component.css',
})
export class ServiceCardComponent {
  @Input() image!: string;
  @Input() alt!: string;
  @Input() title!: string;
  @Input() text!: string;
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const cards = document.querySelectorAll('.card');
    const windowHeight = window.innerHeight;
    const triggerPoint = windowHeight / 2;

    cards.forEach((card) => {
      const rect = card.getBoundingClientRect();
      const cardMidPoint = rect.top + rect.height / 2;

      if (cardMidPoint >= triggerPoint && cardMidPoint <= windowHeight) {
        card.children[1].classList.add('visible');
        card.children[0].children[0].classList.add('visible-img');
      } else {
        card.children[1].classList.remove('visible');
        card.children[0].children[0].classList.remove('visible-img');
      }
    });
  }
}
