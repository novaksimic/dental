export interface BlogSeo {
  metaTitle: string;
  metaDescription: string;
}

export interface BlogConfigItem {
  slug: string;
  image: string;
  date: string;

  translationKey: string;
  sidePanelKey: string;
  sideBarKey: string;

  seo: BlogSeo;
}

export type BlogConfig = Record<string, BlogConfigItem>;

export const BLOG_CONFIG: BlogConfig = {
  implanti: {
    slug: "implanti",
    image: "/images/webp/zubni-implant.webp",
    date: "2026-05-31",

    translationKey: "blogImplanti",
    sidePanelKey: "blogCategories",
    sideBarKey: "blogSidebar",

    seo: {
      metaTitle: "Zubni implanti | Dental House",
      metaDescription: "Cena i procedura"
    }
  },
  karijes: {
    slug: "karijes",
    image: "/images/webp/karijes.webp",
    date: "2026-06-01",

    translationKey: "blogKarijes",
    sidePanelKey: "blogCategories",
    sideBarKey: "blogSidebar",

    seo: {
      metaTitle: "Karijes | Dental House",
      metaDescription: "Cena i procedura"
    }
  },
  ortodoncija: {
    slug: "ortodoncija",
    image: "/images/webp/ortodoncija-blog-img.webp",
    date: "2026-06-01",

    translationKey: "blogOrtodoncija",
    sidePanelKey: "blogCategories",
    sideBarKey: "blogSidebar",

    seo: {
      metaTitle: "Ortodoncija | Dental House",
      metaDescription: "Cena i procedura"
    }
  },
  izbeljivanje: {
    slug: "izbeljivanje",
    image: "/images/webp/beljenje-zuba.webp",
    date: "2026-06-01",

    translationKey: "blogIzbeljivanje",
    sidePanelKey: "blogCategories",
    sideBarKey: "blogSidebar",

    seo: {
      metaTitle: "Izbeljivanje zuba | Dental House",
      metaDescription: "Cena i procedura"
    }
  }
};

