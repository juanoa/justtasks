import moment from "moment";

export const getNextDays = (days) => {
  const nextDays = []

  for (let i = 0; i < days; i++) {
    nextDays.push(moment().add(i, 'days'))
  }

  return nextDays
}

export const getDayFromDate = (date) => {
  return moment(date).format("DDMMYYYY")
}

export const isDateToday = (date) => {
  return moment(date).format('DDMMYYYY') === moment().format('DDMMYYYY')
}