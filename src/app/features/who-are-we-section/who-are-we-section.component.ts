import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-who-are-we-section',
  standalone: true,
  templateUrl: './who-are-we-section.component.html',
  styleUrl: './who-are-we-section.component.scss'
})
export class WhoAreWeSectionComponent {
  @Input({ required: true }) bannerSrc = '';
  @Input({ required: true }) bannerAlt = '';
  @Input({ required: true }) text = '';
}
