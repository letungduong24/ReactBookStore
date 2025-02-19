import React from 'react'
import Button from './Button'

const Unauthorized = () => {
  return (
    <div>
        <div class="grid h-screen place-content-center bg-white px-4">
          <div class="text-center">
            <h1 class="text-9xl font-black text-gray-200">403</h1>

            <p class="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">J z tr!</p>

            <p class="mt-4 text-gray-500">Bạn không có quyền truy cập.</p>

            <div className="flex justify-center m-3">
            <Button
              name='Về trang chủ'
              href='/'
             />
            </div>
          </div>
        </div>
    </div>
  )
}

export default Unauthorized