import { Component, Input } from '@angular/core';
import { NavigationItem } from '../../core/models/site-config.model';

@Component({
  selector: 'app-topbar',
  standalone: true,
  templateUrl: './topbar.component.html',
  styleUrl: './topbar.component.scss'
})
export class TopbarComponent {
  @Input({ required: true }) logo = '';
  @Input({ required: true }) logoAlt = '';
  @Input({ required: true }) businessName = '';
  @Input({ required: true }) navigation: NavigationItem[] = [];
}
