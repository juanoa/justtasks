import React, {useEffect, useState} from 'react'
import Modal from 'react-modal'
import {useDispatch, useSelector} from "react-redux";

import {useForm} from "../../hooks/useForm";
import './style.css'
import {eventClearActiveEvent, startTaskUpdate, taskClearActive} from "../../actions/tasks";
import Swal from "sweetalert2";

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
}
Modal.setAppElement('#root')

export const TaskModal = () => {

  const {activeTask} = useSelector(state => state.tasks)
  const dispatch = useDispatch()

  const [title, setTitle] = useState('')
  const [notes, setNotes] = useState('')

  useEffect(() => {
    setTitle(activeTask?.title)
    setNotes(activeTask?.notes)
  }, [activeTask]);

  const closeModal = (e) => {
    e.preventDefault()
    dispatch(taskClearActive())
  }

  const handleSubmitForm = (e) => {
    e.preventDefault()

    if (notes.length > 1000) {
      Swal.fire('Notes\' length is too long', 'Max 1000 characters', 'error')
    } else {
      activeTask.title = title
      activeTask.notes = notes
      dispatch(startTaskUpdate(activeTask))
      dispatch(taskClearActive())
    }

  }

  const handleTitleChange = ({target}) => {
    setTitle(target.value)
  }
  const handleNotesChange = ({target}) => {
    setNotes(target.value)
  }

  return (
    <Modal
      isOpen={!!activeTask}
      onRequestClose={closeModal}
      style={customStyles}
      closeTimeoutMS={200}
      className="modal"
      overlayClassName="modal-task"
    >
      <h2>Edit task</h2>
      <hr/>
      <form
        className="container"
        onSubmit={handleSubmitForm}
      >
        <div>
          <label>Title</label>
          <input
            type="text"
            className="form-control"
            placeholder="Task title"
            name="title"
            autoComplete="off"
            value={title}
            onChange={handleTitleChange}
          />
        </div>

        <div className="mt-3">
          <label>Notes</label>
          <textarea
            className="form-control"
            placeholder="Task notes"
            rows="5"
            name="notes"
            value={notes}
            onChange={handleNotesChange}
          />
          <small className="form-text text-muted">Max 1000 characters</small>
        </div>

        <div className="mt-3">
          <button
            type="submit"
            className="btn btn-danger"
          >
            <i className="bi bi-save"/>
            <span> Save</span>
          </button>

          <button
            type="submit"
            className="btn btn-outline-danger"
            style={{marginLeft: 10}}
            onClick={closeModal}
          >
            <span> Close</span>
          </button>
        </div>

      </form>
    </Modal>
  )
}