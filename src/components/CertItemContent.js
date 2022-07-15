import React from 'react'

const CertItemContent = ({ name, issuedBy, date }) => (
  <div className="cert-item__content grow">
    <h4 className="text-amber-900">{name}</h4>
    <p className="text-blue-600 font-bold">{issuedBy}</p>
    <h5>{date}</h5>
  </div>
)

export default CertItemContent
