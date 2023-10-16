import React from 'react'

const CertItemLink = ({ url }) => (
  <div className="cert-item__link flex items-center justify-end">
    <p className="inline italic underline text-gray-500 hover:text-blue-500 visited:text-purple-700"><a href={url}>Link</a></p>
    <a href={url}><img className="inline h-3 px-1" src="/images/link.svg" alt="Link"/></a>
  </div>
)

export default CertItemLink
