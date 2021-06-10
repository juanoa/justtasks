import React from 'react'
import {Draggable} from "react-beautiful-dnd";
import {useDispatch} from "react-redux";
import {startTaskUpdate, taskSetActive} from "../../actions/tasks";

export const TaskCard = ({task, index, isToday}) => {

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

  if (task.completed) {
    return (
      <div className="card mt-2 bg-light">
        <div className="card-body d-flex justify-content-between">
          <del>{task.title}</del>
          <i
            className={`bi bi-check-circle ${(isToday) ? 'text-danger' : ''}`}
            onClick={incompleteTaskHandle}
          />
        </div>
      </div>
    )
  } else {
    return (
      <Draggable
        draggableId={task._id}
        index={index}
      >
        {(provided, snapshot) => (
          <div
            className="card mt-2"
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            <div className="card-body d-flex justify-content-between">
              <span>{task.title}</span>
              <div style={{display: 'flex'}}>
                <i
                  className={`bi ${(task.notes) ? 'bi-chat-left-dots' : 'bi-chat-left'} ${(isToday) ? 'text-danger' : ''}`}
                  style={{
                    marginLeft: 10,
                    cursor: 'default',
                  }}
                  onClick={setActiveTaskHandle}
                />
                <i
                  className={`bi bi-circle ${(isToday) ? 'text-danger' : ''}`}
                  style={{
                    marginLeft: 10,
                    cursor: 'default',
                  }}
                  onClick={completeTaskHandle}
                />
              </div>
            </div>
          </div>
        )}
      </Draggable>
    )
  }
}