import { useMemo, useState } from "react";
import { Card, CardContent, CardHeader, Button, TextField, Box } from "@mui/material";
import { SortableContext, useSortable } from "@dnd-kit/sortable";
import {   Add as AddIcon } from "@mui/icons-material";
import { CSS } from "@dnd-kit/utilities";
import { Column, Id, Task } from "./types";
import TaskCard from "./TaskCard";

interface Props {
  column: Column;
  //updateColumn: (id: Id, title: string) => void;
  createTask: (columnId: Id) => void;
  updateTask: (id: Id, content: string) => void;
  deleteTask: (id: Id) => void;
  tasks: Task[];
}

function ColumnContainer({
  column,
 // updateColumn,
  createTask,
  tasks,
  deleteTask,
  updateTask,
}: Props) {
  const [editMode, setEditMode] = useState(false);

  const tasksIds = useMemo(() => {
    return tasks.map((task) => task.id);
  }, [tasks]);

  const {
    setNodeRef,
    attributes,
    listeners,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: column.id,
    data: {
      type: "Column",
      column,
    },
    disabled: editMode,
  });

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };

  return (
    <Card
      ref={setNodeRef}
      style={style}
      sx={{
        width: 350,
        height: 500,
        maxHeight: 500,
        display: 'flex',
        flexDirection: 'column',
        opacity: isDragging ? 0.4 : 1,
        boxShadow: 3,
        borderRadius: 5,
        backgroundColor: 'background.default',
      }}
    >
      {/* Column title */}
      <CardHeader
        title={
          editMode ? (
            <TextField
              value={column.title}
              //onChange={(e) => updateColumn(column.id, e.target.value)}
              autoFocus
              onBlur={() => setEditMode(false)}
              onKeyDown={(e) => {
                if (e.key === "Enter") setEditMode(false);
              }}
              variant="outlined"
              size="small"
              
            />
          ) : (
            column.title
          )
        }
        
        sx={{
          backgroundColor: 'background.paper',
          cursor: editMode ? 'default' : 'grab',
        }}
        {...attributes}
        {...listeners}
        //onClick={() => setEditMode(true)}
      />

      {/* Column task container */}
      <CardContent
        sx={{
          flex: 1,
          overflowY: 'auto',
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          
          
        }}
      >
        <SortableContext items={tasksIds}>
          {tasks.map((task) => (
            <TaskCard
              key={task.id}
              task={task}
              deleteTask={deleteTask}
              updateTask={updateTask}
            />
          ))}
        </SortableContext>
      </CardContent>

      {/* Column footer */}
      <Box
        sx={{
          p: 2,
          display: 'flex',
          justifyContent: 'center',
          
        
        }}
      >
        <Button
          variant="outlined"
          startIcon={<AddIcon />}
          onClick={() => createTask(column.id)}
        >
          Add task
        </Button>
      </Box>
    </Card>
  );
}

export default ColumnContainer;
