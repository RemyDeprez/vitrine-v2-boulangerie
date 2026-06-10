import { Component, Input } from '@angular/core';

export interface HighlightItem {
  title: string;
  description: string;
}

@Component({
  selector: 'app-highlights-section',
  standalone: true,
  templateUrl: './highlights-section.component.html',
  styleUrl: './highlights-section.component.scss'
})
export class HighlightsSectionComponent {
  @Input({ required: true }) items: HighlightItem[] = [];
}
