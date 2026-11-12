export interface ComparisonRow {
  criterion: string;
  competitor: string;
  smarters: string;
}

export type BlogBlock =
  | { kind: 'p'; text: string }
  | { kind: 'h3'; text: string }
  | { kind: 'ul'; items: string[] }
  | { kind: 'ol'; items: string[] }
  | { kind: 'table' };

export interface BlogSection {
  h2: string;
  blocks: BlogBlock[];
}

export interface BlogFaq {
  q: string;
  a: string;
}

export type BlogCategory = 'Comparatif Serveurs' | 'Anti-Arnaque';

export interface BlogImage {
  src: string;
  alt: string;
  caption: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  primaryKw: string;
  category: BlogCategory;
  datePublished: string;
  dateModified: string;
  dateFormatted: string;
  dateModifiedFormatted: string;
  readTime: string;
  excerpt: string;
  directAnswer: string;
  keyTakeaways: string[];
  image?: BlogImage;
  comparisonRows: ComparisonRow[];
  sections: BlogSection[];
  faqs: BlogFaq[];
}

