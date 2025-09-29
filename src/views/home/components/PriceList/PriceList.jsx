import React, { useState } from "react"
import { PriceListComponent } from "./styled.components"
import { RoundedButtonOrange, RoundedInfoTile } from "../../../../styled.components"
import { BorderContainer4Rows } from "../../../../components/BorderContainer/BorderContainer4Rows"
import { BorderContainerBottomRowsTop } from "../../../../components/BorderContainer/BorderContainerBottomRowsTop"
import { BorderContainerTopRowsBottom } from "../../../../components/BorderContainer/BorderContainerTopRowsBottom"
import { elitePacketPrice, incrementPacket, optimumPacketPrice, starterPacketPrice } from "../../../../config/pricing"

const PriceList = ({ t }) => {

  const [counter, setCounter] = useState(1);
  const incrementCounter = () => {
    setCounter(prev => (prev < 99 ? prev + 1 : 99));
  };
  const decrementCounter = () => {
    setCounter(prev => (prev > 1 ? prev - 1 : 1));
  }

  const basePriceMap = {
    Starter: Number(starterPacketPrice) || 0,
    Optimum: Number(optimumPacketPrice) || 0,
    Elite: Number(elitePacketPrice) || 0,
  };

  const inc = Number(incrementPacket) || 0;

  return (
    <>
      <div className="container">
        <PriceListComponent>
          <div className="top-container">
            <RoundedInfoTile>
              <p>{t('home.PriceList.price-list')}</p>
            </RoundedInfoTile>
            <h2>{t('home.PriceList.title')}</h2>
            <p style={{ marginTop: '20px' }} className="p-new-model-18">{t('home.PriceList.chairs')}</p>
          </div>
          <div className="bottom-container">
            <BorderContainerBottomRowsTop className="top-border-container">
              <div className="counter-container">
                <div onClick={decrementCounter} className="counter-sides counter-left">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M4.16675 10H10.0001H15.8334" stroke="#FFE8D9" strokeLinejoin="round" />
                  </svg>
                </div>
                <div className="counter-middle">
                  {counter}
                </div>
                <div onClick={incrementCounter} className="counter-sides counter-right">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M4.16675 10.0003H10.0001M15.8334 10.0003H10.0001M10.0001 10.0003V4.16699M10.0001 10.0003V15.8337" stroke="#FFE8D9" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </BorderContainerBottomRowsTop>
            <div className="pricing-container">
              {[{
                name: 'Starter',
                disable: true,
                listText: false,
                list: ['1', '2', '3', '4']
              },
              {
                name: 'Optimum',
                disable: true,
                listText: true,
                list: ['1', '2', '3', '4', '5', '6']
              },
              {
                name: 'Elite',
                disable: false,
                listText: true,
                list: ['1', '2', '3', '4']
              }
              ].map((item, index) => {
                // get base price for this plan
                const base = basePriceMap[item.name] || 0;
                const computed = base + inc * counter;

                return (
                  <BorderContainer4Rows key={index} className="price-tile">
                    <div className="price-top">
                      <RoundedInfoTile>
                        <p>{t(`home.PriceList.${item.name}-info1`)}</p>
                      </RoundedInfoTile>
                      <RoundedInfoTile disabled={item.disable}>
                        <p>{t(`home.PriceList.${item.name}-info2`)}</p>
                      </RoundedInfoTile>
                    </div>

                    <div className="price-bottom">
                      <h3>{computed} PLN <span>/ msc</span></h3>

                      {item.listText && (
                        <p className="list-text">{t(`home.PriceList.${item.name}-list-text`)}</p>
                      )}

                      {item.list.map(key => (
                        <div key={key} className="price-li">
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M3.33325 10.8333L7.49992 15L16.6666 5" stroke="#FFE8D9" strokeLinejoin="round" />
                          </svg>
                          <p className="p-new-model-16 ">{t(`home.PriceList.${item.name}-li${key}`)}</p>
                        </div>
                      ))}
                    </div>
                  </BorderContainer4Rows>
                );
              })}
            </div>
            <BorderContainerTopRowsBottom className="bottom-border-container">
              <RoundedButtonOrange as="a" href="mailto:contact@receptionos.com" className="price-list-button">{t('home.PriceList.button')}</RoundedButtonOrange>
            </BorderContainerTopRowsBottom>
          </div>
        </PriceListComponent>
      </div>
    </>
  )
}
export default PriceList
