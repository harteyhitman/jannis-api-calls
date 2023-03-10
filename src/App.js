import React, { useEffect, useState } from 'react'
import DataBase from './DataBase'
import Button from './Button'
import './App.css'

function App() {
  const [janisData, setJanisData] = useState([])

  useEffect(()=>{
    const fetchData = ()=>{
      fetch('https://backend.thenobodyknowsit.club/getReruits')
      .then((res)=>res.json())
      .then((data) => setJanisData(data))
    }
    fetchData()

  },[])


  console.log(janisData)

  return (
    <div className='cotainer'>
      <DataBase />
      <Button />
      <h2 className='total'>{janisData?.total}</h2>
      <div className="wrap">
        {janisData.recruits?.map((janis)=> (
          <div key={janis.id} className='collect-data'>
            <p className='no'>{janis.id}</p>
            <p>{janis.name}</p>
            <p>{janis.email}</p>
            <p>{janis.phone}</p>
            <p>{janis.mediaChannel}</p>
            <p>{janis.yearsOfExperience}</p>
            <p>{janis.isWordpress}</p>
            <p>{janis.isLaptop}</p>
            <p>{janis.fixCampaign}</p>
            <p>{janis.mediBuyingTeams}</p>
            <p>{janis.videoUrl}</p>
            <p>{janis.createdAt}</p>
            <p>{janis.status}</p>
          </div>
        ))}
      </div>
    </div>
    
  )
}

export default App