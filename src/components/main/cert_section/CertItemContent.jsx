import React from 'react'

const CertItemContent = ({ name, issuedBy, date, cert }) => (
  <div className="cert-item__content grow text-center leading-none">
    <h4 className="text-amber-900 leading-tight">{name}</h4>
    <img className="rounded-xl my-2" src={cert} alt="Certificate"/>
    <p className="text-blue-900 font-bold leading-tight">{issuedBy}</p>
    <h5 className="text-gray-700">{date}</h5>
  </div>
)

export default CertItemContent
