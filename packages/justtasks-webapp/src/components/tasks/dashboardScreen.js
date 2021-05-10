import React, {useState} from 'react'
import moment from 'moment'

import {DayColumn} from "./dayColumn";
import {getNextDays} from "../../helpers/moment";

export const DashboardScreen = () => {

  const initDaysState = getNextDays(4)

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