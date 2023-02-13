import React, { ReactNode } from 'react'
import Header from '../Header';
import css from './index.module.scss';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className={css.layout}>
      <Header />
      {children}
    </div>
  )
}

export default Layout
