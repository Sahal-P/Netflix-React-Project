import './Nav.css'
import NetflixLogo from '/NetflixLogo.png'
import NetflixAvatar from '/NetflixAvatar.png'
import { useEffect, useState } from 'react'

const Nav = () => {

    const [show, handleShow] = useState()

    const transitionNavBar = ()=>{
        if(window.scrollY>100){
            handleShow(true)
        }else{
            handleShow(false)
        }
    }

    useEffect(()=>{
        window.addEventListener("scroll",transitionNavBar)
        return ()=> window.removeEventListener("scroll",transitionNavBar)
    },[])

  return (
    <div className={`nav ${show && "nav_black"}`}>
        <div className="nav_content">
            <img className='nav_logo' src={NetflixLogo} alt="" />
            <img className='nav_avatar' src={NetflixAvatar} alt="" />
      </div>
    </div>
  )
}

export default Nav
