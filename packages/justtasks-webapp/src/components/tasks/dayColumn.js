import React from 'react'
import moment from 'moment'

import {TaskCard} from "./taskCard";

export const DayColumn = ({day, isToday = false}) => {

  const random = [1, 2, 3, 4, 5, 6]

  return (
    <div className="col-md-3">
      <div className={`text-center ${(isToday) ? 'text-danger' : ''}`}>
        <h3>{moment(day).format('dddd')}</h3>
        <small>{moment(day).format('Do MMM')}</small>
      </div>
      <hr/>
      <div>
        {
          random.map(r => <TaskCard key={r}/>)
        }
      </div>
      <div className="text-center font-monospace mt-3">
        <small>+ Add task</small>
      </div>
    </div>
  )
}