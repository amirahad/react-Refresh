import React, { useState } from 'react'

function NewEventFrom({ addEvent }) {

    const [title,setTitle] = useState("");
    const [date,setDate] = useState("");
    // const [id, setId] = useState(0)
    
    // const handleChange = (e) => {
    //     console.log(e.target.value);
    //     setTitle(e.target.value);
    // }
    const resetForm = () =>{
        setTitle('')
        setDate('')
        // setId(id+1)
    }
    
    const handleSubmit = (e) =>{
        e.preventDefault();
        // let id = 0;
        const event = {
            title: title,
            date: date,
            // id: setId 
        }
        addEvent(event)
        // console.log(event);
        resetForm()
    }

    return (
        <form className='new-event-form' onSubmit={handleSubmit}>
            {/* <label htmlFor="ate">Event Title: </label>
            <input type="text" for="title" /> */}

            <label>
                <span>Event Title: </span>
                <input 
                    type="text" 
                    onChange={(e) => setTitle(e.target.value)}
                    value = {title}
                />
            </label>
            <br />
            <br />
            <label>
                <span>Event Date: </span>
                <input 
                    type="date" 
                    onChange={(e) => setDate(e.target.value)} 
                    value = {date}
                />
            </label>
            <br /> <br />
            <button >Submit</button><br />
            {/* <h3>{title}</h3>
            <p>{date}</p>
            <a onClick={resetForm}>Reset the Form</a> */}
        </form>
    )
}

export default NewEventFrom
