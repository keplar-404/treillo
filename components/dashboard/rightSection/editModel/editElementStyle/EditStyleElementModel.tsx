import React from 'react'
import TextStyle from './TextStyle'

export default function EditElementStyle() {
  return (
    <div className='h-[20rem] w-[16rem] overflow-y-scroll p-[0.8rem] flex flex-col gap-y-[.9rem] dark:bg-[#101214] bg-[#F2F2F2] rounded-[1rem]'>
      <TextStyle/>
    </div>
  )
}
