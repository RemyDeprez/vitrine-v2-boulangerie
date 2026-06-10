import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.scss'
})
export class HeroSectionComponent {
  @Input({ required: true }) tagline = '';
  @Input({ required: true }) heroTitle = '';
  @Input({ required: true }) heroDescription = '';
  @Input({ required: true }) ctaPrimaryLabel = '';
  @Input({ required: true }) ctaPrimaryHref = '';
  @Input({ required: true }) ctaSecondaryLabel = '';
  @Input({ required: true }) ctaSecondaryHref = '';
}
