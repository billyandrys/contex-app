import React from 'react'

export const Navbar = () => {
  const user = { name: null}
  return (

    <nav className='navbar navbar-dark bg-dark mb-4'>
      <div className='container'>
      <span className='navbar-brand'>
        <h2>{user.name ? `Welcom ${user.name}` : 'welcom'}</h2>
      </span>
      {user.name ?
        <button className='btn btn-primary'>Sign out</button>
        :
        <button className='btn btn-primary'>Sign in</button>  
      }
      
      
      </div>
    </nav>
  )
}
