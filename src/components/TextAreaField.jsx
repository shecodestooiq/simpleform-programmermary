import React from 'react'

export default function TextAreaField({ label, value, onChange,required }) {
  return (
    <div>
      <label className='lable'>{label}</label>
      <textarea 
     value={value}
     onChange={onChange}
     required={required}
      ></textarea>
    </div>
  )
}
