import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Woodward Studio',
  tagline: 'Agentic ops engineering, AI solutions architecture, and modern full-stack systems.',
  favicon: 'icon.png',

  // Set the production url of your site here
  url: 'https://docs.woodwardwebdev.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'WoodwardStudio', // Usually your GitHub org/user name.
  projectName: 'woodwardwebdev-docs', // Usually your repo name.

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  plugins: [
    [
      'docusaurus-plugin-dotenv',
      {
        path: './.env', // path to your environment variables file
        safe: false, // load `.env.example` if `safe` is true
        systemvars: false, // load system variables (useful for CI purposes)
        silent: false, // suppress warnings
        expand: false, // allow variable expansion
      }
    ]
  ],
  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://gitea.woodwardwebdev.com/woodwardwebdev/docs.git',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://blog.woodwardwebdev.com/woodwardwebdev-docs.git',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'icon.png',
    navbar: {
      title: 'Woodward Studio',
      logo: {
        alt: 'Woodward Studio Logo',
        src: 'icon.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Docs',
        },
        {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/loveliiivelaugh/woodward-studio-docs',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Getting Started',
              to: '/docs/getting-started',
            },
            {
              label: 'Introduction',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Work',
          items: [
            {
              label: 'Blog',
              href: 'https://blog.woodwardwebdev.com',
            },
            {
              label: 'Main Site',
              href: 'https://woodward.studio',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/loveliiivelaugh/woodward-studio-docs',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Woodward Studio, Inc.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
