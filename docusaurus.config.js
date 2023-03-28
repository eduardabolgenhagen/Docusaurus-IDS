const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const npm = process.env.npm_execpath;

/** @type {import('@docusaurus/types').Config} */npm
const config = {
  title: 'WEG IDS',
  tagline: 'WEG - IT Demand System',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/ids.svg',
  projectName: 'IDS',

  i18n: {
    defaultLocale: 'pt',
    locales: ['pt']
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        blog: {
          blogSidebarTitle: "Objetivo",
          showReadingTime: false,
          editUrl: undefined,
        },
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: undefined,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'WEG IDS',
        logo: {
          alt: 'My Site Logo',
          src: 'img/ids.svg',
        },
        items: [
          {
            to: '/blog',
            label: 'Objetivo',
            position: 'left',
          },
          {
            to: '/docs/tutorial',
            position: 'left',
            label: 'Tutorial',
          }
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Itens',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/tutorial',
              },
              {
                label: 'Objetivo',
                to: '/blog',
              }
            ],
          },
          {
            title: 'Desenvolvedores',
            items: [
              {
                label: 'Ester Girelli',
                to: 'https://github.com/Esterzinha12'
              },
              {
                label: 'Eduarda Bolgenhagen De Campos',
                to: 'https://github.com/eduardabolgenhagen'
              },
              {
                label: 'Leonardo Heitor Poglia',
                to: 'https://github.com/leopoglia'
              },
              {
                label: 'Vytor Augusto Rosa',
                to: 'https://github.com/Vytor-Rosa'
              }
            ],
          },
        ],
        copyright: `WEG IDS © ${new Date().getFullYear()}`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
