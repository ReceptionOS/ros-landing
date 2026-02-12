import React, { useState } from "react"
import {
  FAQComponent,
  AccordionItem,
  AccordionButton,
  AccordionContent,
} from "./styled.components"
import { BorderContainer4RowsNoCorners } from "../../../../components/BorderContainer/BorderContainer4RowsNoCorners"
import { BorderContainer4Rows } from "../../../../components/BorderContainer/BorderContainer4Rows"
import { BorderContainerTopRowsSidesNoCorners } from "../../../../components/BorderContainer/BorderContainerTopRowsSidesNoCorners"
import { BorderContainerBottomRowsSidesNoCorners } from "../../../../components/BorderContainer/BorderContainerBottomRowsSidesNoCorners"

const FAQ = ({ t }) => {
  const [activeIndex, setActiveIndex] = useState(null)

  const faqItems = [
    { question: "offer.FAQ.item1.question", answer: "offer.FAQ.item1.answer" },
    { question: "offer.FAQ.item2.question", answer: "offer.FAQ.item2.answer" },
    { question: "offer.FAQ.item3.question", answer: "offer.FAQ.item3.answer" },
    { question: "offer.FAQ.item4.question", answer: "offer.FAQ.item4.answer" },
  ]

  const toggleItem = index => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <FAQComponent>
      <div className="faq-container">
        <BorderContainerBottomRowsSidesNoCorners>
          <div style={{ padding: "20px", color: "#fff" }}></div>
        </BorderContainerBottomRowsSidesNoCorners>
        <BorderContainerTopRowsSidesNoCorners>
          <div style={{ padding: "20px", color: "#fff" }}></div>
        </BorderContainerTopRowsSidesNoCorners>
        <h2 className="faq-title">{t("offer.FAQ.title")}</h2>

        <div className="faq-items">
          {faqItems.map((item, index) => (
            <AccordionItem key={index}>
              {activeIndex === index ? (
                <BorderContainer4Rows>
                  <AccordionButton onClick={() => toggleItem(index)}>
                    <span>{t(item.question)}</span>
                    <span>{activeIndex === index ? "−" : "+"}</span>
                  </AccordionButton>
                  <AccordionContent isOpen={activeIndex === index}>
                    <p>{t(item.answer)}</p>
                  </AccordionContent>
                </BorderContainer4Rows>
              ) : (
                <BorderContainer4RowsNoCorners>
                  <AccordionButton onClick={() => toggleItem(index)}>
                    <span>{t(item.question)}</span>
                    <span>{activeIndex === index ? "−" : "+"}</span>
                  </AccordionButton>
                </BorderContainer4RowsNoCorners>
              )}
            </AccordionItem>
          ))}
        </div>
      </div>
    </FAQComponent>
  )
}

export default FAQ
