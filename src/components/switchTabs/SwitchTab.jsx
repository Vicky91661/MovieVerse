import React, { useState } from 'react'
import './style.scss'

function SwitchTab({ data , onTabChange}) {
    const [selectedTab,setSelectedTab] = useState(0);
    const [left ,setLeft] = useState(0)

    const setActiveTab= (tab,index) =>{
        setLeft(index * 100)
        setTimeout(()=>{
            setSelectedTab(index)
        },300)
        onTabChange(tab, index)
    }

  return (
    <div className='switchingTabs'>
        <div className="tabItems">
            {data.map((tab,index)=>(
                <span className={`tabItem ${selectedTab===index ? "active":""}`} key={index}
                    onClick={() => setActiveTab(tab,index)}
                >{tab}</span>
            ))}
            <span className='movingBg' style={{left:left}}/>
        </div>
    </div>
  )
}

export default SwitchTab