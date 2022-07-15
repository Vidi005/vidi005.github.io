import React from 'react'

const CertItemLink = ({ url }) => (
  <div className="cert-item__link">
    <p className="inline italic underline text-gray-500 hover:text-blue-700 visited:text-purple-900"><a href={url}>Link</a></p>
    <a href={url}><img className="inline h-3 px-1" src="/images/link.svg" alt="Link"/></a>
  </div>
)

export default CertItemLink
