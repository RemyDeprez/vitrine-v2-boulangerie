import { Injectable } from '@angular/core';
import { siteConfigData } from '../config/site-config.data';
import { SiteConfig } from '../models/site-config.model';

@Injectable({
  providedIn: 'root'
})
export class SiteConfigService {
  getConfig(): SiteConfig {
    return siteConfigData;
  }
}
