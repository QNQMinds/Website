import { AfterViewInit, Component, ElementRef, Inject, PLATFORM_ID, QueryList, ViewChildren } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent implements AfterViewInit {
  features = [
    {
      icon: 'fa fa-check-circle',
      title: ' We Are Real-Time Profitable Traders',
      description: 'We trade every day with consistency. Our experience comes from facing the real ups and downs of the market not just theory. We have follow all required rules to being profitable'
    },
    {
      icon: 'fa fa-check-circle',
      title: 'We Focus on "How to Trade", Not Just "What is Market"',
      description: 'Unlike other classes that just explain what the stock market is, we focus on how to trade practically in the real market.'
    },
    {
      icon: 'fa fa-check-circle',
      title: 'NISM-Certified Trainers',
      description: 'Our instructors are certified by NISM and bring hands-on trading experience into every session.'
    },
    {
      icon: 'fa fa-broadcast-tower',
      title: 'Live Market Trading with One to One Mentorship',
      description: 'Live sessions for Q&A and real-time market analysis.'
    },
    {
      icon: 'fa fa-life-ring',
      title: 'Lifetime Support',
      description: 'Get unlimited doubt clearing session till you not understand course terms.'
    },
    {
      icon: 'fa fa-brain',
      title: 'Mindset + Market Mastery',
      description: 'Our course is built on real experience, focusing on mindset, core concepts, and training in discipline, patience, and confidence.'
    }
  ];

  @ViewChildren('sectionRef', { read: ElementRef }) sections!: QueryList<ElementRef>;

  ngAfterViewInit() {
  if (typeof window !== 'undefined' && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        } else {
          entry.target.classList.remove('visible');
        }
      });
    }, { threshold: 0.2 });

    this.sections.forEach(section => {
      observer.observe(section.nativeElement);
    });
  } else {
    // Fallback: if IntersectionObserver not available, just show all
    this.sections.forEach(section => {
      section.nativeElement.classList.add('visible');
    });
  }
}

}