// @ts-check

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Wormser Linux User Stammtisch',
  tagline: 'Nerdy meetups in Worms',
  url: 'https://wolust.de',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'Wolust',
  projectName: 'wolust.github.io',
  i18n: {
    defaultLocale: 'de',
    locales: ['de']
  },
  presets: [
    [
      'classic',
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js')
        },
        blog: {
          showReadingTime: true
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css')
        }
      })
    ]
  ],
  themeConfig: {
    navbar: {
      title: 'Wolust',
      logo: {
        alt: 'Wolust Logo',
        src: 'img/logo.png'
      },
      items: [
        {to: '/docs/intro', label: 'Docs', position: 'left'},
        {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/Wolust/wolust.github.io',
          label: 'GitHub',
          position: 'right'
        }
      ]
    },
    footer: {
      style: 'dark',
      copyright: `© ${new Date().getFullYear()} Wolust`
    },
    prism: {
      theme: require('prism-react-renderer/themes/dracula')
    }
  }
};

module.exports = config;
