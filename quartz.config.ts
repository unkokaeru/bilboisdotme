import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 * Edited for https://bilbois.me
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "bilbo",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: null,
    locale: "en-GB",
    baseUrl: "bilbois.me",
    ignorePatterns: ["**/private", "templates", ".obsidian"],
    defaultDateType: "modified",
    theme: { // Theme is (or will be) modified to reflect the theme used during creation witin Obsidian
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Schibsted Grotesk", // Font for headers (subject to change)
        body: "Source Sans Pro", // Font for body (subject to change)
        code: "IBM Plex Mono", // Font for code (subject to change)
      },
      colors: {
        lightMode: {
          light: "#faf8f8", // Page background (subject to change)
          lightgray: "#e5e5e5", // Borders (subject to change)
          gray: "#b8b8b8", // Graph links, heavier borders (subject to change)
          darkgray: "#4e4e4e", // Body text (subject to change)
          dark: "#2b2b2b", // Header text and icons (subject to change)
          secondary: "#284b63", // Link colour, current graph nodes (subject to change)
          tertiary: "#84a59d", // Hover states and visited graph nodes (subject to change)
          highlight: "rgba(143, 159, 169, 0.15)", // Internal link background, highlighted text, highlighted lines of code (subject to change)
          textHighlight: "#fff23688", // Markdown highlighted text background (subject to change)
        },
        darkMode: {
          light: "#161618", // Page background (subject to change)
          lightgray: "#393639", // Borders (subject to change)
          gray: "#646464", // Graph links, heavier borders (subject to change)
          darkgray: "#d4d4d4", // Body text (subject to change)
          dark: "#ebebec", // Header text and icons (subject to change)
          secondary: "#7b97aa", // Link colour, current graph nodes (subject to change)
          tertiary: "#84a59d", // Hover states and visited graph nodes (subject to change)
          highlight: "rgba(143, 159, 169, 0.15)", // Internal link background, highlighted text, highlighted lines of code (subject to change)
          textHighlight: "#b3aa0288", // Markdown highlighted text background (subject to change)
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.NotFoundPage(),
      // Comment out CustomOgImages to speed up build time
      Plugin.CustomOgImages(),
    ],
  },
}

export default config
