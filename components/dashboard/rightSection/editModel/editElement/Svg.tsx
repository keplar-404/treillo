import React from 'react'

export default function Svg({ fill }: { fill:string }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 0V4H1C1 2.9 1.9 2 3 2H6V13C6 13.56 5.56 14 5 14H4V16H12V14H11C10.44 14 10 13.56 10 13V2H13C14.1 2 15 2.9 15 4H16V0H0Z" fill={fill}/>
</svg>
  )
}
