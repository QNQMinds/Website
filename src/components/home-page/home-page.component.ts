import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { AboutComponent } from '../about/about.component';
import { CourcesPageComponent } from '../cources-page/cources-page.component';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { HeaderComponent } from '../../layouts/header/header.component';
import { TestimonialsComponent } from '../testimonials/testimonials.component';
import { FooterComponent } from '../../layouts/footer/footer.component';
import { ContactUsComponent } from '../contact-us/contact-us.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [AboutComponent,CourcesPageComponent,CarouselModule,HeaderComponent,TestimonialsComponent,FooterComponent,ContactUsComponent,FooterComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {
  currentSection = 'home';
  

   customOptions: OwlOptions = {
    loop: true,
    margin: 15,
    autoplay: true,
    autoplayTimeout: 3000,
    dots: true,
    nav: false,
    items: 1,
    responsive: {
      0: { items: 1 }
    }
  };
  testimonials = [
    {
      image: '../../assets/images/1.png',
      text: 'Live Market Trading'
    },
    {
      image: '../../assets/images/2.png',
      text: 'We are Real Traders'
    },
    {
      image: '../../assets/images/3.png',
      text: '1 TO 1 Mentorship'
    }
  ];


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
    const sections = ['home', 'about', 'course','contact-us','testimonial'];
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

  scroll(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
