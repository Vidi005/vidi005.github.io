import React from 'react'

const BottomBanner = () => (
  <div className="resume-main__bottom-banner p-4 flex flex-row justify-center flex-wrap shrink bg-blue-100 border-t border-blue-900">
    <p className="inline mx-2">Technologies: </p>
    <a href="https://reactjs.org"><img className="max-h-5 mx-2" src="/images/React.png" alt="React"/></a>
    <a href="https://tailwindcss.com"><img className="h-4 centr mx-2" src="/images/tailwind-css.svg" alt="Tailwind CSS"/></a>
  </div>
)

export default BottomBanner
