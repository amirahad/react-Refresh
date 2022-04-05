import './App.css';
import { useState } from 'react';
import Title from './components/Title';
import Modal from './components/Modal';
import EventList from './components/EventList';

function App() {
  // const [name,setName] = useState('Amir')
  const [showModal,setShowModal] = useState(false)
  const [showEvents,setShowevents] = useState(true)
  const [events,setEvents] = useState([
    {title: "amir is a good boy", id: 1},
    {title: "raza is a good boy", id: 2},
    {title: "ahad is a good boy", id: 3}
  ])

  // const handleclick = () => {
  //   setName('Ahad')
  //   console.log(name);
  // }
  
  const handleClose = () =>{
    setShowModal(false);
  }
  const handleClick = (id) =>{
    // console.log(id);
    setEvents((prevEvents) => {
      return prevEvents.filter((event) => {
        return id !== event.id
      })
    })
  }

  return (
    <div className="App">
      <Title title= "Hello Everyone" subtitle= "what is up?"/>
      {/* <h1>My Name is {name}</h1>
      <button onClick={handleclick}>Change Name</button> */}
      {showEvents && <EventList events={events} handleClick={handleClick} />}
      <div>
        {!showEvents && <button onClick={() => setShowevents(true)}>Show</button>}
        {showEvents && <button onClick={() => setShowevents(false)}>Hide</button>}
      </div>
      <button onClick={() => setShowModal(true)}>Show Modal</button>
      <Title title= "well done" subtitle= "not a big deal"/>
      { showModal && <Modal handleClose = {handleClose}>
        <h2>Kuch Bhi...</h2>
        <p>Ha Bhai Kuch Bhi</p>
      </Modal>}
    </div>
  );
}

export default App;
