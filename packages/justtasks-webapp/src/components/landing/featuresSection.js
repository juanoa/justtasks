import React from 'react'

import CreateTask from "./img/create-task.gif"
import MoveTask from "./img/move-task.gif"
import CompleteTask from "./img/complete-task.gif"

export const FeaturesSection = () => {
  return (
    <div className="position-relative overflow-hidden p-3 p-md-5" id="features">
      <div className="col-md-10 pt-lg-5 pb-lg-5 mx-auto">
        <h2>Features</h2>
        <div className="row mt-4 text-center">
          <div className="col-md-4">
            <img
              src={CreateTask}
              className="w-100 mb-3 rounded"
              alt="create tasks"
            />
            <h3>Create tasks</h3>
            <p>Easily create tasks on a specific day by assigning them a title.</p>
          </div>
          <div className="col-md-4">
            <img
              src={MoveTask}
              className="w-100 mb-3 rounded"
              alt="move tasks"
            />
            <h3>Move tasks</h3>
            <p>Move tasks between days by moving them between the different columns.</p>
          </div>
          <div className="col-md-4">
            <img
              src={CompleteTask}
              className="w-100 mb-3 rounded"
              alt="complete tasks"
            />
            <h3>Complete tasks</h3>
            <p>Mark tasks as completed or uncompleted them at the touch of a button.</p>
          </div>
        </div>
      </div>
    </div>
  )
}