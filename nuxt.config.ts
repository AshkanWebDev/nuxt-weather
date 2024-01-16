// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      title: "نمونه اپ آب و هوایی",
      htmlAttrs: {
        dir: "ltr",
        lang: "fa",
      },
      meta: [
        { charset: "utf-8" },
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1, user-scalable=no",
        },
        { hid: "description", name: "description", content: "" },
        { name: "format-detection", content: "telephone=no" },
        { name: "theme-color", content: "#0d244c" },
      ],
      script: [
        // <script src="https://myawesome-lib.js"></script>
        // { src: "https://awesome-lib.js" },
      ],
      link: [
        // <link rel="stylesheet" href="https://myawesome-lib.css">
        { rel: "icon", type: "image/svg", href: "/favicon.svg" },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css?family=Vazirmatn",
        },
        // { rel: "manifest", href: "/manifest.json" },
      ],
      // please note that this is an area that is likely to change
      style: [
        // <style type="text/css">:root { color: red }</style>
        // { children: ":root { color: red }", type: "text/css" },
      ],
    },
  },
  css: ["@/assets/css/reset.css", "@/assets/css/style.css"],
});
