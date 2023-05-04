import React from 'react'
import Card from '../molecules/Card'
import Heading from '../atoms/Heading'

const TrendingSection = () => {
  return (
    <div className="my-16">
    <div className="flex flex-col w-full w-11/12 m-auto bg-violet-700 py-16">
      <Heading
        text="Start Learning"
        className="font-semibold text-2xl text-white"
      />
      <Heading
        text="Trending Courses This Week"
        className="font-semibold text-4xl text-white"
      />
      <div className="my-4"/>
      <div className="flex flex-row gap-16 w-11/12 m-auto">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  </div>
  )
}

export default TrendingSection