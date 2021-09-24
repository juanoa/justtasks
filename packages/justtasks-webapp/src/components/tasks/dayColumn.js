import React from 'react'
import moment from 'moment'

import {TaskCard} from "./taskCard";
import {AddTask} from "./addTask";
import {getFormattedDayFromDate} from "../../helpers/moment";
import {Droppable} from "react-beautiful-dnd";

export const DayColumn = ({day, tasks, isToday = false}) => {

  return (
    <div className="col-md-3">
      <div className={`text-center ${(isToday) ? 'text-danger' : ''} d-flex justify-content-between`}>
        <span className="h4">{moment(day).format('ddd')}</span>
        <span>{moment(day).format('Do MMM')}</span>
      </div>
      <hr size={5} className={`mt-0 ${(isToday) ? 'text-danger' : ''}`}/>
      <Droppable droppableId={getFormattedDayFromDate(day)}>
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {
              tasks.map(task => <TaskCard task={task} key={task._id} />)
            }
          </div>
        )}
      </Droppable>
      <AddTask day={day}/>
    </div>
  )
}