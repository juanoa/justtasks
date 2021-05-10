import moment from "moment";

const format = "DDMMYYYY"

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