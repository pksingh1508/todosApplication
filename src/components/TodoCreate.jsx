import React, {useState} from 'react';
import { toast } from "react-hot-toast"
import { useNavigate } from 'react-router-dom';

const TodoCreate = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const submit = async (e) => {
        e.preventDefault();
        const response = await fetch('http://localhost:4000/api/v1/createTodo', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({title, description})
        })

        if(!response.ok) {
            setError(response.error);
        }
        if(response.ok) {
            setError("");
            setTitle("");
            setDescription("");
            toast.success("Todo Submitted successfully");
            navigate('/all');
        }
      }

  return (
    <div className='w-[100vw] h-[100vh] bg-slate-200 flex items-center justify-center text-center'>
        <form onSubmit={submit} className='w-[100vw] flex flex-col items-center'>
        {
            error &&
            <div>
                {error}
            </div>
        }
        <div className='text-center text-xl lg:text-4xl font-bold mb-9'>Create Todos</div>
        <div className='sm:w-[350px] lg:w-[500px] w-[240px] flex flex-col bg-slate-400 p-4 rounded-xl mb-2'>
          <label htmlFor="title" className='text-xl text-slate-800 py-2 font-bold'>Title</label>
          <input type="text" id='title' placeholder='Enter Title...' onChange={(e) => (setTitle(e.target.value))}
            className='rounded-xl px-2 py-2 text-lg font-bold'
          />
        </div>
        <div className='sm:w-[350px] lg:w-[500px] w-[240px] flex flex-col bg-slate-400 p-4 rounded-xl mt-2'>
          <label htmlFor="desc" className='text-xl text-slate-800 py-2 font-bold'>Description</label>
          <input type="text" id='desc' placeholder='Enter Todo...' onChange={(e) => (setDescription(e.target.value))}
            className='rounded-xl px-2 py-2 text-lg font-bold'
          />
        </div>
        <button className='bg-blue-500 text-white px-3 rounded-lg text-xl py-1 mt-4 hover:scale-x-125 hover:bg-blue-400 transition-all' >Submit</button>
      </form>
    </div>
  )
}

export default TodoCreate;