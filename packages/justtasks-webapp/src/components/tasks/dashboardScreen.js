import React, {useEffect, useState} from 'react'
import {useDispatch} from "react-redux";
import {DragDropContext, Droppable} from "react-beautiful-dnd";

import {DayColumn} from "./dayColumn";
import {getNextDays, isDateToday} from "../../helpers/moment";
import {taskStartDeleteFromDrag, taskStartLoading, taskStartUpdateDayFromDrag} from "../../actions/tasks";

export const DashboardScreen = () => {

  const dispatch = useDispatch()

  const initDaysState = getNextDays(4)
  const [days, setDays] = useState(initDaysState);

  useEffect(() => {
    dispatch(taskStartLoading())
  }, [dispatch]);

  const onDragEnd = (e) => {
    const taskId = e.draggableId
    const dayDest = e.destination?.droppableId
    if (dayDest === 'delete') {
      dispatch(taskStartDeleteFromDrag(taskId))
    } else if (dayDest) {
      dispatch(taskStartUpdateDayFromDrag(taskId, dayDest))
    }
  }

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
      <Droppable droppableId="delete">
        {(provided, snapshot) => (
          <div
            className="text-center rounded-circle btn-lg"
            ref={provided.innerRef}
            style={{
              backgroundColor: snapshot.isDraggingOver ? 'darkred' : 'indianred',
              position: "fixed",
              bottom: 20,
              right: 20,
              fontSize: "2rem",
              color: "white"
            }}
            {...provided.droppableProps}
          >
            <i className="bi bi-trash"/>
          </div>
        )}
      </Droppable>
     </DragDropContext>
  )
}