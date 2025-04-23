import Image from 'next/image'
import React from 'react'

function InterviewLink({interview_id, formData}) {
  return (
    <div className='flex flex-col items-center justify-center mt-10'>
        <Image src={'/check.png'} alt='check' width={200} height={200} className='w-[100px] h-[100px]' />
        <h2 className='font-bold text-lg'>Your Ai Interview is ready!</h2>
        <p>share this link with your condidates to start the interview process</p>
    </div>
  )
}

export default InterviewLink