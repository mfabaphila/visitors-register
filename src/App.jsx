import { useState } from "react";
import "./index.css"

export default function App(){
  const[unit, setUnit]= useState("")
  const [timeIn, setTimeIn] = useState("");
const [timeOut, setTimeOut] = useState("");
const [plate, setPlate] = useState(""); 
const [date, setDate] = useState("");
const [visitor, setVisitor]=useState("")
const [customUnit, setCustomUnit] = useState("");
const[visitors, setVisitors]= useState(
  JSON.parse(localStorage.getItem("visitor"))||[]
)

const addVisitor = ()=>{
  if(visitor===""){
    return
  }
  const newVisitor ={
    visitor:visitor,
    timeIn:timeIn,
    timeOut:timeOut,
    plate:plate,
    date:date,
    unit:unit
  }
  const updateVisitor = [...visitors, newVisitor]
  setVisitors(updateVisitor)
  localStorage.setItem("visitor", JSON.stringify(updateVisitor))
  setVisitor("")
  setUnit("");
    setTimeIn("");
    setTimeOut("");
    setPlate("");
    setDate("");
}
  return(
    <>
    <h1>Vistors sign in App, don't forget to leave. You don't stay here. We have enough people as it is. Go home please</h1>
    <fieldset>

   <legend>Welcome to our Casa</legend>
    <form className="box" onSubmit={addVisitor}>

      <label htmlFor="Vistor'Name">Name</label>
      <input
      type="text"
      value={visitor}
      placeholder="Enter your full names"
      onChange={(e)=>setVisitor(e.target.value)}
      required/>

       <label htmlFor="date">Date</label>
      <input
      type="date"
      value={date}
      placeholder="Select today's date"
      onChange={(e)=>setDate(e.target.value)}
      required/>

      <label htmlFor="Unit Number">Unit Number</label>
      <select required value={unit} onChange={(e)=>setUnit(e.target.value)}>
        <option value="" selected>Select a Unit number</option>
        <option value="unit 1">Unit 1</option>
        <option value="unit 2">Unit 2</option>
<option value="unit 3">Unit 3</option>
<option value="unit 4">Unit 4</option>
<option value="unit 5">Unit 5</option>
<option value="unit 6">Unit 6</option>
<option value="unit 7">Unit 7</option>
<option value="unit 8">Unit 8</option>
<option value="unit 9">Unit 9</option>
<option value="unit 10">Unit 10</option>
<option value="unit 11">Unit 11</option>
<option value="unit 12">Unit 12</option>
<option value="unit 13">Unit 13</option>
<option value="unit 14">Unit 14</option>
<option value="unit 15">Unit 15</option>
<option value="unit 16">Unit 16</option>
<option value="unit 17">Unit 17</option>
<option value="unit 18">Unit 18</option>
<option value="unit 19">Unit 19</option>
<option value="unit 20">Unit 20</option>
     <option value="Other">Other</option>
      </select>

      {unit === "Other" && (
  <input 
    type="text" 
    placeholder="Type custom unit" 
    value={customUnit} 
    onChange={(e) => setCustomUnit(e.target.value)} 
    required 
  />
)}

    <label htmlFor="TimeIn">Time In</label>
      <input
      type="time"
      value={timeIn}
      placeholder="Select time"
      onChange={(e)=>setTimeIn(e.target.value)}
      required/>

<label htmlFor="timeOut">Time Out</label>
<input
  type="time"
  id="timeOut"
  value={timeOut}
  onChange={(e) => setTimeOut(e.target.value)}
  
/>
<label htmlFor="plate">Plate</label>
<input
  type="text"
  id="plate"
  value={plate}
  onChange={(e) => setPlate(e.target.value)}
  placeholder="Enter plate number"
  required
/>
<button>Add Visitor</button>
    </form>
     </fieldset>
    </>
  )
}