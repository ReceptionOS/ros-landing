require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `receptionOS`,
    author: {
      name: `receptionOS`,
      summary: `receptionOS`,
    },
    description: `Autopilot dla Twojej kliniki stomatologicznej`,
    siteUrl: `https://receptionos.com`,
  },
  plugins: [
    ...(process.env.GOOGLE_ANALYTICS_TRACKING_ID
      ? [
          {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
              trackingId: process.env.GOOGLE_ANALYTICS_TRACKING_ID,
              head: false,
            },
          },
        ]
      : []),
    {
      resolve: `gatsby-plugin-posthog`,
      options: {
        apiKey: process.env.POSTHOG_API_KEY,
        apiHost: "https://eu.i.posthog.com",
        head: true,
        isEnabledDevMode: true,
      },
    },
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: process.env.TAG_MANAGER_ID,
        enableWebVitalsTracking: true,
      },
    },
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
        siteUrl: `https://receptionos.com/`,
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
        short_name: `ros`,
        start_url: `/`,
        background_color: `#faf0f9`,
        display: `standalone`,
        icon: `src/images/ros-icon.png`,
      },
    },
  ],
}
