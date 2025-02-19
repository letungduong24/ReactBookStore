import React from 'react'

const Field = ({ label, type, name, value, onChange }) => {
  return (
    <div className="form-control flex flex-col w-[90%] md:w-[80%] lg:w-[90%]">
      <label htmlFor={name}>{label}</label>
      <input 
        className='rounded-2xl border-amber-600 focus:border-amber-800 focus:ring-amber-800' 
        name={name} 
        type={type} 
        value={value || ''}
        onChange={onChange} 
      />
    </div>
  )
}

export default Field
