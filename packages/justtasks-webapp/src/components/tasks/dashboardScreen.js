import React, {useState} from 'react'

import {DayColumn} from "./dayColumn";
import {getNextDays, isDateToday} from "../../helpers/moment";

export const DashboardScreen = () => {

  const initDaysState = getNextDays(4)

  const [days, setDays] = useState(initDaysState);

  return (
    <div className="row m-4">
      {
        days.map((day, i) => (
          <DayColumn
            day={day}
            isToday={isDateToday(day)}
            key={i}
          />
        ))
      }
    </div>
  )
}