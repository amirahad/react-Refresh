
export default function EventList({events,handleClick}) {
  return (
    <div>
      {events.map((event , index) => (
        <div key={index}>
         <h2>{index + 1} = {event.title}</h2>
         <h3>{event.date}</h3>
         <button onClick = {() => handleClick(event.id)}>Delete</button>
        </div>
        
      ))}
    </div>
  )
}
