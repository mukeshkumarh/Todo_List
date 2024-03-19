import React from 'react'
import Header from './Header'
export default function Layout({chidrent}) {
  return (
    <>
     <Header/>
        <div>
          {chidrent}        
        </div>
    </>
  )
}
