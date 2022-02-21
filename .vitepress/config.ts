import { getPosts, getPostLength } from "./theme/serverUtils";

async function config() {
  return {
    lang: "zh-TW",
    title: "Loren Li",
    description: "Loren's 胡搞瞎搞 blog",
    base: '/blog/',
    head: [
      [
        "link",
        {
          rel: "icon",
          // type: 'image/png',
          type: "image/jpeg",
          href: "/avator.jpg",
        },
      ],
      [
        "meta",
        {
          name: "author",
          content: "Loren",
        },
      ],
      [
        "meta",
        {
          property: "og:title",
          content: "Home",
        },
      ],
      [
        "meta",
        {
          property: "og:description",
          content: "Loren's 胡搞瞎搞 blog",
        },
      ],
    ],
    themeConfig: {
      logo: "/tea.svg",
      docsDir: "/",
      // docsBranch: "master",
      lastUpdated: false,
      posts: await getPosts(),
      pageSize: 7, //几个为一页
      postLength: await getPostLength(), //博客有几篇

      //       algolia: {
      //         apiKey: "90a0bae6ff7307fb76896cbe2f975b0c",
      //         indexName: "clark-cui-docs",
      //       },

      nav: [
        {
          text: "🏡Home",
          link: "/",
        },
        {
          text: "🔖Tags",
          link: "/tags",
        },
        {
          text: "📃Archives",
          link: "/archives",
        },
      ],

      // sidebar: {
      //   "./posts/": false,
      //   "/": false,
      // },
      sidebar: false,
    },
  };
}
export default config();
