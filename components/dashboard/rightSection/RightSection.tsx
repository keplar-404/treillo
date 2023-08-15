import React from 'react'
import TaskColoumn from './TaskColoumn'
import Task from './Task'

export default function RightSection() {
  return (
    <section className='w-full h-screen overflow-x-scroll flex-center bg-white dark:bg-zinc-950'>
{/* <TaskColoumn/> */}
<Task/>
    </section>
  )
}
