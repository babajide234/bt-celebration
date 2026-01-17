
export interface Milestone {
  id: string;
  quarter: string;
  title: string;
  description: string;
  icon: string;
  featured?: boolean;
}

export interface GuestbookMessage {
  id: string;
  name: string;
  message: string;
  avatar: string;
  isAiGenerated?: boolean;
  relationship?: string;
  created_at?: string;
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  size: 'normal' | 'large';
}
