module.exports = {
  siteMetadata: {
    title: 'Keyboard Tester',
    author: {
      name: `Karson`,
      summary: `a front end dev trying to make the web a little better place while earning a living.`,
    },
    description: `Test out your keyboard`,
    siteUrl: `https://keytest.krsn.xyz`,
  },
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-gatsby-cloud',
    'gatsby-plugin-image',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Keyboard Tester`,
        short_name: `Keyboard Tester`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#d3d3d3`,
        display: `fullscreen`,
        icon: `static/favicons/icon.png`,
      },
    },
  ],
};
