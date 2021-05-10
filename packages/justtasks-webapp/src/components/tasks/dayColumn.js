import React from 'react'
import {TaskCard} from "./taskCard";

export const DayColumn = ({weekDay}) => {

  const random = [1,1,1,1,1,1]

  return (
    <div className="col-md-3">
      <div className="text-center">
        <h3>{weekDay}</h3>
        <small>10th may</small>
        <hr/>
      </div>
      <div>
        {
          random.map(r => <TaskCard />)
        }
      </div>
      <div className="text-center font-monospace mt-3">
        <small>+ Add task</small>
      </div>
    </div>
  )
}