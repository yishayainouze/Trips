import { useState } from 'react'
export default function NewTrip():JSX.Element {
    const [ name, setName] = useState('')
    const [ destination, setDestination] = useState('')
    const [ startDate, setStartDate] = useState('')
    const [ endDate, setEndDate] = useState('')
    const [ image, setImage] = useState('')
    const [ activities, setActivities] = useState<string[]>([])
    return (
        <div>
            <label htmlFor="neme">name:</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder='enter name' id='name'/>
            <label htmlFor="destination">destination:</label>
            <input type="text" value={destination} onChange={(e) => setDestination(e.target.value)} placeholder='enter destination' id='destination'/>
            <label htmlFor="startDate">startDate:</label>
            <input type="text" value={startDate} onChange={(e) => setStartDate(e.target.value)} placeholder='enter startDate' id='startDate'/>
            <label htmlFor="endDate">endDate:</label>
            <input type="text" value={endDate} onChange={(e) => setEndDate(e.target.value)} placeholder='enter endDate' id='endDate'/>
            <label htmlFor="image">image:</label>
            <input type="text" value={image} onChange={(e) => setImage(e.target.value)} placeholder='enter image' id='image'/>
            <label htmlFor="activities">activities:</label>
            <input type="text" value={activities} onChange={(e) => setActivities(e.target.value?)} placeholder='enter activities' id='activities'/>
        </div>
    )
}