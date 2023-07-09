import React from 'react'
import { useNavigate } from 'react-router-dom';

const Todo = ({title, description, _id, deleteTodo}) => {

  const navigate = useNavigate();

  const deleteCard = () => {
    deleteTodo(_id);
  }

  const updateTodo = () => {
    navigate(`/update/${_id}`);
  }

  return (
    <div className='bg-slate-400 m-3 w-[350px] px-2 py-2 rounded-lg'>
      <p className='text-green-700 font-bold text-2xl'><span className='text-black font-bold font-serif'>Title : </span>{title}</p>
      <p className='text-orange-700 font-bold text-2xl'><span className='text-black font-bold font-serif text-xl'>Description : </span>{description}</p>
      <button className='bg-blue-600 px-3 rounded-lg text-xl font-bold py-1 mt-4 hover:bg-blue-500 transition-all mr-2' onClick={deleteCard}>Delete</button>
      <button className='bg-blue-600 px-3 rounded-lg text-xl font-bold py-1 mt-4 hover:bg-blue-500 transition-all ml-2  ' onClick={updateTodo}>Edit</button>
    </div>
  )
}

export default Todo;