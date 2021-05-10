import React from 'react'
import {DragDropContext, Droppable, Draggable} from "react-beautiful-dnd";

export const Example = () => {
  const onBeforeCapture = () => {
    /*...*/
  };

  const onBeforeDragStart = () => {
    /*...*/
  };

  const onDragStart = () => {
    /*...*/
  };
  const onDragUpdate = () => {
    /*...*/
  };
  const onDragEnd = () => {
    // the only one that is required
  };

  return (
    <DragDropContext
      onBeforeCapture={onBeforeCapture}
      onBeforeDragStart={onBeforeDragStart}
      onDragStart={onDragStart}
      onDragUpdate={onDragUpdate}
      onDragEnd={onDragEnd}
    >
      <Droppable droppableId="droppable-1" type="PERSON">
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            style={{ backgroundColor: snapshot.isDraggingOver ? 'blue' : 'grey' }}
            {...provided.droppableProps}
          >
            <h2>Columna 1</h2>
            <Draggable draggableId="draggable-1" index={0}>
              {(provided, snapshot) => (
                <div
                  ref={provided.innerRef}
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
                >
                  <h4>My draggable</h4>
                </div>
              )}
            </Draggable>
            <Draggable draggableId="draggable-2" index={1}>
              {(provided, snapshot) => (
                <div
                  ref={provided.innerRef}
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
                >
                  <h4>My draggable</h4>
                </div>
              )}
            </Draggable>
          </div>
        )}
      </Droppable>
      <Droppable droppableId="droppable-2" type="PERSON">
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            style={{ backgroundColor: snapshot.isDraggingOver ? 'blue' : 'grey' }}
            {...provided.droppableProps}
          >
            <h2>Columna 2</h2>
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );

}