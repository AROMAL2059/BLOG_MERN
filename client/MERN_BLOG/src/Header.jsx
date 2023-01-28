import React from 'react'
import { useContext } from 'react'
import { useEffect,useState } from 'react'
import { Link } from 'react-router-dom'
import Post from './Post'
import { UserContext } from './UserContext'

const Header = () => {
  const{setUserInfo,userInfo}=useContext(UserContext)
  
  useEffect(()=>{
    fetch('http://localhost:4000/profile',{
      credentials:'include',
    }).then(response=>{ response.json().then(userInfo=>{
      setUserInfo(userInfo)

    })});
  },[])

  function logout(){
    fetch('http://localhost:4000/logout',{
      credentials:'include',
      method:'POST',
    });
    setUserInfo(null)
  }

  const username=userInfo?.username;
  return (
    <div>
     <header>
     <Link to={'/'} className="logo">MY_BLOG</Link>
    <nav>
      {username&&(
        <>
        <span>HELLOO,{username}</span>
        <Link to="/create">Create new post</Link>
        <a onClick={logout}>Logout</a>
        </>
      )}
      {!username&&(
        <>
         <Link to={'/login'}>Login</Link>
      <Link to={'/register'}>Register</Link>
        </>
      )}
     
    </nav>

  </header></div>
  )
}

export default Header