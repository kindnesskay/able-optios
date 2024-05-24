import { Component, HostListener } from '@angular/core';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { ScrollService } from '../scroll.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  isMenuOpen = true;
  menuIcon = 'assets/menu.svg';
  constructor(private router: Router,scrollService:ScrollService) {
    // Subscribe to router events
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // Close menu whenever route changes
        this.close();
        scrollService.scrollToTop()
        // Set title based on route or any logic you need
      }
    });
  }

  toggleIcon() {
    if (!this.isMenuOpen) {
      this.menuIcon = 'assets/menu.svg';
      return;
    }
    this.menuIcon = 'assets/close.svg';
    return;
  }
  toggleMenu() {
    const menu = document.getElementById('menu');
    this.isMenuOpen = !this.isMenuOpen;
    // change menu icon
    this.toggleIcon();
    menu?.classList.toggle('show');
    const blur_box = document.querySelector('#blur-box');
    blur_box?.classList.toggle('blur-box');
    blur_box?.classList.toggle('hide');

    // const menu_btn = document.querySelector('.menu-btn');
  }

  close() {
    this.isMenuOpen=false
    this.toggleIcon()
    const menu = document.getElementById('menu');

    menu?.classList.add('show');
    const blur_box = document.querySelector('#blur-box');
    blur_box?.classList.remove('blur-box');
    blur_box?.classList.add('hide');
  }
  isScrolled: boolean = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 0;
  }
}
