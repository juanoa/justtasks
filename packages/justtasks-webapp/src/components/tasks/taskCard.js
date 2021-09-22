import React from 'react'
import {Draggable} from "react-beautiful-dnd";
import {useDispatch} from "react-redux";
import {startTaskUpdate, taskSetActive} from "../../actions/tasks";

import './style.css'

export const TaskCard = ({task}) => {

  const dispatch = useDispatch()

  const completeTaskHandle = () => {
    task.completed = true
    dispatch(startTaskUpdate(task))
  }

  const incompleteTaskHandle = () => {
    task.completed = false
    dispatch(startTaskUpdate(task))
  }

  const setActiveTaskHandle = () => {
    dispatch(taskSetActive(task))
  }

  return (
    <Draggable
      draggableId={task._id}
      index={task.index}
    >
      {(provided, snapshot) => (
        <div
          className={`card mt-2 border-0 border-bottom rounded-0`}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <div className="card-body d-flex justify-content-between p-1">
            <span
              className={`${(task.completed) ? 'completed-task completed-color' : ''}`}
              onClick={setActiveTaskHandle}
            >
              {
                task.notes &&
                <>
                  <i className="bi bi-card-text"/>
                  {" "}
                </>
              }
              {task.title}
            </span>
            <div style={{display: 'flex'}}>
              {
                task.completed &&
                <i
                  className={`bi bi-check-circle completed-color`}
                  onClick={incompleteTaskHandle}
                />
              }
              {
                !task.completed &&
                <i
                  className={`bi bi-circle`}
                  style={{
                    marginLeft: 10,
                    cursor: 'default',
                  }}
                  onClick={completeTaskHandle}
                />
              }
            </div>
          </div>
        </div>
      )}
    </Draggable>
  )
}