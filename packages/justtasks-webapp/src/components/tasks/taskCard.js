import React from 'react'

export const TaskCard = ({task}) => {
  return (
    <div className={`card mt-2 ${(task.completed) ? 'bg-light' : ''}`}>
      <div className="card-body">
        {
          (task.completed)
            ? <del>{task.title}</del>
            : task.title
        }
      </div>
    </div>
  )
}