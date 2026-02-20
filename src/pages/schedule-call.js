import React, { useEffect } from "react"
import { graphql } from "gatsby"

const BOOKING_URL = "https://calendar.app.google/JjHDU7MfmyEJbWyv9"

const ScheduleCall = () => {
  useEffect(() => {
    setTimeout(() => {
      window.location.replace(BOOKING_URL)
    }, 500)
  }, [])

  return (
    <div style={{
      background: "#0a0a0a",
      color: "#a3948b",
      minHeight: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontFamily: "Inter Tight Variable, sans-serif",
    }}>
      <p>Redirecting...</p>
    </div>
  )
}

export default ScheduleCall

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`
