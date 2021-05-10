import React from 'react'

export const TaskCard = ({task}) => {
  return (
    <div className="card mt-3">
      <div className="card-body">
        {task.title}
      </div>
    </div>
  )
}