import { Component } from '@angular/core';
import { SiteConfigService } from './core/services/site-config.service';
import { CarouselSectionComponent } from './features/carousel-section/carousel-section.component';
import { HeroSectionComponent } from './features/hero-section/hero-section.component';
import { HighlightsSectionComponent } from './features/highlights-section/highlights-section.component';
import { WhoAreWeSectionComponent } from './features/who-are-we-section/who-are-we-section.component';
import { FooterComponent } from './shared/footer/footer.component';
import { TopbarComponent } from './shared/topbar/topbar.component';

@Component({
  selector: 'app-root',
  imports: [
    TopbarComponent,
    HeroSectionComponent,
    CarouselSectionComponent,
    WhoAreWeSectionComponent,
    HighlightsSectionComponent,
    FooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  protected readonly config;
  protected readonly currentYear = new Date().getFullYear();

  constructor(private readonly siteConfigService: SiteConfigService) {
    this.config = this.siteConfigService.getConfig();
  }
}
