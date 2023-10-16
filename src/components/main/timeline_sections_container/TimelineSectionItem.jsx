import React from 'react'

const TimelineSectionItem = ({ section, education, experience, org }) => (
  <React.Fragment>
    <div className="dotted-circle h-5 w-5 border-2 border-white rounded-full bg-blue-900 absolute"></div>
    <div className="section-timeline border-l-blue-900 border-l-4 ml-2 pb-3 px-4">
      {
        (section === 'Education') && (
          <React.Fragment>
            <h3 className="text-amber-900">{education.eduTitle}</h3>
            <h4 className="text-blue-600 my-1">{education.eduStage}</h4>
            <p className=" font-bold italic">{education.type}</p>
            <p className="font-bold">{education.score}</p>
            <p className="text-justify">{education.content}</p>
            <h4 className="text-amber-900 my-1">{education.duration}</h4>
          </React.Fragment>
        )
      }
      {
        (section === 'Experience') && (
          <React.Fragment>
            <h3 className="text-amber-900">{experience.company}</h3>
            <h4 className="text-blue-600 my-1">{experience.section}</h4>
            <p className="italic font-bold">{experience.type}</p>
            {experience.jobDesc.map((jobDesc, i) =>
                <ul key={i} className="job-desc-container flex text-justify">
                  <li>-</li>
                  <p className="ml-2">{jobDesc}</p>
                </ul>
            )
            }
            <h4 className="text-amber-900 my-1">{experience.date}</h4>
          </React.Fragment>
        )
      }
      {
        (section === 'Organization') && (
          <React.Fragment>
            <h3 className="text-amber-900">{org.name}</h3>
            <h4 className="text-blue-600 my-1">{org.division}</h4>
            <p className="text-justify">{org.desc}</p>
            <h4 className="text-amber-900 my-1">{org.year}</h4>
          </React.Fragment>
        )
      }
    </div>
  </React.Fragment>
)

export default TimelineSectionItem
