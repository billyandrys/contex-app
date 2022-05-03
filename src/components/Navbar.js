import React, {useContext} from 'react'
import Usercontext from '../contexts/UserContext';

export const Navbar = () => {
  //const user = { name: null}

  const {user, login, logout} = useContext(Usercontext)
    console.log('Navbar')
    return (

    <nav className='navbar navbar-dark bg-dark mb-4'>
      <div className='container'>
      <span className='navbar-brand'>
        <h2>{user? `Welcom ${user.name}` : 'Welcom'}</h2>
      </span>
      {user ?
        <button  className='btn btn-primary' onClick={logout}>Sign out</button>
        :
        <button  className='btn btn-primary' onClick= {login}>Sign in</button>  
      }
      
      
      </div>
    </nav>
  )
}
