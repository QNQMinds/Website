import { Component } from '@angular/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CarouselModule],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.scss'
})
export class TestimonialsComponent {
  isPopupOpen = false;
  selectedImage: string = '';


   customOptions: OwlOptions = {
    loop: true,
    margin: 15,
    autoplay: true,
    autoplayTimeout: 3000,
    dots: true,
    nav: false,
    responsive: {
      0: { items: 1 },
      600: { items: 2 },
      1000: { items: 3 },
      1200: { items: 4 }
    }
  };
  testimonials = [
    {
      image: '../../assets/images/download.png',
      name: 'Rahul S.',
      text: 'The mentorship here is amazing! Live sessions cleared all my doubts.'
    },
    {
      image: '../../assets/images/download.png',
      name: 'Priya K.',
      text: 'Practical learning and lifetime support make it the best choice!'
    },
    {
      image: '../../assets/images/download.png',
      name: 'Ankit M.',
      text: 'Certified trainers with real-world knowledge. Highly recommended.'
    },
    {
      image: '../../assets/images/download.png',
      name: 'Sneha P.',
      text: 'Loved the one-to-one mentorship and doubt clearing sessions.'
    }
  ];

  openPopup(image: string) {
    this.selectedImage = image;
    this.isPopupOpen = true;
  }

  closePopup() {
    this.isPopupOpen = false;
    this.selectedImage = '';
  }
}
