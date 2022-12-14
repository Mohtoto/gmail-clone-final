import React from 'react'

function SidebarOption({Icon , number , title , selected }) {
  return (
    <div className={`sidebarOption ${selected && 'sidebarOption--active'}`}>

        <Icon />
        <h3>{title}</h3> 
        <p>{number}</p>
      


    </div>
  )
}

export default SidebarOption