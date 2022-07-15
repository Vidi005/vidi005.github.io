import React from 'react'
import CertItemContent from './CertItemContent'
import CertItemLink from './CertItemLink'

const CertificateItem = ({ name, issuedBy, date, url }) => (
  <div className="list__cert-item flex flex-col shrink w-72 shadow-lg rounded-lg m-2 p-2 bg-white">
    <CertItemContent name={name} issuedBy={issuedBy} date={date} />
    <CertItemLink url={url} />
  </div>
)

export default CertificateItem
