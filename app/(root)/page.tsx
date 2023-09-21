"use client"
import React, { useState } from 'react';

const Box = ({ id, color, onDragStart }) => {
  const handleDragStart = (e) => {
    onDragStart(id);
    e.dataTransfer.setData('text/plain', id);
  };

  return (
    <div
      draggable
      onDragStart={handleDragStart}
      style={{ backgroundColor: color, width: '50px', height: '50px', margin: '10px' }}
    ></div>
  );
};

const Container = ({ children, onDrop, onDragOver, containerId }) => {
  const handleDragOver = (e) => {
    e.preventDefault();
    onDragOver(containerId);
  };

  return (
    <div
      onDragOver={handleDragOver}
      onDrop={onDrop}
      style={{
        width: '200px',
        height: '200px',
        border: '2px dashed #aaa',
        padding: '16px',
        margin: '16px',
      }}
    >
      {children}
    </div>
  );
};

function App() {
  const [boxColor, setBoxColor] = useState('red');
  const [draggedBoxId, setDraggedBoxId] = useState(null);

  const handleBoxDragStart = (id) => {
    setDraggedBoxId(id);
  };

  const handleContainerDrop = (containerId) => {
    if (containerId !== draggedBoxId) {
      // Change the box color when it's dropped over a different container
      setBoxColor('blue');
    }
    setDraggedBoxId(null);
  };

  return (
    <div className="App">
      <h1>Drag and Drop Box Example</h1>
      <div style={{ display: 'flex' }}>
        <Container onDrop={() => handleContainerDrop(1)} containerId={1}>
          <Box id="box1" color={boxColor} onDragStart={handleBoxDragStart} />
        </Container>
        <Container onDrop={() => handleContainerDrop(2)} containerId={2}>
          <Box id="box2" color={boxColor} onDragStart={handleBoxDragStart} />
        </Container>
        <Container onDrop={() => handleContainerDrop(3)} containerId={3}>
          <Box id="box3" color={boxColor} onDragStart={handleBoxDragStart} />
        </Container>
      </div>
      <p>Box color: {boxColor}</p>
    </div>
  );
}

export default App;

