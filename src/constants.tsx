
import { Milestone, GuestbookMessage, GalleryImage } from './types';

export const MILESTONES: Milestone[] = [
  {
    id: '1',
    quarter: 'Quarter 1',
    title: 'Leadership Growth',
    description: 'Began a focused transition toward senior-level development by strengthening full-stack expertise, improving technical leadership, and intentionally closing gaps required to earn the Senior Developer title.',
    icon: 'trending_up'
  },
  {
    id: '2',
    quarter: 'Quarter 2',
    title: 'Global Experience (Mentally)',
    description: 'Did not travel abroad, but explored multiple countries through YouTube, Twitter threads, and Google Maps. Passport remains untouched, mindset expanded.',
    icon: 'public',
    featured: true
  },
  {
    id: '3',
    quarter: 'Quarter 3',
    title: 'Health & Discipline',
    description: 'Reached a major fitness milestone by completing my first half-marathon, reinforcing consistency, discipline, and overall well-being.',
    icon: 'fitness_center'
  },
  {
    id: '4',
    quarter: 'Quarter 4',
    title: 'Personal Growth & Reflection',
    description: 'Focused on self-improvement, continuous learning, and setting a clearer long-term vision while strengthening personal and professional relationships.',
    icon: 'self_improvement'
  }
];


export const INITIAL_MESSAGES: GuestbookMessage[] = [
  {
    id: 'm1',
    name: 'Chidi Okoro',
    message: '"Happy Birthday Babajide! Your drive and kindness are an inspiration to all of us. Here\'s to another incredible year!"',
    relationship: 'Colleague',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCTatagEZxLmUsAj0ntxqhzm6UnwkPl0QiKxFJ6mDus2HrV_CciuaaRUhHWoo3ThxdyP-unfAiAH72x95U01XXG9GJYn6bFQ6LXU_PDUjI1bGtZ5hl4iCCyBFCfyTYwInPJhsSfqlDG-NVAKi0KBpFsK3mICJ0teL5rluNKcelpS_Ct3GyP97ADtyXHOkuxyTHNP33h1aepse1A38OySnq2EtvD_4Mzd8P7JiBB3mmVucFEjT0mBmnBTVVYin9bRQjE2wGgsgaqO9o'
  },
  {
    id: 'm2',
    name: 'Sarah Williams',
    message: '"Keep shining bright, BT! The sky is just the beginning for you. Cheers to more growth and happiness."',
    relationship: 'Friend',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAWyvMGQqDlKZq5opZv4hAKX32wsavVI__1IKI1bqYrgJpf8CFZlwT95RzKha7kDbMsfO6Et4ZVvWBLq6lKqIwldkJuQKqVP8IgzxfAWG9LN3bdx8yYTKhw0tJyQYFt0YM5n48TY81-z6Jp7xxDyTZxc66kNKf3nPXTNcatUB34tRRwzE9POLV6MTx2wyMoc8afQn8kp94uEq-2tNS6gpftYsvcs4OVVlfVdxTn3h-162bMgElA5LuuezkC0Fo5InTYPoRNDsSCLP0'
  }
];

export const GALLERY_IMAGES: GalleryImage[] = [
  {
    id: 'g1',
    src: '/images/gallery-1.jpg',
    alt: 'Out and About',
    size: 'large'
  },
  {
    id: 'g2',
    src: '/images/gallery-2.jpg',
    alt: 'Work & Focus',
    size: 'normal'
  },
  {
    id: 'g3',
    src: '/images/gallery-3.jpg',
    alt: 'Beach Vibes',
    size: 'normal'
  },
  {
    id: 'g4',
    src: '/images/gallery-4.jpg',
    alt: 'Shared Smiles',
    size: 'large'
  },
  {
    id: 'g5',
    src: '/images/gallery-5.jpg',
    alt: 'NYSC',
    size: 'normal'
  }
];
