import React from 'react'
import WelcomeContainer from './_components/WelcomeContainer'
import CreateOptions from './_components/CreateOptions'
import LatestInterviewsList from './_components/LatestInterviewsList'

function DashBoard() {
  return (
    <div>
       {/*<WelcomeContainer />*/}
       <h2 className='py-3 font-bold text-2xl'>Dashboard</h2>
       <CreateOptions />

       <LatestInterviewsList />
    </div>
  )
}

export default DashBoard