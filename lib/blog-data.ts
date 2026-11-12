import type { BlogPost } from '@/lib/blog/types';
import { POST_MEILLEUR_ABONNEMENT } from '@/lib/blog/post-meilleur-abonnement';
import { POST_COMPARATIF_SERVEURS } from '@/lib/blog/post-comparatif-serveurs';
import { POST_ALIEXPRESS } from '@/lib/blog/post-aliexpress';

export const POSTS_LIST: BlogPost[] = [
  POST_MEILLEUR_ABONNEMENT,
  POST_COMPARATIF_SERVEURS,
  POST_ALIEXPRESS,
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return POSTS_LIST.find((post) => post.slug === slug);
}

