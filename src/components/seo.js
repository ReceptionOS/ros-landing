import * as React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import { useI18next } from "gatsby-plugin-react-i18next"

const APP_NAME = "receptionOS"
const DEFAULT_OG_IMAGE = "/og-image.jpg"

function Seo({ description, meta = [], title, ogImage }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            siteUrl
            author {
              name
            }
          }
        }
      }
    `
  )

  const { language } = useI18next()
  const metaDescription = description || site.siteMetadata.description
  const defaultTitle = site.siteMetadata?.title
  const siteUrl = site.siteMetadata?.siteUrl

  const metaOgImage = ogImage === undefined ? DEFAULT_OG_IMAGE : ogImage
  const metaTitle = title || defaultTitle || APP_NAME
  const twitterDomain = siteUrl
    ? siteUrl.replace(/^https?:\/\//, "").replace(/\/$/, "")
    : undefined

  return (
    <Helmet
      htmlAttributes={{
        lang: language,
      }}
      title={metaTitle}
      titleTemplate={
        defaultTitle && metaTitle !== defaultTitle
          ? `%s | ${defaultTitle}`
          : undefined
      }
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          name: `author`,
          content: site.siteMetadata.author?.name,
        },
        {
          property: `og:url`,
          content: siteUrl,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:title`,
          content: metaTitle,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:image`,
          content: metaOgImage,
        },
        {
          property: `og:image:width`,
          content: `1200`,
        },
        {
          property: `og:image:height`,
          content: `527`,
        },
        {
          property: `al:ios:url`,
          content: siteUrl,
        },
        {
          property: `al:ios:app_name`,
          content: APP_NAME,
        },
        {
          property: `al:iphone:url`,
          content: siteUrl,
        },
        {
          property: `al:iphone:app_name`,
          content: APP_NAME,
        },
        {
          name: `twitter:card`,
          content: `summary_large_image`,
        },
        {
          property: `twitter:domain`,
          content: twitterDomain,
        },
        {
          property: `twitter:url`,
          content: siteUrl,
        },
        {
          name: `twitter:title`,
          content: metaTitle,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          name: `twitter:image`,
          content: metaOgImage,
        },
      ].concat(meta)}
    >
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="shortcut icon" href="/ros-icon.png" />
      <link rel="apple-touch-icon" href="/ros-icon.png" />

      <script type="application/ld+json">
        {`
      {
        "@context": "https://schema.org",
        "@type": "Organization",
        "url": "https://receptionos.com/",
        "name": "ReceptionOS sp. z o.o.",
        "isAccessibleForFree": true,
        "description": "Automatyzacja rejestracji, przypomnienia SMS, pobieranie przedpłat - pełna kontrola nad grafikiem i wizytami w swojej klinice. Zyskaj spokój i skup się na pacjentach, nie na telefonach.",
        "email": "k@receptionos.com",
        "contactPoint": {
          "@type": "ContactPoint",
          "name": "Informacja",
          "availableLanguage": "English, Polish",
        }
        "address": {
          "@type": "PostalAddress",
          "name": "ul. EUGENIUSZA KWIATKOWSKIEGO 9/--- 37-450 STALOWA WOLA",
          "addressCountry": "Polska",
          "addressLocality": "STALOWA WOLA",
          "addressRegion": "PODKARPACKIE",
          "postalCode": "37-450",
          "@id": "https://maps.app.goo.gl/NrgvCJAr2nsb6sRY9"
        },
      }
    `}
      </script>
    </Helmet>
  )
}

export default Seo
