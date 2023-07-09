import React from 'react'
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className=' flex justify-center items-center h-[100vh] bg-slate-800 flex-wrap'>
      <div className='lg:w[70vw] sm:w-[50vw] w-[270px] bg-slate-500 p-6 rounded-lg flex flex-col items-center text-white'>
        <p className='text-xl lg:text-4xl font-bold'>Welcome to Todo App</p>
        <p className='text-xl'>This is a Todo app for making your day, Organize your day, for better productivity.</p>
        <button onClick={() => navigate('/createTodo')} className='bg-blue-500 px-3 rounded-lg text-xl py-1 mt-4 hover:scale-x-125 hover:bg-blue-400 transition-all'>Create Todo</button>
      </div>
    </div>
  )
}

export default Home;