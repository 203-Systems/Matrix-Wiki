import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: '203 Systems',
  favicon: 'img/favicon.png',

  // Set the production url of your site here
  url: 'https://matrix.203.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: '203-Systems', // Usually your GitHub org/user name.
  projectName: 'Matrix-Wiki', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh-Hans'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/203-Systems/Matrix-Wiki/tree/main/',
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
            'https://github.com/203-Systems/Matrix-Wiki/tree/main/',
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
    navbar: {
      // title: '203 Systems',
      logo: {
        alt: '203 Systems',
        src: 'img/203.svg',
        srcDark: 'img/203dark.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'mystrixSidebar',
          position: 'left',
          label: 'Mystrix',
        },
        {
          type: 'docSidebar',
          sidebarId: 'developerSidebar',
          position: 'left',
          label: 'Developer',
        },
        {
          type: 'docSidebar',
          sidebarId: 'resourcesSidebar',
          position: 'left',
          label: 'Resources',
        },
        // {to: '/blog', label: 'Updates', position: 'left'},
        {
          type: 'docsVersionDropdown',
          position: 'right',
        },
        // Disable Chinese for now
        // {
        //   type: 'localeDropdown',
        //   position: 'right',
        // },
        {
          href: 'https://github.com/203-Systems',
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
              label: 'Mystrix',
              to: 'docs/Mystrix/GettingStarted',
            },
            {
              label: 'Developer',
              to: 'docs/Developer/MatrixOSBasic',
            },
            {
              label: 'Resources',
              to: 'docs/Resources/MystrixHardwareDesigns'
            }
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.gg/rRVCBHHPfw',
            },
            {
              label: 'Twitter / X',
              href: 'https://twitter.com/203Systems',
            },
            {
              label: 'Instagram',
              href: 'https://instagram.com/203null',
            },
            {
              label: 'Youtube',
              href: 'https://www.youtube.com/channel/UCl9tL-r4NzvGl-EIeVYZZ-g',
            },
            {
              label: 'Facebook',
              href: 'https://facebook.com/203Systems',
            }
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: '203 Systems',
              to: 'https://203.io',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/203-Systems',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} 203 Systems`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
