import React, {useState} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {DragDropContext, Droppable} from "react-beautiful-dnd";

import {DayColumn} from "./dayColumn";
import {getBackwardDays, getFormattedDayFromDate, getForwardDays, getNextDays, isDateToday} from "../../helpers/moment";
import {startTaskUpdate, taskStartDelete} from "../../actions/tasks";
import {Seo} from "../seo";
import {TaskModal} from "./taskModal";

export const DashboardScreen = () => {

  const dispatch = useDispatch()

  const {tasks: allTasks} = useSelector(state => state.tasks)

  const initDaysState = getNextDays(4)
  const [days, setDays] = useState(initDaysState);

  const getList = (day) => {
    return allTasks
      .filter(t => (getFormattedDayFromDate(day) === t.day))
      .sort((a, b) => (a.index - b.index))
      || {tasks: []}
  }

  const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    result.forEach((task, i) => {
      if (task.index !== i) {
        task.index = i
        dispatch(startTaskUpdate(task))
      }
    })
  }

  const move = (source, destination, droppableSource, droppableDestination) => {

  }

  const onDragEnd = (e) => {
    const {source, destination} = e
    if (!destination) return

    if (destination.droppableId === 'delete') {
      dispatch(taskStartDelete(e.draggableId))
    }

    if (source.droppableId === destination.droppableId) {
      reorder (
        getList(source.droppableId),
        source.index,
        destination.index
      )
    } else {
      move (
        getList(source.droppableId),
        getList(destination.droppableId),
        source,
        destination
      )
    }
    // const taskId = e.draggableId
    // const dayDest = e.destination?.droppableId
    // const indexDest = e.destination?.index
    // if (dayDest === 'delete') {
    //   dispatch(taskStartDelete(taskId))
    // } else if (dayDest) {
    //   dispatch(taskStartUpdateDayFromDrag(taskId, dayDest))
    // }
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
                tasks={getList(day)}
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