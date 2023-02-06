import React, { ReactNode } from 'react'
import css from './index.module.scss';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className={css.layout}>{children}</div>
  )
}

export default Layout
