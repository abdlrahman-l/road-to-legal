import classNames from 'classnames'
import React, { forwardRef, InputHTMLAttributes } from 'react'

const CustomInput = forwardRef((props: InputHTMLAttributes<any>, ref) => {
    return (
      <input
          className={
              classNames(
                  "mt-1 text-sm text-gray-500 bg-stone-50 block w-full rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm h-10 p-3 placeholder:text-gray-300",
                  props?.className
              )
          }
          {...props}
          // @ts-ignore
          ref={ref}
      />
    )
  })

export default CustomInput