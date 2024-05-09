/* eslint-disable react/prop-types */

const Todo = ( { title, desc, index, deleteTask } ) => {

  return (
    <div className="flex items-center justify-between text-[#111] p-5 bg-slate-300 mx-8 my-4 rounded-xl">
        <div>
            <p className="font-medium text-xl">{title}</p>
            <p className="text-slate-900/50">{desc}</p>
        </div>
        <button onClick={() => deleteTask(index)} className="px-4 py-2 bg-red-400 rounded-xl">Delete</button>
    </div>
  )
}

export default Todo
