import { CommonModule, isPlatformBrowser } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { OlaMaps } from 'olamaps-web-sdk';


@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss'
})
export class ContactUsComponent {
  email: any = 'qnqmind@gmail.com';
  apiUrl = 'https://api.qnqminds.com/api/enquiry/addenquiry';
  olaMaps: any;
  mapInstance: any;
  contactForm!: FormGroup;
  loader:boolean = false;
  lat = 18.6062796; // Latitude for the marker
  lng = 73.7599692; // Longitude for the marker

  // Alert properties
  type: 'success' | 'error' = 'success';
  alertVisible = false;
  alertTitle = '';
  alertMessage = '';
  alertType: 'success' | 'error' = 'success';
  icon = '📈';

  constructor(@Inject(PLATFORM_ID) private platformId: Object, private fb:FormBuilder, private http: HttpClient) { }

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      mobile: [
        '',
        [Validators.required, Validators.pattern('^[0-9]{10}$')]
      ],
      message: ['', Validators.required]
    });
  }

  async ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      try {
        const module = await import('olamaps-web-sdk');
        const { OlaMaps } = module;

        // Initialize with your API key
        this.olaMaps = new OlaMaps({ apiKey: '8dvMeiwTIUbmRzfTRpQc071v4oQsZsrTxd4zBmiJ' });

        // Render map using `init`, not accessing `.Map`
        this.mapInstance = this.olaMaps.init({
          container: 'ola-map',
          style:
            'https://api.olamaps.io/tiles/vector/v1/styles/default-light-standard/style.json',
          center: [this.lng, this.lat], // [lng, lat]
          zoom: 12
        });

        // Add a marker
        this.olaMaps
          .addMarker({ offset: [0, 6], anchor: 'bottom' })
          .setLngLat([this.lng, this.lat])
          .addTo(this.mapInstance);

        // Add click event on the map container
        const mapContainer = document.getElementById('ola-map');
        if (mapContainer) {
          mapContainer.style.cursor = 'pointer';
          mapContainer.addEventListener('click', () => {
            window.open(`https://www.google.com/maps?q=${this.lat},${this.lng}`, '_blank');
          });
        }

      } catch (err) {
        console.error('Error loading Ola Maps SDK:', err);
      }
    }
  }

   onSubmit(): void {
    if (this.contactForm.valid) {
      const formData = this.contactForm.value;
      this.loader = true;
      this.http.post(this.apiUrl, formData).subscribe({
        next: () => {
          this.alertTitle = 'Submission Successful';
          this.alertMessage = 'Your enquiry has been successfully submitted!';
          this.alertType = 'success';
          this.alertVisible = true;
          this.contactForm.reset();
          this.loader = false;  
        },
        error: () => {
          this.alertTitle = 'Submission Failed';
          this.alertMessage = 'Please try again later.';
          this.alertType = 'error';
          this.icon = '📉';
          this.alertVisible = true;
          this.loader = false;  
        }
      });
    } else {
      this.contactForm.markAllAsTouched();
    }
  }

  closeAlert() {
    this.alertVisible = false;
  }

}
