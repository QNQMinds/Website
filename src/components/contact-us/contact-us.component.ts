import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { OlaMaps } from 'olamaps-web-sdk'

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss'
})
export class ContactUsComponent {

  olaMaps: any;
  mapInstance: any;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

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
          center: [77.61648476788898, 12.931423492103944], // [lng, lat]
          zoom: 12
        });

        // Add a marker
        this.olaMaps
          .addMarker({ offset: [0, 6], anchor: 'bottom' })
          .setLngLat([77.61648476788898, 12.931423492103944])
          .addTo(this.mapInstance);

      } catch (err) {
        console.error('Error loading Ola Maps SDK:', err);
      }
    }
  }
}
