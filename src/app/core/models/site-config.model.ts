export interface NavigationItem {
  label: string;
  anchor: string;
}

export interface MediaPhoto {
  src: string;
  alt: string;
  caption: string;
}

export interface SiteConfig {
  branding: {
    logo: string;
    logoAlt: string;
    colors: {
      primary: string;
      secondary: string;
    };
  };
  business: {
    name: string;
    tagline: string;
    heroTitle: string;
    heroDescription: string;
    whoAreWe: string;
    ctaPrimary: { label: string; href: string };
    ctaSecondary: { label: string; href: string };
    address: string;
    phone: string;
    email: string;
    openingHours: string;
  };
  navigation: NavigationItem[];
  media: {
    carouselPhotos: MediaPhoto[];
    whoAreWeBanner: {
      src: string;
      alt: string;
    };
  };
  highlights: Array<{
    title: string;
    description: string;
  }>;
}
