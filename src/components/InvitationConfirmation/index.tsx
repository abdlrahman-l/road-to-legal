import React, { createRef, useRef, useState } from 'react'
import CustomInput from '../CustomInput'
import Dropdown from '../Dropdown'
import classes from './index.module.scss'
import classNames from 'classnames'

const confirmationOptions = [
    { name: 'Saya akan hadir' },
    { name: 'Saya masih ragu' },
    { name: 'Maaf, saya tidak bisa hadir' }
] 

const InvitationConfirmation = () => {
  const [selected, setSelected] = useState<Record<string,string>>(confirmationOptions[0])
  const formRef = useRef({
    nama: createRef<HTMLInputElement>(),
    jumlah: createRef<HTMLInputElement>(),
    ucapan: createRef<HTMLTextAreaElement>(),
  });

  const onSubmit = () => {
    const { nama, jumlah, ucapan } = formRef.current;
  }

  return (
    <div className={classNames('card m-2 max-w-lg', classes['confirmation-form'])}>
        <div className='grid gap-3'>
            <CustomInput name='nama' placeholder='Nama' ref={formRef.current.nama} />
            <CustomInput type='number' name='jumlah' placeholder='Jumlah yang akan hadir' ref={formRef.current.jumlah}/>
            <textarea ref={formRef.current.ucapan} name='ucapan' placeholder='Ucapan' maxLength={255} className='text-sm text-gray-500 bg-stone-50 block w-full rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm h-20 p-3 placeholder:text-gray-300' />
            <Dropdown data={confirmationOptions} selected={selected} setSelected={setSelected} />
            <input onClick={onSubmit} className='cursor-pointer bg-orange-50 h-10 rounded-md text-sm text-amber-700 font-semibold' type='submit' />
        </div>
    </div>
  )
}

export default InvitationConfirmation