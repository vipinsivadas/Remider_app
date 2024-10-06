import React, { useState } from 'react';
import './Reminder.css'
function Reminder(props) {

    const [reminder, setReminder] = useState([]);
    const [newReminder, setNewReminder] = useState("");

    const handleInputChange = (event) => {
        setNewReminder(event.target.value)
    }
    const handleAddReminder = () => {
        if (newReminder.trim()) {
            setReminder([...reminder, newReminder])
            setNewReminder("")
        }
    }

    const handleDeleteReminder = (index)=>{
       setReminder(reminder.filter((item,itemindex)=>itemindex != index))
    }
    return (
        <div className='container'>

            <h1 className='reminder'>Reminder App</h1>

            <div className='input-container'>
                <input className='input-col' type="text" value={newReminder} placeholder='Enter a Reminder' onChange={handleInputChange} />
                <button className='add-btn' onClick={handleAddReminder}>Add Remidner</button>
            </div>
            {
                reminder.length > 0 ?(
                <ul className='reminder-list'>

                {
                    reminder.map((Data,index) => (

                        <li key={index}>
                            {Data}
                            <button onClick={()=>handleDeleteReminder(index)} className='Delete-btn'>Delete</button>
                        </li>

                    ))
                }

            </ul>):
            <p>no reminder found</p>
            }
            
        </div>
    );
}

export default Reminder;