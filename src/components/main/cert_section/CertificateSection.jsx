import React from 'react'
import Slider from 'react-slick'
import CertificateItem from './CertificateItem'

const CertificateSection = ({ certificates }) => {
  const PrevArrow = ({ onClick }) => (
    <button className="slick-prev ml-1 bg-blue-100 text-center text-blue-900 active:bg-blue-300 rounded-md shadow-lg" onClick={onClick}></button>
  )
  const NextArrow = ({ onClick }) => (
    <button className="slick-next mr-1 bg-blue-100 text-center text-blue-900 active:bg-blue-300 rounded-md shadow-lg" onClick={onClick}></button>
  )
  const settings = {
    customPaging: () => <div className="border-4 border-transparent rounded-full"></div>
  }
  return (
    <React.Fragment>
      <section className="resume-main__cert-section px-3 mb-4 tablet:hidden phone:block">
        <Slider dots autoplay slidesToShow={1} arrows dotsClass="slick-dots slick-thumb" prevArrow={<PrevArrow/>} nextArrow={<NextArrow/>} {...settings}>
          {certificates.map(cert => <CertificateItem key={cert.name} {...cert} />).reverse()}
        </Slider>
      </section>
      <section className="resume-main__cert-section px-6 mb-4 tablet:block phone:hidden">
        <Slider dots autoplay slidesToShow={2} slidesToScroll={2} arrows dotsClass="slick-dots slick-thumb" prevArrow={<PrevArrow/>} nextArrow={<NextArrow/>} {...settings}>
          {certificates.map(cert => <CertificateItem key={cert.name} {...cert} />).reverse()}
        </Slider>
      </section>
    </React.Fragment>
  )
}

export default CertificateSection
