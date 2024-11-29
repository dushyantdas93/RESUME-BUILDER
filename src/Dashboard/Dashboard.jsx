import React from 'react'
import AddResume from './Component/AddResume'

const Dashboard = () => {
  return (
    <div className='p-10 mg;px-20 lg:px-32'>
      
      <h1 className='font-bold text-3xl'>My Resume</h1>
      <p>Start Creating AI resume to your next job role</p>

      <div className='grid grid-col-2 mg:grid-col-3 lg:grid-col-5 mt-10 '>
<AddResume/>
      </div>
    </div>
  )
}

export default Dashboard