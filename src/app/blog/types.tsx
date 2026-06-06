export interface BlogArticleMeta {
  slug: string;
  image: string;
  date: string;

  seo: {
    metaTitle: string;
    metaDescription: string;
  };
}

export interface BlogArticleContent {
  title: string;
  intro: string;

    breadcrumbs: {
        home: string;
        blog: string;
        current: string;
    };

  sections: {
    heading: string;
    content: string;
  }[];

  faqTitle?: string;
  faq?: {
    question: string;
    answer: string;
  }[];

  conclusionTitle?: string;
  conclusion?: string;
}

export interface Category {
    title: string;
}

export interface Categories {
    implanti: Category;
}

export interface SidePanelInfo {
     title: string,
     description: string,
     categories: string,
     recent: string,
}

export interface BlogArticle {
  meta: BlogArticleMeta;
  content: BlogArticleContent;
}

export interface BlogSidePanel {
    categories: Categories;
    info: SidePanelInfo
}