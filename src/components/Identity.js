import React from 'react'
import DetailIdentity from './DetailIdentity'

const Identity = () => (
  <div className="resume-main__profile-identity flex desktop:flex-nowrap phone:flex-wrap">
    <img className="desktop:basis-1/3 desktop:aspect-square object-cover object-center h-80 tablet:basis-1/2 tablet:mx-auto phone:basis-full rounded-3xl border-2 border-blue-900" src="/images/profile.jpg" alt="Profile"/>
    <DetailIdentity />
  </div>
)

export default Identity
