import React from 'react'
import CertItemContent from './CertItemContent'
import CertItemLink from './CertItemLink'

const CertificateItem = ({ name, issuedBy, date, url, cert }) => (
  <div className="list__cert-item flex flex-col text-white font-sans shrink grow-[9999] shadow-2xl rounded-xl tablet:m-4 tablet:p-4 phone:m-2 phone:p-2 bg-gradient-to-br from-blue-200 to-white">
    <CertItemContent name={name} issuedBy={issuedBy} date={date} cert={cert}/>
    <CertItemLink url={url} />
  </div>
)

export default CertificateItem
