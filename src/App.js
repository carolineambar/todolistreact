import React from 'react';
//import Form from './Components/Form/Form';
import Item from './Components/Item/Item';
import Title from './Components/Title/Title';
import './App.css';

function App() {
  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Open+Sans&family=PT+Sans&display=swap" rel="stylesheet"/>
      <div class="container">
        <main class="main">
          <Title/>
          <Item/>
        </main>
      </div>
    </>
  );
}

export default App;
