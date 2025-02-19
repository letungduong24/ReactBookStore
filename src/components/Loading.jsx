import React from 'react'

const Loading = () => {
  return (
    <div className="flex justify-center items-center h-screen">
        <div className="flex flex-row gap-2">
            <div className="w-4 h-4 rounded-full bg-amber-600 animate-bounce"></div>
            <div className="w-4 h-4 rounded-full bg-amber-600 animate-bounce" style={{ animationDelay: '-0.3s' }}></div>
            <div className="w-4 h-4 rounded-full bg-amber-600 animate-bounce" style={{ animationDelay: '-0.5s' }}></div>
        </div>
    </div>
  )
}

export default Loading