import React from 'react'

const TaskListNumbers = ({data}) => {
  return (
    <div className='flex justify-between gap-5 mt-10 screen'>
        <div className=' w-[45%] px-9 py-6 rounded-xl bg-red-400'>
            <h2 className='font-semibold text-3xl'>{data.taskCounts.newTask}</h2>
            <h3 className='font-medium text-xl'>New Task</h3>
        </div>
        <div className=' w-[45%] px-9 py-6 rounded-xl bg-blue-400'>
            <h2 className='font-semibold text-3xl'>{data.taskCounts.completed}</h2>
            <h3 className='font-medium text-xl'>Completed Task</h3>
        </div>
        <div className=' w-[45%] px-9 py-6 rounded-xl bg-green-400'>
            <h2 className='font-semibold text-3xl'>{data.taskCounts.active}</h2>
            <h3 className='font-medium text-xl'>Accepted Task</h3>
        </div>
        <div className=' w-[45%] px-9 py-6 rounded-xl bg-yellow-400'>
            <h2 className='font-semibold text-3xl'>{data.taskCounts.failed}</h2>
            <h3 className='font-medium text-xl'>Failed Task</h3>
        </div>

    </div>
  )
}

export default TaskListNumbers