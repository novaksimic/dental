'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useMemo, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';

import { BLOG_CONFIG } from '../blog/blog-config';

interface Props {
  activeId: string;
  setActiveId: (id: string) => void;
  recentPosts: string[];
}

export default function SidePanelActivity({
  activeId,
  setActiveId,
  recentPosts
}: Props) {
  const t = useTranslations('blog-content');
  const pathname = usePathname();

  /**
   * Sync active post with URL (VERY IMPORTANT)
   */
  useEffect(() => {
    const slug = pathname.split('/').pop();
    if (slug) setActiveId(slug);
  }, [pathname, setActiveId]);

  /**
   * Map all blog posts by slug
   */
  const postsMap = useMemo(() => {
    return new Map(
      Object.values(BLOG_CONFIG).map((post) => [post.slug, post])
    );
  }, []);

  /**
   * Resolve recent posts safely
   */
  const recent = useMemo(() => {
    return recentPosts
      .map((slug) => postsMap.get(slug))
      .filter(Boolean);
  }, [recentPosts, postsMap]);

  return (
    <motion.aside
      initial={{ opacity: 0, x: 24 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4 }}
      className="w-full md:sticky md:top-36 md:h-fit md:self-start"
    >
      <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-lg">

        {/* INTRO */}
        <div>
          <h3 className="mb-2 text-lg font-semibold text-slate-800">
            {t('sidebar.title')}
          </h3>

          <p className="text-sm leading-relaxed text-gray-600">
            {t('sidebar.description')}
          </p>
        </div>

        <hr className="my-5 border-gray-200" />

        {/* CATEGORIES */}
        <div>
          <h3 className="mb-3 text-lg font-semibold text-slate-800">
            {t('sidebar.categories')}
          </h3>

          <div className="flex flex-col gap-3">
            {Object.values(BLOG_CONFIG).map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                onClick={() => setActiveId(post.slug)}
                className={`transition-all hover:translate-x-1 ${
                  activeId === post.slug
                    ? 'font-semibold text-green-700'
                    : 'text-gray-600 hover:text-green-700'
                }`}
              >
                {t(`categories.${post.slug}.title`)}
              </Link>
            ))}
          </div>
        </div>

        {/* RECENT POSTS */}
        {recent.length > 0 && (
          <>
            <hr className="my-5 border-gray-200" />

            <div>
              <h3 className="mb-3 text-lg font-semibold text-slate-800">
                {t('sidebar.recent')}
              </h3>

              <ul className="space-y-3">
                {recent.map((post) => (
                  <li key={post!.slug}>
                    <Link
                      href={`/blog/${post!.slug}`}
                      onClick={() => setActiveId(post!.slug)}
                      className={`block transition-all hover:translate-x-1 ${
                        activeId === post!.slug
                          ? 'font-semibold text-green-700'
                          : 'text-gray-600 hover:text-green-700'
                      }`}
                    >
                      {t(`categories.${post!.slug}.title`)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </>
        )}
      </div>
    </motion.aside>
  );
}