import React from 'react'
import CertificateItem from './CertificateItem'

const CertificateSection = ({ certificates }) => (
  <div className="resume-main__cert-section flex flex-row flex-wrap justify-center">
    {certificates.map(cert => <CertificateItem key={cert.name} {...cert} />).reverse()}
  </div>
)

export default CertificateSection
