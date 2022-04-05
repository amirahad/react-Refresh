import './App.css';
import { useState } from 'react';

function App() {
  // const [name,setName] = useState('Amir')
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
      {/* <h1>My Name is {name}</h1>
      <button onClick={handleclick}>Change Name</button> */}
      {showEvents && events.map((event , index) => (
        <div key={event.id}>
         <h2>{index} = {event.title}</h2>
         <button onClick = {() => handleClick(event.id)}>Delete</button>
        </div>
        
      ))}
      <div>
        {!showEvents && <button onClick={() => setShowevents(true)}>Show</button>}
        {showEvents && <button onClick={() => setShowevents(false)}>Hide</button>}
      </div>
    </div>
  );
}

export default App;
