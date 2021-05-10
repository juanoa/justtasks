import React from 'react'
import {Draggable} from "react-beautiful-dnd";

import {getDayFromDate} from "../../helpers/moment";

export const TaskCard = ({task, index}) => {
  if (task.completed) {
    return (
      <div className="card mt-2 bg-light">
        <div className="card-body">
          <del>{task.title}</del>
        </div>
      </div>
    )
  } else {
    return (
      <Draggable draggableId={task.id} index={index}>
        {(provided, snapshot) => (
          <div
            className="card mt-2"
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            <div className="card-body">
              {task.title}
            </div>
          </div>
        )}
      </Draggable>
    )
  }
}