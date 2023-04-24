import React from 'react'
import '../styles/topbar.scss'
import { useParams } from 'react-router-dom'

const Topbar = ({menuOpen, setMenuOpen}) => {

const params = useParams()
console.log(params)

  return (
    <>
    {params !==  ''  ? (
    <div className={'topbar ' + (menuOpen && 'active')}>
        <div className='wrapper'>
            <div className='left'></div>
            <div className='right'>
                <div className='hamburger' onClick={() =>setMenuOpen(!menuOpen)}>
                    <span className='line 1'></span>
                    <span className='line 2'></span>
                    <span className='line 3'></span>
                </div>
            </div>
        </div>
    </div>
       ) : (
        null
       )}
    </>
  )
}

export default Topbar