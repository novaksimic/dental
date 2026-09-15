'use client';

import { notFound } from 'next/navigation';
import { use } from 'react';
import { useTranslations } from 'next-intl';

import BlogArticle from '../BlogArticle';
import { BLOG_CONFIG } from '../blog-config';
import { FAQ, Section } from '../types';

type Props = {
  params: Promise<{ slug: string }>;
};

export default function Page({ params }: Props) {
  const { slug } = use(params);

  const config = BLOG_CONFIG[slug];

  if (!config) {
    notFound();
  }

  const t = useTranslations(
    `blog-content.articles.${config.translationKey}`
  );

  const sections: Section[] = Object.values(t.raw('sections') ?? {});
  const faq: FAQ[] = Object.values(t.raw('faq') ?? {});

const article = {
    meta: {
      slug: config.slug,
      image: config.image,
      date: config.date,
      seo: t.raw("seo"),
    },

    content: {
      title: t("title"),
      intro: t("intro"),

      breadcrumbs: t.raw("breadcrumbs"),

      sections,
      faq,
      faqTitle: t("faqTitle"),

      conclusionTitle: t("conclusionTitle"),
      conclusion: t("conclusion"),
    },
  };

  return <BlogArticle article={article} slug={slug} />;
}