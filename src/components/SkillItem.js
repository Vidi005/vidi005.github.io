import React from 'react'

const SkillItem = ({ name, ability }) => (
  <div className="skill-item my-5 mx-2">
    <div className="skill-item__container flex">
      <h4 className="skill-item__name text-amber-900 grow">{name}</h4>
      <span className="text-right my-auto font-bold">{ability}</span>
    </div>
    <div className="skill-item__bg-level w-auto h-3 rounded-md bg-gray-300">
      <div className="fill-level h-full rounded-md bg-blue-500" style={{ width: `${ability}` }}></div>
    </div>
  </div>
)

export default SkillItem
