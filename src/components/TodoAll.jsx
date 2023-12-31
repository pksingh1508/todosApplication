import React, { useEffect, useState } from 'react'
import Todo from './Todo';
import toast from 'react-hot-toast';

const TodoAll = () => {
    const [data, setData] = useState([]);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const getAllTodos = async () => {
        setLoading(true);
        const response = await fetch(`https://todoapp-p93i.onrender.com/api/v1/getTodo`,{
            method: 'GET',
        })
        const result = await response.json();
        if(!response.ok) {
            setError(response.error);
        }
        if(response.ok) {
            setLoading(false);
            setError("");
            // console.log(result);
            setData(result);
        }
    }

    useEffect(() => {
        getAllTodos();
    }, [])

    const deleteTodo = async (id) => {
        const response = await fetch(`https://todoapp-p93i.onrender.com/api/v1/deleteTodo/${id}`,{
            method: 'DELETE',
        })
        toast.success("Todo deleted successfully");
        if(!response.ok) {
            setError(response.error);
        }
        if(response.ok) {
            setError("");
            getAllTodos();
        }
    }

  return (
    <div className='w-[100vw] h-full lg:h-[100vh] sm:h-[100vh] bg-slate-300 p-4'>
        {
            error &&
            <div>
                {error}
            </div>
        }
        <div className='text-center w-[100vw] text-xl font-bold font-serif'>All Todos</div>
        <div className='flex flex-wrap'>
            {
                loading ? 
                (
                    <div className='flex w-[100vw] h-[100vh] items-center justify-center'>
                        <div className='spinner'></div>
                    </div>
                ) 
                : (
                        data?.map((todo) => {
                            return <Todo key={todo._id} {...todo} deleteTodo={deleteTodo}/>
                        })
                    
                )
            }
        </div>
    </div>
  )
}

export default TodoAll;
