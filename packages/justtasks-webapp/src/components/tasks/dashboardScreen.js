import React, {useState} from 'react'
import {DayColumn} from "./dayColumn";
import moment from 'moment'

export const DashboardScreen = () => {

  const initDaysState = []
  for (let i = 0; i < 4; i++) {
    initDaysState.push(moment().add(i, 'days'))
  }

  const [days, setDays] = useState(initDaysState);

  return (
    <div className="row m-4">
      {
        days.map((day, i) => (
          <DayColumn
            day={day}
            isToday={moment(day).format('DDMMYYYY') === moment().format('DDMMYYYY')}
            key={i}
          />
        ))
      }
    </div>
  )
}