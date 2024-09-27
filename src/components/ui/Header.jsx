import React from 'react'

const Header = ({title, emphasis, subtitle}) => {
  return (
    <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 max-w-[550px]">
    {title} <span className="text-yellow-500">{emphasis}</span>{" "}
    {subtitle}
  </h1>
  )
}

export default Header