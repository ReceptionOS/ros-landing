require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `ReceptionOS`,
    author: "ReceptionOS",
    author: {
      name: `ReceptionOS`,
      summary: `ReceptionOS`,
    },
    description: `ReceptionOS`,
    siteUrl: `http://ReceptionOS.pl`,
  },
  plugins: [
    // {
    //   resolve: `gatsby-source-contentful`,
    //   options: {
    //     spaceId: process.env.SPACE_ID,
    //     accessToken: process.env.ACCESS_TOKEN,
    //   },
    // },
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `locales`,
        path: `${__dirname}/locales`,
      },
    },
    {
      resolve: `gatsby-plugin-react-i18next`,
      options: {
        localeJsonSourceName: `locales`,
        languages: [`pl`, `en`],
        defaultLanguage: `pl`,
        siteUrl: `http://ReceptionOS.pl`,
        redirect: false,
        pages: [
          {
            matchPath: "/dev-404-page",
            languages: ["pl"],
          },
        ],
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 630,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `ReceptionOS`,
        short_name: `ReceptionOS`,
        start_url: `/`,
        background_color: `#faf0f9`,
        display: `standalone`,
        icon: `src/images/ros-icon.png`,
      },
    },
  ],
}
