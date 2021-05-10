import React from 'react'
import moment from 'moment'
import {useSelector} from "react-redux";

import {TaskCard} from "./taskCard";
import {AddTask} from "./addTask";
import {getFormattedDayFromDate} from "../../helpers/moment";
import {Droppable} from "react-beautiful-dnd";

export const DayColumn = ({day, isToday = false}) => {

  const {tasks: totalTasks} = useSelector(state => state.tasks)
  const noCompletedTasks = totalTasks.filter(t => (getFormattedDayFromDate(day) === t.day && !t.completed)) || {tasks: []}
  const completedTasks = totalTasks.filter(t => (getFormattedDayFromDate(day) === t.day && t.completed)) || {tasks: []}

  return (
    <div className="col-md-3">
      <div className={`text-center ${(isToday) ? 'text-danger' : ''}`}>
        <h3>{moment(day).format('dddd')}</h3>
        <small>{moment(day).format('Do MMM')}</small>
      </div>
      <hr/>
      <Droppable droppableId={getFormattedDayFromDate(day)}>
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            style={{backgroundColor: snapshot.isDraggingOver ? '#f8f9fa' : ''}}
          >
            {
              noCompletedTasks.map((task, i) => <TaskCard task={task} index={i} key={i}/>)
            }
          </div>
        )}
      </Droppable>
      {
        completedTasks.length > 0 &&
        <div className={(noCompletedTasks.length > 0) ? 'mt-4' : ''}>
          {
            completedTasks.map((task, i) => <TaskCard task={task} key={i}/>)
          }
        </div>
      }
      <AddTask day={day}/>
    </div>
  )
}