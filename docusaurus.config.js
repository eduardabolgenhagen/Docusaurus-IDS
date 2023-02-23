const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'GEDESTI',
  tagline: 'Gerenciamento De Demandas De Sistemas De TI',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/gedesti.svg',
  projectName: 'GEDESTI',

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
        title: 'GEDESTI',
        logo: {
          alt: 'My Site Logo',
          src: 'img/gedesti.svg',
        },
        items: [
          {
            to: '/blog',
            label: 'Objetivo',
            position: 'left',
          },
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Tutorial',
          },
          {
            to: '/docs/documentation',
            position: 'left',
            label: 'Documentação',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Documentação',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
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
        copyright: `GEDESTI WEG © ${new Date().getFullYear()} Gedesti`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
