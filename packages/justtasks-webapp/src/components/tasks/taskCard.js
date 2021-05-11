import React from 'react'
import {Draggable} from "react-beautiful-dnd";
import {useDispatch} from "react-redux";
import {startTaskUpdate} from "../../actions/tasks";

export const TaskCard = ({task, index}) => {

  const dispatch = useDispatch()

  const completeTask = () => {
    task.completed = true
    dispatch(startTaskUpdate(task))
  }

  const incompleteTask = () => {
    task.completed = false
    dispatch(startTaskUpdate(task))
  }

  if (task.completed) {
    return (
      <div className="card mt-2 bg-light">
        <div className="card-body d-flex justify-content-between">
          <del>{task.title}</del>
          <i
            className="bi bi-arrow-90deg-up"
            onClick={incompleteTask}
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
              <i
                className="bi bi-check-lg"
                onClick={completeTask}
              />
            </div>
          </div>
        )}
      </Draggable>
    )
  }
}