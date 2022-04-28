import React from 'react';
//import Form from './components/Form/Form';
import Title from './components/Title/Title';
import List from './components/List/List';
import './App.css';

function App() {
  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Open+Sans&family=PT+Sans&display=swap" rel="stylesheet"/>
      <div class="container">
        <main class="main">
          <Title/>
          <List/>
        </main>
      </div>
    </>
  );
}

export default App;
