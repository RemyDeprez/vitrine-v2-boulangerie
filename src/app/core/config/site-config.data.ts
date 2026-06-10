import { SiteConfig } from '../models/site-config.model';

export const siteConfigData: SiteConfig = {
  branding: {
    logo: 'assets/logo-boulangerie.svg',
    logoAlt: 'Logo Maison Dorat',
    colors: {
      primary: '#9f4f1f',
      secondary: '#f0d7a0'
    }
  },
  business: {
    name: 'Maison Dorat',
    tagline: 'Artisan boulanger-patissier',
    heroTitle: 'Des pains de caractere et des douceurs de saison.',
    heroDescription:
      'Farines francaises, fermentation lente et gestes artisanaux pour une vitrine gourmande differente chaque semaine.',
    whoAreWe:
      'Nous sommes une equipe d\'artisans qui melange tradition boulangere et creations patissieres contemporaines. Chaque recette est cuite sur place, du levain aux finitions en vitrine.',
    ctaPrimary: { label: 'Commander', href: '#contact' },
    ctaSecondary: { label: 'Voir la galerie', href: '#galerie' },
    address: '18 rue des Halles, 31000 Toulouse',
    phone: '+33 5 61 00 00 00',
    email: 'bonjour@maisondorat.fr',
    openingHours: 'du mardi au dimanche - 06h30 a 19h30'
  },
  navigation: [
    { label: 'Accueil', anchor: '#accueil' },
    { label: 'Galerie', anchor: '#galerie' },
    { label: 'Atelier', anchor: '#atelier' },
    { label: 'Contact', anchor: '#contact' }
  ],
  media: {
    carouselPhotos: [
      {
        src: 'https://images.unsplash.com/photo-1549931319-a545dcf3bc73?auto=format&fit=crop&w=1200&q=80',
        alt: 'Baguettes traditionnelles sur un plan de travail',
        caption: 'Baguettes tradition'
      },
      {
        src: 'https://images.unsplash.com/photo-1483695028939-5bb13f8648b0?auto=format&fit=crop&w=1200&q=80',
        alt: 'Viennoiseries dorees sortant du four',
        caption: 'Viennoiseries pur beurre'
      },
      {
        src: 'https://images.unsplash.com/photo-1486427944299-d1955d23e34d?auto=format&fit=crop&w=1200&q=80',
        alt: 'Eclairs et entremets en vitrine',
        caption: 'Patisseries signatures'
      },
      {
        src: 'https://images.unsplash.com/photo-1517433670267-08bbd4be890f?auto=format&fit=crop&w=1200&q=80',
        alt: 'Pain de campagne tranche sur table en bois',
        caption: 'Pains de longue fermentation'
      }
    ],
    whoAreWeBanner: {
      src: 'https://images.unsplash.com/photo-1608198093002-ad4e005484ec?auto=format&fit=crop&w=1400&q=80',
      alt: 'Equipe de boulangerie en plein faconnage'
    }
  },
  highlights: [
    {
      title: 'Pains au levain naturel',
      description: 'Petrissage lent, pointage long et cuisson sur sole pour une croute fine et un coeur moelleux.'
    },
    {
      title: 'Patisseries de saison',
      description: 'Collection changeante selon les fruits, avec des textures equilibrees et une sucrosite maitrisee.'
    },
    {
      title: 'Traiteur evenementiel',
      description: 'Petits fours sales, desserts de reception et buffets sucrants pour mariages et entreprises.'
    }
  ]
};
