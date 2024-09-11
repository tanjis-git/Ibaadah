import type { Metadata, Site, Socials } from "@types";

export const SITE: Site = {
  TITLE: "Ibaadah",
  DESCRIPTION: "Ibaadah is designed to help muslims worship Allah.",
  EMAIL: "sofianetanji1@proton.me",
  NUM_POSTS_ON_HOMEPAGE: 5,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "Worship Allah",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "A collection of articles to better understand the website.",
};

export const PROJECTS: Metadata = {
  TITLE: "Widgets",
  DESCRIPTION:
    "A collection of ibaadah widgets.",
};

export const SOCIALS: Socials = [
  {
    NAME: "X (formerly Twitter)",
    HREF: "https://twitter.com/",
  },
  {
    NAME: "GitHub",
    HREF: "https://github.com/tanjis-git",
  },
  {
    NAME: "LinkedIn",
    HREF: "https://www.linkedin.com/in/",
  },
];
