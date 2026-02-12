import React, { useState } from "react"
import {
  FAQComponent,
  AccordionItem,
  AccordionButton,
  AccordionContent,
  AccordionIcon,
} from "./styled.components"
import { BorderContainer4Rows } from "../../../../components/BorderContainer/BorderContainer4Rows"
import { BorderContainerTopRowsSidesNoCorners } from "../../../../components/BorderContainer/BorderContainerTopRowsSidesNoCorners"
import { BorderContainerBottomRowsSidesNoCorners } from "../../../../components/BorderContainer/BorderContainerBottomRowsSidesNoCorners"
import { RoundedInfoTile } from "../../../../styled.components"

const FAQ = ({ t }) => {
  const [activeIndex, setActiveIndex] = useState(null)

  const faqItems = [
    { question: "offer.FAQ.1.question", answer: "offer.FAQ.1.answer" },
    { question: "offer.FAQ.2.question", answer: "offer.FAQ.2.answer" },
    { question: "offer.FAQ.3.question", answer: "offer.FAQ.3.answer" },
  ]

  const toggleItem = index => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <FAQComponent>
      <div className="faq-container">
        <BorderContainerBottomRowsSidesNoCorners className="top-lines" />

        <BorderContainerTopRowsSidesNoCorners className="bottom-lines" />

        <div className="faq-title-container">
          <RoundedInfoTile>
            <p>{t("offer.FAQ.pill")}</p>
          </RoundedInfoTile>

          <h2 className="faq-title">{t("offer.FAQ.title")}</h2>
        </div>
        <div className="faq-items">
          {faqItems.map((item, index) => (
            <AccordionItem key={index}>
              <BorderContainer4Rows
                className={activeIndex === index ? "faq-item-active" : ""}
              >
                <AccordionButton
                  onClick={() => toggleItem(index)}
                  isOpen={activeIndex === index}
                >
                  <span>{t(item.question)}</span>
                  <AccordionIcon isOpen={activeIndex === index}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M6 12H12M12 12H18M12 12V6M12 12V18"
                        stroke="#FFE8D9"
                        strokeOpacity="0.64"
                        strokeWidth="1.33"
                        strokeLinecap="round"
                      />
                    </svg>
                  </AccordionIcon>
                </AccordionButton>
                <AccordionContent isOpen={activeIndex === index}>
                  <div>
                    <p>{t(item.answer)}</p>
                  </div>
                </AccordionContent>
              </BorderContainer4Rows>
            </AccordionItem>
          ))}
        </div>
      </div>
    </FAQComponent>
  )
}

export default FAQ
