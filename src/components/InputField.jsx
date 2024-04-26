import React from 'react'

export default function InputField({lable,type,value , onChange,required }) {
  return (
    <div>
      <label className='lable'>{lable}</label>
      <input 
      type={type}
      value={value}
       onChange={onChange}
       required={required}
      /> <br />
      </div>
     )
}
