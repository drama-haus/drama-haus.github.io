// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import { ion } from "starlight-ion-theme";

// https://astro.build/config
export default defineConfig({
  // Get your repository name from your GitHub URL path
  base: '/docs',
  site: 'https://drama-haus.github.io',
  integrations: [
    starlight({
      title: "hypkg",
      logo: {
        light: "./src/assets/drama.svg",
        dark: "./src/assets/drama-dark.svg",
      },
      favicon: "/assets/drama.svg",
      customCss: ["./src/styles/custom.css"],
      social: {
      },
      sidebar: [
        { label: "quick start", slug: "index" },
        {
          label: "mods",
          collapsed: true,
          items: [
            { label: "solana", slug: "hypkg/solana" },
            { label: "evm", slug: "hypkg/evm" },
            // { label: "camera lock", slug: "hypkg/cameralock" },
          ],
        },
      ],
      plugins: [ion()],
    }),
  ],
});
