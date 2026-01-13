import React from "react"
import { PartnersAboutUsComponent } from "./styled.components"
import { BorderContainerBottomRowsSides } from "../../../../components/BorderContainer/BorderContainerBottomRowsSides";
import { RoundedInfoTile } from "../../../../styled.components";
import { StaticImage } from "gatsby-plugin-image";
import SliderComponent from "./Slider";

const PartnersAboutUs = ({ t }) => {

  const items = [
    {
      desc: t('home.PartnersAboutUs.partner1-desc'),
      img: (
        <StaticImage
          imgStyle={{ transform: 'scale(2.5)', top: '55px' }}
          className="slider-image"
          src="../../../../images/partners-aboutus/1.webp"
          alt="image"
          placeholder="none"
          loading="lazy"
        />
      ),
      name: 'Bartosz Biernacki',
      position: [
        t('home.PartnersAboutUs.partner1-position1')
      ],
      company: t('home.PartnersAboutUs.partner1-company')
    },
    {
      desc: t('home.PartnersAboutUs.partner2-desc'),
      img: (
        <StaticImage
          imgStyle={{ transform: 'scale(2)', top: '55px' }}
          className="slider-image"
          src="../../../../images/partners-aboutus/2.webp"
          alt="image"
          placeholder="none"
          loading="lazy"
        />
      ),
      name: 'Apolonia Dental',
      position: [
      ],
      company: t('home.PartnersAboutUs.partner2-company')
    },
    {
      desc: t('home.PartnersAboutUs.partner3-desc'),
      img: (
        <StaticImage
          imgStyle={{ transform: 'scale(2.5)', top: '66px', left: '15px' }}
          className="slider-image"
          src="../../../../images/partners-aboutus/3.webp"
          alt="image"
          placeholder="none"
          loading="lazy"
        />
      ),
      name: 'Kacper Raciborski',
      position: [
        t('home.PartnersAboutUs.partner3-position1'),
        t('home.PartnersAboutUs.partner3-position2'),
      ],
      company: t('home.PartnersAboutUs.partner3-company')
    },
    {
      desc: t('home.PartnersAboutUs.partner4-desc'),
      img: (
        <StaticImage
          imgStyle={{ transform: 'scale(2.1)', top: '50px' }}
          className="slider-image"
          src="../../../../images/partners-aboutus/4.webp"
          alt="image"
          placeholder="none"
          loading="lazy"
        />
      ),
      name: 'Adam Wojsa',
      position: [
        t('home.PartnersAboutUs.partner4-position1'),
      ],
      company: t('home.PartnersAboutUs.partner4-company')
    },
    {
      desc: t('home.PartnersAboutUs.partner5-desc'),
      img: (
        <StaticImage
          imgStyle={{ transform: 'scale(3.5)', top: '90px' }}
          className="slider-image"
          src="../../../../images/partners-aboutus/5.webp"
          alt="image"
          placeholder="none"
          loading="lazy"
        />
      ),
      name: 'Kamil Kuczewski',
      position: [
        t('home.PartnersAboutUs.partner5-position1'),
      ],
      company: t('home.PartnersAboutUs.partner5-company')
    },
  ]

  return (
    <>
      <div className="container">
        <PartnersAboutUsComponent>
          <BorderContainerBottomRowsSides className="pau-container">
            <div className="top-title">
              <RoundedInfoTile>
                <p>{t('home.PartnersAboutUs.partners-about-us')}</p>
              </RoundedInfoTile>
              <h4>{t('home.PartnersAboutUs.title')}</h4>
            </div>
            {items && <SliderComponent items={items} />}
          </BorderContainerBottomRowsSides>
        </PartnersAboutUsComponent>
      </div>
    </>
  )
}
export default PartnersAboutUs
