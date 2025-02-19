import React from 'react'

const ButtonSubmit = ({name}) => {
  return (
    <div className="w-fit">
      <button className="bg-amber-600 text-white cursor-pointer hover:text-white transition duration-150 hover:bg-red-600 w-24 inline-block p-2 rounded-2xl" type="submit">
          {name}
      </button>
    </div>
  )
}

export default ButtonSubmit