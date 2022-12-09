import rss from "@astrojs/rss";

export const get = () =>
  rss({
    title: "Owen Griffiths' Blog",
    description: "This is Owen Griffiths' blog ",
    site: import.meta.env.SITE,
    items: import.meta.glob("./posts/**.mdx"),
    stylesheet: "/style.xsl",
  });
