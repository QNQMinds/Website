import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cources-page',
  standalone: true,
  imports: [],
  templateUrl: './cources-page.component.html',
  styleUrl: './cources-page.component.scss'
})
export class CourcesPageComponent {
  constructor(private router: Router) {

  }
  register() {
    this.router.navigateByUrl('register')
  }

  toggleLearnSection() {
    const content = document.getElementById("learnContent");
    const toggleBtn = document.getElementById("toggleBtn");
    const fade = document.getElementById("fadeEffect");

    // TypeScript null checks
    if (content && toggleBtn && fade) {
      content.classList.toggle("expanded");

      if (content.classList.contains("expanded")) {
        toggleBtn.innerText = "Show Less";
        console.log(toggleBtn.innerText, "toggleBtn.innerText")
        fade.style.display = "none";
      } else {
        toggleBtn.innerText = "Show More";
        fade.style.display = "block";
      }
    }
  }

  toggleLearnSectionCourse3() {
    const content = document.getElementById("learnContentCourse3");
    const toggleBtn = document.getElementById("toggleBtnCourse3");
    const fade = document.getElementById("fadeEffectCourse3");

    // TypeScript null checks
    if (content && toggleBtn && fade) {
      content.classList.toggle("expanded");

      if (content.classList.contains("expanded")) {
        toggleBtn.innerText = "Show Less";
        console.log(toggleBtn.innerText, "toggleBtn.innerText")
        fade.style.display = "none";
      } else {
        toggleBtn.innerText = "Show More";
        fade.style.display = "block";
      }
    }
  }
}
