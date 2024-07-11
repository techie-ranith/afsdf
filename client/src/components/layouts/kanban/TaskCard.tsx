import React, { useState } from "react";
import { Card, CardContent, IconButton, TextareaAutosize } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Id, Task } from "./types";

interface Props {
  task: Task;
  deleteTask: (id: Id) => void;
  updateTask: (id: Id, content: string) => void;
}

const TaskCard: React.FC<Props> = ({ task, deleteTask, updateTask }) => {
  const [mouseIsOver, setMouseIsOver] = useState(false);
  const [editMode, setEditMode] = useState(true);

  const {
    setNodeRef,
    attributes,
    listeners,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: task.id,
    data: {
      type: "Task",
      task,
    },
    disabled: editMode,
  });

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
    opacity: isDragging ? 0.3 : 1,
  };

  const toggleEditMode = () => {
    //can be toggled by clicking on the card to edit the content
   setEditMode((prev) => !prev);
    setMouseIsOver(false);
  };

  return (
    <Card
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      onClick={toggleEditMode}
      onMouseEnter={() => setMouseIsOver(true)}
      onMouseLeave={() => setMouseIsOver(false)}
      sx={{
        p: 2.5,
        height: "100px",
        minHeight: "100px",
        display: "flex",
        alignItems: "center",
        backgroundColor: "background.paper",
        borderRadius: 2,
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
        position: "relative",
        cursor: "grab",
        "&:hover": {
          boxShadow: "0 4px 16px rgba(0, 0, 0, 0.2)",
        },
      }}
    >
      <CardContent sx={{ flex: 1, p: 1.5, pt:2 }}>
        {editMode ? (
          <TextareaAutosize
            style={{
              width: "100%",
              height: "90%",
              resize: "none",
              border: "none",
              borderRadius: "4px",
              backgroundColor: "transparent",
              color: "#000", // Changed to black for better visibility
              outline: "none",
            }}
            value={task.content}
            autoFocus
            placeholder="Task content here"
            onBlur={toggleEditMode}
            onKeyDown={(e) => {
              if (e.key === "Enter" && e.shiftKey) {
                toggleEditMode();
              }
            }}
            onChange={(e) => updateTask(task.id, e.target.value)}
          />
        ) : (
          <p
            style={{
              margin: 2,
             height: "90%",
              overflowY: "auto",
             overflowX: "hidden",
          //    whiteSpace: "pre-wrap",
            
            }}
          >
            {task.content}
          </p>
        )}
      </CardContent>

      {mouseIsOver && (
        <IconButton
          onClick={() => deleteTask(task.id)}
          sx={{
            position: "absolute",
            right: 4,
            top: "50%",
            transform: "translateY(-50%)",
            backgroundColor: "columnBackgroundColor",
            opacity: 0.6,
            "&:hover": { opacity: 1 },
          }}
        >
          <DeleteIcon style={{ color: "red" }} />
        </IconButton>
      )}
    </Card>
  );
};

export default TaskCard;
