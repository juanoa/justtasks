import React, {useState} from 'react'
import {useDispatch} from "react-redux";
import {useForm} from "../../hooks/useForm";
import {taskStartAddNew} from "../../actions/tasks";
import moment from "moment";
import {getDayFromDate} from "../../helpers/moment";

export const AddTask = ({day}) => {

  const dispatch = useDispatch()

  const [showInput, setShowInput] = useState(false);

  const [formValues, handleInputChange, clear] = useForm({
    titleNewTask: ''
  });

  const {titleNewTask} = formValues

  const handleShowInput = () => {
    setShowInput(true)
  }
  const handleHideInput = (e) => {
    if (e.key === "Escape") {
      setShowInput(false)
    }
  }

  const handleForm = (e) => {
    e.preventDefault()
    dispatch(taskStartAddNew(titleNewTask, getDayFromDate(day)))
    clear()
    setShowInput(false)
  }

  return (
    <div className="text-center mt-4">
      {
        (showInput)
          ? (
            <form onSubmit={handleForm}>
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="What do you have in mind?"
                  name="titleNewTask"
                  autoFocus={true}
                  onKeyDown={handleHideInput}
                  value={titleNewTask}
                  onChange={handleInputChange}
                />
              </div>
            </form>
          )
          : <small className="font-monospace" onClick={handleShowInput}>+ Add task</small>
      }
    </div>
  )
}