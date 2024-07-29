import React, { useState } from 'react'
import Card from './Components/Card'
import Navbar from './Components/Navbar'

const App = () => {
  const raw = [
    {image:"https://images.unsplash.com/photo-1463438690606-f6778b8c1d10?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" , song:"Sajni" ,artist: "Ram Sampath", added:false},
    {image:"https://images.unsplash.com/photo-1520454125516-134a66d9bf78?q=80&w=2835&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" , song:"Apna Bana Le" ,artist:"Arijit Singh", added:false},
    {image:"https://plus.unsplash.com/premium_photo-1663011373221-9bce9f22261e?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" , song:"Tauba Tauba" ,artist: "Karan Aujla", added:true},
    {image:"https://images.unsplash.com/photo-1505672984986-b7c468c7a134?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" , song:"Tum Hi Ho" ,artist: "Arijit Singh", added:false},
  ]

  const [songData, setSongData] = useState(raw);
  const handleClick = (index) => {
   setSongData((prev)=>{
    return prev.map((item, itemindex)=>{
      if(itemindex === index) return{...item, added: !item.added};
      return item;

    })

   })
  }
  return (
    <div className='w-full h-screen bg-gray-300 text-white'>
      <Navbar data={songData}/>
      <div className='px-10 flex gap-10 mt-16 flex-wrap'>
        {songData.map((obj,index)=>(
          <Card raw={obj} handleClick={handleClick} key={index} index={index} />
        ))}


      </div>
     
    </div>
  )
}

export default App
