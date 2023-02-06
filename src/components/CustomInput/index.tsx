import classNames from 'classnames'
import React, { forwardRef, InputHTMLAttributes } from 'react'

const CustomInput = forwardRef((props: InputHTMLAttributes<any>, ref) => {
    return (
      <input
          className={
              classNames(
                  "mt-1 block w-full rounded-md border-2 border-neutral-200 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm h-10 p-2 placeholder:text-neutral-300",
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