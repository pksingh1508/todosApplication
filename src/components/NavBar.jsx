import React from 'react'
import { Link } from 'react-router-dom';
const NavBar = () => {
  return (
    <div className='flex px-6 p-2 gap-10 bg-slate-400 text-xl justify-center'>
        <div>
            <Link to="/" >Todo</Link>
        </div>
        <div className='flex gap-9'>
          <Link to='/createTodo'>Create Todo</Link>
          <Link to='/all'>All Todo</Link>
        </div>
    </div>
  )
}

export default NavBar;