
import { useState } from 'react';
import './App.css';

import { closestCorners, DndContext } from '@dnd-kit/core';
import Column from './Components/Column/Column';
import { arrayMove } from '@dnd-kit/sortable';

function App() {
   
  const [tasks , setTasks] = useState([
    { id : 1 , title : "learn react" },
    { id : 2 , title : "practice react"},
    { id : 3 , title : "learn hooks"},
  ]);

  const getTaskPos = id => tasks.findIndex(task => task.id === id)

  const handleDragEnd = event => {
     const {active , over} = event;

     if(active.id === over.id) return;

     setTasks(tasks => {
         const originalPos = getTaskPos(active.id);
         const newPos = getTaskPos(over.id);

         return arrayMove(tasks, originalPos, newPos);
     });
  };

  return (
    <>
      <div className="App">
        <h1> MyTasks </h1>
        <DndContext onDragEnd ={handleDragEnd} collisionDetection={closestCorners}>
          <Column tasks = {tasks} />
        </DndContext>
      </div>
    </>
  )
}

export default App
