import React from "react"

/**
 * Wraps content in square brackets with a span element
 * @param {string} text - The text to process
 * @param {string} className - Optional className for the span elements
 * @param {boolean} withBrackets - Whether to include bracket decorations (default: false)
 * @returns {React.ReactNode} - React node with wrapped spans
 */
export const wrapBracketsWithSpan = (
  text,
  className = "bracket-highlight",
  withBrackets = false
) => {
  if (!text || typeof text !== "string") {
    return text
  }

  // Split the text by brackets and process
  const parts = text.split(/(\[[^\]]*\])/g)

  return parts.map((part, index) => {
    // Check if this part is wrapped in brackets
    if (part.startsWith("[") && part.endsWith("]")) {
      // Remove the brackets and wrap in span
      const content = part.slice(1, -1)

      if (withBrackets) {
        return (
          <span key={index} className="bracket-highlight">
            <svg
              className="bracket-highlight-top-left"
              xmlns="http://www.w3.org/2000/svg"
              width="7"
              height="7"
              viewBox="0 0 7 7"
              fill="none"
            >
              <path
                opacity="0.4"
                d="M0.5 6.5L0.5 0.5L6.5 0.5"
                stroke="#E76220"
                strokeLinecap="round"
              />
            </svg>
            {content}
            <svg
              className="bracket-highlight-bottom-right"
              xmlns="http://www.w3.org/2000/svg"
              width="7"
              height="7"
              viewBox="0 0 7 7"
              fill="none"
            >
              <path
                opacity="0.4"
                d="M6.5 0.5L6.5 6.5L0.5 6.5"
                stroke="#E76220"
                strokeLinecap="round"
              />
            </svg>
          </span>
        )
      }

      // Return simple span without bracket decorations
      return <span key={index}>{content}</span>
    }
    // Return regular text as is
    return part
  })
}

/**
 * A helper function to use with translations
 * @param {Function} t - The translation function
 * @param {string} key - The translation key
 * @param {boolean} withBrackets - Whether to include bracket decorations (default: false)
 * @returns {React.ReactNode} - React node with wrapped spans
 */
export const tWithSpan = (t, key, withBrackets = false) => {
  const text = t(key)
  return wrapBracketsWithSpan(text, "bracket-highlight", withBrackets)
}

/**
 * Example usage:
 *
 * In your component:
 * import { tWithSpan } from '../utils/translationHelpers'
 *
 * // In JSX - simple span without className (default):
 * <h2>{tWithSpan(t, "offer.three-points.title")}</h2>
 *
 * // In your JSON translation file (locales/pl/offer.json):
 * // "offer.three-points.title": "Nie wiesz [ile] pacjentów tracisz. Nie wiesz [dlaczego] nie wracają."
 *
 * // Result: The words "ile" and "dlaczego" will be wrapped in simple span elements
 * // without any className or bracket decorations
 *
 * // With bracket decorations (adds "bracket-highlight" class and SVG brackets):
 * <p>{tWithSpan(t, "offer.three-points.description", true)}</p>
 *
 * // Result: The words in brackets will be wrapped in span elements with "bracket-highlight" class
 * // and bracket decorations
 */
