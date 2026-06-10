import { Component, Input } from '@angular/core';
import { MediaPhoto } from '../../core/models/site-config.model';

@Component({
  selector: 'app-carousel-section',
  standalone: true,
  templateUrl: './carousel-section.component.html',
  styleUrl: './carousel-section.component.scss'
})
export class CarouselSectionComponent {
  @Input({ required: true }) photos: MediaPhoto[] = [];
}
