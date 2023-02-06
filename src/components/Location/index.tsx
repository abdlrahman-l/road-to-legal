import { useMediaQuery } from '@manskuy/grid'
import React from 'react'
import style from './index.module.scss'

const Location = () => {
  const isMobile = !useMediaQuery('TabletAndUp')
  return (
    <div className={style.map} dangerouslySetInnerHTML={{ __html: `
        <iframe width="${isMobile ? 300 : 600}" height="${isMobile ? 300 : 400}" id="gmap_canvas" src="https://maps.google.com/maps?q=HRMW+8X4,%20Jl.%20Abd%20Rosyid,%20Sukamaju,%20Kec.%20Cilodong,%20Kota%20Depok,%20Jawa%20Barat%2016415&t=&z=17&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><br>
    `}} />
  )
}

export default Location