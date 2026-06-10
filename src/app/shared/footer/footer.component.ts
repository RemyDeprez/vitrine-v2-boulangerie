import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  @Input({ required: true }) businessName = '';
  @Input({ required: true }) address = '';
  @Input({ required: true }) phone = '';
  @Input({ required: true }) email = '';
  @Input({ required: true }) openingHours = '';
  @Input({ required: true }) currentYear = new Date().getFullYear();
}
