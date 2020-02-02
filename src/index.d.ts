type WeatherMap = {
  "Jan": Month,
  "Feb": Month,
}

type Month = {
  dates: DateWether[]
}

type DateWether = {
  [key]: string
}