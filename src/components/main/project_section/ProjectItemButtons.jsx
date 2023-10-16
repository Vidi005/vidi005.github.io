import React from 'react'

const ProjectItemButtons = ({ repository, preview, download }) => (
  <div className="project-item__buttons grid grid-cols-3 gap-2 desktop:gap-4 items-center justify-between p-4 desktop:p-8">
    {
      repository === ''
        ? (
            <button className="btn-repo phone:py-1 phone:px-2 desktop:py-2 desktop:px-4 flex items-center justify-center text-white phone:text-xs tablet:text-sm desktop:text-base bg-gray-300 border border-gray-400 phone:rounded-lg desktop:rounded-xl overflow-hidden" disabled>
              <img className="phone:max-h-4 tablet:max-h-5 tablet:mr-2 phone:mr-1 pl-1" src={`${import.meta.env.BASE_URL}images/code-icon.svg`} alt="Repo"/>
              <p>Repository</p>
            </button>
          )
        : (
            <button className="btn-repo group relative p-0.5 desktop:p-1 phone:text-xs tablet:text-sm desktop:text-base phone:rounded-lg desktop:rounded-xl hover:shadow-lg transition-all duration-500 overflow-hidden">
              <div className="absolute inset-0 w-full h-full border border-gray-800 bg-gray-800 transform transition-all duration-500 translate-y-full group-hover:translate-y-0"></div>
              <a href={repository} className="relative flex items-center justify-center text-white group-hover:text-black bg-gray-800 group-hover:bg-gray-50 phone:py-1 phone:px-2 desktop:py-2 desktop:px-4 phone:rounded-md desktop:rounded-lg shadow-md group-hover:shadow-none">
              <img className="phone:max-h-4 tablet:max-h-5 tablet:mr-2 phone:mr-1 pl-1" src={`${import.meta.env.BASE_URL}images/code-icon.svg`} alt="Repo"/>
              <p>Repository</p>
              </a>
            </button>
          )
    }
    {
      preview === ''
        ? (
            <button className="btn-preview phone:py-1 phone:px-2 desktop:py-2 desktop:px-4 flex items-center justify-center text-white phone:text-xs tablet:text-sm desktop:text-base bg-blue-300 border border-blue-400 phone:rounded-lg desktop:rounded-xl overflow-hidden" disabled>
              <img className="phone:max-h-4 tablet:max-h-5 tablet:mr-2 phone:mr-1" src={`${import.meta.env.BASE_URL}images/preview-icon.svg`} alt="Preview"/>
              <p>Preview</p>
            </button>
          )
        : (
            <button className="btn-repo group relative p-0.5 desktop:p-1 phone:text-xs tablet:text-sm desktop:text-base phone:rounded-lg desktop:rounded-xl hover:shadow-lg transition-all duration-500 overflow-hidden">
              <div className="absolute inset-0 w-full h-full border border-blue-800 bg-blue-800 transform transition-all duration-500 translate-y-full group-hover:translate-y-0"></div>
              <a href={preview} className="relative flex items-center justify-center text-white group-hover:text-blue-900 bg-blue-800 group-hover:bg-blue-50 phone:py-1 phone:px-2 desktop:py-2 desktop:px-4 phone:rounded-md desktop:rounded-lg shadow-md group-hover:shadow-none">
              <img className="phone:max-h-4 tablet:max-h-5 tablet:mr-2 phone:mr-1 pl-1" src={`${import.meta.env.BASE_URL}images/preview-icon.svg`} alt="Preview"/>
              <p>Preview</p>
              </a>
            </button>
          )
    }
    {
      download === ''
        ? (
            <button className="btn-download phone:py-1 phone:px-2 desktop:py-2 desktop:px-4 flex items-center justify-center text-white phone:text-xs tablet:text-sm desktop:text-base bg-amber-300 border border-amber-400 phone:rounded-lg desktop:rounded-xl overflow-hidden" disabled>
              <img className="phone:max-h-4 tablet:max-h-5 tablet:mr-2 phone:mr-1" src={`${import.meta.env.BASE_URL}images/download-icon.svg`} alt="Download"/>
              <p>Download</p>
            </button>
          )
        : (
            <button className="btn-repo group relative p-0.5 desktop:p-1 phone:text-xs tablet:text-sm desktop:text-base phone:rounded-lg desktop:rounded-xl hover:shadow-lg transition-all duration-500 overflow-hidden">
              <div className="absolute inset-0 w-full h-full border border-amber-800 bg-amber-800 transform transition-all duration-500 translate-y-full group-hover:translate-y-0"></div>
              <a href={download} className="relative flex items-center justify-center text-white group-hover:text-amber-900 bg-amber-800 group-hover:bg-amber-50 phone:py-1 phone:px-2 desktop:py-2 desktop:px-4 phone:rounded-md desktop:rounded-lg shadow-md group-hover:shadow-none">
              <img className="phone:max-h-4 tablet:max-h-5 tablet:mr-2 phone:mr-1 pl-1" src={`${import.meta.env.BASE_URL}images/download-icon.svg`} alt="Download"/>
              <p>Download</p>
              </a>
            </button>
          )
    }
  </div>
)

export default ProjectItemButtons
