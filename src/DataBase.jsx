import React from 'react'

function DataBase() {
  return (
    <div>
        <header className='header'>
            <h2>RECRUITMENT UPDATE</h2>
        </header> 
            <select name="cars" id="cars">
        <option value="all">All</option>
        <option value="today">Today</option>
        <option value="yesterday">Yesterday</option>
        <option value="month">This Month</option>
      </select> 
    </div>
  )
}

export default DataBase