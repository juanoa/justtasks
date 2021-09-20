import React, {useEffect, useState} from 'react'
import {useDispatch} from "react-redux";
import {DragDropContext, Droppable} from "react-beautiful-dnd";

import {DayColumn} from "./dayColumn";
import {getBackwardDays, getForwardDays, getNextDays, isDateToday} from "../../helpers/moment";
import {taskStartDelete, taskStartLoading, taskStartUpdateDayFromDrag} from "../../actions/tasks";
import {Seo} from "../seo";
import {TaskModal} from "./taskModal";

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
      dispatch(taskStartDelete(taskId))
    } else if (dayDest) {
      dispatch(taskStartUpdateDayFromDrag(taskId, dayDest))
    }
  }

  const handleBackward = () => {
    const newDays = getBackwardDays(days)
    setDays(newDays)
  }

  const handleForward = () => {
    const newDays = getForwardDays(days)
    setDays(newDays)
  }

  const handleToday = () => {
    const newDays = getNextDays(4)
    setDays(newDays)
  }

  return (
    <>
      <Seo title="Dashboard | JustTasks" />
      <DragDropContext
        onDragEnd={onDragEnd}
      >
        <div className="row m-4">
          <div className="d-flex justify-content-end font-monospace mb-3">
            <span className="btn btn-light m-1" onClick={handleBackward}><i className="bi bi-arrow-left"/></span>
            <span className="btn m-1" onClick={handleToday}>Today</span>
            <span className="btn btn-light m-1" onClick={handleForward}><i className="bi bi-arrow-right"/></span>
          </div>
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

      <TaskModal />
    </>
  )
}