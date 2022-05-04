import React from 'react';
import Form from './components/Form/Form'
import Title from './components/Title/Title';
import List from './components/List/List';
import './App.css';

function App() {
  const itemsIniciais = [
    {
      id:1,
      value:'tarefa2'
    },
    {
      id:2,
      value:'tarefa3'
    }
  ]
  const [items, setItems] = React.useState(itemsIniciais)
  const addNewItem = (item) => {
    setItems([...items, item])
  }
  return (
    <div class="container">
      <main class="main">
        <Title/>
        <List items={items}/>
        <Form addNewItem={addNewItem}/>
      </main>
    </div>
  );
}

export default App;
