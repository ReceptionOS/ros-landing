import React from "react"
import {
  FAQComponent,
  AccordionItem,
  AccordionButton,
  AccordionContent,
} from "./styled.components"
import { BorderContainer4RowsNoCorners } from "../../../../components/BorderContainer/BorderContainer4RowsNoCorners"
import { BorderContainerBottomRowsSidesNoCorners } from "../../../../components/BorderContainer/BorderContainerBottomRowsSidesNoCorners"
import { BorderContainerTopRowsSidesNoCorners } from "../../../../components/BorderContainer/BorderContainerTopRowsSidesNoCorners"

const FAQ = ({ t }) => {
  const faqItems = [
    { question: "offer.FAQ.item1.question", answer: "offer.FAQ.item1.answer" },
    { question: "offer.FAQ.item2.question", answer: "offer.FAQ.item2.answer" },
    { question: "offer.FAQ.item3.question", answer: "offer.FAQ.item3.answer" },
    { question: "offer.FAQ.item4.question", answer: "offer.FAQ.item4.answer" },
  ]

  return (
    <FAQComponent>
      <div className="faq-container" style={{ padding: "0 40px" }}>
        {/* Test: BorderContainer4RowsNoCorners */}
        <div style={{ marginBottom: "300px" }}>
          <h3 style={{ color: "#fff", marginBottom: "10px" }}>
            BorderContainer4RowsNoCorners
          </h3>
          <BorderContainer4RowsNoCorners>
            <div style={{ padding: "20px", color: "#fff" }}>
              <h2 className="faq-title">{t("offer.FAQ.title")}</h2>
              <p>Test content for BorderContainer4RowsNoCorners</p>
            </div>
          </BorderContainer4RowsNoCorners>
        </div>

        {/* Test: BorderContainerBottomRowsSidesNoCorners */}
        <div style={{ marginBottom: "300px" }}>
          <h3 style={{ color: "#fff", marginBottom: "10px" }}>
            BorderContainerBottomRowsSidesNoCorners
          </h3>
          <BorderContainerBottomRowsSidesNoCorners>
            <div style={{ padding: "20px", color: "#fff" }}>
              <h2 className="faq-title">{t("offer.FAQ.title")}</h2>
              <p>Test content for BorderContainerBottomRowsSidesNoCorners</p>
            </div>
          </BorderContainerBottomRowsSidesNoCorners>
        </div>

        {/* Test: BorderContainerTopRowsSidesNoCorners */}
        <div style={{ marginBottom: "300px" }}>
          <h3 style={{ color: "#fff", marginBottom: "10px" }}>
            BorderContainerTopRowsSidesNoCorners
          </h3>
          <BorderContainerTopRowsSidesNoCorners>
            <div style={{ padding: "20px", color: "#fff" }}>
              <h2 className="faq-title">{t("offer.FAQ.title")}</h2>
              <p>Test content for BorderContainerTopRowsSidesNoCorners</p>
            </div>
          </BorderContainerTopRowsSidesNoCorners>
        </div>
      </div>
    </FAQComponent>
  )
}

export default FAQ
