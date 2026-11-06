import type { BlogPost } from '@/lib/blog/types';
import { POST_ATLAS_PRO } from '@/lib/blog/post-atlas-pro';
import { POST_KING365 } from '@/lib/blog/post-king365';
import { POST_IRON_TV_PRO } from '@/lib/blog/post-iron-tv-pro';
import { POST_ALIEXPRESS } from '@/lib/blog/post-aliexpress';

export const POSTS_LIST: BlogPost[] = [
  POST_ATLAS_PRO,
  POST_KING365,
  POST_IRON_TV_PRO,
  POST_ALIEXPRESS,
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return POSTS_LIST.find((post) => post.slug === slug);
}

