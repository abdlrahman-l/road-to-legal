import React from 'react'
import CustomInput from '../CustomInput'
import Dropdown from '../Dropdown'

const confirmationOptions = [
    { name: 'Saya akan hadir' },
    { name: 'Saya masih ragu' },
    { name: 'Maaf, saya tidak bisa hadir' }
] 

const InvitationConfirmation = () => {
  return (
    <form className='card m-2 max-w-lg'>
        <div className='grid gap-3'>
            <CustomInput name='nama' placeholder='Nama' />
            <CustomInput name='jumlah' placeholder='Jumlah yang akan hadir' />
            <textarea name='ucapan' placeholder='Ucapan' maxLength={255} className='text-sm text-gray-500 bg-stone-50 block w-full rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm h-20 p-3 placeholder:text-gray-300' />
            <Dropdown data={confirmationOptions} />
            <input className='bg-orange-50 h-10 rounded-md text-sm text-amber-700 font-semibold'  type='submit' />
        </div>
    </form>
  )
}

export default InvitationConfirmation