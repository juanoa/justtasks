import moment from "moment";

const format = "YYYYMMDD"

export const getNextDays = (days) => {
  const nextDays = []

  for (let i = 0; i < days; i++) {
    nextDays.push(moment().add(i, 'days'))
  }
  return nextDays
}

export const getFormattedDayFromDate = (date) => {
  return moment(date).format(format)
}

export const isDateToday = (date) => {
  return moment(date).format(format) === moment().format(format)
}

export const getForwardDays = (days) => {
  console.log(days)
  return [
    days[1],
    days[2],
    days[3],
    moment(days[3]).add(1, 'days')
  ]
}

export const getBackwardDays = (days) => {
  console.log(days)
  return [
    moment(days[0]).subtract(1, 'days'),
    days[0],
    days[1],
    days[2],
  ]
}