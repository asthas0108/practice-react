// components/KanbanBoard.jsx
import { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import { motion } from "framer-motion";

const initialData = {
  todo: ["Task 1", "Task 2"],
  inProgress: ["Task 3"],
};

const KanbanBoard = () => {
  const [tasks, setTasks] = useState(initialData);

  const onDragEnd = (result) => {
    if (!result.destination) return;

    const { source, destination } = result;
    const items = Array.from(tasks[source.droppableId]);
    const [moved] = items.splice(source.index, 1);
    tasks[destination.droppableId].splice(destination.index, 0, moved);

    setTasks({ ...tasks });
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="flex gap-8">
        {Object.entries(tasks).map(([column, items]) => (
          <Droppable droppableId={column} key={column}>
            {(provided) => (
              <div
                className="w-64 bg-gray-100 p-4 rounded"
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                <h2 className="text-lg font-bold mb-2">{column}</h2>
                {items.map((item, index) => (
                  <Draggable draggableId={item} index={index} key={item}>
                    {(provided) => (
                      <motion.div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="p-3 mb-2 bg-white rounded shadow"
                      >
                        {item}
                      </motion.div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        ))}
      </div>
    </DragDropContext>
  );
};

export default KanbanBoard;
