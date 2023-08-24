import React from 'react'
import { useProperty } from '@/lib/stateManage/globalState'
export default function DeviderPreview({ id }: { id:number }) {
  const components = useProperty(state=> state.propertyForComponent)
  const sliderVale = components?.filter(data=> data.idforPreviewElement === id)[0]?.slider
  return (
    <div className='w-full'>
      <hr className='bg-white h-[1px]' style={{ width: `${sliderVale}rem` }} />
    </div>
  )
}
