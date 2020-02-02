import React from 'react'

type Props = {
  data: Month | []
}

const WeatherList: React.FC<Props> = props => { 
  return <div className="weather-list"></div>
}

export default  WeatherList