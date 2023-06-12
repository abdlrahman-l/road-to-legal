import React, { ReactNode } from 'react'
import Header from '../Header';
import css from './index.module.scss';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className={css.layout}>
      <Header />
      <div className={css.children}>
        {children}
      </div>
    </div>
  )
}

export default Layout
