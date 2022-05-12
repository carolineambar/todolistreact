import React from 'react';
import Form from './components/Form/Form'
import Title from './components/Title/Title';
import List from './components/List/List';
import './App.css';
import { getItems } from './api/config';

function App() {
  const [items, setItems] = React.useState([])
  const addNewItem = (item) => {
    setItems([...items, item])
  }
  const loadItems = async () => {
    const data = await getItems()
    setItems(data)
  }
  React.useEffect (() => {
    loadItems()
  }, [])
  return (
    <div className="container">
      <main className="main">
        <Title/>
        <List items={items} setItems={setItems}/>
        <Form addNewItem={addNewItem}/>
      </main>
    </div>
  );
}

export default App;
