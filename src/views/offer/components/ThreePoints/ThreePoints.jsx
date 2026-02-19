import React from "react"
import { ThreePointsComponent } from "./styled.components"
import { BorderContainerRowsVerticalSides } from "../../../../components/BorderContainer/BorderContainerRowsVerticalSides"
import SliderComponent from "../../../home/components/AIWave/Slider"
import { RoundedInfoTile } from "../../../../styled.components"
import { tWithSpan } from "../../../../utils/translationHelpers"
import { BorderContainerTop } from "../../../../components/BorderContainer/BorderContainerTop"
import { BorderContainerThreePoints } from "../../../../components/BorderContainer/BorderContainerThreePoints"

const PhoneIcon = ({ className }) => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M20.13 34.7712C12.044 34.7712 5.48897 28.2162 5.48897 20.1302C5.48897 12.0441 12.044 5.48914 20.13 5.48914C28.216 5.48914 34.771 12.0441 34.771 20.1302C34.771 28.2162 28.216 34.7712 20.13 34.7712Z"
      fill="url(#paint0_linear_1147_4128)"
      fillOpacity="0.24"
    />
    <path
      d="M27.3204 7.32056C30.4311 9.1165 32.773 11.9932 33.9006 15.4035C35.0283 18.8138 34.863 22.5196 33.4362 25.8159C32.0094 29.1123 29.4206 31.7691 26.1624 33.2809C22.9042 34.7928 19.204 35.0542 15.7656 34.0154C12.3272 32.9766 9.39066 30.7101 7.51462 27.6471C5.63858 24.584 4.95396 20.9383 5.59101 17.4033C6.22806 13.8684 8.14232 10.691 10.9696 8.4756C13.7969 6.2602 17.3399 5.16141 20.9246 5.38827"
      stroke="#FFF2E9"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle
      cx="2.09157"
      cy="2.09157"
      r="2.09157"
      transform="matrix(-1 0 0 1 22.2217 3.39752)"
      fill="#0A0A0A"
      stroke="#FFF2E9"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle
      cx="2.09157"
      cy="2.09157"
      r="2.09157"
      transform="matrix(-1 0 0 1 22.2217 32.6796)"
      fill="#0A0A0A"
      stroke="#FFF2E9"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle
      cx="2.09157"
      cy="2.09157"
      r="2.09157"
      transform="matrix(4.37114e-08 1 1 -4.37114e-08 3.39746 18.0386)"
      fill="#0A0A0A"
      stroke="#FFF2E9"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle
      cx="2.09157"
      cy="2.09157"
      r="2.09157"
      transform="matrix(4.37114e-08 1 1 -4.37114e-08 32.6792 18.0386)"
      fill="#0A0A0A"
      stroke="#FFF2E9"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M20.6008 13.3333C23.9146 13.3333 26.6008 16.0196 26.6008 19.3333M21.2675 16C22.7403 16 23.9342 17.1939 23.9342 18.6666M16.8308 23.1689C18.1668 24.5049 19.6052 25.3568 20.7844 25.8899C20.8434 25.9165 20.8728 25.9298 21.2085 26.0162C22.0924 26.2435 23.7578 25.9397 24.5046 25.415C24.7882 25.2157 24.9102 25.0937 25.1542 24.8497C25.4046 24.5993 25.5298 24.4741 25.6097 24.3469C25.8822 23.9132 25.8822 23.3618 25.6097 22.9282C25.5298 22.8009 25.4046 22.6757 25.1542 22.4253L24.9756 22.2467C24.7299 22.0011 24.6071 21.8782 24.4677 21.8066C24.262 21.701 24.0261 21.6699 23.8001 21.7186C23.647 21.7516 23.4965 21.8384 23.1955 22.0119L22.4616 22.4352C22.3068 22.5244 22.2295 22.569 22.1174 22.5961C22.0363 22.6156 21.8966 22.622 21.8141 22.61C21.6999 22.5933 21.6386 22.565 21.5158 22.5085C21.018 22.2793 20.1916 21.8046 19.277 20.89C18.3422 19.9552 17.8669 19.1126 17.6436 18.6186C17.592 18.5045 17.5662 18.4474 17.5495 18.3401C17.5374 18.2628 17.5407 18.1305 17.5567 18.0539C17.5788 17.9476 17.6169 17.8734 17.6932 17.725L18.1119 16.9106C18.2893 16.5657 18.3779 16.3932 18.4 16.2178C18.4234 16.0312 18.3938 15.8418 18.3144 15.6713C18.2399 15.511 18.1028 15.3739 17.8285 15.0997L17.5744 14.8456C17.324 14.5952 17.1988 14.47 17.0716 14.39C16.6379 14.1175 16.0865 14.1175 15.6528 14.39C15.5256 14.47 15.4004 14.5952 15.15 14.8456C14.906 15.0896 14.784 15.2116 14.5848 15.4951C14.06 16.2419 13.7562 17.9074 13.9836 18.7913C14.0699 19.1269 14.0832 19.1564 14.1099 19.2153C14.6429 20.3945 15.4948 21.8329 16.8308 23.1689Z"
      stroke="#E76220"
      strokeWidth="1.33333"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <defs>
      <linearGradient
        id="paint0_linear_1147_4128"
        x1="20.13"
        y1="5.48914"
        x2="20.13"
        y2="34.7712"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="white" stopOpacity="0" />
        <stop offset="1" stopColor="#FF3610" />
      </linearGradient>
    </defs>
  </svg>
)

const MailIcon = ({ className }) => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M20.13 34.7712C12.044 34.7712 5.48897 28.2162 5.48897 20.1302C5.48897 12.0441 12.044 5.48914 20.13 5.48914C28.216 5.48914 34.771 12.0441 34.771 20.1302C34.771 28.2162 28.216 34.7712 20.13 34.7712Z"
      fill="url(#paint0_linear_1181_7445)"
      fillOpacity="0.24"
    />
    <path
      d="M27.3204 7.32056C30.4311 9.1165 32.773 11.9932 33.9006 15.4035C35.0283 18.8138 34.863 22.5196 33.4362 25.8159C32.0094 29.1123 29.4206 31.7691 26.1624 33.2809C22.9042 34.7928 19.204 35.0542 15.7656 34.0154C12.3272 32.9766 9.39066 30.7101 7.51462 27.6471C5.63858 24.584 4.95396 20.9383 5.59101 17.4033C6.22806 13.8684 8.14232 10.691 10.9696 8.4756C13.7969 6.2602 17.3399 5.16141 20.9246 5.38827"
      stroke="#FFF2E9"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle
      cx="2.09157"
      cy="2.09157"
      r="2.09157"
      transform="matrix(-1 0 0 1 22.2217 3.39752)"
      fill="#0A0A0A"
      stroke="#FFF2E9"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle
      cx="2.09157"
      cy="2.09157"
      r="2.09157"
      transform="matrix(-1 0 0 1 22.2217 32.6796)"
      fill="#0A0A0A"
      stroke="#FFF2E9"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle
      cx="2.09157"
      cy="2.09157"
      r="2.09157"
      transform="matrix(4.37114e-08 1 1 -4.37114e-08 3.39746 18.0386)"
      fill="#0A0A0A"
      stroke="#FFF2E9"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle
      cx="2.09157"
      cy="2.09157"
      r="2.09157"
      transform="matrix(4.37114e-08 1 1 -4.37114e-08 32.6792 18.0386)"
      fill="#0A0A0A"
      stroke="#FFF2E9"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M14.0002 17.6666L18.4732 20.6487C18.7923 20.8614 19.208 20.8614 19.5271 20.6487L24.0002 17.6666M25.0002 23.6666C25.9206 23.6666 26.6668 22.9205 26.6668 22V17.6666C26.6668 15.8257 25.1744 14.3333 23.3335 14.3333H17.3335C16.413 14.3333 15.6668 15.0795 15.6668 16M15.2335 25.6666H22.7668C23.8162 25.6666 24.6668 24.816 24.6668 23.7666V18.2333C24.6668 17.184 23.8162 16.3333 22.7668 16.3333H15.2335C14.1842 16.3333 13.3335 17.184 13.3335 18.2333V23.7666C13.3335 24.816 14.1842 25.6666 15.2335 25.6666Z"
      stroke="#E76220"
      strokeWidth="1.33333"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <defs>
      <linearGradient
        id="paint0_linear_1181_7445"
        x1="20.13"
        y1="5.48914"
        x2="20.13"
        y2="34.7712"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="white" stopOpacity="0" />
        <stop offset="1" stopColor="#FF3610" />
      </linearGradient>
    </defs>
  </svg>
)

const PeopleIcon = ({ className }) => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M20.13 34.7711C12.044 34.7711 5.48897 28.2161 5.48897 20.1301C5.48897 12.0441 12.044 5.48907 20.13 5.48907C28.216 5.48907 34.771 12.0441 34.771 20.1301C34.771 28.2161 28.216 34.7711 20.13 34.7711Z"
      fill="url(#paint0_linear_1181_7462)"
      fillOpacity="0.24"
    />
    <path
      d="M27.3204 7.3205C30.4311 9.11644 32.773 11.9932 33.9006 15.4035C35.0283 18.8137 34.863 22.5195 33.4362 25.8159C32.0094 29.1122 29.4206 31.769 26.1624 33.2809C22.9042 34.7927 19.204 35.0541 15.7656 34.0153C12.3272 32.9765 9.39066 30.71 7.51462 27.647C5.63858 24.584 4.95396 20.9382 5.59101 17.4033C6.22806 13.8684 8.14232 10.6909 10.9696 8.47554C13.7969 6.26014 17.3399 5.16134 20.9246 5.38821"
      stroke="#FFF2E9"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle
      cx="2.09157"
      cy="2.09157"
      r="2.09157"
      transform="matrix(-1 0 0 1 22.2217 3.39746)"
      fill="#0A0A0A"
      stroke="#FFF2E9"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle
      cx="2.09157"
      cy="2.09157"
      r="2.09157"
      transform="matrix(-1 0 0 1 22.2217 32.6795)"
      fill="#0A0A0A"
      stroke="#FFF2E9"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle
      cx="2.09157"
      cy="2.09157"
      r="2.09157"
      transform="matrix(4.37114e-08 1 1 -4.37114e-08 3.39746 18.0385)"
      fill="#0A0A0A"
      stroke="#FFF2E9"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle
      cx="2.09157"
      cy="2.09157"
      r="2.09157"
      transform="matrix(4.37114e-08 1 1 -4.37114e-08 32.6792 18.0385)"
      fill="#0A0A0A"
      stroke="#FFF2E9"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M19.3415 26H14.6665V25.1136C14.6665 23.8714 15.5119 22.7886 16.717 22.4874C17.9033 22.1908 19.1198 22.0575 20.3332 22.0873M22.7934 22.7995L24.3937 24.3998M24.3937 24.3998L25.994 26M24.3937 24.3998L25.994 22.7995M24.3937 24.3998L22.7934 26M24.6665 14.6667C25.4798 15.2166 25.9998 16.0576 25.9998 17C25.9998 17.9424 25.4798 18.7834 24.6665 19.3333M22.9998 17C22.9998 18.6569 21.6567 20 19.9998 20C18.343 20 16.9998 18.6569 16.9998 17C16.9998 15.3431 18.343 14 19.9998 14C21.6567 14 22.9998 15.3431 22.9998 17Z"
      stroke="#E76220"
      strokeWidth="1.33333"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <defs>
      <linearGradient
        id="paint0_linear_1181_7462"
        x1="20.13"
        y1="5.48907"
        x2="20.13"
        y2="34.7711"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="white" stopOpacity="0" />
        <stop offset="1" stopColor="#FF3610" />
      </linearGradient>
    </defs>
  </svg>
)

const ThreePoints = ({ t }) => {
  const tilesData = [
    {
      id: 1,
      image: <PhoneIcon className="three-points-image" />,
      titleKey: "offer.three-points.tile-1.title",
      descriptionKey: "offer.three-points.tile-1.description",
      className: "three-points-tile"
    },
    {
      id: 2,
      image: <MailIcon className="three-points-image" />,
      titleKey: "offer.three-points.tile-2.title",
      descriptionKey: "offer.three-points.tile-2.description",
      className: "three-points-tile"
    },
    {
      id: 3,
      image: <PeopleIcon className="three-points-image" />,
      titleKey: "offer.three-points.tile-3.title",
      descriptionKey: "offer.three-points.tile-3.description",
      className: "three-points-tile"
    }
  ]

  return (
    <ThreePointsComponent>
      <div className="three-points-wrapper">
        <h2>{t("offer.three-points.headline")}</h2>
        <BorderContainerTop />
        <div className="three-points-tile-container desktop">
          {tilesData.map(tile => (
            <BorderContainerRowsVerticalSides
              key={tile.id}
              className={tile.className}
            >
              <div className="three-points-tile-content">
                {tile.image}
                <div className="three-points-text-tile">
                  <p className="p-new-model-18">{t(tile.titleKey)}</p>
                  <p className="p-new-model-16">{t(tile.descriptionKey)}</p>
                </div>
              </div>
            </BorderContainerRowsVerticalSides>
          ))}
        </div>
        <div className="three-points-mobile">
          <SliderComponent t={t} items={tilesData} />
        </div>
        <BorderContainerThreePoints>
          <div className="three-points-container">
            <RoundedInfoTile className="three-points-pill">
              <p>{t("offer.three-points.pill")}</p>
            </RoundedInfoTile>
            <h2 className="three-points-title">
              {tWithSpan(t, "offer.three-points.title", "highlight", true)}
            </h2>
            <p className="p-new-model-16">
              {tWithSpan(t, "offer.three-points.description")}
            </p>
          </div>
        </BorderContainerThreePoints>
      </div>
    </ThreePointsComponent>
  )
}
export default ThreePoints
