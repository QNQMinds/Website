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
      title: 'NISM-Certified Trainers',
      description: 'Our instructors are certified by NISM and bring hands-on trading experience into every session.'
    },
    {
      icon: 'fa fa-users',
      title: '100+ Students Trained',
      description: 'We’ve trained over 100 students from beginner to advanced level, covering both theory and market application.'
    },
    {
      icon: 'fa fa-user-tie',
      title: '50+ One-on-One Mentorships',
      description: 'More than 50 students have received dedicated 1-on-1 mentoring.'
    },
    {
      icon: 'fa fa-comment-dots',
      title: 'Real Student Testimonials',
      description: 'We proudly share genuine video reviews from our students.'
    },
    {
      icon: 'fa fa-tasks',
      title: 'Assignments & Practical Exercises',
      description: 'Every module includes market-based exercises.'
    },
    {
      icon: 'fa fa-broadcast-tower',
      title: 'Live Interactive Sessions',
      description: 'Live sessions for Q&A and real-time market analysis.'
    },
    {
      icon: 'fa fa-life-ring',
      title: 'Lifetime Support',
      description: 'Lifetime access to guidance and community support.'
    },
    {
      icon: 'fa fa-brain',
      title: 'Mindset + Market Mastery',
      description: 'We train students in discipline, patience, and confidence.'
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