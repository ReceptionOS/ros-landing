import * as React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import { useI18next } from "gatsby-plugin-react-i18next"
import defaultOgImage from "../images/ros-icon.png"

function Seo({ description, meta = [], title, ogImage }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `
  )

  const { language } = useI18next()
  const metaDescription = description || site.siteMetadata.description
  const defaultTitle = site.siteMetadata?.title

  const metaOgImage = ogImage === undefined ? defaultOgImage : ogImage

  return (
    <Helmet
      htmlAttributes={{
        lang: language,
      }}
      title={title}
      titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : null}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          name: `author`,
          content: site.siteMetadata.author,
        },
        {
          property: `og:image`,
          content: metaOgImage,
        },
      ].concat(meta)}
    >
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
