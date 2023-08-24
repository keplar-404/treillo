import React from 'react'
import { useProperty } from '@/lib/stateManage/globalState'

export default function EmptyPreview({ id }: { id: number }) {
  const height = useProperty(state=>state.propertyForComponent)?.filter(data=> data.idforPreviewElement === id)?.[0]?.height ?? 0;
  return (
    <div className='w-full' style={{ height: height }}>
     
    </div>
  )
}
