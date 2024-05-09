import { useState } from "react"
import Todo from "./Todo"
import { useEffect } from "react"

const TodoWrapper = () => {

    const [todos, setTodos] = useState([])
    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")

    const submitHandler = (e) => {
        e.preventDefault();
        setTodos([...todos, {
            title: title,
            desc: desc
        }])
        console.log(todos)
        setTitle("")
        setDesc("")
    }
    
    useEffect(() => {
        
    }, [])

    const deleteTask = (index) => {
        const filteredTodos = todos.filter((todo, i) => {
            return (
                i !== index
            )
        })
        console.log(filteredTodos)
        setTodos(filteredTodos)
    }

    const defaulttext = () => {
        return (
            <p className="text-center">No Tasks at the moment!</p>
        )
    }

  return (
    <div className="min-h-screen w-screen mx-auto bg-[#111] text-[#fff] ">
      <h1 className="text-5xl text-center py-10 font-medium">Get Things Done!</h1>
      <div className=" flex min-h-[465px]">
        <form onSubmit={submitHandler} className="flex flex-col items-center text-[#111] justify-center w-[70%] p-10 gap-6 ">
            <h1 className="text-3xl font-medium text-[#fff]">Add Task</h1>
            <input onChange={(e) => setTitle(e.target.value)} value={title} className="px-4 py-2 rounded-xl w-[80%]" type="text" placeholder="Enter Todo Title here:" />
            <textarea onChange={(e) => setDesc(e.target.value)} value={desc} className="px-4 py-2 rounded-xl w-[80%]" placeholder="Enter Todo Description here:" />
            <button className="px-4 py-2 bg-slate-500 rounded-xl font-medium text-white" type="submit">Add Todo</button>
        </form>
        <div className="w-full">
            <h1 className="text-center font-medium text-3xl m-6">Your Tasks</h1>
            {
                todos.length === 0 ? (
                    defaulttext()
                 ) : (
                    todos.map((todo, index) => (
                        <Todo key={index} title={todo.title} desc={todo.desc} deleteTask={deleteTask} index={index} />
                    ))
                 )
            }
        </div>
      </div>
    </div>
  )
}

export default TodoWrapper
