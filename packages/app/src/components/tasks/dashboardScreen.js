import React, {useState} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {DragDropContext, Droppable} from "react-beautiful-dnd";
import Swal from "sweetalert2";

import {DayColumn} from "./dayColumn";
import {getBackwardDays, getFormattedDayFromDate, getForwardDays, getNextDays, isDateToday} from "../../helpers/moment";
import {startTaskUpdate, taskStartDelete} from "../../actions/tasks";
import {Seo} from "../seo";
import {TaskModal} from "./taskModal";

export const DashboardScreen = () => {

  const dispatch = useDispatch()

  const {tasks: allTasks} = useSelector(state => state.tasks)
  const {premium} = useSelector(state => state.auth)

  const initDaysState = getNextDays(4)
  const [days, setDays] = useState(initDaysState);

  const getList = (day) => {
    return allTasks
      .filter(t => (getFormattedDayFromDate(day) === t.day))
      .sort((a, b) => (a.index - b.index))
      || {tasks: []}
  }

  const reorder = (list, startIndex, endIndex) => {
    const result = JSON.parse(JSON.stringify(list))
    const [removed] = result.splice(startIndex, 1)
    result.splice(endIndex, 0, removed)

    result.forEach((task, i) => {
      if (task.index !== i) {
        task.index = i
        dispatch(startTaskUpdate(task))
      }
    })
  }

  const move = (source, destination, droppableSource, droppableDestination) => {
    if (destination.length >= process.env.REACT_APP_MAX_TASKS_FREE_TIER && !premium) {
      return Swal.fire('Error', `Upgrade to premium tier to add more than ${process.env.REACT_APP_MAX_TASKS_FREE_TIER} tasks in a day.`, 'error')
    }
    const sourceClone = JSON.parse(JSON.stringify(source))
    const destClone = JSON.parse(JSON.stringify(destination))
    const [removed] = sourceClone.splice(droppableSource.index, 1)

    destClone.splice(droppableDestination.index, 0, removed)

    sourceClone.forEach((task, i) => {
      if (task.index !== i) {
        task.index = i
        dispatch(startTaskUpdate(task))
      }
    })

    destClone.forEach((task, i) => {
      let updated = false
      if (task.index !== i) {
        task.index = i
        updated = true
      }
      if (task.day !== droppableDestination.droppableId) {
        task.day = droppableDestination.droppableId
        updated = true
      }
      if (updated) {
        dispatch(startTaskUpdate(task))
      }
    })
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