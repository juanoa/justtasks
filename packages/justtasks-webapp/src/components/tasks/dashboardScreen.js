import React, {useState} from 'react'
import {useDispatch} from "react-redux";
import {DragDropContext} from "react-beautiful-dnd";

import {DayColumn} from "./dayColumn";
import {getNextDays, isDateToday} from "../../helpers/moment";
import {taskStartUpdateDayFromDrag} from "../../actions/tasks";

export const DashboardScreen = () => {

  const dispatch = useDispatch()

  const initDaysState = getNextDays(4)
  const [days, setDays] = useState(initDaysState);

  const onDragEnd = (e) => {
    const taskId = e.draggableId
    const dayDest = e.destination.droppableId
    dispatch(taskStartUpdateDayFromDrag(taskId, dayDest))
  };

  return (
    <DragDropContext
      onDragEnd={onDragEnd}
    >
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
    </DragDropContext>
  )
}