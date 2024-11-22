import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

const TaskList = ({data}) =>{
  return (
    <div id='tasklist' className=' flex items-center gap-5 justify-start flex-nowrap overflow-x-auto h-[55%] w-full py-5 mt-10'>
        {
            data.tasks.map((elem, idx) => {
                // console.log(elem)
                if(elem.active){
                    return <AcceptTask key={idx} data = {elem}/>
                }
                if(elem.newTask){
                    return <newTask key={idx} data = {elem}/>
                }
                if(elem.completed){
                    return  <CompleteTask key={idx} data = {elem}/>
                }
                if(elem.failed){
                    return  <CompleteTask key={idx} data = {elem}/>
                }
            })
        }
    </div>

    
  )
}


export default TaskList