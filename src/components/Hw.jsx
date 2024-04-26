import React, { useState } from 'react'
import InputField from './InputField'
import TextAreaField from './TextAreaField'
import'../assets/style.css'

export default function Hw() {
    const [name ,setName] = useState()
    const [email ,setEmail] = useState()
    const [mesg ,setMesg] = useState()
    const handerSubmit= (e) => {
        e.preventDefault();
        alert("the form has been submitted ")
    }
  return (
    <div className='home'>
    <form onSubmit={handerSubmit}>
    <InputField 
      lable="Name"
      value={name} 
      onChange = {e=>setName(e.target.value)}
      required="required"
      />
       <InputField 
       lable="Email"
      value={email} 
      onChange = {e=>setEmail(e.target.value)}
      required="required"
      />
      <TextAreaField 
      value={mesg}
      label="Message " 
      onChange={e=>setMesg(e.target.value)}
      required="required"
      />
      <input type="submit" value="Submit"/>
    </form>
    </div>
  )
}
