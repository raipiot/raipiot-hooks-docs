import { defineConfig } from 'astro/config';
import mdx from "@astrojs/mdx";
import Icons from "unplugin-icons/vite";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  integrations: [mdx(), tailwind({
    applyBaseStyles: false
  }), react()],
  vite: {
    plugins: [Icons({
      compiler: "jsx",
      jsx: "react",
      autoInstall: true
    })]
  },
  output: "server",
  adapter: netlify()
});