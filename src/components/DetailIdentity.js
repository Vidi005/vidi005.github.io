import React from 'react'

const DetailIdentity = () => (
  <div className="identity-detail desktop:my-auto desktop:basis-2/3 desktop:ml-8 phone:basis-full phone:my-4 phone:mx-auto">
    <table className="text-justify tablet:mx-auto desktop:mx-px">
      <tbody>
        <tr>
          <th>Name</th>
          <td className="px-2">:</td>
          <td>Vidi Fitriansyah Hidarlan</td>
        </tr>
        <tr>
          <th>Gender</th>
          <td className="px-2">:</td>
          <td>Male</td>
        </tr>
        <tr>
          <th>Religion</th>
          <td className="px-2">:</td>
          <td>Moslem</td>
        </tr>
        <tr>
          <th>Hobby</th>
          <td className="px-2">:</td>
          <td>Cycling</td>
        </tr>
        <tr>
          <th className="align-top">Address</th>
          <td className="px-2 align-top">:</td>
          <td>Cirebon, West Java</td>
        </tr>
        <tr>
          <th>Blog</th>
          <td className="px-2">:</td>
          <td><a className="underline hover:text-blue-500 visited:text-purple-900" href="http://vidi005.blogspot.com">http://vidi005.blogspot.com</a></td>
        </tr>
      </tbody>
    </table>
  </div>
)

export default DetailIdentity
