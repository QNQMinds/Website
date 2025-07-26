import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { AboutComponent } from '../about/about.component';
import { CourcesPageComponent } from '../cources-page/cources-page.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [AboutComponent,CourcesPageComponent,CarouselModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {
  currentSection = 'home';
  images = [
    'Riz',
    'https://picsum.photos/id/1011/900/500',
    'Gotya'
  ];

  customOptions: OwlOptions = {
    loop: true,
    autoplay: true,
    dots: true,
    nav: true,
    items: 1,
  };
courses = [
  { title: 'Beginner Stock Market', description: 'Learn basics, demat, IPOs, and more.' },
  { title: 'Technical Analysis', description: 'Chart reading, indicators, price action.' },
  { title: 'Advanced Trading', description: 'Options, strategies, psychology.' },
];
  @HostListener('window:scroll', [])
  onScroll(): void {
    const elements = document.querySelectorAll('.animate-on-scroll');
  elements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top <= window.innerHeight - 100) {
      el.classList.add('visible');
    }
  });
    const sections = ['home', 'about', 'course'];
    for (let section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const top = element.getBoundingClientRect().top;
        if (top <= 150 && top + element.offsetHeight > 150) {
          this.currentSection = section;
          break;
        }
      }
    }
  }

}
